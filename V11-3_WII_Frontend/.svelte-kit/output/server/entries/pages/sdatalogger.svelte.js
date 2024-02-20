import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, p as is_void, h as escape_attribute_value, e as escape, o as each, i as add_attribute, g as getContext, v as validate_component, j as compute_slots } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { C as Checkbox } from "../../_app/immutable/chunks/Checkbox-1164c8ae.js";
import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-ec1b7bb9.js";
import { R as Radio } from "../../_app/immutable/chunks/Radio-683e8de1.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { T as Tooltip } from "../../_app/immutable/chunks/Tooltip-dcd21191.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { sdataLoggerConfig, SDatalogger_General_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_ProxyMode_Cloud_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog, ChangedSDataLoggerConfig, modbusConfig, ChangedModbusConfig, genericMQTTConfig, ChangedGenericMQTTConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "@popperjs/core";
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const common = "block w-full";
const common24 = "block w-24";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass",
    "SNWfull"
  ]);
  let { items = [] } = $$props;
  let { value } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass: defaultClass2 = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  let { SNWfull = false } = $$props;
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
  if ($$props.SNWfull === void 0 && $$bindings.SNWfull && SNWfull !== void 0)
    $$bindings.SNWfull(SNWfull);
  selectClass = classNames(SNWfull ? common24 : common, underline ? underlineClass : defaultClass2, sizes[size], underline && "!px-0", $$restProps.class);
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
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Sdatalogger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changed_sdata_logger_data = {};
  let saved_changed_modbus_data = "";
  sessionidG.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  SDatalogger_General_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
  });
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
    saved_changed_modbus_data = val;
  });
  genericMQTTConfig.subscribe((val) => {
  });
  ChangedGenericMQTTConfig.subscribe((val) => {
  });
  let ViewerSelect;
  let PFormatUDefine = "Hello";
  let CloudProfile = [];
  let new_proxy_edge = [
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 1,
      variablePostprocessing: 1,
      variablePostprocessingValue: 1,
      postprocessedDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    }
  ];
  let new_proxy_edge_modal = false;
  let new_proxy_edge_index;
  let modify_proxy_edge_modal = false;
  let modify_proxy_edge_index;
  let new_monitor_edge_modal = false;
  let new_monitor_edge_index;
  let new_monitor_edge = [
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 2,
      variableDisplay: 0,
      dataFormat: 0,
      userDefinedData: ""
    }
  ];
  let modify_monitor_edge_modal = false;
  let modify_monitor_edge_index;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-48"}"><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Smart Data Logger</p></td>
