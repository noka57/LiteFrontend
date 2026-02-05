import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-54377ec4.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-2553c295.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-5b795065.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-e8760b90.js";
import { T as Table } from "../../_app/immutable/chunks/Table-a510ae4f.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-85264b11.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-20bd2092.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-db67647d.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-0910d666.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-92f4be17.js";
import { sessionidG } from "../endpoints/sessionG.js";
/* empty css                                           */import { sdataLoggerConfig, ChangedSDataLoggerConfig, azureConfig, AzHub_ConfigChangedLog, AzHubDPS_ConfigChangedLog, AzCentral_ConfigChangedLog, ChangedAzureConfig, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-c602be1d.js";
import "../../_app/immutable/chunks/index-df2ccd83.js";
const Azure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_azure_data = {};
  let NewHubConnectionStringEnable = false;
  let NewHubConnectionString = "";
  let ModifyHubConnectionStringEnable = false;
  let ModifyHubConnectionString = "";
  sessionidG.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
  });
  azureConfig.subscribe((val) => {
  });
  AzHub_ConfigChangedLog.subscribe((val) => {
  });
  AzHubDPS_ConfigChangedLog.subscribe((val) => {
  });
  AzCentral_ConfigChangedLog.subscribe((val) => {
  });
  ChangedAzureConfig.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  let modify_Modal = false;
  let modify_index;
  let NewItem = [
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      azHubName: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    }
  ];
  let new_item_index;
  let new_modal;
  let NewItemDPS = [
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      idScope: "",
      RegistrationID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    }
  ];
  let modify_Modal_dps = false;
  let modify_dps_index;
  let new_item_dps_index;
  let new_modal_dps;
  let NewItemCentral = [
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    },
    {
      enable: false,
      delete: false,
      applicationName: "",
      idScope: "",
      deviceID: "",
      symmetric_key_primary: "",
      modelID: "",
      attestation: 0,
      machineCAcert: "",
      machineCert: "",
      enrollment: 0,
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0
    }
  ];
  let modify_Modal_central = false;
  let modify_central_index;
  let new_item_central_index;
  let new_modal_central;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Hub" }, {}, {
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
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
                          return `Hub Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Device ID`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Attestation`;
                        }
                      })}        
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Model ID`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Data Push Interval`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Link Lost Retransmit`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Data Priority`;
                        }
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                            default: () => {
                              return `${``}`;
                            }
                          })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
         ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                        }
                      })}

<tr class="pt-5"><td></td>
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
                        return `<form action="#"><label>${``}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close"><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table><tr><td class="pl-5 pt-5"><input type="checkbox" class="mb-1"${add_attribute("checked", ModifyHubConnectionStringEnable, 1)}>
  <span class="pl-1 pt-3 text-lg font-light text-right">Use Connection String</span></td>
<td class="pl-5 pt-5" colspan="6">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled${add_attribute("value", ModifyHubConnectionString, 0)}>`}</td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Hub Name</p></td><td class="pl-5 pt-5">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName, 0)}>`}</td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID, 0)}>`}</td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azHub_profile[modify_index].modelID, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 0,
                            group: changed_azure_data.config.cloud_azHub_profile[modify_index].attestation
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azHub_profile[modify_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `SAS`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: changed_azure_data.config.cloud_azHub_profile[modify_index].attestation
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azHub_profile[modify_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `X509`;
                            }
                          }
                        )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

${changed_azure_data.config.cloud_azHub_profile[modify_index].attestation == 0 ? `<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary, 0)}>`}</td></tr>` : `${changed_azure_data.config.cloud_azHub_profile[modify_index].attestation == 1 ? `<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="2"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="2"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>` : ``}`}




 <tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: changed_azure_data.config.cloud_azHub_profile[modify_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azHub_profile[modify_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Right Away`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: changed_azure_data.config.cloud_azHub_profile[modify_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azHub_profile[modify_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `User Defined (mins): `;
                            }
                          }
                        )}
${changed_azure_data.config.cloud_azHub_profile[modify_index].dataPushInterval == 0 ? `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>` : `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16"${add_attribute("value", changed_azure_data.config.cloud_azHub_profile[modify_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4"><div class="flex gap-4"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azHub_profile[modify_index].linkLostRetransmit, 0)}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p></div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: changed_azure_data.config.cloud_azHub_profile[modify_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azHub_profile[modify_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Latest First`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: changed_azure_data.config.cloud_azHub_profile[modify_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azHub_profile[modify_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `First In, First Out `;
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
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                        return `<label><input type="checkbox"${add_attribute("checked", NewItem[new_item_index].enable, 1)}>
  Enable
</label>
<p class="mt-10"></p>



<table><tr><td class="pl-5 pt-5"><input type="checkbox" class="mb-1"${add_attribute("checked", NewHubConnectionStringEnable, 1)}>
  <span class="pl-1 pt-3 text-lg font-light text-right">Use Connection String</span></td>
<td class="pl-5 pt-5" colspan="6">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled${add_attribute("value", NewHubConnectionString, 0)}>`}</td></tr>



<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Hub Name</p></td><td class="pl-5 pt-5">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItem[new_item_index].azHubName, 0)}>`}</td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItem[new_item_index].deviceID, 0)}>`}</td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItem[new_item_index].modelID, 0)}>`}</td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${`${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 0,
                            group: NewItem[new_item_index].attestation
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `SAS`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: NewItem[new_item_index].attestation
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `X509`;
                            }
                          }
                        )}`}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>



