import { c as create_ssr_component, b as compute_rest_props, g as getContext, v as validate_component, i as add_attribute } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { C as Checkbox } from "../../_app/immutable/chunks/Checkbox-1164c8ae.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { ChangedModbusConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Radio-683e8de1.js";
const common = "mr-3 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "group", "value", "checked"]);
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let background = getContext("background");
  const colors = {
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6"
  };
  let divClass;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    divClass = classNames(
      common,
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "blue"],
      sizes[size],
      "relative"
    );
    $$rendered = `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      Object.assign({ custom: true }, $$restProps, { class: $$props.class }, { value }, { checked }, { group }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span${add_attribute("class", divClass, 0)}></span>
  ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Datatagpro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sessionidG.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
  });
  return `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
    default: () => {
      return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
        default: () => {
          return `<table><tr><td class="${"w-36"}"><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Data Tag Pro</p></td>
<td class="${"pl-5 pt-5"}">${`${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})}`}</td>
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
   
${validate_component(TabItem, "TabItem").$$render($$result, { title: "Tag Rule" }, {}, {
        default: () => {
          return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">Modbus Tag
    </span>`;
                },
                default: () => {
                  return `<p class="${"mt-8"}">${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                    default: () => {
                      return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus Variable
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Click to show configuration for modbus variable. Please go to modbus page for detailed setting.</p></caption>
${``}`;
                    }
                  })}   

</p><p class="${"mt-4"}">${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                    default: () => {
                      return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus RTU Master Profile
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p></caption>


${``}`;
                    }
                  })}

</p><p class="${"mt-4"}">${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                    default: () => {
                      return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus TCP Master Profile
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p></caption>

${``}`;
                    }
                  })}</p>`;
                }
              })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">Calculation Tag
    </span>`;
                }
              })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">Accumulated Tag
    </span>`;
                }
              })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">Direct Methods Tag
    </span>`;
                }
              })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">SCADA Tag
    </span>`;
                }
              })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">Event Tag
    </span>`;
                }
              })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">Schedule Tag
    </span>`;
                }
              })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                header: () => {
                  return `<span slot="${"header"}" class="${"pl-4"}">Tag Rule Import/Export
    </span>`;
                }
              })}`;
            }
          })}`;
        }
      })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "UL Rule" }, {}, {})}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "DL Rule" }, {}, {})}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Observation" }, {}, {})}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Simulator" }, {}, {})}`;
    }
  })}`;
});
export {
  Datatagpro as default
};
