import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-54377ec4.js";
import "classnames";
/* empty css                                                                            */import { T as Toggle } from "../../_app/immutable/chunks/Toggle-e6b9a75f.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { WiFiConfig, WiFi_11ah_ConfigChangedLog, WiFi_11ah_General_ConfigChangedLog, ChangedWiFiConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Radio-77cf2b36.js";
import "../../_app/immutable/chunks/Label-44304d72.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
const Wifi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_wifi_data = {};
  sessionidG.subscribe((val) => {
  });
  WiFiConfig.subscribe((val) => {
  });
  WiFi_11ah_ConfigChangedLog.subscribe((val) => {
  });
  WiFi_11ah_General_ConfigChangedLog.subscribe((val) => {
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
                checked: changed_wifi_data.config.wifi_wifi5.enable
              },
              {
                checked: ($$value) => {
                  changed_wifi_data.config.wifi_wifi5.enable = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td></tr></table>


${changed_wifi_data.config.wifi_wifi5.enable ? `<table><tr><td class="w-60"></td>
<td class="w-20"></td>
    <td class="pl-5 pt-5"><div class="flex gap-4"><label class="font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="radio"${add_attribute("value", 0, 0)} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"${0 === changed_wifi_data.config.wifi_wifi5.type ? add_attribute("checked", true, 1) : ""}>2.4G AP</label> <label class="font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="radio"${add_attribute("value", 1, 0)} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"${1 === changed_wifi_data.config.wifi_wifi5.type ? add_attribute("checked", true, 1) : ""}>5G AP</label></div></td></tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_wifi_data.config.wifi_wifi5.ssid, 0)}></td>
<td class="pl-5 pt-5"></td></tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Region</p></td><td class="pl-5 pt-5"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48"><option${add_attribute("value", 1, 0)}>EU</option><option${add_attribute("value", 0, 0)}>US</option></select></td></tr>



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Channel</p></td><td class="pl-5 pt-5"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">${changed_wifi_data.config.wifi_wifi5.region == 0 ? `<option${add_attribute("value", 1, 0)}>1</option>
<option${add_attribute("value", 3, 0)}>3</option>
<option${add_attribute("value", 5, 0)}>5</option>
<option${add_attribute("value", 7, 0)}>7</option>
<option${add_attribute("value", 9, 0)}>9</option>
<option${add_attribute("value", 11, 0)}>11</option>
<option${add_attribute("value", 13, 0)}>13</option>
<option${add_attribute("value", 15, 0)}>15</option>
<option${add_attribute("value", 17, 0)}>17</option>
<option${add_attribute("value", 19, 0)}>19</option>
<option${add_attribute("value", 21, 0)}>21</option>
<option${add_attribute("value", 23, 0)}>23</option>
<option${add_attribute("value", 25, 0)}>25</option>
<option${add_attribute("value", 27, 0)}>27</option>
<option${add_attribute("value", 29, 0)}>29</option>
<option${add_attribute("value", 31, 0)}>31</option>
<option${add_attribute("value", 33, 0)}>33</option>
<option${add_attribute("value", 35, 0)}>35</option>
<option${add_attribute("value", 37, 0)}>37</option>
<option${add_attribute("value", 39, 0)}>39</option>
<option${add_attribute("value", 41, 0)}>41</option>
<option${add_attribute("value", 43, 0)}>43</option>
<option${add_attribute("value", 45, 0)}>45</option>
<option${add_attribute("value", 47, 0)}>47</option>
<option${add_attribute("value", 49, 0)}>49</option>
<option${add_attribute("value", 51, 0)}>51</option>` : `${changed_wifi_data.config.wifi_wifi5.region == 1 ? `<option${add_attribute("value", 40, 0)}>40</option>` : ``}`}</select></td></tr>



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Encryption</p></td><td class="pl-5 pt-5"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48"><option${add_attribute("value", 0, 0)}>WPA3</option></select></td></tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_wifi_data.config.wifi_wifi5.password, 0)}></td></tr></table>` : ``}`;
          }
        })}


 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Bluetooth" }, {}, {
          default: () => {
            return `<table><tr><td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">${validate_component(Toggle, "Toggle").$$render(
              $$result,
              {
                class: "w-60",
                checked: changed_wifi_data.config.wifi_bluetooth.enable
              },
              {
                checked: ($$value) => {
                  changed_wifi_data.config.wifi_bluetooth.enable = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td></tr></table>

${changed_wifi_data.config.wifi_bluetooth.enable ? `<table><tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_wifi_data.config.wifi_bluetooth.ssid, 0)}></td>
<td class="pl-5 pt-5"></td></tr></table>` : ``}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Wifi as default
};
