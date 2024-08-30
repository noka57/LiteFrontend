<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator, MultiSelect } from 'flowbite-svelte';

  import './global.css';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    sdataLoggerConfig,
    SDatalogger_MonitorMode_Topic_ConfigChangedLog,
    SDatalogger_MonitorMode_Cloud_ConfigChangedLog,
    SDatalogger_MonitorMode_Edge_ConfigChangedLog,    
    SDatalogger_ProxyMode_Topic_ConfigChangedLog,
    SDatalogger_ProxyMode_Cloud_ConfigChangedLog,
    SDatalogger_ProxyMode_Edge_ConfigChangedLog,
    SDatalogger_General_ConfigChangedLog,
    ChangedSDataLoggerConfig,
    modbusConfig,
    ChangedModbusConfig,
    genericMQTTConfig,
    ChangedGenericMQTTConfig,
    awsIoTcoreConfig,
    ChangedAWSIoTcoreConfig,
    azureConfig,
    ChangedAzureConfig,
  } from "./configG.js"


  let currentStep = 1;
  let steps = ['Step 1', 'Step 2', 'Step 3'];
  let modalElement;
  let tagsArray;


  let sdata_logger_data="";
  let changed_sdata_logger_data = {};
  let saved_changed_sdata_logger_data ={};



  let modbus_data="";
  let saved_changed_modbus_data="";


  let generic_mqtt_data="";
  let saved_changed_generic_mqtt_data ="";

  let awsIoT_core_data="";
  let saved_changed_awsIoT_core_data ="";


  let azure_data="";
  let saved_changed_azure_data ="";

  let sdata_logger_general_changedValues = [];
  let sdata_logger_proxy_edge_changedValues = [];
  let sdata_logger_proxy_cloud_changedValues = [];
  let sdata_logger_proxy_topic_changedValues = [];  
  let sdata_logger_monitor_edge_changedValues = [];
  let sdata_logger_monitor_cloud_changedValues = [];
  let sdata_logger_monitor_topic_changedValues = [];



    let pos = { x: 0, y: 0 }
    let menu = { h: 0, w: 0 }
    let browser = { h: 0, y: 0 }
    let showMenu = false;
    let content
    let rect;

    function rightClickContextMenu(e){
        showMenu = true
        browser = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        pos = {
            x: e.clientX,
            y: e.clientY
        };

        if (modalElement)
        {

            if (modalElement instanceof HTMLElement) 
            {
                rect = modalElement.getBoundingClientRect();
                //console.log('Modal position:', rect);
                //console.log('Top:', rect.top, 'Left:', rect.left);
            } else {
                console.error('modalElement is not an HTMLElement');
            }

        }


        // If bottom part of context menu will be displayed
        // after right-click, then change the position of the
        // context menu. This position is controlled by `top` and `left`
        // at inline style. 
        // Instead of context menu is displayed from top left of cursor position
        // when right-click occur, it will be displayed from bottom left.
        if (browser.h -  pos.y < menu.h)
            pos.y = pos.y - menu.h
        if (browser.w -  pos.x < menu.w)
            pos.x = pos.x - menu.w

            pos.x= pos.x-rect.left+30
            pos.y=pos.y-rect.top+100
  
    }
    function onPageClick(e)
    {
        showMenu = false;
    }
    function getContextMenuDimension(node){
        // This function will get context menu dimension
        // when navigation is shown => showMenu = true
        let height = node.offsetHeight
        let width = node.offsetWidth
        menu = {
            h: height,
            w: width
        }


    }





  let getDataReady=0;    
  
  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });

  sdataLoggerConfig.subscribe(val => {
      sdata_logger_data = val;
  });

  SDatalogger_General_ConfigChangedLog.subscribe(val => {
      sdata_logger_general_changedValues = val;
  });

  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_edge_changedValues = val;
  });

  SDatalogger_ProxyMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_cloud_changedValues = val;
  });

  SDatalogger_ProxyMode_Topic_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_topic_changedValues = val;
  });

  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_edge_changedValues = val;
  });

  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_cloud_changedValues = val;
  });

  SDatalogger_MonitorMode_Topic_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_topic_changedValues = val;
  });


  ChangedSDataLoggerConfig.subscribe(val => {
      saved_changed_sdata_logger_data = val;
  });


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


  awsIoTcoreConfig.subscribe(val => {
      awsIoT_core_data = val;
  });

  ChangedAWSIoTcoreConfig.subscribe(val => {
      saved_changed_awsIoT_core_data = val;
  });


  azureConfig.subscribe(val => {
      azure_data = val;
  });

  ChangedAzureConfig.subscribe(val => {
      saved_changed_azure_data = val;
  });

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let ViewerSelect;
  let PFormatUDefine="Hello";
  let Monitor_CloudTopic_Target_Index="none";
  let Proxy_CloudTopic_Target_Index="none";

  const btn1 = () => 
  {
    PFormatUDefine+="$TIME$";

  };

 const btn2 = () => 
 {

    PFormatUDefine+="$ARRAY$";
 };

 const btn3 = () => 
 {

    PFormatUDefine+="$Keyword2$";
 };

 const btn4 = () => 
 {

    PFormatUDefine+="$Keyword3$";
 };

  const btn5 = () => 
 {

    PFormatUDefine+="$Keyword4$";
 };




  let CloudProfile=[];


  let dViewerCProfile=0;
  let dViewerTargetCProfile="";

  function dViewerCProfile_Check()
  {

    if (dViewerCProfile)
    {
      dViewerCProfile=0;
    }
    else
    {
      dViewerCProfile=1;
    }

  }


  let openTagList=false;
  let openDetailStatusMMS = false;
  let openDetailStatusMMT = false;
  let openDetailStatusMV = false;


  function handleClickTagList()
  {
        openTagList=!openTagList;
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


  let dViewerResult;
  let lines;
  let ViewerResultTimeStamp=[];
  let ViewerResultJsonObject=[];
  let ViewerResultReady=0;
  let ViewerResultCloudProfile=[];


  async function ExecuteViewer() {
    const res = await fetch(window.location.origin+"/PostdataLoggerViewer", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      dViewerResult =await res.text();
      console.log(dViewerResult);
      lines = dViewerResult.trim().split('\n');
      for (let i=0; i< lines.length; i++)
      {
        ViewerResultTimeStamp=[...ViewerResultTimeStamp, lines[i].slice(0,19)];
        ViewerResultJsonObject=[...ViewerResultJsonObject,JSON.parse(lines[i].split(' INFO ')[1])]
       // console.log(ViewerResultJsonObject[i].index);
        let generic_mqtt_index=ViewerResultJsonObject[i].index-1;

        let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[generic_mqtt_index].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[generic_mqtt_index].brokerPort;
        ViewerResultCloudProfile=[...ViewerResultCloudProfile, item];
        //console.log(ViewerResultCloudProfile)

      }

      ViewerResultReady=1;
      //console.log("ViewerResultTimeStamp:", ViewerResultTimeStamp);
     // console.log("ViewerResultJsonObject", ViewerResultJsonObject);

    }
    else
    {
      console.log("error data viewer");

    }
  }


  function dViewerExecute()
  {
    console.log("viewer");

    if (!sessionBinary)
    {
      console.log("sessionBinary is null");
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);
    }
    ViewerResultReady=0;
    ViewerResultTimeStamp=[];
    ViewerResultJsonObject=[];
    ViewerResultCloudProfile=[];
    ExecuteViewer();
  }


    let new_proxy_edge=[
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],     
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],   
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],    
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],      
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],     
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],    
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],     
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],    
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],    
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }

      ]
    }


    ];

    let new_proxy_edge_modal=false;
    let new_proxy_edge_index;



    function NewTimeClick(index)
    {
      new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
    }

    function NewArrayClick(index)
    {
      new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
    }

    function NewTagRawRequest(CloudIndex, TagIndex)
    {
      if (new_proxy_edge[new_proxy_edge_index].samplingCondition==1)
      {
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${New_SingleCheckedTag}`;
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREQUEST$"
      }
      else if (new_proxy_edge[new_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREQUEST$"   
          }
      }

    }

    function NewTagRawReply(CloudIndex, TagIndex)
    {
      if (new_proxy_edge[new_proxy_edge_index].samplingCondition==1)
      {
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${New_SingleCheckedTag}`;
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREPLY$"
      }
      else if (new_proxy_edge[new_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREPLY$"   
          }
      }
    }


    function NewTagStatus(CloudIndex, TagIndex)
    {
      if (new_proxy_edge[new_proxy_edge_index].samplingCondition==1)
      {
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${New_SingleCheckedTag}`;
        new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
      }
      else if (new_proxy_edge[new_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"   
          }
      }   
    }


    function NewCloudFormatChange(current_cloud_index, other_cloud_index)
    {

      if (new_proxy_edge[new_proxy_edge_index].cloud[current_cloud_index].dataLogFormat==2)
      {
        new_proxy_edge[new_proxy_edge_index].cloud[current_cloud_index].alternativeFormatCloudIndex=other_cloud_index;
        new_proxy_edge[new_proxy_edge_index].cloud[current_cloud_index].userDefineedData=new_proxy_edge[new_proxy_edge_index].cloud[other_cloud_index].userDefineedData;

      }
      else if (new_proxy_edge[new_proxy_edge_index].cloud[current_cloud_index].dataLogFormat==1)
      {
        new_proxy_edge[new_proxy_edge_index].cloud[current_cloud_index].userDefineedData="";
      }

    }


    function New_ProxyEdge_Modal_Page1()
    {
      currentStep=1;
    }

    function New_ProxyEdge_Modal_Page2()
    {
      tagsArray = Array.from(selectedNewTags);
      showMenu=false;
      currentStep=2;
    }

    function New_ProxyEdge_Modal_Page3()
    {
      showMenu=false;
      currentStep=3;
    }



    let New_SingleCheckedTag= null;

    function handleSingleCheckboxChange(tagName, isChecked) 
    {
      if (isChecked) 
      {
        New_SingleCheckedTag = tagName;
      } 
      else if (New_SingleCheckedTag === tagName) 
      {
        New_SingleCheckedTag = null; 
      }
    }


    let selectedNewTags = new Set();
    function handleMultipleCheckboxChange(tagName, isChecked) 
    {
      if (isChecked) 
      {
        selectedNewTags.add(tagName);
      } 
      else 
      {
        selectedNewTags.delete(tagName);
      }

      console.log("++selectedTags:", selectedNewTags);
    }



    function new_proxy_edge_trigger(index)
    {
        new_proxy_edge[index].enable=true;
        new_proxy_edge[index].delete=false;
        new_proxy_edge[index].samplingCondition=0;
        new_proxy_edge[index].periodMS=1000;
        new_proxy_edge[index].changePercentage=10;
        new_proxy_edge[index].modbusTag=[];
        new_proxy_edge[index].cloud=[
          {
            profile:"",
            topic:[
              {
                type: 0,
                name:""
              }
            ],
            tagDisplay:1,
            dataLogFormat: 0,
            alternativeFormatCloudIndex:0, 
            userDefineedData: ""
          },
          {
            profile:"",
            topic:[
              {
                type: 0,
                name:""
              }
            ],
            tagDisplay:1,  
            dataLogFormat: 0,
            alternativeFormatCloudIndex:1, 
            userDefineedData: ""
          }
        ];


        selectedNewTags.clear();
        New_SingleCheckedTag=null;
        currentStep=1;
        openTagList=false;
        tagsArray=[];
        new_proxy_edge_index=index;
        new_proxy_edge_modal=true;

    }

    function add_new_proxy_edge(index)
    {
        if (new_proxy_edge[index].samplingCondition==1)
        {
          new_proxy_edge[index].modbusTag[0]=New_SingleCheckedTag;

        }
        else if (new_proxy_edge[index].samplingCondition==0)
        {
          new_proxy_edge[index].modbusTag=JSON.parse(JSON.stringify(tagsArray));
        }


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData=[...changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData,new_proxy_edge[index]];

        new_proxy_edge_modal=false;
    }    


    let modify_proxy_edge_modal=false;
    let modify_proxy_edge_index;
    let BackupProxyEdge=
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],     
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0, 
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0, 
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }

      ]
    };

    function deletePE(index)
    {
      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].delete=true;
    }

    function RestoreDeletePE(index)
    {
      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].delete=false; 
    }


    function ModifyTimeClick(index)
    {
      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
    }

    function ModifyArrayClick(index)
    {
      changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
    }

    function ModifyTagRawRequest(CloudIndex, TagIndex)
    {
      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1)
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${New_SingleCheckedTag}`;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREQUEST$"
      }
      else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREQUEST$"   
          }
      }

    }

    function ModifyTagRawReply(CloudIndex, TagIndex)
    {
      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1)
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${New_SingleCheckedTag}`;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREPLY$"
      }
      else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREPLY$"   
          }
      }
    }


    function ModifyTagStatus(CloudIndex, TagIndex)
    {
      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1)
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${New_SingleCheckedTag}`;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
      }
      else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"   
          }
      }   
    }


    function ModifyCloudFormatChange(current_cloud_index, other_cloud_index)
    {

      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].dataLogFormat==2)
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].alternativeFormatCloudIndex=other_cloud_index;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].userDefineedData=new_proxy_edge[new_proxy_edge_index].cloud[other_cloud_index].userDefineedData;

      }
      else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].dataLogFormat==1)
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].userDefineedData="";
      }

    }


    function TriggerModifyProxyEdge(index)
    {

        modify_proxy_edge_index=index;
        BackupProxyEdge.enable=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].enable;
        BackupProxyEdge.delete=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].delete;      
        BackupProxyEdge.samplingCondition=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].samplingCondition;
        BackupProxyEdge.periodMS=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].periodMS;
        BackupProxyEdge.changePercentage=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].changePercentage;
 
        BackupProxyEdge.modbusTag=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTag));
        BackupProxyEdge.cloud=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].cloud));


        selectedNewTags.clear();
        New_SingleCheckedTag=null;
        currentStep=1;
        openTagList=false;
        tagsArray=[];

        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].samplingCondition==0)
        {
          for (let i=0; i < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTag.length; i++)
          {
            selectedNewTags.add(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTag[i])
          }
        }
        else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].samplingCondition==1)
        {
          New_SingleCheckedTag=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTag[0];
        }

        modify_proxy_edge_modal=true;

    }

    function NoModifyProxyEdge(index)
    {

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].enable=BackupProxyEdge.enable;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].delete=BackupProxyEdge.delete;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].samplingCondition=BackupProxyEdge.samplingCondition;


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].periodMS=BackupProxyEdge.periodMS;


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].changePercentage=BackupProxyEdge.changePercentage;


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTag==JSON.parse(JSON.stringify(BackupProxyEdge.modbusTag));
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].cloud=JSON.parse(JSON.stringify(BackupProxyEdge.cloud));

        modify_proxy_edge_modal=false;
    }


    function ModifyProxyEdge()
    {
        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1)
        {
          let SingleItemArray=[];
          SingleItemArray=[...SingleItemArray, New_SingleCheckedTag];
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTag=JSON.parse(JSON.stringify(SingleItemArray));

        }
        else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
        {
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTag=JSON.parse(JSON.stringify(tagsArray));
        }
        modify_proxy_edge_modal=false;
    }


    let new_monitor_edge_modal=false;
    let new_monitor_edge_index;

    let new_monitor_edge=[
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },    
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    },
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    }

    ];

    function new_monitor_edge_trigger(index)
    {
        new_monitor_edge[index].enable=true;
        new_monitor_edge[index].delete=false;
        new_monitor_edge[index].modbusTag="";
        new_monitor_edge[index].display=1;
        new_monitor_edge[index].dataLogFormat=0;
        new_monitor_edge[index].userDefineedData="";

        new_monitor_edge_index=index;
        new_monitor_edge_modal=true;

    }


    function NoAddProxyEdge(index)
    {
      new_proxy_edge_modal=false;
    }


    function add_new_monitor_edge(index)
    {
        new_monitor_edge_modal=false;
        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData=[...changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData,new_monitor_edge[index]];
    }  



    let modify_monitor_edge_modal=false;
    let modify_monitor_edge_index;
    let BackupMonitorEdge=
    {
      enable: false,
      delete: false,
      modbusTag:"",
      display:0,
      dataLogFormat:0,
      userDefineedData:""
    };


    function NoAddMonitorEdge(index)
    {
      new_monitor_edge_modal=false;
    }

    function deleteME(index)
    {
      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].delete=true;
    }

    function RestoreDeleteME(index)
    {
      changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].delete=false;
    }


    function TriggerModifyMonitorEdge(index)
    {
        modify_monitor_edge_modal=true;
        modify_monitor_edge_index=index;
        BackupMonitorEdge.enable=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].enable;
        BackupMonitorEdge.delete=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].delete;        
        BackupMonitorEdge.modbusTag=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].modbusTag;
        BackupMonitorEdge.display=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].display;
        BackupMonitorEdge.dataLogFormat=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].dataLogFormat;
        BackupMonitorEdge.userDefineedData=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].userDefineedData;

    }

    function NoModifyMonitorEdge(index)
    {

        modify_monitor_edge_modal=false;
        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].enable=BackupMonitorEdge.enable;
        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].delete=BackupMonitorEdge.delete;


        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].modbusTag=BackupMonitorEdge.modbusTag;

        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].dataType=BackupMonitorEdge.dataType;

        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].display=BackupMonitorEdge.display;

        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].dataLogFormat=BackupMonitorEdge.dataLogFormat;

        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[index].userDefineedData=BackupMonitorEdge.userDefineedData;

    }


    function ModifyMonitorEdge()
    {
        modify_monitor_edge_modal=false;
    }



  const NMbtn1=() =>
  {
    new_monitor_edge[new_monitor_edge_index].userDefineedData+="$TIME$";
  }



  const NMbtn2=() =>
  {
    new_monitor_edge[new_monitor_edge_index].userDefineedData+="$ARRAY$";
  }



  const NMbtn3=() =>
  {
    new_monitor_edge[new_monitor_edge_index].userDefineedData+="$<tag>_RAWREQUEST$";
  }

  const NMbtn4=() =>
  {
    new_monitor_edge[new_monitor_edge_index].userDefineedData+="$<tag>_RAWREPLY$";
  }


  const NMbtn5=() =>
  {
    new_monitor_edge[new_monitor_edge_index].userDefineedData+="$MODBUSREQ$";
  }


  const NMbtn6=() =>
  {
    new_monitor_edge[new_monitor_edge_index].userDefineedData+="$MODBUSRESP$";
  }


  const NPbtn1=() =>
  {
    console.log("NPbtn1");
    new_proxy_edge[new_proxy_edge_index].userDefineedData+="$TIME$";
  }


  const NPbtn2=() =>
  {
    new_proxy_edge[new_proxy_edge_index].userDefineedData+="$ARRAY$";
  }



  const NPbtn3=() =>
  {
    new_proxy_edge[new_proxy_edge_index].userDefineedData+="$<tag>_RAWREQUEST$";
  }

  const NPbtn4=() =>
  {
    new_proxy_edge[new_proxy_edge_index].userDefineedData+="$<tag>_RAWREPLY$";
  }


  const NPbtn5=() =>
  {
    new_proxy_edge[new_proxy_edge_index].userDefineedData+="$Keyword4$";
  }



  const CPbtn1=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].userDefineedData+="$TIME$";
  }



  const CPbtn2=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].userDefineedData+="$ARRAY$";
  }



  const CPbtn3=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].userDefineedData+="$<tag>_RAWREQUEST$";
  }

  const CPbtn4=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].userDefineedData+="$<tag>_RAWREPLY$";
  }


  const CPbtn5=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].userDefineedData+="$Keyword4$";
  }


  const CMbtn1=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData+="$TIME$";
  }



  const CMbtn2=() =>
  {
   changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData+="$ARRAY$";
  }



  const CMbtn3=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData+="$<tag>_RAWREQUEST$";
  }

  const CMbtn4=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData+="$<tag>_RAWREPLY$";
  }


  const CMbtn5=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData+="$MODBUSREQ$";
  }


  const CMbtn6=() =>
  {
    changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData+="$MODBUSRESP$";
  }



  function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex) 
  {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            if (key != 'cloudTopic')
            {
              if (key == 'modbusTag')
              {
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

                  if (addedCount >0)
                  {

                    let changedstr="Edge Data No."+ArrayIndex +", Add "+addedCount+" item(s) to "+ key;
                    if (type == 3)
                    {
                      sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
                    }
                    else if (type == 2)
                    {
                      sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                    }
                    else if (type == 1)
                    {
                      sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
                    }
                    else if (type == 0)
                    {
                      sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                    }
                  }
                }
                else if (obj1[key].length < obj2[key].length)
                {
                  let deletedCount=obj2[key].length-obj1[key].length;
                  let changedstr="Edge Data No."+ArrayIndex +", Delete "+deletedCount+" item(s) from "+ key;
                  if (type == 3)
                  {
                    sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
                  }
                  else if (type == 2)
                  {
                    sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                  }
                  else if (type == 1)
                  {
                    sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
                  }
                  else if (type == 0)
                  {
                    sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                  }
                }
                else if (obj1[key].length == obj2[key].length)
                {
                  for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
                  {
                    if (obj1[key][i] != obj2[key][i])
                    {
                      let changedstr="Edge Data No."+ArrayIndex +",Modbus Tag List No."+(i+1)+" item is changed to "+obj1[key][i];
                      if (type == 3)
                      {
                        sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
                      }
                      else if (type == 2)
                      {
                        sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                      }
                      else if (type == 1)
                      {
                        sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
                      }
                      else if (type == 0)
                      {
                        sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                      }
                    }
                  }
                }
              }
              else if (key == 'cloud')
              {
                for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
                {
                  for (const key2 in obj1[key][i])
                  {
                    if (key2=='topic') 
                    { 
                      if (obj1[key][i][key2][0]['name'] != obj2[key][i][key2][0]['name'])
                      {
                        let changedstr="Edge Data No."+ArrayIndex +",Cloud No."+(i+1)+" item is changed: "+ "value of topic has changed to "+obj1[key][i][key2][0]['name'];
                        if (type == 3)
                        {
                          sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
                        }
                        else if (type == 2)
                        {
                          sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                        }
                        else if (type == 1)
                        {
                          sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
                        }
                        else if (type == 0)
                        {
                          sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                        }
                      }

                    }
                    else if (obj1[key][i][key2] != obj2[key][i][key2])
                    {
                      let changedstr="Edge Data No."+ArrayIndex +",Cloud No."+(i+1)+" item is changed: "+ "value of "+key2+" has changed to "+obj1[key][i][key2];

                      if (type == 3)
                      {
                        sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
                      }
                      else if (type == 2)
                      {
                        sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                      }
                      else if (type == 1)
                      {
                        sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
                      }
                      else if (type == 0)
                      {
                        sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                      }
                    }
                  }
                }
              }
              else
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

                  if (addedCount >0)
                  {

                    let changedstr="Add "+addedCount+" item(s) to "+ key;
                    if (type == 3)
                    {
                      sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
                    }
                    else if (type == 2)
                    {
                      sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                    }
                    else if (type == 1)
                    {
                      sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
                    }
                    else if (type == 0)
                    {
                      sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                    }
                  }
                }
                else if (obj1[key].length < obj2[key].length)
                {
                  let deletedCount=obj2[key].length-obj1[key].length;
                  let changedstr="Delete "+deletedCount+" item(s) from "+ key;
                  if (type == 3)
                  {
                    sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
                  }
                  else if (type == 2)
                  {
                    sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
                  }
                  else if (type == 1)
                  {
                    sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
                  }
                  else if (type == 0)
                  {
                    sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                  }
                }
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
            if (type !=0)
            {
              changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            }
            else
            {
              changedstr="Edge Data No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            }
          }
          
          if (type == 3)
          {
            sdata_logger_monitor_cloud_changedValues=[...sdata_logger_monitor_cloud_changedValues, changedstr];
          }
          else if (type == 2)
          {
            sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
          }
          else if (type == 1)
          {
            sdata_logger_proxy_cloud_changedValues=[...sdata_logger_proxy_cloud_changedValues, changedstr];
          }
          else if (type == 0)
          {
            sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
          }
        }
      }
    }


    function saveGeneral()
    {
        console.log("save general");
        if (sdata_logger_general_changedValues.length !=0)
        {
            sdata_logger_general_changedValues=[];
        }


        if (changed_sdata_logger_data.config.service_smartDataLogger_general.enable != sdata_logger_data.config.service_smartDataLogger_general.enable)
        {
            saved_changed_sdata_logger_data.config.service_smartDataLogger_general.enable=changed_sdata_logger_data.config.service_smartDataLogger_general.enable;
            let changedStr="Smart Data Logger is changed to " + changed_sdata_logger_data.config.service_smartDataLogger_general.enable;
            sdata_logger_general_changedValues=[...sdata_logger_general_changedValues, changedStr];
        }

        if (changed_sdata_logger_data.config.service_smartDataLogger_general.storage != sdata_logger_data.config.service_smartDataLogger_general.storage)
        {
            saved_changed_sdata_logger_data.config.service_smartDataLogger_general.storage=changed_sdata_logger_data.config.service_smartDataLogger_general.storage;
            let changedStr="Smart Data Logger Storage is changed to " + changed_sdata_logger_data.config.service_smartDataLogger_general.storage;
            sdata_logger_general_changedValues=[...sdata_logger_general_changedValues, changedStr]; 
        }

        SDatalogger_General_ConfigChangedLog.set(sdata_logger_general_changedValues);
        ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
        console.log(sdata_logger_general_changedValues);
    }

    function saveProxyEdgeData()
    {
        console.log("save proxy edge");
        if (sdata_logger_proxy_edge_changedValues.length !=0)
        {
            sdata_logger_proxy_edge_changedValues=[];
        }
        for (let i = 0; i < Math.min(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length, sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length); i++) 
        {
          compareObjects(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[i], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[i], 0, 1,i+1);
        }

        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length > sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length)
        {
          let addedCount=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length-sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;

          for (let k=sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length; k < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length;k++)
          {
            if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[k].delete)
            {
              addedCount--;
            }

          }

          if (addedCount > 0)
          {
            let changedstr="Add "+addedCount+" item(s) to Proxy Mode Edge Data List";
            sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr];
          }
        }


        SDatalogger_ProxyMode_Edge_ConfigChangedLog.set(sdata_logger_proxy_edge_changedValues);
        

        let tempForDelete=[];
        for (let i = 0; i< changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length; i++)
        {
          if (!changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[i].delete)
          {
            tempForDelete=[...tempForDelete, changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[i]]
          }
        }

        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData=JSON.parse(JSON.stringify(tempForDelete));
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData=JSON.parse(JSON.stringify(tempForDelete));




       // saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData));

        ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
        console.log(sdata_logger_proxy_edge_changedValues);    
    }


    function saveProxyCloud()
    {
        console.log("save proxy cloud");
        if (sdata_logger_proxy_cloud_changedValues.length !=0)
        {
            sdata_logger_proxy_cloud_changedValues=[];
        }

        compareObjects(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings, sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings, 1, 0,0);       

        SDatalogger_ProxyMode_Cloud_ConfigChangedLog.set(sdata_logger_proxy_cloud_changedValues);


        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushInterval=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushInterval;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushIntervalValue=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushIntervalValue;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.linkLostRetransmit=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.linkLostRetransmit;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPriority=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPriority;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile));


        ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
        console.log(sdata_logger_proxy_cloud_changedValues);    
    }


    function saveProxyTopic()
    {
        console.log("save proxy topic");
        if (sdata_logger_proxy_topic_changedValues.length !=0)
        {
            sdata_logger_proxy_topic_changedValues=[];
        }



        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic.length != changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic.length)
        {
          let changedstr="Topic is changed.";
          sdata_logger_proxy_topic_changedValues=[...sdata_logger_proxy_topic_changedValues, changedstr];
        }
        else
        {
          for (let i=0; i< changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic.length; i++)
          {
            if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic[i] != saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic[i])
            {
              let changedstr="Topic is changed to " + changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic[i];
              sdata_logger_proxy_topic_changedValues=[...sdata_logger_proxy_topic_changedValues, changedstr];
            }

          }

        }

    
        SDatalogger_ProxyMode_Topic_ConfigChangedLog.set(sdata_logger_proxy_topic_changedValues);

        saved_changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudTopic));

        ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
        console.log(sdata_logger_proxy_topic_changedValues);    
    }


    function saveMonitorEdgeData()
    {
        console.log("save monitor edge");
        if (sdata_logger_monitor_edge_changedValues.length !=0)
        {
            sdata_logger_monitor_edge_changedValues=[];
        }
        for (let i = 0; i < Math.min(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length, sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length); i++) 
        {
          compareObjects(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[i], sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[i], 2, 1,i+1);
        }

        if (changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length > sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length)
        {
          let addedCount=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length-sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;

          for (let k=sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length;k < changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length; k++)
          {
            if (changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[k].delete)
            {
              addedCount--;
            }
          }

          if (addedCount > 0)
          {
            let changedstr="Add "+addedCount+" item(s) to Monitor Mode Edge Data List";
            sdata_logger_monitor_edge_changedValues=[...sdata_logger_monitor_edge_changedValues, changedstr];
          }
        }


        SDatalogger_MonitorMode_Edge_ConfigChangedLog.set(sdata_logger_monitor_edge_changedValues);
        

        let tempForDelete=[];
        for (let i = 0; i< changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length; i++)
        {
          if (!changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[i].delete)
          {
            tempForDelete=[...tempForDelete, changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[i]]
          }

        }


        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData=JSON.parse(JSON.stringify(tempForDelete));
        changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData=JSON.parse(JSON.stringify(tempForDelete));



        //saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData));

        ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
        console.log(sdata_logger_monitor_edge_changedValues);    
    }


    function saveMonitorCloud()
    {
        console.log("save monitor cloud");
        if (sdata_logger_monitor_cloud_changedValues.length !=0)
        {
            sdata_logger_monitor_cloud_changedValues=[];
        }

        compareObjects(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings, sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings, 3, 0,0);       

        SDatalogger_MonitorMode_Cloud_ConfigChangedLog.set(sdata_logger_monitor_cloud_changedValues);
       // saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings));


        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushIntervalValue=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushIntervalValue;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.linkLostRetransmit=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.linkLostRetransmit;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPriority=changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPriority;

        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile));

        ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
        console.log(sdata_logger_monitor_cloud_changedValues);    
    }

    function saveMonitorTopic()
    {
      console.log("save monitor topic");
      if (sdata_logger_monitor_topic_changedValues.length !=0)
      {
          sdata_logger_monitor_topic_changedValues=[];
      }



        if (saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic.length != changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic.length)
        {
          let changedstr="Topic is changed.";
          sdata_logger_monitor_topic_changedValues=[...sdata_logger_monitor_topic_changedValues, changedstr];
        }
        else
        {
          for (let i=0; i< changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic.length; i++)
          {
            if (changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic[i] != saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic[i])
            {
              let changedstr="Topic is changed to "+ changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic[i];
              sdata_logger_monitor_topic_changedValues=[...sdata_logger_monitor_topic_changedValues, changedstr];
            }

          }

        }

    
        SDatalogger_MonitorMode_Topic_ConfigChangedLog.set(sdata_logger_monitor_topic_changedValues);

        saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic));

        ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
        console.log(sdata_logger_monitor_topic_changedValues);    
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

      saved_changed_modbus_data= JSON.parse(JSON.stringify(modbus_data));
      ChangedModbusConfig.set(saved_changed_modbus_data);

    }
  }







  function constructDataArray() {
    return originalArray.map((item, index) => ({
      value: index,
      name: item
    }));
  }




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

  async function getAWSIotCoreData () {
    const res = await fetch(window.location.origin+"/GetAWSiotCore", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      awsIoT_core_data =await res.json();
      console.log(awsIoT_core_data);
      awsIoTcoreConfig.set(awsIoT_core_data);

      saved_changed_awsIoT_core_data= JSON.parse(JSON.stringify(awsIoT_core_data));
      ChangedAWSIoTcoreConfig.set(saved_changed_awsIoT_core_data);

      for (let i=0; i< saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile.length;i++)
      {
        let item="aws_"+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerHost+':'+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerPort;
        let clouditem={"value":item, "name":item};
        CloudProfile=[...CloudProfile, clouditem];

      }

    }
  }


  async function getAzureData() {
    const res = await fetch(window.location.origin+"/PostGetAzuRe", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      azure_data =await res.json();
      console.log(azure_data);
      azureConfig.set(azure_data);

      saved_changed_azure_data= JSON.parse(JSON.stringify(azure_data));
      ChangedAzureConfig.set(saved_changed_azure_data);


      for (let i=0; i< saved_changed_azure_data.config.cloud_azHub_profile.length;i++)
      {
        let item="hub_"+(i+1);
        let clouditem={"value":item, "name":item};
        CloudProfile=[...CloudProfile, clouditem];

      }

      for (let i=0; i< saved_changed_azure_data.config.cloud_azDPS_profile.length;i++)
      {
        let item="dps_"+(i+1);
        let clouditem={"value":item, "name":item};
        CloudProfile=[...CloudProfile, clouditem];

      }

      for (let i=0; i< saved_changed_azure_data.config.cloud_azCentral_profile.length;i++)
      {
        let item="central_"+(i+1);
        let clouditem={"value":item, "name":item};
        CloudProfile=[...CloudProfile, clouditem];

      }

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

            changed_sdata_logger_data = JSON.parse(JSON.stringify(sdata_logger_data));
            saved_changed_sdata_logger_data= JSON.parse(JSON.stringify(sdata_logger_data));
            ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
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
            }
          }

          if (saved_changed_awsIoT_core_data == "")
          {
            getAWSIotCoreData();
          }
          else
          {
            for (let i=0; i< saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile.length;i++)
            {
              let item="aws_"+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerHost+':'+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerPort;
              let clouditem={"value":item, "name":item};
              CloudProfile=[...CloudProfile, clouditem];
              //console.log("++CloudProfile:", CloudProfile);
            }
          }

          if (saved_changed_azure_data=="")
          {
            getAzureData();
          }
          else
          {
            for (let i=0; i< saved_changed_azure_data.config.cloud_azHub_profile.length;i++)
            {
              let item="hub_"+(i+1);
              let clouditem={"value":item, "name":item};
              CloudProfile=[...CloudProfile, clouditem];

            }

            for (let i=0; i< saved_changed_azure_data.config.cloud_azDPS_profile.length;i++)
            {
              let item="dps_"+(i+1);
              let clouditem={"value":item, "name":item};
              CloudProfile=[...CloudProfile, clouditem];
            }

            for (let i=0; i< saved_changed_azure_data.config.cloud_azCentral_profile.length;i++)
            {
              let item="central_"+(i+1);
              let clouditem={"value":item, "name":item};
              CloudProfile=[...CloudProfile, clouditem];

            }
          }
        }
    }

  onMount(() => {

    console.log("smart data logger sessionid: ");
    console.log(sessionid);


    if (sessionid && sdata_logger_data =="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getSmartDataLoggerData();
    }
    else if (sessionid && sdata_logger_data != "")
    {
      getDataReady=1;
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);
      changed_sdata_logger_data=JSON.parse(JSON.stringify(saved_changed_sdata_logger_data));
      if (sdata_logger_general_changedValues.length==0)
      {
          changed_sdata_logger_data.config.service_smartDataLogger_general=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_general)); 
      }
      
      if (sdata_logger_proxy_edge_changedValues.length==0)
      {
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData)); 
      }
      
      if (sdata_logger_proxy_cloud_changedValues.length==0)
      {
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings)); 
      }
      

      if (sdata_logger_monitor_edge_changedValues.length==0)
      {
          changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData)); 
      }

      if (sdata_logger_monitor_cloud_changedValues.length==0)
      {
          changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings)); 
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

      if (saved_changed_awsIoT_core_data == "")
      {
        getAWSIotCoreData();
      }
      else
      {
        for (let i=0; i< saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile.length;i++)
        {
          //console.log("****CloudProfile:", CloudProfile);
          let item="aws_"+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerHost+':'+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerPort;
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];

          //console.log("!!!CloudProfile:", CloudProfile);

        }
      }

      if (saved_changed_azure_data=="")
      {
        getAzureData();
      }
      else
      {
        for (let i=0; i< saved_changed_azure_data.config.cloud_azHub_profile.length;i++)
        {
          let item="hub_"+(i+1);
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];

        }

        for (let i=0; i< saved_changed_azure_data.config.cloud_azDPS_profile.length;i++)
        {
          let item="dps_"+(i+1);
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];
        }

        for (let i=0; i< saved_changed_azure_data.config.cloud_azCentral_profile.length;i++)
        {
          let item="central_"+(i+1);
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];

        }
      }

      console.log("CloudProfile: ", CloudProfile);

    }

  });


