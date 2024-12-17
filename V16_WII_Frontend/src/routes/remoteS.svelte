<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import { 
    genericMQTTConfig,
    ChangedGenericMQTTConfig,
    awsIoTcoreConfig,
    ChangedAWSIoTcoreConfig,
    remoteServiceConfig,
    RemoteServiceConfigRemoteControlChangedLog,
    RemoteServiceConfigMqttChangedLog,
    RemoteServiceConfigRestfulChangedLog,
    ChangedRemoteServiceConfig
  } from "./configG.js"


  let remote_service_data="";
  let changed_remote_service_data = "";
  let saved_changed_remote_service_data = "";
  let getDataReady=0;
  let remote_service_mqtt_changedValues = [];
  let remote_service_restful_changedValues = [];
  let remote_service_remote_control_changedValues = [];
  let CloudProfile=[];

  let generic_mqtt_data="";
  let saved_changed_generic_mqtt_data ="";

  let awsIoT_core_data="";
  let saved_changed_awsIoT_core_data ="";


  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });

  remoteServiceConfig.subscribe(val => {
    remote_service_data = val;
  });



  RemoteServiceConfigMqttChangedLog.subscribe(val => {
    remote_service_mqtt_changedValues = val;
  });


  RemoteServiceConfigRestfulChangedLog.subscribe(val => {
    remote_service_restful_changedValues = val;
  });

  RemoteServiceConfigRemoteControlChangedLog.subscribe(val => {
    remote_service_remote_control_changedValues = val;
  });


  ChangedRemoteServiceConfig.subscribe(val => {
    saved_changed_remote_service_data = val;
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
                remote_service_mqtt_changedValues=[...remote_service_mqtt_changedValues, changedstr];
              }
              else if (type == 1)
              {
                remote_service_remote_control_changedValues=[...remote_service_remote_control_changedValues, changedstr];
              }

            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 0)
              {
                remote_service_mqtt_changedValues=[...remote_service_mqtt_changedValues, changedstr];
              }
              else if (type == 1)
              {
                remote_service_remote_control_changedValues=[...remote_service_remote_control_changedValues, changedstr];
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
            remote_service_mqtt_changedValues=[...remote_service_mqtt_changedValues, changedstr];
          }
          else if (type == 1)
          {
            remote_service_remote_control_changedValues=[...remote_service_remote_control_changedValues, changedstr];
          }


        }
      }
  }    

 function saveRemoteServiceRestful()
  {
    console.log("save Remote Service Restful");
    if (remote_service_restful_changedValues.length != 0)
    {
        remote_service_restful_changedValues=[];
    }

    if (changed_remote_service_data.config.service_remoteService.restful_api_en != remote_service_data.config.service_remoteService.restful_api_en)
    {
        saved_changed_remote_service_data.config.service_remoteService.restful_api_en=changed_remote_service_data.config.service_remoteService.restful_api_en;
        let changedStr="Restful API is changed to " + changed_remote_service_data.config.service_remoteService.restful_api_en;
        remote_service_restful_changedValues=[...remote_service_restful_changedValues, changedStr];
    }


    RemoteServiceConfigRestfulChangedLog.set(remote_service_restful_changedValues);
    ChangedRemoteServiceConfig.set(saved_changed_remote_service_data);
    console.log(remote_service_restful_changedValues);

  }


  function saveRemoteServiceMQTT()
  {
    console.log("save Remote Service MQTT");
    if (remote_service_mqtt_changedValues.length != 0)
    {
        remote_service_mqtt_changedValues=[];
    }



    if (changed_remote_service_data.config.service_remoteService.mqtt_api_en != remote_service_data.config.service_remoteService.mqtt_api_en)
    {
        saved_changed_remote_service_data.config.service_remoteService.mqtt_api_en=changed_remote_service_data.config.service_remoteService.mqtt_api_en;
        let changedStr="MQTT API is changed to " + changed_remote_service_data.config.service_remoteService.mqtt_api_en;
        remote_service_mqtt_changedValues=[...remote_service_mqtt_changedValues, changedStr];

    }


    for (let i = 0; i < Math.min(changed_remote_service_data.config.service_remoteService.mqtt_api_param.length, remote_service_data.config.service_remoteService.mqtt_api_param.length); i++) 
    {
      compareObjects(changed_remote_service_data.config.service_remoteService.mqtt_api_param[i], remote_service_data.config.service_remoteService.mqtt_api_param[i], 0, 1,i+1);
    }


    saved_changed_remote_service_data.config.service_remoteService.mqtt_api_param=JSON.parse(JSON.stringify(changed_remote_service_data.config.service_remoteService.mqtt_api_param));


    RemoteServiceConfigMqttChangedLog.set(remote_service_mqtt_changedValues);
    ChangedRemoteServiceConfig.set(saved_changed_remote_service_data);
    console.log(remote_service_mqtt_changedValues);

  }


  function saveRemoteServiceRemoteControl()
  {
    console.log("save Remote Service remote control");
    if (remote_service_remote_control_changedValues.length != 0)
    {
        remote_service_remote_control_changedValues=[];
    }



    if (changed_remote_service_data.config.service_remoteService.remote_control_en != remote_service_data.config.service_remoteService.remote_control_en)
    {
        saved_changed_remote_service_data.config.service_remoteService.remote_control_en=changed_remote_service_data.config.service_remoteService.remote_control_en;
        let changedStr="Remote Control is changed to " + changed_remote_service_data.config.service_remoteService.remote_control_en;
        remote_service_remote_control_changedValues=[...remote_service_remote_control_changedValues, changedStr];

    }


    for (let i = 0; i < Math.min(changed_remote_service_data.config.service_remoteService.remote_control_param.length, remote_service_data.config.service_remoteService.remote_control_param.length); i++) 
    {
      compareObjects(changed_remote_service_data.config.service_remoteService.remote_control_param[i], remote_service_data.config.service_remoteService.remote_control_param[i], 1, 1,i+1);
    }


    saved_changed_remote_service_data.config.service_remoteService.remote_control_param=JSON.parse(JSON.stringify(changed_remote_service_data.config.service_remoteService.remote_control_param));


    RemoteServiceConfigRemoteControlChangedLog.set(remote_service_remote_control_changedValues);
    ChangedRemoteServiceConfig.set(saved_changed_remote_service_data);
    console.log(remote_service_remote_control_changedValues);

  }


  let modify_Modal=false;
  let modify_index;

  let BackupItem={
    enable: false,
    cloudProfile:"",
    mqtt_id_nickname:""

  };

  function TriggerModifyMQTT(index)
  {
    modify_Modal=true;
    modify_index=index;
    BackupItem.enable=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].enable;
    BackupItem.cloudProfile=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].cloudProfile;

    BackupItem.mqtt_id_nickname=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].mqtt_id_nickname;
 

  }

  function NoModifyMQTT(index)
  {
    modify_Modal=false;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].enable=BackupItem.enable;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].cloudProfile=BackupItem.cloudProfile; 
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].mqtt_id_nickname=BackupItem.mqtt_id_nickname;

  }

  function ModifyMQTT(index)
  {
    modify_Modal=false;
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


  async function getRemoteServiceData() {
    const res = await fetch(window.location.origin+"/gEtRemoteService", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      remote_service_data =await res.json();
      console.log(remote_service_data);
      remoteServiceConfig.set(remote_service_data);

      changed_remote_service_data = JSON.parse(JSON.stringify(remote_service_data));
      saved_changed_remote_service_data= JSON.parse(JSON.stringify(remote_service_data));
      ChangedRemoteServiceConfig.set(saved_changed_remote_service_data);

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
        }
      }


      getDataReady=1;
    }
  }





  onMount(() => {

    console.log("remote service sessionid: ");
    console.log(sessionid);


    if (sessionid && remote_service_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getRemoteServiceData();


    }
    else if(sessionid && remote_service_data!="")
    {

        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        changed_remote_service_data = JSON.parse(JSON.stringify(saved_changed_remote_service_data));
    
        if (remote_service_restful_changedValues.length ==0)
        {
          changed_remote_service_data.config.service_remoteService.restful_api_en=remote_service_data.config.service_remoteService.restful_api_en;
        }

        if (remote_service_mqtt_changedValues.length==0)
        {
          changed_remote_service_data.config.service_remoteService.mqtt_api_en=remote_service_data.config.service_remoteService.mqtt_api_en;

          changed_remote_service_data.config.service_remoteService.mqtt_api_param=JSON.parse(JSON.stringify(remote_service_data.config.service_remoteService.mqtt_api_param));

        }

        if (remote_service_remote_control_changedValues.length ==0)
        {
          changed_remote_service_data.config.service_remoteService.remote_control_en=remote_service_data.config.service_remoteService.remote_control_en;

          changed_remote_service_data.config.service_remoteService.remote_control_param=JSON.parse(JSON.stringify(remote_service_data.config.service_remoteService.remote_control_param));

        }

        console.log("changed_remote_service_data.config.service_remoteService: ", changed_remote_service_data.config.service_remoteService);


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
          }
        }


        getDataReady=1;

    }

  });


  </script>

