<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio } from 'flowbite-svelte';


      import { onMount } from 'svelte';
      import { sessionidG } from "./sessionG.js";
      import { WiFiConfig,
        WiFi_Bluetooth_ConfigChangedLog,
        WiFi_WiFi5_ConfigChangedLog,
        WiFi_11ah_ConfigChangedLog,
        WiFi_11ah_General_ConfigChangedLog,
        ChangedWiFiConfig
      } from "./configG.js"



      let wifi_data="";
      let changed_wifi_data = {};
      let saved_changed_wifi_data = {};
      let getDataReady=0;
      let wifi_11ah_changedValues = [];
      let wifi_11ah_general_changedValues = [];
      let wifi_wifi5_changedValues = [];
      let wifi_bluetooth_changedValues = [];

      let sessionid;
      let sessionBinary;
      sessionidG.subscribe(val => {
        sessionid = val;
      });

      WiFiConfig.subscribe(val => {
        wifi_data = val;
      });


      WiFi_11ah_ConfigChangedLog.subscribe(val => {
            wifi_11ah_changedValues = val;
      });


      WiFi_11ah_General_ConfigChangedLog.subscribe(val => {
            wifi_11ah_general_changedValues = val;
      });

      WiFi_WiFi5_ConfigChangedLog.subscribe(val => {
            wifi_wifi5_changedValues = val;
      });


      WiFi_Bluetooth_ConfigChangedLog.subscribe(val => {
            wifi_bluetooth_changedValues = val;
      });


      ChangedWiFiConfig.subscribe(val => {
        saved_changed_wifi_data = val;
      });





      let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  

      function SaveBluetooth()
      {
            console.log("Save bluetooth\r\n");
            if (wifi_bluetooth_changedValues.length !=0)
            {
                  wifi_bluetooth_changedValues=[];
            }

            if (changed_wifi_data.config.wifi_bluetooth.enable != wifi_data.config.wifi_bluetooth.enable)
            {
                  let changedstr="Value of enable has changed to "+changed_wifi_data.config.wifi_bluetooth.enable;
                  wifi_bluetooth_changedValues=[...wifi_bluetooth_changedValues, changedstr];
            }

            if (changed_wifi_data.config.wifi_bluetooth.ssid != wifi_data.config.wifi_bluetooth.ssid)
            {
                  let changedstr="Value of ssid has changed to "+changed_wifi_data.config.wifi_bluetooth.ssid;
                  wifi_bluetooth_changedValues=[...wifi_bluetooth_changedValues, changedstr];
            }


            WiFi_Bluetooth_ConfigChangedLog.set(wifi_bluetooth_changedValues);
            saved_changed_wifi_data.config.wifi_bluetooth.enable=changed_wifi_data.config.wifi_bluetooth.enable;
            saved_changed_wifi_data.config.wifi_bluetooth.ssid=changed_wifi_data.config.wifi_bluetooth.ssid;

            ChangedWiFiConfig.set(saved_changed_wifi_data);
            console.log(wifi_bluetooth_changedValues);
      }




      function SaveWifi5()
      {

            console.log("Save wifi5\r\n");
            if (wifi_wifi5_changedValues.length !=0)
            {
                  wifi_wifi5_changedValues=[];
            }


            if (changed_wifi_data.config.wifi_wifi5.enable != wifi_data.config.wifi_wifi5.enable)
            {
                  let changedstr="Value of enable has changed to "+changed_wifi_data.config.wifi_wifi5.enable;
                  wifi_wifi5_changedValues=[...wifi_wifi5_changedValues, changedstr];
            }


            if (changed_wifi_data.config.wifi_wifi5.type != wifi_data.config.wifi_wifi5.type)
            {
                  let changedstr="Value of type has changed to "+changed_wifi_data.config.wifi_wifi5.type;
                  wifi_wifi5_changedValues=[...wifi_wifi5_changedValues, changedstr];
            }


            if (changed_wifi_data.config.wifi_wifi5.ssid != wifi_data.config.wifi_wifi5.ssid)
            {
                  let changedstr="Value of ssid has changed to "+changed_wifi_data.config.wifi_wifi5.ssid;
                  wifi_wifi5_changedValues=[...wifi_wifi5_changedValues, changedstr];
            }

            if (changed_wifi_data.config.wifi_wifi5.password != wifi_data.config.wifi_wifi5.password)
            {
                  let changedstr="Value of password has changed to "+changed_wifi_data.config.wifi_wifi5.password;
                  wifi_wifi5_changedValues=[...wifi_wifi5_changedValues, changedstr];
            }

            if (changed_wifi_data.config.wifi_wifi5.region != wifi_data.config.wifi_wifi5.region)
            {
                  let changedstr="Value of region has changed to "+changed_wifi_data.config.wifi_wifi5.region;
                  wifi_wifi5_changedValues=[...wifi_wifi5_changedValues, changedstr];
            }


            if (changed_wifi_data.config.wifi_wifi5.channel != wifi_data.config.wifi_wifi5.channel)
            {
                  let changedstr="Value of channel has changed to "+changed_wifi_data.config.wifi_wifi5.channel;
                  wifi_wifi5_changedValues=[...wifi_wifi5_changedValues, changedstr];
            }

            WiFi_WiFi5_ConfigChangedLog.set(wifi_wifi5_changedValues);
            saved_changed_wifi_data.config.wifi_wifi5.enable=changed_wifi_data.config.wifi_wifi5.enable;
            saved_changed_wifi_data.config.wifi_wifi5.type=changed_wifi_data.config.wifi_wifi5.type;
            saved_changed_wifi_data.config.wifi_wifi5.ssid=changed_wifi_data.config.wifi_wifi5.ssid;
            saved_changed_wifi_data.config.wifi_wifi5.password=changed_wifi_data.config.wifi_wifi5.password;     
            saved_changed_wifi_data.config.wifi_wifi5.region=changed_wifi_data.config.wifi_wifi5.region;
            saved_changed_wifi_data.config.wifi_wifi5.channel=changed_wifi_data.config.wifi_wifi5.channel;     

            ChangedWiFiConfig.set(saved_changed_wifi_data);
            console.log(wifi_wifi5_changedValues);

      }


      function Save11ah()
      {
            console.log("Save 11 ah\r\n");
            if (wifi_11ah_changedValues.length !=0)
            {
                  wifi_11ah_changedValues=[];
            }


            if (changed_wifi_data.config.wifi_11ah.enable != wifi_data.config.wifi_11ah.enable)
            {
                  let changedstr="Value of enable has changed to "+changed_wifi_data.config.wifi_11ah.enable;
                  wifi_11ah_changedValues=[...wifi_11ah_changedValues, changedstr];
            }

            if (changed_wifi_data.config.wifi_11ah.mode != wifi_data.config.wifi_11ah.mode)
            {
                  let changedstr="Value of mode has changed to "+changed_wifi_data.config.wifi_11ah.mode;
                  wifi_11ah_changedValues=[...wifi_11ah_changedValues, changedstr];
            }


            WiFi_11ah_ConfigChangedLog.set(wifi_11ah_changedValues);
            saved_changed_wifi_data.config.wifi_11ah.enable=changed_wifi_data.config.wifi_11ah.enable;
            saved_changed_wifi_data.config.wifi_11ah.mode=changed_wifi_data.config.wifi_11ah.mode;        
            ChangedWiFiConfig.set(saved_changed_wifi_data);
            console.log(wifi_11ah_changedValues);
      };


      function Save11ahStationMode()
      {
            console.log("Save 11 ah station mode\r\n");
            if (wifi_11ah_general_changedValues.length !=0)
            {
                  wifi_11ah_general_changedValues=[];
            }


            if (changed_wifi_data.config.wifi_11ah_general.ssid != wifi_data.config.wifi_11ah_general.ssid)
            {
                  let changedstr="Value of ssid has changed to "+wifi_data.config.wifi_11ah_general.ssid;
                  wifi_11ah_general_changedValues=[...wifi_11ah_general_changedValues, changedstr];
            }

            if (changed_wifi_data.config.wifi_11ah_general.password != wifi_data.config.wifi_11ah_general.password)
            {
                  let changedstr="Value of password has changed to "+changed_wifi_data.config.wifi_11ah_general.password;
                  wifi_11ah_general_changedValues=[...wifi_11ah_general_changedValues, changedstr];
            }


            WiFi_11ah_General_ConfigChangedLog.set(wifi_11ah_general_changedValues);
            saved_changed_wifi_data.config.wifi_11ah_general.ssid=changed_wifi_data.config.wifi_11ah_general.ssid;
            saved_changed_wifi_data.config.wifi_11ah_general.password=changed_wifi_data.config.wifi_11ah_general.password;        
            ChangedWiFiConfig.set(saved_changed_wifi_data);
            console.log(wifi_11ah_general_changedValues);
      }


      function Save11ahAPMode()
      {
            console.log("Save 11 ah ap mode\r\n");
            if (wifi_11ah_general_changedValues.length !=0)
            {
                  wifi_11ah_general_changedValues=[];
            }


            if (changed_wifi_data.config.wifi_11ah_general.ssid != wifi_data.config.wifi_11ah_general.ssid)
            {
                  let changedstr="Value of ssid has changed to "+changed_wifi_data.config.wifi_11ah_general.ssid;
                  wifi_11ah_general_changedValues=[...wifi_11ah_general_changedValues, changedstr];
            }

            if (changed_wifi_data.config.wifi_11ah_general.password != wifi_data.config.wifi_11ah_general.password)
            {
                  let changedstr="Value of password has changed to "+changed_wifi_data.config.wifi_11ah_general.password;
                  wifi_11ah_general_changedValues=[...wifi_11ah_general_changedValues, changedstr];
            }


            if (changed_wifi_data.config.wifi_11ah_general.region != wifi_data.config.wifi_11ah_general.region)
            {
                  let changedstr="Value of region has changed to "+changed_wifi_data.config.wifi_11ah_general.region;
                  wifi_11ah_general_changedValues=[...wifi_11ah_general_changedValues, changedstr];
            }


            if (changed_wifi_data.config.wifi_11ah_general.operation_band != wifi_data.config.wifi_11ah_general.operation_band)
            {
                  let changedstr="Value of operation_band has changed to "+changed_wifi_data.config.wifi_11ah_general.operation_band;
                  wifi_11ah_general_changedValues=[...wifi_11ah_general_changedValues, changedstr];
            }

            if (changed_wifi_data.config.wifi_11ah_general.channel != wifi_data.config.wifi_11ah_general.channel)
            {
                  let changedstr="Value of channel has changed to "+changed_wifi_data.config.wifi_11ah_general.channel;
                  wifi_11ah_general_changedValues=[...wifi_11ah_general_changedValues, changedstr];
            }


            WiFi_11ah_General_ConfigChangedLog.set(wifi_11ah_general_changedValues);
            saved_changed_wifi_data.config.wifi_11ah_general.ssid=changed_wifi_data.config.wifi_11ah_general.ssid;
            saved_changed_wifi_data.config.wifi_11ah_general.password=changed_wifi_data.config.wifi_11ah_general.password;
            saved_changed_wifi_data.config.wifi_11ah_general.region=changed_wifi_data.config.wifi_11ah_general.region;   
            saved_changed_wifi_data.config.wifi_11ah_general.operation_band=changed_wifi_data.config.wifi_11ah_general.operation_band;   
            saved_changed_wifi_data.config.wifi_11ah_general.channel=changed_wifi_data.config.wifi_11ah_general.channel;   

            ChangedWiFiConfig.set(saved_changed_wifi_data);
            console.log(wifi_11ah_general_changedValues);

      }


   async function getWIFIData () {
    const res = await fetch(window.location.origin+"/GEtwIFi", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      wifi_data = await res.json();
      console.log(wifi_data);
      WiFiConfig.set(wifi_data);

      changed_wifi_data = JSON.parse(JSON.stringify(wifi_data));
      saved_changed_wifi_data = JSON.parse(JSON.stringify(wifi_data))
      ChangedWiFiConfig.set(saved_changed_wifi_data);
      getDataReady=1;
    }
  }


  onMount(() => {

    console.log("wifi sessionid: ");
    console.log(sessionid);


    if (sessionid && wifi_data == "")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getWIFIData();
    }
    else if (sessionid && wifi_data !="")
    {

        changed_wifi_data=JSON.parse(JSON.stringify(saved_changed_wifi_data));

        if (wifi_11ah_changedValues.length == 0)
        {
            changed_wifi_data.config.wifi_11ah.enable = wifi_data.config.wifi_11ah.enable;
            changed_wifi_data.config.wifi_11ah.mode = wifi_data.config.wifi_11ah.mode;
        }


        if (wifi_11ah_general_changedValues.length == 0)
        {
            changed_wifi_data.config.wifi_11ah_general = JSON.parse(JSON.stringify(wifi_data.config.wifi_11ah_general)); 
        }

        if (wifi_wifi5_changedValues.length == 0)
        {
            changed_wifi_data.config.wifi_wifi5.enable = wifi_data.config.wifi_wifi5.enable;
            changed_wifi_data.config.wifi_wifi5.type = wifi_data.config.wifi_wifi5.type;
            changed_wifi_data.config.wifi_wifi5.ssid = wifi_data.config.wifi_wifi5.ssid;
            changed_wifi_data.config.wifi_wifi5.password = wifi_data.config.wifi_wifi5.password;
            changed_wifi_data.config.wifi_wifi5.region = wifi_data.config.wifi_wifi5.region;
            changed_wifi_data.config.wifi_wifi5.channel = wifi_data.config.wifi_wifi5.channel;
        }


        if (wifi_bluetooth_changedValues.length == 0)
        {
            changed_wifi_data.config.wifi_bluetooth.enable = wifi_data.config.wifi_bluetooth.enable;
            changed_wifi_data.config.wifi_bluetooth.ssid = wifi_data.config.wifi_bluetooth.ssid;

        }


        getDataReady=1;
    }

  });


