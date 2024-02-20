import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-337e42f7.js";
import { sessionidG } from "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
const Configuration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  sessionidG.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table>${``}

<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Restore Configuration</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"file"}" id="${"configUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}"></td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Upload`;
      }
    })}</td></tr></table>




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
  } while (!$$settled);
  return $$rendered;
});
export {
  Configuration as default
};
