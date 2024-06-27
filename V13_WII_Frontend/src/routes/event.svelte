<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

 import { writable } from 'svelte/store';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {
    modbusConfig, 
    ChangedModbusConfig,
    genericMQTTConfig,
    ChangedGenericMQTTConfig,
    eventEngineConfig,
    EventEngine_ActionLINE_ConfigChangedLog,
    EventEngine_ActionMQTT_ConfigChangedLog,
    EventEngine_ActionTCPMsg_ConfigChangedLog,
    EventEngine_ActionModbus_ConfigChangedLog,
    EventEngine_ActionDO_ConfigChangedLog,
    EventEngine_ActionEmail_ConfigChangedLog,
    EventEngine_ActionSMS_ConfigChangedLog,
    EventEngine_TriggerRSSI_ConfigChangedLog,
    EventEngine_TriggerPING_ConfigChangedLog,
    EventEngine_TriggerMQTT_ConfigChangedLog,
    EventEngine_TriggerTCPMsg_ConfigChangedLog,
    EventEngine_TriggerModbus_ConfigChangedLog,
    EventEngine_TriggerDI_ConfigChangedLog,
    EventEngine_TriggerSMS_ConfigChangedLog,
    EventEngine_General_ConfigChangedLog,
    EventEngine_Rule_ConfigChangedLog,
    ChangedEventEngineConfig
  } from "./configG.js"


  let event_engine_data="";
  let changed_event_engine_data = {};
  let saved_changed_event_engine_data ={};



  let event_engine_rule_changedValues = [];
  let event_engine_general_changedValues = [];
  let event_engine_trigger_sms_changeValues=[];
  let event_engine_trigger_di_changeValues=[];
  let event_engine_trigger_modbus_changeValues=[];
  let event_engine_trigger_tcpmsg_changeValues=[];
  let event_engine_trigger_mqtt_changeValues=[];
  let event_engine_trigger_ping_changeValues=[];
  let event_engine_trigger_rssi_changeValues=[];

  let event_engine_action_sms_changeValues=[];
  let event_engine_action_email_changeValues=[];
  let event_engine_action_do_changeValues=[];
  let event_engine_action_modbus_changeValues=[];
  let event_engine_action_tcpmsg_changeValues=[];
  let event_engine_action_mqtt_changeValues=[];
  let event_engine_action_line_changeValues=[];



  let modbus_data="";
  let saved_changed_modbus_data ="";


  let generic_mqtt_data="";
  let saved_changed_generic_mqtt_data ="";
  let CloudProfile=[];

  modbusConfig.subscribe(val => {
      modbus_data = val;
  });

  ChangedModbusConfig.subscribe(val => {
      saved_changed_modbus_data = val;
  });

  genericMQTTConfig.subscribe(val => {
      generic_mqtt_data = val;
  });

  ChangedGenericMQTTConfig.subscribe(val => {
      saved_changed_generic_mqtt_data = val;
  });

  eventEngineConfig.subscribe(val => {
      event_engine_data = val;
  });

  EventEngine_General_ConfigChangedLog.subscribe(val => {
      event_engine_general_changedValues = val;
  });

  EventEngine_Rule_ConfigChangedLog.subscribe(val => {
      event_engine_rule_changedValues = val;
  });

  EventEngine_TriggerSMS_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_sms_changeValues = val;
  });

  EventEngine_TriggerDI_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_di_changeValues = val;
  });

  EventEngine_TriggerModbus_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_modbus_changeValues = val;
  });

  EventEngine_TriggerTCPMsg_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_tcpmsg_changeValues = val;
  });

  EventEngine_TriggerMQTT_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_mqtt_changeValues = val;
  });

  EventEngine_TriggerPING_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_ping_changeValues = val;
  });

  EventEngine_TriggerRSSI_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_rssi_changeValues = val;
  });



  EventEngine_ActionSMS_ConfigChangedLog.subscribe(val => {
      event_engine_action_sms_changeValues = val;
  });

  EventEngine_ActionEmail_ConfigChangedLog.subscribe(val => {
      event_engine_action_email_changeValues = val;
  });


  EventEngine_ActionDO_ConfigChangedLog.subscribe(val => {
      event_engine_action_do_changeValues = val;
  });

  EventEngine_ActionModbus_ConfigChangedLog.subscribe(val => {
      event_engine_action_modbus_changeValues = val;
  });


  EventEngine_ActionTCPMsg_ConfigChangedLog.subscribe(val => {
      event_engine_action_tcpmsg_changeValues = val;
  });

  EventEngine_ActionMQTT_ConfigChangedLog.subscribe(val => {
      event_engine_action_mqtt_changeValues = val;
  });

  EventEngine_ActionLINE_ConfigChangedLog.subscribe(val => {
      event_engine_action_line_changeValues = val;
  });


  ChangedEventEngineConfig.subscribe(val => {
      saved_changed_event_engine_data = val;
  });

  let getDataReady=0;  
  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });






  async function getGenericMQTTData () {
    const res = await fetch(window.location.origin+"/getGenericMQTTData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      console.log("get gMQTT data");
      generic_mqtt_data =await res.json();
      console.log(generic_mqtt_data);
      genericMQTTConfig.set(generic_mqtt_data);


      saved_changed_generic_mqtt_data= JSON.parse(JSON.stringify(generic_mqtt_data));
      ChangedGenericMQTTConfig.set(saved_changed_generic_mqtt_data);


      for (let i=0; i< saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;i++)
      {
        let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;
        let clouditem={"value":item, "name":item};
        CloudProfile=[...CloudProfile, clouditem];
      }

    }
  }


  async function getModbusData() {
    const res = await fetch(window.location.origin+"/GeTModbuS", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
        console.log("get modbus data");
        modbus_data =await res.json();
        console.log(modbus_data);
        modbusConfig.set(modbus_data);

        saved_changed_modbus_data=JSON.parse(JSON.stringify(modbus_data));
        ChangedModbusConfig.set(saved_changed_modbus_data);

    }
  }

  async function getEventEngineData() {
        const res = await fetch(window.location.origin+"/gEtEventEngine", {
            method: 'POST',
            body: sessionBinary
        })

    if (res.status == 200)
    {
      event_engine_data =await res.json();
      console.log(event_engine_data);
      eventEngineConfig.set(event_engine_data);

      changed_event_engine_data = JSON.parse(JSON.stringify(event_engine_data));
      saved_changed_event_engine_data= JSON.parse(JSON.stringify(event_engine_data));
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      getDataReady=1;


      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }
      if (saved_changed_generic_mqtt_data == "")
      {
        getGenericMQTTData();
      }
      else
      {
        for (let i=0; i< saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;i++)
        {
              let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;
              let clouditem={"value":item, "name":item};
              CloudProfile=[...CloudProfile, clouditem];
              console.log("CloudProfile")
              console.log(CloudProfile);
        }
      }

    }
  }
  
  function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex, ArrayName) 
  {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1, ArrayName);
            }

            if (obj1[key].length > obj2[key].length) 
            {
              let addedCount=obj1[key].length-obj2[key].length;
              for (let j=obj2[key].length; j <obj1[key].length; j++)
              {
                if (obj1[key][j]["delete"])
                {
                  addedCount--;
                }

              }

              if (addedCount > 0)
              {
                let changedstr="Add "+addedCount+" item(s) to "+ key;

                if (type == 0)
                {
                  event_engine_trigger_sms_changeValues=[...event_engine_trigger_sms_changeValues, changedstr];
                }
                else if (type == 1)
                {
                  event_engine_trigger_di_changeValues=[...event_engine_trigger_di_changeValues, changedstr];
                }
                else if (type == 2)
                {
                  event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];   
                }
                else if (type == 3)
                {
                  event_engine_trigger_tcpmsg_changeValues=[...event_engine_trigger_tcpmsg_changeValues, changedstr];
                }
                else if (type == 4)
                {
                  event_engine_trigger_mqtt_changeValues=[...event_engine_trigger_mqtt_changeValues, changedstr];
                }
                else if (type == 5)
                {
                  event_engine_action_sms_changeValues=[...event_engine_action_sms_changeValues, changedstr];
                }
                else if (type == 6)
                {
                  event_engine_action_email_changeValues=[...event_engine_action_email_changeValues, changedstr];
                }
                else if (type == 7)
                {
                  event_engine_action_do_changeValues=[...event_engine_action_do_changeValues, changedstr];
                }
                else if (type == 8)
                {
                   event_engine_action_modbus_changeValues=[...event_engine_action_modbus_changeValues,changedstr];
                }
                else if (type == 9)
                {
                   event_engine_action_tcpmsg_changeValues=[...event_engine_action_tcpmsg_changeValues,changedstr];
                }
                else if (type == 10)
                {
                   event_engine_action_mqtt_changeValues=[...event_engine_action_mqtt_changeValues,changedstr];
                }
                else if (type == 11)
                {
                   event_engine_action_line_changeValues=[...event_engine_action_line_changeValues,changedstr];
                }
                else if (type == 12)
                {
                   event_engine_trigger_ping_changeValues=[...event_engine_trigger_ping_changeValues, changedstr];
                }
                else if (type == 13)
                { 
                  event_engine_rule_changedValues=[...event_engine_rule_changedValues, changedstr];
                }
                else if (type ==14)
                {
                  event_engine_trigger_rssi_changeValues=[...event_engine_trigger_ping_changeValues, changedstr];
                }

              } 

            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 0)
              {
                event_engine_trigger_sms_changeValues=[...event_engine_trigger_sms_changeValues, changedstr];
              }
              else if (type == 1)
              {
                event_engine_trigger_di_changeValues=[...event_engine_trigger_di_changeValues, changedstr];
              }
              else if (type == 2)
              {
                event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];         
              }
              else if (type == 3)
              {
                event_engine_trigger_tcpmsg_changeValues=[...event_engine_trigger_tcpmsg_changeValues, changedstr];          
              }
              else if (type == 4)
              {
                event_engine_trigger_mqtt_changeValues=[...event_engine_trigger_mqtt_changeValues, changedstr];
              }
              else if (type == 5)
              {
                event_engine_action_sms_changeValues=[...event_engine_action_sms_changeValues, changedstr];
              }
              else if (type == 6)
              {
                event_engine_action_email_changeValues=[...event_engine_action_email_changeValues, changedstr];
              }
              else if (type == 7)
              {
                event_engine_action_do_changeValues=[...event_engine_action_do_changeValues, changedstr];
              }
              else if (type == 8)
              {
                 event_engine_action_modbus_changeValues=[...event_engine_action_modbus_changeValues,changedstr];
              }    
              else if (type == 9)
              {
                 event_engine_action_tcpmsg_changeValues=[...event_engine_action_tcpmsg_changeValues,changedstr];
              }
              else if (type == 10)
              {
                 event_engine_action_mqtt_changeValues=[...event_engine_action_mqtt_changeValues,changedstr];
              }
              else if (type == 11)
              {
                 event_engine_action_line_changeValues=[...event_engine_action_line_changeValues,changedstr];
              }
              else if (type == 12)
              {
                 event_engine_trigger_ping_changeValues=[...event_engine_trigger_ping_changeValues, changedstr];
              }
              else if (type == 13)
              {
                event_engine_rule_changedValues=[...event_engine_rule_changedValues, changedstr];
              }               
              else if (type ==14)
              {
                event_engine_trigger_rssi_changeValues=[...event_engine_trigger_ping_changeValues, changedstr];
              } 
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0, "");
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            if (type==6)
              changedstr=ArrayName + "List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            else
              changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }
          
          if (type == 0)
          {
            event_engine_trigger_sms_changeValues=[...event_engine_trigger_sms_changeValues, changedstr];
          }
          else if (type == 1)
          {
            event_engine_trigger_di_changeValues=[...event_engine_trigger_di_changeValues, changedstr];
          }
          else if (type == 2)
          {
            event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];     
          }
          else if (type == 3)
          {
            event_engine_trigger_tcpmsg_changeValues=[...event_engine_trigger_tcpmsg_changeValues, changedstr];     
          }
          else if (type == 4)
          {
            event_engine_trigger_mqtt_changeValues=[...event_engine_trigger_mqtt_changeValues, changedstr];
          }
          else if (type == 5)
          {
            event_engine_action_sms_changeValues=[...event_engine_action_sms_changeValues, changedstr];
          }
          else if (type == 6)
          {
            event_engine_action_email_changeValues=[...event_engine_action_email_changeValues, changedstr];
          }
          else if (type == 7)
          {
            event_engine_action_do_changeValues=[...event_engine_action_do_changeValues, changedstr];
          }
          else if (type == 8)
          {
            event_engine_action_modbus_changeValues=[...event_engine_action_modbus_changeValues,changedstr];
          }
          else if (type == 9)
          {
            event_engine_action_tcpmsg_changeValues=[...event_engine_action_tcpmsg_changeValues,changedstr];
          }
          else if (type == 10)
          {
            event_engine_action_mqtt_changeValues=[...event_engine_action_mqtt_changeValues,changedstr];
          }
          else if (type == 11)
          {
            event_engine_action_line_changeValues=[...event_engine_action_line_changeValues,changedstr];
          }
          else if (type == 12)
          {
            event_engine_trigger_ping_changeValues=[...event_engine_trigger_ping_changeValues, changedstr];
          } 
          else if (type == 13)
          {
            event_engine_rule_changedValues=[...event_engine_rule_changedValues, changedstr];
          } 
          else if (type ==14)
          {
            event_engine_trigger_rssi_changeValues=[...event_engine_trigger_ping_changeValues, changedstr];
          } 
        }
      }
  }

  function saveRule()
  {
    console.log("save rule");
      if (event_engine_rule_changedValues.length !=0)
      {
          event_engine_rule_changedValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_ruleSettings.length, event_engine_data.config.service_eventEngine_ruleSettings.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_ruleSettings[i], event_engine_data.config.service_eventEngine_ruleSettings[i], 13, 1,i+1, "Rule");
      }

      if (changed_event_engine_data.config.service_eventEngine_ruleSettings.length > event_engine_data.config.service_eventEngine_ruleSettings.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_ruleSettings.length-event_engine_data.config.service_eventEngine_ruleSettings.length;

        for (let k=event_engine_data.config.service_eventEngine_ruleSettings.length; k < changed_event_engine_data.config.service_eventEngine_ruleSettings.length; k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_ruleSettings[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to Rule List";
          event_engine_rule_changedValues=[...event_engine_rule_changedValues, changedstr];
        }
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_ruleSettings.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_ruleSettings[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_ruleSettings[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_ruleSettings=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_ruleSettings=JSON.parse(JSON.stringify(tempForDelete));




      //saved_changed_event_engine_data.config.service_eventEngine_ruleSettings=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_ruleSettings));

      EventEngine_Rule_ConfigChangedLog.set(event_engine_rule_changedValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_rule_changedValues);


  }


  function saveGeneral()
  {
      console.log("save general");
      if (event_engine_general_changedValues.length !=0)
      {
          event_engine_general_changedValues=[];
      }


      if (changed_event_engine_data.config.service_eventEngine_general.enable != event_engine_data.config.service_eventEngine_general.enable)
      {
          saved_changed_event_engine_data.config.service_eventEngine_general.enable=changed_event_engine_data.config.service_eventEngine_general.enable;
          let changedStr="Event Engine is changed to " + changed_event_engine_data.config.service_eventEngine_general.enable;
          event_engine_general_changedValues=[...event_engine_general_changedValues, changedStr];
      }

      EventEngine_General_ConfigChangedLog.set(event_engine_general_changedValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_general_changedValues);
  }

  function saveTriggerSMS()
  {
      console.log("save Trigger SMS");
      if (event_engine_trigger_sms_changeValues.length !=0)
      {
          event_engine_trigger_sms_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length, event_engine_data.config.service_eventEngine_triggerProfile.sms.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[i], event_engine_data.config.service_eventEngine_triggerProfile.sms[i], 0, 1,i+1, "SMS");
      }

      if (changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length > event_engine_data.config.service_eventEngine_triggerProfile.sms.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length-event_engine_data.config.service_eventEngine_triggerProfile.sms.length;

        for (let k=event_engine_data.config.service_eventEngine_triggerProfile.sms.length; k<changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to SMS Trigger List";
          event_engine_trigger_sms_changeValues=[...event_engine_trigger_sms_changeValues, changedstr];
        }
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_triggerProfile.sms=JSON.parse(JSON.stringify(tempForDelete));


     // saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.sms));

      EventEngine_TriggerSMS_ConfigChangedLog.set(event_engine_trigger_sms_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_trigger_sms_changeValues);

  }

  function saveTriggerDI()
  {
    console.log("save Trigger DI");
    if (event_engine_trigger_di_changeValues.length !=0)
    {
        event_engine_trigger_di_changeValues=[];
    }


    for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length, event_engine_data.config.service_eventEngine_triggerProfile.di.length); i++) 
    {
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.di[i], event_engine_data.config.service_eventEngine_triggerProfile.di[i], 1, 1,i+1,"DI");
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length > event_engine_data.config.service_eventEngine_triggerProfile.di.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length-event_engine_data.config.service_eventEngine_triggerProfile.di.length;

      for (let k=event_engine_data.config.service_eventEngine_triggerProfile.di.length; k<changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length;k++)
      {
          if (changed_event_engine_data.config.service_eventEngine_triggerProfile.di[k].delete)
          {
            addedCount--;
          }
      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to DI Trigger List";
        event_engine_trigger_di_changeValues=[...event_engine_trigger_di_changeValues, changedstr];
      }
    }

    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.di=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.di));

    EventEngine_TriggerDI_ConfigChangedLog.set(event_engine_trigger_di_changeValues);
    ChangedEventEngineConfig.set(saved_changed_event_engine_data);
    console.log(event_engine_trigger_di_changeValues);    

  }


  function saveTriggerModbus()
  {
    console.log("save Trigger Modbus");
    if (event_engine_trigger_modbus_changeValues.length !=0)
    {
        event_engine_trigger_modbus_changeValues=[];
    }


    for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length, event_engine_data.config.service_eventEngine_triggerProfile.modbus.length); i++) 
    {
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[i], event_engine_data.config.service_eventEngine_triggerProfile.modbus[i], 2, 1,i+1,"Modbus");
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length > event_engine_data.config.service_eventEngine_triggerProfile.modbus.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length-event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;

      for (let k=event_engine_data.config.service_eventEngine_triggerProfile.modbus.length; k<changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;k++)
      {
          if (changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[k].delete)
          {
            addedCount--;
          }
      }

      if (addedCount > 0)
      {      
        let changedstr="Add "+addedCount+" item(s) to Modbus Trigger List";
        event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];
      }
    }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus=JSON.parse(JSON.stringify(tempForDelete));



    //saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus));

    EventEngine_TriggerModbus_ConfigChangedLog.set(event_engine_trigger_modbus_changeValues);
    ChangedEventEngineConfig.set(saved_changed_event_engine_data);
    console.log(event_engine_trigger_modbus_changeValues);    

  }


  function saveTriggerTCPMsg()
  {
    console.log("save Trigger TCP Message");
    if (event_engine_trigger_tcpmsg_changeValues.length !=0)
    {
        event_engine_trigger_tcpmsg_changeValues=[];
    }


    for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length, event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length); i++) 
    {
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[i], event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[i], 3, 1,i+1,"TCP Message");
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length > event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length-event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length;

      for (let k=event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length; k<changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length;k++)
      {
          if (changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[k].delete)
          {
            addedCount--;
          }
      }

      if (addedCount > 0)
      {  
        let changedstr="Add "+addedCount+" item(s) to TCP Message Trigger List";
        event_engine_trigger_tcpmsg_changeValues=[...event_engine_trigger_tcpmsg_changeValues, changedstr];
      }
    }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage=JSON.parse(JSON.stringify(tempForDelete));



    //saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage));

    EventEngine_TriggerTCPMsg_ConfigChangedLog.set(event_engine_trigger_tcpmsg_changeValues);
    ChangedEventEngineConfig.set(saved_changed_event_engine_data);
    console.log(event_engine_trigger_tcpmsg_changeValues);    
  }


  function saveTriggerMQTT()
  {
    console.log("save Trigger MQTT");
    if (event_engine_trigger_mqtt_changeValues.length !=0)
    {
        event_engine_trigger_mqtt_changeValues=[];
    }


    for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length, event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length); i++) 
    {
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[i], event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[i], 4, 1,i+1, "MQTT");
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length > event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length-event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length;
      
      for (let k=event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length; k<changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length;k++)
      {
          if (changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[k].delete)
          {
            addedCount--;
          }
      }

      if (addedCount > 0)
      {  
        let changedstr="Add "+addedCount+" item(s) to MQTT Trigger List";
        event_engine_trigger_mqtt_changeValues=[...event_engine_trigger_mqtt_changeValues, changedstr];
      }
    }


    let tempForDelete=[];
    for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length; i++)
    {
      if (!changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[i]]
      }

    }

    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification=JSON.parse(JSON.stringify(tempForDelete));
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification=JSON.parse(JSON.stringify(tempForDelete));



   // saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification));

    EventEngine_TriggerMQTT_ConfigChangedLog.set(event_engine_trigger_mqtt_changeValues);
    ChangedEventEngineConfig.set(saved_changed_event_engine_data);
    console.log(event_engine_trigger_mqtt_changeValues);    

  }

  function saveTriggerPING()
  {
    console.log("save Trigger PING");

    if (event_engine_trigger_ping_changeValues.length !=0)
    {
        event_engine_trigger_ping_changeValues=[];
    }


    for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length, event_engine_data.config.service_eventEngine_triggerProfile.ping.length); i++) 
    {
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[i], event_engine_data.config.service_eventEngine_triggerProfile.ping[i], 12, 1,i+1, "PING");
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length > event_engine_data.config.service_eventEngine_triggerProfile.ping.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length-event_engine_data.config.service_eventEngine_triggerProfile.ping.length;


      for (let k=event_engine_data.config.service_eventEngine_triggerProfile.ping.length; k<changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length;k++)
      {
          if (changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[k].delete)
          {
            addedCount--;
          }
      }

      if (addedCount > 0)
      {  
        let changedstr="Add "+addedCount+" item(s) to PING Trigger List";
        event_engine_trigger_ping_changeValues=[...event_engine_trigger_ping_changeValues, changedstr];
      }
    }


    let tempForDelete=[];
    for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length; i++)
    {
      if (!changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[i]]
      }

    }

    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping=JSON.parse(JSON.stringify(tempForDelete));
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping=JSON.parse(JSON.stringify(tempForDelete));

    //saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.ping));

    EventEngine_TriggerPING_ConfigChangedLog.set(event_engine_trigger_ping_changeValues);
    ChangedEventEngineConfig.set(saved_changed_event_engine_data);
    console.log(event_engine_trigger_ping_changeValues);    

  }


  function saveTriggerRSSI()
  {
    console.log("save Trigger RSSI");
    if (event_engine_trigger_rssi_changeValues.length !=0)
    {
        event_engine_trigger_rssi_changeValues=[];
    }


    for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length, event_engine_data.config.service_eventEngine_triggerProfile.rssi.length); i++) 
    {
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[i], event_engine_data.config.service_eventEngine_triggerProfile.rssi[i], 14, 1,i+1, "RSSI");
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length > event_engine_data.config.service_eventEngine_triggerProfile.rssi.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length-event_engine_data.config.service_eventEngine_triggerProfile.rssi.length;


      for (let k=event_engine_data.config.service_eventEngine_triggerProfile.rssi.length; k<changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length;k++)
      {
          if (changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[k].delete)
          {
            addedCount--;
          }
      }

      if (addedCount > 0)
      {  
        let changedstr="Add "+addedCount+" item(s) to RSSI Trigger List";
        event_engine_trigger_rssi_changeValues=[...event_engine_trigger_rssi_changeValues, changedstr];
      }
    }


    let tempForDelete=[];
    for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length; i++)
    {
      if (!changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[i]]
      }

    }

    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi=JSON.parse(JSON.stringify(tempForDelete));
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi=JSON.parse(JSON.stringify(tempForDelete));


    //saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi));

    EventEngine_TriggerRSSI_ConfigChangedLog.set(event_engine_trigger_rssi_changeValues);
    ChangedEventEngineConfig.set(saved_changed_event_engine_data);
    console.log(event_engine_trigger_rssi_changeValues);       

  }


  function saveActionSMS()
  {
      console.log("save Action SMS");
      if (event_engine_action_sms_changeValues.length !=0)
      {
          event_engine_action_sms_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.sms.length, event_engine_data.config.service_eventEngine_actionProfile.sms.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.sms[i], event_engine_data.config.service_eventEngine_actionProfile.sms[i], 5, 1,i+1, "SMS");
      }

      if (changed_event_engine_data.config.service_eventEngine_actionProfile.sms.length > event_engine_data.config.service_eventEngine_actionProfile.sms.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.sms.length-event_engine_data.config.service_eventEngine_actionProfile.sms.length;


        for (let k=event_engine_data.config.service_eventEngine_actionProfile.sms.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.sms.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.sms[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        {  
          let changedstr="Add "+addedCount+" item(s) to SMS Action List";
          event_engine_action_sms_changeValues=[...event_engine_action_sms_changeValues, changedstr];
        }
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.sms.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.sms[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_actionProfile.sms[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.sms=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_actionProfile.sms=JSON.parse(JSON.stringify(tempForDelete));

      //saved_changed_event_engine_data.config.service_eventEngine_actionProfile.sms=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_actionProfile.sms));

      EventEngine_ActionSMS_ConfigChangedLog.set(event_engine_action_sms_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_action_sms_changeValues);

  }

  function saveActionEmail()
  {
      console.log("save Action Email");
      if (event_engine_action_email_changeValues.length !=0)
      {
          event_engine_action_email_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length, event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[i], event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[i], 6, 1,i+1, "smtpServer");
      }


      if (changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length > event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length-event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length;

        for (let k=event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        {  
          let changedstr="Add "+addedCount+" item(s) to Action Email SMTP List";
          event_engine_action_email_changeValues=[...event_engine_action_email_changeValues, changedstr];
        }
      }

      let tempForDelete2=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[i].delete)
        {
          tempForDelete2=[...tempForDelete2, changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer=JSON.parse(JSON.stringify(tempForDelete2));
      changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer=JSON.parse(JSON.stringify(tempForDelete2));


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length, event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[i], event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[i], 6, 1,i+1, "Remote Email");
      }


      if (changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length > event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length-event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length;


        for (let k=event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        { 
          let changedstr="Add "+addedCount+" item(s) to Action Remote Email List";
          event_engine_action_email_changeValues=[...event_engine_action_email_changeValues, changedstr];
        }
      }

      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile=JSON.parse(JSON.stringify(tempForDelete));


     // saved_changed_event_engine_data.config.service_eventEngine_actionProfile.email=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_actionProfile.email));

      EventEngine_ActionEmail_ConfigChangedLog.set(event_engine_action_email_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_action_email_changeValues);

  }

  function saveActionDO()
  {
      console.log("save Action DO");
      if (event_engine_action_do_changeValues.length !=0)
      {
          event_engine_action_do_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.do.length, event_engine_data.config.service_eventEngine_actionProfile.do.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.do[i], event_engine_data.config.service_eventEngine_actionProfile.do[i], 7, 1,i+1, "DO");
      }

      if (changed_event_engine_data.config.service_eventEngine_actionProfile.do.length > event_engine_data.config.service_eventEngine_actionProfile.do.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.do.length-event_engine_data.config.service_eventEngine_actionProfile.do.length;

        for (let k=event_engine_data.config.service_eventEngine_actionProfile.do.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.do.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.do[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        { 
          let changedstr="Add "+addedCount+" item(s) to DO Action List";
          event_engine_action_do_changeValues=[...event_engine_action_do_changeValues, changedstr];
        }
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.do.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.do[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_actionProfile.do[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.do=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_actionProfile.do=JSON.parse(JSON.stringify(tempForDelete));

      //saved_changed_event_engine_data.config.service_eventEngine_actionProfile.do=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_actionProfile.do));

      EventEngine_ActionDO_ConfigChangedLog.set(event_engine_action_do_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_action_do_changeValues);

  }

  function saveActionModbus()
  {
      console.log("save Action Modbus");
      if (event_engine_action_modbus_changeValues.length !=0)
      {
          event_engine_action_modbus_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length, event_engine_data.config.service_eventEngine_actionProfile.modbus.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[i], event_engine_data.config.service_eventEngine_actionProfile.modbus[i], 8, 1,i+1, "Modbus");
      }

      if (changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length > event_engine_data.config.service_eventEngine_actionProfile.modbus.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length-event_engine_data.config.service_eventEngine_actionProfile.modbus.length;

        for (let k=event_engine_data.config.service_eventEngine_actionProfile.modbus.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        { 
          let changedstr="Add "+addedCount+" item(s) to Modbus Action List";
          event_engine_action_modbus_changeValues=[...event_engine_action_modbus_changeValues, changedstr];
        }
      }

      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_actionProfile.modbus=JSON.parse(JSON.stringify(tempForDelete));


      //saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_actionProfile.modbus));

      EventEngine_ActionModbus_ConfigChangedLog.set(event_engine_action_modbus_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_action_modbus_changeValues);

  }


  function saveActionTCPMsg()
  {
      console.log("save Action TCP message");
      if (event_engine_action_tcpmsg_changeValues.length !=0)
      {
          event_engine_action_tcpmsg_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length, event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[i], event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[i], 9, 1,i+1, "TCP Message");
      }

      if (changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length > event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length-event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length;

        for (let k=event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        { 
          let changedstr="Add "+addedCount+" item(s) to TCP Message Action List";
          event_engine_action_tcpmsg_changeValues=[...event_engine_action_tcpmsg_changeValues, changedstr];
        }
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage=JSON.parse(JSON.stringify(tempForDelete));

      //saved_changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage));

      EventEngine_ActionTCPMsg_ConfigChangedLog.set(event_engine_action_tcpmsg_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_action_tcpmsg_changeValues);

  }


  function saveActionMQTT()
  {
      console.log("save Action MQTT message");
      if (event_engine_action_mqtt_changeValues.length !=0)
      {
          event_engine_action_mqtt_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length, event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[i], event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[i], 10, 1,i+1, "MQTT");
      }

      if (changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length > event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length-event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length;

        for (let k=event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to MQTT Action List";
          event_engine_action_mqtt_changeValues=[...event_engine_action_mqtt_changeValues, changedstr];
        }
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish=JSON.parse(JSON.stringify(tempForDelete));


      //saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish));

      EventEngine_ActionMQTT_ConfigChangedLog.set(event_engine_action_mqtt_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_action_mqtt_changeValues);

  }


  function saveActionLINE()
  {
      console.log("save Action LINE message");
      if (event_engine_action_line_changeValues.length !=0)
      {
          event_engine_action_line_changeValues=[];
      }


      for (let i = 0; i < Math.min(changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length, event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length); i++) 
      {
        compareObjects(changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[i], event_engine_data.config.service_eventEngine_actionProfile.lineNotification[i], 11, 1,i+1, "LINE");
      }

      if (changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length > event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length-event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length;

        for (let k=event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length; k<changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length;k++)
        {
          if (changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to LINE Action List";
          event_engine_action_line_changeValues=[...event_engine_action_line_changeValues, changedstr];
        }
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length; i++)
      {
        if (!changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[i]]
        }

      }

      saved_changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification=JSON.parse(JSON.stringify(tempForDelete));
      changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification=JSON.parse(JSON.stringify(tempForDelete));


     // saved_changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification));

      EventEngine_ActionLINE_ConfigChangedLog.set(event_engine_action_line_changeValues);
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);
      console.log(event_engine_action_line_changeValues);

  }



  let getRemoteCertReady=0;
  let remoteCertList=[];
  async function getRemoteCertificate() {
    const res = await fetch(window.location.origin+"/GetRemotecert", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      remoteCertList =await res.json();
      console.log(remoteCertList);
      getRemoteCertReady=1;
    
    }
  }
  let getCaCertReady=0;
  let caCertList=[];

  async function getCACertificate() {
    const res = await fetch(window.location.origin+"/getCaCERt", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      caCertList =await res.json();
      console.log(caCertList);
      getCaCertReady=1;
    
    }
  }

  let getMachineCertReady=0;
  let machineCertList=[];

  async function getMachineCertificate() {
    const res = await fetch(window.location.origin+"/getMachinECert", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      machineCertList =await res.json();
      console.log(machineCertList);
      getMachineCertReady=1;
    
    }
  }


  onMount(() => {

    console.log("event engine sessionid: ");
    console.log(sessionid);


    if (sessionid && event_engine_data =="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getEventEngineData();
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
    }
    else if (sessionid && event_engine_data != "")
    {
      getDataReady=1;
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

      getMachineCertificate();
      getCACertificate();
      getRemoteCertificate();

      changed_event_engine_data=JSON.parse(JSON.stringify(saved_changed_event_engine_data));
      if (event_engine_general_changedValues.length == 0)
      {
        changed_event_engine_data.config.service_eventEngine_general=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_general)); 
      }

      if (event_engine_trigger_sms_changeValues.length == 0)
      {
          changed_event_engine_data.config.service_eventEngine_triggerProfile.sms=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_triggerProfile.sms));
      }

      if (event_engine_trigger_di_changeValues.length == 0)
      {
          changed_event_engine_data.config.service_eventEngine_triggerProfile.di=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_triggerProfile.di));
      }

      if (event_engine_trigger_modbus_changeValues.length == 0)
      {
          changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_triggerProfile.modbus));
      }

      if (event_engine_trigger_tcpmsg_changeValues.length == 0)
      {
          changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage));        
      }

      if (event_engine_trigger_mqtt_changeValues.length == 0)
      {
          changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification));        
      }

      if (event_engine_action_sms_changeValues.length == 0)
      {
         changed_event_engine_data.config.service_eventEngine_actionProfile.sms=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_actionProfile.sms));

      }

      if (event_engine_action_email_changeValues.length == 0)
      {
         changed_event_engine_data.config.service_eventEngine_actionProfile.email=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_actionProfile.email));

      }

      if (event_engine_action_do_changeValues.length == 0)
      {
         changed_event_engine_data.config.service_eventEngine_actionProfile.do=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_actionProfile.do));      

      }


      if (event_engine_action_modbus_changeValues.length == 0)
      {
         changed_event_engine_data.config.service_eventEngine_actionProfile.modbus=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_actionProfile.modbus));      
      }

      if (event_engine_action_tcpmsg_changeValues.length == 0)
      {
         changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_actionProfile.tcpMessage));      
      }


      if (event_engine_action_mqtt_changeValues.length == 0)
      {
         changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_actionProfile.mqttPublish));      
      }


      if (event_engine_action_line_changeValues.length == 0)
      {
         changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification=JSON.parse(JSON.stringify(event_engine_data.config.service_eventEngine_actionProfile.lineNotification));      
      }

      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }



      if (saved_changed_generic_mqtt_data == "")
      {
        getGenericMQTTData();
      }
      else
      {

        for (let i=0; i< saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;i++)
        {
          let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];
        }
 
      }


    }

  });

  let modify_action_line_modal=false;
  let modify_action_line_index;


  let BackupActionLINE=
  {
    enable: false,
    delete: false,
    aliasName: "",
    token: "",
    sendingContent:""
  };

  function deleteLINE(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].delete=true;
  }


  function RestoreDeleteLINE(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].delete=false;
  }

  function TriggerModifyActionLINE(index)
  {
    BackupActionLINE.enable=changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].enable;
    BackupActionLINE.delete=changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].delete;
    BackupActionLINE.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].aliasName;  
    BackupActionLINE.token=changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].token; 
    BackupActionLINE.sendingContent=changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].sendingContent;  

    modify_action_line_index=index;
    modify_action_line_modal=true;
  }

  function NoModifyActionLINE(index)
  {
    modify_action_line_modal=false;
    changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].enable=BackupActionLINE.enable;
    changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].delete=BackupActionLINE.delete;

    changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].aliasName=BackupActionLINE.aliasName;  
    changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].token=BackupActionLINE.token; 
    changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[index].sendingContent=BackupActionLINE.sendingContent;
  }

  function ModifyActionLINE()
  {
    modify_action_line_modal=false;  
  }


  let new_action_line_modal=false;
  let new_action_line_index;


  let NewActionLINE=
  [
  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
,
  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete:false,
    aliasName: "",
    token: "",
    sendingContent:""
  }

  ];

  function new_action_line_trigger(index)
  {
    NewActionLINE[index].enable=true;
    NewActionLINE[index].delete=false;    
    NewActionLINE[index].aliasName="";
    NewActionLINE[index].token="";
    NewActionLINE[index].sendingContent="";

    new_action_line_index=index;
    new_action_line_modal=true;

  }


  function add_new_action_line(index)
  {
      new_action_line_modal=false;
      changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification=[...changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification,NewActionLINE[index]];
  } 



  let new_rule_modal=false;
  let new_rule_index;


  let NewRuleItem=
  [{
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  },
  {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  }
  ]


  function new_rule_trigger(index)
  {
    NewRuleItem[index].enable=true;
    NewRuleItem[index].delete=false;
    NewRuleItem[index].aliasName="";
    NewRuleItem[index].triggerCount=1;
    NewRuleItem[index].multipleTriggerRelationship=0;
    NewRuleItem[index].firstTrigger.catalog="";
    NewRuleItem[index].firstTrigger.profile=""; 
    NewRuleItem[index].firstTrigger.statusType=0; 
    NewRuleItem[index].secondTrigger.catalog="";
    NewRuleItem[index].secondTrigger.profile=""; 
    NewRuleItem[index].secondTrigger.statusType=0; 
    NewRuleItem[index].thirdTrigger.catalog="";
    NewRuleItem[index].thirdTrigger.profile=""; 
    NewRuleItem[index].thirdTrigger.statusType=0; 
    NewRuleItem[index].delaySecond=0;
    NewRuleItem[index].actionOption=0;
    NewRuleItem[index].repeatCnt=0;
    NewRuleItem[index].repeatInterval=0;
    NewRuleItem[index].actionCatalog=0;
    NewRuleItem[index].actionProfile="";
    NewRuleItem[index].actionOperation=0;


    new_rule_index=index;
    new_rule_modal=true;

    currentStep=1;
  }


  function Rule_Modal_Add()
  {

    changed_event_engine_data.config.service_eventEngine_ruleSettings=[...changed_event_engine_data.config.service_eventEngine_ruleSettings, NewRuleItem[new_rule_index]];

    new_rule_modal = false;
    currentStep=1;
  }

  let modify_rule_modal=false;
  let modify_rule_index;
  let BackupRule=
    {
          enable: false,
          delete: false,
          aliasName: "",
          triggerCount: 0, 
          multipleTriggerRelationship: 0, 
          firstTrigger: {
            catalog: 0, 
            profile: "",
            statusType:0
          },
          secondTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          thirdTrigger: {
            catalog: 0,
            profile: "",
            statusType:0
          },
          delaySecond: 3,
          actionOption: 0, 
          repeatCnt: 3,
          repeatInterval: 3,
          actionCatalog: 0,
          actionProfile: "",
          actionOperation:0
  };


  function deleteRule(index)
  {
    changed_event_engine_data.config.service_eventEngine_ruleSettings[index].delete=true;
  }

  function RestoreDeleteRule(index)
  {
    changed_event_engine_data.config.service_eventEngine_ruleSettings[index].delete=false;
  }


  function TriggerModifyRule(index)
  {

    console.log("Trigger Modify Rule");
    console.log(changed_event_engine_data.config.service_eventEngine_ruleSettings);

    BackupRule.enable=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].enable;
    BackupRule.delete=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].delete;
    BackupRule.aliasName=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].aliasName;
    BackupRule.triggerCount=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].triggerCount;
    BackupRule.multipleTriggerRelationship=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].multipleTriggerRelationship;
    BackupRule.firstTrigger.catalog=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].firstTrigger.catalog;
    BackupRule.firstTrigger.profile=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].firstTrigger.profile; 
    BackupRule.firstTrigger.statusType=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].firstTrigger.statusType; 
    BackupRule.secondTrigger.catalog=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].secondTrigger.catalog;
    BackupRule.secondTrigger.profile=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].secondTrigger.profile; 
    BackupRule.secondTrigger.statusType=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].secondTrigger.statusType; 
    BackupRule.thirdTrigger.catalog=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].thirdTrigger.catalog;
    BackupRule.thirdTrigger.profile=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].thirdTrigger.profile; 
    BackupRule.thirdTrigger.statusType=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].thirdTrigger.statusType; 
    BackupRule.delaySecond=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].delaySecond;
    BackupRule.actionOption=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].actionOption;
    BackupRule.repeatCnt=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].repeatCnt;
    BackupRule.repeatInterval=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].repeatInterval;
    BackupRule.actionCatalog=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].actionCatalog;
    BackupRule.actionProfile=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].actionProfile;
    BackupRule.actionOperation=changed_event_engine_data.config.service_eventEngine_ruleSettings[index].actionOperation;



    currentStep=1;
    modify_rule_index=index;
    modify_rule_modal=true;

  }

  function Rule_Modal_Modify()
  {
    modify_rule_modal = false;
    currentStep=1;
  }


  let modify_action_mqtt_modal=false;
  let modify_action_mqtt_index;

  let BackupActionMQTT=
  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  };


  function deleteActionMQTT(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].delete=true;
  }

  function RestoreDeleteActionMQTT(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].delete=false;
  }

  function TriggerModifyActionMQTT(index)
  {
    BackupActionMQTT.enable=changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].enable;
    BackupActionMQTT.delete=changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].delete;    
    BackupActionMQTT.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].aliasName;  
    BackupActionMQTT.mqttProfile=changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].mqttProfile;  
    BackupActionMQTT.publishTopic=changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].publishTopic;  
    BackupActionMQTT.sendingContent=changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].sendingContent;  

    modify_action_mqtt_index=index;
    modify_action_mqtt_modal=true;
  }

  function NoModifyActionMQTT(index)
  {
    modify_action_mqtt_modal=false;
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].enable=BackupActionMQTT.enable;
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].delete=BackupActionMQTT.delete;    
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].aliasName=BackupActionMQTT.aliasName; 
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].mqttProfile=BackupActionMQTT.mqttProfile;  
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].publishTopic=BackupActionMQTT.publishTopic; 
    changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[index].sendingContent=BackupActionMQTT.sendingContent;

  }

  function ModifyActionMQTT()
  {
    modify_action_mqtt_modal=false;  
  }


  let new_action_mqtt_modal=false;
  let new_action_mqtt_index;

  let NewActionMQTT=[
  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
,
  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,
    {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ,  {
    enable: false,
    delete: false,
    aliasName: "",
    mqttProfile: "",
    publishTopic: "",
    sendingContent:""
  }
  ];


  function new_action_mqtt_trigger(index)
  {
    NewActionMQTT[index].enable=true;
    NewActionMQTT[index].delete=false;    
    NewActionMQTT[index].aliasName="";
    NewActionMQTT[index].mqttProfile="";
    NewActionMQTT[index].publishTopic="";
    NewActionMQTT[index].sendingContent="";

    new_action_mqtt_index=index;
    new_action_mqtt_modal=true;

  }


  function add_new_action_mqtt(index)
  {
      new_action_mqtt_modal=false;
      changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish=[...changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish,NewActionMQTT[index]];
  } 


  let modify_action_tcpmsg_modal=false;
  let modify_action_tcpmsg_index;

  let BackupActionTCPMsg=
  {
    enable: false,
    delete: false,
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  };

  function deleteActionTCPMsg(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].delete=true;
  }


  function RestoreDeleteActionTCPMsg(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].delete=false;
  }


  function TriggerModifyActionTCPMsg(index)
  {
    BackupActionTCPMsg.enable=changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].enable;
    BackupActionTCPMsg.delete=changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].delete;    
    BackupActionTCPMsg.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].aliasName;  
    BackupActionTCPMsg.remoteHost=changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].remoteHost;  
    BackupActionTCPMsg.remotePort=changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].remotePort;  
    BackupActionTCPMsg.sendingMessage=changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].sendingMessage;  

    modify_action_tcpmsg_index=index;
    modify_action_tcpmsg_modal=true;
  }

  function NoModifyActionTCPMsg(index)
  {
    modify_action_tcpmsg_modal=false;
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].enable=BackupActionTCPMsg.enable;
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].delete=BackupActionTCPMsg.delete;
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].aliasName=BackupActionTCPMsg.aliasName;  
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].remoteHost=BackupActionTCPMsg.remoteHost;  
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].remotePort=BackupActionTCPMsg.remotePort;  
    changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[index].sendingMessage=BackupActionTCPMsg.sendingMessage;  
  }

  function ModifyActionTCPMsg()
  {
    modify_action_tcpmsg_modal=false;  
  }

  let new_action_tcpmsg_modal=false;
  let new_action_tcpmsg_index;

  let NewActionTCPMsg=[
  {
    enable: false,
    delete: false,    
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
,
  {
    enable: false,
    delete: false,      
    aliasName: "",
    remoteHost: "",
    remotePort: 0,
    sendingMessage:""
  }
  ];


  function new_action_tcpmsg_trigger(index)
  {
    NewActionTCPMsg[index].enable=true;
    NewActionTCPMsg[index].delete=false;
    NewActionTCPMsg[index].aliasName="";
    NewActionTCPMsg[index].modbusDataModel="";
    NewActionTCPMsg[index].dataType;
    NewActionTCPMsg[index].assignment;  

    new_action_tcpmsg_index=index;
    new_action_tcpmsg_modal=true;

  }


  function add_new_action_tcpmsg(index)
  {
      new_action_tcpmsg_modal=false;
      changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage=[...changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage,NewActionTCPMsg[index]];
  } 


  let modify_action_modbus_modal=false;
  let modify_action_modbus_index;

  let BackupActionModbus=
  {
    enable: false,
    delete: false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  };


  function deleteActionModbus(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].delete=true;

  }

  function RestoreDeleteActionModbus(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].delete=false;
  }


  function TriggerModifyActionModbus(index)
  {
    BackupActionModbus.enable=changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].enable;
    BackupActionModbus.delete=changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].delete;
    BackupActionModbus.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].aliasName;  
    BackupActionModbus.modbusDataModel=changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].modbusDataModel;
    BackupActionModbus.dataType=changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].dataType;
    BackupActionModbus.assignment=changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].assignment;


    modify_action_modbus_index=index;
    modify_action_modbus_modal=true;
  }

  function NoModifyActionModbus(index)
  {
    modify_action_modbus_modal=false;
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].enable=BackupActionModbus.enable;
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].delete=BackupActionModbus.delete;
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].aliasName=BackupActionModbus.aliasName;  
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].modbusDataModel=BackupActionModbus.modbusDataModel;
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].dataType=BackupActionModbus.dataType;
    changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[index].assignment=BackupActionModbus.assignment;
  }

  function ModifyActionModbus()
  {
    modify_action_modbus_modal=false;  
  }

  let new_action_modbus_modal=false;
  let new_action_modbus_index;
  let NewActionModbus=[
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  },
  {
    enable: false,
    delete:false,
    aliasName: "",
    modbusDataModel: "",
    dataType: 0,
    assignment: 2000
  }

  ];


  function new_action_modbus_trigger(index)
  {
    NewActionModbus[index].enable=true;
    NewActionModbus[index].delete=false;    
    NewActionModbus[index].aliasName="";
    NewActionModbus[index].modbusDataModel="";
    NewActionModbus[index].dataType;
    NewActionModbus[index].assignment;  

    new_action_modbus_index=index;
    new_action_modbus_modal=true;

  }


  function add_new_action_modbus(index)
  {
      new_action_modbus_modal=false;
      changed_event_engine_data.config.service_eventEngine_actionProfile.modbus=[...changed_event_engine_data.config.service_eventEngine_actionProfile.modbus,NewActionModbus[index]];
  } 



  let modify_action_do_modal=false;
  let modify_action_do_index;

  let BackupActionDO=
  {
    enable: false,
    delete: false,
    aliasName: "",
    type: 0,
    duration: 2
  };


  function deleteActionDO(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].delete=true; 
  }

  function RestoreDeleteActionDO(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].delete=false;
  }

  function TriggerModifyActionDO(index)
  {
    BackupActionDO.enable=changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].enable;
    BackupActionDO.delete=changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].delete;    
    BackupActionDO.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].aliasName;  
    BackupActionDO.type=changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].type;
    BackupActionDO.duration=changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].duration;
    modify_action_do_index=index;
    modify_action_do_modal=true;
  }

  function NoModifyActionDO(index)
  {
    modify_action_do_modal=false;

    changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].enable=BackupActionDO.enable;
    changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].delete=BackupActionDO.delete;    
    changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].aliasName=BackupActionDO.aliasName;  
    changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].type=BackupActionDO.type;
    changed_event_engine_data.config.service_eventEngine_actionProfile.do[index].duration=BackupActionDO.duration;
  }

  function ModifyActionDO()
  {
    modify_action_do_modal=false;  
  }

  let new_action_do_modal=false;
  let new_action_do_index;

  let NewActionDO=[
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


  function new_action_do_trigger(index)
  {
    NewActionDO[index].enable=true;
    NewActionDO[index].delete=false;    
    NewActionDO[index].aliasName="";
    NewActionDO[index].type=0;
    NewActionDO[index].duration=1;

    new_action_do_index=index;
    new_action_do_modal=true;

  }


  function add_new_action_do(index)
  {
      new_action_do_modal=false;
      changed_event_engine_data.config.service_eventEngine_actionProfile.do=[...changed_event_engine_data.config.service_eventEngine_actionProfile.do,NewActionDO[index]];
  } 


  let modify_action_email_smtp_modal=false;
  let modify_action_email_smtp_index;

  let BackupActionEmailSMTP=
  {
      aliasName: "",
      smtpServerIp:"",
      port:1,
      tls:0,
      serverCaCert:"",
      clientCert:"",
      account:"",
      password:""
  };



  function TriggerModifyActionEmailSMTP(index)
  {
    BackupActionEmailSMTP.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].aliasName;
    BackupActionEmailSMTP.smtpServerIp=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].smtpServerIp;
    BackupActionEmailSMTP.port=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].port;
    BackupActionEmailSMTP.tls=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].tls;
    BackupActionEmailSMTP.serverCaCert=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].serverCaCert;
    BackupActionEmailSMTP.clientCert=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].clientCert;
    BackupActionEmailSMTP.account=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].account;
    BackupActionEmailSMTP.password=changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].password;
        
    modify_action_email_smtp_index=index;
    modify_action_email_smtp_modal=true;

  }

  function NoModifyActionEmailSMTP(index)
  {
    modify_action_email_smtp_modal=false;

    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].aliasName=BackupActionEmailSMTP.aliasName;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].smtpServerIp=BackupActionEmailSMTP.smtpServerIp;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].port=BackupActionEmailSMTP.port;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].tls=BackupActionEmailSMTP.tls;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].serverCaCert=BackupActionEmailSMTP.serverCaCert;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].clientCert=BackupActionEmailSMTP.clientCert;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].account=BackupActionEmailSMTP.account;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[index].password=BackupActionEmailSMTP.password;

  }

  function ModifyActionEmailSMTP()
  {
    modify_action_email_smtp_modal=false;

  }


  let modify_action_email_remote_modal=false;
  let modify_action_email_remote_index;

  let BackupActionEmailRemote=
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  };  

  function deleteActionEmail(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].delete=true;
  }

  function RestoreDeleteActionEmail(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].delete=false;
  }


  function TriggerModifyActionEmailRemote(index)
  {
    BackupActionEmailRemote.enable=changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].enable;
    BackupActionEmailRemote.delete=changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].delete;    
    BackupActionEmailRemote.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].aliasName;
    BackupActionEmailRemote.remoteEmail=changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].remoteEmail;
    BackupActionEmailRemote.emailContent=changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].emailContent;

    modify_action_email_remote_index=index;
    modify_action_email_remote_modal=true;

  }

  function NoModifyActionEmailRemote(index)
  {
    modify_action_email_remote_modal=false;

    changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].enable=BackupActionEmailRemote.enable;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].delete=BackupActionEmailRemote.delete;    
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].aliasName=BackupActionEmailRemote.aliasName;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].remoteEmail=BackupActionEmailRemote.remoteEmail;
    changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[index].emailContent=BackupActionEmailRemote.emailContent;

  }

  function ModifyActionEmailRemote()
  {
    modify_action_email_remote_modal=false;

  }


  let new_action_email_remote_modal=false;
  let new_action_email_remote_index;


  let NewActionEmailRemote=[
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteEmail:"",
      emailContent:""
  }

  ];  


  function new_action_email_remote_trigger(index)
  {
    NewActionEmailRemote[index].enable=true;
    NewActionEmailRemote[index].delete=false;    
    NewActionEmailRemote[index].aliasName="";
    NewActionEmailRemote[index].remoteEmail="";
    NewActionEmailRemote[index].emailContent="";

    new_action_email_remote_index=index;
    new_action_email_remote_modal=true;

  }


  function add_new_action_email_remote(index)
  {
      new_action_email_remote_modal=false;
      changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile=[...changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile,NewActionEmailRemote[index]];
  } 



  let modify_action_sms_modal=false;
  let modify_action_sms_index;
  let BackupActionSMS=
  {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  };


  function deleteActionSMS(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].delete=true;
  }

  function RestoreDeleteActionSMS(index)
  {
    changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].delete=false;
  }


  function TriggerModifyActionSMS(index)
  {
    BackupActionSMS.enable=changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].enable;
    BackupActionSMS.delete=changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].delete;    
    BackupActionSMS.aliasName=changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].aliasName
    BackupActionSMS.smsPhoneNumber=changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].smsPhoneNumber;
    BackupActionSMS.smsContent=changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].smsContent;
    
    modify_action_sms_index=index;
    modify_action_sms_modal=true;

  }

  function NoModifyActionSMS(index)
  {
    modify_action_sms_modal=false;
    changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].enable=BackupActionSMS.enable;
    changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].delete=BackupActionSMS.delete;

    changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].aliasName=BackupActionSMS.aliasName;
    changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].smsPhoneNumber=BackupActionSMS.smsPhoneNumber;
    changed_event_engine_data.config.service_eventEngine_actionProfile.sms[index].smsContent=BackupActionSMS.smsContent;

  }

  function ModifyActionSMS()
  {
    modify_action_sms_modal=false;

  }

  let new_action_sms_modal=false;
  let new_action_sms_index;
  let NewActionSMS=[
  {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  },
    {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber:"",
      smsContent:""
  }

  ];

  function new_action_sms_trigger(index)
  {
      NewActionSMS[index].enable=true;
      NewActionSMS[index].delete=false;      
      NewActionSMS[index].aliasName="";
      NewActionSMS[index].smsPhoneNumber="";
      NewActionSMS[index].smsContent="";

      new_action_sms_index=index;
      new_action_sms_modal=true;

  }


  function add_new_action_sms(index)
  {
      new_action_sms_modal=false;
      changed_event_engine_data.config.service_eventEngine_actionProfile.sms=[...changed_event_engine_data.config.service_eventEngine_actionProfile.sms,NewActionSMS[index]];
  } 


  let modify_trigger_mqtt_modal=false;
  let modify_trigger_mqtt_index;
  let BackupTriggerMQTT=
  {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "", 
      receivedContent: ""
  };


  function deleteMQTTN(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].delete=true;
  }

  function RestoreDeleteMQTTN(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].delete=false;
  }

  function TriggerModifyMQTTN(index)
  {
    BackupTriggerMQTT.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].enable;
    BackupTriggerMQTT.delete=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].delete;

    BackupTriggerMQTT.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].aliasName;
    BackupTriggerMQTT.mqttProfile=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].mqttProfile;
    BackupTriggerMQTT.subscribedTopic=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].subscribedTopic;
    BackupTriggerMQTT.receivedContent=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].receivedContent;
    

    modify_trigger_mqtt_index=index;
    modify_trigger_mqtt_modal=true;
  }

  function NoModifyTriggerMQTTN(index)
  {
    modify_trigger_mqtt_modal=false;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].enable=BackupTriggerMQTT.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].delete=BackupTriggerMQTT.delete;    
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].aliasName=BackupTriggerMQTT.aliasName;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].mqttProfile=BackupTriggerMQTT.mqttProfile;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].subscribedTopic= BackupTriggerMQTT.subscribedTopic;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].receivedContent=BackupTriggerMQTT.receivedContent;
  }

  function ModifyTriggerMQTTN()
  {
    modify_trigger_mqtt_modal=false;

  }

  let new_trigger_mqtt_modal=false;
  let new_trigger_mqtt_index;
  let NewTriggerMQTT=[
  {
      enable: false,
      delete: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "", 
      receivedContent: ""
  }
,
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


  function new_trigger_mqtt_trigger(index)
  {
      NewTriggerMQTT[index].enable=true;
      NewTriggerMQTT[index].delete=false;      
      NewTriggerMQTT[index].aliasName="";
      NewTriggerMQTT[index].mqttProfile="";
      NewTriggerMQTT[index].subscribedTopic="";
      NewTriggerMQTT[index].receivedContent="";

      new_trigger_mqtt_index=index;
      new_trigger_mqtt_modal=true;

  }


  function add_new_trigger_mqtt(index)
  {
      new_trigger_mqtt_modal=false;
      changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification=[...changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification,NewTriggerMQTT[index]];
  } 


  let modify_trigger_ping_modal=false;
  let modify_trigger_ping_index;
  let BackupTriggerPING=
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  };

  function deletePING(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].delete=true;
  }

  function RestoreDeletePING(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].delete=false;
  }

  function TriggerModifyPING(index)
  {
    BackupTriggerPING.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].enable;
    BackupTriggerPING.delete=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].delete;
    BackupTriggerPING.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].aliasName;
    BackupTriggerPING.remoteHost=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].remoteHost;
    BackupTriggerPING.pingResult=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].pingResult;
    BackupTriggerPING.ResultOption=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].ResultOption;
    BackupTriggerPING.ResultContinuousCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].ResultContinuousCount;
    
    BackupTriggerPING.RepeatDelaySec=changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].RepeatDelaySec;


    modify_trigger_ping_index=index;
    modify_trigger_ping_modal=true;
  }

  function NoModifyTriggerPING(index)
  {
    modify_trigger_ping_modal=false;

    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].enable=BackupTriggerPING.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].delete=BackupTriggerPING.delete;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].aliasName=BackupTriggerPING.aliasName;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].remoteHost=BackupTriggerPING.remoteHost;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].pingResult=BackupTriggerPING.pingResult;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].ResultOption=BackupTriggerPING.ResultOption;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].ResultContinuousCount=BackupTriggerPING.ResultContinuousCount;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[index].RepeatDelaySec=BackupTriggerPING.RepeatDelaySec;


  }

  function ModifyTriggerPING()
  {
    modify_trigger_ping_modal=false;

  }


  let new_trigger_ping_modal=false;
  let new_trigger_ping_index;
  let NewTriggerPING=[
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  }
,
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost:"",
      pingResult: 0,
      ResultOption: 0, 
      ResultContinuousCount: 2,
      RepeatDelaySec:1
  }
  ];


  function new_trigger_ping_trigger(index)
  {
      NewTriggerPING[index].enable=true;
      NewTriggerPING[index].delete=false;      
      NewTriggerPING[index].aliasName="";
      NewTriggerPING[index].remoteHost="";
      NewTriggerPING[index].pingResult=0;
      NewTriggerPING[index].ResultOption=0;
      NewTriggerPING[index].ResultContinuousCount=2;
      NewTriggerPING[index].RepeatOption=0;
      NewTriggerPING[index].RepeatDelaySec=1;

      new_trigger_ping_index=index;
      new_trigger_ping_modal=true;

  }


  function add_new_trigger_ping(index)
  {
      new_trigger_ping_modal=false;
      changed_event_engine_data.config.service_eventEngine_triggerProfile.ping=[...changed_event_engine_data.config.service_eventEngine_triggerProfile.ping,NewTriggerPING[index]];
  }



  let new_trigger_rssi_modal=false;
  let new_trigger_rssi_index;

  let NewTriggerRSSI=[
  {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  },
    {
    enable:false,
    delete:false,
    aliasName: "",
    comparision:0,
    comparedSelected:0,
    comparedUserDefinedValue:10
  }

  ];

  function new_trigger_rssi_trigger(index)
  {
    NewTriggerRSSI[index].enable=true;
    NewTriggerRSSI[index].delete=false;    
    NewTriggerRSSI[index].aliasName="";
    NewTriggerRSSI[index].comparision=0;
    NewTriggerRSSI[index].comparedSelected=0;
    NewTriggerRSSI[index].comparedUserDefinedValue=10;

    new_trigger_rssi_modal=true;
    new_trigger_rssi_index=index;
  }


  function add_new_trigger_rssi(index)
  {
      new_trigger_rssi_modal=false;
      changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi=[...changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi,NewTriggerRSSI[index]];
  }


  let modify_trigger_rssi_modal=false;
  let modify_trigger_rssi_index;
  let BackupTriggerRSSI=
  {
      enable: false,
      delete: false,
      aliasName: "",
      comparision:0,
      comparedSelected:0,
      comparedUserDefinedValue:10
  };


  function deleteRSSI(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].delete=true;
  }

  function RestoreDeleteRSSI(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].delete=false;
  }

  function TriggerModifyRSSI(index)
  {
    BackupTriggerRSSI.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].enable;
    BackupTriggerRSSI.delete=changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].delete;
    BackupTriggerRSSI.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].aliasName;
    BackupTriggerRSSI.comparision=changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].comparision;
    BackupTriggerRSSI.comparedSelected=changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].comparedSelected;
    BackupTriggerRSSI.comparedUserDefinedValue=changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].comparedUserDefinedValue;


    modify_trigger_rssi_index=index;
    modify_trigger_rssi_modal=true;
  }

  function NoModifyTriggerRSSI(index)
  {
    modify_trigger_rssi_modal=false;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].enable=BackupTriggerRSSI.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].delete=BackupTriggerRSSI.delete;    
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].aliasName=BackupTriggerRSSI.aliasName;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].comparision=BackupTriggerRSSI.comparision;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].comparedSelected=    BackupTriggerRSSI.comparedSelected;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[index].comparedUserDefinedValue=    BackupTriggerRSSI.comparedUserDefinedValue;
  }

  function ModifyTriggerRSSI()
  {
    modify_trigger_rssi_modal=false;

  }



  let modify_trigger_tcpMsg_modal=false;
  let modify_trigger_tcpMsg_index;
  let BackupTriggerTCPMsg=
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  };


  function deleteTCPMsg(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].delete=true;
  }

  function RestoreDeleteTriggerTCPMsg(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].delete=false;
  }

  function TriggerModifyTCPMsg(index)
  {
    BackupTriggerTCPMsg.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].enable;
    BackupTriggerTCPMsg.delete=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].delete;    
    BackupTriggerTCPMsg.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].aliasName;
    BackupTriggerTCPMsg.remoteHost=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].remoteHost;
    BackupTriggerTCPMsg.remotePort=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].remotePort;
    BackupTriggerTCPMsg.receivedMessage=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].receivedMessage;
    

    modify_trigger_tcpMsg_index=index;
    modify_trigger_tcpMsg_modal=true;
  }

  function NoModifyTriggerTCPMsg(index)
  {
    modify_trigger_tcpMsg_modal=false;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].enable=BackupTriggerTCPMsg.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].delete=BackupTriggerTCPMsg.delete;    
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].aliasName=BackupTriggerTCPMsg.aliasName;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].remoteHost=BackupTriggerTCPMsg.remoteHost;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].remotePort=BackupTriggerTCPMsg.remotePort;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].receivedMessage=BackupTriggerTCPMsg.receivedMessage;
    
  }

  function ModifyTriggerTCPMsg()
  {
    modify_trigger_tcpMsg_modal=false;

  }


  let new_trigger_tcpMsg_modal=false;
  let new_trigger_tcpMsg_index;
  let NewTriggerTCPMsg=[
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  }
  ];


  function new_trigger_tcpmsg_trigger(index)
  {
      NewTriggerTCPMsg[index].enable=true;
      NewTriggerTCPMsg[index].delete=false;      
      NewTriggerTCPMsg[index].aliasName="";
      NewTriggerTCPMsg[index].remoteHost="";
      NewTriggerTCPMsg[index].remotePort=8000;
      NewTriggerTCPMsg[index].receivedMessage=1;

      new_trigger_tcpMsg_index=index;
      new_trigger_tcpMsg_modal=true;

  }


  function add_new_trigger_tcpmsg(index)
  {
      new_trigger_tcpMsg_modal=false;
      changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage=[...changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage,NewTriggerTCPMsg[index]];
  } 


  let modify_trigger_modbus_modal=false;
  let modify_trigger_modbus_index;
  let BackupTriggerModbus=
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  };

  function deleteTriggerModbus(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].delete=true;
  }

  function RestoreDeleteTriggerModbus(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].delete=false;
  }

  function TriggerModifyModbus(index)
  {
    BackupTriggerModbus.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].enable;
    BackupTriggerModbus.delete=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].delete;    
    BackupTriggerModbus.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].aliasName;
 
    BackupTriggerModbus.modbusDataModel=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].modbusDataModel;
    BackupTriggerModbus.dataType=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].dataType;

    BackupTriggerModbus.comparison=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].comparison;
    BackupTriggerModbus.comparisonValue=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].comparisonValue;

    modify_trigger_modbus_index=index;
    modify_trigger_modbus_modal=true;
  }

  function NoModifyTriggerModbus(index)
  {
    modify_trigger_modbus_modal=false;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].enable=BackupTriggerModbus.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].delete=BackupTriggerModbus.delete;    
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].aliasName=BackupTriggerModbus.aliasName;
 
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].modbusDataModel=BackupTriggerModbus.modbusDataModel;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].dataType=BackupTriggerModbus.dataType;

    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].comparison=BackupTriggerModbus.comparison;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].comparisonValue=BackupTriggerModbus.comparisonValue;
  }

  function ModifyTriggerModbus()
  {
    modify_trigger_modbus_modal=false;

  }

  let new_trigger_modbus_modal=false;
  let new_trigger_modbus_index;
  let NewTriggerModbus=[
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      modbusDataModel: "",
      dataType: 0, 
      comparison: 1,
      comparisonValue: 1
  }
  ];

  function new_trigger_modbus_trigger(index)
  {
      NewTriggerModbus[index].enable=true;
      NewTriggerModbus[index].delete=false;      
      NewTriggerModbus[index].aliasName="";
      NewTriggerModbus[index].modbusDataModel="";
      NewTriggerModbus[index].dataType=1;
      NewTriggerModbus[index].comparison=1;
      NewTriggerModbus[index].comparisonValue=1;
      new_trigger_modbus_index=index;
      new_trigger_modbus_modal=true;

  }


  function add_new_trigger_modbus(index)
  {
      new_trigger_modbus_modal=false;
      changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus=[...changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus,NewTriggerModbus[index]];
  }  


  let modify_trigger_di_modal=false;
  let modify_trigger_di_index;
  let BackupTriggerDI=
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  };


  function deleteTriggerDI(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].delete=true;
  }


  function RestoreDeleteTriggerDI(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].delete=false;
  }


  function TriggerModifyDI(index)
  {
    BackupTriggerDI.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].enable;
    BackupTriggerDI.delete=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].delete;    
    BackupTriggerDI.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].aliasName;
    BackupTriggerDI.type=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].type;
    BackupTriggerDI.debouncing.rateCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].debouncing.rateCount;   
    BackupTriggerDI.debouncing.interval=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].debouncing.interval;   
    BackupTriggerDI.duration=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].duration;    
    modify_trigger_di_index=index;
    modify_trigger_di_modal=true;

  }

  function NoModifyTriggerDI(index)
  {
    modify_trigger_di_modal=false;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].enable=BackupTriggerDI.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].delete=BackupTriggerDI.delete;    
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].aliasName=BackupTriggerDI.aliasName;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].type=BackupTriggerDI.type;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].debouncing.rateCount=BackupTriggerDI.debouncing.rateCount;   
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].debouncing.interval=BackupTriggerDI.debouncing.interval;   
    changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].duration=BackupTriggerDI.duration;    

  }

  function ModifyTriggerDI()
  {
    modify_trigger_di_modal=false;
  }

    

  let new_trigger_di_modal=false;
  let new_trigger_di_index;
  let NewTriggerDI=[
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  },
  {
      enable: false,
      delete: false,
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  }

  ];


  function new_trigger_di_trigger(index)
  {
      NewTriggerDI[index].enable=true;
      NewTriggerDI[index].delete=false;      
      NewTriggerDI[index].aliasName="";
      NewTriggerDI[index].type=0;
      NewTriggerDI[index].debouncing.rateCount=1;
      NewTriggerDI[index].debouncing.interval=1;
      NewTriggerDI[index].debouncing.duration=1;
      new_trigger_di_index=index;
      new_trigger_di_modal=true;

  }


  function add_new_trigger_di(index)
  {
      new_trigger_di_modal=false;
      changed_event_engine_data.config.service_eventEngine_triggerProfile.di=[...changed_event_engine_data.config.service_eventEngine_triggerProfile.di,NewTriggerDI[index]];
  }  


  let modify_trigger_sms_modal=false;
  let modify_trigger_sms_index;
  let BackupTriggerSMS=
  {
      enable: false,
      delete: false,
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
  };


  function deleteSMS(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].delete=true;
  }

  function RestoreDeleteSMS(index)
  {
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].delete=false;
  }


  function TriggerModifySMS(index)
  {
    BackupTriggerSMS.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].enable;
    BackupTriggerSMS.delete=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].delete;
    BackupTriggerSMS.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].aliasName;
    BackupTriggerSMS.smsPhoneNumber=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].smsPhoneNumber;
    BackupTriggerSMS.smsPhoneNumberSpecified=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].smsPhoneNumberSpecified;
    BackupTriggerSMS.smsContent=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].smsContent;
    modify_trigger_sms_index=index;
    modify_trigger_sms_modal=true;
  }


  function NoModifyTriggerSMS(index)
  {
    modify_trigger_sms_modal=false;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].enable=BackupTriggerSMS.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].delete=BackupTriggerSMS.delete;    
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].aliasName=BackupTriggerSMS.aliasName;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].smsPhoneNumber=BackupTriggerSMS.smsPhoneNumber;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].smsPhoneNumberSpecified=BackupTriggerSMS.smsPhoneNumberSpecified;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].smsContent=BackupTriggerSMS.smsContent;
  }


  function ModifyTriggerSMS()
  {
    modify_trigger_sms_modal=false;
  }

  let new_trigger_sms_modal=false;
  let new_trigger_sms_index;
  let NewTriggerSMS=[
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

  function new_trigger_sms_trigger(index)
  {
      NewTriggerSMS[index].enable=true;
      NewTriggerSMS[index].delete=false;      
      NewTriggerSMS[index].aliasName="";
      NewTriggerSMS[index].smsPhoneNumber=0;
      NewTriggerSMS[index].smsPhoneNumberSpecified="";
      NewTriggerSMS[index].smsContent="";

      new_trigger_sms_index=index;
      new_trigger_sms_modal=true;

  }


  function add_new_trigger_sms(index)
  {
      new_trigger_sms_modal=false;
      changed_event_engine_data.config.service_eventEngine_triggerProfile.sms=[...changed_event_engine_data.config.service_eventEngine_triggerProfile.sms,NewTriggerSMS[index]];
  }  





  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let tdClass = 'px-6 py-4 whitespace-nowrap font-light text-center';

  let trClass= 'noborder text-center bg-white dark:bg-gray-800 dark:border-gray-700';



  let formModalRule=false;
  let ruleitem=false;

  let currentStep = 1;
  let steps = ['Step 1', 'Step 2', 'Step 3'];
  let R_Name="sms_or_modbus_trigger_do";
  let R_DelayS=3;
  let R_Once_Repeat='once';
  let R_Repeat;
  let R_RepeatInterval;
 
  let R_TCount='2';
  let R_TMultipleRelation='OR';

  let Simulator_Rselected;
  let Simulator_Tselected;
  let Simulator_ContentValue;

  const ResetSimulator = () =>
  {
      Simulator_Rselected="";
      Simulator_Tselected="";
      Simulator_ContentValue="";
      finishSimulate=false;

  }

  const RefreshEventLog= ()=>
  {

  }


  let openDetailStatusMMS = false;
  let openDetailStatusMMT = false;
  let openDetailStatusMV = false;
  let openDetailStatusRule = false;
  let finishSimulate=false;


  let localList = [
    {value:"aws", name: "AWS"},
    {value:"azure", name: "Azure"},
    {value:"self", name: "selfSign"},
  ];

  function handleClickRule() {
        openDetailStatusRule=!openDetailStatusRule;
  }


  function handleClickMMS() {
        openDetailStatusMMS=!openDetailStatusMMS;
  }


  function handleClickMMT() {
        openDetailStatusMMT=!openDetailStatusMMT;
  }


  function handleClickMV() {
        openDetailStatusMV=!openDetailStatusMV;
  }


  function Simulate()
  {
    finishSimulate=true;
  }

  function Rule_Modal_Page1()
  {
    currentStep=1;
  }



  function Rule_Modal_Page2()
  {
    currentStep=2;
  }

  function Rule_Modal_Page3()
  {
    currentStep=3;
  }








  let items = [
    { tt: '2023/11/01 02:03:30', tc: 'SMS', tn: 'T_sms_', at: '2023/11/01 02:03:35', ac: 'Email', an: 'A_Email_' },
    { tt: '2023/11/01 02:03:35', tc: 'Modbus', tn: 'T_Modbus_', at: '2023/11/01 02:03:45', ac: 'DO', an: 'A_DO_'  },
    { tt: '2023/11/02 02:03:30', tc: 'DI', tn: 'T_DI_', at: '2023/11/02 02:03:35', ac: 'DO', an: 'A_DO_'  },
    { tt: '2023/11/02 02:03:40', tc: 'SMS', tn: 'T_sms_', at: '2023/11/02 02:03:45', ac: 'Email', an: 'A_Email_'  }
  ];







  const sortKey = writable('tt'); // default sort key
  const sortDirection = writable(-1); // default sort direction (ascending)
  const sortItems = writable(items.slice()); // make a copy of the items array

  // Define a function to sort the items
  const sortTable = (key) => {

    // If the same key is clicked, reverse the sort direction
    if ($sortKey === key) {
      sortDirection.update((val) => -val);
    } else {
      sortKey.set(key);
      sortDirection.set(-1);
    }
  };

  $: {
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


 </script>


<style>
 
.strikeout {
  text-decoration: line-through;
  color: #999; /* Adjust color for deleted text */
  position: relative;
}

.strikeout:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-bottom: 1px solid #111; /* Adjust strikeout line color */
  transform: translateY(-50%);
}

.strikeout:after {
  content: "\00B7"; /* Unicode dot character */
  font-size: 1px; /* Adjust dot size */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

</style>


 <Tabs style="underline">
   <TabItem open title="General">
<table>

    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">Event Engine</p></td>
<td class="pl-5 pt-5">
{#if getDataReady == 1}
<Toggle bind:checked={changed_event_engine_data.config.service_eventEngine_general.enable}></Toggle>
{/if}
</td>
<td></td>

    </tr>

</table>

<p class="pt-5"></p>


<table>
<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveGeneral}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>



   </TabItem>

<TabItem title="Trigger Profiles">

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SMS
    </span>



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">SMS Phone Number</TableHeadCell>
    <TableHeadCell class="w-18">SMS Content</TableHeadCell>
   

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.sms as TriggerSMS, index}

{#if TriggerSMS.delete}
 <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteSMS(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TriggerSMS.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerSMS.aliasName}</td>
{#if TriggerSMS.smsPhoneNumber == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Any</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerSMS.smsPhoneNumberSpecified}</td>
{/if}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerSMS.smsContent}</td>

      </tr>

{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifySMS(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteSMS(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={TriggerSMS.enable}>

    </TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerSMS.aliasName}</TableBodyCell>
{#if TriggerSMS.smsPhoneNumber == 0}
      <TableBodyCell class="w-18">Any</TableBodyCell>
{:else}
<TableBodyCell class="w-18">{TriggerSMS.smsPhoneNumberSpecified}</TableBodyCell>
{/if}

      <TableBodyCell class="w-18">{TriggerSMS.smsContent}</TableBodyCell>

    </TableBodyRow>
{/if}

{/each}
{/if}    
    <TableBodyRow>

{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length < 10}    
      <TableBodyCell class="!p-4 w-10">

<button on:click={() => new_trigger_sms_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length)}>

    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
</TableBodyCell>
{:else}
<TableBodyCell class="!p-4 w-16">
       </TableBodyCell>
{/if}

      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTriggerSMS}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

<Modal bind:open={new_trigger_sms_modal} size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewTriggerSMS[new_trigger_sms_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewTriggerSMS[new_trigger_sms_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Phone Number</p></td>

  <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
  <Radio bind:group={NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber} value={0} >Any</Radio>
  <Radio bind:group={NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber} value={1}>Specified:</Radio>

{#if NewTriggerSMS[new_trigger_sms_index].smsPhoneNumber == 0}
  <input type="text" bind:value={NewTriggerSMS[new_trigger_sms_index].smsPhoneNumberSpecified} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="text" bind:value={NewTriggerSMS[new_trigger_sms_index].smsPhoneNumberSpecified} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

</div></td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewTriggerSMS[new_trigger_sms_index].smsContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_trigger_sms(new_trigger_sms_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



<Modal bind:open={modify_trigger_sms_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTriggerSMS(modify_trigger_sms_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Phone Number</p></td>

  <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber} value={0} >Any</Radio>
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber} value={1}>Specified:</Radio>

{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumber == 0}
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumberSpecified} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsPhoneNumberSpecified} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

</div></td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[modify_trigger_sms_index].smsContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyTriggerSMS}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


  </TableBody>
</Table>


</AccordionItem>

{#if 0}
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DI
    </span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-36">Type</TableHeadCell>
    <TableHeadCell class="w-18">Debouncing</TableHeadCell>
    <TableHeadCell class="w-18">Duration</TableHeadCell>

  </TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.di as TriggerDI, index}

{#if TriggerDI.delete}

 <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteTriggerDI(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TriggerDI.enable} disabled>

      </td>


      </tr>


{:else}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyDI(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteTriggerDI(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={TriggerDI.enable}>
    </TableBodyCell>




      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerDI.aliasName}</TableBodyCell>
{#if TriggerDI.type == 0}      
      <TableBodyCell class="w-36">Level Trigger : High</TableBodyCell>
{:else if TriggerDI.type == 1}
      <TableBodyCell class="w-36">Level Trigger : Low</TableBodyCell>
{:else if TriggerDI.type == 2}
      <TableBodyCell class="w-36">Edge Trigger : High to Low</TableBodyCell>
{:else if TriggerDI.type == 3}
      <TableBodyCell class="w-36">Edge Trigger : Low to High</TableBodyCell>
{:else if TriggerDI.type == 4}
      <TableBodyCell class="w-36">Edge Trigger : Toggle</TableBodyCell>
{/if}
      <TableBodyCell class="w-18">{TriggerDI.debouncing.rateCount} X {TriggerDI.debouncing.interval}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerDI.duration} second(s)</TableBodyCell>
    </TableBodyRow>

{/if}

{/each}
{/if}

<TableBodyRow>

{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length <10}
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_trigger_di_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
{:else}
     <TableBodyCell class="!p-4 w-16"></TableBodyCell>

{/if}
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>



     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTriggerDI}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={new_trigger_di_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewTriggerDI[new_trigger_di_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewTriggerDI[new_trigger_di_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewTriggerDI[new_trigger_di_index].type} value={0} >Level Trigger : High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewTriggerDI[new_trigger_di_index].type} value={1} >Level Trigger : Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewTriggerDI[new_trigger_di_index].type} value={2} >Edge Trigger : High to Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewTriggerDI[new_trigger_di_index].type} value={3} >Edge Trigger : Low to High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewTriggerDI[new_trigger_di_index].type} value={4} >Edge Trigger : Toggle</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Debouncing</p></td>
      <td class="pl-5 pt-4">
 <FloatingLabelInput style="outlined" id="sampling_rate_count" name="sampling_rate_count" type="number" label="sampling_rate_count" bind:value={NewTriggerDI[new_trigger_di_index].debouncing.rateCount}>
    sampling_rate_count
  </FloatingLabelInput> 
  </td>
  <td class="pt-4" colspan="2"> <div class="flex gap-4"><p class="pl-2 pt-4">X</p> 
   
 <FloatingLabelInput style="outlined" id="interval" name="interval" type="number" label="interval(ms)" bind:value={NewTriggerDI[new_trigger_di_index].debouncing.interval}>
    interval(ms)
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Duration</p></td>
<td class="pl-5 pt-5">
{#if NewTriggerDI[new_trigger_di_index].type != 2 && NewTriggerDI[new_trigger_di_index].type != 3 && NewTriggerDI[new_trigger_di_index].type != 4}
<input type="number" bind:value={NewTriggerDI[new_trigger_di_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
<input type="number" bind:value={NewTriggerDI[new_trigger_di_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
{/if}
</td>
<td><p class="pl-2 pt-4 text-lg"> second(s)</p></td>


  </tr>





            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_trigger_di(new_trigger_di_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



<Modal bind:open={modify_trigger_di_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTriggerDI(modify_trigger_di_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type} value={0} >Level Trigger : High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type} value={1} >Level Trigger : Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type} value={2} >Edge Trigger : High to Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type} value={3} >Edge Trigger : Low to High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type} value={4} >Edge Trigger : Toggle</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Debouncing</p></td>
      <td class="pl-5 pt-4">
 <FloatingLabelInput style="outlined" id="sampling_rate_count" name="sampling_rate_count" type="number" label="sampling_rate_count" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].debouncing.rateCount}>
    sampling_rate_count
  </FloatingLabelInput> 
  </td>
  <td class="pt-4" colspan="2"> <div class="flex gap-4"><p class="pl-2 pt-4">X</p> 
   
 <FloatingLabelInput style="outlined" id="interval" name="interval" type="number" label="interval(ms)" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].debouncing.interval}>
    interval(ms)
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Duration</p></td>
<td class="pl-5 pt-5">
{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type != 2 && changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type != 3 && changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].type != 4}
<input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
<input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.di[modify_trigger_di_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
{/if}
</td>
<td><p class="pl-2 pt-4 text-lg"> second(s)</p></td>


  </tr>





            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyTriggerDI}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


  </TableBody>
</Table>




</AccordionItem>

{/if}


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Modbus
    </span>




 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Modbus Data Model</TableHeadCell>
    <TableHeadCell class="w-18">Data Type</TableHeadCell>
    <TableHeadCell class="w-18">Comparison</TableHeadCell>

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as TriggerModbus, index}
{#if TriggerModbus.delete}

  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteTriggerModbus(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"><input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TriggerModbus.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerModbus.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerModbus.modbusDataModel}</td>
{#if TriggerModbus.dataType==1}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Boolean</td>
{:else if TriggerModbus.dataType ==2}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Unsigned Short</td>
{:else if TriggerModbus.dataType ==3}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Signed
Short</td>
{:else if TriggerModbus.dataType ==4}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Unsigned Integer</td>
{:else if TriggerModbus.dataType ==5}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Signed Integer</td>
{:else if TriggerModbus.dataType ==6}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Float</td>
{:else if TriggerModbus.dataType ==7}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Double</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>

{/if}

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">
{#if TriggerModbus.comparison==1}
>
{:else if TriggerModbus.comparison==2}
{'<'}

{:else if TriggerModbus.comparison==3}
>=

{:else if TriggerModbus.comparison==4}
{'<'}=
{:else if TriggerModbus.comparison==5}
==
{:else if TriggerModbus.comparison==6}
!=
{/if}

      {TriggerModbus.comparisonValue}</td>
      </tr>
{:else}

    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyModbus(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteTriggerModbus(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={TriggerModbus.enable}>
    </TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerModbus.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerModbus.modbusDataModel}</TableBodyCell>
{#if TriggerModbus.dataType==1}
<TableBodyCell class="w-18">Boolean</TableBodyCell>
{:else if TriggerModbus.dataType ==2}
<TableBodyCell class="w-18">Unsigned Short</TableBodyCell>
{:else if TriggerModbus.dataType ==3}
<TableBodyCell class="w-18">Signed
Short</TableBodyCell>
{:else if TriggerModbus.dataType ==4}
<TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
{:else if TriggerModbus.dataType ==5}
<TableBodyCell class="w-18">Signed Integer</TableBodyCell>
{:else if TriggerModbus.dataType ==6}
<TableBodyCell class="w-18">Float</TableBodyCell>
{:else if TriggerModbus.dataType ==7}
<TableBodyCell class="w-18">Double</TableBodyCell>
{:else}
<TableBodyCell class="w-18"></TableBodyCell>

{/if}

      <TableBodyCell class="w-18">
{#if TriggerModbus.comparison==1}
>
{:else if TriggerModbus.comparison==2}
{'<'}

{:else if TriggerModbus.comparison==3}
>=

{:else if TriggerModbus.comparison==4}
{'<'}=
{:else if TriggerModbus.comparison==5}
==
{:else if TriggerModbus.comparison==6}
!=
{/if}

      {TriggerModbus.comparisonValue}</TableBodyCell>

    </TableBodyRow>

{/if}

{/each}
{/if}

  <TableBodyRow>

{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length < 10}

 <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_trigger_modbus_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>

{:else}
 <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}

      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>

    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>

     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTriggerModbus}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>


    <Modal bind:open={new_trigger_modbus_modal} size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewTriggerModbus[new_trigger_modbus_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewTriggerModbus[new_trigger_modbus_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Data Model</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewTriggerModbus[new_trigger_modbus_index].modbusDataModel}>
<option disabled="" value="">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master as MasterDataModel, index}
<option value={MasterDataModel.dataModelName}>{MasterDataModel.dataModelName}</option>
{/each}
{/if}
</select>
    </td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Type</p>

  </td>

    <td class="pl-4 pt-4"><div>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].dataType} value={1} >Boolean</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].dataType} value={2} >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].dataType} value={3} >Signed Short</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].dataType} value={4} >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].dataType} value={5} >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].dataType} value={6} >Float</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].dataType} value={7} >Double</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Comparison</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewTriggerModbus[new_trigger_modbus_index].comparison}>
