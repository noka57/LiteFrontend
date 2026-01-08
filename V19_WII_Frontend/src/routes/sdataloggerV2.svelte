<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator, Dropdown, DropdownItem } from 'flowbite-svelte';

  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
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
    let cursorPosition=-1;
    let beforeCursor; 
    let tcp_slave_tag_show=false;
    let tcp_master_tag_show=false;
    let rtu_master_tag_show=false;    
    let target_index_for_show_tag=-1;

    function rightClickContextMenu(e){
        tcp_slave_tag_show=false;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        target_index_for_show_tag=-1;
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

        const textarea = e.target;
        cursorPosition = textarea.selectionStart;
  
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
  let TCPSlaveTag=[];
  let TCPMasterTag=[];
  let RTUMasterTag=[];

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
        ViewerResultJsonObject=[...ViewerResultJsonObject,JSON.parse(lines[i].slice(25))]
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      if (cursorPosition !=-1)
      {
        if (new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
        }
        else
        {
          let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          console.log("b:", beforeCursorString);
          console.log("a:", afterCursorString);
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
        new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
      }

      showMenu=false;

    }

    function NewArrayClick(index)
    {
      if (cursorPosition !=-1)
      {
        if (new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
        }
        else
        {
          let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
      }

      showMenu=false;
    }

    function NewModbusReqClick(index)
    {
      if (cursorPosition !=-1)
      {
        if (new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSREQ$"
        }
        else
        {
          let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSREQ$"
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSREQ$"
      }

      showMenu=false;
    }


    function NewModbusResClick(index)
    {
      if (cursorPosition !=-1)
      {
        if (new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSRESP$"
        }
        else
        {
          let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSRESP$"
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
          new_proxy_edge[new_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSRESP$"
      }

      showMenu=false;
    }




    function showTag(type, index)
    {
      if (type ==0)
      {
        target_index_for_show_tag=index;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        tcp_slave_tag_show=true;
      }
      else if (type ==1)
      {
        target_index_for_show_tag=index;
        tcp_slave_tag_show=false;
        rtu_master_tag_show=false;
        tcp_master_tag_show=true;

      }
      else if (type ==2)
      {
        target_index_for_show_tag=index;
        tcp_slave_tag_show=false;
        tcp_master_tag_show=false;
        rtu_master_tag_show=true;
      }

    }

    function New_clickTagStatus(type, CloudIndex, device_index, tag_index)
    {
      if(type==0)
      {

        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag.length)
        {
          if (tag_index < new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag.length)
          {


            if (cursorPosition !=-1)
            {
              if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
              }
              else
              {
                let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }     

          }
        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag.length)
        {
          if (tag_index < new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
              }
              else
              {
                let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }     

          }
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag.length)
        {
          if (tag_index < new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
              }
              else
              {
                let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }     

          }
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }

    }

    function New_MasterStatus(type, CloudIndex, device_index)
    {
      if(type==0)
      {

        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     
          
        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag.length)
        {

          if (cursorPosition !=-1)
          {
            if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].modbusProfile}`;
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }         
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].modbusProfile}`;
            new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }        
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }
    }


    function Modify_MasterStatus(type,CloudIndex, device_index)
    {
      if(type==0)
      {

        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].modbusProfile}`;
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag.length)
        {

          if (cursorPosition !=-1)
          {
            if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].modbusProfile}`;
            changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     
          
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }

    }


    function New_clickTag(type, CloudIndex, device_index, tag_index)
    {
      if(type==0)
      {

        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag.length)
        {
          if (tag_index < new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag.length)
          {


            if (cursorPosition !=-1)
            {
              if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
              }
              else
              {
                let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$" 
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
            }     

          }
        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag.length)
        {
          if (tag_index < new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
              }
              else
              {
                let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$" 
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
            }     

          }
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag.length)
        {
          if (tag_index < new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
              }
              else
              {
                let beforeCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$" 
                new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              new_proxy_edge[new_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
            }     

          }
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }

    }

    function Modify_clickTagStatus(type, CloudIndex, device_index, tag_index)
    {
      if(type==0)
      {

        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag.length)
        {
          if (tag_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag.length)
          {


            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }     

          }
        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag.length)
        {
          if (tag_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }     

          }
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag.length)
        {
          if (tag_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }     

          }
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }

    }

    function Modify_clickTag(type, CloudIndex, device_index, tag_index)
    {
      if(type==0)
      {

        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag.length)
        {
          if (tag_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag.length)
          {


            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
            }     

          }
        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag.length)
        {
          if (tag_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
            }     

          }
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag.length)
        {
          if (tag_index < changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag.length)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
            }     

          }
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }

    }



    function New_ProxyEdge_Modal_Page1()
    {
      currentStep=1;
    }

    function New_ProxyEdge_Modal_Page2(type)
    {
      tagsArray = Array.from(selectedNewTags);
      showMenu=false;
      if (type == 0)
      {
        if (new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat==2)
        {
          let other_cloud_index=new_proxy_edge[new_proxy_edge_index].cloud[0].alternativeFormatCloudIndex;
          new_proxy_edge[new_proxy_edge_index].cloud[0].userDefineedData=new_proxy_edge[new_proxy_edge_index].cloud[other_cloud_index].userDefineedData;
        }

      }
      else if (type==1)
      {
        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat==2)
        {
          let other_cloud_index=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].alternativeFormatCloudIndex;
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].userDefineedData=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[other_cloud_index].userDefineedData;
        }
      }

      currentStep=2;
    }

    function New_ProxyEdge_Modal_Page3(type)
    {
      showMenu=false;

      if (type == 0)
      {
        if (new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat==2)
        {
          let other_cloud_index=new_proxy_edge[new_proxy_edge_index].cloud[1].alternativeFormatCloudIndex;
          new_proxy_edge[new_proxy_edge_index].cloud[1].userDefineedData=new_proxy_edge[new_proxy_edge_index].cloud[other_cloud_index].userDefineedData;
        }

      }
      else if (type==1)
      {
        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat==2)
        {
          let other_cloud_index=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].alternativeFormatCloudIndex;
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].userDefineedData=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[other_cloud_index].userDefineedData;
        }
      }

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
        new_proxy_edge[index].modbusTCPSlaveTag=JSON.parse(JSON.stringify(TCPSlaveTag));
        new_proxy_edge[index].modbusTCPMasterTag=JSON.parse(JSON.stringify(TCPMasterTag));
        new_proxy_edge[index].modbusRTUMasterTag=JSON.parse(JSON.stringify(RTUMasterTag));
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
            dataLogFormat: 1,
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
            dataLogFormat: 1,
            alternativeFormatCloudIndex:1, 
            userDefineedData: ""
          }
        ];



        currentStep=1;
        openTagList=false;
        target_index_for_show_tag=-1;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        tcp_slave_tag_show=false;


        new_proxy_edge_index=index;
        new_proxy_edge_modal=true;

        console.log("new_proxy_edge:", new_proxy_edge[index]);

    }

    function add_new_proxy_edge(index)
    {
        if (new_proxy_edge[index].samplingCondition==0)
        {
          new_proxy_edge[index].modbusTag=JSON.parse(JSON.stringify(tagsArray));
        }


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData=[...changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData,new_proxy_edge[index]];

        new_proxy_edge_modal=false;
        openTagList=false;
        target_index_for_show_tag=-1;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        tcp_slave_tag_show=false;        
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
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
      if (cursorPosition !=-1)
      {
        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
        }
        else
        {
          let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$TIME$"
      }

      showMenu=false;
    }

    function ModifyArrayClick(index)
    {

      if (cursorPosition !=-1)
      {
        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
        }
        else
        {
          let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$ARRAY$"
      }

      showMenu=false;

    }


    function ModifyModbusReqClick(index)
    {
      if (cursorPosition !=-1)
      {
        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSREQ$"
        }
        else
        {
          let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSREQ$"
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSREQ$"
      }

      showMenu=false;
    }


    function ModifyModbusResClick(index)
    {
      if (cursorPosition !=-1)
      {
        if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSRESP$"
        }
        else
        {
          let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData.slice(cursorPosition);
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSRESP$"
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[index].userDefineedData+="$MODBUSRESP$"
      }

      showMenu=false;
    }



    function ModifyTagClick(CloudIndex, TagIndex)
    {

      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$"
            }   
          }
      }

      showMenu=false;

    }


    function ModifyTagRawRequest(CloudIndex, TagIndex)
    {

      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREQUEST$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREQUEST$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREQUEST$"
            }   
          }
      }

      showMenu=false;

    }

    function ModifyTagRawReply(CloudIndex, TagIndex)
    {

      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREPLY$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREPLY$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_RAWREPLY$"
            }   
          }
      }

      showMenu=false;

    }


    function ModifyTagStatus(CloudIndex, TagIndex)
    {

      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].samplingCondition==0)
      {
          if (tagsArray.length > TagIndex)
          {
            if (cursorPosition !=-1)
            {
              if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
              {
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
              }
              else
              {
                let beforeCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
                let afterCursorString=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
                changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
              }
            }
            else
            {
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="$";
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+=`${tagsArray[TagIndex]}`;
              changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }   
          }
      }


      showMenu=false; 
    }


    function ModifyCloudFormatChange(current_cloud_index, other_cloud_index)
    {

      if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].dataLogFormat==2)
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].alternativeFormatCloudIndex=other_cloud_index;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].userDefineedData=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].userDefineedData;

      }
      else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].dataLogFormat==1)
      {
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].userDefineedData="";
      }
      else if (changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[current_cloud_index].dataLogFormat==0)
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
 
        BackupProxyEdge.modbusTCPSlaveTag=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTCPSlaveTag));
        
        BackupProxyEdge.modbusTCPMasterTag=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTCPMasterTag));

        BackupProxyEdge.modbusRTUMasterTag=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusRTUMasterTag));

        BackupProxyEdge.cloud=JSON.parse(JSON.stringify(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].cloud));


        currentStep=1;

        openTagList=false;

        target_index_for_show_tag=-1;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        tcp_slave_tag_show=false;

        modify_proxy_edge_modal=true;

    }

    function NoModifyProxyEdge(index)
    {

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].enable=BackupProxyEdge.enable;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].delete=BackupProxyEdge.delete;
        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].samplingCondition=BackupProxyEdge.samplingCondition;


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].periodMS=BackupProxyEdge.periodMS;


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].changePercentage=BackupProxyEdge.changePercentage;


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTCPSlaveTag=JSON.parse(JSON.stringify(BackupProxyEdge.modbusTCPSlaveTag));


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusTCPMasterTag=JSON.parse(JSON.stringify(BackupProxyEdge.modbusTCPMasterTag));


        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusRTUMasterTag=JSON.parse(JSON.stringify(BackupProxyEdge.modbusRTUMasterTag));

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

        modify_proxy_edge_modal=false;
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




  function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex, ArrayName) 
  {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
              if (key == 'cloud')
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
                        if (type == 0)
                        {
                          sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                        }
                      }

                    }
                    else if (obj1[key][i][key2] != obj2[key][i][key2])
                    {
                      let changedstr="Edge Data No."+ArrayIndex +",Cloud No."+(i+1)+" item is changed: "+ "value of "+key2+" has changed to "+obj1[key][i][key2];

                      if (type == 0)
                      {
                        sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                      }
                    }
                  }
                }
              }
              else if (key == 'modbusTCPSlaveTag')
              {
                if (obj1[key].length > obj2[key].length) 
                {
                  let addedCount=obj1[key].length-obj2[key].length;

                  if (addedCount >0)
                  {
                    let changedstr="Edge Data No."+ArrayIndex +", Add "+addedCount+" item(s) to "+ key;
                    if (type == 0)
                    {
                      sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                    }
                  }
                }
                else if (obj1[key].length < obj2[key].length)
                {
                  let deletedCount=obj2[key].length-obj1[key].length;
                  let changedstr="Edge Data No."+ArrayIndex +", Delete "+deletedCount+" item(s) from "+ key;
                  if (type == 0)
                  {
                    sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                  }
                }
                else if (obj1[key].length == obj2[key].length)
                {
                  for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
                  {
                    for (const key2 in obj1[key][i])
                    {
                      if (key2=='tag') 
                      { 

                        if (obj1[key][i][key2].length < obj2[key][i][key2].length)
                        {

                          let deletedCount=obj2[key][i][key2].length-obj1[key][i][key2].length;
                          let changedstr="Edge Data No."+ArrayIndex +", Delete "+deletedCount+" Tags(s) from Modbus TCP Slave:"+ obj1[key][i]['modbusProfile'];
                          if (type == 0)
                          {
                            sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                          }

                        }
                        else if (obj1[key][i][key2].length > obj2[key][i][key2].length)
                        {

                          let addedCount=obj1[key][i][key2].length-obj2[key][i][key2].length;

                          if (addedCount >0)
                          {
                            let changedstr="Edge Data No."+ArrayIndex +", Add "+addedCount+" Tag(s) to Modbus TCP Slave:"+ obj1[key][i]['modbusProfile'];
                            if (type == 0)
                            {
                              sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                            }
                          }

                        }
                        else
                        {
                          for (let m=0; m < obj1[key][i][key2].length; m++)
                          {
                            if (obj1[key][i][key2][m]['tagName'] != obj2[key][i][key2][m]['tagName'])
                            {
                              let changedstr="Edge Data No."+ArrayIndex +",Modbus TCP Slave Tag List No."+(i+1)+" item is changed: " +obj2[key][i][key2][m]['tagName']+" has changed to "+obj1[key][i][key2][m]['tagName'];
                              if (type == 0)
                              {
                                sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                              }
                            }

                            if (obj1[key][i][key2][m]['enable'] != obj2[key][i][key2][m]['enable'])
                            {
                              let changedstr="Edge Data No."+ArrayIndex +",Modbus TCP Slave Tag List No."+(i+1)+" item is changed: "+ obj1[key][i][key2][m]['tagName'] +" enable has changed to "+obj1[key][i][key2][m]['enable'];
                              if (type == 0)
                              {
                                sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                              }
                            }
                          }
                        }

                      }
                      else if (obj1[key][i][key2] != obj2[key][i][key2])
                      {
                          let changedstr="Edge Data No."+ArrayIndex +",Modbus TCP Slave Tag List No."+(i+1)+" item is changed: "+ "value of "+key2+" has changed to "+obj1[key][i][key2];

                          if (type == 0)
                          {
                              sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                          }
                      }
                    }
                  }
                }
              }
              else if (key == 'modbusTCPMasterTag')
              {
                if (obj1[key].length > obj2[key].length) 
                {
                  let addedCount=obj1[key].length-obj2[key].length;

                  if (addedCount >0)
                  {

                    let changedstr="Edge Data No."+ArrayIndex +", Add "+addedCount+" item(s) to "+ key;
                  
                    if (type == 0)
                    {
                      sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                    }
                  }
                }
                else if (obj1[key].length < obj2[key].length)
                {
                  let deletedCount=obj2[key].length-obj1[key].length;
                  let changedstr="Edge Data No."+ArrayIndex +", Delete "+deletedCount+" item(s) from "+ key;
                  if (type == 0)
                  {
                    sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                  }
                }
                else if (obj1[key].length == obj2[key].length)
                {
                  for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
                  {
                    for (const key2 in obj1[key][i])
                    {
                      if (key2=='tag') 
                      { 

                        if (obj1[key][i][key2].length < obj2[key][i][key2].length)
                        {

                          let deletedCount=obj2[key][i][key2].length-obj1[key][i][key2].length;
                          let changedstr="Edge Data No."+ArrayIndex +", Delete "+deletedCount+" Tags(s) from Modbus TCP Master:"+ obj1[key][i]['modbusProfile'];
                          if (type == 0)
                          {
                            sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                          }

                        }
                        else if (obj1[key][i][key2].length > obj2[key][i][key2].length)
                        {

                          let addedCount=obj1[key][i][key2].length-obj2[key][i][key2].length;

                          if (addedCount >0)
                          {
                            let changedstr="Edge Data No."+ArrayIndex +", Add "+addedCount+" Tag(s) to Modbus TCP Master:"+ obj1[key][i]['modbusProfile'];
                            if (type == 0)
                            {
                              sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                            }
                          }

                        }
                        else
                        {
                          for (let m=0; m < obj1[key][i][key2].length; m++)
                          {
                            if (obj1[key][i][key2][m]['tagName'] != obj2[key][i][key2][m]['tagName'])
                            {
                              let changedstr="Edge Data No."+ArrayIndex +",Modbus TCP Master Tag List No."+(i+1)+" item is changed: " +obj2[key][i][key2][m]['tagName']+" has changed to "+obj1[key][i][key2][m]['tagName'];
                              if (type == 0)
                              {
                                sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                              }
                            }

                            if (obj1[key][i][key2][m]['enable'] != obj2[key][i][key2][m]['enable'])
                            {
                              let changedstr="Edge Data No."+ArrayIndex +",Modbus TCP Master Tag List No."+(i+1)+" item is changed: "+ obj1[key][i][key2][m]['tagName'] +" enable has changed to "+obj1[key][i][key2][m]['enable'];
                              if (type == 0)
                              {
                                sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                              }
                            }
                          }
                        }

                      }
                      else if (obj1[key][i][key2] != obj2[key][i][key2])
                      {
                          let changedstr="Edge Data No."+ArrayIndex +",Modbus TCP Master Tag List No."+(i+1)+" item is changed: "+ "value of "+key2+" has changed to "+obj1[key][i][key2];

                          if (type == 0)
                          {
                              sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                          }
                      }
                    }
                  }
                }
              }
              else if (key == 'modbusRTUMasterTag')
              {
                if (obj1[key].length > obj2[key].length) 
                {
                  let addedCount=obj1[key].length-obj2[key].length;

                  if (addedCount >0)
                  {

                    let changedstr="Edge Data No."+ArrayIndex +", Add "+addedCount+" item(s) to "+ key;
                    if (type == 0)
                    {
                      sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                    }
                  }
                }
                else if (obj1[key].length < obj2[key].length)
                {
                  let deletedCount=obj2[key].length-obj1[key].length;
                  let changedstr="Edge Data No."+ArrayIndex +", Delete "+deletedCount+" item(s) from "+ key;
                  if (type == 0)
                  {
                    sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                  }
                }
                else if (obj1[key].length == obj2[key].length)
                {
                  for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
                  {
                    for (const key2 in obj1[key][i])
                    {
                      if (key2=='tag') 
                      { 

                        if (obj1[key][i][key2].length < obj2[key][i][key2].length)
                        {

                          let deletedCount=obj2[key][i][key2].length-obj1[key][i][key2].length;
                          let changedstr="Edge Data No."+ArrayIndex +", Delete "+deletedCount+" Tags(s) from Modbus RTU Master:"+ obj1[key][i]['modbusProfile'];
                          if (type == 0)
                          {
                            sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                          }

                        }
                        else if (obj1[key][i][key2].length > obj2[key][i][key2].length)
                        {

                          let addedCount=obj1[key][i][key2].length-obj2[key][i][key2].length;

                          if (addedCount >0)
                          {
                            let changedstr="Edge Data No."+ArrayIndex +", Add "+addedCount+" Tag(s) to Modbus RTU Master:"+ obj1[key][i]['modbusProfile'];
                            if (type == 0)
                            {
                              sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                            }
                          }

                        }
                        else
                        {
                          for (let m=0; m < obj1[key][i][key2].length; m++)
                          {
                            if (obj1[key][i][key2][m]['tagName'] != obj2[key][i][key2][m]['tagName'])
                            {
                              let changedstr="Edge Data No."+ArrayIndex +",Modbus RTU Master Tag List No."+(i+1)+" item is changed: " +obj2[key][i][key2][m]['tagName']+" has changed to "+obj1[key][i][key2][m]['tagName'];
                              if (type == 0)
                              {
                                sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                              }
                            }

                            if (obj1[key][i][key2][m]['enable'] != obj2[key][i][key2][m]['enable'])
                            {
                              let changedstr="Edge Data No."+ArrayIndex +",Modbus RTU Master Tag List No."+(i+1)+" item is changed: "+ obj1[key][i][key2][m]['tagName'] +" enable has changed to "+obj1[key][i][key2][m]['enable'];
                              if (type == 0)
                              {
                                sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                              }
                            }
                          }
                        }

                      }
                      else if (obj1[key][i][key2] != obj2[key][i][key2])
                      {
                          let changedstr="Edge Data No."+ArrayIndex +",Modbus RTU Master Tag List No."+(i+1)+" item is changed: "+ "value of "+key2+" has changed to "+obj1[key][i][key2];

                          if (type == 0)
                          {
                              sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                          }
                      }
                    }
                  }
                }
              }
              else
              {
                for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
                {
                  compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1, key);
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
                    if (type == 0)
                    {
                      sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                    }
                  }
                }
                else if (obj1[key].length < obj2[key].length)
                {
                  let deletedCount=obj2[key].length-obj1[key].length;
                  let changedstr="Delete "+deletedCount+" item(s) from "+ key;
                  if (type == 0)
                  {
                    sdata_logger_proxy_edge_changedValues=[...sdata_logger_proxy_edge_changedValues, changedstr]; 
                  }
                }
              }
            
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0,"");
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
              changedstr=ArrayName+" No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            }
          }
          
          if (type == 0)
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
          compareObjects(changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[i], sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[i], 0, 1,i+1,"edgeData");
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


      let tcp_slave_tag=[];

      for (let i=0; i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag.length; i++)
      {
        let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName};
        tcp_slave_tag=[...tcp_slave_tag, item];
      }
      


      if (tcp_slave_tag.length !=0)
      {
        let tcp_slave={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_tag};
        TCPSlaveTag=[...TCPSlaveTag,tcp_slave];
        console.log("TCPSlaveTag:",TCPSlaveTag);
      }


      for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;i++)
      {
        let tcp_master_tag=[];

        for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag.length;j++)
        {
          let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName};
          tcp_master_tag=[...tcp_master_tag, item];

        }

        if (tcp_master_tag.length !=0)
        {
          let tcp_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_tag};
          TCPMasterTag=[...TCPMasterTag, tcp_master];
        }

      }

      console.log("TCPMasterTag:", TCPMasterTag);

      for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;i++)
      {
        let rtu_master_tag=[];

        for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag.length;j++)
        {
          let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName};
          rtu_master_tag=[...rtu_master_tag, item];

        }

        if (rtu_master_tag.length !=0)
        {
          let rtu_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_tag};

          RTUMasterTag=[...RTUMasterTag, rtu_master];

        }
      }

      console.log("RTUMasterTag:", RTUMasterTag);

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
          else
          {
              let tcp_slave_tag=[];

              for (let i=0; i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag.length; i++)
              {
                let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName};
                tcp_slave_tag=[...tcp_slave_tag, item];
              }
              


              if (tcp_slave_tag.length !=0)
              {
                let tcp_slave={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_tag};
                TCPSlaveTag=[...TCPSlaveTag,tcp_slave];
                console.log("TCPSlaveTag:",TCPSlaveTag);
              }


              for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;i++)
              {
                let tcp_master_tag=[];

                for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag.length;j++)
                {
                  let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName};
                  tcp_master_tag=[...tcp_master_tag, item];

                }

                if (tcp_master_tag.length !=0)
                {
                  let tcp_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_tag};
                  TCPMasterTag=[...TCPMasterTag, tcp_master];
                }

              }

              console.log("TCPMasterTag:", TCPMasterTag);

              for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;i++)
              {
                let rtu_master_tag=[];

                for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag.length;j++)
                {
                  let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName};
                  rtu_master_tag=[...rtu_master_tag, item];

                }

                if (rtu_master_tag.length !=0)
                {
                  let rtu_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_tag};

                  RTUMasterTag=[...RTUMasterTag, rtu_master];

                }
              }

              console.log("RTUMasterTag:", RTUMasterTag);
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
      

      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }
      else
      {
          let tcp_slave_tag=[];

          for (let i=0; i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag.length; i++)
          {
            let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName};
            tcp_slave_tag=[...tcp_slave_tag, item];
          }
          


          if (tcp_slave_tag.length !=0)
          {
            let tcp_slave={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_tag};
            TCPSlaveTag=[...TCPSlaveTag,tcp_slave];
            console.log("TCPSlaveTag:",TCPSlaveTag);
          }


          for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;i++)
          {
            let tcp_master_tag=[];

            for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag.length;j++)
            {
              let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName};
              tcp_master_tag=[...tcp_master_tag, item];

            }

            if (tcp_master_tag.length !=0)
            {
              let tcp_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_tag};
              TCPMasterTag=[...TCPMasterTag, tcp_master];
            }

          }

          console.log("TCPMasterTag:", TCPMasterTag);

          for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;i++)
          {
            let rtu_master_tag=[];

            for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag.length;j++)
            {
              let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName};
              rtu_master_tag=[...rtu_master_tag, item];

            }

            if (rtu_master_tag.length !=0)
            {
              let rtu_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_tag};

              RTUMasterTag=[...RTUMasterTag, rtu_master];

            }
          }

          console.log("RTUMasterTag:", RTUMasterTag);
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
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">
{
  ProxyEdgeData.modbusRTUMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},
{
  ProxyEdgeData.modbusTCPMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},
{
  ProxyEdgeData.modbusTCPSlaveTag
    .flatMap(slave =>
      slave.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${slave.modbusProfile})`)
    )
    .slice(0, 1)
    .join(", ")
},

......

</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">
{#if ProxyEdgeData.samplingCondition==0}
per {ProxyEdgeData.periodMS} ms
{/if}
</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">
{#each ProxyEdgeData.cloud as Cloud, index}
{#if index!=0}/{/if} {Cloud.profile}({Cloud.topic[0].name})

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

{
  ProxyEdgeData.modbusRTUMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},
{
  ProxyEdgeData.modbusTCPMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},
{
  ProxyEdgeData.modbusTCPSlaveTag
    .flatMap(slave =>
      slave.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${slave.modbusProfile})`)
    )
    .slice(0, 1)
    .join(", ")
},

