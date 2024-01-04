<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

 import { writable } from 'svelte/store';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    eventEngineConfig,
    EventEngine_TriggerMQTT_ConfigChangedLog,
    EventEngine_TriggerTCPMsg_ConfigChangedLog,
    EventEngine_TriggerModbus_ConfigChangedLog,
    EventEngine_TriggerDI_ConfigChangedLog,
    EventEngine_TriggerSMS_ConfigChangedLog,
    EventEngine_General_ConfigChangedLog,
    ChangedEventEngineConfig
  } from "./configG.js"


  let event_engine_data="";
  let changed_event_engine_data = {};
  let saved_changed_event_engine_data ={};

  let event_engine_general_changedValues = [];
  let event_engine_trigger_sms_changeValues=[];
  let event_engine_trigger_di_changeValues=[];
  let event_engine_trigger_modbus_changeValues=[];
  let event_engine_trigger_tcpmsg_changeValues=[];
  let event_engine_trigger_mqtt_changeValues=[];
  eventEngineConfig.subscribe(val => {
      event_engine_data = val;
  });

  EventEngine_General_ConfigChangedLog.subscribe(val => {
      event_engine_general_changedValues = val;
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

  ChangedEventEngineConfig.subscribe(val => {
      saved_changed_event_engine_data = val;
  });

  let getDataReady=0;  
  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });


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
    }
  }
  
  function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
  {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1);
            }

            if (obj1[key].length > obj2[key].length) 
            {
              let addedCount=obj1[key].length-obj2[key].length;
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
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0);
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

        }
      }
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
        compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[i], event_engine_data.config.service_eventEngine_triggerProfile.sms[i], 0, 1,i+1);
      }

      if (changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length > event_engine_data.config.service_eventEngine_triggerProfile.sms.length)
      {
        let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length-event_engine_data.config.service_eventEngine_triggerProfile.sms.length;
        let changedstr="Add "+addedCount+" item(s) to SMS Trigger List";
        event_engine_trigger_sms_changeValues=[...event_engine_trigger_sms_changeValues, changedstr];
      }

      saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.sms=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.sms));

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
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.di[i], event_engine_data.config.service_eventEngine_triggerProfile.di[i], 1, 1,i+1);
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length > event_engine_data.config.service_eventEngine_triggerProfile.di.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length-event_engine_data.config.service_eventEngine_triggerProfile.di.length;
      let changedstr="Add "+addedCount+" item(s) to DI Trigger List";
      event_engine_trigger_di_changeValues=[...event_engine_trigger_di_changeValues, changedstr];
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
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[i], event_engine_data.config.service_eventEngine_triggerProfile.modbus[i], 2, 1,i+1);
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length > event_engine_data.config.service_eventEngine_triggerProfile.modbus.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length-event_engine_data.config.service_eventEngine_triggerProfile.modbus.length;
      let changedstr="Add "+addedCount+" item(s) to Modbus Trigger List";
      event_engine_trigger_modbus_changeValues=[...event_engine_trigger_modbus_changeValues, changedstr];
    }

    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus));

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
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[i], event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[i], 3, 1,i+1);
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length > event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length-event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length;
      let changedstr="Add "+addedCount+" item(s) to TCP Message Trigger List";
      event_engine_trigger_tcpmsg_changeValues=[...event_engine_trigger_tcpmsg_changeValues, changedstr];
    }

    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage));

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
      compareObjects(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[i], event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[i], 4, 1,i+1);
    }

    if (changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length > event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length)
    {
      let addedCount=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length-event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length;
      let changedstr="Add "+addedCount+" item(s) to MQTT Trigger List";
      event_engine_trigger_mqtt_changeValues=[...event_engine_trigger_mqtt_changeValues, changedstr];
    }

    saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification=JSON.parse(JSON.stringify(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification));

    EventEngine_TriggerMQTT_ConfigChangedLog.set(event_engine_trigger_mqtt_changeValues);
    ChangedEventEngineConfig.set(saved_changed_event_engine_data);
    console.log(event_engine_trigger_mqtt_changeValues);    

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
    }
    else if (sessionid && event_engine_data != "")
    {
      getDataReady=1;
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

    }

  });


  let modify_trigger_mqtt_modal=false;
  let modify_trigger_mqtt_index;
  let BackupTriggerMQTT=
  {
      enable: false,
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "", 
      receivedContent: ""
  };

  function TriggerModifyMQTTN(index)
  {
    BackupTriggerMQTT.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[index].enable;
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
      aliasName: "",
      mqttProfile: "",
      subscribedTopic: "", 
      receivedContent: ""
  }
