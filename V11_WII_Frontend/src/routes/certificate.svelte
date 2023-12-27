<script>
  import { Fileupload, Tabs, TabItem, Radio, Button, Dropdown, DropdownItem, Label, FloatingLabelInput, Modal,
  Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, AccordionItem, Accordion, Input} from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import { 
    certificateConfig,
    Certificate_Settings_ConfigChangedLog,
    Certificate_CRL_ConfigChangedLog,
    ChangedCertificateConfig
  } from "./configG.js"

    let certificate_data="";
    let changed_certificate_data = {};
    let saved_changed_certificate_data = {};
    let getDataReady=0;
    let certificate_settings_changedValues = [];
    let certificate_crl_changedValues = [];

    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

    Certificate_Settings_ConfigChangedLog.subscribe(val => {
      certificate_settings_changedValues = val;
    });


    ChangedCertificateConfig.subscribe(val => {
      saved_changed_certificate_data = val;
    });

  let cdefault='No';
  let ddefault='Never';
  let newCRL=false;
  let CRLURL="";
  let newCRLFileUpload=false;
  export let crlvalue;

  export let crlInterval='everyW';
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  const btn1 = () => {
    alert('You clicked btn1.');
    if (crlvalue) {
      alert(crlvalue);
    }
    else
    {
      alert('no file');
    }
  };

  let selectedCACert = null;
  let caCertContent=""; 

  let CACertAliasName="";


  let selectedRemoteCert = null;
  let remoteCertContent=""; 

  let RemoteCertAliasName="";


  let selectedMachineCert = null;
  let machineCertContent=""; 

  let MachineCertAliasName="";
  let MachineCertP12Password="";


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


  async function handleMachineCertUpload(event) 
  {
    const machineCert = event.target.files[0];
    if (machineCert) 
    {
      selectedMachineCert = machineCert;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const machineCertBinary= new Uint8Array(event.target.result);
          machineCertContent=new Uint8Array(machineCertBinary.length+sessionBinary.length+128);
          machineCertContent.set(sessionBinary,0);
          machineCertContent.set(machineCertBinary, sessionBinary.length+128);
      };

      reader.readAsArrayBuffer(machineCert);

    }
  }


  async function uploadMachineCert()
  {
    if (MachineCertAliasName == "" || MachineCertP12Password == "" || machineCertContent == "")
    {
        alert('Alias Name is null or P12 password is null or machineCertContent is null');
        console.log(MachineCertAliasName);
        console.log(MachineCertP12Password);
        console.log(machineCertContent);
    }
    else
    {

      if (selectedMachineCert && machineCertContent != "") 
      {
        console.log(MachineCertAliasName);
        console.log(MachineCertP12Password);
        console.log(machineCertContent);

        const textEncoder = new TextEncoder();
        let uint8ArrayResult = textEncoder.encode(MachineCertAliasName);
        console.log("machine:");
        console.log(machineCertContent);
        machineCertContent.set(uint8ArrayResult, sessionBinary.length);

        const textEncoder2 = new TextEncoder();
        let uint8ArrayResult2 = textEncoder2.encode(MachineCertP12Password);
        machineCertContent.set(uint8ArrayResult2, sessionBinary.length+64);


        const res = await fetch(window.location.origin+"/UploadMachineCert", {
        method: 'POST',
        body: machineCertContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {

          console.log("200 Upload machineCertContent");
          getMachineCertificate();

        }
        else
        {
          console.log("error Upload machineCertContent");
        }


      }
    }

  }


  async function handleCACertUpload(event) 
  {
    const caCert = event.target.files[0];
    if (caCert) 
    {
      selectedCACert = caCert;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const CACertBinary= new Uint8Array(event.target.result);
          caCertContent=new Uint8Array(CACertBinary.length+sessionBinary.length+64);
          caCertContent.set(sessionBinary,0);
          caCertContent.set(CACertBinary, sessionBinary.length+64);
      };

      reader.readAsArrayBuffer(caCert);

    }
  }

  async function uploadCaCert() {

    if (CACertAliasName == "" || caCertContent == "")
    {
        alert('Alias Name is null or caCertContent is null');
    }
    else
    {

      if (selectedCACert) 
      {
        console.log(CACertAliasName)

        const textEncoder = new TextEncoder();
        let uint8ArrayResult = textEncoder.encode(CACertAliasName);
        console.log("caCertContent");
        console.log(caCertContent);
        caCertContent.set(uint8ArrayResult, sessionBinary.length);


        console.log(CACertAliasName);
        const res = await fetch(window.location.origin+"/UploaDCaCert", {
        method: 'POST',
        body: caCertContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {

          console.log("200 UploadCACert");
          getCACertificate();

        }
        else
        {
          console.log("error UploadCACert");
        }


      }
    }
  }


  async function handleRemoteCertUpload(event) 
  {
    const remoteCert = event.target.files[0];
    if (remoteCert) 
    {
      selectedRemoteCert = remoteCert;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const RemoteCertBinary= new Uint8Array(event.target.result);
          remoteCertContent=new Uint8Array(RemoteCertBinary.length+sessionBinary.length+64);
          remoteCertContent.set(sessionBinary,0);
          remoteCertContent.set(RemoteCertBinary, sessionBinary.length+64);
      };

      reader.readAsArrayBuffer(remoteCert);

    }
  }



  async function uploadRemoteCert() {

    if (RemoteCertAliasName == "" || remoteCertContent == "")
    {
        alert('Alias Name is null or content is null');
    }
    else
    {

      if (selectedRemoteCert) 
      {
        console.log(RemoteCertAliasName)

        const textEncoder = new TextEncoder();
        let uint8ArrayResult = textEncoder.encode(RemoteCertAliasName);
        remoteCertContent.set(uint8ArrayResult, sessionBinary.length);


        console.log(RemoteCertAliasName);
        const res = await fetch(window.location.origin+"/UpLoadRemoteCert", {
        method: 'POST',
        body: remoteCertContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {

          console.log("200 UploadRemoteCert");
          getRemoteCertificate();

        }
        else
        {
          console.log("error UploadRemoteCert");
        }


      }
    }
  }



  function NewCRLTrigger(){
    newCRL=true;
  }

  function NewCRLFileUploadTrigger(){
    newCRLFileUpload=true;
  }

  function saveCertificatesetting()
  {
    console.log("save certificate");
    if (certificate_settings_changedValues.length != 0)
    {
      certificate_settings_changedValues=[];
    }
    if (changed_certificate_data.config.certificateSettings.checkCert != certificate_data.config.certificateSettings.checkCert)
    {
      saved_changed_certificate_data.config.certificateSettings.checkCert=changed_certificate_data.config.certificateSettings.checkCert;
      let changedstr="Check the validity period of certificates and CRLs is changed to "+changed_certificate_data.config.certificateSettings.checkCert;

      certificate_settings_changedValues=[...certificate_settings_changedValues, changedstr];    
    }

    Certificate_Settings_ConfigChangedLog.set(certificate_settings_changedValues);
    ChangedCertificateConfig.set(saved_changed_certificate_data);

    console.log(certificate_settings_changedValues);
  }




  const RefreshMachineCert = () =>
  {
      getMachineCertificate();

  }

  const RefreshCACert = () =>
  {
      getCACertificate();

  } 

  const RefreshRemoteCert = () =>
  {
      getRemoteCertificate();

  } 

 async function getCertificateData() {
    const res = await fetch(window.location.origin+"/GetCertificateData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      certificate_data =await res.json();
      console.log(certificate_data);
      certificateConfig.set(certificate_data);

      changed_certificate_data = JSON.parse(JSON.stringify(certificate_data));
      saved_changed_certificate_data= JSON.parse(JSON.stringify(certificate_data));
      ChangedCertificateConfig.set(saved_changed_certificate_data);
      getDataReady=1;
    
    }
  }

  onMount(() => {

    console.log("certificate sessionid: ");
    console.log(sessionid);


    if (sessionid && certificate_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getCertificateData();
        getRemoteCertificate();
        getCACertificate();
        getMachineCertificate();
    }
    else if(sessionid && certificate_data!="")
    {
        getDataReady=1;
        if (certificate_settings_changedValues.length==0)
        {
            changed_certificate_data=JSON.parse(JSON.stringify(saved_changed_certificate_data));
            changed_certificate_data.config.certificateSettings=JSON.parse(JSON.stringify(certificate_data.config.certificateSettings)); 
        }
      

    }

  });

</script>



<Tabs style="underline">
  <TabItem open title="Certificate Settings">


<p class="mb-4 font-semibold text-gray-900 dark:text-white">Check the validity period of certificates and CRLs</p>
{#if getDataReady == 1}
<Radio bind:group={changed_certificate_data.config.certificateSettings.checkCert} class='p-3' value={0}>No</Radio>
<Radio bind:group={changed_certificate_data.config.certificateSettings.checkCert} class='p-3' value={1}>Always</Radio>
<Radio bind:group={changed_certificate_data.config.certificateSettings.checkCert} class='p-3' value={2}>Wait for synchronization of the system time</Radio>


<p class="pt-10"></p>
<table>
    <tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-80"><Button color="blue" pill={true} on:click={saveCertificatesetting}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>
{/if}
  </TabItem>


  <TabItem title="Machine Certificates" on:click={RefreshMachineCert}>
  <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-64">Alias Name</TableHeadCell>
    <TableHeadCell class="w-64"></TableHeadCell>
    <TableHeadCell class="w-96"></TableHeadCell>
    <TableHeadCell class="w-36"></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

{#if getMachineCertReady==1}
{#each machineCertList as machineCert, index}
<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-64">{machineCert}</TableBodyCell>
      <TableBodyCell class="w-64"></TableBodyCell>
      <TableBodyCell class="w-96"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableHeadCell></TableHeadCell>
</TableBodyRow>
{/each}
{/if}


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name" bind:value={MachineCertAliasName}/></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="P12 Password" bind:value={MachineCertP12Password}/></TableBodyCell>
      <TableBodyCell class="w-96"><input type="file" id="RemoteCertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleMachineCertUpload}></TableBodyCell>
      <TableBodyCell class="w-36"><Button color="dark" on:click={uploadMachineCert}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>


  <TabItem title="CA Certificates" on:click={RefreshCACert}>
 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

{#if getCaCertReady==1}
{#each caCertList as caCert, index}
<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-64">{caCert}</TableBodyCell>
      <TableBodyCell class="w-96"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>

</TableBodyRow>
{/each}
{/if}

<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name" bind:value={CACertAliasName}/></TableBodyCell>
      <TableBodyCell class="w-96"><input type="file" id="RemoteCertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleCACertUpload}></TableBodyCell>
      <TableBodyCell class="w-36"><Button color="dark" on:click={uploadCaCert}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>


  <TabItem title="Remote Certificates" on:click={RefreshRemoteCert}>
 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>



{#if getRemoteCertReady==1}
{#each remoteCertList as remoteCert, index}
<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-64">{remoteCert}</TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>

</TableBodyRow>
{/each}
{/if}


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name" bind:value={RemoteCertAliasName}/></TableBodyCell>
      <TableBodyCell class="w-96"><input type="file" id="RemoteCertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleRemoteCertUpload}>
</TableBodyCell>
      <TableBodyCell class="w-36"><Button color="dark" on:click={uploadRemoteCert}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>
    <TabItem title="CRL">
<Accordion>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Manually Uploaded File</span>
<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-10">
    </TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">CRL Issuer</TableHeadCell>
    <TableHeadCell class="w-10">Next Update</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
  </TableHead>
  <TableBody>


<TableBodyRow>
      <TableBodyCell class="w-10">
<button on:click={NewCRLFileUploadTrigger}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
    </TableBodyRow>
     <tr>
    <td ></td>
    <td ></td>
    <td ></td>
        <td ></td>
    <td ><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>
  </TableBody>
</Table>

<Modal bind:open={newCRLFileUpload} size="md" class="w-full" autoclose>


<table>

<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">CRL File</p></td>
<td class="pl-5 pt-5">

<input type="file" id="configUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400">

</td>
<td class="pl-5 pt-5">
  <Button>Upload</Button>

</td>

</tr>

  </table>

</Modal>

  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">URL</span>


<p class="mb-4 font-semibold text-gray-900 dark:text-white">Download URL Interval</p>
<div class="flex gap-4">
  <Radio bind:group={crlInterval} value='everyW' >Every Week</Radio>
  <Radio bind:group={crlInterval} value='everyM' >Every Month</Radio>
  <Radio bind:group={crlInterval} value='everyQ' >Every Quarter</Radio>
</div>
<div class="p-4"></div>
    <Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-10">

    </TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-10">CRL issuer</TableHeadCell>
    <TableHeadCell class="w-10">Next Update</TableHeadCell>
    <TableHeadCell class="w-10">URL</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
  </TableHead>
  <TableBody>


<TableBodyRow>


      <TableBodyCell class="w-10">
<button on:click={NewCRLTrigger}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
    </TableBodyRow>
        <tr>
    <td ></td>
    <td ></td>
    <td ></td>
        <td ></td>
    <td ><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
  </TableBody>
</Table>

<Modal bind:open={newCRL} size="sm" class="w-full" autoclose>


<table>


 <tr>
   <td><p class="pl-20 pt-4 text-lg font-light text-right">URL</p></td><td class="pl-5 pt-5"><input type="text" bind:value={CRLURL}  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
</tr>


      <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>
  </table>

</Modal>


  </AccordionItem>
</Accordion>
 

  </TabItem>
</Tabs>