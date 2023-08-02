import { r as get_current_component, c as create_ssr_component, a as compute_rest_props, h as add_attribute, v as validate_component, t as globals, b as spread, d as escape_object, f as escape_attribute_value, e as escape, k as each, g as getContext, i as compute_slots } from "../../_app/immutable/chunks/index-e6faea8a.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-a37e9067.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { T as Toggle, C as Checkbox } from "../../_app/immutable/chunks/Toggle-e9acacf4.js";
import { W as Wrapper, I as Input } from "../../_app/immutable/chunks/Input-e01843aa.js";
import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-429e253d.js";
import { R as Radio, L as Label } from "../../_app/immutable/chunks/Radio-2dfe5133.js";
import { createPopper } from "@popperjs/core";
import { F as Frame } from "../../_app/immutable/chunks/Frame-35d083b4.js";
import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-fdd28fa6.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-a2501ae1.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-a5759ef8.js";
import "../../_app/immutable/chunks/index-245f18af.js";
import "../../_app/immutable/chunks/ChevronUp-24a5dd86.js";
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const { Object: Object_1 } = globals;
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let triggerEl;
  let contentEl;
  let popper;
  function init(node, _triggerEl) {
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference, popper: popper2 }) => {
              return [
                yOnly ? popper2.width / 2 - reference.width / 2 - reference.x : 0,
                offset
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open },
        { name: "flip", enabled: false }
      ]
    });
    return {
      update(_triggerEl2) {
        popper.state.elements.reference = _triggerEl2;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  {
    dispatch("show", triggerEl, open);
  }
  popper && popper.setOptions({ placement });
  return `${`<div${add_attribute("this", contentEl, 0)}></div>`}

${open && triggerEl ? `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object_1.assign({ use: init }, { options: triggerEl }, { role: "tooltip" }, { tabIndex: activeContent ? -1 : void 0 }, $$restProps, {
      class: classNames("z-10 outline-none", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}
    ${arrow ? `<div data-popper-arrow class="${"tooltip-arrow"}"></div>` : ``}`;
      }
    }
  )}` : ``}`;
});
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass: defaultClass2 = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass2 !== void 0)
    $$bindings.defaultClass(defaultClass2);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = classNames(common, underline ? underlineClass : defaultClass2, sizes[size], underline && "!px-0", $$restProps.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="${""}">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select>`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = "" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => classNames(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = classNames(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? classNames("block w-full", "text-sm", "border-0 px-0", "bg-inherit dark:bg-inherit", "focus:outline-none focus:ring-0") : classNames(wrapperClass, "p-2.5 text-sm", "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500");
  innerWrapperClass = classNames("py-2 px-4 bg-white dark:bg-gray-800", $$slots.footer || "rounded-b-lg", $$slots.header || "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``}
  ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${value || ""}</textarea>`;
        }
      })}
  ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })}`;
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style", "defaultClass"]);
  let { style = "dark" } = $$props;
  let { defaultClass: defaultClass2 = "py-2 px-3 text-sm font-medium" } = $$props;
  const styles = {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: " bg-white text-gray-900 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-0",
    custom: ""
  };
  let toolTipClass;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass2 !== void 0)
    $$bindings.defaultClass(defaultClass2);
  {
    {
      if ($$restProps.color)
        style = "custom";
      else
        $$restProps.color = "none";
      toolTipClass = classNames("tooltip", defaultClass2, styles[style], $$props.class);
    }
  }
  return `${validate_component(Popper, "Popper").$$render($$result, Object.assign({ "data-tooltip": true }, { rounded: true }, { shadow: true }, $$restProps, { class: toolTipClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Wan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pin = "";
  let apn = "";
  let un = "";
  let ptime = "60";
  let rcount = "5";
  let interval = "1500";
  let selected = "auto";
  let selected2 = "auto";
  let selected3 = "SimAF";
  let selected4 = "None";
  let selected5 = "Enable";
  let selected6 = "Enable";
  let selected6_Enable_1 = ["Ping"];
  let selected6_Enable_2 = [];
  let selected6_Enable_3;
  let selected6_Enable_4 = ["Relink", "SIMSwitch", "MSWR"];
  let selected7 = "DClient";
  let selected6_1 = "PING";
  let selected5_1 = "dns1";
  let selected8 = "Off";
  let selected5_2 = "PING";
  let selected6_2 = "dns1";
  let selected9 = "cw1";
  let selected9_1 = "cw1";
  let selected9_2 = "cw1";
  let selected10 = "ew";
  let selected11 = "cw1";
  let selected10_1 = "ew";
  let selected11_1 = "cw1";
  let selected12 = "Off";
  let selected13 = "Sch";
  let countries13 = [{ value: "Sch", name: "Schedule" }, { value: "Peri", name: "Period" }];
  let selected14 = "Hour";
  let countries14 = [
    { value: "Day", name: "Day(s)" },
    { value: "Hour", name: "Hour(s)" },
    { value: "Minute", name: "Minute(s)" }
  ];
  let selected15 = "TX";
  let countries15 = [
    { value: "TX", name: "TX" },
    { value: "RX", name: "RX" },
    { value: "TRX", name: "TX+RX" }
  ];
  let isActive = true;
  let isActive2 = true;
  let isActive3 = true;
  let isActive4 = true;
  let isActive5 = true;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General Status" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Cellular-WAN-1`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Ethernet WAN`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Connect`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `N.A`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `IP Address`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `10.23.34.3`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Gateway`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `10.23.34.1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `DNS 1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `168.95.1.1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `DNS 2`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `8.8.8.8`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `SIM Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `SIM A Ready`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Role`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Primary`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Backup`;
                          }
                        })}`;
                      }
                    })}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Error Reason`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `SIM missing`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { colspan: "2" }, {}, {
                          default: () => {
                            return `Cellular Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { rowspan: "6" }, {}, {
                          default: () => {
                            return `N.A`;
                          }
                        })}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Register Status`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Registered`;
                          }
                        })}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Network Type`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `4G`;
                          }
                        })}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Band`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `6`;
                          }
                        })}`;
                      }
                    })}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Operator`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CHT`;
                          }
                        })}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `RSSI`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `-85dBm`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Cellular WAN-1" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">General Status</div>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Index`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Modem Status`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Modem Model`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `IMSI`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
                              default: () => {
                                return `Registration`;
                              }
                            })}`;
                          }
                        })}
 
  <tr class="${"border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"}"><td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">1</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Ready</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">EG25</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">460015726101417</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Registrated to home network</td></tr>

