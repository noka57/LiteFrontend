<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator,MultiSelect, Dropdown, DropdownItem } from 'flowbite-svelte';

  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
  import { writable } from 'svelte/store';
  import './global.css';
  import DateTimePicker from "./DateTimePicker.svelte";

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    modbusConfig,
    ChangedModbusConfig,
    genericMQTTConfig,
    ChangedGenericMQTTConfig,
    azureConfig,
    ChangedAzureConfig,
    awsIoTcoreConfig,
    ChangedAWSIoTcoreConfig,
    datatagproConfig,
    ChangedDataTagProConfig,
    DataTagPro_ULRule_ConfigChangedLog,
    DataTagPro_TagRuleEvent_ConfigChangedLog,
    DataTagPro_TagRuleSchedule_ConfigChangedLog,
    DataTagPro_TagRuleSCADA_ConfigChangedLog,
    DataTagPro_TagRuleDM_ConfigChangedLog,
    DataTagPro_TagRuleAccumulated_ConfigChangedLog,
    DataTagPro_TagRuleCalculation_ConfigChangedLog,
    DataTagPro_TagRuleC2D_ConfigChangedLog,
    DataTagPro_General_ConfigChangedLog,
    enableDataTagEnginePROall
  } from "./configG.js"


  let currentStep = 1;
  let steps = ['Step 1', 'Step 2', 'Step 3'];
  let modalElement;


  let getDataReady=0;

  let start_time_hh='';
  let start_time_mm='';
  let end_time_hh='';
  let end_time_mm='';

  let openTagList=false;
  let data_tag_pro_flag=0;

  let TCPSlaveTag=[];
  let TCPSlaveCoilTag=[];
  let TCPSlaveDiscreteInputTag=[];
  let TCPSlaveHoldingRegisterTag=[];
  let TCPSlaveInputRegisterTag=[];

  let TCPMasterTag=[];
  let TCPMasterCoilTag=[];
  let TCPMasterDiscreteInputTag=[];
  let TCPMasterHoldingRegisterTag=[];
  let TCPMasterInputRegisterTag=[];

  let RTUMasterTag=[];
  let RTUMasterCoilTag=[];
  let RTUMasterDiscreteInputTag=[];
  let RTUMasterHoldingRegisterTag=[];
  let RTUMasterInputRegisterTag=[];


  let validSlavePort=true;






  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });


  function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }


  let data_tag_pro_data="";
  let changed_data_tag_pro_data = "";
  let saved_changed_data_tag_pro_data ="";


  let data_tag_pro_general_changedValues = [];
  let data_tag_pro_tag_c2d_changedValues = [];
  let data_tag_pro_tag_calculation_changedValues = [];
  let data_tag_pro_tag_accumulated_changedValues = [];  
  let data_tag_pro_tag_dm_changedValues = [];
  let data_tag_pro_tag_scada_changedValues = [];
  let data_tag_pro_tag_schedule_changedValues=[];
  let data_tag_pro_tag_event_changedValues = [];
  let data_tag_pro_ul_changedValues = [];

  let selectedFile = null;
  let fileContent; 

  let textareaInputNew;
  let textareaInputModify;

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let tdClass = 'px-6 py-4 whitespace-nowrap font-light text-center';
  let trClass= 'noborder text-center bg-white dark:bg-gray-800 dark:border-gray-700';

  let modbus_data="";
  let saved_changed_modbus_data ="";
  let openDetailStatusMMS = false;
  let openDetailStatusMMT = false;
  let openDetailStatusMV = false;
  let openDetailStatusMProcess=false;
  let ModbusTagModifyModal=false;


  let group_test=0;
  let generic_mqtt_data="";
  let saved_changed_generic_mqtt_data ="";

  let azure_data="";
  let saved_changed_azure_data ="";

  let awsIoT_core_data="";
  let saved_changed_awsIoT_core_data ="";


  let CloudProfile=[];






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

  modbusConfig.subscribe(val => {
      modbus_data = val;
  });

  ChangedModbusConfig.subscribe(val => {
      saved_changed_modbus_data = val;
  });


  datatagproConfig.subscribe(val => {
      data_tag_pro_data = val;
  });

  ChangedDataTagProConfig.subscribe(val => {
      saved_changed_data_tag_pro_data = val;
  });


  DataTagPro_ULRule_ConfigChangedLog.subscribe(val => {
      data_tag_pro_ul_changedValues = val;
  });


  DataTagPro_TagRuleEvent_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_event_changedValues = val;
  });
  
  DataTagPro_TagRuleSCADA_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_scada_changedValues = val;
  });
  
  DataTagPro_TagRuleDM_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_dm_changedValues = val;
  });
  

  DataTagPro_TagRuleAccumulated_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_accumulated_changedValues = val;
  });
  
  DataTagPro_TagRuleCalculation_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_calculation_changedValues = val;
  });

  DataTagPro_TagRuleC2D_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_c2d_changedValues = val;
  });

  DataTagPro_TagRuleSchedule_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_schedule_changedValues = val;
  });
  
  DataTagPro_General_ConfigChangedLog.subscribe(val => {
      data_tag_pro_general_changedValues = val;
  });


  enableDataTagEnginePROall.subscribe(val => {
      data_tag_pro_flag = val;
  });



  let selectedStartDateTime = "";
  let selectedEndDateTime = "";


  function handleClickTagList()
  {
        openTagList=!openTagList;
  }



    let cursorPosition=-1;
    let beforeCursor; 
    let pos = { x: 0, y: 0 }
    let menu = { h: 0, w: 0 }
    let browser = { h: 0, y: 0 }
    let showMenu = false;
    let content
    let rect;

    let accumulated_tag_show=false;
    let calculation_tag_show=false;
    let tcp_slave_tag_show=false;
    let tcp_master_tag_show=false;
    let rtu_master_tag_show=false;    
    let target_index_for_show_tag=-1;


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
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1,key);
            }

            if (obj1[key].length > obj2[key].length) 
            {
              let addedCount=obj1[key].length-obj2[key].length;
              for (let j=obj2[key].length; j < obj1[key].length; j++)
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
                    data_tag_pro_tag_c2d_changedValues=[...data_tag_pro_tag_c2d_changedValues, changedstr];
                  }
                  else if (type == 1)
                  {
                    data_tag_pro_tag_calculation_changedValues=[...data_tag_pro_tag_calculation_changedValues, changedstr];          
                  }
                  else if (type == 2)
                  {
                    data_tag_pro_tag_accumulated_changedValues=[...data_tag_pro_tag_accumulated_changedValues, changedstr];          
                  }   
                  else if (type == 3)
                  {
       
                  }
                  else if (type == 4)
                  {
                    data_tag_pro_tag_dm_changedValues=[...data_tag_pro_tag_dm_changedValues, changedstr];          
                  }
                  else if (type == 5)
                  {
                    data_tag_pro_tag_scada_changedValues=[...data_tag_pro_tag_scada_changedValues, changedstr];
                  }
                  else if (type == 6)
                  {
                    data_tag_pro_tag_event_changedValues=[...data_tag_pro_tag_event_changedValues, changedstr];
                  }  
                  else if (type == 7)
                  {
                    data_tag_pro_ul_changedValues=[...data_tag_pro_ul_changedValues, changedstr];
                  }
                  else if (type ==8)
                  {
                    data_tag_pro_tag_schedule_changedValues=[...data_tag_pro_tag_schedule_changedValues, changedstr];
                  } 
              }                                   
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
                if (type == 0)
                {
                  data_tag_pro_tag_c2d_changedValues=[...data_tag_pro_tag_c2d_changedValues, changedstr];
                }
                else if (type == 1)
                {
                  data_tag_pro_tag_calculation_changedValues=[...data_tag_pro_tag_calculation_changedValues, changedstr];          
                }
                else if (type == 2)
                {
                  data_tag_pro_tag_accumulated_changedValues=[...data_tag_pro_tag_accumulated_changedValues, changedstr];          
                }   
                else if (type == 3)
                {
       
                }
                else if (type == 4)
                {
                  data_tag_pro_tag_dm_changedValues=[...data_tag_pro_tag_dm_changedValues, changedstr];          
                }
                else if (type == 5)
                {
                  data_tag_pro_tag_scada_changedValues=[...data_tag_pro_tag_scada_changedValues, changedstr];
                }
                else if (type == 6)
                {
                  data_tag_pro_tag_event_changedValues=[...data_tag_pro_tag_event_changedValues, changedstr];
                }  
                else if (type == 7)
                {
                  data_tag_pro_ul_changedValues=[...data_tag_pro_ul_changedValues, changedstr];
                }
                else if (type ==8)
                {
                  data_tag_pro_tag_schedule_changedValues=[...data_tag_pro_tag_schedule_changedValues, changedstr];
                } 

            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0, key);
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            if (type==0 && (ArrayName=="rtuMasterProfile"||ArrayName=="tcpMasterProfile"))
            {
              changedstr=ArrayName+ ", Value of "+key+" has changed to "+obj1[key];
            }
            else
            {
              changedstr="Value of "+key+" has changed to "+obj1[key];
            }

          }
          else
          {
            if (type==0 || type==5)
            {
              changedstr=ArrayName +" List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            }
            else
            {
              changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            }
          }

          if (type == 0)
          {
            data_tag_pro_tag_c2d_changedValues=[...data_tag_pro_tag_c2d_changedValues, changedstr];
          }
          else if (type == 1)
          {
            data_tag_pro_tag_calculation_changedValues=[...data_tag_pro_tag_calculation_changedValues, changedstr];          
          }
          else if (type == 2)
          {
            data_tag_pro_tag_accumulated_changedValues=[...data_tag_pro_tag_accumulated_changedValues, changedstr];          
          }   
          else if (type == 3)
          {
         
          }
          else if (type == 4)
          {
            data_tag_pro_tag_dm_changedValues=[...data_tag_pro_tag_dm_changedValues, changedstr];          
          }
          else if (type == 5)
          {
            data_tag_pro_tag_scada_changedValues=[...data_tag_pro_tag_scada_changedValues, changedstr];
          }
          else if (type == 6)
          {
            data_tag_pro_tag_event_changedValues=[...data_tag_pro_tag_event_changedValues, changedstr];
          }  
          else if (type == 7)
          {
            data_tag_pro_ul_changedValues=[...data_tag_pro_ul_changedValues, changedstr];
          } 
          else if (type == 8)
          {
            data_tag_pro_tag_schedule_changedValues=[...data_tag_pro_tag_schedule_changedValues, changedstr];
          } 

        }
      }
    }


