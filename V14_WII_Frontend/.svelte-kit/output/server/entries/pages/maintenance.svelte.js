import { c as create_ssr_component, b as compute_rest_props, g as getContext, v as validate_component, d as spread, h as escape_attribute_value, f as escape_object, i as add_attribute, j as compute_slots, e as escape } from "../../_app/immutable/chunks/index-4327f458.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-e4bc3351.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { l as labelClass, i as inputClass, R as Radio } from "../../_app/immutable/chunks/Radio-7daba062.js";
import { L as Label } from "../../_app/immutable/chunks/Label-40d01e23.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-018e0198.js";
import { S as Spinner } from "../../_app/immutable/chunks/Spinner-a9367632.js";
import { T as Table } from "../../_app/immutable/chunks/Table-8c701dfb.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-d05d7350.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { maintenanceConfig, MaintenanceConfigChangedLog, ChangedMaintenanceConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
import "../../_app/immutable/chunks/Frame-82afdce4.js";
import "../../_app/immutable/chunks/CloseButton-9e3e1305.js";
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "custom", "inline", "group", "value", "checked"]);
  let $$slots = compute_slots(slots);
  let { color = "blue" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let background = getContext("background");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  return `${validate_component(Label, "Label").$$render(
    $$result,
    {
      class: labelClass(inline, $$props.class),
      show: !!$$slots.default
    },
    {},
    {
      default: () => {
        return `<input${spread(
          [
            { type: "checkbox" },
            { value: escape_attribute_value(value) },
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass(custom, color, true, background, $$slots.default || $$props.class))
            }
          ],
          {}
        )}${add_attribute("checked", checked, 1)}>${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
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
const Maintenance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_maintenance_data = {};
  let defaultModal = false;
  let localUpdateKeepConfig = 1;
  let PingType = 0;
  let PingHost = "";
  let TracerouteType = 0;
  let TracerouteHost = "";
  let NSLookupHost = "";
  let system_log = "";
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
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Firmware" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Local
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Update Local Firmware</p></td>
<td class="${"pl-5 pt-5"}" colspan="${"2"}"><input type="${"file"}" id="${"FwrUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}"></td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Update`;
                      }
                    })}</td>

<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>

<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Keep Current Configuration</p></td>
    <td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: localUpdateKeepConfig },
                      {
                        checked: ($$value) => {
                          localUpdateKeepConfig = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr></table>`;
                  }
                })}



  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">EW-FOTA
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Enable EW-FOTA</p></td>
<td class="${"pl-5 pt-5"}">${``}</td></tr>

<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Keep Current Configuration</p></td>
    <td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        checked: changed_maintenance_data.config.system_maintenance.fotaKeepConfig
                      },
                      {
                        checked: ($$value) => {
                          changed_maintenance_data.config.system_maintenance.fotaKeepConfig = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>


 <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">EW-FOTA Time Configuration</p></td>
<td class="${"pl-5 pt-5 w-10"}">Weekday
</td>

<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>



 <tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}"></p></td>
<td class="${"pl-5 pt-5 w-10"}">Hour
</td>

<td class="${"pl-5 pt-5"}" colspan="${"2"}">${``}</td></tr>

<tr class="${"pt-10"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>

      <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td>
    <td></td>
    <td></td></tr></table>`;
                  }
                })}`;
              }
            })}


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
          }
        })}

 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Diagnostic" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Ping
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 0, group: PingType },
                      {
                        group: ($$value) => {
                          PingType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv4`;
                        }
                      }
                    )}
      ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 1, group: PingType },
                      {
                        group: ($$value) => {
                          PingType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv6`;
                        }
                      }
                    )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", PingHost, 0)}></td></tr>

<tr><td></td>
<td></td>
<td></td>
<td></td>
<td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Execute`;
                      }
                    })}</td></tr></table>

<p class="${"pt-10"}"></p>
${validate_component(Table, "Table").$$render($$result, { class: "text-gray-900" }, {}, {
                      default: () => {
                        return `${`${``}`}`;
                      }
                    })}`;
                  }
                })}  

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Traceroute
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 0, group: TracerouteType },
                      {
                        group: ($$value) => {
                          TracerouteType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv4`;
                        }
                      }
                    )}
      ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: 1, group: TracerouteType },
                      {
                        group: ($$value) => {
                          TracerouteType = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `IPv6`;
                        }
                      }
                    )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", TracerouteHost, 0)}></td></tr>

<tr><td></td>
<td></td>
<td></td>
<td></td>
<td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Execute`;
                      }
                    })}</td></tr></table>

<p class="${"pt-10"}"></p>

${validate_component(Table, "Table").$$render($$result, { class: "text-gray-900" }, {}, {
                      default: () => {
                        return `${`${``}`}`;
                      }
                    })}`;
                  }
                })}  


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Nslookup
    </span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Host</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NSLookupHost, 0)}></td></tr>

<tr><td></td>
<td></td>
<td></td>
<td></td>
<td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Execute`;
                      }
                    })}</td></tr></table>

<p class="${"pt-10"}"></p>

${validate_component(Table, "Table").$$render($$result, { class: "text-gray-900" }, {}, {
                      default: () => {
                        return `${`${``}`}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

 ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Log Viewer" }, {}, {
          default: () => {
            return `<pre style="${"white-space: pre-wrap;"}">${escape(system_log)}</pre>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Maintenance as default
};
