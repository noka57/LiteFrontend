<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import './global.css';

  import { 
    modbusConfig,
    ModbusGateway_TtR_ConfigChangedLog,
    ModbusGateway_RtT_ConfigChangedLog,
    ModbusGateway_RtR_ConfigChangedLog,
    ModbusGateway_TtT_ConfigChangedLog,
    ModbusTag_ConfigChangedLog,
    ModbusTCP_Slave_ConfigChangedLog,
    ModbusTCP_Master_ConfigChangedLog,
    ModbusRTU_Slave_ConfigChangedLog,
    ModbusRTU_Master_ConfigChangedLog,
    ChangedModbusConfig,
    ChangedPortConnectionConfig,
    portConnectionConfig,
    ChangedSDataLoggerConfig,
    sdataLoggerConfig,
    SDatalogger_MonitorMode_Edge_ConfigChangedLog,
    SDatalogger_ProxyMode_Edge_ConfigChangedLog, 
    eventEngineConfig,
    ChangedEventEngineConfig,
    EventEngine_TriggerModbus_ConfigChangedLog,  
    EventEngine_ActionModbus_ConfigChangedLog,
    sconversionConfig,
    Conversion_Opcua2Modbus_ConfigChangedLog,
    ChangedSConfigConfig
  } from "./configG.js"

    let modbus_data="";
    let changed_modbus_data = {};
    let saved_changed_modbus_data = {};
    let getDataReady=0;
    let port_connection_data="";
    let saved_changed_port_connection_data="";

    let sdata_logger_data="";
    let saved_changed_sdata_logger_data="";


    let event_engine_data="";
    let saved_changed_event_engine_data ="";

    let sconversion_data="";
    let saved_changed_sconversion_data ="";


    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

    let modbus_gateway_TtR_changedValues=[];
    let modbus_gateway_RtT_changedValues=[];
    let modbus_gateway_RtR_changedValues=[];
    let modbus_gateway_TtT_changedValues=[];


    let modbus_tag_changedValues=[];

    let modbus_tcp_master_changedValues=[];
    let modbus_tcp_slave_changedValues=[];
    let modbus_rtu_master_changedValues=[];
    let modbus_rtu_slave_changedValues=[];


    let sdata_logger_proxy_edge_changedValues = [];
    let sdata_logger_monitor_edge_changedValues = [];

    let event_engine_trigger_modbus_changeValues=[];
    let event_engine_action_modbus_changeValues=[];

    let conversion_opcua2modbus_changedValues=[];


    Conversion_Opcua2Modbus_ConfigChangedLog.subscribe(val => {
      conversion_opcua2modbus_changedValues = val;
    });

    sconversionConfig.subscribe(val => {
      sconversion_data = val;
    });

    ChangedSConfigConfig.subscribe(val => {
      saved_changed_sconversion_data = val;
    });


    sdataLoggerConfig.subscribe(val => {
      sdata_logger_data = val;
    });

    ChangedSDataLoggerConfig.subscribe(val => {
      saved_changed_sdata_logger_data = val;
    });


    eventEngineConfig.subscribe(val => {
      event_engine_data = val;
    });

    ChangedEventEngineConfig.subscribe(val => {
      saved_changed_event_engine_data = val;
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

    SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_edge_changedValues = val;
    });

    SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_edge_changedValues = val;
    });

    EventEngine_TriggerModbus_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_modbus_changeValues = val;
    });


    EventEngine_ActionModbus_ConfigChangedLog.subscribe(val => {
      event_engine_action_modbus_changeValues = val;
    });

    modbusConfig.subscribe(val => {
      modbus_data = val;
    });

    ChangedModbusConfig.subscribe(val => {
      saved_changed_modbus_data = val;
    });


    ChangedPortConnectionConfig.subscribe(val => {
        saved_changed_port_connection_data = val;
    });

    portConnectionConfig.subscribe(val => {
      port_connection_data = val;
    });


    let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

    let target_device_tag=-1;



    let new_tcp_slave=[
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,  
        tag:[],      
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],       
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,    
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2,
        tag:[],
        maxConnectionCount: 3000

    }

  ];

    let new_tcp_slave_modal=false;
    let new_tcp_slave_index;

    function new_tcp_slave_trigger(index)
    {
        new_tcp_slave[index].enable=true;
        new_tcp_slave[index].delete=false;        
        new_tcp_slave[index].lanProfile="";
        new_tcp_slave[index].aliasName="";
        new_tcp_slave[index].listenPort=502;
        new_tcp_slave[index].maxConnectionCount=32;
        new_tcp_slave[index].unitID=247,
        new_tcp_slave[index].idle_timeout_sec=120,
        new_tcp_slave[index].write_timeout_sec=2,
        new_tcp_slave[index].tag=[],        
        new_tcp_slave_index=index;
        new_tcp_slave_modal=true;

    }

    function add_new_tcp_slave(index)
    {
        new_tcp_slave_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_tcp.slave=[...changed_modbus_data.config.fieldManagement_modbus_tcp.slave,new_tcp_slave[index]];
    }

  let backup_tcp_slave={
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        unitID:247,
        idle_timeout_sec:120,
        write_timeout_sec:2, 
        tag:[],       
        maxConnectionCount: 32

    };

    let Modify_TCP_Slave_Modal=false;
    let Modify_TCP_Slave_index;


    function deleteTCPSlave(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].delete=true;
    }

    function RestoreDeleteTCPSlave(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].delete=false;
    }

    function TriggerModifyTCPSlave(index)
    {
        Modify_TCP_Slave_Modal=true;
        Modify_TCP_Slave_index=index;
        backup_tcp_slave.enable=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].enable;
        backup_tcp_slave.delete=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].delete;        
        backup_tcp_slave.aliasName=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].aliasName;
        backup_tcp_slave.lanProfile=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].lanProfile;
        backup_tcp_slave.listenPort=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].listenPort;
        backup_tcp_slave.maxConnectionCount=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].maxConnectionCount;

        backup_tcp_slave.unitID=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].unitID;
        backup_tcp_slave.idle_timeout_sec=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].idle_timeout_sec;
        backup_tcp_slave.write_timeout_sec=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].write_timeout_sec;

    }

    function NoModifyTCPSlave(index)
    {
        Modify_TCP_Slave_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].enable=backup_tcp_slave.enable;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].delete=backup_tcp_slave.delete;        
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].aliasName=backup_tcp_slave.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].lanProfile=backup_tcp_slave.lanProfile;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].listenPort=backup_tcp_slave.listenPort;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].maxConnectionCount=backup_tcp_slave.maxConnectionCount;


        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].unitID=backup_tcp_slave.unitID;
        
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].idle_timeout_sec=backup_tcp_slave.idle_timeout_sec;
        
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].write_timeout_sec=backup_tcp_slave.write_timeout_sec;        
    }

    function ModifyTCPSlave()
    {
        Modify_TCP_Slave_Modal=false;  
    }


    let new_tcp_master=[
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    },
    {
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id:0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000  

    }
    ];

    let new_tcp_master_modal=false;
    let new_tcp_master_index;

    function new_tcp_master_trigger(index)
    {
        new_tcp_master[index].enable=true;
        new_tcp_master[index].delete=false;        
        new_tcp_master[index].lanProfile="";
        new_tcp_master[index].aliasName="";
        new_tcp_master[index].remoteServerIp="";
        new_tcp_master[index].remotePort=502;
        new_tcp_master[index].unit_id=0;        
        new_tcp_master[index].connectionTimeout=3000;
        new_tcp_master[index].responseTimeout=1000;
        new_tcp_master[index].pollingRate=1000;
        new_tcp_master[index].tag=[];
        new_tcp_master_index=index;
        new_tcp_master_modal=true;

    }

    function add_new_tcp_master(index)
    {
        new_tcp_master_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_tcp.master=[...changed_modbus_data.config.fieldManagement_modbus_tcp.master,new_tcp_master[index]];
    }


    let backup_tcp_master={
        enable: false,
        delete: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        unit_id: 0,        
        connectionTimeout: 3000,
        pollingRate:1000,
        tag:[],
        responseTimeout: 1000        

    };

    let Modify_TCP_Master_Modal=false;
    let Modify_TCP_Master_index;


    function deleteTCPMaster(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].delete=true;
    }


    function RestoreDeleteTCPMaster(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].delete=false;
    }


    function TriggerModifyTCPMaster(index)
    {
        Modify_TCP_Master_Modal=true;
        Modify_TCP_Master_index=index;
        backup_tcp_master.enable=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].enable;
        backup_tcp_master.delete=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].delete;        
        backup_tcp_master.aliasName=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].aliasName;
        backup_tcp_master.lanProfile=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].lanProfile;
        backup_tcp_master.remoteServerIp=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remoteServerIp;
        backup_tcp_master.remotePort=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remotePort;
        backup_tcp_master.unit_id=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].unit_id;        
        backup_tcp_master.connectionTimeout=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].connectionTimeout;
        backup_tcp_master.responseTimeout=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].responseTimeout;
        backup_tcp_master.pollingRate=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].pollingRate;

    }

    function NoModifyTCPMaster(index)
    {
        Modify_TCP_Master_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].enable=backup_tcp_master.enable;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].delete=backup_tcp_master.delete;        
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].aliasName=backup_tcp_master.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].lanProfile=backup_tcp_master.lanProfile;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remoteServerIp=backup_tcp_master.remoteServerIp;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remotePort=backup_tcp_master.remotePort;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].unit_id=backup_tcp_master.unit_id;        
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].connectionTimeout=backup_tcp_master.connectionTimeout;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].responseTimeout=backup_tcp_master.responseTimeout;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].pollingRate=backup_tcp_master.pollingRate;


    }

    function ModifyTCPMaster()
    {
        Modify_TCP_Master_Modal=false;  
    }


    let backup_rtu_master={
        enable:false,
        delete:false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],
        slave_id:0
    };


    let new_rtu_master=[
    {
        enable:false,
        delete:false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],
        slave_id:0
    },
    {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],        
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],        
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],        
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        tag:[],
        response_timeout:1000,
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],
        slave_id:0
    },
        {
        enable:false,
        delete: false,
        aliasName:"",
        serialProfile:"",
        response_timeout:1000,
        tag:[],        
        slave_id:0
    }
    ]


    let New_RTU_Master_Modal=false;
    let New_RTU_Master_index;


    function new_rtu_master_trigger(index)
    {
        new_rtu_master[index].enable=true;
        new_rtu_master[index].delete=false;        
        new_rtu_master[index].aliasName="";
        new_rtu_master[index].serialProfile="";
        new_rtu_master[index].slave_id=0;
        new_rtu_master[index].tag=[];
        new_rtu_master[index].response_timeout=1000;        
        New_RTU_Master_index=index;
        New_RTU_Master_Modal=true;

    }

    function add_new_rtu_master(index)
    {

        New_RTU_Master_Modal=false;

        changed_modbus_data.config.fieldManagement_modbus_rtu.master=[...changed_modbus_data.config.fieldManagement_modbus_rtu.master,new_rtu_master[index]];
    }



    let Modify_RTU_Master_Modal=false;
    let Modify_RTU_Master_index;


    function RestoreDeleteRTUMaster(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].delete=false;
    }


    function deleteRTUMaster(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].delete=true;
    }


    function TriggerModifyRtuMaster(index)
    {
        Modify_RTU_Master_Modal=true;
        Modify_RTU_Master_index=index;
        backup_rtu_master.enable=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].enable;
        backup_rtu_master.delete=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].delete;        
        backup_rtu_master.aliasName=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].aliasName;
        backup_rtu_master.serialProfile=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].serialProfile;
        backup_rtu_master.slave_id=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].slave_id;
        backup_rtu_master.response_timeout=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].response_timeout;

    }

    function NoModifyRTUMaster(index)
    {
        Modify_RTU_Master_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].enable=backup_rtu_master.enable;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].delete=backup_rtu_master.delete;        
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].aliasName=backup_rtu_master.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].serialProfile= backup_rtu_master.serialProfile;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].slave_id= backup_rtu_master.slave_id;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].response_timeout= backup_rtu_master.response_timeout;
    }

    function ModifyRTUMaster()
    {
        Modify_RTU_Master_Modal=false;  
    }


    let new_rtu_slave=[
    {
        enable:false,
        delete:false,
        aliasName:"",
        serialProfile:""
    },
    {
        enable:false,
        delete:false,
        aliasName:"",
        serialProfile:""
    }
    ]


    let New_RTU_Slave_Modal=false;
    let New_RTU_Slave_index;


    function new_rtu_slave_trigger(index)
    {
        new_rtu_slave[index].enable=true;
        new_rtu_slave[index].delete=false;        
        new_rtu_slave[index].aliasName="";
        new_rtu_slave[index].serialProfile="";

        New_RTU_Slave_index=index;
        New_RTU_Slave_Modal=true;

    }

    function add_new_rtu_slave(index)
    {
        New_RTU_Slave_Modal=false;

        changed_modbus_data.config.fieldManagement_modbus_rtu.slave=[...changed_modbus_data.config.fieldManagement_modbus_rtu.slave,new_rtu_slave[index]];
    }


    let Modify_RTU_Slave_Modal=false;
    let Modify_RTU_Slave_index;

    let backup_rtu_slave={
        enable:false,
        delete:false,
        aliasName:"",
        serialProfile:""
    };

    function deleteRTUSlave(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].delete=true;
    }

    function RestoreDeleteRTUSlave(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].delete=false;
    }


    function TriggerModifyRtuSlave(index)
    {
        Modify_RTU_Slave_Modal=true;
        Modify_RTU_Slave_index=index;
        backup_rtu_slave.enable=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].enable;
        backup_rtu_slave.delete=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].delete;        
        backup_rtu_slave.aliasName=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].aliasName;
        backup_rtu_slave.serialProfile=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].serialProfile;
    }

    function NoModifyRTUSlave(index)
    {
        Modify_RTU_Slave_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].enable=backup_rtu_slave.enable;
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].delete=backup_rtu_slave.delete;        
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].aliasName=backup_rtu_slave.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].serialProfile= backup_rtu_slave.serialProfile;
    }

    function ModifyRTUSlave()
    {
        Modify_RTU_Slave_Modal=false;  
    }



    let backup_tag=
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    };

    let new_tag_profile="";
    let modify_tag_profile="";


    let new_tag=[
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    },                            
    {
        enable: false,
        delete: false,
        tagName:"",
        pointType: 0, 
        address: 0, 
        byteOrder: 0, 
        dataType: 0,
        postprocessingEnable:false,
        postprocessingScale: "", 
        postprocessingOffset: ""
    }
    ];


    let target_device_index=-1;
    let target_device_tag_type=-1;

    let new_tag_modal=false;
    let new_tag_index;

    function new_tag_trigger(index)
    {
        new_tag_profile="";
        new_tag[index].enable=true;
        new_tag[index].delete=false;
        new_tag[index].tagName="";

        new_tag[index].pointType=0;
        new_tag[index].address=0;
        new_tag[index].byteOrder=0;
        new_tag[index].dataType=0;
        new_tag[index].postprocessingEnable=false;
        new_tag[index].postprocessingScale="";
        new_tag[index].postprocessingOffset="";
        new_tag_index=index;
        new_tag_modal=true;

    }


    function extractRTUMasterNumber(str) 
    {
        const match = str.match(/^RM_(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    }


    function extractTCPMasterNumber(str) 
    {
        const match = str.match(/^TM_(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    }

    function extractTCPSlaveNumber(str) 
    {
        const match = str.match(/^TS_(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    }

    function target_device_tag_changed(index)
    {

        if (typeof target_device_tag === "string" && target_device_tag.slice(0,2) === "TM")
        {
            target_device_index=extractTCPMasterNumber(target_device_tag);
            target_device_tag_type=0;

        }
        else if(typeof target_device_tag === "string" && target_device_tag.slice(0,2) === "RM")
        {
            target_device_index=extractRTUMasterNumber(target_device_tag);
            target_device_tag_type=1;

        }
        else if(typeof target_device_tag === "string" && target_device_tag.slice(0,2) === "TS")
        {
            target_device_index=extractTCPSlaveNumber(target_device_tag)
            target_device_tag_type=2;

        }

    }


    function add_new_tag(index)
    {
        if (target_device_tag_type==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag=[...changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag,JSON.parse(JSON.stringify(new_tag[index]))];
        }
        else if(target_device_tag_type==1)
        {
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag=[...changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag,JSON.parse(JSON.stringify(new_tag[index]))];

        }
        else if(target_device_tag_type==2)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag=[...changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag,JSON.parse(JSON.stringify(new_tag[index]))];
        }


        console.log(new_tag[index]);

        new_tag_modal=false;
    }

    let modify_tag_modal=false;
    let modify_tag_index;

    function deleteTag(index)
    {
        if (target_device_tag_type==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].delete=true;
        }
        else if(target_device_tag_type==1)
        {
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].delete=true;

        }
        else if(target_device_tag_type==2)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].delete=true;
        }

        //changed_modbus_data.config.fieldManagement_modbus_tag[index].delete=true;
    }

    function RestoreDeleteTag(index)
    {
        if (target_device_tag_type==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].delete=false;
        }
        else if(target_device_tag_type==1)
        {
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].delete=false;
        }
        else if(target_device_tag_type==2)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].delete=false;
        }

    }


    function TriggerModifyTag(index)
    {  
        if (target_device_tag_type==0)
        {
            backup_tag.enable=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].enable;
            backup_tag.delete=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].delete;        
            backup_tag.tagName=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].tagName;
            backup_tag.pointType=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].pointType;
            backup_tag.address=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].address;
            backup_tag.byteOrder=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].byteOrder;
            backup_tag.dataType=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].dataType;
            backup_tag.postprocessingEnable=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].postprocessingEnable;
            backup_tag.postprocessingScale=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].postprocessingScale;
            backup_tag.postprocessingOffset=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].postprocessingOffset;

        }
        else if(target_device_tag_type==1)
        {     
            backup_tag.enable=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].enable;
            backup_tag.delete=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].delete;        
            backup_tag.tagName=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].tagName;
            backup_tag.pointType=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].pointType;
            backup_tag.address=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].address;
            backup_tag.byteOrder=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].byteOrder;
            backup_tag.dataType=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].dataType;
            backup_tag.postprocessingEnable=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].postprocessingEnable;

            backup_tag.postprocessingScale=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].postprocessingScale;
            backup_tag.postprocessingOffset=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].postprocessingOffset;

        }
        else if(target_device_tag_type==2)
        {
            backup_tag.enable=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].enable;
            backup_tag.delete=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].delete;        
            backup_tag.tagName=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].tagName;
            backup_tag.pointType=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].pointType;
            backup_tag.address=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].address;
            backup_tag.byteOrder=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].byteOrder;
            backup_tag.dataType=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].dataType;
            backup_tag.postprocessingEnable=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].postprocessingEnable;

            backup_tag.postprocessingScale=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].postprocessingScale;
            backup_tag.postprocessingOffset=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].postprocessingOffset;
        }

        modify_tag_index=index;
        modify_tag_modal=true;
    }

    function NoModifyTag(index)
    {

        if (target_device_tag_type==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].enable=backup_tag.enable;
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].delete=backup_tag.delete;        
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].tagName=backup_tag.tagName;
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].pointType=backup_tag.pointType;
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].address=backup_tag.address;
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].byteOrder=backup_tag.byteOrder;
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].dataType=backup_tag.dataType;
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].postprocessingEnable=backup_tag.postprocessingEnable;


            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].postprocessingScale=backup_tag.postprocessingScale;
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[index].postprocessingOffset=backup_tag.postprocessingOffset;

        }
        else if(target_device_tag_type==1)
        {     
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].enable=backup_tag.enable;
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].delete=backup_tag.delete;       
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].tagName=backup_tag.tagName;
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].pointType=backup_tag.pointType;
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].address=backup_tag.address;
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].byteOrder=backup_tag.byteOrder;
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].dataType=backup_tag.dataType;
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].postprocessingEnable=backup_tag.postprocessingEnable;

            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].postprocessingScale=backup_tag.postprocessingScale;
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[index].postprocessingOffset=backup_tag.postprocessingOffset;

        }
        else if(target_device_tag_type==2)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].enable=backup_tag.enable;
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].delete=backup_tag.delete;        
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].tagName=backup_tag.tagName;
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].pointType=backup_tag.pointType;
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].address=backup_tag.address;
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].byteOrder=backup_tag.byteOrder;
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].dataType=backup_tag.dataType;
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].postprocessingEnable=backup_tag.postprocessingEnable;

            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].postprocessingScale=backup_tag.postprocessingScale;
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[index].postprocessingOffset=backup_tag.postprocessingOffset;

        }

        modify_tag_modal=false;
    }

    function ModifyTag()
    {

        modify_tag_modal=false;  
    }





    let new_gateway_t2r=[
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    }
    ];

    let new_gateway_t2r_modal=false;
    let new_gateway_t2r_index;

    function new_gateway_t2r_trigger(index)
    {
        new_gateway_t2r[index].enable=true;
        new_gateway_t2r[index].delete=false;        
        new_gateway_t2r[index].aliasName="";
        new_gateway_t2r[index].tcpSlavePort=501;
        new_gateway_t2r[index].tcpSlaveUnitID=0;
        new_gateway_t2r[index].serialProfile="";
        new_gateway_t2r[index].rtuMasterSlaveID=0;
        new_gateway_t2r[index].responseTimeout=1000;
        new_gateway_t2r_index=index;
        new_gateway_t2r_modal=true;

    }

    function add_new_gateway_t2r(index)
    {
        new_gateway_t2r_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu=[...changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu,new_gateway_t2r[index]];
    }

    let backup_gateway_t2r={
        enable: false,
        delete: false,
        aliasName: "",
        tcpSlavePort: 501,
        tcpSlaveUnitID: 0,        
        serialProfile: "",
        rtuMasterSlaveID:0,
        responseTimeout: 1000
    };


    let Modify_Gateway_T2R_Modal=false;
    let Modify_Gateway_T2R_index;

    function deleteGatewayT2R(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].delete=true;
    }


    function RestoreDeleteGatewayT2R(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].delete=false;
    }


    function TriggerModifyGateway_T2R(index)
    {
        Modify_Gateway_T2R_Modal=true;
        Modify_Gateway_T2R_index=index;
        backup_gateway_t2r.enable=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].enable;
        backup_gateway_t2r.delete=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].delete;        
        backup_gateway_t2r.aliasName=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].aliasName;
        backup_gateway_t2r.tcpSlavePort=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].tcpSlavePort;
        backup_gateway_t2r.tcpSlaveUnitID=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].tcpSlaveUnitID;

        backup_gateway_t2r.serialProfile=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].serialProfile;
        backup_gateway_t2r.rtuMasterSlaveID=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].rtuMasterSlaveID;

        backup_gateway_t2r.responseTimeout=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].responseTimeout;
    }

    function NoModifyGateway_T2R(index)
    {
        Modify_Gateway_T2R_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].enable=backup_gateway_t2r.enable;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].delete=backup_gateway_t2r.delete;        
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].aliasName=backup_gateway_t2r.aliasName;

        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].tcpSlavePort=backup_gateway_t2r.tcpSlavePort;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].tcpSlaveUnitID=backup_gateway_t2r.tcpSlaveUnitID;

        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].serialProfile=backup_gateway_t2r.serialProfile;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].rtuMasterSlaveID=backup_gateway_t2r.rtuMasterSlaveID;

        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].responseTimeout=backup_gateway_t2r.responseTimeout;

    }

    function ModifyGateway_T2R()
    {
        Modify_Gateway_T2R_Modal=false;  
    }

    let new_gateway_r2t=[
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    },
    {
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    }

    ];

    let new_gateway_r2t_modal=false;
    let new_gateway_r2t_index;

    function new_gateway_r2t_trigger(index)
    {
        new_gateway_r2t[index].enable=true;
        new_gateway_r2t[index].delete=false;        
        new_gateway_r2t[index].aliasName="";
        new_gateway_r2t[index].serialProfile="";
        new_gateway_r2t[index].rtuSlaveID=0;
        new_gateway_r2t[index].tcpProfileMaster="";
        new_gateway_r2t_index=index;
        new_gateway_r2t_modal=true;

    }

    function add_new_gateway_r2t(index)
    {
        new_gateway_r2t_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp=[...changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp,new_gateway_r2t[index]];
    }


    let backup_gateway_r2t={
        enable: false,
        delete: false,
        aliasName: "",
        serialProfile:"",
        rtuSlaveID: 0,
        tcpProfileMaster: ""
    };


    let Modify_Gateway_R2T_Modal=false;
    let Modify_Gateway_R2T_index;

    function deleteGatewayR2T(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].delete=true;
    }

    function RestoreDeleteGatewayR2T(index)
    {
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].delete=false;
    }

    function TriggerModifyGateway_R2T(index)
    {
        Modify_Gateway_R2T_Modal=true;
        Modify_Gateway_R2T_index=index;
        backup_gateway_r2t.enable=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].enable;
        backup_gateway_r2t.delete=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].delete;        
        backup_gateway_r2t.aliasName=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].aliasName;
        backup_gateway_r2t.serialProfile=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].serialProfile;
        backup_gateway_r2t.rtuSlaveID=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].rtuSlaveID;
        backup_gateway_r2t.tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].tcpProfileMaster;

    }

    function NoModifyGateway_R2T(index)
    {
        Modify_Gateway_R2T_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].enable=backup_gateway_r2t.enable;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].delete=backup_gateway_r2t.delete;        
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].aliasName=backup_gateway_r2t.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].serialProfile=backup_gateway_r2t.serialProfile;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].rtuSlaveID=backup_gateway_r2t.rtuSlaveID;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].tcpProfileMaster=backup_gateway_r2t.tcpProfileMaster;

    }

    function ModifyGateway_R2T()
    {
        Modify_Gateway_R2T_Modal=false;  
    }




    function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
    {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            if (key == 'tag' && (type ==6 || type ==7 || type ==8 || type ==9))
            {
                console.log("don't compare tag here");
            }
            else
            {
                for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
                {
                  compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1);
                }

                if (obj1[key].length > obj2[key].length) 
                {
                  let addedCount=obj1[key].length-obj2[key].length;
                  for (let j=obj2[key].length; j < obj1[key].length; j++)
                  {
                    if (obj1[key][j]["delete"])
                    {
                      addedCount--;
                    }
                  }

                  if (addedCount >0)
                  {
                      let changedstr="Add "+addedCount+" item(s) to "+ key;
                      if (type == 0)
                      {
                        modbus_gateway_TtT_changedValues=[...modbus_gateway_TtT_changedValues, changedstr];
                      }
                      else if (type == 1)
                      {
                        modbus_gateway_RtR_changedValues=[...modbus_gateway_RtR_changedValues, changedstr];          
                      }
                      else if (type == 2)
                      {
                        modbus_gateway_RtT_changedValues=[...modbus_gateway_RtT_changedValues, changedstr];          
                      }   
                      else if (type == 3)
                      {
                        modbus_gateway_TtR_changedValues=[...modbus_gateway_TtR_changedValues, changedstr];          
                      }
                      else if (type == 4)
                      {         
                      }
                      else if (type == 5)
                      {

                      }
                      else if (type == 6)
                      {
                        modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
                      }  
                      else if (type == 7)
                      {
                        modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
                      }
                      else if (type == 8)
                      {
                        modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
                      }  
                      else if (type == 9)
                      {
                        modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
                      }  
                      else if (type == 10)
                      {
                        modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                      } 
                  }                                   
                }
                else if (obj1[key].length < obj2[key].length)
                {
                  let deletedCount=obj2[key].length-obj1[key].length;
                  let changedstr="Delete "+deletedCount+" item(s) from "+ key;
                  if (type == 0)
                  {
                    modbus_gateway_TtT_changedValues=[...modbus_gateway_TtT_changedValues, changedstr];
                  }
                  else if (type == 1)
                  {
                    modbus_gateway_RtR_changedValues=[...modbus_gateway_RtR_changedValues, changedstr];          
                  }
                  else if (type == 2)
                  {
                    modbus_gateway_RtT_changedValues=[...modbus_gateway_RtT_changedValues, changedstr];          
                  }
                  else if (type == 3)
                  {
                    modbus_gateway_TtR_changedValues=[...modbus_gateway_TtR_changedValues, changedstr];          
                  }
                  else if (type == 4)
                  {
             
                  }
                  else if (type == 5)
                  {

                  }
                  else if (type == 6)
                  {
                    modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
                  }  
                  else if (type == 7)
                  {
                    modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
                  }
                  else if (type == 8)
                  {
                    modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
                  }  
                  else if (type == 9)
                  {
                    modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
                  }
                  else if (type == 10)
                  {
                    modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                  }                        
                }
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0);
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            if (type == 10)
            {
                if (target_device_tag_type==0)
                {
                    changedstr=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].aliasName + " Tag List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
                }
                else if (target_device_tag_type==1)
                {
                    changedstr=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].aliasName + " Tag List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
                }
                else if (target_device_tag_type==2)
                {
                    changedstr="Local TCP Slave Tag List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
                }
            }
            else
                changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }

          if (type == 0)
          {
            modbus_gateway_TtT_changedValues=[...modbus_gateway_TtT_changedValues, changedstr];
          }
          else if (type == 1)
          {
            modbus_gateway_RtR_changedValues=[...modbus_gateway_RtR_changedValues, changedstr];          
          }
          else if (type == 2)
          {
            modbus_gateway_RtT_changedValues=[...modbus_gateway_RtT_changedValues, changedstr];          
          }          
          else if (type == 3)
          {
            modbus_gateway_TtR_changedValues=[...modbus_gateway_TtR_changedValues, changedstr];          
          }    
          else if (type == 4)
          {
        
          }
          else if (type == 5)
          {

          }
          else if (type == 6)
          {
            modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
          }  
          else if (type == 7)
          {
            modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
          }
          else if (type == 8)
          {
            modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
          }  
          else if (type == 9)
          {
            modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
          }
          else if (type == 10)
          {
            modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
          }                
        }
      }
    }


    function comparedSmartConverionOPCUA2ModbusObject(obj1, obj2, type, isArrayItem, ArrayIndex, ArrayName)
    {

      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            console.log('key:', key);
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              if (key != 'clientCertificate')
              {
                compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1, ArrayName);
              }
            }

            if (obj1[key].length > obj2[key].length) 
            {
              let addedCount=obj1[key].length-obj2[key].length;

              for (let j=obj2[key].length; j <obj1[key].length; j++)
              {
                if (obj1[key][j]["delete"])
                {
                  addedCount--;
                }

              }


              if (addedCount > 0)
              {
                let changedstr="Add "+addedCount+" item(s) to "+ key;
                if (type ==3)
                {
                  conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
                }
               
              }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type ==3)
              {
                conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
              }
             
            }
            else
            {
              if (key== 'clientCertificate')
              {
                for (let i = 0; i < obj1[key].length; i++) 
                {
                  if (obj1[key][i] != obj2[key][i])
                  {
                    let changedstr="clientCertificate List No."+(i+1)+" item is changed: "+ "certificate has changed to "+obj1[key][i];
                    if (type ==3)
                    {
                      conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
                    }
                    
                  }
                }
              }
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0, "none");
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            if (ArrayName != "none")
              changedstr=ArrayName+"List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            else
              changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }

          if (type ==3)
          {
            conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
          }

        }
      }
  
    }

    function saveTagV2()
    {

        if (modbus_tag_changedValues.length !=0)
        {
            modbus_tag_changedValues=[];
        }


        if (target_device_tag_type==0)
        {
            if (modbus_data.config.fieldManagement_modbus_tcp.master.length > 0 && modbus_data.config.fieldManagement_modbus_tcp.master.length > target_device_index)
            {
                for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length, modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length); i++) 
                {
                    compareObjects(changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i], modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i], 10, 1,i+1);

                    if (changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName != saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName)
                    {
      
                        for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                        {
                            for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                            {
                                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                                &&
                                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                                {

                                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                    }
                                    else
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                    }

                                    if (sdata_logger_proxy_edge_changedValues.length !=0)
                                    {
                                        sdata_logger_proxy_edge_changedValues=[];
                                    }


                                    compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                                    SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                                    ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                                }
                            }
                        }

                        for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                        {

                            for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                            {
                                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                                &&
                                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                                {

                                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                    }
                                    else
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                    }
                                }
                            }
                        }


                        for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                        {

                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {

                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                                }

                                if (sdata_logger_monitor_edge_changedValues.length !=0)
                                {
                                    sdata_logger_monitor_edge_changedValues=[];
                                }


                                compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], 2, 1,j+1);

                                SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);

                                ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                            }
                        }

                        for (let j=sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                                }
                            }
                        }


                        for (let j=0; j < event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                                }


                                if (event_engine_trigger_modbus_changeValues.length !=0)
                                {
                                    event_engine_trigger_modbus_changeValues=[];
                                }

                                compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],
                                event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],2,1,j+1,"Modbus");

                                EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
                                ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                            }

                        }

                        for (let j=event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";   
                                }
                            }

                        }


                        for (let j=0; j < event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                                }

                                if (event_engine_action_modbus_changeValues.length !=0)
                                {
                                    event_engine_action_modbus_changeValues=[];
                                }

                                compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j],
                                event_engine_data.config.service_eventEngine_actionProfile.modbus[j],8,1,j+1,"Modbus");

                                EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
                                ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                            }

                        }

                        for (let j=event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                                }
                            }
                        }
                    }

                }

                for (let i=modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length; i< saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length;i++)
                {

                  if (changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName != saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName)
                  {
          
                    for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                    {

                        for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=""; 
                                }

                                if (sdata_logger_proxy_edge_changedValues.length !=0)
                                {
                                    sdata_logger_proxy_edge_changedValues=[];
                                }


                                compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                                SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                                ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                            }
                        }
                    }

                    for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                    {

                        for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusDataModel=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                }
                            }

                        }
                    }


                    for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                    {
                        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                        &&
                        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;                   
                            }
                            else
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                            }

                            if (sdata_logger_monitor_edge_changedValues.length !=0)
                            {
                                sdata_logger_monitor_edge_changedValues=[];
                            }


                            compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], 2, 1,j+1);

                            SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);

                            ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                        }
                    }

                    for (let j=sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                    {
                        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName
                        &&
                        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                            }

                        }
                    }


                    for (let j=0; j < event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                            }


                            if (event_engine_trigger_modbus_changeValues.length !=0)
                            {
                                event_engine_trigger_modbus_changeValues=[];
                            }

                            compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],
                            event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],2,1,j+1,"Modbus");

                            EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
                            ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                        }

                    }

                    for (let j=event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                            }
                        }

                    }


                    for (let j=0; j < event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                            }



                            if (event_engine_action_modbus_changeValues.length !=0)
                            {
                                event_engine_action_modbus_changeValues=[];
                            }

                            compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j],
                            event_engine_data.config.service_eventEngine_actionProfile.modbus[j],8,1,j+1,"Modbus");

                            
                            EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
                            ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                        }

                    }

                    for (let j=event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                            }
                        }
                    }


                    for (let t=0; t<sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length;t++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName="";
                            }


                            if (conversion_opcua2modbus_changedValues.length !=0)
                            {
                                conversion_opcua2modbus_changedValues=[];
                            }


                            comparedSmartConverionOPCUA2ModbusObject(saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus,sconversion_data.config.service_smartConversion.opcua2modbus,3,0,0,"none")

                            Conversion_Opcua2Modbus_ConfigChangedLog.set(conversion_opcua2modbus_changedValues);
                            ChangedSConfigConfig.set(saved_changed_sconversion_data);

                        }
                    }

                    for (let t=sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length; t<saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length;t++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName == saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName="";
                            }
                        }
                    }
                  }
                }

                if (changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length > modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length)
                {
                  let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length-modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length;

                  for (let k=modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length;k<changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length;k++)
                  {
                    if (changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[k].delete)
                    {
                        addedCount--;
                    }
                  }

                    if (addedCount > 0)
                    {
                        let changedstr="Add "+addedCount+" item(s) to "+changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].aliasName+" Tag List";
                        modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                    }
                }

                if (changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length < modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length)
                {
                    let deletedCount=modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length-changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length;

                    let changedstr="Delete "+deleteCount+" item(s) from "+changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].aliasName +" Tag List";
                    modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                }


            }
            else if (modbus_data.config.fieldManagement_modbus_tcp.master.length==0)
            {
                let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length;

                for (let k=0;k<changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length;k++)
                {
                    if (changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[k].delete)
                    {
                        addedCount--;
                    }
                }

                if (addedCount > 0)
                {
                    let changedstr="Add "+addedCount+" item(s) to "+changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].aliasName+" Tag List";
                    modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                }

            }


            let nonDelete=[];
            for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length; i++)
            {
                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i].delete)
                {
                    nonDelete=[...nonDelete, changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[i]]
                }
            }
            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag=JSON.parse(JSON.stringify(nonDelete));
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag=JSON.parse(JSON.stringify(nonDelete));



        }
        else if(target_device_tag_type==1)
        {

            if (modbus_data.config.fieldManagement_modbus_rtu.master.length > 0 && modbus_data.config.fieldManagement_modbus_rtu.master.length >= target_device_index)
            {
                for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length, modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length); i++) 
                {
                    compareObjects(changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i], modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i], 10, 1,i+1);

                    if (changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName != saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName)
                    {
      
                        for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                        {
                            for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                            {
                                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                                &&
                                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                                {

                                    if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                    }
                                    else
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                    }

                                    if (sdata_logger_proxy_edge_changedValues.length !=0)
                                    {
                                        sdata_logger_proxy_edge_changedValues=[];
                                    }


                                    compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                                    SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                                    ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                                }
                            }
                        }

                        for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                        {

                            for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                            {
                                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                                &&
                                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                                {

                                    if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                    }
                                    else
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                    }
                                }
                            }
                        }


                        for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                        {

                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {

                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                                }

                                if (sdata_logger_monitor_edge_changedValues.length !=0)
                                {
                                    sdata_logger_monitor_edge_changedValues=[];
                                }


                                compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], 2, 1,j+1);

                                SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);

                                ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                            }
                        }

                        for (let j=sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                                }
                            }
                        }


                        for (let j=0; j < event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                                }


                                if (event_engine_trigger_modbus_changeValues.length !=0)
                                {
                                    event_engine_trigger_modbus_changeValues=[];
                                }

                                compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],
                                event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],2,1,j+1,"Modbus");

                                EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
                                ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                            }

                        }

                        for (let j=event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";   
                                }
                            }

                        }


                        for (let j=0; j < event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                                }

                                if (event_engine_action_modbus_changeValues.length !=0)
                                {
                                    event_engine_action_modbus_changeValues=[];
                                }

                                compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j],
                                event_engine_data.config.service_eventEngine_actionProfile.modbus[j],8,1,j+1,"Modbus");

                                EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
                                ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                            }

                        }

                        for (let j=event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                                }
                            }
                        }
                    }

                }


                for (let i=modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length; i< saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length;i++)
                {

                  if (changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName != saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName)
                  {
          
                    for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                    {

                        for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=""; 
                                }

                                if (sdata_logger_proxy_edge_changedValues.length !=0)
                                {
                                    sdata_logger_proxy_edge_changedValues=[];
                                }


                                compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                                SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                                ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                            }
                        }
                    }

                    for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                    {

                        for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusDataModel=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                }
                            }

                        }
                    }


                    for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                    {
                        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                        &&
                        saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;                   
                            }
                            else
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                            }

                            if (sdata_logger_monitor_edge_changedValues.length !=0)
                            {
                                sdata_logger_monitor_edge_changedValues=[];
                            }


                            compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], 2, 1,j+1);

                            SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);

                            ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                        }
                    }

                    for (let j=sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                    {
                        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName
                        &&
                        saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                            }

                        }
                    }


                    for (let j=0; j < event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                            }


                            if (event_engine_trigger_modbus_changeValues.length !=0)
                            {
                                event_engine_trigger_modbus_changeValues=[];
                            }

                            compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],
                            event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],2,1,j+1,"Modbus");

                            EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
                            ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                        }

                    }

                    for (let j=event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                            }
                        }

                    }


                    for (let j=0; j < event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                            }



                            if (event_engine_action_modbus_changeValues.length !=0)
                            {
                                event_engine_action_modbus_changeValues=[];
                            }

                            compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j],
                            event_engine_data.config.service_eventEngine_actionProfile.modbus[j],8,1,j+1,"Modbus");

                            
                            EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
                            ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                        }

                    }

                    for (let j=event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                            }
                        }
                    }


                    for (let t=0; t<sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length;t++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName="";
                            }


                            if (conversion_opcua2modbus_changedValues.length !=0)
                            {
                                conversion_opcua2modbus_changedValues=[];
                            }


                            comparedSmartConverionOPCUA2ModbusObject(saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus,sconversion_data.config.service_smartConversion.opcua2modbus,3,0,0,"none")

                            Conversion_Opcua2Modbus_ConfigChangedLog.set(conversion_opcua2modbus_changedValues);
                            ChangedSConfigConfig.set(saved_changed_sconversion_data);

                        }
                    }

                    for (let t=sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length; t<saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length;t++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName == saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName && saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName="";
                            }
                        }
                    }
                  }
                }

                if (changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length > modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length)
                {
                  let addedCount=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length-modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length;

                  for (let k=modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length;k<changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length;k++)
                  {
                    if (changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[k].delete)
                    {
                        addedCount--;
                    }
                  }

                    if (addedCount > 0)
                    {
                        let changedstr="Add "+addedCount+" item(s) to "+changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].aliasName  +" Tag List";
                        modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                    }
                }

                if (changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length < modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length)
                {
                    let deletedCount=modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length-changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length;

                    let changedstr="Delete "+deleteCount+" item(s) from "+changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].aliasName +" Tag List";
                    modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                }
            }
            else if (modbus_data.config.fieldManagement_modbus_rtu.master.length==0)
            {
                let addedCount=changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length;

                for (let k=0;k<changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length;k++)
                {
                    if (changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[k].delete)
                    {
                        addedCount--;
                    }
                }

                if (addedCount > 0)
                {
                    let changedstr="Add "+addedCount+" item(s) to "+changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].aliasName+" Tag List";
                    modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                }

            }            

            let nonDelete=[];
            for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length; i++)
            {
                if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i].delete)
                {
                    nonDelete=[...nonDelete, changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[i]]
                }
            }

            saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag=JSON.parse(JSON.stringify(nonDelete));
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag=JSON.parse(JSON.stringify(nonDelete));


        }
        else if(target_device_tag_type==2)
        {

            if (modbus_data.config.fieldManagement_modbus_tcp.slave.length > 0 && modbus_data.config.fieldManagement_modbus_tcp.slave.length >= target_device_index)
            {
                for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length, modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length); i++) 
                {
                    compareObjects(changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i], modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i], 10, 1,i+1);


                    if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName != saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName)
                    {
      
                        for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                        {
                            for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                            {
                                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                                &&
                                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                                {

                                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                    }
                                    else
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                    }

                                    if (sdata_logger_proxy_edge_changedValues.length !=0)
                                    {
                                        sdata_logger_proxy_edge_changedValues=[];
                                    }


                                    compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                                    SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                                    ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                                }
                            }
                        }

                        for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                        {

                            for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                            {
                                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                                &&
                                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                                {

                                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                    }
                                    else
                                    {
                                        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                    }
                                }
                            }
                        }


                        for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                        {

                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {

                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                                }

                                if (sdata_logger_monitor_edge_changedValues.length !=0)
                                {
                                    sdata_logger_monitor_edge_changedValues=[];
                                }


                                compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], 2, 1,j+1);

                                SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);

                                ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                            }
                        }

                        for (let j=sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                                }
                            }
                        }


                        for (let j=0; j < event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                                }


                                if (event_engine_trigger_modbus_changeValues.length !=0)
                                {
                                    event_engine_trigger_modbus_changeValues=[];
                                }

                                compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],
                                event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],2,1,j+1,"Modbus");

                                EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
                                ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                            }

                        }

                        for (let j=event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";   
                                }
                            }

                        }


                        for (let j=0; j < event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                                }

                                if (event_engine_action_modbus_changeValues.length !=0)
                                {
                                    event_engine_action_modbus_changeValues=[];
                                }

                                compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j],
                                event_engine_data.config.service_eventEngine_actionProfile.modbus[j],8,1,j+1,"Modbus");

                                EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
                                ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                            }

                        }

                        for (let j=event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                        {
                            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                                }
                            }
                        }
                    }

                }


                for (let i=modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length; i< saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length;i++)
                {

                  if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName != saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName)
                  {
          
                    for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                    {

                        for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]=""; 
                                }

                                if (sdata_logger_proxy_edge_changedValues.length !=0)
                                {
                                    sdata_logger_proxy_edge_changedValues=[];
                                }


                                compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                                SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                                ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                            }
                        }
                    }

                    for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
                    {

                        for (let m=0; m < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag.length; m++)
                        {
                            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m] ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                            &&
                            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                            {
                                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusDataModel=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                                }
                                else
                                {
                                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusTag[m]="";
                                }
                            }

                        }
                    }


                    for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                    {
                        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                        &&
                        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;                   
                            }
                            else
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                            }

                            if (sdata_logger_monitor_edge_changedValues.length !=0)
                            {
                                sdata_logger_monitor_edge_changedValues=[];
                            }


                            compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j], 2, 1,j+1);

                            SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);

                            ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                        }
                    }

                    for (let j=sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
                    {
                        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag ==saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName
                        &&
                        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusTag="";
                            }

                        }
                    }


                    for (let j=0; j < event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                            }


                            if (event_engine_trigger_modbus_changeValues.length !=0)
                            {
                                event_engine_trigger_modbus_changeValues=[];
                            }

                            compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],
                            event_engine_data.config.service_eventEngine_triggerProfile.modbus[j],2,1,j+1,"Modbus");

                            EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
                            ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                        }

                    }

                    for (let j=event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[j].modbusTag="";
                            }
                        }

                    }


                    for (let j=0; j < event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                            }



                            if (event_engine_action_modbus_changeValues.length !=0)
                            {
                                event_engine_action_modbus_changeValues=[];
                            }

                            compareEventEngineObjects(saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j],
                            event_engine_data.config.service_eventEngine_actionProfile.modbus[j],8,1,j+1,"Modbus");

                            
                            EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
                            ChangedEventEngineConfig.set(saved_changed_event_engine_data);

                        }

                    }

                    for (let j=event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j < saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length;j++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[j].modbusTag="";
                            }
                        }
                    }


                    for (let t=0; t<sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length;t++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {

                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName="";
                            }


                            if (conversion_opcua2modbus_changedValues.length !=0)
                            {
                                conversion_opcua2modbus_changedValues=[];
                            }


                            comparedSmartConverionOPCUA2ModbusObject(saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus,sconversion_data.config.service_smartConversion.opcua2modbus,3,0,0,"none")

                            Conversion_Opcua2Modbus_ConfigChangedLog.set(conversion_opcua2modbus_changedValues);
                            ChangedSConfigConfig.set(saved_changed_sconversion_data);

                        }
                    }

                    for (let t=sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length; t<saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length;t++)
                    {
                        if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName == saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName && saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName!="")
                        {
                            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].tagName;
                            }
                            else
                            {
                                saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[t].modbusTagName="";
                            }
                        }
                    }
                  }
                }

                if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length > modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length)
                {
                  let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length-modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length;

                  for (let k=modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length;k<changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length;k++)
                  {
                    if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[k].delete)
                    {
                        addedCount--;
                    }
                  }

                    if (addedCount > 0)
                    {
                        let changedstr="Add "+addedCount+" item(s) to Local TCP Slave Modbus Tag List";
                        modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                    }
                }

                if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length < modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length)
                {
                    let deletedCount=modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length-changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length;

                    let changedstr="Delete "+deleteCount+" item(s) from Local TCP Slave Modbus Tag List";
                    modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                }

            }
            else if (modbus_data.config.fieldManagement_modbus_tcp.slave.length==0)
            {
                let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length;

                for (let k=0;k<changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length;k++)
                {
                    if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[k].delete)
                    {
                        addedCount--;
                    }
                }

                if (addedCount > 0)
                {
                    let changedstr="Add "+addedCount+" item(s) to "+changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].aliasName+" Tag List";
                    modbus_tag_changedValues=[...modbus_tag_changedValues, changedstr];
                }

            }     


            let nonDelete=[];
            for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag.length; i++)
            {
                if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i].delete)
                {
                    nonDelete=[...nonDelete, changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[i]]
                }
            }

            saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag=JSON.parse(JSON.stringify(nonDelete));
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag=JSON.parse(JSON.stringify(nonDelete));
            

        }

        ModbusTag_ConfigChangedLog.set(modbus_tag_changedValues);
        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(saved_changed_modbus_data);
        console.log(modbus_tag_changedValues);    


    }

    function saveRTUSlave()
    {
        console.log("save rtu Slave");
        if (modbus_rtu_slave_changedValues.length !=0)
        {
            modbus_rtu_slave_changedValues=[];
        }

        let needSaveGatewayR2R=0;
        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length, modbus_data.config.fieldManagement_modbus_rtu.slave.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i], modbus_data.config.fieldManagement_modbus_rtu.slave[i], 8, 1,i+1);


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].rtuProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName != ""
                )
                {
                    if (!changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].delete)
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].rtuProfileSlave=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName;
                    }
                    else
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].rtuProfileSlave="";
                    }    

                    needSaveGatewayR2T=1;
                }
            }


        }

        if (changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length > modbus_data.config.fieldManagement_modbus_rtu.slave.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length-modbus_data.config.fieldManagement_modbus_rtu.slave.length;

          for (let k= modbus_data.config.fieldManagement_modbus_rtu.slave.length;k<changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length;k++)
          {
            if (changed_modbus_data.config.fieldManagement_modbus_rtu.slave[k].delete)
            {
                addedCount--;
            }
          }

            if (addedCount > 0)
            {
                let changedstr="Add "+addedCount+" item(s) to Modbus RTU Slave List";
                modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
            }
        }


        if (changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length < modbus_data.config.fieldManagement_modbus_rtu.slave.length)
        {
            let deletedCount=modbus_data.config.fieldManagement_modbus_rtu.slave.length-changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length;

            let changedstr="Delete "+deletedCount+" item(s) from Modbus RTU Slave List";
            modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
        }


        ModbusRTU_Slave_ConfigChangedLog.set(modbus_rtu_slave_changedValues);

        let tempForDelete=[];
        for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length; i++)
        {
            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].delete)
            {
                tempForDelete=[...tempForDelete, changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i]]
            }

        }


        saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave=JSON.parse(JSON.stringify(tempForDelete));
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave=JSON.parse(JSON.stringify(tempForDelete));


        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_rtu_slave_changedValues);   



        if (needSaveGatewayR2T != 0)
        {
            saveGatewayR2T();
        }


    }

    function saveRTUMaster()
    {
        console.log("save rtu Master");
        if (modbus_rtu_master_changedValues.length !=0)
        {
            modbus_rtu_master_changedValues=[];
        }

        let needSaveGatewayT2R=0;

        console.log(changed_modbus_data.config.fieldManagement_modbus_rtu.master);
        console.log(modbus_data.config.fieldManagement_modbus_rtu.master);

        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_rtu.master.length, modbus_data.config.fieldManagement_modbus_rtu.master.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_rtu.master[i], modbus_data.config.fieldManagement_modbus_rtu.master[i], 9, 1,i+1);


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].rtuProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName != ""
                )
                {
                    if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].delete)
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].rtuProfileMaster=changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName;
                    }
                    else
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].rtuProfileMaster="";
                    }

                    needSaveGatewayT2R=1;
                }
            }
            

        }

        if (changed_modbus_data.config.fieldManagement_modbus_rtu.master.length > modbus_data.config.fieldManagement_modbus_rtu.master.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_rtu.master.length-modbus_data.config.fieldManagement_modbus_rtu.master.length;

          for (let k = modbus_data.config.fieldManagement_modbus_rtu.master.length; k < changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;k++)
          {
            if (changed_modbus_data.config.fieldManagement_modbus_rtu.master[k].delete)
            {
                addedCount--;
            }
          }

            if (addedCount > 0)
            {
                let changedstr="Add "+addedCount+" item(s) to Modbus RTU Master List";
                modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
            }
        }


        if (changed_modbus_data.config.fieldManagement_modbus_rtu.master.length < modbus_data.config.fieldManagement_modbus_rtu.master.length)
        {
          let deletedCount=modbus_data.config.fieldManagement_modbus_rtu.master.length-changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;
          let changedstr="Delete "+deletedCount+" item(s) from Modbus RTU Master List";
          modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
        }


        ModbusRTU_Master_ConfigChangedLog.set(modbus_rtu_master_changedValues);
       

       // saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_rtu.master));


        let tempForDelete=[];
        for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_rtu.master.length; i++)
        {
            if (!changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].delete)
            {
                tempForDelete=[...tempForDelete, changed_modbus_data.config.fieldManagement_modbus_rtu.master[i]]
            }

        }

        saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master=JSON.parse(JSON.stringify(tempForDelete));
        changed_modbus_data.config.fieldManagement_modbus_rtu.master=JSON.parse(JSON.stringify(tempForDelete));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_rtu_master_changedValues);  




        if (needSaveGatewayT2R != 0)
        {
            saveGatewayT2R();
        }
    } 


    function saveTCPSlave()
    {
        console.log("save tcp Slave");
        if (modbus_tcp_slave_changedValues.length !=0)
        {
            modbus_tcp_slave_changedValues=[];
        }

        let needSaveGatewayT2R=0;

        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length, modbus_data.config.fieldManagement_modbus_tcp.slave.length); i++) 
        {
            compareObjects(changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i], modbus_data.config.fieldManagement_modbus_tcp.slave[i], 6, 1,i+1);

           
            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != ""
                )
                {
                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].delete)
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    }
                    else
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave="";
                    }

                    needSaveGatewayT2R=1;
                }
            }

            
        }


        for (let i=modbus_data.config.fieldManagement_modbus_tcp.slave.length; i< saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length; i++ )
        {


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != ""
                )
                {
                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].delete)
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    }
                    else
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave="";
                    }

                    needSaveGatewayT2R=1;
                }
            }

          
        }

        if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length > modbus_data.config.fieldManagement_modbus_tcp.slave.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length-modbus_data.config.fieldManagement_modbus_tcp.slave.length;
          
          for (let k=modbus_data.config.fieldManagement_modbus_tcp.slave.length; k < changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length;k++)
          {
            if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave[k].delete)
            {
                addedCount--;
            }
          }

            if (addedCount > 0)
            {
                let changedstr="Add "+addedCount+" item(s) to Modbus TCP Slave List";
                modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
            }
        }

        if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length < modbus_data.config.fieldManagement_modbus_tcp.slave.length)
        {
            let deletedCount=modbus_data.config.fieldManagement_modbus_tcp.slave.length-changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length;


            let changedstr="Delete "+deletedCount+" item(s) from Modbus TCP Slave List";
            modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
        }


        ModbusTCP_Slave_ConfigChangedLog.set(modbus_tcp_slave_changedValues);

        let tempForDelete=[];
        for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length; i++)
        {
            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].delete)
            {
                tempForDelete=[...tempForDelete, changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i]]
            }

        }


        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave=JSON.parse(JSON.stringify(tempForDelete));
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave=JSON.parse(JSON.stringify(tempForDelete));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_tcp_slave_changedValues);  



        if (needSaveGatewayT2R != 0)
        {
            saveGatewayT2R();
        } 


    }

    function saveTCPMaster()
    {
        console.log("save tcp Master");
        if (modbus_tcp_master_changedValues.length !=0)
        {
            modbus_tcp_master_changedValues=[];
        }

        let needSaveGatewayR2T=0;

        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_tcp.master.length, modbus_data.config.fieldManagement_modbus_tcp.master.length); i++) 
        {
            compareObjects(changed_modbus_data.config.fieldManagement_modbus_tcp.master[i], modbus_data.config.fieldManagement_modbus_tcp.master[i], 7, 1,i+1);




            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != ""
                )
                {
                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].delete)
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    }
                    else
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster="";
                    }

                    needSaveGatewayR2T=1;
                }
            }




        }


        for (let i=modbus_data.config.fieldManagement_modbus_tcp.master.length; i < saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length; i++)
        {


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != ""
                )
                {
                    if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].delete)
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    }
                    else
                    {
                        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster="";
                    }
                    needSaveGatewayR2T=1;
                }
            }




        }


        if (changed_modbus_data.config.fieldManagement_modbus_tcp.master.length > modbus_data.config.fieldManagement_modbus_tcp.master.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.master.length-modbus_data.config.fieldManagement_modbus_tcp.master.length;

          for (let k=modbus_data.config.fieldManagement_modbus_tcp.master.length;k<changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;k++)
          {
            if (changed_modbus_data.config.fieldManagement_modbus_tcp.master[k].delete)
            {
                addedCount--;
            }
          }

            if (addedCount > 0)
            {
                let changedstr="Add "+addedCount+" item(s) to Modbus TCP Master List";
                modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
            }
        }


        if (changed_modbus_data.config.fieldManagement_modbus_tcp.master.length < modbus_data.config.fieldManagement_modbus_tcp.master.length)
        {
            let deletedCount=modbus_data.config.fieldManagement_modbus_tcp.master.length-changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;

            let changedstr="Delete "+addedCount+" item(s) from Modbus TCP Master List";
            modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
        }



        ModbusTCP_Master_ConfigChangedLog.set(modbus_tcp_master_changedValues);

        let tempForDelete=[];
        for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_tcp.master.length; i++)
        {
            if (!changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].delete)
            {
                tempForDelete=[...tempForDelete, changed_modbus_data.config.fieldManagement_modbus_tcp.master[i]]
            }

        }


        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master=JSON.parse(JSON.stringify(tempForDelete));
        changed_modbus_data.config.fieldManagement_modbus_tcp.master=JSON.parse(JSON.stringify(tempForDelete));

      //  saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_tcp.master));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_tcp_master_changedValues);  




        if (needSaveGatewayR2T != 0)
        {
            saveGatewayR2T();
        } 


    }

    function compareSDLObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
    {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1);
            }

            if (obj1[key].length > obj2[key].length) 
            {
                let addedCount=obj1[key].length-obj2[key].length;
                for (let j=obj2[key].length; j <obj1[key].length; j++)
                {
                    if (obj1[key][j]["delete"])
                    {
                    addedCount--;
                    }
                }

                if (addedCount >0)
                {
                    let changedstr="Add "+addedCount+" item(s) to "+ key;
                    if (type == 2)
                    {
                        sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                    }
                    else if (type == 0)
                    {
                        sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                    }
                }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 2)
              {
                sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
              }
              else if (type == 0)
              {
                sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
              }
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0);
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }
          
          if (type == 2)
          {
            sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
          }
          else if (type == 0)
          {
            sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
          }

        }
      }
    }


  function compareEventEngineObjects(obj1, obj2, type, isArrayItem, ArrayIndex, ArrayName) 
  {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareEventEngineObjects(obj1[key][i], obj2[key][i], type, 1,i+1, ArrayName);
            }

            if (obj1[key].length > obj2[key].length) 
            {
                let addedCount=obj1[key].length-obj2[key].length;
                for (let j=obj2[key].length; j <obj1[key].length; j++)
                {
                    if (obj1[key][j]["delete"])
                    {
                        addedCount--;
                    }
                }

                if (addedCount >0)
                {
                    let changedstr="Add "+addedCount+" item(s) to "+ key;

                    if (type == 2)
                    {
                        event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];   
                    }
                    else if (type == 8)
                    {
                        event_engine_action_modbus_changeValues=[...event_engine_action_modbus_changeValues,changedstr];
                    }
                }

            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
           
              if (type == 2)
              {
                event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];   
              }
              else if (type == 8)
              {
                 event_engine_action_modbus_changeValues=[...event_engine_action_modbus_changeValues,changedstr];
              }

            }
          }
          else
          {
            compareEventEngineObjects(obj1[key], obj2[key], type, 0,0, "");
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            if (type==6)
              changedstr=ArrayName + "List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            else
              changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }
          
    
            if (type == 2)
            {
                event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];   
            }
            else if (type == 8)
            {
                event_engine_action_modbus_changeValues=[...event_engine_action_modbus_changeValues,changedstr];
            }
        }
      }
  }



    function saveGatewayT2R()
    {
        console.log("save G T2R");
        if (modbus_gateway_TtR_changedValues.length != 0)
        {
          modbus_gateway_TtR_changedValues=[];
        }


        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length, modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[i], modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[i], 3, 1,i+1);
        }

        if (changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length > modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length-modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length;

          for (let k=modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length;k<changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length;k++)
          {
            if (changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[k].delete)
            {
                addedCount--;
            }
          }

            if (addedCount > 0)
            {
                let changedstr="Add "+addedCount+" item(s) to Modbus Gateway From TCP to RTU List";
                modbus_gateway_TtR_changedValues=[...modbus_gateway_TtR_changedValues, changedstr];
            }
        }


        ModbusGateway_TtR_ConfigChangedLog.set(modbus_gateway_TtR_changedValues);

        let tempForDelete=[];
        for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length; i++)
        {
            if (!changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[i].delete)
            {
                tempForDelete=[...tempForDelete, changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[i]]
            }

        }

      saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu=JSON.parse(JSON.stringify(tempForDelete));
      changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu=JSON.parse(JSON.stringify(tempForDelete));




       // saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_gateway_TtR_changedValues);

    }


    function saveGatewayR2T()
    {
        console.log("save G R2T");
        if (modbus_gateway_RtT_changedValues.length != 0)
        {
          modbus_gateway_RtT_changedValues=[];
        }


        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length, modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[i], modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[i], 2, 1,i+1);
        }

        if (changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length > modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length-modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length;
          
          for (let k=modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length;k<changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length;k++)
          {
            if (changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[k].delete)
            {
                addedCount--;
            }
          }

            if (addedCount > 0)
            {
                let changedstr="Add "+addedCount+" item(s) to Modbus Gateway From RTU to Tcp List";
                modbus_gateway_RtT_changedValues=[...modbus_gateway_RtT_changedValues, changedstr];
            }

        }


        ModbusGateway_RtT_ConfigChangedLog.set(modbus_gateway_RtT_changedValues);

        let tempForDelete=[];
        for (let i = 0; i< changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length; i++)
        {
            if (!changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[i].delete)
            {
                tempForDelete=[...tempForDelete, changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[i]]
            }

        }

      saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp=JSON.parse(JSON.stringify(tempForDelete));
      changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp=JSON.parse(JSON.stringify(tempForDelete));



        //saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_gateway_RtT_changedValues);

    }    


    function NewPointTypeChange(target_tag_index, logical_address)
    {

        new_tag[target_tag_index].address=logical_address; 
    }


    function ChangedPointTypeChange(type,device_index,tag_index,logical_address)
    {
        if (type ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.master[device_index].tag[tag_index].address=logical_address;
        }
        else if (type ==1)
        {
            changed_modbus_data.config.fieldManagement_modbus_rtu.master[device_index].tag[tag_index].address=logical_address;
        }
        else if (type ==2)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave[device_index].tag[tag_index].address=logical_address;
        }
    }




    let lines;
    let ViewerResult;
    let ViewerResultTimeStamp=[];
    let ViewerResultStatus=[];
    let ViewerResultReady=0;

    async function getModbusViewer() {
    const res = await fetch(window.location.origin+"/PostModBUsviEWer", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      ViewerResult =await res.text();
      console.log(ViewerResult);
      lines = ViewerResult.trim().split('\n');
      for (let i=0; i< lines.length; i++)
      {
        ViewerResultTimeStamp=[...ViewerResultTimeStamp, lines[i].slice(0,19)];
        ViewerResultStatus=[...ViewerResultStatus,lines[i].slice(25)]

      }

      ViewerResultReady=1;

    }
    else
    {
      console.log("error modbus viewer");

    }
  }



  const RefreshViewer = () =>
  { 
    ViewerResultTimeStamp=[];
    ViewerResultStatus=[];
    ViewerResultReady=0; 
    getModbusViewer();
  } 


  async function getPortConnectionData() {
    const res = await fetch(window.location.origin+"/GeTPortConnection", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
        console.log("get port connection");
        port_connection_data= await res.json();
        console.log(port_connection_data);
        saved_changed_port_connection_data=JSON.parse(JSON.stringify(port_connection_data));
        ChangedPortConnectionConfig.set(saved_changed_port_connection_data);

    }
  }

    async function getSmartDataLoggerData() {
        const res = await fetch(window.location.origin+"/GETSmartDataLogger", {
            method: 'POST',
            body: sessionBinary
        })

        if (res.status == 200)
        {
            console.log("get smart data logger");
            sdata_logger_data =await res.json();
            console.log(sdata_logger_data);
            sdataLoggerConfig.set(sdata_logger_data);
            saved_changed_sdata_logger_data= JSON.parse(JSON.stringify(sdata_logger_data));
            ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

        }
    }



  async function getEventEngineData() {
        const res = await fetch(window.location.origin+"/gEtEventEngine", {
            method: 'POST',
            body: sessionBinary
        })

        if (res.status == 200)
        {
          event_engine_data =await res.json();
          console.log(event_engine_data);
          eventEngineConfig.set(event_engine_data);

          saved_changed_event_engine_data= JSON.parse(JSON.stringify(event_engine_data));
          ChangedEventEngineConfig.set(saved_changed_event_engine_data);
        }
    }

  async function getSmartConversionData () {
    const res = await fetch(window.location.origin+"/gETsConveRsion", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      sconversion_data =await res.json();
      console.log(sconversion_data);
      sconversionConfig.set(sconversion_data);

      saved_changed_sconversion_data= JSON.parse(JSON.stringify(sconversion_data));
      ChangedSConfigConfig.set(saved_changed_sconversion_data);
    }
  }



   async function getModbusData() {
    const res = await fetch(window.location.origin+"/GeTModbuS", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
        modbus_data =await res.json();
        console.log(modbus_data);
        modbusConfig.set(modbus_data);

        changed_modbus_data = JSON.parse(JSON.stringify(modbus_data));
        saved_changed_modbus_data= JSON.parse(JSON.stringify(modbus_data));
        ChangedModbusConfig.set(saved_changed_modbus_data);
        getDataReady=1;

        if (saved_changed_port_connection_data == "")
        {
            getPortConnectionData();
        }

        if (saved_changed_sdata_logger_data == "")
        {
            getSmartDataLoggerData();
        }

        if (saved_changed_event_engine_data == "")
        {
            getEventEngineData();
        }

        if (saved_changed_sconversion_data=="")
        {
            getSmartConversionData()
        }
    
    }
  }



 onMount(() => {

    console.log("modbus sessionid: ");
    console.log(sessionid);


    if (sessionid && modbus_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getModbusData();
    }
    else if(sessionid && modbus_data!="")
    {

        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        console.log("modbus data exist");
        changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
        console.log(changed_modbus_data);

        if (modbus_gateway_TtR_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu)); 
        }
        
        if (modbus_gateway_RtT_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp)); 
        }

        if (modbus_gateway_RtR_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu)); 
        }

        if (modbus_gateway_TtT_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp)); 
        }


        if(modbus_tcp_master_changedValues.length ==0)
        {
            if (modbus_tag_changedValues.length ==0)
            {
                changed_modbus_data.config.fieldManagement_modbus_tcp.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_tcp.master)); 
            }

        }

        if(modbus_tcp_slave_changedValues.length ==0)
        {
            if (modbus_tag_changedValues.length ==0)
            {
                changed_modbus_data.config.fieldManagement_modbus_tcp.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_tcp.slave));
            } 
        }

        if(modbus_rtu_master_changedValues.length ==0)
        {
            if (modbus_tag_changedValues.length ==0)
            {
                changed_modbus_data.config.fieldManagement_modbus_rtu.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_rtu.master));
            } 
        }

        if(modbus_rtu_slave_changedValues.length ==0)
        {

            changed_modbus_data.config.fieldManagement_modbus_rtu.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_rtu.slave)); 
            
        }



        if (saved_changed_port_connection_data == "")
        {
            getPortConnectionData();
        }
        else
        {
            console.log("saved_changed_port_connection_data");
            console.log(saved_changed_port_connection_data);
        }

        if (saved_changed_sdata_logger_data == "")
        {
            getSmartDataLoggerData();
        }
        else
        {
            console.log("saved_changed_sdata_logger_data");
            console.log(saved_changed_sdata_logger_data);
        }


        if (saved_changed_event_engine_data == "")
        {
            getEventEngineData();
        }
        else
        {
            console.log("saved_changed_event_engine_data");
            console.log(saved_changed_event_engine_data);
        }

        if (saved_changed_sconversion_data=="")
        {
            getSmartConversionData()
        }
        else
        {
            console.log("saved_changed_sconversion_data");
            console.log(saved_changed_sconversion_data);
        }

        getDataReady=1;

    }

  });


  </script>

 <Tabs style="underline">