function parseDbSlaves(text) {
    const blocks = text
      .split(/config\s+db_slave/)
      .map(b => b.trim())
      .filter(Boolean);

    return blocks
      .map(block => {
        const address = block.match(/option\s+address\s+'([^']+)'/)?.[1];
        const tag = block.match(/option\s+write_column_tag_name\s+'([^']+)'/)?.[1];

        if (!address || !tag) return null;

        return {
          tag_name: tag,
          address: Number(address)
        };
      })
      .filter(Boolean);
  }






  
  function saveScheduleTag()
  {
    if (data_tag_pro_tag_schedule_changedValues.length !=0)
    {
      data_tag_pro_tag_schedule_changedValues=[];
    }

    for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length); i++) 
    {

      compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[i],8,1,i+1,"ScheduleTag");
    }

    if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length)
    {
      let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length;

      for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length;k++)
      {
        if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[k].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Schedule Tag List";
        data_tag_pro_tag_schedule_changedValues=[...data_tag_pro_tag_schedule_changedValues, changedstr];
      }
    }



    DataTagPro_TagRuleSchedule_ConfigChangedLog.set(data_tag_pro_tag_schedule_changedValues);

    let NonDelete=[];
    for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length; i++)
    {
      if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[i].delete)
      {
        NonDelete=[...NonDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[i]]
      }

    }



    saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag=JSON.parse(JSON.stringify(NonDelete));
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag=JSON.parse(JSON.stringify(NonDelete));


    ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
    
    console.log(data_tag_pro_tag_schedule_changedValues);


  } 



  function saveULRule()
  {
    console.log("save ul rule");
    if (data_tag_pro_ul_changedValues.length !=0)
    {
      data_tag_pro_ul_changedValues=[];
    }

    for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length, data_tag_pro_data.config.service_dataTagPro_ulRule.length); i++) 
    {

      compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_ulRule[i], data_tag_pro_data.config.service_dataTagPro_ulRule[i],7,1,i+1,"UL Rule");
    }

    if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length > data_tag_pro_data.config.service_dataTagPro_ulRule.length)
    {
      let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length-data_tag_pro_data.config.service_dataTagPro_ulRule.length;

      for (let k=data_tag_pro_data.config.service_dataTagPro_ulRule.length; k < changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length;k++)
      {
        if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[k].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to UL Rule List";
        data_tag_pro_ul_changedValues=[...data_tag_pro_ul_changedValues, changedstr];
      }
    }



    DataTagPro_ULRule_ConfigChangedLog.set(data_tag_pro_ul_changedValues);

    let tempForDelete=[];
    for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length; i++)
    {
      if (!changed_data_tag_pro_data.config.service_dataTagPro_ulRule[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_ulRule[i]]
      }

    }



    saved_changed_data_tag_pro_data.config.service_dataTagPro_ulRule=JSON.parse(JSON.stringify(tempForDelete));
    changed_data_tag_pro_data.config.service_dataTagPro_ulRule=JSON.parse(JSON.stringify(tempForDelete));


    ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
    
    console.log(data_tag_pro_ul_changedValues);


  }

  function saveEventTag()
  {
    console.log("save event tag");
    if (data_tag_pro_tag_event_changedValues.length !=0)
    {
      data_tag_pro_tag_event_changedValues=[];
    }

      for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length); i++) 
      {

        compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[i],6,1,i+1,"EventTag");
      }



      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length)
      {
        let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length;

        for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length;k++)
        {
          if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[k].delete)
          {
            addedCount--;
          }

        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to Event Tag List";
          data_tag_pro_tag_event_changedValues=[...data_tag_pro_tag_event_changedValues, changedstr];
        }
      }



      DataTagPro_TagRuleEvent_ConfigChangedLog.set(data_tag_pro_tag_event_changedValues);

      let tempForDelete=[];
      for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length; i++)
      {
        if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[i]]
        }

      }



      saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag=JSON.parse(JSON.stringify(tempForDelete));
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag=JSON.parse(JSON.stringify(tempForDelete));


      ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
      
      console.log(data_tag_pro_tag_event_changedValues);


  }


  function saveScadaTag()
  {
    console.log("save scada tag");

    if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTagTCPListenPort == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].listenPort)
    {
      validSlavePort=false;
    }
    else
    {
      validSlavePort=true;
    }

    if (validSlavePort)
    {

      if (data_tag_pro_tag_scada_changedValues.length !=0)
      {
        data_tag_pro_tag_scada_changedValues=[];
      }

      for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length); i++) 
      {

        compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[i],5,1,i+1,"ScadaTag");
      }



      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length)
      {
        let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length;

        for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length;k++)
        {
          if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[k].delete)
          {
            addedCount--;
          }

        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to Scada Tag List";
          data_tag_pro_tag_scada_changedValues=[...data_tag_pro_tag_scada_changedValues, changedstr];
        }
      }



      DataTagPro_TagRuleSCADA_ConfigChangedLog.set(data_tag_pro_tag_scada_changedValues);

      let tempForDelete=[];
      for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length; i++)
      {
        if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[i]]
        }

      }



      saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag=JSON.parse(JSON.stringify(tempForDelete));
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag=JSON.parse(JSON.stringify(tempForDelete));


      ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
      
      console.log(data_tag_pro_tag_scada_changedValues);
    }
    else
    {
      console.log("[Warn] The same listen port as origin modbus tcp slave")
    }


  }


  function saveDMtag()
  {
      console.log("save DM tag");
      if (data_tag_pro_tag_dm_changedValues.length !=0)
      {
        data_tag_pro_tag_dm_changedValues=[];
      }


      for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length); i++) 
      {

        compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[i],4,1,i+1,"direct_method_tag");
      }



      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length)
      {
        let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length;

        for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length;k++)
        {
          if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[k].delete)
          {
            addedCount--;
          }

        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to Direct Method Tag List";
          data_tag_pro_tag_dm_changedValues=[...data_tag_pro_tag_dm_changedValues, changedstr];
        }
      }



      DataTagPro_TagRuleDM_ConfigChangedLog.set(data_tag_pro_tag_dm_changedValues);

      let tempForDelete=[];
      for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length; i++)
      {
        if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[i]]
        }

      }



      saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag=JSON.parse(JSON.stringify(tempForDelete));
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag=JSON.parse(JSON.stringify(tempForDelete));


      ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
      
      console.log(data_tag_pro_tag_dm_changedValues);


  }



  function saveATag()
  {
    console.log("save accumulated tag");
    if (data_tag_pro_tag_accumulated_changedValues.length != 0)
    {
      data_tag_pro_tag_accumulated_changedValues=[];
    }
    

    for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length); i++) 
    {

      compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[i],2,1,i+1,"accumulatedTag");
    }



    if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length)
    {
      let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length;

      for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length;k++)
      {
        if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[k].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Accumulated Tag List";
        data_tag_pro_tag_accumulated_changedValues=[...data_tag_pro_tag_accumulated_changedValues, changedstr];
      }
    }



    DataTagPro_TagRuleAccumulated_ConfigChangedLog.set(data_tag_pro_tag_accumulated_changedValues);

    let tempForDelete=[];
    for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length; i++)
    {
      if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[i]]
      }

    }



    saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag=JSON.parse(JSON.stringify(tempForDelete));
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag=JSON.parse(JSON.stringify(tempForDelete));


    ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
    
    console.log(data_tag_pro_tag_accumulated_changedValues);
  } 

  function saveC2DTag()
  {
    console.log("save c2d tag");
    if (data_tag_pro_tag_c2d_changedValues.length !=0)
    {
      data_tag_pro_tag_c2d_changedValues=[];
    }

    for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length); i++) 
    {

      compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[i],0,1,i+1,"cloud2DeviceTag");
    }


    if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length)
    {
      let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length;

      for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length;k++)
      {
        if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[k].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Cloud To Device Tag List";
        data_tag_pro_tag_c2d_changedValues=[...data_tag_pro_tag_c2d_changedValues, changedstr];
      }
    }

    DataTagPro_TagRuleC2D_ConfigChangedLog.set(data_tag_pro_tag_c2d_changedValues);
    let tempForDelete=[];
    for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length; i++)
    {
      if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[i]]
      }

    }

    saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag=JSON.parse(JSON.stringify(tempForDelete));
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag=JSON.parse(JSON.stringify(tempForDelete));

    ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
    console.log(data_tag_pro_tag_c2d_changedValues);
  }


  function saveCTag()
  {
    console.log("save calculation tag");
    if (data_tag_pro_tag_calculation_changedValues.length != 0)
    {
      data_tag_pro_tag_calculation_changedValues=[];
    }
    

    for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length); i++) 
    {

      compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[i],1,1,i+1,"calculationTag");
    }



    if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length)
    {
      let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length;

      for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length;k++)
      {
        if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[k].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Calculation Tag List";
        data_tag_pro_tag_calculation_changedValues=[...data_tag_pro_tag_calculation_changedValues, changedstr];
      }
    }



    DataTagPro_TagRuleCalculation_ConfigChangedLog.set(data_tag_pro_tag_calculation_changedValues);

    let tempForDelete=[];
    for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length; i++)
    {
      if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[i]]
      }

    }



    saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag=JSON.parse(JSON.stringify(tempForDelete));
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag=JSON.parse(JSON.stringify(tempForDelete));


    ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
    
    console.log(data_tag_pro_tag_calculation_changedValues);
  }


  function saveGeneral()
  {
    console.log("save general");
    if (data_tag_pro_general_changedValues.length !=0)
    {
        data_tag_pro_general_changedValues=[];
    }


    if (changed_data_tag_pro_data.config.service_dataTagPro_general.enable != data_tag_pro_data.config.service_dataTagPro_general.enable)
    {
      saved_changed_data_tag_pro_data.config.service_dataTagPro_general.enable=changed_data_tag_pro_data.config.service_dataTagPro_general.enable;
      let changedStr="Data Tag Pro is changed to " + changed_data_tag_pro_data.config.service_dataTagPro_general.enable;
            
      data_tag_pro_general_changedValues=[...data_tag_pro_general_changedValues, changedStr];
    }

      DataTagPro_General_ConfigChangedLog.set(data_tag_pro_general_changedValues);
      ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
      console.log(data_tag_pro_general_changedValues);
  }
 

  function handleClickMMS() {
        openDetailStatusMMS=!openDetailStatusMMS;
  }

  function handleClickMP()
  {
      openDetailStatusMProcess=!openDetailStatusMProcess;
  }

  function handleClickMMT() {
        openDetailStatusMMT=!openDetailStatusMMT;
  }


  function handleClickMV() {
        openDetailStatusMV=!openDetailStatusMV;
  }




  let modify_calculation_tag_modal=false;
  let modify_calculation_tag_index;

  let BackupCTag=
  {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  };



  function TriggerModifyCTag(index)
  {
    modify_calculation_tag_index=index;

    BackupCTag.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].enable;
    BackupCTag.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].delete;
    BackupCTag.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].tagName;
    BackupCTag.calculationFormula=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula;

    BackupCTag.schedulerEnable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].schedulerEnable;

    BackupCTag.preset=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset;

    BackupCTag.startCronString=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].startCronString;
    BackupCTag.stopCronString=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].stopCronString;


    [minute, hour, dayOfMonth, month, dayOfWeek] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].startCronString.split(' ');
    [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].stopCronString.split(' ');


    errors.minute=false;
    errors.hour=false;
    errors.dayOfMonth=false;
    errors.dayOfWeek=false;
    errors.month=false;

    errors.minute2=false;
    errors.hour2=false;
    errors.dayOfMonth2=false;
    errors.dayOfWeek2=false;
    errors.month2=false;

    showMenu=false;

    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;    
    modify_calculation_tag_modal=true;
  }

  function no_modify_calculation_tag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].enable=BackupCTag.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].delete=BackupCTag.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].tagName=BackupCTag.tagName;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula=BackupCTag.calculationFormula;



    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].schedulerEnable=BackupCTag.schedulerEnable;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset=BackupCTag.preset;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].startCronString=BackupCTag.startCronString;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].stopCronString=BackupCTag.stopCronString;


    modify_calculation_tag_modal=false;

    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;    
  }

  function modify_calculation_tag(index)
  {

    modify_calculation_tag_modal=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;  

  }

  let modify_accumulated_tag_modal=false;
  let modify_accumulated_tag_index;

  let BackupAccumulatedTag=
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    preset:"",
    startCronString:"",
    stopCronString:""
  };




  function TriggerModifyATag(index)
  {


    BackupAccumulatedTag.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].enable;
    BackupAccumulatedTag.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].delete;
    BackupAccumulatedTag.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].tagName;
    BackupAccumulatedTag.targetTag=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].targetTag;
    BackupAccumulatedTag.modbusTagType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].modbusTagType;

    BackupAccumulatedTag.modbusTagOwner=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].modbusTagOwner;
    BackupAccumulatedTag.modbusTagOwnerIndex=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].modbusTagOwnerIndex;


    BackupAccumulatedTag.preset=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].preset;
    BackupAccumulatedTag.startCronString=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].startCronString;


    BackupAccumulatedTag.stopCronString=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].stopCronString;



    [minute, hour, dayOfMonth, month, dayOfWeek] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].startCronString.split(' ');
    [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].stopCronString.split(' ');


    errors.minute=false;
    errors.hour=false;
    errors.dayOfMonth=false;
    errors.dayOfWeek=false;
    errors.month=false;

    errors.minute2=false;
    errors.hour2=false;
    errors.dayOfMonth2=false;
    errors.dayOfWeek2=false;
    errors.month2=false;

    modify_accumulated_tag_index=index;
    modify_accumulated_tag_modal=true;

  }

  function no_modify_accumulated_tag()
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].enable=BackupAccumulatedTag.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].delete=BackupAccumulatedTag.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].tagName=BackupAccumulatedTag.tagName;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].targetTag=BackupAccumulatedTag.targetTag;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner=BackupAccumulatedTag.modbusTagOwner;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex=BackupAccumulatedTag.modbusTagOwnerIndex;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset=BackupAccumulatedTag.preset;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].startCronString=BackupAccumulatedTag.startCronString;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].stopCronString=BackupAccumulatedTag.stopCronString;



    modify_accumulated_tag_modal=false;
  }

  function modify_accumulated_tag()
  {

    modify_accumulated_tag_modal=false;
  }



  let modify_DM_tag_modal=false;
  let modify_DM_tag_index;

  let BackupDM_tag=
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  
  }

  function TriggerModifyDMTag(index)
  {
    modify_DM_tag_index=index;
    BackupDM_tag.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].enable;
    BackupDM_tag.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].delete;
    BackupDM_tag.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].tagName;
    BackupDM_tag.cloudProfile=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].cloudProfile;    
    BackupDM_tag.targetTag=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].targetTag;  

    BackupDM_tag.modbusTagType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType;  
    BackupDM_tag.modbusTagOwner=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner;  
    BackupDM_tag.modbusTagOwnerIndex=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex; 
    modify_DM_tag_modal=true;
  }

  function NoModifyDM()
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].enable=BackupDM_tag.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].delete=BackupDM_tag.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].tagName=BackupDM_tag.tagName;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].cloudProfile=BackupDM_tag.cloudProfile;  
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].targetTag=BackupDM_tag.targetTag; 

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType=BackupDM_tag.modbusTagType; 
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner=BackupDM_tag.modbusTagOwner; 
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex=BackupDM_tag.modbusTagOwnerIndex;


    modify_DM_tag_modal=false;

  }


  function modify_DM_tag()
  {
    modify_DM_tag_modal=false;
  }



  let scada_target_tag=[];
  let modify_scada_tag_modal=false;
  let modify_scada_tag_index;

  let BackupScada=       
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  };

  function TriggerModifyScadaTag(index)
  {

    openTagList=false;

    modify_scada_tag_index=index;
    BackupScada.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].enable;
    BackupScada.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].delete;
    BackupScada.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].tagName;

    BackupScada.modbusTCPSlaveCoilTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveCoilTag));
    
    BackupScada.modbusTCPSlaveDiscreteInputTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveDiscreteInputTag));    


    BackupScada.modbusTCPSlaveHoldingRegisterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveHoldingRegisterTag));  


    BackupScada.modbusTCPSlaveInputRegisterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveInputRegisterTag));  
    
    BackupScada.modbusTCPMasterCoilTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterCoilTag));
    
    BackupScada.modbusTCPMasterDiscreteInputTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterDiscreteInputTag));    


    BackupScada.modbusTCPMasterHoldingRegisterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterHoldingRegisterTag));  


    BackupScada.modbusTCPMasterInputRegisterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterInputRegisterTag));    

    BackupScada.modbusRTUMasterCoilTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterCoilTag));
    
    BackupScada.modbusRTUMasterDiscreteInputTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterDiscreteInputTag));    


    BackupScada.modbusRTUMasterHoldingRegisterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterHoldingRegisterTag));  


    BackupScada.modbusRTUMasterInputRegisterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterInputRegisterTag));  


    BackupScada.pointType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType;

    BackupScada.address=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].address;



    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;

    modify_scada_tag_modal=true;
  }

  function NoModifyScada()
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].enable=BackupScada.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].delete=BackupScada.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].tagName=BackupScada.tagName;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveCoilTag=JSON.parse(JSON.stringify(BackupScada.modbusTCPSlaveCoilTag));
    

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveDiscreteInputTag=JSON.parse(JSON.stringify(BackupScada.modbusTCPSlaveDiscreteInputTag));  

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveHoldingRegisterTag=JSON.parse(JSON.stringify(BackupScada.modbusTCPSlaveHoldingRegisterTag)); 


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveInputRegisterTag=JSON.parse(JSON.stringify(BackupScada.modbusTCPSlaveInputRegisterTag));  
    

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterCoilTag=JSON.parse(JSON.stringify(    BackupScada.modbusTCPMasterCoilTag));


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterDiscreteInputTag=JSON.parse(JSON.stringify(    BackupScada.modbusTCPMasterDiscreteInputTag));  
  

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterHoldingRegisterTag=JSON.parse(JSON.stringify(BackupScada.modbusTCPMasterHoldingRegisterTag));  
    

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterInputRegisterTag=JSON.parse(JSON.stringify(BackupScada.modbusTCPMasterInputRegisterTag));    
    

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterCoilTag=JSON.parse(JSON.stringify(BackupScada.modbusRTUMasterCoilTag));
    
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterDiscreteInputTag=JSON.parse(JSON.stringify(BackupScada.modbusRTUMasterDiscreteInputTag));    


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterHoldingRegisterTag=JSON.parse(JSON.stringify(BackupScada.modbusRTUMasterHoldingRegisterTag));  


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterInputRegisterTag=JSON.parse(JSON.stringify(BackupScada.modbusRTUMasterInputRegisterTag));  



    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType=BackupScada.pointType;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].address=BackupScada.address;

    modify_scada_tag_modal=false;
    openTagList=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;

  }


  function modify_scada_tag()
  {


    modify_scada_tag_modal=false;
    openTagList=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    
  }

  function ModifyPointTypeChange(index, logical_address)
  {

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[index].address=logical_address; 
  }


  let modify_event_tag_modal=false;
  let modify_event_tag_index;

  let BackupEventTag=
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  }


  function TriggerModifyEventTag(index)
  {

    modify_event_tag_index=index;
    BackupEventTag.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].enable;
    BackupEventTag.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].delete;
    BackupEventTag.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].tagName;
    BackupEventTag.triggerTag=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerTag;

    BackupEventTag.triggerModbusTagType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType;

    BackupEventTag.triggerModbusTagOwner=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner;


    BackupEventTag.triggerModbusTagOwnerIndex=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex;

    BackupEventTag.triggerConditionOperand=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionOperand;
    BackupEventTag.triggerConditionValue= changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionValue;  

    BackupEventTag.actionOperation=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation;
    BackupEventTag.actionOperationValue=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperationValue; 
    BackupEventTag.actionTarget=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionTarget;

    BackupEventTag.actionModbusTagType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType;


    BackupEventTag.actionModbusTagOwner=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner;


    BackupEventTag.actionModbusTagOwnerIndex=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex;

    modify_event_tag_modal=true;
  }

  function NoModifyEventTag()
  {

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].enable=BackupEventTag.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].delete=BackupEventTag.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].tagName=BackupEventTag.tagName;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerTag=BackupEventTag.triggerTag;   

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType=BackupEventTag.triggerModbusTagType;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner=BackupEventTag.triggerModbusTagOwner;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex=BackupEventTag.triggerModbusTagOwnerIndex;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionOperand=BackupEventTag.triggerConditionOperand;  
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionValue=BackupEventTag.triggerConditionValue;  

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation=BackupEventTag.actionOperation;  
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperationValue=BackupEventTag.actionOperationValue;  
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionTarget=BackupEventTag.actionTarget;  


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType=BackupEventTag.actionModbusTagType;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner=BackupEventTag.actionModbusTagOwner;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex=BackupEventTag.actionModbusTagOwnerIndex;

    modify_event_tag_modal=false;

  }


  function modify_event_tag()
  {
    modify_event_tag_modal=false;
  }



  let modify_ul_rule_modal=false;
  let modify_ul_rule_index;

  let BackupULRule=
  {
    enable: false,
    delete: false,
    samplingCondition:0,
    periodMS:1000,
    changePercentage:10,
    modbusTCPSlaveTag:[],
    modbusTCPMasterTag:[],
    modbusRTUMasterTag:[],
    calculationTag:[],
    accumulatedTag:[],
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

  function TriggerModifyULRule(index)
  {
    modify_ul_rule_index=index;

    BackupULRule.enable=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].enable;
    BackupULRule.delete=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].delete;      
    BackupULRule.samplingCondition=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].samplingCondition;
    BackupULRule.periodMS=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].periodMS;
    BackupULRule.changePercentage=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].changePercentage;

    BackupULRule.modbusTCPSlaveTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].modbusTCPSlaveTag));
    
    BackupULRule.modbusTCPMasterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].modbusTCPMasterTag));

    BackupULRule.modbusRTUMasterTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].modbusRTUMasterTag));

    BackupULRule.calculationTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].calculationTag));
    
    BackupULRule.accumulatedTag=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].accumulatedTag));



    BackupULRule.cloud=JSON.parse(JSON.stringify(changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].cloud));



    currentStep=1;


    openTagList=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    calculation_tag_show=false;
    accumulated_tag_show=false;
    modify_ul_rule_modal=true;
  }

  function NoModifyULRule(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].enable=BackupULRule.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].delete=BackupULRule.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].samplingCondition=BackupULRule.samplingCondition;


    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].periodMS=BackupULRule.periodMS;


    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].changePercentage=BackupULRule.changePercentage;


    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].modbusTCPSlaveTag=JSON.parse(JSON.stringify(BackupULRule.modbusTCPSlaveTag));


    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].modbusTCPMasterTag=JSON.parse(JSON.stringify(BackupULRule.modbusTCPMasterTag));


    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].modbusRTUMasterTag=JSON.parse(JSON.stringify(BackupULRule.modbusRTUMasterTag));



    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].calculationTag=JSON.parse(JSON.stringify(BackupULRule.calculationTag));
    
    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].accumulatedTag=JSON.parse(JSON.stringify(BackupULRule.accumulatedTag));


    changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].cloud=JSON.parse(JSON.stringify(BackupULRule.cloud));


    modify_ul_rule_modal=false;

    openTagList=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    calculation_tag_show=false;
    accumulated_tag_show=false;

  }

  function modify_ul_rule()
  {
    modify_ul_rule_modal=false;  
    openTagList=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    calculation_tag_show=false;
    accumulated_tag_show=false;
  }





  let new_ul_rule_modal=false;
  let new_ul_rule_index;
  let new_ul_rule=[
  {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      calculationTag:[],
      accumulatedTag:[],
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

  function NoAddULRule(index)
  {
    new_ul_rule_modal=false;
    openTagList=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    calculation_tag_show=false;
    accumulated_tag_show=false;

  }

  function RestoreDeleteULRule(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].delete=false;
  }

  function DeleteULRule(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].delete=true;
  }

  function New_UL_Rule_Modal_Page1()
  {
    currentStep=1;
  }

  function New_UL_Rule_Modal_Page2(type)
  {
    showMenu=false;

    currentStep=2;
  }

  function New_UL_Rule_Modal_Page3(type)
  {
    showMenu=false;

    currentStep=3;
  }


  function New_clickTagStatus_UL(type, CloudIndex, device_index, tag_index)
  {
    if(type==0)
    {

      if (device_index < new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag.length)
      {
        if (tag_index < new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag.length)
        {


          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }
      }

      tcp_slave_tag_show=false;
      showMenu=false;
    }
    else if (type ==1)
    {
      if (device_index < new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length)
      {
        if (tag_index < new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }
      }

      tcp_master_tag_show=false;
      showMenu=false;
    }
    else if (type == 2)
    {
      if (device_index < new_ul_rule[new_ul_rule_index].modbusRTUMasterTag.length)
      {
        if (tag_index < new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }
      }

      rtu_master_tag_show=false;
      showMenu=false;
    }

  }


    function New_MasterStatus_UL(type, CloudIndex, device_index)
    {
      if(type==0)
      {

        if (device_index < new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     
          
        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length)
        {

          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].modbusProfile}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }         
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < new_ul_rule[new_ul_rule_index].modbusRTUMasterTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].modbusProfile}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }        
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }
    }


    function Modify_MasterStatus_UL(type,CloudIndex, device_index)
    {
      if(type==0)
      {

        if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].modbusProfile}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }

        tcp_slave_tag_show=false;
        showMenu=false;
      }
      else if (type ==1)
      {
        if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].modbusProfile}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].modbusProfile}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     
        }

        tcp_master_tag_show=false;
        showMenu=false;
      }
      else if (type == 2)
      {
        if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag.length)
        {

          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].modbusProfile}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].modbusProfile}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     
          
        }

        rtu_master_tag_show=false;
        showMenu=false;
      }

    }




  function New_clickTag_UL(type, CloudIndex, device_index, tag_index)
  {
    if(type==0)
    {

      if (device_index < new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag.length)
      {
        if (tag_index < new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag.length)
        {


          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
          }     

        }
      }

      tcp_slave_tag_show=false;
      showMenu=false;
    }
    else if (type ==1)
    {
      if (device_index < new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length)
      {
        if (tag_index < new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
          }     

        }
      }

      tcp_master_tag_show=false;
      showMenu=false;
    }
    else if (type == 2)
    {
      if (device_index < new_ul_rule[new_ul_rule_index].modbusRTUMasterTag.length)
      {
        if (tag_index < new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
            }
            else
            {
              let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$" 
              new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${new_ul_rule[new_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
            new_ul_rule[new_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
          }     

        }
      }

      rtu_master_tag_show=false;
      showMenu=false;
    }

  }
    function ModifyTimeClick_UL(index)
    {
      if (cursorPosition !=-1)
      {
        if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData.length < cursorPosition)
        {
          changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData+="$TIME$"
        }
        else
        {
          let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData.slice(0, cursorPosition);
          let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData.slice(cursorPosition);
          changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData=`${beforeCursorString}`;
          changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData+="$TIME$"
          changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData+=`${afterCursorString}`;
        }

      }
      else
      {
        changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[index].userDefineedData+="$TIME$"
      }

      showMenu=false;
    }

  function Modify_clickTagStatus_UL(type, CloudIndex, device_index, tag_index)
  {
    if(type==0)
    {

      if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag.length)
      {
        if (tag_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag.length)
        {


          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }
      }

      tcp_slave_tag_show=false;
      showMenu=false;
    }
    else if (type ==1)
    {
      if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length)
      {
        if (tag_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }
      }

      tcp_master_tag_show=false;
      showMenu=false;
    }
    else if (type == 2)
    {
      if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag.length)
      {
        if (tag_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="_STATUS$"
          }     

        }
      }

      rtu_master_tag_show=false;
      showMenu=false;
    }

  }

  function Modify_clickTag_UL(type, CloudIndex, device_index, tag_index)
  {
    if(type==0)
    {

      if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag.length)
      {
        if (tag_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag.length)
        {


          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag[device_index].tag[tag_index].tagName}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
          }     

        }
      }

      tcp_slave_tag_show=false;
      showMenu=false;
    }
    else if (type ==1)
    {
      if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length)
      {
        if (tag_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag[device_index].tag[tag_index].tagName}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
          }     

        }
      }

      tcp_master_tag_show=false;
      showMenu=false;
    }
    else if (type == 2)
    {
      if (device_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag.length)
      {
        if (tag_index < changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag.length)
        {
          if (cursorPosition !=-1)
          {
            if (changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.length < cursorPosition)
            {
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
            }
            else
            {
              let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(0, cursorPosition);
              let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData.slice(cursorPosition);
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData=`${beforeCursorString}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$" 
              changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${afterCursorString}`;
            }
          }
          else
          {
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$";
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+=`${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag[device_index].tag[tag_index].tagName}`;
            changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[CloudIndex].userDefineedData+="$"
          }     

        }
      }

      rtu_master_tag_show=false;
      showMenu=false;
    }

  }





  function add_new_ul_rule(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_ulRule=[...changed_data_tag_pro_data.config.service_dataTagPro_ulRule,new_ul_rule[index]];
    
    new_ul_rule_modal=false;
    openTagList=false;
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    calculation_tag_show=false;
    accumulated_tag_show=false;

  }


  function new_ul_rule_trigger(index)
  {    
      openTagList=false;
      target_index_for_show_tag=-1;
      tcp_master_tag_show=false;
      rtu_master_tag_show=false;
      tcp_slave_tag_show=false;
      calculation_tag_show=false;
      accumulated_tag_show=false;

      new_ul_rule[index].enable=true;
      new_ul_rule[index].delete=false;
      new_ul_rule[index].samplingCondition=0;
      new_ul_rule[index].periodMS=1000;
      new_ul_rule[index].changePercentage=10;
      new_ul_rule[index].modbusTCPSlaveTag=JSON.parse(JSON.stringify(TCPSlaveTag));
      new_ul_rule[index].modbusTCPMasterTag=JSON.parse(JSON.stringify(TCPMasterTag));
      new_ul_rule[index].modbusRTUMasterTag=JSON.parse(JSON.stringify(RTUMasterTag));
      new_ul_rule[index].calculationTag=JSON.parse(JSON.stringify(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag));
      new_ul_rule[index].accumulatedTag=JSON.parse(JSON.stringify(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag));


      new_ul_rule[index].cloud=[
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

      new_ul_rule_index=index;
      new_ul_rule_modal=true;
  }

  function NewTimeClick_UL(index)
  {
    if (cursorPosition !=-1)
    {
      if (new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData.length < cursorPosition)
      {
        new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData+="$TIME$"
      }
      else
      {
        let beforeCursorString=new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData.slice(0, cursorPosition);
        let afterCursorString=new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData.slice(cursorPosition);
        console.log("b:", beforeCursorString);
        console.log("a:", afterCursorString);
        new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData=`${beforeCursorString}`;
        new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData+="$TIME$"
        new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData+=`${afterCursorString}`;
      }

    }
    else
    {
      new_ul_rule[new_ul_rule_index].cloud[index].userDefineedData+="$TIME$"
    }

    showMenu=false;

  }



  let new_event_tag_modal=false;
  let new_event_tag_index;

  let new_event_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },  
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerModbusTagType: -1,
    triggerModbusTagOwner: "",
    triggerModbusTagOwnerIndex: -1,    
    triggerConditionOperand:0,
    triggerConditionValue:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:"",
    actionModbusTagType: -1,
    actionModbusTagOwner: "",
    actionModbusTagOwnerIndex: -1, 
  }    
  ];


  function NoAddEvent(index)
  {
    new_event_tag_modal=false;
  }

  function RestoreDeleteEventTag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[index].delete=false;
  }

  function DeleteEventTag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[index].delete=true;
  }


  function add_new_event_tag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag,new_event_tag[index]];
    
    new_event_tag_modal=false;
  }



  function handleEvtActionModbusChange(type)
  {
    if (type ==0)
    {
      console.log(new_event_tag[new_event_tag_index].actionModbusTagOwner);
      new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex=Number(new_event_tag[new_event_tag_index].actionModbusTagOwner.substring(3));
      if (new_event_tag[new_event_tag_index].actionModbusTagOwner.startsWith("TS"))
      {
          new_event_tag[new_event_tag_index].actionModbusTagType=2;
      }
      else if (new_event_tag[new_event_tag_index].actionModbusTagOwner.startsWith("TM"))
      {
          new_event_tag[new_event_tag_index].actionModbusTagType=0;   
      }
      else if (new_event_tag[new_event_tag_index].actionModbusTagOwner.startsWith("RM"))
      {
          new_event_tag[new_event_tag_index].actionModbusTagType=1;   
      }

      console.log(new_event_tag[new_event_tag_index].actionModbusTagType);
      console.log(new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex); 
    }
    else if (type ==1)
    {
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner);
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex=Number(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner.substring(3));
      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner.startsWith("TS"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType=2;
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner.startsWith("TM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType=0;   
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner.startsWith("RM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType=1;   
      }

      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType);
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex); 

    }

  }


  function handleEvtTriggerModbusChange(type)
  {
    if (type ==0)
    {
      console.log(new_event_tag[new_event_tag_index].triggerModbusTagOwner);
      new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex=Number(new_event_tag[new_event_tag_index].triggerModbusTagOwner.substring(3));
      if (new_event_tag[new_event_tag_index].triggerModbusTagOwner.startsWith("TS"))
      {
          new_event_tag[new_event_tag_index].triggerModbusTagType=2;
      }
      else if (new_event_tag[new_event_tag_index].triggerModbusTagOwner.startsWith("TM"))
      {
          new_event_tag[new_event_tag_index].triggerModbusTagType=0;   
      }
      else if (new_event_tag[new_event_tag_index].triggerModbusTagOwner.startsWith("RM"))
      {
          new_event_tag[new_event_tag_index].triggerModbusTagType=1;   
      }

      console.log(new_event_tag[new_event_tag_index].triggerModbusTagType);
      console.log(new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex); 
    }
    else if (type ==1)
    {

      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner);
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex=Number(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner.substring(3));
      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner.startsWith("TS"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType=2;
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner.startsWith("TM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType=0;   
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner.startsWith("RM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType=1;   
      }

      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType);
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex); 

    }

  }




  function new_event_tag_trigger(index)
  {
    new_event_tag[index].enable=true;
    new_event_tag[index].delete=false;
    new_event_tag[index].tagName="";
    new_event_tag[index].triggerTag="";
    new_event_tag[index].triggerModbusTagType=-1;
    new_event_tag[index].triggerModbusTagOwner="";
    new_event_tag[index].triggerModbusTagOwnerIndex=-1;

    new_event_tag[index].triggerConditionOperand=0;
    new_event_tag[index].triggerConditionValue=1;
    new_event_tag[index].pollingRateS=1;
    new_event_tag[index].actionOperation=0;
    new_event_tag[index].actionOperationValue=1;
    new_event_tag[index].actionTarget="";
    new_event_tag[index].actionModbusTagType=-1;
    new_event_tag[index].actionModbusTagOwner="";
    new_event_tag[index].actionModbusTagOwnerIndex=-1;

    new_event_tag_index=index;
    new_event_tag_modal=true;

  }


  let new_c2d_tag_modal=false;
  let new_c2d_tag_index;

  let new_c2d_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  }, 
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  }, 
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  }
  ];


  function RestoreDeleteC2Dtag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].delete=false;
  }

  function DeleteC2Dtag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].delete=true;
  }

  function NoAddC2D(index)
  {
    new_c2d_tag_modal=false;
  }


  function handleC2DTargetModbusChange(type)
  {
    if (type ==0)
    {
      console.log(new_c2d_tag[new_c2d_tag_index].modbusTagOwner);
      new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex=Number(new_c2d_tag[new_c2d_tag_index].modbusTagOwner.substring(3));
      if (new_c2d_tag[new_c2d_tag_index].modbusTagOwner.startsWith("TS"))
      {
          new_c2d_tag[new_c2d_tag_index].modbusTagType=2;
      }
      else if (new_c2d_tag[new_c2d_tag_index].modbusTagOwner.startsWith("TM"))
      {
          new_c2d_tag[new_c2d_tag_index].modbusTagType=0;   
      }
      else if (new_c2d_tag[new_c2d_tag_index].modbusTagOwner.startsWith("RM"))
      {
          new_c2d_tag[new_c2d_tag_index].modbusTagType=1;   
      }

      console.log(new_c2d_tag[new_c2d_tag_index].modbusTagType);
      console.log(new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex); 
    }
    else if (type ==1)
    {
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwner);
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex=Number(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwner.substring(3));

      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwner.startsWith("TS"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagType=2;
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwner.startsWith("TM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagType=0;   
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwner.startsWith("RM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagType=1;   
      }

      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagType);
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex); 

    }

  }

  function new_c2d_tag_trigger(index)
  {
    new_c2d_tag[index].enable=true;
    new_c2d_tag[index].delete=false;
    new_c2d_tag[index].tagName="";
    new_c2d_tag[index].cloudProfile="";
    new_c2d_tag[index].subscribeTopic="";
    new_c2d_tag[index].targetTag="";
    new_c2d_tag[index].modbusTagType=-1;
    new_c2d_tag[index].modbusTagOwner="";
    new_c2d_tag[index].modbusTagOwnerIndex=-1;
    new_c2d_tag[index].publishEnable=false;
    new_c2d_tag[index].publishTopic="";    
    new_c2d_tag_index=index;
    new_c2d_tag_modal=true;

  }

  let modify_c2d_tag_modal=false;
  let modify_c2d_tag_index;

  let BackupC2DTag=
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    subscribeTopic:"",
    targetTag:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,    
    publishEnable:false,
    publishTopic:""
  };



  function TriggerModifyC2DTag(index)
  {
    BackupC2DTag.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].enable;
    BackupC2DTag.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].delete;
    BackupC2DTag.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].tagName;
    BackupC2DTag.cloudProfile=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].cloudProfile;
    BackupC2DTag.subscribeTopic=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].subscribeTopic;
    BackupC2DTag.targetTag=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].targetTag;


    BackupC2DTag.modbusTagType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].modbusTagType;

    BackupC2DTag.modbusTagOwner=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].modbusTagOwner;


    BackupC2DTag.modbusTagOwnerIndex=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].modbusTagOwnerIndex;

    BackupC2DTag.publishEnable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].publishEnable;
    BackupC2DTag.publishTopic=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].publishTopic;
    modify_c2d_tag_index=index;
    modify_c2d_tag_modal=true;
  }

  function no_modify_c2d_tag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].enable=BackupC2DTag.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].delete=BackupC2DTag.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].tagName=BackupC2DTag.tagName;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].cloudProfile=BackupC2DTag.cloudProfile;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].subscribeTopic=BackupC2DTag.subscribeTopic;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].targetTag=BackupC2DTag.targetTag;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].modbusTagType=BackupC2DTag.modbusTagType;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].modbusTagOwner=BackupC2DTag.modbusTagOwner;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].modbusTagOwnerIndex=BackupC2DTag.modbusTagOwnerIndex;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].publishEnable=BackupC2DTag.publishEnable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[index].publishTopic=BackupC2DTag.publishTopic;

    modify_c2d_tag_modal=false;
  }

  function modify_c2d_tag(index)
  {
    modify_c2d_tag_modal=false;
  }


  function add_new_c2d_tag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag,new_c2d_tag[index]];
    new_c2d_tag_modal=false; 
  }





  let scadaMappingResult = "";


