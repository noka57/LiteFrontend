<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import { 
    remoteServiceConfig,
    RemoteServiceConfigChangedLog,
    ChangedRemoteServiceConfig
  } from "./configG.js"


  let remote_service_data="";
  let changed_remote_service_data = {};
  let saved_changed_remote_service_data = {};
  let getDataReady=0;
  let remote_service_changedValues = [];



  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });

  remoteServiceConfig.subscribe(val => {
    remote_service_data = val;
  });

  RemoteServiceConfigChangedLog.subscribe(val => {
    remote_service_changedValues = val;
  });

  ChangedRemoteServiceConfig.subscribe(val => {
    saved_changed_remote_service_data = val;
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
              remote_service_changedValues=[...remote_service_changedValues, changedstr];
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              remote_service_changedValues=[...remote_service_changedValues, changedstr];
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
          
          remote_service_changedValues=[...remote_service_changedValues, changedstr];

        }
      }
  }    

  function saveRemoteService()
  {
    console.log("save Remote Service");
    if (remote_service_changedValues.length != 0)
    {
        remote_service_changedValues=[];
    }

    if (changed_remote_service_data.config.service_remoteService.restful_api_en != remote_service_data.config.service_remoteService.restful_api_en)
    {
        saved_changed_remote_service_data.config.service_remoteService.restful_api_en=changed_remote_service_data.config.service_remoteService.restful_api_en;
        let changedStr="Restful API is changed to " + changed_remote_service_data.config.service_remoteService.restful_api_en;
        remote_service_changedValues=[...remote_service_changedValues, changedStr];
    }


    if (changed_remote_service_data.config.service_remoteService.mqtt_api_en != remote_service_data.config.service_remoteService.mqtt_api_en)
    {
        saved_changed_remote_service_data.config.service_remoteService.mqtt_api_en=changed_remote_service_data.config.service_remoteService.mqtt_api_en;
        let changedStr="MQTT API is changed to " + changed_remote_service_data.config.service_remoteService.mqtt_api_en;
        remote_service_changedValues=[...remote_service_changedValues, changedStr];

    }


    for (let i = 0; i < Math.min(changed_remote_service_data.config.service_remoteService.mqtt_api_param.length, remote_service_data.config.service_remoteService.mqtt_api_param.length); i++) 
    {
      compareObjects(changed_remote_service_data.config.service_remoteService.mqtt_api_param[i], remote_service_data.config.service_remoteService.mqtt_api_param[i], 0, 1,i+1);
    }


    saved_changed_remote_service_data.config.service_remoteService.mqtt_api_param=JSON.parse(JSON.stringify(changed_remote_service_data.config.service_remoteService.mqtt_api_param));


    RemoteServiceConfigChangedLog.set(remote_service_changedValues);
    ChangedRemoteServiceConfig.set(saved_changed_remote_service_data);
    console.log(remote_service_changedValues);

  }

  let modify_Modal=false;
  let modify_index;

  let BackupItem={
    enable: 0,
    brokerHost: "",
    brokerPort: 8883,
    tls: 0,
    brokerCaCert: "",
    clientCert: "",
    clientId: "",
    account: "",
    password: "",
    qos: "",
    keepAliveInterval: 60,
    mqtt_id_nickname:"",
    retained:0

  };

  function TriggerModifyMQTT(index)
  {
    modify_Modal=true;
    modify_index=index;
    BackupItem.enable=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].enable;
    BackupItem.brokerHost=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].brokerHost;
    BackupItem.brokerPort=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].brokerPort;
    BackupItem.tls=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].tls;
    BackupItem.brokerCaCert=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].brokerCaCert;
    BackupItem.clientCert=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].clientCert;
    BackupItem.clientId=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].clientId;
    BackupItem.account=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].account;
    BackupItem.password=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].password;
    BackupItem.qos=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].qos;
    BackupItem.keepAliveInterval=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].keepAliveInterval;    
    BackupItem.mqtt_id_nickname=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].mqtt_id_nickname;
    BackupItem.retained=changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].retained;  

  }

  function NoModifyMQTT(index)
  {
    modify_Modal=false;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].enable=BackupItem.enable;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].brokerHost=BackupItem.brokerHost;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].brokerPort=BackupItem.brokerPort;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].tls=BackupItem.tls;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].brokerCaCert=BackupItem.brokerCaCert;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].clientCert=BackupItem.clientCert;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].clientId=BackupItem.clientId;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].account=BackupItem.account;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].password=BackupItem.password;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].qos=BackupItem.qos;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].keepAliveInterval=BackupItem.keepAliveInterval;    
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].mqtt_id_nickname=BackupItem.mqtt_id_nickname;
    changed_remote_service_data.config.service_remoteService.mqtt_api_param[index].retained=BackupItem.retained;
  }

  function ModifyMQTT(index)
  {
    modify_Modal=false;
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
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
    }
    else if(sessionid && remote_service_data!="")
    {
        getDataReady=1;
        if (remote_service_changedValues.length != 0)
        {
          changed_remote_service_data = JSON.parse(JSON.stringify(saved_changed_remote_service_data));
        }
        else
        {
          changed_remote_service_data = JSON.parse(JSON.stringify(remote_service_data));        
        }

        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();

    }

  });


  </script>



  <table>
{#if getDataReady == 1}
    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">REST API</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={changed_remote_service_data.config.service_remoteService.restful_api_en}></Toggle></td>
<td></td>

    </tr>


        <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">MQTT API</p></td>
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
    <TableHeadCell class="w-18">Broker Host</TableHeadCell>
    <TableHeadCell class="w-18">Broker Port</TableHeadCell>
    <TableHeadCell class="!p-1">TLS</TableHeadCell>
    <TableHeadCell>Client ID</TableHeadCell>
    <TableHeadCell>Account</TableHeadCell>
    <TableHeadCell>QoS</TableHeadCell>
    <TableHeadCell>Retained</TableHeadCell>    
    <TableHeadCell class="w-18">Keep Alive Interval (sec)</TableHeadCell>
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
{#if MQTTparam.enable}
    <TableBodyCell class="w-4">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-4">0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-1 w-4">1</TableBodyCell>
      <TableBodyCell class="w-18">{MQTTparam.brokerHost}</TableBodyCell>
      <TableBodyCell class="w-18">{MQTTparam.brokerPort}</TableBodyCell>
{#if MQTTparam.tls == 0}
      <TableBodyCell class="w-4 !p-1">No</TableBodyCell>
{:else if MQTTparam.tls==1}
      <TableBodyCell class="w-4 !p-1">Yes</TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{MQTTparam.clientId}</TableBodyCell>
      <TableBodyCell class="w-10">{MQTTparam.account}</TableBodyCell>
      <TableBodyCell class="w-10">{MQTTparam.qos}</TableBodyCell>
{#if MQTTparam.retained == 0}
      <TableBodyCell class="w-4 !p-1">No</TableBodyCell>
{:else if MQTTparam.retained==1}
      <TableBodyCell class="w-4 !p-1">Yes</TableBodyCell>
{/if}

      <TableBodyCell class="w-18">{MQTTparam.keepAliveInterval}</TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveRemoteService}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Broker Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].brokerHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Broker Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].brokerPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">TLS</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls} value={1} >Yes</Radio>
  <Radio class="pb-2" bind:group={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls} value={0} >No</Radio>

</div></td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Broker CA Certificate</p></td>
    <td class= "pl-4 pt-4">

{#if changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 0}    
  None
{:else if changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 1}

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].brokerCaCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>


 
{/if}

    </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">
{#if changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 0}   
 None
{:else if changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].tls == 1}
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].clientCert}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>


   
{/if}

    </td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].clientId} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">QoS</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].qos} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Retained</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].retained} value={1} >Yes</Radio>
  <Radio class="pb-2" bind:group={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].retained} value={0} >No</Radio>

</div></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Keep Alive Interval</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_remote_service_data.config.service_remoteService.mqtt_api_param[modify_index].keepAliveInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td><p class="pl-2 pt-4 text-lg"> second(s)</p></td>

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