${``}`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Basic Settings</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">PIN</p></td><td class="${"pl-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", pin, 0)}></td>
    <td class="${"pl-5 pt-1"}"><svg id="${"click"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { trigger: "click", triggeredBy: "#click" }, {}, {
                      default: () => {
                        return `Click tooltip content`;
                      }
                    })}</td></tr>
    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-center"}">Automatic APN Selection</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
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

${!isActive ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">APN</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td></tr>


    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Username</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td></tr>


    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td></tr>

    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Authentication</p></td>



    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "auto", group: selected },
                      {
                        group: ($$value) => {
                          selected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `AUTO`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "chap", group: selected },
                      {
                        group: ($$value) => {
                          selected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `CHAP`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "pap", group: selected },
                      {
                        group: ($$value) => {
                          selected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `PAP`;
                        }
                      }
                    )}</div></td></tr>` : ``}
    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}
  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Advanced Settings</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Authentication</p></td>  
    <td class="${"pl-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "auto", group: selected2 },
                      {
                        group: ($$value) => {
                          selected2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `AUTO`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "3g", group: selected2 },
                      {
                        group: ($$value) => {
                          selected2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `3G`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "4g", group: selected2 },
                      {
                        group: ($$value) => {
                          selected2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `4G`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "5g", group: selected2 },
                      {
                        group: ($$value) => {
                          selected2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `5G`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "5gnrsa", group: selected2 },
                      {
                        group: ($$value) => {
                          selected2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `5GNR-SA`;
                        }
                      }
                    )}</div></td></tr>


    <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Extra AT Command </p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td></tr>

    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Band Lock</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: isActive2 },
                      {
                        checked: ($$value) => {
                          isActive2 = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>

${isActive2 ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Band Scan and List</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: isActive3 },
                      {
                        checked: ($$value) => {
                          isActive3 = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>
    
    <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}"></p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td></tr>





    <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Band Select: </p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td></tr>` : ``}
        <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}

   ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">SIM Policy</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Authentication</p></td>
 <td class="${"pl-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "SimAF", group: selected3 },
                      {
                        group: ($$value) => {
                          selected3 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `SIM A First`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "SimBF", group: selected3 },
                      {
                        group: ($$value) => {
                          selected3 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `SIM B First`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "SimAO", group: selected3 },
                      {
                        group: ($$value) => {
                          selected3 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `SIM A Only`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "SimBO", group: selected3 },
                      {
                        group: ($$value) => {
                          selected3 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `SIM B Only`;
                        }
                      }
                    )}</div></td>
    <td></td>
        <td></td></tr>

    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Checking Rules</p></td>
    <td></td>
        <td></td>
            <td></td></tr>

    <tr><td></td>
        <td><table><tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Fail Connections
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td>

              <td>times (1-10)
              </td></tr>


              <tr><td class="${"border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">RSSI Monitor
              </td>
              <td class="${"border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"checkbox"}" id="${"vehicle1"}" name="${"vehicle1"}" value="${"Bike"}">
  <label for="${"vehicle1"}" class="${"font-medium"}">Enable Threshold</label>
              -
              </td>

              <td><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td> 
              <td>(-90~-113 dBm)
              </td></tr>



              <tr><td class="${"border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Network Service
              </td>
              <td class="${"border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"checkbox"}" id="${"vehicle2"}" name="${"vehicle2"}" value="${"Bike"}">
  <label for="${"vehicle2"}" class="${"font-medium"}">Enable Loss LTE Signal</label></td>

              <td><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td> 
              <td>(1-30 minutes)
              </td></tr>



              <tr><td class="${"border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Roaming Service
              </td>
              <td class="${"border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"checkbox"}" id="${"vehicle3"}" name="${"vehicle3"}" value="${"Bike"}">
  <label for="${"vehicle3"}" class="${"font-medium"}">Enable Timeout</label></td>

              <td><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td> 
              <td>(1-30 minutes)
              </td></tr></table></td>
    </tr><tr></tr><tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">SIM failover Treatment</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "None", group: selected4 },
                      {
                        group: ($$value) => {
                          selected4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `None`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "RM", group: selected4 },
                      {
                        group: ($$value) => {
                          selected4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Reset Modem`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "PCM", group: selected4 },
                      {
                        group: ($$value) => {
                          selected4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Power Cycle Modem`;
                        }
                      }
                    )}</div></td></tr>

            <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}

    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">LTE Guarantie Link</span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Guarantie Link</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: isActive4 },
                      {
                        checked: ($$value) => {
                          isActive4 = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>
${isActive4 ? `<tr><td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Checking Parameter</p></td></tr>


    <tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Cellular Level Checking</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "Disable", group: selected5 },
                      {
                        group: ($$value) => {
                          selected5 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Disable`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "Enable", group: selected5 },
                      {
                        group: ($$value) => {
                          selected5 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Enable`;
                        }
                      }
                    )}</div></td></tr>


    <tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Packet Level Checking</p></td>

    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "Disable", group: selected6 },
                      {
                        group: ($$value) => {
                          selected6 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Disable`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "Enable", group: selected6 },
                      {
                        group: ($$value) => {
                          selected6 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Enable`;
                        }
                      }
                    )}</div></td></tr>