$: parsed = parseDbSlaves(scadaMappingResult);

  async function GetScadaAdrress()
  {

    const res = await fetch(window.location.origin+"/GeTScaDaAddREss", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      scadaMappingResult =await res.text();
      console.log(scadaMappingResult);

    }


  }


    


  let new_scada_tag_modal=false;
  let new_scada_tag_index;

  let new_scada_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    modbusTCPSlaveCoilTag:[],
    modbusTCPSlaveDiscreteInputTag:[],
    modbusTCPSlaveHoldingRegisterTag:[],
    modbusTCPSlaveInputRegisterTag:[],
    modbusTCPMasterCoilTag:[],
    modbusTCPMasterDiscreteInputTag:[],
    modbusTCPMasterHoldingRegisterTag:[],
    modbusTCPMasterInputRegisterTag:[], 
    modbusRTUMasterCoilTag:[],
    modbusRTUMasterDiscreteInputTag:[],
    modbusRTUMasterHoldingRegisterTag:[],
    modbusRTUMasterInputRegisterTag:[], 
    pointType:-1,
    address:-1
  }                

  ];


  function NoAddScada(index)
  {
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    new_scada_tag_modal=false;
  }

  function RestoreDeleteScadaTag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[index].delete=false;
  }

  function DeleteScadaTag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[index].delete=true;
  }


  function add_new_scada_tag(index)
  {

    if (new_scada_tag[index].slavePort == saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].listenPort)
    {
      validSlavePort=false;
    }
    else
    {
      validSlavePort=true;
    }

    if (validSlavePort)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag,new_scada_tag[index]];
      openTagList=false;
      target_index_for_show_tag=-1;
      tcp_master_tag_show=false;
      rtu_master_tag_show=false;
      tcp_slave_tag_show=false;
      new_scada_tag_modal=false;
    }
  }

    function NewPointTypeChange(index, logical_address)
    {

        new_scada_tag[index].address=logical_address; 
    }




  function new_scada_tag_trigger(index)
  {
    new_scada_tag[index].enable=true;
    new_scada_tag[index].delete=false;
    new_scada_tag[index].tagName="";
    new_scada_tag[index].slavePort=503;
    new_scada_tag[index].pointType=3;
    new_scada_tag[index].address=40001;
    new_scada_tag[index].modbusTCPSlaveCoilTag=JSON.parse(JSON.stringify(TCPSlaveCoilTag));


    new_scada_tag[index].modbusTCPSlaveCoilTag = new_scada_tag[index].modbusTCPSlaveCoilTag.map(slave => ({
      ...slave,
      tag: (slave.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));




    new_scada_tag[index].modbusTCPSlaveDiscreteInputTag=JSON.parse(JSON.stringify(TCPSlaveDiscreteInputTag)); 


    new_scada_tag[index].modbusTCPSlaveDiscreteInputTag = new_scada_tag[index].modbusTCPSlaveDiscreteInputTag.map(slave => ({
      ...slave,
      tag: (slave.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));

    new_scada_tag[index].modbusTCPSlaveHoldingRegisterTag=JSON.parse(JSON.stringify(TCPSlaveHoldingRegisterTag)); 
  
    new_scada_tag[index].modbusTCPSlaveHoldingRegisterTag = new_scada_tag[index].modbusTCPSlaveHoldingRegisterTag.map(slave => ({
    ...slave,
    tag: (slave.tag || []).map(t => ({
      ...t,
      enable: false
      }))
    }));

    new_scada_tag[index].modbusTCPSlaveInputRegisterTag=JSON.parse(JSON.stringify(TCPSlaveInputRegisterTag)); 

    new_scada_tag[index].modbusTCPSlaveInputRegisterTag = new_scada_tag[index].modbusTCPSlaveInputRegisterTag.map(slave => ({
    ...slave,
    tag: (slave.tag || []).map(t => ({
      ...t,
      enable: false
      }))
    }));



    new_scada_tag[index].modbusTCPMasterCoilTag=JSON.parse(JSON.stringify(TCPMasterCoilTag));
    new_scada_tag[index].modbusTCPMasterCoilTag = new_scada_tag[index].modbusTCPMasterCoilTag.map(master => ({
    ...master,
    tag: (master.tag || []).map(t => ({
      ...t,
      enable: false
      }))
    }));


    new_scada_tag[index].modbusTCPMasterDiscreteInputTag=JSON.parse(JSON.stringify(TCPMasterDiscreteInputTag)); 

    new_scada_tag[index].modbusTCPMasterDiscreteInputTag = new_scada_tag[index].modbusTCPMasterDiscreteInputTag.map(master => ({
    ...master,
    tag: (master.tag || []).map(t => ({
      ...t,
      enable: false
      }))
    }));

    new_scada_tag[index].modbusTCPMasterHoldingRegisterTag=JSON.parse(JSON.stringify(TCPMasterHoldingRegisterTag)); 

    new_scada_tag[index].modbusTCPMasterHoldingRegisterTag = new_scada_tag[index].modbusTCPMasterHoldingRegisterTag.map(master => ({
      ...master,
      tag: (master.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));


    new_scada_tag[index].modbusTCPMasterInputRegisterTag=JSON.parse(JSON.stringify(TCPMasterInputRegisterTag)); 

    new_scada_tag[index].modbusTCPMasterInputRegisterTag = new_scada_tag[index].modbusTCPMasterInputRegisterTag.map(master => ({
      ...master,
      tag: (master.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));

    new_scada_tag[index].modbusRTUMasterCoilTag=JSON.parse(JSON.stringify(RTUMasterCoilTag));

    new_scada_tag[index].modbusRTUMasterCoilTag = new_scada_tag[index].modbusRTUMasterCoilTag.map(master => ({
      ...master,
      tag: (master.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));

    new_scada_tag[index].modbusRTUMasterDiscreteInputTag=JSON.parse(JSON.stringify(RTUMasterDiscreteInputTag)); 
    new_scada_tag[index].modbusRTUMasterDiscreteInputTag = new_scada_tag[index].modbusRTUMasterDiscreteInputTag.map(master => ({
      ...master,
      tag: (master.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));

    new_scada_tag[index].modbusRTUMasterHoldingRegisterTag=JSON.parse(JSON.stringify(RTUMasterHoldingRegisterTag)); 
    new_scada_tag[index].modbusRTUMasterHoldingRegisterTag = new_scada_tag[index].modbusRTUMasterHoldingRegisterTag.map(master => ({
      ...master,
      tag: (master.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));


    new_scada_tag[index].modbusRTUMasterInputRegisterTag=JSON.parse(JSON.stringify(RTUMasterInputRegisterTag)); 

    new_scada_tag[index].modbusRTUMasterInputRegisterTag = new_scada_tag[index].modbusRTUMasterInputRegisterTag.map(master => ({
      ...master,
      tag: (master.tag || []).map(t => ({
        ...t,
        enable: false
      }))
    }));



    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    openTagList=false;
    new_scada_tag_index=index;
    new_scada_tag_modal=true;


  }


  let new_DM_tag_modal=false;
  let new_DM_tag_index;

  let new_DM_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    modbusTagType:-1,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,   
    targetTag:""
  }    
  ];


  function NoAddDM(index)
  {
    new_DM_tag_modal=false;
  }

  function RestoreDeleteDMtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[index].delete=false;
  }

  function DeleteDMtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[index].delete=true;
  }


  function add_new_DM_tag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag,new_DM_tag[index]];

    new_DM_tag_modal=false;
  }


  function new_DM_tag_trigger(index)
  {
    new_DM_tag[index].enable=true;
    new_DM_tag[index].delete=false;
    new_DM_tag[index].tagName="";
    new_DM_tag[index].targetTag="";
    new_DM_tag[index].modbusTagType=-1;
    new_DM_tag[index].modbusTagOwner="";
    new_DM_tag[index].modbusTagOwnerIndex=-1;

    new_DM_tag[index].cloudProfile="";
    new_DM_tag_index=index;
    new_DM_tag_modal=true;

  }


  function handleDMTargetModbusChange(type)
  {
    if (type ==0)
    {
      console.log(new_DM_tag[new_DM_tag_index].modbusTagOwner);
      new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex=Number(new_DM_tag[new_DM_tag_index].modbusTagOwner.substring(3));
      if (new_DM_tag[new_DM_tag_index].modbusTagOwner.startsWith("TS"))
      {
          new_DM_tag[new_DM_tag_index].modbusTagType=2;
      }
      else if (new_DM_tag[new_DM_tag_index].modbusTagOwner.startsWith("TM"))
      {
          new_DM_tag[new_DM_tag_index].modbusTagType=0;   
      }
      else if (new_DM_tag[new_DM_tag_index].modbusTagOwner.startsWith("RM"))
      {
          new_DM_tag[new_DM_tag_index].modbusTagType=1;   
      }

      console.log(new_DM_tag[new_DM_tag_index].modbusTagType);
      console.log(new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex); 
    }
    else if (type ==1)
    {
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner);
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex=Number(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner.substring(3));

      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner.startsWith("TS"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType=2;
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner.startsWith("TM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType=0;   
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner.startsWith("RM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType=1;   
      }

      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType);
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex); 

    }  
  }


    let minute = '*';
    let hour = '*';
    let dayOfMonth = '*';
    let month = '*';
    let dayOfWeek = '*';
    let minute2 = '*';
    let hour2 = '*';
    let dayOfMonth2 = '*';
    let month2 = '*';
    let dayOfWeek2 = '*';



    const presets = {
    everyMinute: '* * * * *',
    hourly: '0 * * * *',
    daily: '0 0 * * *',
    weekly: '0 0 * * 7',
    monthly: '0 0 1 * *',
    yearly: '0 0 1 1 *'
    };


    let cron = '* * * * *';



    let errors = {
        minute: false,
        hour: false,
        dayOfMonth: false,
        dayOfWeek: false,
        month: false,
        minute2: false,
        hour2: false,
        dayOfMonth2: false,
        dayOfWeek2: false,
        month2: false
    };



  let new_accumulated_tag_modal=false;
  let new_accumulated_tag_index;

  let new_accumulated_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    modbusTagType:0,
    modbusTagOwner:"",
    modbusTagOwnerIndex:-1,  
    preset:"",  
    startCronString:"",
    stopCronString:""
  }
  ];



  function handleACTargetModbusChange(type)
  {
    if (type ==0)
    {
      console.log(new_accumulated_tag[new_accumulated_tag_index].modbusTagOwner);
      new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex=Number(new_accumulated_tag[new_accumulated_tag_index].modbusTagOwner.substring(3));
      if (new_accumulated_tag[new_accumulated_tag_index].modbusTagOwner.startsWith("TS"))
      {
          new_accumulated_tag[new_accumulated_tag_index].modbusTagType=2;
      }
      else if (new_accumulated_tag[new_accumulated_tag_index].modbusTagOwner.startsWith("TM"))
      {
          new_accumulated_tag[new_accumulated_tag_index].modbusTagType=0;   
      }
      else if (new_accumulated_tag[new_accumulated_tag_index].modbusTagOwner.startsWith("RM"))
      {
          new_accumulated_tag[new_accumulated_tag_index].modbusTagType=1;   
      }

      console.log(new_accumulated_tag[new_accumulated_tag_index].modbusTagType);
      console.log(new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex); 
    }
    else if (type ==1)
    {
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner);
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex=Number(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner.substring(3));

      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner.startsWith("TS"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagType=2;
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner.startsWith("TM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagType=0;   
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner.startsWith("RM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagType=1;   
      }

      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagType);
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex); 

    }

  }

  function new_accumulated_tag_trigger(index)
  {
    new_accumulated_tag[index].enable=true;
    new_accumulated_tag[index].delete=false;
    new_accumulated_tag[index].tagName="";
    new_accumulated_tag[index].targetTag="";
    new_accumulated_tag[index].modbusTagType=-1;
    new_accumulated_tag[index].modbusTagOwner="";
    new_accumulated_tag[index].modbusTagOwnerIndex=-1;

    new_accumulated_tag[index].startCronString="0 0 * * *";
    new_accumulated_tag[index].stopCronString="0 2 * * *";  
    new_accumulated_tag[index].preset='daily';

    errors.minute=false;
    errors.hour=false;
    errors.dayOfMonth=false;
    errors.dayOfWeek=false;
    errors.month=false; 

    errors.minute2=false;
    errors.hour2=false;
    errors.dayOfMonth2=false;
    errors.dayOfWeek2=false;
    errors.month2=false; 

    [minute, hour, dayOfMonth, month, dayOfWeek] = new_accumulated_tag[index].startCronString.split(' ');
    [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = new_accumulated_tag[index].stopCronString.split(' ');

    new_accumulated_tag_index=index;
    new_accumulated_tag_modal=true;


  }


  function NoAddAccumulated(index)
  {
    new_accumulated_tag_modal=false;
  }


  function add_new_accumulated_tag(index)
  {


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag,new_accumulated_tag[index]];

    new_accumulated_tag_modal=false;
  }


  function RestoreDeleteAtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].delete=false;
  }

  function DeleteAtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].delete=true;
  }





  let modify_schedule_tag_modal=false;
  let modify_schedule_tag_index;
  let BackupScheduleTag=
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  }

  function RestoreDeleteScheduleTag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[index].delete=false;
  }

  function DeleteScheduleTag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[index].delete=true;
  }



  function TriggerModifyScheduleTag(index)
  {
    modify_schedule_tag_index=index;
    BackupScheduleTag.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].enable;
    BackupScheduleTag.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].delete;
    BackupScheduleTag.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].tagName;

    BackupScheduleTag.cronString=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].cronString;

    BackupScheduleTag.preset=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset;

    [minute, hour, dayOfMonth, month, dayOfWeek] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].cronString.split(' ');

    errors.minute=false;
    errors.hour=false;
    errors.dayOfMonth=false;
    errors.dayOfWeek=false;
    errors.month=false;



    BackupScheduleTag.actionType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType;

    BackupScheduleTag.actionTargetTag=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTag;

    BackupScheduleTag.actionTargetTagValue=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTagValue;


    BackupScheduleTag.modbusTagType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType;

    BackupScheduleTag.modbusTagOwner=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner;

    BackupScheduleTag.modbusTagOwnerIndex=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex;

    BackupScheduleTag.actionTimeSyncFormatType=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTimeSyncFormatType;


    BackupScheduleTag.actionTimeSyncFormatUserDefine=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTimeSyncFormatUserDefine;



    modify_schedule_tag_modal=true;
  }


  function NoModifyScheduleTag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].enable=BackupScheduleTag.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].delete=BackupScheduleTag.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].tagName=BackupScheduleTag.tagName;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].cronString=BackupScheduleTag.cronString;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset=BackupScheduleTag.preset;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType=BackupScheduleTag.actionType;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTag= BackupScheduleTag.actionTargetTag;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType= BackupScheduleTag.modbusTagType;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner= BackupScheduleTag.modbusTagOwner;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex= BackupScheduleTag.modbusTagOwnerIndex;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTagValue=BackupScheduleTag.actionTargetTagValue;

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTimeSyncFormatType=BackupScheduleTag.actionTimeSyncFormatType;


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTimeSyncFormatUserDefine=BackupScheduleTag.actionTimeSyncFormatUserDefine;

    modify_schedule_tag_modal=false;
  }

  function ModifyScheduleTag()
  {


    modify_schedule_tag_modal=false;
  }


  let new_schedule_tag_modal=false;
  let new_schedule_tag_index;



    function updateCron() 
    {

        if (new_schedule_tag_modal)
        {
          new_schedule_tag[new_schedule_tag_index].cronString = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
        }
        else if (modify_schedule_tag_modal)
        {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].cronString = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
        }
    }





    function applyPreset(p) 
    {
        errors.minute=false;
        errors.hour=false;
        errors.dayOfMonth=false;
        errors.dayOfWeek=false;
        errors.month=false; 
        if (new_schedule_tag_modal)
        {      
          new_schedule_tag[new_schedule_tag_index].preset=p;

          new_schedule_tag[new_schedule_tag_index].cronString = presets[p];
          [minute, hour, dayOfMonth, month, dayOfWeek] = new_schedule_tag[new_schedule_tag_index].cronString.split(' ');
        }
        else if (modify_schedule_tag_modal)
        {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset=p;

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].cronString = presets[p];
          [minute, hour, dayOfMonth, month, dayOfWeek] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].cronString.split(' ');       
        }
        else if (new_calculation_tag_modal)
        {
          errors.minute2=false;
          errors.hour2=false;
          errors.dayOfMonth2=false;
          errors.dayOfWeek2=false;
          errors.month2=false; 

          new_calculation_tag[new_calculation_tag_index].preset=p;

          new_calculation_tag[new_calculation_tag_index].startCronString = presets[p];
          new_calculation_tag[new_calculation_tag_index].stopCronString = presets[p];
          [minute, hour, dayOfMonth, month, dayOfWeek] = new_calculation_tag[new_calculation_tag_index].startCronString.split(' ');

          [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = new_calculation_tag[new_calculation_tag_index].stopCronString.split(' ');

        }
        else if (modify_calculation_tag_modal)
        {
          errors.minute2=false;
          errors.hour2=false;
          errors.dayOfMonth2=false;
          errors.dayOfWeek2=false;
          errors.month2=false; 

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset=p;

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].startCronString = presets[p];
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].stopCronString = presets[p];
          [minute, hour, dayOfMonth, month, dayOfWeek] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].startCronString.split(' ');

          [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].stopCronString.split(' ');

        }
        else if (new_accumulated_tag_modal)
        {
          errors.minute2=false;
          errors.hour2=false;
          errors.dayOfMonth2=false;
          errors.dayOfWeek2=false;
          errors.month2=false; 

          new_accumulated_tag[new_accumulated_tag_index].preset=p;

          new_accumulated_tag[new_accumulated_tag_index].startCronString = presets[p];
          new_accumulated_tag[new_accumulated_tag_index].stopCronString = presets[p];
          [minute, hour, dayOfMonth, month, dayOfWeek] = new_accumulated_tag[new_accumulated_tag_index].startCronString.split(' ');

          [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = new_accumulated_tag[new_accumulated_tag_index].stopCronString.split(' ');
        }
        else if (modify_accumulated_tag_modal)
        {
          errors.minute2=false;
          errors.hour2=false;
          errors.dayOfMonth2=false;
          errors.dayOfWeek2=false;
          errors.month2=false; 

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset=p;

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].startCronString = presets[p];
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].stopCronString = presets[p];
          [minute, hour, dayOfMonth, month, dayOfWeek] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].startCronString.split(' ');

          [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].stopCronString.split(' ');
        }
    }




    function isValidCronField(value, min, max) 
    {
        if (value === '*') return true;


        const parts = value.split(',');

        return parts.every(part => {
          // step
          if (part.includes('/')) {
            const [base, step] = part.split('/');
            if (!step || isNaN(step)) return false;
            return base === '*' || isValidCronField(base, min, max);
          }

          // range
          if (part.includes('-')) {
            const [from, to] = part.split('-').map(Number);
            return (
              !isNaN(from) &&
              !isNaN(to) &&
              from >= min &&
              to <= max &&
              from <= to
            );
          }

           //single number
          const num = Number(part);
          return !isNaN(num) && num >= min && num <= max;
        });
    }

    const validators = {
        minute: v => isValidCronField(v, 0, 59),
        hour: v => isValidCronField(v, 0, 23),
        dayOfMonth: v => isValidCronField(v, 1, 31),
        month: v => isValidCronField(v, 1, 12),
        dayOfWeek: v => isValidCronField(v, 1, 7)
    };


  let new_schedule_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cronString:"",
    preset:"",
    startTime:"",
    actionType:0,
    actionTargetTag:"",
    modbusTagType: -1,
    modbusTagOwner: "",
    modbusTagOwnerIndex: -1,    
    actionTargetTagValue:"",
    actionTimeSyncFormatType:0,
    actionTimeSyncFormatUserDefine:""
  }              
  ];


  function handleScheTargetModbusChange(type)
  {
    if (type ==0)
    {
      console.log(new_schedule_tag[new_schedule_tag_index].modbusTagOwner);
      new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex=Number(new_schedule_tag[new_schedule_tag_index].modbusTagOwner.substring(3));
      if (new_schedule_tag[new_schedule_tag_index].modbusTagOwner.startsWith("TS"))
      {
          new_schedule_tag[new_schedule_tag_index].modbusTagType=2;
      }
      else if (new_schedule_tag[new_schedule_tag_index].modbusTagOwner.startsWith("TM"))
      {
          new_schedule_tag[new_schedule_tag_index].modbusTagType=0;   
      }
      else if (new_schedule_tag[new_schedule_tag_index].modbusTagOwner.startsWith("RM"))
      {
          new_schedule_tag[new_schedule_tag_index].modbusTagType=1;   
      }

      console.log(new_schedule_tag[new_schedule_tag_index].modbusTagType);
      console.log(new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex); 
    }
    else if (type ==1)
    {
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner);
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex=Number(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner.substring(3));

      if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner.startsWith("TS"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType=2;
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner.startsWith("TM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType=0;   
      }
      else if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner.startsWith("RM"))
      {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType=1;   
      }

      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType);
      console.log(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex); 

    }

  }


  function new_schedule_tag_trigger(index)
  {
    new_schedule_tag[index].enable=true;
    new_schedule_tag[index].delete=false;
    new_schedule_tag[index].tagName="";
    new_schedule_tag[index].cronString="0 0 * * *";
    new_schedule_tag[index].preset="daily";  
    new_schedule_tag[index].actionType=0;
    new_schedule_tag[index].actionTargetTag="DO";
    new_schedule_tag[index].modbusTagType=2;
    new_schedule_tag[index].modbusTagOwner="TS_0";
    new_schedule_tag[index].modbusTagOwnerIndex=0;
    new_schedule_tag[index].actionTargetTagValue=1
    new_schedule_tag[index].actionTimeSyncFormatType=0;
    new_schedule_tag[index].actionTimeSyncFormatUserDefine="";



    errors.minute=false;
    errors.hour=false;
    errors.dayOfMonth=false;
    errors.dayOfWeek=false;
    errors.month=false; 


    [minute, hour, dayOfMonth, month, dayOfWeek] = new_schedule_tag[index].cronString.split(' ');


    new_schedule_tag_index=index;
    new_schedule_tag_modal=true;

  }

  function NoAddSchedule(index)
  {
     new_schedule_tag_modal=false;
  }


  function AddScheduleTag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag=[...
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag,new_schedule_tag[index]];
    new_schedule_tag_modal=false;

  }


    function updateCronDuration(type) 
    {
        if (new_calculation_tag_modal)
        {
          if (type ==1)
          {
            new_calculation_tag[new_calculation_tag_index].startCronString = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
          }
          else if (type==2)
          {
            new_calculation_tag[new_calculation_tag_index].stopCronString = `${minute2} ${hour2} ${dayOfMonth2} ${month2} ${dayOfWeek2}`;
          }

        }
        else if (modify_calculation_tag_modal)
        {
          if (type ==1)
          {
            changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].startCronString = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
          }
          else if (type ==2)
          {
            changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].stopCronString = `${minute2} ${hour2} ${dayOfMonth2} ${month2} ${dayOfWeek2}`;
          }
        }
        else if (new_accumulated_tag_modal)
        {
          if (type ==1)
          {
            new_accumulated_tag[new_accumulated_tag_index].startCronString = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
          }
          else if (type==2)
          {
            new_accumulated_tag[new_accumulated_tag_index].stopCronString = `${minute2} ${hour2} ${dayOfMonth2} ${month2} ${dayOfWeek2}`;
          }
        }
        else if (modify_accumulated_tag_modal)
        {
          if (type ==1)
          {
            changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].startCronString = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
          }
          else if (type ==2)
          {
            changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].stopCronString = `${minute2} ${hour2} ${dayOfMonth2} ${month2} ${dayOfWeek2}`;
          }

        }
    }


  let new_calculation_tag_modal=false;
  let new_calculation_tag_index;

  let new_calculation_tag=[
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    preset:"",
    schedulerEnable:false,
    startCronString:"",
    stopCronString:"",
    calculationFormula:""
  }

  ];


  function new_calculation_tag_trigger(index)
  {
    new_calculation_tag[index].enable=true;
    new_calculation_tag[index].delete=false;
    new_calculation_tag[index].tagName="";   
    new_calculation_tag[index].calculationFormula="return "
    new_calculation_tag[index].preset='daily';
    new_calculation_tag[index].startCronString="0 0 * * *";
    new_calculation_tag[index].stopCronString="0 2 * * *";  

    errors.minute=false;
    errors.hour=false;
    errors.dayOfMonth=false;
    errors.dayOfWeek=false;
    errors.month=false; 
    errors.minute2=false;
    errors.hour2=false;
    errors.dayOfMonth2=false;
    errors.dayOfWeek2=false;
    errors.month2=false; 


    [minute, hour, dayOfMonth, month, dayOfWeek] = new_calculation_tag[index].startCronString.split(' ');
    [minute2, hour2, dayOfMonth2, month2, dayOfWeek2] = new_calculation_tag[index].stopCronString.split(' ');

    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    showMenu=false;
    new_calculation_tag_index=index;
    new_calculation_tag_modal=true;    
  }


  function modify_calculation_tag_formula(index, type)
  {
    if (type ==4)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Max()";
    }
    else if (type ==5)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Min()";    
    }  
    else if (type ==6)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Avg()";    
    }  
    else if (type ==7)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Abs()";    
    }
    else if (type ==8)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Add()";    
    }
    else if (type ==9)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Sub()";    
    }          
    else if (type ==10)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Mul()";    
    }
    else if (type ==11)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Div()";    
    } 
    else if (type ==12)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].calculationFormula+="Reminder()";    
    }
  }


  function new_calculation_tag_formula(index, type)
  {
    if (type ==0)
    {
      new_calculation_tag[index].calculationFormula+=new_calculation_tag[index].referenceParameter[0].tagName;
    }
    else if (type ==1)
    {
      new_calculation_tag[index].calculationFormula+=new_calculation_tag[index].referenceParameter[1].tagName;    
    }
    else if (type ==2)
    {
      new_calculation_tag[index].calculationFormula+=new_calculation_tag[index].referenceParameter[2].tagName;
    }
    else if (type ==3)
    {
      new_calculation_tag[index].calculationFormula+=new_calculation_tag[index].referenceParameter[3].tagName;    
    }
    else if (type ==4)
    {
      new_calculation_tag[index].calculationFormula+="Max()";
    }
    else if (type ==5)
    {
      new_calculation_tag[index].calculationFormula+="Min()";    
    }  
    else if (type ==6)
    {
      new_calculation_tag[index].calculationFormula+="Avg()";    
    }  
    else if (type ==7)
    {
      new_calculation_tag[index].calculationFormula+="Abs()";    
    }
    else if (type ==8)
    {
      new_calculation_tag[index].calculationFormula+="Add()";    
    }
    else if (type ==9)
    {
      new_calculation_tag[index].calculationFormula+="Sub()";    
    }          
    else if (type ==10)
    {
      new_calculation_tag[index].calculationFormula+="Mul()";    
    }
    else if (type ==11)
    {
      new_calculation_tag[index].calculationFormula+="Div()";    
    } 
    else if (type ==12)
    {
      new_calculation_tag[index].calculationFormula+="Reminder()";    
    }
  }


  function NoAddCalculation(index)
  {
    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;
    new_calculation_tag_modal=false;
  }

  function add_new_calculation_tag(index)
  {


    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag,new_calculation_tag[index]];
    new_calculation_tag_modal=false;

    target_index_for_show_tag=-1;
    tcp_master_tag_show=false;
    rtu_master_tag_show=false;
    tcp_slave_tag_show=false;

  }

  function RestoreDeleteCtag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].delete=false;
  }

  function DeleteCtag(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[index].delete=true;
  }




  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) 
    {
      selectedFile = file;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const fileBinary= new Uint8Array(event.target.result);
          fileContent=new Uint8Array(fileBinary.length+sessionBinary.length);
          fileContent.set(sessionBinary,0);
          fileContent.set(fileBinary, sessionBinary.length);
      };

      reader.readAsArrayBuffer(file);

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


  async function getDataTagPro () {
    const res = await fetch(window.location.origin+"/getDATatagPRo", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      console.log("get data tag pro")
      data_tag_pro_data=await res.json();
      datatagproConfig.set(data_tag_pro_data);
      console.log(data_tag_pro_data);

      changed_data_tag_pro_data= JSON.parse(JSON.stringify(data_tag_pro_data));
      saved_changed_data_tag_pro_data= JSON.parse(JSON.stringify(data_tag_pro_data));
      ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
      getDataReady=1;

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

      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }
      else
      {
        let tcp_slave_tag=[];
        let tcp_slave_coil_tag=[];
        let tcp_slave_discrete_input_tag=[];
        let tcp_slave_holding_register_tag=[];
        let tcp_slave_input_register_tag=[];

        for (let i=0; i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag.length; i++)
        {
          let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
          tcp_slave_tag=[...tcp_slave_tag, item];

          if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==0)
          {
            let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_coil_tag=[...tcp_slave_coil_tag, coil_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==1)
          {
            let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_discrete_input_tag=[...tcp_slave_discrete_input_tag, discrete_input_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==3)
          {
            let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_holding_register_tag=[...tcp_slave_holding_register_tag, holding_register_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==2)
          {
            let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};

            tcp_slave_input_register_tag=[...tcp_slave_input_register_tag, input_register_item];
          }          

        }
        


        if (tcp_slave_tag.length !=0)
        {
          let tcp_slave={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_tag};
          TCPSlaveTag=[...TCPSlaveTag,tcp_slave];
          console.log("TCPSlaveTag:",TCPSlaveTag);
        }

        if (tcp_slave_coil_tag.length !=0)
        {
          let tcp_slave_coil={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_coil_tag};
          TCPSlaveCoilTag=[...TCPSlaveCoilTag, tcp_slave_coil];
        }

        if (tcp_slave_discrete_input_tag.length !=0)
        {
          let tcp_slave_discrete_input={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_discrete_input_tag};
          TCPSlaveDiscreteInputTag=[...TCPSlaveDiscreteInputTag, tcp_slave_discrete_input];
        }

        if (tcp_slave_holding_register_tag.length !=0)
        {
          let tcp_slave_holding_register={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_holding_register_tag};
          TCPSlaveHoldingRegisterTag=[...TCPSlaveHoldingRegisterTag, tcp_slave_holding_register];
        }

        if (tcp_slave_input_register_tag.length !=0)
        {
          let tcp_slave_input_register={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_input_register_tag};
          TCPSlaveInputRegisterTag=[...TCPSlaveInputRegisterTag, tcp_slave_input_register];
        }


        for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;i++)
        {
          let tcp_master_tag=[];
          let tcp_master_coil_tag=[];
          let tcp_master_discrete_input_tag=[];
          let tcp_master_holding_register_tag=[];
          let tcp_master_input_register_tag=[];          

          for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag.length;j++)
          {
            let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};

            tcp_master_tag=[...tcp_master_tag, item];

            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==0)
            {
              let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_coil_tag=[...tcp_master_coil_tag, coil_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==1)
            {
              let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_discrete_input_tag=[...tcp_master_discrete_input_tag, discrete_input_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==3)
            {
              let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_holding_register_tag=[...tcp_master_holding_register_tag, holding_register_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==2)
            {
              let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};

              tcp_master_input_register_tag=[...tcp_master_input_register_tag, input_register_item];
            }    

          }

          if (tcp_master_tag.length !=0)
          {
            let tcp_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_tag};
            TCPMasterTag=[...TCPMasterTag, tcp_master];

          }

          if (tcp_master_coil_tag.length !=0)
          {          
            let tcp_master_coil={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_coil_tag};
            TCPMasterCoilTag=[...TCPMasterCoilTag, tcp_master_coil];
          }

          if (tcp_master_discrete_input_tag.length !=0)
          {
            let tcp_master_discrete_input={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_discrete_input_tag};
            TCPMasterDiscreteInputTag=[...TCPMasterDiscreteInputTag, tcp_master_discrete_input];
          }


          if (tcp_master_holding_register_tag.length !=0)
          {
            let tcp_master_holding_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_holding_register_tag};
            TCPMasterHoldingRegisterTag=[...TCPMasterHoldingRegisterTag, tcp_master_holding_register];
          }

          if (tcp_master_input_register_tag.length !=0)
          {
            let tcp_master_input_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_input_register_tag};
            TCPMasterInputRegisterTag=[...TCPMasterInputRegisterTag, tcp_master_input_register];
          }

        }

        console.log("TCPMasterTag:", TCPMasterTag);

        for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;i++)
        {
          let rtu_master_tag=[];
          let rtu_master_coil_tag=[];
          let rtu_master_discrete_input_tag=[];
          let rtu_master_holding_register_tag=[];
          let rtu_master_input_register_tag=[];     


          for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag.length;j++)
          {
            let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};

            rtu_master_tag=[...rtu_master_tag, item];

            if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==0)
            {
              let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_coil_tag=[...rtu_master_coil_tag, coil_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==1)
            {
              let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_discrete_input_tag=[...rtu_master_discrete_input_tag, discrete_input_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==3)
            {
              let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_holding_register_tag=[...rtu_master_holding_register_tag, holding_register_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==2)
            {
              let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};

              rtu_master_input_register_tag=[...rtu_master_input_register_tag, input_register_item];
            } 


          }

          if (rtu_master_tag.length !=0)
          {
            let rtu_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_tag};

            RTUMasterTag=[...RTUMasterTag, rtu_master];
          }

          if (rtu_master_coil_tag.length !=0)
          {
            let rtu_master_coil={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_coil_tag};
            RTUMasterCoilTag=[...RTUMasterCoilTag, rtu_master_coil];
          }

          if (rtu_master_discrete_input_tag.length !=0)
          {
            let rtu_master_discrete_input={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_discrete_input_tag};
            RTUMasterDiscreteInputTag=[...RTUMasterDiscreteInputTag, rtu_master_discrete_input];
          }

          if (rtu_master_holding_register_tag.length !=0)
          {
            let rtu_master_holding_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_holding_register_tag};
            RTUMasterHoldingRegisterTag=[...RTUMasterHoldingRegisterTag, rtu_master_holding_register];
          }

          if (rtu_master_input_register_tag.length !=0)
          {
            let rtu_master_input_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_input_register_tag};
            RTUMasterInputRegisterTag=[...RTUMasterInputRegisterTag, rtu_master_input_register];
          }    
        }

        console.log("RTUMasterTag:", RTUMasterTag);
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



  let modalAuthExportTR=false;
  let modalAuthExportULR=false;


  function CancelETRAuth()
  {
    modalAuthExportTR=false;
  }

  function exportTR()
  {
    modalAuthExportTR=true;
  }


  function importTR()
  {

    modalAuthExportTR=true;
  }


  function exportULR()
  {

    modalAuthExportULR=true;
  }


  function importULR()
  {

    modalAuthExportULR=true;
  }


  function CancelEULRAuth()
  {
    modalAuthExportULR=false;
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

        let tcp_slave_tag=[];
        let tcp_slave_coil_tag=[];
        let tcp_slave_discrete_input_tag=[];
        let tcp_slave_holding_register_tag=[];
        let tcp_slave_input_register_tag=[];

        for (let i=0; i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag.length; i++)
        {
          let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
          tcp_slave_tag=[...tcp_slave_tag, item];

          if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==0)
          {
            let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_coil_tag=[...tcp_slave_coil_tag, coil_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==1)
          {
            let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_discrete_input_tag=[...tcp_slave_discrete_input_tag, discrete_input_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==3)
          {
            let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_holding_register_tag=[...tcp_slave_holding_register_tag, holding_register_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==2)
          {
            let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};

            tcp_slave_input_register_tag=[...tcp_slave_input_register_tag, input_register_item];
          }          

        }
        


        if (tcp_slave_tag.length !=0)
        {
          let tcp_slave={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_tag};
          TCPSlaveTag=[...TCPSlaveTag,tcp_slave];

          console.log("TCPSlaveTag:",TCPSlaveTag);
        }

        if (tcp_slave_coil_tag.length !=0)
        {
          let tcp_slave_coil={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_coil_tag};
          TCPSlaveCoilTag=[...TCPSlaveCoilTag, tcp_slave_coil];
        }

        if (tcp_slave_discrete_input_tag.length !=0)
        {
          let tcp_slave_discrete_input={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_discrete_input_tag};
          TCPSlaveDiscreteInputTag=[...TCPSlaveDiscreteInputTag, tcp_slave_discrete_input];
        }

        if (tcp_slave_holding_register_tag.length !=0)
        {
          let tcp_slave_holding_register={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_holding_register_tag};
          TCPSlaveHoldingRegisterTag=[...TCPSlaveHoldingRegisterTag, tcp_slave_holding_register];
        }

        if (tcp_slave_input_register_tag.length !=0)
        {
          let tcp_slave_input_register={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_input_register_tag};
          TCPSlaveInputRegisterTag=[...TCPSlaveInputRegisterTag, tcp_slave_input_register];
        }

        for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;i++)
        {
          let tcp_master_tag=[];
          let tcp_master_coil_tag=[];
          let tcp_master_discrete_input_tag=[];
          let tcp_master_holding_register_tag=[];
          let tcp_master_input_register_tag=[];          

          for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag.length;j++)
          {
            let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};

            tcp_master_tag=[...tcp_master_tag, item];

            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==0)
            {
              let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_coil_tag=[...tcp_master_coil_tag, coil_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==1)
            {
              let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_discrete_input_tag=[...tcp_master_discrete_input_tag, discrete_input_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==3)
            {
              let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_holding_register_tag=[...tcp_master_holding_register_tag, holding_register_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==2)
            {
              let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};

              tcp_master_input_register_tag=[...tcp_master_input_register_tag, input_register_item];
            }    

          }

          if (tcp_master_tag.length !=0)
          {
            let tcp_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_tag};
            TCPMasterTag=[...TCPMasterTag, tcp_master];

          }


          if (tcp_master_coil_tag.length !=0)
          {          
            let tcp_master_coil={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_coil_tag};
            TCPMasterCoilTag=[...TCPMasterCoilTag, tcp_master_coil];
          }

          if (tcp_master_discrete_input_tag.length !=0)
          {
            let tcp_master_discrete_input={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_discrete_input_tag};
            TCPMasterDiscreteInputTag=[...TCPMasterDiscreteInputTag, tcp_master_discrete_input];
          }


          if (tcp_master_holding_register_tag.length !=0)
          {
            let tcp_master_holding_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_holding_register_tag};
            TCPMasterHoldingRegisterTag=[...TCPMasterHoldingRegisterTag, tcp_master_holding_register];
          }

          if (tcp_master_input_register_tag.length !=0)
          {
            let tcp_master_input_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_input_register_tag};
            TCPMasterInputRegisterTag=[...TCPMasterInputRegisterTag, tcp_master_input_register];
          }

        }

        console.log("TCPMasterTag:", TCPMasterTag);

        for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;i++)
        {
          let rtu_master_tag=[];
          let rtu_master_coil_tag=[];
          let rtu_master_discrete_input_tag=[];
          let rtu_master_holding_register_tag=[];
          let rtu_master_input_register_tag=[];     


          for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag.length;j++)
          {
            let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};

            rtu_master_tag=[...rtu_master_tag, item];

            if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==0)
            {
              let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_coil_tag=[...rtu_master_coil_tag, coil_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==1)
            {
              let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_discrete_input_tag=[...rtu_master_discrete_input_tag, discrete_input_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==3)
            {
              let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_holding_register_tag=[...rtu_master_holding_register_tag, holding_register_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==2)
            {
              let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};

              rtu_master_input_register_tag=[...rtu_master_input_register_tag, input_register_item];
            } 


          }

          if (rtu_master_tag.length !=0)
          {
            let rtu_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_tag};

            RTUMasterTag=[...RTUMasterTag, rtu_master];

          }



          if (rtu_master_coil_tag.length !=0)
          {
            let rtu_master_coil={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_coil_tag};
            RTUMasterCoilTag=[...RTUMasterCoilTag, rtu_master_coil];
          }

          if (rtu_master_discrete_input_tag.length !=0)
          {
            let rtu_master_discrete_input={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_discrete_input_tag};
            RTUMasterDiscreteInputTag=[...RTUMasterDiscreteInputTag, rtu_master_discrete_input];
          }

          if (rtu_master_holding_register_tag.length !=0)
          {
            let rtu_master_holding_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_holding_register_tag};
            RTUMasterHoldingRegisterTag=[...RTUMasterHoldingRegisterTag, rtu_master_holding_register];
          }

          if (rtu_master_input_register_tag.length !=0)
          {
            let rtu_master_input_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_input_register_tag};
            RTUMasterInputRegisterTag=[...RTUMasterInputRegisterTag, rtu_master_input_register];
          }
        }

        console.log("RTUMasterTag:", RTUMasterTag);

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


    function showTag(type, index)
    {
      if (type ==0)
      {
        target_index_for_show_tag=index;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        accumulated_tag_show=false;
        calculation_tag_show=false;         
        tcp_slave_tag_show=true;
      }
      else if (type ==1)
      {
        target_index_for_show_tag=index;
        tcp_slave_tag_show=false;
        rtu_master_tag_show=false;
        accumulated_tag_show=false;
        calculation_tag_show=false;         
        tcp_master_tag_show=true;

      }
      else if (type ==2)
      {
        target_index_for_show_tag=index;
        tcp_slave_tag_show=false;
        tcp_master_tag_show=false;
        accumulated_tag_show=false;
        calculation_tag_show=false;        
        rtu_master_tag_show=true;
      }
      else if (type==3)
      {
        target_index_for_show_tag=index;
        tcp_slave_tag_show=false;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        accumulated_tag_show=false;
        calculation_tag_show=true;
      }
      else if (type==4)
      {
        target_index_for_show_tag=index;
        tcp_slave_tag_show=false;
        tcp_master_tag_show=false;
        rtu_master_tag_show=false;
        accumulated_tag_show=true;
        calculation_tag_show=false;
      }

    }



  function AddTagName(triggerSource, Tagtype, device_index, tag_index)
  {
    console.log("add tag to fomula");
    console.log("AddTagName==", triggerSource, Tagtype, device_index, tag_index);

    if (triggerSource == 0)
    {//new
      console.log("new");
      
      if (cursorPosition !=-1)
      {
        if (new_calculation_tag[new_calculation_tag_index].calculationFormula.length < cursorPosition)
        {
          new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";
          if (Tagtype == 0)
          {
              new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${TCPSlaveTag[device_index].tag[tag_index].tagName}`;
          }
          else if (Tagtype==1)
          {
              new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${TCPMasterTag[device_index].tag[tag_index].tagName}`;     
          }
          else if (Tagtype==2)
          {
              new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${RTUMasterTag[device_index].tag[tag_index].tagName}`;            
          }

          new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";

        }
        else
        {
          let beforeCursorString=new_calculation_tag[new_calculation_tag_index].calculationFormula.slice(0, cursorPosition);
          let afterCursorString=new_calculation_tag[new_calculation_tag_index].calculationFormula.slice(cursorPosition);
          new_calculation_tag[new_calculation_tag_index].calculationFormula=`${beforeCursorString}`;
          new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";
          if (Tagtype == 0)
          {
              new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${TCPSlaveTag[device_index].tag[tag_index].tagName}`;
          }
          else if (Tagtype==1)
          {
              new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${TCPMasterTag[device_index].tag[tag_index].tagName}`;     
          }
          else if (Tagtype==2)
          {
              new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${RTUMasterTag[device_index].tag[tag_index].tagName}`;            
          }

          new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";
          new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${afterCursorString}`;
        }

      }
      else
      {
        new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";
        if (Tagtype == 0)
        {
            new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${TCPSlaveTag[device_index].tag[tag_index].tagName}`;
        }
        else if (Tagtype==1)
        {
            new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${TCPMasterTag[device_index].tag[tag_index].tagName}`;     
        }
        else if (Tagtype==2)
        {
            new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${RTUMasterTag[device_index].tag[tag_index].tagName}`;            
        }

        new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";
      }
    }
    else if(triggerSource == 1)
    {
      console.log("modify");

      if (cursorPosition != -1)
      {

        if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula.length < cursorPosition)
        {
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";

          if (Tagtype == 0)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${TCPSlaveTag[device_index].tag[tag_index].tagName}`;
          }
          else if (Tagtype==1)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${TCPMasterTag[device_index].tag[tag_index].tagName}`;     
          }
          else if (Tagtype==2)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${RTUMasterTag[device_index].tag[tag_index].tagName}`;            
          }

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";
        }
        else
        {
          let beforeCursorString=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula.slice(0, cursorPosition);

          let afterCursorString=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula.slice(cursorPosition);

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula=`${beforeCursorString}`;

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";
          if (Tagtype == 0)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${TCPSlaveTag[device_index].tag[tag_index].tagName}`;
          }
          else if (Tagtype==1)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${TCPMasterTag[device_index].tag[tag_index].tagName}`;     
          }
          else if (Tagtype==2)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${RTUMasterTag[device_index].tag[tag_index].tagName}`;            
          }

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";

          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${afterCursorString}`;

        }


      }
      else
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";
          if (Tagtype == 0)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${TCPSlaveTag[device_index].tag[tag_index].tagName}`;
          }
          else if (Tagtype==1)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${TCPMasterTag[device_index].tag[tag_index].tagName}`;     
          }
          else if (Tagtype==2)
          {
              changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${RTUMasterTag[device_index].tag[tag_index].tagName}`;            
          }
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";
      }

    }

    showMenu=false;
  }




  onMount(() => {

    console.log("data tag pro sessionid: ");
    console.log(sessionid);


    if (sessionid && data_tag_pro_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getDataTagPro();
    }
    else if (sessionid && data_tag_pro_data != "")
    {

      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

      changed_data_tag_pro_data=JSON.parse(JSON.stringify(saved_changed_data_tag_pro_data));
      if (data_tag_pro_general_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_general=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_general));

      }

      if (data_tag_pro_tag_c2d_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag));
      }

      if (data_tag_pro_tag_calculation_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag));
      }

      if (data_tag_pro_tag_accumulated_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag));
      }


      if (data_tag_pro_tag_dm_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag));
      }

      if (data_tag_pro_tag_scada_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag));
      }

      if (data_tag_pro_tag_event_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag));
      }

      if (data_tag_pro_tag_schedule_changedValues.length==0)
      {
       changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag));     
      }

      if (data_tag_pro_ul_changedValues.length == 0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_ulRule=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_ulRule));
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


      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }
      else
      {
        let tcp_slave_tag=[];
        let tcp_slave_coil_tag=[];
        let tcp_slave_discrete_input_tag=[];
        let tcp_slave_holding_register_tag=[];
        let tcp_slave_input_register_tag=[];

        for (let i=0; i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag.length; i++)
        {
          let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
          tcp_slave_tag=[...tcp_slave_tag, item];

          if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==0)
          {
            let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_coil_tag=[...tcp_slave_coil_tag, coil_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==1)
          {
            let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_discrete_input_tag=[...tcp_slave_discrete_input_tag, discrete_input_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==3)
          {
            let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};
            tcp_slave_holding_register_tag=[...tcp_slave_holding_register_tag, holding_register_item];
          }
          else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].pointType==2)
          {
            let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].tagName,"dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.slave[0].tag[i].dataType};

            tcp_slave_input_register_tag=[...tcp_slave_input_register_tag, input_register_item];
          }          

        }
        


        if (tcp_slave_tag.length !=0)
        {
          let tcp_slave={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_tag};
          TCPSlaveTag=[...TCPSlaveTag,tcp_slave];
          console.log("TCPSlaveTag:",TCPSlaveTag);
        }

        if (tcp_slave_coil_tag.length !=0)
        {
          let tcp_slave_coil={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_coil_tag};
          TCPSlaveCoilTag=[...TCPSlaveCoilTag, tcp_slave_coil];
        }

        if (tcp_slave_discrete_input_tag.length !=0)
        {
          let tcp_slave_discrete_input={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_discrete_input_tag};
          TCPSlaveDiscreteInputTag=[...TCPSlaveDiscreteInputTag, tcp_slave_discrete_input];
        }

        if (tcp_slave_holding_register_tag.length !=0)
        {
          let tcp_slave_holding_register={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_holding_register_tag};
          TCPSlaveHoldingRegisterTag=[...TCPSlaveHoldingRegisterTag, tcp_slave_holding_register];
        }

        if (tcp_slave_input_register_tag.length !=0)
        {
          let tcp_slave_input_register={"modbusProfile":"Local TCP Slave", "tag":tcp_slave_input_register_tag};
          TCPSlaveInputRegisterTag=[...TCPSlaveInputRegisterTag, tcp_slave_input_register];
        }


        for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master.length;i++)
        {
          let tcp_master_tag=[];
          let tcp_master_coil_tag=[];
          let tcp_master_discrete_input_tag=[];
          let tcp_master_holding_register_tag=[];
          let tcp_master_input_register_tag=[];          

          for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag.length;j++)
          {
            let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};

            tcp_master_tag=[...tcp_master_tag, item];

            if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==0)
            {
              let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_coil_tag=[...tcp_master_coil_tag, coil_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==1)
            {
              let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_discrete_input_tag=[...tcp_master_discrete_input_tag, discrete_input_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==3)
            {
              let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};
              tcp_master_holding_register_tag=[...tcp_master_holding_register_tag, holding_register_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].pointType==2)
            {
              let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].tagName, "dataType":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].tag[j].dataType};

              tcp_master_input_register_tag=[...tcp_master_input_register_tag, input_register_item];
            }    

          }

          if (tcp_master_tag.length !=0)
          {
            let tcp_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_tag};
            TCPMasterTag=[...TCPMasterTag, tcp_master];
          }


          if (tcp_master_coil_tag.length !=0)
          {          
            let tcp_master_coil={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_coil_tag};
            TCPMasterCoilTag=[...TCPMasterCoilTag, tcp_master_coil];
          }

          if (tcp_master_discrete_input_tag.length !=0)
          {
            let tcp_master_discrete_input={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_discrete_input_tag};
            TCPMasterDiscreteInputTag=[...TCPMasterDiscreteInputTag, tcp_master_discrete_input];
          }


          if (tcp_master_holding_register_tag.length !=0)
          {
            let tcp_master_holding_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_holding_register_tag};
            TCPMasterHoldingRegisterTag=[...TCPMasterHoldingRegisterTag, tcp_master_holding_register];
          }

          if (tcp_master_input_register_tag.length !=0)
          {
            let tcp_master_input_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_tcp.master[i].aliasName, "tag":tcp_master_input_register_tag};
            TCPMasterInputRegisterTag=[...TCPMasterInputRegisterTag, tcp_master_input_register];
          }

        }

        console.log("TCPMasterTag:", TCPMasterTag);

        for (let i=0;i<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master.length;i++)
        {
          let rtu_master_tag=[];
          let rtu_master_coil_tag=[];
          let rtu_master_discrete_input_tag=[];
          let rtu_master_holding_register_tag=[];
          let rtu_master_input_register_tag=[];     


          for (let j=0;j<saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag.length;j++)
          {
            let item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};

            rtu_master_tag=[...rtu_master_tag, item];

            if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==0)
            {
              let coil_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_coil_tag=[...rtu_master_coil_tag, coil_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==1)
            {
              let discrete_input_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_discrete_input_tag=[...rtu_master_discrete_input_tag, discrete_input_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==3)
            {
              let holding_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};
              rtu_master_holding_register_tag=[...rtu_master_holding_register_tag, holding_register_item];
            }
            else if (saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].pointType==2)
            {
              let input_register_item={"enable":true, "tagName":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].tagName, "dataType": saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].tag[j].dataType};

              rtu_master_input_register_tag=[...rtu_master_input_register_tag, input_register_item];
            } 


          }

          if (rtu_master_tag.length !=0)
          {
            let rtu_master={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_tag};

            RTUMasterTag=[...RTUMasterTag, rtu_master];

          }

          if (rtu_master_coil_tag.length !=0)
          {
            let rtu_master_coil={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_coil_tag};
            RTUMasterCoilTag=[...RTUMasterCoilTag, rtu_master_coil];
          }

          if (rtu_master_discrete_input_tag.length !=0)
          {
            let rtu_master_discrete_input={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_discrete_input_tag};
            RTUMasterDiscreteInputTag=[...RTUMasterDiscreteInputTag, rtu_master_discrete_input];
          }

          if (rtu_master_holding_register_tag.length !=0)
          {
            let rtu_master_holding_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_holding_register_tag};
            RTUMasterHoldingRegisterTag=[...RTUMasterHoldingRegisterTag, rtu_master_holding_register];
          }

          if (rtu_master_input_register_tag.length !=0)
          {
            let rtu_master_input_register={"modbusProfile":saved_changed_modbus_data.config.fieldManagement_modbus_rtu.master[i].aliasName, "tag":rtu_master_input_register_tag};
            RTUMasterInputRegisterTag=[...RTUMasterInputRegisterTag, rtu_master_input_register];
          }
        }

        console.log("RTUMasterTag:", RTUMasterTag);
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


      getDataReady=1;
    }


  });

