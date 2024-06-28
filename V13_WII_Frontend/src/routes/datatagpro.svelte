<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator,MultiSelect } from 'flowbite-svelte';

 import { writable } from 'svelte/store';


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


  let getDataReady=0;

  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });


  let data_tag_pro_data="";
  let changed_data_tag_pro_data = {};
  let saved_changed_data_tag_pro_data ={};


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


  let modify_com_modal=false;
  let modify_com_index;
  function TriggerModifyCOM(index)
  {
    modify_com_modal=true;
    modify_com_index=index;
  }

  function NoModifyCOM(index)
  {
    modify_com_modal=false;

  }

  function ModifyRTUMaster()
  {
    modify_com_modal=false;  
  }


  function TriggerModifyModbusTag()
  {

    ModbusTagModifyModal=true;
  }

  function NoModifyModbusTag()
  {
    console.log("no modify modbus tag");
    ModbusTagModifyModal=false;
  }


  function TriggerModifyCalculateTag()
  {
  
  }

  let Modify_TCP_Master_Modal=false;
  let Modify_TCP_Master_index;

  function TriggerModifyTCPMaster(index)
  {
    Modify_TCP_Master_Modal=true;
    Modify_TCP_Master_index=index;

  }

  function NoModifyTCPMaster(index)
  {
    Modify_TCP_Master_Modal=false;

  }


  function ModifyModbusTCPMaster(index)
  {
    Modify_TCP_Master_Modal=false;  
  }


  let modify_modbus_parameter_modal=false;
  let modify_modbus_parameter_index;
  
  function DeleteModbusParameter(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[index].delete=true;
  }

  function RestoreDeleteModbusParameter(index)
  {
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[index].delete=false;
  }

  function TriggerModifyModbusParameter(index)
  {
    modify_modbus_parameter_index=index;
    modify_modbus_parameter_modal=true;

  }

  function no_modify_modbus_parameter()
  {
    modify_modbus_parameter_modal=false;
  }

  function modify_modbus_parameter()
  {
    modify_modbus_parameter_modal=false;
  }

  let new_modbus_parameter_modal=false;
  let new_modbus_parameter_index;


    let new_modbus_parameter=[
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    },
    {
        enable: false,
        delete: false,
        protocol: 0,
        tagName: "",
        slaveId: 2,
        pointType: 3,
        address: 0,
        quantity: 1,
        byteOrder: 0,
        responseTimeout: 1000
    }
    ];

  function new_modbus_parameter_trigger(index)
  {
    new_modbus_parameter[index].enable=true;
    new_modbus_parameter[index].delete=false;
    new_modbus_parameter[index].protocol=0;
    new_modbus_parameter[index].tagName="";
    new_modbus_parameter[index].slaveId=2;
    new_modbus_parameter[index].pointType=3;
    new_modbus_parameter[index].address=0;
    new_modbus_parameter[index].quantity=1;
    new_modbus_parameter[index].byteOrder=0;
    new_modbus_parameter[index].responseTimeout=1000;
    new_modbus_parameter_index=index;
    new_modbus_parameter_modal=true;

  }


  function add_new_modbus_parameter(index)
  {
    new_modbus_parameter_modal=false;
    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter=[...changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter,new_modbus_parameter[index]];

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

 let PFormatUDefine="Hello";



 const btn1 = () => 
 {
    PFormatUDefine+="$TimeStamp$";

};

 const btn2 = () => 
 {

    PFormatUDefine+="$Keyword1$";
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
      getDataReady=1;
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

      changed_data_tag_pro_data=JSON.parse(JSON.stringify(saved_changed_data_tag_pro_data));
      if (data_tag_pro_general_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_general=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_general));

      }

      if (data_tag_pro_tag_modbus_changedValues.length ==0)
      {
        changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag=JSON.parse(JSON.stringify(data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag));
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
    }


  });

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
    Modbus Tag
    </span>

<Table shadow striped={true}>
<caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
on:click={handleClickMMS} on:keydown={() => {}}>
    Modbus RTU Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please set rtu master configuration first.</p>
  </caption>

{#if openDetailStatusMMS}
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
    <TableHeadCell class="w-10">Interface</TableHeadCell>
    <TableHeadCell class="w-10">Baudrate</TableHeadCell>
    <TableHeadCell class="w-10">Parity</TableHeadCell>
    <TableHeadCell class="w-10">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>    
    <TableHeadCell class="w-10"></TableHeadCell> 
  </TableHead>
  <TableBody>

 <TableBodyRow>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => TriggerModifyCOM(1)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>

       </TableBodyCell>

    <TableBodyCell class="w-4">
<input class="mb-1" type="checkbox" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.enable}>
    </TableBodyCell>

    <TableBodyCell>1</TableBodyCell>
 <TableBodyCell>{changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.serialProfile}</TableBodyCell>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.interface == 0}
      <TableBodyCell>RS 485</TableBodyCell>
{:else}
      <TableBodyCell>Unknown</TableBodyCell>
{/if}


 <TableBodyCell>{changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.baudrate}</TableBodyCell>

