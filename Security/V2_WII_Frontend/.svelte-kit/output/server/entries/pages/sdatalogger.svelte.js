import { r as get_current_component, c as create_ssr_component, b as compute_rest_props, i as add_attribute, v as validate_component, t as globals, o as each, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { T as Textarea } from "../../_app/immutable/chunks/Textarea-acf16d8f.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-ea7df515.js";
import { createPopper } from "@popperjs/core";
import { F as Frame } from "../../_app/immutable/chunks/Frame-cafee768.js";
import { S as StepIndicator } from "../../_app/immutable/chunks/StepIndicator-2e176f3e.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { sdataLoggerConfig, SDatalogger_General_ConfigChangedLog, SDatalogger_ProxyMode_Edge_ConfigChangedLog, SDatalogger_ProxyMode_Topic_ConfigChangedLog, SDatalogger_MonitorMode_Edge_ConfigChangedLog, SDatalogger_MonitorMode_Cloud_ConfigChangedLog, SDatalogger_MonitorMode_Topic_ConfigChangedLog, ChangedSDataLoggerConfig, modbusConfig, ChangedModbusConfig, genericMQTTConfig, ChangedGenericMQTTConfig, awsIoTcoreConfig, ChangedAWSIoTcoreConfig, azureConfig, ChangedAzureConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
import "../../_app/immutable/chunks/CloseButton-88212a62.js";
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
const Sdatalogger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep = 1;
  let steps = ["Step 1", "Step 2", "Step 3"];
  let modalElement;
  let changed_sdata_logger_data = {};
  let saved_changed_sdata_logger_data = {};
  let saved_changed_modbus_data = "";
  sessionidG.subscribe((val) => {
  });
  sdataLoggerConfig.subscribe((val) => {
  });
  SDatalogger_General_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_ProxyMode_Topic_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe((val) => {
  });
  SDatalogger_MonitorMode_Topic_ConfigChangedLog.subscribe((val) => {
  });
  ChangedSDataLoggerConfig.subscribe((val) => {
    saved_changed_sdata_logger_data = val;
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
  awsIoTcoreConfig.subscribe((val) => {
  });
  ChangedAWSIoTcoreConfig.subscribe((val) => {
  });
  azureConfig.subscribe((val) => {
  });
  ChangedAzureConfig.subscribe((val) => {
  });
  let CloudProfile = [];
  let new_proxy_edge = [
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition: 0,
      periodMS: 1e3,
      changePercentage: 10,
      modbusTag: [],
      cloud: [
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 0,
          userDefineedData: ""
        },
        {
          profile: "",
          topic: [{ type: 0, name: "" }],
          tagDisplay: 0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex: 1,
          userDefineedData: ""
        }
      ]
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
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      modbusTag: "",
      display: 0,
      dataLogFormat: 0,
      userDefineedData: ""
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


${``}



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
                                  return `Modbus Tag`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Sampling Condition`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Cloud Setting`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${``}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {})}`;
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
                              autoclose: false,
                              size: "lg",
                              class: "w-full",
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
                                return `${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}


<table${add_attribute("this", modalElement, 0)}>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", new_proxy_edge[new_proxy_edge_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Sampling Condition</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-1",
                                    value: 0,
                                    group: new_proxy_edge[new_proxy_edge_index].samplingCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].samplingCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Period`;
                                    }
                                  }
                                )}

${new_proxy_edge[new_proxy_edge_index].samplingCondition == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_proxy_edge[new_proxy_edge_index].periodMS, 0)}> <p class="${"pt-2"}">ms</p>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled> <p class="${"pt-2"}">ms</p>`}

  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-1",
                                    value: 1,
                                    group: new_proxy_edge[new_proxy_edge_index].samplingCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      new_proxy_edge[new_proxy_edge_index].samplingCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Once Change`;
                                    }
                                  }
                                )}

${new_proxy_edge[new_proxy_edge_index].samplingCondition == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_proxy_edge[new_proxy_edge_index].changePercentage, 0)}> <p class="${"pt-2"}">%</p>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled> <p class="${"pt-2"}">%</p>`}</div></td>
    <td></td>
    <td></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><button color="${"blue"}" type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48"}">Choose Tag