,
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


  function new_trigger_mqtt_trigger(index)
  {
      NewTriggerMQTT[index].enable=false;
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


  let modify_trigger_tcpMsg_modal=false;
  let modify_trigger_tcpMsg_index;
  let BackupTriggerTCPMsg=
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  };

  function TriggerModifyTCPMsg(index)
  {
    BackupTriggerTCPMsg.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage[index].enable;
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
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  },
  {
      enable: false,
      aliasName: "",
      remoteHost: "",
      remotePort: 8000, 
      receivedMessage: ""
  }
  ];


  function new_trigger_tcpmsg_trigger(index)
  {
      NewTriggerTCPMsg[index].enable=false;
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
      aliasName: "",
      modbusVariable: "",
      variableType: 0, 
      comparison: 1,
      comparisonValue: 1
  };

  function TriggerModifyModbus(index)
  {
    BackupTriggerModbus.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].enable;
    BackupTriggerModbus.aliasName=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].aliasName;
 
    BackupTriggerModbus.modbusVariable=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].modbusVariable;
    BackupTriggerModbus.variableType=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].variableType;

    BackupTriggerModbus.comparison=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].comparison;
    BackupTriggerModbus.comparisonValue=changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].comparisonValue;

    modify_trigger_modbus_index=index;
    modify_trigger_modbus_modal=true;
  }

  function NoModifyTriggerModbus(index)
  {
    modify_trigger_modbus_modal=false;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].enable=BackupTriggerModbus.enable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].aliasName=BackupTriggerModbus.aliasName;
 
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].modbusVariable=BackupTriggerModbus.modbusVariable;
    changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[index].variableType=BackupTriggerModbus.variableType;

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

  function new_trigger_modbus_trigger(index)
  {
      NewTriggerModbus[index].enable=false;
      NewTriggerModbus[index].aliasName="";
      NewTriggerModbus[index].modbusVariable="";
      NewTriggerModbus[index].variableType=1;
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
      aliasName: "",
      type:0,
      debouncing:{
        rateCount:3,
        interval:3
      },
      duration: 2
  };

  function TriggerModifyDI(index)
  {
    BackupTriggerDI.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.di[index].enable;
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
      NewTriggerDI[index].enable=false;
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
      aliasName: "",
      smsPhoneNumber: 0,
      smsPhoneNumberSpecified: "0912345678",
      smsContent: ""
  };



  function TriggerModifySMS(index)
  {

    BackupTriggerSMS.enable=changed_event_engine_data.config.service_eventEngine_triggerProfile.sms[index].enable;
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

  function new_trigger_sms_trigger(index)
  {
      NewTriggerSMS[index].enable=false;
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




  let isActive = false;
  let formModalsmsT = false;
  let T_SMS_Name;
  let TSMSP='any';
  let T_SMS_PhoneN;
  let T_SMS_Content;
  let smsitemT=false;


  let formModalDIT = false;
  let diitemT=false;
  let T_DI_Name;
  let TDIT='levelH';
  let T_DI_Duration;

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let tdClass = 'px-6 py-4 whitespace-nowrap font-light text-center';

  let trClass= 'noborder text-center bg-white dark:bg-gray-800 dark:border-gray-700';


  let formModalMT=false;
  let mitemT=true;
  let T_Modbus_name;
  let T_VType;
  let T_MV_name;
  let T_Comparison;

  let formModalPINGT = false;
  let pingitemT=false;
  let T_PING_Name;
  let T_PING_Period;
  let T_PING_RetryCount;
  let T_PING_RetryInterval;
  let T_PING_Host;

  let formModaltcpmT = false;
  let tcpMitemT=false
  let T_TCPMessage_Name;
  let T_TCPMessage_RemoteHost="192.168.1.127";
  let T_TCPMessage_RemotePort=8000;
  let T_TCPMessage_RecvMsg="Alarm!";


  let formModalMQTTT=false;
  let MQTTitemT=false
  let T_MQTT_Name;
  let T_MQTT_subscribed_Topic;
  let T_MQTT_content;

  let formModalMQTTA=false;
  let MQTTitemA=false
  let A_MQTT_Name;
  let A_MQTT_Publish_Topic;
  let A_MQTT_content;


  let formModalLineA=false;
  let lineitemA=false
  let A_Line_Name;
  let A_Line_Token;
  let A_Line_content;


  let formModaltcpmA = false;
  let tcpMitemA=false
  let A_TCPMessage_Name;
  let A_TCPMessage_RemoteHost="192.168.1.127";
  let A_TCPMessage_RemotePort=8000;
  let A_TCPMessage_SndMsg="Alarm!";


  let A_Modbus_assign;
  let formModalMA=false;
  let mitemA=true;
  let A_Modbus_name;
  let A_MV_name;
  let A_VType;

  let formModalsmsA = false;
  let A_SMS_Name;
  let A_SMS_PhoneN;
  let A_SMS_Content;
  let smsitemA=false;



  let A_SMTP_Name;
  let A_SMTP_SIP;
  let A_SMTP_Port;
  let A_SMTP_Account;
  let A_SMTP_Pwd;
  let A_SMTP_TLS='No';
  let formModalemailSMTPA = false;
  let formModalemailA = false;
  let emailitemA=false;
  let A_Email_Name;
  let A_Email_addr;
  let A_Email_content;

  let formModalDOA=false;
  let doitemA=false;
  let A_DO_Name;
  let ADOT;
  let A_DO_Duration;

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

  function Rule_Modal_Finish()
  {
      formModalRule = false;
    currentStep=1;
  }

  function NewRule()
  {
    currentStep=1;
    formModalRule = true;
  }




let MVList = [
    {value:"Test1", name: "Line Current Phase A"},

  ];

let DOList=[
    {value:"Test1", name: "DO-1"},
];

let OpList = [
    {value:"GT", name: ">"},
    {value:"LT", name: "<"},
    {value:"GE", name: ">="},
    {value:"LE", name: "<="},
    {value:"EQ", name: "="},
    {value:"NEQ", name: "!="},
  ];



  let items = [
    { tt: '2023/11/01 02:03:30', tc: 'SMS', tn: 'T_sms_', at: '2023/11/01 02:03:35', ac: 'Email', an: 'A_Email_' },
    { tt: '2023/11/01 02:03:35', tc: 'Modbus', tn: 'T_Modbus_', at: '2023/11/01 02:03:45', ac: 'DO', an: 'A_DO_'  },
    { tt: '2023/11/02 02:03:30', tc: 'DI', tn: 'T_DI_', at: '2023/11/02 02:03:35', ac: 'DO', an: 'A_DO_'  },
    { tt: '2023/11/02 02:03:40', tc: 'SMS', tn: 'T_sms_', at: '2023/11/02 02:03:45', ac: 'Email', an: 'A_Email_'  }
  ];

  let TriggerCatalogList=[
    {value:"SMS", name: "SMS"},
    {value:"DI", name: "DI"},
    {value:"Modbus", name: "Modbus"},
    {value:"MQTTN", name: "MQTT Notification"},
    {value:"TCPM", name: "TCP Message"},
    {value:"WANs", name: "WAN Status"},

  ];

  let ActionCatalogList=[
    {value:"SMS", name: "SMS"},
    {value:"DO", name: "DO"},
    {value:"Modbus", name: "Modbus"},
    {value:"Email", name: "Email"},
    {value:"MQTTP", name: "MQTT Publish"},
    {value:"Line", name: "Line Notification"},
    {value:"TCPM", name: "TCP Message"},
    {value:"System", name: "System"},
  ];


  let TriggerSMSList=[
    {value:"1", name: "T_sms_"},
  ];

  let TriggerDIList=[
    {value:"1", name: "T_DI_"},
  ];

  let TriggerMBList=[
    {value:"1", name: "T_Modbus_"},
  ];

  let Tselected1="SMS";
  let Tselected2="Modbus";
  let Tselected3;
  let TselectedProfile1;
  let TselectedProfile2;
  let TselectedProfile3;
  let Aselected="DO";

  let ActionLineList=[
 
  ];
  let ActionTCPMList=[
 
  ];

  let ActionMQTTPList=[
 
  ];

  let ActionSMSList=[
    {value:"1", name: "A_sms_"},
  ];

  let ActionDIList=[
    {value:"1", name: "A_DO_"},
  ];

  let ActionMBList=[
    {value:"1", name: "A_Modbus_"},
  ];

  let ActionEmailList=[
    {value:"1", name: "A_Email_"},
  ];

  let ActionSystemList=[
      {value:"1", name: "System Reboot"},
      {value:"2", name: "SysLog server – on"},
      {value:"3", name: "SysLog server – off"},
      {value:"4", name: "SW Reset C-WAN module"},
      {value:"5", name: "HW Reset C-WAN module"},
      {value:"6", name: "WAN Backup Switch"},
      {value:"7", name: "C-WAN power cycle"},
      {value:"8", name: "SIM Switch"},
  ]



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


    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifySMS(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
{#if TriggerSMS.enable}
    <TableBodyCell class="w-10">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-10">0</TableBodyCell>
{/if}

      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerSMS.aliasName}</TableBodyCell>
{#if TriggerSMS.smsPhoneNumber == 0}
      <TableBodyCell class="w-18">Any</TableBodyCell>
{:else}
<TableBodyCell class="w-18">{TriggerSMS.smsPhoneNumberSpecified}</TableBodyCell>
{/if}

      <TableBodyCell class="w-18">{TriggerSMS.smsContent}</TableBodyCell>

    </TableBodyRow>
{/each}
{/if}    
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length < 10}
<button on:click={() => new_trigger_sms_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.sms.length)}>

    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
{/if}

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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



    <TableBodyRow>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyDI(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

{#if TriggerDI.enable}
    <TableBodyCell class="w-10">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-10">0</TableBodyCell>
{/if}
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
{/each}
{/if}

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length <10}
<button on:click={() => new_trigger_di_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.di.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}
       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

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
    <TableHeadCell class="w-18">Modbus Variable</TableHeadCell>
    <TableHeadCell class="w-18">Variable Type</TableHeadCell>
    <TableHeadCell class="w-18">Comparison</TableHeadCell>

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus as TriggerModbus, index}

    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyModbus(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

{#if TriggerModbus.enable}

    <TableBodyCell class="w-10">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-10">0</TableBodyCell>

{/if}
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerModbus.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerModbus.modbusVariable}</TableBodyCell>
{#if TriggerModbus.variableType==1}
<TableBodyCell class="w-18">Boolean</TableBodyCell>
{:else if TriggerModbus.variableType ==2}
<TableBodyCell class="w-18">Unsigned Short</TableBodyCell>
{:else if TriggerModbus.variableType ==3}
<TableBodyCell class="w-18">Signed
Short</TableBodyCell>
{:else if TriggerModbus.variableType ==4}
<TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
{:else if TriggerModbus.variableType ==5}
<TableBodyCell class="w-18">Signed Integer</TableBodyCell>
{:else if TriggerModbus.variableType ==6}
<TableBodyCell class="w-18">Float</TableBodyCell>
{:else if TriggerModbus.variableType ==7}
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
{/each}
{/if}

  <TableBodyRow>
 <TableBodyCell class="!p-4">

{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length < 10}
<button on:click={() => new_trigger_modbus_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
{/if}
 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4">{NewTriggerModbus[new_trigger_modbus_index].modbusVariable}</td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

    <td class="pl-4 pt-4"><div>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].variableType} value={1} >Boolean</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].variableType} value={2} >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].variableType} value={3} >Signed Short</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].variableType} value={4} >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].variableType} value={5} >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].variableType} value={6} >Float</Radio>
  <Radio class="pb-2" bind:group={NewTriggerModbus[new_trigger_modbus_index].variableType} value={7} >Double</Radio>
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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4">{changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].modbusVariable}</td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

    <td class="pl-4 pt-4"><div>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType} value={1} >Boolean</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType} value={2} >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType} value={3} >Signed Short</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType} value={4} >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType} value={5} >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType} value={6} >Float</Radio>
  <Radio class="pb-2" bind:group={changed_event_engine_data.config.service_eventEngine_triggerProfile.modbus[modify_trigger_modbus_index].variableType} value={7} >Double</Radio>
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

