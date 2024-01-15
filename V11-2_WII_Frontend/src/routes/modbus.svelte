<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import { 
    modbusConfig,
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
    ChangedPortConnectionConfig,
    portConnectionConfig,
    ChangedSDataLoggerConfig,
    sdataLoggerConfig,
    SDatalogger_MonitorMode_Edge_ConfigChangedLog,
    SDatalogger_ProxyMode_Edge_ConfigChangedLog,   
  } from "./configG.js"

    let modbus_data="";
    let changed_modbus_data = {};
    let saved_changed_modbus_data = {};
    let getDataReady=0;
    let port_connection_data="";
    let saved_changed_port_connection_data="";

    let sdata_logger_data="";
    let saved_changed_sdata_logger_data="";


    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

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


    let sdata_logger_proxy_edge_changedValues = [];
    let sdata_logger_monitor_edge_changedValues = [];


    sdataLoggerConfig.subscribe(val => {
      sdata_logger_data = val;
    });

    ChangedSDataLoggerConfig.subscribe(val => {
      saved_changed_sdata_logger_data = val;
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

    SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_edge_changedValues = val;
    });

    SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_edge_changedValues = val;
    });


    let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

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


  let new_tcp_slave=[
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    }

  ];

    let new_tcp_slave_modal=false;
    let new_tcp_slave_index;

    function new_tcp_slave_trigger(index)
    {
        new_tcp_slave[index].enable=false;
        new_tcp_slave[index].lanProfile="";
        new_tcp_slave[index].aliasName="";
        new_tcp_slave[index].listenPort=502;
        new_tcp_slave[index].maxConnectionCount=10;

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
        lanProfile: "",
        aliasName: "",
        listenPort: 12345,
        maxConnectionCount: 3000

    };

    let Modify_TCP_Slave_Modal=false;
    let Modify_TCP_Slave_index;

    function TriggerModifyTCPSlave(index)
    {
        Modify_TCP_Slave_Modal=true;
        Modify_TCP_Slave_index=index;
        backup_tcp_slave.enable=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].enable;
        backup_tcp_slave.aliasName=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].aliasName;
        backup_tcp_slave.lanProfile=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].lanProfile;
        backup_tcp_slave.listenPort=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].listenPort;
        backup_tcp_slave.maxConnectionCount=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].maxConnectionCount;

    }

    function NoModifyTCPSlave(index)
    {
        Modify_TCP_Slave_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].enable=backup_tcp_slave.enable;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].aliasName=backup_tcp_slave.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].lanProfile=backup_tcp_slave.lanProfile;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].listenPort=backup_tcp_slave.listenPort;
        changed_modbus_data.config.fieldManagement_modbus_tcp.slave[index].maxConnectionCount=backup_tcp_slave.maxConnectionCount;
    }

    function ModifyTCPSlave()
    {
        Modify_TCP_Slave_Modal=false;  
    }


    let new_tcp_master=[
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    },
    {
        enable: false,
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    }
    ];

    let new_tcp_master_modal=false;
    let new_tcp_master_index;

    function new_tcp_master_trigger(index)
    {
        new_tcp_master[index].enable=false;
        new_tcp_master[index].lanProfile="";
        new_tcp_master[index].aliasName="";
        new_tcp_master[index].remoteServerIP="";
        new_tcp_master[index].remotePort=0;
        new_tcp_master[index].connectionTimeout=3000;

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
        lanProfile: "",
        aliasName: "",
        remoteServerIp: "",
        remotePort: 12345,
        connectionTimeout: 3000

    };

    let Modify_TCP_Master_Modal=false;
    let Modify_TCP_Master_index;


    function TriggerModifyTCPMaster(index)
    {
        Modify_TCP_Master_Modal=true;
        Modify_TCP_Master_index=index;
        backup_tcp_master.enable=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].enable;
        backup_tcp_master.aliasName=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].aliasName;
        backup_tcp_master.lanProfile=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].lanProfile;
        backup_tcp_master.remoteServerIp=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remoteServerIp;
        backup_tcp_master.remotePort=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remotePort;
        backup_tcp_master.connectionTimeout=changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].connectionTimeout;
    }

    function NoModifyTCPMaster(index)
    {
        Modify_TCP_Master_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].enable=backup_tcp_master.enable;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].aliasName=backup_tcp_master.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].lanProfile=backup_tcp_master.lanProfile;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remoteServerIp=backup_tcp_master.remoteServerIp;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].remotePort=backup_tcp_master.remotePort;
        changed_modbus_data.config.fieldManagement_modbus_tcp.master[index].connectionTimeout=backup_tcp_master.connectionTimeout;
    }

    function ModifyTCPMaster()
    {
        Modify_TCP_Master_Modal=false;  
    }


    let backup_rtu_master={
        enable:false,
        aliasName:"",
        serialProfile:""
    };


    let Modify_RTU_Master_Modal=false;
    let Modify_RTU_Master_index;


    function TriggerModifyRtuMaster(index)
    {
        Modify_RTU_Master_Modal=true;
        Modify_RTU_Master_index=index;
        backup_rtu_master.enable=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].enable;
        backup_rtu_master.aliasName=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].aliasName;
        backup_rtu_master.serialProfile=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].serialProfile;
    }

    function NoModifyRTUMaster(index)
    {
        Modify_RTU_Master_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].enable=backup_rtu_master.enable;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].aliasName=backup_rtu_master.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].serialProfile= backup_rtu_master.serialProfile;
    }

    function ModifyRTUMaster()
    {
        Modify_RTU_Master_Modal=false;  
    }


    let Modify_RTU_Slave_Modal=false;
    let Modify_RTU_Slave_index;

    let backup_rtu_slave={
        enable:false,
        aliasName:"",
        serialProfile:""
    };

    function TriggerModifyRtuSlave(index)
    {
        Modify_RTU_Slave_Modal=true;
        Modify_RTU_Slave_index=index;
        backup_rtu_slave.enable=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].enable;
        backup_rtu_slave.aliasName=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].aliasName;
        backup_rtu_slave.serialProfile=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].serialProfile;
    }

    function NoModifyRTUSlave(index)
    {
        Modify_RTU_Slave_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].enable=backup_rtu_slave.enable;
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].aliasName=backup_rtu_slave.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_rtu.slave[index].serialProfile= backup_rtu_slave.serialProfile;
    }

    function ModifyRTUSlave()
    {
        Modify_RTU_Slave_Modal=false;  
    }


    let backup_variable_master={
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 0,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    };

    let new_variable_master=[
    {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000,
        pollingRate: 1000,
        delayBetweenPolls: 20

    }

    ];


    let new_variable_master_modal=false;
    let new_variable_master_index;

    function new_variable_master_trigger(index)
    {
        new_variable_master[index].enable=false;
        new_variable_master[index].variableName="";
        new_variable_master[index].profile="";
        new_variable_master[index].slaveId=0;
        new_variable_master[index].pointType=3;
        new_variable_master[index].address=0;
        new_variable_master[index].quantity=1;
        new_variable_master[index].byteOrder= 0;
        new_variable_master[index].responseTimeout=1000;
        new_variable_master[index].pollingRate=1000;
        new_variable_master[index].delayBetweenPolls=20;

        new_variable_master_index=index;
        new_variable_master_modal=true;

    }

    function add_new_variable_master(index)
    {
        new_variable_master_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_variable.master=[...changed_modbus_data.config.fieldManagement_modbus_variable.master,new_variable_master[index]];
    }


    let Modify_Variable_Master_Modal=false;
    let Modify_Variable_Master_index;


    function TriggerModifyVariableMaster(index)
    {
        Modify_Variable_Master_Modal=true;
        Modify_Variable_Master_index=index;
        backup_variable_master.enable=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].enable;
        backup_variable_master.variableName=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].variableName;
        backup_variable_master.profile=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].profile;
        backup_variable_master.slaveId=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].slaveId;        
        backup_variable_master.pointType=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].pointType;      
        backup_variable_master.address=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].address; 
        backup_variable_master.quantity=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].quantity;
        backup_variable_master.byteOrder=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].byteOrder;
        backup_variable_master.responseTimeout=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].responseTimeout;
        backup_variable_master.pollingRate=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].pollingRate;
        backup_variable_master.delayBetweenPolls=changed_modbus_data.config.fieldManagement_modbus_variable.master[index].delayBetweenPolls;

    }

    function NoModifyVariableMaster(index)
    {
        Modify_Variable_Master_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].enable=backup_variable_master.enable;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].variableName=backup_variable_master.variableName;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].profile=backup_variable_master.profile;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].slaveId=backup_variable_master.slaveId;        
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].pointType=backup_variable_master.pointType;      
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].address=backup_variable_master.address; 
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].quantity=backup_variable_master.quantity;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].byteOrder=backup_variable_master.byteOrder;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].responseTimeout=backup_variable_master.responseTimeout;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].pollingRate=backup_variable_master.pollingRate;
        changed_modbus_data.config.fieldManagement_modbus_variable.master[index].delayBetweenPolls=backup_variable_master.delayBetweenPolls;

    }

    function ModifyVariableMaster()
    {
        Modify_Variable_Master_Modal=false;  
    }


    let new_variable_slave=[
    {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    },
        {
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0
    }

    ];


    let new_variable_slave_modal=false;
    let new_variable_slave_index;

    function new_variable_slave_trigger(index)
    {
        new_variable_slave[index].enable=false;
        new_variable_slave[index].variableName="";
        new_variable_slave[index].profile="";
        new_variable_slave[index].slaveId=0;
        new_variable_slave[index].pointType=3;
        new_variable_slave[index].address=0;
        new_variable_slave[index].quantity=1;
        new_variable_slave[index].byteOrder= 0;


        new_variable_slave_index=index;
        new_variable_slave_modal=true;

    }

    function add_new_variable_slave(index)
    {
        new_variable_slave_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_variable.slave=[...changed_modbus_data.config.fieldManagement_modbus_variable.slave,new_variable_slave[index]];
    }




   let backup_variable_slave={
        enable: false,
        variableName: "",
        profile: "",
        slaveId: 2,
        pointType: 0,
        address: 0,
        quantity: 1,
        byteOrder: 0

    };

    let Modify_Variable_Slave_Modal=false;
    let Modify_Variable_Slave_index;


    function TriggerModifyVariableSlave(index)
    {
        Modify_Variable_Slave_Modal=true;
        Modify_Variable_Slave_index=index;
        backup_variable_slave.enable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].enable;
        backup_variable_slave.variableName=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].variableName;
        backup_variable_slave.profile=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].profile;
        backup_variable_slave.slaveId=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].slaveId;        
        backup_variable_slave.pointType=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].pointType;      
        backup_variable_slave.address=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].address; 
        backup_variable_slave.quantity=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].quantity;
        backup_variable_slave.byteOrder=changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].byteOrder;


    }

    function NoModifyVariableSlave(index)
    {
        Modify_Variable_Slave_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].enable=backup_variable_slave.enable;
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].variableName=backup_variable_slave.variableName;
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].profile=backup_variable_slave.profile;
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].slaveId=backup_variable_slave.slaveId;        
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].pointType=backup_variable_slave.pointType;      
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].address=backup_variable_slave.address; 
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].quantity=backup_variable_slave.quantity;
        changed_modbus_data.config.fieldManagement_modbus_variable.slave[index].byteOrder=backup_variable_slave.byteOrder;

    }

    function ModifyVariableSlave()
    {
        Modify_Variable_Slave_Modal=false;  
    }



    let new_gateway_t2r=[
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    }
    ];

    let new_gateway_t2r_modal=false;
    let new_gateway_t2r_index;

    function new_gateway_t2r_trigger(index)
    {
        new_gateway_t2r[index].enable=false;
        new_gateway_t2r[index].aliasName="";
        new_gateway_t2r[index].tcpProfileSlave="";
        new_gateway_t2r[index].rtuProfileMaster="";
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
        aliasName: "",
        tcpProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    };


    let Modify_Gateway_T2R_Modal=false;
    let Modify_Gateway_T2R_index;


    function TriggerModifyGateway_T2R(index)
    {
        Modify_Gateway_T2R_Modal=true;
        Modify_Gateway_T2R_index=index;
        backup_gateway_t2r.enable=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].enable;
        backup_gateway_t2r.aliasName=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].aliasName;
        backup_gateway_t2r.tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].tcpProfileSlave;
        backup_gateway_t2r.rtuProfileMaster=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].rtuProfileMaster;
        backup_gateway_t2r.responseTimeout=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].responseTimeout;
    }

    function NoModifyGateway_T2R(index)
    {
        Modify_Gateway_T2R_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].enable=backup_gateway_t2r.enable;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].aliasName=backup_gateway_t2r.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].tcpProfileSlave=backup_gateway_t2r.tcpProfileSlave;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].rtuProfileMaster=backup_gateway_t2r.rtuProfileMaster;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[index].responseTimeout=backup_gateway_t2r.responseTimeout;

    }

    function ModifyGateway_T2R()
    {
        Modify_Gateway_T2R_Modal=false;  
    }

    let new_gateway_r2t=[
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    }

    ];

    let new_gateway_r2t_modal=false;
    let new_gateway_r2t_index;

    function new_gateway_r2t_trigger(index)
    {
        new_gateway_r2t[index].enable=false;
        new_gateway_r2t[index].aliasName="";
        new_gateway_r2t[index].rtuProfileSlave="";
        new_gateway_r2t[index].tcpProfileMaster="";
        new_gateway_r2t[index].responseTimeout=1000;
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
        aliasName: "",
        rtuProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    };


    let Modify_Gateway_R2T_Modal=false;
    let Modify_Gateway_R2T_index;


    function TriggerModifyGateway_R2T(index)
    {
        Modify_Gateway_R2T_Modal=true;
        Modify_Gateway_R2T_index=index;
        backup_gateway_r2t.enable=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].enable;
        backup_gateway_r2t.aliasName=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].aliasName;
        backup_gateway_r2t.rtuProfileSlave=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].rtuProfileSlave;
        backup_gateway_r2t.tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].tcpProfileMaster;
        backup_gateway_r2t.responseTimeout=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].responseTimeout;
    }

    function NoModifyGateway_R2T(index)
    {
        Modify_Gateway_R2T_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].enable=backup_gateway_r2t.enable;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].aliasName=backup_gateway_r2t.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].rtuProfileSlave=backup_gateway_r2t.rtuProfileSlave;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].tcpProfileMaster=backup_gateway_r2t.tcpProfileMaster;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[index].responseTimeout=backup_gateway_r2t.responseTimeout;

    }

    function ModifyGateway_R2T()
    {
        Modify_Gateway_R2T_Modal=false;  
    }



    let new_gateway_r2r=[
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    }

    ];



    let new_gateway_r2r_modal=false;
    let new_gateway_r2r_index;

    function new_gateway_r2r_trigger(index)
    {
        new_gateway_r2r[index].enable=false;
        new_gateway_r2r[index].aliasName="";
        new_gateway_r2r[index].rtuProfileSlave="";
        new_gateway_r2r[index].rtuProfileMaster="";
        new_gateway_r2r[index].responseTimeout=1000;
        new_gateway_r2r_index=index;
        new_gateway_r2r_modal=true;

    }

    function add_new_gateway_r2r(index)
    {
        new_gateway_r2r_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu=[...changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu,new_gateway_r2r[index]];
    }


    let backup_gateway_r2r={
        enable: false,
        aliasName: "",
        rtuProfileSlave: "",
        rtuProfileMaster: "",
        responseTimeout: 1000
    };


    let Modify_Gateway_R2R_Modal=false;
    let Modify_Gateway_R2R_index;


    function TriggerModifyGateway_R2R(index)
    {
        Modify_Gateway_R2R_Modal=true;
        Modify_Gateway_R2R_index=index;
        backup_gateway_r2r.enable=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].enable;
        backup_gateway_r2r.aliasName=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].aliasName;
        backup_gateway_r2r.rtuProfileSlave=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].rtuProfileSlave;
        backup_gateway_r2r.rtuProfileMaster=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].rtuProfileMaster;
        backup_gateway_r2r.responseTimeout=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].responseTimeout;
    }

    function NoModifyGateway_R2R(index)
    {
        Modify_Gateway_R2R_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].enable=backup_gateway_r2r.enable;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].aliasName=backup_gateway_r2r.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].rtuProfileSlave=backup_gateway_r2r.rtuProfileSlave;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].rtuProfileMaster=backup_gateway_r2r.rtuProfileMaster;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[index].responseTimeout=backup_gateway_r2r.responseTimeout;

    }

    function ModifyGateway_R2R()
    {
        Modify_Gateway_R2R_Modal=false;  
    }


   let new_gateway_t2t=[
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    },
    {
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    }

    ];

    let new_gateway_t2t_modal=false;
    let new_gateway_t2t_index;

    function new_gateway_t2t_trigger(index)
    {
        new_gateway_t2t[index].enable=false;
        new_gateway_t2t[index].aliasName="";
        new_gateway_t2t[index].tcpProfileSlave="";
        new_gateway_t2t[index].tcpProfileMaster="";
        new_gateway_t2t[index].responseTimeout=1000;
        new_gateway_t2t_index=index;
        new_gateway_t2t_modal=true;

    }

    function add_new_gateway_t2t(index)
    {
        new_gateway_t2t_modal=false;

        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp=[...changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp,new_gateway_t2t[index]];
    }


    let backup_gateway_t2t={
        enable: false,
        aliasName: "",
        tcpProfileSlave: "",
        tcpProfileMaster: "",
        responseTimeout: 1000
    };


    let Modify_Gateway_T2T_Modal=false;
    let Modify_Gateway_T2T_index;


    function TriggerModifyGateway_T2T(index)
    {
        Modify_Gateway_T2T_Modal=true;
        Modify_Gateway_T2T_index=index;
        backup_gateway_t2t.enable=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].enable;
        backup_gateway_t2t.aliasName=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].aliasName;
        backup_gateway_t2t.tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].tcpProfileSlave;
        backup_gateway_t2t.tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].tcpProfileMaster;
        backup_gateway_t2t.responseTimeout=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].responseTimeout;
    }

    function NoModifyGateway_T2T(index)
    {
        Modify_Gateway_T2T_Modal=false;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].enable=backup_gateway_t2t.enable;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].aliasName=backup_gateway_t2t.aliasName;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].tcpProfileSlave=backup_gateway_t2t.tcpProfileSlave;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].tcpProfileMaster=backup_gateway_t2t.tcpProfileMaster;
        changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[index].responseTimeout=backup_gateway_t2t.responseTimeout;

    }

    function ModifyGateway_T2T()
    {
        Modify_Gateway_T2T_Modal=false;  
    }


    function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
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
               modbus_variable_master_changedValues=[...modbus_variable_master_changedValues, changedstr];          
              }
              else if (type == 5)
              {
                modbus_variable_slave_changedValues=[...modbus_variable_slave_changedValues, changedstr];
              }
              else if (type == 6)
              {
                modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
              }  
              else if (type == 7)
              {
                modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
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
               modbus_variable_master_changedValues=[...modbus_variable_master_changedValues, changedstr];          
              }
              else if (type == 5)
              {
                modbus_variable_slave_changedValues=[...modbus_variable_slave_changedValues, changedstr];
              }
              else if (type == 6)
              {
                modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
              }  
              else if (type == 7)
              {
                modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
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
            modbus_variable_master_changedValues=[...modbus_variable_master_changedValues, changedstr];          
          }
          else if (type == 5)
          {
            modbus_variable_slave_changedValues=[...modbus_variable_slave_changedValues, changedstr];
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
        }
      }
    }

    function saveRTUSlave()
    {
        console.log("save rtu Slave");
        if (modbus_rtu_slave_changedValues.length !=0)
        {
            modbus_rtu_slave_changedValues=[];
        }
        let needSaveVariableSlave=0;
        let needSaveGatewayR2T=0;
        let needSaveGatewayR2R=0;
        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length, modbus_data.config.fieldManagement_modbus_rtu.slave.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i], modbus_data.config.fieldManagement_modbus_rtu.slave[i], 8, 1,i+1);

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[j].profile == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName != "")
                {
                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[j].profile= changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName;
                    needSaveVariableSlave=1;
                }

            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].rtuProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].rtuProfileSlave=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName;
                    needSaveGatewayR2T=1;
                }
            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[j].rtuProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[j].rtuProfileSlave=changed_modbus_data.config.fieldManagement_modbus_rtu.slave[i].aliasName;
                    needSaveGatewayR2R=1;
                }
            }

        }

        if (changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length > modbus_data.config.fieldManagement_modbus_rtu.slave.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length-modbus_data.config.fieldManagement_modbus_rtu.slave.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus RTU Slave List";
          modbus_rtu_slave_changedValues=[...modbus_rtu_slave_changedValues, changedstr];
        }


        ModbusRTU_Slave_ConfigChangedLog.set(modbus_rtu_slave_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_rtu.slave));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_rtu_slave_changedValues);   

        if (needSaveVariableSlave != 0)
        {
            saveVariableSlave();
        } 

        if (needSaveGatewayR2T != 0)
        {
            saveGatewayR2T();
        }

        if (needSaveGatewayR2R != 0)
        {
            saveGatewayR2R();
        }

    }

    function saveRTUMaster()
    {
        console.log("save rtu Master");
        if (modbus_rtu_master_changedValues.length !=0)
        {
            modbus_rtu_master_changedValues=[];
        }
        let needSaveVariableMaster=0;
        let needSaveGatewayR2R=0;
        let needSaveGatewayT2R=0;

        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_rtu.master.length, modbus_data.config.fieldManagement_modbus_rtu.master.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_rtu.master[i], modbus_data.config.fieldManagement_modbus_rtu.master[i], 9, 1,i+1);


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_variable.master.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[j].profile == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName != "")
                {
                    changed_modbus_data.config.fieldManagement_modbus_variable.master[j].profile= changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName;
                    needSaveVariableMaster=1;
                }

            }



            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[j].rtuProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[j].rtuProfileMaster=changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName;
                    needSaveGatewayR2R=1;
                }
            }



            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].rtuProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].rtuProfileMaster=changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName;
                    needSaveGatewayT2R=1;
                }
            }
            

        }

        if (changed_modbus_data.config.fieldManagement_modbus_rtu.master.length > modbus_data.config.fieldManagement_modbus_rtu.master.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_rtu.master.length-modbus_data.config.fieldManagement_modbus_rtu.master.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus RTU Master List";
          modbus_rtu_master_changedValues=[...modbus_rtu_master_changedValues, changedstr];
        }


        ModbusRTU_Master_ConfigChangedLog.set(modbus_rtu_master_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_rtu.master));




        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_rtu_master_changedValues);  

        if (needSaveVariableMaster!=0)
        {
            saveVariableMaster();
        }

        if (needSaveGatewayR2R != 0)
        {
            saveGatewayR2R();
        }


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

        let needSaveVariableSlave=0;
        let needSaveGatewayT2R=0;
        let needSaveGatewayT2T=0;
        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length, modbus_data.config.fieldManagement_modbus_tcp.slave.length); i++) 
        {
            compareObjects(changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i], modbus_data.config.fieldManagement_modbus_tcp.slave[i], 6, 1,i+1);

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[j].profile == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != "")
                {
                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[j].profile= changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    needSaveVariableSlave=1;
                }

            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    needSaveGatewayT2R=1;
                }
            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    needSaveGatewayT2T=1;
                }
            }
        }


        for (let i=modbus_data.config.fieldManagement_modbus_tcp.slave.length; i< saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length; i++ )
        {
            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[j].profile == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != "")
                {
                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[j].profile= changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    needSaveVariableSlave=1;
                }

            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[j].tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    needSaveGatewayT2R=1;
                }
            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileSlave == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileSlave=changed_modbus_data.config.fieldManagement_modbus_tcp.slave[i].aliasName;
                    needSaveGatewayT2T=1;
                }
            }
        }

        if (changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length > modbus_data.config.fieldManagement_modbus_tcp.slave.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length-modbus_data.config.fieldManagement_modbus_tcp.slave.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus TCP Slave List";
          modbus_tcp_slave_changedValues=[...modbus_tcp_slave_changedValues, changedstr];
        }


        ModbusTCP_Slave_ConfigChangedLog.set(modbus_tcp_slave_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_tcp.slave));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_tcp_slave_changedValues);  


        if (needSaveVariableSlave != 0)
        {
            saveVariableSlave();
        } 

        if (needSaveGatewayT2R != 0)
        {
            saveGatewayT2R();
        } 

        if (needSaveGatewayT2T != 0)
        {
            saveGatewayT2T();
        } 

    }

    function saveTCPMaster()
    {
        console.log("save tcp Master");
        if (modbus_tcp_master_changedValues.length !=0)
        {
            modbus_tcp_master_changedValues=[];
        }

        let needSaveVariableMaster=0;
        let needSaveGatewayT2T=0;
        let needSaveGatewayR2T=0;

        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_tcp.master.length, modbus_data.config.fieldManagement_modbus_tcp.master.length); i++) 
        {
            compareObjects(changed_modbus_data.config.fieldManagement_modbus_tcp.master[i], modbus_data.config.fieldManagement_modbus_tcp.master[i], 7, 1,i+1);


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_variable.master.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[j].profile == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != "")
                {
                    changed_modbus_data.config.fieldManagement_modbus_variable.master[j].profile= changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    needSaveVariableMaster=1;
                }

            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    needSaveGatewayR2T=1;
                }
            }


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    needSaveGatewayT2T=1;
                }
            }

        }


        for (let i=modbus_data.config.fieldManagement_modbus_tcp.master.length; i < saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length; i++)
        {

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_variable.master.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[j].profile == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != "")
                {
                    changed_modbus_data.config.fieldManagement_modbus_variable.master[j].profile= changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    needSaveVariableMaster=1;
                }

            }

            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[j].tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    needSaveGatewayR2T=1;
                }
            }


            for (let j=0;j < saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length; j++)
            {
                if (saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileMaster == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName 
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName != ""
                )
                {
                    changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[j].tcpProfileMaster=changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName;
                    needSaveGatewayT2T=1;
                }
            }

        }


        if (changed_modbus_data.config.fieldManagement_modbus_tcp.master.length > modbus_data.config.fieldManagement_modbus_tcp.master.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_tcp.master.length-modbus_data.config.fieldManagement_modbus_tcp.master.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus TCP Master List";
          modbus_tcp_master_changedValues=[...modbus_tcp_master_changedValues, changedstr];
        }


        ModbusTCP_Master_ConfigChangedLog.set(modbus_tcp_master_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_tcp.master));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_tcp_master_changedValues);  



        if (needSaveVariableMaster!=0)
        {
            saveVariableMaster();
        }

        if (needSaveGatewayR2T != 0)
        {
            saveGatewayR2T();
        } 


        if (needSaveGatewayT2T != 0)
        {
            saveGatewayT2T();
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


    function saveVariableSlave()
    {
        console.log("save v Slave");
        if (modbus_variable_slave_changedValues.length !=0)
        {
            modbus_variable_slave_changedValues=[];
        }
        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_variable.slave.length, modbus_data.config.fieldManagement_modbus_variable.slave.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_variable.slave[i], modbus_data.config.fieldManagement_modbus_variable.slave[i], 5, 1,i+1);
          if (changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName != saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName)
          {
  
            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;

                    if (sdata_logger_proxy_edge_changedValues.length !=0)
                    {
                        sdata_logger_proxy_edge_changedValues=[];
                    }


                    compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                    SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                    ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                }

            }

            for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;
                }
            }


            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;

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
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;
                }
            }
          }
        }


        for (let i=modbus_data.config.fieldManagement_modbus_variable.slave.length; i < saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave.length; i++)
        {

          if (saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName != changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName)
          {
  
            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;

                    if (sdata_logger_proxy_edge_changedValues.length !=0)
                    {
                        sdata_logger_proxy_edge_changedValues=[];
                    }


                    compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                    SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                    ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                }

            }

            for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;
                }
            }


            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;

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
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.slave[i].variableName;
                }
            }
          }
        }


        if (changed_modbus_data.config.fieldManagement_modbus_variable.slave.length > modbus_data.config.fieldManagement_modbus_variable.slave.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_variable.slave.length-modbus_data.config.fieldManagement_modbus_variable.slave.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus Variable Slave List";
          modbus_variable_slave_changedValues=[...modbus_variable_slave_changedValues, changedstr];
        }


        ModbusVariable_Slave_ConfigChangedLog.set(modbus_variable_slave_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_variable.slave));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_variable_slave_changedValues);    
    }

    function saveVariableMaster()
    {
        console.log("save v Master");
        if (modbus_variable_master_changedValues.length !=0)
        {
            modbus_variable_master_changedValues=[];
        }
        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_variable.master.length, modbus_data.config.fieldManagement_modbus_variable.master.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_variable.master[i], modbus_data.config.fieldManagement_modbus_variable.master[i], 4, 1,i+1);

          if (changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName != saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName)
          {
  
            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;

                    if (sdata_logger_proxy_edge_changedValues.length !=0)
                    {
                        sdata_logger_proxy_edge_changedValues=[];
                    }


                    compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                    SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                    ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                }
            }

            for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;
                }
            }


            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;

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
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;
                }
            }
          }
        }

        for (let i=modbus_data.config.fieldManagement_modbus_variable.master.length; i< saved_changed_modbus_data.config.fieldManagement_modbus_variable.master.length;i++)
        {

          if (changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName != saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName)
          {
  
            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;

                    if (sdata_logger_proxy_edge_changedValues.length !=0)
                    {
                        sdata_logger_proxy_edge_changedValues=[];
                    }


                    compareSDLObjects(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j], 0, 1,j+1);

                    SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);

                    ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

                }
            }

            for (let j=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j< saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;
                }
            }


            for (let j=0; j <sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;j++)
            {
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;

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
                if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable ==saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName
                &&
                saved_changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName!="")
                {
                    saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[j].modbusVariable=changed_modbus_data.config.fieldManagement_modbus_variable.master[i].variableName;
                }
            }
          }

        }

        if (changed_modbus_data.config.fieldManagement_modbus_variable.master.length > modbus_data.config.fieldManagement_modbus_variable.master.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_variable.master.length-modbus_data.config.fieldManagement_modbus_variable.master.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus Variable Master List";
          modbus_variable_master_changedValues=[...modbus_variable_master_changedValues, changedstr];
        }


        ModbusVariable_Master_ConfigChangedLog.set(modbus_variable_master_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_variable.master=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_variable.master));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_variable_master_changedValues);    
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
          let changedstr="Add "+addedCount+" item(s) to Modbus Gateway From TCP to RTU List";
          modbus_gateway_TtR_changedValues=[...modbus_gateway_TtR_changedValues, changedstr];
        }


        ModbusGateway_TtR_ConfigChangedLog.set(modbus_gateway_TtR_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu));

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
          let changedstr="Add "+addedCount+" item(s) to Modbus Gateway From RTU to Tcp List";
          modbus_gateway_RtT_changedValues=[...modbus_gateway_RtT_changedValues, changedstr];
        }


        ModbusGateway_RtT_ConfigChangedLog.set(modbus_gateway_RtT_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_gateway_RtT_changedValues);

    }    


    function saveGatewayR2R()
    {
        console.log("save G R2R");
        if (modbus_gateway_RtR_changedValues.length != 0)
        {
          modbus_gateway_RtR_changedValues=[];
        }


        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length, modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[i], modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[i], 1, 1,i+1);
        }

        if (changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length > modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length-modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus Gateway From RTU to RTU List";
          modbus_gateway_RtR_changedValues=[...modbus_gateway_RtR_changedValues, changedstr];
        }


        ModbusGateway_RtR_ConfigChangedLog.set(modbus_gateway_RtR_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_gateway_RtR_changedValues);

    }


    function saveGatewayT2T()
    {
        console.log("save G T2T");
        if (modbus_gateway_TtT_changedValues.length != 0)
        {
          modbus_gateway_TtT_changedValues=[];
        }


        for (let i = 0; i < Math.min(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length, modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length); i++) 
        {
          compareObjects(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[i], modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[i], 0, 1,i+1);
        }

        if (changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length > modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length)
        {
          let addedCount=changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length-modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length;
          let changedstr="Add "+addedCount+" item(s) to Modbus Gateway From TCP to TCP List";
          modbus_gateway_TtT_changedValues=[...modbus_gateway_TtT_changedValues, changedstr];
        }


        ModbusGateway_TtT_ConfigChangedLog.set(modbus_gateway_TtT_changedValues);
        saved_changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp=JSON.parse(JSON.stringify(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp));

        ChangedModbusConfig.set(saved_changed_modbus_data);
        console.log(modbus_gateway_TtT_changedValues);

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
        getDataReady=1;
        console.log("modbus data exist");
        changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));

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

        if(modbus_variable_master_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_variable.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_variable.master)); 
        }

        if(modbus_variable_slave_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_variable.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_variable.slave)); 
        }

        if(modbus_tcp_master_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_tcp.master)); 
        }

        if(modbus_tcp_slave_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_tcp.slave)); 
        }

        if(modbus_rtu_master_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_rtu.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_rtu.master)); 
        }

        if(modbus_rtu_slave_changedValues.length ==0)
        {
            changed_modbus_data.config.fieldManagement_modbus_rtu.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_rtu.slave)); 
        }

        if (saved_changed_port_connection_data == "")
        {
            getPortConnectionData();
        }

        if (saved_changed_sdata_logger_data == "")
        {
            getSmartDataLoggerData();
        }


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
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_rtu.master as RTUMasterItem, index}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyRtuMaster(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
{#if RTUMasterItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUMasterItem.serialProfile}</TableBodyCell>
    </TableBodyRow>

{/each}
{/if}
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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveRTUMaster}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>


   
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

  <AccordionItem {defaultClass}>

    <span slot="header" class="pl-4">
    Slave
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
  </TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RTUSlaveItem, index}
   
 <TableBodyRow>
   <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyRtuSlave(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
{#if RTUSlaveItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}

      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUSlaveItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUSlaveItem.serialProfile}</TableBodyCell>

    </TableBodyRow>
{/each}
{/if}

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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveRTUSlave}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>


   <Modal bind:open={Modify_RTU_Slave_Modal} permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_rtu.slave[Modify_RTU_Slave_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyRTUSlave(Modify_RTU_Slave_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.slave[Modify_RTU_Slave_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.slave[Modify_RTU_Slave_index].serialProfile}>
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
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyRTUSlave}>Modify</Button></td>


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
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">LAN Profile</TableHeadCell>   
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>

  </TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_tcp.master as TCPMasterItem, index}
   

    <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
       <TableBodyCell class="!p-1">