</script>


<Tabs>

 <TabItem open title="11ah">

{#if getDataReady==1}

  <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">11ah</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_wifi_data.config.wifi_11ah.enable} value={0}>Disable</Radio>
  <Radio bind:group={changed_wifi_data.config.wifi_11ah.enable} value={1} >Enable</Radio>

</div></td>
      </tr>


      <tr>
          <td></td>

{#if saved_changed_wifi_data.config.wifi_11ah.enable == 1}    
          <td><p class="pl-5 pt-5 text-lg font-light text-left">Mode</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">

    <Radio bind:group={changed_wifi_data.config.wifi_11ah.mode} value={0}>Station</Radio>
    <Radio bind:group={changed_wifi_data.config.wifi_11ah.mode} value={1}>AP</Radio>
</div></td>
{:else}
          <td><p class="pl-5 pt-5 text-lg font-light text-left">Mode</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">

    <Radio bind:group={changed_wifi_data.config.wifi_11ah.mode} value={0} disabled>Station</Radio>
    <Radio bind:group={changed_wifi_data.config.wifi_11ah.mode} value={1} disabled>AP</Radio>
</div></td>
{/if}

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
        <td></td>
        <td></td>
        <td></td>        
    <td class="pl-10"><Button color="blue" pill={true} on:click={Save11ah}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


      </table>

<p class="pt-10"></p>


{#if saved_changed_wifi_data.config.wifi_11ah.enable == 1}   


 {#if saved_changed_wifi_data.config.wifi_11ah.mode ==0}


<Accordion>


  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">General</div>

<table>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_wifi_data.config.wifi_11ah_general.ssid}></td>
<td class="pl-5 pt-5">

</td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Encryption</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
<option value={0}>WPA3</option>
</select>

      </td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_wifi_data.config.wifi_11ah_general.password}></td>

</tr>

    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={Save11ahStationMode}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>

  </AccordionItem>

</Accordion>

 {:else if saved_changed_wifi_data.config.wifi_11ah.mode==1}

<Accordion>


  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">General</div>

<table>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_wifi_data.config.wifi_11ah_general.ssid}></td>
<td class="pl-5 pt-5">

</td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Encryption</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
<option value={0}>WPA3</option>
</select>

      </td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_wifi_data.config.wifi_11ah_general.password}></td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Region</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_11ah_general.region}>
