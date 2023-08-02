import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../_app/immutable/chunks/index-e6faea8a.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-2dfe5133.js";
const Lan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ipMode = "Sip";
  let sipAddr = "";
  let sipNetMask = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">IP Mode</p></td>

    <td class="${"pl-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
      $$result,
      { value: "Sip", group: ipMode },
      {
        group: ($$value) => {
          ipMode = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Static`;
        }
      }
    )}
  ${validate_component(Radio, "Radio").$$render(
      $$result,
      { value: "Dip", group: ipMode },
      {
        group: ($$value) => {
          ipMode = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `DHCP`;
        }
      }
    )}</div></td></tr>
${ipMode == "Sip" ? `<tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">IP Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", sipAddr, 0)}></td></tr>

  <tr><td><p class="${"pl-40 pt-4 text-lg font-light text-right"}">Network Mask</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", sipNetMask, 0)}></td></tr>` : ``}

    <tr><td></td>
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
  Lan as default
};
