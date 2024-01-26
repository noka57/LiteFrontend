<script>
	import { List, Li, Heading,Button, Modal, Spinner} from 'flowbite-svelte';
	import { sessionidG } from "./sessionG.js";
	import { 
			LanConfigChangedLog, 
			ChangedLANConfig,
			NAT_LoopBack_ConfigChangedLog, 
  		NAT_VS_ConfigChangedLog, 
  		NAT_VC_ConfigChangedLog, 
  		NAT_Dmz_ConfigChangedLog,
  		ChangedNATConfig,
  		Firewall_General_ConfigChangedLog,
    	Firewall_IPFilter_ConfigChangedLog,
    	Firewall_MACFilter_ConfigChangedLog,
    	ChangedFirewallConfig,
    	StaticRouteConfigChangedLog,
      ChangedStaticRouteConfig,
      ChangedMaintenanceConfig,
  		MaintenanceConfigChangedLog,
  		OperationConfigChangedLog,
  		ChangedOperationConfig,
  		DockerConfigChangedLog,
      ChangedDockerConfig,
      WAN_CWAN1_BASIC_ConfigChangedLog,
    	WAN_CWAN1_Advanced_ConfigChangedLog,
    	WAN_CWAN1_SimPolicy_ConfigChangedLog,
    	WAN_CWAN1_GLink_ConfigChangedLog,
    	WAN_EWAN1_Basic_ConfigChangedLog,
    	WAN_EWAN1_EWLAP_ConfigChangedLog,
    	WAN_RedundancyPolicy_ConfigChangedLog,
    	WAN_FareSavingPolicy_ConfigChangedLog,
    	ChangedWANConfig,
    	IPsec_Responder_Conn_ConfigChangedLog,
    	IPsec_Initiator_Conn_General_ConfigChangedLog,
    	IPsec_Initiator_Conn_Subnet_ConfigChangedLog,
    	IPsec_Basic_ConfigChangedLog,
    	ChangedIPsecConfig,
	    OpenVPN_Client_Advanced_FO_ConfigChangedLog,
	    OpenVPN_Client_Advanced_RNA_ConfigChangedLog,
	    OpenVPN_Client_Advanced_PSK_ConfigChangedLog,
	    OpenVPN_Client_Conn_ConfigChangedLog,
	    OpenVPN_Server_Advanced_CCD_ConfigChangedLog,
	    OpenVPN_Server_Advanced_PSK_ConfigChangedLog,
	    OpenVPN_Server_Conn_ConfigChangedLog,
	    OpenVPN_Basic_ConfigChangedLog,
	    ChangedOpenVPNConfig,
	    GenericMQTTConfigChangedLog,
    	ChangedGenericMQTTConfig,
    	RemoteServiceConfigChangedLog,
    	ChangedRemoteServiceConfig,
    	PortConnection_LAN_ConfigChangedLog,
    	PortConnection_COM_ConfigChangedLog,
    	ChangedPortConnectionConfig,
    	Certificate_Settings_ConfigChangedLog,
    	ChangedCertificateConfig,
    	ModbusGateway_TtR_ConfigChangedLog,
	    ModbusGateway_RtT_ConfigChangedLog,
	    ModbusGateway_RtR_ConfigChangedLog,
	    ModbusGateway_TtT_ConfigChangedLog,
	    ModbusVariable_Slave_ConfigChangedLog,
	    ModbusVariable_Master_ConfigChangedLog,
	    ModbusTCP_Slave_ConfigChangedLog,
	    ModbusTCP_Master_ConfigChangedLog,
	    ModbusRTU_Slave_ConfigChangedLog,
	    ModbusRTU_Master_ConfigChangedLog,
	    ChangedModbusConfig,
      SDatalogger_MonitorMode_Cloud_ConfigChangedLog,
      SDatalogger_MonitorMode_Edge_ConfigChangedLog,
      SDatalogger_ProxyMode_Cloud_ConfigChangedLog,
      SDatalogger_ProxyMode_Edge_ConfigChangedLog,
      SDatalogger_General_ConfigChangedLog,
      ChangedSDataLoggerConfig,
      EventEngine_ActionLINE_ConfigChangedLog,
      EventEngine_ActionMQTT_ConfigChangedLog,
      EventEngine_ActionTCPMsg_ConfigChangedLog,
      EventEngine_ActionModbus_ConfigChangedLog,
      EventEngine_ActionDO_ConfigChangedLog,
      EventEngine_ActionEmail_ConfigChangedLog,
      EventEngine_ActionSMS_ConfigChangedLog,
      EventEngine_TriggerMQTT_ConfigChangedLog,
      EventEngine_TriggerTCPMsg_ConfigChangedLog,
      EventEngine_TriggerModbus_ConfigChangedLog,
      EventEngine_TriggerDI_ConfigChangedLog,
      EventEngine_TriggerSMS_ConfigChangedLog,
      EventEngine_General_ConfigChangedLog,
      ChangedEventEngineConfig
			} from "./configG.js"
	let color="text-blue-600 dark:text-gray-400";
	let defaultModal = false;
  let uploadconfigIsValid =1;
  let CheckedConfigInvalid=0;

  let lan_data="";
  let nat_data="";
  let firewall_data="";
  let static_route_data="";
  let maintenance_data="";
  let operation_data="";
  let docker_data="";
  let wan_data="";
  let ipsec_data="";
  let openvpn_data="";
  let generic_mqtt_data="";
  let remote_service_data="";
  let port_connection_data="";
  let certificate_data="";
  let modbus_data="";
  let sdata_logger_data="";
  let event_engine_data="";

	let sessionid;
  let sessionBinary;
  let ContentLAN; 
  let lanBinary=null;
  let LANchangedValues = [];


  let ContentNAT; 
  let natBinary=null;
  let NAT_loopback_changedValues =[];
  let NAT_virtualServer_changedValues =[];  	
  let NAT_virtualComputer_changedValues =[];
  let NAT_dmz_changedValues =[];

  let ContentFirewall; 
  let firewallBinary=null;
  let Firewall_general_changedValues = [];
  let Firewall_ipfilter_changedValues = [];
  let Firewall_macfilter_changedValues = [];

  let ContentStaticR;
  let staticRBinary=null;
  let staticR_changedValues = [];

  let ContentMaintenance;
  let MaintenanceBinary=null;
  let maintenance_changedValues = [];

  let ContentOperation;
  let OperationBinary=null;
  let operation_changedValues = [];


  let ContentDocker;
  let DockerBinary=null;
  let docker_changedValues = [];


  let ContentWan;
  let WanBinary=null;
  let cwan1_basic_changedValues = [];
  let cwan1_advanced_changedValues = [];
  let cwan1_simpolicy_changedValues = [];
  let cwan1_glink_changedValues = [];
  let ewan1_basic_changedValues = [];
  let ewan1_ewlap_changedValues = [];
  let redundancy_policy_changedValues = [];
  let faresaving_policy_changedValues = [];  


  let ContentIPsec;
  let IPsecBinary=null;
  let basic_changedValues = [];
  let responder_conn_changedValues=[];
  let initiator_conn_general_changedValues=[];
  let initiator_conn_subnet_changedValues=[];


  let ContentOpenVPN;
  let OpenVPNBinary=null;
  let openvpn_basic_changedValues = [];
  let openvpn_server_conn_changedValues=[];
  let openvpn_client_conn_changedValues=[];
  let openvpn_server_advanced_ccd_changedValues=[];
  let openvpn_server_advanced_psk_changedValues=[];
  let openvpn_client_advanced_psk_changedValues=[];
  let openvpn_client_advanced_rna_changedValues=[];
  let openvpn_client_advanced_fo_changedValues=[];

  let ContentGenericMQTT;
  let GenericMQTTBinary=null;
  let generic_mqtt_changedValues=[];


  let ContentRemoteService;
  let RemoteServiceBinary=null;
  let remote_service_changedValues=[];


  let ContentPortConnection;
  let PortConnectionBinary=null;
  let port_connection_lan_changedValues = [];
  let port_connection_com_changedValues = [];

  let ContentCertificate;
  let CertificateBinary=null;
  let certificate_settings_changedValues = [];

  let ContentModbus;
  let ModbusBinary=null;
  let modbus_gateway_TtR_changedValues=[];
  let modbus_gateway_RtT_changedValues=[];
  let modbus_gateway_RtR_changedValues=[];
  let modbus_gateway_TtT_changedValues=[];

  let modbus_variable_master_changedValues=[];
  let modbus_variable_slave_changedValues=[];
  let modbus_tcp_master_changedValues=[];
  let modbus_tcp_slave_changedValues=[];
  let modbus_rtu_master_changedValues=[];
  let modbus_rtu_slave_changedValues=[];



  let ContentSDataLogger;
  let SDataLoggerBinary=null;
  let sdata_logger_general_changedValues = [];
  let sdata_logger_proxy_edge_changedValues = [];
  let sdata_logger_proxy_cloud_changedValues = [];
  let sdata_logger_monitor_edge_changedValues = [];
  let sdata_logger_monitor_cloud_changedValues = [];


  let ContentEventEngine;
  let EventEngineBinary=null;
  let event_engine_general_changedValues = [];
  let event_engine_trigger_sms_changeValues=[];
  let event_engine_trigger_di_changeValues=[];
  let event_engine_trigger_modbus_changeValues=[];
  let event_engine_trigger_tcpmsg_changeValues=[];
  let event_engine_trigger_mqtt_changeValues=[];
  let event_engine_action_sms_changeValues=[];
  let event_engine_action_email_changeValues=[];
  let event_engine_action_do_changeValues=[];
  let event_engine_action_modbus_changeValues=[];
  let event_engine_action_tcpmsg_changeValues=[];
  let event_engine_action_mqtt_changeValues=[];
  let event_engine_action_line_changeValues=[];
  let SetCount=0;
  let SetCountOK=0;
  let AllRestartFinished=0;



  function closeModal()
  {
    defaultModal = false;
  }


	sessionidG.subscribe(val => {
	     sessionid = val;
	});

	ChangedLANConfig.subscribe(val => {
      lan_data = val;
  });

  ChangedNATConfig.subscribe(val => {
      nat_data = val;
  });


  ChangedFirewallConfig.subscribe(val => {
      firewall_data = val;
  });

  ChangedStaticRouteConfig.subscribe(val => {
      static_route_data = val;
  });

  ChangedMaintenanceConfig.subscribe(val => {
      maintenance_data = val;
  });

  ChangedOperationConfig.subscribe(val => {
      operation_data = val;
  });

  ChangedDockerConfig.subscribe(val => {
      docker_data = val;
  });


  ChangedWANConfig.subscribe(val => {
      wan_data = val;
  }); 

  ChangedIPsecConfig.subscribe(val => {
      ipsec_data = val;
  });

  ChangedOpenVPNConfig.subscribe(val => {
      openvpn_data = val;
  });

  ChangedGenericMQTTConfig.subscribe(val => {
      generic_mqtt_data = val;
  }); 

  ChangedRemoteServiceConfig.subscribe(val => {
      remote_service_data = val;
  });

  ChangedPortConnectionConfig.subscribe(val => {
      port_connection_data = val;
  });

  ChangedCertificateConfig.subscribe(val => {
      certificate_data = val;
  });

  ChangedModbusConfig.subscribe(val => {
      modbus_data = val;
  });


  ChangedSDataLoggerConfig.subscribe(val => {
      sdata_logger_data = val;
  });

  ChangedEventEngineConfig.subscribe(val => {
      event_engine_data = val;
  });

  EventEngine_General_ConfigChangedLog.subscribe(val => {
      event_engine_general_changedValues = val;
  });

  EventEngine_TriggerSMS_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_sms_changeValues = val;
  });

  EventEngine_TriggerDI_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_di_changeValues = val;
  });

  EventEngine_TriggerModbus_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_modbus_changeValues = val;
  });

  EventEngine_TriggerTCPMsg_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_tcpmsg_changeValues = val;
  });
  
  EventEngine_TriggerMQTT_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_mqtt_changeValues = val;
  });

  EventEngine_ActionSMS_ConfigChangedLog.subscribe(val => {
      event_engine_action_sms_changeValues = val;
  });

  EventEngine_ActionEmail_ConfigChangedLog.subscribe(val => {
      event_engine_action_email_changeValues = val;
  });

  EventEngine_ActionDO_ConfigChangedLog.subscribe(val => {
      event_engine_action_do_changeValues = val;
  }); 


  EventEngine_ActionModbus_ConfigChangedLog.subscribe(val => {
      event_engine_action_modbus_changeValues = val;
  });

  EventEngine_ActionTCPMsg_ConfigChangedLog.subscribe(val => {
      event_engine_action_tcpmsg_changeValues = val;
  });

  EventEngine_ActionMQTT_ConfigChangedLog.subscribe(val => {
      event_engine_action_mqtt_changeValues = val;
  });

  EventEngine_ActionLINE_ConfigChangedLog.subscribe(val => {
      event_engine_action_line_changeValues = val;
  });

  SDatalogger_General_ConfigChangedLog.subscribe(val => {
      sdata_logger_general_changedValues = val;
  });

  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_edge_changedValues = val;
  });

  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_cloud_changedValues = val;
  });


  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_edge_changedValues = val;
  });

  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_cloud_changedValues = val;
  });


  Certificate_Settings_ConfigChangedLog.subscribe(val => {
      certificate_settings_changedValues = val;
  });


  ModbusGateway_TtR_ConfigChangedLog.subscribe(val => {
        modbus_gateway_TtR_changedValues = val;
    });
  ModbusGateway_RtT_ConfigChangedLog.subscribe(val => {
        modbus_gateway_RtT_changedValues = val;
    });
  ModbusGateway_RtR_ConfigChangedLog.subscribe(val => {
        modbus_gateway_RtR_changedValues = val;
    });
  ModbusGateway_TtT_ConfigChangedLog.subscribe(val => {
        modbus_gateway_TtT_changedValues = val;
    });

  ModbusVariable_Slave_ConfigChangedLog.subscribe(val => {
      modbus_variable_slave_changedValues = val;
  });

  ModbusVariable_Master_ConfigChangedLog.subscribe(val => {
      modbus_variable_master_changedValues = val;
  });

  ModbusTCP_Slave_ConfigChangedLog.subscribe(val => {
      modbus_tcp_slave_changedValues = val;
  });
  ModbusTCP_Master_ConfigChangedLog.subscribe(val => {
      modbus_tcp_master_changedValues = val;
  });

  ModbusRTU_Slave_ConfigChangedLog.subscribe(val => {
      modbus_rtu_slave_changedValues = val;
  });

  ModbusRTU_Master_ConfigChangedLog.subscribe(val => {
      modbus_rtu_master_changedValues = val;
  });

  PortConnection_LAN_ConfigChangedLog.subscribe(val => {
    port_connection_lan_changedValues = val;
  });

  PortConnection_COM_ConfigChangedLog.subscribe(val => {
    port_connection_com_changedValues = val;
 	});


  RemoteServiceConfigChangedLog.subscribe(val => {
      remote_service_changedValues = val;
  });


  GenericMQTTConfigChangedLog.subscribe(val => {
      generic_mqtt_changedValues = val;
  });


  OpenVPN_Client_Advanced_PSK_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_psk_changedValues = val;
  });

  OpenVPN_Client_Advanced_RNA_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_rna_changedValues = val;
  });

  OpenVPN_Client_Advanced_FO_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_fo_changedValues = val;
  });

  OpenVPN_Client_Conn_ConfigChangedLog.subscribe(val => {
      openvpn_client_conn_changedValues= val;
  });

  OpenVPN_Server_Advanced_CCD_ConfigChangedLog.subscribe(val => {
      openvpn_server_advanced_ccd_changedValues= val;
  });

  OpenVPN_Server_Advanced_PSK_ConfigChangedLog.subscribe(val => {
      openvpn_server_advanced_psk_changedValues= val;
  });

  OpenVPN_Server_Conn_ConfigChangedLog.subscribe(val => {
      openvpn_server_conn_changedValues= val;
  });

  OpenVPN_Basic_ConfigChangedLog.subscribe(val => {
      openvpn_basic_changedValues= val;
  });


  IPsec_Responder_Conn_ConfigChangedLog.subscribe(val => {
      responder_conn_changedValues = val;
  });

  IPsec_Initiator_Conn_General_ConfigChangedLog.subscribe(val => {
      initiator_conn_general_changedValues = val;
  });

  IPsec_Initiator_Conn_Subnet_ConfigChangedLog.subscribe(val => {
      initiator_conn_subnet_changedValues = val;
  });

  IPsec_Basic_ConfigChangedLog.subscribe(val => {
      basic_changedValues = val;
  });


  WAN_CWAN1_BASIC_ConfigChangedLog.subscribe(val => {
      cwan1_basic_changedValues = val;
  });

  WAN_CWAN1_Advanced_ConfigChangedLog.subscribe(val => {
      cwan1_advanced_changedValues = val;
  });

  WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe(val => {
      cwan1_simpolicy_changedValues = val;
  });

  WAN_CWAN1_GLink_ConfigChangedLog.subscribe(val => {
      cwan1_glink_changedValues = val;
  });

  WAN_EWAN1_Basic_ConfigChangedLog.subscribe(val => {
      ewan1_basic_changedValues = val;
  });

  WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe(val => {
      ewan1_ewlap_changedValues = val;
  });

  WAN_RedundancyPolicy_ConfigChangedLog.subscribe(val => {
      redundancy_policy_changedValues = val;
  });

  WAN_FareSavingPolicy_ConfigChangedLog.subscribe(val => {
      faresaving_policy_changedValues = val;
  });


  LanConfigChangedLog.subscribe(val => {
    	LANchangedValues=val;
  });


	NAT_LoopBack_ConfigChangedLog.subscribe(val => {
	  	NAT_loopback_changedValues = val;

	});

	NAT_VC_ConfigChangedLog.subscribe(val => {
	    NAT_virtualComputer_changedValues = val;
	});

	NAT_VS_ConfigChangedLog.subscribe(val => {
	    NAT_virtualServer_changedValues = val; 	
	});

	NAT_Dmz_ConfigChangedLog.subscribe(val => {
	    NAT_dmz_changedValues = val;
	});

 	Firewall_General_ConfigChangedLog.subscribe(val => {
      Firewall_general_changedValues = val;
  });

  Firewall_IPFilter_ConfigChangedLog.subscribe(val => {
      Firewall_ipfilter_changedValues = val;

  });

  Firewall_MACFilter_ConfigChangedLog.subscribe(val => {
     Firewall_macfilter_changedValues = val;
  });

 	StaticRouteConfigChangedLog.subscribe(val => {
      staticR_changedValues = val;
  });  

  MaintenanceConfigChangedLog.subscribe(val => {
      maintenance_changedValues = val;
  });

  OperationConfigChangedLog.subscribe(val => {
      operation_changedValues = val;
  });


  DockerConfigChangedLog.subscribe(val => {
      docker_changedValues = val;
  });



 	async function SetThenPostReboot () {
    
    const res = await fetch(window.location.origin+"/PostReboot", {
        method: 'POST',
        body: sessionBinary
    })

    	if (res.status == 200)
    	{
        console.log("reboot command sent\r\n");
    	}
   }

	async function SetLANData() {
	    const res = await fetch(window.location.origin+"/SetLanData", {
	      method: 'POST',
	      body: ContentLAN
	    })

	  if (res.status == 200)
	  {
	  	console.log("set lan data OK\r\n");
	  	SetCountOK++;
      let applied_new_lan_data= JSON.parse(JSON.stringify(lan_data));
      lanConfig.set(applied_new_lan_data);

	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
        //AllRestartFinished=1;
	  	}
	  }
	};

	async function SetNATData() {
	    const res = await fetch(window.location.origin+"/SetNATData", {
	      method: 'POST',
	      body: ContentNAT
	    })

	  if (res.status == 200)
	  {
	  	console.log("set nat data OK\r\n");
	  	SetCountOK++;

      let applied_new_nat_data= JSON.parse(JSON.stringify(nat_data));
      natConfig.set(applied_new_nat_data);
	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	};

	async function SetFirewallData() {
	    const res = await fetch(window.location.origin+"/SetFirewallData", {
	      method: 'POST',
	      body: ContentFirewall
	    })

	  if (res.status == 200)
	  {
	  	console.log("set firewall data OK\r\n");
	  	SetCountOK++;

      let applied_new_firewall_data= JSON.parse(JSON.stringify(firewall_data));
      firewallConfig.set(applied_new_firewall_data);

	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	};

	async function SetStaticRData() 
	{
	    const res = await fetch(window.location.origin+"/SetStaticRdata", {
	      method: 'POST',
	      body: ContentStaticR
	    })

	  if (res.status == 200)
	  {
	  	console.log("set static route data OK\r\n");
	  	SetCountOK++;


      let applied_new_staticR_data= JSON.parse(JSON.stringify(static_route_data));
      staticrouteConfig.set(applied_new_staticR_data);

	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	};

	async function SetMaintenanceData()
	{
	  const res = await fetch(window.location.origin+"/SetmaintenanceData", {
	    method: 'POST',
	    body: ContentMaintenance
	   })

	  if (res.status == 200)
	  {
	  	console.log("set maintenance data OK\r\n");
	  	SetCountOK++;


      let applied_new_maintenance_data= JSON.parse(JSON.stringify(maintenance_data));
      maintenanceConfig.set(applied_new_maintenance_data);

	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	}  

	async function SetOperationData()
	{
	  const res = await fetch(window.location.origin+"/SetOperationdata", {
	    method: 'POST',
	    body: ContentOperation
	   })

	  if (res.status == 200)
	  {
	  	console.log("set operation data OK\r\n");
	  	SetCountOK++;


      let applied_new_operation_data= JSON.parse(JSON.stringify(operation_data));
      operationConfig.set(applied_new_operation_data);


	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	} 

	async function SetDockerData()
	{
	  const res = await fetch(window.location.origin+"/SetDockerdata", {
	    method: 'POST',
	    body: ContentDocker
	   })

	  if (res.status == 200)
	  {
	  	console.log("set docker data OK\r\n");
	  	SetCountOK++;

      let applied_new_docker_data= JSON.parse(JSON.stringify(docker_data));
      dockerConfig.set(applied_new_docker_data);


	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	} 


	async function SetWanData()
	{
	  const res = await fetch(window.location.origin+"/SetWandata", {
	    method: 'POST',
	    body: ContentWan
	   })

	  if (res.status == 200)
	  {
	  	console.log("set wan data OK\r\n");
	  	SetCountOK++;


      let applied_new_wan_data= JSON.parse(JSON.stringify(wan_data));
      wanConfig.set(applied_new_wan_data);


	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	} 

	async function SetIPsecData()
	{
	  const res = await fetch(window.location.origin+"/Setipsecdata", {
	    method: 'POST',
	    body: ContentIPsec
	   })

	  if (res.status == 200)
	  {
	  	console.log("set ipsec data OK\r\n");
	  	SetCountOK++;

      let applied_new_ipsec_data= JSON.parse(JSON.stringify(ipsec_data));
      ipsecConfig.set(applied_new_ipsec_data);


	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }
	} 

	async function SetOpenVPNData()
	{
	  const res = await fetch(window.location.origin+"/SetopenVpndata", {
	    method: 'POST',
	    body: ContentOpenVPN
	   })

	  if (res.status == 200)
	  {
	  	console.log("set openvpn data OK\r\n");
	  	SetCountOK++;

      let applied_new_openvpn_data= JSON.parse(JSON.stringify(openvpn_data));
      openvpnConfig.set(applied_new_openvpn_data);


	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }	
	}

	async function SetGenericMQTTData()
	{
	  const res = await fetch(window.location.origin+"/SETgenericMqttdata", {
	    method: 'POST',
	    body: ContentGenericMQTT
	   })

	  if (res.status == 200)
	  {
	  	console.log("set generic mqtt data OK\r\n");
	  	SetCountOK++;


      let applied_new_generic_mqtt_data= JSON.parse(JSON.stringify(generic_mqtt_data));
      genericMQTTConfig.set(applied_new_generic_mqtt_data);

	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }	
	}

	async function SetRemoteServiceData()
	{
	  const res = await fetch(window.location.origin+"/SetRemoteservice", {
	    method: 'POST',
	    body: ContentRemoteService
	   })

	  if (res.status == 200)
	  {
	  	console.log("set remote service data OK\r\n");
	  	SetCountOK++;

      let applied_new_remoteS_data= JSON.parse(JSON.stringify(remote_service_data));
      remoteServiceConfig.set(applied_new_remoteS_data);


	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }		
	}


	async function SetPortConnectionData()
	{
	  const res = await fetch(window.location.origin+"/SEtPortConnection", {
	    method: 'POST',
	    body: ContentPortConnection
	   })

	  if (res.status == 200)
	  {
	  	console.log("set port connection data OK\r\n");
	  	SetCountOK++;


      let applied_new_portC_data= JSON.parse(JSON.stringify(port_connection_data));
      portConnectionConfig.set(applied_new_portC_data);

	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }		
	}


	async function SetCertificateData()
	{
	  const res = await fetch(window.location.origin+"/SeTCertificateData", {
	    method: 'POST',
	    body: ContentCertificate
	   })

	  if (res.status == 200)
	  {
	  	console.log("set certificate data OK\r\n");
	  	SetCountOK++;


      let applied_new_certificate_data= JSON.parse(JSON.stringify(certificate_data));
      certificateConfig.set(applied_new_certificate_data);

	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }		
	}


	async function SetModbusData()
	{
	  const res = await fetch(window.location.origin+"/sETMODbus", {
	    method: 'POST',
	    body: ContentModbus
	   })

	  if (res.status == 200)
	  {
	  	console.log("set modbus data OK\r\n");
	  	SetCountOK++;


      let applied_new_modbus_data= JSON.parse(JSON.stringify(modbus_data));
      modbusConfig.set(applied_new_modbus_data);



	  	if (SetCountOK == SetCount)
	  	{
	  		//SetThenPostReboot();
	  	}
	  }		
	}


  async function SetSmartDataLoggerData()
  {
    const res = await fetch(window.location.origin+"/SetSmartDaTalogger", {
      method: 'POST',
      body: ContentSDataLogger
     })

    if (res.status == 200)
    {
      console.log("set smart data logger OK\r\n");
      SetCountOK++;


      let applied_new_sdata_logger_data= JSON.parse(JSON.stringify(sdata_logger_data));
      sdataLoggerConfig.set(applied_new_sdata_logger_data);



      if (SetCountOK == SetCount)
      {
        //SetThenPostReboot();
      }
    }   

  }  				


  async function SetEventEngineData()
  {
    const res = await fetch(window.location.origin+"/SEtEventengine", {
      method: 'POST',
      body: ContentEventEngine
     })

    if (res.status == 200)
    {
      console.log("set event engine logger OK\r\n");
      SetCountOK++;


      let applied_new_event_engine_data= JSON.parse(JSON.stringify(event_engine_data));
      eventEngineConfig.set(applied_new_event_engine_data);

      if (SetCountOK == SetCount)
      {
        //SetThenPostReboot();
      }
    }   

  }     



	function CalculateTotalSetCount()
	{
	  if  (lan_data != "" && LANchangedValues.length!=0)
    {
    	SetCount++;
    }

    if (nat_data != "" && (NAT_loopback_changedValues.length !=0 || 
															NAT_virtualServer_changedValues.length !=0 ||
															NAT_virtualComputer_changedValues.length !=0 ||
															NAT_dmz_changedValues.length !=0))
    {
    	SetCount++;    
    }


    if (firewall_data != "" && (Firewall_general_changedValues.length !=0 || 
																		Firewall_ipfilter_changedValues.length !=0 ||
																		Firewall_macfilter_changedValues.length !=0))
   	{
    	SetCount++; 
    }

    if (static_route_data !="" && staticR_changedValues.length !=0)
    {
    	SetCount++; 
    }
    

    if (maintenance_data != "" && maintenance_changedValues.length!=0)
    {
    	SetCount++;     
    }


    if (operation_data != "" && operation_changedValues.length!=0)
    {
    	SetCount++; 
    }


    if (docker_data != "" && docker_changedValues.length!=0)
    {
    	SetCount++;     
    }


    if (wan_data != "" && ( cwan1_basic_changedValues !=0 ||
  															cwan1_advanced_changedValues != 0 ||
  															cwan1_simpolicy_changedValues != 0 ||
  															cwan1_glink_changedValues != 0 ||
  															ewan1_basic_changedValues != 0 ||
  															ewan1_ewlap_changedValues != 0 ||
  															redundancy_policy_changedValues != 0 ||
  															faresaving_policy_changedValues != 0))
  	{
  	  SetCount++; 
  	}

		if (ipsec_data != "" && (basic_changedValues.length !=0 ||
							responder_conn_changedValues.length !=0 ||
							initiator_conn_general_changedValues.length !=0 ||
							initiator_conn_subnet_changedValues.length !=0))
		{
			SetCount++;
		}

		if (openvpn_data != "" &&(openvpn_basic_changedValues.length !=0 ||
  			openvpn_server_conn_changedValues.length !=0 ||
  			openvpn_client_conn_changedValues.length !=0 ||
  			openvpn_server_advanced_ccd_changedValues.length !=0 ||
  			openvpn_server_advanced_psk_changedValues.length !=0 ||
  			openvpn_client_advanced_psk_changedValues.length !=0 ||
  			openvpn_client_advanced_rna_changedValues.length !=0 ||
  			openvpn_client_advanced_fo_changedValues.length !=0)
		)
		{
			SetCount++;
		}

		if (generic_mqtt_data != "" && generic_mqtt_changedValues.length != 0)
		{
			SetCount++;	
		}

		if (remote_service_data != "" && remote_service_changedValues.length!=0)
		{
			SetCount++;			
		}

		if (port_connection_data != ""  && (port_connection_lan_changedValues.length !=0 ||
  			port_connection_com_changedValues.length !=0 ))
  	{
			SetCount++;	
  	}

  	if (certificate_data !="" && certificate_settings_changedValues.length !=0)
  	{
  		SetCount++;	
  	}

  	if (modbus_data !="" && (modbus_gateway_TtR_changedValues.length !=0 ||
		    modbus_gateway_RtT_changedValues.length !=0 ||
		    modbus_gateway_RtR_changedValues.length !=0 ||
		    modbus_gateway_TtT_changedValues.length !=0 ||
		    modbus_variable_master_changedValues.length !=0 ||
		    modbus_variable_slave_changedValues.length !=0 ||
		    modbus_tcp_master_changedValues.length !=0 ||
		    modbus_tcp_slave_changedValues.length !=0 ||
		    modbus_rtu_master_changedValues.length !=0 ||
		    modbus_rtu_slave_changedValues.length !=0 ))
  	{
  		SetCount++;	
  	}

    if (sdata_logger_data != "" && (sdata_logger_general_changedValues.length !=0 ||
        sdata_logger_proxy_edge_changedValues.length !=0 ||
        sdata_logger_proxy_cloud_changedValues.length !=0 ||
        sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0))
    {
      SetCount++;   
    }

    if (event_engine_data != "" && (
        event_engine_action_line_changeValues.length != 0 ||
        event_engine_action_mqtt_changeValues.length != 0 ||
        event_engine_action_tcpmsg_changeValues.length != 0 ||
        event_engine_action_modbus_changeValues.length !=0 ||
        event_engine_action_do_changeValues.length != 0 ||
        event_engine_action_email_changeValues.length !=0 ||
        event_engine_action_sms_changeValues.length !=0 ||
        event_engine_trigger_mqtt_changeValues.length != 0 ||
        event_engine_trigger_tcpmsg_changeValues.length !=0 ||
        event_engine_trigger_modbus_changeValues.length != 0 ||
        event_engine_trigger_di_changeValues.length !=0 || 
        event_engine_trigger_sms_changeValues.length !=0 ||
        event_engine_general_changedValues.length !=0 ))
    {
      SetCount++;   
    }

	}


	function modalTrigger()
	{
	    defaultModal = true;

			if (sessionid) 
      {
      	const hexArray = sessionid.match(/.{1,2}/g); 
	      const byteValues = hexArray.map(hex => parseInt(hex, 16));
	      sessionBinary = new Uint8Array(byteValues);
	      CalculateTotalSetCount();
      	if  (lan_data != "" && LANchangedValues.length!=0)
      	{
	        let LANString = JSON.stringify(lan_data, null, 0);
					const bytesArray = Array.from(LANString).map(char => char.charCodeAt(0));
	    		lanBinary = new Uint8Array(bytesArray);
	      	ContentLAN=new Uint8Array(lanBinary.length+sessionBinary.length);
	        ContentLAN.set(sessionBinary,0);
	        ContentLAN.set(lanBinary, sessionBinary.length);
	        SetLANData();
        }

        if (nat_data != "" && (NAT_loopback_changedValues.length !=0 || 
															NAT_virtualServer_changedValues.length !=0 ||
															NAT_virtualComputer_changedValues.length !=0 ||
															NAT_dmz_changedValues.length !=0))
        {
	        let NATString = JSON.stringify(nat_data, null, 0);
					const bytesArray = Array.from(NATString).map(char => char.charCodeAt(0));
	    		natBinary = new Uint8Array(bytesArray);
	      	ContentNAT=new Uint8Array(natBinary.length+sessionBinary.length);
	        ContentNAT.set(sessionBinary,0);
	        ContentNAT.set(natBinary, sessionBinary.length);
	        SetNATData();
        }

        if (firewall_data != "" && (Firewall_general_changedValues.length !=0 || 
																		Firewall_ipfilter_changedValues.length !=0 ||
																		Firewall_macfilter_changedValues.length !=0))
        {
        	let FirewallString = JSON.stringify(firewall_data, null, 0);
					const bytesArray = Array.from(FirewallString).map(char => char.charCodeAt(0));
	    		firewallBinary = new Uint8Array(bytesArray);
	      	ContentFirewall=new Uint8Array(firewallBinary.length+sessionBinary.length);
	        ContentFirewall.set(sessionBinary,0);
	        ContentFirewall.set(firewallBinary, sessionBinary.length);
	        SetFirewallData();
        }

        if (static_route_data !="" && staticR_changedValues.length !=0)
        {
          let StaticRString = JSON.stringify(static_route_data, null, 0);
					const bytesArray = Array.from(StaticRString).map(char => char.charCodeAt(0));
	    		staticRBinary = new Uint8Array(bytesArray);
	      	ContentStaticR=new Uint8Array(staticRBinary.length+sessionBinary.length);
	        ContentStaticR.set(sessionBinary,0);
	        ContentStaticR.set(staticRBinary, sessionBinary.length);
        	SetStaticRData();
        }

        if (maintenance_data != "" && maintenance_changedValues.length!=0)
        {
          let MaintenanceDataString = JSON.stringify(maintenance_data, null, 0);
					const bytesArray = Array.from(MaintenanceDataString).map(char => char.charCodeAt(0));
	    		MaintenanceBinary = new Uint8Array(bytesArray);
	      	ContentMaintenance=new Uint8Array(MaintenanceBinary.length+sessionBinary.length);
	        ContentMaintenance.set(sessionBinary,0);
	        ContentMaintenance.set(MaintenanceBinary, sessionBinary.length);
	        SetMaintenanceData();    	
        }


        if (operation_data != "" && operation_changedValues.length!=0)
        {
          let OperationString = JSON.stringify(operation_data, null, 0);
					const bytesArray = Array.from(OperationString).map(char => char.charCodeAt(0));
	    		OperationBinary = new Uint8Array(bytesArray);
	      	ContentOperation=new Uint8Array(OperationBinary.length+sessionBinary.length);
	        ContentOperation.set(sessionBinary,0);
	        ContentOperation.set(OperationBinary, sessionBinary.length);
	        SetOperationData();

        }

        if (docker_data != "" && docker_changedValues.length!=0)
        {
          let DockerString = JSON.stringify(docker_data, null, 0);
					const bytesArray = Array.from(DockerString).map(char => char.charCodeAt(0));
	    		DockerBinary = new Uint8Array(bytesArray);
	      	ContentDocker=new Uint8Array(DockerBinary.length+sessionBinary.length);
	        ContentDocker.set(sessionBinary,0);
	        ContentDocker.set(DockerBinary, sessionBinary.length);
	        SetDockerData();

        }


        if (wan_data != "" && ( cwan1_basic_changedValues.length !=0 ||
  															cwan1_advanced_changedValues.length != 0 ||
  															cwan1_simpolicy_changedValues.length != 0 ||
  															cwan1_glink_changedValues.length != 0 ||
  															ewan1_basic_changedValues.length != 0 ||
  															ewan1_ewlap_changedValues.length != 0 ||
  															redundancy_policy_changedValues.length != 0 ||
  															faresaving_policy_changedValues.length != 0))
  			{
          let WanString = JSON.stringify(wan_data, null, 0);
					const bytesArray = Array.from(WanString).map(char => char.charCodeAt(0));
	    		WanBinary = new Uint8Array(bytesArray);
	      	ContentWan=new Uint8Array(WanBinary.length+sessionBinary.length);
	        ContentWan.set(sessionBinary,0);
	        ContentWan.set(WanBinary, sessionBinary.length);
  				SetWanData();
  			}



  			if (ipsec_data != "" && (basic_changedValues.length !=0 ||
  												responder_conn_changedValues.length !=0 ||
  												initiator_conn_general_changedValues.length !=0 ||
  												initiator_conn_subnet_changedValues.length !=0))
  			{
  				let IPsecString= JSON.stringify(ipsec_data, null, 0);
  				const bytesArray = Array.from(IPsecString).map(char => char.charCodeAt(0));
	    		IPsecBinary = new Uint8Array(bytesArray);
	      	ContentIPsec=new Uint8Array(IPsecBinary.length+sessionBinary.length);
	        ContentIPsec.set(sessionBinary,0);
	        ContentIPsec.set(IPsecBinary, sessionBinary.length);
	        SetIPsecData();

  			}

				if (openvpn_data != "" &&(openvpn_basic_changedValues.length !=0 ||
  				openvpn_server_conn_changedValues.length !=0 ||
	  			openvpn_client_conn_changedValues.length !=0 ||
	  			openvpn_server_advanced_ccd_changedValues.length !=0 ||
	  			openvpn_server_advanced_psk_changedValues.length !=0 ||
	  			openvpn_client_advanced_psk_changedValues.length !=0 ||
	  			openvpn_client_advanced_rna_changedValues.length !=0 ||
	  			openvpn_client_advanced_fo_changedValues.length !=0)
				)
				{
					let OpenVpnString= JSON.stringify(openvpn_data, null, 0);
  				const bytesArray = Array.from(OpenVpnString).map(char => char.charCodeAt(0));
	    		OpenVPNBinary = new Uint8Array(bytesArray);
	      	ContentOpenVPN=new Uint8Array(OpenVPNBinary.length+sessionBinary.length);
	        ContentOpenVPN.set(sessionBinary,0);
	        ContentOpenVPN.set(OpenVPNBinary, sessionBinary.length);
	        SetOpenVPNData();
				}

				if (generic_mqtt_data != "" && generic_mqtt_changedValues.length !=0)
				{
					let GenericMQTTString = JSON.stringify(generic_mqtt_data, null, 0);
					const bytesArray = Array.from(GenericMQTTString).map(char => char.charCodeAt(0));
	    		GenericMQTTBinary = new Uint8Array(bytesArray);
	      	ContentGenericMQTT=new Uint8Array(GenericMQTTBinary.length+sessionBinary.length);
	        ContentGenericMQTT.set(sessionBinary,0);
	        ContentGenericMQTT.set(GenericMQTTBinary, sessionBinary.length);
	        SetGenericMQTTData();
				}

				if (remote_service_data != "" && remote_service_changedValues.length!=0)
				{
					let RemoteServiceString = JSON.stringify(remote_service_data, null, 0);
					const bytesArray = Array.from(RemoteServiceString).map(char => char.charCodeAt(0));
	    		RemoteServiceBinary = new Uint8Array(bytesArray);
	      	ContentRemoteService=new Uint8Array(RemoteServiceBinary.length+sessionBinary.length);
	        ContentRemoteService.set(sessionBinary,0);
	        ContentRemoteService.set(RemoteServiceBinary, sessionBinary.length);
	        SetRemoteServiceData();

				}

				if (port_connection_data != ""  && (port_connection_lan_changedValues.length !=0 ||
  			port_connection_com_changedValues.length !=0 ))
  			{
					let PortConnectionString = JSON.stringify(port_connection_data, null, 0);
					const bytesArray = Array.from(PortConnectionString).map(char => char.charCodeAt(0));
	    		PortConnectionBinary = new Uint8Array(bytesArray);
	      	ContentPortConnection=new Uint8Array(PortConnectionBinary.length+sessionBinary.length);
	        ContentPortConnection.set(sessionBinary,0);
	        ContentPortConnection.set(PortConnectionBinary, sessionBinary.length);
  				SetPortConnectionData();
  			}

  			if (certificate_data != ""  && certificate_settings_changedValues !=0)
  			{
					let CertificateString = JSON.stringify(certificate_data, null, 0);
					const bytesArray = Array.from(CertificateString).map(char => char.charCodeAt(0));
	    		CertificateBinary = new Uint8Array(bytesArray);
	      	ContentCertificate=new Uint8Array(CertificateBinary.length+sessionBinary.length);
	        ContentCertificate.set(sessionBinary,0);
	        ContentCertificate.set(CertificateBinary, sessionBinary.length);
  				SetCertificateData();
  			}
  			if (modbus_data !="" && (modbus_gateway_TtR_changedValues.length !=0 ||
										    modbus_gateway_RtT_changedValues.length !=0 ||
										    modbus_gateway_RtR_changedValues.length !=0 ||
										    modbus_gateway_TtT_changedValues.length !=0 ||
										    modbus_variable_master_changedValues.length !=0 ||
										    modbus_variable_slave_changedValues.length !=0 ||
										    modbus_tcp_master_changedValues.length !=0 ||
										    modbus_tcp_slave_changedValues.length !=0 ||
										    modbus_rtu_master_changedValues.length !=0 ||
										    modbus_rtu_slave_changedValues.length !=0 ))
  			{
  				let ModbusString = JSON.stringify(modbus_data, null, 0);
					const bytesArray = Array.from(ModbusString).map(char => char.charCodeAt(0));
	    		ModbusBinary = new Uint8Array(bytesArray);
	      	ContentModbus=new Uint8Array(ModbusBinary.length+sessionBinary.length);
	        ContentModbus.set(sessionBinary,0);
	        ContentModbus.set(ModbusBinary, sessionBinary.length);
  				SetModbusData();

  			}

        if (sdata_logger_data != "" && (sdata_logger_general_changedValues.length !=0 ||
                        sdata_logger_proxy_edge_changedValues.length !=0 ||
                        sdata_logger_proxy_cloud_changedValues.length !=0 ||
                        sdata_logger_monitor_edge_changedValues.length !=0 ||
                        sdata_logger_monitor_cloud_changedValues.length !=0))
        {

          let SDataLoggerString = JSON.stringify(sdata_logger_data, null, 0);
          const bytesArray = Array.from(SDataLoggerString).map(char => char.charCodeAt(0));
          SDataLoggerBinary = new Uint8Array(bytesArray);
          ContentSDataLogger=new Uint8Array(SDataLoggerBinary.length+sessionBinary.length);
          ContentSDataLogger.set(sessionBinary,0);
          ContentSDataLogger.set(SDataLoggerBinary, sessionBinary.length);
          SetSmartDataLoggerData();
      
        }


        if (event_engine_data != "" && (
                      event_engine_action_line_changeValues.length !=0 ||
                      event_engine_action_mqtt_changeValues.length !=0 ||
                      event_engine_action_tcpmsg_changeValues.length !=0 ||
                      event_engine_action_modbus_changeValues.length !=0 ||
                      event_engine_action_do_changeValues.length != 0 ||
                      event_engine_action_email_changeValues.length != 0 ||
                      event_engine_action_sms_changeValues.length != 0 ||
                      event_engine_trigger_mqtt_changeValues.length !=0 ||
                      event_engine_trigger_tcpmsg_changeValues.length !=0||
                      event_engine_trigger_modbus_changeValues.length !=0 ||
                      event_engine_trigger_di_changeValues.length !=0 ||
                      event_engine_trigger_sms_changeValues.length !=0 ||
                      event_engine_general_changedValues.length !=0 ))
        {
          let EventEngineString = JSON.stringify(event_engine_data, null, 0);
          const bytesArray = Array.from(EventEngineString).map(char => char.charCodeAt(0));
          EventEngineBinary = new Uint8Array(bytesArray);
          ContentEventEngine=new Uint8Array(EventEngineBinary.length+sessionBinary.length);
          ContentEventEngine.set(sessionBinary,0);
          ContentEventEngine.set(EventEngineBinary, sessionBinary.length);
          SetEventEngineData();
        }

      }
	};


</script>



<div class="text-center">
<Heading tag="h2" customSize="text-3xl font-extrabold" class="text-center mb-2 font-semibold text-gray-900 dark:text-white">The following configs are changed:</Heading>
<List tag="ol" {color} class="text-2xl space-y-1" style="display: inline-block;text-align: left;">

{#if  event_engine_action_line_changeValues.length != 0 ||
      event_engine_action_mqtt_changeValues.length != 0 || 
      event_engine_action_tcpmsg_changeValues.length != 0 ||
      event_engine_action_modbus_changeValues.length != 0 ||
      event_engine_action_do_changeValues.length != 0 ||
      event_engine_action_email_changeValues.length !=0 ||
      event_engine_action_sms_changeValues.length != 0 ||
      event_engine_trigger_mqtt_changeValues.length !=0 ||
      event_engine_trigger_tcpmsg_changeValues.length !=0 ||
      event_engine_trigger_modbus_changeValues.length !=0 ||
      event_engine_trigger_di_changeValues.length !=0 ||
      event_engine_trigger_sms_changeValues.length !=0 ||
      event_engine_general_changedValues.length !=0 }
<Li>Event Engine
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
{#if event_engine_general_changedValues.length !=0}
<Li>General
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each event_engine_general_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
</Li>
{/if}


{#if    event_engine_trigger_mqtt_changeValues.length !=0||
        event_engine_trigger_tcpmsg_changeValues.length !=0||
        event_engine_trigger_modbus_changeValues.length !=0||
        event_engine_trigger_di_changeValues.length !=0 ||
        event_engine_trigger_sms_changeValues.length !=0}
<Li>Trigger Profile
{#if  event_engine_trigger_sms_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> SMS
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_trigger_sms_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  event_engine_trigger_di_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> DI
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_trigger_di_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  event_engine_trigger_modbus_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Modbus
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_trigger_modbus_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  event_engine_trigger_tcpmsg_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> TCP Message
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_trigger_tcpmsg_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


{#if  event_engine_trigger_mqtt_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> MQTT Notification
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_trigger_mqtt_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}



</Li>
{/if}



{#if
event_engine_action_line_changeValues.length != 0 ||
event_engine_action_mqtt_changeValues.length != 0 ||
event_engine_action_tcpmsg_changeValues.length != 0 ||
event_engine_action_modbus_changeValues.length != 0 ||
event_engine_action_do_changeValues.length != 0 || 
    event_engine_action_sms_changeValues.length != 0 ||
    event_engine_action_email_changeValues.length !=0}
<Li>Action Profile

{#if  event_engine_action_sms_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> SMS
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_action_sms_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  event_engine_action_email_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Email
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_action_email_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  event_engine_action_do_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> DO
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_action_do_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  event_engine_action_modbus_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Modbus
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_action_modbus_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


{#if  event_engine_action_tcpmsg_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> TCP Message
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_action_tcpmsg_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  event_engine_action_mqtt_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> MQTT
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_action_mqtt_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


{#if  event_engine_action_line_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Line Notification
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_action_line_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

</Li>
{/if}

</List>
</Li>

{/if}




{#if    sdata_logger_general_changedValues.length !=0 ||
        sdata_logger_proxy_edge_changedValues.length !=0 ||
        sdata_logger_proxy_cloud_changedValues.length !=0 ||
        sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0}

  <Li>Smart Data Logger
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
{#if sdata_logger_general_changedValues.length !=0}
<Li>General
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each sdata_logger_general_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

</Li>
{/if}

{#if  sdata_logger_proxy_edge_changedValues.length !=0 ||
        sdata_logger_proxy_cloud_changedValues.length !=0}
<Li>Proxy Mode
{#if  sdata_logger_proxy_edge_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Edge Data
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each sdata_logger_proxy_edge_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}
{#if  sdata_logger_proxy_cloud_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Cloud Settings
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each sdata_logger_proxy_cloud_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


</Li>
{/if}




{#if  sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0}
<Li>Monitor Mode

{#if  sdata_logger_monitor_edge_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Edge Data
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each sdata_logger_monitor_edge_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}
{#if  sdata_logger_monitor_cloud_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Cloud Settings
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each sdata_logger_monitor_cloud_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


</Li>
{/if}

  </List>
  </Li>

{/if}



{#if modbus_gateway_TtR_changedValues.length !=0 ||
										    modbus_gateway_RtT_changedValues.length !=0 ||
										    modbus_gateway_RtR_changedValues.length !=0 ||
										    modbus_gateway_TtT_changedValues.length !=0 ||
										    modbus_variable_master_changedValues.length !=0 ||
										    modbus_variable_slave_changedValues.length !=0 ||
										    modbus_tcp_master_changedValues.length !=0 ||
										    modbus_tcp_slave_changedValues.length !=0 ||
										    modbus_rtu_master_changedValues.length !=0 ||
										    modbus_rtu_slave_changedValues.length !=0}
	<Li>Modbus
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">

{#if modbus_rtu_master_changedValues.length !=0 || modbus_rtu_slave_changedValues.length !=0}
			<Li>RTU
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
{#if modbus_rtu_master_changedValues.length !=0}
			<Li>RTU Master
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_rtu_master_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}
{#if modbus_rtu_slave_changedValues.length !=0}
			<Li>RTU Slave
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_rtu_slave_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}

  </List>
  </Li>
{/if}


{#if modbus_tcp_master_changedValues.length !=0 || modbus_tcp_slave_changedValues.length !=0}
			<Li>TCP
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
{#if modbus_tcp_master_changedValues.length !=0}
			<Li>TCP Master
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_tcp_master_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}
{#if modbus_tcp_slave_changedValues.length !=0}
			<Li>TCP Slave
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_tcp_slave_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}

  </List>
  </Li>
{/if}


{#if modbus_variable_master_changedValues.length !=0 || modbus_variable_slave_changedValues.length !=0}
			<Li>Variable
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
{#if modbus_variable_master_changedValues.length !=0}
			<Li>Master
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_variable_master_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}
{#if modbus_variable_slave_changedValues.length !=0}
			<Li>Slave
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_variable_slave_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}

  </List>
  </Li>
{/if}


{#if modbus_gateway_TtR_changedValues.length !=0 ||
										    modbus_gateway_RtT_changedValues.length !=0 ||
										    modbus_gateway_RtR_changedValues.length !=0 ||
										    modbus_gateway_TtT_changedValues.length !=0}
			<Li>Gateway
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
{#if modbus_gateway_TtR_changedValues.length !=0}
			<Li>From TCP To RTU
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_gateway_TtR_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}


{#if modbus_gateway_RtT_changedValues.length !=0}
			<Li>From RTU To TCP
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_gateway_RtT_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}


{#if modbus_gateway_RtR_changedValues.length !=0}
			<Li>From RTU To RTU
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_gateway_RtR_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}


{#if modbus_gateway_TtT_changedValues.length !=0}
			<Li>From TCP To TCP
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_gateway_TtT_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}

  </List>
  </Li>
{/if}



 </List>
	</Li>
{/if}

{#if certificate_settings_changedValues.length !=0}
	<Li>Certificate 
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
	<Li>Check the validity period of certificates and CRLs
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each certificate_settings_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
  </List>
	</Li>
{/if}

{#if port_connection_lan_changedValues.length !=0 ||
  			port_connection_com_changedValues.length !=0}
  			<Li>Port Connection
    {#if port_connection_lan_changedValues.length !=0}			
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	LAN
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
   {#each port_connection_lan_changedValues as item}
  	<Li>{item}</Li>
	{/each}
  </List>
  </Li> 
  </List>
  {/if}


    {#if port_connection_com_changedValues.length !=0}			
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	COM
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
   {#each port_connection_com_changedValues as item}
  	<Li>{item}</Li>
	{/each}
  </List>
  </Li> 
  </List>
  {/if}
  			</Li>

{/if}

{#if remote_service_changedValues.length !=0}
	<Li>Remote Service
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each remote_service_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
	</Li>
{/if}


{#if generic_mqtt_changedValues.length !=0}
	<Li>Generic MQTT
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each generic_mqtt_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
	</Li>

{/if}

{#if openvpn_basic_changedValues.length !=0 ||
  	openvpn_server_conn_changedValues.length !=0 ||
  	openvpn_client_conn_changedValues.length !=0 ||
  	openvpn_server_advanced_ccd_changedValues.length !=0 ||
  	openvpn_server_advanced_psk_changedValues.length !=0 ||
  	openvpn_client_advanced_psk_changedValues.length !=0 ||
  	openvpn_client_advanced_rna_changedValues.length !=0 ||
  	openvpn_client_advanced_fo_changedValues.length !=0 }
  <Li>OpenVPN
  {#if openvpn_basic_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Basic
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each openvpn_basic_changedValues as item}
  	<Li>{item}</Li>
	{/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if openvpn_server_conn_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Server Connection
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each openvpn_server_conn_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if openvpn_client_conn_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Client Connection
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each openvpn_client_conn_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}


	{#if openvpn_server_advanced_ccd_changedValues.length !=0 || openvpn_server_advanced_psk_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Server Advanced
  	{#if openvpn_server_advanced_ccd_changedValues.length !=0}
  		<List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  			{#each openvpn_server_advanced_ccd_changedValues as item}
      	<Li>{item}</Li>
   			{/each}
  		</List>
  	{/if}

  	{#if openvpn_server_advanced_psk_changedValues.length !=0}
  		<List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  			{#each openvpn_server_advanced_psk_changedValues as item}
      	<Li>{item}</Li>
   			{/each}
  		</List>
  	{/if}
  </Li> 
  </List>
	{/if}

	{#if openvpn_client_advanced_psk_changedValues.length !=0 || openvpn_client_advanced_rna_changedValues.length !=0 || openvpn_client_advanced_fo_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Client Advanced
  	{#if openvpn_client_advanced_psk_changedValues.length !=0}
  		<List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  			{#each openvpn_client_advanced_psk_changedValues as item}
      	<Li>{item}</Li>
   			{/each}
  		</List>
  	{/if}

  	{#if openvpn_client_advanced_rna_changedValues.length !=0}
  		<List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  			{#each openvpn_client_advanced_rna_changedValues as item}
      	<Li>{item}</Li>
   			{/each}
  		</List>
  	{/if}

  	{#if openvpn_client_advanced_fo_changedValues.length !=0}
  		<List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  			{#each openvpn_client_advanced_fo_changedValues as item}
      	<Li>{item}</Li>
   			{/each}
  		</List>
  	{/if}

  </Li> 
  </List>
	{/if}
	</Li>	
{/if}

{#if  basic_changedValues.length !=0 ||
  		responder_conn_changedValues.length !=0 ||
  		initiator_conn_general_changedValues.length !=0 ||
  		initiator_conn_subnet_changedValues.length !=0}
  <Li>IPsec
 {#if basic_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Basic
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each basic_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if responder_conn_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Responder Connection
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each responder_conn_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if initiator_conn_general_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Initiator Connection
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each initiator_conn_general_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
   <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each initiator_conn_subnet_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}
  </Li>	
{/if}

{#if 	cwan1_basic_changedValues.length !=0 ||
  		cwan1_advanced_changedValues.length != 0 ||
  		cwan1_simpolicy_changedValues.length != 0 ||
  		cwan1_glink_changedValues.length != 0 ||
  		ewan1_basic_changedValues.length != 0 ||
  		ewan1_ewlap_changedValues.length != 0 ||
  		redundancy_policy_changedValues.length != 0 ||
  		faresaving_policy_changedValues.length != 0
  		}
  <Li>WAN
 {#if cwan1_basic_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 Basic Settings
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_basic_changedValues.length as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if cwan1_advanced_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 Advanced Settings
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_advanced_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if cwan1_simpolicy_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 SIM Policy
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_simpolicy_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if cwan1_glink_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN-1 LTE Guarantie Link
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_glink_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}


	{#if ewan1_basic_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Ethernet WAN Basic Settings
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each ewan1_basic_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}


	{#if ewan1_ewlap_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Ethernet WAN EWLAP
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each ewan1_ewlap_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if} 

	{#if redundancy_policy_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	WAN Redundancy Policy
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each redundancy_policy_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if} 

	{#if faresaving_policy_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Fare Saving Policy
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each faresaving_policy_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if} 

  </Li>


{/if}


{#if LANchangedValues.length!=0}
  <Li>LAN
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each LANchangedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}


{#if NAT_loopback_changedValues.length !=0 || 
		NAT_virtualServer_changedValues.length !=0 ||
		NAT_virtualComputer_changedValues.length !=0 ||
		NAT_dmz_changedValues.length !=0 
		}
  <Li>NAT
 {#if NAT_loopback_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Loopback
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_loopback_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if NAT_virtualServer_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Virtual Server
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_virtualServer_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if NAT_virtualComputer_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Virtual Computer
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_virtualComputer_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if NAT_dmz_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	DMZ
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each NAT_dmz_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

  </Li>
{/if}


{#if Firewall_general_changedValues.length !=0 || 
		Firewall_ipfilter_changedValues.length !=0 ||
		Firewall_macfilter_changedValues.length !=0
		}
  <Li>Firewall
 {#if Firewall_general_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	General
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each Firewall_general_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if Firewall_ipfilter_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	IP Filter
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each Firewall_ipfilter_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if Firewall_macfilter_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	MAC Filter
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each Firewall_macfilter_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}
  </Li>	
{/if}

{#if staticR_changedValues.length !=0}
  <Li>Static Route
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each staticR_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}

{#if maintenance_changedValues.length!=0}
  <Li>Maintenance
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each maintenance_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}

{#if operation_changedValues.length!=0}
  <Li>Operation
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each operation_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}

{#if docker_changedValues.length!=0}
  <Li>Docker Engine
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each docker_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
{/if}








</List>


</div>
<div class="pt-10 pl-10 text-center">

{#if    event_engine_action_line_changeValues.length != 0 ||
        event_engine_action_mqtt_changeValues.length != 0 ||
        event_engine_action_tcpmsg_changeValues.length !=0 ||
        event_engine_action_modbus_changeValues.length !=0 ||
        event_engine_action_do_changeValues.length != 0 ||
        event_engine_action_email_changeValues.length != 0||
        event_engine_action_sms_changeValues.length != 0 ||
        event_engine_trigger_mqtt_changeValues.length !=0 ||
        event_engine_trigger_tcpmsg_changeValues.length !=0 ||
        event_engine_trigger_modbus_changeValues.length !=0||
        event_engine_trigger_di_changeValues.length !=0 ||
        event_engine_trigger_sms_changeValues.length !=0 ||
        event_engine_general_changedValues.length !=0 || 		
        sdata_logger_general_changedValues.length !=0 ||
        sdata_logger_proxy_edge_changedValues.length !=0 ||
        sdata_logger_proxy_cloud_changedValues.length !=0 ||
        sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0 ||
  			modbus_gateway_TtR_changedValues.length !=0 ||
		    modbus_gateway_RtT_changedValues.length !=0 ||
		    modbus_gateway_RtR_changedValues.length !=0 ||
		    modbus_gateway_TtT_changedValues.length !=0 ||
		    modbus_variable_master_changedValues.length !=0 ||
		    modbus_variable_slave_changedValues.length !=0 ||
		    modbus_tcp_master_changedValues.length !=0 ||
		    modbus_tcp_slave_changedValues.length !=0 ||
		    modbus_rtu_master_changedValues.length !=0 ||
		    modbus_rtu_slave_changedValues.length !=0 ||
				LANchangedValues.length != 0 ||
  			NAT_loopback_changedValues.length != 0 ||
  			NAT_virtualServer_changedValues.length !=0 ||
  			NAT_virtualComputer_changedValues.length !=0 ||
  			NAT_dmz_changedValues.length !=0 ||
  			Firewall_general_changedValues.length !=0 ||
  			Firewall_ipfilter_changedValues.length !=0 ||
  			Firewall_macfilter_changedValues.length !=0 ||
  			staticR_changedValues.length != 0 ||
  			maintenance_changedValues.length != 0 ||
  			operation_changedValues.length != 0 ||
  			docker_changedValues.length != 0 ||
  			cwan1_basic_changedValues !=0 ||
  			cwan1_advanced_changedValues != 0 ||
  			cwan1_simpolicy_changedValues != 0 ||
  			cwan1_glink_changedValues.length != 0 ||
  			ewan1_basic_changedValues.length != 0 ||
  			ewan1_ewlap_changedValues.length != 0 ||
  			redundancy_policy_changedValues.length != 0 ||
  			faresaving_policy_changedValues.length != 0 ||
  			basic_changedValues.length !=0 ||
  			responder_conn_changedValues.length !=0 ||
  			initiator_conn_general_changedValues.length !=0 ||
  			initiator_conn_subnet_changedValues.length !=0 ||
  			openvpn_basic_changedValues.length !=0 ||
  			openvpn_server_conn_changedValues.length !=0 ||
  			openvpn_client_conn_changedValues.length !=0 ||
  			openvpn_server_advanced_ccd_changedValues.length !=0 ||
  			openvpn_server_advanced_psk_changedValues.length !=0 ||
  			openvpn_client_advanced_psk_changedValues.length !=0 ||
  			openvpn_client_advanced_rna_changedValues.length !=0 ||
  			openvpn_client_advanced_fo_changedValues.length !=0 ||
  			generic_mqtt_changedValues.length !=0 ||
  			remote_service_changedValues.length !=0 ||
  			port_connection_lan_changedValues.length !=0 ||
  			port_connection_com_changedValues.length !=0 ||
  			certificate_settings_changedValues.length !=0

		}
<Button on:click={() => modalTrigger()}>Apply and Restart</Button>
{/if}
</div>

<Modal bind:open={defaultModal} size="md" class="w-full" permanent={true}>

{#if CheckedConfigInvalid == 1}
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={closeModal}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
{/if}

<table>
{#if uploadconfigIsValid == 0}
<tr>
{#if CheckedConfigInvalid == 0}
<td><Spinner size={16} /></td>
<td> <p class="pl-5" style="color:red; font-size:18px">Verifying configuration now ....
</p></td>
{:else if CheckedConfigInvalid == 1}
<td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td> <p class="pl-5" style="color:red; font-size:18px">It's invalid configuration, please upload valid configuration.
</p></td>
{/if}
</tr>
{:else if uploadconfigIsValid == 1}
<tr><td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td>
<p class="pl-5" style="color:red; font-size:18px">It's valid configuration.
</td>
</tr>
<tr>
{#if AllRestartFinished == 0}
<td class="pt-5">
<Spinner size={16} /></td> 
<td class="pt-5">
<p class="pl-5" style="color:red; font-size:18px">Applying configuration and restart ....
</p>
</td>
{:else}
<td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td>
<p class="pl-5" style="color:red; font-size:18px">All changed configurations are applied and restart.
</td>

{/if}

</tr>
{/if}


{#if AllRestartFinished == 1}
<tr>
<td>
</td>
<td>
</td>
<td class="w-16">
</td>
<td>
          <Button on:click={() => closeModal()}>OK</Button>
</td>
</tr>
{/if}


</table>
</Modal>