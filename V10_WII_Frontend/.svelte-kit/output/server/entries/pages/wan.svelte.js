import { r as get_current_component, c as create_ssr_component, b as compute_rest_props, i as add_attribute, v as validate_component, t as globals } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/Wrapper-69500f4b.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { L as Label } from "../../_app/immutable/chunks/Label-a273673c.js";
import { I as Input } from "../../_app/immutable/chunks/Input-67a46460.js";
import { T as Textarea } from "../../_app/immutable/chunks/Textarea-9c7eff7a.js";
import { createPopper } from "@popperjs/core";
import { F as Frame } from "../../_app/immutable/chunks/Frame-cafee768.js";
import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-53df767c.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-27f0cb1b.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { wanConfig, ChangedWANConfig, LastestReadableWANConfig, WAN_CWAN1_BASIC_ConfigChangedLog, WAN_CWAN1_Advanced_ConfigChangedLog, WAN_CWAN1_SimPolicy_ConfigChangedLog, WAN_CWAN1_GLink_ConfigChangedLog, WAN_EWAN1_Basic_ConfigChangedLog, WAN_EWAN1_EWLAP_ConfigChangedLog, WAN_RedundancyPolicy_ConfigChangedLog, WAN_FareSavingPolicy_ConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
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
  sessionidG.subscribe((val) => {
  });
  wanConfig.subscribe((val) => {
  });
  ChangedWANConfig.subscribe((val) => {
  });
  LastestReadableWANConfig.subscribe((val) => {
  });
  WAN_CWAN1_BASIC_ConfigChangedLog.subscribe((val) => {
  });
  WAN_CWAN1_Advanced_ConfigChangedLog.subscribe((val) => {
  });
  WAN_CWAN1_SimPolicy_ConfigChangedLog.subscribe((val) => {
  });
  WAN_CWAN1_GLink_ConfigChangedLog.subscribe((val) => {
  });
  WAN_EWAN1_Basic_ConfigChangedLog.subscribe((val) => {
  });
  WAN_EWAN1_EWLAP_ConfigChangedLog.subscribe((val) => {
  });
  WAN_RedundancyPolicy_ConfigChangedLog.subscribe((val) => {
  });
  WAN_FareSavingPolicy_ConfigChangedLog.subscribe((val) => {
  });
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
                        return `${``}`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${``}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
                          }
                        })}`;
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
                            return `${``}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                          $$result,
                          {
                            class: "text-center bg-green-400",
                            colspan: "3"
                          },
                          {},
                          {
                            default: () => {
                              return `Cellular Status`;
                            }
                          }
                        )}`;
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
                            return `${``}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { rowspan: "5" }, {}, {
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
                            return `Network Type`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}`;
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
                            return `${``}`;
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
                            return `${``}`;
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
                            return `${``}`;
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
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>
  <td class="${"px-6 py-4 text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td></tr>

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
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">PIN</p></td>
    <td class="${"pl-5"}">${``}</td>
    <td class="${"pl-5 pt-1"}"><svg id="${"click"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { trigger: "click", triggeredBy: "#click" }, {}, {
                      default: () => {
                        return `Pin Code`;
                      }
                    })}</td></tr>
    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-center"}">Automatic APN Selection</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>
${``}
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
    <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


    <tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Extra AT Command </p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>

    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Band Lock</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>
${``}
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
 <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td>
    <td></td>
        <td></td></tr>

    <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Checking Rules</p></td>
    <td></td>
        <td></td>
            <td></td></tr>

    <tr><td></td>
        <td><table><tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Fail Connections
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>

              <td>times (1-10)
              </td></tr>


              <tr><td class="${"border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">RSSI Monitor
              </td>
              <td class="${"border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}
  <label for="${"simCheck1"}" class="${"font-medium"}">Enable Threshold</label>
              -
              </td>

              <td>${``}</td> 
              <td>(-90~-113 dBm)
              </td></tr>



              <tr><td class="${"border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Network Service
              </td>
              <td class="${"border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}
  <label for="${"simCheck2"}" class="${"font-medium"}">Enable Loss LTE Signal</label></td>

              <td>${``}</td> 
              <td>(1-30 minutes)
              </td></tr>



              <tr><td class="${"border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Roaming Service
              </td>
              <td class="${"border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}
  <label for="${"simCheck3"}" class="${"font-medium"}">Enable Timeout</label></td>

              <td>${``}</td> 
              <td>(1-30 minutes)
              </td></tr></table></td>
    </tr><tr></tr><tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">SIM failover Treatment</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>

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
                    return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Guarantie Link</p></td><td class="${"pl-5 pt-5"}">${``}</td></tr>
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
                                return `Netmask`;
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
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}/${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${``}`;
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


  <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>
${``}

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
    <td class="${"pl-5 pt-5"}">${``}</td></tr>
${``}

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



  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "WAN Redundancy Policy" }, {}, {
          default: () => {
            return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Operation Mode</p></td>

      <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>
${``}

${``}




 <tr><td><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Payload Checking Rules</p></td>
  <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>


    <tr><td><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Checking Target</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>

    <tr><td><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Checking Period</p></td>
    <td></td>
        <td></td>
            <td></td></tr>

    <tr><td></td>
        <td><table><tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Polling times
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>

              <td>seconds
              </td></tr>



              <tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Retry Count
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>

              <td>times
              </td></tr>

              <tr><td class="${"border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">Interval times
              </td>
              <td class="${"border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"}">${``}</td>

              <td>mini seconds
              </td></tr></table></td>
    </tr><tr></tr><tr><td></td>
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


  <td class="${"pl-5"}" colspan="${"3"}"><div class="${"flex gap-4"}">${``}</div></td>
<td></td>
<td></td>
<td></td>
<td></td></tr>

${``}


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