<TabItem open title="RTU">
<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>

<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Serial Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_rtu.master as RTUMasterItem, index}

{#if RTUMasterItem.delete}

  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteRTUMaster(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={RTUMasterItem.enable} disabled>

      </td>

 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-10 strikeout">{index+1}</td>
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{RTUMasterItem.aliasName}</td>
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{RTUMasterItem.serialProfile}</td>
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{RTUMasterItem.slave_id}</td>
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{RTUMasterItem.response_timeout}</td>
      </tr>

{:else}

    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyRtuMaster(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteRTUMaster(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


      <TableBodyCell>
<input type="checkbox"  bind:checked={RTUMasterItem.enable}>
      </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUMasterItem.serialProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUMasterItem.slave_id}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUMasterItem.response_timeout}</TableBodyCell>
    </TableBodyRow>

{/if}

{/each}
{/if}


 <TableBodyRow>
{#if changed_modbus_data.config.fieldManagement_modbus_rtu.master.length < 10}
     <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_rtu_master_trigger(changed_modbus_data.config.fieldManagement_modbus_rtu.master.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>
{:else}
        <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}     
     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
    </TableBodyRow>


<tr>
    <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        <td></td>
        <td></td>
        <td></td>
        <td></td>

    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveRTUMaster}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>



 
<Modal bind:open={New_RTU_Master_Modal} autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_rtu_master[New_RTU_Master_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_rtu_master[New_RTU_Master_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_rtu_master[New_RTU_Master_index].serialProfile}>
<option disabled="" value="">Choose Profile ...</option>
{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_com as Serial, index}
{#if Serial.usedby ==1 && Serial.role == 0}
<option value={Serial.serialProfile}>{Serial.serialProfile}</option>
{/if}
{/each}
{/if}
</select>


      </td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_rtu_master[New_RTU_Master_index].slave_id} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_rtu_master[New_RTU_Master_index].response_timeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={add_new_rtu_master(New_RTU_Master_index)}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>


   
<Modal bind:open={Modify_RTU_Master_Modal} permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyRTUMaster(Modify_RTU_Master_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].serialProfile}>
<option disabled="" value="">Choose Profile ...</option>
{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_com as Serial, index}
<option value={Serial.serialProfile}>{Serial.serialProfile}</option>
{/each}
{/if}
</select>


      </td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].slave_id} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].response_timeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyRTUMaster}>Modify</Button></td>


    </tr>
