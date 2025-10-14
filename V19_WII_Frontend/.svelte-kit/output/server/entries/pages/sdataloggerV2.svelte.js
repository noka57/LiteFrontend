import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-581edbff.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-adf7b2fc.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-90e348d9.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-f5732ac4.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-0d1592aa.js";
import { S as StepIndicator } from "../../_app/immutable/chunks/StepIndicator-9424f525.js";
import { T as Table } from "../../_app/immutable/chunks/Table-c5072c61.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-64085b64.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-6ec31ad9.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-7cac6071.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-ab4c1927.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-5bfda8b2.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { sdataLoggerConfig, SDatalogger_General_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_ProxyMode_Topic_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog, SDatalogger_MonitorMode_Topic_ConfigChangedLog, ChangedSDataLoggerConfig, modbusConfig, ChangedModbusConfig, genericMQTTConfig, ChangedGenericMQTTConfig, awsIoTcoreConfig, ChangedAWSIoTcoreConfig, azureConfig, ChangedAzureConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-100761d4.js";
import "../../_app/immutable/chunks/Frame-9b664c22.js";
import "../../_app/immutable/chunks/Label-e9931984.js";
import "../../_app/immutable/chunks/CloseButton-60d81157.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const SdataloggerV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep = 1;
  let steps = ["Step 1", "Step 2", "Step 3"];
  let modalElement;
  let changed_sdata_logger_data = {};
  sessionidG.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  SDatalogger_General_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
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
  });
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
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
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      modbusTCPSlaveTag: [],
      modbusTCPMasterTag: [],
      modbusRTUMasterTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    }
  ];
  let new_proxy_edge_modal = false;
  let new_proxy_edge_index;
  let modify_proxy_edge_modal = false;
  let modify_proxy_edge_index;
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
                                  return `Modbus Tag`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Sampling Condition`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Cloud Setting`;
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
                              autoclose: false,
                              size: "lg",
                              class: "w-full",
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
                                return `${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}


<table${add_attribute("this", modalElement, 0)}>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", new_proxy_edge[new_proxy_edge_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Sampling Condition</p></td>
    <td class="${"pl-4 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-1",
                                    value: 0,
                                    group: new_proxy_edge[new_proxy_edge_index].samplingCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].samplingCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Period`;
                                    }
                                  }
                                )}

${new_proxy_edge[new_proxy_edge_index].samplingCondition == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_proxy_edge[new_proxy_edge_index].periodMS, 0)}> <p class="${"pt-2"}">ms</p>` : ``}</div></td>
    <td></td>
    <td></td></tr>


<tr><td><p class="${"pl-4 pt-8 text-lg font-light text-right"}">Modbus Tag</p></td>
 
 <td class="${"pl-5 pt-8"}" colspan="${"3"}"><button type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg"}">Choose Tag

${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`}</button>  

${``}</td></tr>





<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Next`;
                                  }
                                })}</td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>`}</table>`;
                              }
                            }
                          )}




${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              autoclose: false,
                              size: "lg",
                              class: "w-full",
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
                                return `<form action="${"#"}"><button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}

<p class="${"mt-6"}"></p>

<table${add_attribute("this", modalElement, 0)}>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Sampling Condition</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-1",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Period`;
                                    }
                                  }
                                )}

${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].periodMS, 0)}> <p class="${"pt-2"}">ms</p>` : ``}</div></td>
    <td></td>
    <td></td></tr>


<tr><td><p class="${"pl-4 pt-8 text-lg font-light text-right"}">Modbus Tag</p></td>
   
 <td class="${"pl-5 pt-8"}" colspan="${"3"}"><button type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg"}">Choose Tag

${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`}</button>  

${``}</td></tr>





<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Next`;
                                  }
                                })}</td></tr>



<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>

<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}"></td></tr>`}</table></form>`;
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
  SdataloggerV2 as default
};
