<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator, MultiSelect } from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    sdataLoggerConfig,
    SDatalogger_MonitorMode_Cloud_ConfigChangedLog,
    SDatalogger_MonitorMode_Edge_ConfigChangedLog,
    SDatalogger_ProxyMode_Cloud_ConfigChangedLog,
    SDatalogger_ProxyMode_Edge_ConfigChangedLog,
    SDatalogger_General_ConfigChangedLog,
    ChangedSDataLoggerConfig
  } from "./configG.js"


  let sdata_logger_data="";
  let changed_sdata_logger_data = {};
  let saved_changed_sdata_logger_data ={};

  let sdata_logger_general_changedValues = [];
  let sdata_logger_proxy_edge_changedValues = [];
  let sdata_logger_proxy_cloud_changedValues = [];
  let sdata_logger_monitor_edge_changedValues = [];
  let sdata_logger_monitor_cloud_changedValues = [];

  let getDataReady=0;    
  
  let sessionid;
  let sessionBinary;
  sessionidG.subscribe(val => {
      sessionid = val;
  });

  sdataLoggerConfig.subscribe(val => {
      sdata_logger_data = val;
  });

  SDatalogger_General_ConfigChangedLog.subscribe(val => {
      sdata_logger_general_changedValues = val;
  });

  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_edge_changedValues = val;
  });

  SDatalogger_ProxyMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_proxy_cloud_changedValues = val;
  });


  SDatalogger_MonitorMode_Edge_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_edge_changedValues = val;
  });

  SDatalogger_MonitorMode_Cloud_ConfigChangedLog.subscribe(val => {
      sdata_logger_monitor_cloud_changedValues = val;
  });

  ChangedSDataLoggerConfig.subscribe(val => {
      saved_changed_sdata_logger_data = val;
  });






  let isActive=false;

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';
  let proxyData=false;
  let pdenable=false;
  let pname;


  let monitorData=false;
  let mdenable=false;
  let mname;

  let MaxStorage="Full";
  let CloudPInterval="Now";
  let CloudPIntervalValue;
  let CloudLostDelayP=0;
  let CloudPDataP='Latest';
  let CloudPDataC='No';
  let CloudAzureProfile;
  let CloudMQTTProfile;
  let CloudAvnetProfile;
  let EnableAzureProfile;
  let EnableMQTTProfile;
  let EnableAvnetProfile;
  let ViewerSelect;


  let MVList = [
    {value:"Test1", name: "Line Current Phase A"},

  ];
  let VType;

  let VTList = [
    {value:"1", name: "Boolean"},
    {value:"2", name: "Unsigned Short"},
    {value:"3", name: "Signed Short"},
    {value:"4", name: "Unsigned Integer"},
    {value:"5", name: "Signed Integer"},
    {value:"6", name: "Float"},
    {value:"7", name: "Double"},
  ];





