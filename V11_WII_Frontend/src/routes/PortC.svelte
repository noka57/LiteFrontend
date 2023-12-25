<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Label, Textarea, FloatingLabelInput, Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Datepicker } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import { 
    portConnectionConfig,
    PortConnection_LAN_ConfigChangedLog,
    PortConnection_COM_ConfigChangedLog,
    ChangedPortConnectionConfig
  } from "./configG.js"


    let port_connection_data="";
    let changed_port_connection_data = {};
    let saved_changed_port_connection_data = {};
    let getDataReady=0;
    let port_connection_lan_changedValues = [];
    let port_connection_com_changedValues = [];


    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });


    portConnectionConfig.subscribe(val => {
      port_connection_data = val;
    });

    PortConnection_LAN_ConfigChangedLog.subscribe(val => {
      port_connection_lan_changedValues = val;
    });

    PortConnection_COM_ConfigChangedLog.subscribe(val => {
      port_connection_com_changedValues = val;
    });

    ChangedPortConnectionConfig.subscribe(val => {
      saved_changed_port_connection_data = val;
    });



   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';
   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';
   let trClass2='noborder bg-red dark:bg-gray-800 dark:border-gray-700';
   let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

   let formModal=false;


  let formModalsm=false;
  let Sinterface="R485";
  let BR="9600";
  let Parity="None";
  let DB="8";
  let SB="1";

  let smenable=true;

   async function getPortConnectionData () {
    const res = await fetch(window.location.origin+"/GeTPortConnection", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      port_connection_data =await res.json();
      console.log(port_connection_data);
      portConnectionConfig.set(port_connection_data);

      changed_port_connection_data = JSON.parse(JSON.stringify(port_connection_data));
      saved_changed_port_connection_data= JSON.parse(JSON.stringify(port_connection_data));
      ChangedPortConnectionConfig.set(saved_changed_port_connection_data);
      getDataReady=1;
    
    }
  }


  onMount(() => {

    console.log("port connection sessionid: ");
    console.log(sessionid);


    if (sessionid && port_connection_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getPortConnectionData();
    }
    else if(sessionid && port_connection_data!="")
    {
        getDataReady=1;
        if (port_connection_lan_changedValues.length==0)
        {
            changed_port_connection_data=JSON.parse(JSON.stringify(saved_changed_port_connection_data));
            changed_port_connection_data.config.fieldManagement_portConnection_lan=JSON.parse(JSON.stringify(port_connection_data.config.fieldManagement_portConnection_lan)); 
        }
      

        if (port_connection_com_changedValues.length==0)
        {
            changed_port_connection_data=JSON.parse(JSON.stringify(saved_changed_port_connection_data));
            changed_port_connection_data.config.fieldManagement_portConnection_com=JSON.parse(JSON.stringify(port_connection_data.config.fieldManagement_portConnection_com)); 
        }

    }

  });

</script>
<Tabs style="underline">
  <TabItem open title="LAN">



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="w-18">Profile Name</TableHeadCell>
    <TableHeadCell class="w-18">IP</TableHeadCell>
    <TableHeadCell class="w-18">Status</TableHeadCell>

     </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_port_connection_data.config.fieldManagement_portConnection_lan as LANItem, index}
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-4">
<button on:click={() => formModal = true}>

<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>


      </button>


       </TableBodyCell>


      <TableBodyCell class="w-18">{LANItem.profileName}</TableBodyCell>
      <TableBodyCell class="w-18">{LANItem.ip}</TableBodyCell>
{#if LANItem.status == 1}
      <TableBodyCell class="w-18">LinkUp</TableBodyCell>
{:else if LANItem.status == 0}
      <TableBodyCell class="w-18">LinkDown</TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}



<tr class="pt-5">
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
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>



 </TableBody>


<Modal bind:open={formModal} autoclose={false} size="md" class="w-full">
<table>
<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Profile Name</p></td><td class="pl-5 pt-5"><input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

    <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Submit</Button></td>
    </tr>
</table>
</Modal>



</Table>



  </TabItem>

  <TabItem title="COM">

<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
    <TableHeadCell>Interface</TableHeadCell>
    <TableHeadCell>Baudrate</TableHeadCell>
    <TableHeadCell>Parity</TableHeadCell>
    <TableHeadCell class="w-18">Data Bits</TableHeadCell>
    <TableHeadCell class="w-18">Stop Bits</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>

    
        
          
  
  
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">ComPort1</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
       </TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">2</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">ComPort2</TableBodyCell>
      <TableBodyCell class="w-10">RS 485</TableBodyCell>
      <TableBodyCell class="w-10">9600</TableBodyCell>
      <TableBodyCell class="w-10">None</TableBodyCell>
      <TableBodyCell class="w-18">8</TableBodyCell>
      <TableBodyCell class="w-18">1</TableBodyCell>
    </TableBodyRow>

    
        
  
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>
    </tr>
  </TableBody>
   
<Modal bind:open={formModalsm} autoclose={false} size="md" class="w-full">
<label>
  <input class="center" type=checkbox checked={smenable}>
  Enable
</label>
<p class="mt-4"></p>
<table>
  
<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>

      <td class="pl-5 pt-5">ComPort1</td>

</tr>

<tr>
  <td><p class="pl-4 pt-4 text-lg font-light text-right">Interface</p>

  </td>

    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={Sinterface} value='R485' >RS 485</Radio>
</div></td>
</tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Baudrate</p></td><td class="pl-5 pt-5"><input type="text" bind:value={BR} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Parity</p></td>


    <td class="pl-5 pt-4"><div class="flex gap-4">
  <Radio bind:group={Parity} value='None' >None</Radio>
  <Radio bind:group={Parity} value='Even' >Even</Radio>
  <Radio bind:group={Parity} value='Odd' >Odd</Radio>
</div></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Data Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={DB} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Stop Bits</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SB} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>


  
  </tr>
      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true}>Submit</Button></td>
    </tr>
</table>
</Modal>

</Table>


  </TabItem>


  <TabItem title="Simulator">

  <table>
<tr>
   <td class="pl-10"><Button pill={true}>Test DI</Button></td>
</tr>

<p class="pt-10"></p>

<tr >
   <td class="pl-10"><Button pill={true}>Test DO High</Button></td>
</tr>

<p class="pt-10"></p>

<tr>
   <td class="pl-10"><Button pill={true}>Test DO Low</Button></td>
</tr>

</table>
  </TabItem>


 </Tabs>