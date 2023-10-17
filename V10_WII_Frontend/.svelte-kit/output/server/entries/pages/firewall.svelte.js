import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-53df767c.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-27f0cb1b.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { firewallConfig, Firewall_General_ConfigChangedLog, Firewall_IPFilter_ConfigChangedLog, Firewall_MACFilter_ConfigChangedLog, ChangedFirewallConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Firewall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_firewall_data = {};
  let macfilter_current_index;
  let new_ipfilter_index;
  let new_macfilter_index;
  let newformModalIP = false;
  let newformModalMAC = false;
  let formModalIP = false;
  let formModalMAC = false;
  sessionidG.subscribe((val) => {
  });
  firewallConfig.subscribe((val) => {
  });
  Firewall_General_ConfigChangedLog.subscribe((val) => {
  });
  Firewall_IPFilter_ConfigChangedLog.subscribe((val) => {
  });
  Firewall_MACFilter_ConfigChangedLog.subscribe((val) => {
  });
  ChangedFirewallConfig.subscribe((val) => {
  });
  let newIPF_Item = [
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    },
    {
      "enable": 0,
      "fromIf": 0,
      "toIf": 0,
      "srcIp": "",
      "dstIp": "",
      "protocol": "TCP",
      "dstPort": 0,
      "dstPortRange": { "start": 22222, "end": 22225 }
    }
  ];
  let newMAF_Item = [
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    },
    {
      "enable": 0,
      "macAddr": "00:11:22:33:44:55"
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table><tr><label>${``}
  Enable Filter
</label></tr>

    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "IP Filter" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">IP Filter Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr></table>
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
                        return `From Interface`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `To Interface`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Source IP`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Destination IP`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Protocol`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-22" }, {}, {
                      default: () => {
                        return `Destination Port`;
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
                        open: newformModalIP
                      },
                      {
                        open: ($$value) => {
                          newformModalIP = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label><input class="${"center"}" type="${"checkbox"}" ${!!newIPF_Item[new_ipfilter_index].enable ? "checked" : ""}>
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">From Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newIPF_Item[new_ipfilter_index].fromIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].fromIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newIPF_Item[new_ipfilter_index].fromIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].fromIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `LAN`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newIPF_Item[new_ipfilter_index].fromIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].fromIf = $$value;
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
                              value: 3,
                              group: newIPF_Item[new_ipfilter_index].fromIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].fromIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Cellular WAN-1`;
                              }
                            }
                          )}</div></td></tr>




 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">To Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newIPF_Item[new_ipfilter_index].toIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].toIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newIPF_Item[new_ipfilter_index].toIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].toIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `LAN`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 2,
                              group: newIPF_Item[new_ipfilter_index].toIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].toIf = $$value;
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
                              value: 3,
                              group: newIPF_Item[new_ipfilter_index].toIf
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].toIf = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Cellular WAN-1`;
                              }
                            }
                          )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Source IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newIPF_Item[new_ipfilter_index].srcIp, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Destination IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newIPF_Item[new_ipfilter_index].dstIp, 0)}></td></tr>

 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "Any",
                              group: newIPF_Item[new_ipfilter_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Any`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "TCP",
                              group: newIPF_Item[new_ipfilter_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].protocol = $$value;
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
                              group: newIPF_Item[new_ipfilter_index].protocol
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].protocol = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `UDP`;
                              }
                            }
                          )}</div></td></tr>

 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Destination Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: newIPF_Item[new_ipfilter_index].dstPort
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].dstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Single Port`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newIPF_Item[new_ipfilter_index].dstPortRange.start, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: newIPF_Item[new_ipfilter_index].dstPort
                            },
                            {
                              group: ($$value) => {
                                newIPF_Item[new_ipfilter_index].dstPort = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Port Range`;
                              }
                            }
                          )}<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newIPF_Item[new_ipfilter_index].dstPortRange.start, 0)}><p class="${"pt-2"}">-</p><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newIPF_Item[new_ipfilter_index].dstPortRange.end, 0)}></div></td></tr>


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
                        open: formModalIP
                      },
                      {
                        open: ($$value) => {
                          formModalIP = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">From Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>




 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">To Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>

<tr>${``}</tr>

<tr>${``}</tr>

 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>





 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Destination Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


      <tr><td></td>
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


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "MAC Filter" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MAC Filter Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${``}</div></td></tr></table>
<p class="${"mt-10"}"></p>
${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Enable`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `No`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                      default: () => {
                        return `MAC Address`;
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
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {})}`;
                      }
                    })}

    <tr><td></td>
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
                        size: "sm",
                        class: "w-full",
                        autoclose: true,
                        open: newformModalMAC
                      },
                      {
                        open: ($$value) => {
                          newformModalMAC = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label><input class="${"center"}" type="${"checkbox"}" ${!!newMAF_Item[new_macfilter_index].enable ? "checked" : ""}>
  Enable
</label>

<p class="${"mt-10"}"></p>


<table><tr><td class="${"pl-4"}"><p class="${"pt-4 text-lg font-light text-right"}">MAC Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newMAF_Item[new_macfilter_index].macAddr, 0)}></td></tr>

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
                        size: "sm",
                        class: "w-full",
                        permanent: true,
                        open: formModalMAC
                      },
                      {
                        open: ($$value) => {
                          formModalMAC = $$value;
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


<table><tr><td class="${"pl-4"}"><p class="${"pt-4 text-lg font-light text-right"}">MAC Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_firewall_data.config.networking_firewall_macFilter.list[macfilter_current_index].macAddr, 0)}></td></tr>

        <tr><td></td>
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
  Firewall as default
};
