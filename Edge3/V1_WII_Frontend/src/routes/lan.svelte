<script>
  import { Tabs, TabItem, Button,  Label, Textarea, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Toggle, Checkbox, Radio, Modal,Helper } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import {lanConfig, LanConfigChangedLog, DHCPServerLANConfigLog,ChangedLANConfig} from "./configG.js"
  let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

  let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';

  let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let lan_data="";
  let changed_lan_data = {};
  let saved_changed_lan_data = {};
  let changedValues = [];
  let dhcpServerChangedValues=[];
  let getDataReady=0;
  let getHostnameAlready=0;
  let dhcp_hostname_list="";

  let DeletePopupModal=false;
  let ip_list_delete_index=-1;
  let DeleteHostnameContent;
  let DeleteHostnameResult="";

  let ModifyModal=false;
  let ip_list_modify_index=-1;
  let ModifyHostnameContent;
  let ModifyHostnameResult="";



  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
     sessionid = val;
   });

  lanConfig.subscribe(val => {
        lan_data = val;
  });

  LanConfigChangedLog.subscribe(val => {
        changedValues = val;
  });

  DHCPServerLANConfigLog.subscribe(val => {
        dhcpServerChangedValues = val;
  });


  ChangedLANConfig.subscribe(val => {
      saved_changed_lan_data=val;
  });

  let backupHostname="";




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
      let modifyCmd="hostname.sh alterSta "+ dhcp_hostname_list.host[ip_list_modify_index].mac+" "+dhcp_hostname_list.host[ip_list_modify_index].ip+" "+dhcp_hostname_list.host[ip_list_modify_index].name

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


  function compareObjects(obj1, obj2,section) {
    for (const key in obj1) 
    {
      if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
      {
        compareObjects(obj1[key], obj2[key], section);
      } 
      else if (obj1[key] != obj2[key]) 
      {
        if (section ==1)
        {
          let changedstr="Value of "+key+" has changed to "+obj1[key];
          changedValues=[...changedValues, changedstr];
        }
        else if (section ==2)
        {
          let changedstr="Value of "+key+" has changed to "+obj1[key];
          dhcpServerChangedValues=[...dhcpServerChangedValues, changedstr];   
        }
      }
    }
  }


  function getFirstThreeParts(ip) {
    const parts = ip.split('.');
    if (parts.length < 4) {
      throw new Error("Invalid IP address");
    }
    return parts.slice(0, 3).join('.')+ '.';
  }

  function getLastPart(ip) {
    const parts = ip.split('.');
    return parts[parts.length - 1];
  }


  let firstThreeParts = "192.168.1."
  let lastPartBegin="101"
  let lastPartEnd="250"

  let Edge3lastPartBegin="11"
  let Edge3lastPartEnd="100"

  const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

  let validIPv4=true;
  let validNetmask=true;
  let validGateway=true;
  let validDHCPGateway=true;  
  let validDHCPNetmask=true;    

  function isValidIPv4(ip) 
  {
    if (!ipv4Regex.test(ip)) return false;

    const parts = ip.split('.').map(Number);
    const [a, b] = parts;

    // Invalid ranges
    if (a === 127) return false;                     // Loopback
    if (a === 0) return false;                       // "This network"
    if (a === 169 && b === 254) return false;        // Link-local (APIPA)
    if (a >= 224 && a <= 239) return false;          // Multicast
    if (a >= 240 && a <= 255) return false;          // Reserved + Broadcast
    if (ip === '255.255.255.255') return false;      // Explicit broadcast

    return true;
  }


  function SaveLanSettings(){
    console.log("Save LAN Setting\r\n");

    validIPv4= isValidIPv4(changed_lan_data.config.networking_lan.ipStatic.ip)
    validNetmask=ipv4Regex.test(changed_lan_data.config.networking_lan.ipStatic.netmask);
    validGateway= isValidIPv4(changed_lan_data.config.networking_lan.ipStatic.gateway)

    if (validIPv4 && validNetmask && validGateway)
    {
      if (changedValues.length !=0)
      {
        changedValues=[];
      }

      firstThreeParts=getFirstThreeParts(lan_data.config.networking_lan.ipStatic.ip);
      compareObjects(changed_lan_data.config.networking_lan.ipStatic, lan_data.config.networking_lan.ipStatic,1);
      if (changed_lan_data.config.networking_lan.ipMode != lan_data.config.networking_lan.ipMode)
      {
        let changedstr="Value of ip mode has changed to "+changed_lan_data.config.networking_lan.ipMode;
        changedValues=[...changedValues, changedstr];
        saved_changed_lan_data.config.networking_lan.ipMode=changed_lan_data.config.networking_lan.ipMode;
      }

      LanConfigChangedLog.set(changedValues);
      saved_changed_lan_data.config.networking_lan.ipStatic=JSON.parse(JSON.stringify(changed_lan_data.config.networking_lan.ipStatic));
      ChangedLANConfig.set(saved_changed_lan_data);

      let newPrefix=getFirstThreeParts(saved_changed_lan_data.config.networking_lan.ipStatic.ip);

      if (firstThreeParts != newPrefix)
      {
        firstThreeParts=newPrefix;
        SaveDHCPSettings();
      }
      console.log(changedValues);
    }

  };


  function DHCPServer_Check()
  {
    console.log("DHCPServer_Check()");
    console.log(changed_lan_data.config.networking_lan.dhcpServer.enable);
    if (changed_lan_data.config.networking_lan.dhcpServer.enable)
    {
      changed_lan_data.config.networking_lan.dhcpServer.enable=1;
    }
    else
    {
      changed_lan_data.config.networking_lan.dhcpServer.enable=0;
    }
  }


  function SaveDHCPSettings()
  {

    validDHCPGateway= isValidIPv4(changed_lan_data.config.networking_lan.dhcpServer.gateway)
    validDHCPNetmask=ipv4Regex.test(changed_lan_data.config.networking_lan.dhcpServer.netmask);


    if (validDHCPGateway && validDHCPNetmask)
    {
      console.log("Save DHCPServer Setting\r\n");
      if (dhcpServerChangedValues.length !=0)
      {
        dhcpServerChangedValues=[]
      }

      DHCPServer_Check();

      changed_lan_data.config.networking_lan.dhcpServer.startIP=`${firstThreeParts}${lastPartBegin}` 
      changed_lan_data.config.networking_lan.dhcpServer.endIP=`${firstThreeParts}${lastPartEnd}`

      changed_lan_data.config.networking_lan.dhcpServer.startIPEdge3=`${firstThreeParts}${Edge3lastPartBegin}` 
      changed_lan_data.config.networking_lan.dhcpServer.endIPEdge3=`${firstThreeParts}${Edge3lastPartEnd}`

      compareObjects(changed_lan_data.config.networking_lan.dhcpServer, lan_data.config.networking_lan.dhcpServer,2);


      DHCPServerLANConfigLog.set(dhcpServerChangedValues);
      saved_changed_lan_data.config.networking_lan.dhcpServer=JSON.parse(JSON.stringify(changed_lan_data.config.networking_lan.dhcpServer));
      ChangedLANConfig.set(saved_changed_lan_data);
      console.log(saved_changed_lan_data.config.networking_lan);
      
      console.log(dhcpServerChangedValues);
    }
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
            getHostnameAlready=1;
        }
    }



   async function getLANData () {
    const res = await fetch(window.location.origin+"/getLANdata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      lan_data =await res.json();
      console.log(lan_data);
      lanConfig.set(lan_data);


      changed_lan_data = JSON.parse(JSON.stringify(lan_data));
      saved_changed_lan_data = JSON.parse(JSON.stringify(lan_data));
      ChangedLANConfig.set(saved_changed_lan_data);

      firstThreeParts = getFirstThreeParts(changed_lan_data.config.networking_lan.ipStatic.ip);
      lastPartBegin = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.startIP)
      lastPartEnd = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.endIP)
      Edge3lastPartBegin = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.startIPEdge3)
      Edge3lastPartEnd = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.endIPEdge3)
      getDataReady=1;
    }
  }


  onMount(() => {

    console.log("lan sessionid: ");
    console.log(sessionid);


    if (sessionid && lan_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getLANData();
    }
    else if (sessionid && lan_data!="")
    {

        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        changed_lan_data = JSON.parse(JSON.stringify(saved_changed_lan_data));
        getDataReady=1;
        if (changedValues.length == 0)
        {
          changed_lan_data.config.networking_lan.ipStatic = JSON.parse(JSON.stringify(lan_data.config.networking_lan.ipStatic));
          changed_lan_data.config.networking_lan.ipMode = lan_data.config.networking_lan.ipMode;
        }

        if (dhcpServerChangedValues.length == 0)
        {
          changed_lan_data.config.networking_lan.dhcpServer = JSON.parse(JSON.stringify(lan_data.config.networking_lan.dhcpServer));

        }


        firstThreeParts = getFirstThreeParts(changed_lan_data.config.networking_lan.ipStatic.ip);
        lastPartBegin = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.startIP)
        lastPartEnd = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.endIP)

        Edge3lastPartBegin = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.startIPEdge3)
        Edge3lastPartEnd = getLastPart(changed_lan_data.config.networking_lan.dhcpServer.endIPEdge3)

    }
    
  });

