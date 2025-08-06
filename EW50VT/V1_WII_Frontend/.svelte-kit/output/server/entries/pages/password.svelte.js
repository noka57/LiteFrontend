import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import "../../_app/immutable/chunks/Picker.svelte_svelte_type_style_lang-5fb474d8.js";
import { sessionidG } from "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Password = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let admin_password = "";
  let AdminPasswordShown = false;
  let guest_password = "";
  let GuestPasswordShown = false;
  sessionidG.subscribe((val) => {
  });
  return `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
    default: () => {
      return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "admin" }, {}, {
        default: () => {
          return `<table>${`<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Please enter current password before change it.</caption>



<tr><td class="${"w-80"}"></td>
      <td class="${"pl-5 pt-5"}">${`<input type="${"password"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}" required placeholder="${"Current Password"}"${add_attribute("value", admin_password, 0)}>`}</td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Continue`;
            }
          })}</td>



<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>


<tr><td class="${"w-80"}"></td>
  <div class="${"pl-5 pt-5"}"><label><input type="${"checkbox"}"${add_attribute("checked", AdminPasswordShown, 1)}>
      Show Password
    </label></div></tr>`}</table>`;
        }
      })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "guest" }, {}, {
        default: () => {
          return `<table>${`<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Please enter current password before change it.</caption>



<tr><td class="${"w-80"}"></td>
      <td class="${"pl-5 pt-5"}">${`<input type="${"password"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 dark:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}" required placeholder="${"Current Password"}"${add_attribute("value", guest_password, 0)}>`}</td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Continue`;
            }
          })}</td>



<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>


<tr><td class="${"w-80"}"></td>
  <div class="${"pl-5 pt-5"}"><label><input type="${"checkbox"}"${add_attribute("checked", GuestPasswordShown, 1)}>
      Show Password
    </label></div></tr>`}</table>`;
        }
      })}`;
    }
  })}`;
});
export {
  Password as default
};
