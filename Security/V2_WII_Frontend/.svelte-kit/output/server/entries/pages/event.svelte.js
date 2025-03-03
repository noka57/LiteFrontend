import { c as create_ssr_component, k as subscribe, v as validate_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-a38204dd.js";
import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-81886b3d.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-ea7df515.js";
import { S as StepIndicator } from "../../_app/immutable/chunks/StepIndicator-2e176f3e.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
import { w as writable } from "../../_app/immutable/chunks/index-b74adbb6.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { modbusConfig, ChangedModbusConfig, genericMQTTConfig, ChangedGenericMQTTConfig, eventEngineConfig, EventEngine_General_ConfigChangedLog, EventEngine_Rule_ConfigChangedLog, EventEngine_TriggerSMS_ConfigChangedLog, EventEngine_TriggerDI_ConfigChangedLog, EventEngine_TriggerModbus_ConfigChangedLog, EventEngine_TriggerTCPMsg_ConfigChangedLog, EventEngine_TriggerMQTT_ConfigChangedLog, EventEngine_TriggerPING_ConfigChangedLog, EventEngine_TriggerRSSI_ConfigChangedLog, EventEngine_ActionSMS_ConfigChangedLog, EventEngine_ActionEmail_ConfigChangedLog, EventEngine_ActionDO_ConfigChangedLog, EventEngine_ActionModbus_ConfigChangedLog, EventEngine_ActionTCPMsg_ConfigChangedLog, EventEngine_ActionMQTT_ConfigChangedLog, EventEngine_ActionLINE_ConfigChangedLog, ChangedEventEngineConfig } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Label-a273673c.js";
import "../../_app/immutable/chunks/CloseButton-88212a62.js";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sortItems, $$unsubscribe_sortItems;
  let $sortDirection, $$unsubscribe_sortDirection;
  let $sortKey, $$unsubscribe_sortKey;
  let changed_event_engine_data = {};
  let saved_changed_event_engine_data = {};
  let saved_changed_modbus_data = "";
  let CloudProfile = [];
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
    saved_changed_modbus_data = val;
  });
  genericMQTTConfig.subscribe((val) => {
  });
  ChangedGenericMQTTConfig.subscribe((val) => {
  });
  eventEngineConfig.subscribe((val) => {
  });
  EventEngine_General_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_Rule_ConfigChangedLog.subscribe((val) => {
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
  EventEngine_TriggerPING_ConfigChangedLog.subscribe((val) => {
  });
  EventEngine_TriggerRSSI_ConfigChangedLog.subscribe((val) => {
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
    saved_changed_event_engine_data = val;
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
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      token: "",
      sendingContent: ""
    }
  ];
  let new_rule_modal = false;
  let new_rule_index;
  let NewRuleItem = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      triggerCount: 0,
      multipleTriggerRelationship: 0,
      firstTrigger: { catalog: 0, profile: "", statusType: 0 },
      secondTrigger: { catalog: 0, profile: "", statusType: 0 },
      thirdTrigger: { catalog: 0, profile: "", statusType: 0 },
      delaySecond: 3,
      actionOption: 0,
      repeatCnt: 3,
      repeatInterval: 3,
      actionCatalog: 0,
      actionProfile: "",
      actionOperation: 0
    }
  ];
  let modify_rule_modal = false;
  let modify_rule_index;
  let modify_action_mqtt_modal = false;
  let modify_action_mqtt_index;
  let new_action_mqtt_modal = false;
  let new_action_mqtt_index;
  let NewActionMQTT = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
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
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      publishTopic: "",
      sendingContent: ""
    }
  ];
  let modify_action_modbus_modal = false;
  let modify_action_modbus_index;
  let new_action_modbus_modal = false;
  let new_action_modbus_index;
  let NewActionModbus = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      assignment: 2e3
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
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
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      type: 0,
      duration: 2
    },
    {
      enable: false,
      delete: false,
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
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail: "",
      emailContent: ""
    },
    {
      enable: false,
      delete: false,
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
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: "",
      smsContentType: 0,
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
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "",
      receivedContent: ""
    }
  ];
  let modify_trigger_ping_modal = false;
  let modify_trigger_ping_index;
  let new_trigger_ping_modal = false;
  let new_trigger_ping_index;
  let NewTriggerPING = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      pingResult: 0,
      ResultOption: 0,
      ResultContinuousCount: 2,
      RepeatDelaySec: 1
    }
  ];
  let new_trigger_rssi_modal = false;
  let new_trigger_rssi_index;
  let NewTriggerRSSI = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      comparision: 0,
      comparedSelected: 0,
      comparedUserDefinedValue: 10
    }
  ];
  let modify_trigger_rssi_modal = false;
  let modify_trigger_rssi_index;
  let modify_trigger_modbus_modal = false;
  let modify_trigger_modbus_index;
  let new_trigger_modbus_modal = false;
  let new_trigger_modbus_index;
  let NewTriggerModbus = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      modbusTag: "",
      comparison: 1,
      comparisonValue: 1
    }
  ];
  let modify_trigger_sms_modal = false;
  let modify_trigger_sms_index;
  let new_trigger_sms_modal = false;
  let new_trigger_sms_index;
  let NewTriggerSMS = [
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
    }
  ];
  let currentStep = 1;
  let steps = ["Step 1", "Step 2", "Step 3"];
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
                                  return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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