</script>

 <Tabs style="underline">
  <TabItem open title="General">

<table>

{#if getDataReady==1}

<tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">IP Mode</p></td><td class="pl-5 pt-5">

<div class="flex gap-4">
      <Radio bind:group={changed_lan_data.config.networking_lan.ipMode} value={0}>Static</Radio>
  <Radio bind:group={changed_lan_data.config.networking_lan.ipMode} value={1} >DHCP Client</Radio>
</div>
      </td>



  </tr>


{#if changed_lan_data.config.networking_lan.ipMode==0}
<tr>
      <td><p class="pl-40 pt-4 text-lg font-light text-right">IP Address</p></td><td class="pl-5 pt-5">
{#if validIPv4}
      <input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.ip} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else}
      <input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.ip} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}

      </td>
{#if !validIPv4}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Format</span>
  </Helper>
</td>

{/if}


  </tr>

  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Network Mask</p></td><td class="pl-5 pt-5">
{#if validNetmask}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.netmask} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}

        </td>

{#if !validNetmask}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Format</span>
  </Helper>
</td>

{/if}
  </tr>


  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5">
{#if validGateway}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.gateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.ipStatic.gateway} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}

        </td>

{#if !validGateway}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Format</span>
  </Helper>
</td>

{/if}
  </tr>


{/if}
{/if}
    <tr>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveLanSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </table>

</TabItem>
  <TabItem title="DHCP Server">

<table>
    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">DHCP Server</p></td><td class="pl-5 pt-5">
{#if getDataReady == 1}
    <Toggle bind:checked={changed_lan_data.config.networking_lan.dhcpServer.enable} on:change={DHCPServer_Check}></Toggle>
{/if}
    </td>
    </tr>

{#if changed_lan_data.config.networking_lan.dhcpServer.enable}

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">DHCP IP Pool (EDGE3)</p></td>
      <td class="pl-5 pt-5"><div class="flex gap-1"><p class="pl-1 pt-2">{firstThreeParts}</p>
      <input type="number" bind:value={Edge3lastPartBegin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500" min="1" max="255">
      <p class="pl-1 pt-2"> - </p><p class="pl-1 pt-2">{firstThreeParts}</p>
<input type="number" bind:value={Edge3lastPartEnd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500" min="1" max="255">

    </div>
      </td>



  </tr>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">DHCP IP Pool (Others)</p></td>
      <td class="pl-5 pt-5"><div class="flex gap-1"><p class="pl-1 pt-2">{firstThreeParts}</p>
      <input type="number" bind:value={lastPartBegin} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500" min="1" max="255">
      <p class="pl-1 pt-2"> - </p><p class="pl-1 pt-2">{firstThreeParts}</p>
<input type="number" bind:value={lastPartEnd} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500" min="1" max="255">

    </div>
      </td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Lease</p></td><td class="pl-5 pt-5">
<div class="flex gap-1">
<input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.lease} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500">
<p class="pl-1 pt-2">hr</p>
</div>
</td>


  </tr>



  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Netmask</p></td><td class="pl-5 pt-5">
{#if validDHCPNetmask}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.netmask} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.netmask} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}

        </td>

{#if !validDHCPNetmask}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Format</span>
  </Helper>
</td>

{/if}
  </tr>


  <tr>
        <td><p class="pl-40 pt-4 text-lg font-light text-right">Gateway</p></td><td class="pl-5 pt-5">
{#if validDHCPGateway}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.gateway} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
        <input type="text" bind:value={changed_lan_data.config.networking_lan.dhcpServer.gateway} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}

        </td>

{#if !validDHCPGateway}
<td>
 <Helper class="pl-4 mt-4" color="red">
    <span class="font-medium">Invalid Format</span>
  </Helper>
</td>

{/if}
  </tr>



{/if}

    <tr>
    <td></td>
    <td></td>

        <td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveDHCPSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>

</TabItem>

{#if getDataReady==1}

{#if lan_data.config.networking_lan.dhcpServer.enable}

 <TabItem title="IP List" on:click={()=>GetDHCPHostname()}>

{#if getHostnameAlready==1&& Object.keys(dhcp_hostname_list).length > 0}


<table>
<tr>
   <td class="pl-12 pt-10">    <Button class="w-22" pill={true} on:click={()=>GetDHCPHostname()}>Refresh</Button>
   </td>
</tr>
</table>

<p class="pt-10"></p>




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


{/if}



   </TabItem>


{/if}
{/if}


</Tabs>