......

</TableBodyCell>
<TableBodyCell class="w-18"> 
{#if ProxyEdgeData.samplingCondition==0}
per {ProxyEdgeData.periodMS} ms
{/if}
</TableBodyCell>

<TableBodyCell>
{#each ProxyEdgeData.cloud as Cloud, index}
{#if index!=0}/{/if} {Cloud.profile}({Cloud.topic[0].name})

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
    <td class= "pl-4 pt-5" colspan="3">
<div class="flex gap-4">

  <Radio class="pb-1" bind:group={new_proxy_edge[new_proxy_edge_index].samplingCondition} value={0} >Period</Radio>

{#if new_proxy_edge[new_proxy_edge_index].samplingCondition==0}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500" bind:value={new_proxy_edge[new_proxy_edge_index].periodMS}> <p class="pt-2">ms</p>

{/if}



</div>    
    </td>
    <td></td>
    <td></td>

</tr>


<tr>
<td><p class="pl-4 pt-8 text-lg font-light text-right">Modbus Tag</p></td>
 
 <td class="pl-5 pt-8" colspan="3">
 <button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg" on:click={()=>handleClickTagList()}>Choose Tag

{#if openTagList}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron up outline" viewBox="-8 -8 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg>
{/if}


 </button>  

{#if openTagList}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(200px, 276px);"> 

 <ul class="py-1 w-44">


 
{#each new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag as Slave, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {index*45}px);"> 
{#if tcp_slave_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">




{#each Slave.tag as TagItem, index2}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul>  

{/if}

  </div>
 </li> 
{/each}

{#each new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag as Master, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {45+index*41}px);"> 

{#if tcp_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

{#each Master.tag as TagItem, index2}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul>  
{/if}
</div>
  
 </li> 
{/each}



{#each new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag as Master, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag.length*41+index*41+45}px);"> 




{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">
{#each Master.tag as TagItem, index2}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul> 
{/if}

</div>
  
 </li> 
{/each}


 </ul> 
 
 </div>

{/if}

 </td>


</tr>





<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page2(0)}>Next</Button></td>


    </tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
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
{#if new_proxy_edge[new_proxy_edge_index].cloud[0].profile.startsWith("hub_") || new_proxy_edge[new_proxy_edge_index].cloud[0].profile.startsWith("dps_") || new_proxy_edge[new_proxy_edge_index].cloud[0].profile.startsWith("central_")}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].name}>
{/if}  
</div>

</td>


</tr>




<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTimeClick(0)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag(0,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag as Master, index}






<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus(1,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag(1,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus(2,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag(2,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul> 
{/if}
 </div>
{/each}



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
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page3(0)}>Next</Button></td>


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
{#if new_proxy_edge[new_proxy_edge_index].cloud[1].profile.startsWith("hub_") || new_proxy_edge[new_proxy_edge_index].cloud[1].profile.startsWith("dps_") || new_proxy_edge[new_proxy_edge_index].cloud[1].profile.startsWith("central_")}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].name}>
{/if}  
</div>

</td>


</tr>



<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTimeClick(1)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag(0,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus(1,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag(1,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus(2,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}


<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag(2,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}



{/each}
</ul> 
{/if}
 </div>
{/each}



        </ul>
    </div>
</nav>
{/if}



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
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
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page2(0)}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>add_new_proxy_edge(new_proxy_edge_index)}>Add</Button></td>


    </tr>





{/if}    


</table>


</Modal>




<Modal bind:open={modify_proxy_edge_modal} autoclose={false} size="lg" class="w-full">
<form action="#">
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyProxyEdge(modify_proxy_edge_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<StepIndicator {currentStep} {steps} glow />

<p class="mt-6"></p>

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

{/if}


</div>    
    </td>
    <td></td>
    <td></td>

</tr>


<tr>
<td><p class="pl-4 pt-8 text-lg font-light text-right">Modbus Tag</p></td>
   
 <td class="pl-5 pt-8" colspan="3">
 <button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg" on:click={()=>handleClickTagList()}>Choose Tag

{#if openTagList}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron up outline" viewBox="-8 -8 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg>
{/if}


 </button>  

{#if openTagList}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(200px, 276px);"> 

 <ul class="py-1 w-44">


 
{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag as Slave, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {index*45}px);"> 
{#if tcp_slave_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">




{#each Slave.tag as TagItem, index2}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul>  

{/if}

  </div>
 </li> 
{/each}

{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag as Master, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {45+index*41}px);"> 

{#if tcp_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

{#each Master.tag as TagItem, index2}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul>  
{/if}
</div>
  
 </li> 
{/each}



{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag as Master, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag.length*41+index*41+45}px);"> 




{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">
{#each Master.tag as TagItem, index2}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul> 
{/if}

</div>
  
 </li> 
{/each}


 </ul> 
 
 </div>

{/if}

 </td>
</tr>





<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page2(1)}>Next</Button></td>


    </tr>



<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
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


{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].profile.startsWith("hub_") || changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].profile.startsWith("dps_") || changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].profile.startsWith("central_")}
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].topic[0].name}>
{/if}  



</div>

</td>


</tr>









<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTimeClick(0)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag(0,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">


<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus(1,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag(1,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus(2,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag(2,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul> 
{/if}
 </div>
{/each}



        </ul>
    </div>
</nav>
{/if}



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[0].userDefineedData}></textarea>

{/if}


    </td>


</tr>








<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={New_ProxyEdge_Modal_Page1}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page3(1)}>Next</Button></td>


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


{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].profile.startsWith("hub_") || changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].profile.startsWith("dps_") || changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].profile.startsWith("central_")}
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].topic[0].name}>
{/if}  



</div>

</td>


</tr>









<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTimeClick(1)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag(0,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus(1,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag(1,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus(2,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>



{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag(2,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul> 
{/if}
 </div>
{/each}



        </ul>
    </div>
</nav>
{/if}



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].cloud[1].userDefineedData}></textarea>

{/if}


    </td>


</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page2(1)}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>ModifyProxyEdge(modify_proxy_edge_index)}>Modify</Button></td>


    </tr>





{/if}    


</table>
</form>
</Modal>




  </Table>



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