<option value={1}>TAIWAN</option>
<option value={0}>US</option>
</select>

      </td>

</tr>




<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Operation Band(MHz)</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_11ah_general.operation_band}>
<option value={1}>1</option>
<option value={2}>2</option>
<option value={4}>4</option>
{#if changed_wifi_data.config.wifi_11ah_general.region == 0}
<option value={8}>8</option>
{/if}
</select>

      </td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Channel</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_11ah_general.channel}>

{#if changed_wifi_data.config.wifi_11ah_general.region==0 && changed_wifi_data.config.wifi_11ah_general.operation_band==1}

<option value={1}>1</option>
<option value={3}>3</option>
<option value={5}>5</option>
<option value={7}>7</option>
<option value={9}>9</option>
<option value={11}>11</option>
<option value={13}>13</option>
<option value={15}>15</option>
<option value={17}>17</option>
<option value={19}>19</option>
<option value={21}>21</option>
<option value={23}>23</option>
<option value={25}>25</option>
<option value={27}>27</option>
<option value={29}>29</option>
<option value={31}>31</option>
<option value={33}>33</option>
<option value={35}>35</option>
<option value={37}>37</option>
<option value={39}>39</option>
<option value={41}>41</option>
<option value={43}>43</option>
<option value={45}>45</option>
<option value={47}>47</option>
<option value={49}>49</option>
<option value={51}>51</option>


{:else if changed_wifi_data.config.wifi_11ah_general.region==0 && changed_wifi_data.config.wifi_11ah_general.operation_band==2}

<option value={2}>2</option>
<option value={6}>6</option>
<option value={10}>10</option>
<option value={14}>14</option>
<option value={18}>18</option>
<option value={22}>22</option>
<option value={26}>26</option>
<option value={30}>30</option>
<option value={34}>34</option>
<option value={38}>38</option>
<option value={42}>42</option>
<option value={46}>46</option>
<option value={50}>50</option>

{:else if changed_wifi_data.config.wifi_11ah_general.region==0 && changed_wifi_data.config.wifi_11ah_general.operation_band==4}

<option value={8}>8</option>
<option value={16}>16</option>
<option value={24}>24</option>
<option value={32}>32</option>
<option value={40}>40</option>
<option value={48}>48</option>


{:else if changed_wifi_data.config.wifi_11ah_general.region==0 && changed_wifi_data.config.wifi_11ah_general.operation_band==8}
<option value={12}>12</option>
<option value={28}>28</option>
<option value={44}>44</option>


{:else if changed_wifi_data.config.wifi_11ah_general.region==1 && changed_wifi_data.config.wifi_11ah_general.operation_band==1}
<option value={37}>37</option>
<option value={39}>39</option>
<option value={41}>41</option>
<option value={43}>43</option>
<option value={45}>45</option>


{:else if changed_wifi_data.config.wifi_11ah_general.region==1 && changed_wifi_data.config.wifi_11ah_general.operation_band==2}
<option value={38}>38</option>
<option value={42}>42</option>


{:else if changed_wifi_data.config.wifi_11ah_general.region==1 && changed_wifi_data.config.wifi_11ah_general.operation_band==4}
<option value={40}>40</option>

{/if}


</select>

      </td>

</tr>






    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={Save11ahAPMode}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>




  </AccordionItem>

</Accordion>


 {/if}


{/if}

{/if}

   </TabItem>



 <TabItem title="WiFi5">




<table>   
 <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
    <Toggle class="w-60" checked={!!changed_wifi_data.config.wifi_wifi5.enable}
  on:change={(e) => changed_wifi_data.config.wifi_wifi5.enable = e.target.checked ? 1 : 0}></Toggle>
</tr>
</table>



<table>

{#if changed_wifi_data.config.wifi_wifi5.enable}

<tr><td class="w-60"></td>
<td class="w-20"></td>
    <td class="pl-5 pt-5"><div class="flex gap-4">

<label class="font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="radio" bind:group={changed_wifi_data.config.wifi_wifi5.type} value={0} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">2.4G AP</label> <label class="font-medium block text-gray-900 dark:text-gray-300 flex items-center"><input type="radio" bind:group={changed_wifi_data.config.wifi_wifi5.type} value={1} class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">5G AP</label>
</div></td>
</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_wifi_data.config.wifi_wifi5.ssid}></td>
<td class="pl-5 pt-5">

</td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Region</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_wifi5.region}>
<option value={1}>EU</option>
<option value={0}>US</option>
</select>

      </td>