</script>

 <Tabs style="underline">
<TabItem open title="General">

<table>

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-left">Data Tag Engine PRO</p></td>
<td class="pl-5 pt-5">
{#if getDataReady == 1}
<Toggle bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_general.enable}></Toggle>
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
    <td class="pl-40"><Button color="blue" pill={true} on:click={saveGeneral} ><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

</TabItem>
   
<TabItem title="Tag Rule" on:click={GetScadaAdrress}>
<Accordion>
 


<AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud To Device Tag (AWS,MQTT)
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
    <TableHeadCell>Tag Name</TableHeadCell>
    <TableHeadCell>Cloud Profile</TableHeadCell>    
    <TableHeadCell>Subscribe Topic</TableHeadCell>
    <TableHeadCell>Target Tag</TableHeadCell> 
    <TableHeadCell>Publish Topic For Acknowledge</TableHeadCell>


  </TableHead>

<TableBody>


{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag as C2Dtag, index}
{#if C2Dtag.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteC2Dtag(index)}>
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 disabled:cursor-not-allowed strikeout" type="checkbox" bind:checked={C2Dtag.enable} disabled>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{C2Dtag.tagName}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{C2Dtag.cloudProfile}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{C2Dtag.subscribeTopic}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{C2Dtag.targetTag} {#if C2Dtag.modbusTagType==2} ({TCPSlaveTag[C2Dtag.modbusTagOwnerIndex].modbusProfile}){:else if C2Dtag.modbusTagType==0} ({TCPMasterTag[C2Dtag.modbusTagOwnerIndex].modbusProfile}){:else if C2Dtag.modbusTagType==1} ({RTUMasterTag[C2Dtag.modbusTagOwnerIndex].modbusProfile}){/if}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{#if C2Dtag.publishEnable}Enable (Topic: {C2Dtag.publishTopic}){:else}Disable{/if}</td>



   </tr>

{:else}   


 <TableBodyRow>
      <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyC2DTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteC2Dtag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell>
<input class="mb-1" type="checkbox"  bind:checked={C2Dtag.enable}>
    </TableBodyCell>

    <TableBodyCell>{index+1}</TableBodyCell>
 <TableBodyCell>{C2Dtag.tagName}</TableBodyCell>
 <TableBodyCell>{C2Dtag.cloudProfile}</TableBodyCell>
 <TableBodyCell>{C2Dtag.subscribeTopic}</TableBodyCell>
 <TableBodyCell>{C2Dtag.targetTag} {#if C2Dtag.modbusTagType==2} ({TCPSlaveTag[C2Dtag.modbusTagOwnerIndex].modbusProfile}){:else if C2Dtag.modbusTagType==0} ({TCPMasterTag[C2Dtag.modbusTagOwnerIndex].modbusProfile}){:else if C2Dtag.modbusTagType==1} ({RTUMasterTag[C2Dtag.modbusTagOwnerIndex].modbusProfile}){/if}</TableBodyCell>
 <TableBodyCell>{#if C2Dtag.publishEnable}Enable (Topic: {C2Dtag.publishTopic}){:else}Disable{/if}</TableBodyCell>


 </TableBodyRow>


{/if}
{/each}
{/if}



  <TableBodyRow>
{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length < 50}

 <TableBodyCell class="!p-4 w-10">

<button on:click={() =>new_c2d_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length)}>
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

      <TableBodyCell class="!p-4"></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>

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
    <td></td>
    <td></td>

    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveC2DTag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</TableBody>

</Table>


<Modal bind:open={new_c2d_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_c2d_tag[new_c2d_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>NoAddC2D(new_c2d_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_c2d_tag[new_c2d_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_c2d_tag[new_c2d_tag_index].cloudProfile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Subscribe Topic</p></td>
      <td class="pl-4 pt-5">


  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_c2d_tag[new_c2d_tag_index].subscribeTopic}>


</td>


</tr>


<tr>
<td><p class="pl-4 pt-5 text-lg font-light text-right">Target Tag</p></td>


  <td class= "pl-4 pt-8">
<div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_c2d_tag[new_c2d_tag_index].modbusTagOwner} on:change={()=>handleC2DTargetModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_c2d_tag[new_c2d_tag_index].targetTag} >

<option disabled="" value="">Choose ...</option>

{#if new_c2d_tag[new_c2d_tag_index].modbusTagOwner != "" && new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex != -1}

{#if new_c2d_tag[new_c2d_tag_index].modbusTagType==2 && new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_c2d_tag[new_c2d_tag_index].modbusTagType==0 && new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_c2d_tag[new_c2d_tag_index].modbusTagType==1 && new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[new_c2d_tag[new_c2d_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


  </div>

    </td>


</tr>




<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Publish Topic For Acknowledge</p>

  </td>

    <td class="pl-4 pt-5" colspan="5">
    <div class="flex gap-2">

<Toggle class="p-2.5 mt-2 mb-4" bind:checked={new_c2d_tag[new_c2d_tag_index].publishEnable}></Toggle>

{#if new_c2d_tag[new_c2d_tag_index].publishEnable}

<div class="relative">
<input id="publish_topic" class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="publish_topic" placeholder=" " type="text" bind:value={new_c2d_tag[new_c2d_tag_index].publishTopic}> <label for="publish_topic" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">publish_topic</label></div>


{/if}
</div></td>
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
    <td>
<Button color="dark" pill={true} on:click={()=>add_new_c2d_tag(new_c2d_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>


<Modal bind:open={modify_c2d_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>no_modify_c2d_tag(modify_c2d_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>


<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].cloudProfile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Subscribe Topic</p></td>
      <td class="pl-4 pt-5">


  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].subscribeTopic}>


</td>


</tr>


<tr>
<td><p class="pl-4 pt-5 text-lg font-light text-right">Target Tag</p></td>


  <td class= "pl-4 pt-8">
<div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwner} on:change={()=>handleC2DTargetModbusChange(1)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].targetTag} >

<option disabled="" value="">Choose ...</option>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwner != "" && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex != -1}

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagType==2 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagType==0 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagType==1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


  </div>

    </td>


</tr>




<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Publish Topic For Acknowledge</p>

  </td>

    <td class="pl-4 pt-5" colspan="5">
    <div class="flex gap-2">

<Toggle class="p-2.5 mt-2 mb-4" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].publishEnable}></Toggle>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].publishEnable}



<div class="relative">
<input id="publish_topic" class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="publish_topic" placeholder=" " type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag[modify_c2d_tag_index].publishTopic}> <label for="publish_topic" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">publish_topic</label></div>


