import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-4327f458.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { sessionidG } from "../endpoints/sessionG.js";
import { dockerConfig, DockerConfigChangedLog, ChangedDockerConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
const Docker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  dockerConfig.subscribe((val) => {
  });
  DockerConfigChangedLog.subscribe((val) => {
  });
  ChangedDockerConfig.subscribe((val) => {
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Docker Engine</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>


${``}
    <tr class="${"pt-5"}"><td></td>
    <td></td>
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
  Docker as default
};
