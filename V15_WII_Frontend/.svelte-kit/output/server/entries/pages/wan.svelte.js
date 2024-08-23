import { c as create_ssr_component, b as compute_rest_props, g as getContext, v as validate_component, e as escape, d as spread, f as escape_object, h as escape_attribute_value, i as add_attribute, j as compute_slots } from "../../_app/immutable/chunks/index-4327f458.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-e4bc3351.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { L as Label } from "../../_app/immutable/chunks/Label-40d01e23.js";
import { W as Wrapper, T as Textarea } from "../../_app/immutable/chunks/Textarea-90bca3e2.js";
import { T as Table } from "../../_app/immutable/chunks/Table-8c701dfb.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-890eeeae.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-bb920ec2.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-75ee61b0.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-d05d7350.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { wanConfig, ChangedWANConfig, LastestReadableWANConfig, WAN_PORT_SWITCH_ConfigChangedLog, WAN_CWAN1_BASIC_ConfigChangedLog, WAN_CWAN1_Advanced_ConfigChangedLog, WAN_CWAN1_SimPolicy_ConfigChangedLog, WAN_CWAN1_GLink_ConfigChangedLog, WAN_EWAN1_Basic_ConfigChangedLog, WAN_EWAN1_EWLAP_ConfigChangedLog, WAN_RedundancyPolicy_ConfigChangedLog, WAN_FareSavingPolicy_ConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-86a6b344.js";
import "../../_app/immutable/chunks/Frame-82afdce4.js";
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
let floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass: defaultClass2 = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-4" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass2 !== void 0)
    $$bindings.defaultClass(defaultClass2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  _size = size || clampSize(group == null ? void 0 : group.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = classNames(defaultClass2, $$slots.left && leftPadding[_size], $$slots.right && rightPadding[_size], ringClasses[color], colorClasses[_color], borderClasses[_color], inputPadding[_size], textSizes[_size], group || "rounded-lg", group && "first:rounded-l-lg last:rounded-r-lg", group && "border-l-0 first:border-l last:border-r", $$props.class);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(floatClass, true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}
  ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : `
    <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}>
  `}
  ${$$slots.right ? `<div class="${escape(floatClass, true) + " right-0 pr-2.5"}">${slots.right ? slots.right({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}`;
      }
    }
  )}`;
});
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Wan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let saved_changed_wan_data = {};
  sessionidG.subscribe((val) => {
  });
  wanConfig.subscribe((val) => {
  });
  ChangedWANConfig.subscribe((val) => {
    saved_changed_wan_data = val;
  });
  LastestReadableWANConfig.subscribe((val) => {
  });
  WAN_PORT_SWITCH_ConfigChangedLog.subscribe((val) => {
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
  let ATCommand = "";
  let ATResult = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${`${validate_component(TabItem, "TabItem").$$render($$result, { title: "General Status" }, {}, {
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
                            return `Modem Status`;
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
                        })}`;
                      }
                    })}


      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Active SIM`;
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
                            return `RSSI/RSRP/RSRQ/SINR`;
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
                            return `Registered Mobile Operator`;
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
                            return `Connect State`;
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
                            return `Connected Network Type`;
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
                            return `Connected Band`;
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
                            return `Modem Vendor`;
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
                            return `Modem Firmware Version`;
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
                            return `IMSI`;
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
                            return `MCC`;
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
                            return `MNC`;
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
                            return `CellID`;
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
                            return `PCI`;
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
                            return `TAC`;
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
        })}`}

  ${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Cellular WAN" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
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
                })}`}
  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Basic Settings</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">PIN</p></td>
    <td class="${"pl-5"}">${``}</td></tr>


<tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Web Access</p></td>

  <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>

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
${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Advanced Settings</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Mode</p></td>  
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
                })}`}

   ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">SIM Policy</span>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Mode</p></td>
 <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td>
    <td></td>
        <td></td></tr>





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
                    return `<span slot="${"header"}" class="${"pl-4"}">Cellular Guarantie Link</span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Guarantie Link</p></td><td class="${"pl-5 pt-5"}">${``}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td></tr>
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
                        placeholder: "Command",
                        value: ATCommand
                      },
                      {
                        value: ($$value) => {
                          ATCommand = $$value;
                          $$settled = false;
                        }
                      },
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
                        name: "message",
                        value: ATResult
                      },
                      {
                        value: ($$value) => {
                          ATResult = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}
<div class="${"flex flex-wrap gap-2"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `Send`;
                      }
                    })}</div>`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">4G RSSI Log</span>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Download RSSI log</p></td>

<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Download`;
                      }
                    })}</td></tr></table>`;
                  }
                })}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Port Switch" }, {}, {
          default: () => {
            return `${``}`;
          }
        })}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Ethernet WAN" }, {}, {
          default: () => {
            return `${saved_changed_wan_data.config.networking_wan_port_switch == 0 ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">LAN/WAN port is LAN now. Please go to port switch page to change it.

   </caption>`;
              }
            })}` : `${saved_changed_wan_data.config.networking_wan_port_switch == 1 ? `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
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
                })}`}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">Basic Settings</div>`;
                  },
                  default: () => {
                    return `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Web Access</p></td>

  <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>

  <tr><td><p class="${"pl-40 pt-5 text-lg font-light text-right"}">Connection Type</p></td>


  <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>
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
${`${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<div slot="${"header"}" class="${"pl-4"}">WAN Guarantie Link</div>`;
                  },
                  default: () => {
                    return `<table><tr><td class="${"w-60"}"><p class="${"pl-20 pt-5 text-lg font-light text-right"}">Guarantie Link
</p></td>
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
                })}`}`;
              }
            })}` : ``}`}`;
          }
        })}


${`${validate_component(TabItem, "TabItem").$$render($$result, { title: "WAN Redundancy Policy" }, {}, {
          default: () => {
            return `${saved_changed_wan_data.config.networking_wan_port_switch == 0 ? `${validate_component(Table, "Table").$$render($$result, {}, {}, {
              default: () => {
                return `<caption class="${"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">LAN/WAN port is LAN now. Please go to port switch page to change it.

   </caption>`;
              }
            })}` : `${saved_changed_wan_data.config.networking_wan_port_switch == 1 ? `<table><tr><td><p class="${"pl-40 pt-1 text-lg font-light text-right"}">Operation Mode</p></td>

      <td class="${"pl-5"}"><div class="${"flex gap-4"}">${``}</div></td></tr>
${``}

${``}


${``}


${``}

${``}

    <tr><td></td>
        <td><table>${``}


${``}

${``}</table></td>
    </tr><tr></tr><tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>` : ``}`}`;
          }
        })}


${``}`}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Wan as default
};