</script>


 <Tabs style="underline">
   <TabItem open title="General">
<table>

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-left">Smart Data Logger</p></td>
<td class="pl-5 pt-5">
{#if getDataReady == 1}
<Toggle bind:checked={changed_sdata_logger_data.config.service_smartDataLogger_general.enable}></Toggle>
{/if}
</td>
<td></td>

    </tr>

</table>


{#if getDataReady == 1}
{#if changed_sdata_logger_data.config.service_smartDataLogger_general.enable}
<p class="pt-5"></p>
<table>

 <tr>
  <td><p class="pl-5 pt-4 text-lg font-light text-right">Storage</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
    {#if getDataReady == 1}
      <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_general.storage} value={0} >Internal (100MB)</Radio>
      <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_general.storage} value={1} >External SD Card</Radio>
    {/if}
</div></td>
</tr>

</table>

{/if}
{/if}

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

  <TabItem title="Proxy Mode">


<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Edge Data
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
    <TableHeadCell class="w-18">Modbus Tag</TableHeadCell>
    <TableHeadCell class="w-18">Sampling Condition</TableHeadCell>
    <TableHeadCell >Cloud Setting</TableHeadCell>
  </TableHead>

<TableBody>
{#if getDataReady == 1}
{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData as ProxyEdgeData, index}

{#if ProxyEdgeData.delete}

  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeletePE(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={ProxyEdgeData.enable} disabled>
      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{#each ProxyEdgeData.modbusTag as Tag, index}
{#if index!=0} ,{/if}{Tag}
{/each}
</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">
{#if ProxyEdgeData.samplingCondition==0}
per {ProxyEdgeData.periodMS} ms
{:else if ProxyEdgeData.samplingCondition==1}
once change ({ProxyEdgeData.changePercentage}%)
{/if}
</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">
{#each ProxyEdgeData.cloud as Cloud, index}
{#if index!=0}/{/if} {Cloud.profile}({Cloud.topic[0].name}, {#if Cloud.tagDisplay==0}Hex,{:else if Cloud.tagDisplay==1}Decimal,{:else if Cloud.tagDisplay==2}Binary,{/if}{#if Cloud.dataLogFormat==0}Default{:else if Cloud.dataLogFormat==1}User Defined{:else if Cloud.dataLogFormat} Use others{/if})

{/each}
</td>

</tr>

{:else}

    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyProxyEdge(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deletePE(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={ProxyEdgeData.enable}>

</TableBodyCell>

<TableBodyCell class="w-10">{index+1}</TableBodyCell>



<TableBodyCell class="w-18">
{#each ProxyEdgeData.modbusTag as Tag, index}
{#if index!=0} ,{/if}{Tag}
{/each}
</TableBodyCell>
<TableBodyCell class="w-18"> 
{#if ProxyEdgeData.samplingCondition==0}
per {ProxyEdgeData.periodMS} ms
{:else if ProxyEdgeData.samplingCondition==1}
once change ({ProxyEdgeData.changePercentage}%)
{/if}
</TableBodyCell>

<TableBodyCell>
{#each ProxyEdgeData.cloud as Cloud, index}
{#if index!=0}/{/if} {Cloud.profile}({Cloud.topic[0].name}, {#if Cloud.tagDisplay==0}Hex,{:else if Cloud.tagDisplay==1}Decimal,{:else if Cloud.tagDisplay==2}Binary,{/if}{#if Cloud.dataLogFormat==0}Default{:else if Cloud.dataLogFormat==1}User Defined{:else if Cloud.dataLogFormat} Use others{/if})

{/each}

</TableBodyCell>
    </TableBodyRow>

{/if}

{/each}
{/if}


  <TableBodyRow>

{#if getDataReady == 1}
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length < 10}
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_proxy_edge_trigger(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
 {:else}
 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>
{/if}
{/if}

      <TableBodyCell class="!p-4">

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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

    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveProxyEdgeData}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>



<Modal bind:open={new_proxy_edge_modal} autoclose={false} size="lg" class="w-full">

<StepIndicator {currentStep} {steps} glow />


<table bind:this={modalElement}>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type="checkbox" bind:checked={new_proxy_edge[new_proxy_edge_index].enable}></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Sampling Condition</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<div class="flex gap-4">

  <Radio class="pb-1" bind:group={new_proxy_edge[new_proxy_edge_index].samplingCondition} value={0} >Period</Radio>

{#if new_proxy_edge[new_proxy_edge_index].samplingCondition==0}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500" bind:value={new_proxy_edge[new_proxy_edge_index].periodMS}> <p class="pt-2">ms</p>
{:else}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled> <p class="pt-2">ms</p>
{/if}

  <Radio class="pb-1" bind:group={new_proxy_edge[new_proxy_edge_index].samplingCondition} value={1} >Once Change</Radio>

{#if new_proxy_edge[new_proxy_edge_index].samplingCondition==1}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500" bind:value={new_proxy_edge[new_proxy_edge_index].changePercentage}> <p class="pt-2">%</p>

{:else}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled> <p class="pt-2">%</p>


{/if}

</div>    
    </td>
    <td></td>
    <td></td>

</tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Modbus Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<button color="blue" type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48" on:click={handleClickTagList} on:keydown={() => {}}>Choose Tag
{#if openTagList}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron up outline" viewBox="-8 -8 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg>
{/if}

</button>
</td>
   <td></td>
    <td></td>

</tr>


{#if openTagList}

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right"></td>
<td class= "pl-4" colspan="3">
<div role="tooltip" tabindex="-1" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600 shadow-md divide-y z-50 w-48" > 
<ul class="w-44 p-3 space-y-3 text-sm">
{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
{#if new_proxy_edge[new_proxy_edge_index].samplingCondition==0}
<li><label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
<input type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" on:change="{(e) => handleMultipleCheckboxChange(TagItem.tagName, e.target.checked)}" checked={selectedNewTags.has(TagItem.tagName)}> 
<p class="pl-2">{TagItem.tagName}</p>
</label>
</li>
{:else if new_proxy_edge[new_proxy_edge_index].samplingCondition==1}



<li>
      <label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
        <input
          type="checkbox"
          class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
          on:change={(e) => handleSingleCheckboxChange(TagItem.tagName, e.target.checked)}
          checked={TagItem.tagName === New_SingleCheckedTag}
          disabled={New_SingleCheckedTag && TagItem.tagName !== New_SingleCheckedTag}
        >
        <p class="pl-2">{TagItem.tagName}</p>
      </label>
</li>


{/if}


{/each}
{/if}

</ul>  

</div>
</td>
   <td></td>
    <td></td>

</tr>

{/if}


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page2}>Next</Button></td>


    </tr>

{:else if currentStep ==2}

<tr>
      <td></td>
      <td class="pl-4 pt-4">
<p class="text-center pt-4 text-lg font-bold">1st Cloud</p>
      </td>

      <td></td>
    <td></td>
    </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].profile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>



<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Topic 1</p></td>
      <td class="pl-4 pt-5">

<div class="flex gap-4">
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].name}>
</div>

</td>


</tr>


<tr class="pt-4">
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Tag Value Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].tagDisplay} value={0} >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].tagDisplay} value={1} >Decimal</Radio>
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].tagDisplay} value={2} >Binary</Radio>

</div></td>
</tr>



<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>

    <td class="pl-4 pt-8" colspan="3"><div class="flex gap-4">
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat} value={0} on:change={()=>NewCloudFormatChange(0,1)}>Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
<Radio class="pb-2"  bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat} value={2} on:change={()=>NewCloudFormatChange(0,1)}>Use 2nd Cloud Setting</Radio>
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat} value={1} on:change={()=>NewCloudFormatChange(0,1)}>User Defined:</Radio>



</div></td>
</tr>



<tr>
  <td class="text-right" >
  

  </td>

    <td class="pl-4 pt-4" colspan="5">


{#if new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 300px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTimeClick(0)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewArrayClick(0)}><i style="padding: 0px 15px 0px 10px;"></i>$ARRAY$</button></li>
              <hr>

              {#if new_proxy_edge[new_proxy_edge_index].samplingCondition==1}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawRequest(0,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREQUEST$</button></li>
              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawReply(0,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREPLY$</button></li>

              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagStatus(0,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_STATUS$</button></li>

              {:else if new_proxy_edge[new_proxy_edge_index].samplingCondition==0}

            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawRequest(0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREQUEST$</button></li>


            {/each}
            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawReply(0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREPLY$</button></li>


            {/each}

            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagStatus(0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_STATUS$</button></li>


            {/each}

            {/if}
        </ul>
    </div>
</nav>
{/if}

<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].userDefineedData}></textarea>

{/if}


    </td>




</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page1}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page3}>Next</Button></td>


    </tr>




{:else if currentStep ==3}



<tr>
      <td></td>
      <td class="pl-4 pt-4">
<p class="text-center pt-4 text-lg font-bold">2nd Cloud</p>
      </td>

      <td></td>
    <td></td>
    </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].profile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>



<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Topic 1</p></td>
      <td class="pl-4 pt-5">

<div class="flex gap-4">
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].name}>
</div>

</td>


</tr>


<tr class="pt-4">
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Tag Value Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].tagDisplay} value={0} >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].tagDisplay} value={1} >Decimal</Radio>
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].tagDisplay} value={2} >Binary</Radio>

</div></td>
</tr>



<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>

    <td class="pl-4 pt-8" colspan="3"><div class="flex gap-4">
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat} value={0} on:change={()=>NewCloudFormatChange(1,0)}>Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
<Radio class="pb-2"  bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat} value={2} on:change={()=>NewCloudFormatChange(1,0)}>Use 1st Cloud Setting</Radio>
  <Radio class="pb-2" bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat} value={1} on:change={()=>NewCloudFormatChange(1,0)}>User Defined:</Radio>



</div></td>
</tr>



<tr>
  <td class="text-right" >
  

  </td>

    <td class="pl-4 pt-4" colspan="5">


{#if new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 300px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTimeClick(1)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewArrayClick(1)}><i style="padding: 0px 15px 0px 10px;"></i>$ARRAY$</button></li>
              <hr>

              {#if new_proxy_edge[new_proxy_edge_index].samplingCondition==1}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawRequest(1,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREQUEST$</button></li>
              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawReply(1,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREPLY$</button></li>

              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagStatus(1,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_STATUS$</button></li>

              {:else if new_proxy_edge[new_proxy_edge_index].samplingCondition==0}

            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawRequest(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREQUEST$</button></li>


            {/each}
            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagRawReply(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREPLY$</button></li>


            {/each}

            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTagStatus(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_STATUS$</button></li>


            {/each}

            {/if}
        </ul>
    </div>
</nav>
{/if}

<textarea id="textarea-id" rows="12"  class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].userDefineedData}></textarea>

{/if}


    </td>




</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page2}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>add_new_proxy_edge(new_proxy_edge_index)}>Add</Button></td>


    </tr>





{/if}    


</table>
</Modal>




<Modal bind:open={modify_proxy_edge_modal} autoclose={false} size="lg" class="w-full">
<form action="#">
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyProxyEdge(modify_proxy_edge_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<StepIndicator {currentStep} {steps} glow />


<table bind:this={modalElement}>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type="checkbox" bind:checked={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].enable}></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Sampling Condition</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<div class="flex gap-4">

  <Radio class="pb-1" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition} value={0} >Period</Radio>

{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].periodMS}> <p class="pt-2">ms</p>
{:else}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled> <p class="pt-2">ms</p>
{/if}

  <Radio class="pb-1" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition} value={1} >Once Change</Radio>

{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].changePercentage}> <p class="pt-2">%</p>

