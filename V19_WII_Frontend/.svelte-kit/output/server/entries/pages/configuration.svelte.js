import { c as create_ssr_component, v as validate_component, e as escape } from "../../_app/immutable/chunks/index-581edbff.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-adf7b2fc.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-90e348d9.js";
/* empty css                                                                            */import { T as Toggle } from "../../_app/immutable/chunks/Toggle-2edcf18a.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-0d1592aa.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-08b89a3a.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-ab4c1927.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-5bfda8b2.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { wholeConfigVersion, configurationConfig, ConfigurationP2EConfigChangedLog, ChangedConfigurationConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-100761d4.js";
import "../../_app/immutable/chunks/Frame-9b664c22.js";
import "../../_app/immutable/chunks/Radio-f5732ac4.js";
import "../../_app/immutable/chunks/Label-e9931984.js";
import "../../_app/immutable/chunks/CloseButton-60d81157.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Configuration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let overwriteLAN = false;
  let defaultModal = false;
  let fileImportName = "No file chosen";
  sessionidG.subscribe((val) => {
  });
  wholeConfigVersion.subscribe((val) => {
  });
  configurationConfig.subscribe((val) => {
  });
  ConfigurationP2EConfigChangedLog.subscribe((val) => {
  });
  ChangedConfigurationConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Local" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Export Configuration
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-1 text-lg font-light text-right"}">Backup Current Configuration</p></td>

<td class="${"pl-5 pt-1"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Export`;
                      }
                    })}</td></tr></table>`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Import Configuration
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Configuration File</p></td>
<td class="${"pl-5 pt-5"}"><label for="${"importConfigUpload"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg"}">Choose File</label>
<input type="${"file"}" id="${"importConfigUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}" style="${"display: none;"}">
<span class="${"pl-4"}">${escape(fileImportName)}</span></td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Import`;
                      }
                    })}</td></tr>
<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Overwrite LAN Configuration</p></td>
    <td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: overwriteLAN },
                      {
                        checked: ($$value) => {
                          overwriteLAN = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr></table>




${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "md",
                        class: "w-full",
                        permanent: true,
                        open: defaultModal
                      },
                      {
                        open: ($$value) => {
                          defaultModal = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${``}

<table>${`<tr>${`<td>${validate_component(Spinner, "Spinner").$$render($$result, { size: 16 }, {}, {})}</td>
<td><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Verifying configuration now ....
</p></td>`}</tr>`}</table>`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Configuration as default
};
