import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-e6faea8a.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { F as Fileupload } from "../../_app/immutable/chunks/Fileupload-0473b075.js";
import "../../_app/immutable/chunks/Input-e01843aa.js";
const Configuration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Backup Current Configuration</p></td>

<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Download`;
      }
    })}</td></tr>


<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Restore Configuration</p></td>
<td class="${"pl-5 pt-5"}">${validate_component(Fileupload, "Fileupload").$$render(
      $$result,
      { id: "filetest", value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Upload`;
      }
    })}</td></tr></table>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Configuration as default
};
