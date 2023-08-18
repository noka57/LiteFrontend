<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, Toggle,Select, Checkbox, Input, Tooltip, Radio,FloatingLabelInput } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { wanConfig } from "./configG.js";

   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
   let autoApnEn=false;
   let pin="";
   let apn="";
   let apnuser="";
   let apnpwd="";
   let apnauthselected="";
   let Authselected="";
   let ExtraAT="";
   let BandLockEn=false;
   let BandScanEn=false;
   let BandScanList="";
   let BandSelect="";
   let simPolicy;
   let gLink;
   let EthernetWANConnectionType;
   let EthernetWANStaticIP;
   let EthernetWANStaticIPnetmask;
   let EthernetWANStaticIPgateway;
   let EWANPPPAccount="";
   let EWANPPPPwd="";
   let ewlapEn=false;
   let ewlapCheckRule;
   let ewlapCheckTarget;
   let ewlapCheckPeriodPollingTime;
   let ewlapCheckPeriodRetryCnt;
   let ewlapCheckPeriodInterval;
   let wanRedundancyPolicy;
   let fareSavingPolicy;



  let selected13="Sch";
  let countries13 = [
    {value:"Sch", name: "Schedule"},
    {value:"Peri", name: "Period"},
  ]


  let selected14="Hour";
  let countries14 = [
    {value:"Day", name: "Day(s)"},
    {value:"Hour", name: "Hour(s)"},
    {value:"Minute", name: "Minute(s)"},
  ]


  let selected15="TX";
  let countries15 = [
    {value:"TX", name: "TX"},
    {value:"RX", name: "RX"},
    {value:"TRX", name: "TX+RX"},
  ]


  let openDetailStatus = false;

  function handleClick() {
        openDetailStatus=!openDetailStatus;
  }


  let wan_data="";
  let getdataAlready=0;

  let sessionid;
  sessionidG.subscribe(val => {
    sessionid = val;
  });


  wanConfig.subscribe(val => {
        wan_data = val;
    });


  async function getWANData () {
    const res = await fetch(window.location.origin+"/getWANData", {
      method: 'POST',
      body: JSON.stringify({
        sessionid
      })
    })

    if (res.status == 200)
    {
      wan_data =await res.json();
      console.log(wan_data);
      wanConfig.set(wan_data);
      if (getdataAlready == 0)
      {
        pin=wan_data.config.networking_wan_cwan[0].basicSetting.pin;
        autoApnEn=wan_data.config.networking_wan_cwan[0].basicSetting.autoApnEn; 
        apn=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.apn;
        apnuser=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.username;
        apnpwd=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.password;
        apnauthselected=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.auth;
        Authselected=wan_data.config.networking_wan_cwan[0].advancedSetting.auth;
        ExtraAT=wan_data.config.networking_wan_cwan[0].advancedSetting.extAtCmd;
        BandLockEn=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockEn;
        BandScanEn=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandScanEn;
        BandScanList=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandScanList;
        BandSelect=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandSelect;
        simPolicy=wan_data.config.networking_wan_cwan[0].simPolicy;
        gLink=wan_data.config.networking_wan_cwan[0].gLink;
        EthernetWANConnectionType=wan_data.config.networking_wan_ewan[0].basicSetting.connectionType;
        EthernetWANStaticIP=wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.ip;
        EthernetWANStaticIPnetmask=wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.netmask;
        EthernetWANStaticIPgateway=wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.gateway;
        EWANPPPAccount=wan_data.config.networking_wan_ewan[0].basicSetting.pppoe.account;
        EWANPPPPwd=wan_data.config.networking_wan_ewan[0].basicSetting.pppoe.password;
        ewlapEn=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapEn;
        ewlapCheckRule=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkRule;
        ewlapCheckTarget=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkTarget;

        ewlapCheckPeriodPollingTime=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.pollingTime;
        ewlapCheckPeriodRetryCnt=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.retryCnt;
        ewlapCheckPeriodInterval=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.interval;

        wanRedundancyPolicy=wan_data.config.networking_wan_wanRedundancyPolicy;
        fareSavingPolicy=wan_data.config.networking_wan_fareSavingPolicy;


      }

      getdataAlready=1;

    }
  }


  onMount(() => {

      console.log("wan sessionid: ");
      console.log(sessionid);


    if (sessionid && wan_data=="")
    {
        getWANData();
    }
    else if (sessionid && wan_data!="")
    {
        getdataAlready=1;
        console.log("wan_data is not null");
        pin=wan_data.config.networking_wan_cwan[0].basicSetting.pin;
        autoApnEn=wan_data.config.networking_wan_cwan[0].basicSetting.autoApnEn; 
        apn=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.apn;
        apnuser=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.username;
        apnpwd=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.password;
        apnauthselected=wan_data.config.networking_wan_cwan[0].basicSetting.apnManual.auth;
        Authselected=wan_data.config.networking_wan_cwan[0].advancedSetting.auth;
        ExtraAT=wan_data.config.networking_wan_cwan[0].advancedSetting.extAtCmd;
        BandLockEn=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockEn;
        BandScanEn=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandScanEn;
        BandScanList=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandScanList;
        BandSelect=wan_data.config.networking_wan_cwan[0].advancedSetting.bandLockParam.bandSelect;
        simPolicy=wan_data.config.networking_wan_cwan[0].simPolicy;
        gLink=wan_data.config.networking_wan_cwan[0].gLink;
        EthernetWANConnectionType=wan_data.config.networking_wan_ewan[0].basicSetting.connectionType;
        EthernetWANStaticIP=wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.ip;
        EthernetWANStaticIPnetmask=wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.netmask;
        EthernetWANStaticIPgateway=wan_data.config.networking_wan_ewan[0].basicSetting.staticIp.gateway;
        EWANPPPAccount=wan_data.config.networking_wan_ewan[0].basicSetting.pppoe.account;
        EWANPPPPwd=wan_data.config.networking_wan_ewan[0].basicSetting.pppoe.password;
        ewlapEn=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapEn;
        ewlapCheckRule=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkRule;
        ewlapCheckTarget=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkTarget;

        ewlapCheckPeriodPollingTime=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.pollingTime;
        ewlapCheckPeriodRetryCnt=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.retryCnt;
        ewlapCheckPeriodInterval=wan_data.config.networking_wan_ewan[0].ewlapEthernetWan.ewlapParam.chkPeriod.interval;

        wanRedundancyPolicy=wan_data.config.networking_wan_wanRedundancyPolicy;
        fareSavingPolicy=wan_data.config.networking_wan_fareSavingPolicy;
        getWANData();
    }

  });


