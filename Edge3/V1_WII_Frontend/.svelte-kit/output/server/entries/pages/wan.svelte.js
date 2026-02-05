import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-54377ec4.js";
import { A as Accordion } from "../../_app/immutable/chunks/Accordion-c8c12650.js";
import { A as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-ab074a69.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { T as Table } from "../../_app/immutable/chunks/Table-a510ae4f.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-20bd2092.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-db67647d.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { wanConfig, ChangedWANConfig, LastestReadableWANConfig, WAN_PORT_SWITCH_ConfigChangedLog, WAN_CWAN1_BASIC_ConfigChangedLog, WAN_CWAN1_Advanced_ConfigChangedLog, WAN_CWAN1_SimPolicy_ConfigChangedLog, WAN_CWAN1_GLink_ConfigChangedLog, WAN_EWAN1_Basic_ConfigChangedLog, WAN_EWAN1_EWLAP_ConfigChangedLog, WAN_RedundancyPolicy_ConfigChangedLog, WAN_FareSavingPolicy_ConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
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
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Port Switch" }, {}, {
          default: () => {
            return `${``}`;
          }
        })}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Ethernet WAN" }, {}, {
          default: () => {
            return `${saved_changed_wan_data.config.networking_wan_port_switch == 0 ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">LAN/WAN port is LAN now. Please go to port switch page to change it.

   </caption>`;
              }
            })}` : `${saved_changed_wan_data.config.networking_wan_port_switch == 1 ? `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="header" class="pl-4">General Status</div>`;
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
                    return `<div slot="header" class="pl-4">Basic Settings</div>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="pl-40 pt-1 text-lg font-light text-right">Web Access</p></td>

  <td class="pl-5"><div class="flex gap-4">${``}</div></td></tr>

  <tr><td><p class="pl-40 pt-5 text-lg font-light text-right">Connection Type</p></td>


  <td class="pl-5 pt-5"><div class="flex gap-4">${``}</div></td></tr>
${``}

    <tr><td></td>
    <td></td>
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}
${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="header" class="pl-4">WAN Guarantie Link</div>`;
                  },
                  default: () => {
                    return `<table><tr><td class="w-60"><p class="pl-20 pt-5 text-lg font-light text-right">Guarantie Link
</p></td>
    <td class="pl-5 pt-5">${``}</td></tr>
${``}

    <tr><td></td>
    <td></td>
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`}`;
              }
            })}` : ``}`}`;
          }
        })}


${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Wan as default
};