${``}


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
                                  return `Modbus Tag`;
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
                                  return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

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

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (ModbusTag, index) => {
                            return `<option${add_attribute("value", ModbusTag.tagName, 0)}>${escape(ModbusTag.tagName)}</option>`;
                          })}` : ``}</select></td></tr>



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

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (ModbusTag, index) => {
                            return `<option${add_attribute("value", ModbusTag.tagName, 0)}>${escape(ModbusTag.tagName)}</option>`;
                          })}` : ``}</select></td></tr>


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
                })}

${``}


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
                                  return `Cloud Profile`;
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
                                  return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}       
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>

  <td class="${"pl-5 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80"}">${each(CloudProfile, (profile, index) => {
                                      return `<option${add_attribute("value", profile.value, 0)}>${escape(profile.name)}</option>`;
                                    })}</select></td></tr>



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




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>

  <td class="${"pl-5 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80"}">${each(CloudProfile, (profile, index) => {
                                      return `<option${add_attribute("value", profile.value, 0)}>${escape(profile.name)}</option>`;
                                    })}</select></td></tr>



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
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">PING
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                                default: () => {
                                  return `Trigger Type`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                                default: () => {
                                  return `Option`;
                                }
                              })}`;
                            }
                          })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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
                                  open: new_trigger_ping_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_trigger_ping_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-5"}"></p>

<table><tr><td class="${"pl-5 pt-5"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerPING[new_trigger_ping_index].aliasName, 0)}></div></td></tr>

<tr><td class="${"pl-5 pt-5"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Remote Host</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerPING[new_trigger_ping_index].remoteHost, 0)}></div></td></tr>

<tr><td class="${"pl-5 pt-2"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Trigger Type</p></td>

  <td class="${"pl-5 pt-5"}" colspan="${"4"}"><div class="${"flex gap-1"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-36"}"><option disabled="${""}" value="${""}">Choose One ...</option><option${add_attribute("value", 0, 0)}>Failed</option><option${add_attribute("value", 1, 0)}>Successfully</option></select>




  <select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-40"}"><option disabled="${""}" value="${""}">Choose One ...</option><option${add_attribute("value", 0, 0)}>Once</option><option${add_attribute("value", 1, 0)}>Repeat</option></select>



${NewTriggerPING[new_trigger_ping_index].ResultOption == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-2 mb-4"}"${add_attribute("value", NewTriggerPING[new_trigger_ping_index].ResultContinuousCount, 0)}>
<p class="${"pt-5"}">times</p>` : ``}</div></td></tr>



<tr><td class="${"pl-5 pt-1"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Option</p></td>

  <td class="${"pl-5 pt-3"}" colspan="${"4"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-0 mb-0"}"${add_attribute("value", NewTriggerPING[new_trigger_ping_index].RepeatDelaySec, 0)}> <p class="${"pt-3"}">second-delay repeatedly ping after trigger</p></div></td></tr>


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
                                  open: modify_trigger_ping_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_trigger_ping_modal = $$value;
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




<table><tr><td class="${"pl-5 pt-5"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].aliasName, 0)}></div></td></tr>

<tr><td class="${"pl-5 pt-5"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Remote Host</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].remoteHost, 0)}></div></td></tr>

<tr><td class="${"pl-5 pt-2"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Trigger Type</p></td>

  <td class="${"pl-5 pt-5"}" colspan="${"4"}"><div class="${"flex gap-1"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-36"}"><option disabled="${""}" value="${""}">Choose One ...</option><option${add_attribute("value", 0, 0)}>Failed</option><option${add_attribute("value", 1, 0)}>Successfully</option></select>




  <select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-40"}"><option disabled="${""}" value="${""}">Choose One ...</option><option${add_attribute("value", 0, 0)}>Once</option><option${add_attribute("value", 1, 0)}>Repeat</option></select>



${changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].ResultOption == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-2 mb-4"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].ResultContinuousCount, 0)}>
<p class="${"pt-5"}">times</p>` : ``}</div></td></tr>



<tr><td class="${"pl-5 pt-1"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Option</p></td>

  <td class="${"pl-5 pt-3"}" colspan="${"4"}"><div class="${"flex gap-2"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-0 mb-0"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].RepeatDelaySec, 0)}> <p class="${"pt-3"}">second-delay repeatedly ping after trigger</p></div></td></tr>


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
                    return `<span slot="${"header"}" class="${"pl-4"}">RSSI
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
                                  return `Warning Scheme`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {})}`;
                            }
                          })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


    ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0" }, {}, {})}
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
                                  open: new_trigger_rssi_modal
                                },
                                {
                                  open: ($$value) => {
                                    new_trigger_rssi_modal = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-5"}"></p>

<table><tr><td class="${"pl-5 pt-5"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerRSSI[new_trigger_rssi_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Warning Scheme</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-24"}"><option disabled="${""}" value="${"none"}">Choose...</option><option${add_attribute("value", 0, 0)}>${escape("<")}=</option><option${add_attribute("value", 1, 0)}>&gt;=</option></select>

<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-32"}"><option disabled="${""}" value="${"none"}">Choose...</option><option${add_attribute("value", 0, 0)}>L-10</option><option${add_attribute("value", 1, 0)}>M-15</option><option${add_attribute("value", 2, 0)}>H-25</option><option${add_attribute("value", 3, 0)}>User Defined</option></select>


${NewTriggerRSSI[new_trigger_rssi_index].comparedSelected == 3 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 mt-2 mb-4 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewTriggerRSSI[new_trigger_rssi_index].comparedUserDefinedValue, 0)}>` : ``}</div></td>


 <td class="${"pl-4 pt-4"}"></td></tr>





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
                                  open: modify_trigger_rssi_modal
                                },
                                {
                                  open: ($$value) => {
                                    modify_trigger_rssi_modal = $$value;
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

<table><tr><td class="${"pl-5 pt-5"}"><p class="${"pl-5 pt-1 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].aliasName, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Warning Scheme</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-24"}"><option disabled="${""}" value="${"none"}">Choose...</option><option${add_attribute("value", 0, 0)}>${escape("<")}=</option><option${add_attribute("value", 1, 0)}>&gt;=</option></select>

<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-32"}"><option disabled="${""}" value="${"none"}">Choose...</option><option${add_attribute("value", 0, 0)}>L-10</option><option${add_attribute("value", 1, 0)}>M-15</option><option${add_attribute("value", 2, 0)}>H-25</option><option${add_attribute("value", 3, 0)}>User Defined</option></select>


${changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].comparedSelected == 3 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 mt-2 mb-4 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].comparedUserDefinedValue, 0)}>` : ``}</div></td>


 <td class="${"pl-4 pt-4"}"></td></tr>





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
                                  return `${``}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Content</p></td>


<td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        class: "pb-2",
                                        value: 0,
                                        group: NewActionSMS[new_action_sms_index].smsContentType
                                      },
                                      {
                                        group: ($$value) => {
                                          NewActionSMS[new_action_sms_index].smsContentType = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Firmware Release Notification  `;
                                        }
                                      }
                                    )}
  ${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        class: "pb-2",
                                        value: 1,
                                        group: NewActionSMS[new_action_sms_index].smsContentType
                                      },
                                      {
                                        group: ($$value) => {
                                          NewActionSMS[new_action_sms_index].smsContentType = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `User Defined:`;
                                        }
                                      }
                                    )}</div></td></tr>

<tr><td class="${"text-right"}"></td>
      <td class="${"pl-4 pt-4"}" colspan="${"5"}">${NewActionSMS[new_action_sms_index].smsContentType == 0 ? `<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}" disabled>${NewActionSMS[new_action_sms_index].smsContent || ""}</textarea>` : `${NewActionSMS[new_action_sms_index].smsContentType == 1 ? `<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}">${NewActionSMS[new_action_sms_index].smsContent || ""}</textarea>` : ``}`}</td></tr>



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


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">SMS Content</p></td>


<td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        class: "pb-2",
                                        value: 0,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContentType
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContentType = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `Firmware Release Notification  `;
                                        }
                                      }
                                    )}
  ${validate_component(Radio, "Radio").$$render(
                                      $$result,
                                      {
                                        class: "pb-2",
                                        value: 1,
                                        group: changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContentType
                                      },
                                      {
                                        group: ($$value) => {
                                          changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContentType = $$value;
                                          $$settled = false;
                                        }
                                      },
                                      {
                                        default: () => {
                                          return `User Defined:`;
                                        }
                                      }
                                    )}</div></td></tr>

