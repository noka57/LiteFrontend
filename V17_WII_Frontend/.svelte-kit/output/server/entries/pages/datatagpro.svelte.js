import { c as create_ssr_component, v as validate_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-4c27590e.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3f46d15e.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-7d3f7bdf.js";
import { T as Toggle } from "../../_app/immutable/chunks/Toggle-a89bbb21.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-ea7df515.js";
import { S as StepIndicator } from "../../_app/immutable/chunks/StepIndicator-2e176f3e.js";
import { T as Table } from "../../_app/immutable/chunks/Table-724d6c25.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-3dfdaf75.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-acf5b861.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-14fff184.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-424b0447.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-ef5c5efe.js";
/* empty css                                           */import { sessionidG } from "../endpoints/sessionG.js";
import { genericMQTTConfig, ChangedGenericMQTTConfig, awsIoTcoreConfig, ChangedAWSIoTcoreConfig, azureConfig, ChangedAzureConfig, modbusConfig, ChangedModbusConfig, datatagproConfig, ChangedDataTagProConfig, DataTagPro_ULRule_ConfigChangedLog, DataTagPro_TagRuleEvent_ConfigChangedLog, DataTagPro_TagRuleSCADA_ConfigChangedLog, DataTagPro_TagRuleDM_ConfigChangedLog, DataTagPro_TagRuleTOU_ConfigChangedLog, DataTagPro_TagRuleAccumulated_ConfigChangedLog, DataTagPro_TagRuleCalculation_ConfigChangedLog, DataTagPro_TagRuleC2D_ConfigChangedLog, DataTagPro_TagRuleSchedule_ConfigChangedLog, DataTagPro_General_ConfigChangedLog, enableDataTagEnginePROall } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../../_app/immutable/chunks/Frame-cafee768.js";
import "../../_app/immutable/chunks/Label-3f2c96ee.js";
import "../../_app/immutable/chunks/CloseButton-88212a62.js";
const TimePicker_svelte_svelte_type_style_lang = "";
const DatePicker_svelte_svelte_type_style_lang = "";
const DateInput_svelte_svelte_type_style_lang = "";
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Datatagpro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep = 1;
  let steps = ["Step 1", "Step 2", "Step 3"];
  let modalElement;
  let start_time_hh = "";
  let start_time_mm = "";
  let end_time_hh = "";
  let end_time_mm = "";
  let data_tag_pro_flag = 0;
  sessionidG.subscribe((val) => {
  });
  let changed_data_tag_pro_data = "";
  let saved_changed_modbus_data = "";
  let CloudProfile = [];
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
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
    saved_changed_modbus_data = val;
  });
  datatagproConfig.subscribe((val) => {
  });
  ChangedDataTagProConfig.subscribe((val) => {
  });
  DataTagPro_ULRule_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleEvent_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleSCADA_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleDM_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleTOU_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleAccumulated_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleCalculation_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleC2D_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleSchedule_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_General_ConfigChangedLog.subscribe((val) => {
  });
  enableDataTagEnginePROall.subscribe((val) => {
    data_tag_pro_flag = val;
  });
  let modify_calculation_tag_modal = false;
  let modify_calculation_tag_index;
  let modify_accumulated_tag_modal = false;
  let modify_accumulated_tag_index;
  let modify_tou_tag_modal = false;
  let modify_tou_tag_index;
  let modify_DM_tag_modal = false;
  let modify_DM_tag_index;
  let modify_scada_tag_modal = false;
  let modify_scada_tag_index;
  let modify_event_tag_modal = false;
  let modify_event_tag_index;
  let modify_ul_rule_modal = false;
  let modify_ul_rule_index;
  let new_ul_rule_modal = false;
  let new_ul_rule_index;
  let new_ul_rule = [
    {
      enable: false,
      delete: false,
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
      ruleName: "",
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
  let new_event_tag_modal = false;
  let new_event_tag_index;
  let new_event_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    }
  ];
  let new_c2d_tag_modal = false;
  let new_c2d_tag_index;
  let new_c2d_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      subscribeTopic: "",
      targetTag: "",
      publishEnable: false,
      publishTopic: ""
    }
  ];
  let modify_c2d_tag_modal = false;
  let modify_c2d_tag_index;
  let new_scada_tag_modal = false;
  let new_scada_tag_index;
  let new_scada_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: [],
      tcpSlaveProfileName: "",
      holdingRegisterAddress: 1e3
    }
  ];
  let new_DM_tag_modal = false;
  let new_DM_tag_index;
  let new_DM_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      cloudProfile: "",
      targetTag: ""
    }
  ];
  let new_tou_tag_modal = false;
  let new_tou_tag_index;
  let new_tou_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    }
  ];
  let new_accumulated_tag_modal = false;
  let new_accumulated_tag_index;
  let new_accumulated_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    }
  ];
  let modify_schedule_tag_modal = false;
  let modify_schedule_tag_index;
  let new_schedule_tag_modal = false;
  let new_schedule_tag_index;
  let new_schedule_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: "",
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      scheduleTime: "",
      actionType: 0,
      actionTargetTag: "",
      actionTargetTagValue: 1,
      actionTimeSyncFormatType: 0,
      actionTimeSyncFormatUserDefine: ""
    }
  ];
  let new_calculation_tag_modal = false;
  let new_calculation_tag_index;
  let new_calculation_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      calculationFormula: ""
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-48"}"><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Data Tag Engine PRO</p></td>
<td class="${"pl-5 pt-5"}">${``}</td>
<td></td></tr></table>