</table>
</form>
</Modal>


</Table>

</AccordionItem>
</Accordion>
</TabItem>

     <TabItem title="TCP">
     
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>


<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Server IP</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Unit ID</TableHeadCell>    
    <TableHeadCell class="w-18">Connection Timeout</TableHeadCell>
    <TableHeadCell class="w-18">Response Timeout</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>    
  </TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_tcp.master as TCPMasterItem, index}

{#if TCPMasterItem.delete} 

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteTCPMaster(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TCPMasterItem.enable} disabled></td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{TCPMasterItem.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{TCPMasterItem.remoteServerIp}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMasterItem.remotePort}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMasterItem.unit_id}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMasterItem.connectionTimeout} ms</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMasterItem.responseTimeout} ms</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMasterItem.pollingRate} ms</td>

</tr>

{:else}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyTCPMaster(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteTCPMaster(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell>
<input type="checkbox"  bind:checked={TCPMasterItem.enable}>
    </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPMasterItem.remoteServerIp}</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMasterItem.remotePort}</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMasterItem.unit_id}</TableBodyCell>      
      <TableBodyCell class="w-18">{TCPMasterItem.connectionTimeout} ms</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMasterItem.responseTimeout} ms</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMasterItem.pollingRate} ms</TableBodyCell>      
    </TableBodyRow>
{/if}