<option disabled="" value="none">Choose ...</option>

<option value={1}>></option>
<option value={2}>{'<'}</option>
<option value={3}>>=</option>
<option value={4}>{'<'}=</option>
<option value={5}>=</option>
<option value={6}>!=</option>
</select>

   
 <FloatingLabelInput style="outlined" id="compared_value" name="compared_value" type="number" label="compared_value" bind:value={NewTriggerModbus[new_trigger_modbus_index].comparisonValue}>
    
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>



            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_trigger_modbus(new_trigger_modbus_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>

    <Modal bind:open={modify_trigger_modbus_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTriggerModbus(modify_trigger_modbus_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Data Model</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].modbusDataModel}>
<option disabled="" value="">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master as MasterDataModel, index}
<option value={MasterDataModel.dataModelName}>{MasterDataModel.dataModelName}</option>
{/each}
{/if}
</select>


    

    </td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Type</p>

  </td>

    <td class="pl-4 pt-4"><div>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].dataType} value={1} >Boolean</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].dataType} value={2} >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].dataType} value={3} >Signed Short</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].dataType} value={4} >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].dataType} value={5} >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].dataType} value={6} >Float</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].dataType} value={7} >Double</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Comparison</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].comparison}>
<option disabled="" value="none">Choose ...</option>

