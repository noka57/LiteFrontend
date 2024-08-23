import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-4327f458.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-e4bc3351.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-7daba062.js";
import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-aedd9cb3.js";
import { T as Textarea } from "../../_app/immutable/chunks/Textarea-90bca3e2.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-018e0198.js";
import { T as Tooltip } from "../../_app/immutable/chunks/Tooltip-be3b95ac.js";
import { T as Table } from "../../_app/immutable/chunks/Table-8c701dfb.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-890eeeae.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-bb920ec2.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-75ee61b0.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-d05d7350.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { sdataLoggerConfig, SDatalogger_General_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_ProxyMode_Cloud_ConfigChangedLog, SDatalogger_ProxyMode_Topic_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog, SDatalogger_MonitorMode_Topic_ConfigChangedLog, ChangedSDataLoggerConfig, modbusConfig, ChangedModbusConfig, genericMQTTConfig, ChangedGenericMQTTConfig, awsIoTcoreConfig, ChangedAWSIoTcoreConfig, azureConfig, ChangedAzureConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
import "../../_app/immutable/chunks/Frame-82afdce4.js";
import "../../_app/immutable/chunks/Label-40d01e23.js";
import "../../_app/immutable/chunks/CloseButton-9e3e1305.js";
import "@popperjs/core";
const sdatalogger_svelte_svelte_type_style_lang = "";
const css = {
  code: '.strikeout.svelte-1gf39g8{text-decoration:line-through;color:#999;position:relative}.strikeout.svelte-1gf39g8:before{content:"";position:absolute;top:50%;left:0;right:0;border-bottom:1px solid #111;transform:translateY(-50%)}.strikeout.svelte-1gf39g8:after{content:"\\00B7";font-size:1px;position:absolute;bottom:0;left:0;right:0;text-align:center}',
  map: null
};
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Sdatalogger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_sdata_logger_data = {};
  let saved_changed_sdata_logger_data = {};
  let saved_changed_modbus_data = "";
  sessionidG.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  SDatalogger_General_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Topic_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Topic_ConfigChangedLog.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
    saved_changed_sdata_logger_data = val;
  });
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
    saved_changed_modbus_data = val;
  });
  genericMQTTConfig.subscribe((val) => {
  });
  ChangedGenericMQTTConfig.subscribe((val) => {
  });
  awsIoTcoreConfig.subscribe((val) => {
  });
  ChangedAWSIoTcoreConfig.subscribe((val) => {
  });
  azureConfig.subscribe((val) => {
  });
  ChangedAzureConfig.subscribe((val) => {
  });
  let CloudProfile = [];
  let new_proxy_edge = [
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 1,
      postprocessing: 1,
      postprocessingValue: 1,
      postprocessedDisplay: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    }
  ];
  let new_proxy_edge_modal = false;
  let new_proxy_edge_index;
  let modify_proxy_edge_modal = false;
  let modify_proxy_edge_index;
  let new_monitor_edge_modal = false;
  let new_monitor_edge_index;
  let new_monitor_edge = [
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      modbusDataModel: "",
      dataType: 2,
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    }
  ];
  let modify_monitor_edge_modal = false;
  let modify_monitor_edge_index;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-48"}"><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Smart Data Logger</p></td>
<td class="${"pl-5 pt-5"}">${``}</td>
<td></td></tr></table>


${``}

<p class="${"pt-5"}"></p>

