<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator,MultiSelect, Dropdown, DropdownItem } from 'flowbite-svelte';

  import { writable } from 'svelte/store';
  import { DateInput } from 'date-picker-svelte'
  import './global.css';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    modbusConfig,
    ChangedModbusConfig,
    genericMQTTConfig,
    ChangedGenericMQTTConfig,
    datatagproConfig,
    ChangedDataTagProConfig,
    DataTagPro_ULRule_ConfigChangedLog,
    DataTagPro_TagRuleEvent_ConfigChangedLog,
    DataTagPro_TagRuleSCADA_ConfigChangedLog,
    DataTagPro_TagRuleDM_ConfigChangedLog,
    DataTagPro_TagRuleTOU_ConfigChangedLog,
    DataTagPro_TagRuleAccumulated_ConfigChangedLog,
    DataTagPro_TagRuleCalculation_ConfigChangedLog,
    DataTagPro_TagRuleModbus_ConfigChangedLog,
    DataTagPro_General_ConfigChangedLog
  } from "./configG.js"

  let start_time_object=null;
  let end_time_object =null;
  let getDataReady=0;

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
  let data_tag_pro_tag_modbus_changedValues = [];
  let data_tag_pro_tag_calculation_changedValues = [];
  let data_tag_pro_tag_accumulated_changedValues = [];  
  let data_tag_pro_tag_tou_changedValues = [];
  let data_tag_pro_tag_dm_changedValues = [];
  let data_tag_pro_tag_scada_changedValues = [];
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

  let modalElement;


  let group_test=0;
  let generic_mqtt_data="";
  let saved_changed_generic_mqtt_data ="";


  let CloudProfile=[];

  genericMQTTConfig.subscribe(val => {
      generic_mqtt_data = val;
  });

  ChangedGenericMQTTConfig.subscribe(val => {
      saved_changed_generic_mqtt_data = val;
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
  
  DataTagPro_TagRuleTOU_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_tou_changedValues = val;
  });

  DataTagPro_TagRuleAccumulated_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_accumulated_changedValues = val;
  });
  
  DataTagPro_TagRuleCalculation_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_calculation_changedValues = val;
  });

  DataTagPro_TagRuleModbus_ConfigChangedLog.subscribe(val => {
      data_tag_pro_tag_modbus_changedValues = val;
  });
  
  DataTagPro_General_ConfigChangedLog.subscribe(val => {
      data_tag_pro_general_changedValues = val;
  });



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
                    data_tag_pro_tag_modbus_changedValues=[...data_tag_pro_tag_modbus_changedValues, changedstr];
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
                    data_tag_pro_tag_tou_changedValues=[...data_tag_pro_tag_tou_changedValues, changedstr];          
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
              }                                   
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
                if (type == 0)
                {
                  data_tag_pro_tag_modbus_changedValues=[...data_tag_pro_tag_modbus_changedValues, changedstr];
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
                  data_tag_pro_tag_tou_changedValues=[...data_tag_pro_tag_tou_changedValues, changedstr];          
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
            data_tag_pro_tag_modbus_changedValues=[...data_tag_pro_tag_modbus_changedValues, changedstr];
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
            data_tag_pro_tag_tou_changedValues=[...data_tag_pro_tag_tou_changedValues, changedstr];          
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
        }
      }
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

  function saveTouTag()
  {
    console.log("save tou tag");
    if (data_tag_pro_tag_tou_changedValues.length != 0)
    {
      data_tag_pro_tag_tou_changedValues=[];
    }
    

    for (let i = 0; i < Math.min(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length, data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length); i++) 
    {

      compareObjects(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[i], data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[i],3,1,i+1,"touTag");
    }



    if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length > data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length)
    {
      let addedCount=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length-data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length;

      for (let k=data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length; k < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length;k++)
      {
        if (changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[k].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to TOU Tag List";
        data_tag_pro_tag_tou_changedValues=[...data_tag_pro_tag_tou_changedValues, changedstr];
      }
    }



    DataTagPro_TagRuleTOU_ConfigChangedLog.set(data_tag_pro_tag_tou_changedValues);

    let tempForDelete=[];
    for (let i = 0; i< changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length; i++)
    {
      if (!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[i]]
      }

    }



    saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag=JSON.parse(JSON.stringify(tempForDelete));
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag=JSON.parse(JSON.stringify(tempForDelete));


    ChangedDataTagProConfig.set(saved_changed_data_tag_pro_data);
    
    console.log(data_tag_pro_tag_tou_changedValues);
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

  let BackupTriggerCTag=
  {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  };


  function TriggerModifyCTag(index)
  {
    modify_calculation_tag_index=index;

    BackupTriggerCTag.enable=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].enable;
    BackupTriggerCTag.delete=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].delete;
    BackupTriggerCTag.tagName=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].tagName;
    BackupTriggerCTag.calculationFormula=changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula;

    modify_calculation_tag_modal=true;
  }

  function no_modify_calculation_tag()
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].enable=BackupTriggerCTag.enable;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].delete=BackupTriggerCTag.delete;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].tagName=BackupTriggerCTag.tagName;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula=BackupTriggerCTag.calculationFormula;

    modify_calculation_tag_modal=false;
  }

  function modify_calculation_tag()
  {
    modify_calculation_tag_modal=false;
  }

  let modify_accumulated_tag_modal=false;
  let modify_accumulated_tag_index;

  function TriggerModifyATag(index)
  {
    start_time_object= new Date(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].startTime);
    end_time_object= new Date(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].endTime);
    modify_accumulated_tag_index=index;
    modify_accumulated_tag_modal=true;

  }

  function no_modify_accumulated_tag()
  {
    modify_accumulated_tag_modal=false;
  }

  function modify_accumulated_tag()
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].startTime=formatDate(start_time_object);
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].endTime=formatDate(end_time_object);
    modify_accumulated_tag_modal=false;
  }

  let modify_tou_tag_modal=false;
  let modify_tou_tag_index;

  function TriggerModifyTouTag(index)
  {
    start_time_object= new Date(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[index].startTime);
    end_time_object= new Date(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[index].endTime);
    modify_tou_tag_index=index;
    modify_tou_tag_modal=true;

  }

  function no_modify_tou_tag()
  {
    modify_tou_tag_modal=false;
  }

  function modify_tou_tag()
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].startTime=formatDate(start_time_object);
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].endTime=formatDate(end_time_object);
    modify_tou_tag_modal=false;
  }


  let modify_DM_tag_modal=false;
  let modify_DM_tag_index;

  function TriggerModifyDMTag(index)
  {
    modify_DM_tag_index=index;
    modify_DM_tag_modal=true;
  }

  function NoModifyDM()
  {
    modify_DM_tag_modal=false;

  }


  function modify_DM_tag()
  {
    modify_DM_tag_modal=false;
  }


  let scada_target_tag=[];
  let modify_scada_tag_modal=false;
  let modify_scada_tag_index;

  function TriggerModifyScadaTag(index)
  {
    scada_target_tag=[];

    for (let i=0; i < saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter.length;i++)
    {
      scada_target_tag=[...scada_target_tag,false];
    }

    for (let j=0; j < changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[index].targetTag.length; j++)
    {
        scada_target_tag[changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[index].targetTag[j]]=true;
    } 

    

    modify_scada_tag_index=index;
    modify_scada_tag_modal=true;
  }

  function NoModifyScada()
  {
    modify_scada_tag_modal=false;

  }


  function modify_scada_tag()
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].targetTag=[];

    for(let i=0; i < saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter.length;i++)
    {
      if (scada_target_tag[i])
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].targetTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].targetTag, i];
      }

    }

    modify_scada_tag_modal=false;
  }

  let modify_event_tag_modal=false;
  let modify_event_tag_index;


  function TriggerModifyEventTag(index)
  {
    modify_event_tag_index=index;
    modify_event_tag_modal=true;
  }

  function NoModifyEventTag()
  {
    modify_event_tag_modal=false;

  }


  function modify_event_tag()
  {
    modify_event_tag_modal=false;
  }


  let MultiSelectedCloudProfile=[];
  let Cloud1Topic=[];
  let Cloud2Topic=[];


  let modify_ul_rule_modal=false;
  let modify_ul_rule_index;

  function TriggerModifyULRule(index)
  {
    MultiSelectedCloudProfile=[];
    for (let i=0; i<changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].cloudProfile.length; i++)
    {

      MultiSelectedCloudProfile=[...MultiSelectedCloudProfile,changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].cloudProfile[i].cloudTarget];

    }


    modify_ul_rule_index=index;
    modify_ul_rule_modal=true;
  }

  function NoModifyULRule()
  {
    modify_ul_rule_modal=false;
  }

  function modify_ul_rule()
  {

    for (let i=0; i<MultiSelectedCloudProfile.length; i++)
    {
      changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[i].cloudTarget=MultiSelectedCloudProfile[i];
    }
    modify_ul_rule_modal=false;  
  }


  let new_ul_rule_modal=false;
  let new_ul_rule_index;
  let new_ul_rule=[
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },       
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  },   
  {
    enable:false,
    delete:false,
    tagName:"",        
    dataPushInterval: 0,
    dataPushIntervalValue: 15,
    linkLostRetransmit: 0, 
    dataPriority: 0, 
    cloudProfile: [],
    contentFormat: 0,
    userDefineedData: ""
  }
  ];

  function NoAddULRule(index)
  {
    new_ul_rule_modal=false;
  }

  function RestoreDeleteULRule(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].delete=false;
  }

  function DeleteULRule(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_ulRule[index].delete=true;
  }


  function add_new_ul_rule(index)
  {
    for (let i=0; i<MultiSelectedCloudProfile.length; i++)
    {
      let cloudItem={
        cloudTarget:"", 
        cloudTopic:[]
      }
      cloudItem.cloudTarget=MultiSelectedCloudProfile[i];
      if (i==0)
      {
        cloudItem.cloudTopic=Cloud1Topic;
      }
      else if (i==1)
      {
        cloudItem.cloudTopic=Cloud2Topic;
      }

      new_ul_rule[index].cloudProfile=[...new_ul_rule[index].cloudProfile, cloudItem];
    }

    changed_data_tag_pro_data.config.service_dataTagPro_ulRule=[...changed_data_tag_pro_data.config.service_dataTagPro_ulRule,new_ul_rule[index]];
    
    new_ul_rule_modal=false;
  }


  function new_ul_rule_trigger(index)
  {
    new_ul_rule[index].enable=true;
    new_ul_rule[index].delete=false;
    new_ul_rule[index].tagName="";
    new_ul_rule[index].dataPushInterval=0;
    new_ul_rule[index].dataPushIntervalValue=15;
    new_ul_rule[index].linkLostRetransmit=0;
    new_ul_rule[index].dataPriority=0;
    new_ul_rule[index].cloudProfile=[];
    new_ul_rule[index].contentFormat=0;
    new_ul_rule[index].userDefineedData="";
    MultiSelectedCloudProfile=[];
    Cloud1Topic=["","",""];
    Cloud2Topic=["","",""];
    new_ul_rule_index=index;
    new_ul_rule_modal=true;

  }




  let new_event_tag_modal=false;
  let new_event_tag_index;

  let new_event_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },  
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    triggerTag:"",
    triggerConditionOperand:0,
    triggerConditionValue:1,
    pollingRateS:1,
    actionOperation:0,
    actionOperationValue:1,
    actionTarget:""
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


  function new_event_tag_trigger(index)
  {
    new_event_tag[index].enable=true;
    new_event_tag[index].delete=false;
    new_event_tag[index].tagName="";
    new_event_tag[index].triggerTag="";
    new_event_tag[index].triggerConditionOperand=0;
    new_event_tag[index].triggerConditionValue=1;
    new_event_tag[index].pollingRateS=1;
    new_event_tag[index].actionOperation=0;
    new_event_tag[index].actionOperationValue=1;
    new_event_tag[index].actionTarget="";


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
    publishEnable:false,
    publishTopic:""
  }              

  ];


  function NoAddC2D(index)
  {
    new_c2d_tag_modal=false;
  }


  function new_c2d_tag_trigger(index)
  {

    new_c2d_tag[index].enable=true;
    new_c2d_tag[index].delete=false;
    new_c2d_tag[index].tagName="";
    new_c2d_tag[index].cloudProfile="";
    new_c2d_tag[index].subscribeTopic="";
    new_c2d_tag[index].targetTag="";
    new_c2d_tag[index].publishEnable=false;
    new_c2d_tag[index].publishTopic="";    
    new_c2d_tag_index=index;
    new_c2d_tag_modal=true;

  }



  let new_scada_tag_modal=false;
  let new_scada_tag_index;

  let new_scada_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:[]
  }                

  ];


  function NoAddScada(index)
  {
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

    for(let i=0; i < saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter.length;i++)
    {
      if (scada_target_tag[i])
      {
        new_scada_tag[index].targetTag=[...new_scada_tag[index].targetTag, i];
      }

    }

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag,new_scada_tag[index]];
    new_scada_tag_modal=false;
  }





  function new_scada_tag_trigger(index)
  {
    new_scada_tag[index].enable=true;
    new_scada_tag[index].delete=false;
    new_scada_tag[index].tagName="";
    new_scada_tag[index].targetTag=[];

    new_scada_tag_index=index;
    new_scada_tag_modal=true;

    scada_target_tag=[];
    for(let i=0; i < saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter.length;i++)
    {
     scada_target_tag=[...scada_target_tag, false];
    }

  }


  let new_DM_tag_modal=false;
  let new_DM_tag_index;

  let new_DM_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
    targetTag:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    cloudProfile:"",
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
    new_DM_tag[index].cloudProfile="";
    new_DM_tag_index=index;
    new_DM_tag_modal=true;

  }

  let new_tou_tag_modal=false;
  let new_tou_tag_index;

  let new_tou_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:"",
    rate:1
  }
  ];

  function new_tou_tag_trigger(index)
  {
    new_tou_tag[index].enable=true;
    new_tou_tag[index].delete=false;
    new_tou_tag[index].tagName="";
    new_tou_tag[index].targetTag="";
    new_tou_tag[index].startTime="2024-01-01 00:00:00";
    new_tou_tag[index].endTime="2024-01-01 00:00:00";
    new_tou_tag[index].rate=1;

    start_time_object= new Date(new_tou_tag[index].startTime);
    end_time_object= new Date(new_tou_tag[index].endTime);

    new_tou_tag_index=index;
    new_tou_tag_modal=true;


  }


  function NoAddTOU(index)
  {
    new_tou_tag_modal=false;
  }


  function add_new_tou_tag(index)
  {
    new_tou_tag[index].startTime=formatDate(start_time_object);
    new_tou_tag[index].endTime=formatDate(end_time_object);

    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag,new_tou_tag[index]];

    new_tou_tag_modal=false;
  }


  function RestoreDeleteTOUtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[index].delete=false;
  }

  function DeleteTOUtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[index].delete=true;
  }


  let new_accumulated_tag_modal=false;
  let new_accumulated_tag_index;

  let new_accumulated_tag=[
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
  {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    targetTag:"",
    startTime:"",
    endTime:""
  }
  ];

  function new_accumulated_tag_trigger(index)
  {
    new_accumulated_tag[index].enable=true;
    new_accumulated_tag[index].delete=false;
    new_accumulated_tag[index].tagName="";
    new_accumulated_tag[index].targetTag="";
    new_accumulated_tag[index].startTime="00:00";
    new_accumulated_tag[index].endTime="00:00";

    start_time_object= new Date(new_accumulated_tag[index].startTime);
    end_time_object= new Date(new_accumulated_tag[index].endTime);

    new_accumulated_tag_index=index;
    new_accumulated_tag_modal=true;


  }


  function NoAddAccumulated(index)
  {
    new_accumulated_tag_modal=false;
  }


  function add_new_accumulated_tag(index)
  {
    new_accumulated_tag[index].startTime=formatDate(start_time_object);
    new_accumulated_tag[index].endTime=formatDate(end_time_object);
    new_accumulated_tag_modal=false;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag,new_accumulated_tag[index]];
  }


  function RestoreDeleteAtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].delete=false;
  }

  function DeleteAtag(index)
  {
      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[index].delete=true;
  }


  let new_calculation_tag_modal=false;
  let new_calculation_tag_index;

  let new_calculation_tag=[
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  },
    {
    enable:false,
    delete:false,
    tagName:"",
    calculationFormula:""
  }

  ];


  function new_calculation_tag_trigger(index)
  {
    new_calculation_tag[index].enable=true;
    new_calculation_tag[index].delete=false;
    new_calculation_tag[index].tagName="";   
    new_calculation_tag[index].calculationFormula="return "


    new_calculation_tag_index=index;
    new_calculation_tag_modal=true;    
  }


  function modify_calculation_tag_fomula(index, type)
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



  function new_calculation_tag_fomula(index, type)
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
      new_calculation_tag_modal=false;
  }

  function add_new_calculation_tag(index)
  {
    console.log("add new calculation_tag");
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag,new_calculation_tag[index]];
    new_calculation_tag_modal=false;
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

    }
  }

  const NPbtn1=() =>
  {
    console.log("NPbtn1");
    new_ul_rule[new_ul_rule_index].userDefineedData+="$TIME$";
  }


  const NPbtn2=() =>
  {
    new_ul_rule[new_ul_rule_index].userDefineedData+="$ARRAY$";
  }

  const NPbtn3=() =>
  {
    new_ul_rule[new_ul_rule_index].userDefineedData+="$NAME_RAWREQUEST$";
  }

  const NPbtn4=() =>
  {
    new_ul_rule[new_ul_rule_index].userDefineedData+="$NAME_RAWREPLY$";
  }



    function AddTagName(triggerSource, Tagtype, tagIndex)
    {
      console.log("add tag to fomula");
      console.log("AddTagName==", triggerSource, Tagtype, tagIndex);
      if (Tagtype == 0)
      {
        //ctag
        console.log("calculation Tag");
        if (triggerSource == 0)
        {//new
          console.log("new");
          new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";
          new_calculation_tag[new_calculation_tag_index].calculationFormula+=`${saved_changed_modbus_data.config.fieldManagement_modbus_tag[tagIndex].tagName}`;
          new_calculation_tag[new_calculation_tag_index].calculationFormula+="$";
        }
        else if(triggerSource == 1)
        {
          console.log("modify");
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+=`${saved_changed_modbus_data.config.fieldManagement_modbus_tag[tagIndex].tagName}`;
          changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula+="$";
        }

      }

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

      if (data_tag_pro_tag_calculation_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag));
      }

      if (data_tag_pro_tag_accumulated_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag));
      }

      if (data_tag_pro_tag_tou_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.touTag));
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

      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }

      getDataReady=1;
    }


  });