${selected6 == "Enable" ? `<tr><td></td><td><p class="${"pl-5 pt-5 text-lg font-light text-right"}">Checking Method</p></td></tr>


    <tr><td></td><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: "Ping", group: selected6_Enable_1 },
                      {
                        group: ($$value) => {
                          selected6_Enable_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Ping Packet:`;
                        }
                      }
                    )}</td><td>${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "packet_size",
                        name: "packet_size",
                        type: "text",
                        label: "Packet Size",
                        value: 32
                      },
                      {},
                      {}
                    )}</td> <td>Bytes,</td>
    <td>${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "remote_host",
                        name: "remote_host",
                        type: "text",
                        label: "Remote Host",
                        value: "DNS1"
                      },
                      {},
                      {}
                    )}</td></tr>

    <tr><td></td><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      {
                        value: "Interface",
                        group: selected6_Enable_1
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Test Interface`;
                        }
                      }
                    )}</td>

    <td class="${"pt-5"}"><div class="${"flex gap-3"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: "lan1", group: selected6_Enable_2 },
                      {
                        group: ($$value) => {
                          selected6_Enable_2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `LAN 1`;
                        }
                      }
                    )}
    ${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: "wan", group: selected6_Enable_2 },
                      {
                        group: ($$value) => {
                          selected6_Enable_2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `WAN`;
                        }
                      }
                    )}
    ${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: "cwan", group: selected6_Enable_2 },
                      {
                        group: ($$value) => {
                          selected6_Enable_2 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `C-WAN`;
                        }
                      }
                    )}</div></td></tr>


    <tr><td></td><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      {
                        value: "DLookUP",
                        group: selected6_Enable_1
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `DNS Lookup`;
                        }
                      }
                    )}</td>
    
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "FQDN",
                        name: "FQDN",
                        type: "text",
                        label: "FQDN"
                      },
                      {},
                      {}
                    )}</td>
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "DNSer",
                        name: "DNSer",
                        type: "text",
                        label: "DNSer"
                      },
                      {},
                      {}
                    )}</td></tr>

    <tr><td></td><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      {
                        value: "DNSPS",
                        group: selected6_Enable_1
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `DNS Packet Sniff`;
                        }
                      }
                    )}</td></tr>


    <tr><td></td><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      {
                        value: "Https",
                        group: selected6_Enable_1
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Http(s)`;
                        }
                      }
                    )}</td>
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "url",
                        name: "url",
                        type: "text",
                        label: "URL"
                      },
                      {},
                      {}
                    )}</td></tr>


    <tr><td></td><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: "PCI", group: selected6_Enable_1 },
                      {
                        group: ($$value) => {
                          selected6_Enable_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Packet Count Increase`;
                        }
                      }
                    )}</td>

    <td class="${"pt-5"}"><div class="${"flex gap-3"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "RX", group: selected6_Enable_3 },
                      {
                        group: ($$value) => {
                          selected6_Enable_3 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `RX`;
                        }
                      }
                    )}
    ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      {
                        value: "RX_TX",
                        group: selected6_Enable_3
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_3 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `RX + TX`;
                        }
                      }
                    )}</div></td></tr>` : ``} 

    <tr><td><p class="${"pl-5 pt-5 text-lg font-light text-right"}">Recovery Sequence</p></td></tr>



    <tr><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      {
                        value: "Relink",
                        group: selected6_Enable_4
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Relink Again`;
                        }
                      }
                    )}</td>

    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "RADelayS",
                        name: "RADelayS",
                        type: "text",
                        label: "Delay Seconds",
                        value: 0
                      },
                      {},
                      {}
                    )}</td>
    
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "RARetryCount",
                        name: "RARetryCount",
                        type: "text",
                        label: "Retry Count",
                        value: 3
                      },
                      {},
                      {}
                    )}</td></tr>


    <tr><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      {
                        value: "SIMSwitch",
                        group: selected6_Enable_4
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `SIM Switch Over`;
                        }
                      }
                    )}</td>

    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "SIMSODelayS",
                        name: "SIMSODelayS",
                        type: "text",
                        label: "Delay Seconds",
                        value: 1
                      },
                      {},
                      {}
                    )}</td>
    
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "SIMSORetryCount",
                        name: "SIMSORetryCount",
                        type: "text",
                        label: "Retry Count",
                        value: 2
                      },
                      {},
                      {}
                    )}</td></tr>

    <tr><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: "MSWR", group: selected6_Enable_4 },
                      {
                        group: ($$value) => {
                          selected6_Enable_4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Modem SW Reset`;
                        }
                      }
                    )}</td>

    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "MSWRDelayS",
                        name: "MSWRDelayS",
                        type: "text",
                        label: "Delay Seconds",
                        value: 0
                      },
                      {},
                      {}
                    )}</td>
    
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "MSWRRetryCount",
                        name: "MSWRRetryCount",
                        type: "text",
                        label: "Retry Count",
                        value: 3
                      },
                      {},
                      {}
                    )}</td></tr>


    <tr><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: "MHWR", group: selected6_Enable_4 },
                      {
                        group: ($$value) => {
                          selected6_Enable_4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Modem HW Reset`;
                        }
                      }
                    )}</td>


    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "MHWRDelayS",
                        name: "MHWRDelayS",
                        type: "text",
                        label: "Delay Seconds"
                      },
                      {},
                      {}
                    )}</td>
    
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "MHWRRetryCount",
                        name: "MHWRRetryCount",
                        type: "text",
                        label: "Retry Count"
                      },
                      {},
                      {}
                    )}</td></tr>



    <tr><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      {
                        value: "Reboot",
                        group: selected6_Enable_4
                      },
                      {
                        group: ($$value) => {
                          selected6_Enable_4 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `System Reboot`;
                        }
                      }
                    )}</td>

    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "SRDelayS",
                        name: "SRDelayS",
                        type: "text",
                        label: "Delay Seconds"
                      },
                      {},
                      {}
                    )}</td>
    
    <td class="${"pt-5"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                      $$result,
                      {
                        style: "filled",
                        id: "SRRetryCount",
                        name: "SRRetryCount",
                        type: "text",
                        label: "Retry Count"
                      },
                      {},
                      {}
                    )}</td></tr>` : ``}
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
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">AT Debug</span>`;
                  },
                  default: () => {
                    return `<div class="${"mb-6"}">${validate_component(Label, "Label").$$render(
                      $$result,
                      {
                        for: "default-input",
                        class: "block mb-2"
                      },
                      {},
                      {
                        default: () => {
                          return `Command`;
                        }
                      }
                    )}
  ${validate_component(Input, "Input").$$render(
                      $$result,
                      {
                        id: "default-input",
                        placeholder: "Command"
                      },
                      {},
                      {}
                    )}</div>


${validate_component(Label, "Label").$$render($$result, { for: "textarea-id", class: "mb-2" }, {}, {
                      default: () => {
                        return `Result`;
                      }
                    })}
${validate_component(Textarea, "Textarea").$$render(
                      $$result,
                      {
                        id: "textarea-id",
                        placeholder: "Result",
                        rows: "4",
                        name: "message"
                      },
                      {},
                      {}
                    )}
<div class="${"flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Send`;
                      }
                    })}</div>`;
                  }
                })}`;
              }
            })}`;
          }
        })}


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Ethernet WAN" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">General Status</div>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Interface`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Connection Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Network Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `IP Address`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Subnet Mask`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Gateway`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `DNS`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `MAC`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `Connection Status`;
                              }
                            })}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `WAN`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `PPPoE`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `NAT`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `10.18.81.235`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `255.255.255.248`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `10.18.81.236`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `168.95.1.1/168.95.192.1`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `00:E0:B3:12:34:56`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Connected`;
                                  }
                                })}`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">Basic Settings</div>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Connection Type</p></td>


  <td class="${"pl-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "Sip", group: selected7 },
                      {
                        group: ($$value) => {
                          selected7 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Static IP`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "DClient", group: selected7 },
                      {
                        group: ($$value) => {
                          selected7 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `DHCP Client`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "PPP", group: selected7 },
                      {
                        group: ($$value) => {
                          selected7 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `PPPoE`;
                        }
                      }
                    )}</div></td></tr>

${selected7 == "Sip" ? `<tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">IP Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", pin, 0)}></td></tr>

  <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Network Mask</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", pin, 0)}></td></tr>

  <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Gateway</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", pin, 0)}></td></tr>` : ``}


