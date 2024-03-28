<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';
	import { onMount } from 'svelte';
	import { sessionidG } from "./sessionG.js";
  	import { 
  		LanConfigChangedLog,
  		NAT_LoopBack_ConfigChangedLog, 
  		NAT_VS_ConfigChangedLog, 
  		NAT_VC_ConfigChangedLog, 
  		NAT_Dmz_ConfigChangedLog,
  		Firewall_General_ConfigChangedLog,
    	Firewall_IPFilter_ConfigChangedLog,
    	Firewall_MACFilter_ConfigChangedLog,
    	StaticRouteConfigChangedLog,
    	MaintenanceConfigChangedLog,
    	OperationConfigChangedLog,
    	DockerConfigChangedLog,
        WAN_CWAN1_BASIC_ConfigChangedLog,
    	WAN_CWAN1_Advanced_ConfigChangedLog,
    	WAN_CWAN1_SimPolicy_ConfigChangedLog,
    	WAN_CWAN1_GLink_ConfigChangedLog,
    	WAN_EWAN1_Basic_ConfigChangedLog,
    	WAN_EWAN1_EWLAP_ConfigChangedLog,
    	WAN_RedundancyPolicy_ConfigChangedLog,
    	WAN_FareSavingPolicy_ConfigChangedLog,
    	IPsec_Responder_Conn_ConfigChangedLog,
    	IPsec_Initiator_Conn_General_ConfigChangedLog,
    	IPsec_Initiator_Conn_Subnet_ConfigChangedLog,
    	IPsec_Basic_ConfigChangedLog,
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
	    GenericMQTTConfigChangedLog,
	    RemoteServiceConfigChangedLog,
	    PortConnection_LAN_ConfigChangedLog,
    	PortConnection_COM_ConfigChangedLog,
    	Certificate_Settings_ConfigChangedLog,
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
	    SDatalogger_MonitorMode_Cloud_ConfigChangedLog,
    	SDatalogger_MonitorMode_Edge_ConfigChangedLog,
    	SDatalogger_ProxyMode_Cloud_ConfigChangedLog,
    	SDatalogger_ProxyMode_Edge_ConfigChangedLog,
    	SDatalogger_General_ConfigChangedLog,
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
    	dashboadData
  	} from "./configG.js"

	import {
		Img,
		Sidebar,
		SidebarWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem,
		DarkMode
	} from 'flowbite-svelte';


	import { Side, Nav, Responsive } from 'svelte-sidebar-menu';

	import { quartInOut } from 'svelte/easing';


	// Darkmode component
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-28 z-50';

	// Side component
	let logo = 'EWLOGO.png';
	let logoClass= 'w-20';
	let siteName = 'EW50-V';

	let siteClass = 'pl-45';

	let headerClass =
		'bg-white px-10 items-center text-gray-600 border-b-2 p-2 dark:bg-gray-900 dark:text-white';

	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';

	let topDiv = 'pt-8 w-full md:block md:w-auto absolute right-0';

	let topMenuDiv = 'container flex flex-wrap pt-0 md:pt-2';

	let topul =
		'flex flex-col mt-4 md:flex-row md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white';

	let childLi =
		'block py-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-0 pl-1 pr-1 text-lg dark:text-white bg-yellow-400';

	let asideClass =
		'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll dark:bg-gray-900 dark:text-white';

	let spanClass =
		'pl-20 self-center text-3xl font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	// Nav component
	let navClass = 'py-3 px-1 text-lg';

	let navDivClass = 'pb-8';


	let transitionParams = {
		duration: 200,
		delay: 100,
		easing: quartInOut,
		x: -200
	};


	let buttonClass = 'inline-flex items-center text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200';

	let open;
	let svg0background="";

	$: activeUrl = $page.url.pathname;

	let usertype=0;
	let currentUri = '';
	let sessionid='';
  	let dashboard_data="";


  	let interval;
  	let sessionBinary;
  	let LANchangedValues = [];
  	let NAT_loopback_changedValues =[];
  	let NAT_virtualServer_changedValues =[];  	
  	let NAT_virtualComputer_changedValues =[];
  	let NAT_dmz_changedValues =[];
  	let Firewall_general_changedValues = [];
  	let Firewall_ipfilter_changedValues = [];
  	let Firewall_macfilter_changedValues = [];
  	let staticR_changedValues = [];
  	let maintenance_changedValues = [];
    let operation_changedValues = [];
    let docker_changedValues = [];
    let cwan1_basic_changedValues = [];
  	let cwan1_advanced_changedValues = [];
  	let cwan1_simpolicy_changedValues = [];
  	let cwan1_glink_changedValues = [];
  	let ewan1_basic_changedValues = [];
  	let ewan1_ewlap_changedValues = [];
  	let redundancy_policy_changedValues = [];
  	let faresaving_policy_changedValues = [];
  	let basic_changedValues = [];
  	let responder_conn_changedValues=[];
  	let initiator_conn_general_changedValues=[];
  	let initiator_conn_subnet_changedValues=[];
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
    let generic_mqtt_changedValues=[];
    let remote_service_changedValues = [];
    let port_connection_lan_changedValues = [];
    let port_connection_com_changedValues = [];
    let certificate_settings_changedValues = [];
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

  	let sdata_logger_general_changedValues = [];
  	let sdata_logger_proxy_edge_changedValues = [];
  	let sdata_logger_proxy_cloud_changedValues = [];
  	let sdata_logger_monitor_edge_changedValues = [];
  	let sdata_logger_monitor_cloud_changedValues = [];

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

	const BlinkApply = () => {
		if (svg0background=="")
		{
    		svg0background="background-color: blue";
    	}
    	else if (svg0background == "background-color: blue")
    	{
    		svg0background="";
    	}
  	};

 	const startInterval = () => {
    	interval = setInterval(BlinkApply, 500); 
  	};


  	function JudgeChangedOrNot()
  	{
  		if (event_engine_action_line_changeValues.length !=0 ||
  			event_engine_action_mqtt_changeValues.length !=0 ||
  			event_engine_action_tcpmsg_changeValues.length !=0 ||
  			event_engine_action_modbus_changeValues.length != 0 ||
  			event_engine_action_do_changeValues.length != 0 ||
  			event_engine_action_email_changeValues.length !=0 ||
  			event_engine_action_sms_changeValues.length !=0 ||
  			event_engine_trigger_mqtt_changeValues.length != 0 ||
  			event_engine_trigger_tcpmsg_changeValues.length !=0 ||
  			event_engine_trigger_modbus_changeValues.length !=0 ||
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
  			certificate_settings_changedValues.length !=0 ||
  			port_connection_lan_changedValues.length !=0 ||
  			port_connection_com_changedValues.length !=0 ||
  			remote_service_changedValues.length !=0 ||
  			generic_mqtt_changedValues.length !=0 ||
  			openvpn_basic_changedValues.length !=0 ||
  			openvpn_server_conn_changedValues.length !=0 ||
  			openvpn_client_conn_changedValues.length !=0 ||
  			openvpn_server_advanced_ccd_changedValues.length !=0 ||
  			openvpn_server_advanced_psk_changedValues.length !=0 ||
  			openvpn_client_advanced_psk_changedValues.length !=0 ||
  			openvpn_server_advanced_pfw_changedValues.length !=0 ||
  			openvpn_client_advanced_pfw_changedValues.length !=0 ||
  			openvpn_client_advanced_rna_changedValues.length !=0 ||
  			openvpn_client_advanced_fo_changedValues.length !=0 ||
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
  			cwan1_basic_changedValues.length !=0 ||
  			cwan1_advanced_changedValues.length != 0 ||
  			cwan1_simpolicy_changedValues.length != 0 ||
  			cwan1_glink_changedValues.length != 0 ||
  			ewan1_basic_changedValues.length != 0 ||
  			ewan1_ewlap_changedValues.length != 0 ||
  			redundancy_policy_changedValues.length != 0 ||
  			faresaving_policy_changedValues.length != 0 ||
			basic_changedValues.length !=0 ||
			responder_conn_changedValues.length !=0 ||
			initiator_conn_general_changedValues.length !=0 ||
			initiator_conn_subnet_changedValues.length !=0

  			)
  		{

    		if (!interval)
    		{
    			startInterval();
    		}

  		}
  		else
  		{
  			if (interval)
    		{
    			clearInterval(interval);
    			svg0background="";
    			interval=0;
    		}
  		}

  	}


	LanConfigChangedLog.subscribe(val => {
    	LANchangedValues=val;
    	JudgeChangedOrNot();
  	});

  	NAT_LoopBack_ConfigChangedLog.subscribe(val => {
        NAT_loopback_changedValues = val;
        JudgeChangedOrNot();
    });

    NAT_VC_ConfigChangedLog.subscribe(val => {
        NAT_virtualComputer_changedValues = val;
    	JudgeChangedOrNot();
    });

    NAT_VS_ConfigChangedLog.subscribe(val => {
        NAT_virtualServer_changedValues = val;
       	JudgeChangedOrNot();
    });

    NAT_Dmz_ConfigChangedLog.subscribe(val => {
        NAT_dmz_changedValues = val;
        JudgeChangedOrNot();
    });

 	Firewall_General_ConfigChangedLog.subscribe(val => {
      	Firewall_general_changedValues = val;
       	JudgeChangedOrNot();
  	});

  	Firewall_IPFilter_ConfigChangedLog.subscribe(val => {
      	Firewall_ipfilter_changedValues = val;
      	JudgeChangedOrNot();
  	});


  	Firewall_MACFilter_ConfigChangedLog.subscribe(val => {
      	Firewall_macfilter_changedValues = val;
        JudgeChangedOrNot();
  	});


  	StaticRouteConfigChangedLog.subscribe(val => {
      	staticR_changedValues = val;
     	JudgeChangedOrNot();
  	});


  	MaintenanceConfigChangedLog.subscribe(val => {
    	maintenance_changedValues = val;
    	JudgeChangedOrNot();
  	});

	OperationConfigChangedLog.subscribe(val => {
      	operation_changedValues = val;
      	JudgeChangedOrNot();
    });

  	DockerConfigChangedLog.subscribe(val => {
      	docker_changedValues = val;
        JudgeChangedOrNot();
    });



	WAN_CWAN1_BASIC_ConfigChangedLog.subscribe(val => {
	    cwan1_basic_changedValues = val;
	    JudgeChangedOrNot();
	});

	WAN_CWAN1_Advanced_ConfigChangedLog.subscribe(val => {
	    cwan1_advanced_changedValues = val;
	    JudgeChangedOrNot();
	});

	WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe(val => {
	    cwan1_simpolicy_changedValues = val;
	    JudgeChangedOrNot();
	});

	WAN_CWAN1_GLink_ConfigChangedLog.subscribe(val => {
	    cwan1_glink_changedValues = val;
	    JudgeChangedOrNot();
	});

	WAN_EWAN1_Basic_ConfigChangedLog.subscribe(val => {
	    ewan1_basic_changedValues = val;
	    JudgeChangedOrNot();
	});

	WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe(val => {
	    ewan1_ewlap_changedValues = val;
	    JudgeChangedOrNot();
	});

	WAN_RedundancyPolicy_ConfigChangedLog.subscribe(val => {
	    redundancy_policy_changedValues = val;
	    JudgeChangedOrNot();
	});

	WAN_FareSavingPolicy_ConfigChangedLog.subscribe(val => {
	    faresaving_policy_changedValues = val;
	    JudgeChangedOrNot();
	});


	IPsec_Responder_Conn_ConfigChangedLog.subscribe(val => {
	    responder_conn_changedValues = val;
	    JudgeChangedOrNot();
	});

	IPsec_Initiator_Conn_General_ConfigChangedLog.subscribe(val => {
	    initiator_conn_general_changedValues = val;
	    JudgeChangedOrNot();
	});

	IPsec_Initiator_Conn_Subnet_ConfigChangedLog.subscribe(val => {
	    initiator_conn_subnet_changedValues = val;
	    JudgeChangedOrNot();
	});

	IPsec_Basic_ConfigChangedLog.subscribe(val => {
	    basic_changedValues = val;
	    JudgeChangedOrNot();
	});

    OpenVPN_Client_Advanced_PSK_ConfigChangedLog.subscribe(val => {
        openvpn_client_advanced_psk_changedValues = val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Client_Advanced_PFW_ConfigChangedLog.subscribe(val => {
        openvpn_client_advanced_pfw_changedValues = val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Client_Advanced_RNA_ConfigChangedLog.subscribe(val => {
        openvpn_client_advanced_rna_changedValues = val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Client_Advanced_FO_ConfigChangedLog.subscribe(val => {
        openvpn_client_advanced_fo_changedValues = val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Client_Conn_ConfigChangedLog.subscribe(val => {
        openvpn_client_conn_changedValues= val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Server_Advanced_CCD_ConfigChangedLog.subscribe(val => {
        openvpn_server_advanced_ccd_changedValues= val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Server_Advanced_PSK_ConfigChangedLog.subscribe(val => {
        openvpn_server_advanced_psk_changedValues= val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Server_Advanced_PFW_ConfigChangedLog.subscribe(val => {
        openvpn_server_advanced_pfw_changedValues= val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Server_Conn_ConfigChangedLog.subscribe(val => {
        openvpn_server_conn_changedValues= val;
    	JudgeChangedOrNot();
    });

    OpenVPN_Basic_ConfigChangedLog.subscribe(val => {
        openvpn_basic_changedValues= val;
    	JudgeChangedOrNot();
    });

   	GenericMQTTConfigChangedLog.subscribe(val => {
      	generic_mqtt_changedValues = val;
        JudgeChangedOrNot();
  	});

  	RemoteServiceConfigChangedLog.subscribe(val => {
      	remote_service_changedValues = val;
        JudgeChangedOrNot();
    });

    PortConnection_LAN_ConfigChangedLog.subscribe(val => {
      	port_connection_lan_changedValues = val;
        JudgeChangedOrNot();
    });

    PortConnection_COM_ConfigChangedLog.subscribe(val => {
      	port_connection_com_changedValues = val;
      	JudgeChangedOrNot();
    });

    Certificate_Settings_ConfigChangedLog.subscribe(val => {
      certificate_settings_changedValues = val;
      JudgeChangedOrNot();
    });

    ModbusGateway_TtR_ConfigChangedLog.subscribe(val => {
    	modbus_gateway_TtR_changedValues = val;
    	JudgeChangedOrNot();
    });

    ModbusGateway_RtT_ConfigChangedLog.subscribe(val => {
    	modbus_gateway_RtT_changedValues = val;
    	JudgeChangedOrNot();
    });

    ModbusGateway_RtR_ConfigChangedLog.subscribe(val => {
        modbus_gateway_RtR_changedValues = val;
    	JudgeChangedOrNot();    
    });


    ModbusGateway_TtT_ConfigChangedLog.subscribe(val => {
        modbus_gateway_TtT_changedValues = val;
    	JudgeChangedOrNot();
    });


    ModbusVariable_Slave_ConfigChangedLog.subscribe(val => {
        modbus_variable_slave_changedValues = val;
    	JudgeChangedOrNot();
    });

    ModbusVariable_Master_ConfigChangedLog.subscribe(val => {
        modbus_variable_master_changedValues = val;
       	JudgeChangedOrNot();
    });

    ModbusTCP_Slave_ConfigChangedLog.subscribe(val => {
        modbus_tcp_slave_changedValues = val;
       	JudgeChangedOrNot();
    });


    ModbusTCP_Master_ConfigChangedLog.subscribe(val => {
        modbus_tcp_master_changedValues = val;
       	JudgeChangedOrNot();
    });

    ModbusRTU_Slave_ConfigChangedLog.subscribe(val => {
        modbus_rtu_slave_changedValues = val;
        JudgeChangedOrNot();
    });

    ModbusRTU_Master_ConfigChangedLog.subscribe(val => {
        modbus_rtu_master_changedValues = val;
       	JudgeChangedOrNot();
    });


	SDatalogger_General_ConfigChangedLog.subscribe(val => {
		sdata_logger_general_changedValues = val;
		JudgeChangedOrNot();
	});

	SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe(val => {
		sdata_logger_proxy_edge_changedValues = val;
		JudgeChangedOrNot();
	});

	SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe(val => {
		sdata_logger_proxy_cloud_changedValues = val;
		JudgeChangedOrNot();
	});


	SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe(val => {
		sdata_logger_monitor_edge_changedValues = val;
		JudgeChangedOrNot();
	});

	SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe(val => {
		sdata_logger_monitor_cloud_changedValues = val;
	    JudgeChangedOrNot();
	});

	EventEngine_General_ConfigChangedLog.subscribe(val => {
		event_engine_general_changedValues = val;
		JudgeChangedOrNot();
	});

	EventEngine_TriggerSMS_ConfigChangedLog.subscribe(val => {
		event_engine_trigger_sms_changeValues = val;
		JudgeChangedOrNot();
	});

	EventEngine_TriggerDI_ConfigChangedLog.subscribe(val => {
		event_engine_trigger_di_changeValues = val;
		JudgeChangedOrNot();
	});

  	EventEngine_TriggerModbus_ConfigChangedLog.subscribe(val => {
      	event_engine_trigger_modbus_changeValues = val;
      	JudgeChangedOrNot();
  	});	

  	EventEngine_TriggerTCPMsg_ConfigChangedLog.subscribe(val => {
      	event_engine_trigger_tcpmsg_changeValues = val;
        JudgeChangedOrNot();
  	});

  	EventEngine_TriggerMQTT_ConfigChangedLog.subscribe(val => {
      	event_engine_trigger_mqtt_changeValues = val;
      	JudgeChangedOrNot();
  	});

  	EventEngine_ActionSMS_ConfigChangedLog.subscribe(val => {
      	event_engine_action_sms_changeValues = val;
        JudgeChangedOrNot();
  	});

  	EventEngine_ActionEmail_ConfigChangedLog.subscribe(val => {
      	event_engine_action_email_changeValues = val;
        JudgeChangedOrNot();
  	});

  	EventEngine_ActionDO_ConfigChangedLog.subscribe(val => {
      	event_engine_action_do_changeValues = val;
        JudgeChangedOrNot();
  	});


  	EventEngine_ActionModbus_ConfigChangedLog.subscribe(val => {
      	event_engine_action_modbus_changeValues = val;
        JudgeChangedOrNot();
 	});  	  	

  	EventEngine_ActionTCPMsg_ConfigChangedLog.subscribe(val => {
      	event_engine_action_tcpmsg_changeValues = val;
      	JudgeChangedOrNot();
  	});

	EventEngine_ActionMQTT_ConfigChangedLog.subscribe(val => {
	    event_engine_action_mqtt_changeValues = val;
		JudgeChangedOrNot();
	});

  	EventEngine_ActionLINE_ConfigChangedLog.subscribe(val => {
      	event_engine_action_line_changeValues = val;
    	JudgeChangedOrNot();
  	});



  	sessionidG.subscribe(val => {
    	sessionid = val;
  	});

  	dashboadData.subscribe(val => {
        dashboard_data = val;
    });

	async function getUserType () {
		const res = await fetch(window.location.origin+"/getUserType", {
			method: 'POST',
			body: sessionBinary
		})

		if (res.status == 200)
		{
			const data =await res.arrayBuffer();
			const uint8Array = new Uint8Array(data);
			usertype = parseInt(uint8Array, 16);
		}
	}


	onMount(() => {

		if (!sessionid)
		{
			currentUri = window.location.href;

			console.log("layout sessionid:");
			sessionidG.set(currentUri.split('?')[1]);
			sessionid=currentUri.split('?')[1];
			console.log(sessionid);
		}

		if (sessionid)
		{      
			const hexArray = sessionid.match(/.{1,2}/g); 
      		const byteValues = hexArray.map(hex => parseInt(hex, 16));
      		sessionBinary = new Uint8Array(byteValues);
			getUserType();
		}
	});


const topMenuList = [{ href: '/apply', id: 0 },
					{href: '/logout', id: 1 }];



  async function getDashboardData () {
    const res = await fetch(window.location.origin+"/getDashboardData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      dashboard_data =await res.json();
      console.log("New Dashboard");
      console.log(dashboard_data);
      dashboadData.set(dashboard_data);
    }
  }

	function RefreshDB()
	{
		if (!sessionid)
		{
			currentUri = window.location.href;

			console.log("refreshDB sessionid:");
			sessionidG.set(currentUri.split('?')[1]);
			sessionid=currentUri.split('?')[1];
			console.log(sessionid);
		}

		if (sessionid)
		{      
			const hexArray = sessionid.match(/.{1,2}/g); 
      		const byteValues = hexArray.map(hex => parseInt(hex, 16));
      		sessionBinary = new Uint8Array(byteValues);

      		getDashboardData();

		}

	}

</script>



<DarkMode {btnClass} />


{#if activeUrl == '/dashboard' || activeUrl.substring(0,16)=='/EDashboard.html'}
<button aria-label="RefreshDB"
  type="button" on:click={RefreshDB}
  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-36 z-50">
  <span class="">
    <slot name="ReloadIcon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z"/></svg>

    </slot>
  </span>
</button>
{/if}
<Responsive />
<Side
	{logo}
	{logoClass}
	{siteName}
	{siteClass}
	{headerClass}
	{buttonClass}
	{hamburgerClass}
	{topDiv}
	{topMenuDiv}
	{topul}
	{asideClass}
	{spanClass}
	{transitionParams}
	{svg0background}
	topMenus={topMenuList}
>

<Hamburger
    bind:open/>

{#if open}
	<Nav {navClass} {navDivClass}>
		<Sidebar>
			<SidebarWrapper>
				<SidebarGroup>
					<SidebarItem
						label="Dashboard" href='/dashboard'
					active={activeUrl === '/dashboard'}>
										<svelte:fragment slot="icon">
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-green-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
</SidebarItem>
{#if usertype == 1}
					<SidebarDropdownWrapper
						label="Networking"
					>
										<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-green-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
						<SidebarDropdownItem label="WAN" href='/wan' active={activeUrl === '/wan'}/>
						<SidebarDropdownItem label="LAN" href='/lan' active={activeUrl === '/lan'}/>
						<SidebarDropdownItem label="Port Forwarding" href='/nat' active={activeUrl === '/nat'}/>
						<SidebarDropdownItem label="Firewall" href='/firewall'  active={activeUrl === '/firewall'}/>
						<SidebarDropdownItem label="Static Route" href='/staticR' active={activeUrl === '/staticR'}/>
					</SidebarDropdownWrapper>
					
	<SidebarDropdownWrapper
						label="Authentication"
					>

					<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-red-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
						<SidebarDropdownItem label="Certificate" href='/certificate' active={activeUrl === '/certificate'}/>
					</SidebarDropdownWrapper>
					<SidebarDropdownWrapper
						label="VPN"
					>
					<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-red-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
						<SidebarDropdownItem label="OpenVPN" href='/openvpn' active={activeUrl === '/openvpn'}/>
						<SidebarDropdownItem label="IPsec" href='/ipsec' active={activeUrl === '/ipsec'}/>

					</SidebarDropdownWrapper>
					
		
<SidebarDropdownWrapper
						label="Cloud"
					>
					<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>

						<SidebarDropdownItem label="Generic MQTT" href='/gMQTT' active={activeUrl === '/gMQTT'}/>
					</SidebarDropdownWrapper>
					
<SidebarDropdownWrapper
						label="Field Management"

					>

		<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-red-500 mr-2 dark:text-pink-500 w-6 h-6">
<path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M4.867 19.125h.008v.008h-.008v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>

</svg>
        </svelte:fragment>

						<SidebarDropdownItem label="Port Connection" href='/PortC' active={activeUrl === '/PortC'}/>
						        <SidebarDropdownItem label="Modbus" href='/modbus' active={activeUrl === '/modbus'}/>
					</SidebarDropdownWrapper>

					<SidebarDropdownWrapper
						label="Service"
					>


<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-green-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
        				<SidebarDropdownItem label="Remote Service" href='/remoteS' active={activeUrl === '/remoteS'}/>

        			    <SidebarDropdownItem label="Smart Data Logger" href='/sdatalogger' active={activeUrl === '/sdatalogger'}/>
        			    <SidebarDropdownItem label="Data Tag Pro" href='/datatagpro' active={activeUrl === '/datatagpro'}/>
						<SidebarDropdownItem label="Event Engine" href='/event' active={activeUrl === '/event'}/>
						<SidebarDropdownItem label="Docker Engine" href='/docker' active={activeUrl === '/docker'}/>

					</SidebarDropdownWrapper>



					<SidebarDropdownWrapper
						label="System"
					>

					<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-red-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
						<SidebarDropdownItem label="Configuration" href='/configuration' active={activeUrl === '/configuration'}/>
						<SidebarDropdownItem label="Operation" href='/operation' active={activeUrl === '/operation'}/>
						<SidebarDropdownItem label="Maintenance" href='/maintenance' active={activeUrl === '/maintenance'}/>
					</SidebarDropdownWrapper>
{/if}
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</Nav>

{/if}
</Side>

{#if open}
<main class="dark:text-white" style="padding-top: 115px;padding-left: 286px;padding-right: 76px;">
	<slot />
</main>
{:else}
<main class="dark:text-white" style="padding-left: 84px;padding-top: 115px;padding-right: 64px;">
	<slot />
</main>
{/if}

<svelte:head>
	<title>Etherwan</title>
	<meta
		name="description"
		content="Flowbite-Svelte, Dark mode activated."
	/>
</svelte:head>