</script>

 <Tabs style="underline">
<TabItem open title="General">

<table>

    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">Data Tag Pro</p></td>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveGeneral} ><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

</TabItem>
   
<TabItem title="Tag Rule">
<Accordion>
 
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
<input class="mb-1 strikeout" type="checkbox" bind:checked={Ctag.enable}>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Ctag.tagName}</td>


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


<Modal bind:open={new_calculation_tag_modal}  size="lg" class="w-full" permanent={true}>
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
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_calculation_tag[new_calculation_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>





<tr>
      <td class="pt-2"><div><p class="pl-10 pt-1 mb-4 text-lg font-light text-right">Formula</p>


  <ul style="list-style-type:none;" class="py-1">
<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,4)}>Max()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,5)}>Min()</Button>
</li>

<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,6)}>Avg()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,7)}>Abs()</Button>

</li>

<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,8)}>Add()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,9)}>Sub()</Button>
</li>

<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,10)}>Mul()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,11)}>Div()</Button>

</li>
<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,12)}>Reminder()</Button>

</li>

</ul>
  </div>


      </td>
      <td class="pl-5 pt-2" colspan="10">

{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 300px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
{#if saved_changed_modbus_data!=""}

        {#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>AddTagName(0,0,index)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>
        {/each}
{/if}
        </ul>
    </div>
</nav>
{/if}

<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={new_calculation_tag[new_calculation_tag_index].calculationFormula} on:contextmenu|preventDefault={rightClickContextMenu} 
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
    <td></td>
    <td></td>
    <td >
<Button color="dark" pill={true} on:click={()=>add_new_calculation_tag(new_calculation_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>



<Modal bind:open={modify_calculation_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={no_modify_calculation_tag(modify_calculation_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table bind:this={modalElement}>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>





<tr>
      <td class="pt-2"><div><p class="pl-10 pt-1 mb-4 text-lg font-light text-right">Formula</p>


  <ul style="list-style-type:none;" class="py-1">
<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,4)}>Max()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,5)}>Min()</Button>
</li>

<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,6)}>Avg()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,7)}>Abs()</Button>