<p class="mt-8">

<Table shadow striped={true} tableNoWFull={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Variable
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus variable. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell>Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
  </TableHead>
  <TableBody>


  </TableBody>
      {/if}
</Table>   

<p class="mt-4">

<Table shadow striped={true} >


  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p>
  </caption>


{#if openDetailStatusMMS}

  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Port</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
  </TableHead>
  <TableBody>




  

  </TableBody>
  {/if}
</Table>

<p class="mt-4">

<Table shadow striped={true}>

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>

  </TableHead>
  <TableBody>



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

    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyTCPMsg(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
{#if TriggerTCPMsg.enable}
    <TableBodyCell class="w-10">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-10">0</TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.remoteHost}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.remotePort}</TableBodyCell>
      <TableBodyCell class="w-18">{TriggerTCPMsg.receivedMessage}</TableBodyCell>

    </TableBodyRow>
{/each}
{/if}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length < 10}
<button on:click={() => new_trigger_tcpmsg_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.tcpMessage.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
{/if}

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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


    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyMQTTN(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
{#if MQTT.enable}
    <TableBodyCell class="w-10">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-10">0</TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.mqttProfile}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.subscribedTopic}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTT.receivedContent}</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}


    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length < 10 }
<button on:click={() => new_trigger_mqtt_trigger(changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
{/if}

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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
{NewTriggerMQTT[new_trigger_mqtt_index].mqttProfile}
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
{changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[modify_trigger_mqtt_index].mqttProfile}
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
    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsmsA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_sms_</TableBodyCell>
      <TableBodyCell class="w-18">12345657</TableBodyCell>
      <TableBodyCell class="w-18">Action</TableBodyCell>

    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsmsA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    <Modal bind:open={formModalsmsA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={smsitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_sms_</p><input type="text" bind:value={A_SMS_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Phone Number</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SMS_PhoneN} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMS Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={A_SMS_Content} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


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
    <TableHeadCell class="w-18">Password</TableHeadCell>

  </TableHead>
 <TableBody>
    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalemailSMTPA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableBodyCell class="w-10">Gmail SMTP</TableBodyCell>
      <TableBodyCell class="w-18">168.102.1.1</TableBodyCell>
      <TableBodyCell class="w-18">123</TableBodyCell>
      <TableBodyCell class="w-18">No</TableBodyCell>
      <TableBodyCell class="w-18">WII</TableBodyCell>
      <TableBodyCell class="w-18" style="-webkit-text-security: disc">12345</TableBodyCell>

    </TableBodyRow>

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
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => formModalemailA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4 w-4"></TableBodyCell>
    <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">A_Email_</TableBodyCell>
      <TableBodyCell class="w-18">a@b.c</TableBodyCell>
      <TableBodyCell class="w-18">test</TableBodyCell>

    </TableBodyRow>
<TableBodyRow>
      <TableBodyCell class="!p-4 w-4"><button on:click={() => formModalemailA = true}>
      <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


  <Modal bind:open={formModalemailSMTPA} autoclose={false} size="lg" class="w-full">
  <form action="#">


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={A_SMTP_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SMTP Server IP</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SMTP_SIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={A_SMTP_Port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">TLS</p></td>

  <td class="pl-5 pt-4">
  <div class="flex gap-4">
  <Radio bind:group={A_SMTP_TLS} value='Yes' >Yes</Radio>
  <Radio bind:group={A_SMTP_TLS} value='No'>No</Radio>

  </div>

  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server CA Certificate</p></td>
    <td class= "pl-4 pt-4">

{#if A_SMTP_TLS == 'No'}    
  <Select class="mt-2 disabled:cursor-not-allowed disabled:opacity-50" items={localList} placeholder="None" disabled/>
{:else}
  <Select class="mt-2" items={localList} placeholder="None" />
{/if}

    </td>


</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Certificate</p></td>
    <td class= "pl-4 pt-4">
{#if A_SMTP_TLS == 'No'}   
  <Select class="mt-2 disabled:cursor-not-allowed disabled:opacity-50" items={localList} placeholder="None" disabled/>
{:else}
  <Select class="mt-2" items={localList} placeholder="None" />
{/if}

    </td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SMTP_Account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_SMTP_Pwd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
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
    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>



  <Modal bind:open={formModalemailA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={emailitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_Email_</p><input type="text" bind:value={A_Email_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Email</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_Email_addr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>





  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Email Content</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_Email_content} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
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
    <td class="pl-20"><Button color="dark" pill={true}>Add</Button></td>


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
    <TableHeadCell>DO Profile</TableHeadCell> 
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Type</TableHeadCell>
    <TableHeadCell class="w-18">Duration</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalDOA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10">DO-1</TableBodyCell>
      <TableBodyCell class="w-18">A_DO_</TableBodyCell>
      <TableBodyCell class="w-18">Pulse : High</TableBodyCell>
      <TableBodyCell class="w-18">2 second(s)</TableBodyCell>

    </TableBodyRow>

<TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalDOA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


    <Modal bind:open={formModalDOA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={doitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">DO Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={DOList} placeholder="None" /></td>


</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_DO_</p><input type="text" bind:value={A_DO_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='Pstart' >Pulse : High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='Pstop' >Pulse : Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='DOon' >Edge : High to Low</Radio>
  </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='DOoff' >Edge : Low to High</Radio>
  </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

  <td class="pl-5 pt-4">
  <Radio bind:group={ADOT} value='DOoff' >Edge : Changed</Radio>
  </td>
</tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Duration</p></td>
<td class="pl-5 pt-5">
{#if ADOT == 'Pstart'}
<input type="number" bind:value={A_DO_Duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
<input type="number" bind:value={A_DO_Duration} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>
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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


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
    <TableHeadCell class="w-18">Modbus Variable</TableHeadCell>
    <TableHeadCell class="w-18">Variable Type</TableHeadCell>
    <TableHeadCell class="w-18">Assignment</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalMA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_Modbus_</TableBodyCell>
      <TableBodyCell class="w-18">Line Current Phase A</TableBodyCell>
      <TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
      <TableBodyCell class="w-18">2000</TableBodyCell>

    </TableBodyRow>

  <TableBodyRow>
 <TableBodyCell class="!p-4">
<button on:click={() => formModalMA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

    </TableBodyRow>



  </TableBody>
</Table>


    <Modal bind:open={formModalMA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={mitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_Modbus_</p><input type="text" bind:value={A_Modbus_name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MVList} placeholder="None" /></td>


</tr>

<tr>

  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

    <td class="pl-4 pt-4" colspan=""><div>
  <Radio class="pb-2" bind:group={A_VType} value='bool' >Boolean</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='uns' >Unsigned Short</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='ss' >Signed Short</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='uni' >Unsigned Integer</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='si' >Signed Integer</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='float' >Float</Radio>
  <Radio class="pb-2" bind:group={A_VType} value='double' >Double</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Assignment</p></td>
<td class="pl-5 pt-5">
<input type="number" bind:value={A_Modbus_assign} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>

<p class="mt-8">




<Table shadow striped={true} tableNoWFull={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Variable
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus variable. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell>Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
  </TableHead>
  <TableBody>
 <TableBodyRow>
       <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
  <TableBodyCell class="w-10">Line Current Phase A</TableBodyCell>
  <TableBodyCell class="w-10">Modbus_Master_T0</TableBodyCell>
  <TableBodyCell class="w-18">2</TableBodyCell>
  <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
  <TableBodyCell class="w-18">0</TableBodyCell>
  <TableBodyCell class="w-10">1</TableBodyCell>
  <TableBodyCell class="w-18">1000 ms</TableBodyCell>
    </TableBodyRow>

  </TableBody>
      {/if}
</Table>   

<p class="mt-4">

<Table shadow striped={true} tableNoWFull={true}>


  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in RTU mode. Please go to modbus page for detailed setting.</p>
  </caption>


{#if openDetailStatusMMS}

  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Port</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_S0</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Serial Port 0</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_S1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Serial Port 1</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">115200</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
      <TableBodyCell class="w-18">1000 ms</TableBodyCell>
      <TableBodyCell class="w-18">20 ms</TableBodyCell>
    </TableBodyRow>



  

  </TableBody>
  {/if}
</Table>

<p class="mt-4">

<Table shadow striped={true} tableNoWFull={true}>

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus master in TCP mode. Please go to modbus page for detailed setting.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_T0</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 127.0.0.1</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>
      <TableBodyCell class="w-10">1000</TableBodyCell>
      <TableBodyCell class="w-18">20</TableBodyCell>
    </TableBodyRow>


 <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> Modbus_Master_T1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> 192.168.127.254</TableBodyCell>
      <TableBodyCell class="w-10">502</TableBodyCell>
      <TableBodyCell class="w-10">3000 ms</TableBodyCell>
      <TableBodyCell class="w-10">1000</TableBodyCell>
      <TableBodyCell class="w-18">20</TableBodyCell>
    </TableBodyRow>


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
    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModaltcpmA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_TCPMessage_</TableBodyCell>
      <TableBodyCell class="w-18">192.168.1.127</TableBodyCell>
      <TableBodyCell class="w-18">8000</TableBodyCell>
      <TableBodyCell class="w-18">Alarm!</TableBodyCell>


    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModaltcpmA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



    <Modal bind:open={formModaltcpmA} autoclose={false} size="lg" class="w-full">
  <form action="#">

<label>
  <input class="center" type=checkbox checked={tcpMitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_TCPMessage_</p><input type="text" bind:value={A_TCPMessage_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_TCPMessage_RemoteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td>

  <td class="pl-5 pt-4">
  <input type="number" bind:value={A_TCPMessage_RemotePort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Message</p></td><td class="pl-5 pt-5"><input type="text" bind:value={A_TCPMessage_SndMsg} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


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
    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalMQTTA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_MQTT_</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>


    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalMQTTA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



    <Modal bind:open={formModalMQTTA} autoclose={false} size="lg" class="w-full">


<label>
  <input class="center" type=checkbox checked={MQTTitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_MQTT_</p><input type="text" bind:value={A_MQTT_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MQTT Profile</p></td>

  <td class="pl-5 pt-4">
<select class="block w-36 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2">
<option disabled="" value="">None</option>
</select>
</td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Publish Topic</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_MQTT_Publish_Topic} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={A_MQTT_content} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
</Modal>


</TableBody>

  </Table>


</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Line Notification
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
    <TableBodyRow>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalLineA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">A_Line_</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>


    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalLineA = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



    <Modal bind:open={formModalLineA} autoclose={false} size="lg" class="w-full">


<label>
  <input class="center" type=checkbox checked={lineitemA}>
  Enable
</label>

<p class="mt-4"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">A_Line_</p><input type="text" bind:value={A_Line_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Token</p></td>

  <td class="pl-5 pt-4">
  <input type="text" bind:value={A_Line_Token} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
</td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Sending Content</p></td><td class="pl-5 pt-5"><input type="text" bind:value={A_Line_content} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


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
    <TableHeadCell class="w-18">Trigger Catalog</TableHeadCell>
    <TableHeadCell class="w-18">Action Catalog</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-60" on:click={handleClickRule}>
          <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={NewRule}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">0</TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">R_sms_or_modbus_trigger_do</TableBodyCell>
      <TableBodyCell class="w-18">SMS or MODBUS</TableBodyCell>
      <TableBodyCell class="w-18">DO</TableBodyCell>

    </TableBodyRow>

{#if openDetailStatusRule}


 <TableBodyRow {trClass}>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
            <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="text-right" colspan="3">Delay Second</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2"  {tdClass}>3</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow {trClass}>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
            <TableBodyCell class="w-10"></TableBodyCell>
                  <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="text-right" colspan="3">Action Option</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2"  {tdClass}>Once</TableBodyCell>
      </TableBodyRow>



{/if}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={NewRule}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    <Modal bind:open={formModalRule} autoclose={false} size="lg" class="w-full">

<StepIndicator {currentStep} {steps} glow />

<p class="mt-4"></p>



<table>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type=checkbox checked={ruleitem}></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">R_</p><input type="text" bind:value={R_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>


<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Trigger Count</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={R_TCount} value='1' >1</Radio>
  <Radio bind:group={R_TCount} value='2' >2</Radio>
  <Radio bind:group={R_TCount} value='3' >3</Radio>

</div></td>
</tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Multiple Triggers Relationship</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
{#if R_TCount == '1'}
  <Radio bind:group={R_TMultipleRelation} value='OR' name="disabled-state" disabled>OR</Radio>
{:else}
  <Radio bind:group={R_TMultipleRelation} value='OR' >OR</Radio>
{/if}

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">1st Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">
<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={Tselected1}>
<option disabled="" value="">None</option>
<option value="SMS">SMS</option>
<option value="DI">DI</option>
<option value="Modbus">Modbus</option>
<option value="MQTT Notification">MQTT Notification</option>
<option value="TCPM">TCP Message</option>
<option value="WANs">WAN Status</option>
<option value="LANs">LAN Status</option>
<option value="Logins">Login Status</option>
<option value="Systems">System Status</option>

</select>

    </td>

</tr>



<tr>
      <td>

{#if Tselected1 == "WANs" || Tselected1 == "Logins" ||Tselected1 == "LANs" || Tselected1 == "Systems"}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}
      </td>
<td class= "pl-4 pt-4">
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={TselectedProfile1}><option disabled="" value="">None</option>


{#if Tselected1 == 'SMS'}


<option value="1">T_sms_</option>

{:else if Tselected1 == 'DI'}


<option value="1">T_DI_</option>

{:else if Tselected1 == "Modbus"}


<option value="1">T_Modbus_</option>
{:else if Tselected1 == "WANs"}
<option value="1">C-WAN Link Down</option>
<option value="2">C-WAN Link Up</option>
<option value="3">WAN Link Down</option>
<option value="4">Dial Up failed 5 times</option>
<option value="5">WAN Failover</option>
<option value="6">SIM Switch</option>
{:else if Tselected1 == "LANs"}
<option value="1">Link Down</option>
<option value="2">Link Up</option>
{:else if Tselected1 == "Logins"}
<option value="1">Web Login Fail from LAN</option>
<option value="2">Web Login Fail from WAN</option>
<option value="3">SSH Login Fail</option>

{:else if Tselected1 == "Systems"}
<option value="1">Cold Start</option>
<option value="2">Firmware Upgrading</option>
<option value="3">Password Changed</option>
<option value="4">Reboot with reason</option>
{/if}
</select>
</td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">2nd Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">
{#if R_TCount=='1'}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled bind:value={Tselected2}>
<option disabled="" value="">None</option>
<option value="SMS">SMS</option>
<option value="DI">DI</option>
<option value="Modbus">Modbus</option>
<option value="MQTT Notification">MQTT Notification</option>
<option value="TCPM">TCP Message</option>
<option value="WANs">WAN Status</option>
<option value="LANs">LAN Status</option>
<option value="Logins">Login Status</option>
<option value="Systems">System Status</option>
</select>

{:else}


<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={Tselected2}>
<option disabled="" value="">None</option>
<option value="SMS">SMS</option>
<option value="DI">DI</option>
<option value="Modbus">Modbus</option>
<option value="MQTT Notification">MQTT Notification</option>
<option value="TCPM">TCP Message</option>
<option value="WANs">WAN Status</option>
<option value="LANs">LAN Status</option>
<option value="Logins">Login Status</option>
<option value="Systems">System Status</option>
</select>
{/if}


    </td>
</tr>



<tr>
      <td>
{#if Tselected2 == "WANs" || Tselected2 == "Logins" || Tselected2 == "LANs" || Tselected2 == "Systems"}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}

      </td>
<td class= "pl-4 pt-4">

{#if R_TCount=='1'}
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled bind:value={TselectedProfile2}>
    <option disabled="" value="">None</option>
    {#if Tselected2 == 'SMS'}
      <option value="1">T_sms_</option>
    {:else if Tselected2 == 'DI'}
      <option value="2">T_DI_</option>
    {:else if Tselected2 == "Modbus"}
    <option value="3">T_Modbus_</option>
    {:else if Tselected2 == "WANs"}
<option value="1">C-WAN Link Down</option>
<option value="2">C-WAN Link Up</option>
<option value="3">WAN Link Down</option>
<option value="4">Dial Up failed 5 times</option>
<option value="5">WAN Failover</option>
<option value="6">SIM Switch</option>
{:else if Tselected2 == "LANs"}
<option value="1">Link Down</option>
<option value="2">Link Up</option>
{:else if Tselected2 == "Logins"}
<option value="1">Web Login Fail from LAN</option>
<option value="2">Web Login Fail from WAN</option>
<option value="3">SSH Login Fail</option>
{:else if Tselected2 == "Systems"}
<option value="1">Cold Start</option>
<option value="2">Firmware Upgrading</option>
<option value="3">Password Changed</option>
<option value="4">Reboot with reason</option>
    {/if}
    </select>
{:else}

    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={TselectedProfile2}>
    <option disabled="" value="">None</option>
    {#if Tselected2 == 'SMS'}
      <option value="1">T_sms_</option>
    {:else if Tselected2 == 'DI'}
      <option value="2">T_DI_</option>
    {:else if Tselected2 == "Modbus"}
    <option value="3">T_Modbus_</option>
    {:else if Tselected2 == "WANs"}
<option value="1">C-WAN Link Down</option>
<option value="2">C-WAN Link Up</option>
<option value="3">WAN Link Down</option>
<option value="4">Dial Up failed 5 times</option>
<option value="5">WAN Failover</option>
<option value="6">SIM Switch</option>
{:else if Tselected2 == "LANs"}
<option value="1">Link Down</option>
<option value="2">Link Up</option>
{:else if Tselected2 == "Logins"}
<option value="1">Web Login Fail from LAN</option>
<option value="2">Web Login Fail from WAN</option>
<option value="3">SSH Login Fail</option>
{:else if Tselected2 == "Systems"}
<option value="1">Cold Start</option>
<option value="2">Firmware Upgrading</option>
<option value="3">Password Changed</option>
<option value="4">Reboot with reason</option>
    {/if}
    </select>
{/if}


</td>
</tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">3rd Trigger Catalog</p></td>
    <td class= "pl-4 pt-4">


{#if R_TCount=='3'}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={Tselected3}>
<option disabled="" value="">None</option>
<option value="SMS">SMS</option>
<option value="DI">DI</option>
<option value="Modbus">Modbus</option>
<option value="MQTT Notification">MQTT Notification</option>
<option value="TCPM">TCP Message</option>
<option value="WANs">WAN Status</option>
<option value="LANs">LAN Status</option>
<option value="Logins">Login Status</option>
<option value="Systems">System Status</option>
</select>

{:else}

<select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled bind:value={Tselected3}>
<option disabled="" value="">None</option>
<option value="SMS">SMS</option>
<option value="DI">DI</option>
<option value="Modbus">Modbus</option>
<option value="MQTT Notification">MQTT Notification</option>
<option value="TCPM">TCP Message</option>
<option value="WANs">WAN Status</option>
<option value="LANs">LAN Status</option>
<option value="Logins">Login Status</option>
<option value="Systems">System Status</option>
</select>


{/if}
    </td>
</tr>




<tr>
      <td>
{#if Tselected3 == "WANs" || Tselected3 == "Logins" || Tselected3 == "LANs" || Tselected3 == "Systems"}
      <p class="pl-20 pt-4 text-lg font-light text-right">Status</p>
{:else}

      <p class="pl-20 pt-4 text-lg font-light text-right">Profile</p>
{/if}
      </td>
<td class= "pl-4 pt-4">

{#if R_TCount=='3'}
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={TselectedProfile3}>
    <option disabled="" value="">None</option>
    {#if Tselected3 == 'SMS'}
      <option value="1">T_sms_</option>
    {:else if Tselected3 == 'DI'}
      <option value="2">T_DI_</option>
    {:else if Tselected3 == "Modbus"}
    <option value="3">T_Modbus_</option>
    {:else if Tselected3 == "WANs"}
<option value="1">C-WAN Link Down</option>
<option value="2">C-WAN Link Up</option>
<option value="3">WAN Link Down</option>
<option value="4">Dial Up failed 5 times</option>
<option value="5">WAN Failover</option>
<option value="6">SIM Switch</option>
{:else if Tselected3 == "LANs"}
<option value="1">Link Down</option>
<option value="2">Link Up</option>
{:else if Tselected3 == "Logins"}
<option value="1">Web Login Fail from LAN</option>
<option value="2">Web Login Fail from WAN</option>
<option value="3">SSH Login Fail</option>
{:else if Tselected3 == "Systems"}
<option value="1">Cold Start</option>
<option value="2">Firmware Upgrading</option>
<option value="3">Password Changed</option>
<option value="4">Reboot with reason</option>
    {/if}
    </select>
{:else}
    <select class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled bind:value={TselectedProfile3}>
    <option disabled="" value="">None</option>
    {#if Tselected3 == 'SMS'}
      <option value="1">T_sms_</option>
    {:else if Tselected3 == 'DI'}
      <option value="2">T_DI_</option>
    {:else if Tselected3 == "Modbus"}
    <option value="3">T_Modbus_</option>
    {:else if Tselected3 == "WANs"}
<option value="1">C-WAN Link Down</option>
<option value="2">C-WAN Link Up</option>
<option value="3">WAN Link Down</option>
<option value="4">Dial Up failed 5 times</option>
<option value="5">WAN Failover</option>
<option value="6">SIM Switch</option>
{:else if Tselected3 == "LANs"}
<option value="1">Link Down</option>
<option value="2">Link Up</option>
{:else if Tselected3 == "Logins"}
<option value="1">Web Login Fail from LAN</option>
<option value="2">Web Login Fail from WAN</option>
<option value="3">SSH Login Fail</option>
{:else if Tselected3 == "Systems"}
<option value="1">Cold Start</option>
<option value="2">Firmware Upgrading</option>
<option value="3">Password Changed</option>
<option value="4">Reboot with reason</option>
    {/if}
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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Delay Second</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_DelayS} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action Option</p></td>

    <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
    <Radio bind:group={R_Once_Repeat} value='once' >Once</Radio>
    <Radio bind:group={R_Once_Repeat} value='repeat'>Repeat</Radio>
    </div></td>
    </tr>
{#if R_Once_Repeat == 'repeat'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_Repeat} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_RepeatInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></td>

</tr>
{:else}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Count</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_Repeat} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500  disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled></td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Repeat Interval</p></td><td class="pl-5 pt-5"><input type="number" bind:value={R_RepeatInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-50  disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled></td>

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
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionCatalogList} placeholder="None" bind:value={Aselected}/></td>


</tr>



{#if Aselected == 'SMS'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionSMSList} placeholder="None" /></td>

</tr>

{:else if Aselected == 'DO'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionDIList} placeholder="None" /></td>

</tr>
{:else if Aselected == "Modbus"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionMBList} placeholder="None" /></td>

</tr>


{:else if Aselected == "Email"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionEmailList} placeholder="None" /></td>

</tr>

{:else if Aselected == "System"}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Operation</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionSystemList} placeholder="None" /></td>

</tr>

{:else if Aselected="TCPM"}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionTCPMList} placeholder="None" /></td>

</tr>

{:else if Aselected="Line"}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionLineList} placeholder="None" /></td>

</tr>

{:else if Aselected="MQTTP"}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={ActionMQTTPList} placeholder="None" /></td>

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
    <td class="pl-1"><Button color="dark" pill={true} on:click={Rule_Modal_Finish}>Finish</Button></td>


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