<p class="${"pt-5"}"></p>


<table><tr class="${"pt-5"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-40"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">Cloud To Device Tag
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Cloud Profile`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Subscribe Topic`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Target Tag`;
                                }
                              })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Publish Topic For Acknowledge`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}



  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length < 50 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
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
                          })}`;
                        }
                      }
                    )}


${validate_component(Modal, "Modal").$$render(
                      $$result,
                      {
                        size: "lg",
                        class: "w-full",
                        permanent: true,
                        open: new_c2d_tag_modal
                      },
                      {
                        open: ($$value) => {
                          new_c2d_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_c2d_tag[new_c2d_tag_index].tagName, 0)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(CloudProfile, (Cloud) => {
                            return `<option${add_attribute("value", Cloud.value, 0)}>${escape(Cloud.name)}</option>`;
                          })}</select></td>
   <td></td>
    <td></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Subscribe Topic</p></td>
      <td class="${"pl-4 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48"}"${add_attribute("value", new_c2d_tag[new_c2d_tag_index].subscribeTopic, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                            return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                          })}</select></td>
   <td></td>
    <td></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Publish Topic For Acknowledge</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Toggle, "Toggle").$$render(
                            $$result,
                            {
                              class: "p-2.5 mt-2 mb-4",
                              checked: new_c2d_tag[new_c2d_tag_index].publishEnable
                            },
                            {
                              checked: ($$value) => {
                                new_c2d_tag[new_c2d_tag_index].publishEnable = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}

${new_c2d_tag[new_c2d_tag_index].publishEnable ? `<div class="${"relative"}"><input id="${"publish_topic"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"publish_topic"}" placeholder="${" "}" type="${"text"}"${add_attribute("value", new_c2d_tag[new_c2d_tag_index].publishTopic, 0)}> <label for="${"publish_topic"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">publish_topic</label></div>` : ``}</div></td></tr>


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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                        open: modify_c2d_tag_modal
                      },
                      {
                        open: ($$value) => {
                          modify_c2d_tag_modal = $$value;
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


<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].tagName, 0)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(CloudProfile, (Cloud) => {
                            return `<option${add_attribute("value", Cloud.value, 0)}>${escape(Cloud.name)}</option>`;
                          })}</select></td>
   <td></td>
    <td></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Subscribe Topic</p></td>
      <td class="${"pl-4 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].subscribeTopic, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                            return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                          })}</select></td>
   <td></td>
    <td></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Publish Topic For Acknowledge</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Toggle, "Toggle").$$render(
                            $$result,
                            {
                              class: "p-2.5 mt-2 mb-4",
                              checked: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].publishEnable
                            },
                            {
                              checked: ($$value) => {
                                changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].publishEnable = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}

${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].publishEnable ? `<div class="${"relative"}"><input id="${"publish_topic"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"publish_topic"}" placeholder="${" "}" type="${"text"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].publishTopic, 0)}> <label for="${"publish_topic"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">publish_topic</label></div>` : ``}</div></td></tr>


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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Modify`;
                            }
                          })}</td></tr></table></form>`;
                        }
                      }
                    )}`;
                  }
                })}

${data_tag_pro_flag == 1 ? `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Calculation Tag
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
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-80" }, {}, {
                                default: () => {
                                  return `Calculation Formula`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                                }
                              })}

  <tr><td></td>
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
                              open: new_calculation_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_calculation_tag_modal = $$value;
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