{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity == 0}
      <TableBodyCell class="w-10">None</TableBodyCell>
{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity == 1}
      <TableBodyCell class="w-10">Even</TableBodyCell>
{:else if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity == 2}
      <TableBodyCell class="w-10">Odd</TableBodyCell>
{/if}

   <TableBodyCell>{changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.dataBits}</TableBodyCell>
    <TableBodyCell>{changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.stopBits}</TableBodyCell>

 </TableBodyRow>
  </TableBody>
{/if}  

  
<Modal bind:open={modify_com_modal} size="md" class="w-full" permanent={true}>
<form action="#">
<label>
  <input type="checkbox" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.enable} >
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyCOM(modify_com_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>
<table>
  
<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>

      <td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.serialProfile}>
<option disabled="" value="none">Choose Profile ...</option>


<option value="S1">S1</option>
<option value="S2">S2</option>
</select>

      </td>

</tr>

<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.interface} value={0}>RS 485</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.baudrate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity} value={0} >None</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity} value={1} >Even</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity} value={2} >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="text"  bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.dataBits} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="text"  
      bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.stopBits} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


  
  </tr>
      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyRTUMaster}>Modify</Button></td>
    </tr>
</table>
  </form>
</Modal>

</Table>


<p class="mt-8"></p>  


<Table shadow striped={true} >

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMMT} on:keydown={() => {}}>
    Modbus TCP Master Profile
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please set tcp master configuration first.</p>
  </caption>

{#if openDetailStatusMMT}
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
     <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>  
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell class="w-10">Remote Port</TableHeadCell>
    <TableHeadCell class="w-10">Connection Timeout</TableHeadCell>
    <TableHeadCell class="w-36"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell> 
  </TableHead>
  <TableBody>

 <TableBodyRow>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => TriggerModifyTCPMaster(1)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>

       </TableBodyCell>


    <TableBodyCell class="w-4">
<input class="mb-1" type="checkbox" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.enable}>
    </TableBodyCell>
<TableBodyCell>1</TableBodyCell>
<TableBodyCell>{changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.remoteServerIp}</TableBodyCell>
 <TableBodyCell>{changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.remotePort}</TableBodyCell>
  <TableBodyCell>{changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.connectionTimeout} ms</TableBodyCell>
 </TableBodyRow>
  </TableBody>
{/if} 




   <Modal bind:open={Modify_TCP_Master_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyTCPMaster(Modify_TCP_Master_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.remoteServerIp} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" 
      bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.remotePort} 
      class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Connection Timeout</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.connectionTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"> </td><td><p class="pl-2 pt-4 text-lg"> ms</p></td>



  </tr>

      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyModbusTCPMaster}>Modify</Button></td>


    </tr>
</table>
</form>
</Modal>

</Table>
<p class="mt-8"></p>  


<Table shadow striped={true}>
  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    Modbus Parameter
    </caption>
  
<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">Enable</TableHeadCell>
    <TableHeadCell class="!p-1 w-2">No</TableHeadCell>
    <TableHeadCell class="!p-4 w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="!p-2 w-10">Protocol</TableHeadCell>
    <TableHeadCell class="!p-1 w-10">Slave ID</TableHeadCell>
    <TableHeadCell class="!p-4 w-18">Point Type</TableHeadCell>
    <TableHeadCell class="!p-2 w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell class="!p-2 w-10">Quantity</TableHeadCell>
    <TableHeadCell class="!p-1 w-10">Response Timeout</TableHeadCell>
    <TableHeadCell class="!p-2 w-10">Byte Order</TableHeadCell>
  </TableHead>

