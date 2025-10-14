import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-581edbff.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-adf7b2fc.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-90e348d9.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-f5732ac4.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-0d1592aa.js";
import { T as Table } from "../../_app/immutable/chunks/Table-c5072c61.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-64085b64.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-6ec31ad9.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-7cac6071.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-ab4c1927.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-5bfda8b2.js";
import { sessionidG } from "../endpoints/sessionG.js";
/* empty css                                           */import { Conversion_Opcua2Modbus_ConfigChangedLog, sconversionConfig, ChangedSConfigConfig, sdataLoggerConfig, ChangedSDataLoggerConfig, eventEngineConfig, ChangedEventEngineConfig, ModbusGateway_TtR_ConfigChangedLog, ModbusGateway_RtT_ConfigChangedLog, ModbusGateway_RtR_ConfigChangedLog, ModbusGateway_TtT_ConfigChangedLog, ModbusTag_ConfigChangedLog, ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, modbusConfig, ChangedModbusConfig, ChangedPortConnectionConfig, portConnectionConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-100761d4.js";
import "../../_app/immutable/chunks/Frame-9b664c22.js";
import "../../_app/immutable/chunks/Label-e9931984.js";
import "../../_app/immutable/chunks/CloseButton-60d81157.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const ModbusV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_modbus_data = {};
  let saved_changed_modbus_data = {};
  let saved_changed_port_connection_data = "";
  sessionidG.subscribe((val) => {
  });
  Conversion_Opcua2Modbus_ConfigChangedLog.subscribe((val) => {
  });
  sconversionConfig.subscribe((val) => {
  });
  ChangedSConfigConfig.subscribe((val) => {
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
  let new_tcp_master = [
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      lanProfile: "",
      aliasName: "",
      remoteServerIp: "",
      remotePort: 12345,
      unit_id: 0,
      connectionTimeout: 3e3,
      pollingRate: 1e3,
      tag: [],
      responseTimeout: 1e3
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
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      tag: [],
      response_timeout: 1e3,
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      response_timeout: 1e3,
      tag: [],
      slave_id: 0
    }
  ];
  let New_RTU_Master_Modal = false;
  let New_RTU_Master_index;
  let Modify_RTU_Master_Modal = false;
  let Modify_RTU_Master_index;
  let new_gateway_t2r = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      tcpSlavePort: 501,
      tcpSlaveUnitID: 0,
      serialProfile: "",
      rtuMasterSlaveID: 0,
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
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      serialProfile: "",
      rtuSlaveID: 0,
      tcpProfileMaster: ""
    }
  ];
  let new_gateway_r2t_modal = false;
  let new_gateway_r2t_index;
  let Modify_Gateway_R2T_Modal = false;
  let Modify_Gateway_R2T_index;
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Serial Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Slave ID`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
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
                                  return `${changed_modbus_data.config.fieldManagement_modbus_rtu.master.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}     
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}`;
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
                                  return `${Serial.usedby == 1 && Serial.role == 0 ? `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>` : ``}`;
                                })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_rtu_master[New_RTU_Master_index].slave_id, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_rtu_master[New_RTU_Master_index].response_timeout, 0)}></td></tr>



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


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].slave_id, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].response_timeout, 0)}></td></tr>



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
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote Server IP`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote Port`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Unit ID`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Connection Timeout`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Response Timeout`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Polling Rate`;
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
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}      
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
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


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Server IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].remoteServerIp, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].remotePort, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Unit ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].unit_id, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Connection Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].connectionTimeout, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].responseTimeout, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>



<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tcp_master[new_tcp_master_index].pollingRate, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>

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



<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Server IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remoteServerIp, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].remotePort, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Unit ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].unit_id, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Connection Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].connectionTimeout, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].responseTimeout, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Polling Rate</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.master[Modify_TCP_Master_index].pollingRate, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>

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
                    return `<table><tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Local TCP Slave</p></td>

    <td class="${"pl-8 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        value: false,
                        group: changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].enable
                      },
                      {
                        group: ($$value) => {
                          changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].enable = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Disable`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        value: true,
                        group: changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].enable
                      },
                      {
                        group: ($$value) => {
                          changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].enable = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Enable`;
                        }
                      }
                    )}</div></td></tr>

<tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Listen Port</p></td>
<td class="${"pl-8 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].listenPort, 0)}></td></tr>

<tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Max Connection</p></td>
<td class="${"pl-8 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].maxConnectionCount, 0)}></td></tr>


<tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Idle Timeout</p></td>
<td class="${"pl-8 pt-5"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].idle_timeout_sec, 0)}> <p class="${"pl-2 pt-2 text-lg"}">second(s)</p></div></td></tr>

<tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Write Timeout</p></td>
<td class="${"pl-8 pt-5"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].write_timeout_sec, 0)}> <p class="${"pl-2 pt-2 text-lg"}">second(s)</p></div></td></tr>


<tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Unit ID</p></td>
<td class="${"pl-8 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].unitID, 0)}></td></tr>




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
                    })}</td></tr></table>`;
                  }
                })}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Tag" }, {}, {
          default: () => {
            return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TCPSlave, index) => {
              return `${index == 0 ? `<option value="${"TS_0"}">Local TCP Slave</option>` : ``}`;
            })}${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
              return `<option value="${"TM_" + escape(index, true)}">${escape(TMaster.aliasName)}</option>`;
            })}${saved_changed_port_connection_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master, (Serial, index) => {
              return `<option value="${"RM_" + escape(index, true)}">${escape(Serial.aliasName)}</option>`;
            })}` : ``}</select>

<p class="${"pt-4"}"></p>

${``}`;
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
                                  return `TCP Listen Port`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Unit ID`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Serial Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Remote RTU Slave ID`;
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
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}`;
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




  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Listen Port</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_t2r[new_gateway_t2r_index].tcpSlavePort, 0)}></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Unit ID</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_t2r[new_gateway_t2r_index].tcpSlaveUnitID, 0)}></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `${Serial.usedby == 1 && Serial.role == 0 ? `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>` : ``}`;
                                })}` : ``}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Remote RTU Slave ID</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_t2r[new_gateway_t2r_index].rtuMasterSlaveID, 0)}></td></tr>


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




  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Listen Port</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].tcpSlavePort, 0)}></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Unit ID</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].tcpSlaveUnitID, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `${Serial.usedby == 1 && Serial.role == 0 ? `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>` : ``}`;
                                })}` : ``}</select></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Remote RTU Slave ID</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].rtuMasterSlaveID, 0)}></td></tr>


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
                                  return `Serial Profile`;
                                }
                              })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Local RTU Slave ID`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `TCP Master Profile`;
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
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-18" }, {}, {})}`;
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





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `${Serial.usedby == 1 && Serial.role == 1 ? `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>` : ``}`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Local RTU Slave ID</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_gateway_r2t[new_gateway_r2t_index].rtuSlaveID, 0)}></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>








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






  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${saved_changed_port_connection_data != "" ? `${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (Serial, index) => {
                                  return `${Serial.usedby == 1 && Serial.role == 1 ? `<option${add_attribute("value", Serial.serialProfile, 0)}>${escape(Serial.serialProfile)}</option>` : ``}`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Local RTU Slave ID</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp[Modify_Gateway_R2T_index].rtuSlaveID, 0)}></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">TCP Master Profile</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Profile ...</option>${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master, (TMaster, index) => {
                                  return `<option${add_attribute("value", TMaster.aliasName, 0)}>${escape(TMaster.aliasName)}</option>`;
                                })}</select></td></tr>



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
  ModbusV2 as default
};
