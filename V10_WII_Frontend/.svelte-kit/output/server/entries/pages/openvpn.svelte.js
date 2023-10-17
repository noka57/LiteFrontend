import { c as create_ssr_component, v as validate_component, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/Wrapper-69500f4b.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { L as Label } from "../../_app/immutable/chunks/Label-a273673c.js";
import { S as Select } from "../../_app/immutable/chunks/Select-31d9f8d4.js";
import { T as Textarea } from "../../_app/immutable/chunks/Textarea-9c7eff7a.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { T as Table, b as TableBodyRow, c as TableBodyCell, a as TableBody } from "../../_app/immutable/chunks/TableBodyRow-53df767c.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-27f0cb1b.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Openvpn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ID = "";
  let PWD = "";
  let formModalFailover = false;
  let formModalValidClient = false;
  let formModalRNA = false;
  let localList = [
    { value: "aws", name: "AWS" },
    { value: "azure", name: "Azure" },
    { value: "self", name: "selfSign" }
  ];
  let openvpnED = "Enable";
  let openvpnRole = "Client";
  let openvpnProtocol = "UDP";
  let openvpnInitial = "Started";
  let openvpnAuth = "X509Cert";
  let openvpnAuthS = "X509Cert";
  let value = [];
  const showFiles = (files) => {
    if (files.length === 1)
      return files[0];
    let concat = "";
    files.map((file) => {
      concat += file;
      concat += ",";
      concat += " ";
    });
    if (concat.length > 40)
      concat = concat.slice(0, 40);
    concat += "...";
    return concat;
  };
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
            return `${openvpnED == "Enable" ? `${openvpnRole == "Client" ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Client
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">List all clients&#39; information
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
                        return `VPN Name`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `State`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `VPN State`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `IP`;
                      }
                    })}
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
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Connection Established`;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `10.123.12.3`;
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
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Connection Established`;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `10.123.12.4`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}` : `${openvpnRole == "Server" ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Server

   </caption>
  ${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Listen Port`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Protocol`;
                      }
                    })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `State`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                      default: () => {
                        return `Client Authentication`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                  }
                })}  



    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `1194`;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `UDP`;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Started`;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `X509 Certificate`;
                      }
                    })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                  }
                })}`;
              }
            })}` : ``}`}` : ``}`;
          }
        })}

      ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Basic" }, {}, {
          default: () => {
            return `<table><tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">OpenVPN Service</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Disable", group: openvpnED },
              {
                group: ($$value) => {
                  openvpnED = $$value;
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
              { value: "Enable", group: openvpnED },
              {
                group: ($$value) => {
                  openvpnED = $$value;
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

${openvpnED == "Enable" ? `<td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">OpenVPN Role</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Server", group: openvpnRole },
              {
                group: ($$value) => {
                  openvpnRole = $$value;
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
              { value: "Client", group: openvpnRole },
              {
                group: ($$value) => {
                  openvpnRole = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Client`;
                }
              }
            )}</div></td>` : `<td><p class="${"pl-5 pt-5 text-lg font-light text-left text-gray-400 dark:text-gray-500"}">OpenVPN Role</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              {
                value: "Server",
                disabled: true,
                group: openvpnRole
              },
              {
                group: ($$value) => {
                  openvpnRole = $$value;
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
                group: openvpnRole
              },
              {
                group: ($$value) => {
                  openvpnRole = $$value;
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

${openvpnED == "Enable" ? `${openvpnRole == "Client" ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Connection" }, {}, {
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
                          return `VPN Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Server Address`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Server Port`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Server CA certificate`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Protocol`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Initial Mode`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-16" }, {}, {
                        default: () => {
                          return `Authentication`;
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
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
                
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
                  return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">VPN Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VPNName, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRAddr, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRPort, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server CA Certificate</p></td>
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



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
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
                        return `UDP`;
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
                        return `TCP`;
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


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Authentication</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                    $$result,
                    { value: "X509Cert", group: openvpnAuth },
                    {
                      group: ($$value) => {
                        openvpnAuth = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `X509 Certificate`;
                      }
                    }
                  )}
  ${validate_component(Radio, "Radio").$$render(
                    $$result,
                    { value: "LoginPw", group: openvpnAuth },
                    {
                      group: ($$value) => {
                        openvpnAuth = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `Username/Password`;
                      }
                    }
                  )}</div></td></tr>

${openvpnAuth == "X509Cert" ? `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      class: "mt-2",
                      items: localList,
                      placeholder: "None"
                    },
                    {},
                    {}
                  )}</td></tr>` : `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Username</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", ID, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", PWD, 0)}></td></tr>`}




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
        })}` : `${openvpnRole == "Server" ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Connection" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Listen Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRPort, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server CA Certificate</p></td>
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

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server Certificate</p></td>
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



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
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
                  return `UDP`;
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
                  return `TCP`;
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


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Authentication</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "X509Cert", group: openvpnAuthS },
              {
                group: ($$value) => {
                  openvpnAuthS = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `X509 Certificate`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "LoginPw", group: openvpnAuthS },
              {
                group: ($$value) => {
                  openvpnAuthS = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Username/Password`;
                }
              }
            )}</div></td></tr></table>
<p class="${"pt-10"}"></p>
${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">${openvpnAuthS == "X509Cert" ? `Valid Client Certificate Common Name List` : `Valid Client Username List`}</span>`;
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `${openvpnAuthS == "X509Cert" ? `Certificate Common Name` : `Username`}`;
                                }
                              })}