<table${add_attribute("this", modalElement, 0)}><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_calculation_tag[new_calculation_tag_index].tagName, 0)}></td></tr>





<tr><td class="${"pt-2"}"><div><p class="${"pl-10 pt-1 mb-4 text-lg font-light text-right"}">Formula</p>


  <ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Max()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Min()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Avg()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Abs()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Add()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Sub()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Mul()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Div()`;
                                  }
                                })}</li>
<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Reminder()`;
                                  }
                                })}</li></ul></div></td>
      <td class="${"pl-5 pt-2"}" colspan="${"10"}">${``}

<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}">${new_calculation_tag[new_calculation_tag_index].calculationFormula || ""}</textarea></td>

    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                              open: modify_calculation_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_calculation_tag_modal = $$value;
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
<table${add_attribute("this", modalElement, 0)}><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].tagName, 0)}></td></tr>





<tr><td class="${"pt-2"}"><div><p class="${"pl-10 pt-1 mb-4 text-lg font-light text-right"}">Formula</p>


  <ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Max()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Min()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Avg()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Abs()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Add()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Sub()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Mul()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Div()`;
                                  }
                                })}</li>
<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Reminder()`;
                                  }
                                })}</li></ul></div></td>
      <td class="${"pl-5 pt-2"}" colspan="${"10"}">${``}

<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}">${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula || ""}</textarea></td>

    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-40"}"></td>
    <td class="${"pl-40"}"></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">Accumulated Tag
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Target Tag`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Start Time`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `End Time`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
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
                              open: new_accumulated_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_accumulated_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_accumulated_tag[new_accumulated_tag_index].tagName, 0)}></td></tr>



<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>



<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>


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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                              open: modify_accumulated_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_accumulated_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].tagName, 0)}></td></tr>



<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>


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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">TOU Tag
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
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Target Tag`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Start Time`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `End Time`;
                                }
                              })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Rate`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
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
                              open: new_tou_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_tou_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tou_tag[new_tou_tag_index].tagName, 0)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-5 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>



<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>
<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Rate</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tou_tag[new_tou_tag_index].rate, 0)}></td></tr>

<p class="${"pt-5"}"></p>


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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                              open: modify_tou_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_tou_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", end_time_mm, 0)}></div></td></tr>

<p class="${"pt-5"}"></p>
<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Rate</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].rate, 0)}></td></tr>

<p class="${"pt-5"}"></p>


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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">Direct Methods Tag
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
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Cloud Profile`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Target Tag`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
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
                              permanent: true,
                              open: new_DM_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_DM_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_DM_tag[new_DM_tag_index].tagName, 0)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(CloudProfile, (Cloud) => {
                                  return `<option${add_attribute("value", Cloud.value, 0)}>${escape(Cloud.name)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>



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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                              open: modify_DM_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_DM_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].tagName, 0)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(CloudProfile, (Cloud) => {
                                  return `<option${add_attribute("value", Cloud.value, 0)}>${escape(Cloud.name)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>


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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">SCADA Tag
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
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `TCP Slave Profile`;
                                }
                              })}  
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Holding Register Address`;
                                }
                              })}      
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Target Tag Number`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
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
                              permanent: true,
                              open: new_scada_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_scada_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_scada_tag[new_scada_tag_index].tagName, 0)}></td></tr>



<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">TCP Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TCPSlaveItem, index) => {
                                  return `<option${add_attribute("value", TCPSlaveItem.aliasName, 0)}>${escape(TCPSlaveItem.aliasName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>



<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Holding Register Address</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_scada_tag[new_scada_tag_index].holdingRegisterAddress, 0)}></td></tr>  


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><button color="${"blue"}" type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48"}">Choose Tag
${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`}</button></td>
   <td></td>
    <td></td></tr>


${``}



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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                              open: modify_scada_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_scada_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].tagName, 0)}></td></tr>



<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">TCP Slave Profile</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave, (TCPSlaveItem, index) => {
                                  return `<option${add_attribute("value", TCPSlaveItem.aliasName, 0)}>${escape(TCPSlaveItem.aliasName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>



<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Holding Register Address</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].holdingRegisterAddress, 0)}></td></tr>  


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><button color="${"blue"}" type="${"button"}" class="${"text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48"}">Choose Tag
${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`}</button></td>
   <td></td>
    <td></td></tr>


${``}

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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                    return `<span slot="${"header"}" class="${"pl-4"}">Schedule Tag
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
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Schedule Time`;
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
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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
        <td></td>
        <td></td>
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
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
                        permanent: true,
                        open: new_schedule_tag_modal
                      },
                      {
                        open: ($$value) => {
                          new_schedule_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_schedule_tag[new_schedule_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Schedule Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_mm, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Action</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: new_schedule_tag[new_schedule_tag_index].actionType
                            },
                            {
                              group: ($$value) => {
                                new_schedule_tag[new_schedule_tag_index].actionType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Write`;
                              }
                            }
                          )}
