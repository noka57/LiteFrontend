<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator } from 'flowbite-svelte';

  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";

  import { 
    modbusConfig,
    ModbusGateway_TtR,
    ModbusGateway_RtT,
    ModbusGateway_RtR,
    ModbusGateway_TtT,
    ModbusVariable_Slave_ConfigChangedLog,
    ModbusVariable_Master_ConfigChangedLog,
    ModbusTCP_Slave_ConfigChangedLog,
    ModbusTCP_Master_ConfigChangedLog,
    ModbusRTU_Slave_ConfigChangedLog,
    ModbusRTU_Master_ConfigChangedLog,
    ChangedModbusConfig
  } from "./configG.js"

  let modbus_data="";
  let changed_modbus_data = {};
  let saved_changed_modbus_data = {};
  let getDataReady=0;



    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

    let modbus_gateway_TtR_changedValues;
    let modbus_gateway_RtT_changedValues;
    let modbus_gateway_RtR_changedValues;
    let modbus_gateway_TtT_changedValues;

    let modbus_variable_master_changedValues;
    let modbus_variable_slave_changedValues;
    let modbus_tcp_master_changedValues;
    let modbus_tcp_slave_changedValues;
    let modbus_rtu_master_changedValues;
    let modbus_rtu_slave_changedValues;

    ModbusGateway_TtR.subscribe(val => {
          modbus_gateway_TtR_changedValues = val;
      });
    ModbusGateway_RtT.subscribe(val => {
          modbus_gateway_RtT_changedValues = val;
      });
    ModbusGateway_RtR.subscribe(val => {
          modbus_gateway_RtR_changedValues = val;
      });
    ModbusGateway_TtT.subscribe(val => {
          modbus_gateway_TtT_changedValues = val;
      });


    ModbusVariable_Slave_ConfigChangedLog.subscribe(val => {
              modbus_variable_slave_changedValues = val;
          });

    ModbusVariable_Master_ConfigChangedLog.subscribe(val => {
              modbus_variable_master_changedValues = val;
          });
    ModbusTCP_Slave_ConfigChangedLog.subscribe(val => {
              modbus_tcp_slave_changedValues = val;
          });
    ModbusTCP_Master_ConfigChangedLog.subscribe(val => {
              modbus_tcp_master_changedValues = val;
          });
    ModbusRTU_Slave_ConfigChangedLog.subscribe(val => {
              modbus_rtu_slave_changedValues = val;
          });
    ModbusRTU_Master_ConfigChangedLog.subscribe(val => {
              modbus_rtu_master_changedValues = val;
          });

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let formModalsm=false;
  let Sinterface="R485";
  let BR="9600";
  let Parity="None";
  let DB="8";
  let SB="1";
  let MM_SerialProfile;
  let MS_SerialProfile;
  let RM_Name="Modbus_Master_S0";

  let smenable=true;

  let formModaltm=false;
  let formModalmvar=false;


   let SlaveID="2";
   let PointType="IR";
   let MAddr="0";
   let MQ="1";
   let MDisplay="BE";
   let mvarenable=true;
   let M_Name="Line Current Phase A";
   let PRate;
  let RMIntervalP;
  let RMRTimeout;
   let Vrole;


  let MPList = [
    {value:"Test1", name: "Modbus_Master_S0"},
    {value:"Test2", name: "Modbus_Master_S1"},
    {value:"Test3", name: "Modbus_Master_T0"},
  ];


  modbusConfig.subscribe(val => {
      modbus_data = val;
  });

  ChangedModbusConfig.subscribe(val => {
      saved_changed_modbus_data = val;
  });

    let backup_rtu_master={
        enable:false,
        aliasName:"",
        serialProfile:""
    };


  let Modify_RTU_Master_Modal=false;
  let Modify_RTU_Master_index;

  let rtu_master_new=[
    {
        enable:false,
        aliasName:"",
        serialProfile:""
    },
    {
        enable:false,
        aliasName:"",
        serialProfile:""
    }
  ];

 function TriggerModifyRtuMaster(index)
  {
    Modify_RTU_Master_Modal=true;
    Modify_RTU_Master_index=index;
    backup_rtu_master.enable=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].enable;
    backup_rtu_master.aliasName=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].aliasName;
    backup_rtu_master.serialProfile=changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].serialProfile;
  }

  function NoModifyRTUMaster(index)
  {
    Modify_RTU_Master_Modal=false;
    changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].enable=backup_rtu_master.enable;
    changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].aliasName=backup_rtu_master.aliasName;
    changed_modbus_data.config.fieldManagement_modbus_rtu.master[index].serialProfile= backup_rtu_master.serialProfile;
  }

  function ModifyRTUMaster()
  {
    Modify_RTU_Master_Modal=false;  
  }


   async function getModbusData() {
    const res = await fetch(window.location.origin+"/GeTModbuS", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      modbus_data =await res.json();
      console.log(modbus_data);
      modbusConfig.set(modbus_data);

      changed_modbus_data = JSON.parse(JSON.stringify(modbus_data));
      saved_changed_modbus_data= JSON.parse(JSON.stringify(modbus_data));
      ChangedModbusConfig.set(saved_changed_modbus_data);
      getDataReady=1;
    
    }
  }


 onMount(() => {

    console.log("modbus sessionid: ");
    console.log(sessionid);


    if (sessionid && modbus_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getModbusData();
    }
    else if(sessionid && modbus_data!="")
    {
        getDataReady=1;


        if (modbus_gateway_TtR_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu)); 
        }
        
        if (modbus_gateway_RtT_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp)); 
        }

        if (modbus_gateway_RtR_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu)); 
        }

        if (modbus_gateway_TtT_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp)); 
        }

        if(modbus_variable_master_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_variable.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_variable.master)); 
        }

        if(modbus_variable_slave_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_variable.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_variable.slave)); 
        }

        if(modbus_tcp_master_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_tcp.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_tcp.master)); 
        }

        if(modbus_tcp_slave_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_tcp.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_tcp.slave)); 
        }

        if(modbus_rtu_master_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_rtu.master=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_rtu.master)); 
        }

        if(modbus_rtu_slave_changedValues.length ==0)
        {
            changed_modbus_data =JSON.parse(JSON.stringify(saved_changed_modbus_data));
            changed_modbus_data.config.fieldManagement_modbus_rtu.slave=JSON.parse(JSON.stringify(modbus_data.config.fieldManagement_modbus_rtu.slave)); 
        }


    }

  });


  </script>


 <Tabs style="underline">
   <TabItem open title="RTU">
