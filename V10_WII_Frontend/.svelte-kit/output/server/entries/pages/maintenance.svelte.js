import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-337e42f7.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { maintenanceConfig, MaintenanceConfigChangedLog, ChangedMaintenanceConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Maintenance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  sessionidG.subscribe((val) => {
  });
  maintenanceConfig.subscribe((val) => {
  });
  MaintenanceConfigChangedLog.subscribe((val) => {
  });
  ChangedMaintenanceConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Update Local Firmware</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"file"}" id="${"FwrUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}"></td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Update`;
      }
    })}</td>

<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>


    <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Enable EW-FOTA</p></td>
<td class="${"pl-5 pt-5"}">${``}</td></tr>


<tr class="${"pt-5"}"><td></td>
    <td></td>


    <td>${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
      default: () => {
        return `<svg class="${"mr-2 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
      }
    })}</td>
    <td></td>
    <td></td></tr></table>


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
<td><p class="${"pl-5"}" style="${"color:red; font-size:18px"}">Verifying firmware now ....
</p></td>`}</tr>`}</table>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Maintenance as default
};