</li>

<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,8)}>Add()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,9)}>Sub()</Button>
</li>

<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,10)}>Mul()</Button>
    <Button class="pl-2" size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,11)}>Div()</Button>

</li>
<li class="pt-2 text-right">

    <Button size="xs" on:click={new_calculation_tag_fomula(new_calculation_tag_index,12)}>Reminder()</Button>

</li>

</ul>
  </div>


      </td>
      <td class="pl-5 pt-2" colspan="5">

{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 300px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
{#if saved_changed_modbus_data!=""}

        {#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
              <li style="display: block;list-style-type: none;width: 1fr;">
                    <button class="ContextMenu" on:click|preventDefault={()=>AddTagName(1,0,TagItem.tagName)}><i style="padding: 0px 15px 0px 10px;"></i>${TagItem.tagName}$</button></li>
        {/each}
{/if}
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
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={modify_calculation_tag(modify_calculation_tag_index)}>Modify</Button></td>


</table>
</form>
</Modal>




</Table>



  </AccordionItem>

<AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud To Device Tag
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
    <TableHeadCell>Cloud Profile</TableHeadCell>    
    <TableHeadCell>Subscribe Topic</TableHeadCell>
    <TableHeadCell>Target Tag</TableHeadCell> 
    <TableHeadCell>Publish Topic For Acknowledge</TableHeadCell>


  </TableHead>

<TableBody>


  <TableBodyRow>
{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={() =>new_c2d_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.cloud2DeviceTag.length)}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
 {/if}
  </TableBodyRow>

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
<td><p class="pl-4 pt-4 text-lg font-light text-right">Target Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_c2d_tag[new_c2d_tag_index].targetTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>




<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Publish Topic For Acknowledge</p>

  </td>

    <td class="pl-4 pt-5" colspan="5">
    <div class="flex gap-2">

<Toggle class="p-2.5 mt-2 mb-4" bind:checked={new_c2d_tag[new_c2d_tag_index].publishEnable}></Toggle>

{#if new_c2d_tag[new_c2d_tag_index].publishEnable}



<div class="relative"><input  class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3"  placeholder=" " type="text" bind:value={new_c2d_tag[new_c2d_tag_index].publishTopic}> <label for="operand_value" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">publish topic</label></div>



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
<Button color="dark" pill={true} >Add</Button></td>


</table>
</form>
</Modal>



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
    <TableHeadCell >Start Time</TableHeadCell>
    <TableHeadCell >End Time</TableHeadCell> 
  

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
<input class="mb-1 strikeout" type="checkbox" bind:checked={Atag.enable}>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Atag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Atag.targetTag}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Atag.startTime}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{Atag.endTime}</td>




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
      <TableBodyCell >{Atag.targetTag}</TableBodyCell>

      <TableBodyCell >{Atag.startTime}</TableBodyCell>
      <TableBodyCell >{Atag.endTime}</TableBodyCell>

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

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddAccumulated(new_accumulated_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_accumulated_tag[new_accumulated_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>



<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Target Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_accumulated_tag[new_accumulated_tag_index].targetTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>



<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Start Time</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

      </div>

      </td>
  </tr>

<p class="pt-5"></p>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">End Time</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

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

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>



<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Target Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].targetTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Start Time</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

      </div>

      </td>
  </tr>

<p class="pt-5"></p>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">End Time</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

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
    TOU Tag
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
    <TableHeadCell >Start Time</TableHeadCell>
    <TableHeadCell >End Time</TableHeadCell> 
    <TableHeadCell >Rate</TableHeadCell> 

  </TableHead>

<TableBody>

{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag as TOUtag, index}
{#if TOUtag.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteTOUtag(index)}>
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
<input class="mb-1 strikeout" type="checkbox" bind:checked={TOUtag.enable}>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TOUtag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TOUtag.targetTag}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TOUtag.startTime}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TOUtag.endTime}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{TOUtag.rate}</td>




</tr>

{:else}
 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyTouTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

 <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteTOUtag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

    <TableBodyCell ><input class="mb-1" type="checkbox" bind:checked={TOUtag.enable}></TableBodyCell>


      <TableBodyCell >{index+1}</TableBodyCell>
      <TableBodyCell >{TOUtag.tagName}</TableBodyCell>
      <TableBodyCell >{TOUtag.targetTag}</TableBodyCell>
      <TableBodyCell >{TOUtag.startTime}</TableBodyCell>
      <TableBodyCell >{TOUtag.endTime}</TableBodyCell>
      <TableBodyCell >{TOUtag.rate}</TableBodyCell>
 </TableBodyRow>

{/if}
{/each}
{/if}

 <TableBodyRow>

 {#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length < 10}

 <TableBodyCell class="!p-4 w-10">


<button on:click={()=>new_tou_tag_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length)}>
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
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveTouTag}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>



