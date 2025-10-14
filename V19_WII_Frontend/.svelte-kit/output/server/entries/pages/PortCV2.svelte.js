import { c as create_ssr_component, v as validate_component, i as add_attribute, e as escape, o as each } from "../../_app/immutable/chunks/index-581edbff.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-adf7b2fc.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-90e348d9.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-f5732ac4.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-0d1592aa.js";
import { T as Table } from "../../_app/immutable/chunks/Table-c5072c61.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-64085b64.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-7cac6071.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-ab4c1927.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-5bfda8b2.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { ModbusTCP_Slave_ConfigChangedLog, ModbusTCP_Master_ConfigChangedLog, ModbusRTU_Slave_ConfigChangedLog, ModbusRTU_Master_ConfigChangedLog, ChangedModbusConfig, modbusConfig, portConnectionConfig, PortConnection_LAN_ConfigChangedLog, PortConnection_COM_ConfigChangedLog, PortConnection_Transparent_ConfigChangedLog, ChangedPortConnectionConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-100761d4.js";
import "../../_app/immutable/chunks/Frame-9b664c22.js";
import "../../_app/immutable/chunks/Label-e9931984.js";
import "../../_app/immutable/chunks/CloseButton-60d81157.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const PortCV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_port_connection_data = {};
  let saved_changed_port_connection_data = {};
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
    saved_changed_port_connection_data = val;
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

  ${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "COM" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">General
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
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Used By`;
                                }
                              })}   
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Role`;
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
                                return `<form action="${"#"}"><label><input type="${"checkbox"}"${add_attribute("checked", changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].enable, 1)}>
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>

      <td class="${"pl-5 pt-5"}">${escape(changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].serialProfile)}</td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].interface
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].interface = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `RS 485`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Baudrate</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].baudrate, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Parity</p></td>


    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity = $$value;
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
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity = $$value;
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
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].parity = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Odd`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Data Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].dataBits, 0)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Stop Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].stopBits, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Used By</p></td>


    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Transparent`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 1,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Modbus`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 2,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `DNP3`;
                                    }
                                  }
                                )}</div></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Role</p></td>


    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby == 0 ? `None` : `${changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby == 1 ? `${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Master`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 1,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Slave`;
                                    }
                                  }
                                )}` : `${changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].usedby == 2 ? `${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Master`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 1,
                                    group: changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_port_connection_data.config.fieldManagement_portConnection_com[modify_com_index].role = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Outstation`;
                                    }
                                  }
                                )}` : ``}`}`}</div></td></tr>


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
                    return `<span slot="${"header"}" class="${"pl-4"}">TCP Transparent
    </span>`;
                  },
                  default: () => {
                    return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose Profile ...</option>${each(saved_changed_port_connection_data.config.fieldManagement_portConnection_com, (TargetProfile, index) => {
                      return `${TargetProfile.usedby == 0 ? `<option${add_attribute("value", index, 0)}>${escape(TargetProfile.serialProfile)}</option>` : ``}`;
                    })}</select>

<p class="${"pt-4"}"></p>

${``}`;
                  }
                })}`;
              }
            })}`;
          }
        })}


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Simulator" }, {}, {
          default: () => {
            return `<table><tr><td class="${"pl-10"}"><div class="${"flex gap-4"}">${validate_component(Button, "Button").$$render($$result, { pill: true }, {}, {
              default: () => {
                return `Test DI`;
              }
            })}

   <p class="${"pl-2 pt-2"}">${``}</p></div></td></tr>

<p class="${"pt-10"}"></p>

<tr><td class="${"pl-10"}"><div class="${"flex gap-4"}">${validate_component(Button, "Button").$$render($$result, { pill: true }, {}, {
              default: () => {
                return `Test DO High`;
              }
            })}
   
<p class="${"pl-2 pt-2"}">${``}</p></div></td></tr>

<p class="${"pt-10"}"></p>

<tr><td class="${"pl-10"}"><div class="${"flex gap-4"}">${validate_component(Button, "Button").$$render($$result, { pill: true }, {}, {
              default: () => {
                return `Test DO Low`;
              }
            })}
   <p class="${"pl-2 pt-2"}">${``}</p></div></td></tr></table>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  PortCV2 as default
};
