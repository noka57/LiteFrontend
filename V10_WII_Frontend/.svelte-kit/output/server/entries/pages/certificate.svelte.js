import { c as create_ssr_component, b as compute_rest_props, v as validate_component, d as spread, f as escape_object, i as add_attribute, h as escape_attribute_value, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/Wrapper-69500f4b.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { I as Input } from "../../_app/immutable/chunks/Input-67a46460.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-53df767c.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-27f0cb1b.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
const Fileupload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "files", "inputClass"]);
  let { value = "" } = $$props;
  let { files = void 0 } = $$props;
  let { inputClass = "border !p-0 dark:text-gray-400" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  return `${validate_component(Input, "Input").$$render(
    $$result,
    Object.assign($$restProps, {
      class: classNames(inputClass, $$props.class)
    }),
    {},
    {
      default: ({ props }) => {
        return `<input${spread([{ type: "file" }, escape_object(props)], {})}>`;
      }
    }
  )}`;
});
let n = Date.now();
function generateId() {
  return (++n).toString(36);
}
const FloatingLabelInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id", "style", "type", "size", "color", "value", "label"]);
  let { id = generateId() } = $$props;
  let { style = "standard" } = $$props;
  let { type = "text" } = $$props;
  let { size = "default" } = $$props;
  let { color = "base" } = $$props;
  let { value = "" } = $$props;
  let { label = "" } = $$props;
  const divClasses = {
    filled: "relative",
    outlined: "relative",
    standard: "relative z-0"
  };
  const inputSizes = {
    filled: {
      small: "px-2.5 pb-1.5 pt-4",
      default: "px-2.5 pb-2.5 pt-5"
    },
    outlined: {
      small: "px-2.5 pb-1.5 pt-3",
      default: "px-2.5 pb-2.5 pt-4"
    },
    standard: {
      small: "py-2 px-0",
      default: "py-2.5 px-0"
    }
  };
  const labelSizes = {
    filled: { small: "top-3", default: "top-4" },
    outlined: { small: "top-1", default: "top-2" },
    standard: { small: "top-3", default: "top-3" }
  };
  const inputClasses = {
    filled: "block rounded-t-lg w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer",
    outlined: "block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer",
    standard: "block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer"
  };
  const labelClasses = {
    filled: "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
    outlined: "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
    standard: "absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  };
  const inputColorClasses = {
    base: "border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600",
    green: "border-green-600 dark:border-green-500 dark:focus:border-green-500 focus:border-green-600",
    red: "border-red-600 dark:border-red-500 dark:focus:border-red-500  focus:border-red-600"
  };
  const labelColorClasses = {
    base: "text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500",
    green: "text-green-600 dark:text-green-500",
    red: "text-red-600 dark:text-red-500"
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<div${add_attribute("class", divClasses[style], 0)}><input${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      { placeholder: " " },
      {
        class: escape_attribute_value(classNames(inputClasses[style], inputColorClasses[color], inputSizes[style][size], $$props.class))
      }
    ],
    {}
  )}${add_attribute("value", value, 0)}>

	<label${add_attribute("for", id, 0)}${add_attribute("class", classNames(labelClasses[style], labelColorClasses[color], labelSizes[style][size], $$props.labelClass), 0)}>${escape(label)}</label></div>`;
});
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Certificate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cdefault = "No";
  let newCRL = false;
  let CRLURL = "";
  let newCRLFileUpload = false;
  let { crlvalue } = $$props;
  let { mc4value } = $$props;
  let { crlInterval = "everyW" } = $$props;
  if ($$props.crlvalue === void 0 && $$bindings.crlvalue && crlvalue !== void 0)
    $$bindings.crlvalue(crlvalue);
  if ($$props.mc4value === void 0 && $$bindings.mc4value && mc4value !== void 0)
    $$bindings.mc4value(mc4value);
  if ($$props.crlInterval === void 0 && $$bindings.crlInterval && crlInterval !== void 0)
    $$bindings.crlInterval(crlInterval);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render(
          $$result,
          {
            open: true,
            title: "Certificate Settings"
          },
          {},
          {
            default: () => {
              return `<p class="${"mb-4 font-semibold text-gray-900 dark:text-white"}">Check the validity period of certificates and CRLs</p>
${validate_component(Radio, "Radio").$$render(
                $$result,
                {
                  class: "p-3",
                  value: "No",
                  group: cdefault
                },
                {
                  group: ($$value) => {
                    cdefault = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `No`;
                  }
                }
              )}
${validate_component(Radio, "Radio").$$render(
                $$result,
                {
                  class: "p-3",
                  value: "Always",
                  group: cdefault
                },
                {
                  group: ($$value) => {
                    cdefault = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Always`;
                  }
                }
              )}
${validate_component(Radio, "Radio").$$render(
                $$result,
                {
                  class: "p-3",
                  value: "WTS",
                  group: cdefault
                },
                {
                  group: ($$value) => {
                    cdefault = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Wait for synchronization of the system time`;
                  }
                }
              )}
