import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
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
import { natConfig, NAT_LoopBack_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_Dmz_ConfigChangedLog, ChangedNATConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Nat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModalVS = false;
  let newformModalVS = false;
  let new_vs_index;
  sessionidG.subscribe((val) => {
  });
  natConfig.subscribe((val) => {
  });
  NAT_LoopBack_ConfigChangedLog.subscribe((val) => {
  });
  NAT_VC_ConfigChangedLog.subscribe((val) => {
  });
  NAT_VS_ConfigChangedLog.subscribe((val) => {
  });
  NAT_Dmz_ConfigChangedLog.subscribe((val) => {
  });
  ChangedNATConfig.subscribe((val) => {
  });
  let newVS_Item = [
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    },
    {
      "enable": 0,
      "wanIf": 0,
      "serverIp": "",
      "sourceIp": "",
      "protocol": "TCP",
      "pubPort": 0,
      "pubPortRange": { "start": 0, "end": 0 },
      "privPort": 0,
      "privPortRange": { "start": 0, "end": 0 }
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Port Forwarding" }, {}, {
          default: () => {
            return `<label>${``}
  Enable Port Forwarding
</label>

<p class="${"mt-10"}"></p>
  ${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
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
                        return `WAN Interface`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Server IP`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Protocol`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Public Port`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-22" }, {}, {
                      default: () => {
                        return `Private Port`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${``}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}
  
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-22" }, {}, {})}`;
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

    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "lg",
                        class: "w-full",
                        autoclose: true,
                        open: newformModalVS
                      },
                      {
                        open: ($$value) => {
                          newformModalVS = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label><input class="${"center"}" type="${"checkbox"}" ${!!newVS_Item[new_vs_index].enable ? "checked" : ""}>
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">WAN Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newVS_Item[new_vs_index].wanIf
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].wanIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `All`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newVS_Item[new_vs_index].wanIf
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].wanIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Ethernet WAN`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newVS_Item[new_vs_index].wanIf
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].wanIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Cellular WAN-1`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].serverIp, 0)}></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Source IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].sourceIp, 0)}></td></tr>


 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "TCP",
                              group: newVS_Item[new_vs_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `TCP`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "UDP",
                              group: newVS_Item[new_vs_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `UDP`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "TCPUDP",
                              group: newVS_Item[new_vs_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `TCP &amp; UDP`;
                              }
                            }
                          )}</div></td></tr>



 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Public Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newVS_Item[new_vs_index].pubPort
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].pubPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].pubPortRange.start, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newVS_Item[new_vs_index].pubPort
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].pubPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].pubPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].pubPortRange.end, 0)}></div></td></tr>



 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Private Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newVS_Item[new_vs_index].privPort
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].privPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].privPortRange.start, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newVS_Item[new_vs_index].privPort
                            },
                            {
                              group: ($$value) => {
                                newVS_Item[new_vs_index].privPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].privPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newVS_Item[new_vs_index].privPortRange.end, 0)}></div></td></tr>


      <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                        open: formModalVS
                      },
                      {
                        open: ($$value) => {
                          formModalVS = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">WAN Interface</p></td>

  <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


<tr>${``}</tr>




 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>



 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Public Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>



 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Private Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


      <tr><td></td>
    <td></td>

    <td></td>
    <td></td>


    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Nat as default
};