${NewItem[new_item_index].attestation == 0 ? `<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6">${`<input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItem[new_item_index].symmetric_key_primary, 0)}>`}</td></tr>` : `${NewItem[new_item_index].attestation == 1 ? `<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="2"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>


<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="2"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>` : ``}`}



 <tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: NewItem[new_item_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Right Away`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: NewItem[new_item_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `User Defined (mins): `;
                            }
                          }
                        )}
${NewItem[new_item_index].dataPushInterval == 0 ? `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>` : `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16"${add_attribute("value", NewItem[new_item_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4"><div class="flex gap-4"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItem[new_item_index].linkLostRetransmit, 0)}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p></div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: NewItem[new_item_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Latest First`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: NewItem[new_item_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              NewItem[new_item_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `First In, First Out `;
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
        })}

    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "DPS" }, {}, {
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
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
                          return `ID Scope`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Registration ID`;
                        }
                      })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Enrollment`;
                        }
                      })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Attestation`;
                        }
                      })}      
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Model ID`;
                        }
                      })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Data Push Interval`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Link Lost Retransmit`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Data Priority`;
                        }
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                            default: () => {
                              return `${``}`;
                            }
                          })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
       ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                        }
                      })}

<tr class="pt-5"><td></td>
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
    <td></td>
    <td></td>
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                        default: () => {
                          return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
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
                      open: modify_Modal_dps
                    },
                    {
                      open: ($$value) => {
                        modify_Modal_dps = $$value;
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


<table><tr><td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].idScope, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Registration ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].RegistrationID, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].modelID, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 0,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].enrollment
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].enrollment = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Individual`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].enrollment
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].enrollment = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Group`;
                            }
                          }
                        )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>





<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 0,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `SAS`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `X509`;
                            }
                          }
                        )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

${changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation == 0 ? `<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].symmetric_key_primary, 0)}></td></tr>` : `${changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation == 1 ? `<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>


<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>` : ``}`}





 <tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Right Away`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `User Defined (mins): `;
                            }
                          }
                        )}
${changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPushInterval == 0 ? `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>` : `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16"${add_attribute("value", changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4"><div class="flex gap-4"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].linkLostRetransmit, 0)}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p></div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Latest First`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `First In, First Out `;
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
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                      open: new_modal_dps
                    },
                    {
                      open: ($$value) => {
                        new_modal_dps = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `<label><input type="checkbox"${add_attribute("checked", NewItemDPS[new_item_dps_index].enable, 1)}>
  Enable
</label>
<p class="mt-10"></p>



<table><tr><td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemDPS[new_item_dps_index].idScope, 0)}></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Registration ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemDPS[new_item_dps_index].RegistrationID, 0)}></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>




<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemDPS[new_item_dps_index].modelID, 0)}></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 0,
                            group: NewItemDPS[new_item_dps_index].enrollment
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].enrollment = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Individual`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: NewItemDPS[new_item_dps_index].enrollment
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].enrollment = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Group`;
                            }
                          }
                        )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>




<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 0,
                            group: NewItemDPS[new_item_dps_index].attestation
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `SAS`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            class: "pb-2",
                            value: 1,
                            group: NewItemDPS[new_item_dps_index].attestation
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].attestation = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `X509`;
                            }
                          }
                        )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

