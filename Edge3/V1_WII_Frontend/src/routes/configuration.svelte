<script>
  import { Tabs, TabItem,AccordionItem, Accordion,Toggle,Button, Spinner, Modal} from 'flowbite-svelte';

  import { sessionidG } from "./sessionG.js";
  import { onMount } from 'svelte';
  import { 
        wholeConfigVersion,
        configurationConfig,
        ConfigurationP2EConfigChangedLog,
        ChangedConfigurationConfig
   } from "./configG.js"


  let selectedFile = null;
  let sessionid;
  let fileContent; 
  let sessionBinary;
  let overwriteLAN=false;
  let whole_config_version="";

  let configuration_data="";
  let changed_configuration_data = {};
  let saved_changed_configuration_data = {};
  let getDataReady=0;
  let configuration_p2e_changedValues = [];
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let defaultModal = false;
  let uploadconfigIsValid =0;
  let CheckedConfigInvalid=0;

  let fileImportName="No file chosen";

   sessionidG.subscribe(val => {
     sessionid = val;
   });


   wholeConfigVersion.subscribe(val => {
        whole_config_version = val;
    });

    configurationConfig.subscribe(val => {
        configuration_data = val;
    });


    ConfigurationP2EConfigChangedLog.subscribe(val => {
      configuration_p2e_changedValues = val;
    });


    ChangedConfigurationConfig.subscribe(val => {
        saved_changed_configuration_data = val;
    });


  function closeModal()
  {
    defaultModal = false;
    uploadconfigIsValid =0;
    CheckedConfigInvalid=0;
  }


  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) 
    {
      selectedFile = file;
      fileImportName=file.name;
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



  async function uploadFile() {
    if (selectedFile) 
    {
      defaultModal=true;
     // console.log("sessionBinary.length:", sessionBinary.length)
      if (fileContent.length-sessionBinary.length <120)
      {
            CheckedConfigInvalid=1;
      }
      else
      {

        if (overwriteLAN)
        {
          console.log("overwriteLAN: ", overwriteLAN);

          const res = await fetch(window.location.origin+"/uploadConfig", {
          method: 'POST',
          body: fileContent,
              headers: {
                'Content-Type': 'application/octet-stream',
              },
          })

          if (res.status == 200)
          {
            uploadconfigIsValid=1;
            console.log("200 OK (overwrite lan)");

          }
          else
          {
            console.log("invalid config");
            CheckedConfigInvalid=1;
          }
        }
        else
        {
          console.log("overwriteLAN: ", overwriteLAN);

          const res = await fetch(window.location.origin+"/uploadCONfigNonLAN", {
          method: 'POST',
          body: fileContent,
              headers: {
                'Content-Type': 'application/octet-stream',
              },
          })

          if (res.status == 200)
          {
            uploadconfigIsValid=1;
            console.log("200 OK (non overwrite lan");

          }
          else
          {
            CheckedConfigInvalid=1;
          }

        }
      }
    }
    else
    {
      console.log("non selected file");
    }
  }





  async function downloadFile() {
    try {
      const response = await fetch(window.location.origin+"/downloadConfig", {
        method: 'POST',
        body: sessionBinary
      });
      
    if (response.status == 200)
    {
      const blob = await response.blob();
      const export_filename = 'EW50V.config';

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = export_filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error exporting file:', error);
    }
  }

  async function getWConfigVersion() {
    const res = await fetch(window.location.origin+"/GetConfigWhOLEveRsion", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      const data =await res.arrayBuffer();
      const uint8Array = new Uint8Array(data);
      whole_config_version = parseInt(uint8Array, 16);
      wholeConfigVersion.set(whole_config_version);
      console.log("whole_config_version:", whole_config_version);

    }
  }


   async function getConfigurationData() {
    const res = await fetch(window.location.origin+"/getconFiguraTionData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      configuration_data = await res.json();
      console.log(configuration_data);
      configurationConfig.set(configuration_data);

      changed_configuration_data = JSON.parse(JSON.stringify(configuration_data));
      saved_changed_configuration_data = JSON.parse(JSON.stringify(configuration_data))
      ChangedConfigurationConfig.set(saved_changed_configuration_data);
      getDataReady=1;
    }
  }




    function SaveP2E()
    {
      console.log("Save p2e\r\n");
      if (configuration_p2e_changedValues.length !=0)
      {
        configuration_p2e_changedValues=[];
      }


      if (changed_configuration_data.config.system_configuration.p2eService != configuration_data.config.system_configuration.p2eService)
      {
        let changedstr="P2E service is changed to " + changed_configuration_data.config.system_configuration.p2eService;
        configuration_p2e_changedValues=[...configuration_p2e_changedValues, changedstr];
      }

      ConfigurationP2EConfigChangedLog.set(configuration_p2e_changedValues);
      saved_changed_configuration_data=JSON.parse(JSON.stringify(changed_configuration_data))
      ChangedConfigurationConfig.set(saved_changed_configuration_data);
    
      console.log(configuration_p2e_changedValues);

    };


  onMount(() => {

    console.log("configuration sessionid: ");
    console.log(sessionid);


    const hexArray = sessionid.match(/.{1,2}/g); 
    const byteValues = hexArray.map(hex => parseInt(hex, 16));
    sessionBinary = new Uint8Array(byteValues);

    if (sessionid && configuration_data == "")
    {
        getConfigurationData();
    }
    else if (sessionid && configuration_data !="")
    {
        if (configuration_p2e_changedValues.length == 0)
        {
            changed_configuration_data = JSON.parse(JSON.stringify(configuration_data));
        }
        else
        {
            changed_configuration_data = JSON.parse(JSON.stringify(saved_changed_configuration_data));
        }

        getDataReady=1;
    }

    if (whole_config_version == "")
    {
      getWConfigVersion();
    }

  });



 </script>

<Tabs style="underline">
  <TabItem open title="Local">


<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Export Configuration
    </span>  

<table>

    <tr>
    <td class="w-85"><p class="pl-10 pt-1 text-lg font-light text-right">Backup Current Configuration</p></td>

<td class="pl-5 pt-1"><Button on:click={downloadFile}>Export</Button></td>
  </tr>

  </table>

</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Import Configuration
    </span> 

<table>

<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Configuration File</p></td>
<td class="pl-5 pt-5">

<label for="importConfigUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg" >Choose File</label>
<input type="file" id="importConfigUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"  style="display: none;" on:change={handleFileUpload}>
<span class="pl-4">{fileImportName}</span>

</td>
<td class="pl-5 pt-5">
  <Button on:click={uploadFile}>Import</Button>

</td>

</tr>
<tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Overwrite LAN Configuration</p></td>
    <td class="pl-5 pt-5">
<Toggle bind:checked={overwriteLAN}></Toggle>
</td>
</tr>
</table>




<Modal bind:open={defaultModal} size="md" class="w-full" permanent={true}>
{#if CheckedConfigInvalid == 1}
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={closeModal}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
{/if}

<table>
{#if uploadconfigIsValid == 0}
<tr>
{#if CheckedConfigInvalid == 0}
<td><Spinner size={16} /></td>
<td> <p class="pl-5" style="color:red; font-size:18px">Verifying configuration now ....
</p></td>
{:else if CheckedConfigInvalid == 1}
<td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td> <p class="pl-5" style="color:red; font-size:18px">It's invalid configuration, please upload valid configuration.
</p></td>
{/if}
</tr>
{:else if uploadconfigIsValid == 1}
<tr><td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td>
<p class="pl-5" style="color:red; font-size:18px">It's valid configuration.
</td>
</tr>
<tr>
<td class="pt-5">
<Spinner size={16} /></td> 
<td class="pt-5">
<p class="pl-5" style="color:red; font-size:18px">Applying configuration and restart ....
</p>
</td>
</tr>
{/if}

</table>
</Modal>

</AccordionItem>
</Accordion>
</TabItem>
{#if 0}

  <TabItem title="P2E">

<table>
    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">P2E Service</p></td><td class="pl-5 pt-5">
{#if getDataReady == 1}
    <Toggle bind:checked={changed_configuration_data.config.system_configuration.p2eService}></Toggle>
{/if}
    </td>
    </tr>


 <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveP2E}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>

</TabItem>

{/if}

</Tabs>
