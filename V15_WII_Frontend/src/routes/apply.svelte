<script>
	import { List, Li, Heading,Button, Modal, Spinner} from 'flowbite-svelte';
	import { sessionidG } from "./sessionG.js";
	import { 
      lanConfig,
			LanConfigChangedLog, 
      DHCPServerLANConfigLog,
			ChangedLANConfig,
      natConfig,
			NAT_LoopBack_ConfigChangedLog, 
  		NAT_VS_ConfigChangedLog, 
  		NAT_VC_ConfigChangedLog, 
  		NAT_Dmz_ConfigChangedLog,
  		ChangedNATConfig,
      firewallConfig,
  		Firewall_General_ConfigChangedLog,
    	Firewall_IPFilter_ConfigChangedLog,
    	Firewall_MACFilter_ConfigChangedLog,
    	ChangedFirewallConfig,
      staticrouteConfig,
    	StaticRouteConfigChangedLog,
      ChangedStaticRouteConfig,
      maintenanceConfig,
      ChangedMaintenanceConfig,
  		MaintenanceConfigChangedLog,
      configurationConfig,
      ConfigurationP2EConfigChangedLog,
      ChangedConfigurationConfig,
      operationConfig,
  		OperationConfigChangedLog,
  		ChangedOperationConfig,
      dockerConfig,
  		DockerConfigChangedLog,
      ChangedDockerConfig,
      wanConfig, 
      ewanWebInputFlag,
      cwanWebInputFlag,
      WAN_CWAN1_BASIC_ConfigChangedLog,
    	WAN_CWAN1_Advanced_ConfigChangedLog,
    	WAN_CWAN1_SimPolicy_ConfigChangedLog,
    	WAN_CWAN1_GLink_ConfigChangedLog,
    	WAN_EWAN1_Basic_ConfigChangedLog,
    	WAN_EWAN1_EWLAP_ConfigChangedLog,
    	WAN_RedundancyPolicy_ConfigChangedLog,
    	WAN_FareSavingPolicy_ConfigChangedLog,
      WAN_PORT_SWITCH_ConfigChangedLog,
    	ChangedWANConfig,
      ipsecConfig,
    	IPsec_Responder_Conn_ConfigChangedLog,
    	IPsec_Initiator_Conn_General_ConfigChangedLog,
    	IPsec_Initiator_Conn_Subnet_ConfigChangedLog,
    	IPsec_Basic_ConfigChangedLog,
    	ChangedIPsecConfig,
      openvpnConfig,
	    OpenVPN_Client_Advanced_FO_ConfigChangedLog,
	    OpenVPN_Client_Advanced_RNA_ConfigChangedLog,
	    OpenVPN_Client_Advanced_PSK_ConfigChangedLog,
      OpenVPN_Client_Advanced_PFW_ConfigChangedLog,
	    OpenVPN_Client_Conn_ConfigChangedLog,
	    OpenVPN_Server_Advanced_CCD_ConfigChangedLog,
	    OpenVPN_Server_Advanced_PSK_ConfigChangedLog,
      OpenVPN_Server_Advanced_PFW_ConfigChangedLog,
	    OpenVPN_Server_Conn_ConfigChangedLog,
	    OpenVPN_Basic_ConfigChangedLog,
	    ChangedOpenVPNConfig,
      genericMQTTConfig,
	    GenericMQTTConfigChangedLog,
    	ChangedGenericMQTTConfig,
      azureConfig,
      ChangedAzureConfig,
      AzHub_ConfigChangedLog,
      AzHubDPS_ConfigChangedLog,
      AzCentral_ConfigChangedLog,
      awsIoTcoreConfig,
      AWSIoTcoreConfigChangedLog,
      ChangedAWSIoTcoreConfig,
      remoteServiceConfig,
      RemoteServiceConfigRemoteControlChangedLog,
      RemoteServiceConfigMqttChangedLog,
      RemoteServiceConfigRestfulChangedLog,
    	ChangedRemoteServiceConfig,
      portConnectionConfig,
    	PortConnection_LAN_ConfigChangedLog,
    	PortConnection_COM_ConfigChangedLog,
      PortConnection_Transparent_ConfigChangedLog,
    	ChangedPortConnectionConfig,
      certificateConfig,
    	Certificate_Settings_ConfigChangedLog,
    	ChangedCertificateConfig,
      modbusConfig,
    	ModbusGateway_TtR_ConfigChangedLog,
	    ModbusGateway_RtT_ConfigChangedLog,
	    ModbusGateway_RtR_ConfigChangedLog,
	    ModbusGateway_TtT_ConfigChangedLog,
	    ModbusDataModel_Slave_ConfigChangedLog,
      ModbusTag_ConfigChangedLog,
	    ModbusTCP_Slave_ConfigChangedLog,
	    ModbusTCP_Master_ConfigChangedLog,
	    ModbusRTU_Slave_ConfigChangedLog,
	    ModbusRTU_Master_ConfigChangedLog,
	    ChangedModbusConfig,
      sdataLoggerConfig,
      SDatalogger_MonitorMode_Topic_ConfigChangedLog,      
      SDatalogger_MonitorMode_Cloud_ConfigChangedLog,
      SDatalogger_MonitorMode_Edge_ConfigChangedLog,
      SDatalogger_ProxyMode_Topic_ConfigChangedLog,      
      SDatalogger_ProxyMode_Cloud_ConfigChangedLog,
      SDatalogger_ProxyMode_Edge_ConfigChangedLog,
      SDatalogger_General_ConfigChangedLog,
      ChangedSDataLoggerConfig,
      eventEngineConfig,
      EventEngine_ActionLINE_ConfigChangedLog,
      EventEngine_ActionMQTT_ConfigChangedLog,
      EventEngine_ActionTCPMsg_ConfigChangedLog,
      EventEngine_ActionModbus_ConfigChangedLog,
      EventEngine_ActionDO_ConfigChangedLog,
      EventEngine_ActionEmail_ConfigChangedLog,
      EventEngine_ActionSMS_ConfigChangedLog,
      EventEngine_TriggerRSSI_ConfigChangedLog,  
      EventEngine_TriggerPING_ConfigChangedLog,      
      EventEngine_TriggerMQTT_ConfigChangedLog,
      EventEngine_TriggerTCPMsg_ConfigChangedLog,
      EventEngine_TriggerModbus_ConfigChangedLog,
      EventEngine_TriggerDI_ConfigChangedLog,
      EventEngine_TriggerSMS_ConfigChangedLog,
      EventEngine_Rule_ConfigChangedLog,      
      EventEngine_General_ConfigChangedLog,
      ChangedEventEngineConfig,
      datatagproConfig,
      ChangedDataTagProConfig,
      DataTagPro_ULRule_ConfigChangedLog,
      DataTagPro_TagRuleEvent_ConfigChangedLog,
      DataTagPro_TagRuleSchedule_ConfigChangedLog,
      DataTagPro_TagRuleSCADA_ConfigChangedLog,
      DataTagPro_TagRuleDM_ConfigChangedLog,
      DataTagPro_TagRuleTOU_ConfigChangedLog,
      DataTagPro_TagRuleAccumulated_ConfigChangedLog,
      DataTagPro_TagRuleCalculation_ConfigChangedLog,
      DataTagPro_TagRuleC2D_ConfigChangedLog,
      DataTagPro_General_ConfigChangedLog
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
  let configuration_data="";  
  let operation_data="";
  let docker_data="";
  let wan_data="";
  let ipsec_data="";
  let openvpn_data="";
  let generic_mqtt_data="";
  let azure_data="";  
  let awsIoT_core_data="";
  let remote_service_data="";
  let port_connection_data="";
  let certificate_data="";
  let modbus_data="";
  let sdata_logger_data="";
  let event_engine_data="";
  let data_tag_pro_data="";  

	let sessionid;
  let sessionBinary;
  let ContentLAN; 
  let lanBinary=null;
  let LANchangedValues = [];
  let dhcpServerChangedValues=[];

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

  let ContentConfiguration;
  let ConfigurationBinary=null;
  let configuration_p2e_changedValues = [];


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
  let port_switch_changedValues = []; 


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
  let openvpn_server_advanced_pfw_changedValues=[];
  let openvpn_client_advanced_pfw_changedValues=[];
  let openvpn_client_advanced_psk_changedValues=[];
  let openvpn_client_advanced_rna_changedValues=[];
  let openvpn_client_advanced_fo_changedValues=[];

  let ContentGenericMQTT;
  let GenericMQTTBinary=null;
  let generic_mqtt_changedValues=[];


  let ContentAzure;
  let AzureBinary=null;
  let azhub_changedValues = [];
  let azhubdps_changedValues=[];
  let azcentral_changedValues=[];


  let ContentAWSiotCore;
  let AWSiotCoreBinary=null;
  let awsIoT_core_changedValues=[];

  let ContentRemoteService;
  let RemoteServiceBinary=null;
  let remote_service_mqtt_changedValues = [];
  let remote_service_restful_changedValues = [];
  let remote_service_remote_control_changedValues = [];


  let ContentPortConnection;
  let PortConnectionBinary=null;
  let port_connection_lan_changedValues = [];
  let port_connection_com_changedValues = [];
  let port_connection_transparent_changedValues=[];

  let ContentCertificate;
  let CertificateBinary=null;
  let certificate_settings_changedValues = [];

  let ContentModbus;
  let ModbusBinary=null;
  let modbus_gateway_TtR_changedValues=[];
  let modbus_gateway_RtT_changedValues=[];
  let modbus_gateway_RtR_changedValues=[];
  let modbus_gateway_TtT_changedValues=[];

  let modbus_data_model_master_changedValues=[];
  let modbus_data_model_slave_changedValues=[];
  let modbus_tag_changedValues=[];
  let modbus_tcp_master_changedValues=[];
  let modbus_tcp_slave_changedValues=[];
  let modbus_rtu_master_changedValues=[];
  let modbus_rtu_slave_changedValues=[];



  let ContentSDataLogger;
  let SDataLoggerBinary=null;
  let sdata_logger_general_changedValues = [];
  let sdata_logger_proxy_edge_changedValues = [];
  let sdata_logger_proxy_cloud_changedValues = [];
  let sdata_logger_proxy_topic_changedValues = [];  
  let sdata_logger_monitor_edge_changedValues = [];
  let sdata_logger_monitor_cloud_changedValues = [];
  let sdata_logger_monitor_topic_changedValues = [];


  let ContentDatatagPro;
  let DatatagProBinary=null;
  let data_tag_pro_general_changedValues = [];
  let data_tag_pro_tag_c2d_changedValues = [];
  let data_tag_pro_tag_calculation_changedValues = [];
  let data_tag_pro_tag_accumulated_changedValues = [];  
  let data_tag_pro_tag_tou_changedValues = [];
  let data_tag_pro_tag_dm_changedValues = [];
  let data_tag_pro_tag_scada_changedValues = [];
  let data_tag_pro_tag_event_changedValues = [];
  let data_tag_pro_tag_schedule_changedValues =[];
  let data_tag_pro_ul_changedValues = [];

  let ContentEventEngine;
  let EventEngineBinary=null;
  let event_engine_general_changedValues = [];
  let event_engine_rule_changedValues = [];  
  let event_engine_trigger_sms_changeValues=[];
  let event_engine_trigger_di_changeValues=[];
  let event_engine_trigger_modbus_changeValues=[];
  let event_engine_trigger_tcpmsg_changeValues=[];
  let event_engine_trigger_mqtt_changeValues=[];
  let event_engine_trigger_ping_changeValues=[];
  let event_engine_trigger_rssi_changeValues=[];  
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
  let RestartCount=0;
  let RestartCountOK=0;
  let ewanWebAccessChanged="";
  let cwanWebAccessChanged="";
  let RestartIntervalIdByWan;
  let RestartIntervalIdByLan;
  let interval;
  let redirect_to_new_ip=0;

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

  ChangedConfigurationConfig.subscribe(val => {
      configuration_data = val;
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

  ewanWebInputFlag.subscribe(val => {
      ewanWebAccessChanged = val;
  }); 

  cwanWebInputFlag.subscribe(val => {
      cwanWebAccessChanged = val;
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

  ChangedAzureConfig.subscribe(val => {
      azure_data = val;
  });

  ChangedAWSIoTcoreConfig.subscribe(val => {
      awsIoT_core_data = val;
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


  ChangedDataTagProConfig.subscribe(val => {
      data_tag_pro_data = val;
  });

  DataTagPro_ULRule_ConfigChangedLog.subscribe(val => {
      data_tag_pro_ul_changedValues = val;
  });


  DataTagPro_TagRuleEvent_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_event_changedValues = val;
  });
  
  DataTagPro_TagRuleSCADA_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_scada_changedValues = val;
  });
  
  DataTagPro_TagRuleDM_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_dm_changedValues = val;
  });
  
  DataTagPro_TagRuleTOU_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_tou_changedValues = val;
  });

  DataTagPro_TagRuleAccumulated_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_accumulated_changedValues = val;
  });
  
  DataTagPro_TagRuleCalculation_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_calculation_changedValues = val;
  });

  DataTagPro_TagRuleC2D_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_c2d_changedValues = val;
  });
  
  DataTagPro_TagRuleSchedule_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_schedule_changedValues = val;
  });

  DataTagPro_General_ConfigChangedLog.subscribe(val => {
      data_tag_pro_general_changedValues = val;
  });



  EventEngine_General_ConfigChangedLog.subscribe(val => {
      event_engine_general_changedValues = val;
  });

  EventEngine_Rule_ConfigChangedLog.subscribe(val => {
      event_engine_rule_changedValues = val;
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

  EventEngine_TriggerPING_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_ping_changeValues = val;
  });

  EventEngine_TriggerRSSI_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_rssi_changeValues = val;
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

  SDatalogger_ProxyMode_Topic_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_topic_changedValues = val;
  });


  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_edge_changedValues = val;
  });

  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_cloud_changedValues = val;
  });

  SDatalogger_MonitorMode_Topic_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_topic_changedValues = val;
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

  ModbusDataModel_Slave_ConfigChangedLog.subscribe(val => {
      modbus_data_model_slave_changedValues = val;
  });


  ModbusTag_ConfigChangedLog.subscribe(val => {
      modbus_tag_changedValues = val;
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

  PortConnection_Transparent_ConfigChangedLog.subscribe(val => {
    port_connection_transparent_changedValues = val;
  });    



  RemoteServiceConfigMqttChangedLog.subscribe(val => {
    remote_service_mqtt_changedValues = val;
  });


  RemoteServiceConfigRestfulChangedLog.subscribe(val => {
    remote_service_restful_changedValues = val;
  });

  RemoteServiceConfigRemoteControlChangedLog.subscribe(val => {
    remote_service_remote_control_changedValues = val;
  });


  GenericMQTTConfigChangedLog.subscribe(val => {
      generic_mqtt_changedValues = val;
  });


  AzHub_ConfigChangedLog.subscribe(val => {
      azhub_changedValues = val;
  });


  AzHubDPS_ConfigChangedLog.subscribe(val => {
      azhubdps_changedValues = val;
  });

  AzCentral_ConfigChangedLog.subscribe(val => {
      azcentral_changedValues = val;
  });

  AWSIoTcoreConfigChangedLog.subscribe(val => {
      awsIoT_core_changedValues = val;
  });  


  OpenVPN_Client_Advanced_PFW_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_pfw_changedValues = val;
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

  OpenVPN_Server_Advanced_PFW_ConfigChangedLog.subscribe(val => {
      openvpn_server_advanced_pfw_changedValues= val;
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

  WAN_PORT_SWITCH_ConfigChangedLog.subscribe(val => {
      port_switch_changedValues = val;
  });


  LanConfigChangedLog.subscribe(val => {
    	LANchangedValues=val;
  });

  DHCPServerLANConfigLog.subscribe(val => {
      dhcpServerChangedValues = val;
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


  ConfigurationP2EConfigChangedLog.subscribe(val => {
      configuration_p2e_changedValues = val;
  });

  OperationConfigChangedLog.subscribe(val => {
      operation_changedValues = val;
  });


  DockerConfigChangedLog.subscribe(val => {
      docker_changedValues = val;
  });



  function sendPingbyRwan() 
  {
    fetch(window.location.origin)
      .then(response => {
        if (response.status === 200) 
        {
          console.log('PingbyRWan successful');
          clearInterval(RestartIntervalIdByWan);

          setTimeout(() => {
              window.location.href = window.location.origin;
              }, 3000); 
        } 
        else 
        {
          console.log('PingbyRWan failed. Retrying...');
        }
      })
      .catch(error => 
      {
        console.error('PingbyRWan failed:', error);
      });
  }


  function sendPingbyRlan() 
  {
    fetch("https://"+lan_data.config.networking_lan.ipStatic.ip)
      .then(response => {
        if (response.status === 200) 
        {
          console.log('PingbyRLan successful');
          clearInterval(RestartIntervalIdByLan);
          console.log("window.location.href");
          console.log(window.location.href);
          setTimeout(() => {
              window.location.href = "https://"+lan_data.config.networking_lan.ipStatic.ip;
              }, 3000); 
        } 
        else 
        {
          console.log('PingbyRLan failed. Retrying...');
        }
      })
      .catch(error => 
      {
        console.error('PingbyRLan failed:', error);
      });
  }


 	async function SetThenPostReboot () 
  {    
    const res = await fetch(window.location.origin+"/PostReboot", {
        method: 'POST',
        body: sessionBinary
    })

    if (res.status == 200)
    {
      console.log("reboot command sent\r\n");
    }
 }

  async function RestartLiteWeb()
  {
    try
    {
      const res = await fetch(window.location.origin+"/RestartLITEweb", {
        method: 'POST',
        body: sessionBinary
       })

      if (res.status == 200)
      {
        console.log("restart liteWeb OK\r\n");
        setTimeout(() => {
            window.location = "https://"+lan_data.config.networking_lan.ipStatic.ip;
        }, 3000); 
      }
      
    }
    catch (error) 
    {
      console.error('Restart LiteWebd:', error);

      setTimeout(() => {
          window.location = "https://"+lan_data.config.networking_lan.ipStatic.ip;
      }, 3000); 
  
    }
  }


  async function RestartOnlyDHCP()
  {
    const res = await fetch(window.location.origin+"/reStartONLyDhcP", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart only dhcp OK\r\n");
      RestartCountOK++;

      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }

    }
  } 




  async function RestartLAN()
  {

    try
    {
      const res = await fetch(window.location.origin+"/RestArtLAn", {
        method: 'POST',
        body: sessionBinary
       })

      if (res.status == 200)
      {
        console.log("restart lan OK\r\n");
        RestartCountOK++;
        if (RestartCountOK == RestartCount)
        {
          if (redirect_to_new_ip!=1)
          {
            AllRestartFinished=1;
          }
        }

        if (redirect_to_new_ip==1)
        {
          setTimeout(() => {
              window.location = "https://"+lan_data.config.networking_lan.ipStatic.ip;
          }, 6000); 
        }

      }
    }
    catch (error) 
    {
      console.error('Error fetching resTarTlan data:', error);
      RestartIntervalIdByLan = setInterval(sendPingbyRlan, 10000);
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
      let onlyRestartDHCP=0;

      if (LANchangedValues.length !=0)
      {
          redirect_to_new_ip=0;
          let origin_ip=window.location.href.split('/apply')[0];
          console.log("origin_ip:", origin_ip);
          let new_ip=lan_data.config.networking_lan.ipStatic.ip;
          console.log("new_ip:", new_ip);

          redirect_to_new_ip=1;
          
      }
      else if (dhcpServerChangedValues.length!=0)
      {
        onlyRestartDHCP=1;
      }

      LANchangedValues=[];
      dhcpServerChangedValues=[]
      LanConfigChangedLog.set(LANchangedValues);
      DHCPServerLANConfigLog.set(dhcpServerChangedValues);

      if (onlyRestartDHCP == 1)
      {
        RestartOnlyDHCP();
      }
      else
      {
        RestartLAN();
      }
	  }
	};


  async function RestartNAT()
  {
    const res = await fetch(window.location.origin+"/ResTartNAT", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart nat OK\r\n");
      RestartCountOK++;

      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }

    }
  } 


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

      NAT_loopback_changedValues=[];
      NAT_LoopBack_ConfigChangedLog.set(NAT_loopback_changedValues);
      NAT_virtualComputer_changedValues=[];
      NAT_VC_ConfigChangedLog.set(NAT_virtualComputer_changedValues);
      NAT_virtualServer_changedValues=[];
      NAT_VS_ConfigChangedLog.set(NAT_virtualServer_changedValues);
      NAT_dmz_changedValues=[];
      NAT_Dmz_ConfigChangedLog.set(NAT_dmz_changedValues);

      RestartNAT();

	  }
	};



  async function RestartFireWall()
  {
    const res = await fetch(window.location.origin+"/reStartFirewAll", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart firewall OK\r\n");
      RestartCountOK++;



      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }

    }
  } 



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

      Firewall_general_changedValues = [];
      Firewall_ipfilter_changedValues = [];
      Firewall_macfilter_changedValues = [];

      Firewall_General_ConfigChangedLog.set(Firewall_general_changedValues);
      Firewall_IPFilter_ConfigChangedLog.set(Firewall_ipfilter_changedValues);
      Firewall_MACFilter_ConfigChangedLog.set(Firewall_macfilter_changedValues);

      RestartFireWall();

	  }
	};


  async function RestartStaticRoute()
  {
    const res = await fetch(window.location.origin+"/rEstarTStaticR", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart static route OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }

    }
  } 



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

      staticR_changedValues = [];
      StaticRouteConfigChangedLog.set(staticR_changedValues);

      RestartStaticRoute();

	  }
	};


  async function RestartMaintainance()
  {
    const res = await fetch(window.location.origin+"/ReStartMaintainance", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart maintainance OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }

    }
  } 



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
      maintenance_changedValues = [];
      MaintenanceConfigChangedLog.set(maintenance_changedValues);
      RestartMaintainance();

	  }
	}  


  async function RestartConfiguration()
  {
    const res = await fetch(window.location.origin+"/reStartConFigurATion", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart configuration OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }

    }
  } 



  async function SetConfigurationData()
  {
    const res = await fetch(window.location.origin+"/SEtconFigurationData", {
      method: 'POST',
      body: ContentConfiguration
     })

    if (res.status == 200)
    {
      console.log("set configuration_data OK\r\n");
      SetCountOK++;


      let applied_new_configuration_data= JSON.parse(JSON.stringify(configuration_data));
      configurationConfig.set(applied_new_configuration_data);
      configuration_p2e_changedValues = [];
      ConfigurationP2EConfigChangedLog.set(configuration_p2e_changedValues);
      RestartConfiguration();

    }
  }  


  async function RestartOperation()
  {
    const res = await fetch(window.location.origin+"/restaRTOperation", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart operation OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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

      operation_changedValues = [];
      OperationConfigChangedLog.set(operation_changedValues);

      RestartOperation();
	  }
	} 


  async function RestartDocker()
  {
    const res = await fetch(window.location.origin+"/REStartDocker", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart Docker OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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

      docker_changedValues = [];
      DockerConfigChangedLog.set(docker_changedValues);
      RestartDocker();

	  }
	} 

  let WanRestartContent;
  let ewanChangeIp=false;
  let ewanChangeConnectionType=false;

  async function PostChangeEWANip() 
  {
    const res = await fetch(window.location.origin+"/resetIPsecCausedWANipChange", {
        method: 'POST',
        body: sessionBinary
    })

      if (res.status == 200)
      {
        console.log("post ewan ip changed ok\r\n");

      }
  }


  async function RestartWAN()
  {

    try
    {
      const res = await fetch(window.location.origin+"/resTarTWAn", {
        method: 'POST',
        body: WanRestartContent
      })


      if (res.status == 200)
      {
        console.log("restart wan OK\r\n");
        RestartCountOK++;
        if (RestartCountOK == RestartCount)
        {
          AllRestartFinished=1;
        }

        if (ewanChangeIp || ewanChangeConnectionType)
        {
          PostChangeEWANip();
        }
      }
    }
    catch (error) 
    {
      if (ewanChangeIp || ewanChangeConnectionType)
      {
        PostChangeEWANip();
      }
      console.error('Error fetching resTarTWan data:', error);
      RestartIntervalIdByWan = setInterval(sendPingbyRwan, 15000);
    }
  } 

  async function PostEWANInputReject() 
  {
    const res = await fetch(window.location.origin+"/setEWanwebInputReject", {
        method: 'POST',
        body: sessionBinary
    })

      if (res.status == 200)
      {
        console.log("ewan input reject ok\r\n");

        ewanWebAccessChanged="";
      }
  }


  async function PostEWANInputAccept() 
  {
    const res = await fetch(window.location.origin+"/SetEWANwebinputAccept", {
        method: 'POST',
        body: sessionBinary
    })

      if (res.status == 200)
      {
        console.log("ewan input accept ok\r\n");

        ewanWebAccessChanged="";
      }
  }


  async function PostCWANInputReject() 
  {
    const res = await fetch(window.location.origin+"/sEtCWanwebReJect", {
        method: 'POST',
        body: sessionBinary
    })

      if (res.status == 200)
      {
        console.log("cwan input reject ok\r\n");

        cwanWebAccessChanged="";
      }
  }


  async function PostCWANInputAccept() 
  {
    const res = await fetch(window.location.origin+"/SetcwANwebACcept", {
        method: 'POST',
        body: sessionBinary
    })

      if (res.status == 200)
      {
        console.log("cwan input accept ok\r\n");
        cwanWebAccessChanged="";
      }
  }


  async function RestartGlink()
  {

    const res = await fetch(window.location.origin+"/PostRestartGlink", {
        method: 'POST',
        body: sessionBinary
    })

    if (res.status == 200)
    {
      console.log("glink restart ok\r\n");
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

      if (ewan1_basic_changedValues.length !=0)
      {
        ewanChangeIp = ewan1_basic_changedValues.some(str => str.includes('ip'));
        ewanChangeConnectionType = ewan1_basic_changedValues.some(str => str.includes('connectionType'));
      }



      ewan1_basic_changedValues = [];
      ewan1_ewlap_changedValues = [];
      redundancy_policy_changedValues = [];
      faresaving_policy_changedValues = [];
      port_switch_changedValues = [];  


      if (cwan1_glink_changedValues.length !=0 || cwan1_basic_changedValues.length !=0 || cwan1_advanced_changedValues.length !=0 || cwan1_simpolicy_changedValues.length !=0)
      {
        WanRestartContent=new Uint8Array(sessionBinary.length+1);
        WanRestartContent.set(sessionBinary);

        WanRestartContent[sessionBinary.length]=1;
      }
      else
      {
        WanRestartContent=new Uint8Array(sessionBinary.length+1);
        WanRestartContent.set(sessionBinary,0);
        WanRestartContent[sessionBinary.length]=0;     
      }

      console.log(WanRestartContent);
      cwan1_basic_changedValues = [];
      cwan1_advanced_changedValues = [];
      cwan1_simpolicy_changedValues = [];
      cwan1_glink_changedValues = [];
      WAN_CWAN1_GLink_ConfigChangedLog.set(cwan1_glink_changedValues);


      WAN_CWAN1_BASIC_ConfigChangedLog.set(cwan1_basic_changedValues);
      WAN_CWAN1_Advanced_ConfigChangedLog.set(cwan1_advanced_changedValues);
      WAN_CWAN1_SimPolicy_ConfigChangedLog.set(cwan1_simpolicy_changedValues);

      WAN_EWAN1_Basic_ConfigChangedLog.set(ewan1_basic_changedValues);
      WAN_EWAN1_EWLAP_ConfigChangedLog.set(ewan1_ewlap_changedValues);
      WAN_RedundancyPolicy_ConfigChangedLog.set(redundancy_policy_changedValues);
      WAN_FareSavingPolicy_ConfigChangedLog.set(faresaving_policy_changedValues);
      WAN_PORT_SWITCH_ConfigChangedLog.set(port_switch_changedValues);


      if (ewanWebAccessChanged != "")
      {
        console.log("ewanWebAccessChanged!!!");
        if (wan_data.config.networking_wan_ewan[0].basicSetting.webAccess==0)
        {
            PostEWANInputReject();   
        }
        else if (wan_data.config.networking_wan_ewan[0].basicSetting.webAccess==1)
        {

            PostEWANInputAccept();
        }

      }

      if (cwanWebAccessChanged != "")
      {
        console.log("cwanWebAccessChanged!!!");
        if (wan_data.config.networking_wan_cwan[0].basicSetting.webAccess==0)
        {
            PostCWANInputReject();   
        }
        else if (wan_data.config.networking_wan_cwan[0].basicSetting.webAccess==1)
        {

            PostCWANInputAccept();
        }

      }


      console.log("reset wan");

      RestartWAN();


	  }
	} 


  async function RestartIPSec()
  {
    const res = await fetch(window.location.origin+"/reStArtiPSec", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart ipsec OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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

      basic_changedValues = [];
      responder_conn_changedValues=[];
      initiator_conn_general_changedValues=[];
      initiator_conn_subnet_changedValues=[];


      IPsec_Responder_Conn_ConfigChangedLog.set(responder_conn_changedValues);
      IPsec_Initiator_Conn_General_ConfigChangedLog.set(initiator_conn_general_changedValues);
      IPsec_Initiator_Conn_Subnet_ConfigChangedLog.set(initiator_conn_subnet_changedValues);
      IPsec_Basic_ConfigChangedLog.set(basic_changedValues);

      RestartIPSec();

	  }
	} 



  async function RestartOpenVpn()
  {
    const res = await fetch(window.location.origin+"/ResTaRtOpenvPn", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart openvpn OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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

      openvpn_basic_changedValues = [];
      openvpn_server_conn_changedValues=[];
      openvpn_client_conn_changedValues=[];
      openvpn_server_advanced_ccd_changedValues=[];
      openvpn_server_advanced_psk_changedValues=[];
      openvpn_server_advanced_pfw_changedValues=[];
      openvpn_client_advanced_pfw_changedValues=[];
      openvpn_client_advanced_psk_changedValues=[];
      openvpn_client_advanced_rna_changedValues=[];
      openvpn_client_advanced_fo_changedValues=[];


      OpenVPN_Client_Advanced_PFW_ConfigChangedLog.set(openvpn_client_advanced_pfw_changedValues);
      OpenVPN_Client_Advanced_PSK_ConfigChangedLog.set(openvpn_client_advanced_psk_changedValues);
      OpenVPN_Client_Advanced_RNA_ConfigChangedLog.set(openvpn_client_advanced_rna_changedValues)
      OpenVPN_Client_Advanced_FO_ConfigChangedLog.set(openvpn_client_advanced_fo_changedValues);
      OpenVPN_Client_Conn_ConfigChangedLog.set(openvpn_client_conn_changedValues);
      OpenVPN_Server_Advanced_CCD_ConfigChangedLog.set(openvpn_server_advanced_ccd_changedValues);
      OpenVPN_Server_Advanced_PSK_ConfigChangedLog.set(openvpn_server_advanced_psk_changedValues);
      OpenVPN_Server_Advanced_PFW_ConfigChangedLog.set(openvpn_server_advanced_pfw_changedValues);      
      OpenVPN_Server_Conn_ConfigChangedLog.set(openvpn_server_conn_changedValues);
      OpenVPN_Basic_ConfigChangedLog.set(openvpn_basic_changedValues)

      RestartOpenVpn();

	  }	
	}


  async function RestartGenericMQTT()
  {
    const res = await fetch(window.location.origin+"/restartGenerIcMqtt", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart generic MQTT OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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
      generic_mqtt_changedValues=[];
      GenericMQTTConfigChangedLog.set(generic_mqtt_changedValues);
      RestartGenericMQTT();
	  }	
	}


  async function RestartAWSiotCore()
  {
    const res = await fetch(window.location.origin+"/ReStaRtawsiOt", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart awsiot OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }
    }
  }

  async function SetAWSiotCoreData()
  {
    const res = await fetch(window.location.origin+"/seTawsIOTcore", {
      method: 'POST',
      body: ContentAWSiotCore
     })

    if (res.status == 200)
    {
      console.log("set generic mqtt data OK\r\n");
      SetCountOK++;


      let applied_new_awsIoT_core_data= JSON.parse(JSON.stringify(awsIoT_core_data));
      awsIoTcoreConfig.set(applied_new_awsIoT_core_data);
      awsIoT_core_changedValues=[];
      AWSIoTcoreConfigChangedLog.set(awsIoT_core_changedValues);
      RestartAWSiotCore();
    } 
  }


  async function RestartAzure()
  {
    const res = await fetch(window.location.origin+"/RestARtAzUre", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart azure OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }
    }
  }


  async function SetAzureData()
  {
    const res = await fetch(window.location.origin+"/PostSetaZUre", {
      method: 'POST',
      body: ContentAzure
     })

    if (res.status == 200)
    {
      console.log("set azure data OK\r\n");
      SetCountOK++;


      let applied_new_azure_data= JSON.parse(JSON.stringify(azure_data));
      azureConfig.set(applied_new_azure_data);

      azhub_changedValues = [];
      azhubdps_changedValues=[];
      azcentral_changedValues=[];

      AzHub_ConfigChangedLog.set(azhub_changedValues);
      AzCentral_ConfigChangedLog.set(azcentral_changedValues);     
      AzHubDPS_ConfigChangedLog.set(azhubdps_changedValues);
      console.log("before restart azure");
      RestartAzure();
    } 
  }



  async function RestartRemoteService()
  {
    const res = await fetch(window.location.origin+"/RESTARTreMoteService", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart remote service OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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
      remote_service_mqtt_changedValues=[];
      remote_service_restful_changedValues = [];
      remote_service_remote_control_changedValues=[];

      RemoteServiceConfigRestfulChangedLog.set(remote_service_restful_changedValues);
      RemoteServiceConfigMqttChangedLog.set(remote_service_mqtt_changedValues);
      RemoteServiceConfigRemoteControlChangedLog.set(remote_service_remote_control_changedValues);
      RestartRemoteService();

	  }		
	}



  async function RestartPortConnection()
  {
    const res = await fetch(window.location.origin+"/rEstartPortCONnection", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart port connection OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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

      port_connection_lan_changedValues = [];
      port_connection_com_changedValues = [];
      let retartPortConnection=0;
      if (port_connection_transparent_changedValues.length !=0)
      {
        retartPortConnection=1;
      }
      port_connection_transparent_changedValues = [];


      PortConnection_LAN_ConfigChangedLog.set(port_connection_lan_changedValues);
      PortConnection_COM_ConfigChangedLog.set(port_connection_com_changedValues);
      PortConnection_Transparent_ConfigChangedLog.set(port_connection_transparent_changedValues);      
      
      if (retartPortConnection)
      {
        RestartPortConnection();
      }
      else
      {
        RestartCountOK++;
        if (RestartCountOK == RestartCount)
        {
          AllRestartFinished=1;
        }

      }
	  }		
	}


  async function RestartCertificate()
  {
    const res = await fetch(window.location.origin+"/restartCertificATE", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart certificate OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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

      certificate_settings_changedValues = [];
      Certificate_Settings_ConfigChangedLog.set(certificate_settings_changedValues);
      RestartCertificate();

	  }		
	}


  async function RestartModbus()
  {
    const res = await fetch(window.location.origin+"/ReStArTModBUS", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart modbus OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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
      modbus_gateway_TtR_changedValues=[];
      modbus_gateway_RtT_changedValues=[];
      modbus_gateway_RtR_changedValues=[];
      modbus_gateway_TtT_changedValues=[];

      modbus_tag_changedValues=[];
      modbus_data_model_master_changedValues=[];
      modbus_data_model_slave_changedValues=[];
      modbus_tcp_master_changedValues=[];
      modbus_tcp_slave_changedValues=[];
      modbus_rtu_master_changedValues=[];
      modbus_rtu_slave_changedValues=[];

      ModbusGateway_TtR_ConfigChangedLog.set(modbus_gateway_TtR_changedValues);
      ModbusGateway_RtT_ConfigChangedLog.set(modbus_gateway_RtT_changedValues);
      ModbusGateway_RtR_ConfigChangedLog.set(modbus_gateway_RtR_changedValues);
      ModbusGateway_TtT_ConfigChangedLog.set(modbus_gateway_TtT_changedValues);
      ModbusDataModel_Slave_ConfigChangedLog.set(modbus_data_model_slave_changedValues);
      ModbusTag_ConfigChangedLog.set(modbus_tag_changedValues);
      ModbusTCP_Slave_ConfigChangedLog.set(modbus_tcp_slave_changedValues);
      ModbusTCP_Master_ConfigChangedLog.set(modbus_tcp_master_changedValues);
      ModbusRTU_Slave_ConfigChangedLog.set(modbus_rtu_slave_changedValues);
      ModbusRTU_Master_ConfigChangedLog.set(modbus_rtu_master_changedValues);

      RestartModbus();
	  }		
	}

  async function RestartSmartDataLogger()
  {
    const res = await fetch(window.location.origin+"/restaRTsmaRTDatalOgger", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart smart data logger OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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

      sdata_logger_general_changedValues = [];
      sdata_logger_proxy_edge_changedValues = [];
      sdata_logger_proxy_cloud_changedValues = [];
      sdata_logger_proxy_topic_changedValues = [];      
      sdata_logger_monitor_edge_changedValues = [];
      sdata_logger_monitor_cloud_changedValues = [];
      sdata_logger_monitor_topic_changedValues = [];

      SDatalogger_General_ConfigChangedLog.set(sdata_logger_general_changedValues);
      SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);
      SDatalogger_ProxyMode_Cloud_ConfigChangedLog.set(sdata_logger_proxy_cloud_changedValues);
      SDatalogger_ProxyMode_Topic_ConfigChangedLog.set(sdata_logger_proxy_topic_changedValues);      
      SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);
      SDatalogger_MonitorMode_Cloud_ConfigChangedLog.set(sdata_logger_monitor_cloud_changedValues);
      SDatalogger_MonitorMode_Topic_ConfigChangedLog.set(sdata_logger_monitor_topic_changedValues);

      RestartSmartDataLogger();

    }   

  }  





  async function RestartEventEngine()
  {
    const res = await fetch(window.location.origin+"/REStarTEventENGine", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart event engine OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
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


      event_engine_general_changedValues = [];
      event_engine_rule_changedValues = [];      
      event_engine_trigger_sms_changeValues=[];
      event_engine_trigger_di_changeValues=[];
      event_engine_trigger_modbus_changeValues=[];
      event_engine_trigger_tcpmsg_changeValues=[];
      event_engine_trigger_mqtt_changeValues=[];
      event_engine_trigger_ping_changeValues=[];
      event_engine_trigger_rssi_changeValues=[];          
      event_engine_action_sms_changeValues=[];
      event_engine_action_email_changeValues=[];
      event_engine_action_do_changeValues=[];
      event_engine_action_modbus_changeValues=[];
      event_engine_action_tcpmsg_changeValues=[];
      event_engine_action_mqtt_changeValues=[];
      event_engine_action_line_changeValues=[];


      EventEngine_General_ConfigChangedLog.set(event_engine_general_changedValues);
      EventEngine_Rule_ConfigChangedLog.set(event_engine_rule_changedValues);      
      EventEngine_TriggerSMS_ConfigChangedLog.set(event_engine_trigger_sms_changeValues);
      EventEngine_TriggerDI_ConfigChangedLog.set(event_engine_trigger_di_changeValues);
      EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
      EventEngine_TriggerTCPMsg_ConfigChangedLog.set(event_engine_trigger_tcpmsg_changeValues);
      EventEngine_TriggerMQTT_ConfigChangedLog.set(event_engine_trigger_mqtt_changeValues);
      EventEngine_TriggerPING_ConfigChangedLog.set(event_engine_trigger_ping_changeValues);
      EventEngine_TriggerRSSI_ConfigChangedLog.set(event_engine_trigger_rssi_changeValues);              
      EventEngine_ActionSMS_ConfigChangedLog.set(event_engine_action_sms_changeValues);
      EventEngine_ActionEmail_ConfigChangedLog.set(event_engine_action_email_changeValues);
      EventEngine_ActionDO_ConfigChangedLog.set(event_engine_action_do_changeValues);
      EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
      EventEngine_ActionTCPMsg_ConfigChangedLog.set(event_engine_action_tcpmsg_changeValues);
      EventEngine_ActionMQTT_ConfigChangedLog.set(event_engine_action_mqtt_changeValues);
      EventEngine_ActionLINE_ConfigChangedLog.set(event_engine_action_line_changeValues);


      RestartEventEngine();

    }   

  }     

  async function RestartDataTagPro()
  {
    const res = await fetch(window.location.origin+"/ReSTartDatatagPro", {
      method: 'POST',
      body: sessionBinary
     })

    if (res.status == 200)
    {
      console.log("restart data tag pro OK\r\n");
      RestartCountOK++;
      if (RestartCountOK == RestartCount)
      {
        AllRestartFinished=1;
      }

    }
  }   

  async function SetDataTagPro()
  {
    const res = await fetch(window.location.origin+"/sETdaTATagPRO", {
      method: 'POST',
      body: ContentDatatagPro
     })

    if (res.status == 200)
    {
      console.log("set data tag pro OK\r\n");
      SetCountOK++;


      let applied_new_data_tag_pro= JSON.parse(JSON.stringify(data_tag_pro_data));
      datatagproConfig.set(applied_new_data_tag_pro);

      data_tag_pro_general_changedValues = [];
      data_tag_pro_tag_c2d_changedValues = [];
      data_tag_pro_tag_schedule_changedValues=[];
      data_tag_pro_tag_calculation_changedValues = [];
      data_tag_pro_tag_accumulated_changedValues = [];  
      data_tag_pro_tag_tou_changedValues = [];
      data_tag_pro_tag_dm_changedValues = [];
      data_tag_pro_tag_scada_changedValues = [];
      data_tag_pro_tag_event_changedValues = [];
      data_tag_pro_ul_changedValues = [];

      DataTagPro_ULRule_ConfigChangedLog.set(data_tag_pro_ul_changedValues);
      DataTagPro_TagRuleEvent_ConfigChangedLog.set(data_tag_pro_tag_event_changedValues);
      DataTagPro_TagRuleSCADA_ConfigChangedLog.set(data_tag_pro_tag_scada_changedValues);
      DataTagPro_TagRuleDM_ConfigChangedLog.set(data_tag_pro_tag_dm_changedValues);
      DataTagPro_TagRuleTOU_ConfigChangedLog.set(data_tag_pro_tag_tou_changedValues);
      DataTagPro_TagRuleAccumulated_ConfigChangedLog.set(data_tag_pro_tag_accumulated_changedValues);
      DataTagPro_TagRuleCalculation_ConfigChangedLog.set(data_tag_pro_tag_calculation_changedValues);
      DataTagPro_TagRuleC2D_ConfigChangedLog.set(data_tag_pro_tag_c2d_changedValues);
      DataTagPro_TagRuleSchedule_ConfigChangedLog.set(data_tag_pro_tag_schedule_changedValues);

      DataTagPro_General_ConfigChangedLog.set(data_tag_pro_general_changedValues);

      RestartDataTagPro();  

    }

  }

	function CalculateTotalSetCount()
	{
	  if  (lan_data != "" && LANchangedValues.length!=0 || dhcpServerChangedValues.length !=0)
    {
    	SetCount++;
      RestartCount++;
    }

    if (nat_data != "" && (NAT_loopback_changedValues.length !=0 || 
															NAT_virtualServer_changedValues.length !=0 ||
															NAT_virtualComputer_changedValues.length !=0 ||
															NAT_dmz_changedValues.length !=0))
    {
    	SetCount++;
      RestartCount++;    
    }


    if (firewall_data != "" && (Firewall_general_changedValues.length !=0 || 
																		Firewall_ipfilter_changedValues.length !=0 ||
																		Firewall_macfilter_changedValues.length !=0))
   	{
    	SetCount++;
      RestartCount++; 
    }

    if (static_route_data !="" && staticR_changedValues.length !=0)
    {
    	SetCount++; 
      RestartCount++;
    }
    

    if (maintenance_data != "" && maintenance_changedValues.length!=0)
    {
    	SetCount++;
      RestartCount++;     
    }

    if (configuration_data != "" && configuration_p2e_changedValues.length !=0)
    {
      SetCount++;
      RestartCount++;  
    }

    if (operation_data != "" && operation_changedValues.length!=0)
    {
    	SetCount++;
      RestartCount++; 
    }


    if (docker_data != "" && docker_changedValues.length!=0)
    {
    	SetCount++;  
      RestartCount++;   
    }


    if (wan_data != "" && ( cwan1_basic_changedValues.length !=0 ||
  															cwan1_advanced_changedValues.length != 0 ||
  															cwan1_simpolicy_changedValues.length != 0 ||
  															cwan1_glink_changedValues.length != 0 ||
  															ewan1_basic_changedValues.length != 0 ||
  															ewan1_ewlap_changedValues.length != 0 ||
  															redundancy_policy_changedValues.length != 0 ||
  															faresaving_policy_changedValues.length != 0 ||
                                port_switch_changedValues.length !=0))
  	{
  	  SetCount++; 
      RestartCount++;
  	}

		if (ipsec_data != "" && (basic_changedValues.length !=0 ||
							responder_conn_changedValues.length !=0 ||
							initiator_conn_general_changedValues.length !=0 ||
							initiator_conn_subnet_changedValues.length !=0))
		{
			SetCount++;
      RestartCount++;
		}

		if (openvpn_data != "" &&(openvpn_basic_changedValues.length !=0 ||
  			openvpn_server_conn_changedValues.length !=0 ||
  			openvpn_client_conn_changedValues.length !=0 ||
  			openvpn_server_advanced_ccd_changedValues.length !=0 ||
  			openvpn_server_advanced_psk_changedValues.length !=0 ||
        openvpn_server_advanced_pfw_changedValues.length !=0 ||
        openvpn_client_advanced_pfw_changedValues.length !=0 ||
  			openvpn_client_advanced_psk_changedValues.length !=0 ||
  			openvpn_client_advanced_rna_changedValues.length !=0 ||
  			openvpn_client_advanced_fo_changedValues.length !=0)
		)
		{
			SetCount++;
      RestartCount++;
		}

		if (generic_mqtt_data != "" && generic_mqtt_changedValues.length != 0)
		{
			SetCount++;	
      RestartCount++;
		}

    if (azure_data != "" && (azhub_changedValues.length !=0 || azhubdps_changedValues.length !=0 || azcentral_changedValues.length !=0))
    {
      SetCount++; 
      RestartCount++;
    }

    if (awsIoT_core_data != "" && awsIoT_core_changedValues.length != 0)
    {
      SetCount++; 
      RestartCount++;
    }

		if (remote_service_data != "" && (remote_service_mqtt_changedValues.length!=0||
                                      remote_service_restful_changedValues.length !=0 ||
                                      remote_service_remote_control_changedValues.length !=0) )
		{
			SetCount++;	
      RestartCount++;		
		}

		if (port_connection_data != ""  && (port_connection_lan_changedValues.length !=0 ||
  			port_connection_com_changedValues.length !=0 || port_connection_transparent_changedValues.length != 0))
  	{
			SetCount++;	
      RestartCount++;
  	}

  	if (certificate_data !="" && certificate_settings_changedValues.length !=0)
  	{
  		SetCount++;	
      RestartCount++;
  	}

  	if (modbus_data !="" && (modbus_gateway_TtR_changedValues.length !=0 ||
		    modbus_gateway_RtT_changedValues.length !=0 ||
		    modbus_gateway_RtR_changedValues.length !=0 ||
		    modbus_gateway_TtT_changedValues.length !=0 ||
		    modbus_data_model_master_changedValues.length !=0 ||
		    modbus_data_model_slave_changedValues.length !=0 ||
        modbus_tag_changedValues.length !=0 ||
		    modbus_tcp_master_changedValues.length !=0 ||
		    modbus_tcp_slave_changedValues.length !=0 ||
		    modbus_rtu_master_changedValues.length !=0 ||
		    modbus_rtu_slave_changedValues.length !=0 ))
  	{
  		SetCount++;	
      RestartCount++;
  	}

    if (sdata_logger_data != "" && (sdata_logger_general_changedValues.length !=0 ||
        sdata_logger_proxy_edge_changedValues.length !=0 ||
        sdata_logger_proxy_cloud_changedValues.length !=0 ||
        sdata_logger_proxy_topic_changedValues.length !=0 ||
        sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0 ||
        sdata_logger_monitor_topic_changedValues.length !=0 ))
    {
      SetCount++;   
      RestartCount++;
    }

    if (event_engine_data != "" && (
        event_engine_action_line_changeValues.length != 0 ||
        event_engine_action_mqtt_changeValues.length != 0 ||
        event_engine_action_tcpmsg_changeValues.length != 0 ||
        event_engine_action_modbus_changeValues.length !=0 ||
        event_engine_action_do_changeValues.length != 0 ||
        event_engine_action_email_changeValues.length !=0 ||
        event_engine_action_sms_changeValues.length !=0 ||
        event_engine_trigger_ping_changeValues.length != 0 || 
        event_engine_trigger_rssi_changeValues.length != 0 ||           
        event_engine_trigger_mqtt_changeValues.length != 0 ||
        event_engine_trigger_tcpmsg_changeValues.length !=0 ||
        event_engine_trigger_modbus_changeValues.length != 0 ||
        event_engine_trigger_di_changeValues.length !=0 || 
        event_engine_trigger_sms_changeValues.length !=0 ||
        event_engine_general_changedValues.length !=0 ||
        event_engine_rule_changedValues.length !=0))
    {
      SetCount++;
      RestartCount++;   
    }

    if (data_tag_pro_data != "" && (
        data_tag_pro_general_changedValues.length !=0 ||
        data_tag_pro_tag_c2d_changedValues.length !=0 ||
        data_tag_pro_tag_schedule_changedValues.length !=0 ||
        data_tag_pro_tag_calculation_changedValues.length !=0 ||
        data_tag_pro_tag_accumulated_changedValues.length !=0 ||
        data_tag_pro_tag_tou_changedValues.length !=0 ||
        data_tag_pro_tag_dm_changedValues.length !=0 ||
        data_tag_pro_tag_scada_changedValues.length !=0 ||
        data_tag_pro_tag_event_changedValues.length !=0 ||
        data_tag_pro_ul_changedValues.length !=0 ))
    {
      SetCount++;
      RestartCount++;   
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
      	if  (lan_data != "" && (LANchangedValues.length!=0 || dhcpServerChangedValues.length !=0))
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


        if (configuration_data != "" && configuration_p2e_changedValues.length !=0)
        {
          let ConfigurationDataString = JSON.stringify(configuration_data, null, 0);
          const bytesArray = Array.from(ConfigurationDataString).map(char => char.charCodeAt(0));
          ConfigurationBinary = new Uint8Array(bytesArray);
          ContentConfiguration=new Uint8Array(ConfigurationBinary.length+sessionBinary.length);
          ContentConfiguration.set(sessionBinary,0);
          ContentConfiguration.set(ConfigurationBinary, sessionBinary.length);
          SetConfigurationData(); 
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
  															faresaving_policy_changedValues.length != 0 ||
                                port_switch_changedValues.length !=0))
  			{
          let WanString = JSON.stringify(wan_data, null, 0);
					const bytesArray = Array.from(WanString).map(char => char.charCodeAt(0));
	    		WanBinary = new Uint8Array(bytesArray);
	      	ContentWan=new Uint8Array(WanBinary.length+sessionBinary.length);
	        ContentWan.set(sessionBinary,0);
	        ContentWan.set(WanBinary, sessionBinary.length);
          console.log("set wan");
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
          openvpn_server_advanced_pfw_changedValues.length !=0 ||
          openvpn_client_advanced_pfw_changedValues.length !=0 ||
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


        if (azure_data != "" && (azhub_changedValues.length !=0 || azhubdps_changedValues.length !=0 || azcentral_changedValues.length !=0))
        {
          let AzureString = JSON.stringify(azure_data, null, 0);
          const bytesArray = Array.from(AzureString).map(char => char.charCodeAt(0));
          AzureBinary = new Uint8Array(bytesArray);
          ContentAzure=new Uint8Array(AzureBinary.length+sessionBinary.length);
          ContentAzure.set(sessionBinary,0);
          ContentAzure.set(AzureBinary, sessionBinary.length);
          SetAzureData();

        }

        if (awsIoT_core_data != "" && awsIoT_core_changedValues.length !=0)
        {
          let AWSiotString = JSON.stringify(awsIoT_core_data, null, 0);
          const bytesArray = Array.from(AWSiotString).map(char => char.charCodeAt(0));
          AWSiotCoreBinary = new Uint8Array(bytesArray);
          ContentAWSiotCore=new Uint8Array(AWSiotCoreBinary.length+sessionBinary.length);
          ContentAWSiotCore.set(sessionBinary,0);
          ContentAWSiotCore.set(AWSiotCoreBinary, sessionBinary.length);
          SetAWSiotCoreData();
        }



				if (remote_service_data != "" && (remote_service_mqtt_changedValues.length!=0||
                                      remote_service_restful_changedValues.length !=0 ||
                                      remote_service_remote_control_changedValues.length !=0))
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
  			port_connection_com_changedValues.length !=0 || port_connection_transparent_changedValues.length !=0))
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
										    modbus_data_model_master_changedValues.length !=0 ||
										    modbus_data_model_slave_changedValues.length !=0 ||
                        modbus_tag_changedValues.length !=0 ||
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
                        sdata_logger_proxy_topic_changedValues.length !=0 ||
                        sdata_logger_monitor_edge_changedValues.length !=0 ||
                        sdata_logger_monitor_cloud_changedValues.length !=0 ||
                        sdata_logger_monitor_topic_changedValues.length !=0 ))
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
                      event_engine_trigger_ping_changeValues.length != 0 ||
                      event_engine_trigger_rssi_changeValues.length != 0 || 
                      event_engine_trigger_mqtt_changeValues.length !=0 ||
                      event_engine_trigger_tcpmsg_changeValues.length !=0||
                      event_engine_trigger_modbus_changeValues.length !=0 ||
                      event_engine_trigger_di_changeValues.length !=0 ||
                      event_engine_trigger_sms_changeValues.length !=0 ||
                      event_engine_general_changedValues.length !=0 ||
                      event_engine_rule_changedValues.length !=0))
        {
          let EventEngineString = JSON.stringify(event_engine_data, null, 0);
          const bytesArray = Array.from(EventEngineString).map(char => char.charCodeAt(0));
          EventEngineBinary = new Uint8Array(bytesArray);
          ContentEventEngine=new Uint8Array(EventEngineBinary.length+sessionBinary.length);
          ContentEventEngine.set(sessionBinary,0);
          ContentEventEngine.set(EventEngineBinary, sessionBinary.length);
          SetEventEngineData();
        }

        if (data_tag_pro_data != "" && (
          data_tag_pro_general_changedValues.length !=0 ||
          data_tag_pro_tag_c2d_changedValues.length !=0 ||
          data_tag_pro_tag_schedule_changedValues.length !=0 ||
          data_tag_pro_tag_calculation_changedValues.length !=0 ||
          data_tag_pro_tag_accumulated_changedValues.length !=0 ||
          data_tag_pro_tag_tou_changedValues.length !=0 ||
          data_tag_pro_tag_dm_changedValues.length !=0 ||
          data_tag_pro_tag_scada_changedValues.length !=0 ||
          data_tag_pro_tag_event_changedValues.length !=0 ||
          data_tag_pro_ul_changedValues.length !=0 ))
        {
          let DataTagProString=JSON.stringify(data_tag_pro_data, null, 0);
          const bytesArray = Array.from(DataTagProString).map(char => char.charCodeAt(0));
          DatatagProBinary = new Uint8Array(bytesArray);

          ContentDatatagPro=new Uint8Array(DatatagProBinary.length+sessionBinary.length);
          ContentDatatagPro.set(sessionBinary,0);
          ContentDatatagPro.set(DatatagProBinary, sessionBinary.length);
          SetDataTagPro();
        }

      }
	};


