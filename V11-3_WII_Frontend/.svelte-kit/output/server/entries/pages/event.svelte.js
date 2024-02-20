import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, h as escape_attribute_value, e as escape, i as add_attribute, o as each, k as subscribe, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-683e8de1.js";
import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-ec1b7bb9.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-cdce3b4c.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { w as writable } from "../../_app/immutable/chunks/index-b74adbb6.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { ChangedModbusConfig, eventEngineConfig, EventEngine_General_ConfigChangedLog, EventEngine_TriggerSMS_ConfigChangedLog, EventEngine_TriggerDI_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_TriggerTCPMsg_ConfigChangedLog, EventEngine_TriggerMQTT_ConfigChangedLog, EventEngine_ActionSMS_ConfigChangedLog, EventEngine_ActionEmail_ConfigChangedLog, EventEngine_ActionDO_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, EventEngine_ActionTCPMsg_ConfigChangedLog, EventEngine_ActionMQTT_ConfigChangedLog, EventEngine_ActionLINE_ConfigChangedLog, ChangedEventEngineConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
const StepIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["steps", "currentStep", "size", "color", "glow", "hideLabel"]);
  let { steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"] } = $$props;
  let { currentStep = 1 } = $$props;
  let { size = "h-2.5" } = $$props;
  let { color = "blue" } = $$props;
  let { glow = false } = $$props;
  let { hideLabel = false } = $$props;
  const completedStepColors = {
    gray: "bg-gray-400 dark:bg-gray-500",
    red: "bg-red-600 dark:bg-red-900",
    yellow: "bg-yellow-400 dark:bg-yellow-600",
    green: "bg-green-500 dark:bg-green-900",
    indigo: "bg-indigo-500 dark:bg-indigo-900",
    purple: "bg-purple-500 dark:bg-purple-900",
    pink: "bg-pink-500 dark:bg-pink-900",
    blue: "bg-blue-500 dark:bg-blue-900"
  };
  const currentStepColors = {
    gray: "bg-gray-700 dark:bg-gray-200",
    red: "bg-red-900 dark:bg-red-500",
    yellow: "bg-yellow-600 dark:bg-yellow-400",
    green: "bg-green-800 dark:bg-green-400",
    indigo: "bg-indigo-800 dark:bg-indigo-400",
    purple: "bg-purple-800 dark:bg-purple-400",
    pink: "bg-pink-800 dark:bg-pink-400",
    blue: "bg-blue-800 dark:bg-blue-400"
  };
  if ($$props.steps === void 0 && $$bindings.steps && steps !== void 0)
    $$bindings.steps(steps);
  if ($$props.currentStep === void 0 && $$bindings.currentStep && currentStep !== void 0)
    $$bindings.currentStep(currentStep);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.glow === void 0 && $$bindings.glow && glow !== void 0)
    $$bindings.glow(glow);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("space-y-2 dark:text-white", $$props.class))
      }
    ],
    {}
  )}>${!hideLabel ? `<h3 class="${"text-base font-semibold"}">${escape(steps[currentStep - 1])}</h3>` : ``}
  <div${add_attribute("class", classNames("flex justify-between gap-2 w-full", size), 0)}>${each(steps, (step, i) => {
    return `${i === currentStep - 1 ? `<div class="${"relative w-full h-full"}"><div${add_attribute("class", classNames("relative w-full h-full rounded-sm", currentStepColors[color]), 0)}></div>
          ${glow ? `<div${add_attribute("class", classNames("absolute -inset-1 rounded-sm blur opacity-30 dark:opacity-25", currentStepColors[color]), 0)}></div>` : ``}
        </div>` : `${i < currentStep - 1 ? `<div${add_attribute("class", classNames("w-full h-full rounded-sm", completedStepColors[color]), 0)}></div>` : `<div${add_attribute("class", classNames("w-full h-full rounded-sm bg-gray-200 dark:bg-gray-700"), 0)}></div>`}`}`;
  })}</div></div>`;
});
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sortItems, $$unsubscribe_sortItems;
  let $sortDirection, $$unsubscribe_sortDirection;
  let $sortKey, $$unsubscribe_sortKey;
  let changed_event_engine_data = {};
  ChangedModbusConfig.subscribe((val) => {
  });
  eventEngineConfig.subscribe((val) => {
  });
  EventEngine_General_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerSMS_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerDI_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerModbus_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerTCPMsg_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerMQTT_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionSMS_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionEmail_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionDO_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionModbus_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionTCPMsg_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionMQTT_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_ActionLINE_ConfigChangedLog.subscribe((val) => {
  });
  ChangedEventEngineConfig.subscribe((val) => {
  });
  sessionidG.subscribe((val) => {
  });
  let modify_action_line_modal = false;
  let modify_action_line_index;
  let new_action_line_modal = false;
  let new_action_line_index;
  let NewActionLINE = [
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    }
  ];
  let modify_action_mqtt_modal = false;
  let modify_action_mqtt_index;
  let new_action_mqtt_modal = false;
  let new_action_mqtt_index;
  let NewActionMQTT = [
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    }
  ];
  let modify_action_tcpmsg_modal = false;
  let modify_action_tcpmsg_index;
  let new_action_tcpmsg_modal = false;
  let new_action_tcpmsg_index;
  let NewActionTCPMsg = [
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 0,
      sendingMessage: ""
    }
  ];
  let modify_action_modbus_modal = false;
  let modify_action_modbus_index;
  let new_action_modbus_modal = false;
  let new_action_modbus_index;
  let NewActionModbus = [
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      assignment: 2e3
    }
  ];
  let modify_action_do_modal = false;
  let modify_action_do_index;
  let new_action_do_modal = false;
  let new_action_do_index;
  let NewActionDO = [
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      duration: 2
    }
  ];
  let modify_action_email_smtp_modal = false;
  let modify_action_email_smtp_index;
  let modify_action_email_remote_modal = false;
  let modify_action_email_remote_index;
  let new_action_email_remote_modal = false;
  let new_action_email_remote_index;
  let NewActionEmailRemote = [
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    }
  ];
  let modify_action_sms_modal = false;
  let modify_action_sms_index;
  let new_action_sms_modal = false;
  let new_action_sms_index;
  let NewActionSMS = [
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    }
  ];
  let modify_trigger_mqtt_modal = false;
  let modify_trigger_mqtt_index;
  let new_trigger_mqtt_modal = false;
  let new_trigger_mqtt_index;
  let NewTriggerMQTT = [
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    }
  ];
  let modify_trigger_tcpMsg_modal = false;
  let modify_trigger_tcpMsg_index;
  let new_trigger_tcpMsg_modal = false;
  let new_trigger_tcpMsg_index;
  let NewTriggerTCPMsg = [
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    },
    {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8e3,
      receivedMessage: ""
    }
  ];
  let modify_trigger_modbus_modal = false;
  let modify_trigger_modbus_index;
  let new_trigger_modbus_modal = false;
  let new_trigger_modbus_index;
  let NewTriggerModbus = [
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      aliasName: "",
      modbusVariable: "",
      variableType: 0,
      comparison: 1,
      comparisonValue: 1
    }
  ];
  let modify_trigger_di_modal = false;
  let modify_trigger_di_index;
  let new_trigger_di_modal = false;
  let new_trigger_di_index;
  let NewTriggerDI = [
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    },
    {
      enable: false,
      aliasName: "",
      type: 0,
      debouncing: { rateCount: 3, interval: 3 },
      duration: 2
    }
  ];
  let modify_trigger_sms_modal = false;
  let modify_trigger_sms_index;
  let new_trigger_sms_modal = false;
  let new_trigger_sms_index;
  let NewTriggerSMS = [
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    }
  ];
  let formModalRule = false;
  let currentStep = 1;
  let steps = ["Step 1", "Step 2", "Step 3"];
  let R_Name = "sms_or_modbus_trigger_do";
  let R_TCount = "2";
  let R_TMultipleRelation = "OR";
  let items = [
    {
      tt: "2023/11/01 02:03:30",
      tc: "SMS",
      tn: "T_sms_",
      at: "2023/11/01 02:03:35",
      ac: "Email",
      an: "A_Email_"
    },
    {
      tt: "2023/11/01 02:03:35",
      tc: "Modbus",
      tn: "T_Modbus_",
      at: "2023/11/01 02:03:45",
      ac: "DO",
      an: "A_DO_"
    },
    {
      tt: "2023/11/02 02:03:30",
      tc: "DI",
      tn: "T_DI_",
      at: "2023/11/02 02:03:35",
      ac: "DO",
      an: "A_DO_"
    },
    {
      tt: "2023/11/02 02:03:40",
      tc: "SMS",
      tn: "T_sms_",
      at: "2023/11/02 02:03:45",
      ac: "Email",
      an: "A_Email_"
    }
  ];
  const sortKey = writable("tt");
  $$unsubscribe_sortKey = subscribe(sortKey, (value) => $sortKey = value);
  const sortDirection = writable(-1);
  $$unsubscribe_sortDirection = subscribe(sortDirection, (value) => $sortDirection = value);
  const sortItems = writable(items.slice());
  $$unsubscribe_sortItems = subscribe(sortItems, (value) => $sortItems = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        const key = $sortKey;
        const direction = $sortDirection;
        const sorted = [...$sortItems].sort((a, b) => {
          const aVal = a[key];
          const bVal = b[key];
          if (aVal < bVal) {
            return -direction;
          } else if (aVal > bVal) {
            return direction;
          }
          return 0;
        });
        sortItems.set(sorted);
      }
    }
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-36"}"><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Event Engine</p></td>
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

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Trigger Profiles" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">SMS
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
                                  return `SMS Phone Number`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `SMS Content`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}    
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>

${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_trigger_sms_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_trigger_sms_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerSMS[new_trigger_sms_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Phone Number</p></td>

  <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 0,
                                        group: NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber
                                      },
                                      {
                                        group: ($$value) => {
                                          NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Any`;
                                        }
                                      }
                                    )}
  ${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 1,
                                        group: NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber
                                      },
                                      {
                                        group: ($$value) => {
                                          NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Specified:`;
                                        }
                                      }
                                    )}

${NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber == 0 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled${add_attribute("value", NewTriggerSMS[new_trigger_sms_index].smsPhoneNumberSpecified, 0)}>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerSMS[new_trigger_sms_index].smsPhoneNumberSpecified, 0)}>`}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerSMS[new_trigger_sms_index].smsContent, 0)}></td></tr>






            <tr><td></td>
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
                                  open: modify_trigger_sms_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_trigger_sms_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Phone Number</p></td>

  <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 0,
                                        group: changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Any`;
                                        }
                                      }
                                    )}
  ${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 1,
                                        group: changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Specified:`;
                                        }
                                      }
                                    )}

${changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber == 0 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumberSpecified, 0)}>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumberSpecified, 0)}>`}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsContent, 0)}></td></tr>






            <tr><td></td>
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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">DI
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                                default: () => {
                                  return `Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Debouncing`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Duration`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {})}
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_trigger_di_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_trigger_di_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerDI[new_trigger_di_index].aliasName, 0)}></div></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 0,
                                        group: NewTriggerDI[new_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewTriggerDI[new_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Level Trigger : High`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 1,
                                        group: NewTriggerDI[new_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewTriggerDI[new_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Level Trigger : Low`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 2,
                                        group: NewTriggerDI[new_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewTriggerDI[new_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Edge Trigger : High to Low`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 3,
                                        group: NewTriggerDI[new_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewTriggerDI[new_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Edge Trigger : Low to High`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 4,
                                        group: NewTriggerDI[new_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewTriggerDI[new_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Edge Trigger : Toggle`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Debouncing</p></td>
      <td class="${"pl-5 pt-4"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                      $$result,
                                      {
                                        style: "outlined",
                                        id: "sampling_rate_count",
                                        name: "sampling_rate_count",
                                        type: "number",
                                        label: "sampling_rate_count",
                                        value: NewTriggerDI[new_trigger_di_index].debouncing.rateCount
                                      },
                                      {
                                        value: ($$value) => {
                                          NewTriggerDI[new_trigger_di_index].debouncing.rateCount = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `sampling_rate_count
  `;
                                        }
                                      }
                                    )}</td>
  <td class="${"pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><p class="${"pl-2 pt-4"}">X</p> 
   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                      $$result,
                                      {
                                        style: "outlined",
                                        id: "interval",
                                        name: "interval",
                                        type: "number",
                                        label: "interval(ms)",
                                        value: NewTriggerDI[new_trigger_di_index].debouncing.interval
                                      },
                                      {
                                        value: ($$value) => {
                                          NewTriggerDI[new_trigger_di_index].debouncing.interval = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `interval(ms)
  `;
                                        }
                                      }
                                    )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Duration</p></td>
<td class="${"pl-5 pt-5"}">${NewTriggerDI[new_trigger_di_index].type != 2 && NewTriggerDI[new_trigger_di_index].type != 3 && NewTriggerDI[new_trigger_di_index].type != 4 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerDI[new_trigger_di_index].duration, 0)}>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled${add_attribute("value", NewTriggerDI[new_trigger_di_index].duration, 0)}>`}</td>
<td><p class="${"pl-2 pt-4 text-lg"}">second(s)</p></td></tr>





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
                                  open: modify_trigger_di_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_trigger_di_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].aliasName, 0)}></div></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 0,
                                        group: changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Level Trigger : High`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 1,
                                        group: changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Level Trigger : Low`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 2,
                                        group: changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Edge Trigger : High to Low`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 3,
                                        group: changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Edge Trigger : Low to High`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 4,
                                        group: changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Edge Trigger : Toggle`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Debouncing</p></td>
      <td class="${"pl-5 pt-4"}">${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                      $$result,
                                      {
                                        style: "outlined",
                                        id: "sampling_rate_count",
                                        name: "sampling_rate_count",
                                        type: "number",
                                        label: "sampling_rate_count",
                                        value: changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].debouncing.rateCount
                                      },
                                      {
                                        value: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].debouncing.rateCount = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `sampling_rate_count
  `;
                                        }
                                      }
                                    )}</td>
  <td class="${"pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><p class="${"pl-2 pt-4"}">X</p> 
   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                      $$result,
                                      {
                                        style: "outlined",
                                        id: "interval",
                                        name: "interval",
                                        type: "number",
                                        label: "interval(ms)",
                                        value: changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].debouncing.interval
                                      },
                                      {
                                        value: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].debouncing.interval = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `interval(ms)
  `;
                                        }
                                      }
                                    )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Duration</p></td>
<td class="${"pl-5 pt-5"}">${changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type != 2 && changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type != 3 && changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type != 4 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].duration, 0)}>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].duration, 0)}>`}</td>
<td><p class="${"pl-2 pt-4 text-lg"}">second(s)</p></td></tr>





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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Modbus
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
                                  return `Comparison`;
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
                                      return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}`;
                        }
                      }
                    )}


    ${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "lg",
                        class: "w-full",
                        autoclose: true,
                        open: new_trigger_modbus_modal
                      },
                      {
                        open: ($$value) => {
                          new_trigger_modbus_modal = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerModbus[new_trigger_modbus_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}">${escape(NewTriggerModbus[new_trigger_modbus_index].modbusVariable)}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

    <td class="${"pl-4 pt-4"}"><div>${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 1,
                              group: NewTriggerModbus[new_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Boolean`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 2,
                              group: NewTriggerModbus[new_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 3,
                              group: NewTriggerModbus[new_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 4,
                              group: NewTriggerModbus[new_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 5,
                              group: NewTriggerModbus[new_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 6,
                              group: NewTriggerModbus[new_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Float`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 7,
                              group: NewTriggerModbus[new_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Double`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Comparison</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 1, 0)}>&gt;</option><option${add_attribute("value", 2, 0)}>${escape("<")}</option><option${add_attribute("value", 3, 0)}>&gt;=</option><option${add_attribute("value", 4, 0)}>${escape("<")}=</option><option${add_attribute("value", 5, 0)}>=</option><option${add_attribute("value", 6, 0)}>!=</option></select>

   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                            $$result,
                            {
                              style: "outlined",
                              id: "compared_value",
                              name: "compared_value",
                              type: "number",
                              label: "compared_value",
                              value: NewTriggerModbus[new_trigger_modbus_index].comparisonValue
                            },
                            {
                              value: ($$value) => {
                                NewTriggerModbus[new_trigger_modbus_index].comparisonValue = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}</div></td></tr>



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
                        open: modify_trigger_modbus_modal
                      },
                      {
                        open: ($$value) => {
                          modify_trigger_modbus_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}">${escape(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].modbusVariable)}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

    <td class="${"pl-4 pt-4"}"><div>${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 1,
                              group: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Boolean`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 2,
                              group: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 3,
                              group: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 4,
                              group: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 5,
                              group: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 6,
                              group: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Float`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 7,
                              group: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Double`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Comparison</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 1, 0)}>&gt;</option><option${add_attribute("value", 2, 0)}>${escape("<")}</option><option${add_attribute("value", 3, 0)}>&gt;=</option><option${add_attribute("value", 4, 0)}>${escape("<")}=</option><option${add_attribute("value", 5, 0)}>=</option><option${add_attribute("value", 6, 0)}>!=</option></select>

   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                            $$result,
                            {
                              style: "outlined",
                              id: "compared_value",
                              name: "compared_value",
                              type: "number",
                              label: "compared_value",
                              value: changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].comparisonValue
                            },
                            {
                              value: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].comparisonValue = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}</div></td></tr>



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
                    )}

<p class="${"mt-8"}">${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">TCP Message
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
                                  return `Remote Host`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote Port`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Received Message`;
                                }
                              })}`;
                            }
                          })}


   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>

${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_trigger_tcpMsg_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_trigger_tcpMsg_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerTCPMsg[new_trigger_tcpMsg_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Host</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerTCPMsg[new_trigger_tcpMsg_index].remoteHost, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Port</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerTCPMsg[new_trigger_tcpMsg_index].remotePort, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Received Message</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerTCPMsg[new_trigger_tcpMsg_index].receivedMessage, 0)}></td></tr>






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
                                  open: modify_trigger_tcpMsg_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_trigger_tcpMsg_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Host</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].remoteHost, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Port</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].remotePort, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Received Message</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].receivedMessage, 0)}></td></tr>






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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">MQTT Notification
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
                                  return `MQTT Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Subscribed Topic`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Received Content`;
                                }
                              })}`;
                            }
                          })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length < 10 ? `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>` : ``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>

