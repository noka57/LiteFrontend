<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Breadcrumb, BreadcrumbItem, Radio,Fileupload,  FloatingLabelInput, Input, Dropdown, DropdownItem, Chevron, Select, Modal, Label, Textarea} from 'flowbite-svelte';

let openvpnBasic='Enable';
let openvpnBasic2='Manual';
let openvpnBasic3='Client';
let vpnname="test1";
let ID="";
let PWD="";
let formModalFailover=false;
let formModalValidClient=false;
let formModalRNA=false;
let vpnnameList = [
    {value:"test1", name: "test1"},
    {value:"test2", name: "test2"},
    {value:"test3", name: "test3"},
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

    let openVPNClientDetailStatus = false;

    function handleVPNClientClick() 
    {
        console.log()
        openVPNClientDetailStatus=!openVPNClientDetailStatus;
    }

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
    <TableHeadCell class="w-10">VPN Name</TableHeadCell>
    <TableHeadCell class="w-10">State</TableHeadCell>
    <TableHeadCell class="w-10">VPN State</TableHeadCell>
    <TableHeadCell class="w-10">IP</TableHeadCell>
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
      <TableBodyCell>Started</TableBodyCell>
      <TableBodyCell>Connection Established</TableBodyCell>
      <TableBodyCell>10.123.12.3</TableBodyCell>

    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>2</TableBodyCell>
            <TableBodyCell>
test2
      </TableBodyCell>
      <TableBodyCell>Started</TableBodyCell>
      <TableBodyCell>Connection Established</TableBodyCell>
      <TableBodyCell>10.123.12.4</TableBodyCell>
    </TableBodyRow>

</Table>

{:else if IPsecRole == 'Server'}  
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    Server

   </caption>
  <TableHead>
    <TableHeadCell class="w-10">Listen Port</TableHeadCell>
    <TableHeadCell class="w-10">Protocol</TableHeadCell>  
    <TableHeadCell class="w-10">State</TableHeadCell>
    <TableHeadCell class="w-10">Client Authentication</TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>  



    <TableBodyRow>
      <TableBodyCell>1194</TableBodyCell>
      <TableBodyCell>UDP</TableBodyCell>
      <TableBodyCell>Started</TableBodyCell>
      <TableBodyCell>X509 Certificate</TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
      <Radio bind:group={IPsecRole} value='Server' disabled>Server</Radio>
  <Radio bind:group={IPsecRole} value='Client' disabled>Client</Radio>
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

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-8">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">VPN Name</TableHeadCell>
    <TableHeadCell class="w-18">Server Address</TableHeadCell>
    <TableHeadCell class="w-18">Server Port</TableHeadCell>
    <TableHeadCell class="w-18">Server CA certificate</TableHeadCell>
    <TableHeadCell class="w-10">Protocol</TableHeadCell>
    <TableHeadCell class="w-18">Initial Mode</TableHeadCell>
    <TableHeadCell class="w-16">Authentication</TableHeadCell>

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
                    <TableBodyCell class="w-10"></TableBodyCell>
                
                    <TableBodyCell class="w-10"></TableBodyCell>
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



<Modal bind:open={formModal} autoclose={false} size="lg" class="w-full">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">VPN Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VPNName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server CA Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


</tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={openvpnProtocol} value='UDP'>UDP</Radio>
  <Radio bind:group={openvpnProtocol} value='TCP'>TCP</Radio>

</div></td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Initial Mode</p></td><td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={openvpnInitial} value='Started'>Started</Radio>
  <Radio bind:group={openvpnInitial} value='Stopped'>Stopped</Radio>

</div></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Authentication</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={openvpnAuth} value='X509Cert'>X509 Certificate</Radio>
  <Radio bind:group={openvpnAuth} value='LoginPw'>Username/Password</Radio>

</div></td>


  </tr>

{#if openvpnAuth == 'X509Cert'}

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


  </tr>


{:else}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Username</p></td><td class="pl-5 pt-5"><input type="text" bind:value={ID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={PWD} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



{/if}




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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server CA Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server Certificate</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={localList} placeholder="None" /></td>


  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={openvpnProtocol} value='UDP'>UDP</Radio>
  <Radio bind:group={openvpnProtocol} value='TCP'>TCP</Radio>

</div></td>


  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Initial Mode</p></td><td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={openvpnInitial} value='Started'>Started</Radio>
  <Radio bind:group={openvpnInitial} value='Stopped'>Stopped</Radio>

</div></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Authentication</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={openvpnAuthS} value='X509Cert'>X509 Certificate</Radio>
  <Radio bind:group={openvpnAuthS} value='LoginPw'>Username/Password</Radio>

</div></td>


  </tr>

</table>
<p class="pt-10"></p>
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
{#if openvpnAuthS=='X509Cert'}
    Valid Client Certificate Common Name List

{:else}
    Valid Client Username List
{/if}
    </span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-8">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">
{#if openvpnAuthS=='X509Cert'}
    Certificate Common Name
{:else}
    Username
{/if}
    </TableHeadCell>
{#if openvpnAuthS=='LoginPw'}
    <TableHeadCell class="w-18">Password</TableHeadCell>
{/if}

    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>

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
   
              
                    <TableBodyCell class="w-10"></TableBodyCell>
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
{#if openvpnAuthS=='X509Cert'}
    Certificate Common Name
{:else}
    Username
{/if}
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={VPNName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


{#if openvpnAuthS=='LoginPw'}
<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={PWD} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



{/if}




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

    </TabItem>
     {/if}
    {/if}




{#if IPsecED == 'Enable'}
{#if IPsecRole == 'Server'}
<TabItem title="Advanced">
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Client Config Dir (CCD)</span>



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-44"><option disabled="" value="">Choose Client ...</option><option value="test1">test1</option><option value="test2">test2</option><option value="test3">test3</option></select>



<Label for="textarea-id" class="mb-2">Command For This Client</Label>
<Textarea id="textarea-id" placeholder="Command" rows="4" name="message" value="test cmd">

</Textarea>


<table>
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
</table>
</AccordionItem>
</Accordion>

</TabItem>
{/if}
{/if}


{#if IPsecED == 'Enable'}
{#if IPsecRole == 'Client'}
<TabItem title="Advanced">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-44"><option disabled="" value="">Choose VPN name ...</option><option value="test1">test1</option><option value="test2">test2</option><option value="test3">test3</option></select>

<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Preshared Key</span>

<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>

      <TableHeadCell class="w-18">TLS auth key</TableHeadCell>

    <TableHeadCell class="w-18">TLS crypt key</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
 <TableBodyCell class="w-18">
<div class="flex gap-4">
<svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" on:click={taClick} ><path d="M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
{#if value.length==0}
<p class="pt-2">None</p>
{:else}
<p class="pt-2">{showFiles(value)}</p> 
{/if}
<input id="ta" type="file" class="hidden" bind:this={fileinput} on:change={handleChange}/>
</div>
</TableBodyCell>

<TableBodyCell class="w-18">
<div class="flex gap-4">
<svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" on:click={taClick} ><path d="M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
{#if value.length==0}
<p class="pt-2">None</p>
{:else}
<p class="pt-2">{showFiles(value)}</p> 
{/if}
<input id="ta" type="file" class="hidden" bind:this={fileinput} on:change={handleChange}/>
</div>
</TableBodyCell>

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


    <span slot="header" class="pl-4">Remote Network Access</span>

<Table shadow striped={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Remote Subnet</TableHeadCell>
    <TableHeadCell>Comment</TableHeadCell>
    <TableHeadCell></TableHeadCell>
        <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
            <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button>
      </TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
                  <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
            </TableBodyCell>
      <TableBodyCell class="w-10">1</TableBodyCell>
      <TableBodyCell>192.168.254.0/24</TableBodyCell>
      <TableBodyCell>subnet1</TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
      <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
      </TableBodyCell>
            <TableBodyCell class="!p-4 w-10">
                  <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
            </TableBodyCell>
      <TableBodyCell class="w-10">2</TableBodyCell>
      <TableBodyCell>192.168.1.0/24</TableBodyCell>
      <TableBodyCell>subnet2</TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>      
    </TableBodyRow>



<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>

      <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalRNA = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="w-10"></TableBodyCell>
    <TableBodyCell class="w-10"></TableBodyCell>
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



<Modal bind:open={formModalRNA} autoclose={false} size="lg" class="w-full">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Subnet</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Comment</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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


   <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Failover</span>




 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4 w-8">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">VPN Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote VPN Address</TableHeadCell>
    <TableHeadCell class="w-18">Remote VPN Port</TableHeadCell>
    <TableHeadCell class="w-10">Protocol</TableHeadCell>


    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => formModalFailover = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
                    <TableBodyCell class="w-8">1</TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

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



<Modal bind:open={formModalFailover} autoclose={false} size="lg" class="w-full">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">VPN Name</p></td><td class="pl-5 pt-5">test</td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote VPN Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote VPN Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={VRPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={openvpnProtocol} value='UDP'>UDP</Radio>
  <Radio bind:group={openvpnProtocol} value='TCP'>TCP</Radio>

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



 </AccordionItem>



</Accordion>


</TabItem>
    {/if}
   {/if}
</Tabs>