<option value={1}>></option>
<option value={2}>{'<'}</option>
<option value={3}>>=</option>
<option value={4}>{'<'}=</option>
<option value={5}>=</option>
<option value={6}>!=</option>
</select>

   
 <FloatingLabelInput style="outlined" id="compared_value" name="compared_value" type="number" label="compared_value" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].comparisonValue}>
    
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>



            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyTriggerModbus}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>

<p class="mt-8"></p>

<Table shadow striped={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Data Model
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus data model. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
<TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-2">No</TableHeadCell>
    <TableHeadCell class="">Data Model Name</TableHeadCell>
    <TableHeadCell class="w-18">Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master as DataModelMasterItem, index}
   

 <TableBodyRow>



    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={DataModelMasterItem.enable} class="disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300" disabled>
    </TableBodyCell>

      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="w-18">{DataModelMasterItem.dataModelName}</TableBodyCell>
  <TableBodyCell class="w-10">{DataModelMasterItem.profile}</TableBodyCell>
  <TableBodyCell class="w-18">{DataModelMasterItem.slaveId}</TableBodyCell>
{#if DataModelMasterItem.pointType == 0}
    <TableBodyCell class="w-10">Coil</TableBodyCell>
{:else if DataModelMasterItem.pointType == 1}
    <TableBodyCell class="w-10">Discrete Input</TableBodyCell>
{:else if DataModelMasterItem.pointType == 2}
    <TableBodyCell class="w-10">Input Registers</TableBodyCell>
{:else if DataModelMasterItem.pointType == 3}
    <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell class="w-10"></TableBodyCell>
{/if}
  <TableBodyCell class="w-18">{DataModelMasterItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{DataModelMasterItem.quantity}</TableBodyCell>
  <TableBodyCell class="w-18">{DataModelMasterItem.responseTimeout} ms</TableBodyCell>
<TableBodyCell class="w-18">{DataModelMasterItem.pollingRate} ms</TableBodyCell>
    <TableBodyCell class="w-18">{DataModelMasterItem.delayBetweenPolls} ms</TableBodyCell>

{#if DataModelMasterItem.byteOrder==0} 
    <TableBodyCell class="w-18">Big Endian</TableBodyCell>
{:else if DataModelMasterItem.byteOrder==1}   
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
{:else if DataModelMasterItem.byteOrder==2}
    <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
{:else if DataModelMasterItem.byteOrder==3}
        <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell class="w-18"></TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}

  </TableBody>
      {/if}
</Table>   

<p class="mt-4"></p>

<Table shadow striped={true}>


  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p>
  </caption>


{#if openDetailStatusMMS}

  <TableHead>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>     
  </TableHead>
  <TableBody>




{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RTUMasterItem, index}

    <TableBodyRow>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={RTUMasterItem.enable} class="disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300" disabled>
    </TableBodyCell>


      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUMasterItem.serialProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>      
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell> 
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>      
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>       
    </TableBodyRow>

{/each}
{/if}

  

  </TableBody>
  {/if}
</Table>

<p class="mt-4"></p>

<Table shadow striped={true} >

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
     <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">LAN Profile</TableHeadCell>   
    <TableHeadCell class="w-10">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell class="w-10">Remote Port</TableHeadCell>
    <TableHeadCell class="w-10">Connection Timeout</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>  
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell> 
  </TableHead>
  <TableBody>


{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TCPMasterItem, index}
   
    <TableBodyRow>



    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={TCPMasterItem.enable} class="disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300" disabled>
    </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.lanProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.remoteServerIp}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.remotePort}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.connectionTimeout} ms</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>       
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell> 
    </TableBodyRow>
{/each}
{/if}



  </TableBody>
    {/if}
