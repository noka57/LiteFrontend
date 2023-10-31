import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-e6faea8a.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { F as Fileupload } from "../../_app/immutable/chunks/Fileupload-1a7309f4.js";
import { T as Toggle } from "../../_app/immutable/chunks/Toggle-e9acacf4.js";
import "../../_app/immutable/chunks/Input-97732ea0.js";
import "../../_app/immutable/chunks/Wrapper-361a1b4c.js";
import "../../_app/immutable/chunks/Radio-2dfe5133.js";
const Maintenance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let isActive = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Update Local Firmware</p></td>
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
        return `Update`;
      }
    })}</td></tr>


    <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Enable EW-FOTA</p></td>
<td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { checked: isActive },
      {
        checked: ($$value) => {
          isActive = $$value;
          $$settled = false;
        }
      },
      {}
    )}</td></tr>


<tr class="${"pt-5"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
      default: () => {
        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
      }
    })}</td></tr></table>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Maintenance as default
};
