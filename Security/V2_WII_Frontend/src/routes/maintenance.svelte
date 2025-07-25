<script>
  import { Tabs, TabItem, Table, AccordionItem, Accordion,Button, Label, Toggle, Checkbox, Radio, Modal, Spinner, Helper } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { dashboadData,maintenanceConfig,
  ChangedMaintenanceConfig,
  MaintenanceConfigChangedLog
  } from "./configG.js"


  let hidden=1;
  let maintenance_data="";
  let changed_maintenance_data = {};
  let saved_changed_maintenance_data = {};
  let getDataReady=0;
  let maintenance_changedValues = [];

  let dashboard_data="";

  let selectedFwr = null;
  let fwrContent; 
  let magicValid=1;

  let defaultModal = false;
  let uploadfwrIsValid =0;
  let CheckedFwrInvalid=0;
  let logLines = [];

  let RestartIntervalId;
  let RestartReady=0;
  let localUpdateKeepConfig=1;
  let fileFwName="No file chosen";


  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let PingType=0;
  let PingHost="";
  let TracerouteType=0;
  let TracerouteHost="";
  let NSLookupHost="";
  let system_log="";
  let SystemLogContent;
  let SystemLog_Offset=0;


  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
  });

  dashboadData.subscribe(val => {
        dashboard_data = val;
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

  const regex = /[;*!@#~]/;
  const ipv4reg = /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;
  const ipv6Reg = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|([0-9a-fA-F]{1,4}:)((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;


  const domain = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;


  let invalidPing=false;
  let invalidTraceRoute=false;
  let invalidNslookup=false;

  let PingContent;
  let PingResult="";
  let TracerouteContent;
  let TraceResult="";
  let NslookupContent;
  let NslookupResult="";

  let StartPing=0;
  let FinishPing=0;

  let StartNsLookup=0;
  let FinishNsLookup=0;

  let StartTraceroute=0;
  let FinishTraceroute=0;

  let major=0;
  let minor=0;
  let patch=0;

  let fileMajor=0;
  let fileMinor=0;
  let filePatch=0
  let startTimeoutId=null;




  async function NsLookup() {
    const res = await fetch(window.location.origin+"/nsLoOkup", {
      method: 'POST',
      body: NslookupContent
    })

    if (res.status == 200)
    {
      NslookupResult =await res.text();
      console.log(NslookupResult);
      StartNsLookup=0;
      FinishNsLookup=1;

    }
    else
    {
      console.log("error nslookup");
    }
  }


  function executeNslookup()
  {
    invalidNslookup=!domain.test(NSLookupHost);
    if (!invalidNslookup)
    {
      StartNsLookup=1;
      FinishNsLookup=0;
      let NslookupCmd="nslookup "+NSLookupHost;
      const bytesArray = Array.from(NslookupCmd).map(char => char.charCodeAt(0));
      let nslookupBinary = new Uint8Array(bytesArray);
      NslookupContent=new Uint8Array(nslookupBinary.length+sessionBinary.length);
      NslookupContent.set(sessionBinary,0);
      NslookupContent.set(nslookupBinary, sessionBinary.length);

      NsLookup();
    }
  }


  async function Traceroute() {
    const res = await fetch(window.location.origin+"/TraceroutehoST", {
      method: 'POST',
      body: TracerouteContent
    })

    if (res.status == 200)
    {
      TraceResult =await res.text();
      console.log(TraceResult);
      StartTraceroute=0;
      FinishTraceroute=1;

    }
    else
    {
      console.log("error traceroute");
    }
  }




  function executeTraceroute()
  {

    if (TracerouteType == 0)
    {
      invalidTraceRoute=!(ipv4reg.test(TracerouteHost));
    }
    else if (TracerouteType == 1)
    {
      invalidTraceRoute=!(ipv6Reg.test(TracerouteHost));
    }
    else
    {
      invalidTraceRoute=true;
    }

    if (!invalidTraceRoute)
    {
      StartTraceroute=1;
      FinishTraceroute=0;

      let TracerouteCmd="traceroute -q 1";
      if (TracerouteType==0)
      {
        TracerouteCmd +=" -w 1 -n -4 "+ TracerouteHost;
      }
      else if (TracerouteType == 1)
      {
        TracerouteCmd +=" -w 3 -n -6 "+TracerouteHost;
      }
      else
      {
        console.log("error input of traceroute");
      }


      const bytesArray = Array.from(TracerouteCmd).map(char => char.charCodeAt(0));
      let tracerouteBinary = new Uint8Array(bytesArray);
      TracerouteContent=new Uint8Array(tracerouteBinary.length+sessionBinary.length);
      TracerouteContent.set(sessionBinary,0);
      TracerouteContent.set(tracerouteBinary, sessionBinary.length);

      Traceroute();
    }
  }


  async function Ping() {
    const res = await fetch(window.location.origin+"/pingHoSt", {
      method: 'POST',
      body: PingContent
    })

    if (res.status == 200)
    {
      PingResult =await res.text();
      console.log(PingResult);
      StartPing=0;
      FinishPing=1;
    }
    else
    {
      console.log("error ping");
      StartPing=0;
      FinishPing=1;
    }
  }


  function executePing()
  {
//    console.log("Ping Type:", PingType);

    if (PingType == 0)
    {
      invalidPing=!(ipv4reg.test(PingHost));
    }
    else if (PingType == 1)
    {
      invalidPing=!(ipv6Reg.test(PingHost));
    }
    else
    {
      invalidPing=true;
    }


  
    if (!invalidPing)
    {
      StartPing=1;
      FinishPing=0;
      let pingCmd="ping -c 5";
      if (PingType==0)
      {
        pingCmd +=" -W 1 -4 "+ PingHost;
      }
      else if (PingType == 1)
      {
        pingCmd +=" -6 "+PingHost;
      }
      else
      {
        console.log("error input of ping");
      }


      const bytesArray = Array.from(pingCmd).map(char => char.charCodeAt(0));
      let pingBinary = new Uint8Array(bytesArray);
      PingContent=new Uint8Array(pingBinary.length+sessionBinary.length);
      PingContent.set(sessionBinary,0);
      PingContent.set(pingBinary, sessionBinary.length);

      Ping();
    }
  }


  async function handleFwrUpload(event) 
  {
    const fwr = event.target.files[0];
    if (fwr) 
    {
      fileFwName=fwr.name;
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

  function parseVersion(version) {
    return version.split('.').map(Number);
  }


  function sendPing() 
  {
    if (startTimeoutId != null)
    { 
      clearTimeout(startTimeoutId);
      startTimeoutId = null;
    }
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
        let versionArray=fwrContent.subarray(sessionBinary.length+12, sessionBinary.length+20)
        const trimmedLength = Array.from(versionArray).reverse().findIndex(byte => byte !== 0);
        let trimmedArray = versionArray.subarray(0, 8-trimmedLength);

        const decoder = new TextDecoder('utf-8');
        const version = decoder.decode(trimmedArray);
        console.log("version: ", version);
        [fileMajor, fileMinor, filePatch] = parseVersion(version);
        console.log(fileMajor,fileMinor,filePatch);

        defaultModal=true;

        if (localUpdateKeepConfig ==1)
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
            uploadfwrIsValid=1;
            console.log("200 Valid Fwr, updating...");
            startTimeoutId=setTimeout(() => {
              RestartIntervalId = setInterval(sendPing, 5000);
            }, 1000);
          }
          else
          {
            magicValid=0;
            CheckedFwrInvalid=1;
          }
        }
        else
        {
          const res = await fetch(window.location.origin+"/UpdateFwrNokeepC", {
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
            startTimeoutId=setTimeout(() => {
              RestartIntervalId = setInterval(sendPing, 5000);
            }, 1000);
          }
          else
          {
            magicValid=0;
            CheckedFwrInvalid=1;
          }        
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


  function EW_FOTA_KeepConfig()
  {
    console.log("EW FOTA KeepConfig");
    console.log(changed_maintenance_data.config.system_maintenance.fotaKeepConfig);
    if (changed_maintenance_data.config.system_maintenance.fotaKeepConfig)
    {
      changed_maintenance_data.config.system_maintenance.fotaKeepConfig=1;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.fotaKeepConfig=0;
    }

  }

  function MonCheck()
  {

    if (changed_maintenance_data.config.system_maintenance.weekDayMon)
    {
      changed_maintenance_data.config.system_maintenance.weekDayMon=0;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.weekDayMon=1;
    }
  }

  function TueCheck()
  {
  
    if (changed_maintenance_data.config.system_maintenance.weekDayTue)
    {
      changed_maintenance_data.config.system_maintenance.weekDayTue=0;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.weekDayTue=1;
    }
  }

  function WedCheck()
  {
  
    if (changed_maintenance_data.config.system_maintenance.weekDayWed)
    {
      changed_maintenance_data.config.system_maintenance.weekDayWed=0;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.weekDayWed=1;
    }
  }

  function ThuCheck()
  {
  
    if (changed_maintenance_data.config.system_maintenance.weekDayThu)
    {
      changed_maintenance_data.config.system_maintenance.weekDayThu=0;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.weekDayThu=1;
    }
  }


  function FriCheck()
  {
  
    if (changed_maintenance_data.config.system_maintenance.weekDayFri)
    {
      changed_maintenance_data.config.system_maintenance.weekDayFri=0;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.weekDayFri=1;
    }
  }


  function SatCheck()
  {
  
    if (changed_maintenance_data.config.system_maintenance.weekDaySat)
    {
      changed_maintenance_data.config.system_maintenance.weekDaySat=0;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.weekDaySat=1;
    }
  }


  function SunCheck()
  {
  
    if (changed_maintenance_data.config.system_maintenance.weekDaySun)
    {
      changed_maintenance_data.config.system_maintenance.weekDaySun=0;
    }
    else
    {
      changed_maintenance_data.config.system_maintenance.weekDaySun=1;
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

      console.log(changed_maintenance_data.config.system_maintenance.fotaEn);

      getDataReady=1;
    }
  }


  async function getSystemLog() {
    const res = await fetch(window.location.origin+"/getSystemlog", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

        system_log =await res.text();
        console.log(system_log);
        console.log("system logOK");
        console.log(system_log.length);
       // logLines = system_log.split('\n').reverse().join('\n');
 
    }
  }

  const RefreshSystemLog = () =>
  {  
    getSystemLog();

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
      if (dashboard_data != "")
      {
        [major, minor, patch] = parseVersion(dashboard_data.config.dashboard.systemInfo.firmwareVersion);
        console.log("major: ", major);
        console.log("minor: ", minor);
        console.log("patch: ", patch);
      }

    }
    else if (sessionid && maintenance_data != "")
    {
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);  

      if (maintenance_changedValues.length == 0)
      {
        changed_maintenance_data = JSON.parse(JSON.stringify(maintenance_data));
      }
      else
      {
        changed_maintenance_data = JSON.parse(JSON.stringify(saved_changed_maintenance_data));
      }


      if (dashboard_data != "")
      {
        [major, minor, patch] = parseVersion(dashboard_data.config.dashboard.systemInfo.firmwareVersion);
        console.log("major: ", major);
        console.log("minor: ", minor);
        console.log("patch: ", patch);
      }

      getDataReady=1;


    }

  });
 </script>

<Tabs style="underline">
  <TabItem open title="Firmware">

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Local
    </span>  
<table>


<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Update Local Firmware</p></td>
<td class="pl-5 pt-5" colspan="2">


<label for="FwrUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg" >Choose File</label>
<input type="file" id="FwrUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"  style="display: none;" on:change={handleFwrUpload}>
<span class="pl-4">{fileFwName}</span>


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
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Keep Current Configuration</p></td>
    <td class="pl-5 pt-5">
<Toggle bind:checked={localUpdateKeepConfig}></Toggle>
</td>
</tr>

</table>

</AccordionItem>



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    EW-FOTA
    </span>  

<table>

    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Enable EW-FOTA</p></td>
<td class="pl-5 pt-5">
{#if getDataReady==1}
<Toggle bind:checked={changed_maintenance_data.config.system_maintenance.fotaEn} on:change={EW_FOTA_Check}></Toggle>
{/if}
</td>

  </tr>

<tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Keep Current Configuration</p></td>
    <td class="pl-5 pt-5">
<Toggle bind:checked={changed_maintenance_data.config.system_maintenance.fotaKeepConfig} on:change={EW_FOTA_KeepConfig}></Toggle>
</td>
</tr>


 <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">EW-FOTA Time Configuration</p></td>
<td class="pl-5 pt-5 w-10">
Weekday
</td>

<td class="pl-5 pt-5" colspan="2">
{#if getDataReady==1}
{#if changed_maintenance_data.config.system_maintenance.fotaEn}
<div class="flex gap-3">
<label class="font-medium">
 <input type="checkbox" checked={!!changed_maintenance_data.config.system_maintenance.weekDayMon} on:click={MonCheck}>
Mon
</label>

<label class="font-medium">
<input type="checkbox" checked={!!changed_maintenance_data.config.system_maintenance.weekDayTue} on:click={TueCheck}>
Tue
</label>


<label class="font-medium">
<input type="checkbox" checked={!!changed_maintenance_data.config.system_maintenance.weekDayWed} on:click={WedCheck}>
Wed
</label>


<label class="font-medium">
<input type="checkbox" checked={!!changed_maintenance_data.config.system_maintenance.weekDayThu} on:click={ThuCheck}>
Thu
</label>


<label class="font-medium">
<input type="checkbox" checked={!!changed_maintenance_data.config.system_maintenance.weekDayFri} on:click={FriCheck}>
Fri
</label>


<label class="font-medium">
<input type="checkbox" checked={!!changed_maintenance_data.config.system_maintenance.weekDaySat} on:click={SatCheck}>
Sat
</label>


<label class="font-medium">
<input type="checkbox" checked={!!changed_maintenance_data.config.system_maintenance.weekDaySun} on:click={SunCheck}>
Sun
</label>

</div>
{:else}

<div class="flex gap-3">
<label class="font-medium text-gray-400 dark:text-gray-500 ">
 <input type="checkbox" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-700 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" disabled>
Mon
</label>

<label class="font-medium text-gray-400 dark:text-gray-500 ">
 <input type="checkbox" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-700 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" disabled>
Tue
</label>


<label class="font-medium text-gray-400 dark:text-gray-500 ">
 <input type="checkbox" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-700 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" disabled>
Wed
</label>


<label class="font-medium text-gray-400 dark:text-gray-500 ">
 <input type="checkbox" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-700 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" disabled>
Thu
</label>


<label class="font-medium text-gray-400 dark:text-gray-500 ">
 <input type="checkbox" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-700 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" disabled>
Fri
</label>


<label class="font-medium text-gray-400 dark:text-gray-500 ">
 <input type="checkbox" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-700 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" disabled>
Sat
</label>


<label class="font-medium text-gray-400 dark:text-gray-500 ">
 <input type="checkbox" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 dark:bg-gray-700 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600" disabled>
Sun
</label>

</div>

{/if}
{/if}
</td>

  </tr>



 <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right"></p></td>
<td class="pl-5 pt-5 w-10">
Hour
</td>

<td class="pl-5 pt-5" colspan="2">
{#if getDataReady==1}
{#if changed_maintenance_data.config.system_maintenance.fotaEn}
<input type="number" bind:value={changed_maintenance_data.config.system_maintenance.hour} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"  min="0" max="23" >

{:else}


<input type="number" class="disabled:cursor-not-allowed bg-gray-100 border-gray-300 border text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"  min="0" max="23" disabled>

{/if}
{/if}
</td>

  </tr>

<tr class="pt-10">
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
    <td><Button color="blue" pill={true} on:click={SaveMaintenanceSettings}><svg class="mr-2 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>
    <td></td>
    <td></td>

    </tr>

</table>
</AccordionItem>
</Accordion>


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
</TabItem>

 <TabItem title="Diagnostic">

<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Ping
    </span>

<table>


 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">

      <Radio bind:group={PingType} value={0} >IPv4</Radio>
      <Radio bind:group={PingType} value={1} >IPv6</Radio>

</div></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Host</p></td><td class="pl-5 pt-5">

{#if !invalidPing}      
      <input type="text" bind:value={PingHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="text" bind:value={PingHost} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-fill p-2.5">

{/if}
      </td>

{#if invalidPing}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Command</span>
  </Helper>
</td>
{/if}

</tr>

<tr>

<td></td>
<td></td>

    <td class="pl-10"><Button color="blue" pill={true} on:click={executePing}>Execute</Button></td>
</tr>


</table>

<p class="pt-10"></p>
<Table class="text-gray-900">

{#if StartPing == 0 && FinishPing == 1}
 
<pre style="white-space: pre-wrap;">{PingResult}</pre>

{:else if StartPing == 1  && FinishPing == 0}
<Spinner />

{/if}


</Table>




  </AccordionItem>  

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Traceroute
    </span>

<table>

 <tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">

      <Radio bind:group={TracerouteType} value={0} >IPv4</Radio>
      <Radio bind:group={TracerouteType} value={1} >IPv6</Radio>

</div></td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Host</p></td><td class="pl-5 pt-5">

{#if !invalidTraceRoute}      
      <input type="text" bind:value={TracerouteHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
      
{:else}
      <input type="text" bind:value={TracerouteHost} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-fill p-2.5">
   
{/if}

      </td>



{#if invalidTraceRoute}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Command</span>
  </Helper>
</td>
{/if}

</tr>

<tr>

<td></td>
<td></td>

    <td class="pl-10"><Button color="blue" pill={true} on:click={executeTraceroute}>Execute</Button></td>
</tr>


</table>

<p class="pt-10"></p>

<Table class="text-gray-900">

{#if StartTraceroute==0 && FinishTraceroute==1}
<pre style="white-space: pre-wrap;">{TraceResult}</pre>

{:else if StartTraceroute==1 && FinishTraceroute ==0}
<Spinner />

{/if}


</Table>


  </AccordionItem>  



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Nslookup
    </span>
<table>
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Host</p></td><td class="pl-5 pt-5">
{#if !invalidNslookup}

      <input type="text" bind:value={NSLookupHost} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}

      <input type="text" bind:value={NSLookupHost} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-fill p-2.5">
{/if}
      </td>


{#if invalidNslookup}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Command</span>
  </Helper>
</td>
{/if}

</tr>

<tr>

<td></td>
<td></td>

    <td class="pl-10"><Button color="blue" pill={true} on:click={executeNslookup}>Execute</Button></td>
</tr>
</table>

<p class="pt-10"></p>

<Table class="text-gray-900">

{#if StartNsLookup==0 && FinishNsLookup ==1}
<pre style="white-space: pre-wrap;">{NslookupResult}</pre>
{:else if StartNsLookup==1 && FinishNsLookup==0}

<Spinner />
{/if}


</Table>


  </AccordionItem> 

</Accordion>
 </TabItem>

 <TabItem title="Log Viewer" on:click={RefreshSystemLog}>


<pre style="white-space: pre-wrap;">  
{system_log}
  </pre>

 </TabItem>
</Tabs>