${selected7 == "PPP" ? `<tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Account</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", pin, 0)}></td></tr>

  <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Password</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", pin, 0)}></td></tr>` : ``}

    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">EWLAP-Ethernet WAN</div>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"><p class="${"pl-40 pt-5 text-lg font-light text-right"}">EWLAP</p></td>
    <td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: isActive5 },
                      {
                        checked: ($$value) => {
                          isActive5 = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>
${isActive5 ? `<tr><td><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Checking Rules</p></td>
  <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "PING", group: selected5_1 },
                      {
                        group: ($$value) => {
                          selected5_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `PING`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "DNSQ", group: selected5_1 },
                      {
                        group: ($$value) => {
                          selected5_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `DNS Query`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "DNSPC", group: selected5_1 },
                      {
                        group: ($$value) => {
                          selected5_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `DNS Packet Check`;
                        }
                      }
                    )}</div></td></tr>





    <tr><td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Checking Target</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "None", group: selected6_1 },
                      {
                        group: ($$value) => {
                          selected6_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `None`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "dns1", group: selected6_1 },
                      {
                        group: ($$value) => {
                          selected6_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `DNS 1`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "dns2", group: selected6_1 },
                      {
                        group: ($$value) => {
                          selected6_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `DNS 2`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "gw", group: selected6_1 },
                      {
                        group: ($$value) => {
                          selected6_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Gateway`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "otherH", group: selected6_1 },
                      {
                        group: ($$value) => {
                          selected6_1 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Other Host`;
                        }
                      }
                    )}</div></td></tr>

    <tr><td><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Checking Period</p></td>
    <td></td>
        <td></td>
            <td></td></tr>

    <tr><td></td>
        <td><table><tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Polling times
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", ptime, 0)}></td>

              <td>seconds
              </td></tr>

              <tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Retry Count
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", rcount, 0)}></td>

              <td>times
              </td></tr>

              <tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Interval times
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", interval, 0)}></td>

              <td>mini seconds
              </td></tr></table></td>
    </tr><tr></tr>` : ``}


    <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`;
              }
            })}`;
          }
        })}



  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "WAN Redundancy\nPolicy" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Operation Mode</p></td>

      <td class="${"pl-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Off", group: selected8 },
              {
                group: ($$value) => {
                  selected8 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Off`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "Aon", group: selected8 },
              {
                group: ($$value) => {
                  selected8 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Always On`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "fo", group: selected8 },
              {
                group: ($$value) => {
                  selected8 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Fail Over`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "fb", group: selected8 },
              {
                group: ($$value) => {
                  selected8 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Fail Back`;
                }
              }
            )}</div></td></tr>