let OpList = [
    {value:"add", name: "+"},
    {value:"sub", name: "-"},
    {value:"mul", name: "*"},
    {value:"div", name: "/"},

  ];

  let PDisplay='hex';
  let PFormat='Default';
  let PFormatUDefine="Hello";

  function AppendUserDefine(string)
  {
    if (PFormat =='UserDefined')
    {
        console.log("append");
        console.log(string);
        PFormatUDefine+=string;
    }

  }
 const btn1 = () => 
 {
    PFormatUDefine+="$TimeStamp$";

};

 const btn2 = () => 
 {

    PFormatUDefine+="$Keyword1$";
 };

 const btn3 = () => 
 {

    PFormatUDefine+="$Keyword2$";
 };

 const btn4 = () => 
 {

    PFormatUDefine+="$Keyword3$";
 };

  const btn5 = () => 
 {

    PFormatUDefine+="$Keyword4$";
 };

  let selected = [];
  let countries = [
    { value: "Azure1", name: 'Azure Profile 1' },
    { value: "Azure2", name: 'Azure Profile 2' },
    { value: "MQTT1", name: 'MQTT Profile 1' },
    { value: "MQTT2", name: 'MQTT Profile 2' },
    { value: "Avnet", name: 'Avnet Profile 1' }
  ];

    let modify_proxy_edge_modal=false;
    let modify_proxy_edge_index;
    let BackupProxyEdge=
    {
      enable: false,
      aliasName: "",
      modbusVariable:"",
      variableType:1,
      variablePostprocessing:1,
      variablePostprocessingValue:1,
      postprocessedDisplay:0,
      dataFormat:0,
      userDefinedData:""
    };



    function TriggerModifyProxyEdge(index)
    {
        modify_proxy_edge_modal=true;
        modify_proxy_edge_index=index;
        BackupProxyEdge.enable=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].enable;
        BackupProxyEdge.aliasName=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].aliasName;
        BackupProxyEdge.modbusVariable=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusVariable;
        BackupProxyEdge.variableType=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].variableType;
        BackupProxyEdge.variablePostprocessing=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].variablePostprocessing;
        BackupProxyEdge.variablePostprocessingValue=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].variablePostprocessingValue;
        BackupProxyEdge.postprocessedDisplay=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].postprocessedDisplay;
        BackupProxyEdge.dataFormat=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].dataFormat;
        BackupProxyEdge.userDefinedData=changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].userDefinedData;

    }

    function NoModifyProxyEdge(index)
    {

        modify_proxy_edge_modal=false;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].enable=BackupProxyEdge.enable;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].aliasName=BackupProxyEdge.aliasName;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].modbusVariable=BackupProxyEdge.modbusVariable;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].variableType=BackupProxyEdge.variableType;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].variablePostprocessing=BackupProxyEdge.variablePostprocessing;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].variablePostprocessingValue=BackupProxyEdge.variablePostprocessingValue;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].postprocessedDisplay=BackupProxyEdge.postprocessedDisplay;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].dataFormat=BackupProxyEdge.dataFormat;

        changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[index].userDefinedData=BackupProxyEdge.userDefinedData;

    }


    function ModifyProxyEdge()
    {
        modify_proxy_edge_modal=false;
    }


    function saveProxyEdgeData()
    {
        console.log("selected:");
        console.log(selected);
    }


    function saveProxyCloud()
    {

    }

 async function getSmartDataLoggerData() {
    const res = await fetch(window.location.origin+"/GETSmartDataLogger", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      sdata_logger_data =await res.json();
      console.log(sdata_logger_data);
      sdataLoggerConfig.set(sdata_logger_data);

      changed_sdata_logger_data = JSON.parse(JSON.stringify(sdata_logger_data));
      saved_changed_sdata_logger_data= JSON.parse(JSON.stringify(sdata_logger_data));
      ChangedSDataLoggerConfig.set(saved_changed_sdata_logger_data);
      getDataReady=1;
    
    }
  }

  onMount(() => {

    console.log("smart data logger sessionid: ");
    console.log(sessionid);


    if (sessionid && sdata_logger_data =="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getSmartDataLoggerData();
    }
    else if (sessionid && sdata_logger_data != "")
    {
      getDataReady=1;

      if (sdata_logger_general_changedValues.length==0)
      {
          changed_sdata_logger_data=JSON.parse(JSON.stringify(saved_changed_sdata_logger_data));
          changed_sdata_logger_data.config.service_smartDataLogger_general=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_general)); 
      }
      
      if (sdata_logger_proxy_edge_changedValues.length==0)
      {
          changed_sdata_logger_data=JSON.parse(JSON.stringify(saved_changed_sdata_logger_data));
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData)); 
      }
      
      if (sdata_logger_proxy_cloud_changedValues.length==0)
      {
          changed_sdata_logger_data=JSON.parse(JSON.stringify(saved_changed_sdata_logger_data));
          changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings)); 
      }
      

      if (sdata_logger_monitor_edge_changedValues.length==0)
      {
          changed_sdata_logger_data=JSON.parse(JSON.stringify(saved_changed_sdata_logger_data));
          changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData)); 
      }

      if (sdata_logger_monitor_cloud_changedValues.length==0)
      {
          changed_sdata_logger_data=JSON.parse(JSON.stringify(saved_changed_sdata_logger_data));
          changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings=JSON.parse(JSON.stringify(sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings)); 
      }

    }

  });


</script>



 <Tabs style="underline">
   <TabItem open title="General">
