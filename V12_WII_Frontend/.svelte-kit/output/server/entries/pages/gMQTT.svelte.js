import { c as create_ssr_component, v as validate_component, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-92087dcd.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { sdataLoggerConfig, ChangedSDataLoggerConfig, genericMQTTConfig, GenericMQTTConfigChangedLog, ChangedGenericMQTTConfig, SDatalogger_ProxyMode_Cloud_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const GMQTT = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_generic_mqtt_data = {};
  sessionidG.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
  });
  genericMQTTConfig.subscribe((val) => {
  });
  GenericMQTTConfigChangedLog.subscribe((val) => {
  });
  ChangedGenericMQTTConfig.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  let modify_Modal = false;
  let modify_index;
  let NewItem = [
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    },
    {
      enable: 0,
      brokerHost: "",
      brokerPort: 12345,
      tls: 0,
      brokerCaCert: "testca.cert",
      clientCert: "testClient.cert",
      clientId: "",
      account: "",
      password: "",
      qos: "",
      keepAliveInterval: 60,
      dataCompression: 0
    }
  ];
  let new_item_index;
  let new_modal;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Profile" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render(
              $$result,
              {
                shadow: true,
                striped: true,
                tableNoWFull: true
              },
              {},
              {
                default: () => {
                  return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Enable`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {
                        default: () => {
                          return `No`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Broker Host`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Broker Port`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {
                        default: () => {
                          return `TLS`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Client ID`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Account`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `QoS`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Keep Alive Interval (sec)`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Data Compression`;
                        }
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {
                            default: () => {
                              return `${``}`;
                            }
                          })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1" }, {}, {})}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-1 w-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-4 !p-1" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                        }
                      })}

<tr class="${"pt-5"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
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
                      })}</td></tr>`;
                    }
                  })}

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


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Broker Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].brokerHost, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Broker Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].brokerPort, 0)}></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">TLS</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls
                          },
                          {
                            group: ($$value) => {
                              changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls = $$value;
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
                            group: changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls
                          },
                          {
                            group: ($$value) => {
                              changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls = $$value;
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
    <td class="${"pl-4 pt-4"}">${changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls == 0 ? `None` : `${changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Certificate ...</option>${``}</select>` : ``}`}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Local Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls == 0 ? `None` : `${changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Certificate ...</option>${``}</select>` : ``}`}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].clientId, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Account</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].account, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].password, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">QoS</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].qos, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Keep Alive Interval</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].keepAliveInterval, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">second(s)</p></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Compression</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataCompression
                          },
                          {
                            group: ($$value) => {
                              changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataCompression = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `No`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataCompression
                          },
                          {
                            group: ($$value) => {
                              changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataCompression = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `gzip`;
                            }
                          }
                        )}</div></td></tr>


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
                  )}
${validate_component(Modal, "Modal").$$render(
                    $$result,
                    {
                      size: "lg",
                      class: "w-full",
                      autoclose: true,
                      open: new_modal
                    },
                    {
                      open: ($$value) => {
                        new_modal = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `<label><input type="${"checkbox"}"${add_attribute("checked", NewItem[new_item_index].enable, 1)}>
  Enable
</label>
<p class="${"mt-10"}"></p>



<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Broker Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewItem[new_item_index].brokerHost, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Broker Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewItem[new_item_index].brokerPort, 0)}></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">TLS</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: NewItem[new_item_index].tls
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].tls = $$value;
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
                            group: NewItem[new_item_index].tls
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].tls = $$value;
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
    <td class="${"pl-4 pt-4"}">${NewItem[new_item_index].tls == 0 ? `None` : `${NewItem[new_item_index].tls == 1 ? `${escape(NewItem[new_item_index].brokerCaCert)}` : ``}`}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Local Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${NewItem[new_item_index].tls == 0 ? `None` : `${NewItem[new_item_index].tls == 1 ? `${escape(NewItem[new_item_index].clientCert)}` : ``}`}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewItem[new_item_index].clientId, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Account</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewItem[new_item_index].account, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewItem[new_item_index].password, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">QoS</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewItem[new_item_index].qos, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Keep Alive Interval</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewItem[new_item_index].keepAliveInterval, 0)}></td><td><p class="${"pl-2 pt-4 text-lg"}">second(s)</p></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Compression</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: NewItem[new_item_index].dataCompression
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].dataCompression = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `No`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: NewItem[new_item_index].dataCompression
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].dataCompression = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `gzip`;
                            }
                          }
                        )}</div></td></tr>


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
                            return `Add`;
                          }
                        })}</td></tr></table>`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  GMQTT as default
};