<button on:click={() => TriggerModifyTCPMaster(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
       <TableBodyCell class="!p-1"></TableBodyCell>
{#if TCPMasterItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPMasterItem.lanProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.remoteServerIp}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.remotePort}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.connectionTimeout} ms</TableBodyCell>
    </TableBodyRow>
{/each}
{/if}


 <TableBodyRow>
     <TableBodyCell class="!p-1">

{#if changed_modbus_data.config.fieldManagement_modbus_tcp.master.length < 10}
            <button on:click={()=>new_tcp_master_trigger(changed_modbus_data.config.fieldManagement_modbus_tcp.master.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
{/if}

     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
        <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
      <td><p class="pl-4 pt-4 text-lg font-light text-right">LAN Profile</p></td>
      <td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_tcp_master[new_tcp_master_index].lanProfile}>
<option disabled="" value="">Choose Profile ...</option>
{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_lan as Lan, index}
<option value={Lan.profileName}>{Lan.profileName}</option>
{/each}
{/if}
</select>



      </td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_master[new_tcp_master_index].remoteServerIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_master[new_tcp_master_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Connection Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_master[new_tcp_master_index].connectionTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



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
      <td><p class="pl-4 pt-4 text-lg font-light text-right">LAN Profile</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].lanProfile}>
<option disabled="" value="">Choose Profile ...</option>
{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_lan as Lan, index}
<option value={Lan.profileName}>{Lan.profileName}</option>
{/each}
{/if}
</select>


      </td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remoteServerIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Connection Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].connectionTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



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



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">LAN Profile</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell>Listen Port</TableHeadCell>
    <TableHeadCell>Max Connection Count</TableHeadCell>

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TCPSlaveItem, index}
   

 <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
       <TableBodyCell class="!p-1">
<button on:click={() => TriggerModifyTCPSlave(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
       <TableBodyCell class="!p-1">            
</TableBodyCell>
{#if TCPSlaveItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPSlaveItem.lanProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPSlaveItem.aliasName}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPSlaveItem.listenPort}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPSlaveItem.maxConnectionCount}</TableBodyCell>

    </TableBodyRow>
{/each}
{/if}

 <TableBodyRow>
     <TableBodyCell class="!p-1">
{#if changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length <10}
            <button on:click={()=>new_tcp_slave_trigger(changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
{/if}
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
 <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTCPSlave}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>


  <Modal bind:open={new_tcp_slave_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_tcp_slave[new_tcp_slave_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_slave[new_tcp_slave_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">LAN Profile</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_tcp_slave[new_tcp_slave_index].lanProfile}>
<option disabled="" value="">Choose Profile ...</option>
{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_lan as Lan, index}
<option value={Lan.profileName}>{Lan.profileName}</option>
{/each}
{/if}
</select>



      </td>



  </tr>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_slave[new_tcp_slave_index].listenPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Max Connection Count</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_tcp_slave[new_tcp_slave_index].maxConnectionCount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td>



  </tr>

      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={add_new_tcp_slave(new_tcp_slave_index)}>Add</Button></td>


    </tr>
</table>
</form>
</Modal>



   <Modal bind:open={Modify_TCP_Slave_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTCPSlave(Modify_TCP_Slave_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">LAN Profile</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].lanProfile}>
<option disabled="" value="">Choose Profile ...</option>
{#if saved_changed_port_connection_data != ""}
{#each saved_changed_port_connection_data.config.fieldManagement_portConnection_lan as Lan, index}
<option value={Lan.profileName}>{Lan.profileName}</option>
{/each}
{/if}
</select>

      </td>



  </tr>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].listenPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Max Connection Count</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].maxConnectionCount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td>



  </tr>

      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyTCPSlave}>Modify</Button></td>


    </tr>
</table>
</form>
</Modal>


</Table>

</AccordionItem>

</Accordion>

     </TabItem>

    <TabItem title="Variable">

<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>


 <Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-1">No</TableHeadCell>
    <TableHeadCell class="!p-1">Variable Name</TableHeadCell>
    <TableHeadCell class="w-18">Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
        <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_variable.master as VariableMasterItem, index}
   

 <TableBodyRow>
   <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-4">
<button on:click={() => TriggerModifyVariableMaster(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">        </TableBodyCell>
{#if VariableMasterItem.enable}
       <TableBodyCell class='w-4'>1</TableBodyCell>
{:else}
       <TableBodyCell class='w-4'>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="!p-1 w-18">{VariableMasterItem.variableName}</TableBodyCell>
  <TableBodyCell class="w-10">{VariableMasterItem.profile}</TableBodyCell>
  <TableBodyCell class="w-18">{VariableMasterItem.slaveId}</TableBodyCell>
{#if VariableMasterItem.pointType == 0}
    <TableBodyCell class="w-10">Coil</TableBodyCell>
{:else if VariableMasterItem.pointType == 1}
    <TableBodyCell class="w-10">Discrete Input</TableBodyCell>
{:else if VariableMasterItem.pointType == 2}
    <TableBodyCell class="w-10">Input Registers</TableBodyCell>
{:else if VariableMasterItem.pointType == 3}
    <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell class="w-10"></TableBodyCell>
{/if}
  <TableBodyCell class="w-18">{VariableMasterItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{VariableMasterItem.quantity}</TableBodyCell>
  <TableBodyCell class="w-18">{VariableMasterItem.responseTimeout} ms</TableBodyCell>
<TableBodyCell class="w-18">{VariableMasterItem.pollingRate} ms</TableBodyCell>
    <TableBodyCell class="w-18">{VariableMasterItem.delayBetweenPolls} ms</TableBodyCell>

{#if VariableMasterItem.byteOrder==0} 
    <TableBodyCell class="w-18">Big Endian</TableBodyCell>
{:else if VariableMasterItem.byteOrder==1}   
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
{:else if VariableMasterItem.byteOrder==2}
    <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
{:else if VariableMasterItem.byteOrder==3}
        <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell class="w-18"></TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}



     <TableBodyRow>
     <TableBodyCell class="!p-1">
{#if changed_modbus_data.config.fieldManagement_modbus_variable.master.length < 10}     
            <button on:click={() =>new_variable_master_trigger(changed_modbus_data.config.fieldManagement_modbus_variable.master.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>

{/if}
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"> </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-4 pt-4"><Button color="blue" pill={true} on:click={saveVariableMaster}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>

  <Modal bind:open={new_variable_master_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_variable_master[new_variable_master_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_variable_master[new_variable_master_index].variableName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Master Profile</p></td>
    <td class= "pl-4 pt-4">


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_variable_master[new_variable_master_index].profile}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RMaster, index}
<option value={RMaster.aliasName}>{RMaster.aliasName}</option>
{/each}

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TMaster, index}
<option value={TMaster.aliasName}>{TMaster.aliasName}</option>
{/each}

</select>




    </td>

</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_variable_master[new_variable_master_index].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={new_variable_master[new_variable_master_index].pointType} value={0} >Coil</Radio>
  <Radio bind:group={new_variable_master[new_variable_master_index].pointType} value={1} >Discrete Input</Radio>
  <Radio bind:group={new_variable_master[new_variable_master_index].pointType} value={2} >Input Register</Radio>
  <Radio bind:group={new_variable_master[new_variable_master_index].pointType} value={3} >Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_variable_master[new_variable_master_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_variable_master[new_variable_master_index].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>



  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={new_variable_master[new_variable_master_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={new_variable_master[new_variable_master_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={new_variable_master[new_variable_master_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={new_variable_master[new_variable_master_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
</div></td>
</tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={new_variable_master[new_variable_master_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Polling Rate</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={new_variable_master[new_variable_master_index].pollingRate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Delay Between Polls</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={new_variable_master[new_variable_master_index].delayBetweenPolls} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

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
<Button color="dark" pill={true} on:click={add_new_variable_master(new_variable_master_index)}>Add</Button></td>


    </tr>

</table>


</form>
</Modal>


<Modal bind:open={Modify_Variable_Master_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyVariableMaster(Modify_Variable_Master_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].variableName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Master Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].profile}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RMaster, index}
<option value={RMaster.aliasName}>{RMaster.aliasName}</option>
{/each}

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TMaster, index}
<option value={TMaster.aliasName}>{TMaster.aliasName}</option>
{/each}

</select>


    </td>

</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType} value={0} >Coil</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType} value={1} >Discrete Input</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType} value={2} >Input Register</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType} value={3} >Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>



  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
</div></td>
</tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Polling Rate</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pollingRate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Delay Between Polls</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].delayBetweenPolls} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

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
<Button color="dark" pill={true} on:click={ModifyVariableMaster}>Modify</Button></td>


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
<Table>
<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell class="w-18">Slave Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>



{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_variable.slave as TCPVariableSlaveItem, index}
   

 <TableBodyRow>
   <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => TriggerModifyVariableSlave(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            </TableBodyCell>

{#if TCPVariableSlaveItem.enable}

       <TableBodyCell>1</TableBodyCell>
{:else}

       <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
  <TableBodyCell class="w-18">{TCPVariableSlaveItem.variableName}</TableBodyCell>
  <TableBodyCell class="w-10">{TCPVariableSlaveItem.profile}</TableBodyCell>
  <TableBodyCell class="w-18">{TCPVariableSlaveItem.slaveId}</TableBodyCell>

{#if TCPVariableSlaveItem.pointType == 0}
    <TableBodyCell class="w-10">Coil</TableBodyCell>
{:else if TCPVariableSlaveItem.pointType == 1}
    <TableBodyCell class="w-10">Discrete Input</TableBodyCell>
{:else if TCPVariableSlaveItem.pointType == 2}
    <TableBodyCell class="w-10">Input Registers</TableBodyCell>
{:else if TCPVariableSlaveItem.pointType == 3}
    <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell class="w-10"></TableBodyCell>
{/if}


  <TableBodyCell class="w-18">{TCPVariableSlaveItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{TCPVariableSlaveItem.quantity}</TableBodyCell>
{#if TCPVariableSlaveItem.byteOrder==0} 
    <TableBodyCell class="w-18">Big Endian</TableBodyCell>
{:else if TCPVariableSlaveItem.byteOrder==1}   
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
{:else if TCPVariableSlaveItem.byteOrder==2}
    <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
{:else if TCPVariableSlaveItem.byteOrder==3}
        <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell class="w-18"></TableBodyCell>
{/if}
    </TableBodyRow>

{/each}
{/if}



     <TableBodyRow>
     <TableBodyCell class="!p-1">
{#if changed_modbus_data.config.fieldManagement_modbus_variable.slave.length <10}
            <button on:click={()=>new_variable_slave_trigger(changed_modbus_data.config.fieldManagement_modbus_variable.slave.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
{/if}
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveVariableSlave}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>


  <Modal bind:open={new_variable_slave_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_variable_slave[new_variable_slave_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_variable_slave[new_variable_slave_index].variableName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave Profile</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_variable_slave[new_variable_slave_index].profile}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RSlave, index}
<option value={RSlave.aliasName}>{RSlave.aliasName}</option>
{/each}

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TSlave, index}
<option value={TSlave.aliasName}>{TSlave.aliasName}</option>
{/each}

</select>



    </td>

</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_variable_slave[new_variable_slave_index].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={new_variable_slave[new_variable_slave_index].pointType} value={0} >Coil</Radio>
  <Radio bind:group={new_variable_slave[new_variable_slave_index].pointType} value={1} >Discrete Input</Radio>
  <Radio bind:group={new_variable_slave[new_variable_slave_index].pointType} value={2} >Input Register</Radio>
  <Radio bind:group={new_variable_slave[new_variable_slave_index].pointType} value={3} >Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_variable_slave[new_variable_slave_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_variable_slave[new_variable_slave_index].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>



  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={new_variable_slave[new_variable_slave_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={new_variable_slave[new_variable_slave_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={new_variable_slave[new_variable_slave_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={new_variable_slave[new_variable_slave_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
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
<Button color="dark" pill={true} on:click={add_new_variable_slave(new_variable_slave_index)}>Add</Button></td>


    </tr>

</table>


</form>
</Modal>


<Modal bind:open={Modify_Variable_Slave_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyVariableSlave(Modify_Variable_Slave_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].variableName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave Profile</p></td>
    <td class= "pl-4 pt-4">


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].profile}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RSlave, index}
<option value={RSlave.aliasName}>{RSlave.aliasName}</option>
{/each}

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TSlave, index}
<option value={TSlave.aliasName}>{TSlave.aliasName}</option>
{/each}

</select>

 
    </td>

</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType} value={0} >Coil</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType} value={1} >Discrete Input</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType} value={2} >Input Register</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType} value={3} >Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>



  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
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
<Button color="dark" pill={true} on:click={ModifyVariableSlave}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>



</Table>   

</AccordionItem>
</Accordion>

    </TabItem>

        <TabItem title="Gateway">
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From TCP To RTU
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>TCP Slave Profile</TableHeadCell>
    <TableHeadCell>RTU Master Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu as Tcp2RtuItem, index}
   

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => TriggerModifyGateway_T2R(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            </TableBodyCell>

{#if Tcp2RtuItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}

     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2RtuItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-36">{Tcp2RtuItem.tcpProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-36">{Tcp2RtuItem.rtuProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2RtuItem.responseTimeout} ms</TableBodyCell>

    </TableBodyRow>
{/each}
{/if}


   <TableBodyRow>
     <TableBodyCell class="!p-1">
{#if changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length < 10}
            <button on:click={() => new_gateway_t2r_trigger(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
{/if}
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-36"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-36"></TableBodyCell>
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
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Slave Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_t2r[new_gateway_t2r_index].tcpProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TSlave, index}
<option value={TSlave.aliasName}>{TSlave.aliasName}</option>
{/each}

</select>



    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Master Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_t2r[new_gateway_t2r_index].rtuProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RMaster, index}
<option value={RMaster.aliasName}>{RMaster.aliasName}</option>
{/each}

</select>

    

    </td>

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
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Slave Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].tcpProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TSlave, index}
<option value={TSlave.aliasName}>{TSlave.aliasName}</option>
{/each}

</select>

  

    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Master Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].rtuProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RMaster, index}
<option value={RMaster.aliasName}>{RMaster.aliasName}</option>
{/each}

</select>

    
    </td>

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
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>RTU Slave Profile</TableHeadCell>
    <TableHeadCell>TCP Master Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp as Rtu2TcpItem, index}
   
   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => TriggerModifyGateway_R2T(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
</TableBodyCell>
{#if Rtu2TcpItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2TcpItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Rtu2TcpItem.rtuProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2TcpItem.tcpProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2TcpItem.responseTimeout} ms</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}

   <TableBodyRow>
     <TableBodyCell class="!p-1">
{#if changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length < 10}
            <button on:click={()=>new_gateway_r2t_trigger(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
{/if}
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Slave Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_r2t[new_gateway_r2t_index].rtuProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RSlave, index}
<option value={RSlave.aliasName}>{RSlave.aliasName}</option>
{/each}

</select>

    

    </td>

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
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_r2t[new_gateway_r2t_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
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
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Slave Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].rtuProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RSlave, index}
<option value={RSlave.aliasName}>{RSlave.aliasName}</option>
{/each}

</select>


    
    </td>

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
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
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
<Button color="dark" pill={true} on:click={ModifyGateway_R2T}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>
  </Table>
      </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From RTU To RTU
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>RTU Slave Profile</TableHeadCell>
    <TableHeadCell>RTU Master Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>


{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu as Rtu2RtuItem, index}
   
   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => TriggerModifyGateway_R2R(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
</TableBodyCell>
{#if Rtu2RtuItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2RtuItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Rtu2RtuItem.rtuProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2RtuItem.rtuProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2RtuItem.responseTimeout} ms</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}

   <TableBodyRow>
     <TableBodyCell class="!p-1">
{#if changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length < 10}
            <button on:click={()=>new_gateway_r2r_trigger(changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
{/if}
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveGatewayR2R}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>


  <Modal bind:open={new_gateway_r2r_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_gateway_r2r[new_gateway_r2r_index].enable}>
{/if}
  Enable
</label>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_r2r[new_gateway_r2r_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Slave Profile</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_r2r[new_gateway_r2r_index].rtuProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RSlave, index}
<option value={RSlave.aliasName}>{RSlave.aliasName}</option>
{/each}

</select>    
    
    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Master Profile</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_r2r[new_gateway_r2r_index].rtuProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RMaster, index}
<option value={RMaster.aliasName}>{RMaster.aliasName}</option>
{/each}

</select>       
    
    </td>

</tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_r2r[new_gateway_r2r_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
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
<Button color="dark" pill={true} on:click={add_new_gateway_r2r(new_gateway_r2r_index)}>Add</Button></td>


    </tr>

</table>
</form>
</Modal>


<Modal bind:open={Modify_Gateway_R2R_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[Modify_Gateway_R2R_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyGateway_R2R(Modify_Gateway_R2R_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[Modify_Gateway_R2R_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Slave Profile</p></td>
    <td class= "pl-4 pt-4">


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[Modify_Gateway_R2R_index].rtuProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RSlave, index}
<option value={RSlave.aliasName}>{RSlave.aliasName}</option>
{/each}

</select>  

    
    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">RTU Master Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[Modify_Gateway_R2R_index].rtuProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RMaster, index}
<option value={RMaster.aliasName}>{RMaster.aliasName}</option>
{/each}

</select>  

    </td>

</tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[Modify_Gateway_R2R_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
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
<Button color="dark" pill={true} on:click={ModifyGateway_R2R}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>



  </Table>
      </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From TCP To TCP
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>TCP Slave Profile</TableHeadCell>
    <TableHeadCell>TCP Master Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp as Tcp2TcpItem, index}
   

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => TriggerModifyGateway_T2T(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
</TableBodyCell>
{#if Tcp2TcpItem.enable}
      <TableBodyCell>1</TableBodyCell>

{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
     <TableBodyCell class="!p-6 w-4">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2TcpItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Tcp2TcpItem.tcpProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2TcpItem.tcpProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2TcpItem.responseTimeout} ms</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}


   <TableBodyRow>
     <TableBodyCell class="!p-1">
{#if changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length < 10}
            <button on:click={()=>new_gateway_t2t_trigger(changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
{/if}
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveGatewayT2T}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>
  <Modal bind:open={new_gateway_t2t_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_gateway_t2t[new_gateway_t2t_index].enable}>
{/if}
  Enable
</label>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_t2t[new_gateway_t2t_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Slave Profile</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_t2t[new_gateway_t2t_index].tcpProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TSlave, index}
<option value={TSlave.aliasName}>{TSlave.aliasName}</option>
{/each}

</select>

    
    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Master Profile</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_gateway_t2t[new_gateway_t2t_index].tcpProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TMaster, index}
<option value={TMaster.aliasName}>{TMaster.aliasName}</option>
{/each}

</select>

    

    </td>

</tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_gateway_t2t[new_gateway_t2t_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
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
<Button color="dark" pill={true} on:click={add_new_gateway_t2t(new_gateway_t2t_index)}>Add</Button></td>


    </tr>

</table>
</form>
</Modal>


<Modal bind:open={Modify_Gateway_T2T_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[Modify_Gateway_T2T_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyGateway_T2T(Modify_Gateway_T2T_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Alias Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[Modify_Gateway_T2T_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Slave Profile</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[Modify_Gateway_T2T_index].tcpProfileSlave}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TSlave, index}
<option value={TSlave.aliasName}>{TSlave.aliasName}</option>
{/each}

</select>


    </td>

</tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">TCP Master Profile</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[Modify_Gateway_T2T_index].tcpProfileMaster}>
<option disabled="" value="">Choose Profile ...</option>

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TMaster, index}
<option value={TMaster.aliasName}>{TMaster.aliasName}</option>
{/each}

</select>

    
    </td>

</tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[Modify_Gateway_T2T_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>
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
<Button color="dark" pill={true} on:click={ModifyGateway_T2T}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>

  </Table>
      </AccordionItem>

</Accordion>
</TabItem>

<TabItem title="Viewer">


<Table shadow striped={true} tableNoWFull={true}>

  <TableHead>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell>Status</TableHeadCell>


  </TableHead>

   <TableBody>

   <TableBodyRow>
      <TableBodyCell class="!p-6 w-10"> Line Current Phase A</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Valid</TableBodyCell>

   </TableBodyRow>


   <TableBodyRow>
      <TableBodyCell class="!p-6 w-10"> RTU-DI Status</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Timeout</TableBodyCell>

   </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell class="!p-6 w-10"> TCP-Line Current Phase B</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Error</TableBodyCell>

   </TableBodyRow>

     </TableBody>
  </Table>

</TabItem>



</Tabs>