{/each}
{/if}


 <TableBodyRow>

 {#if changed_modbus_data.config.fieldManagement_modbus_tcp.master.length < 10}
    <TableBodyCell class="!p-4 w-10">
            <button on:click={()=>new_tcp_master_trigger(changed_modbus_data.config.fieldManagement_modbus_tcp.master.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>
{:else}
    <TableBodyCell class="!p-4 w-16"></TableBodyCell>     
{/if}

     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
        <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>      
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>


<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTCPMaster}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>


   <Modal bind:open={new_tcp_master_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_tcp_master[new_tcp_master_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_master[new_tcp_master_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_master[new_tcp_master_index].remoteServerIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_tcp_master[new_tcp_master_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Unit ID</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_tcp_master[new_tcp_master_index].unit_id} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Connection Timeout</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_tcp_master[new_tcp_master_index].connectionTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_tcp_master[new_tcp_master_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Polling Rate</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_tcp_master[new_tcp_master_index].pollingRate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>

      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={add_new_tcp_master(new_tcp_master_index)}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>



   <Modal bind:open={Modify_TCP_Master_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTCPMaster(Modify_TCP_Master_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remoteServerIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Unit ID</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].unit_id} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Connection Timeout</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].connectionTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Polling Rate</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].pollingRate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>

      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyTCPMaster}>Modify</Button></td>


    </tr>
</table>
</form>
</Modal>


</Table>


</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Slave
    </span>

  <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Local TCP Slave</p></td>

    <td class="pl-8 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].enable} value={false}>Disable</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].enable} value={true} >Enable</Radio>

</div></td>
      </tr>

<tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Listen Port</p></td>
<td class="pl-8 pt-5">

<input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].listenPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


</td>

</tr>

<tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Max Connection</p></td>
<td class="pl-8 pt-5">

<input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].maxConnectionCount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


</td>

</tr>


<tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Idle Timeout</p></td>
<td class="pl-8 pt-5"><div class="flex gap-2">
<input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].idle_timeout_sec} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"> <p class="pl-2 pt-2 text-lg"> second(s)</p>
</div>