{/if}
</div></td>
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
    <td>
<Button color="dark" pill={true} on:click={()=>modify_c2d_tag(modify_c2d_tag_index)}>Modify</Button></td>


</table>

</form>
</Modal>



</AccordionItem>

{#if data_tag_pro_flag==1}


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Direct Methods Tag (Azure)
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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Cloud Profile</TableHeadCell>
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>    

  </TableHead>

<TableBody>


{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag as DMtag, index}
{#if DMtag.delete}


<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteDMtag(index)}>
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 strikeout disabled:cursor-not-allowed" type="checkbox" bind:checked={DMtag.enable} disabled>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{DMtag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{DMtag.cloudProfile}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{DMtag.targetTag}{#if DMtag.modbusTagType==2} ({TCPSlaveTag[DMtag.modbusTagOwnerIndex].modbusProfile}){:else if DMtag.modbusTagType==0} ({TCPMasterTag[DMtag.modbusTagOwnerIndex].modbusProfile}){:else if DMtag.modbusTagType==1} ({RTUMasterTag[DMtag.modbusTagOwnerIndex].modbusProfile}){/if}</td>

</tr>


{:else}

 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyDMTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
 <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteDMtag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


    <TableBodyCell><input class="mb-1" type="checkbox" bind:checked={DMtag.enable}></TableBodyCell>


      <TableBodyCell>{index+1}</TableBodyCell>
      <TableBodyCell>{DMtag.tagName}</TableBodyCell>
      <TableBodyCell>{DMtag.cloudProfile}</TableBodyCell>      
      <TableBodyCell>{DMtag.targetTag}{#if DMtag.modbusTagType==2} ({TCPSlaveTag[DMtag.modbusTagOwnerIndex].modbusProfile}){:else if DMtag.modbusTagType==0} ({TCPMasterTag[DMtag.modbusTagOwnerIndex].modbusProfile}){:else if DMtag.modbusTagType==1} ({RTUMasterTag[DMtag.modbusTagOwnerIndex].modbusProfile}){/if}</TableBodyCell>


 </TableBodyRow>

{/if}
{/each}
{/if}

 <TableBodyRow>

 {#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={()=>new_DM_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
{:else}

 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>
{/if}


      <TableBodyCell class="!p-0 w-10">



       </TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveDMtag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>


<Modal bind:open={new_DM_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_DM_tag[new_DM_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddDM(new_DM_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_DM_tag[new_DM_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_DM_tag[new_DM_tag_index].cloudProfile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>


<tr>
<td><p class="pl-4 pt-5 text-lg font-light text-right">Target Tag</p></td>


  <td class= "pl-4 pt-8">
<div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_DM_tag[new_DM_tag_index].modbusTagOwner} on:change={()=>handleDMTargetModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_DM_tag[new_DM_tag_index].targetTag} >

<option disabled="" value="">Choose ...</option>

{#if new_DM_tag[new_DM_tag_index].modbusTagOwner != "" && new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex != -1}

{#if new_DM_tag[new_DM_tag_index].modbusTagType==2 && new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_DM_tag[new_DM_tag_index].modbusTagType==0 && new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_DM_tag[new_DM_tag_index].modbusTagType==1 && new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[new_DM_tag[new_DM_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


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
    <td>
<Button color="dark" pill={true} on:click={add_new_DM_tag(new_DM_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>



<Modal bind:open={modify_DM_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyDM}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].cloudProfile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>

<tr>
<td><p class="pl-4 pt-5 text-lg font-light text-right">Target Tag</p></td>


  <td class= "pl-4 pt-8">
<div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner} on:change={()=>handleDMTargetModbusChange(1)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].targetTag} >

<option disabled="" value="">Choose ...</option>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwner != "" && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex != -1}

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType==2 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType==0 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagType==1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


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
    <td>
<Button color="dark" pill={true} on:click={modify_DM_tag}>Modify</Button></td>
</tr>

</table>
</form>
</Modal>


</Table>



  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Calculation Tag
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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Scheduler</TableHeadCell>
    <TableHeadCell class="w-80">Calculation Formula</TableHeadCell>    

  </TableHead>

<TableBody>
{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag as Ctag, index}
{#if Ctag.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteCtag(index)}>
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 disabled:cursor-not-allowed strikeout" type="checkbox" bind:checked={Ctag.enable} disabled>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Ctag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{#if Ctag.schedulerEnable}{#if Ctag.preset == 'daily'}
      {Ctag.startCronString.split(' ')[1].padStart(2, '0')}:{Ctag.startCronString.split(' ')[0].padStart(2, '0')} - {Ctag.stopCronString.split(' ')[1].padStart(2, '0')}:{Ctag.stopCronString.split(' ')[0].padStart(2, '0')}{:else if Ctag.preset=='weekly'}
      {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Ctag.startCronString.split(' ')[4] % 7]} {Ctag.startCronString.split(' ')[1].padStart(2, '0')}:{Ctag.startCronString.split(' ')[0].padStart(2, '0')} -       {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Ctag.stopCronString.split(' ')[4] % 7]} {Ctag.stopCronString.split(' ')[1].padStart(2, '0')}:{Ctag.stopCronString.split(' ')[0].padStart(2, '0')}
{:else if Ctag.preset == 'monthly'}
 Day {Ctag.startCronString.split(' ')[2]} 
  {Ctag.startCronString.split(' ')[1].padStart(2,'0')}:{Ctag.startCronString.split(' ')[0].padStart(2,'0')} -  Day {Ctag.stopCronString.split(' ')[2]} 
  {Ctag.stopCronString.split(' ')[1].padStart(2,'0')}:{Ctag.stopCronString.split(' ')[0].padStart(2,'0')}
{:else if Ctag.preset == 'yearly'}
  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Ctag.startCronString.split(' ')[3] - 1]}
  {' '}
  {Ctag.startCronString.split(' ')[2]}
  {' '}
  {Ctag.stopCronString.split(' ')[1].padStart(2,'0')}:{Ctag.stopCronString.split(' ')[0].padStart(2,'0')} -   {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Ctag.stopCronString.split(' ')[3] - 1]}
  {' '}
  {Ctag.stopCronString.split(' ')[2]}
  {' '}
  {Ctag.stopCronString.split(' ')[1].padStart(2,'0')}:{Ctag.stopCronString.split(' ')[0].padStart(2,'0')}



      {/if} ({Ctag.preset})
{:else}
None
{/if}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Ctag.calculationFormula}</td>




   </tr>

{:else}   


 <TableBodyRow>
      <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyCTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteCtag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell>
<input class="mb-1" type="checkbox"  bind:checked={Ctag.enable}>
    </TableBodyCell>

    <TableBodyCell>{index+1}</TableBodyCell>
 <TableBodyCell>{Ctag.tagName}</TableBodyCell>


      <TableBodyCell>{#if Ctag.schedulerEnable}{#if Ctag.preset == 'daily'}
      {Ctag.startCronString.split(' ')[1].padStart(2, '0')}:{Ctag.startCronString.split(' ')[0].padStart(2, '0')} - {Ctag.stopCronString.split(' ')[1].padStart(2, '0')}:{Ctag.stopCronString.split(' ')[0].padStart(2, '0')}{:else if Ctag.preset=='weekly'}
      {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Ctag.startCronString.split(' ')[4] % 7]} {Ctag.startCronString.split(' ')[1].padStart(2, '0')}:{Ctag.startCronString.split(' ')[0].padStart(2, '0')} -       {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Ctag.stopCronString.split(' ')[4] % 7]} {Ctag.stopCronString.split(' ')[1].padStart(2, '0')}:{Ctag.stopCronString.split(' ')[0].padStart(2, '0')}
{:else if Ctag.preset == 'monthly'}
 Day {Ctag.startCronString.split(' ')[2]} 
  {Ctag.startCronString.split(' ')[1].padStart(2,'0')}:{Ctag.startCronString.split(' ')[0].padStart(2,'0')} -  Day {Ctag.stopCronString.split(' ')[2]} 
  {Ctag.stopCronString.split(' ')[1].padStart(2,'0')}:{Ctag.stopCronString.split(' ')[0].padStart(2,'0')}
{:else if Ctag.preset == 'yearly'}
  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Ctag.startCronString.split(' ')[3] - 1]}
  {' '}
  {Ctag.startCronString.split(' ')[2]}
  {' '}
  {Ctag.stopCronString.split(' ')[1].padStart(2,'0')}:{Ctag.stopCronString.split(' ')[0].padStart(2,'0')} -   {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Ctag.stopCronString.split(' ')[3] - 1]}
  {' '}
  {Ctag.stopCronString.split(' ')[2]}
  {' '}
  {Ctag.stopCronString.split(' ')[1].padStart(2,'0')}:{Ctag.stopCronString.split(' ')[0].padStart(2,'0')}



      {/if} ({Ctag.preset})
{:else}
None
{/if}
      </TableBodyCell>



    <TableBodyCell>{Ctag.calculationFormula}</TableBodyCell>







 </TableBodyRow>