<td class="${"pl-5 pt-5"}">${``}</td>
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

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Proxy Mode" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Edge Data
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Modbus Variable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Variable Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Variable Postprocessing`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Postprocessed Display`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                                default: () => {
                                  return `Data Format`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                                    default: () => {
                                      return `${``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}



${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_proxy_edge_modal
                            },
                            {
                              open: ($$value) => {
                                new_proxy_edge_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_proxy_edge[new_proxy_edge_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Variable ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.master, (MasterVariable, index) => {
                                  return `<option${add_attribute("value", MasterVariable.variableName, 0)}>${escape(MasterVariable.variableName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave, (SlaveVariable, index) => {
                                  return `<option${add_attribute("value", SlaveVariable.variableName, 0)}>${escape(SlaveVariable.variableName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 2, 0)}>Unsigned Short</option><option${add_attribute("value", 3, 0)}>Signed Short</option><option${add_attribute("value", 4, 0)}>Unsigned Integer</option><option${add_attribute("value", 5, 0)}>Signed Integer</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Postprocessing</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>


   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    id: "operand_value",
                                    name: "operand_value",
                                    type: "number",
                                    label: "operand_value",
                                    value: new_proxy_edge[new_proxy_edge_index].ariablePostprocessingValue
                                  },
                                  {
                                    value: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].ariablePostprocessingValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Postprocessed Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_proxy_edge[new_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_proxy_edge[new_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: new_proxy_edge[new_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_proxy_edge[new_proxy_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_proxy_edge[new_proxy_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${new_proxy_edge[new_proxy_edge_index].dataFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Format",
                                    rows: "12",
                                    name: "message",
                                    value: PFormatUDefine
                                  },
                                  {
                                    value: ($$value) => {
                                      PFormatUDefine = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
            <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}




${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_proxy_edge_modal
                            },
                            {
                              open: ($$value) => {
                                modify_proxy_edge_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Variable ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.master, (MasterVariable, index) => {
                                  return `<option${add_attribute("value", MasterVariable.variableName, 0)}>${escape(MasterVariable.variableName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave, (SlaveVariable, index) => {
                                  return `<option${add_attribute("value", SlaveVariable.variableName, 0)}>${escape(SlaveVariable.variableName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 2, 0)}>Unsigned Short</option><option${add_attribute("value", 3, 0)}>Signed Short</option><option${add_attribute("value", 4, 0)}>Unsigned Integer</option><option${add_attribute("value", 5, 0)}>Signed Integer</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Postprocessing</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>


   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    id: "operand_value",
                                    name: "operand_value",
                                    type: "number",
                                    label: "operand_value",
                                    value: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].variablePostprocessingValue
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].variablePostprocessingValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Postprocessed Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Format",
                                    rows: "12",
                                    name: "message",
                                    value: PFormatUDefine
                                  },
                                  {
                                    value: ($$value) => {
                                      PFormatUDefine = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
            <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Cloud Settings
    </span>`;
                  },
                  default: () => {
                    return `${``}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

  ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Monitor Mode" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Edge Data
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Modbus Variable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Variable Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Variable Display`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Data Format`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                                    default: () => {
                                      return `${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}

${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              autoclose: true,
                              open: new_monitor_edge_modal
                            },
                            {
                              open: ($$value) => {
                                new_monitor_edge_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_monitor_edge[new_monitor_edge_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Variable ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.master, (MasterVariable, index) => {
                                  return `<option${add_attribute("value", MasterVariable.variableName, 0)}>${escape(MasterVariable.variableName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave, (SlaveVariable, index) => {
                                  return `<option${add_attribute("value", SlaveVariable.variableName, 0)}>${escape(SlaveVariable.variableName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 2, 0)}>Unsigned Short</option><option${add_attribute("value", 3, 0)}>Signed Short</option><option${add_attribute("value", 4, 0)}>Unsigned Integer</option><option${add_attribute("value", 5, 0)}>Signed Integer</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>




<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_monitor_edge[new_monitor_edge_index].variableDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].variableDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_monitor_edge[new_monitor_edge_index].variableDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].variableDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: new_monitor_edge[new_monitor_edge_index].variableDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].variableDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_monitor_edge[new_monitor_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: new_monitor_edge[new_monitor_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Format",
                                    rows: "12",
                                    name: "message",
                                    value: PFormatUDefine
                                  },
                                  {
                                    value: ($$value) => {
                                      PFormatUDefine = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
            <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_monitor_edge_modal
                            },
                            {
                              open: ($$value) => {
                                modify_monitor_edge_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose Variable ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.master, (MasterVariable, index) => {
                                  return `<option${add_attribute("value", MasterVariable.variableName, 0)}>${escape(MasterVariable.variableName)}</option>`;
                                })}
${each(saved_changed_modbus_data.config.fieldManagement_modbus_variable.slave, (SlaveVariable, index) => {
                                  return `<option${add_attribute("value", SlaveVariable.variableName, 0)}>${escape(SlaveVariable.variableName)}</option>`;
                                })}` : ``}</select></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

 <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Type ...</option><option${add_attribute("value", 1, 0)}>Boolean</option><option${add_attribute("value", 2, 0)}>Unsigned Short</option><option${add_attribute("value", 3, 0)}>Signed Short</option><option${add_attribute("value", 4, 0)}>Unsigned Integer</option><option${add_attribute("value", 5, 0)}>Signed Integer</option><option${add_attribute("value", 6, 0)}>Float</option><option${add_attribute("value", 7, 0)}>Double</option></select></td></tr>




<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].variableDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].variableDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Hexadecimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].variableDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].variableDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Decimal`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 2,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].variableDisplay
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].variableDisplay = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$`;
                                        }
                                      })}`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `TimeStamp`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword1`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword2`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword3`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `Keyword4`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Format",
                                    rows: "12",
                                    name: "message",
                                    value: PFormatUDefine
                                  },
                                  {
                                    value: ($$value) => {
                                      PFormatUDefine = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}` : `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Disabled",
                                    rows: "12",
                                    name: "message",
                                    class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                    disabled: true
                                  },
                                  {},
                                  {}
                                )}`}</td></tr>
            <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Cloud Settings
    </span>`;
                  },
                  default: () => {
                    return `${``}`;
                  }
                })}`;
              }
            })}`;
          }
        })}


    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Data Viewer" }, {}, {
          default: () => {
            return `<table><tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Select By</p></td></tr>



<tr><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
              $$result,
              { value: "CProfile", group: ViewerSelect },
              {
                group: ($$value) => {
                  ViewerSelect = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Cloud Profile`;
                }
              }
            )}</td>

    <td class="${"pl-4 pt-3"}">${validate_component(Select, "Select").$$render(
              $$result,
              {
                class: "mt-2",
                items: CloudProfile,
                placeholder: "None"
              },
              {},
              {}
            )}</td></tr>

<tr><td></td><td class="${"pt-5"}">${validate_component(Checkbox, "Checkbox").$$render(
              $$result,
              {
                value: "DataDuration",
                group: ViewerSelect
              },
              {
                group: ($$value) => {
                  ViewerSelect = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Data Duration`;
                }
              }
            )}</td>

    <td class="${"pl-4 pt-3"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
              $$result,
              {
                style: "filled",
                id: "Days",
                name: "Days",
                type: "text",
                label: "Days",
                value: 1
              },
              {},
              {}
            )}</td>
    <td class="${"pl-4 pt-3"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
              $$result,
              {
                style: "filled",
                id: "Hours",
                name: "Hours",
                type: "text",
                label: "Hours",
                value: 2
              },
              {},
              {}
            )}</td>    
    <td class="${"pl-4 pt-3"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
              $$result,
              {
                style: "filled",
                id: "Mins",
                name: "Mins",
                type: "text",
                label: "Mins",
                value: 3
              },
              {},
              {}
            )}</td></tr>


<tr><td></td><td class="${"pt-5"}"><button type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full"}">Execute</button></td></tr></table>


<p class="${"pt-20"}"></p>

 ${validate_component(Table, "Table").$$render(
              $$result,
              {
                shadow: true,
                striped: true,
                tableNoWFull: true
              },
              {},
              {
                default: () => {
                  return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Timestamp`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Mode`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Edge Data Alias Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Cloud Profile`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Content`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Data Duration`;
                        }
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `2023/11/03 13:02:25`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `Proxy Mode`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `Proxy_EdgeData_`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `MQTT Profile1, Azure Profile1`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `LineCurrent A is larger than 1000`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `3 days 10 hours 12 mins`;
                            }
                          })}`;
                        }
                      })}

      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `2023/11/13 20:02:25`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `Monitor Mode`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `Monitor_EdgeData_`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `MQTT Profile2, Azure Profile2`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `LineCurrent B is larger than 1000`;
                            }
                          })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `2 days 20 hours 2 mins`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Sdatalogger as default
};
