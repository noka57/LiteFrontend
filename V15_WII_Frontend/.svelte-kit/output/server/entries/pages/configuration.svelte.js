import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-4327f458.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-018e0198.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-a9367632.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-d05d7350.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { configurationConfig, ConfigurationP2EConfigChangedLog, ChangedConfigurationConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-82afdce4.js";
import "../../_app/immutable/chunks/CloseButton-9e3e1305.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
const Configuration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  sessionidG.subscribe((val) => {
  });
  configurationConfig.subscribe((val) => {
  });
  ConfigurationP2EConfigChangedLog.subscribe((val) => {
  });
  ChangedConfigurationConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Local" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Backup Current Configuration</p></td>

<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Download`;
              }
            })}</td></tr>


<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Restore Configuration</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"file"}" id="${"configUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}"></td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Upload`;
              }
            })}</td></tr></table>




${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "md",
                class: "w-full",
                permanent: true,
                open: defaultModal
              },
              {
                open: ($$value) => {
                  defaultModal = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${``}

<table>${`<tr>${`<td>${validate_component(Spinner, "Spinner").$$render($$result, { size: 16 }, {}, {})}</td>
<td><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Verifying configuration now ....
</p></td>`}</tr>`}</table>`;
                }
              }
            )}`;
          }
        })}

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "P2E" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">P2E Service</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>


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
  } while (!$$settled);
  return $$rendered;
});
export {
  Configuration as default
};