<table>

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-left">Smart Data Logger</p></td>
<td class="pl-5 pt-5">
{#if getDataReady == 1}
<Toggle bind:checked={changed_sdata_logger_data.config.service_smartDataLogger_general.enable}></Toggle>
{/if}
</td>
<td></td>

    </tr>

</table>

<p class="pt-5"></p>


<table>
<tr class="pt-5">
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

  <TabItem title="Proxy Mode">


<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Edge Data
    </span>



 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Modbus Variable</TableHeadCell>
    <TableHeadCell class="w-18">Variable Type</TableHeadCell>
    <TableHeadCell class="w-18">Variable Postprocessing</TableHeadCell>
    <TableHeadCell class="w-18">Postprocessed Display</TableHeadCell>
    <TableHeadCell class="w-18">Data Format</TableHeadCell>
  </TableHead>

<TableBody>
{#if getDataReady == 1}
{#each changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData as ProxyEdgeData, index}

    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => TriggerModifyProxyEdge(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
{#if ProxyEdgeData.enable}
    <TableBodyCell class="w-10">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-10">0</TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{ProxyEdgeData.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{ProxyEdgeData.modbusVariable}</TableBodyCell>
{#if ProxyEdgeData.variableType == 1}
        <TableBodyCell class="w-18">Boolean</TableBodyCell>
{:else if ProxyEdgeData.variableType == 2}
        <TableBodyCell class="w-18">Unsigned Short</TableBodyCell>
{:else if ProxyEdgeData.variableType == 3}
        <TableBodyCell class="w-18">Signed Short</TableBodyCell>
{:else if ProxyEdgeData.variableType == 4}
      <TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
{:else if ProxyEdgeData.variableType == 5}
      <TableBodyCell class="w-18">Signed Integer</TableBodyCell>
{:else if ProxyEdgeData.variableType == 6}
      <TableBodyCell class="w-18">Float</TableBodyCell>
{:else if ProxyEdgeData.variableType == 7}
      <TableBodyCell class="w-18">Double</TableBodyCell>
{:else}
      <TableBodyCell class="w-18"></TableBodyCell>
{/if}


      <TableBodyCell class="w-18">
{#if ProxyEdgeData.variablePostprocessing == 1}+
{:else if ProxyEdgeData.variablePostprocessing == 2}-
{:else if ProxyEdgeData.variablePostprocessing == 3}*
{:else if ProxyEdgeData.variablePostprocessing == 4}/
{/if}
{ProxyEdgeData.variablePostprocessingValue}
      </TableBodyCell>
      <TableBodyCell class="w-18">
  {#if ProxyEdgeData.variablePostprocessing == 0}Hexadecimal
{:else if ProxyEdgeData.variablePostprocessing == 1}Decimal
{:else if ProxyEdgeData.variablePostprocessing == 2}Binary
{/if}  
       

       </TableBodyCell>
      <TableBodyCell class="w-18">{#if ProxyEdgeData.dataFormat==0}<div class="flex gap-2">
      Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip>

{:else if ProxyEdgeData.dataFormat==1}User Defined{/if}
</TableBodyCell>
    


    </TableBodyRow>
{/each}
{/if}


  <TableBodyRow>
 <TableBodyCell class="!p-4">
<button on:click={() => proxyData = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveProxyEdgeData}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>




<Modal bind:open={modify_proxy_edge_modal} size="lg" class="w-full" permanent={true}>
<form action="#">
<label>
{#if getDataReady == 1}
  <input type="checkbox"  bind:checked={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].enable}>
{/if}
  Enable
</label>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyProxyEdge(modify_proxy_edge_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><input type="text" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].aliasName} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4">{changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].modbusVariable}</td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

 <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].variableType}>
<option disabled="" value="none">Choose Type ...</option>

<option value={1}>Boolean</option>
<option value={2}>Unsigned Short</option>
<option value={3}>Signed Short</option>
<option value={4}>Unsigned Integer</option>
<option value={5}>Signed Integer</option>
<option value={6}>Float</option>
<option value={7}>Double</option>
</select>

 


 </td>
</tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Postprocessing</p></td>

 <td class="pl-5 pt-4" colspan="2"><div class="flex gap-4">
{changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].variablePostprocessing}

   
 <FloatingLabelInput style="outlined" id="operand_value" name="operand_value" type="number" label="operand_value">
{changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].variablePostprocessingValue}
  </FloatingLabelInput> 
  </div>
  </td>
  </tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Postprocessed Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay} value={0} >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay} value={1} >Decimal</Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].postprocessedDisplay} value={2} >Binary</Radio>

