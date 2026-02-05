import { c as create_ssr_component, v as validate_component, o as each, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-54377ec4.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-e8760b90.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { remoteServiceConfig, RemoteServiceConfigMqttChangedLog, RemoteServiceConfigRestfulChangedLog, RemoteServiceConfigRemoteControlChangedLog, ChangedRemoteServiceConfig, genericMQTTConfig, ChangedGenericMQTTConfig, awsIoTcoreConfig, ChangedAWSIoTcoreConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
const RemoteS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_remote_service_data = "";
  let CloudProfile = [];
  sessionidG.subscribe((val) => {
  });
  remoteServiceConfig.subscribe((val) => {
  });
  RemoteServiceConfigMqttChangedLog.subscribe((val) => {
  });
  RemoteServiceConfigRestfulChangedLog.subscribe((val) => {
  });
  RemoteServiceConfigRemoteControlChangedLog.subscribe((val) => {
  });
  ChangedRemoteServiceConfig.subscribe((val) => {
  });
  genericMQTTConfig.subscribe((val) => {
  });
  ChangedGenericMQTTConfig.subscribe((val) => {
  });
  awsIoTcoreConfig.subscribe((val) => {
  });
  ChangedAWSIoTcoreConfig.subscribe((val) => {
  });
  let modify_Modal = false;
  let modify_index;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "REST" }, {}, {
          default: () => {
            return `<table>${``}</table>


<p class="pt-10"></p>

<table><tr class="pt-5"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "MQTT" }, {}, {
          default: () => {
            return `<table>${``}</table>

<p class="pt-10"></p>
${``}

<p class="pt-10"></p>

<table><tr class="pt-5"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
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
                  return `<form action="#"><label>${``}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close"><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table><tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class="pl-4 pt-4" colspan="3"><select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2">${each(CloudProfile, (Cloud) => {
                    return `<option${add_attribute("value", Cloud.value, 0)}>${escape(Cloud.name)}</option>`;
                  })}</select></td>
   <td></td>
    <td></td></tr>



<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">MQTT_ID_Nick_Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].mqtt_id_nickname, 0)}></td></tr>


  <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Modify`;
                    }
                  })}</td></tr></table></form>`;
                }
              }
            )}`;
          }
        })}
${validate_component(TabItem, "TabItem").$$render($$result, { title: "Remote Control" }, {}, {
          default: () => {
            return `<table>${``}</table>
${``}


<p class="pt-10"></p>

<table><tr class="pt-5"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
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
  RemoteS as default
};
