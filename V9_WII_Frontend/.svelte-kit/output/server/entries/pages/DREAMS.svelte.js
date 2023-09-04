import { c as create_ssr_component, v as validate_component, e as escape, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { T as Table, a as TableBody } from "../../_app/immutable/chunks/TableBody-1069dc1c.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-27f0cb1b.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { dreamsConfig, Dreams_Serial_ConfigChangedLog, Dreams_Modbus_S0_ConfigChangedLog, Dreams_Modbus_S1_ConfigChangedLog, Dreams_Modbus_Option_ConfigChangedLog, Dreams_DNP3_ConfigChangedLog, Dreams_Restful_ConfigChangedLog, Dreams_General_ConfigChangedLog, ChangedDreamsConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const DREAMS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModalSerial = false;
  let formModalModbus = false;
  let serialindex = 0;
  let modbusindex = 0;
  let changed_dreams_data = {};
  sessionidG.subscribe((val) => {
  });
  dreamsConfig.subscribe((val) => {
  });
  Dreams_Serial_ConfigChangedLog.subscribe((val) => {
  });
  Dreams_Modbus_S0_ConfigChangedLog.subscribe((val) => {
  });
  Dreams_Modbus_S1_ConfigChangedLog.subscribe((val) => {
  });
  Dreams_Modbus_Option_ConfigChangedLog.subscribe((val) => {
  });
  Dreams_DNP3_ConfigChangedLog.subscribe((val) => {
  });
  Dreams_Restful_ConfigChangedLog.subscribe((val) => {
  });
  Dreams_General_ConfigChangedLog.subscribe((val) => {
  });
  ChangedDreamsConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<label>${``}
  Enable DREAMS
</label>


<p class="${"mt-10"}"></p>

${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Serial" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Serial Port`;
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Data Bits`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-22" }, {}, {
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr>




${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "md",
                        class: "w-full",
                        permanent: true,
                        open: formModalSerial
                      },
                      {
                        open: ($$value) => {
                          formModalSerial = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td><td class="${"pl-5 pt-5"}">${escape(changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].name)}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].interface
                            },
                            {
                              group: ($$value) => {
                                changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].interface = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `RS 485`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].interface
                            },
                            {
                              group: ($$value) => {
                                changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].interface = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `RS 232`;
                              }
                            }
                          )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Baudrate</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].baudrate, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Parity</p></td>


    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity
                            },
                            {
                              group: ($$value) => {
                                changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity = $$value;
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
                              group: changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity
                            },
                            {
                              group: ($$value) => {
                                changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity = $$value;
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
                              group: changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity
                            },
                            {
                              group: ($$value) => {
                                changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].parity = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Odd`;
                              }
                            }
                          )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].dataBit, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Stop Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_serial.list[serialindex].stopBit, 0)}></td></tr>

      <tr><td></td>
    <td></td>
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
                })}`;
              }
            })}`;
          }
        })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Modbus" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Serial Port 0</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Address(DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Display`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}


 ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Serial Port 1</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Address(DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Display`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}

 ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Option</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Address(DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Display`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}


 ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Value List</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Value`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}

${validate_component(Modal, "Modal").$$render(
                  $$result,
                  {
                    size: "md",
                    class: "w-full",
                    permanent: true,
                    open: formModalModbus
                  },
                  {
                    open: ($$value) => {
                      formModalModbus = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `<form action="${"#"}"><button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>
${`<td class="${"pl-5 pt-5"}">${escape(changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].name)}</td>`}</tr>
<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}">${`<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].slaveId, 0)}>`}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${`${validate_component(Radio, "Radio").$$render(
                        $$result,
                        {
                          value: 0,
                          group: changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].pointType
                        },
                        {
                          group: ($$value) => {
                            changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].pointType = $$value;
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
                          value: 1,
                          group: changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].pointType
                        },
                        {
                          group: ($$value) => {
                            changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].pointType = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Holding Register`;
                          }
                        }
                      )}`}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}">${`<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].address, 0)}>`}</td></tr>


  <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}">${`<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].quantity, 0)}>`}</td></tr>


  <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Display</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"gap-4"}">${`${validate_component(Radio, "Radio").$$render(
                        $$result,
                        {
                          value: 0,
                          group: changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display
                        },
                        {
                          group: ($$value) => {
                            changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display = $$value;
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
                          group: changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display
                        },
                        {
                          group: ($$value) => {
                            changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display = $$value;
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
                          group: changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display
                        },
                        {
                          group: ($$value) => {
                            changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display = $$value;
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
                          group: changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display
                        },
                        {
                          group: ($$value) => {
                            changed_dreams_data.config.service_dreams.service_dreams_modbus.serialPort0.list[modbusindex].display = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `Little Endian Byte Swap`;
                          }
                        }
                      )}`}</div></td></tr>


      <tr><td></td>
    <td></td>
        <td></td>
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
            })}`;
          }
        })}

    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "DNP3" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">Listen Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_dnp3.listenPort, 0)}></td></tr>


   <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}

    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Restful" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">DREAMS Email</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_restful.account, 0)}></td></tr>


    <tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">DREAMS Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"password"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_dreams_data.config.service_dreams.service_dreams_restful.password, 0)}></td></tr>

   <tr><td></td>
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
  } while (!$$settled);
  return $$rendered;
});
export {
  DREAMS as default
};
