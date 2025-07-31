<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import './global.css';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import {
    modbusConfig, 
    ChangedModbusConfig, 
    sconversionConfig,
    OPCUA_Server_ConfigChangedLog,
    OPCUA_Client_ConfigChangedLog,
    Conversion_Opcua2Modbus_ConfigChangedLog,
    Conversion_OpcuaGateway_ConfigChangedLog,
    ChangedSConfigConfig
  } from "./configG.js"


  let sessionid;
  let sessionBinary;
  let sconversion_data="";
  let changed_sconversion_data = {};
  let saved_changed_sconversion_data ={};
  let getDataReady=0;   

  let opcua_server_changedValues = [];
  let opcua_client_changedValues=[];
  let conversion_opcua2modbus_changedValues=[];
  let conversion_opcuagateway_changedValues=[];

  let opcua_serverEndUrl="";

  let modbus_data="";
  let saved_changed_modbus_data ="";


  sessionidG.subscribe(val => {
     sessionid = val;
  });

  sconversionConfig.subscribe(val => {
      sconversion_data = val;
  });


  Conversion_Opcua2Modbus_ConfigChangedLog.subscribe(val => {
      conversion_opcua2modbus_changedValues = val;
  });

  Conversion_OpcuaGateway_ConfigChangedLog.subscribe(val => {
      conversion_opcuagateway_changedValues = val;
  });

  OPCUA_Server_ConfigChangedLog.subscribe(val => {
      opcua_server_changedValues = val;
  });

  OPCUA_Client_ConfigChangedLog.subscribe(val => {
      opcua_client_changedValues = val;
  });

  ChangedSConfigConfig.subscribe(val => {
      saved_changed_sconversion_data = val;
  });



  modbusConfig.subscribe(val => {
      modbus_data = val;
  });

  ChangedModbusConfig.subscribe(val => {
      saved_changed_modbus_data = val;
  });



  function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex, ArrayName)
  {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            console.log('key:', key);
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              if (key != 'clientCertificate')
              {
                compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1, key);
              }
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
                if (type ==3)
                {
                  conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
                }
                else if (type == 2)
                {
                  conversion_opcuagateway_changedValues=[...conversion_opcuagateway_changedValues, changedstr];
                }
                else if (type == 1)
                {
                  opcua_client_changedValues=[...opcua_client_changedValues, changedstr];
                }
                else if (type == 0)
                {
                  opcua_server_changedValues=[...opcua_server_changedValues, changedstr]; 
                }
              }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type ==3)
              {
                conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
              }
              else if (type == 2)
              {
                conversion_opcuagateway_changedValues=[...conversion_opcuagateway_changedValues, changedstr];
              }
              else if (type == 1)
              {
                opcua_client_changedValues=[...opcua_client_changedValues, changedstr];
              }
              else if (type == 0)
              {
                opcua_server_changedValues=[...opcua_server_changedValues, changedstr]; 
              }
            }
            else
            {
              if (key== 'clientCertificate')
              {
                for (let i = 0; i < obj1[key].length; i++) 
                {
                  if (obj1[key][i] != obj2[key][i])
                  {
                    let changedstr="clientCertificate List No."+(i+1)+" item is changed: "+ "certificate has changed to "+obj1[key][i];
                    if (type ==3)
                    {
                      conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
                    }
                    else if (type == 2)
                    {
                      conversion_opcuagateway_changedValues=[...conversion_opcuagateway_changedValues, changedstr];
                    }
                    else if (type == 1)
                    {
                      opcua_client_changedValues=[...opcua_client_changedValues, changedstr];
                    }
                    else if (type == 0)
                    {
                      opcua_server_changedValues=[...opcua_server_changedValues, changedstr]; 
                    }
                  }
                }
              }
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0, "none");
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
            if (ArrayName != "none")
              changedstr=ArrayName+", List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
            else
              changedstr="List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }

          if (type ==3)
          {
            conversion_opcua2modbus_changedValues=[...conversion_opcua2modbus_changedValues, changedstr];
          }
          else if (type == 2)
          {
            conversion_opcuagateway_changedValues=[...conversion_opcuagateway_changedValues, changedstr];
          }
          else if (type == 1)
          {
            opcua_client_changedValues=[...opcua_client_changedValues, changedstr];
          }
          else if (type == 0)
          {
            opcua_server_changedValues=[...opcua_server_changedValues, changedstr]; 
          }

        }
      }
  }



  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let styleSpecial=true;
  let openTagList=false;


  function handleClickTagList()
  {
    openTagList=!openTagList;
  }


  function deleteModbusTag(index)
  {
    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[index].delete=1;
  }

  function RestoreDeleteModbusTag(index)
  {
    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[index].delete=0;
  }



  let new_support_modbus_tag_modal=false;
  let new_support_modbus_tag_index=0;

  let new_support_modbus_tag=[
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },              
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  },
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  }

  ];


  function new_support_modbus_tag_trigger(index)
  {
    new_support_modbus_tag[index].delete=0;
    new_support_modbus_tag[index].support=1;
    new_support_modbus_tag[index].modbusTagName="";
    new_support_modbus_tag[index].specialFunction=0;


    new_support_modbus_tag_index=index;
    new_support_modbus_tag_modal=true;
  }


  function AddSupportedModbusTag()
  {
    new_support_modbus_tag_modal = false;

    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList=[...changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList,new_support_modbus_tag[new_support_modbus_tag_index]];
  }


  let modifyModbusTagModal=false;
  let modbusTagIndex=0
  let backupSupport_modbus_tag=
  {
      "delete":0,
      "support":1,
      "modbusTagName":"T1",
      "specialFunction":0
  };


  function TriggerModifyModbusTag(index)
  {
    backupSupport_modbus_tag.delete=changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[index].delete;
    backupSupport_modbus_tag.support=changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[index].support;
    backupSupport_modbus_tag.modbusTagName=changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[index].modbusTagName;
    backupSupport_modbus_tag.specialFunction=changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[index].specialFunction;

    modbusTagIndex=index;
    modifyModbusTagModal=true;
  }

  function ModifyModbusTag()
  {
    modifyModbusTagModal=false;
  }

  function NoModifyModbusTag()
  {
    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[modbusTagIndex].delete=backupSupport_modbus_tag.delete;
    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[modbusTagIndex].support=backupSupport_modbus_tag.support;
    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[modbusTagIndex].modbusTagName=backupSupport_modbus_tag.modbusTagName;
    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[modbusTagIndex].specialFunction=backupSupport_modbus_tag.specialFunction;
    modifyModbusTagModal=false;
  }



  let selectedNewClientCert = new Set();
  function handleMultipleCheckboxChange(ClientCertName, isChecked) 
  {
    if (isChecked) 
    {
        selectedNewClientCert.add(ClientCertName);
    } 
    else 
    {
        selectedNewClientCert.delete(ClientCertName);
    }

    console.log("++selectedNewClientCert:", selectedNewClientCert);
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


  async function getSmartConversionData () {
    const res = await fetch(window.location.origin+"/gETsConveRsion", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      sconversion_data =await res.json();
      console.log(sconversion_data);
      sconversionConfig.set(sconversion_data);

      changed_sconversion_data = JSON.parse(JSON.stringify(sconversion_data));
      saved_changed_sconversion_data= JSON.parse(JSON.stringify(sconversion_data));
      ChangedSConfigConfig.set(saved_changed_sconversion_data);

      opcua_serverEndUrl='opc.tcp://'+changed_sconversion_data.config.service_smartConversion.opcua_server.ip+':'+changed_sconversion_data.config.service_smartConversion.opcua_server.port+'/'+changed_sconversion_data.config.service_smartConversion.opcua_server.hostName;

      selectedNewClientCert.clear();
      for (let i=0; i < changed_sconversion_data.config.service_smartConversion.opcua_server.clientCertificate.length; i++)
      {
        selectedNewClientCert.add(changed_sconversion_data.config.service_smartConversion.opcua_server.clientCertificate[i])
      }


      if (saved_changed_modbus_data == "")
      {
        getModbusData();
      }

      getDataReady=1;
    
    }
  }

  function SaveOPCUAserver()
  {
    console.log("Save opcua server\r\n");
    if (opcua_server_changedValues.length !=0)
    {
      opcua_server_changedValues=[];
    }


    const regex = /^opc\.tcp:\/\/([^:]+):(\d+)\/([^\/]+)$/;
    const matches = opcua_serverEndUrl.match(regex);

    if (matches) 
    {
      const ip = matches[1];
      const port = parseInt(matches[2], 10);
      const hostName = matches[3];

      console.log("IP:", ip);       
      console.log("Port:", port);   
      console.log("hostName:", hostName); 
      changed_sconversion_data.config.service_smartConversion.opcua_server.ip=ip;
      changed_sconversion_data.config.service_smartConversion.opcua_server.port=port;
      changed_sconversion_data.config.service_smartConversion.opcua_server.hostName=hostName;
    } 
    else 
    {
      console.log("Invalid URL format");
    }

    let certArray = Array.from(selectedNewClientCert);
    changed_sconversion_data.config.service_smartConversion.opcua_server.clientCertificate=JSON.parse(JSON.stringify(certArray));
    compareObjects(changed_sconversion_data.config.service_smartConversion.opcua_server, sconversion_data.config.service_smartConversion.opcua_server,0,0,0,"none");


    OPCUA_Server_ConfigChangedLog.set(opcua_server_changedValues);
    saved_changed_sconversion_data=JSON.parse(JSON.stringify(changed_sconversion_data))
    ChangedSConfigConfig.set(saved_changed_sconversion_data);
    console.log(opcua_server_changedValues);

  }

  function SaveOPCUAclient()
  {
    console.log("Save opcua client\r\n");
    if (opcua_client_changedValues.length !=0)
    {
      opcua_client_changedValues=[];
    }


    compareObjects(changed_sconversion_data.config.service_smartConversion.opcua_client[0], sconversion_data.config.service_smartConversion.opcua_client[0],1,0,0, "none");


    OPCUA_Client_ConfigChangedLog.set(opcua_client_changedValues);
    saved_changed_sconversion_data=JSON.parse(JSON.stringify(changed_sconversion_data))
    ChangedSConfigConfig.set(saved_changed_sconversion_data);
    console.log(opcua_client_changedValues);

  }

  function saveOpcuaGateway()
  {
    console.log("Save opcua gateway\r\n");
    if (conversion_opcuagateway_changedValues.length !=0)
    {
      conversion_opcuagateway_changedValues=[];
    }


    compareObjects(changed_sconversion_data.config.service_smartConversion.opcuaGateway, sconversion_data.config.service_smartConversion.opcuaGateway,2,0,0,"none");


    Conversion_OpcuaGateway_ConfigChangedLog.set(conversion_opcuagateway_changedValues);
    saved_changed_sconversion_data=JSON.parse(JSON.stringify(changed_sconversion_data))
    ChangedSConfigConfig.set(saved_changed_sconversion_data);
    console.log(conversion_opcuagateway_changedValues);
  }


  function saveOpcua2Modbus()
  {
    console.log("save opcua 2 modbus");
    if (conversion_opcua2modbus_changedValues.length !=0)
    {
      conversion_opcua2modbus_changedValues=[];
    }


    compareObjects(changed_sconversion_data.config.service_smartConversion.opcua2modbus, sconversion_data.config.service_smartConversion.opcua2modbus,3,0,0,"none");



    let NonDeleteSupportedModbusTag=[];
    for (let i = 0; i< changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length; i++)
    {
      if (!changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[i].delete)
      {
        NonDeleteSupportedModbusTag=[...NonDeleteSupportedModbusTag, changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[i]]
      }

    }



    Conversion_Opcua2Modbus_ConfigChangedLog.set(conversion_opcua2modbus_changedValues);
    saved_changed_sconversion_data=JSON.parse(JSON.stringify(changed_sconversion_data))


    saved_changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList=JSON.parse(JSON.stringify(NonDeleteSupportedModbusTag));
    changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList=JSON.parse(JSON.stringify(NonDeleteSupportedModbusTag));



    ChangedSConfigConfig.set(saved_changed_sconversion_data);
    console.log(conversion_opcua2modbus_changedValues);

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

  let opcua_log="";


  async function getOpcuaLog() {
    const res = await fetch(window.location.origin+"/GEtopcuaLoG", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

        opcua_log =await res.text();
        console.log("system logOK");
        console.log(opcua_log.length);
 
    }
  }

  const RefreshLog = () =>
  {  
    getOpcuaLog();

  } 



  onMount(() => {

    console.log("conversion sessionid: ");
    console.log(sessionid);

    if (sessionid && sconversion_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getSmartConversionData();
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
        getOpcuaLog();

    }
    else if(sessionid && sconversion_data!="")
    {
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);
      getMachineCertificate();
      getCACertificate();
      getRemoteCertificate();
      getOpcuaLog();


      changed_sconversion_data=JSON.parse(JSON.stringify(saved_changed_sconversion_data));

      if (opcua_server_changedValues.length==0)
      {
          changed_sconversion_data.config.service_smartConversion.opcua_server=JSON.parse(JSON.stringify(sconversion_data.config.service_smartConversion.opcua_server)); 
      }

      opcua_serverEndUrl='opc.tcp://'+changed_sconversion_data.config.service_smartConversion.opcua_server.ip+':'+changed_sconversion_data.config.service_smartConversion.opcua_server.port+'/'+changed_sconversion_data.config.service_smartConversion.opcua_server.hostName;


      selectedNewClientCert.clear();
      for (let i=0; i < changed_sconversion_data.config.service_smartConversion.opcua_server.clientCertificate.length; i++)
      {
        selectedNewClientCert.add(changed_sconversion_data.config.service_smartConversion.opcua_server.clientCertificate[i])
      }
      


      if (opcua_client_changedValues.length==0)
      {
          changed_sconversion_data.config.service_smartConversion.opcua_client=JSON.parse(JSON.stringify(sconversion_data.config.service_smartConversion.opcua_client)); 
      }

      if (conversion_opcua2modbus_changedValues.length==0)
      {
          changed_sconversion_data.config.service_smartConversion.opcua2modbus=JSON.parse(JSON.stringify(sconversion_data.config.service_smartConversion.opcua2modbus)); 
      }

      if (conversion_opcuagateway_changedValues.length==0)
      {
          changed_sconversion_data.config.service_smartConversion.opcuaGateway=JSON.parse(JSON.stringify(sconversion_data.config.service_smartConversion.opcuaGateway)); 
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

  <TabItem open title="OPCUA" on:click={RefreshLog}>

<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Server
    </span>


<table>
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Endpoint Url</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={opcua_serverEndUrl}></td>

</tr>


 <tr>
    <td class="w-60"></td>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Local Certificate</p></td>



    <td class="pl-5 pt-5" colspan="5"><select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_server.localCertificate}>
<option disabled="" value="">Choose ...</option>

{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}

</select></td>


    </tr>





<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Authentication</p></td><td class="pl-5 pt-5">

<Toggle bind:checked={changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthentication}></Toggle>

</td>
</tr>

{#if changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthentication==1}
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right"></p></td><td class="pl-5 pt-1">
  <div class="flex gap-4">
{#if changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthenticationType==1}  
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthenticationType} value={1} {styleSpecial}>Username/Password</Radio>


      <input type="text" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_server.clientAccountPassword[0].account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"> <p class="pt-8">/</p> <input type="text" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_server.clientAccountPassword[0].password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500">

{:else}
  <Radio class="pt-10 pb-1" bind:group={changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthenticationType} value={1}>Username/Password</Radio>

{/if} 



  </div>

    <div class="flex gap-4">
  <Radio class="pt-10" bind:group={changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthenticationType} value={2}>Remote Certificate</Radio>
{#if changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthenticationType==2} 

<button color="blue" type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-1 text-sm text-white bg-gray-800 mt-6 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full w-48" on:click={handleClickTagList} on:keydown={() => {}}>Choose Certificate
{#if openTagList}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron up outline" viewBox="-8 -8 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg>
{/if}

</button>
{/if}

  </div>
      </td>

</tr>
{/if}


{#if changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthentication==1}

{#if changed_sconversion_data.config.service_smartConversion.opcua_server.clientAuthenticationType==2} 
{#if openTagList}

<tr><td class="w-60"></td>

<td><p class="pl-20 pt-4 text-lg font-light text-right"></td>
<td style="padding-left:11.5rem">

<div role="tooltip" tabindex="-1" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600 shadow-md divide-y z-50 w-48" > 
<ul class="w-44 p-3 space-y-3 text-sm">


{#if getRemoteCertReady== 1}
{#each remoteCertList as remoteCert, index}

<li><label class="text-sm rtl:text-right font-medium text-gray-900 dark:text-gray-300 flex items-center">
<input type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-600 dark:border-gray-500 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" on:change="{(e) => handleMultipleCheckboxChange(remoteCert, e.target.checked)}" checked={selectedNewClientCert.has(remoteCert)}> 
<p class="pl-2">{remoteCert}</p>
</label>
</li>

{/each}
{/if}


</ul>  

</div>

</td>


</tr>
{/if}
{/if}
{/if}





    <tr>
    <td class="w-60"></td>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Reverse Connection</p></td><td class="pl-5 pt-5">

    <Toggle bind:checked={changed_sconversion_data.config.service_smartConversion.opcua_server.reconverseConnection}></Toggle>

    </td>
    </tr>


{#if changed_sconversion_data.config.service_smartConversion.opcua_server.reconverseConnection == 1}  

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Endpoint Url</p></td>

      <td class="pl-5 pt-5">
    
      <input type="text" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_server.reconnectClientUrl[0]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-green-500">




      </td>

</tr>



{/if}

    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveOPCUAserver}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>

  </AccordionItem>

  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Client
    </span>



<table>
<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Endpoint Url</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_client[0].serverUrl} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


 <tr>
    <td class="w-60"></td>
      <td><p class="pl-10 pt-5 text-lg font-light text-right">Security Mode</p></td>

<td class="pl-5 pt-5"><div class="flex gap-4">

<Toggle bind:checked={changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityModeEnable}></Toggle>



{#if changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityModeEnable}


  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityMode} value={0}>Sign and Encrypt</Radio>
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityMode} value={1}>Sign</Radio>


{/if}
</div>
</td>

</tr>


{#if changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityModeEnable}

 <tr>
    <td class="w-60"></td>
    <td class="w-20"></td>
      <td class="pl-5 pt-5" colspan="5"><div class="flex gap-4"><p class="pl-1 pt-1 pb-1 text-lg font-light text-left">Security Policy</p>

    
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityPolicy} value={0}>Basic256Sha256</Radio>
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityPolicy} value={1}>Aes128Sha256RsaOaep</Radio>
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].securityPolicy} value={2}>Aes256Sha256RsaPss</Radio>
</div></td>


    </tr>

{/if}



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Authentication</p></td><td class="pl-5 pt-1">

  <Radio class="pt-8" bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].authentication} value={0}>Anonymous</Radio>
  <div class="flex gap-4">
{#if changed_sconversion_data.config.service_smartConversion.opcua_client[0].authentication==1}  
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].authentication} value={1} {styleSpecial}>Username/Password</Radio>


      <input type="text" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_client[0].clientAccount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500"> <p class="pt-8">/</p> <input type="text" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_client[0].clientPassword}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 h-10 mt-6 dark:bg-gray-700 dark:border-green-500">

{:else}
  <Radio class="pt-10 pb-1" bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].authentication} value={1}>Username/Password</Radio>

{/if} 



  </div>

    <div class="flex gap-4">
  <Radio class="pt-10" bind:group={changed_sconversion_data.config.service_smartConversion.opcua_client[0].authentication} value={2}>Local Certificate</Radio>
{#if changed_sconversion_data.config.service_smartConversion.opcua_client[0].authentication==2} 

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-5 h-10 w-48" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_client[0].clientCert}>
<option disabled="" value="">Choose ...</option>

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


<tr><td class="w-60"></td>
      <td><p class="w-60 pt-4 text-lg font-light text-right">Trusted Server Certificate</p></td><td class="pl-5 pt-1">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-5 h-10 w-48" bind:value={changed_sconversion_data.config.service_smartConversion.opcua_client[0].trustedServerCert}>
<option disabled="" value="">Choose ...</option>

{#if getRemoteCertReady== 1}
{#each remoteCertList as remoteCert, index}
<option value={remoteCert}>{remoteCert}</option>
{/each}
{/if}

</select>



      </td>

      </tr>



    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveOPCUAclient}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>


  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">
    Log
    </span>

<pre style="white-space: pre-wrap;">{opcua_log}</pre>

    </AccordionItem>




</Accordion>


  </TabItem>

  <TabItem title="Conversion">

<Accordion>
  <AccordionItem {defaultClass}>

   <span slot="header" class="pl-4">
    OPC UA TO Modbus
    </span>


<table class="mb-10">

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-right">Enable</p></td>
<td class="pl-5 pt-5">

<Toggle bind:checked={changed_sconversion_data.config.service_smartConversion.opcua2modbus.enable}></Toggle>

</td>

    </tr>
{#if changed_sconversion_data.config.service_smartConversion.opcua2modbus.enable==1}

    <tr><td class="w-48"></td>

<td class="pl-5 pt-5">
 <div class="flex gap-4">
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua2modbus.dataSource} value={0}>Modbus Tag</Radio>
{#if changed_sconversion_data.config.service_smartConversion.opcua2modbus.dataSource==0}    
      <div class="relative"><input id="sampling rate" class="block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="sampling_rate" placeholder=" " type="number" bind:value={changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusSamplingRateMS}> <label for="sampling_rate" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">sampling_rate(ms)</label></div>
{:else}
      <div class="relative"><input id="sampling rate" class="block w-36 text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3 disabled:cursor-not-allowed disabled:opacity-50" name="sampling_rate" placeholder=" " type="number" bind:value={changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusSamplingRateMS} disabled> <label for="sampling_rate" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">sampling_rate(ms)</label></div>

{/if}  
  <Radio bind:group={changed_sconversion_data.config.service_smartConversion.opcua2modbus.dataSource} value={1}>Node Number</Radio>

{#if changed_sconversion_data.config.service_smartConversion.opcua2modbus.dataSource==1}    
      <input type="number" bind:value={changed_sconversion_data.config.service_smartConversion.opcua2modbus.nodeNumber} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 h-10 w-20 p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="number" bind:value={changed_sconversion_data.config.service_smartConversion.opcua2modbus.nodeNumber} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 h-10 w-20 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{/if}


</div>
</td>
    </tr>
{/if}    

</table>

{#if changed_sconversion_data.config.service_smartConversion.opcua2modbus.enable==1}

{#if changed_sconversion_data.config.service_smartConversion.opcua2modbus.dataSource==0}

<Table shadow striped={true} tableNoWFull={true}>

  <TableHead>


    <TableHeadCell class="!p-4"></TableHeadCell>
    <TableHeadCell class="!p-4"></TableHeadCell>
        <TableHeadCell class="!p-4"></TableHeadCell>  
    <TableHeadCell class="w-10">Support</TableHeadCell>
        <TableHeadCell>No</TableHeadCell>  
    <TableHeadCell class="w-18">Modbus Tag</TableHeadCell>
    <TableHeadCell class="w-18">Special Function</TableHeadCell>



  </TableHead>
 <TableBody>



{#each changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList as ModbusTag, index}

{#if ModbusTag.delete}


  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteModbusTag(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={ModbusTag.support} disabled>
      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{ModbusTag.modbusTagName}</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{#if ModbusTag.specialFunction==0}None {:else if ModbusTag.specialFunction==1}SF1{:else if ModbusTag.specialFunction==2}SF2{/if}</td>

</tr>

{:else}

 <TableBodyRow>
 <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyModbusTag(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 


</svg>
      </button>

       </TableBodyCell>


 <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteModbusTag(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

<TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={ModbusTag.support}>

</TableBodyCell>
<TableBodyCell class="w-10">{index+1}</TableBodyCell>

    <TableBodyCell class="w-18">{ModbusTag.modbusTagName}</TableBodyCell>
    <TableBodyCell class="w-18">{#if ModbusTag.specialFunction==0}None {:else if ModbusTag.specialFunction==1}SF1{:else if ModbusTag.specialFunction==2}SF2{/if}</TableBodyCell>
    </TableBodyRow>

{/if}

{/each}





<TableBodyRow>

{#if changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length <50}

<TableBodyCell class="!p-4 w-10">
      <button on:click={() => new_support_modbus_tag_trigger(changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList.length)}>
      <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

      <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
      </svg>
      </button>
      </TableBodyCell> 


 {:else}
 <TableBodyCell class="!p-4 w-16"> </TableBodyCell>
 {/if}

</TableBodyRow>



    </TableBody>

</Table>

{/if}

{/if}

<table>
    <tr>
    <td class="w-60"></td>
        <td class="w-60"></td>
        </tr>
    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveOpcua2Modbus}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={new_support_modbus_tag_modal} size="md" class="w-full" autoclose>
  <form action="#">


<label>
  <input class="center" type=checkbox bind:checked={new_support_modbus_tag[new_support_modbus_tag_index].support}>
  Support
</label>

<p class="mt-10"></p>


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Tag</p></td>
      <td class="pl-5 pt-5">
      <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" bind:value={new_support_modbus_tag[new_support_modbus_tag_index].modbusTagName}>
<option disabled="" value="">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as ModbusTag, index}
<option value={ModbusTag.tagName}>{ModbusTag.tagName}</option>
{/each}
{/if}

</select>

      </td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Special Function</p></td>
      <td class="pl-5 pt-5">
      <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" bind:value={new_support_modbus_tag[new_support_modbus_tag_index].specialFunction}>
<option disabled="" value="">Choose ...</option>
<option value={0}>None</option>
<option value={1}>SF1</option>
<option value={2}>SF2</option>

</select>
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
    <td class="pl-20"><Button color="dark" pill={true} on:click={AddSupportedModbusTag}>Add</Button></td>


    </tr>

  </table>


</form>
</Modal>


<Modal bind:open={modifyModbusTagModal} size="md" class="w-full" permanent={true}>
<form action="#">
<label>
  <input type="checkbox" bind:checked={changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[modbusTagIndex].support}>
  Support
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyModbusTag}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Tag</p></td>
      <td class="pl-5 pt-5">
      <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" bind:value={changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[modbusTagIndex].modbusTagName}>
<option disabled="" value="">Choose ...</option>
{#if saved_changed_modbus_data != ""}
{#each saved_changed_modbus_data.config.fieldManagement_modbus_tag as ModbusTag, index}
<option value={ModbusTag.tagName}>{ModbusTag.tagName}</option>
{/each}
{/if}

</select>

      </td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Special Function</p></td>
      <td class="pl-5 pt-5">
      <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-48" bind:value={changed_sconversion_data.config.service_smartConversion.opcua2modbus.modbusTagList[modbusTagIndex].specialFunction}>
<option disabled="" value="">Choose ...</option>
<option value={0}>None</option>
<option value={1}>SF1</option>
<option value={2}>SF2</option>


</select>
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
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyModbusTag}>Modify</Button></td>


    </tr>

  </table>
  </form>
</Modal>




</table>



  </AccordionItem>

  <AccordionItem {defaultClass}>

   <span slot="header" class="pl-4">
    OPC UA TO OPC UA
    </span>


<table>

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-right">Enable</p></td>
<td class="pl-5 pt-5">

<Toggle bind:checked={changed_sconversion_data.config.service_smartConversion.opcuaGateway.enable}></Toggle>

</td>
<td></td>

    </tr>

        <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveOpcuaGateway}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

  </AccordionItem>


</Accordion>
  </TabItem>


</Tabs>