</td>

</tr>

<tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Write Timeout</p></td>
<td class="pl-8 pt-5"><div class="flex gap-2">
<input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].write_timeout_sec} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"> <p class="pl-2 pt-2 text-lg"> second(s)</p>

</div>
</td>

</tr>


<tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Unit ID</p></td>
<td class="pl-8 pt-5">

<input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].unitID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


</td>

</tr>




<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTCPSlave}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</table>

</AccordionItem>

</Accordion>

     </TabItem>

<TabItem title="Tag">



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64" bind:value={target_device_tag} on:change={target_device_tag_changed}>
<option disabled="" value="none">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TCPSlave,index}
{#if index ==0}
<option value=TS_0>Local TCP Slave</option>
{/if}
{/each}



{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TMaster, index}
<option value="TM_{index}">{TMaster.aliasName}</option>
{/each}


{#if saved_changed_port_connection_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as Serial, index}
<option value=RM_{index}>{Serial.aliasName}</option>
{/each}
{/if}

</select>

<p class="pt-4"></p>

{#if target_device_tag !=-1}


 <Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-1">No</TableHeadCell>
    <TableHeadCell class="!p-3">Tag Name</TableHeadCell>
    <TableHeadCell >Point Type</TableHeadCell>
    <TableHeadCell >Logical Address</TableHeadCell>
    <TableHeadCell class="!p-1">Date Type</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
    <TableHeadCell>Post Processing</TableHeadCell>
  </TableHead>

  <TableBody>


{#if getDataReady == 1}
{#if target_device_tag_type ==0}
{#each changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag as TagItem, index}


{#if TagItem.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={()=>RestoreDeleteTag(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>



<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TagItem.enable} disabled></td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 w-4 strikeout"> 
{index+1}


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-3 strikeout">{TagItem.tagName}</td>



{#if TagItem.pointType == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Coil</td>
{:else if TagItem.pointType == 1}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Discrete Input</td>
{:else if TagItem.pointType == 2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Input Registers</td>
{:else if TagItem.pointType == 3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Holding Registers</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout"></td>
{/if}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TagItem.address}</td>



{#if TagItem.dataType == 1}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Boolean</td>
{:else if TagItem.dataType == 2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt16</td>
{:else if TagItem.dataType == 3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int16</td>
{:else if TagItem.dataType == 4}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt32</td>
{:else if TagItem.dataType == 5}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int32</td>
{:else if TagItem.dataType == 6}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Float</td>
{:else if TagItem.dataType == 7}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Double</td>
{:else if TagItem.dataType == 8}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt64</td>
{:else if TagItem.dataType == 9}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int64</td>

{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout"></td>
{/if}


{#if TagItem.byteOrder==0} 
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Big Endian</td>
{:else if TagItem.byteOrder==1}   
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Little Endian</td>
{:else if TagItem.byteOrder==2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Big Endian Byte Swap</td>
{:else if TagItem.byteOrder==3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Little Endian Byte Swap</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout"></td>
{/if}





<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
{#if TagItem.postprocessingEnable}
{TagItem.postprocessingScale} X + {TagItem.postprocessingOffset}
{:else}
    Disable
{/if}

      </td>



</tr>

{:else}
 <TableBodyRow>
   <TableBodyCell class="!p-4 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={()=>deleteTag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
       <TableBodyCell>
<input type="checkbox"  bind:checked={TagItem.enable}>
    </TableBodyCell>


      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="!p-3">{TagItem.tagName}</TableBodyCell>


{#if TagItem.pointType == 0}
    <TableBodyCell >Coil</TableBodyCell>
{:else if TagItem.pointType == 1}
    <TableBodyCell >Discrete Input</TableBodyCell>
{:else if TagItem.pointType == 2}
    <TableBodyCell >Input Registers</TableBodyCell>
{:else if TagItem.pointType == 3}
    <TableBodyCell >Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell ></TableBodyCell>
{/if}
  <TableBodyCell >{TagItem.address}</TableBodyCell>


{#if TagItem.dataType == 1}
        <TableBodyCell class="!p-1">Boolean</TableBodyCell>
{:else if TagItem.dataType == 2}
        <TableBodyCell class="!p-1">UInt16</TableBodyCell>
{:else if TagItem.dataType == 3}
        <TableBodyCell class="!p-1">Int16</TableBodyCell>
{:else if TagItem.dataType == 4}
      <TableBodyCell class="!p-1">UInt32</TableBodyCell>
{:else if TagItem.dataType == 5}
      <TableBodyCell class="!p-1">Int32</TableBodyCell>
{:else if TagItem.dataType == 6}
      <TableBodyCell class="!p-1">Float</TableBodyCell>
{:else if TagItem.dataType == 7}
      <TableBodyCell class="!p-1">Double</TableBodyCell>   
{:else if TagItem.dataType == 8}
      <TableBodyCell class="!p-1">UInt64</TableBodyCell>
{:else if TagItem.dataType == 9}
      <TableBodyCell class="!p-1">Int64</TableBodyCell> 
{:else}
      <TableBodyCell class="!p-1"></TableBodyCell>
{/if}


{#if TagItem.byteOrder==0} 
    <TableBodyCell >Big Endian</TableBodyCell>
{:else if TagItem.byteOrder==1}   
        <TableBodyCell >Little Endian</TableBodyCell>
{:else if TagItem.byteOrder==2}
    <TableBodyCell >Big Endian Byte Swap</TableBodyCell>
{:else if TagItem.byteOrder==3}
        <TableBodyCell >Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell ></TableBodyCell>
{/if}




      <TableBodyCell>
{#if TagItem.postprocessingEnable}
{TagItem.postprocessingScale} X + {TagItem.postprocessingOffset}
{:else}
    Disable
{/if}

      </TableBodyCell>



    </TableBodyRow>

{/if}



{/each}
{:else if target_device_tag_type ==1}


{#each changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag as TagItem, index}

{#if TagItem.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={()=>RestoreDeleteTag(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>



<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TagItem.enable} disabled></td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 w-4 strikeout"> 
{index+1}


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-3 strikeout">{TagItem.tagName}</td>



{#if TagItem.pointType == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Coil</td>
{:else if TagItem.pointType == 1}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Discrete Input</td>
{:else if TagItem.pointType == 2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Input Registers</td>
{:else if TagItem.pointType == 3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Holding Registers</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout"></td>
{/if}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TagItem.address}</td>



{#if TagItem.dataType == 1}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Boolean</td>
{:else if TagItem.dataType == 2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt16</td>
{:else if TagItem.dataType == 3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int16</td>
{:else if TagItem.dataType == 4}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt32</td>
{:else if TagItem.dataType == 5}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int32</td>
{:else if TagItem.dataType == 6}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Float</td>
{:else if TagItem.dataType == 7}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Double</td>
{:else if TagItem.dataType == 8}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt64</td>
{:else if TagItem.dataType == 9}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int64</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout"></td>
{/if}


{#if TagItem.byteOrder==0} 
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Big Endian</td>
{:else if TagItem.byteOrder==1}   
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Little Endian</td>
{:else if TagItem.byteOrder==2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Big Endian Byte Swap</td>
{:else if TagItem.byteOrder==3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Little Endian Byte Swap</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout"></td>
{/if}





<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
{#if TagItem.postprocessingEnable}
{TagItem.postprocessingScale} X + {TagItem.postprocessingOffset}
{:else}
    Disable
{/if}

      </td>



</tr>

{:else}
 <TableBodyRow>
   <TableBodyCell class="!p-4 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={()=>deleteTag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
       <TableBodyCell>
<input type="checkbox"  bind:checked={TagItem.enable}>
    </TableBodyCell>


      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="!p-3">{TagItem.tagName}</TableBodyCell>


{#if TagItem.pointType == 0}
    <TableBodyCell >Coil</TableBodyCell>
{:else if TagItem.pointType == 1}
    <TableBodyCell >Discrete Input</TableBodyCell>
{:else if TagItem.pointType == 2}
    <TableBodyCell >Input Registers</TableBodyCell>
{:else if TagItem.pointType == 3}
    <TableBodyCell >Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell ></TableBodyCell>
{/if}
  <TableBodyCell >{TagItem.address}</TableBodyCell>


{#if TagItem.dataType == 1}
        <TableBodyCell class="!p-1">Boolean</TableBodyCell>
{:else if TagItem.dataType == 2}
        <TableBodyCell class="!p-1">UInt16</TableBodyCell>
{:else if TagItem.dataType == 3}
        <TableBodyCell class="!p-1">Int16</TableBodyCell>
{:else if TagItem.dataType == 4}
      <TableBodyCell class="!p-1">UInt32</TableBodyCell>
{:else if TagItem.dataType == 5}
      <TableBodyCell class="!p-1">Int32</TableBodyCell>
{:else if TagItem.dataType == 6}
      <TableBodyCell class="!p-1">Float</TableBodyCell>
{:else if TagItem.dataType == 7}
      <TableBodyCell class="!p-1">Double</TableBodyCell>
{:else if TagItem.dataType == 8}
      <TableBodyCell class="!p-1">UInt64</TableBodyCell>
{:else if TagItem.dataType == 9}
      <TableBodyCell class="!p-1">Int64</TableBodyCell>                          
{:else}
      <TableBodyCell class="!p-1"></TableBodyCell>
{/if}


{#if TagItem.byteOrder==0} 
    <TableBodyCell >Big Endian</TableBodyCell>
{:else if TagItem.byteOrder==1}   
        <TableBodyCell >Little Endian</TableBodyCell>
{:else if TagItem.byteOrder==2}
    <TableBodyCell >Big Endian Byte Swap</TableBodyCell>
{:else if TagItem.byteOrder==3}
        <TableBodyCell >Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell ></TableBodyCell>
{/if}




      <TableBodyCell>
{#if TagItem.postprocessingEnable}
{TagItem.postprocessingScale} X + {TagItem.postprocessingOffset}
{:else}
    Disable
{/if}

      </TableBodyCell>



    </TableBodyRow>

{/if}



{/each}

{:else if target_device_tag_type ==2}

{#each changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag as TagItem, index}

{#if TagItem.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={()=>RestoreDeleteTag(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>



<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TagItem.enable} disabled></td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 w-4 strikeout"> 
{index+1}


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-3 strikeout">{TagItem.tagName}</td>



{#if TagItem.pointType == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Coil</td>
{:else if TagItem.pointType == 1}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Discrete Input</td>
{:else if TagItem.pointType == 2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Input Registers</td>
{:else if TagItem.pointType == 3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Holding Registers</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout"></td>
{/if}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TagItem.address}</td>



{#if TagItem.dataType == 1}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Boolean</td>
{:else if TagItem.dataType == 2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt16</td>
{:else if TagItem.dataType == 3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int16</td>
{:else if TagItem.dataType == 4}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt32</td>
{:else if TagItem.dataType == 5}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int32</td>
{:else if TagItem.dataType == 6}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Float</td>
{:else if TagItem.dataType == 7}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Double</td>
{:else if TagItem.dataType == 8}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">UInt64</td>
{:else if TagItem.dataType == 9}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout">Int64</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-1 strikeout"></td>
{/if}


{#if TagItem.byteOrder==0} 
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Big Endian</td>
{:else if TagItem.byteOrder==1}   
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Little Endian</td>
{:else if TagItem.byteOrder==2}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Big Endian Byte Swap</td>
{:else if TagItem.byteOrder==3}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Little Endian Byte Swap</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout"></td>
{/if}





<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
{#if TagItem.postprocessingEnable}
{TagItem.postprocessingScale} X + {TagItem.postprocessingOffset}
{:else}
    Disable
{/if}

      </td>



</tr>

{:else}
 <TableBodyRow>
   <TableBodyCell class="!p-4 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">



       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">

    </TableBodyCell>
       <TableBodyCell>
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TagItem.enable} disabled>
    </TableBodyCell>


      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="!p-3">{TagItem.tagName}</TableBodyCell>


{#if TagItem.pointType == 0}
    <TableBodyCell >Coil</TableBodyCell>
{:else if TagItem.pointType == 1}
    <TableBodyCell >Discrete Input</TableBodyCell>
{:else if TagItem.pointType == 2}
    <TableBodyCell >Input Registers</TableBodyCell>
{:else if TagItem.pointType == 3}
    <TableBodyCell >Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell ></TableBodyCell>
{/if}
  <TableBodyCell >{TagItem.address}</TableBodyCell>


{#if TagItem.dataType == 1}
        <TableBodyCell class="!p-1">Boolean</TableBodyCell>
{:else if TagItem.dataType == 2}
        <TableBodyCell class="!p-1">UInt16</TableBodyCell>
{:else if TagItem.dataType == 3}
        <TableBodyCell class="!p-1">Int16</TableBodyCell>
{:else if TagItem.dataType == 4}
      <TableBodyCell class="!p-1">UInt32</TableBodyCell>
{:else if TagItem.dataType == 5}
      <TableBodyCell class="!p-1">Int32</TableBodyCell>
{:else if TagItem.dataType == 6}
      <TableBodyCell class="!p-1">Float</TableBodyCell>
{:else if TagItem.dataType == 7}
      <TableBodyCell class="!p-1">Double</TableBodyCell> 
{:else if TagItem.dataType == 8}
      <TableBodyCell class="!p-1">UInt64</TableBodyCell>
{:else if TagItem.dataType == 9}
      <TableBodyCell class="!p-1">Int64</TableBodyCell>                     
{:else}
      <TableBodyCell class="!p-1"></TableBodyCell>
{/if}


{#if TagItem.byteOrder==0} 
    <TableBodyCell >Big Endian</TableBodyCell>
{:else if TagItem.byteOrder==1}   
        <TableBodyCell >Little Endian</TableBodyCell>
{:else if TagItem.byteOrder==2}
    <TableBodyCell >Big Endian Byte Swap</TableBodyCell>
{:else if TagItem.byteOrder==3}
        <TableBodyCell >Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell ></TableBodyCell>
{/if}




      <TableBodyCell>
{#if TagItem.postprocessingEnable}
{TagItem.postprocessingScale} X + {TagItem.postprocessingOffset}
{:else}
    Disable
{/if}

      </TableBodyCell>



    </TableBodyRow>

{/if}



{/each}

{/if}


{/if}



     <TableBodyRow>
{#if target_device_tag_type ==0}

{#if changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length < 50}        
     <TableBodyCell class="!p-4 w-10">
  
    <button on:click={() =>new_tag_trigger(changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>
{:else}
<TableBodyCell class="!p-4 w-16"></TableBodyCell>  
{/if}
{:else if target_device_tag_type ==1}
{#if changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length < 50}        
     <TableBodyCell class="!p-4 w-10">
  
    <button on:click={() =>new_tag_trigger(changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>


     </TableBodyCell>
{:else}
<TableBodyCell class="!p-4 w-16"></TableBodyCell>  
{/if}

{:else if target_device_tag_type ==2}

<TableBodyCell class="!p-4 w-16"></TableBodyCell>  

{/if}

     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-1 w-4"></TableBodyCell>
      <TableBodyCell class="!p-3"></TableBodyCell>
      <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell> </TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>




  <tr>
    <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-4 pt-4"><Button color="blue" pill={true} on:click={saveTagV2}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


 </TableBody>
 </Table>




  <Modal bind:open={new_tag_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_tag[new_tag_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_tag[new_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={new_tag[new_tag_index].pointType} value={0} on:change={()=>NewPointTypeChange(new_tag_index,1)}>Coil</Radio>
  <Radio bind:group={new_tag[new_tag_index].pointType} value={1} on:change={()=>NewPointTypeChange(new_tag_index,10001)}>Discrete Input</Radio>
  <Radio bind:group={new_tag[new_tag_index].pointType} value={2} on:change={()=>NewPointTypeChange(new_tag_index,30001)}>Input Register</Radio>
  <Radio bind:group={new_tag[new_tag_index].pointType} value={3} on:change={()=>NewPointTypeChange(new_tag_index,40001)}>Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Logical Address</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_tag[new_tag_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


<tr>
  <td><p class="pl-20 pt-2 text-lg font-light text-right">Data Type</p>

  </td>

    <td class="pl-4 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_tag[new_tag_index].dataType}>
<option value={1}>Boolean</option>
{#if new_tag[new_tag_index].pointType !=0 && new_tag[new_tag_index].pointType !=1}
<option value={2}>UInt16</option>
<option value={3}>Int16</option>
<option value={4}>UInt32</option>
<option value={5}>Int32</option>
<option value={8}>UInt64</option>
<option value={9}>Int64</option>
<option value={6}>Float</option>
<option value={7}>Double</option>









{/if}
</select>

</td>
</tr>


  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={new_tag[new_tag_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={new_tag[new_tag_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={new_tag[new_tag_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={new_tag[new_tag_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
</div></td>
</tr>



<tr>
  <td><p class="pl-2 pt-2 text-lg font-light text-right">Post Processing</p>

  </td>

    <td class="pl-4 pt-5" colspan="5">
    <div class="flex gap-2">

<Toggle class="p-2.5 mt-2 mb-4" bind:checked={new_tag[new_tag_index].postprocessingEnable}></Toggle>

{#if new_tag[new_tag_index].postprocessingEnable}

<input type="text" bind:value={new_tag[new_tag_index].postprocessingScale} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">

<p class="mt-4">X + </p>
<input type="text" bind:value={new_tag[new_tag_index].postprocessingOffset} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">


<p class="mt-4">(X: Raw Data)</p>
{/if}
</div></td>
</tr>




      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={add_new_tag(new_tag_index)}>Add</Button></td>


    </tr>

</table>


</form>
</Modal>


<Modal bind:open={modify_tag_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
    {#if target_device_tag_type==0}
        <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].enable}>
    {:else if target_device_tag_type==1}
        <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].enable}>
    {:else if target_device_tag_type==2}
        <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].enable}>
    {/if}

{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTag(modify_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>



<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">
{#if target_device_tag_type==0}
      <input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if target_device_tag_type==1}
      <input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else if target_device_tag_type==2}
      <input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}    

      </td>



  </tr>




<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
{#if target_device_tag_type==0}    
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].pointType} value={0} on:change={()=>ChangedPointTypeChange(0,target_device_index,modify_tag_index,1)}>Coil</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].pointType} value={1} on:change={()=>ChangedPointTypeChange(0,target_device_index,modify_tag_index,10001)}>Discrete Input</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].pointType} value={2} on:change={()=>ChangedPointTypeChange(0,target_device_index,modify_tag_index,30001)}>Input Register</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].pointType} value={3} on:change={()=>ChangedPointTypeChange(0,target_device_index,modify_tag_index,40001)}>Holding Register</Radio>
{:else if target_device_tag_type==1}
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].pointType} value={0} on:change={()=>ChangedPointTypeChange(1,target_device_index,modify_tag_index,1)}>Coil</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].pointType} value={1} on:change={()=>ChangedPointTypeChange(1,target_device_index,modify_tag_index,10001)}>Discrete Input</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].pointType} value={2} on:change={()=>ChangedPointTypeChange(1,target_device_index,modify_tag_index,30001)}>Input Register</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].pointType} value={3} on:change={()=>ChangedPointTypeChange(1,target_device_index,modify_tag_index,40001)}>Holding Register</Radio>

{:else if target_device_tag_type==2}
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].pointType} value={0} on:change={()=>ChangedPointTypeChange(2,target_device_index,modify_tag_index,1)}>Coil</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].pointType} value={1} on:change={()=>ChangedPointTypeChange(2,target_device_index,modify_tag_index,10001)}>Discrete Input</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].pointType} value={2} on:change={()=>ChangedPointTypeChange(2,target_device_index,modify_tag_index,30001)}>Input Register</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].pointType} value={3} on:change={()=>ChangedPointTypeChange(2,target_device_index,modify_tag_index,40001)}>Holding Register</Radio>

{/if}


</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Logical Address</p></td><td class="pl-5 pt-5">

{#if target_device_tag_type==0}          
      <input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if target_device_tag_type==1}
      <input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else if target_device_tag_type==2}
      <input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

{/if}

      </td>

<td></td>
<td></td>
<td></td>

  </tr>


<tr>
  <td><p class="pl-20 pt-2 text-lg font-light text-right">Data Type</p>

  </td>

    <td class="pl-4 pt-5">

{#if target_device_tag_type==0}  
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].dataType}>
<option value={1}>Boolean</option>
{#if changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].pointType !=0 && changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].pointType !=1}

<option value={2}>UInt16</option>
<option value={3}>Int16</option>
<option value={4}>UInt32</option>
<option value={5}>Int32</option>
<option value={8}>UInt64</option>
<option value={9}>Int64</option>
<option value={6}>Float</option>
<option value={7}>Double</option>
{/if}

</select>
{:else if target_device_tag_type==1}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].dataType}>
<option value={1}>Boolean</option>

{#if changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].pointType !=0 && changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].pointType !=1}


<option value={2}>UInt16</option>
<option value={3}>Int16</option>
<option value={4}>UInt32</option>
<option value={5}>Int32</option>
<option value={8}>UInt64</option>
<option value={9}>Int64</option>
<option value={6}>Float</option>
<option value={7}>Double</option>

{/if}

</select>

{:else if target_device_tag_type==2}

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].dataType}>
<option value={1}>Boolean</option>

{#if changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].pointType !=0 && changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].pointType !=1}


<option value={2}>UInt16</option>
<option value={3}>Int16</option>
<option value={4}>UInt32</option>
<option value={5}>Int32</option>
<option value={8}>UInt64</option>
<option value={9}>Int64</option>
<option value={6}>Float</option>
<option value={7}>Double</option>
{/if}
</select>
{/if}


</td>
</tr>


  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">

{#if target_device_tag_type==0}  
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
{:else if target_device_tag_type==1}
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>

{:else if target_device_tag_type==2}
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>

{/if}


</div></td>
</tr>



<tr>
  <td><p class="pl-2 pt-2 text-lg font-light text-right">Post Processing</p>

  </td>

    <td class="pl-4 pt-5" colspan="5">
    <div class="flex gap-2">
{#if target_device_tag_type==0}  

 <Toggle class="p-2.5 mt-2 mb-4" bind:checked={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].postprocessingEnable}></Toggle>

{#if changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].postprocessingEnable}

<input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].postprocessingScale} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">

<p class="mt-4">X + </p>
<input type="text"bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[target_device_index].tag[modify_tag_index].postprocessingOffset} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">


<p class="mt-4">(X: Raw Data)</p>

{/if}

{:else if target_device_tag_type==1}


 <Toggle class="p-2.5 mt-2 mb-4" bind:checked={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].postprocessingEnable}></Toggle>

{#if changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].postprocessingEnable}

<input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].postprocessingScale} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">

<p class="mt-4">X + </p>
<input type="text"bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[target_device_index].tag[modify_tag_index].postprocessingOffset} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">


<p class="mt-4">(X: Raw Data)</p>

{/if}

{:else if target_device_tag_type==2}


 <Toggle class="p-2.5 mt-2 mb-4" bind:checked={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].postprocessingEnable}></Toggle>

{#if changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].postprocessingEnable}

<input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].postprocessingScale} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">

<p class="mt-4">X + </p>
<input type="text"bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[target_device_index].tag[modify_tag_index].postprocessingOffset} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 w-20 mt-2 dark:bg-gray-700 dark:border-green-500">


<p class="mt-4">(X: Raw Data)</p>

{/if}

{/if}

</div></td>
</tr>





      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={ModifyTag}>Modify</Button></td>


    </tr>
</table>


</form>
</Modal>

{/if}

</TabItem>


<TabItem title="Gateway">
<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From TCP To RTU
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>TCP Listen Port</TableHeadCell>
    <TableHeadCell>TCP Unit ID</TableHeadCell>    
    <TableHeadCell>Serial Profile</TableHeadCell>
    <TableHeadCell>Remote RTU Slave ID</TableHeadCell>    
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu as Tcp2RtuItem, index}
   
{#if Tcp2RtuItem.delete}
    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteGatewayT2R(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={Tcp2RtuItem.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-4 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Tcp2RtuItem.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Tcp2RtuItem.tcpSlavePort}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Tcp2RtuItem.tcpSlaveUnitID}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Tcp2RtuItem.serialProfile}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Tcp2RtuItem.rtuMasterSlaveID}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Tcp2RtuItem.responseTimeout} ms</td>


      </tr>

{:else}

   <TableBodyRow>
     <TableBodyCell class="!p-4 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyGateway_T2R(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteGatewayT2R(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
<TableBodyCell>
<input type="checkbox"  bind:checked={Tcp2RtuItem.enable}>
</TableBodyCell>


     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Tcp2RtuItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Tcp2RtuItem.tcpSlavePort}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Tcp2RtuItem.tcpSlaveUnitID}</TableBodyCell>

      <TableBodyCell class="!p-6 w-18">{Tcp2RtuItem.serialProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Tcp2RtuItem.rtuMasterSlaveID}</TableBodyCell>

      <TableBodyCell class="!p-6 w-18">{Tcp2RtuItem.responseTimeout} ms</TableBodyCell>

    </TableBodyRow>

{/if}

{/each}
{/if}


   <TableBodyRow>
{#if changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length < 10}   
     <TableBodyCell class="!p-4 w-10">

            <button on:click={() => new_gateway_t2r_trigger(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>

     </TableBodyCell>
{:else}
     <TableBodyCell class="!p-4 w-16">     </TableBodyCell>
{/if}     
     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
     <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-4"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
    </TableBodyRow>

  <tr>
    <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        <td></td>
        <td></td>
        <td></td>

    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveGatewayT2R}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>




  <Modal bind:open={new_gateway_t2r_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_gateway_t2r[new_gateway_t2r_index].enable}>
{/if}
  Enable
</label>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_t2r[new_gateway_t2r_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Listen Port</p></td>
      <td class="pl-5 pt-5"><input type="number" bind:value={new_gateway_t2r[new_gateway_t2r_index].tcpSlavePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Unit ID</p></td>
      <td class="pl-5 pt-5"><input type="number" bind:value={new_gateway_t2r[new_gateway_t2r_index].tcpSlaveUnitID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Serial Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_t2r[new_gateway_t2r_index].serialProfile}>
<option disabled="" value="">Choose Profile ...</option>

{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_com as Serial, index}
{#if Serial.usedby ==1 && Serial.role == 0}
<option value={Serial.serialProfile}>{Serial.serialProfile}</option>
{/if}
{/each}
{/if}

</select>

    

    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Remote RTU Slave ID</p></td>
      <td class="pl-5 pt-5"><input type="number" bind:value={new_gateway_t2r[new_gateway_t2r_index].rtuMasterSlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_t2r[new_gateway_t2r_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
<td></td>
<td></td>
<td></td>


  </tr>






      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={add_new_gateway_t2r(new_gateway_t2r_index)}>Add</Button></td>


    </tr>

</table>
</form>
</Modal>


<Modal bind:open={Modify_Gateway_T2R_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyGateway_T2R(Modify_Gateway_T2R_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Listen Port</p></td>
      <td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].tcpSlavePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Unit ID</p></td>
      <td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].tcpSlaveUnitID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


</tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Serial Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].serialProfile}>
<option disabled="" value="">Choose Profile ...</option>

{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_com as Serial, index}
{#if Serial.usedby ==1 && Serial.role == 0}
<option value={Serial.serialProfile}>{Serial.serialProfile}</option>
{/if}
{/each}
{/if}

</select>

    

    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Remote RTU Slave ID</p></td>
      <td class="pl-5 pt-5"><input type="number" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].rtuMasterSlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
<td></td>
<td></td>
<td></td>


  </tr>






      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={ModifyGateway_T2R}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>

  </Table>

    </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From RTU To TCP
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>Serial Profile</TableHeadCell> 
    <TableHeadCell>Local RTU Slave ID</TableHeadCell>
    <TableHeadCell>TCP Master Profile</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp as Rtu2TcpItem, index}
   
{#if Rtu2TcpItem.delete}
<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteGatewayR2T(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={Rtu2TcpItem.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-4 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-10 strikeout">{Rtu2TcpItem.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Rtu2TcpItem.serialProfile}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Rtu2TcpItem.rtuSlaveID}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-6 w-18 strikeout">{Rtu2TcpItem.tcpProfileMaster}</td>


      </tr>

{:else}

   <TableBodyRow>
     <TableBodyCell class="!p-4 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyGateway_R2T(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
 <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteGatewayR2T(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell>
<input type="checkbox"  bind:checked={Rtu2TcpItem.enable}>
</TableBodyCell>


     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2TcpItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Rtu2TcpItem.serialProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Rtu2TcpItem.rtuSlaveID}</TableBodyCell>      
      <TableBodyCell class="!p-6 w-18">{Rtu2TcpItem.tcpProfileMaster}</TableBodyCell>



    </TableBodyRow>

{/if}

{/each}
{/if}

   <TableBodyRow>

{#if changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length < 10}   
     <TableBodyCell class="!p-4 w-10">

            <button on:click={()=>new_gateway_r2t_trigger(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
{:else}     

     <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}

     <TableBodyCell class="!p-0"></TableBodyCell>
     <TableBodyCell class="!p-0"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"></TableBodyCell>


    </TableBodyRow>

  <tr>
    <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveGatewayR2T}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>

  <Modal bind:open={new_gateway_r2t_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_gateway_r2t[new_gateway_r2t_index].enable}>
{/if}
  Enable
</label>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_r2t[new_gateway_r2t_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Serial Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_r2t[new_gateway_r2t_index].serialProfile}>
<option disabled="" value="">Choose Profile ...</option>

{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_com as Serial, index}
{#if Serial.usedby ==1 && Serial.role == 1}
<option value={Serial.serialProfile}>{Serial.serialProfile}</option>
{/if}
{/each}
{/if}

</select>
    

    </td>

</tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Local RTU Slave ID</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_r2t[new_gateway_r2t_index].rtuSlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Master Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_r2t[new_gateway_r2t_index].tcpProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TMaster, index}
<option value={TMaster.aliasName}>{TMaster.aliasName}</option>
{/each}

</select>


    </td>

</tr>








      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={add_new_gateway_r2t(new_gateway_r2t_index)}>Add</Button></td>


    </tr>

</table>
</form>
</Modal>


<Modal bind:open={Modify_Gateway_R2T_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyGateway_R2T(Modify_Gateway_R2T_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Serial Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].serialProfile}>
<option disabled="" value="">Choose Profile ...</option>

{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_com as Serial, index}
{#if Serial.usedby ==1 && Serial.role == 1}
<option value={Serial.serialProfile}>{Serial.serialProfile}</option>
{/if}
{/each}
{/if}

</select>
    

    </td>

</tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Local RTU Slave ID</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].rtuSlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Master Profile</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].tcpProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TMaster, index}
<option value={TMaster.aliasName}>{TMaster.aliasName}</option>
{/each}

</select>


    </td>

</tr>



      <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={ModifyGateway_R2T}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>
  </Table>
      </AccordionItem>



</Accordion>
</TabItem>

<TabItem title="Viewer" on:click={RefreshViewer}>


<Table shadow striped={true} tableNoWFull={true}>

  <TableHead>
    <TableHeadCell>TimeStamp</TableHeadCell>  
    <TableHeadCell>Status</TableHeadCell>


  </TableHead>

   <TableBody>

{#if ViewerResultReady}

{#each ViewerResultTimeStamp as TimeStamp, index}


      <TableBodyRow>
        <TableBodyCell class="w-18">{TimeStamp}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultStatus[index]}</TableBodyCell>


      </TableBodyRow>
  

{/each}

{/if}

     </TableBody>
  </Table>

</TabItem>



</Tabs>