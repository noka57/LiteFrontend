import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { T as Toggle } from "../../_app/immutable/chunks/Toggle-31f82fc3.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-ea7df515.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
/* empty css                                           */import { sdataLoggerConfig, ChangedSDataLoggerConfig, eventEngineConfig, ChangedEventEngineConfig, ModbusGateway_TtR_ConfigChangedLog, ModbusGateway_RtT_ConfigChangedLog, ModbusGateway_RtR_ConfigChangedLog, ModbusGateway_TtT_ConfigChangedLog, ModbusDataModel_Slave_ConfigChangedLog, ModbusTag_ConfigChangedLog, ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, modbusConfig, ChangedModbusConfig, ChangedPortConnectionConfig, portConnectionConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
import "../../_app/immutable/chunks/CloseButton-88212a62.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Modbus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_modbus_data = {};
  let saved_changed_modbus_data = {};
  let saved_changed_port_connection_data = "";
  sessionidG.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
  });
  eventEngineConfig.subscribe((val) => {
  });
  ChangedEventEngineConfig.subscribe((val) => {
  });
  ModbusGateway_TtR_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_RtT_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_RtR_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_TtT_ConfigChangedLog.subscribe((val) => {
  });
  ModbusDataModel_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusTag_ConfigChangedLog.subscribe((val) => {
  });
  ModbusTCP_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusTCP_Master_ConfigChangedLog.subscribe((val) => {
  });
  ModbusRTU_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusRTU_Master_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerModbus_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionModbus_ConfigChangedLog.subscribe((val) => {
  });
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
    saved_changed_modbus_data = val;
  });
  ChangedPortConnectionConfig.subscribe((val) => {
    saved_changed_port_connection_data = val;
  });
  portConnectionConfig.subscribe((val) => {
  });
  let new_tcp_slave = [
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    }
  ];
  let new_tcp_slave_modal = false;
  let new_tcp_slave_index;
  let Modify_TCP_Slave_Modal = false;
  let Modify_TCP_Slave_index;
  let new_tcp_master = [
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    }
  ];
  let new_tcp_master_modal = false;
  let new_tcp_master_index;
  let Modify_TCP_Master_Modal = false;
  let Modify_TCP_Master_index;
  let new_rtu_master = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: ""
    }
  ];
  let New_RTU_Master_Modal = false;
  let New_RTU_Master_index;
  let Modify_RTU_Master_Modal = false;
  let Modify_RTU_Master_index;
  let new_rtu_slave = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: ""
    }
  ];
  let New_RTU_Slave_Modal = false;
  let New_RTU_Slave_index;
  let Modify_RTU_Slave_Modal = false;
  let Modify_RTU_Slave_index;
  let new_tag_profile = "";
  let modify_tag_profile = "";
  let new_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      masterProfile: "",
      slaveId: 1,
      pointType: 0,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      dataType: 0,
      postprocessingEnable: false,
      postprocessingOperator: 0,
      postprocessingValue: 1,
      responseTimeout: 1e3,
      pollingRate: 1e3
    }
  ];
  let new_tag_modal = false;
  let new_tag_index;
  let modify_tag_modal = false;
  let modify_tag_index;
  let new_gateway_t2r = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    }
  ];
  let new_gateway_t2r_modal = false;
  let new_gateway_t2r_index;
  let Modify_Gateway_T2R_Modal = false;
  let Modify_Gateway_T2R_index;
  let new_gateway_r2t = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    }
  ];
  let new_gateway_r2t_modal = false;
  let new_gateway_r2t_index;
  let Modify_Gateway_R2T_Modal = false;
  let Modify_Gateway_R2T_index;
  let new_gateway_r2r = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    }
  ];
  let new_gateway_r2r_modal = false;
  let new_gateway_r2r_index;
  let Modify_Gateway_R2R_Modal = false;
  let Modify_Gateway_R2R_index;
  let new_gateway_t2t = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    }
  ];
  let new_gateway_t2t_modal = false;
  let new_gateway_t2t_index;
  let Modify_Gateway_T2T_Modal = false;
  let Modify_Gateway_T2T_index;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "RTU" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Master
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Serial Profile`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_rtu.master.length < 2 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}     
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}`;
                                }
                              })}


