import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-7d3f7bdf.js";
import { T as Toggle } from "../../_app/immutable/chunks/Toggle-a89bbb21.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-ea7df515.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Label-3f2c96ee.js";
import "../../_app/immutable/chunks/CloseButton-88212a62.js";
let styleSpecial = true;
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Conversion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let testServerAuth = 0;
  let testSecMode = 0;
  let testSecPolicy = 0;
  let testClientReconnect = 0;
  let opcua2modbus = 0;
  let modbusOption = 0;
  let ClientAuth = 0;
  let modbusPRateMS = 1e3;
  sessionidG.subscribe((val) => {
  });
  let modifyModbusTagModal = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "OPCUA" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Server
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Endpoint Url</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"></td></tr>


 <tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Local Certificate</p></td>



    <td class="${"pl-5 pt-5"}" colspan="${"5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option><option value="${"Certificate1"}">Certificate1</option><option value="${"Certificate2"}">Certificate2</option><option value="${"Certificate3"}">Certificate3</option></select></td></tr>





<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Authentication</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: ClientAuth },
                      {
                        checked: ($$value) => {
                          ClientAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>

${ClientAuth == 1 ? `<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td><td class="${"pl-5 pt-1"}"><div class="${"flex gap-4"}">${testServerAuth == 1 ? `${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        value: 1,
                        styleSpecial,
                        group: testServerAuth
                      },
                      {
                        group: ($$value) => {
                          testServerAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Username/Password`;
                        }
                      }
                    )}


      <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"}"> <p class="${"pt-8"}">/</p> <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"}">` : `${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        class: "pt-10 pb-1",
                        value: 1,
                        group: testServerAuth
                      },
                      {
                        group: ($$value) => {
                          testServerAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Username/Password`;
                        }
                      }
                    )}`}</div>

    <div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        class: "pt-10",
                        value: 2,
                        group: testServerAuth
                      },
                      {
                        group: ($$value) => {
                          testServerAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Remote Certificate`;
                        }
                      }
                    )}
${testServerAuth == 2 ? `<button color="${"blue"}" type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-1 text-sm text-white bg-gray-800 mt-6 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48"}">Choose Certificate
${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`}</button>` : ``}</div></td></tr>` : ``}


${ClientAuth == 1 ? `${testServerAuth == 2 ? `${``}` : ``}` : ``}





    <tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Reverse Connection</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: testClientReconnect },
                      {
                        checked: ($$value) => {
                          testClientReconnect = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>


${testClientReconnect == 1 ? `<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Endpoint Url</p></td>

      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"></td></tr>` : ``}

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
                    return `<span slot="${"header"}" class="${"pl-4"}">Client
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Endpoint Url</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"></td></tr>


 <tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Security Mode</p></td>



    <td class="${"pl-5 pt-5"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 0, group: testSecMode },
                      {
                        group: ($$value) => {
                          testSecMode = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Sign and Encrypt`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 1, group: testSecMode },
                      {
                        group: ($$value) => {
                          testSecMode = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Sign`;
                        }
                      }
                    )}</div></td></tr>



 <tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Security Policy</p></td>

    <td class="${"pl-5 pt-5"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 0, group: testSecPolicy },
                      {
                        group: ($$value) => {
                          testSecPolicy = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Basic256Sha256`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 1, group: testSecPolicy },
                      {
                        group: ($$value) => {
                          testSecPolicy = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Aes128Sha256RsaOaep`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 2, group: testSecPolicy },
                      {
                        group: ($$value) => {
                          testSecPolicy = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Aes256Sha256RsaPss`;
                        }
                      }
                    )}</div></td></tr>



<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Authentication</p></td><td class="${"pl-5 pt-1"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        class: "pt-8",
                        value: 0,
                        group: testServerAuth
                      },
                      {
                        group: ($$value) => {
                          testServerAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Anonymous`;
                        }
                      }
                    )}
  <div class="${"flex gap-4"}">${testServerAuth == 1 ? `${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        value: 1,
                        styleSpecial,
                        group: testServerAuth
                      },
                      {
                        group: ($$value) => {
                          testServerAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Username/Password`;
                        }
                      }
                    )}


      <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"}"> <p class="${"pt-8"}">/</p> <input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"}">` : `${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        class: "pt-10 pb-1",
                        value: 1,
                        group: testServerAuth
                      },
                      {
                        group: ($$value) => {
                          testServerAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Username/Password`;
                        }
                      }
                    )}`}</div>

    <div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        class: "pt-10",
                        value: 2,
                        group: testServerAuth
                      },
                      {
                        group: ($$value) => {
                          testServerAuth = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Local Certificate`;
                        }
                      }
                    )}
