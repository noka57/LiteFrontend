import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../_app/immutable/chunks/index-e6faea8a.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-a37e9067.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-2dfe5133.js";
import { S as Select } from "../../_app/immutable/chunks/Select-22b3b994.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-43be47cb.js";
import { T as Table, b as TableBodyRow, c as TableBodyCell, a as TableBody } from "../../_app/immutable/chunks/TableBodyRow-f5919de3.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-a2501ae1.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-a5759ef8.js";
import "../../_app/immutable/chunks/index-245f18af.js";
import "../../_app/immutable/chunks/Frame-35d083b4.js";
import "../../_app/immutable/chunks/ChevronUp-24a5dd86.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Ipsec = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModalValidClient = false;
  let formModalValidClient2 = false;
  let ipsecResponderType = "Tunnel";
  let localList = [
    { value: "aws", name: "AWS" },
    { value: "azure", name: "Azure" },
    { value: "self", name: "selfSign" }
  ];
  let IPsecED = "Enable";
  let IPsecRole = "Client";
  let openvpnProtocol = "UDP";
  let openvpnInitial = "Started";
  let formModal = false;
  let VPNName = "";
  let VRAddr = "";
  let VRPort = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Overview" }, {}, {
          default: () => {
            return `${IPsecED == "Enable" ? `${IPsecRole == "Client" ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Initiator
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">List all Initiators&#39; information
    </p></caption>
  ${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Index`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Name`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `State`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                  }
                })}
  
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `1`;
                      }
                    })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `test1
      `;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Started`;
                      }
                    })}`;
                  }
                })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `2`;
                      }
                    })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `test2
      `;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Started`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}` : `${IPsecRole == "Server" ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Responder

   </caption>
  ${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `State`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                  }
                })}  



    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Started`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}` : ``}`}` : ``}`;
          }
        })}

      ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Basic" }, {}, {
          default: () => {
            return `<table><tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">IPsec Service</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Disable", group: IPsecED },
              {
                group: ($$value) => {
                  IPsecED = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Disable`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Enable", group: IPsecED },
              {
                group: ($$value) => {
                  IPsecED = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Enable`;
                }
              }
            )}</div></td></tr>


      <tr><td></td>

${IPsecED == "Enable" ? `<td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">IPsec Role</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Server", group: IPsecRole },
              {
                group: ($$value) => {
                  IPsecRole = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Responder`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Client", group: IPsecRole },
              {
                group: ($$value) => {
                  IPsecRole = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Initiator`;
                }
              }
            )}</div></td>` : `<td><p class="${"pl-5 pt-5 text-lg font-light text-left text-gray-400 dark:text-gray-500"}">OpenVPN Role</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              {
                value: "Server",
                disabled: true,
                group: IPsecRole
              },
              {
                group: ($$value) => {
                  IPsecRole = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Server`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              {
                value: "Client",
                disabled: true,
                group: IPsecRole
              },
              {
                group: ($$value) => {
                  IPsecRole = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Client`;
                }
              }
            )}</div></td>`}</tr>


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
            })}</td></tr></table>`;
          }
        })}