<tr><td></td>
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

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}



 
${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              autoclose: true,
                              open: New_RTU_Master_Modal
                            },
                            {
                              open: ($$value) => {
                                New_RTU_Master_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_rtu_master[New_RTU_Master_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>`;
                                })}` : ``}</select></td></tr>




      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


   
${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              permanent: true,
                              open: Modify_RTU_Master_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_RTU_Master_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>`;
                                })}` : ``}</select></td></tr>




      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Slave
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Serial Profile`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}




 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_rtu.slave.length < 2 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}`;
                                }
                              })}


<tr><td></td>
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

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              autoclose: true,
                              open: New_RTU_Slave_Modal
                            },
                            {
                              open: ($$value) => {
                                New_RTU_Slave_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_rtu_slave[New_RTU_Slave_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>`;
                                })}` : ``}</select></td></tr>




      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


   ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              permanent: true,
                              open: Modify_RTU_Slave_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_RTU_Slave_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_rtu.slave[Modify_RTU_Slave_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>`;
                                })}` : ``}</select></td></tr>




      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
     ${validate_component(TabItem, "TabItem").$$render($$result, { title: "TCP" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Master
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `LAN Profile`;
                                }
                              })}   
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Remote Server IP`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Remote Port`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Connection Timeout`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_tcp.master.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}      
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                                }
                              })}


<tr><td></td>
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}


   ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_tcp_master_modal
                            },
                            {
                              open: ($$value) => {
                                new_tcp_master_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">LAN Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_lan, (Lan, index) => {
                                  return `<option${add_attribute("value", Lan.profileName, 0)}>${escape(Lan.profileName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Server IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].remoteServerIp, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].remotePort, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Connection Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].connectionTimeout, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>

      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}



   ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: Modify_TCP_Master_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_TCP_Master_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">LAN Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_lan, (Lan, index) => {
                                  return `<option${add_attribute("value", Lan.profileName, 0)}>${escape(Lan.profileName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Server IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remoteServerIp, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remotePort, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Connection Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].connectionTimeout, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>

      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Slave
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `LAN Profile`;
                                }
                              })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Listen Port`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Max Connection Count`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
 ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                                }
                              })}


<tr><td></td>
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}


  ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_tcp_slave_modal
                            },
                            {
                              open: ($$value) => {
                                new_tcp_slave_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_slave[new_tcp_slave_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">LAN Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_lan, (Lan, index) => {
                                  return `<option${add_attribute("value", Lan.profileName, 0)}>${escape(Lan.profileName)}</option>`;
                                })}` : ``}</select></td></tr>



<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Listen Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_slave[new_tcp_slave_index].listenPort, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Max Connection Count</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_slave[new_tcp_slave_index].maxConnectionCount, 0)}></td></tr>

      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}



   ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: Modify_TCP_Slave_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_TCP_Slave_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">LAN Profile</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_lan, (Lan, index) => {
                                  return `<option${add_attribute("value", Lan.profileName, 0)}>${escape(Lan.profileName)}</option>`;
                                })}` : ``}</select></td></tr>



<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Listen Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].listenPort, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Max Connection Count</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[Modify_TCP_Slave_index].maxConnectionCount, 0)}></td></tr>

      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Tag" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render(
              $$result,
              {
                shadow: true,
                striped: true,
                tableNoWFull: true
              },
              {},
              {
                default: () => {
                  return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Enable`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {
                        default: () => {
                          return `No`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-3" }, {}, {
                        default: () => {
                          return `Tag Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {
                        default: () => {
                          return `Master Profile`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Point Type`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Address`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Quantity`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {
                        default: () => {
                          return `Date Type`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Byte Order`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Response Timeout`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Post Processing`;
                        }
                      })}`;
                    }
                  })}

  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}



     ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${changed_modbus_data.config.fieldManagement_modbus_tag.length < 50 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                            default: () => {
                              return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                            }
                          })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1 w-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-3" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                        }
                      })}










  <tr><td></td>
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
    <td class="${"pl-4 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                        default: () => {
                          return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                        }
                      })}</td></tr>`;
                    }
                  })}`;
                }
              }
            )}




  ${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "lg",
                class: "w-full",
                autoclose: true,
                open: new_tag_modal
              },
              {
                open: ($$value) => {
                  new_tag_modal = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tag[new_tag_index].tagName, 0)}></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                    return `<option value="${"R_" + escape(index, true)}">${escape(RMaster.aliasName)}</option>`;
                  })}${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                    return `<option value="${"T_" + escape(index, true)}">${escape(TMaster.aliasName)}</option>`;
                  })}</select></td></tr>