</script>

<Tabs style="underline">
  <TabItem open title="General Status">
  <Table striped={true}>
  <TableHead>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].name} {/if}</TableHeadCell>
    <TableHeadCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[1].name} {/if}</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>Status</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].status} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[1].status} {/if}</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>IP Address</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].ip} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[1].ip} {/if}</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Gateway</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].gateway} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[1].gateway} {/if}</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>DNS 1</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].dns[0]} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[1].dns[0]} {/if}</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>DNS 2</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].dns[1]} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[1].dns[1]} {/if}</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>SIM Status</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].simStatus} {/if}</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell>Role</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].role} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[1].role} {/if}</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell>Error Reason</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].errorReason} {/if}</TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell class="text-center bg-green-400" colspan="3">Cellular Status</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>Register Status</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].registerStatus} {/if}</TableBodyCell>
      <TableBodyCell rowspan="5">N.A</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>Network Type</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].type} {/if}</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>Band</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].band} {/if}</TableBodyCell>
    </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell>Operator</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].operator} {/if}</TableBodyCell>
    </TableBodyRow>

    <TableBodyRow>
      <TableBodyCell>RSSI</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_generalStatus[0].rssi} {/if}</TableBodyCell>
    </TableBodyRow>



  </TableBody>
</Table>
  </TabItem>
  <TabItem title="Cellular WAN-1">
<Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">General Status</div>
<Table>
  <TableHead>
    <TableHeadCell class="text-center">Index</TableHeadCell>
    <TableHeadCell class="text-center">Modem Status</TableHeadCell>
    <TableHeadCell class="text-center">Modem Model</TableHeadCell>
    <TableHeadCell class="text-center">IMSI</TableHeadCell>
    <TableHeadCell class="text-center">Registration</TableHeadCell>
  </TableHead>
 
  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"  on:click={handleClick}>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">1</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.modemStatus} {/if}</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.modemModel} {/if}</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.imsi} {/if}</td>
  <td class="px-6 py-4 text-center whitespace-nowrap font-medium  text-gray-900 dark:text-white">{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.registerStatus} {/if}</td>
  </tr>