${new_schedule_tag[new_schedule_tag_index].actionType == 0 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                            return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                          })}` : ``}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></select>`}

<p class="${"pt-4"}">with </p>
<div class="${"relative"}"><input id="${"operand_value"}" class="${"block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", new_schedule_tag[new_schedule_tag_index].actionTargetTagValue, 0)}> 
<label for="${"operand_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">operand_value</label></div></div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: new_schedule_tag[new_schedule_tag_index].actionType
                            },
                            {
                              group: ($$value) => {
                                new_schedule_tag[new_schedule_tag_index].actionType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Time Sync`;
                              }
                            }
                          )}


<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-36"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 0, 0)}>Epoch Seconds</option><option${add_attribute("value", 1, 0)}>by filed</option><option${add_attribute("value", 2, 0)}>Schneider</option><option${add_attribute("value", 3, 0)}>User Define</option></select>

<p class="${"pt-4"}">with </p>

${new_schedule_tag[new_schedule_tag_index].actionType == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                            return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                          })}` : ``}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></select>`}</div></td></tr>




<tr><td class="${"text-right"}"></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}">${new_schedule_tag[new_schedule_tag_index].actionType == 1 && new_schedule_tag[new_schedule_tag_index].actionTimeSyncFormatType == 3 ? `<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}">${new_schedule_tag[new_schedule_tag_index].actionTimeSyncFormatUserDefine || ""}</textarea>` : `<textarea id="${"textarea-id"}" placeholder="${"Disabled"}" rows="${"12"}" name="${"message"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}" disabled></textarea>`}</td></tr>



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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                        open: modify_schedule_tag_modal
                      },
                      {
                        open: ($$value) => {
                          modify_schedule_tag_modal = $$value;
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


<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Schedule Time</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" placeholder="${"hh"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_hh, 0)}>

<p class="${"pt-3"}">:</p>
<input type="${"number"}" placeholder="${"mm"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", start_time_mm, 0)}></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Action</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 0,
                              group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType
                            },
                            {
                              group: ($$value) => {
                                changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Write`;
                              }
                            }
                          )}
${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType == 0 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                            return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                          })}` : ``}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></select>`}

<p class="${"pt-4"}">with </p>
<div class="${"relative"}"><input id="${"operand_value"}" class="${"block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTagValue, 0)}> 
<label for="${"operand_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">operand_value</label></div></div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}"></p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                            $$result,
                            {
                              value: 1,
                              group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType
                            },
                            {
                              group: ($$value) => {
                                changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `Time Sync`;
                              }
                            }
                          )}


<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-36"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 0, 0)}>Epoch Seconds</option><option${add_attribute("value", 1, 0)}>by filed</option><option${add_attribute("value", 2, 0)}>Schneider</option><option${add_attribute("value", 3, 0)}>User Define</option></select>

<p class="${"pt-4"}">with </p>

${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType == 1 ? `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                            return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                          })}` : ``}</select>` : `<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50"}" disabled></select>`}</div></td></tr>




<tr><td class="${"text-right"}"></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}">${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType == 1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTimeSyncFormatType == 3 ? `<textarea id="${"textarea-id"}" rows="${"12"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}">${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTimeSyncFormatUserDefine || ""}</textarea>` : `<textarea id="${"textarea-id"}" placeholder="${"Disabled"}" rows="${"12"}" name="${"message"}" class="${"w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"}" disabled></textarea>`}</td></tr>



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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                            default: () => {
                              return `Modify`;
                            }
                          })}</td></tr></table></form>`;
                        }
                      }
                    )}`;
                  }
                })}




  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Event Tag
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
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Trigger Tag`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
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
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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
                              open: new_event_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_event_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_event_tag[new_event_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Trigger Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Trigger Condition</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 5, 0)}>&gt;</option><option${add_attribute("value", 4, 0)}>${escape("<")}</option><option${add_attribute("value", 3, 0)}>&gt;=</option><option${add_attribute("value", 2, 0)}>${escape("<")}=</option><option${add_attribute("value", 1, 0)}>!=</option><option${add_attribute("value", 0, 0)}>=</option></select>


<div class="${"relative"}"><input id="${"compared_value"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", new_event_tag[new_event_tag_index].triggerConditionValue, 0)}> <label for="${"compared_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">compared_value</label></div></div></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_event_tag[new_event_tag_index].pollingRateS, 0)}>


     <p class="${"pt-1 text-lg"}">s</p></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Action</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: new_event_tag[new_event_tag_index].actionOperation
                                  },
                                  {
                                    group: ($$value) => {
                                      new_event_tag[new_event_tag_index].actionOperation = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Write`;
                                    }
                                  }
                                )}