</div></td>
</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat} value={0} >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
  <Radio class="pb-2" bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat} value={1} >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1}
    <Button size="xs" on:click={btn1}>TimeStamp</Button>
{:else}
    <Button size="xs" disabled>TimeStamp</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1}
<Button size="xs" on:click={btn2}>Keyword1</Button>
{:else}
<Button size="xs" disabled>Keyword1</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1}
<Button size="xs" on:click={btn3}>Keyword2</Button>
{:else}
<Button size="xs" disabled>Keyword2</Button>
{/if}
</li>

<li class="pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1}
<Button size="xs" on:click={btn4}>Keyword3</Button>
{:else}
<Button size="xs" disabled>Keyword3</Button>
{/if}
</li>


<li class='pt-4'>
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1}
<Button size="xs" on:click={btn5}>Keyword4</Button>
{:else}
<Button size="xs" disabled>Keyword4</Button>
{/if}
</li>

</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.edgeData[modify_proxy_edge_index].dataFormat == 1}

<Textarea id="textarea-id" placeholder="Data Format" rows="12" name="message" bind:value={PFormatUDefine} />



{:else}
<Textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled/>
{/if}


    </td>




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
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyProxyEdge}>Modify</Button></td>


    </tr>


</table>

</Modal>


  </Table>

</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud Settings
    </span>

{#if getDataReady == 1}
<table>
   <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushInterval} value={0} >Right Away</Radio>
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushInterval} value={1} > User Defined (mins): </Radio>
{#if changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushInterval == 0}
  <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit:</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.linkLostRetransmit} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPriority} value={0} >Latest First</Radio>
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.dataPriority} value={1} > First In, First Out </Radio>

</div>



</td>


</tr>


<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={countries} bind:value={changed_sdata_logger_data.config.service_smartDataLogger_proxyMode.cloudSettings.cloudProfile} />

    </td>


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
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true} on:click={saveProxyCloud}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>


{/if}
</AccordionItem>

</Accordion>

  </TabItem>

  <TabItem title="Monitor Mode">



<Accordion>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Edge Data
    </span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-18">Alias Name</TableHeadCell>
    <TableHeadCell class="w-18">Modbus Variable</TableHeadCell>
    <TableHeadCell class="w-18">Variable Type</TableHeadCell>
    <TableHeadCell class="w-18">Variable Display</TableHeadCell>
    <TableHeadCell class="w-18">Data Format</TableHeadCell>
  </TableHead>

<TableBody>