{/if}
{/each}
{/if}


  <TableBodyRow>
{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={() =>new_calculation_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length)}>
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

      <TableBodyCell class="!p-4"></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>


    </TableBodyRow>

  <tr>
    <td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>


    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveCTag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>


<Modal bind:open={new_calculation_tag_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_calculation_tag[new_calculation_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddCalculation(new_calculation_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table bind:this={modalElement}>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-2 pt-5" colspan="20">

<input type="text" bind:value={new_calculation_tag[new_calculation_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>






<p class="mt-10"></p>
<tr>
      <td><p class="pl-20 pt-4 pr-4 text-lg font-light text-right">Scheduler</p></td>

 <td class="pl-1 pt-5" colspan="1">
    <div class="flex gap-2">

<Toggle class="p-2.5 mt-3 mb-4" bind:checked={new_calculation_tag[new_calculation_tag_index].schedulerEnable}></Toggle>
</div>
</td>


{#if new_calculation_tag[new_calculation_tag_index].schedulerEnable}


 <td class="pl-5 pt-4" colspan="20" style="border:1px solid black;"><div class="flex gap-4">

<div>      
<h3 class="font-semibold">Presets</h3>
<div class="flex flex-wrap gap-3 mt-2 mb-6">
  <button
    type="button"
    on:click={() => applyPreset('daily')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_calculation_tag[new_calculation_tag_index].preset == 'daily'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Daily
  </button>

  <button
    type="button"
    on:click={() => applyPreset('weekly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_calculation_tag[new_calculation_tag_index].preset == 'weekly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Weekly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('monthly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_calculation_tag[new_calculation_tag_index].preset == 'monthly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Monthly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('yearly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_calculation_tag[new_calculation_tag_index].preset == 'yearly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Yearly
  </button>

</div>


<h3 class="font-semibold">Start:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute ? 'border-2 border-red-500' : ''}" bind:value={minute} on:input={() => {
    errors.minute = !validators.minute(minute);
    if (!errors.minute) updateCronDuration(1);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour ? 'border-2 border-red-500' : ''}" bind:value={hour} on:input={() => {
  errors.hour = !validators.hour(hour);
  if (!errors.hour) updateCronDuration(1);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth} on:input={() => {
  errors.dayOfMonth = !validators.dayOfMonth(dayOfMonth);
  if (!errors.dayOfMonth) updateCronDuration(1);
}} placeholder="* / , - 1-31" disabled={new_calculation_tag[new_calculation_tag_index].preset != 'monthly' && new_calculation_tag[new_calculation_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-m" class="text-sm">Month</label>
<input id="cron-m" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month ? 'border-2 border-red-500' : ''}" bind:value={month} on:input={() => {
  errors.month = !validators.month(month);
  if (!errors.month) updateCronDuration(1);
}} placeholder="* / , - 1-12" disabled={new_calculation_tag[new_calculation_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek} on:input={() => {
  errors.dayOfWeek = !validators.dayOfWeek(dayOfWeek);
  if (!errors.dayOfWeek) updateCronDuration(1);
}} placeholder="* / , - 1-7" disabled={new_calculation_tag[new_calculation_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}





<h3 class="font-semibold">Stop:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute2" class="text-sm">Minute</label>
<input id="cron-minute2" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute2 ? 'border-2 border-red-500' : ''}" bind:value={minute2} on:input={() => {
    errors.minute2 = !validators.minute(minute2);
    if (!errors.minute2) updateCronDuration(2);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour2" class="text-sm">Hour</label>
<input id="cron-hour2" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour2 ? 'border-2 border-red-500' : ''}" bind:value={hour2} on:input={() => {
  errors.hour2 = !validators.hour(hour2);
  if (!errors.hour2) updateCronDuration(2);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom2" class="text-sm">Day</label>
<input id="cron-dom2" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth2} on:input={() => {
  errors.dayOfMonth2 = !validators.dayOfMonth(dayOfMonth2);
  if (!errors.dayOfMonth2) updateCronDuration(2);
}} placeholder="* / , - 1-31" disabled={new_calculation_tag[new_calculation_tag_index].preset != 'monthly' && new_calculation_tag[new_calculation_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-m2" class="text-sm">Month</label>
<input id="cron-m2" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month2 ? 'border-2 border-red-500' : ''}" bind:value={month2} on:input={() => {
  errors.month2 = !validators.month(month2);
  if (!errors.month2) updateCronDuration(2);
}} placeholder="* / , - 1-12" disabled={new_calculation_tag[new_calculation_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow2" class="text-sm">Weekday</label>


<input id="cron-dow2" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek2} on:input={() => {
  errors.dayOfWeek2 = !validators.dayOfWeek(dayOfWeek2);
  if (!errors.dayOfWeek2) updateCronDuration(2);
}} placeholder="* / , - 1-7" disabled={new_calculation_tag[new_calculation_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}

</div>
</div>



  </td>

{/if}
</tr>




<tr>
      <td class="pt-10"><p class="pl-10 pt-1 mb-4 text-lg font-light text-right">Formula</p>



      </td>
      <td class="pl-5 pt-10" colspan="16">

{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">

{#each TCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 5px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>AddTagName(0,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each TCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {55+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>AddTagName(0,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each RTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {55+TCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>AddTagName(0,2,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


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

<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={new_calculation_tag[new_calculation_tag_index].calculationFormula} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>

      </td>

    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>


  </tr>


 <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td >
<Button color="dark" pill={true} on:click={()=>add_new_calculation_tag(new_calculation_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>



<Modal bind:open={modify_calculation_tag_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>no_modify_calculation_tag(modify_calculation_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table bind:this={modalElement}>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>







<p class="mt-10"></p>
<tr>
      <td><p class="pl-20 pt-4 pr-4 text-lg font-light text-right">Scheduler</p></td>

 <td class="pl-1 pt-5" colspan="1">
    <div class="flex gap-2">

<Toggle class="p-2.5 mt-3 mb-4" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].schedulerEnable}></Toggle>
</div>
</td>


{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].schedulerEnable}


 <td class="pl-5 pt-4" colspan="20" style="border:1px solid black;"><div class="flex gap-4">

<div>      
<h3 class="font-semibold">Presets</h3>
<div class="flex flex-wrap gap-3 mt-2 mb-6">
  <button
    type="button"
    on:click={() => applyPreset('daily')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset == 'daily'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Daily
  </button>

  <button
    type="button"
    on:click={() => applyPreset('weekly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset == 'weekly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Weekly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('monthly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset == 'monthly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Monthly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('yearly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset == 'yearly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Yearly
  </button>

</div>


<h3 class="font-semibold">Start:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute ? 'border-2 border-red-500' : ''}" bind:value={minute} on:input={() => {
    errors.minute = !validators.minute(minute);
    if (!errors.minute) updateCronDuration(1);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour ? 'border-2 border-red-500' : ''}" bind:value={hour} on:input={() => {
  errors.hour = !validators.hour(hour);
  if (!errors.hour) updateCronDuration(1);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth} on:input={() => {
  errors.dayOfMonth = !validators.dayOfMonth(dayOfMonth);
  if (!errors.dayOfMonth) updateCronDuration(1);
}} placeholder="* / , - 1-31" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'monthly' && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month ? 'border-2 border-red-500' : ''}" bind:value={month} on:input={() => {
  errors.month = !validators.month(month);
  if (!errors.month) updateCronDuration(1);
}} placeholder="* / , - 1-12" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek} on:input={() => {
  errors.dayOfWeek = !validators.dayOfWeek(dayOfWeek);
  if (!errors.dayOfWeek) updateCronDuration(1);
}} placeholder="* / , - 1-7" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}





<h3 class="font-semibold">Stop:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute2 ? 'border-2 border-red-500' : ''}" bind:value={minute2} on:input={() => {
    errors.minute2 = !validators.minute(minute);
    if (!errors.minute2) updateCronDuration(2);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour2 ? 'border-2 border-red-500' : ''}" bind:value={hour2} on:input={() => {
  errors.hour2 = !validators.hour(hour2);
  if (!errors.hour2) updateCronDuration(2);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth2} on:input={() => {
  errors.dayOfMonth2 = !validators.dayOfMonth(dayOfMonth2);
  if (!errors.dayOfMonth2) updateCronDuration(2);
}} placeholder="* / , - 1-31" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'monthly' && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month2 ? 'border-2 border-red-500' : ''}" bind:value={month2} on:input={() => {
  errors.month2 = !validators.month(month2);
  if (!errors.month2) updateCronDuration(2);
}} placeholder="* / , - 1-12" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek2} on:input={() => {
  errors.dayOfWeek2 = !validators.dayOfWeek(dayOfWeek2);
  if (!errors.dayOfWeek2) updateCronDuration(2);
}} placeholder="* / , - 1-7" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}

</div>
</div>



  </td>

{/if}
</tr>






<tr>
      <td class="pt-2"><p class="pl-10 pt-1 mb-4 text-lg font-light text-right">Formula</p>



      </td>
      <td class="pl-5 pt-10" colspan="10">

{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">

{#each TCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 5px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>AddTagName(1,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each TCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {55+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>AddTagName(1,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each RTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {55+TCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>AddTagName(1,2,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


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

<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>

      </td>

    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>


  </tr>


 <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td>
<Button color="dark" pill={true} on:click={()=>modify_calculation_tag(modify_calculation_tag_index)}>Modify</Button></td>


</table>
</form>
</Modal>




</Table>



  </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Accumulated Tag
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
    <TableHeadCell >Tag Name</TableHeadCell>
    <TableHeadCell >Target Tag</TableHeadCell>    
    <TableHeadCell >Scheduler</TableHeadCell>

  

  </TableHead>

<TableBody>

{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag as Atag, index}
{#if Atag.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteAtag(index)}>
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 strikeout disabled:cursor-not-allowed" type="checkbox" bind:checked={Atag.enable} disabled>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Atag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Atag.targetTag}{#if Atag.modbusTagType==2} ({TCPSlaveTag[Atag.modbusTagOwnerIndex].modbusProfile}){:else if Atag.modbusTagType==0} ({TCPMasterTag[Atag.modbusTagOwnerIndex].modbusProfile}){:else if Atag.modbusTagType==1} ({RTUMasterTag[Atag.modbusTagOwnerIndex].modbusProfile}){/if}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{#if Atag.preset == 'daily'}
      {Atag.startCronString.split(' ')[1].padStart(2, '0')}:{Atag.startCronString.split(' ')[0].padStart(2, '0')} - {Atag.stopCronString.split(' ')[1].padStart(2, '0')}:{Atag.stopCronString.split(' ')[0].padStart(2, '0')}{:else if Atag.preset=='weekly'}
      {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Atag.startCronString.split(' ')[4] % 7]} {Atag.startCronString.split(' ')[1].padStart(2, '0')}:{Atag.startCronString.split(' ')[0].padStart(2, '0')} -       {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Atag.stopCronString.split(' ')[4] % 7]} {Atag.stopCronString.split(' ')[1].padStart(2, '0')}:{Atag.stopCronString.split(' ')[0].padStart(2, '0')}
{:else if Atag.preset == 'monthly'}
 Day {Atag.startCronString.split(' ')[2]} 
  {Atag.startCronString.split(' ')[1].padStart(2,'0')}:{Atag.startCronString.split(' ')[0].padStart(2,'0')} -  Day {Atag.stopCronString.split(' ')[2]} 
  {Atag.stopCronString.split(' ')[1].padStart(2,'0')}:{Atag.stopCronString.split(' ')[0].padStart(2,'0')}
{:else if Atag.preset == 'yearly'}
  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Atag.startCronString.split(' ')[3] - 1]}
  {' '}
  {Atag.startCronString.split(' ')[2]}
  {' '}
  {Atag.stopCronString.split(' ')[1].padStart(2,'0')}:{Atag.stopCronString.split(' ')[0].padStart(2,'0')} -   {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Atag.stopCronString.split(' ')[3] - 1]}
  {' '}
  {Atag.stopCronString.split(' ')[2]}
  {' '}
  {Atag.stopCronString.split(' ')[1].padStart(2,'0')}:{Atag.stopCronString.split(' ')[0].padStart(2,'0')}

      {/if} ({Atag.preset})</td>





</tr>

{:else}
 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyATag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

 <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteAtag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell ><input class="mb-1" type="checkbox" bind:checked={Atag.enable}></TableBodyCell>


      <TableBodyCell >{index+1}</TableBodyCell>
      <TableBodyCell >{Atag.tagName}</TableBodyCell>
      <TableBodyCell >{Atag.targetTag}{#if Atag.modbusTagType==2} ({TCPSlaveTag[Atag.modbusTagOwnerIndex].modbusProfile}){:else if Atag.modbusTagType==0} ({TCPMasterTag[Atag.modbusTagOwnerIndex].modbusProfile}){:else if Atag.modbusTagType==1} ({RTUMasterTag[Atag.modbusTagOwnerIndex].modbusProfile}){/if}</TableBodyCell>

      <TableBodyCell>{#if Atag.preset == 'daily'}
      {Atag.startCronString.split(' ')[1].padStart(2, '0')}:{Atag.startCronString.split(' ')[0].padStart(2, '0')} - {Atag.stopCronString.split(' ')[1].padStart(2, '0')}:{Atag.stopCronString.split(' ')[0].padStart(2, '0')}{:else if Atag.preset=='weekly'}
      {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Atag.startCronString.split(' ')[4] % 7]} {Atag.startCronString.split(' ')[1].padStart(2, '0')}:{Atag.startCronString.split(' ')[0].padStart(2, '0')} -       {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Atag.stopCronString.split(' ')[4] % 7]} {Atag.stopCronString.split(' ')[1].padStart(2, '0')}:{Atag.stopCronString.split(' ')[0].padStart(2, '0')}
{:else if Atag.preset == 'monthly'}
 Day {Atag.startCronString.split(' ')[2]} 
  {Atag.startCronString.split(' ')[1].padStart(2,'0')}:{Atag.startCronString.split(' ')[0].padStart(2,'0')} -  Day {Atag.stopCronString.split(' ')[2]} 
  {Atag.stopCronString.split(' ')[1].padStart(2,'0')}:{Atag.stopCronString.split(' ')[0].padStart(2,'0')}
{:else if Atag.preset == 'yearly'}
  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Atag.startCronString.split(' ')[3] - 1]}
  {' '}
  {Atag.startCronString.split(' ')[2]}
  {' '}
  {Atag.stopCronString.split(' ')[1].padStart(2,'0')}:{Atag.stopCronString.split(' ')[0].padStart(2,'0')} -   {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Atag.stopCronString.split(' ')[3] - 1]}
  {' '}
  {Atag.stopCronString.split(' ')[2]}
  {' '}
  {Atag.stopCronString.split(' ')[1].padStart(2,'0')}:{Atag.stopCronString.split(' ')[0].padStart(2,'0')}

      {/if} ({Atag.preset})

      </TableBodyCell>


 </TableBodyRow>

{/if}
{/each}
{/if}

 <TableBodyRow>

 {#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length < 10}

 <TableBodyCell class="!p-4 w-10">


<button on:click={()=>new_accumulated_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
{:else}

 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>

{/if}
      <TableBodyCell class="!p-0 w-10">



       </TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>


    <TableBodyCell ></TableBodyCell>
      <TableBodyCell ></TableBodyCell>
      <TableBodyCell ></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>



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

    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveATag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>



<Modal bind:open={new_accumulated_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_accumulated_tag[new_accumulated_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>NoAddAccumulated(new_accumulated_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_accumulated_tag[new_accumulated_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>





<tr>
<td><p class="pl-4 pt-5 text-lg font-light text-right">Target Tag</p></td>


  <td class= "pl-4 pt-8">
<div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_accumulated_tag[new_accumulated_tag_index].modbusTagOwner} on:change={()=>handleACTargetModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_accumulated_tag[new_accumulated_tag_index].targetTag} >

<option disabled="" value="">Choose ...</option>

{#if new_accumulated_tag[new_accumulated_tag_index].modbusTagOwner != "" && new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex != -1}

{#if new_accumulated_tag[new_accumulated_tag_index].modbusTagType==2 && new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_accumulated_tag[new_accumulated_tag_index].modbusTagType==0 && new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_accumulated_tag[new_accumulated_tag_index].modbusTagType==1 && new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[new_accumulated_tag[new_accumulated_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


  </div>

    </td>


</tr>







<p class="mt-10"></p>
<tr>
      <td><p class="pl-20 pt-4 pr-4 text-lg font-light text-right">Scheduler</p></td>






 <td class="pl-5 pt-4" colspan="20" style="border:1px solid black;"><div class="flex gap-4">

<div>      
<h3 class="font-semibold">Presets</h3>
<div class="flex flex-wrap gap-3 mt-2 mb-6">
  <button
    type="button"
    on:click={() => applyPreset('daily')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_accumulated_tag[new_accumulated_tag_index].preset == 'daily'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Daily
  </button>

  <button
    type="button"
    on:click={() => applyPreset('weekly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_accumulated_tag[new_accumulated_tag_index].preset == 'weekly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Weekly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('monthly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_accumulated_tag[new_accumulated_tag_index].preset == 'monthly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Monthly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('yearly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_accumulated_tag[new_accumulated_tag_index].preset == 'yearly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Yearly
  </button>

</div>


<h3 class="font-semibold">Start:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute ? 'border-2 border-red-500' : ''}" bind:value={minute} on:input={() => {
    errors.minute = !validators.minute(minute);
    if (!errors.minute) updateCronDuration(1);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour ? 'border-2 border-red-500' : ''}" bind:value={hour} on:input={() => {
  errors.hour = !validators.hour(hour);
  if (!errors.hour) updateCronDuration(1);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth} on:input={() => {
  errors.dayOfMonth = !validators.dayOfMonth(dayOfMonth);
  if (!errors.dayOfMonth) updateCronDuration(1);
}} placeholder="* / , - 1-31" disabled={new_accumulated_tag[new_accumulated_tag_index].preset != 'monthly' && new_accumulated_tag[new_accumulated_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month ? 'border-2 border-red-500' : ''}" bind:value={month} on:input={() => {
  errors.month = !validators.month(month);
  if (!errors.month) updateCronDuration(1);
}} placeholder="* / , - 1-12" disabled={new_accumulated_tag[new_accumulated_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek} on:input={() => {
  errors.dayOfWeek = !validators.dayOfWeek(dayOfWeek);
  if (!errors.dayOfWeek) updateCronDuration(1);
}} placeholder="* / , - 1-7" disabled={new_accumulated_tag[new_accumulated_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}





<h3 class="font-semibold">Stop:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute2 ? 'border-2 border-red-500' : ''}" bind:value={minute2} on:input={() => {
    errors.minute2 = !validators.minute(minute2);
    if (!errors.minute2) updateCronDuration(2);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour2 ? 'border-2 border-red-500' : ''}" bind:value={hour2} on:input={() => {
  errors.hour2 = !validators.hour(hour2);
  if (!errors.hour2) updateCronDuration(2);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth2} on:input={() => {
  errors.dayOfMonth2 = !validators.dayOfMonth(dayOfMonth2);
  if (!errors.dayOfMonth2) updateCronDuration(2);
}} placeholder="* / , - 1-31" disabled={new_accumulated_tag[new_accumulated_tag_index].preset != 'monthly' && new_accumulated_tag[new_accumulated_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month2 ? 'border-2 border-red-500' : ''}" bind:value={month2} on:input={() => {
  errors.month2 = !validators.month(month2);
  if (!errors.month2) updateCronDuration(2);
}} placeholder="* / , - 1-12" disabled={new_accumulated_tag[new_accumulated_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek2} on:input={() => {
  errors.dayOfWeek2 = !validators.dayOfWeek(dayOfWeek2);
  if (!errors.dayOfWeek2) updateCronDuration(2);
}} placeholder="* / , - 1-7" disabled={new_accumulated_tag[new_accumulated_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}

</div>
</div>



  </td>


</tr>






<p class="pt-5"></p>


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
    <td>
<Button color="dark" pill={true} on:click={add_new_accumulated_tag(new_accumulated_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>




<Modal bind:open={modify_accumulated_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={no_modify_accumulated_tag}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>



<tr>
<td><p class="pl-4 pt-5 text-lg font-light text-right">Target Tag</p></td>


  <td class= "pl-4 pt-8">
<div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner} on:change={()=>handleACTargetModbusChange(1)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].targetTag} >

<option disabled="" value="">Choose ...</option>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwner != "" && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex != -1}

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagType==2 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagType==0 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagType==1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


  </div>

    </td>


</tr>



<p class="mt-10"></p>
<tr>
      <td><p class="pl-20 pt-4 pr-4 text-lg font-light text-right">Scheduler</p></td>






 <td class="pl-5 pt-4" colspan="20" style="border:1px solid black;"><div class="flex gap-4">

<div>      
<h3 class="font-semibold">Presets</h3>
<div class="flex flex-wrap gap-3 mt-2 mb-6">
  <button
    type="button"
    on:click={() => applyPreset('daily')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset == 'daily'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Daily
  </button>

  <button
    type="button"
    on:click={() => applyPreset('weekly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset == 'weekly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Weekly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('monthly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset == 'monthly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Monthly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('yearly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset == 'yearly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Yearly
  </button>

</div>


<h3 class="font-semibold">Start:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute ? 'border-2 border-red-500' : ''}" bind:value={minute} on:input={() => {
    errors.minute = !validators.minute(minute);
    if (!errors.minute) updateCronDuration(1);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour ? 'border-2 border-red-500' : ''}" bind:value={hour} on:input={() => {
  errors.hour = !validators.hour(hour);
  if (!errors.hour) updateCronDuration(1);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth} on:input={() => {
  errors.dayOfMonth = !validators.dayOfMonth(dayOfMonth);
  if (!errors.dayOfMonth) updateCronDuration(1);
}} placeholder="* / , - 1-31" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'monthly' && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month ? 'border-2 border-red-500' : ''}" bind:value={month} on:input={() => {
  errors.month = !validators.month(month);
  if (!errors.month) updateCronDuration(1);
}} placeholder="* / , - 1-12" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek} on:input={() => {
  errors.dayOfWeek = !validators.dayOfWeek(dayOfWeek);
  if (!errors.dayOfWeek) updateCronDuration(1);
}} placeholder="* / , - 1-7" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}





<h3 class="font-semibold">Stop:</h3>

<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute2 ? 'border-2 border-red-500' : ''}" bind:value={minute2} on:input={() => {
    errors.minute2 = !validators.minute(minute2);
    if (!errors.minute2) updateCronDuration(2);
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour2 ? 'border-2 border-red-500' : ''}" bind:value={hour2} on:input={() => {
  errors.hour2 = !validators.hour(hour2);
  if (!errors.hour2) updateCronDuration(2);
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth2} on:input={() => {
  errors.dayOfMonth2 = !validators.dayOfMonth(dayOfMonth2);
  if (!errors.dayOfMonth2) updateCronDuration(2);
}} placeholder="* / , - 1-31" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'monthly' && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month2 ? 'border-2 border-red-500' : ''}" bind:value={month2} on:input={() => {
  errors.month2 = !validators.month(month2);
  if (!errors.month2) updateCronDuration(2);
}} placeholder="* / , - 1-12" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek2 ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek2} on:input={() => {
  errors.dayOfWeek2 = !validators.dayOfWeek(dayOfWeek2);
  if (!errors.dayOfWeek2) updateCronDuration(2);
}} placeholder="* / , - 1-7" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek2}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}