${testServerAuth == 2 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-5 h-10 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option><option value="${"Certificate1"}">Certificate1</option><option value="${"Certificate2"}">Certificate2</option><option value="${"Certificate3"}">Certificate3</option></select>` : ``}</div></td></tr>

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
                    return `<span slot="${"header"}" class="${"pl-4"}">Log
    </span>`;
                  }
                })}`;
              }
            })}`;
          }
        })}

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Conversion" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">OPC UA TO Modbus
    </span>`;
                  },
                  default: () => {
                    return `<table class="${"mb-10"}"><tr><td class="${"w-48"}"><p class="${"pl-5 pt-5 text-lg font-light text-right"}">Enable</p></td>
<td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: opcua2modbus },
                      {
                        checked: ($$value) => {
                          opcua2modbus = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>
${opcua2modbus == 1 ? `<tr><td class="${"w-48"}"></td>

<td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 0, group: modbusOption },
                      {
                        group: ($$value) => {
                          modbusOption = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Modbus Tag`;
                        }
                      }
                    )}
${modbusOption == 0 ? `<div class="${"relative"}"><input id="${"polling rate"}" class="${"block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"polling_rate"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", modbusPRateMS, 0)}> <label for="${"polling_rate"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">polling_rate(ms)</label></div>` : `<div class="${"relative"}"><input id="${"polling rate"}" class="${"block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3 disabled:cursor-not-allowed disabled:opacity-50"}" name="${"polling_rate"}" placeholder="${" "}" type="${"number"}" disabled${add_attribute("value", modbusPRateMS, 0)}> <label for="${"polling_rate"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">polling_rate(ms)</label></div>`}  
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 1, group: modbusOption },
                      {
                        group: ($$value) => {
                          modbusOption = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Node Number`;
                        }
                      }
                    )}

${modbusOption == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 h-10 w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}">` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 h-10 w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled>`}</div></td></tr>` : ``}</table>

${opcua2modbus == 1 ? `${modbusOption == 0 ? `${validate_component(Table, "Table").$$render(
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                                default: () => {
                                  return `Support`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Modbus Tag`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Special Function`;
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
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}


 ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg data-slot="${"icon"}" aria-hidden="${"true"}" fill="${"none"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" viewBox="${"0 -1.5 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                    default: () => {
                                      return `<input type="${"checkbox"}">`;
                                    }
                                  })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                                    default: () => {
                                      return `${``}`;
                                    }
                                  })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                                    default: () => {
                                      return `${``}`;
                                    }
                                  })}`;
                                }
                              })}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}

 ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg data-slot="${"icon"}" aria-hidden="${"true"}" fill="${"none"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" viewBox="${"0 -1.5 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                    default: () => {
                                      return `<input type="${"checkbox"}">`;
                                    }
                                  })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                                    default: () => {
                                      return `${``}`;
                                    }
                                  })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                                    default: () => {
                                      return `${``}`;
                                    }
                                  })}`;
                                }
                              })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      }
                    )}` : ``}` : ``}

<table><tr><td class="${"w-60"}"></td>
        <td class="${"w-60"}"></td></tr>
    <tr class="${"pt-5"}"><td></td>
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
                        size: "md",
                        class: "w-full",
                        permanent: true,
                        open: modifyModbusTagModal
                      },
                      {
                        open: ($$value) => {
                          modifyModbusTagModal = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label><input type="${"checkbox"}">
  Support
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option><option${add_attribute("value", 1, 0)}>ModbusTag1</option><option${add_attribute("value", 2, 0)}>ModbusTag2</option><option${add_attribute("value", 3, 0)}>ModbusTag3</option></select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Special Function</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option><option${add_attribute("value", 1, 0)}>SF1</option><option${add_attribute("value", 2, 0)}>SF2</option><option${add_attribute("value", 3, 0)}>SF3</option></select></td></tr>


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
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Modify`;
                            }
                          })}</td></tr></table></form>`;
                        }
                      }
                    )}</table>`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">OPC UA TO OPC UA
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-48"}"><p class="${"pl-5 pt-5 text-lg font-light text-right"}">Enable</p></td>
<td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})}</td>
<td></td></tr>

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
  Conversion as default
};