{:else}
  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled> <p class="pt-2">%</p>


{/if}

</div>    
    </td>
    <td></td>
    <td></td>

</tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Modbus Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<button color="blue" type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48" on:click={handleClickTagList} on:keydown={() => {}}>Choose Tag
{#if openTagList}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron up outline" viewBox="-8 -8 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg>
{/if}

</button>
</td>
   <td></td>
    <td></td>

</tr>


{#if openTagList}

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right"></td>
<td class= "pl-4" colspan="3">
<div role="tooltip" tabindex="-1" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600 shadow-md divide-y z-50 w-48" > 
<ul class="w-44 p-3 space-y-3 text-sm">
{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0}
<li><label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
<input type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" on:change="{(e) => handleMultipleCheckboxChange(TagItem.tagName, e.target.checked)}" checked={selectedNewTags.has(TagItem.tagName)}> 
<p class="pl-2">{TagItem.tagName}</p>
</label>
</li>
{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1}



<li>
      <label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
        <input
          type="checkbox"
          class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
          on:change={(e) => handleSingleCheckboxChange(TagItem.tagName, e.target.checked)}
          checked={TagItem.tagName === New_SingleCheckedTag}
          disabled={New_SingleCheckedTag && TagItem.tagName !== New_SingleCheckedTag}
        >
        <p class="pl-2">{TagItem.tagName}</p>
      </label>
</li>


{/if}


{/each}
{/if}

</ul>  

</div>
</td>
   <td></td>
    <td></td>

</tr>

{/if}


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page2}>Next</Button></td>


    </tr>

{:else if currentStep ==2}

<tr>
      <td></td>
      <td class="pl-4 pt-4">
<p class="text-center pt-4 text-lg font-bold">1st Cloud</p>
      </td>

      <td></td>
    <td></td>
    </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].profile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>