</tr>



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Channel</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_wifi5.channel}>

{#if changed_wifi_data.config.wifi_wifi5.region==0}

<option value={1}>1</option>
<option value={3}>3</option>
<option value={5}>5</option>
<option value={7}>7</option>
<option value={9}>9</option>
<option value={11}>11</option>
<option value={13}>13</option>
<option value={15}>15</option>
<option value={17}>17</option>
<option value={19}>19</option>
<option value={21}>21</option>
<option value={23}>23</option>
<option value={25}>25</option>
<option value={27}>27</option>
<option value={29}>29</option>
<option value={31}>31</option>
<option value={33}>33</option>
<option value={35}>35</option>
<option value={37}>37</option>
<option value={39}>39</option>
<option value={41}>41</option>
<option value={43}>43</option>
<option value={45}>45</option>
<option value={47}>47</option>
<option value={49}>49</option>
<option value={51}>51</option>



{:else if changed_wifi_data.config.wifi_wifi5.region==1}
<option value={40}>40</option>

{/if}


</select>

      </td>

</tr>



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Encryption</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48">
<option value={0}>WPA3</option>
</select>

      </td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_wifi_data.config.wifi_wifi5.password}></td>

</tr>
{/if}

     <tr>
<td class="w-60"></td>
<td class="w-20"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>        
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveWifi5}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>




</table>







   </TabItem>


 <TabItem title="Bluetooth">
   

<table>   
 <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
    <Toggle class="w-60" checked={!!changed_wifi_data.config.wifi_bluetooth.enable}
  on:change={(e) => changed_wifi_data.config.wifi_bluetooth.enable = e.target.checked ? 1 : 0}></Toggle>
</tr>
</table>



<table>
{#if changed_wifi_data.config.wifi_bluetooth.enable}


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">SSID</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" bind:value={changed_wifi_data.config.wifi_bluetooth.ssid}></td>
<td class="pl-5 pt-5">

</td>

</tr>
{/if}

     <tr>
<td class="w-60"></td>
<td class="w-20"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>        
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveBluetooth}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>



   </TabItem>

 </Tabs>