${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_trigger_mqtt_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_trigger_mqtt_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerMQTT[new_trigger_mqtt_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MQTT Profile</p></td>

  <td class="${"pl-5 pt-4"}">${escape(NewTriggerMQTT[new_trigger_mqtt_index].mqttProfile)}</td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Subscribed Topic</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerMQTT[new_trigger_mqtt_index].subscribedTopic, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Received Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerMQTT[new_trigger_mqtt_index].receivedContent, 0)}></td></tr>






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
                                  open: modify_trigger_mqtt_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_trigger_mqtt_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MQTT Profile</p></td>

  <td class="${"pl-5 pt-4"}">${escape(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].mqttProfile)}</td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Subscribed Topic</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].subscribedTopic, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Received Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].receivedContent, 0)}></td></tr>






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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}


${validate_component(TabItem, "TabItem").$$render($$result, { title: "Action Profiles" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">SMS
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
                                  return `SMS Phone Number`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `SMS Content`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}
    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_action_sms_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_action_sms_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionSMS[new_action_sms_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Phone Number</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionSMS[new_action_sms_index].smsPhoneNumber, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionSMS[new_action_sms_index].smsContent, 0)}></td></tr>






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
                                  open: modify_action_sms_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_action_sms_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Phone Number</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsPhoneNumber, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContent, 0)}></td></tr>






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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}