<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}` : ``}</select>

<p class="${"pt-5"}">with </p>

<div class="${"relative"}"><input id="${"operand_value"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", new_event_tag[new_event_tag_index].actionOperationValue, 0)}> <label for="${"operand_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">operand_value</label></div></div></td></tr>



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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                              open: modify_event_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_event_tag_modal = $$value;
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

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Trigger Tag</p></td>
    <td class="${"pl-4 pt-4"}" colspan="${"3"}"><select class="${"block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"}">${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}</select></td>
   <td></td>
    <td></td></tr>



<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Trigger Condition</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 5, 0)}>&gt;</option><option${add_attribute("value", 4, 0)}>${escape("<")}</option><option${add_attribute("value", 3, 0)}>&gt;=</option><option${add_attribute("value", 2, 0)}>${escape("<")}=</option><option${add_attribute("value", 1, 0)}>!=</option><option${add_attribute("value", 0, 0)}>=</option></select>
 

<div class="${"relative"}"><input id="${"compared_value"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionValue, 0)}> <label for="${"compared_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">compared_value</label></div></div></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].pollingRateS, 0)}>


      <p class="${"pt-1 text-lg"}">s</p></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Action</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Write`;
                                    }
                                  }
                                )}

<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_modbus_data != "" ? `${each(saved_changed_modbus_data.config.fieldManagement_modbus_tag, (TagItem, index) => {
                                  return `<option${add_attribute("value", TagItem.tagName, 0)}>${escape(TagItem.tagName)}</option>`;
                                })}` : ``}</select>

<p class="${"pt-5"}">with </p>

<div class="${"relative"}"><input id="${"operand_value"}" class="${"block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"}" name="${"operand_value"}" placeholder="${" "}" type="${"number"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperationValue, 0)}> <label for="${"operand_value"}" class="${"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2"}">operand_value</label></div></div></td></tr>



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
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
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
                })}` : ``}`;
              }
            })}`;
          }
        })}
${data_tag_pro_flag == 1 ? `${validate_component(TabItem, "TabItem").$$render($$result, { title: "UL Rule" }, {}, {
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
                          return `Rule Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                    }
                  })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
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

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                        default: () => {
                          return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                        }
                      })}</td></tr>




${validate_component(Modal, "Modal").$$render(
                        $$result,
                        {
                          size: "lg",
                          class: "w-full",
                          autoclose: false,
                          open: new_ul_rule_modal
                        },
                        {
                          open: ($$value) => {
                            new_ul_rule_modal = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}


<table${add_attribute("this", modalElement, 0)}>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", new_ul_rule[new_ul_rule_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Rule Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_ul_rule[new_ul_rule_index].ruleName, 0)}></div></td></tr>


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
                          size: "lg",
                          class: "w-full",
                          autoclose: false,
                          open: modify_ul_rule_modal
                        },
                        {
                          open: ($$value) => {
                            modify_ul_rule_modal = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<form action="${"#"}"><button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
${validate_component(StepIndicator, "StepIndicator").$$render($$result, { currentStep, steps, glow: true }, {}, {})}


<table${add_attribute("this", modalElement, 0)}>${`<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Enable</p></td><td class="${"pl-5 pt-5"}"><input class="${"center"}" type="${"checkbox"}"${add_attribute("checked", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].enable, 1)}></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Rule Name</p></td><td class="${"pl-5 pt-5"}" colspan="${"2"}"><div class="${"flex gap-0"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].ruleName, 0)}></div></td></tr>


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
                  })}`;
                }
              }
            )}`;
          }
        })}` : ``}

${``}

${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Datatagpro as default
};