</script>



<div class="text-center">
<Heading tag="h2" customSize="text-3xl font-extrabold" class="text-center mb-2 font-semibold text-gray-900 dark:text-white">The following configs are changed:</Heading>
<List tag="ol" {color} class="text-2xl space-y-1" style="display: inline-block;text-align: left;">



{#if data_tag_pro_general_changedValues.length !=0 || data_tag_pro_tag_c2d_changedValues.length !=0 || 
          data_tag_pro_tag_calculation_changedValues.length !=0 ||
          data_tag_pro_tag_accumulated_changedValues.length !=0 ||
          data_tag_pro_tag_tou_changedValues.length !=0 ||
          data_tag_pro_tag_dm_changedValues.length !=0 ||
          data_tag_pro_tag_scada_changedValues.length !=0 ||
          data_tag_pro_tag_event_changedValues.length !=0 ||
          data_tag_pro_tag_schedule_changedValues.length !=0 ||
          data_tag_pro_ul_changedValues.length !=0}
<Li>Data Tag Pro
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
{#if data_tag_pro_general_changedValues.length !=0}
<Li>General
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each data_tag_pro_general_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

</Li>
{/if}

{#if  data_tag_pro_tag_c2d_changedValues.length !=0 || 
          data_tag_pro_tag_calculation_changedValues.length !=0 ||
          data_tag_pro_tag_accumulated_changedValues.length !=0 ||
          data_tag_pro_tag_tou_changedValues.length !=0 ||
          data_tag_pro_tag_dm_changedValues.length !=0 ||
          data_tag_pro_tag_scada_changedValues.length !=0 ||
          data_tag_pro_tag_event_changedValues.length !=0 ||
          data_tag_pro_tag_schedule_changedValues.length !=0 }
<Li>Tag Rule
{#if  data_tag_pro_tag_c2d_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Cloud To Device Tag
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_c2d_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


{#if data_tag_pro_tag_schedule_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Schedule Tag
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_schedule_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>

{/if}



{#if  data_tag_pro_tag_calculation_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Calculation
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_calculation_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if  data_tag_pro_tag_accumulated_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Accumulated
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_accumulated_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


{#if  data_tag_pro_tag_tou_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> TOU
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_tou_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}



{#if data_tag_pro_tag_dm_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Direct Method
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_dm_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if data_tag_pro_tag_scada_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> SCADA
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_scada_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

{#if data_tag_pro_tag_event_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Event
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_tag_event_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}

</Li>
{/if}


{#if  data_tag_pro_ul_changedValues.length !=0}
<Li>UL Rule


<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each data_tag_pro_ul_changedValues as item}
      <Li>{item}</Li>
   {/each}
</List>



</Li>
{/if}

  </List>
  </Li>


{/if}





{#if  event_engine_action_line_changeValues.length != 0 ||
      event_engine_action_mqtt_changeValues.length != 0 || 
      event_engine_action_tcpmsg_changeValues.length != 0 ||
      event_engine_action_modbus_changeValues.length != 0 ||
      event_engine_action_do_changeValues.length != 0 ||
      event_engine_action_email_changeValues.length !=0 ||
      event_engine_action_sms_changeValues.length != 0 ||
      event_engine_trigger_rssi_changeValues.length != 0 || 
      event_engine_trigger_ping_changeValues.length != 0 ||
      event_engine_trigger_mqtt_changeValues.length !=0 ||
      event_engine_trigger_tcpmsg_changeValues.length !=0 ||
      event_engine_trigger_modbus_changeValues.length !=0 ||
      event_engine_trigger_di_changeValues.length !=0 ||
      event_engine_trigger_sms_changeValues.length !=0 ||
      event_engine_general_changedValues.length !=0 ||
      event_engine_rule_changedValues.length !=0}
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


{#if event_engine_rule_changedValues.length !=0}
<Li>Rule
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each event_engine_rule_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
</Li>
{/if}


{#if    event_engine_trigger_mqtt_changeValues.length !=0||
        event_engine_trigger_tcpmsg_changeValues.length !=0||
        event_engine_trigger_modbus_changeValues.length !=0||
        event_engine_trigger_di_changeValues.length !=0 ||
        event_engine_trigger_sms_changeValues.length !=0 ||
        event_engine_trigger_rssi_changeValues.length != 0 || 
        event_engine_trigger_ping_changeValues.length != 0}
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


{#if  event_engine_trigger_ping_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> PING
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_trigger_ping_changeValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}



{#if  event_engine_trigger_rssi_changeValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> RSSI
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each event_engine_trigger_rssi_changeValues as item}
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
        sdata_logger_proxy_topic_changedValues.length !=0 ||        
        sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0 ||
        sdata_logger_monitor_topic_changedValues.length !=0}

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
        sdata_logger_proxy_cloud_changedValues.length !=0 ||
        sdata_logger_proxy_topic_changedValues.length !=0 }
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

{#if  sdata_logger_proxy_topic_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Topic Settings
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each sdata_logger_proxy_topic_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>

 </Li>
 </List>
{/if}


</Li>
{/if}




{#if  sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0 ||
        sdata_logger_monitor_topic_changedValues.length !=0
        }
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

{#if  sdata_logger_monitor_topic_changedValues.length !=0}
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
 <Li> Topic Settings
<List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each sdata_logger_monitor_topic_changedValues as item}
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
										    modbus_data_model_master_changedValues.length !=0 ||
										    modbus_data_model_slave_changedValues.length !=0 ||
                        modbus_tag_changedValues.length !=0 ||
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

{#if modbus_tag_changedValues.length !=0}
<Li>Tag
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
{#each modbus_tag_changedValues as item}
      <Li>{item}</Li>
   {/each}
 </List>

</Li>
{/if}



{#if modbus_data_model_master_changedValues.length !=0 || modbus_data_model_slave_changedValues.length !=0}
			<Li>Data Model
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
{#if modbus_data_model_master_changedValues.length !=0}
			<Li>Master
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_data_model_master_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}
{#if modbus_data_model_slave_changedValues.length !=0}
			<Li>Slave
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each modbus_data_model_slave_changedValues as item}
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
  			port_connection_com_changedValues.length !=0 ||
        port_connection_transparent_changedValues.length !=0}
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


    {#if port_connection_transparent_changedValues.length !=0}      
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
    TCP Transparent
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
   {#each port_connection_transparent_changedValues as item}
    <Li>{item}</Li>
  {/each}
  </List>
  </Li> 
  </List>
  {/if}


  			</Li>

{/if}

{#if remote_service_mqtt_changedValues.length !=0 || remote_service_restful_changedValues.length !=0 || remote_service_remote_control_changedValues.length !=0}
	<Li>Remote Service
 

 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">

{#if remote_service_restful_changedValues.length !=0}
      <Li>REST
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each remote_service_restful_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}


{#if remote_service_mqtt_changedValues.length !=0}
      <Li>MQTT
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each remote_service_mqtt_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}

{#if remote_service_remote_control_changedValues.length !=0}
      <Li>Remote Control
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-green-900">
  {#each remote_service_remote_control_changedValues as item}
      <Li>{item}</Li>
   {/each}

  </List>
  </Li>
{/if}


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

{#if azhub_changedValues.length !=0 || azhubdps_changedValues.length !=0 || azcentral_changedValues.length !=0}
  <Li>Azure IoT
{#if azhub_changedValues.length !=0}

  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li> Hub

 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each azhub_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>

  </List>
  
{/if}


{#if azhubdps_changedValues.length !=0}

  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li> DPS

 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each azhubdps_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
   
  </List>
  
{/if}



{#if azcentral_changedValues.length !=0}

  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li> Central

 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each azcentral_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
   
  </List>
  
{/if}


  </Li>


{/if}


{#if awsIoT_core_changedValues.length !=0}
  <Li>AWS IoT Core
 <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each awsIoT_core_changedValues as item}
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
    openvpn_server_advanced_pfw_changedValues.length !=0 ||
    openvpn_client_advanced_pfw_changedValues.length !=0 ||
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


	{#if openvpn_server_advanced_ccd_changedValues.length !=0 || openvpn_server_advanced_psk_changedValues.length !=0 || openvpn_server_advanced_pfw_changedValues.length !=0}
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



    {#if openvpn_server_advanced_pfw_changedValues.length !=0}
      <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
        {#each openvpn_server_advanced_pfw_changedValues as item}
        <Li>{item}</Li>
        {/each}
      </List>
    {/if}

  </Li> 
  </List>
	{/if}

	{#if openvpn_client_advanced_psk_changedValues.length !=0 || openvpn_client_advanced_rna_changedValues.length !=0 || openvpn_client_advanced_fo_changedValues.length !=0 || openvpn_client_advanced_pfw_changedValues.length !=0 }
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


    {#if openvpn_client_advanced_pfw_changedValues.length !=0}
      <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
        {#each openvpn_client_advanced_pfw_changedValues as item}
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
  </Li> 
  </List>
	{/if}


  {#if initiator_conn_subnet_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
    Initiator Connection Tunnel Subnet
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
  		faresaving_policy_changedValues.length != 0 ||
      port_switch_changedValues.length != 0
  		}
  <Li>WAN
 {#if cwan1_basic_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN Basic Settings
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each cwan1_basic_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
	{/if}

	{#if cwan1_advanced_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
  	Cellular-WAN Advanced Settings
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
  	Cellular-WAN SIM Policy
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
  	Cellular-WAN LTE Guarantie Link
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


  {#if port_switch_changedValues.length !=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li>
    Port Switch
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each port_switch_changedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li> 
  </List>
  {/if} 

  </Li>


{/if}


{#if LANchangedValues.length!=0 || dhcpServerChangedValues.length !=0}
  <Li>LAN

{#if LANchangedValues.length!=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li> General
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each LANchangedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
  </List>

{/if}

{#if dhcpServerChangedValues.length!=0}
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-blue-400">
  <Li> DHCP Server
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each dhcpServerChangedValues as item}
      <Li>{item}</Li>
   {/each}
  </List>
  </Li>
  </List>
{/if}

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
  	Port Forwarding
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

{#if configuration_p2e_changedValues.length !=0}
  <Li>Configuration
  <List tag="ol" class="pl-5 mt-2 space-y-1 text-red-600">
  {#each configuration_p2e_changedValues as item}
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

{#if    data_tag_pro_general_changedValues.length !=0 ||
        data_tag_pro_tag_c2d_changedValues.length !=0 ||
        data_tag_pro_tag_calculation_changedValues.length !=0 ||
        data_tag_pro_tag_accumulated_changedValues.length !=0 ||
        data_tag_pro_tag_tou_changedValues.length !=0 ||
        data_tag_pro_tag_dm_changedValues.length !=0 ||
        data_tag_pro_tag_scada_changedValues.length !=0 ||
        data_tag_pro_tag_schedule_changedValues.length !=0 ||
        data_tag_pro_tag_event_changedValues.length !=0 ||
        data_tag_pro_ul_changedValues.length !=0 ||
        event_engine_action_line_changeValues.length != 0 ||
        event_engine_action_mqtt_changeValues.length != 0 ||
        event_engine_action_tcpmsg_changeValues.length !=0 ||
        event_engine_action_modbus_changeValues.length !=0 ||
        event_engine_action_do_changeValues.length != 0 ||
        event_engine_action_email_changeValues.length != 0||
        event_engine_action_sms_changeValues.length != 0 ||
        event_engine_trigger_rssi_changeValues.length !=0 ||         
        event_engine_trigger_ping_changeValues.length !=0 ||        
        event_engine_trigger_mqtt_changeValues.length !=0 ||
        event_engine_trigger_tcpmsg_changeValues.length !=0 ||
        event_engine_trigger_modbus_changeValues.length !=0||
        event_engine_trigger_di_changeValues.length !=0 ||
        event_engine_trigger_sms_changeValues.length !=0 ||
        event_engine_general_changedValues.length !=0 || 		
        event_engine_rule_changedValues.length !=0 || 
        sdata_logger_general_changedValues.length !=0 ||
        sdata_logger_proxy_edge_changedValues.length !=0 ||
        sdata_logger_proxy_cloud_changedValues.length !=0 ||
        sdata_logger_proxy_topic_changedValues.length !=0 ||
        sdata_logger_monitor_edge_changedValues.length !=0 ||
        sdata_logger_monitor_cloud_changedValues.length !=0 ||
        sdata_logger_monitor_topic_changedValues.length !=0 ||
  			modbus_gateway_TtR_changedValues.length !=0 ||
		    modbus_gateway_RtT_changedValues.length !=0 ||
		    modbus_gateway_RtR_changedValues.length !=0 ||
		    modbus_gateway_TtT_changedValues.length !=0 ||
		    modbus_data_model_master_changedValues.length !=0 ||
		    modbus_data_model_slave_changedValues.length !=0 ||
		    modbus_tcp_master_changedValues.length !=0 ||
		    modbus_tcp_slave_changedValues.length !=0 ||
		    modbus_rtu_master_changedValues.length !=0 ||
		    modbus_rtu_slave_changedValues.length !=0 ||
        modbus_tag_changedValues.length != 0 ||
				LANchangedValues.length != 0 ||
        dhcpServerChangedValues.length !=0 ||
  			NAT_loopback_changedValues.length != 0 ||
  			NAT_virtualServer_changedValues.length !=0 ||
  			NAT_virtualComputer_changedValues.length !=0 ||
  			NAT_dmz_changedValues.length !=0 ||
  			Firewall_general_changedValues.length !=0 ||
  			Firewall_ipfilter_changedValues.length !=0 ||
  			Firewall_macfilter_changedValues.length !=0 ||
  			staticR_changedValues.length != 0 ||
  			maintenance_changedValues.length != 0 ||
        configuration_p2e_changedValues.length != 0 ||
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
        port_switch_changedValues.length !=0||
  			basic_changedValues.length !=0 ||
  			responder_conn_changedValues.length !=0 ||
  			initiator_conn_general_changedValues.length !=0 ||
  			initiator_conn_subnet_changedValues.length !=0 ||
  			openvpn_basic_changedValues.length !=0 ||
  			openvpn_server_conn_changedValues.length !=0 ||
  			openvpn_client_conn_changedValues.length !=0 ||
  			openvpn_server_advanced_ccd_changedValues.length !=0 ||
  			openvpn_server_advanced_psk_changedValues.length !=0 ||
        openvpn_server_advanced_pfw_changedValues.length !=0 ||
        openvpn_client_advanced_pfw_changedValues.length !=0 ||
  			openvpn_client_advanced_psk_changedValues.length !=0 ||
  			openvpn_client_advanced_rna_changedValues.length !=0 ||
  			openvpn_client_advanced_fo_changedValues.length !=0 ||
  			generic_mqtt_changedValues.length !=0 ||
        azhub_changedValues.length !=0 || 
        azhubdps_changedValues.length !=0 || 
        azcentral_changedValues.length !=0 ||
        awsIoT_core_changedValues.length !=0 ||
        remote_service_mqtt_changedValues.length!=0||
        remote_service_restful_changedValues.length !=0 ||
        remote_service_remote_control_changedValues.length !=0 ||
  			port_connection_lan_changedValues.length !=0 ||
  			port_connection_com_changedValues.length !=0 ||
        port_connection_transparent_changedValues.length !=0 ||
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