<tr><td class="${"text-right"}"></td>
      <td class="${"pl-4 pt-4"}" colspan="${"5"}">${changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContentType == 0 ? `<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}" disabled>${changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContent || ""}</textarea>` : `${changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContentType == 1 ? `<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}">${changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContent || ""}</textarea>` : ``}`}</td></tr>






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
                                  return `${``}

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
    <td class="${"pl-4 pt-4"}">${changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Certificate ...</option>${``}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></select>`}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Client Certificate</p></td>
    <td class="${"pl-4 pt-4"}">${changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${"none"}">Choose Certificate ...</option>${``}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></select>`}</td></tr>



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
                                  return `${``}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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
                                          return `Pulse : One Shot High`;
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
                                          return `Pulse : One Shot Low`;
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
<td class="${"pl-5 pt-5"}">${NewActionDO[new_action_do_index].type == 0 || NewActionDO[new_action_do_index].type == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewActionDO[new_action_do_index].duration, 0)}>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled${add_attribute("value", NewActionDO[new_action_do_index].duration, 0)}>`}</td>
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
                                          return `Pulse : One Shot High`;
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
                                          return `Pulse : One Shot Low`;
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
<td class="${"pl-5 pt-5"}">${changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type == 0 || changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type == 1 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].duration, 0)}>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled${add_attribute("value", changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].duration, 0)}>`}</td>
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
                                  return `Modbus Tag`;
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
                                  return `${``}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


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

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (Tag, index) => {
                            return `<option${add_attribute("value", Tag.tagName, 0)}>${escape(Tag.tagName)}</option>`;
                          })}` : ``}</select></td></tr>



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

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Modbus Tag</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48"}"><option disabled="${""}" value="${""}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (Tag, index) => {
                            return `<option${add_attribute("value", Tag.tagName, 0)}>${escape(Tag.tagName)}</option>`;
                          })}` : ``}</select></td></tr>




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
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus Tag
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Click to show configuration for modbus tag. Please go to modbus page for detailed setting.</p></caption>
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