${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Email
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
                          return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">SMTP Server
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Please edit the smtp server first.</p></caption>

  ${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Alias Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `SMTP Server IP`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Port`;
                                }
                              })}
        ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `TLS`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Account`;
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
                    )}
<p class="${"mt-4"}">${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Remote Email Profile
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Please edit the remote email profile.</p></caption>

  ${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
            ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
            ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
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
                                  return `Remote Email`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Email Content`;
                                }
                              })}`;
                            }
                          })}
 ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-4" }, {}, {
                                    default: () => {
                                      return `${``}`;
                                    }
                                  })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>

${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_action_email_remote_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_action_email_remote_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionEmailRemote[new_action_email_remote_index].aliasName, 0)}></div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Email</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionEmailRemote[new_action_email_remote_index].remoteEmail, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Email Content</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionEmailRemote[new_action_email_remote_index].emailContent, 0)}></td></tr>



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
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                                  open: modify_action_email_remote_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_action_email_remote_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[modify_action_email_remote_index].aliasName, 0)}></div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Email</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[modify_action_email_remote_index].remoteEmail, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Email Content</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[modify_action_email_remote_index].emailContent, 0)}></td></tr>



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
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                      default: () => {
                                        return `Modify`;
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
                                  open: modify_action_email_smtp_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_action_email_smtp_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].aliasName, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMTP Server IP</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].smtpServerIp, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].port, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">TLS</p></td>

  <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 1,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Yes`;
                                        }
                                      }
                                    )}
  ${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 0,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `No`;
                                        }
                                      }
                                    )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Server CA Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${escape(changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].serverCaCert)}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${escape(changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].clientCert)}</td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Account</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].account, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Password</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].password, 0)}></td></tr>





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
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                      default: () => {
                                        return `Modify`;
                                      }
                                    })}</td></tr></table></table></form>`;
                                  }
                                }
                              )}`;
                            }
                          })}`;
                        }
                      }
                    )}</p>`;
                  }
                })}

${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">DO
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
                                  return `Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Duration`;
                                }
                              })}`;
                            }
                          })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_action_do_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_action_do_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>