${selected8 == "Aon" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Primary WAN</p></td>
 <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "cw1", group: selected9 },
              {
                group: ($$value) => {
                  selected9 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `C-WAN-1`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "ew", group: selected9 },
              {
                group: ($$value) => {
                  selected9 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `E-WAN`;
                }
              }
            )}</div></td></tr>` : `${selected8 == "fo" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Primary WAN</p></td>
 <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "cw1", group: selected9_1 },
              {
                group: ($$value) => {
                  selected9_1 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `C-WAN-1`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "ew", group: selected9_1 },
              {
                group: ($$value) => {
                  selected9_1 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `E-WAN`;
                }
              }
            )}</div></td></tr>` : `${selected8 == "fb" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Primary WAN</p></td>
 <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "cw1", group: selected9_2 },
              {
                group: ($$value) => {
                  selected9_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `C-WAN-1`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "ew", group: selected9_2 },
              {
                group: ($$value) => {
                  selected9_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `E-WAN`;
                }
              }
            )}</div></td></tr>` : ``}`}`}

${selected8 == "fo" || selected8 == "fb" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Backup WAN</p></td>
  ${selected9_1 == "cw1" && selected8 == "fo" ? `<td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "ew", group: selected10 },
              {
                group: ($$value) => {
                  selected10 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `E-WAN`;
                }
              }
            )}</div></td>` : `${selected9_1 == "ew" && selected8 == "fo" ? `<td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "cw1", group: selected11 },
              {
                group: ($$value) => {
                  selected11 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `C-WAN-1`;
                }
              }
            )}</div></td>` : `${selected9_2 == "cw1" && selected8 == "fb" ? `<td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "ew", group: selected10_1 },
              {
                group: ($$value) => {
                  selected10_1 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `E-WAN`;
                }
              }
            )}</div></td>` : `${selected9_2 == "ew" && selected8 == "fb" ? `<td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "cw1", group: selected11_1 },
              {
                group: ($$value) => {
                  selected11_1 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `C-WAN-1`;
                }
              }
            )}</div></td>` : ``}`}`}`}</tr>





 <tr><td><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Payload Checking Rules</p></td>
  <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "PING", group: selected5_2 },
              {
                group: ($$value) => {
                  selected5_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `PING`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "DNSQ", group: selected5_2 },
              {
                group: ($$value) => {
                  selected5_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `DNS Query`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "DNSPC", group: selected5_2 },
              {
                group: ($$value) => {
                  selected5_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `DNS Packet Check`;
                }
              }
            )}</div></td></tr>


    <tr><td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Checking Target 1/2</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "None", group: selected6_2 },
              {
                group: ($$value) => {
                  selected6_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `None`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "dns1", group: selected6_2 },
              {
                group: ($$value) => {
                  selected6_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `DNS 1`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "dns2", group: selected6_2 },
              {
                group: ($$value) => {
                  selected6_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `DNS 2`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "gw", group: selected6_2 },
              {
                group: ($$value) => {
                  selected6_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Gateway`;
                }
              }
            )}
  ${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "otherH", group: selected6_2 },
              {
                group: ($$value) => {
                  selected6_2 = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Other Host`;
                }
              }
            )}</div></td></tr>

    <tr><td><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Checking Period</p></td>
    <td></td>
        <td></td>
            <td></td></tr>

    <tr><td></td>
        <td><table><tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Polling times
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td>

              <td>seconds
              </td></tr>



              <tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Retry Count
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td>

              <td>times
              </td></tr>

              <tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Interval times
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", un, 0)}></td>

              <td>mini seconds
              </td></tr></table></td>
    </tr><tr></tr>` : ``}


 <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}


  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Fare Saving Policy" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">Control Traffic Flow</div>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Control By</p></td>


      <td class="${"pl-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "Off", group: selected12 },
                      {
                        group: ($$value) => {
                          selected12 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Off`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "Time", group: selected12 },
                      {
                        group: ($$value) => {
                          selected12 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Time`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "TA", group: selected12 },
                      {
                        group: ($$value) => {
                          selected12 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Traffic Amount`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "DS", group: selected12 },
                      {
                        group: ($$value) => {
                          selected12 = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Data Source`;
                        }
                      }
                    )}</div></td>