<TableBody>
{#if getDataReady == 1}

{#each changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter as deviceParameter, index}
{#if deviceParameter.delete}

<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteModbusParameter(index)}>
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
<input class="mb-1 strikeout" type="checkbox" bind:checked={deviceParameter.enable}>
    </td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-1 w-4 strikeout">{index+1}</td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">{deviceParameter.tagName}</td>      
{#if deviceParameter.protocol == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">RTU</td>
{:else if deviceParameter.protocol == 1}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">TCP</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Unknown</td>
{/if}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">{deviceParameter.slaveId}</td>



{#if deviceParameter.pointType ==0}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Coil</td>
{:else if deviceParameter.pointType ==1}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Discrete Input</td>
{:else if deviceParameter.pointType ==2}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Input Register</td>
{:else if deviceParameter.pointType ==3}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Holding Register</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Unknown</td>
{/if}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">{deviceParameter.address}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">{deviceParameter.quantity}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">{deviceParameter.responseTimeout} ms</td>

{#if deviceParameter.byteOrder ==0}  
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Big Endian</td>
{:else if deviceParameter.byteOrder ==1}  
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Little Endian</td>
{:else if deviceParameter.byteOrder ==2}  
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Big Endian Byte Swap</td>
{:else if deviceParameter.byteOrder ==3}  
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Little Endian Byte Swap</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white strikeout">Unknown</td>
{/if}

    </tr>




{:else}
<TableBodyRow>
   <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyModbusParameter(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => DeleteModbusParameter(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell>
<input class="mb-1" type="checkbox" bind:checked={deviceParameter.enable}>
    </TableBodyCell>
      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell>{deviceParameter.tagName}</TableBodyCell>      
{#if deviceParameter.protocol == 0}
  <TableBodyCell>RTU</TableBodyCell>
{:else if deviceParameter.protocol == 1}
  <TableBodyCell>TCP</TableBodyCell>
{:else}
  <TableBodyCell>Unknown</TableBodyCell>
{/if}
  <TableBodyCell>{deviceParameter.slaveId}</TableBodyCell>



{#if deviceParameter.pointType ==0}
  <TableBodyCell>Coil</TableBodyCell>
{:else if deviceParameter.pointType ==1}
  <TableBodyCell>Discrete Input</TableBodyCell>
{:else if deviceParameter.pointType ==2}
  <TableBodyCell>Input Register</TableBodyCell>
{:else if deviceParameter.pointType ==3}
  <TableBodyCell>Holding Register</TableBodyCell>
{:else}
  <TableBodyCell>Unknown</TableBodyCell>
{/if}
  <TableBodyCell>{deviceParameter.address}</TableBodyCell>
  <TableBodyCell>{deviceParameter.quantity}</TableBodyCell>
  <TableBodyCell>{deviceParameter.responseTimeout} ms</TableBodyCell>

{#if deviceParameter.byteOrder ==0}  
  <TableBodyCell>Big Endian</TableBodyCell>
{:else if deviceParameter.byteOrder ==1}  
  <TableBodyCell>Little Endian</TableBodyCell>
{:else if deviceParameter.byteOrder ==2}  
  <TableBodyCell>Big Endian Byte Swap</TableBodyCell>
{:else if deviceParameter.byteOrder ==3}  
  <TableBodyCell>Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell>Unknown</TableBodyCell>
{/if}


    </TableBodyRow>
{/if}

{/each}
{/if}


  <TableBodyRow>
{#if changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter.length < 10}

 <TableBodyCell class="!p-4 w-10">

<button on:click={() =>new_modbus_parameter_trigger(changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter.length)}>
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

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

    </TableBodyRow>



  </TableBody>


  <Modal bind:open={new_modbus_parameter_modal}  size="lg" class="w-full" autoclose>
  <form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={new_modbus_parameter[new_modbus_parameter_index].enable}>
{/if}
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={new_modbus_parameter[new_modbus_parameter_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Protocol</p></td>
    <td class= "pl-4 pt-4">
 <div class="flex gap-4">
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].protocol} value={0} >RTU</Radio>
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].protocol} value={1} >TCP</Radio>
</div></td>


</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_modbus_parameter[new_modbus_parameter_index].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].pointType} value={2} >Input Register</Radio>
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].pointType} value={3} >Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_modbus_parameter[new_modbus_parameter_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={new_modbus_parameter[new_modbus_parameter_index].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>



  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={new_modbus_parameter[new_modbus_parameter_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
</div></td>
</tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={new_modbus_parameter[new_modbus_parameter_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

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
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
<Button color="dark" pill={true} on:click={add_new_modbus_parameter(new_modbus_parameter_index)}>Add</Button></td>


    </tr>

</table>


</form>
</Modal>

<Modal bind:open={modify_modbus_parameter_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox" bind:checked={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={no_modify_modbus_parameter}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
     
<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Tag Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].tagName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Protocol</p></td>
    <td class= "pl-4 pt-4">
 <div class="flex gap-4">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].protocol} value={0} >RTU</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].protocol} value={1} >TCP</Radio>
</div></td>


</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].slaveId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].pointType} value={2} >Input Register</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].pointType} value={3} >Holding Register</Radio>
</div></td>
</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].address} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].quantity} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>



  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder} value={0} >Big Endian</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder} value={1} >Little Endian</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder} value={2} >Big Endian Byte Swap</Radio>
  <Radio bind:group={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder} value={3} >Little Endian Byte Swap</Radio>
