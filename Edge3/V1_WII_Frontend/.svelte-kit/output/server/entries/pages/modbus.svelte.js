import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-54377ec4.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-b4ae9971.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-de764e50.js";
import { T as Table } from "../../_app/immutable/chunks/Table-297ce0df.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-20bd2092.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-db67647d.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
/* empty css                                           */import { Conversion_Opcua2Modbus_ConfigChangedLog, sconversionConfig, ChangedSConfigConfig, sdataLoggerConfig, ChangedSDataLoggerConfig, eventEngineConfig, ChangedEventEngineConfig, ModbusGateway_TtR_ConfigChangedLog, ModbusGateway_RtT_ConfigChangedLog, ModbusGateway_RtR_ConfigChangedLog, ModbusGateway_TtT_ConfigChangedLog, ModbusDataModel_Slave_ConfigChangedLog, ModbusTag_ConfigChangedLog, ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, modbusConfig, ChangedModbusConfig, ChangedPortConnectionConfig, portConnectionConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
import "../../_app/immutable/chunks/CloseButton-dd962073.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Modbus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_modbus_data = {};
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
  });
  ChangedPortConnectionConfig.subscribe((val) => {
  });
  portConnectionConfig.subscribe((val) => {
  });
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
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${``}

${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Gateway" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="header" class="pl-4">From TCP To RTU
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
                                  return `${changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu.length < 1 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"><path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}     
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
     ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-6 w-4" }, {}, {})}
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

    <td class="pl-10 pt-4">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
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
                                return `<form action="#"><label>${``}
  Enable
</label>
<p class="mt-10"></p>
<table><tr><td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", new_gateway_t2r[new_gateway_t2r_index].responseTimeout, 0)}></td><td><p class="pl-2 pt-4 text-lg">ms</p></td>
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
                                return `<form action="#"><label>${``}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close"><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table><tr><td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu[Modify_Gateway_T2R_index].responseTimeout, 0)}></td><td><p class="pl-2 pt-4 text-lg">ms</p></td>
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
${``}`;
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
