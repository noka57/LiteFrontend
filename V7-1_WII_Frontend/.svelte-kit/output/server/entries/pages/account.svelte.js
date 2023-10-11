import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../_app/immutable/chunks/index-e6faea8a.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { T as Toggle } from "../../_app/immutable/chunks/Toggle-e9acacf4.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-a5759ef8.js";
import "../../_app/immutable/chunks/Radio-2dfe5133.js";
import "../../_app/immutable/chunks/index-245f18af.js";
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive = false;
  let oldPW = "";
  let newPW = "";
  let confmPW = "";
  let isActiveG = false;
  let oldPWG = "";
  let newPWG = "";
  let confmPWG = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "admin" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Change Password</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
              $$result,
              { checked: isActive },
              {
                checked: ($$value) => {
                  isActive = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td></tr>
${isActive ? `<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Old Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", oldPW, 0)}></td></tr>

<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">New Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPW, 0)}></td></tr>


<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Confirm Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", confmPW, 0)}></td></tr>` : ``}

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

   ${validate_component(TabItem, "TabItem").$$render($$result, { title: "guest" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Change Password</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
              $$result,
              { checked: isActiveG },
              {
                checked: ($$value) => {
                  isActiveG = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td></tr>

${isActiveG ? `<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Old Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", oldPWG, 0)}></td></tr>

<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">New Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", newPWG, 0)}></td></tr>


<tr><td class="${"w-60"}"></td>
      <td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Confirm Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", confmPWG, 0)}></td></tr>` : ``}

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
  Account as default
};
