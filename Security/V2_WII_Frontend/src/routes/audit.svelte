<script>
  import { Tabs, TabItem, Table, AccordionItem, Accordion,Button, Label, Toggle, Checkbox, Radio, Modal, Spinner } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";


  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });


  let fwr_log="";
  let login_log="";
  let reboot_log="";
  let disconnected_log="";

  async function getFwrAudit() {
    const res = await fetch(window.location.origin+"/getFwrAudit", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

      fwr_log =await res.text();
      console.log(fwr_log);

     // getMachineCertReady=1;
    
    }
  }


  async function getLoginAudit() {
    const res = await fetch(window.location.origin+"/GeTloGinAUdit", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

      login_log =await res.text();
      console.log(login_log);

     // getMachineCertReady=1;
    
    }
  }


  async function getRebootAudit() {
    const res = await fetch(window.location.origin+"/GetREBootAudIT", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

      reboot_log =await res.text();
      console.log(reboot_log);

     // getMachineCertReady=1;
    
    }
  }


  async function getInterfaceDisconnected() {
    const res = await fetch(window.location.origin+"/GetInterfaceDisconneteDAudIT", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      disconnected_log =await res.text();
      console.log(disconnected_log);

     // getMachineCertReady=1;
    
    }
  }


  const RefreshFwrAudit = () =>
  {
     getFwrAudit();
     console.log("RefreshFwrAudit");

  }

  const RefreshLoginAudit = () =>
  {
     getLoginAudit();
     console.log("RefreshLoginAudit");

  }

  const RefreshRebootAudit = () =>
  {
    getRebootAudit();
    console.log("RefreshRebootAudit");

  }

  const RefreshInterfaceDisconnectedAudit = () =>
  {
     getInterfaceDisconnected();
     console.log("RefreshInterfaceDisconnectedAudit ");

  }


  onMount(() => {

    console.log("audit sessionid: ");
    console.log(sessionid);


    if (sessionid)
    {
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

    }

    if (fwr_log=="")
    {
      getFwrAudit();
    }


      });
 </script>


 <Tabs style="underline">
  <TabItem open title="Firmware Upgrade" on:click={RefreshFwrAudit}>

<pre style="white-space: pre-wrap;">{fwr_log}</pre>

  </TabItem>

  <TabItem title="Login" on:click={RefreshLoginAudit}>

<pre style="white-space: pre-wrap;">{login_log}</pre>
  </TabItem>

  <TabItem title="Reboot" on:click={RefreshRebootAudit}>

<pre style="white-space: pre-wrap;">{reboot_log}</pre>

  </TabItem>


  <TabItem title="Interface Disconnected" on:click={RefreshInterfaceDisconnectedAudit}>

<pre style="white-space: pre-wrap;">{disconnected_log}</pre>

  </TabItem>

  </Tabs>