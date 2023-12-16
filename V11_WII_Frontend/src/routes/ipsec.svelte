<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Button,  Radio, FloatingLabelInput, Input, Dropdown, DropdownItem,  Select, Modal, Label} from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    ipsecConfig,
    IPsec_Conn_ConfigChangedLog,
    IPsec_Basic_ConfigChangedLog,
    ChangedIPsecConfig
  } from "./configG.js"





let openvpnBasic='Enable';
let openvpnBasic2='Manual';
let openvpnBasic3='Client';
let vpnname="test1";
let ID="";
let PWD="";
let formModalFailover=false;
let formModalValidClient=false;
let formModalValidClient2=false;
let ConnType;


let ipsecResponderType='Tunnel';
let vpnnameList = [
    {value:"test1", name: "test1"},
    {value:"test2", name: "test2"},
  ];
let localList = [
    {value:"aws", name: "AWS"},
    {value:"azure", name: "Azure"},
    {value:"self", name: "selfSign"},
  ];

let mc="aws";

let MachineCList = [
    {value:"aws", name: "AWS"},
    {value:"azure", name: "Azure"},
    {value:"ss", name: "Self-sign"},
  ];


  let rcac="azure";

let RemoteCAList = [
    {value:"aws", name: "AWS"},
    {value:"azure", name: "Azure"},
    {value:"ss", name: "Self-sign"},
  ];

  let IPsecED="Enable";
  let IPsecRole="Client";
  let openvpnProtocol="UDP";
  let openvpnInitial="Started";
  let openvpnAuth="X509Cert";
  let openvpnAuthS="X509Cert";


   let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';

   let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';


  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

  let name="";


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
 let value = [];


 let fileinput;

  const handleChange = (event) => {
    value=[];
    const files = event.target.files;
    if (files.length > 0) {
      value.push(files[0].name);
      value = value;
    }
  };

  const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = '';
    files.map((file) => {
      concat += file;
      concat += ',';
      concat += ' ';
    });

    if (concat.length > 40) concat = concat.slice(0, 40);
    concat += '...';
    return concat;
  };

 function taClick(){

    fileinput.click();
 }


    let formModal = false;

    let VPNName="";
    let VRAddr="";
    let VRPort="";
    let VProtocol="";
    let VInitiail="";
    let openvpntakd="None";


    let sessionid;
    let sessionBinary;
    let ipsec_data="";
    let changed_ipsec_data = {};
    let saved_changed_ipsec_data ={};
    let getDataReady=0;   

    let basic_changedValues = [];
    let conn_changedValues = [];


    sessionidG.subscribe(val => {
      sessionid = val;
    });

    ipsecConfig.subscribe(val => {
      ipsec_data = val;
    });

    IPsec_Conn_ConfigChangedLog.subscribe(val => {
      conn_changedValues = val;
    });

    IPsec_Basic_ConfigChangedLog.subscribe(val => {
      basic_changedValues = val;
    });


    ChangedIPsecConfig.subscribe(val => {
      saved_changed_ipsec_data = val;
    });


   async function getIPsecData () {
    const res = await fetch(window.location.origin+"/getIPsecdata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      ipsec_data =await res.json();
      console.log(ipsec_data);
      ipsecConfig.set(ipsec_data);

      changed_ipsec_data = JSON.parse(JSON.stringify(ipsec_data));
      saved_changed_ipsec_data= JSON.parse(JSON.stringify(ipsec_data));
      ChangedIPsecConfig.set(saved_changed_ipsec_data);
      getDataReady=1;
      console.log(changed_ipsec_data);
    
    }
  }


    onMount(() => {

    console.log("ipsec sessionid: ");
    console.log(sessionid);


    if (sessionid && ipsec_data =="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getIPsecData();
    }
    else if (sessionid && ipsec_data != "")
    {
      getDataReady=1;

      if (basic_changedValues.length==0)
      {
          changed_ipsec_data=JSON.parse(JSON.stringify(saved_changed_ipsec_data));
         // changed_ipsec_data.config.networking_firewall_general=JSON.parse(JSON.stringify(ipsec_data.config.networking_firewall_general)); 
      }
      
      if (conn_changedValues.length==0)
      {
          changed_ipsec_data=JSON.parse(JSON.stringify(saved_changed_ipsec_data));
         // changed_ipsec_data.config.networking_firewall_ipFilter=JSON.parse(JSON.stringify(ipsec_data.config.networking_firewall_ipFilter)); 
      }
      


    }

  });


</script>
 <Tabs style="underline">
  <TabItem open title="Overview">