{#if openDetailStatus}


 <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Phone Number</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.phoneNumber} {/if}</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Modem Status</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.status} {/if}</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">SIM Status</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.simStatus} {/if}</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Active SIM</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.activeSim} {/if}</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Signal Strength</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>RSSI</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">RSSI</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.rssi} {/if}</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Registered Mobile Operator</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.operator} {/if}</TableBodyCell>
      </TableBodyRow>





      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Connect State</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.connectState} {/if}</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Connected Network Type</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.type} {/if}</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Connected Band</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.band} {/if}</TableBodyCell>
      </TableBodyRow>


      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Modem Vendor</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.modemVendor} {/if}</TableBodyCell>
      </TableBodyRow>



      <TableBodyRow {trClass}>
      <TableBodyCell class="text-right" colspan="3">Modem Firmware Version</TableBodyCell>
      <TableBodyCell class="text-left" colspan="2" {tdClass}>{#if getdataAlready}{wan_data.config.networking_wan_cwan[0].generalStatus.modemFwVer} {/if}</TableBodyCell>
      </TableBodyRow>

{/if}


</Table>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Basic Settings</span>
    <table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">PIN</p></td><td class="pl-5"><input type="text" bind:value={pin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Auto Apn</Tooltip>
    </td>
    </tr>
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-center">Automatic APN Selection</p></td><td class="pl-5 pt-5"><Toggle 
  bind:checked={autoApnEn} /></td>
    </tr>

{#if !autoApnEn}
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">APN</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apn} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Username</p></td><td class="pl-5 pt-5"><input type="text" bind:value={apnuser} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="password" bind:value={apnpwd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>

    <tr>
    <td>

    <p class="pl-40 pt-5 text-lg font-light text-right">Authentication</p></td>



    <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={apnauthselected} value='AUTO' >AUTO</Radio>
  <Radio bind:group={apnauthselected} value='CHAP' >CHAP</Radio>
  <Radio bind:group={apnauthselected} value='PAP' >PAP</Radio>

</div>


    </td>

{/if}
    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    </table>
  </AccordionItem>
  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Advanced Settings</span>
<table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Authentication</p></td>  
    <td class="pl-5">
<div class="flex gap-4">
  <Radio bind:group={Authselected} value='AUTO' >AUTO</Radio>
  <Radio bind:group={Authselected} value='3G' >3G</Radio>
  <Radio bind:group={Authselected} value='4G' >4G</Radio>
  <Radio bind:group={Authselected} value='5G' >5G</Radio>
  <Radio bind:group={Authselected} value='5GNR-SA' >5GNR-SA</Radio>
</div>
</td>
    </tr>


    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Extra AT Command </p></td><td class="pl-5 pt-5"><input type="text" bind:value={ExtraAT} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Band Lock</p></td><td class="pl-5 pt-5"><Toggle 
  bind:checked={BandLockEn} /></td>
    </tr>

{#if BandLockEn}

 <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Band Scan and List</p></td><td class="pl-5 pt-5"><Toggle 
  bind:checked={BandScanEn} /></td>
    </tr>
 
 {#if BandScanEn}   
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right"></p></td><td class="pl-5 pt-5">
    <input type="text" bind:value={BandScanList} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
      </td>
    </tr>
{/if}




    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Band Select: </p></td><td class="pl-5 pt-5"><input type="text" bind:value={BandSelect} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    </tr>
  
{/if}
        <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>
  </AccordionItem>

   <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">SIM Policy</span>
<table>
    <tr>
    <td><p class="pl-40 pt-1 text-lg font-light text-right">Authentication</p></td>
 <td class="pl-5">
<div class="flex gap-4">
  <Radio bind:group={simPolicy.auth} value={0} >SIM A First</Radio>
  <Radio bind:group={simPolicy.auth} value={1} >SIM B First</Radio>
  <Radio bind:group={simPolicy.auth} value={2} >SIM A Only</Radio>
  <Radio bind:group={simPolicy.auth} value={3} >SIM B Only</Radio>

</div>
</td>
    <td />
        <td />
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Checking Rules</p></td>
    <td/>
        <td />
            <td />
    </tr>

    <tr>
    <td />
        <td>
            <table>
              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Fail Connections
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="number" bind:value={simPolicy.checkRule.failConnection} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              times (1-10)
              </td> 
              </tr>


              <tr>
              <td class="border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              RSSI Monitor
              </td>
              <td class="border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">

 <input type="checkbox" id="simCheck1" name="simCheck1" bind:checked={simPolicy.checkRule.rssiMonitor.enable}>
  <label for="simCheck1" class="font-medium">Enable Threshold</label>
              -
              </td>

              <td>

              
<input type="number" bind:value={simPolicy.checkRule.rssiMonitor.threshold} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td> 
              <td>
              (-90~-113 dBm)
              </td>
              </tr>



              <tr>
              <td class="border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Network Service
              </td>
              <td class="border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
 <input type="checkbox" id="simCheck2" name="simCheck2" bind:checked={simPolicy.checkRule.networkService.enable}>
  <label for="simCheck2" class="font-medium">Enable Loss LTE Signal</label>
              
              </td>

              <td>
              
<input type="number" bind:value={simPolicy.checkRule.networkService.time} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td> 
              <td>
              (1-30 minutes)
              </td>
              </tr>



              <tr>
              <td class="border-t-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Roaming Service
              </td>
              <td class="border-t-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
 <input type="checkbox" id="simCheck3" name="simCheck3" bind:checked={simPolicy.checkRule.roamingService.enable}>
  <label for="simCheck3" class="font-medium">Enable Timeout</label>
              </td>

              <td>
              
<input type="number" bind:value={simPolicy.checkRule.roamingService.time} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td> 
              <td>
              (1-30 minutes)
              </td>
              </tr>
            </table>
        </td>
    <tr>




    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">SIM failover Treatment</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={simPolicy.checkRule.simFailover} value={0} >None</Radio>
  <Radio bind:group={simPolicy.checkRule.simFailover} value={1} >Reset Modem</Radio>
  <Radio bind:group={simPolicy.checkRule.simFailover} value={2}>Power Cycle Modem</Radio>


</div></td>
    </tr>

            <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>
  </AccordionItem>

    <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">LTE Guarantie Link</span>
<table>
    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Guarantie Link</p></td><td class="pl-5 pt-5"><Toggle bind:checked={gLink.enable}></Toggle></td>
    </tr>
{#if gLink.enable}

    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Parameter</p></td>



    </tr>


    <tr>
    <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Cellular Level Checking</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={gLink.checkParam.cellLvChk} value={0}>Disable</Radio>
  <Radio bind:group={gLink.checkParam.cellLvChk} value={1} >Enable</Radio>

</div></td>
    </tr>


    <tr>
    <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Packet Level Checking</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={gLink.checkParam.pktLvChk} value={0}>Disable</Radio>
  <Radio bind:group={gLink.checkParam.pktLvChk} value={1} >Enable</Radio>

</div></td>
    </tr>
{#if gLink.checkParam.pktLvChk}
    <tr>
    <td></td><td><p class="pl-5 pt-5 text-lg font-light text-right">Checking Method</p></td>
    

    </tr>


    <tr>

    <td></td><td></td><td class="pt-5">

  <label for="gLinkCheck1" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck1" name="gLinkCheck1" bind:checked={gLink.checkParam.chkMethod.pingEn}>
Ping Packet:</label>
    </td><td><FloatingLabelInput style="filled" id="packet_size" name="packet_size" type="number" label="Packet Size (Bytes)" value={gLink.checkParam.chkMethod.pingParam.size}/></td><td>
    <FloatingLabelInput style="filled" id="remote_host" name="remote_host" type="text" label="Remote Host" value={gLink.checkParam.chkMethod.pingParam.ip}/></td> 
    

    </tr>

    <tr>
    <td></td><td></td><td class="pt-5">

  <label for="gLinkCheck2" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck2" name="gLinkCheck2" bind:checked={gLink.checkParam.chkMethod.testIfEn}>
Test Interface</label>

    </td>

    <td class="pt-5" colspan="2">

    <div class="flex gap-3">
  <label for="gLinkCheck3" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck3" name="gLinkCheck3" bind:checked={gLink.checkParam.chkMethod.testIfParam.lan1En}>
LAN 1</label>

  <label for="gLinkCheck4" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck4" name="gLinkCheck4" bind:checked={gLink.checkParam.chkMethod.testIfParam.lan2En}>
LAN 2</label>



  <label for="gLinkCheck5" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck5" name="gLinkCheck5" bind:checked={gLink.checkParam.chkMethod.testIfParam.lan3En}>
LAN 3</label>


  <label for="gLinkCheck6" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck6" name="gLinkCheck6" bind:checked={gLink.checkParam.chkMethod.testIfParam.lan4En}>
LAN 4</label>


  <label for="gLinkCheck7" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck7" name="gLinkCheck7" bind:checked={gLink.checkParam.chkMethod.testIfParam.wanEn}>
Ethernet WAN</label>

  <label for="gLinkCheck8" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck8" name="gLinkCheck8" bind:checked={gLink.checkParam.chkMethod.testIfParam.cWanEn}>
Cellular WAN-1</label>

    </div>


    </td>
    

    </tr>


    <tr>
    <td></td><td></td><td class="pt-5">

      <label for="gLinkCheck9" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck9" name="gLinkCheck9" bind:checked={gLink.checkParam.chkMethod.dnsLockupEn}>
DNS Lookup</label>
    </td>
    
    <td class="pt-5"><FloatingLabelInput style="filled" id="FQDN" name="FQDN" type="text" label="FQDN" value={gLink.checkParam.chkMethod.dnsLockupParam.fqdn}/></td>
    <td class="pt-5"><FloatingLabelInput style="filled" id="DNSer" name="DNSer" type="text" label="DNS Server" value={gLink.checkParam.chkMethod.dnsLockupParam.dnser}/></td>
    </tr>

    <tr>
    <td></td><td></td><td class="pt-5">

          <label for="gLinkCheck10" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck10" name="gLinkCheck10" bind:checked={gLink.checkParam.chkMethod.dnsPktSniffEn}>
DNS Packet Sniff</label>

    </td>
    

    </tr>


    <tr>
    <td></td><td></td><td class="pt-5">
    <label for="gLinkCheck11" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck11" name="gLinkCheck11" bind:checked={gLink.checkParam.chkMethod.httpEn}>
Http(s)</label>

    </td>
    <td class="pt-5"><FloatingLabelInput style="filled" id="url" name="url" type="text" label="URL" value={gLink.checkParam.chkMethod.httpUrl}/></td>


    </tr>


    <tr>
    <td></td><td></td><td class="pt-5">
    <label for="gLinkCheck12" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck12" name="gLinkCheck12" bind:checked={gLink.checkParam.chkMethod.pktCountIncreaseEn}>
Packet Count Increase</label>

    </td>

    <td class="pt-5">
    <div class="flex gap-3">
    <Radio bind:group={gLink.checkParam.chkMethod.pktCountIncreaseMode} value={0}>RX</Radio>
    <Radio bind:group={gLink.checkParam.chkMethod.pktCountIncreaseMode} value={1}>RX + TX</Radio>
    </div>
    </td>
  
    </tr>

{/if} 

    <tr>
    <td><p class="pl-5 pt-5 text-lg font-light text-right">Recovery Sequence</p></td>
    

    </tr>



    <tr>
    <td></td><td class="pt-5">

    <label for="gLinkCheck13" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck13" name="gLinkCheck13" bind:checked={gLink.recoverySequence.relinkAgainEn}>
Relink Again</label>

    </td>

    <td class="pt-5"><FloatingLabelInput style="filled" id="RADelayS" name="RADelayS" type="number" label="Delay Seconds" value={gLink.recoverySequence.relinkAgainParam.delay}/></td>
    
    <td class="pt-5"><FloatingLabelInput style="filled" id="RARetryCount" name="RARetryCount" type="number" label="Retry Count" value={gLink.recoverySequence.relinkAgainParam.retryCnt}/></td>
    </tr>


    <tr>
    <td></td><td class="pt-5">

    <label for="gLinkCheck14" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck14" name="gLinkCheck14" bind:checked={gLink.recoverySequence.simSwitchOverEn}>
SIM Switch Over</label>

    </td>

    <td class="pt-5"><FloatingLabelInput style="filled" id="SIMSODelayS" name="SIMSODelayS" type="number" label="Delay Seconds" value={gLink.recoverySequence.simSwitchOverParam.delay}/></td>
    
    <td class="pt-5"><FloatingLabelInput style="filled" id="SIMSORetryCount" name="SIMSORetryCount" type="number" label="Retry Count" value={gLink.recoverySequence.simSwitchOverParam.retryCnt}/></td>

    </tr>

    <tr>
    <td></td><td class="pt-5">

    <label for="gLinkCheck15" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck15" name="gLinkCheck15" bind:checked={gLink.recoverySequence.modemSwResetEn}>
Modem SW Reset</label>
    </td>

    <td class="pt-5"><FloatingLabelInput style="filled" id="MSWRDelayS" name="MSWRDelayS" type="number" label="Delay Seconds" value={gLink.recoverySequence.modemSwResetParam.delay}/></td>
    
    <td class="pt-5"><FloatingLabelInput style="filled" id="MSWRRetryCount" name="MSWRRetryCount" type="number" label="Retry Count" value={gLink.recoverySequence.modemSwResetParam.retryCnt}/></td>

    </tr>


    <tr>
    <td></td><td class="pt-5">
    <label for="gLinkCheck16" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck16" name="gLinkCheck16" bind:checked={gLink.recoverySequence.modemHwResetEn}>
Modem HW Reset</label>

    </td>


    <td class="pt-5"><FloatingLabelInput style="filled" id="MHWRDelayS" name="MHWRDelayS" type="number" label="Delay Seconds" value={gLink.recoverySequence.modemHwResetParam.delay}/></td>
    
    <td class="pt-5"><FloatingLabelInput style="filled" id="MHWRRetryCount" name="MHWRRetryCount" type="number" label="Retry Count" value={gLink.recoverySequence.modemHwResetParam.retryCnt}/></td>

    </tr>



    <tr>
    <td></td><td class="pt-5">

        <label for="gLinkCheck17" class="text-sm font-medium block text-gray-900 dark:text-gray-300 flex items-center">
 <input class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-600 dark:border-gray-500 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" type="checkbox" id="gLinkCheck17" name="gLinkCheck17" bind:checked={gLink.recoverySequence.sysRebootEn}>
System Reboot</label>

    </td>

    <td class="pt-5"><FloatingLabelInput style="filled" id="SRDelayS" name="SRDelayS" type="number" label="Delay Seconds" value={gLink.recoverySequence.sysRebootParam.delay}/></td>
    
    <td class="pt-5"><FloatingLabelInput style="filled" id="SRRetryCount" name="SRRetryCount" type="number" label="Retry Count" value={gLink.recoverySequence.sysRebootParam.retryCnt}/></td>


    </tr>


{/if}
    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>
  </AccordionItem>


  <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">AT Debug</span>
<div class='mb-6'>
  <Label for='default-input' class='block mb-2'>Command</Label>
  <Input id='default-input' placeholder="Command" />
</div>


<Label for="textarea-id" class="mb-2">Result</Label>
<Textarea id="textarea-id" placeholder="Result" rows="4" name="message"/>
<div class="flex flex-wrap gap-2">
<Button>Send</Button>
</div>

  </AccordionItem>
</Accordion>
  </TabItem>


<TabItem title="Ethernet WAN">
  <Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">General Status</div>



<Table>
  <TableHead>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Connection Type</TableHeadCell>
    <TableHeadCell>Network Type</TableHeadCell>
    <TableHeadCell>IP Address</TableHeadCell>
    <TableHeadCell>Netmask</TableHeadCell>
    <TableHeadCell>Gateway</TableHeadCell>
    <TableHeadCell>DNS</TableHeadCell>
    <TableHeadCell>MAC</TableHeadCell>
    <TableHeadCell>Connection Status</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.interface} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.connectionType} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.networkType} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.ip} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.netmask} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.gateway} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.dns[0]} {/if}/{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.dns[1]} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.mac} {/if}</TableBodyCell>
      <TableBodyCell>{#if getdataAlready}{wan_data.config.networking_wan_ewan[0].generalStatus.connectionStatus} {/if}</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

  </AccordionItem>


  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Basic Settings</div>
  <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Connection Type</p>

  </td>


  <td class="pl-5"><div class="flex gap-4">
  <Radio bind:group={EthernetWANConnectionType} value={0} >Static IP</Radio>
  <Radio bind:group={EthernetWANConnectionType} value={1} >DHCP Client</Radio>
  <Radio bind:group={EthernetWANConnectionType} value={2}>PPPoE</Radio>


</div></td>


  </tr>

{#if EthernetWANConnectionType==0}
  <tr>
      <td><p class="pl-40 pt-1 text-lg font-light text-right">IP Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={EthernetWANStaticIP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

  <tr>
        <td><p class="pl-40 pt-1 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5"><input type="text" bind:value={EthernetWANStaticIPnetmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

  <tr>

            <td><p class="pl-40 pt-1 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5"><input type="text" bind:value={EthernetWANStaticIPgateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

{:else if EthernetWANConnectionType==2}
  <tr>
        <td><p class="pl-40 pt-1 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5"><input type="text" bind:value={EWANPPPAccount} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

  <tr>

            <td><p class="pl-40 pt-1 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="password" bind:value={EWANPPPPwd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
  </tr>

{/if}

    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

  </AccordionItem>

  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">EWLAP-Ethernet WAN</div>

<table>
    <tr>
    <td class="w-60"><p class="pl-40 pt-5 text-lg font-light text-right">EWLAP</p></td>
    <td class="pl-5 pt-5"><Toggle bind:checked={ewlapEn}></Toggle></td>
    </tr>
{#if ewlapEn}

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Rules</p></td>
  <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={ewlapCheckRule} value={0} >PING</Radio>
  <Radio bind:group={ewlapCheckRule} value={1} >DNS Query</Radio>
  <Radio bind:group={ewlapCheckRule} value={2}>DNS Packet Check</Radio>


</div></td>

    </tr>





    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Target</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={ewlapCheckTarget} value={0} >None</Radio>
  <Radio bind:group={ewlapCheckTarget} value={1} >DNS 1</Radio>
  <Radio bind:group={ewlapCheckTarget} value={2}>DNS 2</Radio>
  <Radio bind:group={ewlapCheckTarget} value={3} >Gateway</Radio>
  <Radio bind:group={ewlapCheckTarget} value={4}>Other Host</Radio>

</div></td>

    </tr>

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Period</p></td>
    <td/>
        <td />
            <td />
    </tr>

    <tr>
    <td />
        <td>
            <table>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Polling times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="number" bind:value={ewlapCheckPeriodPollingTime} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              seconds
              </td> 
              </tr>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Retry Count
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="number" bind:value={ewlapCheckPeriodRetryCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              times
              </td> 
              </tr>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Interval times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
<input type="number" bind:value={ewlapCheckPeriodInterval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
              </td>

              <td>
              mini seconds
              </td> 
              </tr>
            </table>
        </td>
    <tr>
{/if}


    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

    </table>

  </AccordionItem>
</Accordion>
  </TabItem>



  <TabItem title="WAN Redundancy
Policy">
 <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Operation Mode</p>

  </td>

      <td class="pl-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.mode} value={0} >Off</Radio>
  <Radio bind:group={wanRedundancyPolicy.mode} value={1}>Always On</Radio>
  <Radio bind:group={wanRedundancyPolicy.mode} value={2}>Fail Over</Radio>
  <Radio bind:group={wanRedundancyPolicy.mode} value={3}>Fail Back</Radio>


</div></td>


  </tr>

{#if wanRedundancyPolicy.mode==1}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.alwaysOn.primaryWan} value={0} >Ethernet-WAN</Radio>
  <Radio bind:group={wanRedundancyPolicy.alwaysOn.primaryWan} value={1} >Cellular-WAN-1</Radio>


</div></td>


  </tr>

{:else if wanRedundancyPolicy.mode==2}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.failover.primaryWan} value={0} >Ethernet-WAN</Radio>
  <Radio bind:group={wanRedundancyPolicy.failover.primaryWan} value={1} >Cellular-WAN-1</Radio>
</div></td>

  </tr>
{:else if wanRedundancyPolicy.mode==3}
  <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Primary WAN</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.failback.primaryWan} value={0} >Ethernet-WAN</Radio>
  <Radio bind:group={wanRedundancyPolicy.failback.primaryWan} value={1} >Cellular-WAN-1</Radio>
</div></td>

  </tr>
{/if}

{#if wanRedundancyPolicy.mode==2 || wanRedundancyPolicy.mode==3}
    <tr>
 <td><p class="pl-40 pt-5 text-lg font-light text-right">Backup WAN</p></td>
  {#if wanRedundancyPolicy.failover.primaryWan==1 && wanRedundancyPolicy.mode==2}


 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.failover.backupWan} value={0} >Ethernet-WAN</Radio>
  </div></td>
  
  {:else if wanRedundancyPolicy.failover.primaryWan==0 && wanRedundancyPolicy.mode==2}

 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.failover.backupWan} value={1} >Cellular-WAN-1</Radio>

</div></td>
  {:else if wanRedundancyPolicy.failback.primaryWan==1 && wanRedundancyPolicy.mode==3}

<td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.failback.backupWan} value={0} >Ethernet-WAN</Radio>
</div></td>
  
  {:else if wanRedundancyPolicy.failback.primaryWan==0 && wanRedundancyPolicy.mode==3}

 <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={wanRedundancyPolicy.failback.backupWan} value={1} >Cellular-WAN-1</Radio>

</div></td>
{/if}

</tr>





 <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Payload Checking Rules</p></td>
  <td class="pl-5 pt-5"><div class="flex gap-4">
{#if wanRedundancyPolicy.mode==2}
  <Radio bind:group={wanRedundancyPolicy.failover.chkRule} value={0} >PING</Radio>
  <Radio bind:group={wanRedundancyPolicy.failover.chkRule} value={1} >DNS Query</Radio>
  <Radio bind:group={wanRedundancyPolicy.failover.chkRule} value={2}>DNS Packet Check</Radio>
{:else if wanRedundancyPolicy.mode==3}
  <Radio bind:group={wanRedundancyPolicy.failback.chkRule} value={0} >PING</Radio>
  <Radio bind:group={wanRedundancyPolicy.failback.chkRule} value={1} >DNS Query</Radio>
  <Radio bind:group={wanRedundancyPolicy.failback.chkRule} value={2}>DNS Packet Check</Radio>

{/if}

</div></td>
    </tr>


    <tr>
    <td><p class="pl-10 pt-5 text-lg font-light text-right">Checking Target</p></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">
{#if wanRedundancyPolicy.mode==2}
  <Radio bind:group={wanRedundancyPolicy.failover.chkTarget} value={0} >None</Radio>
  <Radio bind:group={wanRedundancyPolicy.failover.chkTarget} value={1} >DNS 1</Radio>
  <Radio bind:group={wanRedundancyPolicy.failover.chkTarget} value={2} >DNS 2</Radio>
  <Radio bind:group={wanRedundancyPolicy.failover.chkTarget} value={3} >Gateway</Radio>
  <Radio bind:group={wanRedundancyPolicy.failover.chkTarget} value={4}>Other Host</Radio>
{:else if wanRedundancyPolicy.mode==3}
  <Radio bind:group={wanRedundancyPolicy.failback.chkTarget} value={0} >None</Radio>
  <Radio bind:group={wanRedundancyPolicy.failback.chkTarget} value={1} >DNS 1</Radio>
  <Radio bind:group={wanRedundancyPolicy.failback.chkTarget} value={2} >DNS 2</Radio>
  <Radio bind:group={wanRedundancyPolicy.failback.chkTarget} value={3} >Gateway</Radio>
  <Radio bind:group={wanRedundancyPolicy.failback.chkTarget} value={4}>Other Host</Radio>


{/if}

</div></td>
    </tr>

    <tr>
    <td><p class="pl-20 pt-5 text-lg font-light text-right">Checking Period</p></td>
    <td/>
        <td />
            <td />
    </tr>

    <tr>
    <td />
        <td>
            <table>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Polling times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">

{#if wanRedundancyPolicy.mode==2}              
<input type="number" bind:value={wanRedundancyPolicy.failover.chkPeriod.pollingTime} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if wanRedundancyPolicy.mode==3}
<input type="number" bind:value={wanRedundancyPolicy.failback.chkPeriod.pollingTime} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}

              </td>

              <td>
              seconds
              </td> 
              </tr>



              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Retry Count
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">

{#if wanRedundancyPolicy.mode==2}
<input type="number" bind:value={wanRedundancyPolicy.failover.chkPeriod.retryCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if wanRedundancyPolicy.mode==3}
<input type="number" bind:value={wanRedundancyPolicy.failback.chkPeriod.retryCnt} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
              </td>

              <td>
              times
              </td> 
              </tr>

              <tr>
              <td class="border-b-2 border-r-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Interval times
              </td>
              <td class="border-b-2 border-l-2 border-solid border-zinc-400 px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
{#if wanRedundancyPolicy.mode==2}
<input type="number" bind:value={wanRedundancyPolicy.failover.chkPeriod.interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else if wanRedundancyPolicy.mode==3}
<input type="number" bind:value={wanRedundancyPolicy.failback.chkPeriod.interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
              </td>

              <td>
              mini seconds
              </td> 
              </tr>
            </table>
        </td>
    <tr>
{/if}


 <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

  </TabItem>


  <TabItem title="Fare Saving Policy">

<Accordion>
  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Control Traffic Flow</div>


 <table>
  <tr>
  <td><p class="pl-40 pt-1 text-lg font-light text-right">Control By</p>

  </td>


      <td class="pl-5" colspan="3"><div class="flex gap-4">
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.mode} value={0} >Off</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.mode} value={1} >Time</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.mode} value={2} >Traffic Amount</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.mode} value={3} >Data Source</Radio>


</div></td>
<td/>
<td/>
<td/>
<td/>
  </tr>


  {#if fareSavingPolicy.controlTrafficFlow.mode==1}

 <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Select</p>

  </td>

  <td class="pl-5 pt-5" colspan="2"> <div class="flex gap-4">
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.time.select} value={0} >Schedule</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.time.select} value={1} >Period</Radio>
  </div>
  </td>

  </tr>

  {#if fareSavingPolicy.controlTrafficFlow.time.select==0}
    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Time(Per month)</p></td><td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.schedule.startTime.day} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.schedule.startTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.schedule.startTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="pl-5 pt-5 text-lg font-light text-right">(DD:HH:MM)</td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">On Duty Lasting Time</p></td><td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.schedule.dutyTime.day} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.schedule.dutyTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.schedule.dutyTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
      <td class="pl-5 pt-5 text-lg font-light text-right">(DD:HH:MM)</td>
    </tr>

  {:else if fareSavingPolicy.controlTrafficFlow.time.select==1}

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Time(Per month)</p></td><td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.period.startTime.day} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.period.startTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.period.startTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
    <td class="pl-5 pt-5 text-lg font-light text-right">(DD:HH:MM)</td>
    </tr>

    <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">On Duty Lasting Time</p></td><td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.period.dutyTime.hour} min="0" max="23" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td><td class="pl-5 pt-5 text-lg font-light text-right">:</td>
    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.period.dutyTime.minute} min="0" max="59" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
          <td class="pl-5 pt-5 text-lg font-light text-right"></td>
      <td class="pl-5 pt-5 text-lg font-light text-left">(HH:MM)</td>
    </tr>

     <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Period Interval</p>

  </td>


    <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.interval} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
      <td class="pl-5 pt-5" colspan="2"> <div class="flex gap-4">
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.intervalMode} value={0} >Day(s)</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.intervalMode} value={1} >Hour(s)</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.time.period.periodInterval.intervalMode} value={2} >Minute(s)</Radio>
  </div>
  </td>

  </tr>

  {/if}


  {:else if fareSavingPolicy.controlTrafficFlow.mode==2}

 <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Start Day of Month</p>

  </td>

 <td class="pl-5 pt-5"><input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.trafficAmount.startTime} min="1" max="31" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td class="pl-5 pt-5">(1-31)</td>

  </tr>


  <tr>
    <td><p class="pl-40 pt-5 text-lg font-light text-right">Amount By</p>

 <td class="pl-5 pt-5" colspan="2"> <div class="flex gap-4">
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.trafficAmount.select} value={0} >TX</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.trafficAmount.select} value={1} >RX</Radio>
  <Radio bind:group={fareSavingPolicy.controlTrafficFlow.trafficAmount.select} value={2} >TX + RX</Radio>
  With
  </div>

  </td>



   <td class="pl-5 pt-5">
  <input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.trafficAmount.size} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Mbs </td>
  </tr>

  {:else if fareSavingPolicy.controlTrafficFlow.mode==3}

   <tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Disconnect Rule</p>

  </td>
  </tr>

     <tr>
  <td>

  </td>
  <td><p class="pl-5 pt-5 text-lg font-light text-center">Data Source</p>

  </td>

  <td class="pl-5 pt-5 text-lg font-light text-left">
  Modbus
  </td>