<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionDO[new_action_do_index].aliasName, 0)}></div></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 0,
                                        group: NewActionDO[new_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewActionDO[new_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Pulse : Start`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 1,
                                        group: NewActionDO[new_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewActionDO[new_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Pulse : Stop`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 2,
                                        group: NewActionDO[new_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewActionDO[new_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `DO : On`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 3,
                                        group: NewActionDO[new_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          NewActionDO[new_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `DO : Off`;
                                        }
                                      }
                                    )}</td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Duration</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionDO[new_action_do_index].duration, 0)}></td>
<td><p class="${"pl-2 pt-4 text-lg"}">second(s)</p></td></tr>





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
                                  open: modify_action_do_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_action_do_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].aliasName, 0)}></div></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Type</p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 0,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Pulse : Start`;
                                        }
                                      }
                                    )}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 1,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Pulse : Stop`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 2,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `DO : On`;
                                        }
                                      }
                                    )}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

  <td class="${"pl-5 pt-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        value: 3,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `DO : Off`;
                                        }
                                      }
                                    )}</td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Duration</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].duration, 0)}></td>
<td><p class="${"pl-2 pt-4 text-lg"}">second(s)</p></td></tr>





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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Modbus
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
                                  return `Assignment`;
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}`;
                        }
                      }
                    )}


    ${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "lg",
                        class: "w-full",
                        autoclose: true,
                        open: new_action_modbus_modal
                      },
                      {
                        open: ($$value) => {
                          new_action_modbus_modal = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionModbus[new_action_modbus_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}">${escape(NewActionModbus[new_action_modbus_index].modbusVariable)}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${""}"><div>${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 1,
                              group: NewActionModbus[new_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewActionModbus[new_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Boolean`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 2,
                              group: NewActionModbus[new_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewActionModbus[new_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 3,
                              group: NewActionModbus[new_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewActionModbus[new_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 4,
                              group: NewActionModbus[new_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewActionModbus[new_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 5,
                              group: NewActionModbus[new_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewActionModbus[new_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 6,
                              group: NewActionModbus[new_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewActionModbus[new_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Float`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 7,
                              group: NewActionModbus[new_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                NewActionModbus[new_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Double`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Assignment</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionModbus[new_action_modbus_index].assignment, 0)}></td></tr>



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
                        open: modify_action_modbus_modal
                      },
                      {
                        open: ($$value) => {
                          modify_action_modbus_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].aliasName, 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Variable</p></td>
    <td class="${"pl-4 pt-4"}">${escape(changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].modbusVariable)}</td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Variable Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${""}"><div>${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 1,
                              group: changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Boolean`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 2,
                              group: changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 3,
                              group: changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Short`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 4,
                              group: changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Unsigned Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 5,
                              group: changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Signed Integer`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 6,
                              group: changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Float`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              class: "pb-2",
                              value: 7,
                              group: changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].variableType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Double`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Assignment</p></td>
<td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].assignment, 0)}></td></tr>



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
                    )}

<p class="${"mt-8"}">${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">TCP Message
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
                                  return `Remote Host`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Remote Port`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Sending Message`;
                                }
                              })}`;
                            }
                          })}


   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_action_tcpmsg_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_action_tcpmsg_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionTCPMsg[new_action_tcpmsg_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Host</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionTCPMsg[new_action_tcpmsg_index].remoteHost, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Port</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionTCPMsg[new_action_tcpmsg_index].remotePort, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Sending Message</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionTCPMsg[new_action_tcpmsg_index].sendingMessage, 0)}></td></tr>






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
                                  open: modify_action_tcpmsg_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_action_tcpmsg_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Host</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].remoteHost, 0)}></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Remote Port</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].remotePort, 0)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Sending Message</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].sendingMessage, 0)}></td></tr>






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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">MQTT Publish
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
                                  return `MQTT Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Publish Topic`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Sending Content`;
                                }
                              })}`;
                            }
                          })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_action_mqtt_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_action_mqtt_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionMQTT[new_action_mqtt_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MQTT Profile</p></td>

  <td class="${"pl-5 pt-4"}"><select class="${"block w-36 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option></select></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Publish Topic</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionMQTT[new_action_mqtt_index].publishTopic, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Sending Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionMQTT[new_action_mqtt_index].sendingContent, 0)}></td></tr>






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
                                  open: modify_action_mqtt_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_action_mqtt_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">MQTT Profile</p></td>

  <td class="${"pl-5 pt-4"}"><select class="${"block w-36 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option></select></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Publish Topic</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].publishTopic, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Sending Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].sendingContent, 0)}></td></tr>






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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Line Notification
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
                                  return `Token`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Sending Content`;
                                }
                              })}`;
                            }
                          })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>


