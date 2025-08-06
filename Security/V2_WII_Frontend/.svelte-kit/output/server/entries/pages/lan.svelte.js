import { c as create_ssr_component, v as validate_component, e as escape, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { lanConfig, LanConfigChangedLog, DHCPServerLANConfigLog, ChangedLANConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Lan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_lan_data = {};
  sessionidG.subscribe((val) => {
  });
  lanConfig.subscribe((val) => {
  });
  LanConfigChangedLog.subscribe((val) => {
  });
  DHCPServerLANConfigLog.subscribe((val) => {
  });
  ChangedLANConfig.subscribe((val) => {
  });
  let firstThreeParts = "192.168.123.";
  let lastPartBegin = "100";
  let lastPartEnd = "250";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table>${``}
    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "DHCP Server" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">DHCP Server</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>

${changed_lan_data.config.networking_lan.dhcpServer.enable ? `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">DHCP IP Pool</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-1"}"><p class="${"pl-1 pt-2"}">${escape(firstThreeParts)}</p>
      <input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}" min="${"1"}" max="${"255"}"${add_attribute("value", lastPartBegin, 0)}>
      <p class="${"pl-1 pt-2"}">- </p><p class="${"pl-1 pt-2"}">${escape(firstThreeParts)}</p>
<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}" min="${"1"}" max="${"255"}"${add_attribute("value", lastPartEnd, 0)}></div></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Lease</p></td><td class="${"pl-5 pt-5"}"><div class="${"flex gap-1"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_lan_data.config.networking_lan.dhcpServer.lease, 0)}>
<p class="${"pl-1 pt-2"}">hr</p></div></td></tr>` : ``}

    <tr><td></td>
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
  } while (!$$settled);
  return $$rendered;
});
export {
  Lan as default
};
