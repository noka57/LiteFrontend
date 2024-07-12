import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-4327f458.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-7daba062.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-018e0198.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { remoteServiceConfig, RemoteServiceConfigChangedLog, ChangedRemoteServiceConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Label-40d01e23.js";
import "../../_app/immutable/chunks/Frame-82afdce4.js";
import "../../_app/immutable/chunks/CloseButton-9e3e1305.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
const RemoteS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_remote_service_data = {};
  sessionidG.subscribe((val) => {
  });
  remoteServiceConfig.subscribe((val) => {
  });
  RemoteServiceConfigChangedLog.subscribe((val) => {
  });
  ChangedRemoteServiceConfig.subscribe((val) => {
  });
  let modify_Modal = false;
  let modify_index;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table>${``}</table>

<p class="${"pt-10"}"></p>
${``}

<p class="${"pt-10"}"></p>

<table><tr class="${"pt-5"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
      default: () => {
        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
      }
    })}</td></tr></table>



${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "lg",
        class: "w-full",
        permanent: true,
        open: modify_Modal
      },
      {
        open: ($$value) => {
          modify_Modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Broker Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].brokerHost, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Broker Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].brokerPort, 0)}></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">TLS</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              class: "pb-2",
              value: 1,
              group: changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls
            },
            {
              group: ($$value) => {
                changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Yes`;
              }
            }
          )}
  ${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              class: "pb-2",
              value: 0,
              group: changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls
            },
            {
              group: ($$value) => {
                changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `No`;
              }
            }
          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Broker CA Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 0 ? `None` : `${changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Certificate ...</option>${``}</select>` : ``}`}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Local Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 0 ? `None` : `${changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Certificate ...</option>${``}</select>` : ``}`}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].clientId, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Account</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].account, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].password, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">QoS</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].qos, 0)}></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Retained</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              class: "pb-2",
              value: 1,
              group: changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].retained
            },
            {
              group: ($$value) => {
                changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].retained = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Yes`;
              }
            }
          )}
  ${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              class: "pb-2",
              value: 0,
              group: changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].retained
            },
            {
              group: ($$value) => {
                changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].retained = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `No`;
              }
            }
          )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Keep Alive Interval</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].keepAliveInterval, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">second(s)</p></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MQTT_ID_Nick_Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].mqtt_id_nickname, 0)}></td></tr>


  <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
            default: () => {
              return `Modify`;
            }
          })}</td></tr></table></form>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  RemoteS as default
};
