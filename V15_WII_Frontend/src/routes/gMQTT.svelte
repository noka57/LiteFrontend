<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import './global.css';
  import {
    eventEngineConfig,
    ChangedEventEngineConfig,
    EventEngine_TriggerMQTT_ConfigChangedLog,
    EventEngine_ActionMQTT_ConfigChangedLog,
    sdataLoggerConfig,
    ChangedSDataLoggerConfig,
    SDatalogger_MonitorMode_Cloud_ConfigChangedLog,
    SDatalogger_ProxyMode_Cloud_ConfigChangedLog, 
    genericMQTTConfig,
    GenericMQTTConfigChangedLog,
    ChangedGenericMQTTConfig
  } from "./configG.js"


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let generic_mqtt_data="";
  let changed_generic_mqtt_data = {};
  let saved_changed_generic_mqtt_data ={};

  let generic_mqtt_changedValues = [];
  let generic_mqtt_current_index;
  let new_generic_mqtt_index;



  let sdata_logger_proxy_cloud_changedValues = [];
  let sdata_logger_monitor_cloud_changedValues = [];

  let sdata_logger_data="";
  let saved_changed_sdata_logger_data="";  


  let event_engine_trigger_mqtt_changeValues=[];
  let event_engine_action_mqtt_changeValues=[];


  let event_engine_data="";
  let saved_changed_event_engine_data ="";

  let getDataReady=0;


  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });


  sdataLoggerConfig.subscribe(val => {
      sdata_logger_data = val;
  });

  ChangedSDataLoggerConfig.subscribe(val => {
      saved_changed_sdata_logger_data = val;
  });

  genericMQTTConfig.subscribe(val => {
      generic_mqtt_data = val;
  });


  GenericMQTTConfigChangedLog.subscribe(val => {
      generic_mqtt_changedValues = val;
  });

  ChangedGenericMQTTConfig.subscribe(val => {
      saved_changed_generic_mqtt_data = val;
  });

  eventEngineConfig.subscribe(val => {
      event_engine_data = val;
  });

  ChangedEventEngineConfig.subscribe(val => {
      saved_changed_event_engine_data = val;
  });


  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_cloud_changedValues = val;
  });

  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_cloud_changedValues = val;
  });


  EventEngine_TriggerMQTT_ConfigChangedLog.subscribe(val => {
      event_engine_trigger_mqtt_changeValues = val;
  });

  EventEngine_ActionMQTT_ConfigChangedLog.subscribe(val => {
      event_engine_action_mqtt_changeValues = val;
  });


  let modify_Modal=false;
  let modify_index;

  let BackupItem={
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  };

  let NewItem=[
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  }
  ,{
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  },
  {
    enable: true,
    delete: false,
    brokerHost: "",
    brokerPort: 12345,
    tls: 0,
    brokerCaCert: "testca.cert",
    clientCert: "testClient.cert",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    dataCompression: 0,
    retained:0,
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0,
    dataPriority: 0
  }


  ];

  let new_item_index;
  let new_modal;


  function NewMQTT_Item_Invoker(index)
  {
    NewItem[index].enable=true;
    NewItem[index].delete=false;
    NewItem[index].brokerHost=""
    NewItem[index].brokerPort=1883;
    NewItem[index].tls=0;
    NewItem[index].brokerCaCert="";
    NewItem[index].clientCert="";
    NewItem[index].clientId="";
    NewItem[index].account="";
    NewItem[index].password="";
    NewItem[index].qos=0;
    NewItem[index].keepAliveInterval=60;    
    NewItem[index].dataCompression=0;        
    NewItem[index].retained=0;
    NewItem[index].dataPushInterval=1;
    NewItem[index].dataPushIntervalValue=15;
    NewItem[index].linkLostRetransmit=0;
    NewItem[index].dataPriority=0;

    new_item_index=index;
    new_modal = true;
  }

  function AddNewMQTT(index)
  {
    new_modal = false;

    changed_generic_mqtt_data.config.cloud_genericMqtt_profile=[...changed_generic_mqtt_data.config.cloud_genericMqtt_profile,NewItem[index]];
  }


  function deleteMQTT(index)
  {
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].delete = true;
  }

  function RestoreDeleteMQTT(index)
  {
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].delete = false;
  }


  function TriggerModifyMQTT(index)
  {
    modify_Modal=true;
    modify_index=index;
    BackupItem.enable=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].enable;
    BackupItem.delete=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].delete;
    BackupItem.brokerHost=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].brokerHost;
    BackupItem.brokerPort=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].brokerPort;
    BackupItem.tls=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].tls;
    BackupItem.brokerCaCert=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].brokerCaCert;
    BackupItem.clientCert=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].clientCert;
    BackupItem.clientId=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].clientId;
    BackupItem.account=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].account;
    BackupItem.password=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].password;
    BackupItem.qos=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].qos;
    BackupItem.keepAliveInterval=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].keepAliveInterval;    
    BackupItem.dataCompression=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataCompression;   
    BackupItem.retained=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].retained;   
    BackupItem.dataPushInterval=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataPushInterval; 
    BackupItem.dataPushIntervalValue=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataPushIntervalValue; 
    BackupItem.linkLostRetransmit=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].linkLostRetransmit;
    BackupItem.dataPriority=changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataPriority;    
  }


  function NoModifyMQTT(index)
  {
    modify_Modal=false;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].enable=BackupItem.enable;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].delete=BackupItem.delete;    
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].brokerHost=BackupItem.brokerHost;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].brokerPort=BackupItem.brokerPort;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].tls=BackupItem.tls;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].brokerCaCert=BackupItem.brokerCaCert;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].clientCert=BackupItem.clientCert;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].clientId=BackupItem.clientId;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].account=BackupItem.account;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].password=BackupItem.password;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].qos=BackupItem.qos;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].keepAliveInterval=BackupItem.keepAliveInterval;    
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataCompression=BackupItem.dataCompression;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].retained=BackupItem.retained;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataPushInterval=BackupItem.dataPushInterval;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataPushIntervalValue=BackupItem.dataPushIntervalValue; 
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].linkLostRetransmit=BackupItem.linkLostRetransmit;
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile[index].dataPriority=BackupItem.dataPriority;  
  
  }

  function ModifyMQTT(index)
  {
    modify_Modal=false;
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
                generic_mqtt_changedValues=[...generic_mqtt_changedValues, changedstr];
              }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              generic_mqtt_changedValues=[...generic_mqtt_changedValues, changedstr];
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
          
          generic_mqtt_changedValues=[...generic_mqtt_changedValues, changedstr];

        }
      }
  }





  function saveMQTT()
  {
    console.log("save MQTT");
    if (generic_mqtt_changedValues.length != 0)
    {
      generic_mqtt_changedValues=[];
    }

    for (let i = 0; i < Math.min(changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length, generic_mqtt_data.config.cloud_genericMqtt_profile.length); i++) 
    {
      compareObjects(changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i], generic_mqtt_data.config.cloud_genericMqtt_profile[i], 0, 1,i+1);

    }

  //  console.log(changed_generic_mqtt_data.config.cloud_genericMqtt_profile);


    let tempForDelete=[];
    for (let i = 0; i< changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length; i++)
    {
      if (!changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i]]
      }

    }
   

    let deleteProxyCount=0;
    let moveProxyProfile=0;
    let deleteMonitorCount=0;
    let moveMonitorCount=0;

    for (let i=0; i < Math.min(changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length, saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length); i++) 
    {

      deleteProxyCount=0;
      moveProxyProfile=0;
      deleteMonitorCount=0;
      moveMonitorCount=0;

      let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;

      for (let j=0; j < saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile.length;j++)
      {
        console.log(saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile[j]);
        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile[j] == item)
        {
          if (!changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete &&(changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost ||
          changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort))
          {
            let new_item= changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;

            saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile[j]=new_item;

            let changedstr="CloudProfile No. "+ (j+1)+ " is changed to "+ new_item;
            sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
            //console.log(changedstr);
            SDatalogger_ProxyMode_Cloud_ConfigChangedLog.set(sdata_logger_proxy_cloud_changedValues);
            //ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data); 
          }



          if (!saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete && changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete)
          {
            let changedstr="CloudProfile No. "+ (j+1)+ " is deleted";
            sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];

            SDatalogger_ProxyMode_Cloud_ConfigChangedLog.set(sdata_logger_proxy_cloud_changedValues);
            deleteProxyCount+=1;

            saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile[j]="";
            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic.length != 0)
            {
              saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic[j]="";
            } 

            if (j==0)
            {
              if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile.length==2)
              {
                moveProxyProfile=1;
              }

            }
          }
          
        }
      }

      if (moveProxyProfile==1 && deleteProxyCount==1)
      {
        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile[0]=saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile[1];
        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic.length == 2)
        {
          saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic[0]=saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic[1];
        }

      }

      if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile.length != 0)
      {
        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile.length-=deleteProxyCount;
      }

      if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic.length != 0)
      {
        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic.length-=deleteProxyCount;
      }
      ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

      for (let j=0; j < saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile.length;j++)
      {

        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile[j] == item)
        {
          if (!changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete&&(changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost ||
          changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort))
          {
            let new_item= changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;

            saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile[j]=new_item;

            let changedstr="CloudProfile No. "+ (j+1)+ " is changed to "+ new_item;
            sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];

            //console.log(changedstr);
            SDatalogger_MonitorMode_Cloud_ConfigChangedLog.set(sdata_logger_monitor_cloud_changedValues);
            //ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data); 

          }



          if (!saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete && changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete)
          {
            let changedstr="CloudProfile No. "+ (j+1)+ " is deleted";
            sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];

           // console.log(changedstr);
            SDatalogger_MonitorMode_Cloud_ConfigChangedLog.set(sdata_logger_monitor_cloud_changedValues);
            deleteMonitorCount+=1;

            saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile[j]=""

            if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic.length != 0)
            {
              saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic[j]="";
            }
            if (j==0)
            {
              if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile.length==2)
              {
                moveMonitorCount=1;
              }
            }

          }
        }
      }


      if (moveMonitorCount==1 && deleteMonitorCount==1)
      {
        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile[0]=saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile[1];

        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic.length ==2)
        {
          saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic[0]=saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic[1];
        } 
      }

      if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile.length!=0)
      {
        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile.length-=deleteMonitorCount;
      }

      if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic.length != 0)
      {
        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic.length-=deleteMonitorCount;
      }
      
      ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

      for (let j=0; j < saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification.length;j++)
      {
        if (saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[j].mqttProfile == item)
        {
          if (!changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete&&(changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost ||
          changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort))
          {
            let new_item= changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;

            saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[j].mqttProfile=new_item;

            let changedstr="List No." +(j+1) +" item is changed: value of mqttProfile is changed to "+ new_item;
            event_engine_trigger_mqtt_changeValues=[...event_engine_trigger_mqtt_changeValues, changedstr];

           // console.log(changedstr);
            EventEngine_TriggerMQTT_ConfigChangedLog.set(event_engine_trigger_mqtt_changeValues);
            ChangedEventEngineConfig.set(saved_changed_event_engine_data); 

          }

          if (!saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete && changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete)
          {
            let changedstr="List No." +(j+1) +" item is changed: value of mqttProfile is is deleted";
            event_engine_trigger_mqtt_changeValues=[...event_engine_trigger_mqtt_changeValues, changedstr];

            saved_changed_event_engine_data.config.service_eventEngine_triggerProfile.mqttNotification[j].mqttProfile="";
            EventEngine_TriggerMQTT_ConfigChangedLog.set(event_engine_trigger_mqtt_changeValues);
            ChangedEventEngineConfig.set(saved_changed_event_engine_data); 
          }

        }
      }


      for (let j=0; j < saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish.length;j++)
      {
        if (saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[j].mqttProfile == item)
        {
          if (!changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete&&(changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost ||
          changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort != saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort))
          {
            let new_item= changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;

            saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[j].mqttProfile=new_item;

            let changedstr="List No." +(j+1) +" item is changed: value of mqttProfile is changed to "+ new_item;
            event_engine_action_mqtt_changeValues=[...event_engine_action_mqtt_changeValues, changedstr];

            console.log(changedstr);
            EventEngine_ActionMQTT_ConfigChangedLog.set(event_engine_action_mqtt_changeValues);
            ChangedEventEngineConfig.set(saved_changed_event_engine_data); 

          }


          if (!saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete && changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].delete)
          {
            let changedstr="List No." +(j+1) +" item is changed: value of mqttProfile is is deleted";
            event_engine_action_mqtt_changeValues=[...event_engine_action_mqtt_changeValues, changedstr];

            saved_changed_event_engine_data.config.service_eventEngine_actionProfile.mqttPublish[j].mqttProfile="";
            EventEngine_ActionMQTT_ConfigChangedLog.set(event_engine_action_mqtt_changeValues);
            ChangedEventEngineConfig.set(saved_changed_event_engine_data); 
          }
        }
      }
    }

    if (changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length > generic_mqtt_data.config.cloud_genericMqtt_profile.length)
    {
      let addedCount=changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length-generic_mqtt_data.config.cloud_genericMqtt_profile.length;

      for (let k=generic_mqtt_data.config.cloud_genericMqtt_profile.length; k < changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length; k++)
      {
        if (changed_generic_mqtt_data.config.cloud_genericMqtt_profile[k].delete)
        {
          addedCount--;
        }
      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Profile List";
        generic_mqtt_changedValues=[...generic_mqtt_changedValues, changedstr];
      }
    }

    if (changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length < generic_mqtt_data.config.cloud_genericMqtt_profile.length)
    {
      let deletedCount=generic_mqtt_data.config.cloud_genericMqtt_profile.length-changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;
      let changedstr="Delete "+deletedCount+" item(s) from Profile List";
      generic_mqtt_changedValues=[...generic_mqtt_changedValues, changedstr];
    }

    GenericMQTTConfigChangedLog.set(generic_mqtt_changedValues);
    

    //saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile=JSON.parse(JSON.stringify(changed_generic_mqtt_data.config.cloud_genericMqtt_profile));

    saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile=JSON.parse(JSON.stringify(tempForDelete));
    changed_generic_mqtt_data.config.cloud_genericMqtt_profile=JSON.parse(JSON.stringify(tempForDelete));


    ChangedGenericMQTTConfig.set(saved_changed_generic_mqtt_data);
    console.log(generic_mqtt_changedValues);

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

  async function getSmartDataLoggerData() {
        const res = await fetch(window.location.origin+"/GETSmartDataLogger", {
            method: 'POST',
            body: sessionBinary
        })

        if (res.status == 200)
        {
            sdata_logger_data =await res.json();
            console.log(sdata_logger_data);
            sdataLoggerConfig.set(sdata_logger_data);

            saved_changed_sdata_logger_data= JSON.parse(JSON.stringify(sdata_logger_data));
            ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);

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

      saved_changed_event_engine_data= JSON.parse(JSON.stringify(event_engine_data));
      ChangedEventEngineConfig.set(saved_changed_event_engine_data);

    }
  }


  async function getGenericMQTTData () {
    const res = await fetch(window.location.origin+"/getGenericMQTTData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      generic_mqtt_data =await res.json();
      console.log(generic_mqtt_data);
      genericMQTTConfig.set(generic_mqtt_data);

      changed_generic_mqtt_data = JSON.parse(JSON.stringify(generic_mqtt_data));
      saved_changed_generic_mqtt_data= JSON.parse(JSON.stringify(generic_mqtt_data));
      ChangedGenericMQTTConfig.set(saved_changed_generic_mqtt_data);
      getDataReady=1;

      if (saved_changed_sdata_logger_data=="")
      {
        getSmartDataLoggerData();
      }

      if (saved_changed_event_engine_data =="")
      {
        getEventEngineData();
      }
    }
  }



  onMount(() => {

    console.log("generic mqtt sessionid: ");
    console.log(sessionid);


    if (sessionid && generic_mqtt_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getGenericMQTTData();
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
    }
    else if(sessionid && generic_mqtt_data!="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
        getDataReady=1;
        if (generic_mqtt_changedValues.length != 0)
        {
          changed_generic_mqtt_data = JSON.parse(JSON.stringify(saved_changed_generic_mqtt_data));
        }
        else
        {
          changed_generic_mqtt_data = JSON.parse(JSON.stringify(generic_mqtt_data));        
        }

        if (saved_changed_sdata_logger_data=="")
        {
          getSmartDataLoggerData();
        }


        if (saved_changed_event_engine_data =="")
        {
          getEventEngineData();
        }
    }

  });



 </script>


