import { c as create_ssr_component, v as validate_component, e as escape, i as add_attribute } from "../../_app/immutable/chunks/index-581edbff.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-90e348d9.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-0d1592aa.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-08b89a3a.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-ab4c1927.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-5bfda8b2.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { fakeTimeMSecSince1970, fakeTimeString, operationConfig, OperationConfigChangedLog, ChangedOperationConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-9b664c22.js";
import "../../_app/immutable/chunks/CloseButton-60d81157.js";
import "../../_app/immutable/chunks/index-100761d4.js";
let IDX = 36;
let HEX = "";
while (IDX--) {
  HEX += IDX.toString(36);
}
const Picker_svelte_svelte_type_style_lang = "";
const OperationV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModal = false;
  let WaitToReboot = false;
  let WaitToReset = false;
  let dateTimeString = "";
  let MYear = 2023;
  let MMonth = 7;
  let MDay = 26;
  let MHour = 10;
  let MMin = 10;
  sessionidG.subscribe((val) => {
  });
  fakeTimeMSecSince1970.subscribe((val) => {
  });
  fakeTimeString.subscribe((val) => {
    dateTimeString = val;
  });
  operationConfig.subscribe((val) => {
  });
  OperationConfigChangedLog.subscribe((val) => {
  });
  ChangedOperationConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Time" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Current Local Date &amp; Time</p></td>
    <td class="${"pl-5 pt-5"}">${escape(dateTimeString)}</td></tr>

    <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Automatic Date &amp; Time</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>



    <tr><td class="${"w-85"}"></td>
    <td class="${"w-85 pt-5 pl-5"}">${``}</td></tr>

<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Time Zone</p></td>
    <td class="${"w-85 pt-5 pl-5"}">${``}</td></tr>


${``}
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
                autoclose: true,
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
                  return `<table><tr><td class="${"w-24 pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MYear, 0)}></td>
      <td class="${"pl-5 pt-5"}">-</td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"1"}" max="${"12"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MMonth, 0)}></td>

      <td class="${"pl-5 pt-5"}">-</td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"1"}" max="${"31"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MDay, 0)}></td>


      <td class="${"pl-16 pt-5"}"></td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"0"}" max="${"23"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MHour, 0)}></td>


      <td class="${"pl-5 pt-5"}">: </td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"0"}" max="${"59"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MMin, 0)}></td></tr>


      <tr class="${"pt-10"}"><td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>

        <td></td>
        <td></td>
    <td class="${"pt-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Apply`;
                    }
                  })}</td></tr></table>`;
                }
              }
            )}</table>`;
          }
        })}

   ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Reboot" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-65"}">Reboot Device</td><td class="${"pl-5"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
              default: () => {
                return `Reboot`;
              }
            })}</td></tr>

${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "md",
                class: "w-full",
                permanent: true,
                open: WaitToReboot
              },
              {
                open: ($$value) => {
                  WaitToReboot = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<table><tr><td class="${"pt-5"}">${validate_component(Spinner, "Spinner").$$render($$result, { size: 16 }, {}, {})}</td> 
<td class="${"pt-5"}"><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Reboot ....
</p></td></tr></table>`;
                }
              }
            )}</table>`;
          }
        })}

   ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Reset" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-65"}">Reset to default</td><td class="${"pl-5"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
              default: () => {
                return `Reset`;
              }
            })}</td></tr>

${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "md",
                class: "w-full",
                permanent: true,
                open: WaitToReset
              },
              {
                open: ($$value) => {
                  WaitToReset = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<table><tr><td class="${"pt-5"}">${validate_component(Spinner, "Spinner").$$render($$result, { size: 16 }, {}, {})}</td> 
<td class="${"pt-5"}"><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Reset to default ....
</p></td></tr></table>`;
                }
              }
            )}</table>`;
          }
        })}


    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Storage" }, {}, {
          default: () => {
            return `${``}

<p class="${"pt-5"}"></p>

<table><tr class="${"pt-5"}"><td></td>
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
  OperationV2 as default
};
