import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-92087dcd.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { sdataLoggerConfig, ChangedSDataLoggerConfig, ModbusGateway_TtR_ConfigChangedLog, ModbusGateway_RtT_ConfigChangedLog, ModbusGateway_RtR_ConfigChangedLog, ModbusGateway_TtT_ConfigChangedLog, ModbusVariable_Slave_ConfigChangedLog, ModbusVariable_Master_ConfigChangedLog, ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, modbusConfig, ChangedModbusConfig, ChangedPortConnectionConfig, portConnectionConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
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
  ModbusGateway_TtR_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_RtT_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_RtR_ConfigChangedLog.subscribe((val) => {
  });
  ModbusGateway_TtT_ConfigChangedLog.subscribe((val) => {
  });
  ModbusVariable_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusVariable_Master_ConfigChangedLog.subscribe((val) => {
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
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      listenPort: 12345,
      maxConnectionCount: 3e3
    },
    {
      enable: false,
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
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      connectionTimeout: 3e3
    },
    {
      enable: false,
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
  let Modify_RTU_Master_Modal = false;
  let Modify_RTU_Master_index;
  let Modify_RTU_Slave_Modal = false;
  let Modify_RTU_Slave_index;
  let new_variable_master = [
    {
      enable: false,
      variableName: "",
      profile: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
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
      responseTimeout: 1e3,
      pollingRate: 1e3,
      delayBetweenPolls: 20
    }
  ];
  let new_variable_master_modal = false;
  let new_variable_master_index;
  let Modify_Variable_Master_Modal = false;
  let Modify_Variable_Master_index;
  let new_variable_slave = [
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
  let new_variable_slave_modal = false;
  let new_variable_slave_index;
  let Modify_Variable_Slave_Modal = false;
  let Modify_Variable_Slave_index;
  let new_gateway_t2r = [
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      tcpProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
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
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      tcpProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
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
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
      aliasName: "",
      rtuProfileSlave: "",
      rtuProfileMaster: "",
      responseTimeout: 1e3
    },
    {
      enable: false,
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                    default: () => {
                                      return `${changed_modbus_data.config.fieldManagement_modbus_tcp.master.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                    default: () => {
                                      return `${changed_modbus_data.config.fieldManagement_modbus_tcp.slave.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
 ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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

    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Variable" }, {}, {
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {
                                default: () => {
                                  return `Variable Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Master Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Slave ID`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Point Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Address (DEC)`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Quantity`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Response Timeout`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Polling Rate`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Delay Between Polls`;
                                }
                              })}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Byte Order`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}



     ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                    default: () => {
                                      return `${changed_modbus_data.config.fieldManagement_modbus_variable.master.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
                          })}

  ${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_variable_master_modal
                            },
                            {
                              open: ($$value) => {
                                new_variable_master_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Variable Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_master[new_variable_master_index].variableName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                                  return `<option${add_attribute("value", RMaster.aliasName, 0)}>${escape(RMaster.aliasName)}</option>`;
                                })}${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_master[new_variable_master_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: new_variable_master[new_variable_master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].pointType = $$value;
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
                                    group: new_variable_master[new_variable_master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].pointType = $$value;
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
                                    group: new_variable_master[new_variable_master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].pointType = $$value;
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
                                    group: new_variable_master[new_variable_master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].pointType = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Holding Register`;
                                    }
                                  }
                                )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_master[new_variable_master_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_master[new_variable_master_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: new_variable_master[new_variable_master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].byteOrder = $$value;
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
                                    group: new_variable_master[new_variable_master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].byteOrder = $$value;
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
                                    group: new_variable_master[new_variable_master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].byteOrder = $$value;
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
                                    group: new_variable_master[new_variable_master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      new_variable_master[new_variable_master_index].byteOrder = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Little Endian Byte Swap`;
                                    }
                                  }
                                )}</div></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_master[new_variable_master_index].responseTimeout, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_master[new_variable_master_index].pollingRate, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Delay Between Polls</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_master[new_variable_master_index].delayBetweenPolls, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

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
                              open: Modify_Variable_Master_Modal
                            },
                            {
                              open: ($$value) => {
                                Modify_Variable_Master_Modal = $$value;
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
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Variable Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].variableName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (RMaster, index) => {
                                  return `<option${add_attribute("value", RMaster.aliasName, 0)}>${escape(RMaster.aliasName)}</option>`;
                                })}${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType = $$value;
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
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType = $$value;
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
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType = $$value;
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
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pointType = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Holding Register`;
                                    }
                                  }
                                )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder = $$value;
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
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder = $$value;
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
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder = $$value;
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
                                    group: changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].byteOrder = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Little Endian Byte Swap`;
                                    }
                                  }
                                )}</div></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].responseTimeout, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].pollingRate, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Delay Between Polls</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.master[Modify_Variable_Master_index].delayBetweenPolls, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

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
                    return `<span slot="${"header"}" class="${"pl-4"}">Slave
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
                                return `Variable Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `Slave Profile`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `Address (DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Byte Order`;
                              }
                            })}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}



     ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                  default: () => {
                                    return `${changed_modbus_data.config.fieldManagement_modbus_variable.slave.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                  }
                                })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
                            open: new_variable_slave_modal
                          },
                          {
                            open: ($$value) => {
                              new_variable_slave_modal = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Variable Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_slave[new_variable_slave_index].variableName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave, (RSlave, index) => {
                                return `<option${add_attribute("value", RSlave.aliasName, 0)}>${escape(RSlave.aliasName)}</option>`;
                              })}${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TSlave, index) => {
                                return `<option${add_attribute("value", TSlave.aliasName, 0)}>${escape(TSlave.aliasName)}</option>`;
                              })}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_slave[new_variable_slave_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: new_variable_slave[new_variable_slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].pointType = $$value;
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
                                  group: new_variable_slave[new_variable_slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].pointType = $$value;
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
                                  group: new_variable_slave[new_variable_slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].pointType = $$value;
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
                                  group: new_variable_slave[new_variable_slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].pointType = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                }
                              )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_slave[new_variable_slave_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_variable_slave[new_variable_slave_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: new_variable_slave[new_variable_slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].byteOrder = $$value;
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
                                  group: new_variable_slave[new_variable_slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].byteOrder = $$value;
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
                                  group: new_variable_slave[new_variable_slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].byteOrder = $$value;
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
                                  group: new_variable_slave[new_variable_slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_variable_slave[new_variable_slave_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Little Endian Byte Swap`;
                                  }
                                }
                              )}</div></td></tr>


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
                            open: Modify_Variable_Slave_Modal
                          },
                          {
                            open: ($$value) => {
                              Modify_Variable_Slave_Modal = $$value;
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
<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Variable Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].variableName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.slave, (RSlave, index) => {
                                return `<option${add_attribute("value", RSlave.aliasName, 0)}>${escape(RSlave.aliasName)}</option>`;
                              })}${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TSlave, index) => {
                                return `<option${add_attribute("value", TSlave.aliasName, 0)}>${escape(TSlave.aliasName)}</option>`;
                              })}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType = $$value;
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
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType = $$value;
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
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType = $$value;
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
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].pointType = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                }
                              )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder = $$value;
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
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder = $$value;
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
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder = $$value;
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
                                  group: changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_modbus_data.config.fieldManagement_modbus_variable.slave[Modify_Variable_Slave_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Little Endian Byte Swap`;
                                  }
                                }
                              )}</div></td></tr>





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
                    })}`;
                  }
                })}`;
              }
            })}`;
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                    default: () => {
                                      return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-36" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-36" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                    default: () => {
                                      return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                    default: () => {
                                      return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
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
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                                    default: () => {
                                      return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
                          return `Variable Name`;
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
                      return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                            default: () => {
                              return `Line Current Phase A`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                            default: () => {
                              return `Valid`;
                            }
                          })}`;
                        }
                      })}


   ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                            default: () => {
                              return `RTU-DI Status`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                            default: () => {
                              return `Timeout`;
                            }
                          })}`;
                        }
                      })}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                            default: () => {
                              return `TCP-Line Current Phase B`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {
                            default: () => {
                              return `Error`;
                            }
                          })}`;
                        }
                      })}`;
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
