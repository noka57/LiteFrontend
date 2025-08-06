import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { L as Label } from "../../_app/immutable/chunks/Label-a273673c.js";
import { T as Textarea } from "../../_app/immutable/chunks/Textarea-acf16d8f.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { wanConfig, ChangedWANConfig, LastestReadableWANConfig, WAN_PORT_SWITCH_ConfigChangedLog, WAN_CWAN1_BASIC_ConfigChangedLog, WAN_CWAN1_Advanced_ConfigChangedLog, WAN_CWAN1_SimPolicy_ConfigChangedLog, WAN_CWAN1_GLink_ConfigChangedLog, WAN_EWAN1_Basic_ConfigChangedLog, WAN_EWAN1_EWLAP_ConfigChangedLog, WAN_RedundancyPolicy_ConfigChangedLog, WAN_FareSavingPolicy_ConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Wan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let saved_changed_wan_data = {};
  sessionidG.subscribe((val) => {
  });
  wanConfig.subscribe((val) => {
  });
  ChangedWANConfig.subscribe((val) => {
    saved_changed_wan_data = val;
  });
  LastestReadableWANConfig.subscribe((val) => {
  });
  WAN_PORT_SWITCH_ConfigChangedLog.subscribe((val) => {
  });
  WAN_CWAN1_BASIC_ConfigChangedLog.subscribe((val) => {
  });
  WAN_CWAN1_Advanced_ConfigChangedLog.subscribe((val) => {
  });
  WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe((val) => {
  });
  WAN_CWAN1_GLink_ConfigChangedLog.subscribe((val) => {
  });
  WAN_EWAN1_Basic_ConfigChangedLog.subscribe((val) => {
  });
  WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe((val) => {
  });
  WAN_RedundancyPolicy_ConfigChangedLog.subscribe((val) => {
  });
  WAN_FareSavingPolicy_ConfigChangedLog.subscribe((val) => {
  });
  let ATCommand = "";
  let ATResult = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${`${validate_component(TabItem, "TabItem").$$render($$result, { title: "General Status" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${``}`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${``}`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `IP Address`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Gateway`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `DNS 1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `DNS 2`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `SIM Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Role`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Error Reason`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                          $$result,
                          {
                            class: "text-center bg-green-400",
                            colspan: "3"
                          },
                          {},
                          {
                            default: () => {
                              return `Cellular Status`;
                            }
                          }
                        )}`;
                      }
                    })}



      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Modem Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `SIM Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Active SIM`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `RSSI/RSRP/RSRQ/SINR`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Registered Mobile Operator`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Connect State`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Connected Network Type`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Connected Band`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Modem Vendor`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}



      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Modem Firmware Version`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `IMSI`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}

      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `MCC`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `MNC`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CellID`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}

      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `PCI`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}

      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `TAC`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`}

  ${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Cellular WAN" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">General Status</div>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Index`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Modem Status`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Modem Model`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `IMSI`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Registration`;
                              }
                            })}`;
                          }
                        })}
 
  <tr class="${"border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"}"><td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">1</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td></tr>

${``}`;
                      }
                    })}`;
                  }
                })}`}
  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Basic Settings</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">PIN</p></td>
    <td class="${"pl-5"}">${``}</td></tr>


<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Web Access</p></td>

  <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>

    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-center"}">Automatic APN Selection</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>
${``}
    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}
${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Advanced Settings</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Mode</p></td>  
    <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


    <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Extra AT Command </p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>

    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Band Lock</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>
${``}
        <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`}

   ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">SIM Policy</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Mode</p></td>
 <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td>
    <td></td>
        <td></td></tr>





            <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}

    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Cellular Guarantie Link</span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Guarantie Link</p></td><td class="${"pl-5 pt-5"}">${``}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td></tr>
${``}
    <tr class="${"pt-5"}"><td></td>
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
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">AT Debug</span>`;
                  },
                  default: () => {
                    return `<div class="${"mb-6"}">${validate_component(Label, "Label").$$render(
                      $$result,
                      {
                        for: "default-input",
                        class: "block mb-2"
                      },
                      {},
                      {
                        default: () => {
                          return `Command`;
                        }
                      }
                    )}
<table><tr><td>${`<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", ATCommand, 0)}>`}</td>
${``}</tr></table></div>


${validate_component(Label, "Label").$$render($$result, { for: "textarea-id", class: "mb-2" }, {}, {
                      default: () => {
                        return `Result`;
                      }
                    })}
${validate_component(Textarea, "Textarea").$$render(
                      $$result,
                      {
                        id: "textarea-id",
                        rows: "4",
                        name: "message",
                        value: ATResult
                      },
                      {
                        value: ($$value) => {
                          ATResult = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}
<div class="${"flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Send`;
                      }
                    })}</div>`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">4G RSSI Log</span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Download RSSI log</p></td>

<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Download`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Port Switch" }, {}, {
          default: () => {
            return `${``}`;
          }
        })}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Ethernet WAN" }, {}, {
          default: () => {
            return `${saved_changed_wan_data.config.networking_wan_port_switch == 0 ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">LAN/WAN port is LAN now. Please go to port switch page to change it.

   </caption>`;
              }
            })}` : `${saved_changed_wan_data.config.networking_wan_port_switch == 1 ? `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">General Status</div>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Interface`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Connection Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Network Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `IP Address`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Netmask`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Gateway`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `DNS`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `MAC`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Connection Status`;
                              }
                            })}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}/${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">Basic Settings</div>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Web Access</p></td>

  <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>

  <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Connection Type</p></td>


  <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>
${``}

    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}
${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">WAN Guarantie Link</div>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Guarantie Link
</p></td>
    <td class="${"pl-5 pt-5"}">${``}</td></tr>
${``}

    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`}`;
              }
            })}` : ``}`}`;
          }
        })}


${`${validate_component(TabItem, "TabItem").$$render($$result, { title: "WAN Redundancy Policy" }, {}, {
          default: () => {
            return `${saved_changed_wan_data.config.networking_wan_port_switch == 0 ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">LAN/WAN port is LAN now. Please go to port switch page to change it.

   </caption>`;
              }
            })}` : `${saved_changed_wan_data.config.networking_wan_port_switch == 1 ? `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Operation Mode</p></td>

      <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>
${``}

${``}


${``}


${``}

${``}

    <tr><td></td>
        <td><table>${``}


${``}

${``}</table></td>
    </tr><tr></tr><tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>` : ``}`}`;
          }
        })}


${``}`}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Wan as default
};
