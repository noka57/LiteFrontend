import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../_app/immutable/chunks/index-e6faea8a.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-2dfe5133.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-43be47cb.js";
import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-fdd28fa6.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-a2501ae1.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-a5759ef8.js";
import "../../_app/immutable/chunks/Frame-35d083b4.js";
import "../../_app/immutable/chunks/index-245f18af.js";
const Firewall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let IPFilterType = "BL";
  let formModal = false;
  let MACFilterType = "BL";
  let formModal2 = false;
  let FIfce = "Any";
  let TIfce = "Any";
  let sourceIP = "";
  let DIP = "";
  let proto = "Any";
  let SingleDP = "";
  let RangeDPF = "";
  let RangeDPE = "";
  let dport = "Sport";
  let MAC = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table><tr><label><input type="${"checkbox"}" ${""}>
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

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "BL", group: IPFilterType },
              {
                group: ($$value) => {
                  IPFilterType = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Black List`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "WL", group: IPFilterType },
              {
                group: ($$value) => {
                  IPFilterType = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `White List`;
                }
              }
            )}</div></td></tr></table>
<p class="${"mt-10"}"></p>
${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Destination Port`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>


${validate_component(Modal, "Modal").$$render(
                              $$result,
                              {
                                autoclose: false,
                                size: "lg",
                                class: "w-full",
                                open: formModal
                              },
                              {
                                open: ($$value) => {
                                  formModal = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `<form action="${"#"}"><label><input class="${"center"}" type="${"checkbox"}" ${""}>
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">From Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "Any", group: FIfce },
                                    {
                                      group: ($$value) => {
                                        FIfce = $$value;
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
                                    { value: "Lan", group: FIfce },
                                    {
                                      group: ($$value) => {
                                        FIfce = $$value;
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
                                    { value: "Cel", group: FIfce },
                                    {
                                      group: ($$value) => {
                                        FIfce = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Cellular WAN-1`;
                                      }
                                    }
                                  )}
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "Eth", group: FIfce },
                                    {
                                      group: ($$value) => {
                                        FIfce = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Ethernet WAN`;
                                      }
                                    }
                                  )}</div></td></tr>




 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">To Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "Any", group: TIfce },
                                    {
                                      group: ($$value) => {
                                        TIfce = $$value;
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
                                    { value: "Lan", group: TIfce },
                                    {
                                      group: ($$value) => {
                                        TIfce = $$value;
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
                                    { value: "Cel", group: TIfce },
                                    {
                                      group: ($$value) => {
                                        TIfce = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Cellular WAN-1`;
                                      }
                                    }
                                  )}
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "Eth", group: TIfce },
                                    {
                                      group: ($$value) => {
                                        TIfce = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Ethernet WAN`;
                                      }
                                    }
                                  )}</div></td></tr>





<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Source IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", sourceIP, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Destination IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", DIP, 0)}></td></tr>

 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "Any", group: proto },
                                    {
                                      group: ($$value) => {
                                        proto = $$value;
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
                                    { value: "TC", group: proto },
                                    {
                                      group: ($$value) => {
                                        proto = $$value;
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
                                    { value: "UD", group: proto },
                                    {
                                      group: ($$value) => {
                                        proto = $$value;
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
                                    { value: "SPort", group: dport },
                                    {
                                      group: ($$value) => {
                                        dport = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Single Port`;
                                      }
                                    }
                                  )}<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", SingleDP, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "PortR", group: dport },
                                    {
                                      group: ($$value) => {
                                        dport = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Port Range`;
                                      }
                                    }
                                  )}<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", RangeDPF, 0)}><p class="${"pt-2"}">-</p><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", RangeDPE, 0)}></div></td></tr>


      <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                    default: () => {
                                      return `Add`;
                                    }
                                  })}</td></tr></table></form>`;
                                }
                              }
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
                  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
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
                    })}</td></tr>`;
                  }
                })}`;
              }
            })}`;
          }
        })}


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "MAC Filter" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MAC Filter Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "BL", group: MACFilterType },
              {
                group: ($$value) => {
                  MACFilterType = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Black List`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "WL", group: MACFilterType },
              {
                group: ($$value) => {
                  MACFilterType = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `White List`;
                }
              }
            )}</div></td></tr></table>
<p class="${"mt-10"}"></p>
${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                      default: () => {
                        return `MAC Address`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>


${validate_component(Modal, "Modal").$$render(
                              $$result,
                              {
                                autoclose: false,
                                size: "lg",
                                class: "w-full",
                                open: formModal2
                              },
                              {
                                open: ($$value) => {
                                  formModal2 = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `<form action="${"#"}"><label><input class="${"center"}" type="${"checkbox"}" ${""}>
  Enable
</label>

<p class="${"mt-10"}"></p>


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MAC Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MAC, 0)}></td></tr>

        <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                    default: () => {
                                      return `Add`;
                                    }
                                  })}</td></tr></table></form>`;
                                }
                              }
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
                  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}



    <tr><td></td>
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
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Firewall as default
};