<Modal bind:open={new_tou_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_tou_tag[new_tou_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddTOU(new_tou_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_tou_tag[new_tou_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Target Tag</p></td>
    <td class= "pl-5 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_tou_tag[new_tou_tag_index].targetTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>



<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Start Time</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

      </div>

      </td>
  </tr>

<p class="pt-5"></p>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">End Time</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

      </div>
      </td>
  </tr>

<p class="pt-5"></p>
<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Rate</p></td>
      <td class="pl-5 pt-5">

<input type="number" bind:value={new_tou_tag[new_tou_tag_index].rate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">


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
<Button color="dark" pill={true} on:click={add_new_tou_tag(new_tou_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>


<Modal bind:open={modify_tou_tag_modal}  size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={no_modify_tou_tag}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Target Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].targetTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Start Time</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

      </div>

      </td>
  </tr>

<p class="pt-5"></p>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">End Time</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
<input type="number" placeholder="hh" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

<p class="pt-3">:</p>
<input type="number" placeholder="mm" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">

      </div>
      </td>
  </tr>

<p class="pt-5"></p>
<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Rate</p></td>
      <td class="pl-5 pt-5">

<input type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].rate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<p class="pt-48"></p>
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
<Button color="dark" pill={true} on:click={modify_tou_tag}>Modify</Button></td>


</table>
</form>
</Modal>

</Table>


  </AccordionItem>



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Direct Methods Tag
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
    <TableHeadCell class="w-18">Cloud Profile</TableHeadCell>
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
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
<input class="mb-1 strikeout" type="checkbox" bind:checked={DMtag.enable}>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{DMtag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{DMtag.targetTag}</td>

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
      <TableBodyCell>{DMtag.targetTag}</TableBodyCell>


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

<input type="text" bind:value={new_DM_tag[new_DM_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


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
<td><p class="pl-4 pt-4 text-lg font-light text-right">Target Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_DM_tag[new_DM_tag_index].targetTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
</td>
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

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


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
<td><p class="pl-4 pt-4 text-lg font-light text-right">Target Tag</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].targetTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
</td>
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={modify_DM_tag}>Modify</Button></td>


</table>
</form>
</Modal>


</Table>



  </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    SCADA Tag
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
    <TableHeadCell class="w-18">Target Tag Number</TableHeadCell>    

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
<input class="mb-1 strikeout" type="checkbox" bind:checked={ScadaTag.enable}>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{ScadaTag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{ScadaTag.targetTag.length}</td>

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
      <TableBodyCell>{ScadaTag.targetTag.length}</TableBodyCell>


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

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddScada(new_scada_tag_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<input type="text" bind:value={new_scada_tag[new_scada_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>





<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Target Tag</p></td>
      <td class="pl-5 pt-5">
<Button>Select Target <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg></Button>
<Dropdown class="w-44 p-3 space-y-3 text-sm">

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
  <li>
<label class="pl-2">
  <input type="checkbox" bind:checked={scada_target_tag[index]}>
  {TagItem.tagName}
</label>
  </li>
{/each}

</Dropdown>

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
<Button color="dark" pill={true} on:click={add_new_scada_tag(new_scada_tag_index)}>Add</Button></td>


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

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">


      </td>



  </tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Target Tag</p></td>
      <td class="pl-5 pt-5">
<Button>Select Target <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg></Button>
<Dropdown class="w-44 p-3 space-y-3 text-sm">

{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
  <li>
<label class="pl-2">
  <input type="checkbox" bind:checked={scada_target_tag[index]}>
  {TagItem.tagName}
</label>
  </li>
{/each}

</Dropdown>

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


</table>
</form>
</Modal>

</Table>


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
<input class="mb-1 strikeout" type="checkbox" bind:checked={EventTag.enable}>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">{EventTag.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">{EventTag.triggerTag}</td>
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
{#if EventTag.actionOperation==0}Write{/if} {EventTag.actionTarget} with {EventTag.actionOperationValue}

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
      <TableBodyCell class="w-18">{EventTag.triggerTag}</TableBodyCell>
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
{#if EventTag.actionOperation==0}Write{/if} {EventTag.actionTarget} with {EventTag.actionOperationValue}


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



<Modal bind:open={new_event_tag_modal}  size="lg" class="w-full" permanent={true}>
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
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_event_tag[new_event_tag_index].triggerTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
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


   
 <FloatingLabelInput style="outlined" class="mt-1" id="compared_value" name="compared_value" type="number" label="compared_value" bind:value={new_event_tag[new_event_tag_index].triggerConditionValue}>
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Polling Rate</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
<input type="number" bind:value={new_event_tag[new_event_tag_index].pollingRateS} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">


     <p class="pt-1 text-lg">s</p>

</div>
</td>
  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">

  <Radio bind:group={new_event_tag[new_event_tag_index].actionOperation} value={0}>Write</Radio>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64" bind:value={new_event_tag[new_event_tag_index].actionTarget}>
<option disabled="" value="none">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}
{/if}

</select>

<p class="pt-5"> with </p>
 <FloatingLabelInput style="outlined" class="mt-1" id="operand_value" name="operand_value" type="number" label="operand_value" bind:value={new_event_tag[new_event_tag_index].actionOperationValue}>
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
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={add_new_event_tag(new_event_tag_index)}>Add</Button></td>


</table>
</form>
</Modal>


<Modal bind:open={modify_event_tag_modal}  size="lg" class="w-full" permanent={true}>
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
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerTag}>
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}

</select>
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


   
 <FloatingLabelInput style="outlined" class="mt-1" id="compared_value" name="compared_value" type="number" label="compared_value" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionValue}>
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Polling Rate</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
<input type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].pollingRateS} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">


      <p class="pt-1 text-lg"> s</p>
</div>
</td>

  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Action</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">

  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation} value={0}>Write</Radio>

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionTarget}>
<option disabled="" value="none">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as TagItem, index}
<option value={TagItem.tagName}>{TagItem.tagName}</option>
{/each}
{/if}

</select>

<p class="pt-5"> with </p>
 <FloatingLabelInput style="outlined" class="mt-1" id="operand_value" name="operand_value" type="number" label="operand_value" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperationValue}>
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
{#if 0}

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
    <TableHeadCell class="w-18"></TableHeadCell>    
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>





</TableBody>

</Table>

  </AccordionItem>

  {/if}

{#if 0}

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tag Rule Import/Export
    </span>



<table>

    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Export Tag Rule</p></td>

<td class="pl-5 pt-5"><Button on:click={exportTR}>Export</Button></td>
  </tr>


<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Import Tag Rule</p></td>
<td class="pl-5 pt-5">

<input type="file" id="configUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleFileUpload}>

</td>
<td class="pl-5 pt-5">
  <Button on:click={importTR}>Import</Button>

</td>

</tr>



<Modal bind:open={modalAuthExportTR} size="lg" class="w-full" permanent={true}>
<form action="#">

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={CancelETRAuth}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Please Enter Password:</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



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
    <td class="pl-10"><Button color="dark" pill={true}>Submit</Button></td>


    </tr>


</table>
</form>
</Modal>

</table>

  </AccordionItem>
{/if}


</Accordion>

</TabItem>

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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Data Push Interval</TableHeadCell>    
    <TableHeadCell class="w-18">Link Lost Retransmit</TableHeadCell>
    <TableHeadCell class="w-18">Data Priority</TableHeadCell> 
    <TableHeadCell class="w-18">Cloud Profile</TableHeadCell>
    <TableHeadCell class="w-18">Content Format</TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



{#if getDataReady == 1}
{#each changed_data_tag_pro_data.config.service_dataTagPro_ulRule as ulRule, index}
{#if ulRule.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
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
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">
<input class="mb-1 strikeout" type="checkbox" bind:checked={ulRule.enable}>
    </td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">{ulRule.tagName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">
{#if ulRule.dataPushInterval==0}
Right Away
{:else if ulRule.dataPushInterval==1}
{ulRule.dataPushIntervalValue} min(s)

{/if}
</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">
{ulRule.linkLostRetransmit} Delay Seconds
</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">
{#if ulRule.dataPriority==0}
Latest First
{:else if ulRule.dataPriority==1}
First In, First Out
{/if}
</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">
{#each ulRule.cloudProfile as cloudProfile, index2}
{cloudProfile.cloudTarget}(
{#each cloudProfile.cloudTopic as cloudTopic,index3}
{cloudTopic}{#if index3 != cloudProfile.cloudTopic.length-1},{/if}
{/each}
)
<p class="pl-2"></p>
{#if index2 != ulRule.cloudProfile.length-1},{/if}
{/each}

</td>

<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white strikeout w-18">
{#if ulRule.contentFormat==0}<div class="flex gap-2">
      Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$&#125;</Tooltip>

{:else if ulRule.contentFormat==1}User Defined{/if}

</td>

</tr>

{:else}
<TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>TriggerModifyULRule(index)}>
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


    <TableBodyCell><input class="mb-1" type="checkbox" bind:checked={ulRule.enable}></TableBodyCell>


      <TableBodyCell>{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{ulRule.tagName}</TableBodyCell>
      <TableBodyCell class="w-18">
{#if ulRule.dataPushInterval==0}
Right Away
{:else if ulRule.dataPushInterval==1}
{ulRule.dataPushIntervalValue} min(s)

{/if}
      </TableBodyCell>
      <TableBodyCell class="w-18">
{ulRule.linkLostRetransmit} Delay Seconds
      </TableBodyCell>
      <TableBodyCell class="w-18">
{#if ulRule.dataPriority==0}
Latest First
{:else if ulRule.dataPriority==1}
First In, First Out
{/if}

      </TableBodyCell>


      <TableBodyCell class="w-18">
{#each ulRule.cloudProfile as cloudProfile, index2}
{cloudProfile.cloudTarget}(
{#each cloudProfile.cloudTopic as cloudTopic,index3}
{cloudTopic}{#if index3 != cloudProfile.cloudTopic.length-1},{/if}
{/each}
)
<p class="pl-2"></p>
{#if index2 != ulRule.cloudProfile.length-1},{/if}
{/each}

      </TableBodyCell>
      <TableBodyCell class="w-18">
{#if ulRule.contentFormat==0}<div class="flex gap-2">
      Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$&#125;</Tooltip>

{:else if ulRule.contentFormat==1}User Defined{/if}


      </TableBodyCell>


 </TableBodyRow>

{/if}
{/each}
{/if}

 <TableBodyRow>
 {#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={()=>new_ul_rule_trigger(changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length)}>
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

    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveULRule}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>




<Modal bind:open={new_ul_rule_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_ul_rule[new_ul_rule_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddULRule(new_ul_rule_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64" bind:value={new_ul_rule[new_ul_rule_index].tagName}>
<option disabled="" value="none">Choose ...</option>
{#if saved_changed_data_tag_pro_data != ""}
{#each saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter as deviceParameter}
<option value={deviceParameter.tagName}>{deviceParameter.tagName}</option>
{/each}
{/if}

</select>

      </td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={new_ul_rule[new_ul_rule_index].dataPushInterval} value={0} >Right Away</Radio>
  <Radio bind:group={new_ul_rule[new_ul_rule_index].dataPushInterval} value={1} >User Defined (mins): </Radio>
{#if new_ul_rule[new_ul_rule_index].dataPushInterval == 0}
  <input type="number" bind:value={new_ul_rule[new_ul_rule_index].dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" bind:value={new_ul_rule[new_ul_rule_index].dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" bind:value={new_ul_rule[new_ul_rule_index].linkLostRetransmit} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={new_ul_rule[new_ul_rule_index].dataPriority} value={0} >Latest First</Radio>
  <Radio bind:group={new_ul_rule[new_ul_rule_index].dataPriority} value={1} >First In, First Out </Radio>

</div>



</td>


</tr>

<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={CloudProfile} bind:value={MultiSelectedCloudProfile} />

    </td>
<td class= "pl-4 pt-4">
</td>

<td class= "pl-4 pt-4">
</td>

</tr>

<p class="pt-10"></p>


{#if MultiSelectedCloudProfile.length==1}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">{MultiSelectedCloudProfile[0]} Topic</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">
<input type="text" bind:value={Cloud1Topic[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">


<input type="text" bind:value={Cloud1Topic[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

<input type="text" bind:value={Cloud1Topic[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
</div>
      </td>

</tr>
  

{:else if MultiSelectedCloudProfile.length==2}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">{MultiSelectedCloudProfile[0]} Topic</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">
<input type="text" bind:value={Cloud1Topic[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">


<input type="text" bind:value={Cloud1Topic[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

<input type="text" bind:value={Cloud1Topic[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
</div>
      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">{MultiSelectedCloudProfile[1]} Topic</p></td>
 <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">
<input type="text" bind:value={Cloud2Topic[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">


<input type="text" bind:value={Cloud2Topic[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

<input type="text" bind:value={Cloud2Topic[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
</div>
      </td>

</tr>
{/if}




<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Content Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={new_ul_rule[new_ul_rule_index].contentFormat} value={0} >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$&#125;</Tooltip></Radio>
  <Radio class="pb-2" bind:group={new_ul_rule[new_ul_rule_index].contentFormat} value={1} >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if new_ul_rule[new_ul_rule_index].contentFormat == 1}
    <Button size="xs" on:click={NPbtn1}>TIME</Button>
{:else}
    <Button size="xs" disabled>TIME</Button>
{/if}
</li>

<li class="pt-4">
{#if new_ul_rule[new_ul_rule_index].contentFormat == 1}
<Button size="xs" on:click={NPbtn2}>ARRAY</Button>
{:else}
<Button size="xs" disabled>ARRAY</Button>
{/if}
</li>

<li class="pt-4">
{#if new_ul_rule[new_ul_rule_index].contentFormat == 1}
<Button size="xs" on:click={NPbtn3}>NAME_RAWREQUEST</Button>
{:else}
<Button size="xs" disabled>NAME_RAWREQUEST</Button>
{/if}
</li>

<li class="pt-4">
{#if new_ul_rule[new_ul_rule_index].contentFormat == 1}
<Button size="xs" on:click={NPbtn4}>NAME_RAWREPLY</Button>
{:else}
<Button size="xs" disabled>NAME_RAWREPLY</Button>
{/if}
</li>


</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if new_ul_rule[new_ul_rule_index].contentFormat == 1}

<Textarea id="textarea-id" placeholder="Content Format" rows="12" name="message" bind:value={new_ul_rule[new_ul_rule_index].userDefineedData} />



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
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={add_new_ul_rule(new_ul_rule_index)}>Add</Button></td>


</table>
</form>
</Modal>



<Modal bind:open={modify_ul_rule_modal}  size="xl" class="w-full" permanent={true}>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyULRule}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].tagName}>
<option disabled="" value="none">Choose ...</option>
{#if saved_changed_data_tag_pro_data != ""}
{#each saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter as deviceParameter}
<option value={deviceParameter.tagName}>{deviceParameter.tagName}</option>
{/each}
{/if}

</select>

      </td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval} value={0} >Right Away</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval} value={1} >User Defined (mins): </Radio>
{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval == 0}
  <input type="number" bind:value={new_ul_rule[new_ul_rule_index].dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].linkLostRetransmit} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPriority} value={0} >Latest First</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPriority} value={1} >First In, First Out </Radio>

</div>



</td>


</tr>

<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={CloudProfile} bind:value={MultiSelectedCloudProfile} />

    </td>
<td class= "pl-4 pt-4">
</td>

<td class= "pl-4 pt-4">
</td>

</tr>

<p class="pt-10"></p>


{#if MultiSelectedCloudProfile.length==1}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">{MultiSelectedCloudProfile[0]} Topic</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">
<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">


<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
</div>
      </td>

</tr>
  

{:else if MultiSelectedCloudProfile.length==2}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">{MultiSelectedCloudProfile[0]} Topic</p></td>
      <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">
<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">


<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
</div>
      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">{MultiSelectedCloudProfile[1]} Topic</p></td>
 <td class="pl-5 pt-5" colspan="3"><div class="flex gap-4">
<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[1].cloudTopic[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">


<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[1].cloudTopic[1]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">

<input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[1].cloudTopic[2]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
</div>
      </td>

</tr>
{/if}




<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Content Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat} value={0} >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">&#123;&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$&#125;</Tooltip></Radio>
  <Radio class="pb-2" bind:group={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat} value={1} >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1}
    <Button size="xs" on:click={NPbtn1}>TIME</Button>
{:else}
    <Button size="xs" disabled>TIME</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1}
<Button size="xs" on:click={NPbtn2}>ARRAY</Button>
{:else}
<Button size="xs" disabled>ARRAY</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1}
<Button size="xs" on:click={NPbtn3}>NAME_RAWREQUEST</Button>
{:else}
<Button size="xs" disabled>NAME_RAWREQUEST</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1}
<Button size="xs" on:click={NPbtn4}>NAME_RAWREPLY</Button>
{:else}
<Button size="xs" disabled>NAME_RAWREPLY</Button>
{/if}
</li>


</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1}

<Textarea id="textarea-id" placeholder="Content Format" rows="12" name="message" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].userDefineedData} />



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
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={modify_ul_rule}>Modify</Button></td>


</table>
</form>
</Modal>


</TableBody>

</Table>

</TabItem>

{#if 0}

<TabItem title="DL Rule">
</TabItem>
{/if}

{#if 0}

<TabItem title="Observation">

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Port Status
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tag Log
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    UL Log
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    DL Log
    </span>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Log Export
    </span>

  </AccordionItem>

</Accordion>



</TabItem>

{/if}

{#if 0}
<TabItem title="Simulator">



<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Down Link
    </span>


<p>Select Tag: </p><select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" >
<option disabled="" value="">None</option>
<option value="1" >modbusTest</option>

</select>


<p class="pt-5">Value: </p><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500">



<p class="pt-5"></p>
<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full" >Simulate</button>

  </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Up Link
    </span>

<p>Select Tag: </p><select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2">
<option disabled="" value="">None</option>
<option value="1" >modbusTest</option>

</select>


<p class="pt-5">Value: </p><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500">

<p class="pt-5"></p>
<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full" >Simulate</button>

  </AccordionItem>
</Accordion>



 </TabItem>

 {/if}


 </Tabs>