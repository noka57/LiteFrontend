<script>
  import { Button, Label, Toggle, Checkbox, Radio, Modal, Spinner } from 'flowbite-svelte';

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

  let defaultModal = false;
  let uploadfwrIsValid =0;
  let CheckedFwrInvalid=0;

  let RestartIntervalId;
  let RestartReady=0;

  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });


  function closeModal()
  {
    defaultModal = false;
    uploadfwrIsValid =0;
    CheckedFwrInvalid=0;
  }

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
      if (magicValid == 0) magicValid=1;
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


  function sendPing() 
  {
    fetch(window.location.origin)
      .then(response => {
        if (response.status === 200) 
        {
          console.log('Ping successful');
          RestartReady=1;
          clearInterval(RestartIntervalId);

          setTimeout(() => {
              window.location.href = window.location.origin;
              }, 3000); 
        } 
        else 
        {
          console.log('Ping failed. Retrying...');
        }
      })
      .catch(error => 
      {
        console.error('Ping failed:', error);
      });
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
        defaultModal=true;
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
          uploadfwrIsValid=1;
          console.log("200 Valid Fwr, updating...");
          RestartIntervalId = setInterval(sendPing, 5000);
        }
        else
        {
          magicValid=0;
          CheckedFwrInvalid=1;
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


    saved_changed_maintenance_data=JSON.parse(JSON.stringify(changed_maintenance_data));
    ChangedMaintenanceConfig.set(saved_changed_maintenance_data);
    
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


<Modal bind:open={defaultModal} size="md" class="w-full" permanent={true}>
{#if CheckedFwrInvalid == 1}
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={closeModal}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
{/if}

<table>
{#if uploadfwrIsValid == 0}
<tr>
{#if CheckedFwrInvalid == 0}
<td><Spinner size={16} /></td>
<td> <p class="pl-5" style="color:red; font-size:18px">Verifying firmware now ....
</p></td>
{:else if CheckedFwrInvalid == 1}
<td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td> <p class="pl-5" style="color:red; font-size:18px">It's invalid firmware, please update valid firmware.
</p></td>
{/if}
</tr>
{:else if uploadfwrIsValid == 1}
<tr><td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td>
<p class="pl-5" style="color:red; font-size:18px">It's valid firmware.
</td>
</tr>
<tr>
{#if RestartReady==0}
<td class="pt-5">
<Spinner size={16} /></td> 
<td class="pt-5">
<p class="pl-5" style="color:red; font-size:18px">Updating firmware and restart ....
</p>
</td>
{:else}
<td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td>
<p class="pl-5" style="color:red; font-size:18px">Device has finished updating. It will redirect to first page automatically for logining again.
</td>
{/if}
</tr>
{/if}

</table>
</Modal>