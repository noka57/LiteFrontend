import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-4327f458.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-7daba062.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-018e0198.js";
import { T as Table } from "../../_app/immutable/chunks/Table-8c701dfb.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-890eeeae.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-bb920ec2.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-75ee61b0.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-d05d7350.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { natConfig, NAT_LoopBack_ConfigChangedLog, NAT_VC_ConfigChangedLog, NAT_VS_ConfigChangedLog, NAT_Dmz_ConfigChangedLog, ChangedNATConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Label-40d01e23.js";
import "../../_app/immutable/chunks/Frame-82afdce4.js";
import "../../_app/immutable/chunks/CloseButton-9e3e1305.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
const nat_svelte_svelte_type_style_lang = "";
const css = {
  code: '.strikeout.svelte-1gf39g8{text-decoration:line-through;color:#999;position:relative}.strikeout.svelte-1gf39g8:before{content:"";position:absolute;top:50%;left:0;right:0;border-bottom:1px solid #111;transform:translateY(-50%)}.strikeout.svelte-1gf39g8:after{content:"\\00B7";font-size:1px;position:absolute;bottom:0;left:0;right:0;text-align:center}',
  map: null
};
const Nat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModalPFW = false;
  let newformModalPFW = false;
  let new_pfw_index;
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
  let newPFW_Item = [
    {
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
      "enable": false,
      "delete": false,
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
  $$result.css.add(css);
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
                        return `Host IP`;
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
  
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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
                        open: newformModalPFW
                      },
                      {
                        open: ($$value) => {
                          newformModalPFW = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", newPFW_Item[new_pfw_index].enable, 1)}>
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">WAN Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].wanIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].wanIf = $$value;
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
                              group: newPFW_Item[new_pfw_index].wanIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].wanIf = $$value;
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
                              group: newPFW_Item[new_pfw_index].wanIf
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].wanIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Cellular WAN`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Host IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].serverIp, 0)}></td></tr>



 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "TCP",
                              group: newPFW_Item[new_pfw_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].protocol = $$value;
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
                              group: newPFW_Item[new_pfw_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].protocol = $$value;
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
                              group: newPFW_Item[new_pfw_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].protocol = $$value;
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
                              group: newPFW_Item[new_pfw_index].pubPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].pubPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].pubPortRange.start, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].pubPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].pubPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].pubPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].pubPortRange.end, 0)}></div></td></tr>



 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Private Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newPFW_Item[new_pfw_index].privPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].privPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].privPortRange.start, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newPFW_Item[new_pfw_index].privPort
                            },
                            {
                              group: ($$value) => {
                                newPFW_Item[new_pfw_index].privPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].privPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPFW_Item[new_pfw_index].privPortRange.end, 0)}></div></td></tr>


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
                        open: formModalPFW
                      },
                      {
                        open: ($$value) => {
                          formModalPFW = $$value;
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
        })}

 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "DMZ" }, {}, {
          default: () => {
            return `<label>${``}
  Enable DMZ
</label>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


<tr>${``}</tr>


      <tr><td></td>
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
  } while (!$$settled);
  return $$rendered;
});
export {
  Nat as default
};