<table><tr class="${"pt-5"}"><td></td>
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

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Proxy Mode" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Edge Data
    </span>`;
                  },
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Modbus Data Model`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Data Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Postprocessing`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Postprocessed Display`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                                default: () => {
                                  return `Data Log Format`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${``}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
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
                              open: new_proxy_edge_modal
                            },
                            {
                              open: ($$value) => {
                                new_proxy_edge_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Tag Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_proxy_edge[new_proxy_edge_index].tagName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Data Model</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master, (MasterDataModel, index) => {
                                  return `<option${add_attribute("value", MasterDataModel.dataModelName, 0)}>${escape(MasterDataModel.dataModelName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.slave, (SlaveDataModel, index) => {
                                  return `<option${add_attribute("value", SlaveDataModel.dataModelName, 0)}>${escape(SlaveDataModel.dataModelName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 10, 0)}>UInt8</option><option${add_attribute("value", 11, 0)}>Int8</option><option${add_attribute("value", 2, 0)}>UInt16</option><option${add_attribute("value", 3, 0)}>Int16</option><option${add_attribute("value", 4, 0)}>UInt32</option><option${add_attribute("value", 5, 0)}>Int32</option><option${add_attribute("value", 8, 0)}>UInt64</option><option${add_attribute("value", 9, 0)}>Int64</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Postprocessing</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>


   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    id: "operand_value",
                                    name: "operand_value",
                                    type: "number",
                                    label: "operand_value",
                                    value: new_proxy_edge[new_proxy_edge_index].postprocessingValue
                                  },
                                  {
                                    value: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].postprocessingValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Postprocessed Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_proxy_edge[new_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_proxy_edge[new_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: new_proxy_edge[new_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Log Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_proxy_edge[new_proxy_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$}`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_proxy_edge[new_proxy_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Log Format",
                                    rows: "12",
                                    name: "message",
                                    value: new_proxy_edge[new_proxy_edge_index].userDefineedData
                                  },
                                  {
                                    value: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].userDefineedData = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
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
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}




${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_proxy_edge_modal
                            },
                            {
                              open: ($$value) => {
                                modify_proxy_edge_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Tag Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].tagName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Data Model</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master, (MasterDataModel, index) => {
                                  return `<option${add_attribute("value", MasterDataModel.dataModelName, 0)}>${escape(MasterDataModel.dataModelName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.slave, (SlaveDataModel, index) => {
                                  return `<option${add_attribute("value", SlaveDataModel.dataModelName, 0)}>${escape(SlaveDataModel.dataModelName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 10, 0)}>UInt8</option><option${add_attribute("value", 11, 0)}>Int8</option><option${add_attribute("value", 2, 0)}>UInt16</option><option${add_attribute("value", 3, 0)}>Int16</option><option${add_attribute("value", 4, 0)}>UInt32</option><option${add_attribute("value", 5, 0)}>Int32</option><option${add_attribute("value", 8, 0)}>UInt64</option><option${add_attribute("value", 9, 0)}>Int64</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Postprocessing</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>


   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    id: "operand_value",
                                    name: "operand_value",
                                    type: "number",
                                    label: "operand_value",
                                    value: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessingValue
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessingValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Postprocessed Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Log Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$}`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataLogFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Log Format",
                                    rows: "12",
                                    name: "message",
                                    value: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].userDefineedData
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].userDefineedData = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
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
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Cloud Settings
    </span>`;
                  },
                  default: () => {
                    return `${``}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Topic Settings
    </span>`;
                  },
                  default: () => {
                    return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose Cloud Profile ...</option>${each(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile, (TargetProfile, index) => {
                      return `<option${add_attribute("value", index, 0)}>${escape(TargetProfile)}</option>`;
                    })}</select>

<p class="${"pt-4"}"></p>

${``}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Monitor Mode" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Edge Data
    </span>`;
                  },
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
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Modbus Data Model`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Data Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Display`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Data Log Format`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
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
                              open: new_monitor_edge_modal
                            },
                            {
                              open: ($$value) => {
                                new_monitor_edge_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Tag Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_monitor_edge[new_monitor_edge_index].tagName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Data Model</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master, (MasterDataModel, index) => {
                                  return `<option${add_attribute("value", MasterDataModel.dataModelName, 0)}>${escape(MasterDataModel.dataModelName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.slave, (SlaveDataModel, index) => {
                                  return `<option${add_attribute("value", SlaveDataModel.dataModelName, 0)}>${escape(SlaveDataModel.dataModelName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 10, 0)}>UInt8</option><option${add_attribute("value", 11, 0)}>Int8</option><option${add_attribute("value", 2, 0)}>UInt16</option><option${add_attribute("value", 3, 0)}>Int16</option><option${add_attribute("value", 4, 0)}>UInt32</option><option${add_attribute("value", 5, 0)}>Int32</option><option${add_attribute("value", 8, 0)}>UInt64</option><option${add_attribute("value", 9, 0)}>Int64</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>




<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_monitor_edge[new_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_monitor_edge[new_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: new_monitor_edge[new_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Log Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_monitor_edge[new_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]}`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_monitor_edge[new_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Log Format",
                                    rows: "12",
                                    name: "message",
                                    value: new_monitor_edge[new_monitor_edge_index].userDefineedData
                                  },
                                  {
                                    value: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].userDefineedData = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
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
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_monitor_edge_modal
                            },
                            {
                              open: ($$value) => {
                                modify_monitor_edge_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Tag Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].tagName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Data Model</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master, (MasterDataModel, index) => {
                                  return `<option${add_attribute("value", MasterDataModel.dataModelName, 0)}>${escape(MasterDataModel.dataModelName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_data_model.slave, (SlaveDataModel, index) => {
                                  return `<option${add_attribute("value", SlaveDataModel.dataModelName, 0)}>${escape(SlaveDataModel.dataModelName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 10, 0)}>UInt8</option><option${add_attribute("value", 11, 0)}>Int8</option><option${add_attribute("value", 2, 0)}>UInt16</option><option${add_attribute("value", 3, 0)}>Int16</option><option${add_attribute("value", 4, 0)}>UInt32</option><option${add_attribute("value", 5, 0)}>Int32</option><option${add_attribute("value", 8, 0)}>UInt64</option><option${add_attribute("value", 9, 0)}>Int64</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>




<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Log Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]}`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Log Format",
                                    rows: "12",
                                    name: "message",
                                    value: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
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
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Cloud Settings
    </span>`;
                  },
                  default: () => {
                    return `${``}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Topic Settings
    </span>`;
                  },
                  default: () => {
                    return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose Cloud Profile ...</option>${each(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile, (TargetProfile, index) => {
                      return `<option${add_attribute("value", index, 0)}>${escape(TargetProfile)}</option>`;
                    })}</select>



<p class="${"pt-4"}"></p>

${``}`;
                  }
                })}`;
              }
            })}`;
          }
        })}


    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Data Viewer" }, {}, {
          default: () => {
            return `<table><tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Select By</p></td></tr>



<tr><td></td><td class="${"pt-5"}"><label for="${"dviewerCP"}" class="${"text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"}"><input class="${"w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"}" type="${"checkbox"}" id="${"dviewerCP"}" name="${"dviewerCP"}" ${""}>
Cloud Profile</label></td>

    <td class="${"pl-4 pt-3"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80"}"><option disabled="${""}" value="${"none"}">Choose Profile ...</option>${each(CloudProfile, (profile, index) => {
              return `<option${add_attribute("value", profile.value, 0)}>${escape(profile.name)}</option>`;
            })}</select></td></tr>




<tr><td></td><td class="${"pt-5"}"><button type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full"}">Execute</button></td></tr></table>


<p class="${"pt-20"}"></p>

 ${validate_component(Table, "Table").$$render(
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
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Timestamp`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Mode`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Edge Data Alias Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Cloud Profile`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Content`;
                        }
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}`;
                    }
                  })}`;
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
  Sdatalogger as default
};