</div>
</div>



  </td>


</tr>








<p class="pt-5"></p>


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
    <td>
<Button color="dark" pill={true} on:click={modify_accumulated_tag}>Modify</Button></td>


</table>
</form>
</Modal>



</Table>


  </AccordionItem>




  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SCADA Tag
    </span>


<table>

<tr><td class="w-20"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">TCP Slave Listen Port</p></td><td class="pl-5 pt-5">
       <div class="flex gap-4">
{#if validSlavePort}
      <input type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTagTCPListenPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTagTCPListenPort} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 block w-40 p-2.5 text-sm rounded-lg">

{/if}

{#if !validSlavePort}

 <Helper class="pl-1 mt-4" color="red">
    <span class="font-medium">Invalid Port Number. It could not be the same as TCP Local Slave</span>
  </Helper>

{/if}
  </div>

      </td>

</tr>

</table>


<p class="pt-10"></p>


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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>      
    <TableHeadCell class="w-18">Scada Address</TableHeadCell>    
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag as ScadaTag, index}
{#if ScadaTag.delete}


<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteScadaTag(index)}>
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 strikeout disabled:cursor-not-allowed" type="checkbox" bind:checked={ScadaTag.enable} disabled>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{ScadaTag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{#if ScadaTag.pointType==0}Coil{:else if ScadaTag.pointType==1}Discrete Input{:else if ScadaTag.pointType==2}Input Registers{:else if ScadaTag.pointType==3}Holding Registers{/if}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{ScadaTag.address}</td>

</tr>


