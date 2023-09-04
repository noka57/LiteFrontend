<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { maintenanceConfig,
  ChangedMaintenanceConfig,
  MaintenanceConfigChangedLog
  } from "./configG.js"



  let maintenance_data="";
  let changed_maintenance_data = {};
  let saved_changed_maintenance_data = {};
  let getDataReady=0;
  let maintenance_changedValues = [];

  let selectedFwr = null;
  let fwrContent; 
  let magicValid=1;

  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });

  maintenanceConfig.subscribe(val => {
      maintenance_data = val;
  });

  MaintenanceConfigChangedLog.subscribe(val => {
      maintenance_changedValues = val;
  });


  ChangedMaintenanceConfig.subscribe(val => {
      saved_changed_maintenance_data = val;
  });


  async function handleFwrUpload(event) 
  {
    const fwr = event.target.files[0];
    if (fwr) 
    {
      selectedFwr = fwr;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const fwrBinary= new Uint8Array(event.target.result);
          fwrContent=new Uint8Array(fwrBinary.length+sessionBinary.length);
          fwrContent.set(sessionBinary,0);
          fwrContent.set(fwrBinary, sessionBinary.length);
      };

      reader.readAsArrayBuffer(fwr);

    }
  }



  async function updateFwr() {
    if (selectedFwr) 
    {
      magicValid=0;
      if (fwrContent[sessionBinary.length]==65 && fwrContent[sessionBinary.length+1]==80 && fwrContent[sessionBinary.length+2]== 118 && fwrContent[sessionBinary.length+3]==50)
      {
        console.log("is APv2!");
        magicValid=1;

      }
      else
      {
        console.log("is not APv2");
        magicValid=0;
      }


      if (magicValid == 1)
      {
        const res = await fetch(window.location.origin+"/updateFwr", {
        method: 'POST',
        body: fwrContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {
          console.log("Update Fwr 200 OK");
        }

      }


    }
  }




  function compareObjects(obj1, obj2) {
    for (const key in obj1) 
    {
      if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
      {
        compareObjects(obj1[key], obj2[key]);
      } 
      else if (obj1[key] != obj2[key]) 
      {
        let changedstr="Value of "+key+" has changed to "+obj1[key];
        maintenance_changedValues=[...maintenance_changedValues, changedstr];
      }
    }
  }

  function SaveMaintenanceSettings(){
    console.log("Save Maintenance Setting\r\n");
    if (maintenance_changedValues.length !=0)
    {
      maintenance_changedValues=[];
    }

    compareObjects(changed_maintenance_data, maintenance_data);

    MaintenanceConfigChangedLog.set(maintenance_changedValues);
    ChangedMaintenanceConfig.set(changed_maintenance_data);
    
    console.log(maintenance_changedValues);

  };

  function EW_FOTA_Check()
  {
    console.log("EW_FOTA_CHACK()");
    console.log(changed_maintenance_data.config.system_maintenance.fotaEn);
    if (changed_maintenance_data.config.system_maintenance.fotaEn)
    {
      changed_maintenance_data.config.system_maintenance.fotaEn=1;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.fotaEn=0;
    }
  }


   async function getMaintenanceData () 
   {
    const res = await fetch(window.location.origin+"/getMaintenanceData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      maintenance_data =await res.json();
      console.log(maintenance_data);
      maintenanceConfig.set(maintenance_data);

      changed_maintenance_data= JSON.parse(JSON.stringify(maintenance_data));
      saved_changed_maintenance_data = JSON.parse(JSON.stringify(maintenance_data))
      ChangedMaintenanceConfig.set(saved_changed_maintenance_data);

      getDataReady=1;
    }
  }


  onMount(() => {

    console.log("maintenance sessionid: ");
    console.log(sessionid);


    if (sessionid && maintenance_data == "")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getMaintenanceData();
    }
    else if (sessionid && maintenance_data != "")
    {
      if (maintenance_changedValues.length == 0)
      {
        changed_maintenance_data = JSON.parse(JSON.stringify(maintenance_data));
      }
      else
      {
        changed_maintenance_data = JSON.parse(JSON.stringify(saved_changed_maintenance_data));
      }
      getDataReady=1;
    }

  });
 </script>


<table>


<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Update Local Firmware</p></td>
<td class="pl-5 pt-5">

<input type="file" id="FwrUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleFwrUpload}>

</td>
<td class="pl-5 pt-5">
  <Button on:click={updateFwr}>Update</Button>


</td>

<td class="pl-5 pt-5" colspan="2">
{#if magicValid == 0}
<p style="color:red; font-size:18px">It's not valid firmware. Please choose valid one for update</p>
{/if}
</td>





</tr>


    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Enable EW-FOTA</p></td>
<td class="pl-5 pt-5">
{#if getDataReady==1}
<Toggle bind:checked={changed_maintenance_data.config.system_maintenance.fotaEn} on:change={EW_FOTA_Check}></Toggle>
{/if}
</td>

  </tr>


<tr class="pt-5">
    <td></td>
    <td></td>


    <td><Button color="blue" pill={true} on:click={SaveMaintenanceSettings}><svg class="mr-2 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>
    <td></td>
    <td></td>

    </tr>

</table>