${NewItemDPS[new_item_dps_index].attestation == 0 ? `<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemDPS[new_item_dps_index].symmetric_key_primary, 0)}></td></tr>` : `${NewItemDPS[new_item_dps_index].attestation == 1 ? `<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>


<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>` : ``}`}

 <tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: NewItemDPS[new_item_dps_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Right Away`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: NewItemDPS[new_item_dps_index].dataPushInterval
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].dataPushInterval = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `User Defined (mins): `;
                            }
                          }
                        )}
${NewItemDPS[new_item_dps_index].dataPushInterval == 0 ? `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>` : `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16"${add_attribute("value", NewItemDPS[new_item_dps_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4"><div class="flex gap-4"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemDPS[new_item_dps_index].linkLostRetransmit, 0)}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p></div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 0,
                            group: NewItemDPS[new_item_dps_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `Latest First`;
                            }
                          }
                        )}
  ${validate_component(Radio, "Radio").$$render(
                          $$result,
                          {
                            value: 1,
                            group: NewItemDPS[new_item_dps_index].dataPriority
                          },
                          {
                            group: ($$value) => {
                              NewItemDPS[new_item_dps_index].dataPriority = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `First In, First Out `;
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
        })}

      ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Central" }, {}, {
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
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
                          return `Application Name`;
                        }
                      })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `ID Scope`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Device ID`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Enrollment`;
                        }
                      })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Attestation`;
                        }
                      })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Model ID`;
                        }
                      })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Data Push Interval`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Link Lost Retransmit`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                        default: () => {
                          return `Data Priority`;
                        }
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                            default: () => {
                              return `${``}`;
                            }
                          })}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

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

<tr class="pt-5"><td></td>
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

    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                        default: () => {
                          return `<svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path></svg>Save`;
                        }
                      })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                        $$result,
                        {
                          size: "lg",
                          class: "w-full",
                          permanent: true,
                          open: modify_Modal_central
                        },
                        {
                          open: ($$value) => {
                            modify_Modal_central = $$value;
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


<table><tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Application Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azCentral_profile[modify_central_index].applicationName, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azCentral_profile[modify_central_index].idScope, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azCentral_profile[modify_central_index].deviceID, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azCentral_profile[modify_central_index].modelID, 0)}></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 0,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].enrollment
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].enrollment = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Individual`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 1,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].enrollment
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].enrollment = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Group`;
                                }
                              }
                            )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>






<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 0,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `SAS`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 1,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `X509`;
                                }
                              }
                            )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

${changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation == 0 ? `<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azCentral_profile[modify_central_index].symmetric_key_primary, 0)}></td></tr>` : `${changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation == 1 ? `<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>


<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>` : ``}`}

 <tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Right Away`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `User Defined (mins): `;
                                }
                              }
                            )}
${changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPushInterval == 0 ? `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>` : `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16"${add_attribute("value", changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4"><div class="flex gap-4"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", changed_azure_data.config.cloud_azCentral_profile[modify_central_index].linkLostRetransmit, 0)}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p></div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Latest First`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  changed_azure_data.config.cloud_azCentral_profile[modify_central_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `First In, First Out `;
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
    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                          open: new_modal_central
                        },
                        {
                          open: ($$value) => {
                            new_modal_central = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<label><input type="checkbox"${add_attribute("checked", NewItemCentral[new_item_central_index].enable, 1)}>
  Enable
</label>
<p class="mt-10"></p>



<table><tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Application Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemCentral[new_item_central_index].applicationName, 0)}></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemCentral[new_item_central_index].idScope, 0)}></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemCentral[new_item_central_index].deviceID, 0)}></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemCentral[new_item_central_index].modelID, 0)}></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>


<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 0,
                                group: NewItemCentral[new_item_central_index].enrollment
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].enrollment = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Individual`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 1,
                                group: NewItemCentral[new_item_central_index].enrollment
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].enrollment = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Group`;
                                }
                              }
                            )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>




<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5"><div class="flex gap-2">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 0,
                                group: NewItemCentral[new_item_central_index].attestation
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].attestation = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `SAS`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 1,
                                group: NewItemCentral[new_item_central_index].attestation
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].attestation = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `X509`;
                                }
                              }
                            )}</div></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td></tr>

${NewItemCentral[new_item_central_index].attestation == 0 ? `<tr><td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemCentral[new_item_central_index].symmetric_key_primary, 0)}></td></tr>` : `${NewItemCentral[new_item_central_index].attestation == 1 ? `<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>


<tr><td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"><option disabled="" value="none">Choose Certificate ...</option>${``}</select></td></tr>` : ``}`}

 <tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: NewItemCentral[new_item_central_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Right Away`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: NewItemCentral[new_item_central_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `User Defined (mins): `;
                                }
                              }
                            )}
${NewItemCentral[new_item_central_index].dataPushInterval == 0 ? `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>` : `<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16"${add_attribute("value", NewItemCentral[new_item_central_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4"><div class="flex gap-4"><input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"${add_attribute("value", NewItemCentral[new_item_central_index].linkLostRetransmit, 0)}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p></div></td></tr>

<tr><td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4"><div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: NewItemCentral[new_item_central_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Latest First`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: NewItemCentral[new_item_central_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  NewItemCentral[new_item_central_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `First In, First Out `;
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td class="pl-10">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                              default: () => {
                                return `Add`;
                              }
                            })}</td></tr></table>`;
                          }
                        }
                      )}`;
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
  Azure as default
};