<p class="${"pt-10"}"></p>

    <tr><td></td>
    <td class="${"pl-10"}"></td>
    <td class="${"pl-80"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                default: () => {
                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                }
              })}</td></tr>`;
            }
          }
        )}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Machine Certificates" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `No`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Alias Name`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Subject`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Issuer`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Valid From`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Valid To`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `AWS`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `AWS CA`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `2`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Azure`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Azure CA`;
                          }
                        })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `3`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Self-sign`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Self`;
                          }
                        })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `4`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                              $$result,
                              {
                                style: "filled",
                                id: "floating_filled",
                                name: "floating_filled",
                                type: "text",
                                label: "Alias Name"
                              },
                              {},
                              {}
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Fileupload, "Fileupload").$$render(
                              $$result,
                              { id: "mc4", mc4value },
                              {
                                mc4value: ($$value) => {
                                  mc4value = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                              default: () => {
                                return `Upload`;
                              }
                            })}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "CA Certificates" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `No`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Alias Name`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Subject`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Issuer`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Valid From`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Valid To`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `AWS`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `AWS CA`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `2`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Azure`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Azure CA`;
                          }
                        })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `3`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Self-sign`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Self`;
                          }
                        })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `4`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                              $$result,
                              {
                                style: "filled",
                                id: "floating_filled",
                                name: "floating_filled",
                                type: "text",
                                label: "Alias Name"
                              },
                              {},
                              {}
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Fileupload, "Fileupload").$$render(
                              $$result,
                              { id: "mc4", mc4value },
                              {
                                mc4value: ($$value) => {
                                  mc4value = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                              default: () => {
                                return `Upload`;
                              }
                            })}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Remote Certificates" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `No`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Alias Name`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Subject`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Issuer`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Valid From`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Valid To`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `1`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `AWS`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `AWS CA`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `2`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Azure`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Azure CA`;
                          }
                        })}
            ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `3`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Self-sign`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `CN=test_name,OU=WII,O=Etherwan`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Self`;
                          }
                        })}
          ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2015`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Sep 08,2025`;
                          }
                        })}`;
                      }
                    })}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                          default: () => {
                            return `4`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                              $$result,
                              {
                                style: "filled",
                                id: "floating_filled",
                                name: "floating_filled",
                                type: "text",
                                label: "Alias Name"
                              },
                              {},
                              {}
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Fileupload, "Fileupload").$$render(
                              $$result,
                              { id: "mc4", mc4value },
                              {
                                mc4value: ($$value) => {
                                  mc4value = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                              default: () => {
                                return `Upload`;
                              }
                            })}`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "CRL" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Manually Uploaded File</span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                              default: () => {
                                return `No`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                              default: () => {
                                return `CRL Issuer`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                              default: () => {
                                return `Next Update`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                              }
                            })}
     <tr><td></td>
    <td></td>
    <td></td>
        <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}

${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "md",
                        class: "w-full",
                        autoclose: true,
                        open: newCRLFileUpload
                      },
                      {
                        open: ($$value) => {
                          newCRLFileUpload = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">CRL File</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"file"}" id="${"configUpload"}" class="${"block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"}"></td>
<td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `Upload`;
                            }
                          })}</td></tr></table>`;
                        }
                      }
                    )}`;
                  }
                })}

    ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">URL</span>`;
                  },
                  default: () => {
                    return `<p class="${"mb-4 font-semibold text-gray-900 dark:text-white"}">Download URL Interval</p>
<div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "everyW", group: crlInterval },
                      {
                        group: ($$value) => {
                          crlInterval = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Every Week`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "everyM", group: crlInterval },
                      {
                        group: ($$value) => {
                          crlInterval = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Every Month`;
                        }
                      }
                    )}
  ${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: "everyQ", group: crlInterval },
                      {
                        group: ($$value) => {
                          crlInterval = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `Every Quarter`;
                        }
                      }
                    )}</div>
<div class="${"p-4"}"></div>
    ${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                              default: () => {
                                return `No`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                              default: () => {
                                return `CRL issuer`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                              default: () => {
                                return `Next Update`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {
                              default: () => {
                                return `URL`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                          }
                        })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                                  default: () => {
                                    return `1`;
                                  }
                                })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}`;
                              }
                            })}
        <tr><td></td>
    <td></td>
    <td></td>
        <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                              default: () => {
                                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                              }
                            })}</td></tr>`;
                          }
                        })}`;
                      }
                    })}

${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "sm",
                        class: "w-full",
                        autoclose: true,
                        open: newCRL
                      },
                      {
                        open: ($$value) => {
                          newCRL = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">URL</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", CRLURL, 0)}></td></tr>


      <tr><td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Add`;
                            }
                          })}</td></tr></table>`;
                        }
                      }
                    )}`;
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
  Certificate as default
};