${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`}</button></td>
   <td></td>
    <td></td></tr>


${``}


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Next`;
                                  }
                                })}</td></tr>`}</table>`;
                              }
                            }
                          )}




${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              autoclose: false,
                              size: "lg",
                              class: "w-full",
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
                                return `<form action="${"#"}"><button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}


<table${add_attribute("this", modalElement, 0)}>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Sampling Condition</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-1",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Period`;
                                    }
                                  }
                                )}

${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].periodMS, 0)}> <p class="${"pt-2"}">ms</p>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled> <p class="${"pt-2"}">ms</p>`}

  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-1",
                                    value: 1,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Once Change`;
                                    }
                                  }
                                )}

${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].changePercentage, 0)}> <p class="${"pt-2"}">%</p>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled> <p class="${"pt-2"}">%</p>`}</div></td>
    <td></td>
    <td></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><button color="${"blue"}" type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48"}">Choose Tag
${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`}</button></td>
   <td></td>
    <td></td></tr>


${``}


<tr><td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pt-4 pl-40"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Next`;
                                  }
                                })}</td></tr>`}</table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}


<p class="${"mt-8"}"></p>

${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus Tag
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Click to show configuration for modbus tag. Please go to modbus page for detailed setting.</p></caption>
${``}`;
                      }
                    })}   

<p class="${"mt-4"}"></p>

${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus RTU Master Profile
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p></caption>


${``}`;
                      }
                    })}

<p class="${"mt-4"}"></p>

${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus TCP Master Profile
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p></caption>

${``}`;
                      }
                    })}`;
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
                                  return `Modbus Tag`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Display`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Data Log Format`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

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
                              permanent: true,
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
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td></tr>






<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_monitor_edge[new_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].display = $$value;
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
                                    group: new_monitor_edge[new_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].display = $$value;
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
                                    group: new_monitor_edge[new_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Log Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: new_monitor_edge[new_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]}`;
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
                                    group: new_monitor_edge[new_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Log Format",
                                    rows: "12",
                                    name: "message",
                                    value: new_monitor_edge[new_monitor_edge_index].userDefineedData
                                  },
                                  {
                                    value: ($$value) => {
                                      new_monitor_edge[new_monitor_edge_index].userDefineedData = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td></tr>




<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Display</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display = $$value;
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
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display = $$value;
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
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Binary`;
                                    }
                                  }
                                )}</div></td></tr>


<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Log Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    class: "pb-2",
                                    value: 0,
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                        default: () => {
                                          return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]}`;
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
                                    group: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `User Defined:`;
                                    }
                                  }
                                )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$TIME$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$ARRAY$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREQUEST$`;
                                  }
                                })}`}</li>

<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$&lt;tag&gt;_RAWREPLY$`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSREQ$`;
                                  }
                                })}`}</li>


<li class="${"pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                                  default: () => {
                                    return `$MODBUSRESP$`;
                                  }
                                })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "textarea-id",
                                    placeholder: "Data Log Format",
                                    rows: "12",
                                    name: "message",
                                    value: changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData = $$value;
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
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Topic Settings
    </span>`;
                  },
                  default: () => {
                    return `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose Cloud Profile ...</option>${each(saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile, (TargetProfile, index) => {
                      return `<option${add_attribute("value", index, 0)}>${escape(TargetProfile)}</option>`;
                    })}</select>



<p class="${"pt-4"}"></p>

${``}`;
                  }
                })}`;
              }
            })}`;
          }
        })}



    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Data Viewer" }, {}, {
          default: () => {
            return `<table><tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Select By</p></td></tr>



<tr><td></td><td class="${"pt-5"}"><label for="${"dviewerCP"}" class="${"text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"}"><input class="${"w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"}" type="${"checkbox"}" id="${"dviewerCP"}" name="${"dviewerCP"}" ${""}>
Cloud Profile</label></td>

    <td class="${"pl-4 pt-3"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80"}"><option disabled="${""}" value="${"none"}">Choose Profile ...</option>${each(CloudProfile, (profile, index) => {
              return `<option${add_attribute("value", profile.value, 0)}>${escape(profile.name)}</option>`;
            })}</select></td></tr>




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
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}`;
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
