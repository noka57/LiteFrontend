<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import {
    azureConfig,
    ChangedAzureConfig,
    AzHub_ConfigChangedLog,
    AzHubDPS_ConfigChangedLog,
    AzCentral_ConfigChangedLog
  } from "./configG.js"


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let azure_data="";
  let changed_azure_data = {};
  let saved_changed_azure_data ={};

  let azhub_changedValues = [];
  let azhub_current_index;
  let new_azhub_index;

  let azhubdps_changedValues=[];
  let azcentral_changedValues=[];


  let NewHubConnectionStringEnable=false;
  let NewHubConnectionString="";

  let ModifyHubConnectionStringEnable=false;
  let ModifyHubConnectionString="";

  let getDataReady=0;


  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });




  azureConfig.subscribe(val => {
      azure_data = val;
  });


  AzHub_ConfigChangedLog.subscribe(val => {
      azhub_changedValues = val;
  });


  AzHubDPS_ConfigChangedLog.subscribe(val => {
      azhubdps_changedValues = val;
  });

  AzCentral_ConfigChangedLog.subscribe(val => {
      azcentral_changedValues = val;
  });

  ChangedAzureConfig.subscribe(val => {
      saved_changed_azure_data = val;
  });


  let modify_Modal=false;
  let modify_index;

  let BackupItem={
    enable: false,
    delete:false,
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  };

  let NewItem=[
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""

  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""

  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""

  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  },
  {
    enable: false,
    delete:false,    
    azHubName: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:""
  }
  ];

  let new_item_index;
  let new_modal;


  function NewAzHub_Item_Invoker(index)
  {
    NewItem[index].enable=true;
    NewItem[index].delete=false;    
    NewItem[index].azHubName=""
    NewItem[index].deviceID="";
    NewItem[index].symmetric_key_primary="";
    NewItem[index].modelID="";
    NewItem[index].attestation=0;
    NewItem[index].machineCAcert="";
    NewItem[index].machineCert="";
    new_item_index=index;
    NewHubConnectionStringEnable=false;
    NewHubConnectionString="";
    new_modal = true;
  }


  function NewHubConnectionStringEnableChanged()
  {
    if (NewHubConnectionStringEnable)
    {
      NewItem[new_item_index].attestation=0
    }
  }



  function NewComposeConnectionString()
  {
    console.log("NewComposeConnectionString")
    if (NewItem[new_item_index].azHubName !=""&&
        NewItem[new_item_index].deviceID !=""&&
        NewItem[new_item_index].symmetric_key_primary !="" &&
        NewItem[new_item_index].attestation==0)
    {

      NewHubConnectionString="HostName="+NewItem[new_item_index].azHubName+".azure-devices.net;DeviceId="+NewItem[new_item_index].deviceID+";SharedAccessKey="+NewItem[new_item_index].symmetric_key_primary;
    }
    else
    {
      console.log(NewItem[new_item_index].azHubName);
      console.log(NewItem[new_item_index].deviceID);
      console.log(NewItem[new_item_index].symmetric_key_primary);
      console.log(NewItem[new_item_index].attestation);
    }
   


  }

  function NewHubConnectionStringParse()
  {
    console.log(NewHubConnectionString)
    let hostname = "";
    let deviceId = "";
    let sharedAccessKey = "";
    let regex = /([^;=]+)=([^;]*)/g;

    let match;
    while ((match = regex.exec(NewHubConnectionString)) !== null) {
      let key = match[1].trim();
      let value = match[2].trim();

      switch (key) {
        case 'HostName':
          hostname = value;
          break;
        case 'DeviceId':
          deviceId = value;
          break;
        case 'SharedAccessKey':
          sharedAccessKey = value;
          break;
        default:

          break;
      }
    }

    let parts = hostname.split('.');


    let hubname = parts[0];

    console.log('HostName:', hostname);
    console.log('hub name:', hubname);
    console.log('DeviceId:', deviceId);
    console.log('SharedAccessKey:', sharedAccessKey);
    NewItem[new_item_index].azHubName=hubname;
    NewItem[new_item_index].deviceID=deviceId;
    NewItem[new_item_index].symmetric_key_primary=sharedAccessKey;

  }


  function AddNewAZhub(index)
  {
    new_modal = false;

    changed_azure_data.config.cloud_azHub_profile=[...changed_azure_data.config.cloud_azHub_profile,NewItem[index]];
  }


  function deleteAzHub(index)
  {
    changed_azure_data.config.cloud_azHub_profile[index].delete=true;
  }

  function RestoreDeleteAzHub(index)
  {
    changed_azure_data.config.cloud_azHub_profile[index].delete=false;
  }


  function ModifyComposeHubConnectionString()
  {
    console.log("ModifyHubConnectionString")
    if (changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName !=""&&
        changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID !=""&&
        changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary !="" &&
        changed_azure_data.config.cloud_azHub_profile[modify_index].attestation==0)
    {

      ModifyHubConnectionString="HostName="+changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName+".azure-devices.net;DeviceId="+changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID+";SharedAccessKey="+changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary;
    }
    else
    {
      console.log(changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName);
      console.log(changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID);
      console.log(changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary);
      console.log(changed_azure_data.config.cloud_azHub_profile[modify_index].attestation);
    }  
  }


  function ModifyHubConnectionStringEnableChanged()
  {
    if (ModifyHubConnectionStringEnable)
    {
      changed_azure_data.config.cloud_azHub_profile[modify_index].attestation=0
    }
  }

  function ModifyHubConnectionStringParse()
  {
    console.log(ModifyHubConnectionString)
    let hostname = "";
    let deviceId = "";
    let sharedAccessKey = "";
    let regex = /([^;=]+)=([^;]*)/g;

    let match;
    while ((match = regex.exec(ModifyHubConnectionString)) !== null) {
      let key = match[1].trim();
      let value = match[2].trim();

      switch (key) {
        case 'HostName':
          hostname = value;
          break;
        case 'DeviceId':
          deviceId = value;
          break;
        case 'SharedAccessKey':
          sharedAccessKey = value;
          break;
        default:

          break;
      }
    }

    let parts = hostname.split('.');


    let hubname = parts[0];

    console.log('HostName:', hostname);
    console.log('hub name:', hubname);
    console.log('DeviceId:', deviceId);
    console.log('SharedAccessKey:', sharedAccessKey);
    changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName=hubname;
    changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID=deviceId;
    changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary=sharedAccessKey;
  }

  function TriggerModifyAZhub(index)
  {
    modify_Modal=true;
    modify_index=index;

    if (changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName !=""&&
        changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID !=""&&
        changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary !="" &&
        changed_azure_data.config.cloud_azHub_profile[modify_index].attestation==0)
    {

      ModifyHubConnectionString="HostName="+changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName+".azure-devices.net;DeviceId="+changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID+";SharedAccessKey="+changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary;
    }

    ModifyHubConnectionStringEnable=false;
    BackupItem.enable=changed_azure_data.config.cloud_azHub_profile[index].enable;
    BackupItem.delete=changed_azure_data.config.cloud_azHub_profile[index].delete;    
    BackupItem.azHubName=changed_azure_data.config.cloud_azHub_profile[index].azHubName;
    BackupItem.deviceID=changed_azure_data.config.cloud_azHub_profile[index].deviceID;
    BackupItem.symmetric_key_primary=changed_azure_data.config.cloud_azHub_profile[index].symmetric_key_primary;
    BackupItem.modelID=changed_azure_data.config.cloud_azHub_profile[index].modelID;
    BackupItem.attestation=changed_azure_data.config.cloud_azHub_profile[index].attestation;
    BackupItem.machineCAcert=changed_azure_data.config.cloud_azHub_profile[index].machineCAcert;
    BackupItem.machineCert=changed_azure_data.config.cloud_azHub_profile[index].machineCert;

  }

  function NoModifyAZhub(index)
  {
    modify_Modal=false;
    changed_azure_data.config.cloud_azHub_profile[index].enable= BackupItem.enable;
    changed_azure_data.config.cloud_azHub_profile[index].delete= BackupItem.delete;    
    changed_azure_data.config.cloud_azHub_profile[index].azHubName= BackupItem.azHubName;
    changed_azure_data.config.cloud_azHub_profile[index].deviceID= BackupItem.deviceID;
    changed_azure_data.config.cloud_azHub_profile[index].symmetric_key_primary= BackupItem.symmetric_key_primary;
    changed_azure_data.config.cloud_azHub_profile[index].modelID= BackupItem.modelID;
    changed_azure_data.config.cloud_azHub_profile[index].attestation= BackupItem.attestation;
    changed_azure_data.config.cloud_azHub_profile[index].machineCAcert= BackupItem.machineCAcert;
    changed_azure_data.config.cloud_azHub_profile[index].machineCert= BackupItem.machineCert;    

  }

  function ModifyAZhub(index)
  {
    modify_Modal=false;
  }


  let BackupItemDPS={
    enable: false,
    delete: false,
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0        
  };

  let NewItemDPS=[
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0  
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0     
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0     
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0     
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0   
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0     
  },
  {
    enable: false,
    delete: false,    
    idScope: "",
    RegistrationID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0     
  }


  ];

  let modify_Modal_dps=false;
  let modify_dps_index;


  let new_item_dps_index;
  let new_modal_dps;


  function NewAzHubDPS_Item_Invoker(index)
  {
    NewItemDPS[index].enable=true;
    NewItemDPS[index].delete=false;
    NewItemDPS[index].idScope=""
    NewItemDPS[index].RegistrationID="";
    NewItemDPS[index].symmetric_key_primary="";
    NewItemDPS[index].modelID="";
    NewItemDPS[index].attestation=0;
    NewItemDPS[index].machineCAcert="";
    NewItemDPS[index].machineCert="";
    NewItemDPS[index].enrollment=0;    
    new_item_dps_index=index;
    new_modal_dps = true;
  }

  function AddNewAZhubDPS(index)
  {
    new_modal_dps = false;

    changed_azure_data.config.cloud_azDPS_profile=[...changed_azure_data.config.cloud_azDPS_profile,NewItemDPS[index]];
  }

  function RestoreDeleteAzHubDPS(index)
  {
    changed_azure_data.config.cloud_azDPS_profile[index].delete=false;
  }


  function deleteAZhubDPS(index)
  {
    changed_azure_data.config.cloud_azDPS_profile[index].delete=true;
  }


  function TriggerModifyAZhubDPS(index)
  {
    modify_Modal_dps=true;
    modify_dps_index=index;
    BackupItemDPS.enable=changed_azure_data.config.cloud_azDPS_profile[index].enable;
    BackupItemDPS.delete=changed_azure_data.config.cloud_azDPS_profile[index].delete;    
    BackupItemDPS.idScope=changed_azure_data.config.cloud_azDPS_profile[index].idScope;
    BackupItemDPS.RegistrationID=changed_azure_data.config.cloud_azDPS_profile[index].RegistrationID;
    BackupItemDPS.symmetric_key_primary=changed_azure_data.config.cloud_azDPS_profile[index].symmetric_key_primary;
    BackupItemDPS.modelID=changed_azure_data.config.cloud_azDPS_profile[index].modelID;
    BackupItemDPS.attestation=changed_azure_data.config.cloud_azDPS_profile[index].attestation;
    BackupItemDPS.machineCAcert=changed_azure_data.config.cloud_azDPS_profile[index].machineCAcert;
    BackupItemDPS.machineCert=changed_azure_data.config.cloud_azDPS_profile[index].machineCert;    
    BackupItemDPS.enrollment=changed_azure_data.config.cloud_azDPS_profile[index].enrollment;
  }

  function NoModifyAZhubDPS(index)
  {
    modify_Modal_dps=false;
    changed_azure_data.config.cloud_azDPS_profile[index].enable= BackupItemDPS.enable;
    changed_azure_data.config.cloud_azDPS_profile[index].delete= BackupItemDPS.delete;    
    changed_azure_data.config.cloud_azDPS_profile[index].idScope= BackupItemDPS.idScope;
    changed_azure_data.config.cloud_azDPS_profile[index].RegistrationID= BackupItemDPS.RegistrationID;
    changed_azure_data.config.cloud_azDPS_profile[index].symmetric_key_primary= BackupItemDPS.symmetric_key_primary;
    changed_azure_data.config.cloud_azDPS_profile[index].modelID= BackupItemDPS.modelID;
    changed_azure_data.config.cloud_azDPS_profile[index].attestation= BackupItemDPS.attestation;
    changed_azure_data.config.cloud_azDPS_profile[index].machineCAcert= BackupItemDPS.machineCAcert;
    changed_azure_data.config.cloud_azDPS_profile[index].machineCert= BackupItemDPS.machineCert;    
    changed_azure_data.config.cloud_azDPS_profile[index].enrollment= BackupItemDPS.enrollment;  
  }

  function ModifyAZhubDPS(index)
  {
    modify_Modal_dps=false;
  }


  let BackupItemCentral={
    enable: false,
    delete: false,
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0      
  };

  let NewItemCentral=[
  {
    enable: false,
    delete: false,    
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0      
  },
  {
    enable: false,
    delete: false,
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0      
  },
  {
    enable: false,
    delete: false,
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0      
  },
  {
    enable: false,
    delete: false,
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  },
  {
    enable: false,
    delete: false,    
    applicationName:"",
    idScope: "",
    deviceID:"",
    symmetric_key_primary:"",
    modelID:"",
    attestation:0,
    machineCAcert:"",
    machineCert:"",
    enrollment:0    
  }


  ];

  let modify_Modal_central=false;
  let modify_central_index;


  let new_item_central_index;
  let new_modal_central;


  function NewAzCentral_Item_Invoker(index)
  {
    NewItemCentral[index].enable=true;
    NewItemCentral[index].delete=false;    
    NewItemCentral[index].applicationName=""
    NewItemCentral[index].idScope=""
    NewItemCentral[index].deviceID="";
    NewItemCentral[index].symmetric_key_primary="";
    NewItemCentral[index].modelID="";
    NewItemCentral[index].attestation=0;
    NewItemCentral[index].machineCAcert="";
    NewItemCentral[index].machineCert="";
    NewItemCentral[index].enrollment=0;
    new_item_central_index=index;
    new_modal_central = true;
  }

  function AddNewAZCentral(index)
  {
    new_modal_central = false;

    changed_azure_data.config.cloud_azCentral_profile=[...changed_azure_data.config.cloud_azCentral_profile,NewItemCentral[index]];
  }


  function deleteAZCentral(index)
  {
    changed_azure_data.config.cloud_azCentral_profile[index].delete=true;

  }

  function RestoreDeleteAZCentral(index)
  {
    changed_azure_data.config.cloud_azCentral_profile[index].delete=false;
  }


  function TriggerModifyAZCentral(index)
  {
    modify_Modal_central=true;
    modify_central_index=index;
    BackupItemCentral.enable=changed_azure_data.config.cloud_azCentral_profile[index].enable;
    BackupItemCentral.delete=changed_azure_data.config.cloud_azCentral_profile[index].delete;    
    BackupItemCentral.applicationName=changed_azure_data.config.cloud_azCentral_profile[index].applicationName;    
    BackupItemCentral.idScope=changed_azure_data.config.cloud_azCentral_profile[index].idScope;
    BackupItemCentral.deviceID=changed_azure_data.config.cloud_azCentral_profile[index].deviceID;
    BackupItemCentral.symmetric_key_primary=changed_azure_data.config.cloud_azCentral_profile[index].symmetric_key_primary;
    BackupItemCentral.modelID=changed_azure_data.config.cloud_azCentral_profile[index].modelID;
    BackupItemCentral.attestation=changed_azure_data.config.cloud_azCentral_profile[index].attestation;
    BackupItemCentral.machineCAcert=changed_azure_data.config.cloud_azCentral_profile[index].machineCAcert;
    BackupItemCentral.machineCert=changed_azure_data.config.cloud_azCentral_profile[index].machineCert;
    BackupItemCentral.enrollment=changed_azure_data.config.cloud_azCentral_profile[index].enrollment;

  }

  function NoModifyAZCentral(index)
  {
    modify_Modal_central=false;
    changed_azure_data.config.cloud_azCentral_profile[index].enable=BackupItemCentral.enable;
    changed_azure_data.config.cloud_azCentral_profile[index].delete=BackupItemCentral.delete;    
    changed_azure_data.config.cloud_azCentral_profile[index].applicationName=BackupItemCentral.applicationName;    
    changed_azure_data.config.cloud_azCentral_profile[index].idScope=BackupItemCentral.idScope;
    changed_azure_data.config.cloud_azCentral_profile[index].deviceID=BackupItemCentral.deviceID;
    changed_azure_data.config.cloud_azCentral_profile[index].symmetric_key_primary=BackupItemCentral.symmetric_key_primary;
    changed_azure_data.config.cloud_azCentral_profile[index].modelID=BackupItemCentral.modelID;
    changed_azure_data.config.cloud_azCentral_profile[index].attestation=BackupItemCentral.attestation;
    changed_azure_data.config.cloud_azCentral_profile[index].machineCAcert=BackupItemCentral.machineCAcert;
    changed_azure_data.config.cloud_azCentral_profile[index].machineCert=BackupItemCentral.machineCert;    
    changed_azure_data.config.cloud_azCentral_profile[index].enrollment=BackupItemCentral.enrollment; 
  }

  function ModifyAZCentral(index)
  {
    modify_Modal_central=false;
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
                if (type == 0)
                {
                  azhub_changedValues=[...azhub_changedValues, changedstr];
                }
                else if (type ==1)
                {
                  azhubdps_changedValues=[...azhubdps_changedValues, changedstr];              
                }
                else if (type ==2)
                {
                  azcentral_changedValues=[...azcentral_changedValues, changedstr];              
                }
              }

            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 0)
              {
                azhub_changedValues=[...azhub_changedValues, changedstr];
              }
              else if (type ==1)
              {
                azhubdps_changedValues=[...azhubdps_changedValues, changedstr];              
              }
              else if (type ==2)
              {
                azcentral_changedValues=[...azcentral_changedValues, changedstr];              
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
            azhub_changedValues=[...azhub_changedValues, changedstr];
          }
          else if (type ==1)
          {
            azhubdps_changedValues=[...azhubdps_changedValues, changedstr];              
          }
          else if (type ==2)
          {
            azcentral_changedValues=[...azcentral_changedValues, changedstr];              
          }          
        }
      }
  }





  function saveAzHub()
  {
    console.log("save azhub");
    if (azhub_changedValues.length !=0)
    {
      azhub_changedValues=[];
    }

    for (let i = 0; i < Math.min(changed_azure_data.config.cloud_azHub_profile.length, azure_data.config.cloud_azHub_profile.length); i++) 
    {
      compareObjects(changed_azure_data.config.cloud_azHub_profile[i], azure_data.config.cloud_azHub_profile[i], 0, 1,i+1);
    }

    if (changed_azure_data.config.cloud_azHub_profile.length > azure_data.config.cloud_azHub_profile.length)
    {
      let addedCount=changed_azure_data.config.cloud_azHub_profile.length-azure_data.config.cloud_azHub_profile.length;
      for (let j=azure_data.config.cloud_azHub_profile.length; j < changed_azure_data.config.cloud_azHub_profile.length; j++)
      {
        if (changed_azure_data.config.cloud_azHub_profile[j].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Azure Hub List";
        azhub_changedValues=[...azhub_changedValues, changedstr];
      }
    }

    if (changed_azure_data.config.cloud_azHub_profile.length < azure_data.config.cloud_azHub_profile.length)
    {
      let deletedCount=azure_data.config.cloud_azHub_profile.length-changed_azure_data.config.cloud_azHub_profile.length;
      let changedstr="Delete "+deletedCount+" item(s) from Azure Hub List";
      azhub_changedValues=[...azhub_changedValues, changedstr];
    }



    let tempForDelete=[];
    for (let i = 0; i< changed_azure_data.config.cloud_azHub_profile.length; i++)
    {
      if (!changed_azure_data.config.cloud_azHub_profile[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_azure_data.config.cloud_azHub_profile[i]]
      }

    }

    saved_changed_azure_data.config.cloud_azHub_profile=JSON.parse(JSON.stringify(tempForDelete));
    changed_azure_data.config.cloud_azHub_profile=JSON.parse(JSON.stringify(tempForDelete));


    AzHub_ConfigChangedLog.set(azhub_changedValues);
   // saved_changed_azure_data.config.cloud_azHub_profile=JSON.parse(JSON.stringify(changed_azure_data.config.cloud_azHub_profile));

    ChangedAzureConfig.set(saved_changed_azure_data);
    console.log(azhub_changedValues);    

  }

  function saveAzDPS()
  {
    console.log("save azhubdps");
    if (azhubdps_changedValues.length !=0)
    {
      azhubdps_changedValues=[];
    }

    for (let i = 0; i < Math.min(changed_azure_data.config.cloud_azDPS_profile.length, azure_data.config.cloud_azDPS_profile.length); i++) 
    {
      compareObjects(changed_azure_data.config.cloud_azDPS_profile[i], azure_data.config.cloud_azDPS_profile[i], 1, 1,i+1);
    }

    if (changed_azure_data.config.cloud_azDPS_profile.length > azure_data.config.cloud_azDPS_profile.length)
    {
      let addedCount=changed_azure_data.config.cloud_azDPS_profile.length-azure_data.config.cloud_azDPS_profile.length;
      for (let j=azure_data.config.cloud_azDPS_profile.length; j < changed_azure_data.config.cloud_azDPS_profile.length; j++)
      {
        if (changed_azure_data.config.cloud_azDPS_profile[j].delete)
        {
          addedCount--;
        }
      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Azure DPS List";
        azhubdps_changedValues=[...azhubdps_changedValues, changedstr];
      }
    }


    if (changed_azure_data.config.cloud_azDPS_profile.length < azure_data.config.cloud_azDPS_profile.length)
    {
      let deletedCount=azure_data.config.cloud_azDPS_profile.length-changed_azure_data.config.cloud_azDPS_profile.length;
      let changedstr="Delete "+deletedCount+" item(s) from Azure DPS List";
      azhubdps_changedValues=[...azhubdps_changedValues, changedstr];
    }


    let tempForDelete=[];
    for (let i = 0; i< changed_azure_data.config.cloud_azDPS_profile.length; i++)
    {
      if (!changed_azure_data.config.cloud_azDPS_profile[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_azure_data.config.cloud_azDPS_profile[i]]
      }

    }


    AzHubDPS_ConfigChangedLog.set(azhubdps_changedValues);
    saved_changed_azure_data.config.cloud_azDPS_profile=JSON.parse(JSON.stringify(tempForDelete));
    changed_azure_data.config.cloud_azDPS_profile=JSON.parse(JSON.stringify(tempForDelete));

   // saved_changed_azure_data.config.cloud_azDPS_profile=JSON.parse(JSON.stringify(changed_azure_data.config.cloud_azDPS_profile));

    ChangedAzureConfig.set(saved_changed_azure_data);
    console.log(azhubdps_changedValues); 

  }

  function saveAzCentral()
  {
    console.log("save az central");
    if (azcentral_changedValues.length !=0)
    {
      azcentral_changedValues=[];
    }

    for (let i = 0; i < Math.min(changed_azure_data.config.cloud_azCentral_profile.length, azure_data.config.cloud_azCentral_profile.length); i++) 
    {
      compareObjects(changed_azure_data.config.cloud_azCentral_profile[i], azure_data.config.cloud_azCentral_profile[i], 2, 1,i+1);
    }

    if (changed_azure_data.config.cloud_azCentral_profile.length > azure_data.config.cloud_azCentral_profile.length)
    {
      let addedCount=changed_azure_data.config.cloud_azCentral_profile.length-azure_data.config.cloud_azCentral_profile.length;
      
      for (let j=azure_data.config.cloud_azCentral_profile.length;j < changed_azure_data.config.cloud_azCentral_profile.length; j++)
      {
        if (changed_azure_data.config.cloud_azCentral_profile[j].delete)
        {
          addedCount--;
        }

      }

      if (addedCount > 0)
      {
        let changedstr="Add "+addedCount+" item(s) to Azure Central List";
        azcentral_changedValues=[...azcentral_changedValues, changedstr];
      }
    }


    AzCentral_ConfigChangedLog.set(azcentral_changedValues);

    let tempForDelete=[];
    for (let i = 0; i< changed_azure_data.config.cloud_azCentral_profile.length; i++)
    {
      if (!changed_azure_data.config.cloud_azCentral_profile[i].delete)
      {
        tempForDelete=[...tempForDelete, changed_azure_data.config.cloud_azCentral_profile[i]]
      }
    }

    saved_changed_azure_data.config.cloud_azCentral_profile=JSON.parse(JSON.stringify(tempForDelete));
    changed_azure_data.config.cloud_azCentral_profile=JSON.parse(JSON.stringify(tempForDelete));


  //  saved_changed_azure_data.config.cloud_azCentral_profile=JSON.parse(JSON.stringify(changed_azure_data.config.cloud_azCentral_profile));

    ChangedAzureConfig.set(saved_changed_azure_data);
    console.log(azcentral_changedValues);    

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

      changed_azure_data = JSON.parse(JSON.stringify(azure_data));
      saved_changed_azure_data= JSON.parse(JSON.stringify(azure_data));
      ChangedAzureConfig.set(saved_changed_azure_data);
      getDataReady=1;

    }
  }



  onMount(() => {

    console.log("azHub sessionid: ");
    console.log(sessionid);


    if (sessionid && azure_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getAzureData();
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
    }
    else if(sessionid && azure_data!="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
        changed_azure_data = JSON.parse(JSON.stringify(saved_changed_azure_data));
        getDataReady=1;

        if (azhub_changedValues.length == 0)
        {
          changed_azure_data.config.cloud_azHub_profile = JSON.parse(JSON.stringify(azure_data.config.cloud_azHub_profile));
        }

        if (azhubdps_changedValues.length == 0)
        {
          changed_azure_data.config.cloud_azDPS_profile = JSON.parse(JSON.stringify(azure_data.config.cloud_azDPS_profile));
        }


        if (azcentral_changedValues.length == 0)
        {
          changed_azure_data.config.cloud_azCentral_profile = JSON.parse(JSON.stringify(azure_data.config.cloud_azCentral_profile));
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
  <TabItem open title="Hub">

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Hub Name</TableHeadCell>
    <TableHeadCell class="w-18">Device ID</TableHeadCell>
    <TableHeadCell class="w-18">Attestation</TableHeadCell>        
    <TableHeadCell class="w-18">Model ID</TableHeadCell>       
     </TableHead>
  <TableBody>


{#if getDataReady == 1}
{#each changed_azure_data.config.cloud_azHub_profile as azHub, index}

{#if azHub.delete}

    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteAzHub(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={azHub.enable} disabled>

</td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azHub.azHubName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azHub.deviceID}</td>
{#if azHub.attestation == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">SAS</td> 
{:else if azHub.attestation ==1}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">X509 Certificate</td>  
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>  
{/if}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azHub.modelID}</td>

</tr>

{:else}
    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyAZhub(index)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteAzHub(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


               <TableBodyCell class="w-10"><input type="checkbox"  bind:checked={azHub.enable}></TableBodyCell>

      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{azHub.azHubName}</TableBodyCell>
       <TableBodyCell class="w-18">{azHub.deviceID}</TableBodyCell>
{#if azHub.attestation == 0}
       <TableBodyCell class="w-18">SAS</TableBodyCell> 
{:else if azHub.attestation ==1}

       <TableBodyCell class="w-18">X509 Certificate</TableBodyCell>  
{:else}
       <TableBodyCell class="w-18"></TableBodyCell>  
{/if}

     
       <TableBodyCell class="w-18">{azHub.modelID}</TableBodyCell>
    </TableBodyRow>

{/if}

{/each}
{/if}


 <TableBodyRow>
    <TableBodyCell class="!p-4 w-10">

{#if getDataReady == 1}
{#if changed_azure_data.config.cloud_azHub_profile.length < 10}
    <button on:click={() => NewAzHub_Item_Invoker(changed_azure_data.config.cloud_azHub_profile.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>

{/if} 
{/if} 
</TableBodyCell>
    <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="!p-0 w-10"></TableBodyCell>

    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
       <TableBodyCell class="w-18"></TableBodyCell>
       <TableBodyCell class="w-18"></TableBodyCell>
         <TableBodyCell class="w-18"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveAzHub}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



 </TableBody>

<Modal bind:open={modify_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_azure_data.config.cloud_azHub_profile[modify_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyAZhub(modify_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>

<tr>
<td class="pl-5 pt-5">
<input type="checkbox"  class="mb-1" bind:checked={ModifyHubConnectionStringEnable} on:change={ModifyHubConnectionStringEnableChanged}>
  <span class="pl-1 pt-3 text-lg font-light text-right">Use Connection String</span>
</td>
<td class="pl-5 pt-5" colspan="6">
{#if ModifyHubConnectionStringEnable}
<input type="text" bind:value={ModifyHubConnectionString} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={ModifyHubConnectionStringParse}>
{:else}
<input type="text" bind:value={ModifyHubConnectionString} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{/if}
</td>

</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Hub Name</p></td><td class="pl-5 pt-5">
{#if ModifyHubConnectionStringEnable}
      <input type="text" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
      <input type="text" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].azHubName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={ModifyComposeHubConnectionString}>
{/if}
</td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5">
{#if ModifyHubConnectionStringEnable}
      <input type="text" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
      <input type="text" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].deviceID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={ModifyComposeHubConnectionString}>
{/if}
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].modelID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azHub_profile[modify_index].attestation} value={0} >SAS</Radio>
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azHub_profile[modify_index].attestation} value={1} >X509</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

{#if changed_azure_data.config.cloud_azHub_profile[modify_index].attestation==0}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6">
{#if ModifyHubConnectionStringEnable}
      <input type="text" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
      <input type="text" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={ModifyComposeHubConnectionString}>
{/if}
      </td>



  </tr>

{:else if changed_azure_data.config.cloud_azHub_profile[modify_index].attestation==1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="2">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].machineCAcert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

      </td>

</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="2">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_azure_data.config.cloud_azHub_profile[modify_index].machineCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady == 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
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
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyAZhub(modify_index)}>Modify</Button></td>

  </tr>

</table>

  </form>
</Modal>
<Modal bind:open={new_modal} size="lg" class="w-full" autoclose>

<label>
  <input type="checkbox"  bind:checked={NewItem[new_item_index].enable}>
  Enable
</label>
<p class="mt-10"></p>



<table>

<tr>
<td class="pl-5 pt-5">
<input type="checkbox"  class="mb-1" bind:checked={NewHubConnectionStringEnable} on:change={NewHubConnectionStringEnableChanged}>
  <span class="pl-1 pt-3 text-lg font-light text-right">Use Connection String</span>
</td>
<td class="pl-5 pt-5" colspan="6">
{#if NewHubConnectionStringEnable}
<input type="text" bind:value={NewHubConnectionString} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={NewHubConnectionStringParse}>
{:else}
<input type="text" bind:value={NewHubConnectionString} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{/if}
</td>

</tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Hub Name</p></td><td class="pl-5 pt-5">
{#if NewHubConnectionStringEnable}
      <input type="text" bind:value={NewItem[new_item_index].azHubName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
      <input type="text" bind:value={NewItem[new_item_index].azHubName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={NewComposeConnectionString}>
{/if}
      </td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5">
{#if NewHubConnectionStringEnable}
      <input type="text" bind:value={NewItem[new_item_index].deviceID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
      <input type="text" bind:value={NewItem[new_item_index].deviceID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={NewComposeConnectionString}>
{/if}
      </td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5">
{#if NewHubConnectionStringEnable}
      <input type="text" bind:value={NewItem[new_item_index].modelID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
      <input type="text" bind:value={NewItem[new_item_index].modelID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
      
{/if}      
      </td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">

{#if NewHubConnectionStringEnable}
  <Radio class="pb-2 disabled:cursor-not-allowed disabled:opacity-50" bind:group={NewItem[new_item_index].attestation} value={0} disabled>SAS</Radio>
  <Radio class="pb-2 disabled:cursor-not-allowed disabled:opacity-50" bind:group={NewItem[new_item_index].attestation} value={1} disabled>X509</Radio>
{:else}
  <Radio class="pb-2" bind:group={NewItem[new_item_index].attestation} value={0} >SAS</Radio>
  <Radio class="pb-2" bind:group={NewItem[new_item_index].attestation} value={1} >X509</Radio>
{/if}
</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>



{#if NewItem[new_item_index].attestation==0}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6">
{#if NewHubConnectionStringEnable}
      <input type="text" bind:value={NewItem[new_item_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50" disabled>
{:else}
      <input type="text" bind:value={NewItem[new_item_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" on:input={NewComposeConnectionString}>
{/if}
      </td>



  </tr>

{:else if NewItem[new_item_index].attestation==1}
<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="2">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewItem[new_item_index].machineCAcert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

      </td>

</tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="2">



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewItem[new_item_index].machineCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady == 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td class="pl-10"><Button color="dark" pill={true} on:click={AddNewAZhub(new_item_index)}>Add</Button></td>

  </tr>


</table>


</Modal>
</Table>


  </TabItem>

    <TabItem title="DPS">

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">ID Scope</TableHeadCell>
    <TableHeadCell class="w-18">Registration ID</TableHeadCell> 
    <TableHeadCell class="w-18">Enrollment</TableHeadCell>  
    <TableHeadCell class="w-18">Attestation</TableHeadCell>      
    <TableHeadCell class="w-18">Model ID</TableHeadCell> 


     </TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_azure_data.config.cloud_azDPS_profile as azDPS, index}

{#if azDPS.delete}


    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteAzHubDPS(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={azDPS.enable} disabled>

</td>

  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> {index+1}</td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"> {azDPS.idScope}</td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"> {azDPS.RegistrationID}</td>

{#if azDPS.enrollment == 0}
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Individual</td>
{:else if azDPS.enrollment ==1}
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Group</td>
{:else}
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>
{/if}

{#if azDPS.attestation == 0}
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">SAS</td>
{:else if azDPS.attestation ==1}
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">X509 Certificate</td>
{:else}
 <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>
{/if}


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azDPS.modelID}</td>

</tr>


{:else}
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyAZhubDPS(index)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteAZhubDPS(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
               <TableBodyCell class="w-10"><input type="checkbox"  bind:checked={azDPS.enable}></TableBodyCell>

      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{azDPS.idScope}</TableBodyCell>
       <TableBodyCell class="w-18">{azDPS.RegistrationID}</TableBodyCell>

{#if azDPS.enrollment == 0}
       <TableBodyCell class="w-18">Individual</TableBodyCell>
{:else if azDPS.enrollment ==1}
       <TableBodyCell class="w-18">Group</TableBodyCell>
{:else}
       <TableBodyCell class="w-18"></TableBodyCell>
{/if}

{#if azDPS.attestation == 0}
       <TableBodyCell class="w-18">SAS</TableBodyCell>
{:else if azDPS.attestation ==1}
       <TableBodyCell class="w-18">X509 Certificate</TableBodyCell>
{:else}
       <TableBodyCell class="w-18"></TableBodyCell>
{/if}


  <TableBodyCell class="w-18">{azDPS.modelID}</TableBodyCell>
    </TableBodyRow>

{/if}


{/each}
{/if}


 <TableBodyRow>
    <TableBodyCell class="!p-4 w-10">

{#if getDataReady == 1}
{#if changed_azure_data.config.cloud_azDPS_profile.length < 10}
    <button on:click={() => NewAzHubDPS_Item_Invoker(changed_azure_data.config.cloud_azDPS_profile.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>

{/if} 
{/if} 
</TableBodyCell>
    <TableBodyCell class="!p-0 w-10"></TableBodyCell>
    <TableBodyCell class="!p-0 w-10"></TableBodyCell>

    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
       <TableBodyCell class="w-18"></TableBodyCell>
       <TableBodyCell class="w-18"></TableBodyCell>
       <TableBodyCell class="w-18"></TableBodyCell>
       <TableBodyCell class="w-18"></TableBodyCell>       
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveAzDPS}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

 </TableBody>


<Modal bind:open={modify_Modal_dps} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyAZhubDPS(modify_dps_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].idScope} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Registration ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].RegistrationID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].modelID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].enrollment} value={0} >Individual</Radio>
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].enrollment} value={1} >Group</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation} value={0} >SAS</Radio>
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation} value={1} >X509</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

{#if changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation==0}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" bind:value={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

{:else if changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].attestation==1}
<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].machineCAcert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

      </td>

</tr>


<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6">



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_azure_data.config.cloud_azDPS_profile[modify_dps_index].machineCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady == 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
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
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyAZhubDPS(modify_dps_index)}>Modify</Button></td>

  </tr>

</table>

  </form>
</Modal>
<Modal bind:open={new_modal_dps} size="lg" class="w-full" autoclose>

<label>
  <input type="checkbox"  bind:checked={NewItemDPS[new_item_dps_index].enable}>
  Enable
</label>
<p class="mt-10"></p>



<table>





<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItemDPS[new_item_dps_index].idScope} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Registration ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItemDPS[new_item_dps_index].RegistrationID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItemDPS[new_item_dps_index].modelID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={NewItemDPS[new_item_dps_index].enrollment} value={0} >Individual</Radio>
  <Radio class="pb-2" bind:group={NewItemDPS[new_item_dps_index].enrollment} value={1} >Group</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={NewItemDPS[new_item_dps_index].attestation} value={0} >SAS</Radio>
  <Radio class="pb-2" bind:group={NewItemDPS[new_item_dps_index].attestation} value={1} >X509</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

{#if NewItemDPS[new_item_dps_index].attestation==0}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" bind:value={NewItemDPS[new_item_dps_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

{:else if NewItemDPS[new_item_dps_index].attestation==1}
<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewItemDPS[new_item_dps_index].machineCAcert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

      </td>

</tr>


<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6">



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewItemDPS[new_item_dps_index].machineCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady == 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td class="pl-10"><Button color="dark" pill={true} on:click={AddNewAZhubDPS(new_item_dps_index)}>Add</Button></td>

  </tr>


</table>


</Modal>



  </Table>


  </TabItem>

      <TabItem title="Central">


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Application Name</TableHeadCell>  
    <TableHeadCell class="w-18">ID Scope</TableHeadCell>
    <TableHeadCell class="w-18">Device ID</TableHeadCell>
    <TableHeadCell class="w-18">Enrollment</TableHeadCell>  
    <TableHeadCell class="w-18">Attestation</TableHeadCell>    
    <TableHeadCell class="w-18">Model ID</TableHeadCell>             
     </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_azure_data.config.cloud_azCentral_profile as azCentral, index}

{#if azCentral.delete}
 <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteAZCentral(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={azCentral.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azCentral.applicationName}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azCentral.idScope}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azCentral.deviceID}</td>

{#if azCentral.enrollment == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Individual</td>
{:else if azCentral.enrollment ==1}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Group</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>
{/if}

{#if azCentral.attestation == 0}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">SAS</td>
{:else if azCentral.attestation ==1}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">X509 Certificate</td>
{:else}
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout"></td>
{/if}


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{azCentral.modelID}</td>


      </tr>

{:else}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => TriggerModifyAZCentral(index)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteAZCentral(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

               <TableBodyCell class="w-10"><input type="checkbox"  bind:checked={azCentral.enable}></TableBodyCell>

      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{azCentral.applicationName}</TableBodyCell>
      <TableBodyCell class="w-18">{azCentral.idScope}</TableBodyCell>
       <TableBodyCell class="w-18">{azCentral.deviceID}</TableBodyCell>

{#if azCentral.enrollment == 0}
       <TableBodyCell class="w-18">Individual</TableBodyCell>
{:else if azCentral.enrollment ==1}
       <TableBodyCell class="w-18">Group</TableBodyCell>
{:else}
       <TableBodyCell class="w-18"></TableBodyCell>
{/if}

{#if azCentral.attestation == 0}
       <TableBodyCell class="w-18">SAS</TableBodyCell>
{:else if azCentral.attestation ==1}
       <TableBodyCell class="w-18">X509 Certificate</TableBodyCell>
{:else}
       <TableBodyCell class="w-18"></TableBodyCell>
{/if}


 <TableBodyCell class="w-18">{azCentral.modelID}</TableBodyCell>
    </TableBodyRow>

{/if}

{/each}
{/if}


 <TableBodyRow>
    <TableBodyCell class="!p-4 w-10">

{#if getDataReady == 1}
{#if changed_azure_data.config.cloud_azCentral_profile.length < 10}
    <button on:click={() => NewAzCentral_Item_Invoker(changed_azure_data.config.cloud_azCentral_profile.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>

{/if} 
{/if} 
</TableBodyCell>
    <TableBodyCell class="!p-0 w-10"></TableBodyCell>
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

    <td class="pl-10"><Button color="blue" pill={true} on:click={saveAzCentral}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


<Modal bind:open={modify_Modal_central} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyAZCentral(modify_central_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Application Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].applicationName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].idScope} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].deviceID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].modelID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].enrollment} value={0} >Individual</Radio>
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].enrollment} value={1} >Group</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>






<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation} value={0} >SAS</Radio>
  <Radio class="pb-2" bind:group={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation} value={1} >X509</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

{#if changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation==0}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" bind:value={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

{:else if changed_azure_data.config.cloud_azCentral_profile[modify_central_index].attestation==1}
<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].machineCAcert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

      </td>

</tr>


<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6">



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_azure_data.config.cloud_azCentral_profile[modify_central_index].machineCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady == 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
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
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyAZCentral(modify_central_index)}>Modify</Button></td>

  </tr>

</table>

  </form>
</Modal>
<Modal bind:open={new_modal_central} size="lg" class="w-full" autoclose>

<label>
  <input type="checkbox"  bind:checked={NewItemCentral[new_item_central_index].enable}>
  Enable
</label>
<p class="mt-10"></p>



<table>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Application Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItemCentral[new_item_central_index].applicationName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">ID Scope</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItemCentral[new_item_central_index].idScope} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Device ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItemCentral[new_item_central_index].deviceID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Model ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewItemCentral[new_item_central_index].modelID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enrollment</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={NewItemCentral[new_item_central_index].enrollment} value={0} >Individual</Radio>
  <Radio class="pb-2" bind:group={NewItemCentral[new_item_central_index].enrollment} value={1} >Group</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Attestation</p></td>

      <td class="pl-5 pt-5">
<div class="flex gap-2">
  <Radio class="pb-2" bind:group={NewItemCentral[new_item_central_index].attestation} value={0} >SAS</Radio>
  <Radio class="pb-2" bind:group={NewItemCentral[new_item_central_index].attestation} value={1} >X509</Radio>

</div>
      </td>

    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>
    <td class="w-10"></td>

  </tr>

{#if NewItemCentral[new_item_central_index].attestation==0}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Symmetric Key</p></td><td class="pl-5 pt-5" colspan="6"><input type="text" bind:value={NewItemCentral[new_item_central_index].symmetric_key_primary} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

{:else if NewItemCentral[new_item_central_index].attestation==1}
<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine CA Certificate</p></td>
      <td class="pl-5 pt-5" colspan="6">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewItemCentral[new_item_central_index].machineCAcert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

      </td>

</tr>


<tr>
      <td><p class="pl-5 pt-4 text-lg font-light text-right">Machine Certificate</p></td><td class="pl-5 pt-5" colspan="6">



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewItemCentral[new_item_central_index].machineCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady == 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td class="pl-10"><Button color="dark" pill={true} on:click={AddNewAZCentral(new_item_central_index)}>Add</Button></td>

  </tr>


</table>


</Modal>


  </TableBody>


  </Table>

  </TabItem>
 </Tabs>