<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker,Spinner } from 'flowbite-svelte';
  import TimezonePicker from 'svelte-timezone-picker';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { operationConfig,
  OperationConfig_Time_ChangedLog,
  OperationConfig_Reboot_ChangedLog,
  ChangedOperationConfig,
  fakeTimeMSecSince1970,
  fakeTimeString
   } from "./configG.js"


    const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };


    let formModal = false;
    let WaitToReboot=false;
    let WaitToReset=false;
    let hidden=1;

    let timestamp = "";
    let dateTimeString="";
    let NewDate;
    let interval;

    let timezone = 'Asia/Taipei';


    let MYear=2023;
    let MMonth=7;
    let MDay=26;
    let MHour=10;
    let MMin=10;



    let operation_data="";
    let changed_operation_data = {};
    let saved_changed_operation_data = {};
    let operation_time_changedValues = [];
    let operation_reboot_changedValues = [];    
    let getDataReady=0;




    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

    fakeTimeMSecSince1970.subscribe(val => {
        timestamp = val;
    });

    fakeTimeString.subscribe(val => {
        dateTimeString = val;
    });

    function update(ev) {
        console.log(ev.detail.timezone);
        changed_operation_data.config.system_operation_time.tz=ev.detail.timezone;
        timezone=ev.detail.timezone;
    }

    operationConfig.subscribe(val => {
        operation_data = val;
    });



    OperationConfig_Time_ChangedLog.subscribe(val => {
      operation_time_changedValues = val;
    });


    OperationConfig_Reboot_ChangedLog.subscribe(val => {
      operation_reboot_changedValues = val;
    });

    ChangedOperationConfig.subscribe(val => {
      saved_changed_operation_data = val;
    });




    let DateTimeContent="";

    let activePreset = '';
    let minute = '*';
    let hour = '*';
    let dayOfMonth = '*';
    let month = '*';
    let dayOfWeek = '*';

    let action='reboot'


    const presets = {
    everyMinute: '* * * * * reboot',
    hourly: '0 * * * * reboot',
    daily: '0 0 * * * reboot',
    weekly: '0 0 * * 7 reboot',
    monthly: '0 0 1 * * reboot'
    };


    let cron = '* * * * * reboot';



    let errors = {
        minute: false,
        hour: false,
        dayOfMonth: false,
        dayOfWeek: false
    };

    function updateCron() {
        cron = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek} ${action}`;
    }


    function applyPreset(p) 
    {
        errors.minute=false;
        errors.hour=false;
        errors.dayOfMonth=false;
        errors.dayOfWeek=false;
        activePreset = p;
        cron = presets[p];
        [minute, hour, dayOfMonth, month, dayOfWeek, action] = cron.split(' ');
    }




    function isValidCronField(value, min, max) 
    {
        if (value === '*') return true;
        const num = Number(value)
        return !isNaN(num) && num >= min && num <= max;

        //const parts = value.split(',');

        //return parts.every(part => {
          // step
          //if (part.includes('/')) {
         //   const [base, step] = part.split('/');
          //  if (!step || isNaN(step)) return false;
          //  return base === '*' || isValidCronField(base, min, max);
        //  }

          // range
         // if (part.includes('-')) {
          //  const [from, to] = part.split('-').map(Number);
         //   return (
          //    !isNaN(from) &&
         //     !isNaN(to) &&
          //    from >= min &&
          //    to <= max &&
          //    from <= to
          //  );
         // }

          // single number
         // const num = Number(part);
         // return !isNaN(num) && num >= min && num <= max;
       // });
    }

    const validators = {
        minute: v => isValidCronField(v, 0, 59),
        hour: v => isValidCronField(v, 0, 23),
        dayOfMonth: v => isValidCronField(v, 1, 31),
        month: v => isValidCronField(v, 1, 12),
        dayOfWeek: v => isValidCronField(v, 1, 7)
    };


    function formatDateToCustomString() 
    {
        let date= new Date(timestamp);
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const year = date.getFullYear();
        const month = monthNames[date.getMonth()]; 
        const day = date.getDate();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        dateTimeString=`${month} ${day}, ${year} at ${hours}:${minutes}:${seconds}`;
        fakeTimeString.set(dateTimeString);
      //  console.log("dateTimeString: ", dateTimeString);

    }


    async function PostSetDateTime () {
    const res = await fetch(window.location.origin+"/sETDatetime",  {
        method: 'POST',
        body: DateTimeContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {
            console.log("Set Date Time OK\r\n");

            timestamp=NewDate.getTime()
            fakeTimeMSecSince1970.set(timestamp);
            formatDateToCustomString();

        }
    }


    function SyncWithBrowser()
    {
        NewDate=new Date();

        let currentDate = NewDate.toLocaleDateString('en-CA'); 
        let currentTime = NewDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

        let currentDateTime = `${currentDate} ${currentTime}`; 
        console.log("currentDateTime: ", currentDateTime);

        const encoder = new TextEncoder();

        const DateTimeBinary= encoder.encode(currentDateTime);

        console.log("sessionBinary.length:");
        console.log(sessionBinary.length);
        DateTimeContent=new Uint8Array(DateTimeBinary.length+sessionBinary.length);
        DateTimeContent.set(sessionBinary,0);
        DateTimeContent.set(DateTimeBinary, sessionBinary.length);

        PostSetDateTime();
        console.log("after set date time");
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
        operation_time_changedValues=[...operation_time_changedValues, changedstr];
      }
    }
  }

  function SaveOperationTimeSettings(){
    console.log("Save Operation Time Setting\r\n");
    if (operation_time_changedValues.length !=0)
    {
      operation_time_changedValues=[];
    }



    compareObjects(changed_operation_data.config.system_operation_time, operation_data.config.system_operation_time);

    OperationConfig_Time_ChangedLog.set(operation_time_changedValues);

    saved_changed_operation_data.config.system_operation_time=JSON.parse(JSON.stringify(changed_operation_data.config.system_operation_time));
    ChangedOperationConfig.set(saved_changed_operation_data);
    
    console.log(operation_time_changedValues);

  };


  function SaveOperationRebootSettings(){

    if (!errors.minute&&
        !errors.hour&&
        !errors.dayOfMonth&&
        !errors.dayOfWeek)

    {
        console.log("Save Operation Reboot Setting\r\n");
        if (operation_reboot_changedValues.length !=0)
        {
          operation_reboot_changedValues=[];
        }

        changed_operation_data.config.system_reboot_scheduler.preset=activePreset;
        changed_operation_data.config.system_reboot_scheduler.cronString=cron;

        if (changed_operation_data.config.system_reboot_scheduler.cronString !=operation_data.config.system_reboot_scheduler.cronString)
        {
            let changedstr="Value of cronString has changed to "+changed_operation_data.config.system_reboot_scheduler.cronString;
            operation_reboot_changedValues=[...operation_reboot_changedValues, changedstr];
        }

        if (changed_operation_data.config.system_reboot_scheduler.preset !=operation_data.config.system_reboot_scheduler.preset)
        {
            let changedstr="Value of preset has changed to "+changed_operation_data.config.system_reboot_scheduler.preset;
            operation_reboot_changedValues=[...operation_reboot_changedValues, changedstr];
        }


        OperationConfig_Reboot_ChangedLog.set(operation_reboot_changedValues);


        saved_changed_operation_data.config.system_reboot_scheduler = JSON.parse(JSON.stringify(changed_operation_data.config.system_reboot_scheduler));
        ChangedOperationConfig.set(saved_changed_operation_data);
        console.log(operation_reboot_changedValues);
    }

  };



    async function PostReboot () {
    const res = await fetch(window.location.origin+"/PostReboot", {
        method: 'POST',
        body: sessionBinary
    })

        if (res.status == 200)
        {
            console.log("reboot command sent\r\n");
            WaitToReboot=true;
            setTimeout(() => {
              window.location.href = window.location.origin;
              }, 10000); 
        }
    }



    async function PostReset () {
    const res = await fetch(window.location.origin+"/PostReset", {
        method: 'POST',
        body: sessionBinary
    })

        if (res.status == 200)
        {
            console.log("reset command sent\r\n");
            WaitToReset=true;
            setTimeout(() => {
              window.location.href = window.location.origin;
              }, 10000); 
        }
    }


  function StartReboot()
  {
    if (sessionid)
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        PostReboot();
    }
  }

  function StartReset()
  {
    if (sessionid)
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        PostReset();
    }
  }

    function updateTimeStamp()
    {
        timestamp+=1000;
        fakeTimeMSecSince1970.set(timestamp);
        formatDateToCustomString();
    }


    const startInterval = () => {
        interval = setInterval(updateTimeStamp, 1000); // update every second
    };

    const stopInterval = () => {
        clearInterval(interval);
    };

    async function getOperationData () {
        const res = await fetch(window.location.origin+"/getOperationData", {
            method: 'POST',
            body: sessionBinary
        })

        if (res.status == 200)
        {
            operation_data =await res.json();
            console.log(operation_data);
            operationConfig.set(operation_data);


            changed_operation_data= JSON.parse(JSON.stringify(operation_data));
            saved_changed_operation_data = JSON.parse(JSON.stringify(operation_data))
            ChangedOperationConfig.set(saved_changed_operation_data);
            timezone=changed_operation_data.config.system_operation_time.tz;
            timestamp=changed_operation_data.config.system_operation_time.currTimestamp
            fakeTimeMSecSince1970.set(timestamp);
            formatDateToCustomString();
            startInterval();
            cron = changed_operation_data.config.system_reboot_scheduler.cronString;
            console.log("cron:", cron);

            if (cron.length > 7)
            {
                [minute, hour, dayOfMonth, month, dayOfWeek, action] = cron.split(' ');
            }

            activePreset=changed_operation_data.config.system_reboot_scheduler.preset;


            getDataReady=1;
        }
      }

  function AutoSyncTime()
  {
    if (changed_operation_data.config.system_operation_time.autoSyncTime)
    {
      changed_operation_data.config.system_operation_time.autoSyncTime=1;
    }
    else
    {
      changed_operation_data.config.system_operation_time.autoSyncTime=0;
    }
  }

  function CheckDLS()
  {
    if (changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn)
    {
      changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn=1;
    }
    else
    {
      changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn=0;
    }
  }





  onMount(() => {

    console.log("operation sessionid: ");
    console.log(sessionid);


    if (sessionid && operation_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getOperationData();
    }
    else if (sessionid && operation_data !="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        changed_operation_data = JSON.parse(JSON.stringify(saved_changed_operation_data));


        if (operation_time_changedValues.length == 0)
        {
            changed_operation_data.config.system_operation_time = JSON.parse(JSON.stringify(operation_data.config.system_operation_time));
        }
        else
        {
            changed_operation_data.config.system_operation_time = JSON.parse(JSON.stringify(saved_changed_operation_data.config.system_operation_time));
        }


        if (operation_reboot_changedValues.length == 0)
        {
            changed_operation_data.config.system_reboot_scheduler = JSON.parse(JSON.stringify(operation_data.config.system_reboot_scheduler));
        }
        else
        {
            changed_operation_data.config.system_reboot_scheduler = JSON.parse(JSON.stringify(saved_changed_operation_data.config.system_reboot_scheduler));
        }

        cron = changed_operation_data.config.system_reboot_scheduler.cronString;

        if (cron.length > 7)
        {
            [minute, hour, dayOfMonth, month, dayOfWeek, action] = cron.split(' ');
        }

        activePreset=changed_operation_data.config.system_reboot_scheduler.preset;

        timezone=changed_operation_data.config.system_operation_time.tz;
        getDataReady=1;
    }

  });


 </script>
<Tabs style="underline">
  <TabItem open title="Time">
<table>
    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Current Local Date & Time</p></td>
    <td class="pl-5 pt-5">
{dateTimeString}
    </td>


    </tr>

    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Automatic Date & Time</p></td><td class="pl-5 pt-5">
{#if getDataReady==1}
    <Toggle bind:checked={changed_operation_data.config.system_operation_time.autoSyncTime} on:change={AutoSyncTime}></Toggle>
{/if}
    </td>
    </tr>



    <tr>
    <td class="w-85">   </td>
    <td class="w-85 pt-5 pl-5">

{#if getDataReady==1}
{#if !changed_operation_data.config.system_operation_time.autoSyncTime}

    <Button on:click={SyncWithBrowser}>Sync With Browser</Button>

{#if hidden == 0}

    <Button on:click={() => formModal = true}>Manually Set Date & Time</Button>
{:else}
    <p></p>
{/if}

{:else}

{#if hidden == 0}
<Radio bind:group={changed_operation_data.config.system_operation_time.autoSyncTimeParam.type} value='GPS'><p class="text-lg pt-1">GPS</p></Radio>
{/if}

<Radio bind:group={changed_operation_data.config.system_operation_time.autoSyncTimeParam.type} value='NTP'><p class="text-lg pt-1">NTP</p>

<p class="pl-5">
{#if changed_operation_data.config.system_operation_time.autoSyncTimeParam.type=="NTP"} <FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="NTP Server" bind:value={changed_operation_data.config.system_operation_time.autoSyncTimeParam.ntpServer}/>
{:else}
<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="NTP Server" disabled/>
{/if}
</p>
</Radio>
{/if}
{/if}

    </td>
    </tr>

<tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Time Zone</p></td>
    <td class="w-85 pt-5 pl-5">
{#if getDataReady==1}
    <TimezonePicker {timezone} on:update="{update}" />
{/if}
    </td>
    </tr>


{#if hidden == 0}
    <tr>
{#if getDataReady==1}
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Day Light Saving</p></td><td class="pl-5 pt-5"><Toggle bind:checked={changed_operation_data.config.system_operation_time.autoSyncTimeParam.dstEn} on:change={CheckDLS}></Toggle></td>
{/if}
    </tr>
{/if}
<tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveOperationTimeSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



<Modal bind:open={formModal} size="md" class="w-full" autoclose>

<table>


<tr>
      <td class="w-24 pl-5 pt-5"><input type="number" bind:value={MYear} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
      <td class="pl-5 pt-5">-</td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MMonth} min=1 max=12 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

      <td class="pl-5 pt-5">-</td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MDay} min=1 max=31 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


      <td class="pl-16 pt-5"> </td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MHour} min=0 max=23 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


      <td class="pl-5 pt-5"> : </td>
      <td class="w-20 pl-5 pt-5"><input type="number" bind:value={MMin} min=0 max=59 class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
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
    <td class="pt-10">


    <Button color="dark" pill={true}>Apply</Button>

    </td>


    </tr>
  </table>

</Modal>

</table>


  </TabItem>

   <TabItem title="Reboot">
<table>
<tr>
    <td class="w-65">Reboot Device</td><td class="pl-5">    <Button color="dark" pill={true} on:click={StartReboot}>Reboot</Button></td>
</tr>

<Modal bind:open={WaitToReboot} size="md" class="w-full" permanent={true}>
<table>
<tr>
<td class="pt-5">
<Spinner size={16} /></td> 
<td class="pt-5">
<p class="pl-5" style="color:red; font-size:18px">Reboot ....
</p>
</td>

</tr>
</table>
</Modal>


</table>


    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Scheduler</p></td><td class="pl-5 pt-5">
{#if getDataReady == 1}
    <Toggle bind:checked={changed_operation_data.config.system_reboot_scheduler.enable}></Toggle>
{/if}
    </td>
    </tr>


{#if changed_operation_data.config.system_reboot_scheduler.enable}


<p class="pt-10"></p>



{#if getDataReady}

<div class="max-w-3xl p-6 rounded-2xl shadow-xl bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-white">
<h2 class="text-2xl font-bold mb-4">Reboot Scheduler</h2>


<h3 class="font-semibold">Presets</h3>
<div class="flex flex-wrap gap-3 mt-2 mb-6">
  <button
    type="button"
    on:click={() => applyPreset('daily')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {activePreset == 'daily'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Daily
  </button>

  <button
    type="button"
    on:click={() => applyPreset('weekly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {activePreset == 'weekly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Weekly
  </button>

  <button
    type="button"
    on:click={() => applyPreset('monthly')}
    class="px-4 py-2 rounded-full transition transform duration-200 shadow-md
      {activePreset == 'monthly'
        ? 'bg-blue-800 text-white scale-105'
        : 'bg-blue-100 text-black hover:bg-blue-400 hover:scale-105'}"
  >
    Monthly
  </button>
</div>


<div class="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white/20 p-4 rounded-xl">
<div>
<label for="cron-minute" class="text-sm">Minute</label>
<input id="cron-minute" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.minute ? 'border-2 border-red-500' : ''}" bind:value={minute} on:input={() => {
    errors.minute = !validators.minute(minute);
    if (!errors.minute) updateCron();
  }} placeholder="* 0-59" />
</div>


<div>
<label for="cron-hour" class="text-sm">Hour</label>
<input id="cron-hour" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.hour ? 'border-2 border-red-500' : ''}" bind:value={hour} on:input={() => {
  errors.hour = !validators.hour(hour);
  if (!errors.hour) updateCron();
}} placeholder="* 0-23" />
</div>


<div>
<label for="cron-dom" class="text-sm">Day</label>

{#if dayOfMonth != '*'}

<input id="cron-dom" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfMonth ? 'border-2 border-red-500' : ''}" bind:value={dayOfMonth} on:input={() => {
  errors.dayOfMonth = !validators.dayOfMonth(dayOfMonth);
  if (!errors.dayOfMonth) updateCron();
}} placeholder="* 1-31" disabled={activePreset != 'monthly'} />

{/if}
</div>


<div>
<label for="cron-dow" class="text-sm">Weekday</label>

{#if dayOfWeek != '*'}

<input id="cron-dow" class="w-full mt-1 px-3 py-2 rounded-lg text-black disabled:cursor-not-allowed {errors.dayOfWeek ? 'border-2 border-red-500' : ''}" bind:value={dayOfWeek} on:input={() => {
  errors.dayOfWeek = !validators.dayOfWeek(dayOfWeek);
  if (!errors.dayOfWeek) updateCron();
}} placeholder="* 1-7" disabled={activePreset != 'weekly'}/>

{/if}

</div>
</div>

{#if errors.minute}
  <p class="text-red-200 text-xs mt-1">
    Invalid Minute (0–59 and * allowed)
  </p>
{/if}

{#if errors.hour}
  <p class="text-red-200 text-xs mt-1">
    Invalid Hour (0–23 and * allowed)
  </p>
{/if}

{#if errors.dayOfMonth}
  <p class="text-red-200 text-xs mt-1">
    Invalid Day (1-31 and * allowed)
  </p>
{/if}


{#if errors.dayOfWeek}
  <p class="text-red-200 text-xs mt-1">
    Invalid Weekday (1-7 and * allowed)
  </p>
{/if}

</div>


{/if}

<p class="pt-10"></p>
<Button color="blue" pill={true} on:click={SaveOperationRebootSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button>





{/if}




      </TabItem>




   <TabItem title="Reset">

<table>
<tr>
    <td class="w-65">Reset to default</td><td class="pl-5">    <Button color="dark" pill={true} on:click={StartReset}>Reset</Button></td>
</tr>

<Modal bind:open={WaitToReset} size="md" class="w-full" permanent={true}>
<table>
<tr>
<td class="pt-5">
<Spinner size={16} /></td> 
<td class="pt-5">
<p class="pl-5" style="color:red; font-size:18px">Reset to default ....
</p>
</td>

</tr>
</table>
</Modal>

</table>

      </TabItem>



 </Tabs>