{#if getDataReady == 1}
{#each changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.edgeData as MonitorEdgeData, index}

    <TableBodyRow>
 <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-10">
<button on:click={() => proxyData = true}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
{#if MonitorEdgeData.enable}
    <TableBodyCell class="w-10">1</TableBodyCell>
{:else}
    <TableBodyCell class="w-10">0</TableBodyCell>
{/if}
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-18">{MonitorEdgeData.aliasName}</TableBodyCell>
      <TableBodyCell class="w-18">{MonitorEdgeData.modbusVariable}</TableBodyCell>
{#if MonitorEdgeData.variableType == 1}
        <TableBodyCell class="w-18">Boolean</TableBodyCell>
{:else if MonitorEdgeData.variableType == 2}
        <TableBodyCell class="w-18">Unsigned Short</TableBodyCell>
{:else if MonitorEdgeData.variableType == 3}
        <TableBodyCell class="w-18">Signed Short</TableBodyCell>
{:else if MonitorEdgeData.variableType == 4}
      <TableBodyCell class="w-18">Unsigned Integer</TableBodyCell>
{:else if MonitorEdgeData.variableType == 5}
      <TableBodyCell class="w-18">Signed Integer</TableBodyCell>
{:else if MonitorEdgeData.variableType == 6}
      <TableBodyCell class="w-18">Float</TableBodyCell>
{:else if MonitorEdgeData.variableType == 7}
      <TableBodyCell class="w-18">Double</TableBodyCell>
{:else}
      <TableBodyCell class="w-18"></TableBodyCell>
{/if}


      <TableBodyCell class="w-18">
  {#if MonitorEdgeData.variablePostprocessing == 0}Hexadecimal
{:else if MonitorEdgeData.variablePostprocessing == 1}Decimal
{:else if MonitorEdgeData.variablePostprocessing == 2}Binary
{/if}  
       

       </TableBodyCell>
      <TableBodyCell class="w-18">{#if MonitorEdgeData.dataFormat==0}<div class="flex gap-2">
      Default  <svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div>
<Tooltip trigger="click" triggeredBy="#click">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip>

{:else if MonitorEdgeData.dataFormat==1}User Defined{/if}
</TableBodyCell>
    


    </TableBodyRow>
{/each}
{/if}

  <TableBodyRow>
 <TableBodyCell class="!p-4">
<button on:click={() => monitorData = true}>
    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

 </TableBodyCell>
      <TableBodyCell class="!p-4">



       </TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>


    <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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
        <td></td>
        <td></td>
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>




<Modal bind:open={monitorData} autoclose={false} size="lg" class="w-full">

<label>
  <input class="center" type=checkbox checked={mdenable}>
  Enable
</label>

<p class="mt-4"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Alias Name</p></td><td class="pl-5 pt-5" colspan="2"><div class="flex gap-0"><p class="pt-2 text-sm text-right">Monitor_EdgeData_</p><input type="text" bind:value={mname} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 dark:bg-gray-700 dark:border-green-500"></div></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Modbus Variable</p></td>
    <td class= "pl-4 pt-4"><Select class="mt-2" items={MVList} placeholder="None" /></td>


</tr>

<tr>
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Type</p>

  </td>

 <td class= "pl-4 pt-4"><Select class="mt-2" items={VTList} placeholder="None" /></td>
</tr>





<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Variable Display</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-2">
  <Radio class="pb-2" bind:group={PDisplay} value='hex' >Hexadecimal</Radio>
  <Radio class="pb-2" bind:group={PDisplay} value='dec' >Decimal</Radio>
  <Radio class="pb-2" bind:group={PDisplay} value='bin' >Binary</Radio>

</div></td>
</tr>


<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Format</p>

  </td>

    <td class="pl-4 pt-8" ><div class="flex gap-6">
  <Radio class="pb-2" bind:group={PFormat} value='Default' >Default  <svg id="hover" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip triggeredBy="#hover">$Time Stamp$,$RuleName$,$ModbusReq$,$ModbusResp$</Tooltip></Radio>
  <Radio class="pb-2" bind:group={PFormat} value='UserDefined' >User Defined:</Radio>


</div></td>
</tr>

<tr>
  <td class="text-right" >
  <div>
  <ul style="list-style-type:none;" class="py-1">
<li class="pt-4">
{#if PFormat == 'UserDefined'}
    <Button size="xs" on:click={btn1}>TimeStamp</Button>
{:else}
    <Button size="xs" disabled>TimeStamp</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn2}>Keyword1</Button>
{:else}
<Button size="xs" disabled>Keyword1</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn3}>Keyword2</Button>
{:else}
<Button size="xs" disabled>Keyword2</Button>
{/if}
</li>

<li class="pt-4">
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn4}>Keyword3</Button>
{:else}
<Button size="xs" disabled>Keyword3</Button>
{/if}
</li>


<li class='pt-4'>
{#if PFormat == 'UserDefined'}
<Button size="xs" on:click={btn5}>Keyword4</Button>
{:else}
<Button size="xs" disabled>Keyword4</Button>
{/if}
</li>

</ul>
  </div>
  </td>

    <td class="pl-4 pt-4">
{#if PFormat == 'UserDefined'}

<Textarea id="textarea-id" placeholder="Data Format" rows="12" name="message" bind:value={PFormatUDefine} />



{:else}
<Textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled/>
{/if}


    </td>




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
    <td class="pl-10"><Button color="dark" pill={true}>Add</Button></td>


</tr>


</table>

</Modal>


  </Table>

</AccordionItem>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Cloud Settings
    </span>

{#if getDataReady == 1}
<table>
   <tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Data Push Interval</p></td>
      <td class="pl-5 pt-5">
<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval} value={0} >Right Away</Radio>
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval} value={1} > User Defined (mins): </Radio>
{#if changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushInterval == 0}
  <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5" disabled>

{:else}
  <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPushIntervalValue} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
{/if}
</div>

      </td>

</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Link Lost Retransmit:</p></td>
    <td class="pl-5 pt-5">
<div class="flex gap-4">
      <input type="number" bind:value={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.linkLostRetransmit} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500">
      <p class="pt-2 text-lg font-light text-left">Delay Seconds</p>
</div>
    </td>
</tr>


<tr>
<td><p class="pl-20 pt-4 text-lg font-light text-right">Data Priority</p></td>
      <td class="pl-5 pt-5">

<div class="flex gap-4">
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPriority} value={0} >Latest First</Radio>
  <Radio bind:group={changed_sdata_logger_data.config.service_smartDataLogger_monitorMode.cloudSettings.dataPriority} value={1} > First In, First Out </Radio>

</div>



</td>


</tr>


<tr>


<td><p class="pl-20 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
<td class= "pl-4 pt-4">
<MultiSelect items={countries} bind:value={selected} />

    </td>


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
        <td></td>
    <td class="pl-10 pt-4"><Button color="blue" pill={true}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>


{/if}

</AccordionItem>

</Accordion>


  </TabItem>


    <TabItem title="Data Viewer">

<table>
<tr class="pt-4">
  <td><p class="pl-20 pt-4 text-lg font-light text-right">Select By</p>

  </td>

</tr>



<tr>
    <td></td><td class="pt-5">
    <Checkbox bind:group={ViewerSelect} value="CProfile">Cloud Profile</Checkbox>
    </td>

    <td class="pl-4 pt-3"><Select class="mt-2" items={countries} placeholder="None" /></td>

</tr>

<tr>
    <td></td><td class="pt-5">
    <Checkbox bind:group={ViewerSelect} value="DataDuration">Data Duration</Checkbox>
    </td>

    <td class="pl-4 pt-3"><FloatingLabelInput style="filled" id="Days" name="Days" type="text" label="Days" value={1}/></td>
    <td class="pl-4 pt-3"><FloatingLabelInput style="filled" id="Hours" name="Hours" type="text" label="Hours" value={2}/></td>    
    <td class="pl-4 pt-3"><FloatingLabelInput style="filled" id="Mins" name="Mins" type="text" label="Mins" value={3}/></td>    



</tr>


<tr>

  <td></td><td class="pt-5">
<button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full">Execute</button>
    </td>

</tr>

</table>


<p class="pt-20"></p>

 <Table shadow striped={true} tableNoWFull={true}>



  <TableHead>

    <TableHeadCell>Timestamp</TableHeadCell>
    <TableHeadCell>Mode</TableHeadCell>
    <TableHeadCell>Edge Data Alias Name</TableHeadCell>
    <TableHeadCell>Cloud Profile</TableHeadCell>
    <TableHeadCell>Content</TableHeadCell>
    <TableHeadCell>Data Duration</TableHeadCell>  

  </TableHead>
  <TableBody >


      <TableBodyRow>
        <TableBodyCell class="w-18">2023/11/03 13:02:25</TableBodyCell>
        <TableBodyCell class="w-18">Proxy Mode</TableBodyCell>
        <TableBodyCell class="w-18">Proxy_EdgeData_</TableBodyCell>
        <TableBodyCell class="w-18">MQTT Profile1, Azure Profile1</TableBodyCell>
        <TableBodyCell class="w-18">LineCurrent A is larger than 1000</TableBodyCell>
        <TableBodyCell class="w-18">3 days 10 hours 12 mins</TableBodyCell>
      </TableBodyRow>

      <TableBodyRow>
        <TableBodyCell class="w-18">2023/11/13 20:02:25</TableBodyCell>
        <TableBodyCell class="w-18">Monitor Mode</TableBodyCell>
        <TableBodyCell class="w-18">Monitor_EdgeData_</TableBodyCell>
        <TableBodyCell class="w-18">MQTT Profile2, Azure Profile2</TableBodyCell>
        <TableBodyCell class="w-18">LineCurrent B is larger than 1000</TableBodyCell>
        <TableBodyCell class="w-18">2 days 20 hours 2 mins</TableBodyCell>
      </TableBodyRow>



  </TableBody>
</Table>

  </TabItem>
   </Tabs>