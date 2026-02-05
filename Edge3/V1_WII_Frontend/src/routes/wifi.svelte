<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, Modal, Toggle,Select, Checkbox, Input, Tooltip, Radio } from 'flowbite-svelte';


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
      let hostname_list="";
      let getHostnameAlready=0;


  let getDHCPHostnameAlready=0;
  let dhcp_hostname_list="";

  let DeletePopupModal=false;
  let ip_list_delete_index=-1;
  let DeleteHostnameContent;
  let DeleteHostnameResult="";

  let ModifyModal=false;
  let ip_list_modify_index=-1;
  let ModifyHostnameContent;
  let ModifyHostnameResult="";

  let backupHostname="";

      let Stations_list_11ah="";
      let Stations_list_wifi5="";
      let Stations_list_bluetooth="";

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




  async function ExecuteModify() {
    const res = await fetch(window.location.origin+"/mOdifYhosTNamE", {
      method: 'POST',
      body: ModifyHostnameContent
    })

    if (res.status == 200)
    {
      ModifyHostnameResult =await res.text();
      console.log(ModifyHostnameResult);
      ModifyModal=false;
    }
    else
    {
      console.log("failed to Modify");
      ModifyHostnameResult="Failed to modify";
      ModifyModal=true;

    }
  }


  function NoModify()
  {
    dhcp_hostname_list.host[ip_list_modify_index].name=backupHostname;
    ModifyModal=false;
  }

  function ModifyIPitem()
  {
    if (dhcp_hostname_list.host[ip_list_modify_index].iface=== "wlan0")
    {
      let modifyCmd="hostname.sh renameSta "+dhcp_hostname_list.host[ip_list_modify_index].ip+" "+dhcp_hostname_list.host[ip_list_modify_index].name

      const bytesArray = Array.from(modifyCmd).map(char => char.charCodeAt(0));
      let modifyBinary = new Uint8Array(bytesArray);
      ModifyHostnameContent=new Uint8Array(modifyBinary.length+sessionBinary.length);
      ModifyHostnameContent.set(sessionBinary,0);
      ModifyHostnameContent.set(modifyBinary, sessionBinary.length);

    }
    else
    {
      let modifyCmd="hostname.sh rename "+dhcp_hostname_list.host[ip_list_modify_index].ip+" "+dhcp_hostname_list.host[ip_list_modify_index].name

      const bytesArray = Array.from(modifyCmd).map(char => char.charCodeAt(0));
      let modifyBinary = new Uint8Array(bytesArray);
      ModifyHostnameContent=new Uint8Array(modifyBinary.length+sessionBinary.length);
      ModifyHostnameContent.set(sessionBinary,0);
      ModifyHostnameContent.set(modifyBinary, sessionBinary.length);    
    }

    ExecuteModify();


  }


  function modifyIPitemTrigger(index)
  {
    ip_list_modify_index=index;
    ModifyHostnameResult="";
    backupHostname=dhcp_hostname_list.host[index].name;
    ModifyModal=true;
  }


  function deleteFixedIP(index)
  {

    DeleteHostnameResult ="";
    ip_list_delete_index=index;
    dhcp_hostname_list.host[ip_list_delete_index].delete=false;
    DeletePopupModal=true;

  }

  async function ExecuteDelete() {
    const res = await fetch(window.location.origin+"/deLEteHostNAMe", {
      method: 'POST',
      body: DeleteHostnameContent
    })

    if (res.status == 200)
    {
      DeleteHostnameResult =await res.text();
      console.log(DeleteHostnameResult);
      dhcp_hostname_list.host[ip_list_delete_index].delete=true;
      dhcp_hostname_list.host.splice(ip_list_delete_index, 1);
      DeletePopupModal=false;
    }
    else
    {
      console.log("failed to delete");
      DeleteHostnameResult="Failed to delete";
      dhcp_hostname_list.host[ip_list_delete_index].delete=false;
      DeletePopupModal=true;

    }
  }

  function deleteIPname()
  {
    console.log("delete !");


    let deleteCmd="hostname.sh rmFixIP "+dhcp_hostname_list.host[ip_list_delete_index].mac

    const bytesArray = Array.from(deleteCmd).map(char => char.charCodeAt(0));
    let deleteBinary = new Uint8Array(bytesArray);
    DeleteHostnameContent=new Uint8Array(deleteBinary.length+sessionBinary.length);
    DeleteHostnameContent.set(sessionBinary,0);
    DeleteHostnameContent.set(deleteBinary, sessionBinary.length);

    ExecuteDelete();

  }

  function NondeleteIPname()
  {
    console.log("non delete!");
    DeletePopupModal=false;
  }



    async function GetDHCPHostname () 
    {
        const res = await fetch(window.location.origin+"/DHcpHostnameGet", {
                  method: 'POST',
                  body: sessionBinary
        })

        if (res.status == 200)
        {
            dhcp_hostname_list = await res.json();

            console.log("dhcp hostname:", dhcp_hostname_list);

            getDHCPHostnameAlready=1;
        }
    }


  async function RefreshBLEStationList()
  {
      const res = await fetch(window.location.origin+"/gETblueToOthStatioNlIst", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

        Stations_list_bluetooth =await res.text();
        console.log(Stations_list_bluetooth);
        console.log("Stations_list_bluetooth OK");
       

    }

  }
     

  async function RefreshWifi5StationList()
  {
      const res = await fetch(window.location.origin+"/geTwifI5staTionlist", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

        Stations_list_wifi5 =await res.text();
        console.log(Stations_list_wifi5);
        console.log("Stations_list_wifi5 OK");
       

    }

  }



  async function Refresh11ahStationList()
  {
      const res = await fetch(window.location.origin+"/geT11ahStaTIonList", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

        Stations_list_11ah =await res.text();
        console.log(Stations_list_11ah);
        console.log("Stations_list_11ah OK");
       

    }

  }




      async function GetHostname () {
            const res = await fetch(window.location.origin+"/GEtHostnAMe", {
                  method: 'POST',
                  body: sessionBinary
            })

            if (res.status == 200)
            {
                  hostname_list = await res.json();

                  console.log("hostname:", hostname_list);
                  getHostnameAlready=1;
            }
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
     // Refresh11ahStationList();
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

        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

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

{#if 0}

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Region</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_11ah_general.region}>
<option value={1}>TAIWAN</option>
<option value={0}>US</option>
</select>

      </td>

</tr>

{/if}



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



{#if wifi_data.config.wifi_11ah.mode==1}

  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Stations List</div>
<table>
<tr>
   <td class="pl-12 pt-10">    <Button class="w-22" pill={true} on:click={()=>GetDHCPHostname()}>Refresh</Button>
   </td>
</tr>
</table>

<p class="pt-10"></p>


{#if getDHCPHostnameAlready==1&& Object.keys(dhcp_hostname_list).length > 0}


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">On Site</TableHeadCell>    
    <TableHeadCell class="w-10">RSSI</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">Type</TableHeadCell>
    <TableHeadCell class="w-18">Name</TableHeadCell>
    <TableHeadCell class="w-18">MAC</TableHeadCell>
    <TableHeadCell class="w-18">IP</TableHeadCell>
  </TableHead>
  
  <TableBody>
{#each dhcp_hostname_list.host as host, index}

{#if !host.delete}

 <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={()=>modifyIPitemTrigger(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableBodyCell class="!p-0 w-10">

{#if host.fixed==1}  

<button on:click={() => deleteFixedIP(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>

{/if}

    </TableBodyCell>


                    <TableBodyCell class="w-10">
<input type="checkbox" class="disabled:cursor-not-allowed" checked={host.on_site == 1} disabled>

                    </TableBodyCell>


{#if host.iface=== "wlan0"}
<TableBodyCell class="w-10">{host.rssi}</TableBodyCell>
{:else}
<TableBodyCell class="w-10"></TableBodyCell>

{/if}

                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if host.iface=== "wlan0"}

                    <TableBodyCell class="w-18">EDGE3</TableBodyCell>
{:else }

                    <TableBodyCell class="w-18">Others</TableBodyCell>

{/if}
                    <TableBodyCell class="w-18">{host.name}</TableBodyCell>

                    <TableBodyCell class="w-18">{host.mac}</TableBodyCell>
                    <TableBodyCell class="w-18">{host.ip} {#if host.fixed==1}(Fixed IP)
                    {:else if host.fixed==0}(Dynamic IP)
                    {:else} Unknown Type
                    {/if}</TableBodyCell>


    </TableBodyRow>

{/if}


{/each}




  </TableBody>
</Table>

{/if}

<Modal bind:open={DeletePopupModal} size="xs" permanent>
<form action="#">
  <div class="text-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke-width="2"></path></svg>
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete {dhcp_hostname_list.host[ip_list_delete_index].name}?</h3>
    <div class="space-x-2">
      <Button on:click={() => deleteIPname()} color="red">Yes, I'm sure</Button>
      <Button on:click={() => NondeleteIPname()} color="alternative">No, cancel</Button>
    </div>


{#if DeleteHostnameResult!=""}
<p class="pt-5 text-red-700">{DeleteHostnameResult}</p>
{/if}

  </div>

  </form>

</Modal>



<Modal bind:open={ModifyModal} size="lg" class="w-full" permanent={true}>
<form action="#">


<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={()=>NoModify()}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>



{#if dhcp_hostname_list.host[ip_list_modify_index].iface=== "wlan0"}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">RSSI</p></td><td class="pl-5 pt-5">

      <p>{dhcp_hostname_list.host[ip_list_modify_index].rssi}</p>


      </td>



  </tr>

{/if}



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td><td class="pl-5 pt-5">
{#if dhcp_hostname_list.host[ip_list_modify_index].iface=== "wlan0"}
      <p>EDGE3</p>
{:else}
      <p>Others</p>
{/if}


      </td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={dhcp_hostname_list.host[ip_list_modify_index].name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">MAC</p></td><td class="pl-5 pt-5">

      <p>{dhcp_hostname_list.host[ip_list_modify_index].mac}</p>

      </td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">IP</p></td><td class="pl-5 pt-5">


{#if dhcp_hostname_list.host[ip_list_modify_index].iface=== "wlan0"}

<input type="text" bind:value={dhcp_hostname_list.host[ip_list_modify_index].ip} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else}

      <p>{dhcp_hostname_list.host[ip_list_modify_index].ip}</p>

{/if}
      </td>



  </tr>



            <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={()=>ModifyIPitem()}>Modify</Button></td>


    </tr>


{#if ModifyHostnameResult!=""}
            <tr>
    <td></td>
    <td></td>
<td class="pl-10"><p class="pt-5 text-red-700">{ModifyHostnameResult}</p>
</td>

</tr>

{/if}



  </table>
  </form>

</Modal>


  </AccordionItem>

  {/if}



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

{#if 0}

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Region</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_wifi5.region}>
<option value={1}>TAIWAN</option>
<option value={0}>US</option>
</select>

      </td>

</tr>

{/if}



<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Channel</p></td><td class="pl-5 pt-5">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-3 w-48" bind:value={changed_wifi_data.config.wifi_wifi5.channel}>

{#if changed_wifi_data.config.wifi_wifi5.region==0}
{#if changed_wifi_data.config.wifi_wifi5.type==1}
<option value={36}>36</option>
{:else if changed_wifi_data.config.wifi_wifi5.type==0}
<option value={6}>6</option>
{/if}




{:else if changed_wifi_data.config.wifi_wifi5.region==1}
{#if changed_wifi_data.config.wifi_wifi5.type==1}
<option value={36}>36</option>
{:else if changed_wifi_data.config.wifi_wifi5.type==0}
<option value={6}>6</option>
{/if}


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

<p class="pt-10"></p>

<Accordion>



  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Stations List</div>
<table>
<tr>
   <td class="pl-12 pt-10">    <Button class="w-22" pill={true} on:click={RefreshWifi5StationList}>Refresh</Button>
   </td>
</tr>
</table>

<p class="pt-10"></p>

<pre style="white-space: pre-wrap;">{Stations_list_wifi5}</pre>






    </AccordionItem>




</Accordion>




   </TabItem>


{#if 0}

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


<p class="pt-10"></p>

<Accordion>

  <AccordionItem {defaultClass}>
    <div slot="header" class="pl-4">Stations List</div>
<table>
<tr>
   <td class="pl-12 pt-10">    <Button class="w-22" pill={true} on:click={RefreshBLEStationList}>Refresh</Button>
   </td>
</tr>
</table>

<p class="pt-10"></p>

<pre style="white-space: pre-wrap;">{Stations_list_bluetooth}</pre>






    </AccordionItem>


</Accordion>




   </TabItem>

   {/if}

{#if 0}

 <TabItem title="Hostname" on:click={()=>GetHostname()}>

{#if getHostnameAlready==1}



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">On Site</TableHeadCell>    
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">Type</TableHeadCell>
    <TableHeadCell class="w-18">Name</TableHeadCell>
    <TableHeadCell class="w-18">MAC</TableHeadCell>
    <TableHeadCell class="w-18">IP</TableHeadCell>
  </TableHead>
  
  <TableBody>
{#each hostname_list.host as host, index}
 <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button >
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableBodyCell class="!p-0 w-10">

{#if host.fixed==1}   
<button >    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>

{/if}

    </TableBodyCell>


                    <TableBodyCell class="w-10">
<input type="checkbox" class="disabled:cursor-not-allowed" checked={host.on_site === 1} disabled>

                    </TableBodyCell>
                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if host.iface=== "wlan0"}

                    <TableBodyCell class="w-18">EDGE3</TableBodyCell>
{:else }

                    <TableBodyCell class="w-18">Others</TableBodyCell>

{/if}
                    <TableBodyCell class="w-18">{host.name}</TableBodyCell>

                    <TableBodyCell class="w-18">{host.mac}</TableBodyCell>
                    <TableBodyCell class="w-18">{host.ip} {#if host.fixed==1}(Fixed IP)
                    {:else if host.fixed==0}(Dynamic IP)
                    {:else} Unknown Type
                    {/if}</TableBodyCell>


    </TableBodyRow>




{/each}




  </TableBody>
</Table>




{/if}



   </TabItem>

{/if}

 </Tabs>