<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Topic 1</p></td>
      <td class="pl-4 pt-5">

<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].topic[0].name}>
</div>

</td>


</tr>


<tr class="pt-4">
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Tag Value Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].tagDisplay} value={0} >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].tagDisplay} value={1} >Decimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].tagDisplay} value={2} >Binary</Radio>

</div></td>
</tr>



<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>

    <td class="pl-4 pt-8" colspan="3"><div class="flex gap-4">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat} value={0} on:change={()=>ModifyCloudFormatChange(0,1)}>Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
<Radio class="pb-2"  bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat} value={2} on:change={()=>ModifyCloudFormatChange(0,1)}>Use 2nd Cloud Setting</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat} value={1} on:change={()=>ModifyCloudFormatChange(0,1)}>User Defined:</Radio>



</div></td>
</tr>



<tr>
  <td class="text-right" >
  

  </td>

    <td class="pl-4 pt-4" colspan="5">


{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 300px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTimeClick(0)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyArrayClick(0)}><i style="padding: 0px 15px 0px 10px;"></i>$ARRAY$</button></li>
              <hr>

              {#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawRequest(0,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREQUEST$</button></li>
              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawReply(0,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREPLY$</button></li>

              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagStatus(0,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_STATUS$</button></li>

              {:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0}

            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawRequest(0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREQUEST$</button></li>


            {/each}
            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawReply(0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREPLY$</button></li>


            {/each}

            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagStatus(0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_STATUS$</button></li>


            {/each}

            {/if}
        </ul>
    </div>
</nav>
{/if}

<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12"  class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat == 2}
<textarea id="textarea-id" rows="12"  class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].userDefineedData}></textarea>

{/if}


    </td>




</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page1}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page3}>Next</Button></td>


    </tr>




{:else if currentStep ==3}



<tr>
      <td></td>
      <td class="pl-4 pt-4">
<p class="text-center pt-4 text-lg font-bold">2nd Cloud</p>
      </td>

      <td></td>
    <td></td>
    </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].profile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>



<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Topic 1</p></td>
      <td class="pl-4 pt-5">

<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].topic[0].name}>
</div>

