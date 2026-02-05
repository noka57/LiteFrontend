import { c as create_ssr_component, v as validate_component, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-54377ec4.js";
import { A as Accordion } from "../../_app/immutable/chunks/Accordion-c8c12650.js";
import { A as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-ab074a69.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-5b795065.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-e8760b90.js";
import { T as Table } from "../../_app/immutable/chunks/Table-a510ae4f.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-db67647d.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, ChangedModbusConfig, modbusConfig, portConnectionConfig, PortConnection_LAN_ConfigChangedLog, PortConnection_COM_ConfigChangedLog, PortConnection_Transparent_ConfigChangedLog, ChangedPortConnectionConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const PhyInterface = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_port_connection_data = {};
  let Adc1Type = 0;
  let Adc2Type = 0;
  let DOValue = 0;
  let SetDOHighReady = 0;
  let SetDOLowReady = 0;
  sessionidG.subscribe((val) => {
  });
  ModbusTCP_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusTCP_Master_ConfigChangedLog.subscribe((val) => {
  });
  ModbusRTU_Slave_ConfigChangedLog.subscribe((val) => {
  });
  ModbusRTU_Master_ConfigChangedLog.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
  });
  modbusConfig.subscribe((val) => {
  });
  portConnectionConfig.subscribe((val) => {
  });
  PortConnection_LAN_ConfigChangedLog.subscribe((val) => {
  });
  PortConnection_COM_ConfigChangedLog.subscribe((val) => {
  });
  PortConnection_Transparent_ConfigChangedLog.subscribe((val) => {
  });
  ChangedPortConnectionConfig.subscribe((val) => {
  });
  let modify_com_modal = false;
  let modify_com_index;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${``}  

  ${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "RS485" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="header" class="pl-4">General
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Serial Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Interface`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Baudrate`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Parity`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Data Bits`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Stop Bits`;
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
                              size: "md",
                              class: "w-full",
                              permanent: true,
                              open: modify_com_modal
                            },
                            {
                              open: ($$value) => {
                                modify_com_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="#"><label><input type="checkbox"${add_attribute("checked", changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].enable, 1)}>
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close"><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table><tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>

      <td class="pl-5 pt-5">${escape(changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].serialProfile)}</td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Interface</p></td>

    <td class="pl-5 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].interface
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].interface = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `RS 485`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].baudrate, 0)}></td></tr>


<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].parity
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].parity = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `None`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 1,
                                    group: changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].parity
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].parity = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Even`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 2,
                                    group: changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].parity
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].parity = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Odd`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].dataBits, 0)}></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_port_connection_data.config.fieldManagement_physicalInterface_rs485[modify_com_index].stopBits, 0)}></td></tr>
      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "I/O" }, {}, {
          default: () => {
            return `${``}

${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="header" class="pl-4">IO Settings
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="pl-10"><div class="flex gap-1"><p class="w-26 pt-2">DO:</p>
   ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { class: "pl-3", value: 1, group: DOValue },
                      {
                        group: ($$value) => {
                          DOValue = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Close`;
                        }
                      }
                    )}   
   ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { class: "p-1", value: 0, group: DOValue },
                      {
                        group: ($$value) => {
                          DOValue = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Open`;
                        }
                      }
                    )}
   ${validate_component(Button, "Button").$$render($$result, { class: "w-20", pill: true }, {}, {
                      default: () => {
                        return `Set`;
                      }
                    })}
   <p class="pl-2 pt-2">${DOValue == 0 && SetDOLowReady == 1 ? `Command Executed` : `${DOValue == 1 && SetDOHighReady == 1 ? `Command Executed` : ``}`}</p></div></td></tr>


<tr><td class="pl-10 pt-10"><div class="flex gap-1"><p class="w-26 pt-3">AI-1:</p>
   ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { class: "p-3", value: 1, group: Adc1Type },
                      {
                        group: ($$value) => {
                          Adc1Type = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Voltage`;
                        }
                      }
                    )}
   ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { class: "p-1", value: 0, group: Adc1Type },
                      {
                        group: ($$value) => {
                          Adc1Type = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Current`;
                        }
                      }
                    )}
   ${validate_component(Button, "Button").$$render($$result, { class: "w-20", pill: true }, {}, {
                      default: () => {
                        return `Set`;
                      }
                    })}
   <p class="pl-2 pt-2">${``}</p></div></td></tr>



<tr><td class="pl-10 pt-10"><div class="flex gap-1"><p class="w-26 pt-3">AI-2:</p>
   ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { class: "p-3", value: 1, group: Adc2Type },
                      {
                        group: ($$value) => {
                          Adc2Type = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Voltage`;
                        }
                      }
                    )}
   ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { class: "p-1", value: 0, group: Adc2Type },
                      {
                        group: ($$value) => {
                          Adc2Type = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Current`;
                        }
                      }
                    )}
   ${validate_component(Button, "Button").$$render($$result, { class: "w-20", pill: true }, {}, {
                      default: () => {
                        return `Set`;
                      }
                    })}
   <p class="pl-2 pt-2">${``}</p></div></td></tr></table>`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="header" class="pl-4">IO Status
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="pl-10 pt-3"><div class="flex gap-1"><p class="w-26 pt-2">DI: <span class="text-red-700">${`Low`}</span></p></div></td></tr>


<tr><td class="pl-10 pt-10"><div class="flex gap-1"><p class="w-26 pt-2">DO: <span class="text-red-700">${DOValue == 1 ? `Close` : `${DOValue == 0 ? `Open` : ``}`}</span></p></div></td></tr>


<tr><td class="pl-10 pt-10"><div class="flex gap-1"><p class="w-26 pt-2">AI-1: <span class="text-red-700">${``}${Adc1Type == 1 ? ` (Voltage)` : `${Adc1Type == 0 ? ` (Current)` : ``}`}</span></p></div></td></tr>

<tr><td class="pl-10 pt-10"><div class="flex gap-1"><p class="w-26 pt-2">AI-2: <span class="text-red-700">${``}${Adc2Type == 1 ? ` (Voltage)` : `${Adc2Type == 0 ? ` (Current)` : ``}`}</span></p></div></td></tr>


<tr><td class="pl-12 pt-10">${validate_component(Button, "Button").$$render($$result, { class: "w-22", pill: true }, {}, {
                      default: () => {
                        return `Refresh`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  PhyInterface as default
};