<td></td>
<td></td>
<td></td>
<td></td></tr>


  ${selected12 == "Time" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Select</p></td>

  <td class="${"pl-5"}">${validate_component(Select, "Select").$$render(
                      $$result,
                      {
                        class: "mt-2",
                        items: countries13,
                        value: selected13
                      },
                      {
                        value: ($$value) => {
                          selected13 = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>


    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Start Time(Per month)</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td><td class="${"pl-5 pt-5 text-lg font-light text-right"}">:</td>
    <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td><td class="${"pl-5 pt-5 text-lg font-light text-right"}">:</td>
    <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>
    <td class="${"pl-5 pt-5 text-lg font-light text-right"}">(DD:MM:HH)</td></tr>


  ${selected13 == "Sch" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">On Duty Lasting Time</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td><td class="${"pl-5 pt-5 text-lg font-light text-right"}">:</td>
    <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td><td class="${"pl-5 pt-5 text-lg font-light text-right"}">:</td>
    <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>
      <td class="${"pl-5 pt-5 text-lg font-light text-right"}">(DD:MM:HH)</td></tr>` : `${selected13 == "Peri" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">On Duty Lasting Time</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td><td class="${"pl-5 pt-5 text-lg font-light text-right"}">:</td>
    <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>
          <td class="${"pl-5 pt-5 text-lg font-light text-right"}"></td>
      <td class="${"pl-5 pt-5 text-lg font-light text-left"}">(MM:HH)</td></tr>

     <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Period Interval</p></td>


    <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>
<td></td>
      <td class="${"pl-5 pt-5"}">${validate_component(Select, "Select").$$render(
                      $$result,
                      {
                        class: "mt-2",
                        items: countries14,
                        value: selected14
                      },
                      {
                        value: ($$value) => {
                          selected14 = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td></tr>` : ``}`}` : `${selected12 == "TA" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Start Day of Month</p></td>

 <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>
<td class="${"pl-5 pt-5"}">(1-31)</td></tr>


  <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Amount By</p>

  </td><td class="${"pl-5 pt-5"}">${validate_component(Select, "Select").$$render(
                      $$result,
                      {
                        class: "mt-2",
                        items: countries15,
                        value: selected15
                      },
                      {
                        value: ($$value) => {
                          selected15 = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</td>

  <td class="${"pl-5 pt-5"}">With </td>

   <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>

    <td class="${"pl-5 pt-5"}">Mbs </td></tr>` : `${selected12 == "DS" ? `<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Disconnect Rule</p></td></tr>

     <tr><td></td>
  <td><p class="${"pl-5 pt-5 text-lg font-light text-center"}">Data Source</p></td>

  <td class="${"pl-5 pt-5 text-lg font-light text-left"}">Modbus
  </td>
<td></td></tr>

   <tr><td><p class="${"pl-5 pt-5 text-lg font-light text-right"}">Checking Rule</p></td></tr>
<tr><td></td>
  <td class="${"pl-5 pt-5 text-lg font-light text-center"}">RX for
  </td>

   <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>

    <td class="${"pl-5 pt-5"}">Minutes </td>
  <td></td></tr>




<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Re-Connect Rule</p></td></tr>

     <tr><td></td>
  <td><p class="${"pl-5 pt-5 text-lg font-light text-center"}">Data Source</p></td>

  <td class="${"pl-5 pt-5 text-lg font-light text-left"}">Modbus
  </td>
  <td></td></tr>


     <tr><td><p class="${"pl-5 pt-5 text-lg font-light text-right"}">Checking Rule</p></td></tr>
<tr><td></td>
  <td class="${"pl-5 pt-5 text-lg font-light text-center"}" colspan="${"2"}">Once Rx of Modbus and Disconnect lasting time
  </td>
   <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", apn, 0)}></td>

    <td class="${"pl-5 pt-5"}">Minutes </td></tr>` : ``}`}`}



 <tr><td></td>
<td></td>
<td></td>
    <td></td>
<td></td>
<td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Wan as default
};