${validate_component(Modal, "Modal").$$render(
                                $$result,
                                {
                                  size: "lg",
                                  class: "w-full",
                                  autoclose: true,
                                  open: new_action_line_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_action_line_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionLINE[new_action_line_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Token</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionLINE[new_action_line_index].token, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Sending Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionLINE[new_action_line_index].sendingContent, 0)}></td></tr>






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
                                  open: modify_action_line_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_action_line_modal = $$value;
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

<table><tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[modify_action_line_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Token</p></td>

  <td class="${"pl-5 pt-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[modify_action_line_index].token, 0)}></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Sending Content</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[modify_action_line_index].sendingContent, 0)}></td></tr>






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
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}


    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Rule Settings" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render($$result, { tableNoWFull: true }, {}, {
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
                        return `Trigger Catalog`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                      default: () => {
                        return `Delay Second`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                      default: () => {
                        return `Action Option`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                      default: () => {
                        return `Action Catalog`;
                      }
                    })}`;
                  }
                })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render(
                      $$result,
                      {
                        class: "border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-60"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                            default: () => {
                              return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}

    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                            default: () => {
                              return `0`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {
                            default: () => {
                              return `1`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `R_sms_or_modbus_trigger_do`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `SMS or MODBUS`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `3`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `Once`;
                            }
                          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                            default: () => {
                              return `DO`;
                            }
                          })}`;
                        }
                      }
                    )}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                          default: () => {
                            return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                          }
                        })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr>

    ${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        autoclose: false,
                        size: "lg",
                        class: "w-full",
                        open: formModalRule
                      },
                      {
                        open: ($$value) => {
                          formModalRule = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}

<p class="${"mt-4"}"></p>



<table>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}" ${""}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><p class="${"pt-2 text-sm text-right"}">R_</p><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", R_Name, 0)}></div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Trigger Count</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            { value: "1", group: R_TCount },
                            {
                              group: ($$value) => {
                                R_TCount = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `1`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            { value: "2", group: R_TCount },
                            {
                              group: ($$value) => {
                                R_TCount = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `2`;
                              }
                            }
                          )}
  ${validate_component(Radio, "Radio").$$render(
                            $$result,
                            { value: "3", group: R_TCount },
                            {
                              group: ($$value) => {
                                R_TCount = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `3`;
                              }
                            }
                          )}</div></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Multiple Triggers Relationship</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${R_TCount == "1" ? `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: "OR",
                              name: "disabled-state",
                              disabled: true,
                              group: R_TMultipleRelation
                            },
                            {
                              group: ($$value) => {
                                R_TMultipleRelation = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OR`;
                              }
                            }
                          )}` : `${validate_component(Radio, "Radio").$$render(
                            $$result,
                            { value: "OR", group: R_TMultipleRelation },
                            {
                              group: ($$value) => {
                                R_TMultipleRelation = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `OR`;
                              }
                            }
                          )}`}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">1st Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option value="${"SMS"}">SMS</option><option value="${"DI"}">DI</option><option value="${"Modbus"}">Modbus</option><option value="${"MQTT Notification"}">MQTT Notification</option><option value="${"TCPM"}">TCP Message</option><option value="${"WANs"}">WAN Status</option><option value="${"LANs"}">LAN Status</option><option value="${"Logins"}">Login Status</option><option value="${"Systems"}">System Status</option></select></td></tr>



<tr><td>${`<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}"><select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${`<option value="${"1"}">T_sms_</option>`}</select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">2nd Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}">${R_TCount == "1" ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option><option value="${"SMS"}">SMS</option><option value="${"DI"}">DI</option><option value="${"Modbus"}">Modbus</option><option value="${"MQTT Notification"}">MQTT Notification</option><option value="${"TCPM"}">TCP Message</option><option value="${"WANs"}">WAN Status</option><option value="${"LANs"}">LAN Status</option><option value="${"Logins"}">Login Status</option><option value="${"Systems"}">System Status</option></select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option value="${"SMS"}">SMS</option><option value="${"DI"}">DI</option><option value="${"Modbus"}">Modbus</option><option value="${"MQTT Notification"}">MQTT Notification</option><option value="${"TCPM"}">TCP Message</option><option value="${"WANs"}">WAN Status</option><option value="${"LANs"}">LAN Status</option><option value="${"Logins"}">Login Status</option><option value="${"Systems"}">System Status</option></select>`}</td></tr>



