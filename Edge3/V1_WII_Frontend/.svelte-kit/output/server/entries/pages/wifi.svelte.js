import { c as create_ssr_component, v as validate_component, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-54377ec4.js";
import { A as Accordion } from "../../_app/immutable/chunks/Accordion-c8c12650.js";
import { A as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-ab074a69.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { T as Toggle } from "../../_app/immutable/chunks/Toggle-93a31009.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { WiFiConfig, WiFi_11ah_ConfigChangedLog, WiFi_11ah_General_ConfigChangedLog, WiFi_WiFi5_ConfigChangedLog, WiFi_Bluetooth_ConfigChangedLog, ChangedWiFiConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
import "../../_app/immutable/chunks/Radio-5b795065.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Wifi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_wifi_data = {};
  let Stations_list_wifi5 = "";
  sessionidG.subscribe((val) => {
  });
  WiFiConfig.subscribe((val) => {
  });
  WiFi_11ah_ConfigChangedLog.subscribe((val) => {
  });
  WiFi_11ah_General_ConfigChangedLog.subscribe((val) => {
  });
  WiFi_WiFi5_ConfigChangedLog.subscribe((val) => {
  });
  WiFi_Bluetooth_ConfigChangedLog.subscribe((val) => {
  });
  ChangedWiFiConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "11ah" }, {}, {
          default: () => {
            return `${``}`;
          }
        })}



 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "WiFi5" }, {}, {
          default: () => {
            return `<table><tr><td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">${validate_component(Toggle, "Toggle").$$render(
              $$result,
              {
                class: "w-60",
                checked: !!changed_wifi_data.config.wifi_wifi5.enable
              },
              {},
              {}
            )}</td></tr></table>



<table>${changed_wifi_data.config.wifi_wifi5.enable ? `<tr><td class="w-60"></td>
<td class="w-20"></td>
    <td class="pl-5 pt-5"><div class="flex gap-4"><label class="font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="radio"${add_attribute("value", 0, 0)} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"${0 === changed_wifi_data.config.wifi_wifi5.type ? add_attribute("checked", true, 1) : ""}>2.4G AP</label> <label class="font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="radio"${add_attribute("value", 1, 0)} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"${1 === changed_wifi_data.config.wifi_wifi5.type ? add_attribute("checked", true, 1) : ""}>5G AP</label></div></td></tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_wifi_data.config.wifi_wifi5.ssid, 0)}></td>
<td class="pl-5 pt-5"></td></tr>

${``}



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Channel</p></td><td class="pl-5 pt-5"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">${changed_wifi_data.config.wifi_wifi5.region == 0 ? `${changed_wifi_data.config.wifi_wifi5.type == 1 ? `<option${add_attribute("value", 36, 0)}>36</option>` : `${changed_wifi_data.config.wifi_wifi5.type == 0 ? `<option${add_attribute("value", 6, 0)}>6</option>` : ``}`}` : `${changed_wifi_data.config.wifi_wifi5.region == 1 ? `${changed_wifi_data.config.wifi_wifi5.type == 1 ? `<option${add_attribute("value", 36, 0)}>36</option>` : `${changed_wifi_data.config.wifi_wifi5.type == 0 ? `<option${add_attribute("value", 6, 0)}>6</option>` : ``}`}` : ``}`}</select></td></tr>



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Encryption</p></td><td class="pl-5 pt-5"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48"><option${add_attribute("value", 0, 0)}>WPA3</option></select></td></tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_wifi_data.config.wifi_wifi5.password, 0)}></td></tr>` : ``}

     <tr><td class="w-60"></td>
<td class="w-20"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>        
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
              }
            })}</td></tr></table>

<p class="pt-10"></p>

${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="header" class="pl-4">Stations List</div>`;
                  },
                  default: () => {
                    return `<table><tr><td class="pl-12 pt-10">${validate_component(Button, "Button").$$render($$result, { class: "w-22", pill: true }, {}, {
                      default: () => {
                        return `Refresh`;
                      }
                    })}</td></tr></table>

<p class="pt-10"></p>

<pre style="white-space: pre-wrap;">${escape(Stations_list_wifi5)}</pre>`;
                  }
                })}`;
              }
            })}`;
          }
        })}


${``}

${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Wifi as default
};