<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>

<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_rtu.master as RTUMasterItem, index}

    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyRtuMaster(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
{#if RTUMasterItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUMasterItem.serialProfile}</TableBodyCell>
    </TableBodyRow>

{/each}
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


   
<Modal bind:open={Modify_RTU_Master_Modal} permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyRTUMaster(Modify_RTU_Master_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">
{changed_modbus_data.config.fieldManagement_modbus_rtu.master[Modify_RTU_Master_index].serialProfile}
      </td>



  </tr>




      <tr>
    <td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyRTUMaster}>Modify</Button></td>


    </tr>
</table>

</Modal>


</Table>

</AccordionItem>

  <AccordionItem {defaultClass}>

    <span slot="header" class="pl-4">
    Slave
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>    
  <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Serial Profile</TableHeadCell>
  </TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_rtu.slave as RTUSlaveItem, index}
   
 <TableBodyRow>
   <TableBodyCell class="!p-4 w-10">
<button on:click={() => formModalsm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
{#if RTUSlaveItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}

      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{RTUSlaveItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{RTUSlaveItem.serialProfile}</TableBodyCell>

    </TableBodyRow>
{/each}
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
      <td><p class="pl-10 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={RM_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Serial Profile</p></td>
      <td class="pl-5 pt-5">
      <select class="block w-80 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={MM_SerialProfile}>
<option disabled="" value="">None</option>
<option value="1" >ComPort1</option>
<option value="1" >ComPort2</option>

      </td>



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

</AccordionItem>


</Accordion>

   </TabItem>
     <TabItem title="TCP">
     
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>


<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">LAN Profile</TableHeadCell>   
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-10">Remote Server IP</TableHeadCell>
    <TableHeadCell>Remote Port</TableHeadCell>
    <TableHeadCell>Connection Timeout</TableHeadCell>

  </TableHead>
  <TableBody>
{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_tcp.master as TCPMasterItem, index}
   

    <TableBodyRow>
    <TableBodyCell class="!p-1"></TableBodyCell>
       <TableBodyCell class="!p-1">
<button on:click={() => formModaltm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
       <TableBodyCell class="!p-1"></TableBodyCell>
{#if TCPMasterItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPMasterItem.lanProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPMasterItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{TCPMasterItem.remoteServerIp}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.remotePort}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPMasterItem.connectionTimeout} ms</TableBodyCell>
    </TableBodyRow>
{/each}
{/if}


 <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>

     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
 <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
    Slave
    </span>



<Table shadow striped={true} tableNoWFull={true}>
<TableHead>
  <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
      <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">LAN Profile</TableHeadCell>  
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell>Listen Port</TableHeadCell>
    <TableHeadCell>Max Connection Count</TableHeadCell>

  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_tcp.slave as TCPSlaveItem, index}
   

 <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
       <TableBodyCell class="!p-1">
<button on:click={() => formModaltm = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
       <TableBodyCell class="!p-1">            
       <button>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </button></TableBodyCell>
{#if TCPSlaveItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPSlaveItem.lanProfile}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{TCPSlaveItem.aliasName}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPSlaveItem.listenPort}</TableBodyCell>
      <TableBodyCell class="w-10">{TCPSlaveItem.maxConnectionCount}</TableBodyCell>

    </TableBodyRow>
{/each}
{/if}

 <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>

     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
 <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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

</Accordion>

     </TabItem>

    <TabItem title="Variable">

<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Master
    </span>


 <Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="!p-1">No</TableHeadCell>
    <TableHeadCell class="!p-1">Variable Name</TableHeadCell>
    <TableHeadCell class="w-18">Master Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
    <TableHeadCell class="w-18">Polling Rate</TableHeadCell>
    <TableHeadCell>Delay Between Polls</TableHeadCell>
        <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_variable.master as TCPVariableMasterItem, index}
   

 <TableBodyRow>
   <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-4">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">        </TableBodyCell>
{#if TCPVariableMasterItem.enable}
       <TableBodyCell class='w-4'>1</TableBodyCell>
{:else}
       <TableBodyCell class='w-4'>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-1 w-4">{index+1}</TableBodyCell>
  <TableBodyCell class="!p-1 w-18">{TCPVariableMasterItem.variableName}</TableBodyCell>
  <TableBodyCell class="w-10">{TCPVariableMasterItem.profile}</TableBodyCell>
  <TableBodyCell class="w-18">{TCPVariableMasterItem.slaveId}</TableBodyCell>
{#if TCPVariableMasterItem.pointType == 0}
    <TableBodyCell class="w-10">Coil</TableBodyCell>
{:else if TCPVariableMasterItem.pointType == 1}
    <TableBodyCell class="w-10">Discrete Input</TableBodyCell>
{:else if TCPVariableMasterItem.pointType == 2}
    <TableBodyCell class="w-10">Input Registers</TableBodyCell>
{:else if TCPVariableMasterItem.pointType == 3}
    <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell class="w-10"></TableBodyCell>
{/if}
  <TableBodyCell class="w-18">{TCPVariableMasterItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{TCPVariableMasterItem.quantity}</TableBodyCell>
  <TableBodyCell class="w-18">{TCPVariableMasterItem.responseTimeout} ms</TableBodyCell>
<TableBodyCell class="w-18">{TCPVariableMasterItem.pollingRate} ms</TableBodyCell>
    <TableBodyCell class="w-18">{TCPVariableMasterItem.delayBetweenPolls} ms</TableBodyCell>

{#if TCPVariableMasterItem.byteOrder==0} 
    <TableBodyCell class="w-18">Big Endian</TableBodyCell>
{:else if TCPVariableMasterItem.byteOrder==1}   
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
{:else if TCPVariableMasterItem.byteOrder==2}
    <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
{:else if TCPVariableMasterItem.byteOrder==3}
        <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell class="w-18"></TableBodyCell>
{/if}

    </TableBodyRow>
{/each}
{/if}



     <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"> </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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
        <td></td>
        <td></td>
    <td class="pl-4 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    
  </TableBody>

<Modal bind:open={formModalmvar} autoclose={false} size="lg" class="w-full">

<label>
  <input class="center" type=checkbox checked={mvarenable}>
  Enable
</label>

<p class="mt-4"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={M_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>





  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MPList} placeholder="None" /></td>

</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={PointType} value='Coil' >Coil</Radio>
  <Radio bind:group={PointType} value='DI' >Discrete Input</Radio>
  <Radio bind:group={PointType} value='IR' >Input Register</Radio>
  <Radio bind:group={PointType} value='HR' >Holding Register</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MQ} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>


  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={MDisplay} value='BE' >Big Endian</Radio>
  <Radio bind:group={MDisplay} value='LE' >Little Endian</Radio>
  <Radio bind:group={MDisplay} value='BEBS' >Big Endian Byte Swap</Radio>
  <Radio bind:group={MDisplay} value='LEBS' >Little Endian Byte Swap</Radio>
</div></td>
</tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Response Timeout</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={RMRTimeout} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Polling Rate</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={PRate} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

  </tr>

  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Delay Between Polls</p></td><td class="pl-5 pt-5 w-18" colspan="2"><div class="flex gap-2">
      <input type="text" bind:value={RMIntervalP} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"><p class="pl-1 pt-4">ms</p></div></td>

<td></td>
<td></td>
<td></td>

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
    <td>
<Button color="dark" pill={true}>Submit</Button></td>


    </tr>

</table>

</Modal>


</Table>   
</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Slave
    </span>
<Table>
<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell class="w-18">Slave Profile</TableHeadCell>
    <TableHeadCell class="w-18">Slave ID</TableHeadCell>
    <TableHeadCell class="w-18">Point Type</TableHeadCell>
    <TableHeadCell class="w-18">Address (DEC)</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Byte Order</TableHeadCell>
  </TableHead>
  <TableBody>



{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_variable.slave as TCPVariableSlaveItem, index}
   

 <TableBodyRow>
   <TableBodyCell class="!p-1 w-10"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            </TableBodyCell>

{#if TCPVariableSlaveItem.enable}

       <TableBodyCell>1</TableBodyCell>
{:else}

       <TableBodyCell>0</TableBodyCell>
{/if}
      <TableBodyCell class="!p-6 w-10">{index+1}</TableBodyCell>
  <TableBodyCell class="w-18">{TCPVariableSlaveItem.variableName}</TableBodyCell>
  <TableBodyCell class="w-10">{TCPVariableSlaveItem.profile}</TableBodyCell>
  <TableBodyCell class="w-18">{TCPVariableSlaveItem.slaveId}</TableBodyCell>

{#if TCPVariableSlaveItem.pointType == 0}
    <TableBodyCell class="w-10">Coil</TableBodyCell>
{:else if TCPVariableSlaveItem.pointType == 1}
    <TableBodyCell class="w-10">Discrete Input</TableBodyCell>
{:else if TCPVariableSlaveItem.pointType == 2}
    <TableBodyCell class="w-10">Input Registers</TableBodyCell>
{:else if TCPVariableSlaveItem.pointType == 3}
    <TableBodyCell class="w-10">Holding Registers</TableBodyCell>
{:else}
  <TableBodyCell class="w-10"></TableBodyCell>
{/if}


  <TableBodyCell class="w-18">{TCPVariableSlaveItem.address}</TableBodyCell>
  <TableBodyCell class="w-10">{TCPVariableSlaveItem.quantity}</TableBodyCell>
{#if TCPVariableSlaveItem.byteOrder==0} 
    <TableBodyCell class="w-18">Big Endian</TableBodyCell>
{:else if TCPVariableSlaveItem.byteOrder==1}   
        <TableBodyCell class="w-18">Little Endian</TableBodyCell>
{:else if TCPVariableSlaveItem.byteOrder==2}
    <TableBodyCell class="w-18">Big Endian Byte Swap</TableBodyCell>
{:else if TCPVariableSlaveItem.byteOrder==3}
        <TableBodyCell class="w-18">Little Endian Byte Swap</TableBodyCell>
{:else}
    <TableBodyCell class="w-18"></TableBodyCell>
{/if}
    </TableBodyRow>

{/each}
{/if}



     <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
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

<Modal bind:open={formModalmvar} autoclose={false} size="lg" class="w-full">

<label>
  <input class="center" type=checkbox checked={mvarenable}>
  Enable
</label>

<p class="mt-4"></p>

<table>

<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Variable Name</p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={M_Name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Profile</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MPList} placeholder="None" /></td>

</tr>




<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Slave ID</p></td><td class="pl-5 pt-5"><input type="text" bind:value={SlaveID} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
<td></td>
<td></td>
<td></td>


  </tr>

<tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Point Type</p>

  </td>

    <td class="pl-4 pt-4" colspan="5"><div class="flex gap-4">
  <Radio bind:group={PointType} value='Coil' >Coil</Radio>
  <Radio bind:group={PointType} value='DI' >Discrete Input</Radio>
  <Radio bind:group={PointType} value='IR' >Input Register</Radio>
  <Radio bind:group={PointType} value='HR' >Holding Register</Radio>
</div></td>
</tr>


<tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Address</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MAddr} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>

  </tr>


  <tr>
      <td><p class="pl-2 pt-4 text-lg font-light text-right">Quantity</p></td><td class="pl-5 pt-5"><input type="text" bind:value={MQ} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

<td></td>
<td></td>
<td></td>


  </tr>


  <tr>
  <td><p class="pl-2 pt-4 text-lg font-light text-right">Byte Order</p>

  </td>

    <td class="pl-4 pt-5" colspan="5"><div class="flex gap-2">
  <Radio bind:group={MDisplay} value='BE' >Big Endian</Radio>
  <Radio bind:group={MDisplay} value='LE' >Little Endian</Radio>
  <Radio bind:group={MDisplay} value='BEBS' >Big Endian Byte Swap</Radio>
  <Radio bind:group={MDisplay} value='LEBS' >Little Endian Byte Swap</Radio>
</div></td>
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
    <td>
<Button color="dark" pill={true}>Submit</Button></td>


    </tr>

</table>

</Modal>


</Table>   

</AccordionItem>
</Accordion>

    </TabItem>

        <TabItem title="Gateway">
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From TCP To RTU
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToRtu as Tcp2RtuItem, index}
   

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            </TableBodyCell>

{#if Tcp2RtuItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}

     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2RtuItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Tcp2RtuItem.tcpProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2RtuItem.rtuProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2RtuItem.responseTimeout} ms</TableBodyCell>

    </TableBodyRow>
{/each}
{/if}


   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
  </Table>

    </AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From RTU To TCP
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToTcp as Rtu2TcpItem, index}
   
   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
</TableBodyCell>
{#if Rtu2TcpItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2TcpItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Rtu2TcpItem.rtuProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2TcpItem.tcpProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2TcpItem.responseTimeout} ms</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}

   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
  </Table>
      </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From RTU To RTU
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>RTU Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>


{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromRtuToRtu as Rtu2RtuItem, index}
   
   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
</TableBodyCell>
{#if Rtu2RtuItem.enable}
      <TableBodyCell>1</TableBodyCell>
{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
     <TableBodyCell class="!p-6 w-4">{index+1}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2RtuItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Rtu2RtuItem.rtuProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2RtuItem.rtuProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Rtu2RtuItem.responseTimeout} ms</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}

   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
  </Table>
      </AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    From TCP To TCP
    </span>

<Table shadow striped={true} tableNoWFull={true}>

<TableHead>
    <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
        <TableHeadCell class="!p-1">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>TCP Profile</TableHeadCell>
    <TableHeadCell>Response Timeout</TableHeadCell>
  </TableHead>
  <TableBody>

{#if getDataReady == 1}
{#each changed_modbus_data.config.fieldManagement_modbus_gateway.fromTcpToTcp as Tcp2TcpItem, index}
   

   <TableBodyRow>
     <TableBodyCell class="!p-1"></TableBodyCell>
  <TableBodyCell class="!p-1 w-10">
<button on:click={() => formModalmvar = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>
        <TableBodyCell class="!p-1">            
</TableBodyCell>
{#if Tcp2TcpItem.enable}
      <TableBodyCell>1</TableBodyCell>

{:else}
      <TableBodyCell>0</TableBodyCell>
{/if}
     <TableBodyCell class="!p-6 w-4">1</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2TcpItem.aliasName}</TableBodyCell>
      <TableBodyCell class="!p-6 w-18">{Tcp2TcpItem.tcpProfileSlave}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2TcpItem.tcpProfileMaster}</TableBodyCell>
      <TableBodyCell class="!p-6 w-10">{Tcp2TcpItem.responseTimeout} ms</TableBodyCell>


    </TableBodyRow>
{/each}
{/if}


   <TableBodyRow>
     <TableBodyCell class="!p-1">
            <button>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
</button>
     </TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
     <TableBodyCell class="!p-1"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
      <TableBodyCell class="!p-6 w-18"> </TableBodyCell>
      <TableBodyCell class="!p-6 w-10"></TableBodyCell>
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
  </Table>
      </AccordionItem>

</Accordion>
</TabItem>

<TabItem title="Viewer">


<Table shadow striped={true} tableNoWFull={true}>

  <TableHead>
    <TableHeadCell>Variable Name</TableHeadCell>
    <TableHeadCell>Status</TableHeadCell>


  </TableHead>

   <TableBody>

   <TableBodyRow>
      <TableBodyCell class="!p-6 w-10"> Line Current Phase A</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Valid</TableBodyCell>

   </TableBodyRow>


   <TableBodyRow>
      <TableBodyCell class="!p-6 w-10"> RTU-DI Status</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Timeout</TableBodyCell>

   </TableBodyRow>


    <TableBodyRow>
      <TableBodyCell class="!p-6 w-10"> TCP-Line Current Phase B</TableBodyCell>
      <TableBodyCell class="!p-6 w-10"> Error</TableBodyCell>

   </TableBodyRow>

     </TableBody>
  </Table>

</TabItem>



</Tabs>