{:else}

 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyScadaTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
 <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteScadaTag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


    <TableBodyCell><input class="mb-1" type="checkbox" bind:checked={ScadaTag.enable}></TableBodyCell>


      <TableBodyCell>{index+1}</TableBodyCell>
      <TableBodyCell>{ScadaTag.tagName}</TableBodyCell>
      <TableBodyCell>{#if ScadaTag.pointType==0}Coil{:else if ScadaTag.pointType==1}Discrete Input{:else if ScadaTag.pointType==2}Input Registers{:else if ScadaTag.pointType==3}Holding Registers{/if}</TableBodyCell> 
      <TableBodyCell>{ScadaTag.address}</TableBodyCell>


 </TableBodyRow>

{/if}
{/each}
{/if}

 <TableBodyRow>

 {#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={()=>new_scada_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
{:else}

 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>
{/if}


      <TableBodyCell class="!p-0 w-10">



       </TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveScadaTag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>


<Modal bind:open={new_scada_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_scada_tag[new_scada_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>NoAddScada(new_scada_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_scada_tag[new_scada_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>

    <td></td>
        <td></td>

        <td></td>
        <td></td>

  </tr>




<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={new_scada_tag[new_scada_tag_index].pointType} value={0} on:change={()=>NewPointTypeChange(new_scada_tag_index,1)}>Coil</Radio>
  <Radio bind:group={new_scada_tag[new_scada_tag_index].pointType} value={1} on:change={()=>NewPointTypeChange(new_scada_tag_index,10001)}>Discrete Input</Radio>
  <Radio bind:group={new_scada_tag[new_scada_tag_index].pointType} value={2} on:change={()=>NewPointTypeChange(new_scada_tag_index,30001)}>Input Register</Radio>
  <Radio bind:group={new_scada_tag[new_scada_tag_index].pointType} value={3} on:change={()=>NewPointTypeChange(new_scada_tag_index,40001)}>Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pt-4 text-lg font-light text-right">Scada Address</p></td><td class="pl-5 pt-5"><input type="number" bind:value={new_scada_tag[new_scada_tag_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
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

 <div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(152px, 338px);"> 

 <ul class="py-1 w-44">


{#if new_scada_tag[new_scada_tag_index].pointType==0}
 
{#each new_scada_tag[new_scada_tag_index].modbusTCPSlaveCoilTag as Slave, index}
{#if Slave.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 

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

{/if}
{/each}


{#each new_scada_tag[new_scada_tag_index].modbusTCPMasterCoilTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveCoilTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each new_scada_tag[new_scada_tag_index].modbusRTUMasterCoilTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveCoilTag.length*45+TCPMasterCoilTag.length*45+index*45}px);"> 




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
{/if} 
{/each}


{:else if new_scada_tag[new_scada_tag_index].pointType==1}
 
{#each new_scada_tag[new_scada_tag_index].modbusTCPSlaveDiscreteInputTag as Slave, index}
{#if Slave.tag.length>0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 
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
{/if}

{/each}

{#each new_scada_tag[new_scada_tag_index].modbusTCPMasterDiscreteInputTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveDiscreteInputTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each new_scada_tag[new_scada_tag_index].modbusRTUMasterDiscreteInputTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPMasterDiscreteInputTag.length*45*+TCPSlaveDiscreteInputTag.length*45+index*45}px);"> 




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

{/if}

{/each}



{:else if new_scada_tag[new_scada_tag_index].pointType==2}
 
{#each new_scada_tag[new_scada_tag_index].modbusTCPSlaveInputRegisterTag as Slave, index}
{#if Slave.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 
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

 {/if}
{/each}

{#each new_scada_tag[new_scada_tag_index].modbusTCPMasterInputRegisterTag as Master, index}
{#if Master.tag.length >0}

<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveInputRegisterTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each new_scada_tag[new_scada_tag_index].modbusRTUMasterInputRegisterTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPMasterInputRegisterTag.length*45+TCPSlaveInputRegisterTag.length*45+index*45}px);"> 




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

 {/if}
{/each}



{:else if new_scada_tag[new_scada_tag_index].pointType==3}
 
{#each new_scada_tag[new_scada_tag_index].modbusTCPSlaveHoldingRegisterTag as Slave, index}
{#if Slave.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 
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

{/if}

{/each}

{#each new_scada_tag[new_scada_tag_index].modbusTCPMasterHoldingRegisterTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveHoldingRegisterTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each new_scada_tag[new_scada_tag_index].modbusRTUMasterHoldingRegisterTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPMasterHoldingRegisterTag.length*45+TCPSlaveHoldingRegisterTag.length*45+index*45}px);"> 




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
 {/if}
{/each}




{/if}

 </ul> 
 
 </div>

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
    <td ></td>
    <td ></td>
    <td ></td>
    <td class="pl-40"></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={()=>add_new_scada_tag(new_scada_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>



<Modal bind:open={modify_scada_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyScada}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>



<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType} value={0} on:change={()=>ModifyPointTypeChange(modify_scada_tag_index,1)}>Coil</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType} value={1} on:change={()=>ModifyPointTypeChange(modify_scada_tag_index,10001)}>Discrete Input</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType} value={2} on:change={()=>ModifyPointTypeChange(modify_scada_tag_index,30001)}>Input Register</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType} value={3} on:change={()=>ModifyPointTypeChange(modify_scada_tag_index,40001)}>Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pt-4 text-lg font-light text-right">Scada Address</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
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

 <div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(152px, 338px);"> 

 <ul class="py-1 w-44">


{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType==0}
 
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveCoilTag as Slave, index}
{#if Slave.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 

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

{/if}
{/each}


{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterCoilTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveCoilTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterCoilTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveCoilTag.length*45+TCPMasterCoilTag.length*45+index*45}px);"> 




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
{/if} 
{/each}


{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType==1}
 
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveDiscreteInputTag as Slave, index}
{#if Slave.tag.length>0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 
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
{/if}

{/each}

{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterDiscreteInputTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveDiscreteInputTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterDiscreteInputTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPMasterDiscreteInputTag.length*45*+TCPSlaveDiscreteInputTag.length*45+index*45}px);"> 




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

{/if}

{/each}



{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType==2}
 
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveInputRegisterTag as Slave, index}
{#if Slave.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 
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

 {/if}
{/each}

{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterInputRegisterTag as Master, index}
{#if Master.tag.length >0}

<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveInputRegisterTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterInputRegisterTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPMasterInputRegisterTag.length*45+TCPSlaveInputRegisterTag.length*45+index*45}px);"> 




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

 {/if}
{/each}



{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].pointType==3}
 
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPSlaveHoldingRegisterTag as Slave, index}
{#if Slave.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(0, index)}>{Slave.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, 0px);"> 
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

{/if}

{/each}

{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusTCPMasterHoldingRegisterTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(1, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPSlaveHoldingRegisterTag.length*45+index*45}px);"> 

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

 {/if}
{/each}



{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].modbusRTUMasterHoldingRegisterTag as Master, index}
{#if Master.tag.length >0}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {TCPMasterHoldingRegisterTag.length*45+TCPSlaveHoldingRegisterTag.length*45+index*45}px);"> 




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
 {/if}
{/each}




{/if}

 </ul> 
 
 </div>

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
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={modify_scada_tag}>Modify</Button></td>
</tr>

</table>
</form>
</Modal>

</Table>


<p class="pt-10"></p>







<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="w-18">Modbus Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>    
    <TableHeadCell >Mapping Scada Address</TableHeadCell> 
 

  </TableHead>

  <TableBody>


 {#each parsed as item}

 <TableBodyRow>
    <TableBodyCell>{item.tag_name}</TableBodyCell>
      <TableBodyCell>{#if item.address >= 40001}Holding Register{:else if item.address >= 30001}Input Register{:else if item.address >=10001}Discrete Input{:else if item.address>=1}Coil{/if}</TableBodyCell>
        <TableBodyCell>{item.address}</TableBodyCell>
 </TableBodyRow>
{/each}


  </TableBody>
  </Table>



  </AccordionItem>

<AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Schedule Tag
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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Schedule Time</TableHeadCell>    
    <TableHeadCell class="w-36">Action</TableHeadCell> 
 

  </TableHead>

  <TableBody>


{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag as ScheduleTag, index}
{#if ScheduleTag.delete}


<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteScheduleTag(index)}>
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 strikeout disabled:cursor-not-allowed" type="checkbox" bind:checked={ScheduleTag.enable} disabled>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{ScheduleTag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{#if ScheduleTag.preset == 'daily'}
      {ScheduleTag.cronString.split(' ')[1].padStart(2, '0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2, '0')} {:else if ScheduleTag.preset=='weekly'}
      {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][ScheduleTag.cronString.split(' ')[4] % 7]} {ScheduleTag.cronString.split(' ')[1].padStart(2, '0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2, '0')}
{:else if ScheduleTag.preset == 'monthly'}
 Day {ScheduleTag.cronString.split(' ')[2]} 
  {ScheduleTag.cronString.split(' ')[1].padStart(2,'0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2,'0')}
{:else if ScheduleTag.preset == 'yearly'}
  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][ScheduleTag.cronString.split(' ')[3] - 1]}
  {' '}
  {ScheduleTag.cronString.split(' ')[2]}
  {' '}
  {ScheduleTag.cronString.split(' ')[1].padStart(2,'0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2,'0')}

      {/if} ({ScheduleTag.preset})</td>


{#if ScheduleTag.actionType==0}
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Write {ScheduleTag.actionTargetTag} {#if ScheduleTag.modbusTagType==2} ({TCPSlaveTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==0} ({TCPMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==1} ({RTUMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){/if} with {ScheduleTag.actionTargetTagValue}</td>
{:else if ScheduleTag.actionType==1}
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">Time Sync ({#if ScheduleTag.actionTimeSyncFormatType==0}Epoch Seconds{:else if ScheduleTag.actionTimeSyncFormatType==1}Schneider{:else if ScheduleTag.actionTimeSyncFormatType==2}User Defined{/if}) with {ScheduleTag.actionTargetTag} {#if ScheduleTag.modbusTagType==2} ({TCPSlaveTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==0} ({TCPMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==1} ({RTUMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){/if}</td>
{:else}
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout"></td>
{/if}

</tr>


{:else}

 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyScheduleTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
 <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteScheduleTag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


    <TableBodyCell><input class="mb-1" type="checkbox" bind:checked={ScheduleTag.enable}></TableBodyCell>


      <TableBodyCell>{index+1}</TableBodyCell>
      <TableBodyCell>{ScheduleTag.tagName}</TableBodyCell>
      <TableBodyCell>{#if ScheduleTag.preset == 'daily'}
      {ScheduleTag.cronString.split(' ')[1].padStart(2, '0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2, '0')} {:else if ScheduleTag.preset=='weekly'}
      {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][ScheduleTag.cronString.split(' ')[4] % 7]} {ScheduleTag.cronString.split(' ')[1].padStart(2, '0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2, '0')}
{:else if ScheduleTag.preset == 'monthly'}
 Day {ScheduleTag.cronString.split(' ')[2]} 
  {ScheduleTag.cronString.split(' ')[1].padStart(2,'0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2,'0')}
{:else if ScheduleTag.preset == 'yearly'}
  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][ScheduleTag.cronString.split(' ')[3] - 1]}
  {' '}
  {ScheduleTag.cronString.split(' ')[2]}
  {' '}
  {ScheduleTag.cronString.split(' ')[1].padStart(2,'0')}:{ScheduleTag.cronString.split(' ')[0].padStart(2,'0')}

      {/if} ({ScheduleTag.preset})</TableBodyCell>
{#if ScheduleTag.actionType==0}
      <TableBodyCell>Write {ScheduleTag.actionTargetTag} {#if ScheduleTag.modbusTagType==2} ({TCPSlaveTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==0} ({TCPMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==1} ({RTUMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){/if} with {ScheduleTag.actionTargetTagValue}</TableBodyCell>
{:else if ScheduleTag.actionType==1}
      <TableBodyCell>Time Sync ({#if ScheduleTag.actionTimeSyncFormatType==0}Epoch Seconds{:else if ScheduleTag.actionTimeSyncFormatType==1}Schneider{:else if ScheduleTag.actionTimeSyncFormatType==2}User Defined{/if}) with {ScheduleTag.actionTargetTag} {#if ScheduleTag.modbusTagType==2} ({TCPSlaveTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==0} ({TCPMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){:else if ScheduleTag.modbusTagType==1} ({RTUMasterTag[ScheduleTag.modbusTagOwnerIndex].modbusProfile}){/if}</TableBodyCell>
{:else}
      <TableBodyCell></TableBodyCell>
{/if}




 </TableBodyRow>

{/if}
{/each}
{/if}



 <TableBodyRow>

 {#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={()=>new_schedule_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
{:else}

 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>
{/if}


      <TableBodyCell class="!p-0 w-10">



       </TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveScheduleTag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>


</Table>




<Modal bind:open={new_schedule_tag_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_schedule_tag[new_schedule_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddSchedule(new_schedule_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_schedule_tag[new_schedule_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<p class="mt-10"></p>
<tr>
      <td><p class="pl-20 pt-4 pr-4 text-lg font-light text-right">Scheduler</p></td>

 <td class="pl-5 pt-4" colspan="4" style="border:1px solid black;"><div class="flex gap-4">

<div>      
<h3 class="font-semibold">Presets</h3>
<div class="flex flex-wrap gap-3 mt-2 mb-6">
  <button
    type="button"
    on:click={() => applyPreset('daily')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_schedule_tag[new_schedule_tag_index].preset == 'daily'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Daily
  </button>

  <button
    type="button"
    on:click={() => applyPreset('weekly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_schedule_tag[new_schedule_tag_index].preset == 'weekly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Weekly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('monthly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_schedule_tag[new_schedule_tag_index].preset == 'monthly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Monthly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('yearly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {new_schedule_tag[new_schedule_tag_index].preset == 'yearly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Yearly
  </button>

</div>


<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute ? 'border-2 border-red-500' : ''}" bind:value={minute} on:input={() => {
    errors.minute = !validators.minute(minute);
    if (!errors.minute) updateCron();
  }} placeholder="* / , - 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour ? 'border-2 border-red-500' : ''}" bind:value={hour} on:input={() => {
  errors.hour = !validators.hour(hour);
  if (!errors.hour) updateCron();
}} placeholder="* / , - 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth} on:input={() => {
  errors.dayOfMonth = !validators.dayOfMonth(dayOfMonth);
  if (!errors.dayOfMonth) updateCron();
}} placeholder="* / , - 1-31" disabled={new_schedule_tag[new_schedule_tag_index].preset != 'monthly' && new_schedule_tag[new_schedule_tag_index].preset != 'yearly'}/>
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month ? 'border-2 border-red-500' : ''}" bind:value={month} on:input={() => {
  errors.month = !validators.month(month);
  if (!errors.month) updateCron();
}} placeholder="* / , - 1-12" disabled={new_schedule_tag[new_schedule_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek} on:input={() => {
  errors.dayOfWeek = !validators.dayOfWeek(dayOfWeek);
  if (!errors.dayOfWeek) updateCron();
}} placeholder="* / , - 1-7" disabled={new_schedule_tag[new_schedule_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , - and * allowed)
  </p>
{/if}

{#if errors.hour}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , - and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , - and * allowed)
  </p>
{/if}


{#if errors.month}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , - and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , - and * allowed)
  </p>
{/if}

</div>



  </td>
</tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action</p></td>

 <td class="pl-5 pt-4" colspan="4"><div class="flex gap-4">

  <Radio bind:group={new_schedule_tag[new_schedule_tag_index].actionType} value={0}>Write</Radio>
{#if new_schedule_tag[new_schedule_tag_index].actionType==0}



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_schedule_tag[new_schedule_tag_index].modbusTagOwner} on:change={()=>handleScheTargetModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_schedule_tag[new_schedule_tag_index].actionTargetTag} >

<option disabled="" value="">Choose ...</option>

{#if new_schedule_tag[new_schedule_tag_index].modbusTagOwner != "" && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex != -1}

{#if new_schedule_tag[new_schedule_tag_index].modbusTagType==2 && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_schedule_tag[new_schedule_tag_index].modbusTagType==0 && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_schedule_tag[new_schedule_tag_index].modbusTagType==1 && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


{:else}

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

{/if}

<p class="pt-4"> with </p>
<div class="relative"><input id="operand_value" class="block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="operand_value" placeholder=" " type="number" bind:value={new_schedule_tag[new_schedule_tag_index].actionTargetTagValue}> 
<label for="operand_value" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">operand_value</label>
</div>

 </div>
  </td>
  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">

  <Radio bind:group={new_schedule_tag[new_schedule_tag_index].actionType} value={1}>Time Sync</Radio>

{#if new_schedule_tag[new_schedule_tag_index].actionType==1}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-36" bind:value={new_schedule_tag[new_schedule_tag_index].actionTimeSyncFormatType}>
<option disabled="" value="none">Choose ...</option>

<option value={0}>Epoch Seconds</option>
<option value={1}>Schneider</option>

</select>

{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-36 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option disabled="" value="none">Choose ...</option>


</select>

{/if}


<p class="pt-4"> with </p>

{#if new_schedule_tag[new_schedule_tag_index].actionType==1}


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_schedule_tag[new_schedule_tag_index].modbusTagOwner} on:change={()=>handleScheTargetModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_schedule_tag[new_schedule_tag_index].actionTargetTag} >

<option disabled="" value="">Choose ...</option>

{#if new_schedule_tag[new_schedule_tag_index].modbusTagOwner != "" && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex != -1}

{#if new_schedule_tag[new_schedule_tag_index].modbusTagType==2 && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_schedule_tag[new_schedule_tag_index].modbusTagType==0 && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_schedule_tag[new_schedule_tag_index].modbusTagType==1 && new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[new_schedule_tag[new_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>



{:else}



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

{/if}

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
    <td>
<Button color="dark" pill={true} on:click={()=>AddScheduleTag(new_schedule_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>


<Modal bind:open={modify_schedule_tag_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>NoModifyScheduleTag(modify_schedule_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>


<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>



<p class="mt-10"></p>
<tr>
      <td><p class="pl-20 pt-4 pr-4 text-lg font-light text-right">Scheduler</p></td>

 <td class="pl-5 pt-4" colspan="4" style="border:1px solid black;"><div class="flex gap-4">

<div>      
<h3 class="font-semibold">Presets</h3>
<div class="flex flex-wrap gap-3 mt-2 mb-6">
  <button
    type="button"
    on:click={() => applyPreset('daily')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset == 'daily'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Daily
  </button>

  <button
    type="button"
    on:click={() => applyPreset('weekly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset == 'weekly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Weekly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('monthly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset == 'monthly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Monthly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('yearly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset == 'yearly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Yearly
  </button>

</div>


<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute ? 'border-2 border-red-500' : ''}" bind:value={minute} on:input={() => {
    errors.minute = !validators.minute(minute);
    if (!errors.minute) updateCron();
  }} placeholder="* 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour ? 'border-2 border-red-500' : ''}" bind:value={hour} on:input={() => {
  errors.hour = !validators.hour(hour);
  if (!errors.hour) updateCron();
}} placeholder="* / , 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth} on:input={() => {
  errors.dayOfMonth = !validators.dayOfMonth(dayOfMonth);
  if (!errors.dayOfMonth) updateCron();
}} placeholder="* / , 1-31" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset != 'monthly' && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dom" class="text-sm">Month</label>
<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.month ? 'border-2 border-red-500' : ''}" bind:value={month} on:input={() => {
  errors.month = !validators.month(month);
  if (!errors.month) updateCron();
}} placeholder="* / , 1-12" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset != 'yearly'} />
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>


<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek} on:input={() => {
  errors.dayOfWeek = !validators.dayOfWeek(dayOfWeek);
  if (!errors.dayOfWeek) updateCron();
}} placeholder="* / , 1-7" disabled={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].preset != 'weekly'}/>



</div>
</div>

{#if errors.minute}
  <p class="text-red-700 text-xs mt-1">
    Invalid Minute (0–59 / , and * allowed)
  </p>
{/if}

{#if errors.hour}
  <p class="text-red-700 text-xs mt-1">
    Invalid Hour (0–23 / , and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-31 / , and * allowed)
  </p>
{/if}


{#if errors.month}
  <p class="text-red-700 text-xs mt-1">
    Invalid Day (1-12 / , and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek}
  <p class="text-red-700 text-xs mt-1">
    Invalid Weekday (1-7 / , and * allowed)
  </p>
{/if}

</div>







  </td>
</tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action</p></td>

 <td class="pl-5 pt-4" colspan="4"><div class="flex gap-4">

  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType} value={0}>Write</Radio>
{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType==0}



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner} on:change={()=>handleScheTargetModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTag} >

<option disabled="" value="">Choose ...</option>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner != "" && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex != -1}

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType==2 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType==0 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType==1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


{:else}

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

{/if}

<p class="pt-4"> with </p>
<div class="relative"><input id="operand_value" class="block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="operand_value" placeholder=" " type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTagValue}> 
<label for="operand_value" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">operand_value</label>
</div>

 </div>
  </td>
  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">

  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType} value={1}>Time Sync</Radio>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType==1}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-36" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTimeSyncFormatType}>
<option disabled="" value="none">Choose ...</option>

<option value={0}>Epoch Seconds</option>
<option value={1}>Schneider</option>

</select>

{:else}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-36 disabled:cursor-not-allowed disabled:opacity-50" disabled>
<option disabled="" value="none">Choose ...</option>


</select>

{/if}


<p class="pt-4"> with </p>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionType==1}


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner} on:change={()=>handleScheTargetModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].actionTargetTag} >

<option disabled="" value="">Choose ...</option>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwner != "" && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex != -1}

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType==2 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType==0 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagType==1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scheduleTag[modify_schedule_tag_index].modbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>



{:else}



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48 h-10 disabled:cursor-not-allowed disabled:opacity-50" disabled></select>

{/if}

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
    <td>
<Button color="dark" pill={true} on:click={ModifyScheduleTag}>Modify</Button></td>


</table>

</form>
</Modal>



</AccordionItem>




  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Event Tag
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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Trigger Tag</TableHeadCell>    
    <TableHeadCell class="w-18">Trigger Condition</TableHeadCell>
    <TableHeadCell class="w-36">Action</TableHeadCell> 
 

  </TableHead>

<TableBody>



{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag as EventTag, index}
{#if EventTag.delete}


<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteEventTag(index)}>
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 strikeout disabled:cursor-not-allowed" type="checkbox" bind:checked={EventTag.enable} disabled>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">{EventTag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">{EventTag.triggerTag} {#if EventTag.triggerModbusTagType==2} ({TCPSlaveTag[EventTag.triggerModbusTagOwnerIndex].modbusProfile}){:else if EventTag.triggerModbusTagType==0} ({TCPMasterTag[EventTag.triggerModbusTagOwnerIndex].modbusProfile}){:else if EventTag.triggerModbusTagType==1} ({RTUMasterTag[EventTag.triggerModbusTagOwnerIndex].modbusProfile}){/if}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">
{#if EventTag.triggerConditionOperand==5}
>
{:else if EventTag.triggerConditionOperand==4}
{'<'}

{:else if EventTag.triggerConditionOperand==3}
>=

{:else if EventTag.triggerConditionOperand==2}
{'<'}=
{:else if EventTag.triggerConditionOperand==0}
=
{:else if EventTag.triggerConditionOperand==1}
!=
{/if}

      {EventTag.triggerConditionValue}
</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-36">
{#if EventTag.actionOperation==0}Write{/if} {EventTag.actionTarget} {#if EventTag.actionModbusTagType==2} ({TCPSlaveTag[EventTag.actionModbusTagOwnerIndex].modbusProfile}){:else if EventTag.actionModbusTagType==0} ({TCPMasterTag[EventTag.actionModbusTagOwnerIndex].modbusProfile}){:else if EventTag.actionModbusTagType==1} ({RTUMasterTag[EventTag.actionModbusTagOwnerIndex].modbusProfile}){/if} with {EventTag.actionOperationValue}

</td>
</tr>


{:else}

 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyEventTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
     <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteEventTag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


    <TableBodyCell><input class="mb-1" type="checkbox" bind:checked={EventTag.enable}></TableBodyCell>

      <TableBodyCell>{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{EventTag.tagName}</TableBodyCell>
      <TableBodyCell class="w-18">{EventTag.triggerTag} {#if EventTag.triggerModbusTagType==2} ({TCPSlaveTag[EventTag.triggerModbusTagOwnerIndex].modbusProfile}){:else if EventTag.triggerModbusTagType==0} ({TCPMasterTag[EventTag.triggerModbusTagOwnerIndex].modbusProfile}){:else if EventTag.triggerModbusTagType==1} ({RTUMasterTag[EventTag.triggerModbusTagOwnerIndex].modbusProfile}){/if}</TableBodyCell>
  <TableBodyCell class="w-18">
{#if EventTag.triggerConditionOperand==5}
>
{:else if EventTag.triggerConditionOperand==4}
{'<'}

{:else if EventTag.triggerConditionOperand==3}
>=

{:else if EventTag.triggerConditionOperand==2}
{'<'}=
{:else if EventTag.triggerConditionOperand==0}
=
{:else if EventTag.triggerConditionOperand==1}
!=
{/if}

      {EventTag.triggerConditionValue}</TableBodyCell>

      <TableBodyCell class="w-36">
{#if EventTag.actionOperation==0}Write{/if} {EventTag.actionTarget} {#if EventTag.actionModbusTagType==2} ({TCPSlaveTag[EventTag.actionModbusTagOwnerIndex].modbusProfile}){:else if EventTag.actionModbusTagType==0} ({TCPMasterTag[EventTag.actionModbusTagOwnerIndex].modbusProfile}){:else if EventTag.actionModbusTagType==1} ({RTUMasterTag[EventTag.actionModbusTagOwnerIndex].modbusProfile}){/if} with {EventTag.actionOperationValue}


      </TableBodyCell>
    

 </TableBodyRow>

{/if}
{/each}
{/if}


 <TableBodyRow>

 {#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={()=>new_event_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
{:else}

 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>
{/if}


      <TableBodyCell class="!p-0 w-10">



       </TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveEventTag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>



<Modal bind:open={new_event_tag_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_event_tag[new_event_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddEvent(new_event_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_event_tag[new_event_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Trigger Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<div class="flex gap-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_event_tag[new_event_tag_index].triggerModbusTagOwner} on:change={()=>handleEvtTriggerModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_event_tag[new_event_tag_index].triggerTag} >

<option disabled="" value="">Choose ...</option>

{#if new_event_tag[new_event_tag_index].triggerModbusTagOwner != "" && new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex != -1}

{#if new_event_tag[new_event_tag_index].triggerModbusTagType==2 && new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_event_tag[new_event_tag_index].triggerModbusTagType==0 && new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_event_tag[new_event_tag_index].triggerModbusTagType==1 && new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[new_event_tag[new_event_tag_index].triggerModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>

</div>



</td>
   <td></td>
    <td></td>

</tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Trigger Condition</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16" bind:value={new_event_tag[new_event_tag_index].triggerConditionOperand}>
<option disabled="" value="none">Choose Operator ...</option>
<option value={5}>></option>
<option value={4}>{'<'}</option>
<option value={3}>>=</option>
<option value={2}>{'<'}=</option>
<option value={1}>!=</option>
<option value={0}>=</option>

</select>


<div class="relative"><input id="compared_value" class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="operand_value" placeholder=" " type="number" bind:value={new_event_tag[new_event_tag_index].triggerConditionValue}> <label for="compared_value" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">compared_value</label></div>


  </div>
  </td>
  </tr>






<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">

  <Radio bind:group={new_event_tag[new_event_tag_index].actionOperation} value={0}>Write</Radio>


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_event_tag[new_event_tag_index].actionModbusTagOwner} on:change={()=>handleEvtActionModbusChange(0)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={new_event_tag[new_event_tag_index].actionTarget} >

<option disabled="" value="">Choose ...</option>

{#if new_event_tag[new_event_tag_index].actionModbusTagOwner != "" && new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex != -1}

{#if new_event_tag[new_event_tag_index].actionModbusTagType==2 && new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_event_tag[new_event_tag_index].actionModbusTagType==0 && new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if new_event_tag[new_event_tag_index].actionModbusTagType==1 && new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[new_event_tag[new_event_tag_index].actionModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>



<p class="pt-5"> with </p>

<div class="relative"><input id="operand_value" class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="operand_value" placeholder=" " type="number" bind:value={new_event_tag[new_event_tag_index].actionOperationValue}> <label for="operand_value" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">operand_value</label></div>


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
    <td>
<Button color="dark" pill={true} on:click={add_new_event_tag(new_event_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>


<Modal bind:open={modify_event_tag_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyEventTag}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Trigger Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">

<div class="flex gap-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner} on:change={()=>handleEvtTriggerModbusChange(1)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerTag} >

<option disabled="" value="">Choose ...</option>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwner != "" && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex != -1}

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType==2 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType==0 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagType==1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>

</div>



</td>
   <td></td>
    <td></td>

</tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Trigger Condition</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionOperand}>
<option disabled="" value="none">Choose Operator ...</option>
<option value={5}>></option>
<option value={4}>{'<'}</option>
<option value={3}>>=</option>
<option value={2}>{'<'}=</option>
<option value={1}>!=</option>
<option value={0}>=</option>

</select>
 

<div class="relative"><input id="compared_value" class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="operand_value" placeholder=" " type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionValue}> <label for="compared_value" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">compared_value</label></div>



  </div>
  </td>
  </tr>






<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">

  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation} value={0}>Write</Radio>


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner} on:change={()=>handleEvtActionModbusChange(1)}>
<option disabled="" value="">Choose ...</option>

{#each TCPSlaveTag as Slave, index}
<option value={"TS_" + index}>{Slave.modbusProfile}</option>
{/each}

{#each TCPMasterTag as TCPMaster, index}
<option value={"TM_" + index}>{TCPMaster.modbusProfile}</option>
{/each}

{#each RTUMasterTag as RTUMaster, index}
<option value={"RM_" + index}>{RTUMaster.modbusProfile}</option>
{/each}

</select>
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionTarget} >

<option disabled="" value="">Choose ...</option>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwner != "" && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex != -1}

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType==2 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex < TCPSlaveTag.length}
{#each TCPSlaveTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType==0 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex < TCPMasterTag.length}

{#each TCPMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagType==1 && changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex < RTUMasterTag.length}
{#each RTUMasterTag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionModbusTagOwnerIndex].tag as Tag, index}
<option value={Tag.tagName}>{Tag.tagName}</option>
{/each}

{/if}

{/if}

</select>


<p class="pt-5"> with </p>

<div class="relative"><input id="operand_value" class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="operand_value" placeholder=" " type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperationValue}> <label for="operand_value" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">operand_value</label></div>


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
    <td>
<Button color="dark" pill={true} on:click={modify_event_tag}>Modify</Button></td>


</table>
</form>
</Modal>

</Table>


  </AccordionItem>

{/if}


</Accordion>

</TabItem>
{#if data_tag_pro_flag==1}


 <TabItem title="UL Rule">


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
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>
    <TableHeadCell class="w-18">Sampling Condition</TableHeadCell>
    <TableHeadCell >Cloud Setting</TableHeadCell>
  </TableHead>

<TableBody>
{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule as ulRule, index}

{#if ulRule.delete}

  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteULRule(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={ulRule.enable} disabled>
      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">
{
  ulRule.modbusRTUMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},
{
  ulRule.modbusTCPMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},

......

</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">
{#if ulRule.samplingCondition==0}
per {ulRule.periodMS} ms
{/if}
</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">
{#each ulRule.cloud as Cloud, index}
{#if index!=0}/{/if} {Cloud.profile}({Cloud.topic[0].name})

{/each}
</td>

</tr>

{:else}

    <TableBodyRow>
 <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyULRule(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteULRule(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={ulRule.enable}>

</TableBodyCell>

<TableBodyCell class="w-10">{index+1}</TableBodyCell>




<TableBodyCell class="w-18">

{
  ulRule.modbusRTUMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},
{
  ulRule.modbusTCPMasterTag
    .flatMap(master =>
      master.tag
        .filter(t => t.enable)
        .map(t => `${t.tagName}(${master.modbusProfile})`)
    )
    .slice(0, 2)
    .join(", ")
},

......

</TableBodyCell>
<TableBodyCell class="w-18"> 
{#if ulRule.samplingCondition==0}
per {ulRule.periodMS} ms
{/if}
</TableBodyCell>

<TableBodyCell>
{#each ulRule.cloud as Cloud, index}
{#if index!=0}/{/if} {Cloud.profile}({Cloud.topic[0].name})

{/each}

</TableBodyCell>
    </TableBodyRow>

{/if}

{/each}
{/if}


  <TableBodyRow>

{#if getDataReady == 1}
{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length < 10}
 <TableBodyCell class="!p-4 w-10">
<button on:click={() => new_ul_rule_trigger(changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length)}>
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

    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveULRule}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>



<Modal bind:open={new_ul_rule_modal} autoclose={false} size="lg" class="w-full">

<StepIndicator {currentStep} {steps} glow />


<table bind:this={modalElement}>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type="checkbox" bind:checked={new_ul_rule[new_ul_rule_index].enable}></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Sampling Condition</p></td>
    <td class= "pl-4 pt-5" colspan="3">
<div class="flex gap-4">

  <Radio class="pb-1" bind:group={new_ul_rule[new_ul_rule_index].samplingCondition} value={0} >Period</Radio>

{#if new_ul_rule[new_ul_rule_index].samplingCondition==0}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500" bind:value={new_ul_rule[new_ul_rule_index].periodMS}> <p class="pt-2">ms</p>

{/if}



</div>    
    </td>
    <td></td>
    <td></td>

</tr>

<tr>
<td><p class="pl-4 pt-8 text-lg font-light text-right">Target Tag</p></td>
 
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


 
{#each new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag as Slave, index}
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

{#each new_ul_rule[new_ul_rule_index].modbusTCPMasterTag as Master, index}
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



{#each new_ul_rule[new_ul_rule_index].modbusRTUMasterTag as Master, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length*41+index*41+45}px);"> 




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



<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(3, -1)}>Calculation Tag<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {new_ul_rule[new_ul_rule_index].modbusRTUMasterTag.length*41+new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length*41+45}px);"> 




{#if calculation_tag_show}
<ul class="py-1 w-44">
{#each new_ul_rule[new_ul_rule_index].calculationTag as TagItem}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul> 
{/if}

</div>
</li> 



<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(4, -1)}>Accumulated Tag<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {new_ul_rule[new_ul_rule_index].modbusRTUMasterTag.length*41+new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length*41+86}px);"> 




{#if accumulated_tag_show}
<ul class="py-1 w-44">
{#each new_ul_rule[new_ul_rule_index].accumulatedTag as TagItem}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul> 
{/if}

</div>
</li> 


 </ul> 
 
 </div>



{/if}

 </td>


</tr>







<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"><Button color="dark" pill={true} on:click={()=>New_UL_Rule_Modal_Page2(0)}>Next</Button></td>


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
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_ul_rule[new_ul_rule_index].cloud[0].profile}>

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
{#if new_ul_rule[new_ul_rule_index].cloud[0].profile.startsWith("hub_") || new_ul_rule[new_ul_rule_index].cloud[0].profile.startsWith("dps_") || new_ul_rule[new_ul_rule_index].cloud[0].profile.startsWith("central_")}
  <Radio bind:group={new_ul_rule[new_ul_rule_index].cloud[0].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={new_ul_rule[new_ul_rule_index].cloud[0].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_ul_rule[new_ul_rule_index].cloud[0].topic[0].name}>
{/if}  
</div>

</td>


</tr>




<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if new_ul_rule[new_ul_rule_index].cloud[0].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTimeClick_UL(0)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag_UL(0,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each new_ul_rule[new_ul_rule_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus_UL(1,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag_UL(1,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each new_ul_rule[new_ul_rule_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus_UL(2,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>

{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag_UL(2,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


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



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={new_ul_rule[new_ul_rule_index].cloud[0].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if new_ul_rule[new_ul_rule_index].cloud[0].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if new_ul_rule[new_ul_rule_index].cloud[0].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={new_ul_rule[new_ul_rule_index].cloud[0].userDefineedData}></textarea>

{/if}


    </td>


</tr>




<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={New_UL_Rule_Modal_Page1}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>New_UL_Rule_Modal_Page3(0)}>Next</Button></td>


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
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_ul_rule[new_ul_rule_index].cloud[1].profile}>

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
{#if new_ul_rule[new_ul_rule_index].cloud[1].profile.startsWith("hub_") || new_ul_rule[new_ul_rule_index].cloud[1].profile.startsWith("dps_") || new_ul_rule[new_ul_rule_index].cloud[1].profile.startsWith("central_")}
  <Radio bind:group={new_ul_rule[new_ul_rule_index].cloud[1].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={new_ul_rule[new_ul_rule_index].cloud[1].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_ul_rule[new_ul_rule_index].cloud[1].topic[0].name}>
{/if}  
</div>

</td>


</tr>



<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if new_ul_rule[new_ul_rule_index].cloud[1].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>NewTimeClick_UL(1)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each new_ul_rule[new_ul_rule_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag_UL(0,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each new_ul_rule[new_ul_rule_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}



<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus_UL(1,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag_UL(1,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each new_ul_rule[new_ul_rule_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+new_ul_rule[new_ul_rule_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_MasterStatus_UL(2,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}


<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>New_clickTag_UL(2,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


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



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={new_ul_rule[new_ul_rule_index].cloud[1].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if new_ul_rule[new_ul_rule_index].cloud[1].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if new_ul_rule[new_ul_rule_index].cloud[1].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={new_ul_rule[new_ul_rule_index].cloud[1].userDefineedData}></textarea>

{/if}


    </td>


</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={()=>New_UL_Rule_Modal_Page2(0)}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>add_new_ul_rule(new_ul_rule_index)}>Add</Button></td>


    </tr>





{/if}    


</table>


</Modal>




<Modal bind:open={modify_ul_rule_modal} autoclose={false} size="lg" class="w-full">
<form action="#">
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>NoModifyULRule(modify_ul_rule_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<StepIndicator {currentStep} {steps} glow />

<p class="mt-6"></p>

<table bind:this={modalElement}>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type="checkbox" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].enable}></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Sampling Condition</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<div class="flex gap-4">

  <Radio class="pb-1" bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].samplingCondition} value={0} >Period</Radio>

{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].samplingCondition==0}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].periodMS}> <p class="pt-2">ms</p>

{/if}


</div>    
    </td>
    <td></td>
    <td></td>

</tr>

<tr>
<td><p class="pl-4 pt-8 text-lg font-light text-right">Target Tag</p></td>
 
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


 
{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag as Slave, index}
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

{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag as Master, index}
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



{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag as Master, index}
<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(2, index)}>{Master.modbusProfile}<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length*41+index*41+45}px);"> 




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



<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(3, -1)}>Calculation Tag<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag.length*41+changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length*41+45}px);"> 




{#if calculation_tag_show}
<ul class="py-1 w-44">
{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].calculationTag as TagItem}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul> 
{/if}

</div>
</li> 



<li >
 <button class="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center justify-between" on:mouseenter|preventDefault={()=>showTag(4, -1)}>Accumulated Tag<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg>
 </button>

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag.length*41+changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length*41+86}px);"> 




{#if accumulated_tag_show}
<ul class="py-1 w-44">
{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].accumulatedTag as TagItem}

  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
<label class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="checkbox" bind:checked={TagItem.enable} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">{TagItem.tagName}</label>

  </li>

{/each}
</ul> 
{/if}

</div>
</li> 


 </ul> 
 
 </div>



{/if}

 </td>


</tr>



<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"><Button color="dark" pill={true} on:click={()=>New_UL_Rule_Modal_Page2(1)}>Next</Button></td>


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
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].profile}>

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


{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].profile.startsWith("hub_") || changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].profile.startsWith("dps_") || changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].profile.startsWith("central_")}
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].topic[0].name}>
{/if}  



</div>

</td>


</tr>









<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTimeClick_UL(0)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag_UL(0,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>



{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus_UL(1,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag_UL(1,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus_UL(2,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag_UL(2,0,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>




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



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[0].userDefineedData}></textarea>

{/if}


    </td>


</tr>








<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={New_UL_Rule_Modal_Page1}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>New_UL_Rule_Modal_Page3(1)}>Next</Button></td>


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
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].profile}>

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


{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].profile.startsWith("hub_") || changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].profile.startsWith("dps_") || changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].profile.startsWith("central_")}
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].topic[0].name}>
{/if}  



</div>

</td>


</tr>









<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>ModifyTimeClick_UL(1)}><i style="padding: 0px 15px 0px 10px;"></i>$TIME$</button></li>

              <hr>
{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(0, index)}><i style="padding: 0px 15px 0px 10px;"></i>{Slave.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>



{#if tcp_slave_tag_show && target_index_for_show_tag == index}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, 30px);"> 

<ul class="py-1 w-44">

{#each Slave.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag_UL(0,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}



{/each}
</ul>  </div>
{/if}
{/each}


{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(1,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 
{#if tcp_master_tag_show && target_index_for_show_tag == index}

<ul class="py-1 w-44">


<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus_UL(1,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}
<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag_UL(1,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


{/if}

{/each}


</ul>  
{/if}
</div>
{/each}



{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

<button class="inline-flex ContextMenu" on:mouseenter|preventDefault={()=>showTag(2,index)}><i style="padding: 0px 15px 0px 10px;"></i>{Master.modbusProfile} <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 text-primary-700 ms-2 h-6 w-6 dark:text-white" role="img" aria-label="chevron right outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"></path></svg></button></li>





<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].modbusTCPMasterTag.length*46+index*46}px);"> 
{#if rtu_master_tag_show && target_index_for_show_tag == index}
<ul class="py-1 w-44">


<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_MasterStatus_UL(2,1,index)}><i style="padding: 0px 15px 0px 10px;"></i>${Master.modbusProfile}_STATUS$</button></li>

<hr>


{#each Master.tag as TagItem, index2}
{#if TagItem.enable}

<li style="display: block;list-style-type: none;width: 1fr;">
<button class="ContextMenu" on:click|preventDefault={()=>Modify_clickTag_UL(2,1,index,index2)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>


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



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloud[1].userDefineedData}></textarea>

{/if}


    </td>


</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={()=>New_UL_Rule_Modal_Page2(1)}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>modify_ul_rule(modify_ul_rule_index)}>Modify</Button></td>


    </tr>





{/if}    


</table>
</form>
</Modal>




  </Table>

</TabItem>

{/if}





 </Tabs>