${IPsecED == "Enable" ? `${IPsecRole == "Client" ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Connection" }, {}, {
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
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-8" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-8" }, {}, {
                        default: () => {
                          return `No`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Remote Address`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Remote CA certificate`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `IKE Version`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Initial Mode`;
                        }
                      })}

        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}

    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-8" }, {}, {
                            default: () => {
                              return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                            }
                          })}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-8" }, {}, {
                            default: () => {
                              return `1`;
                            }
                          })}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-16" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
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
              }
            )}



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
                  return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VPNName, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRAddr, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote CA Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      class: "mt-2",
                      items: localList,
                      placeholder: "None"
                    },
                    {},
                    {}
                  )}</td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">IKE Version</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    { value: "UDP", group: openvpnProtocol },
                    {
                      group: ($$value) => {
                        openvpnProtocol = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `IKE2`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    { value: "TCP", group: openvpnProtocol },
                    {
                      group: ($$value) => {
                        openvpnProtocol = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `IKE1`;
                      }
                    }
                  )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Initial Mode</p></td><td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    { value: "Started", group: openvpnInitial },
                    {
                      group: ($$value) => {
                        openvpnInitial = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Started`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    { value: "Stopped", group: openvpnInitial },
                    {
                      group: ($$value) => {
                        openvpnInitial = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Stopped`;
                      }
                    }
                  )}</div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Local Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      class: "mt-2",
                      items: localList,
                      placeholder: "None"
                    },
                    {},
                    {}
                  )}</td></tr>






            <tr><td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Add`;
                    }
                  })}</td></tr></table>`;
                }
              }
            )}`;
          }
        })}` : `${IPsecRole == "Server" ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Connection" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRPort, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Local Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${validate_component(Select, "Select").$$render(
              $$result,
              {
                class: "mt-2",
                items: localList,
                placeholder: "None"
              },
              {},
              {}
            )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote CA Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${validate_component(Select, "Select").$$render(
              $$result,
              {
                class: "mt-2",
                items: localList,
                placeholder: "None"
              },
              {},
              {}
            )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Initial Mode</p></td><td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Started", group: openvpnInitial },
              {
                group: ($$value) => {
                  openvpnInitial = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Started`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Stopped", group: openvpnInitial },
              {
                group: ($$value) => {
                  openvpnInitial = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Stopped`;
                }
              }
            )}</div></td></tr></table>
<p class="${"pt-10"}"></p>`;
          }
        })}

    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Advanced" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Transport and Tunnel
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-8" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-8" }, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Type`;
                                }
                              })}


    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Local Network`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote Network`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-8" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-8" }, {}, {
                                    default: () => {
                                      return `1`;
                                    }
                                  })}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
   
              
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}`;
                        }
                      }
                    )}

${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        autoclose: false,
                        size: "md",
                        class: "w-full",
                        open: formModalValidClient
                      },
                      {
                        open: ($$value) => {
                          formModalValidClient = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "Tunnel",
                              group: ipsecResponderType
                            },
                            {
                              group: ($$value) => {
                                ipsecResponderType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Tunnel Mode`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "Transport",
                              group: ipsecResponderType
                            },
                            {
                              group: ($$value) => {
                                ipsecResponderType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Transport Mode`;
                              }
                            }
                          )}</div></td></tr>


${ipsecResponderType == "Tunnel" ? `<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Local Network
      </p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VPNName, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Network
      </p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VPNName, 0)}></td></tr>` : `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>
      <td class="${"pl-7.5 pt-7.5"}"></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>
      <td class="${"pl-7.5 pt-7.5"}"></td></tr>`}


            <tr><td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Add`;
                            }
                          })}</td></tr></table>`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}` : ``}`}` : ``}




${IPsecED == "Enable" ? `${IPsecRole == "Client" ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Advanced" }, {}, {
          default: () => {
            return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-44"}"><option disabled="${""}" value="${""}">Choose VPN name ...</option><option value="${"test1"}">test1</option><option value="${"test2"}">test2</option></select>

${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Transport and Tunnel
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-8" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-8" }, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Type`;
                                }
                              })}


    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Local Network`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote Network`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-8" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-8" }, {}, {
                                    default: () => {
                                      return `1`;
                                    }
                                  })}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
   
              
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}`;
                        }
                      }
                    )}

${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        autoclose: false,
                        size: "md",
                        class: "w-full",
                        open: formModalValidClient2
                      },
                      {
                        open: ($$value) => {
                          formModalValidClient2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "Tunnel",
                              group: ipsecResponderType
                            },
                            {
                              group: ($$value) => {
                                ipsecResponderType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Tunnel Mode`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "Transport",
                              group: ipsecResponderType
                            },
                            {
                              group: ($$value) => {
                                ipsecResponderType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Transport Mode`;
                              }
                            }
                          )}</div></td></tr>


${ipsecResponderType == "Tunnel" ? `<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Local Network
      </p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VPNName, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Network
      </p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VPNName, 0)}></td></tr>` : `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>
      <td class="${"pl-7.5 pt-7.5"}"></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>
      <td class="${"pl-7.5 pt-7.5"}"></td></tr>`}


            <tr><td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Add`;
                            }
                          })}</td></tr></table>`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}` : ``}` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Ipsec as default
};