<Tabs style="underline">
  <TabItem open title="Profile">

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-1">No</TableHeadCell>
    <TableHeadCell class="w-18">Broker Host</TableHeadCell>
    <TableHeadCell class="!p-1">TLS</TableHeadCell>
    <TableHeadCell>Client ID</TableHeadCell>
    <TableHeadCell>Account</TableHeadCell>
    <TableHeadCell class="!p-1 w-4">QoS</TableHeadCell>
    <TableHeadCell class="!p-1 w-4">Retained</TableHeadCell>    
    <TableHeadCell class="!p-3 w-18">Keep Alive Interval</TableHeadCell>
    <TableHeadCell class="!p-3 w-10">Data Compression</TableHeadCell>
    <TableHeadCell class="w-10">Data Push Interval</TableHeadCell>
    <TableHeadCell class="w-10">Link Lost Retransmit</TableHeadCell>
    <TableHeadCell class="w-10">Data Priority</TableHeadCell>    
     </TableHead>
  <TableBody>


{#if getDataReady == 1}
{#each changed_generic_mqtt_data.config.cloud_genericMqtt_profile as gMQTT, index}


{#if gMQTT.delete}


    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-0 w-10">
<button on:click={() => RestoreDeleteMQTT(index)}>
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


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-4 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={gMQTT.enable} disabled>

      </td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-4 strikeout !p-1">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{gMQTT.brokerHost}:{gMQTT.brokerPort}</td>
{#if gMQTT.tls == 0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-4 strikeout !p-1">No</td>
{:else if gMQTT.tls==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-4 strikeout !p-1">Yes</td>
{/if}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{gMQTT.clientId}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{gMQTT.account}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-1 w-4 strikeout">{gMQTT.qos}</td>
{#if gMQTT.retained ==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-1 w-4 strikeout">No</td>
{:else if gMQTT.retained ==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-1 w-4 strikeout">Yes</td>
{/if}

      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-3 w-18 strikeout">{gMQTT.keepAliveInterval} s</td>
{#if gMQTT.dataCompression == 0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-3 w-10 strikeout">None</td>
{:else if gMQTT.dataCompression == 1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-3 w-10 strikeout">gzip</td>
{/if}

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-3 w-10 strikeout">
{#if gMQTT.dataPushInterval == 0}Right Away
{:else if gMQTT.dataPushInterval == 1} {gMQTT.dataPushIntervalValue} min(s)
{/if}
</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-3 w-10 strikeout">
{gMQTT.linkLostRetransmit} delay second(s)
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-3 w-10 strikeout">
{#if gMQTT.dataPriority==0} Latest First
{:else if gMQTT.dataPriority==1} First In First Out
{/if}
</td>
      </tr>

{:else}

    <TableBodyRow>
    <TableBodyCell class="!p-1 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyMQTT(index)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteMQTT(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


               <TableBodyCell class="w-4"><input type="checkbox"  bind:checked={gMQTT.enable}></TableBodyCell>

      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{gMQTT.brokerHost}:{gMQTT.brokerPort}</TableBodyCell>
{#if gMQTT.tls == 0}
      <TableBodyCell class="w-4 !p-1">No</TableBodyCell>
{:else if gMQTT.tls==1}
      <TableBodyCell class="w-4 !p-1">Yes</TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{gMQTT.clientId}</TableBodyCell>
      <TableBodyCell class="w-10">{gMQTT.account}</TableBodyCell>
      <TableBodyCell class="!p-1 w-4">{gMQTT.qos}</TableBodyCell>
{#if gMQTT.retained ==0}
      <TableBodyCell class="!p-1 w-4">No</TableBodyCell>
{:else if gMQTT.retained ==1}
      <TableBodyCell class="!p-1 w-4">Yes</TableBodyCell>
{/if}

      <TableBodyCell class="!p-3 w-18">{gMQTT.keepAliveInterval} s</TableBodyCell>
{#if gMQTT.dataCompression == 0}
      <TableBodyCell class="!p-3 w-10">None</TableBodyCell>
{:else if gMQTT.dataCompression == 1}
      <TableBodyCell class="!p-3 w-10">gzip</TableBodyCell>
{/if}

<TableBodyCell class="!p-3 w-10">
{#if gMQTT.dataPushInterval == 0}Right Away
{:else if gMQTT.dataPushInterval == 1} {gMQTT.dataPushIntervalValue} min(s)
{/if}

</TableBodyCell>

<TableBodyCell class="!p-3 w-10">
{gMQTT.linkLostRetransmit} delay second(s)
</TableBodyCell>

<TableBodyCell class="!p-3 w-10">
{#if gMQTT.dataPriority==0} Latest First
{:else if gMQTT.dataPriority==1} First In First Out
{/if}
</TableBodyCell>

    </TableBodyRow>

{/if}

{/each}
{/if}


 <TableBodyRow>
    <TableBodyCell class="!p-1 w-10">

{#if getDataReady == 1}
{#if changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length < 10}
    <button on:click={() => NewMQTT_Item_Invoker(changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>

{/if} 
{/if} 
</TableBodyCell>
    <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="!p-0 w-10"></TableBodyCell>

    <TableBodyCell class="w-4"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-4 !p-1"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4"></TableBodyCell>
      <TableBodyCell class="!p-3 w-18"></TableBodyCell>
      <TableBodyCell class="!p-3 w-10"></TableBodyCell>
      <TableBodyCell class="!p-3 w-10"></TableBodyCell>
      <TableBodyCell class="!p-3 w-10"></TableBodyCell>
      <TableBodyCell class="!p-3 w-10"></TableBodyCell>
</TableBodyRow>

<tr class="pt-5">
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-1"><Button color="blue" pill={true} on:click={saveMQTT}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



 </TableBody>

<Modal bind:open={modify_Modal} size="xl" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyMQTT(modify_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Broker Host</p></td><td class="pl-5 pt-5">
<div class="flex gap-2">
      <input type="text" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].brokerHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2 font-medium">:</p>
<input type="number" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].brokerPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

</div>
      </td>



  </tr>



<tr class="pt-4">
  <td><p class="pl-20 pt-3 text-lg font-light text-right h-10">TLS</p>

  </td>

    <td class="pl-4 pt-4" ><div class="flex gap-2">
  <Radio class="pb-2 pt-2 h-10" bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls} value={0} >No</Radio>
  <Radio class="pb-2 pt-2 h-10" bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls} value={1} >Yes</Radio>
{#if changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].tls == 1}
 <p class="pl-2 pt-3 pb-2 font-medium">Broker CA Certificate:</p>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 h-10 w-60" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].brokerCaCert}>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>
 <p class="pl-2 pt-3 pb-2 font-medium">Local Certificate:</p>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 h-10 w-48" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].clientCert}>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>

{/if}

</div>
</td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].clientId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5">
      <input type="text" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">QoS</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].qos} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Retained</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].retained} value={1} >Yes</Radio>
  <Radio class="pb-2" bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].retained} value={0} >No</Radio>

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Keep Alive Interval</p></td><td class="pl-5 pt-5">
<div class="flex gap-2">
<input type="number" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].keepAliveInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-2 pt-2 text-lg"> second(s)</p>
</div>
</td>
</tr>



<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Compression</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataCompression} value={0} >No</Radio>
  <Radio bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataCompression} value={1} >gzip</Radio>

</div>



</td>


</tr>


 <tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataPushInterval} value={0} >Right Away</Radio>
  <Radio bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataPushInterval} value={1} >User Defined (mins): </Radio>
{#if changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataPushInterval==0}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>

{:else}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataPushIntervalValue}>
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4">
<div class="flex gap-4">
      <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].linkLostRetransmit}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4">

<div class="flex gap-4">
  <Radio bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataPriority} value={0}>Latest First</Radio>
  <Radio bind:group={changed_generic_mqtt_data.config.cloud_genericMqtt_profile[modify_index].dataPriority} value={1}>First In, First Out </Radio>

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
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyMQTT(modify_index)}>Modify</Button></td>

  </tr>

</table>

  </form>
</Modal>
<Modal bind:open={new_modal} size="xl" class="w-full" autoclose>

<label>
  <input type="checkbox"  bind:checked={NewItem[new_item_index].enable}>
  Enable
</label>
<p class="mt-10"></p>



<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Broker Host</p></td><td class="pl-5 pt-5">
<div class="flex gap-2">
      <input type="text" bind:value={NewItem[new_item_index].brokerHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pt-2 font-medium">:</p>
<input type="number" bind:value={NewItem[new_item_index].brokerPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">

</div>
      </td>



  </tr>



<tr class="pt-4">
  <td><p class="pl-20 pt-3 text-lg font-light text-right h-10">TLS</p>

  </td>

    <td class="pl-4 pt-4" ><div class="flex gap-2">
  <Radio class="pb-2 pt-2 h-10" bind:group={NewItem[new_item_index].tls} value={0} >No</Radio>
  <Radio class="pb-2 pt-2 h-10" bind:group={NewItem[new_item_index].tls} value={1} >Yes</Radio>
{#if NewItem[new_item_index].tls == 1}
 <p class="pl-2 pt-3 pb-2 font-medium">Broker CA Certificate:</p>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 h-10 w-60" bind:value={NewItem[new_item_index].brokerCaCert}>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>
 <p class="pl-2 pt-3 pb-2 font-medium">Local Certificate:</p>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 h-10 w-48" bind:value={NewItem[new_item_index].clientCert}>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>

{/if}

</div>
</td>
</tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItem[new_item_index].clientId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5">
      <input type="text" bind:value={NewItem[new_item_index].account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItem[new_item_index].password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">QoS</p></td><td class="pl-5 pt-5"><input type="number" bind:value={NewItem[new_item_index].qos} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Retained</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={NewItem[new_item_index].retained} value={1} >Yes</Radio>
  <Radio class="pb-2" bind:group={NewItem[new_item_index].retained} value={0} >No</Radio>

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Keep Alive Interval</p></td><td class="pl-5 pt-5">
<div class="flex gap-2">
<input type="number" bind:value={NewItem[new_item_index].keepAliveInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-2 pt-2 text-lg"> second(s)</p>
</div>
</td>
</tr>



<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Compression</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={NewItem[new_item_index].dataCompression} value={0} >No</Radio>
  <Radio bind:group={NewItem[new_item_index].dataCompression} value={1} >gzip</Radio>

</div>



</td>


</tr>


 <tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={NewItem[new_item_index].dataPushInterval} value={0} >Right Away</Radio>
  <Radio bind:group={NewItem[new_item_index].dataPushInterval} value={1} >User Defined (mins): </Radio>
{#if NewItem[new_item_index].dataPushInterval==0}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 w-16" disabled>

{:else}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-16" bind:value={NewItem[new_item_index].dataPushIntervalValue}>
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-4 pt-4">
<div class="flex gap-4">
      <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={NewItem[new_item_index].linkLostRetransmit}>
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-4 pt-4">

<div class="flex gap-4">
  <Radio bind:group={NewItem[new_item_index].dataPriority} value={0}>Latest First</Radio>
  <Radio bind:group={NewItem[new_item_index].dataPriority} value={1}>First In, First Out </Radio>

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
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddNewMQTT(new_item_index)}>Add</Button></td>

  </tr>


</table>


</Modal>
</Table>


  </TabItem>


 </Tabs>