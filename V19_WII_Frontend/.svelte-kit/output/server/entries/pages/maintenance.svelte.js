import { c as create_ssr_component, v as validate_component, e as escape, i as add_attribute } from "../../_app/immutable/chunks/index-581edbff.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-adf7b2fc.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-90e348d9.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-f5732ac4.js";
import { T as Toggle } from "../../_app/immutable/chunks/Toggle-2edcf18a.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-0d1592aa.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-08b89a3a.js";
import { T as Table } from "../../_app/immutable/chunks/Table-c5072c61.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-ab4c1927.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-5bfda8b2.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { dashboadData, maintenanceConfig, MaintenanceConfigChangedLog, ChangedMaintenanceConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-100761d4.js";
import "../../_app/immutable/chunks/Frame-9b664c22.js";
import "../../_app/immutable/chunks/Label-e9931984.js";
import "../../_app/immutable/chunks/CloseButton-60d81157.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Maintenance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_maintenance_data = {};
  let defaultModal = false;
  let localUpdateKeepConfig = 1;
  let fileFwName = "No file chosen";
  let PingType = 0;
  let PingHost = "";
  let TracerouteType = 0;
  let TracerouteHost = "";
  let NSLookupHost = "";
  let system_log = "";
  sessionidG.subscribe((val) => {
  });
  dashboadData.subscribe((val) => {
  });
  maintenanceConfig.subscribe((val) => {
  });
  MaintenanceConfigChangedLog.subscribe((val) => {
  });
  ChangedMaintenanceConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Firmware" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Local
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Update Local Firmware</p></td>
<td class="${"pl-5 pt-5"}" colspan="${"2"}"><label for="${"FwrUpload"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg"}">Choose File</label>
<input type="${"file"}" id="${"FwrUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}" style="${"display: none;"}">
<span class="${"pl-4"}">${escape(fileFwName)}</span></td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Update`;
                      }
                    })}</td>

<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>

<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Keep Current Configuration</p></td>
    <td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: localUpdateKeepConfig },
                      {
                        checked: ($$value) => {
                          localUpdateKeepConfig = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr></table>`;
                  }
                })}



  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">EW-FOTA
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Enable EW-FOTA</p></td>
<td class="${"pl-5 pt-5"}">${``}</td></tr>

<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Keep Current Configuration</p></td>
    <td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        checked: changed_maintenance_data.config.system_maintenance.fotaKeepConfig
                      },
                      {
                        checked: ($$value) => {
                          changed_maintenance_data.config.system_maintenance.fotaKeepConfig = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>


 <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">EW-FOTA Time Configuration</p></td>
<td class="${"pl-5 pt-5 w-10"}">Weekday
</td>

<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>



 <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}"></p></td>
<td class="${"pl-5 pt-5 w-10"}">Hour
</td>

<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>

<tr class="${"pt-10"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>

      <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td>
    <td></td>
    <td></td></tr></table>`;
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
                open: defaultModal
              },
              {
                open: ($$value) => {
                  defaultModal = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${``}

<table>${`<tr>${`<td>${validate_component(Spinner, "Spinner").$$render($$result, { size: 16 }, {}, {})}</td>
<td><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Verifying firmware now ....
</p></td>`}</tr>`}</table>`;
                }
              }
            )}`;
          }
        })}

 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Diagnostic" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Ping
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 0, group: PingType },
                      {
                        group: ($$value) => {
                          PingType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv4`;
                        }
                      }
                    )}
      ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 1, group: PingType },
                      {
                        group: ($$value) => {
                          PingType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv6`;
                        }
                      }
                    )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", PingHost, 0)}></td></tr>

<tr><td></td>
<td></td>
<td></td>
<td></td>
<td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Execute`;
                      }
                    })}</td></tr></table>

<p class="${"pt-10"}"></p>
${validate_component(Table, "Table").$$render($$result, { class: "text-gray-900" }, {}, {
                      default: () => {
                        return `${`${``}`}`;
                      }
                    })}`;
                  }
                })}  

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Traceroute
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 0, group: TracerouteType },
                      {
                        group: ($$value) => {
                          TracerouteType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv4`;
                        }
                      }
                    )}
      ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 1, group: TracerouteType },
                      {
                        group: ($$value) => {
                          TracerouteType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv6`;
                        }
                      }
                    )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", TracerouteHost, 0)}></td></tr>

<tr><td></td>
<td></td>
<td></td>
<td></td>
<td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Execute`;
                      }
                    })}</td></tr></table>

<p class="${"pt-10"}"></p>

${validate_component(Table, "Table").$$render($$result, { class: "text-gray-900" }, {}, {
                      default: () => {
                        return `${`${``}`}`;
                      }
                    })}`;
                  }
                })}  


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Nslookup
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NSLookupHost, 0)}></td></tr>

<tr><td></td>
<td></td>
<td></td>
<td></td>
<td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Execute`;
                      }
                    })}</td></tr></table>

<p class="${"pt-10"}"></p>

${validate_component(Table, "Table").$$render($$result, { class: "text-gray-900" }, {}, {
                      default: () => {
                        return `${`${``}`}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Log Viewer" }, {}, {
          default: () => {
            return `<pre style="${"white-space: pre-wrap;"}">${escape(system_log)}</pre>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Maintenance as default
};
