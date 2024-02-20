import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-337e42f7.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { operationConfig, OperationConfigChangedLog, ChangedOperationConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
let IDX = 36;
let HEX = "";
while (IDX--) {
  HEX += IDX.toString(36);
}
const Picker_svelte_svelte_type_style_lang = "";
const Operation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };
  let formModal = false;
  let WaitToReboot = false;
  let timestamp = 0;
  let MYear = 2023;
  let MMonth = 7;
  let MDay = 26;
  let MHour = 10;
  let MMin = 10;
  sessionidG.subscribe((val) => {
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
    {
      {
        const dateObject = new Date(timestamp * 1e3);
        dateObject.toLocaleString("en-US", options);
        MYear = dateObject.getFullYear();
        MMonth = dateObject.getMonth() + 1;
        MDay = dateObject.getDate();
        MHour = dateObject.getHours();
        MMin = dateObject.getMinutes();
      }
    }
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Time" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Current Local Date &amp; Time</p></td>
    <td class="${"pl-5 pt-5"}">${``}</td></tr>

    <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Automatic Date &amp; Time</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>



    <tr><td class="${"w-85"}"></td>
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
${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Operation as default
};
