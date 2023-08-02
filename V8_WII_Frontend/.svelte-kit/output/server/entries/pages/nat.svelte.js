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
const Nat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModal = false;
  let wanIfce = "All";
  let sevIP = "";
  let sourceIP = "";
  let proto = "TC";
  let pubport = "SPort";
  let SinglePubP = "";
  let RangePubPF = "";
  let RangePubPE = "";
  let priport = "SPort";
  let SinglePriP = "";
  let RangePriPF = "";
  let RangePriPE = "";
  let formModal2 = false;
  let GIP = "";
  let LIP = "";
  let DMZInfce = "All";
  let DMZHost = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Loopback" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">NAT Loopback</p></td>

    <td class="${"pl-5"}"><div class="${"flex gap-4"}"><label><input type="${"checkbox"}" ${""}>
  Enable
</label></div></td></tr>

    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Virtual Server" }, {}, {
          default: () => {
            return `<label><input type="${"checkbox"}" ${""}>
  Enable Virtual Server
</label>

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
                        return `Source IP`;
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Private Port`;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">WAN Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "All", group: wanIfce },
                                    {
                                      group: ($$value) => {
                                        wanIfce = $$value;
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
                                    { value: "Cel", group: wanIfce },
                                    {
                                      group: ($$value) => {
                                        wanIfce = $$value;
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
                                    { value: "Eth", group: wanIfce },
                                    {
                                      group: ($$value) => {
                                        wanIfce = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Ethernet WAN`;
                                      }
                                    }
                                  )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", sevIP, 0)}></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Source IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", sourceIP, 0)}></td></tr>


 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
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
                                  )}
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "TCUD", group: proto },
                                    {
                                      group: ($$value) => {
                                        proto = $$value;
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
                                    { value: "SPort", group: pubport },
                                    {
                                      group: ($$value) => {
                                        pubport = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Single Port`;
                                      }
                                    }
                                  )}<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", SinglePubP, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "PortR", group: pubport },
                                    {
                                      group: ($$value) => {
                                        pubport = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Port Range`;
                                      }
                                    }
                                  )}<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", RangePubPF, 0)}><p class="${"pt-2"}">-</p><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", RangePubPE, 0)}></div></td></tr>



 <tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Private Port</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "SPort", group: priport },
                                    {
                                      group: ($$value) => {
                                        priport = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Single Port`;
                                      }
                                    }
                                  )}<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", SinglePriP, 0)}>
  ${validate_component(Radio, "Radio").$$render(
                                    $$result,
                                    { value: "PortR", group: priport },
                                    {
                                      group: ($$value) => {
                                        priport = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {
                                      default: () => {
                                        return `Port Range`;
                                      }
                                    }
                                  )}<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", RangePriPF, 0)}><p class="${"pt-2"}">-</p><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", RangePriPE, 0)}></div></td></tr>


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


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Virtual Computer" }, {}, {
          default: () => {
            return `<label><input type="${"checkbox"}" ${""}>
  Enable Virtual Computer
</label>

<p class="${"mt-10"}"></p>
  ${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Global IP`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Local IP`;
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
                                size: "md",
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Global IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", GIP, 0)}></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Local IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", LIP, 0)}></td></tr>



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
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-40" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-40" }, {}, {})}`;
                      }
                    })}


     <tr><td></td>
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
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "DMZ" }, {}, {
          default: () => {
            return `<label><input type="${"checkbox"}" ${""}>
  Enable DMZ
</label>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "All", group: DMZInfce },
              {
                group: ($$value) => {
                  DMZInfce = $$value;
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
              { value: "CW", group: DMZInfce },
              {
                group: ($$value) => {
                  DMZInfce = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Cellular WAN`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "EW", group: DMZInfce },
              {
                group: ($$value) => {
                  DMZInfce = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Ethernet WAN`;
                }
              }
            )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">DMZ Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", DMZHost, 0)}></td></tr>


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