</td>


</tr>


<tr class="pt-4">
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Tag Value Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].tagDisplay} value={0} >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].tagDisplay} value={1} >Decimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].tagDisplay} value={2} >Binary</Radio>

</div></td>
</tr>



<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>

    <td class="pl-4 pt-8" colspan="3"><div class="flex gap-4">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat} value={0} on:change={()=>ModifyCloudFormatChange(1,0)}>Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
<Radio class="pb-2"  bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat} value={2} on:change={()=>ModifyCloudFormatChange(1,0)}>Use 1st Cloud Setting</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat} value={1} on:change={()=>ModifyCloudFormatChange(1,0)}>User Defined:</Radio>



</div></td>
</tr>



<tr>
  <td class="text-right" >
  

  </td>

    <td class="pl-4 pt-4" colspan="5">


{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 300px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTimeClick(1)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyArrayClick(1)}><i style="padding: 0px 15px 0px 10px;"></i>$ARRAY$</button></li>
              <hr>

              {#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==1}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawRequest(1,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREQUEST$</button></li>
              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawReply(1,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_RAWREPLY$</button></li>

              <hr>
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagStatus(1,0)}><i style="padding: 0px 15px 0px 10px;"></i>${New_SingleCheckedTag}_STATUS$</button></li>

              {:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0}

            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawRequest(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREQUEST$</button></li>


            {/each}
            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagRawReply(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_RAWREPLY$</button></li>


            {/each}

            <hr>
            {#each tagsArray as item, index}

              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTagStatus(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${item}_STATUS$</button></li>


            {/each}

            {/if}
        </ul>
    </div>
</nav>
{/if}

<textarea id="textarea-id" rows="12"  class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat == 2}
<textarea id="textarea-id" rows="12"  class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].userDefineedData}></textarea>

{/if}


    </td>




</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page2}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>ModifyProxyEdge(modify_proxy_edge_index)}>Modify</Button></td>


    </tr>