${``}


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
                                  return `Cloud Profile`;
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
                                  return `${``}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>

  <td class="${"pl-5 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80"}">${each(CloudProfile, (profile, index) => {
                                      return `<option${add_attribute("value", profile.value, 0)}>${escape(profile.name)}</option>`;
                                    })}</select></td></tr>



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




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>

  <td class="${"pl-5 pt-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80"}">${each(CloudProfile, (profile, index) => {
                                      return `<option${add_attribute("value", profile.value, 0)}>${escape(profile.name)}</option>`;
                                    })}</select></td></tr>



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
                    return `<span slot="${"header"}" class="${"pl-4"}">LINE Notification
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
                                  return `${``}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                      default: () => {
                        return `Trigger Condition`;
                      }
                    })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                      default: () => {
                        return `Action`;
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

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {})}
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
                        open: new_rule_modal
                      },
                      {
                        open: ($$value) => {
                          new_rule_modal = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}

<p class="${"mt-4"}"></p>



<table>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", NewRuleItem[new_rule_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", NewRuleItem[new_rule_index].aliasName, 0)}></div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Trigger Count</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: NewRuleItem[new_rule_index].triggerCount
                            },
                            {
                              group: ($$value) => {
                                NewRuleItem[new_rule_index].triggerCount = $$value;
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
                            {
                              value: 2,
                              group: NewRuleItem[new_rule_index].triggerCount
                            },
                            {
                              group: ($$value) => {
                                NewRuleItem[new_rule_index].triggerCount = $$value;
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
                            {
                              value: 3,
                              group: NewRuleItem[new_rule_index].triggerCount
                            },
                            {
                              group: ($$value) => {
                                NewRuleItem[new_rule_index].triggerCount = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `3`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">1st Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option${add_attribute("value", 0, 0)}>SMS</option><option${add_attribute("value", 1, 0)}>DI</option><option${add_attribute("value", 2, 0)}>Modbus</option><option${add_attribute("value", 4, 0)}>MQTT Notification</option><option${add_attribute("value", 5, 0)}>PING</option><option${add_attribute("value", 6, 0)}>RSSI</option><option${add_attribute("value", 7, 0)}>WAN Status</option><option${add_attribute("value", 8, 0)}>LAN Status</option><option${add_attribute("value", 9, 0)}>Login Status</option><option${add_attribute("value", 10, 0)}>System Status</option></select></td></tr>





<tr><td>${NewRuleItem[new_rule_index].firstTrigger.catalog == 10 || NewRuleItem[new_rule_index].firstTrigger.catalog == 7 || NewRuleItem[new_rule_index].firstTrigger.catalog == 8 || NewRuleItem[new_rule_index].firstTrigger.catalog == 9 || NewRuleItem[new_rule_index].firstTrigger.catalog == 1 ? `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Status</p>` : `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${NewRuleItem[new_rule_index].firstTrigger.catalog != 1 && NewRuleItem[new_rule_index].firstTrigger.catalog <= 6 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${NewRuleItem[new_rule_index].firstTrigger.catalog == 0 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms, (SMS, index) => {
                            return `<option${add_attribute("value", SMS.aliasName, 0)}>${escape(SMS.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 2 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus, (MODBUS, index) => {
                            return `<option${add_attribute("value", MODBUS.aliasName, 0)}>${escape(MODBUS.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 3 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage, (TCPM, index) => {
                            return `<option${add_attribute("value", TCPM.aliasName, 0)}>${escape(TCPM.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 4 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification, (MQTTN, index) => {
                            return `<option${add_attribute("value", MQTTN.aliasName, 0)}>${escape(MQTTN.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 5 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping, (PING, index) => {
                            return `<option${add_attribute("value", PING.aliasName, 0)}>${escape(PING.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 6 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi, (RSSI, index) => {
                            return `<option${add_attribute("value", RSSI.aliasName, 0)}>${escape(RSSI.aliasName)}</option>`;
                          })}` : ``}`}`}`}`}`}</select>` : `${NewRuleItem[new_rule_index].firstTrigger.catalog <= 10 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${NewRuleItem[new_rule_index].firstTrigger.catalog == 7 ? `<option${add_attribute("value", 0, 0)}>C-WAN Link Down</option>
<option${add_attribute("value", 1, 0)}>C-WAN Link Up</option>
<option${add_attribute("value", 2, 0)}>WAN/LAN1 Link Down</option>
<option${add_attribute("value", 3, 0)}>Dial Up Failed</option>
<option${add_attribute("value", 4, 0)}>WAN Failover</option>
<option${add_attribute("value", 5, 0)}>SIM Switch</option>` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 8 ? `<option${add_attribute("value", 0, 0)}>LAN2 Link Down</option>
<option${add_attribute("value", 1, 0)}>LAN2 Link Up</option>` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 9 ? `<option${add_attribute("value", 0, 0)}>Web Login Fail</option>` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 10 ? `<option${add_attribute("value", 0, 0)}>Boot Up</option>
<option${add_attribute("value", 1, 0)}>Firmware Upgrading</option>
<option${add_attribute("value", 3, 0)}>Reboot</option>
<option${add_attribute("value", 4, 0)}>New Firmware Release</option>` : `${NewRuleItem[new_rule_index].firstTrigger.catalog == 1 ? `<option${add_attribute("value", 0, 0)}>Low</option>
<option${add_attribute("value", 1, 0)}>High</option>` : ``}`}`}`}`}</select>` : ``}`}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">2nd Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}">${NewRuleItem[new_rule_index].triggerCount == 1 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50"}" disabled><option disabled="${""}" value="${""}">None</option></select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option${add_attribute("value", 0, 0)}>SMS</option><option${add_attribute("value", 1, 0)}>DI</option><option${add_attribute("value", 2, 0)}>Modbus</option><option${add_attribute("value", 4, 0)}>MQTT Notification</option><option${add_attribute("value", 5, 0)}>PING</option><option${add_attribute("value", 6, 0)}>RSSI</option><option${add_attribute("value", 7, 0)}>WAN Status</option><option${add_attribute("value", 8, 0)}>LAN Status</option><option${add_attribute("value", 9, 0)}>Login Status</option><option${add_attribute("value", 10, 0)}>System Status</option></select>`}</td></tr>



<tr><td>${NewRuleItem[new_rule_index].secondTrigger.catalog == 10 || NewRuleItem[new_rule_index].secondTrigger.catalog == 7 || NewRuleItem[new_rule_index].secondTrigger.catalog == 8 || NewRuleItem[new_rule_index].secondTrigger.catalog == 9 || NewRuleItem[new_rule_index].secondTrigger.catalog == 1 ? `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Status</p>` : `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${NewRuleItem[new_rule_index].triggerCount == 1 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option></select>` : `${NewRuleItem[new_rule_index].secondTrigger.catalog != 1 && NewRuleItem[new_rule_index].secondTrigger.catalog <= 6 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${NewRuleItem[new_rule_index].secondTrigger.catalog == 0 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms, (SMS, index) => {
                            return `<option${add_attribute("value", SMS.aliasName, 0)}>${escape(SMS.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 2 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus, (MODBUS, index) => {
                            return `<option${add_attribute("value", MODBUS.aliasName, 0)}>${escape(MODBUS.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 3 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage, (TCPM, index) => {
                            return `<option${add_attribute("value", TCPM.aliasName, 0)}>${escape(TCPM.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 4 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification, (MQTTN, index) => {
                            return `<option${add_attribute("value", MQTTN.aliasName, 0)}>${escape(MQTTN.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 5 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping, (PING, index) => {
                            return `<option${add_attribute("value", PING.aliasName, 0)}>${escape(PING.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 6 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi, (RSSI, index) => {
                            return `<option${add_attribute("value", RSSI.aliasName, 0)}>${escape(RSSI.aliasName)}</option>`;
                          })}` : ``}`}`}`}`}`}</select>` : `${NewRuleItem[new_rule_index].secondTrigger.catalog <= 10 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${NewRuleItem[new_rule_index].secondTrigger.catalog == 7 ? `<option${add_attribute("value", 0, 0)}>C-WAN Link Down</option>
<option${add_attribute("value", 1, 0)}>C-WAN Link Up</option>
<option${add_attribute("value", 2, 0)}>WAN/LAN1 Link Down</option>
<option${add_attribute("value", 3, 0)}>Dial Up Failed</option>
<option${add_attribute("value", 4, 0)}>WAN Failover</option>
<option${add_attribute("value", 5, 0)}>SIM Switch</option>` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 8 ? `<option${add_attribute("value", 0, 0)}>LAN2 Link Down</option>
<option${add_attribute("value", 1, 0)}>LAN2 Link Up</option>` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 9 ? `<option${add_attribute("value", 0, 0)}>Web Login Fail</option>` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 10 ? `<option${add_attribute("value", 0, 0)}>Boot Up</option>
<option${add_attribute("value", 1, 0)}>Firmware Upgrading</option>
<option${add_attribute("value", 3, 0)}>Reboot</option>
<option${add_attribute("value", 4, 0)}>New Firmware Release</option>` : `${NewRuleItem[new_rule_index].secondTrigger.catalog == 1 ? `<option${add_attribute("value", 0, 0)}>Low</option>
<option${add_attribute("value", 1, 0)}>High</option>` : ``}`}`}`}`}</select>` : ``}`}`}</td></tr>





<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">3rd Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}">${NewRuleItem[new_rule_index].triggerCount == "3" ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option${add_attribute("value", 0, 0)}>SMS</option><option${add_attribute("value", 1, 0)}>DI</option><option${add_attribute("value", 2, 0)}>Modbus</option><option${add_attribute("value", 4, 0)}>MQTT Notification</option><option${add_attribute("value", 5, 0)}>PING</option><option${add_attribute("value", 6, 0)}>RSSI</option><option${add_attribute("value", 7, 0)}>WAN Status</option><option${add_attribute("value", 8, 0)}>LAN Status</option><option${add_attribute("value", 9, 0)}>Login Status</option><option${add_attribute("value", 10, 0)}>System Status</option></select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option></select>`}</td></tr>




<tr><td>${NewRuleItem[new_rule_index].thirdTrigger.catalog == 7 || NewRuleItem[new_rule_index].thirdTrigger.catalog == 7 || NewRuleItem[new_rule_index].thirdTrigger.catalog == 8 || NewRuleItem[new_rule_index].thirdTrigger.catalog == 9 || NewRuleItem[new_rule_index].thirdTrigger.catalog == 1 ? `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Status</p>` : `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${NewRuleItem[new_rule_index].triggerCount == "3" ? `${NewRuleItem[new_rule_index].thirdTrigger.catalog != 1 && NewRuleItem[new_rule_index].thirdTrigger.catalog <= 6 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${NewRuleItem[new_rule_index].thirdTrigger.catalog == 0 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms, (SMS, index) => {
                            return `<option${add_attribute("value", SMS.aliasName, 0)}>${escape(SMS.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 2 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus, (MODBUS, index) => {
                            return `<option${add_attribute("value", MODBUS.aliasName, 0)}>${escape(MODBUS.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 3 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage, (TCPM, index) => {
                            return `<option${add_attribute("value", TCPM.aliasName, 0)}>${escape(TCPM.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 4 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification, (MQTTN, index) => {
                            return `<option${add_attribute("value", MQTTN.aliasName, 0)}>${escape(MQTTN.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 5 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping, (PING, index) => {
                            return `<option${add_attribute("value", PING.aliasName, 0)}>${escape(PING.aliasName)}</option>`;
                          })}` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 6 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi, (RSSI, index) => {
                            return `<option${add_attribute("value", RSSI.aliasName, 0)}>${escape(RSSI.aliasName)}</option>`;
                          })}` : ``}`}`}`}`}`}</select>` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog <= 10 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${NewRuleItem[new_rule_index].thirdTrigger.catalog == 7 ? `<option${add_attribute("value", 0, 0)}>C-WAN Link Down</option>
<option${add_attribute("value", 1, 0)}>C-WAN Link Up</option>
<option${add_attribute("value", 2, 0)}>WAN/LAN1 Link Down</option>
<option${add_attribute("value", 3, 0)}>Dial Up Failed</option>
<option${add_attribute("value", 4, 0)}>WAN Failover</option>
<option${add_attribute("value", 5, 0)}>SIM Switch</option>` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 8 ? `<option${add_attribute("value", 0, 0)}>LAN2 Link Down</option>
<option${add_attribute("value", 1, 0)}>LAN2 Link Up</option>` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 9 ? `<option${add_attribute("value", 0, 0)}>Web Login Fail</option>` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 10 ? `<option${add_attribute("value", 0, 0)}>Boot Up</option>
<option${add_attribute("value", 1, 0)}>Firmware Upgrading</option>
<option${add_attribute("value", 3, 0)}>Reboot</option>
<option${add_attribute("value", 4, 0)}>New Firmware Release</option>` : `${NewRuleItem[new_rule_index].thirdTrigger.catalog == 1 ? `<option${add_attribute("value", 0, 0)}>Low</option>
<option${add_attribute("value", 1, 0)}>High</option>` : ``}`}`}`}`}</select>` : ``}`}` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option></select>`}</td></tr>



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
                    )}



${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        autoclose: false,
                        size: "lg",
                        class: "w-full",
                        open: modify_rule_modal
                      },
                      {
                        open: ($$value) => {
                          modify_rule_modal = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}

<p class="${"mt-4"}"></p>



<table>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Alias Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].aliasName, 0)}></div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Trigger Count</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount = $$value;
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
                            {
                              value: 2,
                              group: changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount = $$value;
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
                            {
                              value: 3,
                              group: changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount
                            },
                            {
                              group: ($$value) => {
                                changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `3`;
                              }
                            }
                          )}</div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">1st Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}"><select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option${add_attribute("value", 0, 0)}>SMS</option><option${add_attribute("value", 1, 0)}>DI</option><option${add_attribute("value", 2, 0)}>Modbus</option><option${add_attribute("value", 4, 0)}>MQTT Notification</option><option${add_attribute("value", 5, 0)}>PING</option><option${add_attribute("value", 6, 0)}>RSSI</option><option${add_attribute("value", 7, 0)}>WAN Status</option><option${add_attribute("value", 8, 0)}>LAN Status</option><option${add_attribute("value", 9, 0)}>Login Status</option><option${add_attribute("value", 10, 0)}>System Status</option></select></td></tr>





<tr><td>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 10 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 7 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 8 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 9 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 1 ? `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Status</p>` : `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog != 1 && changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog <= 6 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 0 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms, (SMS, index) => {
                            return `<option${add_attribute("value", SMS.aliasName, 0)}>${escape(SMS.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 2 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus, (MODBUS, index) => {
                            return `<option${add_attribute("value", MODBUS.aliasName, 0)}>${escape(MODBUS.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 3 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage, (TCPM, index) => {
                            return `<option${add_attribute("value", TCPM.aliasName, 0)}>${escape(TCPM.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 4 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification, (MQTTN, index) => {
                            return `<option${add_attribute("value", MQTTN.aliasName, 0)}>${escape(MQTTN.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 5 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping, (PING, index) => {
                            return `<option${add_attribute("value", PING.aliasName, 0)}>${escape(PING.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 6 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi, (RSSI, index) => {
                            return `<option${add_attribute("value", RSSI.aliasName, 0)}>${escape(RSSI.aliasName)}</option>`;
                          })}` : ``}`}`}`}`}`}</select>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog <= 10 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 7 ? `<option${add_attribute("value", 0, 0)}>C-WAN Link Down</option>
<option${add_attribute("value", 1, 0)}>C-WAN Link Up</option>
<option${add_attribute("value", 2, 0)}>WAN/LAN1 Link Down</option>
<option${add_attribute("value", 3, 0)}>Dial Up Failed</option>
<option${add_attribute("value", 4, 0)}>WAN Failover</option>
<option${add_attribute("value", 5, 0)}>SIM Switch</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 8 ? `<option${add_attribute("value", 0, 0)}>LAN2 Link Down</option>
<option${add_attribute("value", 1, 0)}>LAN2 Link Up</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 9 ? `<option${add_attribute("value", 0, 0)}>Web Login Fail</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 10 ? `<option${add_attribute("value", 0, 0)}>Boot Up</option>
<option${add_attribute("value", 1, 0)}>Firmware Upgrading</option>
<option${add_attribute("value", 3, 0)}>Reboot</option>
<option${add_attribute("value", 4, 0)}>New Firmware Release</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 1 ? `<option${add_attribute("value", 0, 0)}>Low</option>
<option${add_attribute("value", 1, 0)}>High</option>` : ``}`}`}`}`}</select>` : ``}`}</td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">2nd Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}">${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount == 1 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option></select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option${add_attribute("value", 0, 0)}>SMS</option><option${add_attribute("value", 1, 0)}>DI</option><option${add_attribute("value", 2, 0)}>Modbus</option><option${add_attribute("value", 4, 0)}>MQTT Notification</option><option${add_attribute("value", 5, 0)}>PING</option><option${add_attribute("value", 6, 0)}>RSSI</option><option${add_attribute("value", 7, 0)}>WAN Status</option><option${add_attribute("value", 8, 0)}>LAN Status</option><option${add_attribute("value", 9, 0)}>Login Status</option><option${add_attribute("value", 10, 0)}>System Status</option></select>`}</td></tr>



<tr><td>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 10 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 7 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 8 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 9 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 1 ? `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Status</p>` : `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount == 1 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option></select>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog <= 6 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 0 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms, (SMS, index) => {
                            return `<option${add_attribute("value", SMS.aliasName, 0)}>${escape(SMS.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 2 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus, (MODBUS, index) => {
                            return `<option${add_attribute("value", MODBUS.aliasName, 0)}>${escape(MODBUS.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 3 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage, (TCPM, index) => {
                            return `<option${add_attribute("value", TCPM.aliasName, 0)}>${escape(TCPM.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 4 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification, (MQTTN, index) => {
                            return `<option${add_attribute("value", MQTTN.aliasName, 0)}>${escape(MQTTN.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 5 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping, (PING, index) => {
                            return `<option${add_attribute("value", PING.aliasName, 0)}>${escape(PING.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 6 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi, (RSSI, index) => {
                            return `<option${add_attribute("value", RSSI.aliasName, 0)}>${escape(RSSI.aliasName)}</option>`;
                          })}` : ``}`}`}`}`}`}</select>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog != 1 && changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog <= 10 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 7 ? `<option${add_attribute("value", 0, 0)}>C-WAN Link Down</option>
<option${add_attribute("value", 1, 0)}>C-WAN Link Up</option>
<option${add_attribute("value", 2, 0)}>WAN/LAN1 Link Down</option>
<option${add_attribute("value", 3, 0)}>Dial Up Failed</option>
<option${add_attribute("value", 4, 0)}>WAN Failover</option>
<option${add_attribute("value", 5, 0)}>SIM Switch</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 8 ? `<option${add_attribute("value", 0, 0)}>LAN2 Link Down</option>
<option${add_attribute("value", 1, 0)}>LAN2 Link Up</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 9 ? `<option${add_attribute("value", 0, 0)}>Web Login Fail</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 10 ? `<option${add_attribute("value", 0, 0)}>Boot Up</option>
<option${add_attribute("value", 1, 0)}>Firmware Upgrading</option>
<option${add_attribute("value", 3, 0)}>Reboot</option>
<option${add_attribute("value", 4, 0)}>New Firmware Release</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 1 ? `<option${add_attribute("value", 0, 0)}>Low</option>
<option${add_attribute("value", 1, 0)}>High</option>` : ``}`}`}`}`}</select>` : ``}`}`}</td></tr>





<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">3rd Trigger Catalog</p></td>
    <td class="${"pl-4 pt-4"}">${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount == "3" ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option><option${add_attribute("value", 0, 0)}>SMS</option><option${add_attribute("value", 1, 0)}>DI</option><option${add_attribute("value", 2, 0)}>Modbus</option><option${add_attribute("value", 4, 0)}>MQTT Notification</option><option${add_attribute("value", 5, 0)}>PING</option><option${add_attribute("value", 6, 0)}>RSSI</option><option${add_attribute("value", 7, 0)}>WAN Status</option><option${add_attribute("value", 8, 0)}>LAN Status</option><option${add_attribute("value", 9, 0)}>Login Status</option><option${add_attribute("value", 10, 0)}>System Status</option></select>` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option></select>`}</td></tr>




<tr><td>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 10 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 7 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 8 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 9 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 1 ? `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Status</p>` : `<p class="${"pl-20 pt-4 text-lg font-light text-right"}">Profile</p>`}</td>
<td class="${"pl-4 pt-4"}">${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount == "3" ? `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog != 1 && changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog <= 6 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 0 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms, (SMS, index) => {
                            return `<option${add_attribute("value", SMS.aliasName, 0)}>${escape(SMS.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 2 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus, (MODBUS, index) => {
                            return `<option${add_attribute("value", MODBUS.aliasName, 0)}>${escape(MODBUS.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 3 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage, (TCPM, index) => {
                            return `<option${add_attribute("value", TCPM.aliasName, 0)}>${escape(TCPM.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 4 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification, (MQTTN, index) => {
                            return `<option${add_attribute("value", MQTTN.aliasName, 0)}>${escape(MQTTN.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 5 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping, (PING, index) => {
                            return `<option${add_attribute("value", PING.aliasName, 0)}>${escape(PING.aliasName)}</option>`;
                          })}` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 6 ? `${each(saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi, (RSSI, index) => {
                            return `<option${add_attribute("value", RSSI.aliasName, 0)}>${escape(RSSI.aliasName)}</option>`;
                          })}` : ``}`}`}`}`}`}</select>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog <= 10 ? `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}"><option disabled="${""}" value="${""}">None</option>${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 7 ? `<option${add_attribute("value", 0, 0)}>C-WAN Link Down</option>
<option${add_attribute("value", 1, 0)}>C-WAN Link Up</option>
<option${add_attribute("value", 2, 0)}>WAN/LAN1 Link Down</option>
<option${add_attribute("value", 3, 0)}>Dial Up Failed</option>
<option${add_attribute("value", 4, 0)}>WAN Failover</option>
<option${add_attribute("value", 5, 0)}>SIM Switch</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 8 ? `<option${add_attribute("value", 0, 0)}>LAN2 Link Down</option>
<option${add_attribute("value", 1, 0)}>LAN2 Link Up</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 9 ? `<option${add_attribute("value", 0, 0)}>Web Login Fail</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 10 ? `<option${add_attribute("value", 0, 0)}>Boot Up</option>
<option${add_attribute("value", 1, 0)}>Firmware Upgrading</option>
<option${add_attribute("value", 2, 0)}>Password Changed</option>
<option${add_attribute("value", 3, 0)}>Reboot</option>
<option${add_attribute("value", 4, 0)}>New Firmware Release</option>` : `${changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 1 ? `<option${add_attribute("value", 0, 0)}>Low</option>
<option${add_attribute("value", 1, 0)}>High</option>` : ``}`}`}`}`}</select>` : ``}`}` : `<select class="${"block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled><option disabled="${""}" value="${""}">None</option></select>`}</td></tr>



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


${``}

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
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `TimeStamp`;
                        }
                      })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Status`;
                        }
                      })}`;
                    }
                  })}

   ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}`;
                    }
                  })}


${``}`;
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