</div></td>
</tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].responseTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

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
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={modify_modbus_parameter}>Modify</Button></td>


    </tr>


</table>
</form>
</Modal>


 </Table> 


<p class="mt-4"></p>


<Table shadow striped={true} >

  <caption class="w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800" on:click={handleClickMP} on:keydown={() => {}}>
    Process Parameter
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Please set process parameter.</p>
  </caption>

{#if openDetailStatusMProcess}
  <TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
     <TableHeadCell class="w-10">Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>  
    <TableHeadCell class="w-10">Tag Name</TableHeadCell>
    <TableHeadCell class="w-10">Polling Rate</TableHeadCell>
    <TableHeadCell class="w-10">Realtime Push</TableHeadCell>
    <TableHeadCell class="w-10">Access</TableHeadCell> 
    <TableHeadCell class="w-10">Data Type</TableHeadCell> 
    <TableHeadCell class="w-10">Scale</TableHeadCell> 
    <TableHeadCell class="w-10">SBIR</TableHeadCell>     
  </TableHead>
  <TableBody>

 <TableBodyRow>
      <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button >
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button >    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell>
<input class="mb-1" type="checkbox"  >
    </TableBodyCell>

    <TableBodyCell></TableBodyCell>
 <TableBodyCell></TableBodyCell>
  <TableBodyCell></TableBodyCell>
   <TableBodyCell></TableBodyCell>
    <TableBodyCell></TableBodyCell>
 <TableBodyCell></TableBodyCell>
  <TableBodyCell></TableBodyCell>
   <TableBodyCell></TableBodyCell>

 </TableBodyRow>




  <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>

  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>
  <TableBodyCell ></TableBodyCell>

    </TableBodyRow>


  </TableBody>
{/if} 

</Table>


<p class="mt-2"></p>

<table>

  <tr>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>    

    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>


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
    <TableHeadCell class="w-48">Update Condition</TableHeadCell>    

  </TableHead>

<TableBody>

 <TableBodyRow>
      <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-0 w-10">
<button >
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button >    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
    <TableBodyCell>
<input class="mb-1" type="checkbox"  >
    </TableBodyCell>

    <TableBodyCell></TableBodyCell>
 <TableBodyCell></TableBodyCell>
  <TableBodyCell></TableBodyCell>



 </TableBodyRow>




  <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
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


    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>





</TableBody>

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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>    
    <TableHeadCell class="w-18">Start Time</TableHeadCell>
    <TableHeadCell class="w-18">End Time</TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">acc_</TableBodyCell>
      <TableBodyCell class="w-18">mb_KW</TableBodyCell>
      <TableBodyCell class="w-18">2024-02-03 00:00</TableBodyCell>
      <TableBodyCell class="w-18">2024-02-04 16:00</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>    
    <TableHeadCell class="w-18">Start Time</TableHeadCell>
    <TableHeadCell class="w-18">End Time</TableHeadCell> 
    <TableHeadCell class="w-18">Rate</TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">acc_</TableBodyCell>
      <TableBodyCell class="w-18">mb_KW</TableBodyCell>
      <TableBodyCell class="w-18">2024-02-03 00:00</TableBodyCell>
      <TableBodyCell class="w-18">2024-02-04 16:00</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

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
    <TableHeadCell class="w-18">Tag Name</TableHeadCell>
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>    

    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">acc_</TableBodyCell>
      <TableBodyCell class="w-18">mb_KW</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

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



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">acc_</TableBodyCell>
      <TableBodyCell class="w-18">10</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

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
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Target Tag</TableHeadCell>    
    <TableHeadCell class="w-18">Trigger Condition</TableHeadCell>
    <TableHeadCell class="w-18">Action</TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">evt_</TableBodyCell>
      <TableBodyCell class="w-18">mb_KW</TableBodyCell>
      <TableBodyCell class="w-18"> > 65</TableBodyCell>
      <TableBodyCell class="w-18">write value to what?</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

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
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">sche_</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


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
    <TableHeadCell class="w-18"></TableHeadCell>    
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell> 
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>
    <TableHeadCell class="w-18"></TableHeadCell>    

  </TableHead>

<TableBody>



 <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyCalculateTag()}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>

    <TableBodyCell class="w-10">1</TableBodyCell>


      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-18">sche_</TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>

 </TableBodyRow>

 <TableBodyRow>
 <TableBodyCell class="!p-4">

<button>
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
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


</TableBody>

</Table>

</TabItem>


<TabItem title="DL Rule">
</TabItem>


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