</Table>




</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    TCP Message
    </span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Received Message</TableHeadCell>


  </TableHead>


   <TableBody>
   

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage as TriggerTCPMsg, index}

{#if TriggerTCPMsg.delete}
  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteTriggerTCPMsg(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TriggerTCPMsg.enable} disabled>

      </td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerTCPMsg.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerTCPMsg.remoteHost}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerTCPMsg.remotePort}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TriggerTCPMsg.receivedMessage}</td>
      </tr>

{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyTCPMsg(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteTCPMsg(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
      </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={TriggerTCPMsg.enable}>
    </TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.remoteHost}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.remotePort}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.receivedMessage}</TableBodyCell>

    </TableBodyRow>

{/if}

{/each}
{/if}

    <TableBodyRow>
{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length < 10}
    <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_trigger_tcpmsg_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
</TableBodyCell>

{:else}
    <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}


      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTriggerTCPMsg}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

<Modal bind:open={new_trigger_tcpMsg_modal}  size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewTriggerTCPMsg[new_trigger_tcpMsg_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewTriggerTCPMsg[new_trigger_tcpMsg_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewTriggerTCPMsg[new_trigger_tcpMsg_index].remoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td>

  <td class="pl-5 pt-4">
  <input type="number" bind:value={NewTriggerTCPMsg[new_trigger_tcpMsg_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Received Message</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewTriggerTCPMsg[new_trigger_tcpMsg_index].receivedMessage} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_trigger_tcpmsg(new_trigger_tcpMsg_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={modify_trigger_tcpMsg_modal}  size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTriggerTCPMsg(modify_trigger_tcpMsg_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].remoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td>

  <td class="pl-5 pt-4">
  <input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Received Message</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[modify_trigger_tcpMsg_index].receivedMessage} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyTriggerTCPMsg}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


</TableBody>

  </Table>



</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    MQTT Notification
    </span>



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">MQTT Profile</TableHeadCell>
    <TableHeadCell class="w-18">Subscribed Topic</TableHeadCell>
    <TableHeadCell class="w-18">Received Content</TableHeadCell>


  </TableHead>

   <TableBody>
{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification as MQTT, index}

{#if MQTT.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteMQTTN(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={MQTT.enable} disabled>

      </td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.aliasName}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.mqttProfile}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.subscribedTopic}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.receivedContent}</td>


      </tr>

