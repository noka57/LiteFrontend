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

  function saveRemoteService()
  {
    console.log("save Remote Service");
    if (remote_service_changedValues.length != 0)
    {
        remote_service_changedValues=[];
    }

    if (changed_remote_service_data.config.service_remoteService.RestfulAPI != remote_service_data.config.service_remoteService.RestfulAPI)
    {
        saved_changed_remote_service_data.config.service_remoteService.RestfulAPI=changed_remote_service_data.config.service_remoteService.RestfulAPI;
        let changedStr="Restful API is changed to " + changed_remote_service_data.config.service_remoteService.RestfulAPI;
        remote_service_changedValues=[...remote_service_changedValues, changedStr];
    }


    if (changed_remote_service_data.config.service_remoteService.MQTTAPI != remote_service_data.config.service_remoteService.MQTTAPI)
    {
        saved_changed_remote_service_data.config.service_remoteService.MQTTAPI=changed_remote_service_data.config.service_remoteService.MQTTAPI;
        let changedStr="MQTT API is changed to " + changed_remote_service_data.config.service_remoteService.MQTTAPI;
        remote_service_changedValues=[...remote_service_changedValues, changedStr];

    }


    RemoteServiceConfigChangedLog.set(remote_service_changedValues);
    ChangedRemoteServiceConfig.set(saved_changed_remote_service_data);
    console.log(remote_service_changedValues);

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


    }

  });


  </script>



  <table>
{#if getDataReady == 1}
    <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">Restful API</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={changed_remote_service_data.config.service_remoteService.RestfulAPI}></Toggle></td>
<td></td>

    </tr>


        <tr>
    <td class="w-36"><p class="pl-5 pt-5 text-lg font-light text-left">MQTT API</p></td>
<td class="pl-5 pt-5"><Toggle bind:checked={changed_remote_service_data.config.service_remoteService.MQTTAPI}></Toggle></td>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveRemoteService}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>