{/if}    


</table>
</form>
</Modal>




  </Table>


<p class="mt-8"></p>

<Table shadow striped={true}>


<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMV} on:keydown={() => {}}>
    Modbus Tag
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click to show configuration for modbus tag. Please go to modbus page for detailed setting.</p>
  </caption>
{#if openDetailStatusMV}
<TableHead>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-1">No</TableHeadCell>
    <TableHeadCell class="!p-3">Tag Name</TableHeadCell>
    <TableHeadCell class="!p-1">Master Profile</TableHeadCell>
    <TableHeadCell >Point Type</TableHeadCell>
    <TableHeadCell >Address</TableHeadCell>
    <TableHeadCell >Quantity</TableHeadCell>
    <TableHeadCell class="!p-1">Date Type</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell>Post Processing</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
   

 <TableBodyRow>



    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={TagItem.enable} class="disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300" disabled>
    </TableBodyCell>


      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="!p-3">{TagItem.tagName}</TableBodyCell>
  <TableBodyCell class="!p-1">{TagItem.masterProfile}
{#if TagItem.slaveId != -1} (Slave ID: {TagItem.slaveId}){/if}
  </TableBodyCell>
{#if TagItem.pointType == 0}
    <TableBodyCell >Coil</TableBodyCell>
{:else if TagItem.pointType == 1}
    <TableBodyCell >Discrete Input</TableBodyCell>
{:else if TagItem.pointType == 2}
    <TableBodyCell >Input Registers</TableBodyCell>
{:else if TagItem.pointType == 3}
    <TableBodyCell >Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell ></TableBodyCell>
{/if}
  <TableBodyCell >{TagItem.address}</TableBodyCell>
  <TableBodyCell >{TagItem.quantity}</TableBodyCell>


{#if TagItem.dataType == 1}
        <TableBodyCell class="!p-1">Boolean</TableBodyCell>
{:else if TagItem.dataType == 2}
        <TableBodyCell class="!p-1">UInt16</TableBodyCell>
{:else if TagItem.dataType == 3}
        <TableBodyCell class="!p-1">Int16</TableBodyCell>
{:else if TagItem.dataType == 4}
      <TableBodyCell class="!p-1">UInt32</TableBodyCell>
{:else if TagItem.dataType == 5}
      <TableBodyCell class="!p-1">Int32</TableBodyCell>
{:else if TagItem.dataType == 6}
      <TableBodyCell class="!p-1">Float</TableBodyCell>
{:else if TagItem.dataType == 7}
      <TableBodyCell class="!p-1">Double</TableBodyCell>
{:else if TagItem.dataType == 8}
      <TableBodyCell class="!p-1">UInt64</TableBodyCell>  
{:else if TagItem.dataType == 9}
      <TableBodyCell class="!p-1">Int64</TableBodyCell> 
{:else if TagItem.dataType == 10}
      <TableBodyCell class="!p-1">UInt8</TableBodyCell>  
{:else if TagItem.dataType == 11}
      <TableBodyCell class="!p-1">Int8</TableBodyCell>  
{:else if TagItem.dataType == 12}
      <TableBodyCell class="!p-1">ASCII</TableBodyCell>  
{:else if TagItem.dataType == 13}
      <TableBodyCell class="!p-1">BITMAP</TableBodyCell>  
{:else if TagItem.dataType == 14}
      <TableBodyCell class="!p-1">STR32</TableBodyCell> 
{:else if TagItem.dataType == 15}
      <TableBodyCell class="!p-1">String</TableBodyCell>
{:else if TagItem.dataType == 16}
      <TableBodyCell class="!p-1">RAW</TableBodyCell>                    
{:else}
      <TableBodyCell class="!p-1"></TableBodyCell>
{/if}


{#if TagItem.byteOrder==0} 
    <TableBodyCell >Big Endian</TableBodyCell>
{:else if TagItem.byteOrder==1}   
        <TableBodyCell >Little Endian</TableBodyCell>
{:else if TagItem.byteOrder==2}
    <TableBodyCell >Big Endian Byte Swap</TableBodyCell>
{:else if TagItem.byteOrder==3}
        <TableBodyCell >Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell ></TableBodyCell>
{/if}


  <TableBodyCell>{TagItem.responseTimeout} ms
{#if TagItem.pollingRate!=-1} (Interval: {TagItem.pollingRate} ms)
{/if }

  </TableBodyCell>


      <TableBodyCell>
{#if TagItem.postprocessingEnable}
{#if TagItem.postprocessingOperator == 1}+
{:else if TagItem.postprocessingOperator == 2}-
{:else if TagItem.postprocessingOperator == 3}*
{:else if TagItem.postprocessingOperator == 4}/
{/if}
{TagItem.postprocessingValue}
{:else}
    Disable
{/if}

      </TableBodyCell>

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

</Accordion>

  </TabItem>

  <TabItem title="Monitor Mode">



<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Edge Data
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
    <TableHeadCell class="w-18">Modbus Tag</TableHeadCell>
    <TableHeadCell class="w-18">Display</TableHeadCell>
    <TableHeadCell class="w-18">Data Log Format</TableHeadCell>
  </TableHead>

<TableBody>




{#if getDataReady == 1}
{#each changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData as MonitorEdgeData, index}

{#if MonitorEdgeData.delete}

  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteME(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={MonitorEdgeData.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{MonitorEdgeData.modbusTag}</td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">
  {#if MonitorEdgeData.display == 0}Hexadecimal
{:else if MonitorEdgeData.display == 1}Decimal
{:else if MonitorEdgeData.display == 2}Binary
{/if}  
       

       </td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{#if MonitorEdgeData.dataLogFormat==0}<div class="flex gap-2">
      Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]&#125;</Tooltip>

{:else if MonitorEdgeData.dataLogFormat==1}User Defined{/if}
</td>


      </tr>
{:else}

    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyMonitorEdge(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteME(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={MonitorEdgeData.enable}>

</TableBodyCell>


      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{MonitorEdgeData.modbusTag}</TableBodyCell>



      <TableBodyCell class="w-18">
  {#if MonitorEdgeData.display == 0}Hexadecimal
{:else if MonitorEdgeData.display == 1}Decimal
{:else if MonitorEdgeData.display == 2}Binary
{/if}  
       

       </TableBodyCell>
<TableBodyCell class="w-18">{#if MonitorEdgeData.dataLogFormat==0}<div class="flex gap-2">
      Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]&#125;</Tooltip>

{:else if MonitorEdgeData.dataLogFormat==1}User Defined{/if}
</TableBodyCell>
    
    </TableBodyRow>

{/if}

{/each}
{/if}

  <TableBodyRow>

{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length < 10}
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_monitor_edge_trigger(changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
 </TableBodyCell>
{:else}

 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>
{/if}

      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveMonitorEdgeData}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>

<Modal bind:open={new_monitor_edge_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_monitor_edge[new_monitor_edge_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddMonitorEdge(new_monitor_edge_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Tag</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_monitor_edge[new_monitor_edge_index].modbusTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
    
{/each}
    </td>


</tr>






<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={new_monitor_edge[new_monitor_edge_index].display} value={0} >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={new_monitor_edge[new_monitor_edge_index].display} value={1} >Decimal</Radio>
  <Radio class="pb-2" bind:group={new_monitor_edge[new_monitor_edge_index].display} value={2} >Binary</Radio>

</div></td>
</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Log Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={new_monitor_edge[new_monitor_edge_index].dataLogFormat} value={0} >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]&#125;</Tooltip></Radio>
  <Radio class="pb-2" bind:group={new_monitor_edge[new_monitor_edge_index].dataLogFormat} value={1} >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1}
    <Button size="xs" on:click={NMbtn1}>$TIME$</Button>
{:else}
    <Button size="xs" disabled>$TIME$</Button>
{/if}
</li>

<li class="pt-4">
{#if new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={NMbtn2}>$ARRAY$</Button>
{:else}
<Button size="xs" disabled>$ARRAY$</Button>
{/if}
</li>

<li class="pt-4">
{#if new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={NMbtn3}>$&lt;tag&gt;_RAWREQUEST$</Button>
{:else}
<Button size="xs" disabled>$&lt;tag&gt;_RAWREQUEST$</Button>
{/if}
</li>

<li class="pt-4">
{#if new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={NMbtn4}>$&lt;tag&gt;_RAWREPLY$</Button>
{:else}
<Button size="xs" disabled>$&lt;tag&gt;_RAWREPLY$</Button>
{/if}
</li>


<li class='pt-4'>
{#if new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={NMbtn5}>$MODBUSREQ$</Button>
{:else}
<Button size="xs" disabled>$MODBUSREQ$</Button>
{/if}
</li>

<li class='pt-4'>
{#if new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={NMbtn6}>$MODBUSRESP$</Button>
{:else}
<Button size="xs" disabled>$MODBUSRESP$</Button>
{/if}
</li>


</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if new_monitor_edge[new_monitor_edge_index].dataLogFormat == 1}

<Textarea id="textarea-id" placeholder="Data Log Format" rows="12" name="message" bind:value={new_monitor_edge[new_monitor_edge_index].userDefineedData} />



{:else}
<Textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled/>
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
    <td class="pl-10"><Button color="dark" pill={true} on:click={add_new_monitor_edge(new_monitor_edge_index)}>Add</Button></td>


    </tr>


</table>

</Modal>


<Modal bind:open={modify_monitor_edge_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyMonitorEdge(modify_monitor_edge_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Tag</p></td>
    <td class= "pl-4 pt-4">


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].modbusTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
    
{/each}


    </td>


</tr>




<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display} value={0} >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display} value={1} >Decimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].display} value={2} >Binary</Radio>

</div></td>
</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Log Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat} value={0} >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,&quot;Content&quot;:[&quot;ModbusReq&quot;:$MODBUSREQ$,&quot;ModbusResp&quot;:$MODBUSRESP$]&#125;</Tooltip></Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat} value={1} >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1}
    <Button size="xs" on:click={CMbtn1}>$TIME$</Button>
{:else}
    <Button size="xs" disabled>$TIME$</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={CMbtn2}>$ARRAY$</Button>
{:else}
<Button size="xs" disabled>$ARRAY$</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={CMbtn3}>$&lt;tag&gt;_RAWREQUEST$</Button>
{:else}
<Button size="xs" disabled>$&lt;tag&gt;_RAWREQUEST$</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={CMbtn4}>$&lt;tag&gt;_RAWREPLY$</Button>
{:else}
<Button size="xs" disabled>$&lt;tag&gt;_RAWREPLY$</Button>
{/if}
</li>


<li class='pt-4'>
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={CMbtn5}>$MODBUSREQ$</Button>
{:else}
<Button size="xs" disabled>$MODBUSREQ$</Button>
{/if}
</li>


<li class='pt-4'>
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1}
<Button size="xs" on:click={CMbtn6}>$MODBUSRESP$</Button>
{:else}
<Button size="xs" disabled>$MODBUSRESP$</Button>
{/if}
</li>


</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].dataLogFormat == 1}

<Textarea id="textarea-id" placeholder="Data Log Format" rows="12" name="message" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData[modify_monitor_edge_index].userDefineedData} />



{:else}
<Textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled/>
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
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyMonitorEdge}>Modify</Button></td>


    </tr>


</table>
</form>
</Modal>


  </Table>

</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud Settings
    </span>

{#if getDataReady == 1}
<table>
   <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval} value={0} >Right Away</Radio>
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval} value={1} > User Defined (mins): </Radio>
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval == 0}
  <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit:</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.linkLostRetransmit} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPriority} value={0} >Latest First</Radio>
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPriority} value={1} > First In, First Out </Radio>

</div>



</td>


</tr>


<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={CloudProfile} bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile} />

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
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveMonitorCloud}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>


{/if}

</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Topic Settings
    </span>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64" bind:value={Monitor_CloudTopic_Target_Index}>
<option disabled="" value="none">Choose Cloud Profile ...</option>

{#each saved_changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudProfile as TargetProfile,index}
<option value={index}>{TargetProfile}</option>
{/each}
</select>



<p class="pt-4"></p>

{#if Monitor_CloudTopic_Target_Index != "none"}

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Topic</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.cloudTopic[Monitor_CloudTopic_Target_Index]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



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
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveMonitorTopic}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>



</table>


{/if}



</AccordionItem>

</Accordion>


  </TabItem>


    <TabItem title="Data Viewer">

<table>
<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Select By</p>

  </td>

</tr>



<tr>
    <td></td><td class="pt-5">

    <label for="dviewerCP" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="dviewerCP" name="dviewerCP" checked={!!dViewerCProfile} on:click={dViewerCProfile_Check}>
Cloud Profile</label>

    </td>

    <td class="pl-4 pt-3">


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={dViewerTargetCProfile}>
<option disabled="" value="none">Choose Profile ...</option>
{#each CloudProfile as profile, index}
<option value={profile.value}>{profile.name}</option>
{/each}
</select>


    </td>

</tr>




<tr>

  <td></td><td class="pt-5">
<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full" on:click={dViewerExecute}>Execute</button>
    </td>

</tr>

</table>


<p class="pt-20"></p>

 <Table shadow striped={true} tableNoWFull={true}>



  <TableHead>

    <TableHeadCell>Timestamp</TableHeadCell>
    <TableHeadCell>Mode</TableHeadCell>
    <TableHeadCell>Edge Data Alias Name</TableHeadCell>
    <TableHeadCell>Cloud Profile</TableHeadCell>
    <TableHeadCell>Content</TableHeadCell>


  </TableHead>
  <TableBody>


{#if ViewerResultReady}

{#each ViewerResultTimeStamp as TimeStamp, index}

{#if dViewerCProfile==1 && ViewerResultCloudProfile[index] == dViewerTargetCProfile}
      <TableBodyRow>
        <TableBodyCell class="w-18">{TimeStamp}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultJsonObject[index].mode}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultJsonObject[index].alias_name}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultCloudProfile[index]}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultJsonObject[index].content}</TableBodyCell>

      </TableBodyRow>
{:else if dViewerCProfile==0}
      <TableBodyRow>
        <TableBodyCell class="w-18">{TimeStamp}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultJsonObject[index].mode}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultJsonObject[index].alias_name}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultCloudProfile[index]}</TableBodyCell>
        <TableBodyCell class="w-18">{ViewerResultJsonObject[index].content}</TableBodyCell>

      </TableBodyRow>
{/if}      

{/each}

{/if}

  </TableBody>
</Table>

  </TabItem>
   </Tabs>