{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyMQTTN(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteMQTTN(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={MQTT.enable}>
    </TableBodyCell>

      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.mqttProfile}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.subscribedTopic}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.receivedContent}</TableBodyCell>


    </TableBodyRow>
{/if}

{/each}
{/if}


    <TableBodyRow>
{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length < 10}
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_trigger_mqtt_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
{:else}
<TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}       
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTriggerMQTT}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

<Modal bind:open={new_trigger_mqtt_modal}  size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewTriggerMQTT[new_trigger_mqtt_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewTriggerMQTT[new_trigger_mqtt_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MQTT Profile</p></td>

  <td class="pl-5 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={NewTriggerMQTT[new_trigger_mqtt_index].mqttProfile}>
<option disabled="" value="none">Choose Profile ...</option>
{#each CloudProfile as profile, index}
<option value={profile.value}>{profile.name}</option>
{/each}
</select>

</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Subscribed Topic</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewTriggerMQTT[new_trigger_mqtt_index].subscribedTopic} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Received Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewTriggerMQTT[new_trigger_mqtt_index].receivedContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_trigger_mqtt(new_trigger_mqtt_index)}>Add</Button></td>


    </tr>

  </table>
</form>
</Modal>




<Modal bind:open={modify_trigger_mqtt_modal}  size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTriggerMQTTN(modify_trigger_mqtt_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MQTT Profile</p></td>

  <td class="pl-5 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].mqttProfile}>
<option disabled="" value="none">Choose Profile ...</option>
{#each CloudProfile as profile, index}
<option value={profile.value}>{profile.name}</option>
{/each}
</select>


</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Subscribed Topic</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].subscribedTopic} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Received Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].receivedContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyTriggerMQTTN}>Modify</Button></td>


    </tr>

  </table>
</form>
</Modal>


</TableBody>

  </Table>


</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    PING
    </span>




 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-36">Trigger Type</TableHeadCell>
    <TableHeadCell class="w-36">Option</TableHeadCell>
  </TableHead>

   <TableBody>
{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.ping as PING, index}

{#if PING.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeletePING(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={PING.enable} disabled>

      </td>

      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{PING.aliasName}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{PING.remoteHost}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-36 strikeout">
{#if PING.pingResult == 0}Failed{:else if PING.pingResult == 1}Successfully{:else}Unknown{/if} {#if PING.ResultOption ==0} Once{:else if PING.ResultOption ==1} repeatedly {PING.ResultContinuousCount} times{:else} Unknown{/if}
</td>


  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-36 strikeout">{PING.RepeatDelaySec}-second delay repeatedly ping after trigger</td>


      </tr>

{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyPING(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deletePING(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={PING.enable}>
    </TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{PING.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{PING.remoteHost}</TableBodyCell>

<TableBodyCell class="w-36">
{#if PING.pingResult == 0}Failed{:else if PING.pingResult == 1}Successfully{:else}Unknown{/if} {#if PING.ResultOption ==0} Once{:else if PING.ResultOption ==1} repeatedly {PING.ResultContinuousCount} times{:else} Unknown{/if}

</TableBodyCell>


      <TableBodyCell class="w-36">{PING.RepeatDelaySec}-second delay repeatedly ping after trigger</TableBodyCell>

    </TableBodyRow>

{/if}


{/each}
{/if}


    <TableBodyRow>


{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length < 10 }
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_trigger_ping_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.ping.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>

{:else}       
    <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}


      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTriggerPING}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>





<Modal bind:open={new_trigger_ping_modal}  size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewTriggerPING[new_trigger_ping_index].enable}>
{/if}
  Enable
</label>

<p class="mt-5"></p>

<table>


<tr>
      <td class="pl-5 pt-5"><p class="pl-5 pt-1 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewTriggerPING[new_trigger_ping_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td class="pl-5 pt-5"><p class="pl-5 pt-1 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewTriggerPING[new_trigger_ping_index].remoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td class="pl-5 pt-2"><p class="pl-5 pt-1 text-lg font-light text-right">Trigger Type</p></td>

  <td class="pl-5 pt-5" colspan="4">
<div class="flex gap-1">
  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-36" bind:value={NewTriggerPING[new_trigger_ping_index].pingResult}>
<option disabled="" value="">Choose One ...</option>

<option value={0}>Failed</option>
<option value={1}>Successfully</option>
</select>




  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-40" bind:value={NewTriggerPING[new_trigger_ping_index].ResultOption}>
<option disabled="" value="">Choose One ...</option>

<option value={0}>Once</option>
<option value={1}>Repeat</option>
</select>



{#if NewTriggerPING[new_trigger_ping_index].ResultOption ==1}
<input type="number" bind:value={NewTriggerPING[new_trigger_ping_index].ResultContinuousCount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-2 mb-4">
<p class="pt-5"> times</p>
{/if}
</div>
</td>

  </tr>



<tr>
      <td class="pl-5 pt-1"><p class="pl-5 pt-1 text-lg font-light text-right">Option</p></td>

  <td class="pl-5 pt-3" colspan="4">

<div class="flex gap-2">

<input type="number" bind:value={NewTriggerPING[new_trigger_ping_index].RepeatDelaySec} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-0 mb-0"> <p class="pt-3">second-delay repeatedly ping after trigger</p>


</div>
</td>
</tr>


    <tr>
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
    <td></td>

    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_trigger_ping(new_trigger_ping_index)}>Add</Button></td>


    </tr>

  </table>
</form>
</Modal>




<Modal bind:open={modify_trigger_ping_modal}  size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTriggerPING(modify_trigger_ping_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>




<table>


<tr>
      <td class="pl-5 pt-5"><p class="pl-5 pt-1 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td class="pl-5 pt-5"><p class="pl-5 pt-1 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].remoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td class="pl-5 pt-2"><p class="pl-5 pt-1 text-lg font-light text-right">Trigger Type</p></td>

  <td class="pl-5 pt-5" colspan="4">
<div class="flex gap-1">
  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-36" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].pingResult}>
<option disabled="" value="">Choose One ...</option>

<option value={0}>Failed</option>
<option value={1}>Successfully</option>
</select>




  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-40" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].ResultOption}>
<option disabled="" value="">Choose One ...</option>

<option value={0}>Once</option>
<option value={1}>Repeat</option>
</select>



{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].ResultOption ==1}
<input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].ResultContinuousCount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-2 mb-4">
<p class="pt-5"> times</p>
{/if}
</div>
</td>

  </tr>



<tr>
      <td class="pl-5 pt-1"><p class="pl-5 pt-1 text-lg font-light text-right">Option</p></td>

  <td class="pl-5 pt-3" colspan="4">

<div class="flex gap-2">

<input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.ping[modify_trigger_ping_index].RepeatDelaySec} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 mt-0 mb-0"> <p class="pt-3">second-delay repeatedly ping after trigger</p>


</div>
</td>
</tr>


    <tr>
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
    <td></td>

    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyTriggerPING}>Modify</Button></td>


    </tr>

  </table>

</form>
</Modal>



</TableBody>

  </Table>

</AccordionItem>


 <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    RSSI
    </span>




 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-36">Warning Scheme</TableHeadCell>
    <TableHeadCell class="w-36"></TableHeadCell>
  </TableHead>

   <TableBody>
{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi as RSSI, index}

{#if RSSI.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteRSSI(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={RSSI.enable} disabled>

      </td>


      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{RSSI.aliasName}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-36 strikeout">
{#if RSSI.comparision ==0}{'<'}= {:else if RSSI.comparision==1}>= {/if} {#if RSSI.comparedSelected==0}10 (L){:else if RSSI.comparedSelected==1}15 (M){:else if RSSI.comparedSelected==2}25 (H){:else if RSSI.comparedSelected==3} {RSSI.comparedUserDefinedValue}{/if}

</td>

      </tr>

{:else}
    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyRSSI(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteRSSI(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={RSSI.enable}>
    </TableBodyCell>

      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{RSSI.aliasName}</TableBodyCell>

<TableBodyCell class="w-36">
{#if RSSI.comparision ==0}{'<'}= {:else if RSSI.comparision==1}>= {/if} {#if RSSI.comparedSelected==0}10 (L){:else if RSSI.comparedSelected==1}15 (M){:else if RSSI.comparedSelected==2}25 (H){:else if RSSI.comparedSelected==3} {RSSI.comparedUserDefinedValue}{/if}

</TableBodyCell>


    </TableBodyRow>

{/if}

{/each}
{/if}


    <TableBodyRow>
{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length < 10 }
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_trigger_rssi_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
{:else}

      <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}

      <TableBodyCell class="!p-0"></TableBodyCell>
      <TableBodyCell class="!p-0"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveTriggerRSSI}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>





<Modal bind:open={new_trigger_rssi_modal}  size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox" bind:checked={NewTriggerRSSI[new_trigger_rssi_index].enable}>
{/if}
  Enable
</label>

<p class="mt-5"></p>

<table>


<tr>
      <td class="pl-5 pt-5"><p class="pl-5 pt-1 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500" bind:value={NewTriggerRSSI[new_trigger_rssi_index].aliasName}></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Warning Scheme</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-24" bind:value={NewTriggerRSSI[new_trigger_rssi_index].comparision}>
<option disabled="" value="none">Choose...</option>

<option value={0}>{'<'}=</option>
<option value={1}>>=</option>

</select>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-32" bind:value={NewTriggerRSSI[new_trigger_rssi_index].comparedSelected}>
<option disabled="" value="none">Choose...</option>

<option value={0}>L-10</option>
<option value={1}>M-15</option>
<option value={2}>H-25</option>
<option value={3}>User Defined</option>

</select>


{#if NewTriggerRSSI[new_trigger_rssi_index].comparedSelected == 3}
<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 mt-2 mb-4 dark:bg-gray-700 dark:border-green-500" bind:value={NewTriggerRSSI[new_trigger_rssi_index].comparedUserDefinedValue}>
{/if}
  </div>
  </td>


 <td class= "pl-4 pt-4">



 </td>

  </tr>





    <tr>
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
    <td></td>

    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_trigger_rssi(new_trigger_rssi_index)}>Add</Button></td>


    </tr>

  </table>
</form>
</Modal>




<Modal bind:open={modify_trigger_rssi_modal}  size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox" bind:checked={changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTriggerRSSI(modify_trigger_rssi_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td class="pl-5 pt-5"><p class="pl-5 pt-1 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].aliasName}></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Warning Scheme</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-24" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].comparision}>
<option disabled="" value="none">Choose...</option>

<option value={0}>{'<'}=</option>
<option value={1}>>=</option>

</select>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-32" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].comparedSelected}>
<option disabled="" value="none">Choose...</option>

<option value={0}>L-10</option>
<option value={1}>M-15</option>
<option value={2}>H-25</option>
<option value={3}>User Defined</option>

</select>


{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].comparedSelected == 3}
<input type="number" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 mt-2 mb-4 dark:bg-gray-700 dark:border-green-500" bind:value={changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi[modify_trigger_rssi_index].comparedUserDefinedValue}>
{/if}
  </div>
  </td>


 <td class= "pl-4 pt-4">



 </td>

  </tr>





    <tr>
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
    <td></td>

    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyTriggerRSSI}>Modify</Button></td>


    </tr>

  </table>
</form>
</Modal>



</TableBody>

  </Table>

</AccordionItem>
</Accordion>

</TabItem>


<TabItem title="Action Profiles">