<Tabs style="underline">
  <TabItem open title="REST">

  <table>
{#if getDataReady == 1}
    <tr>
    <td class="w-36"><p class="pl-10 pt-5 text-lg font-light text-right">REST API</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={changed_remote_service_data.config.service_remoteService.restful_api_en}></Toggle></td>
<td></td>

    </tr>
{/if}

</table>


<p class="pt-10"></p>

<table>
<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"><Button color="blue" pill={true} on:click={saveRemoteServiceRestful}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>


</TabItem>
  <TabItem title="MQTT">

  <table>
{#if getDataReady == 1}
        <tr>
    <td class="w-36"><p class="pl-10 pt-5 text-lg font-light text-right">MQTT API</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={changed_remote_service_data.config.service_remoteService.mqtt_api_en}></Toggle></td>
<td></td>

    </tr>
{/if}
</table>

<p class="pt-10"></p>
{#if getDataReady == 1}
{#if changed_remote_service_data.config.service_remoteService.mqtt_api_en}

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
    <TableHeadCell class="w-18">Cloud Profile</TableHeadCell>
    <TableHeadCell class="w-18">ID Nick Name</TableHeadCell>
     </TableHead>
  <TableBody>

{#each changed_remote_service_data.config.service_remoteService.mqtt_api_param as MQTTparam, index}

    <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell class="!p-1 w-4">
<button on:click={() => TriggerModifyMQTT(index)}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>
                <TableBodyCell class="!p-1">  </TableBodyCell>
    <TableBodyCell class="w-4">
<input type="checkbox"  bind:checked={MQTTparam.enable}>
    </TableBodyCell>

      <TableBodyCell class="!p-1 w-4">1</TableBodyCell>
      <TableBodyCell class="w-18">{MQTTparam.cloudProfile}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTTparam.mqtt_id_nickname}</TableBodyCell>
    </TableBodyRow>
{/each}

</TableBody>
</Table>
{/if}
{/if}

<p class="pt-10"></p>

<table>
<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"><Button color="blue" pill={true} on:click={saveRemoteServiceMQTT}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>



<Modal bind:open={modify_Modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyMQTT(modify_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>


<table>

<tr>
     <td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].cloudProfile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>




  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MQTT_ID_Nick_Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].mqtt_id_nickname} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

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
</TabItem>
<TabItem title="Remote Control">

  <table>
{#if getDataReady == 1}
    <tr>
    <td class="w-36"><p class="pl-1 pt-5 text-lg font-light text-right">Remote Control</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={changed_remote_service_data.config.service_remoteService.remote_control_en}></Toggle></td>
<td></td>

    </tr>
{/if}    
</table>
{#if getDataReady == 1}
{#if changed_remote_service_data.config.service_remoteService.remote_control_en}

  <table>
<tr>
<td class="w-60"></td>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={changed_remote_service_data.config.service_remoteService.remote_control_param[0].cloudProfile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>


  <tr>
  <td class="w-60"></td>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="number" bind:value={changed_remote_service_data.config.service_remoteService.remote_control_param[0].responseTimeoutMS} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

<tr>
<td class="w-60"></td>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Subscribe Topic</p></td>
      <td class="pl-4 pt-5">


  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={changed_remote_service_data.config.service_remoteService.remote_control_param[0].subscribeTopic}>


</td>


</tr>






<tr>
<td></td>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Publish Topic For Acknowledge</p>

  </td>

    <td class="pl-4 pt-5" colspan="5">
    <div class="flex gap-2">

<Toggle class="p-2.5 mt-2 mb-4" bind:checked={changed_remote_service_data.config.service_remoteService.remote_control_param[0].publishEnable}></Toggle>

{#if changed_remote_service_data.config.service_remoteService.remote_control_param[0].publishEnable}

<div class="relative">
<input id="publish_topic" class="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600 px-2.5 pb-2.5 pt-4 p-2 mt-1 mb-3" name="publish_topic" placeholder=" " type="text" bind:value={changed_remote_service_data.config.service_remoteService.remote_control_param[0].publishTopic}> <label for="publish_topic" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 top-2">publish_topic</label></div>


{/if}
</div></td>
</tr>

</table>
{/if}

{/if}


<p class="pt-10"></p>

<table>
<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-20"><Button color="blue" pill={true} on:click={saveRemoteServiceRemoteControl}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>



</TabItem>
</Tabs>