${openvpnAuthS == "LoginPw" ? `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Password`;
                                }
                              })}` : ``}

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
   
              
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
                          return `<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">${openvpnAuthS == "X509Cert" ? `Certificate Common Name` : `Username`}</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VPNName, 0)}></td></tr>


${openvpnAuthS == "LoginPw" ? `<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", PWD, 0)}></td></tr>` : ``}




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




${openvpnED == "Enable" ? `${openvpnRole == "Server" ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Advanced" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Client Config Dir (CCD)</span>`;
                  },
                  default: () => {
                    return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-44"}"><option disabled="${""}" value="${""}">Choose Client ...</option><option value="${"test1"}">test1</option><option value="${"test2"}">test2</option><option value="${"test3"}">test3</option></select>



${validate_component(Label, "Label").$$render($$result, { for: "textarea-id", class: "mb-2" }, {}, {
                      default: () => {
                        return `Command For This Client`;
                      }
                    })}
${validate_component(Textarea, "Textarea").$$render(
                      $$result,
                      {
                        id: "textarea-id",
                        placeholder: "Command",
                        rows: "4",
                        name: "message",
                        value: "test cmd"
                      },
                      {},
                      {}
                    )}


<table><tr><td></td>
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
                    })}</td></tr></table>`;
                  }
                })}`;
              }
            })}`;
          }
        })}` : ``}` : ``}


${openvpnED == "Enable" ? `${openvpnRole == "Client" ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Advanced" }, {}, {
          default: () => {
            return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-44"}"><option disabled="${""}" value="${""}">Choose VPN name ...</option><option value="${"test1"}">test1</option><option value="${"test2"}">test2</option><option value="${"test3"}">test3</option></select>

${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Preshared Key</span>`;
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `TLS auth key`;
                                }
                              })}

    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `TLS crypt key`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                                    default: () => {
                                      return `<div class="${"flex gap-4"}"><svg aria-hidden="${"true"}" class="${"mb-3 w-10 h-10 text-gray-400 cursor-pointer"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${value.length == 0 ? `<p class="${"pt-2"}">None</p>` : `<p class="${"pt-2"}">${escape(showFiles(value))}</p>`}
<input id="${"ta"}" type="${"file"}" class="${"hidden"}"></div>`;
                                    }
                                  })}

${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                                    default: () => {
                                      return `<div class="${"flex gap-4"}"><svg aria-hidden="${"true"}" class="${"mb-3 w-10 h-10 text-gray-400 cursor-pointer"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${value.length == 0 ? `<p class="${"pt-2"}">None</p>` : `<p class="${"pt-2"}">${escape(showFiles(value))}</p>`}
<input id="${"ta"}" type="${"file"}" class="${"hidden"}"></div>`;
                                    }
                                  })}`;
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
                    )}`;
                  }
                })}
  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Remote Network Access</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `No`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Remote Subnet`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Comment`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `192.168.254.0/24`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `subnet1`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                              }
                            })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `2`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `192.168.1.0/24`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `subnet2`;
                                  }
                                })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                              }
                            })}



${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
                    })}



${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        autoclose: false,
                        size: "lg",
                        class: "w-full",
                        open: formModalRNA
                      },
                      {
                        open: ($$value) => {
                          formModalRNA = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Subnet</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRAddr, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Comment</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRAddr, 0)}></td></tr>




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
                })}


   ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Failover</span>`;
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `VPN Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote VPN Address`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote VPN Port`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Protocol`;
                                }
                              })}


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
                    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}

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
                        open: formModalFailover
                      },
                      {
                        open: ($$value) => {
                          formModalFailover = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">VPN Name</p></td><td class="${"pl-5 pt-5"}">test</td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote VPN Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRAddr, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote VPN Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", VRPort, 0)}></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Protocol</p></td> <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
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
                                return `UDP`;
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
                                return `TCP`;
                              }
                            }
                          )}</div></td></tr>






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
  Openvpn as default
};