<tr><td>${`<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${R_TCount == "1" ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option>${`${`${`<option value="${"3"}">T_Modbus_</option>`}`}`}</select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${`${`${`<option value="${"3"}">T_Modbus_</option>`}`}`}</select>`}</td></tr>





<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">3rd Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}">${R_TCount == "3" ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option value="${"SMS"}">SMS</option><option value="${"DI"}">DI</option><option value="${"Modbus"}">Modbus</option><option value="${"MQTT Notification"}">MQTT Notification</option><option value="${"TCPM"}">TCP Message</option><option value="${"WANs"}">WAN Status</option><option value="${"LANs"}">LAN Status</option><option value="${"Logins"}">Login Status</option><option value="${"Systems"}">System Status</option></select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option><option value="${"SMS"}">SMS</option><option value="${"DI"}">DI</option><option value="${"Modbus"}">Modbus</option><option value="${"MQTT Notification"}">MQTT Notification</option><option value="${"TCPM"}">TCP Message</option><option value="${"WANs"}">WAN Status</option><option value="${"LANs"}">LAN Status</option><option value="${"Logins"}">Login Status</option><option value="${"Systems"}">System Status</option></select>`}</td></tr>




<tr><td>${`<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${R_TCount == "3" ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${`${`${`${`${`${`${``}`}`}`}`}`}`}</select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option>${`${`${`${`${`${`${``}`}`}`}`}`}`}</select>`}</td></tr>



<tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Next`;
                            }
                          })}</td></tr>`}</table>`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "Simulator" }, {}, {
          default: () => {
            return `<p>Select Rule: </p><select class="${"block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option value="${"1"}">R_sms_or_modbus_trigger_do</option></select>

${``}


${``}


${``}`;
          }
        })}



    ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Log Viewer" }, {}, {
          default: () => {
            return `<button type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full"}">Refresh</button>

<p class="${"pt-10"}"></p>

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
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { style: "cursor:pointer" }, {}, {
                        default: () => {
                          return `Trigger Timestamp`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { style: "cursor:pointer" }, {}, {
                        default: () => {
                          return `Trigger Catalog`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { style: "cursor:pointer" }, {}, {
                        default: () => {
                          return `Trigger Alias Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { style: "cursor:pointer" }, {}, {
                        default: () => {
                          return `Action Timestamp`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { style: "cursor:pointer" }, {}, {
                        default: () => {
                          return `Action Catalog`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { style: "cursor:pointer" }, {}, {
                        default: () => {
                          return `Action Alias Name`;
                        }
                      })}`;
                    }
                  })}
  ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each($sortItems, (item) => {
                        return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `${escape(item.tt)}`;
                              }
                            })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `${escape(item.tc)}`;
                              }
                            })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `${escape(item.tn)}`;
                              }
                            })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `${escape(item.at)}`;
                              }
                            })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `${escape(item.ac)}`;
                              }
                            })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {
                              default: () => {
                                return `${escape(item.an)}`;
                              }
                            })}
      `;
                          }
                        })}`;
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
  $$unsubscribe_sortItems();
  $$unsubscribe_sortDirection();
  $$unsubscribe_sortKey();
  return $$rendered;
});
export {
  Event as default
};