{#if IPsecED == 'Enable'}

{#if IPsecRole == 'Client'}  
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    Initiator
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
    List all Initiators' information
    </p>
  </caption>
  <TableHead>
    <TableHeadCell class="w-10">Index</TableHeadCell>
    <TableHeadCell class="w-10">Name</TableHeadCell>
    <TableHeadCell class="w-10">VPN State</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
  </TableHead>
  
    <TableBodyRow>
      <TableBodyCell>1</TableBodyCell>
            <TableBodyCell>
test1
      </TableBodyCell>
      <TableBodyCell>Connection Established</TableBodyCell>

    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>2</TableBodyCell>
            <TableBodyCell>
test2
      </TableBodyCell>
      <TableBodyCell>Connection Established</TableBodyCell>
    </TableBodyRow>

</Table>

{:else if IPsecRole == 'Server'}  
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    Responder

   </caption>
  <TableHead>
        <TableHeadCell class="w-10">Name</TableHeadCell>
    <TableHeadCell class="w-10">VPN State</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
        <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>  



    <TableBodyRow>
<TableHeadCell>ResponderTest</TableHeadCell>
      <TableBodyCell>Connection Established</TableBodyCell>

    </TableBodyRow>
</Table>

{/if}



{/if}
    </TabItem>

      <TabItem title="Basic">
      <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">IPsec Service</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={IPsecED} value='Disable'>Disable</Radio>
  <Radio bind:group={IPsecED} value='Enable' >Enable</Radio>

</div></td>
      </tr>


      <tr>
          <td></td>

{#if IPsecED == 'Enable'}    
          <td><p class="pl-5 pt-5 text-lg font-light text-left">IPsec Role</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={IPsecRole} value='Server'>Responder</Radio>
  <Radio bind:group={IPsecRole} value='Client' >Initiator</Radio>
</div></td>
{:else}
 <td><p class="pl-5 pt-5 text-lg font-light text-left text-gray-400 dark:text-gray-500">OpenVPN Role</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={IPsecRole} value='Server' disabled>Responder</Radio>
  <Radio bind:group={IPsecRole} value='Client' disabled>Initiator</Radio>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


      </table>

    </TabItem>

{#if IPsecED == 'Enable'}

{#if IPsecRole == 'Client'}

<TabItem title="Connection">


<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    General
    </span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-8">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Certificate</TableHeadCell>
    <TableHeadCell class="w-18">Local Certificate</TableHeadCell>
    <TableHeadCell class="w-18">Type</TableHeadCell>
        <TableHeadCell class="w-10"></TableHeadCell>

    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => formModal = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
                    <TableBodyCell class="w-8">1</TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-16"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>

</AccordionItem>





  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tunnel Subnet
    </span>



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-44"><option disabled="" value="">Choose VPN name ...</option><option value="test1">test1</option><option value="test2">test2</option></select>

<p class="pt-10">

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-8">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>


    <TableHeadCell class="w-18">Local Subnet</TableHeadCell>
    <TableHeadCell class="w-18">Remote Subnet</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => formModalValidClient2 = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
                    <TableBodyCell class="w-8">1</TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
   
              
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>

<Modal bind:open={formModalValidClient2} autoclose={false} size="md" class="w-full">

<table>


<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Local Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={VPNName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Remote Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={VPNName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

</table>
</Modal>

 </AccordionItem>
  


</Accordion>

<Modal bind:open={formModal} autoclose={false} size="lg" class="w-full">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VPNName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


</tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={ConnType} value={0}>Tunnel</Radio>
  <Radio bind:group={ConnType} value={1} >Transport</Radio>
</div></td>


  </tr>





            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

  </table>
</Modal>


    </TabItem>

{:else if IPsecRole == 'Server'}

    <TabItem title="Connection">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


  </tr>

  <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={ipsecResponderType} value={0}>Tunnel</Radio>
  <Radio bind:group={ipsecResponderType} value={1} >Transport</Radio>
</div></td>


  </tr>



</table>
<p class="pt-10"></p>

{#if ipsecResponderType == 0}

<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tunnel Subnet
    </span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-8">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>


    <TableHeadCell class="w-18">Local Subnet</TableHeadCell>
    <TableHeadCell class="w-18">Remote Subnet</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => formModalValidClient = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
                    <TableBodyCell class="w-8">1</TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
   
              
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>

<Modal bind:open={formModalValidClient} autoclose={false} size="md" class="w-full">

<table>



<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Local Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={VPNName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Remote Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={VPNName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


    </tr>

</table>
</Modal>




</AccordionItem>
</Accordion>
{/if}

    </TabItem>

     {/if}
    {/if}




</Tabs>