<Accordion>
<AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    SMS
    </span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">SMS Phone Number</TableHeadCell>
    <TableHeadCell class="w-18">SMS Content</TableHeadCell>
   

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.sms as ActionSMS, index}
{#if ActionSMS.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteActionSMS(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={ActionSMS.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{ActionSMS.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{ActionSMS.smsPhoneNumber}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{ActionSMS.smsContent}</td>
      </tr>

{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyActionSMS(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteActionSMS(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={ActionSMS.enable}>
    </TableBodyCell>

      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionSMS.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionSMS.smsPhoneNumber}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionSMS.smsContent}</TableBodyCell>

    </TableBodyRow>

{/if}

{/each}
{/if}
    <TableBodyRow>
{#if getDataReady == 1}
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.sms.length < 10}
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_action_sms_trigger(changed_event_engine_data.config.service_eventEngine_actionProfile.sms.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
{:else}
    <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}
{/if}

      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveActionSMS}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={new_action_sms_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewActionSMS[new_action_sms_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>
<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewActionSMS[new_action_sms_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Phone Number</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewActionSMS[new_action_sms_index].smsPhoneNumber} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewActionSMS[new_action_sms_index].smsContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_action_sms(new_action_sms_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={modify_action_sms_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionSMS(modify_action_sms_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Phone Number</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsPhoneNumber} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.sms[modify_action_sms_index].smsContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyActionSMS}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


  </TableBody>
</Table>



</AccordionItem>

<AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Email
    </span>

 <Table shadow striped={true} tableNoWFull={true}>

<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    SMTP Server
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please edit the smtp server first.</p>
  </caption>

  <TableHead>

        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">SMTP Server IP</TableHeadCell>
    <TableHeadCell class="w-18">Port</TableHeadCell>
        <TableHeadCell class="w-18">TLS</TableHeadCell>
    <TableHeadCell class="w-18">Account</TableHeadCell>


  </TableHead>
 <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer as ActionEmailSMTP, index}

    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyActionEmailSMTP(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableBodyCell class="w-10">{ActionEmailSMTP.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionEmailSMTP.smtpServerIp}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionEmailSMTP.port}</TableBodyCell>
{#if ActionEmailSMTP.tls}
      <TableBodyCell class="w-18">Yes</TableBodyCell>
{:else}
      <TableBodyCell class="w-18">No</TableBodyCell>
{/if}
      <TableBodyCell class="w-18">{ActionEmailSMTP.account}</TableBodyCell>

    </TableBodyRow>

{/each}
{/if}

    </TableBody>
</Table>
<p class="mt-4">


 <Table shadow striped={true} tableNoWFull={true}>

<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    Remote Email Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please edit the remote email profile.</p>
  </caption>

  <TableHead>

        <TableHeadCell class="!p-4">
    </TableHeadCell>
            <TableHeadCell class="!p-4">
    </TableHeadCell>
            <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-18">Enable</TableHeadCell>
    <TableHeadCell class="w-18">No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Email</TableHeadCell>
    <TableHeadCell class="w-18">Email Content</TableHeadCell>

  </TableHead>
 <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile as ActionEmailRemote, index}

{#if ActionEmailRemote.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteActionEmail(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={ActionEmailRemote.enable} disabled>
</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{ActionEmailRemote.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{ActionEmailRemote.remoteEmail}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{ActionEmailRemote.emailContent}</td>

      </tr>

{:else}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyActionEmailRemote(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteActionEmail(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={ActionEmailRemote.enable}>
    </TableBodyCell>


      <TableBodyCell class="w-18">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionEmailRemote.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionEmailRemote.remoteEmail}</TableBodyCell>
      <TableBodyCell class="w-18">{ActionEmailRemote.emailContent}</TableBodyCell>

    </TableBodyRow>

{/if}

{/each}
{/if}


<TableBodyRow>


{#if getDataReady == 1}      
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length < 10}
            <TableBodyCell class="!p-4 w-10">
      <button on:click={() => new_action_email_remote_trigger(changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile.length)}>
      <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
      </TableBodyCell> 
{:else}      
      <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}
{/if}

      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>


<tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveActionEmail}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

<Modal bind:open={new_action_email_remote_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewActionEmailRemote[new_action_email_remote_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewActionEmailRemote[new_action_email_remote_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Email</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewActionEmailRemote[new_action_email_remote_index].remoteEmail} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Email Content</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewActionEmailRemote[new_action_email_remote_index].emailContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  </td>
</tr>



    <tr>
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
    <td class="pl-20"><Button color="dark" pill={true} on:click={add_new_action_email_remote(new_action_email_remote_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<Modal bind:open={modify_action_email_remote_modal}  size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[modify_action_email_remote_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionEmailRemote(modify_action_email_remote_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[modify_action_email_remote_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Email</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[modify_action_email_remote_index].remoteEmail} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Email Content</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile[modify_action_email_remote_index].emailContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  </td>
</tr>



    <tr>
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
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyActionEmailRemote}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>



<Modal bind:open={modify_action_email_smtp_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionEmailSMTP(modify_action_email_smtp_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMTP Server IP</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].smtpServerIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">TLS</p></td>

  <td class="pl-5 pt-4">
  <div class="flex gap-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls} value={1}>Yes</Radio>
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls} value={0}>No</Radio>

  </div>

  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server CA Certificate</p></td>
    <td class= "pl-4 pt-4">
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls ==1}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].serverCaCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>
{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].serverCaCert} disabled>
</select>
{/if}


    </td>


</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Certificate</p></td>
    <td class= "pl-4 pt-4">

{#if changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].tls ==1}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].clientCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>
{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].clientCert} disabled>
</select>
{/if}



    </td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.email.smtpServer[modify_action_email_smtp_index].password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  </td>
</tr>





    <tr>
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
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyActionEmailSMTP}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>




    </TableBody>
</Table>


</AccordionItem>

<AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DO
    </span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell> 
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Type</TableHeadCell>
    <TableHeadCell class="w-18">Duration</TableHeadCell>

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.do as DO, index}

{#if DO.delete} 


<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteActionDO(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={DO.enable} disabled>

      </td>


      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{DO.aliasName}</td>
{#if DO.type == 0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Pulse : One Shot High</td>
{:else if DO.type == 1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Pulse : One Shot Low</td>
{:else if DO.type == 2}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">DO : On</td>
{:else if DO.type == 3}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">DO : Off</td>
{:else}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>
{/if}

{#if DO.type ==0 || DO.type ==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{DO.duration} second(s)</td>
{/if}

      </tr>

{:else}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyActionDO(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteActionDO(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={DO.enable}>
    </TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{DO.aliasName}</TableBodyCell>
{#if DO.type == 0}
      <TableBodyCell class="w-18">Pulse : One Shot High</TableBodyCell>
{:else if DO.type == 1}
      <TableBodyCell class="w-18">Pulse : One Shot Low</TableBodyCell>
{:else if DO.type == 2}
      <TableBodyCell class="w-18">DO : On</TableBodyCell>
{:else if DO.type == 3}
      <TableBodyCell class="w-18">DO : Off</TableBodyCell>
{:else}
      <TableBodyCell class="w-18"></TableBodyCell>
{/if}

{#if DO.type ==0 || DO.type ==1}
      <TableBodyCell class="w-18">{DO.duration} second(s)</TableBodyCell>
{/if}

    </TableBodyRow>

{/if}

{/each}
{/if}


<TableBodyRow>
{#if getDataReady == 1} 
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.do.length < 10} 
      <TableBodyCell class="!p-4 w-10"> 
<button on:click={() => new_action_do_trigger(changed_event_engine_data.config.service_eventEngine_actionProfile.do.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
{:else}
      <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}
{/if}


      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>


    </TableBodyRow>



     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveActionDO}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={new_action_do_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewActionDO[new_action_do_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>


<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewActionDO[new_action_do_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewActionDO[new_action_do_index].type} value={0} >Pulse : One Shot High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewActionDO[new_action_do_index].type} value={1} >Pulse : One Shot Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewActionDO[new_action_do_index].type} value={2} >DO : On</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={NewActionDO[new_action_do_index].type} value={3} >DO : Off</Radio>
  </td>
</tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Duration</p></td>
<td class="pl-5 pt-5">

{#if NewActionDO[new_action_do_index].type == 0 || NewActionDO[new_action_do_index].type==1}
<input type="number" bind:value={NewActionDO[new_action_do_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
<input type="number" bind:value={NewActionDO[new_action_do_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{/if}
</td>
<td><p class="pl-2 pt-4 text-lg"> second(s)</p></td>


  </tr>





            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_action_do(new_action_do_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



<Modal bind:open={modify_action_do_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionDO(modify_action_do_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type} value={0} >Pulse : One Shot High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type} value={1} >Pulse : One Shot Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type} value={2} >DO : On</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type} value={3} >DO : Off</Radio>
  </td>
</tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Duration</p></td>
<td class="pl-5 pt-5">

{#if changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type == 0 || changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].type == 1}
<input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
<input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.do[modify_action_do_index].duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}
</td>
<td><p class="pl-2 pt-4 text-lg"> second(s)</p></td>


  </tr>





            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyActionDO}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>

  </TableBody>
</Table>

</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Modbus
    </span>




 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Modbus Data Model</TableHeadCell>
    <TableHeadCell class="w-18">Data Type</TableHeadCell>
    <TableHeadCell class="w-18">Assignment</TableHeadCell>

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.modbus as Modbus, index}
  
{#if Modbus.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteActionModbus(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={Modbus.enable} disabled>

      </td>



<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{Modbus.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{Modbus.modbusDataModel}</td>
{#if Modbus.dataType==1}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Boolean</td>
{:else if Modbus.dataType ==2}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Unsigned Short</td>
{:else if Modbus.dataType ==3}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Signed
Short</td>
{:else if Modbus.dataType ==4}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Unsigned Integer</td>
{:else if Modbus.dataType ==5}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Signed Integer</td>
{:else if Modbus.dataType ==6}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Float</td>
{:else if Modbus.dataType ==7}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Double</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>

{/if}


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{Modbus.assignment}</td>


</tr>
{:else}
<TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyActionModbus(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteActionModbus(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={Modbus.enable}>
    </TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>

      <TableBodyCell class="w-18">{Modbus.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{Modbus.modbusDataModel}</TableBodyCell>
{#if Modbus.dataType==1}
<TableBodyCell class="w-18">Boolean</TableBodyCell>
{:else if Modbus.dataType ==2}
<TableBodyCell class="w-18">Unsigned Short</TableBodyCell>
{:else if Modbus.dataType ==3}
<TableBodyCell class="w-18">Signed
Short</TableBodyCell>
{:else if Modbus.dataType ==4}
<TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
{:else if Modbus.dataType ==5}
<TableBodyCell class="w-18">Signed Integer</TableBodyCell>
{:else if Modbus.dataType ==6}
<TableBodyCell class="w-18">Float</TableBodyCell>
{:else if Modbus.dataType ==7}
<TableBodyCell class="w-18">Double</TableBodyCell>
{:else}
<TableBodyCell class="w-18"></TableBodyCell>

{/if}


      <TableBodyCell class="w-18">{Modbus.assignment}</TableBodyCell>

</TableBodyRow>

{/if}

{/each}
{/if}



  <TableBodyRow>

{#if getDataReady == 1}
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length < 10}
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_action_modbus_trigger(changed_event_engine_data.config.service_eventEngine_actionProfile.modbus.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

    <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
    </svg>
</button>
 </TableBodyCell>
{:else}
 <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}
{/if}

      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>


     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveActionModbus}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>




  </TableBody>
</Table>


    <Modal bind:open={new_action_modbus_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewActionModbus[new_action_modbus_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewActionModbus[new_action_modbus_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Data Model</p></td>
    <td class= "pl-4 pt-4">


    <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewActionModbus[new_action_modbus_index].modbusDataModel}>
<option disabled="" value="">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master as MasterDataModel, index}
<option value={MasterDataModel.dataModelName}>{MasterDataModel.dataModelName}</option>
{/each}
{/if}
</select>
    

    </td>


</tr>

<tr>

  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Type</p>

  </td>

    <td class="pl-4 pt-4" colspan=""><div>
  <Radio class="pb-2" bind:group={NewActionModbus[new_action_modbus_index].dataType} value={1} >Boolean</Radio>
  <Radio class="pb-2" bind:group={NewActionModbus[new_action_modbus_index].dataType} value={2} >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={NewActionModbus[new_action_modbus_index].dataType} value={3} >Signed Short</Radio>
  <Radio class="pb-2" bind:group={NewActionModbus[new_action_modbus_index].dataType} value={4} >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={NewActionModbus[new_action_modbus_index].dataType} value={5} >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={NewActionModbus[new_action_modbus_index].dataType} value={6} >Float</Radio>
  <Radio class="pb-2" bind:group={NewActionModbus[new_action_modbus_index].dataType} value={7} >Double</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Assignment</p></td>
<td class="pl-5 pt-5">
<input type="number" bind:value={NewActionModbus[new_action_modbus_index].assignment} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_action_modbus(new_action_modbus_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


    <Modal bind:open={modify_action_modbus_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionModbus(modify_action_modbus_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Data Model</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].modbusDataModel}>
<option disabled="" value="">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master as MasterDataModel, index}
<option value={MasterDataModel.dataModelName}>{MasterDataModel.dataModelName}</option>
{/each}
{/if}
</select>
    </td>


</tr>

<tr>

  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Type</p>

  </td>

    <td class="pl-4 pt-4" colspan=""><div>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].dataType} value={1} >Boolean</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].dataType} value={2} >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].dataType} value={3} >Signed Short</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].dataType} value={4} >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].dataType} value={5} >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].dataType} value={6} >Float</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].dataType} value={7} >Double</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Assignment</p></td>
<td class="pl-5 pt-5">
<input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.modbus[modify_action_modbus_index].assignment} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
            <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyActionModbus}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


<p class="mt-8">

<Table shadow striped={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Data Model
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus data model. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
<TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-2">No</TableHeadCell>
    <TableHeadCell class="">Data Model Name</TableHeadCell>
    <TableHeadCell class="w-18">Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_data_model.master as DataModelMasterItem, index}
   

 <TableBodyRow>


    <TableBodyCell class="w-2">
<input type="checkbox"  bind:checked={DataModelMasterItem.enable} class="disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300" disabled>
    </TableBodyCell>


      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="w-18">{DataModelMasterItem.dataModelName}</TableBodyCell>
  <TableBodyCell class="w-10">{DataModelMasterItem.profile}</TableBodyCell>
  <TableBodyCell class="w-18">{DataModelMasterItem.slaveId}</TableBodyCell>
{#if DataModelMasterItem.pointType == 0}
    <TableBodyCell class="w-10">Coil</TableBodyCell>
{:else if DataModelMasterItem.pointType == 1}
    <TableBodyCell class="w-10">Discrete Input</TableBodyCell>
{:else if DataModelMasterItem.pointType == 2}
    <TableBodyCell class="w-10">Input Registers</TableBodyCell>
{:else if DataModelMasterItem.pointType == 3}
    <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell class="w-10"></TableBodyCell>
{/if}
  <TableBodyCell class="w-18">{DataModelMasterItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{DataModelMasterItem.quantity}</TableBodyCell>
  <TableBodyCell class="w-18">{DataModelMasterItem.responseTimeout} ms</TableBodyCell>
<TableBodyCell class="w-18">{DataModelMasterItem.pollingRate} ms</TableBodyCell>
    <TableBodyCell class="w-18">{DataModelMasterItem.delayBetweenPolls} ms</TableBodyCell>

{#if DataModelMasterItem.byteOrder==0} 
    <TableBodyCell class="w-18">Big Endian</TableBodyCell>
{:else if DataModelMasterItem.byteOrder==1}   
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
{:else if DataModelMasterItem.byteOrder==2}
    <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
{:else if DataModelMasterItem.byteOrder==3}
        <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell class="w-18"></TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}

  </TableBody>
      {/if}
</Table>   

<p class="mt-4">

<Table shadow striped={true}>


  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p>
  </caption>


{#if openDetailStatusMMS}

  <TableHead>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>     
  </TableHead>
  <TableBody>




{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master as RTUMasterItem, index}

    <TableBodyRow>

    <TableBodyCell>
<input type="checkbox"  bind:checked={RTUMasterItem.enable} class="disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300" disabled>
    </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUMasterItem.serialProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>      
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell> 
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>      
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>       
    </TableBodyRow>

{/each}
{/if}

  

  </TableBody>
  {/if}
</Table>

<p class="mt-4">

<Table shadow striped={true} >

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
     <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">LAN Profile</TableHeadCell>   
    <TableHeadCell class="w-10">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell class="w-10">Remote Port</TableHeadCell>
    <TableHeadCell class="w-10">Connection Timeout</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>  
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell> 
  </TableHead>
  <TableBody>


{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master as TCPMasterItem, index}
   
    <TableBodyRow>


    <TableBodyCell>
<input type="checkbox"  bind:checked={TCPMasterItem.enable} class="disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300" disabled>
    </TableBodyCell>

      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.lanProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.remoteServerIp}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.remotePort}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.connectionTimeout} ms</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>       
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>  
      <TableBodyCell class="!p-6 w-10"></TableBodyCell> 
    </TableBodyRow>
{/each}
{/if}



  </TableBody>
    {/if}
</Table>


</AccordionItem>



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    TCP Message
    </span>



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Sending Message</TableHeadCell>


  </TableHead>


   <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage as TCPMsg, index}
  

{#if TCPMsg.delete}
<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteActionTCPMsg(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={TCPMsg.enable} disabled>

      </td>


      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMsg.aliasName}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMsg.remoteHost}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMsg.remotePort}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{TCPMsg.sendingMessage}</td>


      </tr>

{:else}
    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyActionTCPMsg(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteActionTCPMsg(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={TCPMsg.enable}>
</TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMsg.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMsg.remoteHost}</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMsg.remotePort}</TableBodyCell>
      <TableBodyCell class="w-18">{TCPMsg.sendingMessage}</TableBodyCell>


    </TableBodyRow>
{/if}

{/each}
{/if}

    <TableBodyRow>

{#if getDataReady == 1}
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length < 10}
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_action_tcpmsg_trigger(changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
{:else}
<TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}
{/if}
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveActionTCPMsg}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={new_action_tcpmsg_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewActionTCPMsg[new_action_tcpmsg_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewActionTCPMsg[new_action_tcpmsg_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewActionTCPMsg[new_action_tcpmsg_index].remoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td>

  <td class="pl-5 pt-4">
  <input type="number" bind:value={NewActionTCPMsg[new_action_tcpmsg_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Message</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewActionTCPMsg[new_action_tcpmsg_index].sendingMessage} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_action_tcpmsg(new_action_tcpmsg_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



<Modal bind:open={modify_action_tcpmsg_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionTCPMsg(modify_action_tcpmsg_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].remoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td>

  <td class="pl-5 pt-4">
  <input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].remotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Message</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage[modify_action_tcpmsg_index].sendingMessage} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyActionTCPMsg}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>


</TableBody>

  </Table>


</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    MQTT Publish
    </span>



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">MQTT Profile</TableHeadCell>
    <TableHeadCell class="w-18">Publish Topic</TableHeadCell>
    <TableHeadCell class="w-18">Sending Content</TableHeadCell>


  </TableHead>

   <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish as MQTT, index}

{#if MQTT.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteActionMQTT(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={MQTT.enable} disabled>

      </td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.mqttProfile}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.publishTopic}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MQTT.sendingContent}</td>

      </tr>
  
{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyActionMQTT(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteActionMQTT(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={MQTT.enable}>
</TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.mqttProfile}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.publishTopic}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.sendingContent}</TableBodyCell>


    </TableBodyRow>

{/if}    
{/each}
{/if}

    <TableBodyRow>

{#if getDataReady == 1}
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length < 10}

      <TableBodyCell class="!p-4 w-10">

<button on:click={() => new_action_mqtt_trigger(changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
{:else}

  <TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}
{/if}

      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveActionMQTT}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={new_action_mqtt_modal} size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewActionMQTT[new_action_mqtt_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewActionMQTT[new_action_mqtt_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MQTT Profile</p></td>

  <td class="pl-5 pt-4">

  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={NewActionMQTT[new_action_mqtt_index].mqttProfile}>
<option disabled="" value="none">Choose Profile ...</option>
{#each CloudProfile as profile, index}
<option value={profile.value}>{profile.name}</option>
{/each}
</select>

</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Publish Topic</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewActionMQTT[new_action_mqtt_index].publishTopic} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewActionMQTT[new_action_mqtt_index].sendingContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_action_mqtt(new_action_mqtt_index)}>Add</Button></td>


    </tr>

  </table>
</Modal>




<Modal bind:open={modify_action_mqtt_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionMQTT(modify_action_mqtt_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MQTT Profile</p></td>

  <td class="pl-5 pt-4">

  <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].mqttProfile}>
<option disabled="" value="none">Choose Profile ...</option>
{#each CloudProfile as profile, index}
<option value={profile.value}>{profile.name}</option>
{/each}
</select>

</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Publish Topic</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].publishTopic} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[modify_action_mqtt_index].sendingContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyActionMQTT}>Modify</Button></td>


    </tr>

  </table>
</Modal>


</TableBody>

  </Table>


</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    LINE Notification
    </span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Token</TableHeadCell>
    <TableHeadCell class="w-18">Sending Content</TableHeadCell>


  </TableHead>

   <TableBody>


{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification as LINE, index}
 

{#if LINE.delete}  

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteLINE(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={LINE.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{LINE.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{LINE.token}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{LINE.sendingContent}</td>

      </tr>

{:else}


    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">

<button on:click={() => TriggerModifyActionLINE(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteLINE(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={LINE.enable}>
</TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{LINE.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{LINE.token}</TableBodyCell>
      <TableBodyCell class="w-18">{LINE.sendingContent}</TableBodyCell>


    </TableBodyRow>


{/if}

{/each}
{/if}

    <TableBodyRow>

{#if getDataReady == 1}
{#if changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length < 10}

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_action_line_trigger(changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>

{:else}
<TableBodyCell class="!p-4 w-16"></TableBodyCell>

{/if}
{/if}

      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>
     <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
                <td></td>
        <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveActionLINE}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={new_action_line_modal}  size="lg" class="w-full" autoclose>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={NewActionLINE[new_action_line_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewActionLINE[new_action_line_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Token</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={NewActionLINE[new_action_line_index].token} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewActionLINE[new_action_line_index].sendingContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_action_line(new_action_line_index)}>Add</Button></td>


    </tr>

  </table>
</Modal>



<Modal bind:open={modify_action_line_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[modify_action_line_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyActionLINE(modify_action_line_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[modify_action_line_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Token</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[modify_action_line_index].token} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification[modify_action_line_index].sendingContent} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>






    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyActionLINE}>Modify</Button></td>


    </tr>

  </table>
</Modal>


</TableBody>

  </Table>


</AccordionItem>


</Accordion>


</TabItem>


    <TabItem title="Rule Settings">



 <Table tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
        <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-36">Trigger Condition</TableHeadCell>
    <TableHeadCell class="w-36">Action</TableHeadCell>
  </TableHead>
  <TableBody>



{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_ruleSettings as rule, index}
 
{#if rule.delete}  
<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteRule(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={rule.enable} disabled>

      </td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{rule.aliasName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-36 strikeout">

{#if rule.triggerCount == 1 || rule.triggerCount ==2 || rule.triggerCount ==3}

{#if rule.firstTrigger.catalog ==0}SMS{rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==1}DI(
{#if rule.firstTrigger.statusType ==1}High{:else if rule.firstTrigger.statusType == 0}Low{/if}
)
{:else if rule.firstTrigger.catalog ==2}Modbus({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==3}TCP Message({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==4}MQTT({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==5}PING({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==6}RSSI({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==7}WAN( {#if rule.firstTrigger.statusType == 0}C-WAN Link Down{:else if rule.firstTrigger.statusType == 1}C-WAN Link Up{:else if rule.firstTrigger.statusType == 2}WAN Link Down{:else if rule.firstTrigger.statusType == 3}Dial Up failed 5 times{:else if rule.firstTrigger.statusType==4}WAN Failover{:else if rule.firstTrigger.statusType == 5}SIM Switch{/if})
{:else if rule.firstTrigger.catalog ==8}LAN({#if rule.firstTrigger.statusType==0}Link Down{:else if rule.firstTrigger.statusType==1}Link Up{/if})
{:else if rule.firstTrigger.catalog ==9}Login({#if rule.firstTrigger.statusType==0}Web Login Fail{:else if rule.firstTrigger.statusType==1}SSH Login Fail{/if})
{:else if rule.firstTrigger.catalog ==10}System({#if rule.firstTrigger.statusType==0}Cold Start{:else if rule.firstTrigger.statusType ==1}Firmware Upgrading{:else if rule.firstTrigger.statusType==2}Password Changed{:else if rule.firstTrigger.statusType==3}Reboot with reason{/if})
{/if}


{#if rule.triggerCount ==2 || rule.triggerCount==3}
{#if rule.secondTrigger.catalog ==0},SMS{rule.firstTrigger.profile})
{:else if rule.secondTrigger.catalog ==1},DI(
{#if rule.secondTrigger.statusType ==1}High{:else if rule.secondTrigger.statusType == 0}Low{/if}
)
{:else if rule.secondTrigger.catalog ==2},Modbus({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==3},TCP Message({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==4},MQTT({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==5},PING({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==6},RSSI({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==7},WAN( {#if rule.secondTrigger.statusType == 0}C-WAN Link Down{:else if rule.secondTrigger.statusType == 1}C-WAN Link Up{:else if rule.secondTrigger.statusType == 2}WAN Link Down{:else if rule.secondTrigger.statusType == 3}Dial Up failed 5 times{:else if rule.secondTrigger.statusType==4}WAN Failover{:else if rule.secondTrigger.statusType == 5}SIM Switch{/if})
{:else if rule.secondTrigger.catalog ==8},LAN({#if rule.secondTrigger.statusType==0}Link Down{:else if rule.secondTrigger.statusType==1}Link Up{/if})
{:else if rule.firstTrigger.catalog ==9},Login({#if rule.firstTrigger.statusType==0}Web Login Fail{:else if rule.firstTrigger.statusType==1}SSH Login Fail{/if})
{:else if rule.secondTrigger.catalog ==10},System({#if rule.secondTrigger.statusType==0}Cold Start{:else if rule.secondTrigger.statusType ==1}Firmware Upgrading{:else if rule.secondTrigger.statusType==2}Password Changed{:else if rule.secondTrigger.statusType==3}Reboot with reason{/if})
{/if}
{/if}


{#if rule.triggerCount ==3}
{#if rule.thirdTrigger.catalog ==0},SMS{rule.firstTrigger.profile})
{:else if rule.thirdTrigger.catalog ==1},DI(
{#if rule.thirdTrigger.statusType ==1}High{:else if rule.thirdTrigger.statusType == 0}Low{/if}
)
{:else if rule.thirdTrigger.catalog ==2},Modbus({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==3},TCP Message({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==4},MQTT({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==5},PING({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==6},RSSI({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==7},WAN( {#if rule.thirdTrigger.statusType == 0}C-WAN Link Down{:else if rule.thirdTrigger.statusType == 1}C-WAN Link Up{:else if rule.thirdTrigger.statusType == 2}WAN Link Down{:else if rule.thirdTrigger.statusType == 3}Dial Up failed 5 times{:else if rule.thirdTrigger.statusType==4}WAN Failover{:else if rule.thirdTrigger.statusType == 5}SIM Switch{/if})
{:else if rule.thirdTrigger.catalog ==8},LAN({#if rule.thirdTrigger.statusType==0}Link Down{:else if rule.thirdTrigger.statusType==1}Link Up{/if})
{:else if rule.firstTrigger.catalog ==9},Login({#if rule.firstTrigger.statusType==0}Web Login Fail{:else if rule.firstTrigger.statusType==1}SSH Login Fail{/if})
{:else if rule.thirdTrigger.catalog ==10},System({#if rule.thirdTrigger.statusType==0}Cold Start{:else if rule.thirdTrigger.statusType ==1}Firmware Upgrading{:else if rule.thirdTrigger.statusType==2}Password Changed{:else if rule.thirdTrigger.statusType==3}Reboot with reason{/if})
{/if}
{/if}



{:else}
(unknown)
{/if}

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-36 strikeout">
      {rule.delaySecond}-second delay to execute {#if rule.actionOption==0}once {:else if rule.actionOption==1}repeatedly{/if} the action: {#if rule.actionCatalog==0}SMS({rule.actionProfile}){:else if rule.actionCatalog==1}DO({rule.actionProfile}){:else if rule.actionCatalog==2}Modbus({rule.actionProfile}){:else if rule.actionCatalog==3}({rule.actionProfile}){:else if rule.actionCatalog==4}MQTT({rule.actionProfile}){:else if rule.actionCatalog==5}LINE({rule.actionProfile}){:else if rule.actionCatalog==6}TCP Message({rule.actionProfile}){:else if rule.actionCatalog==7}System({#if rule.actionOperation==0}System Reboot{:else if rule.actionOperation==1}SysLog Server On{:else if rule.actionOperation==2}SysLog Server Off{:else if rule.actionOperation==3}SW Reset C-WAN module{:else if rule.actionOperation==4}HW Reset C-WAN module{:else if rule.actionOperation==5}WAN Backup Switch{:else if rule.actionOperation==6}C-WAN Power Cycle{:else if rule.actionOperation==7}SIM Switch{/if}){:else if rule.actionCatalog==8}MQTT API({#if rule.actionOperation==0}MQTT API Disable{:else if rule.actionOperation==1}MQTT API Enable{/if}){:else if rule.actionCatalog==9}REST API({#if rule.actionOperation==0}REST API Disable{:else if rule.actionOperation==1}REST API Enable{/if}){/if} {#if rule.actionOption==1} with a {rule.repeatInterval}-second interval.{/if}


      </td>




</tr>

{:else}
    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">

<button on:click={() => TriggerModifyRule(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteRule(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={rule.enable}>
</TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{rule.aliasName}</TableBodyCell>
      <TableBodyCell class="w-36">

{#if rule.triggerCount == 1 || rule.triggerCount ==2 || rule.triggerCount ==3}

{#if rule.firstTrigger.catalog ==0}SMS{rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==1}DI(
{#if rule.firstTrigger.statusType ==1}High{:else if rule.firstTrigger.statusType == 0}Low{/if}
)
{:else if rule.firstTrigger.catalog ==2}Modbus({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==3}TCP Message({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==4}MQTT({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==5}PING({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==6}RSSI({rule.firstTrigger.profile})
{:else if rule.firstTrigger.catalog ==7}WAN( {#if rule.firstTrigger.statusType == 0}C-WAN Link Down{:else if rule.firstTrigger.statusType == 1}C-WAN Link Up{:else if rule.firstTrigger.statusType == 2}WAN Link Down{:else if rule.firstTrigger.statusType == 3}Dial Up failed 5 times{:else if rule.firstTrigger.statusType==4}WAN Failover{:else if rule.firstTrigger.statusType == 5}SIM Switch{/if})
{:else if rule.firstTrigger.catalog ==8}LAN({#if rule.firstTrigger.statusType==0}Link Down{:else if rule.firstTrigger.statusType==1}Link Up{/if})
{:else if rule.firstTrigger.catalog ==9}Login({#if rule.firstTrigger.statusType==0}Web Login Fail{:else if rule.firstTrigger.statusType==1}SSH Login Fail{/if})
{:else if rule.firstTrigger.catalog ==10}System({#if rule.firstTrigger.statusType==0}Cold Start{:else if rule.firstTrigger.statusType ==1}Firmware Upgrading{:else if rule.firstTrigger.statusType==2}Password Changed{:else if rule.firstTrigger.statusType==3}Reboot with reason{/if})
{/if}


{#if rule.triggerCount ==2 || rule.triggerCount==3}
{#if rule.secondTrigger.catalog ==0},SMS{rule.firstTrigger.profile})
{:else if rule.secondTrigger.catalog ==1},DI(
{#if rule.secondTrigger.statusType ==1}High{:else if rule.secondTrigger.statusType == 0}Low{/if}
)
{:else if rule.secondTrigger.catalog ==2},Modbus({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==3},TCP Message({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==4},MQTT({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==5},PING({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==6},RSSI({rule.secondTrigger.profile})
{:else if rule.secondTrigger.catalog ==7},WAN( {#if rule.secondTrigger.statusType == 0}C-WAN Link Down{:else if rule.secondTrigger.statusType == 1}C-WAN Link Up{:else if rule.secondTrigger.statusType == 2}WAN Link Down{:else if rule.secondTrigger.statusType == 3}Dial Up failed 5 times{:else if rule.secondTrigger.statusType==4}WAN Failover{:else if rule.secondTrigger.statusType == 5}SIM Switch{/if})
{:else if rule.secondTrigger.catalog ==8},LAN({#if rule.secondTrigger.statusType==0}Link Down{:else if rule.secondTrigger.statusType==1}Link Up{/if})
{:else if rule.firstTrigger.catalog ==9},Login({#if rule.firstTrigger.statusType==0}Web Login Fail{:else if rule.firstTrigger.statusType==1}SSH Login Fail{/if})
{:else if rule.secondTrigger.catalog ==10},System({#if rule.secondTrigger.statusType==0}Cold Start{:else if rule.secondTrigger.statusType ==1}Firmware Upgrading{:else if rule.secondTrigger.statusType==2}Password Changed{:else if rule.secondTrigger.statusType==3}Reboot with reason{/if})
{/if}
{/if}


{#if rule.triggerCount ==3}
{#if rule.thirdTrigger.catalog ==0},SMS{rule.firstTrigger.profile})
{:else if rule.thirdTrigger.catalog ==1},DI(
{#if rule.thirdTrigger.statusType ==1}High{:else if rule.thirdTrigger.statusType == 0}Low{/if}
)
{:else if rule.thirdTrigger.catalog ==2},Modbus({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==3},TCP Message({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==4},MQTT({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==5},PING({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==6},RSSI({rule.thirdTrigger.profile})
{:else if rule.thirdTrigger.catalog ==7},WAN( {#if rule.thirdTrigger.statusType == 0}C-WAN Link Down{:else if rule.thirdTrigger.statusType == 1}C-WAN Link Up{:else if rule.thirdTrigger.statusType == 2}WAN Link Down{:else if rule.thirdTrigger.statusType == 3}Dial Up failed 5 times{:else if rule.thirdTrigger.statusType==4}WAN Failover{:else if rule.thirdTrigger.statusType == 5}SIM Switch{/if})
{:else if rule.thirdTrigger.catalog ==8},LAN({#if rule.thirdTrigger.statusType==0}Link Down{:else if rule.thirdTrigger.statusType==1}Link Up{/if})
{:else if rule.firstTrigger.catalog ==9},Login({#if rule.firstTrigger.statusType==0}Web Login Fail{:else if rule.firstTrigger.statusType==1}SSH Login Fail{/if})
{:else if rule.thirdTrigger.catalog ==10},System({#if rule.thirdTrigger.statusType==0}Cold Start{:else if rule.thirdTrigger.statusType ==1}Firmware Upgrading{:else if rule.thirdTrigger.statusType==2}Password Changed{:else if rule.thirdTrigger.statusType==3}Reboot with reason{/if})
{/if}
{/if}



{:else}
(unknown)
{/if}

      </TableBodyCell>

      <TableBodyCell class="w-36">
      {rule.delaySecond}-second delay to execute {#if rule.actionOption==0}once {:else if rule.actionOption==1}repeatedly{/if} the action: {#if rule.actionCatalog==0}SMS({rule.actionProfile}){:else if rule.actionCatalog==1}DO({rule.actionProfile}){:else if rule.actionCatalog==2}Modbus({rule.actionProfile}){:else if rule.actionCatalog==3}({rule.actionProfile}){:else if rule.actionCatalog==4}MQTT({rule.actionProfile}){:else if rule.actionCatalog==5}LINE({rule.actionProfile}){:else if rule.actionCatalog==6}TCP Message({rule.actionProfile}){:else if rule.actionCatalog==7}System({#if rule.actionOperation==0}System Reboot{:else if rule.actionOperation==1}SysLog Server On{:else if rule.actionOperation==2}SysLog Server Off{:else if rule.actionOperation==3}SW Reset C-WAN module{:else if rule.actionOperation==4}HW Reset C-WAN module{:else if rule.actionOperation==5}WAN Backup Switch{:else if rule.actionOperation==6}C-WAN Power Cycle{:else if rule.actionOperation==7}SIM Switch{/if}){:else if rule.actionCatalog==8}MQTT API({#if rule.actionOperation==0}MQTT API Disable{:else if rule.actionOperation==1}MQTT API Enable{/if}){:else if rule.actionCatalog==9}REST API({#if rule.actionOperation==0}REST API Disable{:else if rule.actionOperation==1}REST API Enable{/if}){/if} {#if rule.actionOption==1} with a {rule.repeatInterval}-second interval.{/if}


      </TableBodyCell>


    </TableBodyRow>

{/if}

{/each}
{/if}

    <TableBodyRow>

{#if getDataReady == 1}
{#if changed_event_engine_data.config.service_eventEngine_ruleSettings.length < 10}

      <TableBodyCell class="!p-4 w-10">

<button on:click={() => new_rule_trigger(changed_event_engine_data.config.service_eventEngine_ruleSettings.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
{:else}

<TableBodyCell class="!p-4 w-16"></TableBodyCell>
{/if}
{/if}

      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>      
    </TableBodyRow>



     <tr>
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

    <td class="pl-10"><Button color="blue" pill={true} on:click={saveRule}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



<Modal bind:open={new_rule_modal} autoclose={false} size="lg" class="w-full">

<StepIndicator {currentStep} {steps} glow />

<p class="mt-4"></p>



<table>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type=checkbox bind:checked={NewRuleItem[new_rule_index].enable}></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={NewRuleItem[new_rule_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Trigger Count</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={NewRuleItem[new_rule_index].triggerCount} value={1} >1</Radio>
  <Radio bind:group={NewRuleItem[new_rule_index].triggerCount} value={2} >2</Radio>
  <Radio bind:group={NewRuleItem[new_rule_index].triggerCount} value={3} >3</Radio>

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">1st Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">
<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].firstTrigger.catalog}>
<option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DI</option>
<option value={2}>Modbus</option>
<option value={3}>TCP Message</option>
<option value={4}>MQTT Notification</option>
<option value={5}>PING</option>
<option value={6}>RSSI</option>
<option value={7}>WAN Status</option>
<option value={8}>LAN Status</option>
<option value={9}>Login Status</option>
<option value={10}>System Status</option>

</select>

    </td>

</tr>





<tr>
      <td>

{#if NewRuleItem[new_rule_index].firstTrigger.catalog == 10 || NewRuleItem[new_rule_index].firstTrigger.catalog == 7 ||NewRuleItem[new_rule_index].firstTrigger.catalog == 8 || NewRuleItem[new_rule_index].firstTrigger.catalog == 9 || NewRuleItem[new_rule_index].firstTrigger.catalog == 1}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}
      </td>
<td class= "pl-4 pt-4">


{#if NewRuleItem[new_rule_index].firstTrigger.catalog != 1 && NewRuleItem[new_rule_index].firstTrigger.catalog <=6}

    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].firstTrigger.profile}><option disabled="" value="">None</option>


{#if NewRuleItem[new_rule_index].firstTrigger.catalog == 0}
{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}


{:else if NewRuleItem[new_rule_index].firstTrigger.catalog == 2}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}

{:else if NewRuleItem[new_rule_index].firstTrigger.catalog == 3}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage as TCPM,index}
<option value={TCPM.aliasName}>{TCPM.aliasName}</option>
{/each}

{:else if NewRuleItem[new_rule_index].firstTrigger.catalog == 4}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification as MQTTN,index}
<option value={MQTTN.aliasName}>{MQTTN.aliasName}</option>
{/each}


{:else if NewRuleItem[new_rule_index].firstTrigger.catalog == 5}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping as PING,index}
<option value={PING.aliasName}>{PING.aliasName}</option>
{/each}


{:else if NewRuleItem[new_rule_index].firstTrigger.catalog == 6}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi as RSSI,index}
<option value={RSSI.aliasName}>{RSSI.aliasName}</option>
{/each}

{/if}
</select>

{:else if NewRuleItem[new_rule_index].firstTrigger.catalog <=10}


    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].firstTrigger.statusType}><option disabled="" value="">None</option>

{#if NewRuleItem[new_rule_index].firstTrigger.catalog == 7}
<option value={0}>C-WAN Link Down</option>
<option value={1}>C-WAN Link Up</option>
<option value={2}>WAN Link Down</option>
<option value={3}>Dial Up failed 5 times</option>
<option value={4}>WAN Failover</option>
<option value={5}>SIM Switch</option>
{:else if NewRuleItem[new_rule_index].firstTrigger.catalog == 8}
<option value={0}>Link Down</option>
<option value={1}>Link Up</option>
{:else if NewRuleItem[new_rule_index].firstTrigger.catalog == 9}
<option value={0}>Web Login Fail</option>
<option value={1}>SSH Login Fail</option>

{:else if NewRuleItem[new_rule_index].firstTrigger.catalog  == 10}
<option value={0}>Cold Start</option>
<option value={1}>Firmware Upgrading</option>
<option value={2}>Password Changed</option>
<option value={3}>Reboot with reason</option>
{:else if NewRuleItem[new_rule_index].firstTrigger.catalog  == 1}
<option value={0}>Low</option>
<option value={1}>High</option>
{/if}
</select>

{/if}
</td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">2nd Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">
{#if NewRuleItem[new_rule_index].triggerCount == 1}


<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option disabled="" value="">None</option>

</select>



{:else}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].secondTrigger.catalog}>
<option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DI</option>
<option value={2}>Modbus</option>
<option value={3}>TCP Message</option>
<option value={4}>MQTT Notification</option>
<option value={5}>PING</option>
<option value={6}>RSSI</option>
<option value={7}>WAN Status</option>
<option value={8}>LAN Status</option>
<option value={9}>Login Status</option>
<option value={10}>System Status</option>

</select>

{/if}


    </td>
</tr>



<tr>
      <td>


{#if NewRuleItem[new_rule_index].secondTrigger.catalog == 10 || NewRuleItem[new_rule_index].secondTrigger.catalog == 7 ||NewRuleItem[new_rule_index].secondTrigger.catalog == 8 || NewRuleItem[new_rule_index].secondTrigger.catalog == 9 || NewRuleItem[new_rule_index].secondTrigger.catalog == 1}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}


      </td>
<td class= "pl-4 pt-4">

{#if NewRuleItem[new_rule_index].triggerCount == 1}
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled >
    <option disabled="" value="">None</option>
    </select>
{:else}


{#if NewRuleItem[new_rule_index].secondTrigger.catalog != 1 && NewRuleItem[new_rule_index].secondTrigger.catalog <=6}

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].secondTrigger.profile}><option disabled="" value="">None</option>


{#if NewRuleItem[new_rule_index].secondTrigger.catalog == 0}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}

{:else if NewRuleItem[new_rule_index].secondTrigger.catalog == 2}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}

{:else if NewRuleItem[new_rule_index].secondTrigger.catalog == 3}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage as TCPM,index}
<option value={TCPM.aliasName}>{TCPM.aliasName}</option>
{/each}

{:else if NewRuleItem[new_rule_index].secondTrigger.catalog == 4}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification as MQTTN,index}
<option value={MQTTN.aliasName}>{MQTTN.aliasName}</option>
{/each}


{:else if NewRuleItem[new_rule_index].secondTrigger.catalog == 5}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping as PING,index}
<option value={PING.aliasName}>{PING.aliasName}</option>
{/each}



{:else if NewRuleItem[new_rule_index].secondTrigger.catalog == 6}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi as RSSI,index}
<option value={RSSI.aliasName}>{RSSI.aliasName}</option>
{/each}

{/if}
</select>

{:else if NewRuleItem[new_rule_index].secondTrigger.catalog <=10}
 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].secondTrigger.statusType}><option disabled="" value="">None</option>

{#if NewRuleItem[new_rule_index].secondTrigger.catalog == 7}
<option value={0}>C-WAN Link Down</option>
<option value={1}>C-WAN Link Up</option>
<option value={2}>WAN Link Down</option>
<option value={3}>Dial Up failed 5 times</option>
<option value={4}>WAN Failover</option>
<option value={5}>SIM Switch</option>
{:else if NewRuleItem[new_rule_index].secondTrigger.catalog == 8}
<option value={0}>Link Down</option>
<option value={1}>Link Up</option>
{:else if NewRuleItem[new_rule_index].secondTrigger.catalog == 9}
<option value={0}>Web Login Fail</option>
<option value={1}>SSH Login Fail</option>

{:else if NewRuleItem[new_rule_index].secondTrigger.catalog  == 10}
<option value={0}>Cold Start</option>
<option value={1}>Firmware Upgrading</option>
<option value={2}>Password Changed</option>
<option value={3}>Reboot with reason</option>

{:else if NewRuleItem[new_rule_index].secondTrigger.catalog  == 1}
<option value={0}>Low</option>
<option value={1}>High</option>

{/if}

</select>
{/if}

{/if}

</td>
</tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">3rd Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">


{#if NewRuleItem[new_rule_index].triggerCount=='3'}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].thirdTrigger.catalog}>
<option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DI</option>
<option value={2}>Modbus</option>
<option value={3}>TCP Message</option>
<option value={4}>MQTT Notification</option>
<option value={5}>PING</option>
<option value={6}>RSSI</option>
<option value={7}>WAN Status</option>
<option value={8}>LAN Status</option>
<option value={9}>Login Status</option>
<option value={10}>System Status</option>
</select>

{:else}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
<option disabled="" value="">None</option>
</select>


{/if}
    </td>
</tr>




<tr>
      <td>
{#if NewRuleItem[new_rule_index].thirdTrigger.catalog == 7 || NewRuleItem[new_rule_index].thirdTrigger.catalog == 7 ||NewRuleItem[new_rule_index].thirdTrigger.catalog == 8 || NewRuleItem[new_rule_index].thirdTrigger.catalog == 9 || NewRuleItem[new_rule_index].thirdTrigger.catalog == 1}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}
      </td>
<td class= "pl-4 pt-4">

{#if NewRuleItem[new_rule_index].triggerCount=='3'}

{#if NewRuleItem[new_rule_index].thirdTrigger.catalog!=1 && NewRuleItem[new_rule_index].thirdTrigger.catalog <=6}

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].thirdTrigger.profile}><option disabled="" value="">None</option>


{#if NewRuleItem[new_rule_index].thirdTrigger.catalog == 0}
{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}



{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog == 2}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}


{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog == 3}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage as TCPM,index}
<option value={TCPM.aliasName}>{TCPM.aliasName}</option>
{/each}

{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog == 4}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification as MQTTN,index}
<option value={MQTTN.aliasName}>{MQTTN.aliasName}</option>
{/each}



{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog == 5}
{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping as PING,index}
<option value={PING.aliasName}>{PING.aliasName}</option>
{/each}

{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog == 6}
{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi as RSSI,index}
<option value={RSSI.aliasName}>{RSSI.aliasName}</option>
{/each}

{/if}
</select>

{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog<=10}

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].thirdTrigger.statusType}><option disabled="" value="">None</option>

{#if NewRuleItem[new_rule_index].thirdTrigger.catalog == 7}
<option value={0}>C-WAN Link Down</option>
<option value={1}>C-WAN Link Up</option>
<option value={2}>WAN Link Down</option>
<option value={3}>Dial Up failed 5 times</option>
<option value={4}>WAN Failover</option>
<option value={5}>SIM Switch</option>
{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog == 8}
<option value={0}>Link Down</option>
<option value={1}>Link Up</option>
{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog == 9}
<option value={0}>Web Login Fail</option>
<option value={1}>SSH Login Fail</option>

{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog  == 10}
<option value={0}>Cold Start</option>
<option value={1}>Firmware Upgrading</option>
<option value={2}>Password Changed</option>
<option value={3}>Reboot with reason</option>


{:else if NewRuleItem[new_rule_index].thirdTrigger.catalog  == 1}
<option value={0}>Low</option>
<option value={1}>High</option>


{/if}
</select>
{/if}

{:else}
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
    <option disabled="" value="">None</option>

    </select>
{/if}

    </td>
</tr>



<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page2}>Next</Button></td>


    </tr>
{:else if currentStep==2}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Delay Second</p></td><td class="pl-5 pt-5"><input type="number" bind:value={NewRuleItem[new_rule_index].delaySecond} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action Option</p></td>

    <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
    <Radio bind:group={NewRuleItem[new_rule_index].actionOption} value={0} >Once</Radio>
    <Radio bind:group={NewRuleItem[new_rule_index].actionOption} value={1}>Repeat</Radio>
    </div></td>
    </tr>
{#if NewRuleItem[new_rule_index].actionOption == 1}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number" bind:value={NewRuleItem[new_rule_index].repeatCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number" bind:value={NewRuleItem[new_rule_index].repeatInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>
{:else}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500  disabled:cursor-not-allowed disabled:opacity-50" disabled></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-50  disabled:cursor-not-allowed disabled:opacity-50" disabled></td>

</tr>
{/if}



<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
       <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page1}>Back</Button></td>
    <td class="pl-1"><Button color="dark" pill={true} on:click={Rule_Modal_Page3}>Next</Button></td>


    </tr>

{:else if currentStep==3}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action Catalog</p></td>
    <td class= "pl-4 pt-4">
  


<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionCatalog}><option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DO</option>
<option value={2}>Modbus</option>
<option value={3}>Email</option>
<option value={4}>MQTT Publish</option>
<option value={5}>LINE Notification</option>
<option value={6}>TCP Message</option>
<option value={7}>System</option>
<option value={8}>MQTT API</option>
<option value={9}>REST API</option>

</select>


    </td>


</tr>



{#if NewRuleItem[new_rule_index].actionCatalog == 0}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}
</select>

    </td>

</tr>

{:else if NewRuleItem[new_rule_index].actionCatalog == 1}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">


 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.do as DO,index}
<option value={DO.aliasName}>{DO.aliasName}</option>
{/each}
</select>


    </td>

</tr>
{:else if NewRuleItem[new_rule_index].actionCatalog == 2}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}

</select>


    </td>

</tr>


{:else if NewRuleItem[new_rule_index].actionCatalog == 3}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile as Email,index}
<option value={Email.aliasName}>{Email.aliasName}</option>
{/each}
</select>

    </td>

</tr>

{:else if NewRuleItem[new_rule_index].actionCatalog == 4}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish as MQTTP,index}
<option value={MQTTP.aliasName}>{MQTTP.aliasName}</option>
{/each}
</select>

    </td>

</tr>

{:else if NewRuleItem[new_rule_index].actionCatalog == 5}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

     <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification as Line,index}
<option value={Line.aliasName}>{Line.aliasName}</option>
{/each}
</select>

    </td>

</tr>


{:else if NewRuleItem[new_rule_index].actionCatalog == 6}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

     <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage as TCPMsg,index}
<option value={TCPMsg.aliasName}>{TCPMsg.aliasName}</option>
{/each}
</select>
    </td>

</tr>




{:else if NewRuleItem[new_rule_index].actionCatalog == 7}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Operation</p></td>
    <td class= "pl-4 pt-4">


<select class="block w-48 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionOperation}>

<option disabled="" value="">None</option>
<option value={0}>System Reboot</option>
<option value={1}>SysLog server – on</option>
<option value={2}>SysLog server – off</option>
<option value={3}>SW Reset C-WAN module</option>
<option value={4}>HW Reset C-WAN module</option>
<option value={5}>WAN Backup Switch</option>
<option value={6}>C-WAN power cycle</option>
<option value={7}>SIM Switch</option>
</select>


    </td>

</tr>



{:else if NewRuleItem[new_rule_index].actionCatalog == 8}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Operation</p></td>
    <td class= "pl-4 pt-4">


<select class="block w-48 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionOperation}>

<option disabled="" value="">None</option>
<option value={0}>MQTT API Disable</option>
<option value={1}>MQTT API Enable</option>
</select>


    </td>

</tr>



{:else if NewRuleItem[new_rule_index].actionCatalog == 9}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Operation</p></td>
    <td class= "pl-4 pt-4">


<select class="block w-48 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={NewRuleItem[new_rule_index].actionOperation}>

<option disabled="" value="">None</option>
<option value={0}>REST API Disable</option>
<option value={1}>REST API Enable</option>
</select>


    </td>

</tr>

{/if}


<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
       <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page2}>Back</Button></td>
    <td class="pl-1"><Button color="dark" pill={true} on:click={Rule_Modal_Add}>Add Rule</Button></td>


    </tr>
{/if}

  </table>

</Modal>



<Modal bind:open={modify_rule_modal} autoclose={false} size="lg" class="w-full">

<StepIndicator {currentStep} {steps} glow />

<p class="mt-4"></p>



<table>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type=checkbox bind:checked={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].enable}></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Trigger Count</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount} value={1} >1</Radio>
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount} value={2} >2</Radio>
  <Radio bind:group={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount} value={3} >3</Radio>

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">1st Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">
<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog}>
<option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DI</option>
<option value={2}>Modbus</option>
<option value={3}>TCP Message</option>
<option value={4}>MQTT Notification</option>
<option value={5}>PING</option>
<option value={6}>RSSI</option>
<option value={7}>WAN Status</option>
<option value={8}>LAN Status</option>
<option value={9}>Login Status</option>
<option value={10}>System Status</option>

</select>

    </td>

</tr>





<tr>
      <td>

{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 10 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 7 ||changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 8 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 9 ||
changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 1}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}
      </td>
<td class= "pl-4 pt-4">


{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog!=1 && changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog <=6}

    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.profile}><option disabled="" value="">None</option>





{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 0}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 2}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 3}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage as TCPM,index}
<option value={TCPM.aliasName}>{TCPM.aliasName}</option>
{/each}

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 4}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification as MQTTN,index}
<option value={MQTTN.aliasName}>{MQTTN.aliasName}</option>
{/each}



{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 5}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping as PING,index}
<option value={PING.aliasName}>{PING.aliasName}</option>
{/each}



{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 6}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi as RSSI,index}
<option value={RSSI.aliasName}>{RSSI.aliasName}</option>
{/each}


{/if}
</select>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog <=10}


    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.statusType}><option disabled="" value="">None</option>

{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 7}
<option value={0}>C-WAN Link Down</option>
<option value={1}>C-WAN Link Up</option>
<option value={2}>WAN Link Down</option>
<option value={3}>Dial Up failed 5 times</option>
<option value={4}>WAN Failover</option>
<option value={5}>SIM Switch</option>
{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 8}
<option value={0}>Link Down</option>
<option value={1}>Link Up</option>
{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 9}
<option value={0}>Web Login Fail</option>
<option value={1}>SSH Login Fail</option>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 10}
<option value={0}>Cold Start</option>
<option value={1}>Firmware Upgrading</option>
<option value={2}>Password Changed</option>
<option value={3}>Reboot with reason</option>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].firstTrigger.catalog == 1}
<option value={0}>Low</option>
<option value={1}>High</option>

{/if}
</select>

{/if}
</td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">2nd Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">
{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount == 1}


<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
<option disabled="" value="">None</option>


</select>



{:else}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog}>
<option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DI</option>
<option value={2}>Modbus</option>
<option value={3}>TCP Message</option>
<option value={4}>MQTT Notification</option>
<option value={5}>PING</option>
<option value={6}>RSSI</option>
<option value={7}>WAN Status</option>
<option value={8}>LAN Status</option>
<option value={9}>Login Status</option>
<option value={10}>System Status</option>

</select>

{/if}


    </td>
</tr>



<tr>
      <td>


{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 10 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 7 ||changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 8 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 9 ||
changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 1}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}


      </td>
<td class= "pl-4 pt-4">

{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount == 1}
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled >
    <option disabled="" value="">None</option>
    </select>
{:else}


{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog <=6}

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.profile}><option disabled="" value="">None</option>


{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 0}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 2}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 3}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage as TCPM,index}
<option value={TCPM.aliasName}>{TCPM.aliasName}</option>
{/each}

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 4}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification as MQTTN,index}
<option value={MQTTN.aliasName}>{MQTTN.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 5}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping as PING,index}
<option value={PING.aliasName}>{PING.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 6}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi as RSSI,index}
<option value={RSSI.aliasName}>{RSSI.aliasName}</option>
{/each}

{/if}
</select>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog != 1 && changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog <=10}
 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.statusType}><option disabled="" value="">None</option>

{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 7}
<option value={0}>C-WAN Link Down</option>
<option value={1}>C-WAN Link Up</option>
<option value={2}>WAN Link Down</option>
<option value={3}>Dial Up failed 5 times</option>
<option value={4}>WAN Failover</option>
<option value={5}>SIM Switch</option>
{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 8}
<option value={0}>Link Down</option>
<option value={1}>Link Up</option>
{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog == 9}
<option value={0}>Web Login Fail</option>
<option value={1}>SSH Login Fail</option>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog  == 10}
<option value={0}>Cold Start</option>
<option value={1}>Firmware Upgrading</option>
<option value={2}>Password Changed</option>
<option value={3}>Reboot with reason</option>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].secondTrigger.catalog  == 1}
<option value={0}>Low</option>
<option value={1}>High</option>

{/if}

</select>
{/if}

{/if}

</td>
</tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">3rd Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">


{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount=='3'}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog}>
<option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DI</option>
<option value={2}>Modbus</option>
<option value={3}>TCP Message</option>
<option value={4}>MQTT Notification</option>
<option value={5}>PING</option>
<option value={6}>RSSI</option>
<option value={7}>WAN Status</option>
<option value={8}>LAN Status</option>
<option value={9}>Login Status</option>
<option value={10}>System Status</option>
</select>

{:else}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
<option disabled="" value="">None</option>
</select>


{/if}
    </td>
</tr>




<tr>
      <td>
{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 10 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 7 ||changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 8 || changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 9 ||
changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 1}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}
      </td>
<td class= "pl-4 pt-4">

{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].triggerCount=='3'}

{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog != 1 && changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog <=6}

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.profile}><option disabled="" value="">None</option>


{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 0}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 2}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 3}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage as TCPM,index}
<option value={TCPM.aliasName}>{TCPM.aliasName}</option>
{/each}

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 4}

{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification as MQTTN,index}
<option value={MQTTN.aliasName}>{MQTTN.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 5}
{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.ping as PING,index}
<option value={PING.aliasName}>{PING.aliasName}</option>
{/each}


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 6}
{#each saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.rssi as RSSI,index}
<option value={RSSI.aliasName}>{RSSI.aliasName}</option>
{/each}

{/if}
</select>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog<=10}

 <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.statusType}><option disabled="" value="">None</option>

{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 7}
<option value={0}>C-WAN Link Down</option>
<option value={1}>C-WAN Link Up</option>
<option value={2}>WAN Link Down</option>
<option value={3}>Dial Up failed 5 times</option>
<option value={4}>WAN Failover</option>
<option value={5}>SIM Switch</option>
{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 8}
<option value={0}>Link Down</option>
<option value={1}>Link Up</option>
{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 9}
<option value={0}>Web Login Fail</option>
<option value={1}>SSH Login Fail</option>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 10}
<option value={0}>Cold Start</option>
<option value={1}>Firmware Upgrading</option>
<option value={2}>Password Changed</option>
<option value={3}>Reboot with reason</option>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].thirdTrigger.catalog == 1}
<option value={0}>Low</option>
<option value={1}>High</option>

{/if}
</select>
{/if}

{:else}
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
    <option disabled="" value="">None</option>

    </select>
{/if}

    </td>
</tr>



<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page2}>Next</Button></td>


    </tr>
{:else if currentStep==2}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Delay Second</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].delaySecond} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action Option</p></td>

    <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
    <Radio bind:group={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionOption} value={0} >Once</Radio>
    <Radio bind:group={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionOption} value={1}>Repeat</Radio>
    </div></td>
    </tr>
{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionOption == 1}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].repeatCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].repeatInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>
{:else}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500  disabled:cursor-not-allowed disabled:opacity-50" disabled></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-50  disabled:cursor-not-allowed disabled:opacity-50" disabled></td>

</tr>
{/if}



<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
       <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page1}>Back</Button></td>
    <td class="pl-1"><Button color="dark" pill={true} on:click={Rule_Modal_Page3}>Next</Button></td>


    </tr>

{:else if currentStep==3}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action Catalog</p></td>
    <td class= "pl-4 pt-4">
  


<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog}><option disabled="" value="">None</option>
<option value={0}>SMS</option>
<option value={1}>DO</option>
<option value={2}>Modbus</option>
<option value={3}>Email</option>
<option value={4}>MQTT Publish</option>
<option value={5}>LINE Notification</option>
<option value={6}>TCP Message</option>
<option value={7}>System</option>
</select>


    </td>


</tr>



{#if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 0}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

        <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionProfile}>
 <option disabled="" value="">None</option>
 {#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.sms as SMS,index}
<option value={SMS.aliasName}>{SMS.aliasName}</option>
{/each}
</select>

    </td>

</tr>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 1}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">


        <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionProfile}>
 <option disabled="" value="">None</option>



{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.do as DO,index}
<option value={DO.aliasName}>{DO.aliasName}</option>
{/each}
</select>

    </td>

</tr>
{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 2}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">



        <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.modbus as MODBUS,index}
<option value={MODBUS.aliasName}>{MODBUS.aliasName}</option>
{/each}

</select>


    </td>

</tr>


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 3}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">


        <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionProfile}>
 <option disabled="" value="">None</option>
{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.email.remoteEmailProfile as Email,index}
<option value={Email.aliasName}>{Email.aliasName}</option>
{/each}
</select>


    </td>

</tr>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 4}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">


        <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionProfile}>
 <option disabled="" value="">None</option>

{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish as MQTTP,index}
<option value={MQTTP.aliasName}>{MQTTP.aliasName}</option>
{/each}
</select>

    </td>

</tr>

{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 5}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

        <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionProfile}>
 <option disabled="" value="">None</option>
 
{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.lineNotification as Line,index}
<option value={Line.aliasName}>{Line.aliasName}</option>
{/each}
</select>
    </td>

</tr>


{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 6}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4">

     <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionProfile}>
 <option disabled="" value="">None</option>


{#each saved_changed_event_engine_data.config.service_eventEngine_actionProfile.tcpMessage as TCPMsg,index}
<option value={TCPMsg.aliasName}>{TCPMsg.aliasName}</option>
{/each}
</select>

    </td>

</tr>




{:else if changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionCatalog == 7}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Operation</p></td>
    <td class= "pl-4 pt-4">


<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_event_engine_data.config.service_eventEngine_ruleSettings[modify_rule_index].actionOperation}>

<option disabled="" value="">None</option>
<option value={0}>System Reboot</option>
<option value={1}>SysLog server – on</option>
<option value={2}>SysLog server – off</option>
<option value={3}>SW Reset C-WAN module</option>
<option value={4}>HW Reset C-WAN module</option>
<option value={5}>WAN Backup Switch</option>
<option value={6}>C-WAN power cycle</option>
<option value={7}>SIM Switch</option>
</select>


    </td>

</tr>


{/if}


<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
       <td class="pl-20"><Button color="dark" pill={true} on:click={Rule_Modal_Page2}>Back</Button></td>
    <td class="pl-1"><Button color="dark" pill={true} on:click={Rule_Modal_Modify}>Modify Rule</Button></td>


    </tr>
{/if}

  </table>

</Modal>


  </TableBody>
</Table>

</TabItem>

<TabItem title="Simulator" on:click={ResetSimulator}>


<p>Select Rule: </p><select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={Simulator_Rselected}>
<option disabled="" value="">None</option>
<option value="1" >R_sms_or_modbus_trigger_do</option>

</select>

{#if Simulator_Rselected == '1'}

<p class="pt-5">Select Trigger: </p>

<select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={Simulator_Tselected}>
<option disabled="" value="">None</option>
<option value="1">T_sms</option>
<option value="2">T_modbus</option>
</select>

{#if Simulator_Tselected == '1'}
<div class="flex gap-4">
<p class="pt-10">Set sms content: </p><input type="text" bind:value={Simulator_ContentValue} class="mt-5 bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"/>
</div>
{:else if Simulator_Tselected == '2'}
<div class="flex gap-4">
<p class="pt-10">Set modbus value: </p><input type="text" bind:value={Simulator_ContentValue} class="mt-5 bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"/>
</div>
{/if}
{/if}


{#if Simulator_Tselected == '1' || Simulator_Tselected == '2' || Simulator_Tselected == '3'}

<p class="pt-5"></p>
<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full" on:click={Simulate}>Simulate</button>
{/if}


{#if finishSimulate == true}

<p class="pt-10 pl-4">2023/11/02 02:03:35 execute DO profile (A_DO) </p>

{/if}

</TabItem>



    <TabItem title="Log Viewer">

<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full" on:click={RefreshEventLog}>Refresh</button>

<p class="pt-10"></p>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>

    <TableHeadCell on:click={() => sortTable('tt')} style="cursor:pointer">Trigger Timestamp</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('tc')} style="cursor:pointer">Trigger Catalog</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('tn')} style="cursor:pointer">Trigger Alias Name</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('at')} style="cursor:pointer">Action Timestamp</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('ac')} style="cursor:pointer">Action Catalog</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('an')} style="cursor:pointer">Action Alias Name</TableHeadCell>   

  </TableHead>
  <TableBody >

{#each $sortItems as item}
      <TableBodyRow>
        <TableBodyCell class="w-18">{item.tt}</TableBodyCell>
        <TableBodyCell class="w-18">{item.tc}</TableBodyCell>
        <TableBodyCell class="w-18">{item.tn}</TableBodyCell>
        <TableBodyCell class="w-18">{item.at}</TableBodyCell>
        <TableBodyCell class="w-18">{item.ac}</TableBodyCell>
        <TableBodyCell class="w-18">{item.an}</TableBodyCell>
      </TableBodyRow>
    {/each}




  </TableBody>
</Table>
</TabItem>

</Tabs>