<td></td>
  </tr>

   <tr>

  <td><p class="pl-5 pt-5 text-lg font-light text-right">Checking Rule</p>

  </td>
  </tr>
<tr>
<td></td>
  <td class="pl-5 pt-5 text-lg font-light text-center">
  RX for
  </td>

   <td class="pl-5 pt-5">
  <input type="number" bind:value={fareSavingPolicy.controlTrafficFlow.dataSource.disconnectRule} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Minutes </td>
  <td></td>
  </tr>




<tr>
  <td><p class="pl-40 pt-5 text-lg font-light text-right">Re-Connect Rule</p>

  </td>
  </tr>

     <tr>
  <td>

  </td>
  <td><p class="pl-5 pt-5 text-lg font-light text-center">Data Source</p>

  </td>

  <td class="pl-5 pt-5 text-lg font-light text-left">
  Modbus
  </td>
  <td></td>

  </tr>


     <tr>
  <td><p class="pl-5 pt-5 text-lg font-light text-right">Checking Rule</p>

  </td>
  </tr>
<tr>
<td></td>
  <td class="pl-5 pt-5 text-lg font-light text-center" colspan="2">
Once Rx of Modbus and Disconnect lasting time
  </td>
   <td class="pl-5 pt-5">
  <input type="text" bind:value={fareSavingPolicy.controlTrafficFlow.dataSource.disconnectRule} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

    <td class="pl-5 pt-5"> Minutes </td>

  </tr>

  {/if}



 <tr>
    <td/>
<td/>
<td/>
    <td/>
<td/>
<td/>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



  </table>


    </AccordionItem>
  </Accordion>

  </TabItem>

  
</Tabs>