${new_tag_profile[0] == "R" ? `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tag[new_tag_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>` : `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></td>
<td></td>
<td></td>
<td></td></tr>`}

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 0,
                      group: new_tag[new_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Coil`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 1,
                      group: new_tag[new_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Discrete Input`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 2,
                      group: new_tag[new_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Input Register`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 3,
                      group: new_tag[new_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Holding Register`;
                      }
                    }
                  )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tag[new_tag_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tag[new_tag_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>
<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Type</p></td>

    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 10, 0)}>UInt8</option><option${add_attribute("value", 11, 0)}>Int8</option><option${add_attribute("value", 2, 0)}>UInt16</option><option${add_attribute("value", 3, 0)}>Int16</option><option${add_attribute("value", 4, 0)}>UInt32</option><option${add_attribute("value", 5, 0)}>Int32</option><option${add_attribute("value", 8, 0)}>UInt64</option><option${add_attribute("value", 9, 0)}>Int64</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option><option${add_attribute("value", 12, 0)}>ASCII</option><option${add_attribute("value", 13, 0)}>BITMAP</option><option${add_attribute("value", 14, 0)}>STR32</option><option${add_attribute("value", 15, 0)}>string</option><option${add_attribute("value", 16, 0)}>RAW</option></select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 0,
                      group: new_tag[new_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Big Endian`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 1,
                      group: new_tag[new_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Little Endian`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 2,
                      group: new_tag[new_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Big Endian Byte Swap`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 3,
                      group: new_tag[new_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        new_tag[new_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Little Endian Byte Swap`;
                      }
                    }
                  )}</div></td></tr>



<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Post Processing</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      class: "p-2.5 mt-2 mb-4",
                      checked: new_tag[new_tag_index].postprocessingEnable
                    },
                    {
                      checked: ($$value) => {
                        new_tag[new_tag_index].postprocessingEnable = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}

${new_tag[new_tag_index].postprocessingEnable ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1 mb-3 w-20"}"><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>




<div class="${"relative"}"><input id="${"operand_value"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", new_tag[new_tag_index].postprocessingValue, 0)}> <label for="${"operand_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">operand_value</label></div>` : ``}</div></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tag[new_tag_index].responseTimeout, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>

${new_tag_profile[0] == "T" ? `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tag[new_tag_index].pollingRate, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>` : `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>`}  





      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Add`;
                    }
                  })}</td></tr></table></form>`;
                }
              }
            )}


${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "lg",
                class: "w-full",
                permanent: true,
                open: modify_tag_modal
              },
              {
                open: ($$value) => {
                  modify_tag_modal = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>



<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].tagName, 0)}></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                    return `<option value="${"R_" + escape(index, true)}">${escape(RMaster.aliasName)}</option>`;
                  })}${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                    return `<option value="${"T_" + escape(index, true)}">${escape(TMaster.aliasName)}</option>`;
                  })}</select></td></tr>

${modify_tag_profile[0] == "R" ? `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>` : `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></td>
<td></td>
<td></td>
<td></td></tr>`}

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 0,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Coil`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 1,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Discrete Input`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 2,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Input Register`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 3,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pointType = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Holding Register`;
                      }
                    }
                  )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>
<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Type</p></td>

    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 10, 0)}>UInt8</option><option${add_attribute("value", 11, 0)}>Int8</option><option${add_attribute("value", 2, 0)}>UInt16</option><option${add_attribute("value", 3, 0)}>Int16</option><option${add_attribute("value", 4, 0)}>UInt32</option><option${add_attribute("value", 5, 0)}>Int32</option><option${add_attribute("value", 8, 0)}>UInt64</option><option${add_attribute("value", 9, 0)}>Int64</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option><option${add_attribute("value", 12, 0)}>ASCII</option><option${add_attribute("value", 13, 0)}>BITMAP</option><option${add_attribute("value", 14, 0)}>STR32</option><option${add_attribute("value", 15, 0)}>string</option><option${add_attribute("value", 16, 0)}>RAW</option></select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 0,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Big Endian`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 1,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Little Endian`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 2,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Big Endian Byte Swap`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    {
                      value: 3,
                      group: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder
                    },
                    {
                      group: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].byteOrder = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Little Endian Byte Swap`;
                      }
                    }
                  )}</div></td></tr>



<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Post Processing</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      class: "p-2.5 mt-2 mb-4",
                      checked: changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].postprocessingEnable
                    },
                    {
                      checked: ($$value) => {
                        changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].postprocessingEnable = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}

${changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].postprocessingEnable ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1 mb-3 w-20"}"><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>


<div class="${"relative"}"><input id="${"operand_value"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].postprocessingValue, 0)}> <label for="${"operand_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">operand_value</label></div>` : ``}</div></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].responseTimeout, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>

${modify_tag_profile[0] == "T" ? `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tag[modify_tag_index].pollingRate, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>` : `<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>`}  




      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Modify`;
                    }
                  })}</td></tr></table></form>`;
                }
              }
            )}`;
          }
        })}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Gateway" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">From TCP To RTU
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Slave Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `RTU Master Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Response Timeout`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


   ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}     
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-36" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-36" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}`;
                                }
                              })}

  <tr><td></td>
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

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}




  ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_gateway_t2r_modal
                            },
                            {
                              open: ($$value) => {
                                new_gateway_t2r_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_t2r[new_gateway_t2r_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TSlave, index) => {
                                  return `<option${add_attribute("value", TSlave.aliasName, 0)}>${escape(TSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                                  return `<option${add_attribute("value", RMaster.aliasName, 0)}>${escape(RMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_t2r[new_gateway_t2r_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>






      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: Modify_Gateway_T2R_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_Gateway_T2R_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TSlave, index) => {
                                  return `<option${add_attribute("value", TSlave.aliasName, 0)}>${escape(TSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                                  return `<option${add_attribute("value", RMaster.aliasName, 0)}>${escape(RMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>






      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">From RTU To TCP
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `RTU Slave Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Master Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Response Timeout`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

   ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}`;
                                }
                              })}

  <tr><td></td>
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
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}

  ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_gateway_r2t_modal
                            },
                            {
                              open: ($$value) => {
                                new_gateway_r2t_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_r2t[new_gateway_r2t_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave, (RSlave, index) => {
                                  return `<option${add_attribute("value", RSlave.aliasName, 0)}>${escape(RSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_r2t[new_gateway_r2t_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>






      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: Modify_Gateway_R2T_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_Gateway_R2T_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave, (RSlave, index) => {
                                  return `<option${add_attribute("value", RSlave.aliasName, 0)}>${escape(RSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>


      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">From RTU To RTU
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `RTU Slave Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `RTU Master Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Response Timeout`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

   ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}`;
                                }
                              })}

  <tr><td></td>
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
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}


  ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_gateway_r2r_modal
                            },
                            {
                              open: ($$value) => {
                                new_gateway_r2r_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_r2r[new_gateway_r2r_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave, (RSlave, index) => {
                                  return `<option${add_attribute("value", RSlave.aliasName, 0)}>${escape(RSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                                  return `<option${add_attribute("value", RMaster.aliasName, 0)}>${escape(RMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_r2r[new_gateway_r2r_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>






      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: Modify_Gateway_R2R_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_Gateway_R2R_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[Modify_Gateway_R2R_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave, (RSlave, index) => {
                                  return `<option${add_attribute("value", RSlave.aliasName, 0)}>${escape(RSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">RTU Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                                  return `<option${add_attribute("value", RMaster.aliasName, 0)}>${escape(RMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu[Modify_Gateway_R2R_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>






      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">From TCP To TCP
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Slave Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Master Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Response Timeout`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


   ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}`;
                                }
                              })}

  <tr><td></td>
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
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}
  ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_gateway_t2t_modal
                            },
                            {
                              open: ($$value) => {
                                new_gateway_t2t_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_t2t[new_gateway_t2t_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TSlave, index) => {
                                  return `<option${add_attribute("value", TSlave.aliasName, 0)}>${escape(TSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_t2t[new_gateway_t2t_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>






      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: Modify_Gateway_T2T_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_Gateway_T2T_Modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Alias Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[Modify_Gateway_T2T_index].aliasName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TSlave, index) => {
                                  return `<option${add_attribute("value", TSlave.aliasName, 0)}>${escape(TSlave.aliasName)}</option>`;
                                })}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp[Modify_Gateway_T2T_index].responseTimeout, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td>
<td></td>
<td></td>
<td></td></tr>






      <tr><td></td>
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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Viewer" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render(
              $$result,
              {
                shadow: true,
                striped: true,
                tableNoWFull: true
              },
              {},
              {
                default: () => {
                  return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `TimeStamp`;
                        }
                      })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Status`;
                        }
                      })}`;
                    }
                  })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Modbus as default
};
