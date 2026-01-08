<script>
    import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label, Textarea,  Toggle,Select, Checkbox, Input, Tooltip, Radio, Modal, Fileupload, FloatingLabelInput, Helper, StepIndicator, Dropdown, DropdownItem } from 'flowbite-svelte';

    import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
    import './global.css';
    import { onMount } from 'svelte';
    import { sessionidG } from "./sessionG.js";
    let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';

    import { 
        genericMQTTConfig,
        ChangedGenericMQTTConfig,
        awsIoTcoreConfig,
        ChangedAWSIoTcoreConfig,
        azureConfig,
        ChangedAzureConfig,
    } from "./configG.js"


    let getDataReady=0; 

    let CloudProfile=[];   
      
    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });


    let generic_mqtt_data="";
    let saved_changed_generic_mqtt_data ="";

    let awsIoT_core_data="";
    let saved_changed_awsIoT_core_data ="";


    let azure_data="";
    let saved_changed_azure_data ="";


    genericMQTTConfig.subscribe(val => {
      generic_mqtt_data = val;
    });

    ChangedGenericMQTTConfig.subscribe(val => {
      saved_changed_generic_mqtt_data = val;
    });


    awsIoTcoreConfig.subscribe(val => {
      awsIoT_core_data = val;
    });

    ChangedAWSIoTcoreConfig.subscribe(val => {
      saved_changed_awsIoT_core_data = val;
    });


    azureConfig.subscribe(val => {
      azure_data = val;
    });

    ChangedAzureConfig.subscribe(val => {
      saved_changed_azure_data = val;
    });


    let currentStep = 1;
    let steps = ['Step 1', 'Step 2', 'Step 3'];
    let modalElement;


    let pos = { x: 0, y: 0 }
    let menu = { h: 0, w: 0 }
    let browser = { h: 0, y: 0 }
    let showMenu = false;
    let content
    let rect;
    let cursorPosition=-1;
    let beforeCursor; 


    let openTagList=false;


    function handleClickTagList()
    {
        openTagList=!openTagList;
    }

    function rightClickContextMenu(e)
    {

        showMenu = true
        browser = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        pos = {
            x: e.clientX,
            y: e.clientY
        };

        if (modalElement)
        {

            if (modalElement instanceof HTMLElement) 
            {
                rect = modalElement.getBoundingClientRect();
                //console.log('Modal position:', rect);
                //console.log('Top:', rect.top, 'Left:', rect.left);
            } else {
                console.error('modalElement is not an HTMLElement');
            }

        }


        // If bottom part of context menu will be displayed
        // after right-click, then change the position of the
        // context menu. This position is controlled by `top` and `left`
        // at inline style. 
        // Instead of context menu is displayed from top left of cursor position
        // when right-click occur, it will be displayed from bottom left.
        if (browser.h -  pos.y < menu.h)
            pos.y = pos.y - menu.h
        if (browser.w -  pos.x < menu.w)
            pos.x = pos.x - menu.w

            pos.x= pos.x-rect.left+30
            pos.y=pos.y-rect.top+100

        const textarea = e.target;
        cursorPosition = textarea.selectionStart;
  
    }

    function onPageClick(e)
    {
        showMenu = false;
    }

    function getContextMenuDimension(node)
    {
        // This function will get context menu dimension
        // when navigation is shown => showMenu = true
        let height = node.offsetHeight
        let width = node.offsetWidth
        menu = {
            h: height,
            w: width
        }


    }


    let new_proxy_edge_modal=false;
    let new_proxy_edge_index;

    let new_proxy_edge=[
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    }, 
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },              
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    },
    {
      enable: false,
      delete: false,
      samplingCondition:0,
      periodMS:1000,
      changePercentage:10,
      modbusTag: [],
      modbusTCPSlaveTag:[],
      modbusTCPMasterTag:[],
      modbusRTUMasterTag:[],
      cloud:
      [
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:0, 
          userDefineedData: ""
        },
        {
          profile:"",
          topic:[
            {
              type: 0,
              name:""
            }
          ],
          tagDisplay:0,
          dataLogFormat: 0,
          alternativeFormatCloudIndex:1, 
          userDefineedData: ""
        }
      ]
    }    
    ];

    function new_proxy_edge_trigger(index)
    {
        new_proxy_edge[index].enable=true;
        new_proxy_edge[index].delete=false;
        new_proxy_edge[index].samplingCondition=0;
        new_proxy_edge[index].periodMS=1000;
        new_proxy_edge[index].changePercentage=10;
        new_proxy_edge[index].modbusTag=[];
        new_proxy_edge[index].modbusTCPSlaveTag=JSON.parse(JSON.stringify(TCPSlaveTag));
        new_proxy_edge[index].modbusTCPMasterTag=JSON.parse(JSON.stringify(TCPMasterTag));
        new_proxy_edge[index].modbusRTUMasterTag=JSON.parse(JSON.stringify(RTUMasterTag));
        new_proxy_edge[index].cloud=[
          {
            profile:"",
            topic:[
              {
                type: 0,
                name:""
              }
            ],
            tagDisplay:1,
            dataLogFormat: 1,
            alternativeFormatCloudIndex:0, 
            userDefineedData: ""
          },
          {
            profile:"",
            topic:[
              {
                type: 0,
                name:""
              }
            ],
            tagDisplay:1,  
            dataLogFormat: 1,
            alternativeFormatCloudIndex:1, 
            userDefineedData: ""
          }
        ];



        currentStep=1;
        openTagList=false;
        target_index_for_show_tag=-1;



        new_proxy_edge_index=index;
        new_proxy_edge_modal=true;

        console.log("new_proxy_edge:", new_proxy_edge[index]);
    }

    function New_ProxyEdge_Modal_Page1()
    {
      currentStep=1;
    }

    function New_ProxyEdge_Modal_Page2(type)
    {

      showMenu=false;


      currentStep=2;
    }

    function New_ProxyEdge_Modal_Page3(type)
    {
      showMenu=false;

      currentStep=3;
    }


    async function getGenericMQTTData () {
        const res = await fetch(window.location.origin+"/getGenericMQTTData", {
          method: 'POST',
          body: sessionBinary
        })

        if (res.status == 200)
        {
          console.log("get gMQTT data");
          generic_mqtt_data =await res.json();
          console.log(generic_mqtt_data);
          genericMQTTConfig.set(generic_mqtt_data);


          saved_changed_generic_mqtt_data= JSON.parse(JSON.stringify(generic_mqtt_data));
          ChangedGenericMQTTConfig.set(saved_changed_generic_mqtt_data);


          for (let i=0; i< saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;i++)
          {
            let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;
            let clouditem={"value":item, "name":item};
            CloudProfile=[...CloudProfile, clouditem];

          }

        }
    }

    async function getAWSIotCoreData () {
        const res = await fetch(window.location.origin+"/GetAWSiotCore", {
          method: 'POST',
          body: sessionBinary
        })

        if (res.status == 200)
        {
          awsIoT_core_data =await res.json();
          console.log(awsIoT_core_data);
          awsIoTcoreConfig.set(awsIoT_core_data);

          saved_changed_awsIoT_core_data= JSON.parse(JSON.stringify(awsIoT_core_data));
          ChangedAWSIoTcoreConfig.set(saved_changed_awsIoT_core_data);

          for (let i=0; i< saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile.length;i++)
          {
            let item="aws_"+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerHost+':'+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerPort;
            let clouditem={"value":item, "name":item};
            CloudProfile=[...CloudProfile, clouditem];

          }

        }
    }


    async function getAzureData() {
        const res = await fetch(window.location.origin+"/PostGetAzuRe", {
          method: 'POST',
          body: sessionBinary
        })

        if (res.status == 200)
        {
          azure_data =await res.json();
          console.log(azure_data);
          azureConfig.set(azure_data);

          saved_changed_azure_data= JSON.parse(JSON.stringify(azure_data));
          ChangedAzureConfig.set(saved_changed_azure_data);


          for (let i=0; i< saved_changed_azure_data.config.cloud_azHub_profile.length;i++)
          {
            let item="hub_"+(i+1);
            let clouditem={"value":item, "name":item};
            CloudProfile=[...CloudProfile, clouditem];

          }

          for (let i=0; i< saved_changed_azure_data.config.cloud_azDPS_profile.length;i++)
          {
            let item="dps_"+(i+1);
            let clouditem={"value":item, "name":item};
            CloudProfile=[...CloudProfile, clouditem];

          }

          for (let i=0; i< saved_changed_azure_data.config.cloud_azCentral_profile.length;i++)
          {
            let item="central_"+(i+1);
            let clouditem={"value":item, "name":item};
            CloudProfile=[...CloudProfile, clouditem];

          }

        }
    }



  onMount(() => {

    console.log("smart data process sessionid: ");
    console.log(sessionid);


    if (sessionid)
    {

      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

      if (saved_changed_generic_mqtt_data == "")
      {
        getGenericMQTTData();
      }
      else
      {

        for (let i=0; i< saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile.length;i++)
        {
          let item=saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerHost+':'+saved_changed_generic_mqtt_data.config.cloud_genericMqtt_profile[i].brokerPort;
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];
        }
 
      }

      if (saved_changed_awsIoT_core_data == "")
      {
        getAWSIotCoreData();
      }
      else
      {
        for (let i=0; i< saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile.length;i++)
        {
          //console.log("****CloudProfile:", CloudProfile);
          let item="aws_"+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerHost+':'+saved_changed_awsIoT_core_data.config.cloud_awsIoTcore_profile[i].brokerPort;
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];

          //console.log("!!!CloudProfile:", CloudProfile);

        }
      }


     if (saved_changed_azure_data=="")
      {
        getAzureData();
      }
      else
      {
        for (let i=0; i< saved_changed_azure_data.config.cloud_azHub_profile.length;i++)
        {
          let item="hub_"+(i+1);
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];

        }

        for (let i=0; i< saved_changed_azure_data.config.cloud_azDPS_profile.length;i++)
        {
          let item="dps_"+(i+1);
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];
        }

        for (let i=0; i< saved_changed_azure_data.config.cloud_azCentral_profile.length;i++)
        {
          let item="central_"+(i+1);
          let clouditem={"value":item, "name":item};
          CloudProfile=[...CloudProfile, clouditem];

        }
      }

      console.log("CloudProfile: ", CloudProfile);

    }

  });



</script>




 <Tabs style="underline">
   <TabItem open title="General">
<table>

    <tr>
    <td class="w-48"><p class="pl-5 pt-5 text-lg font-light text-left">Smart Data Process</p></td>
<td class="pl-5 pt-5">

<Toggle></Toggle>

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
    <td class="pl-10"><Button color="blue" pill={true} ><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</table>



   </TabItem>


<TabItem title="Uplink">



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
    <TableHeadCell class="w-18">DNP3 Object</TableHeadCell>
    <TableHeadCell class="w-18">Sampling Condition</TableHeadCell>
    <TableHeadCell >Cloud Setting</TableHeadCell>
  </TableHead>

<TableBody>



  </TableBody>

  </Table>

<Modal bind:open={new_proxy_edge_modal} autoclose={false} size="lg" class="w-full">

<StepIndicator {currentStep} {steps} glow />


<table bind:this={modalElement}>

{#if currentStep == 1}
<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Enable</p></td><td class="pl-5 pt-5">
  <input class="center" type="checkbox" bind:checked={new_proxy_edge[new_proxy_edge_index].enable}></td>



  </tr>

<tr>
      <td><p class="pl-4 pt-4 text-lg font-light text-right">Sampling Condition</p></td>
    <td class= "pl-4 pt-5" colspan="3">
<div class="flex gap-4">

  <Radio class="pb-1" bind:group={new_proxy_edge[new_proxy_edge_index].samplingCondition} value={0} >Period</Radio>

{#if new_proxy_edge[new_proxy_edge_index].samplingCondition==0}

  <input type="number"  class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 dark:bg-gray-700 dark:border-green-500" bind:value={new_proxy_edge[new_proxy_edge_index].periodMS}> <p class="pt-2">ms</p>

{/if}



</div>    
    </td>
    <td></td>
    <td></td>

</tr>

{#if 0}

<tr>
<td><p class="pl-4 pt-8 text-lg font-light text-right">Modbus Tag</p></td>
 
 <td class="pl-5 pt-8" colspan="3">
 <button type="button" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg" on:click={()=>handleClickTagList()}>Choose Tag

{#if openTagList}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron up outline" viewBox="-8 -8 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor" class="shrink-0 w-6 h-6 ms-2 text-white dark:text-white" role="img" aria-label="chevron down outline" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"></path></svg>
{/if}


 </button>  

{#if openTagList}

<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(200px, 276px);"> 

 <ul class="py-1 w-44">


 
{#each new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag as Slave, index}
<li >


<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {index*45}px);"> 




  </div>
 </li> 
{/each}

{#each new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag as Master, index}
<li >


<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(175px, {45+index*41}px);"> 

</div>
  
 </li> 
{/each}






 </ul> 
 
 </div>

{/if}

 </td>


</tr>



{/if}


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page2(0)}>Next</Button></td>


    </tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>

<tr>
    <td></td>
    <td class="pl-40"></td>
    <td class="pl-40"></td>
    <td class="pt-4 pl-40"></td>
</tr>


{:else if currentStep ==2}

<tr>
      <td></td>
      <td class="pl-4 pt-4">
<p class="text-center pt-4 text-lg font-bold">1st Cloud</p>
      </td>

      <td></td>
    <td></td>
    </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].profile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>



<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Topic 1</p></td>
      <td class="pl-4 pt-5">

<div class="flex gap-4">
{#if new_proxy_edge[new_proxy_edge_index].cloud[0].profile.startsWith("hub_") || new_proxy_edge[new_proxy_edge_index].cloud[0].profile.startsWith("dps_") || new_proxy_edge[new_proxy_edge_index].cloud[0].profile.startsWith("central_")}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].topic[0].name}>
{/if}  
</div>

</td>


</tr>




<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
</li>

              <hr>
{#each new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

</li>




{/each}


{#each new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

</li>




<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 

</div>
{/each}



{#each new_proxy_edge[new_proxy_edge_index].modbusRTUMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">

</li>





{/each}



        </ul>
    </div>
</nav>
{/if}



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if new_proxy_edge[new_proxy_edge_index].cloud[0].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={new_proxy_edge[new_proxy_edge_index].cloud[0].userDefineedData}></textarea>

{/if}


    </td>


</tr>




<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page1()}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page3(0)}>Next</Button></td>


    </tr>




{:else if currentStep ==3}



<tr>
      <td></td>
      <td class="pl-4 pt-4">
<p class="text-center pt-4 text-lg font-bold">2nd Cloud</p>
      </td>

      <td></td>
    <td></td>
    </tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Cloud Profile</p></td>
    <td class= "pl-4 pt-4" colspan="3">
<select class="block w-60 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].profile}>

{#each CloudProfile as Cloud}

<option value={Cloud.value}>{Cloud.name}</option>

{/each}

</select>
</td>
   <td></td>
    <td></td>

</tr>


<tr>
<td><p class="pl-4 pt-4 text-lg font-light text-right">Topic 1</p></td>
      <td class="pl-4 pt-5">

<div class="flex gap-4">
{#if new_proxy_edge[new_proxy_edge_index].cloud[1].profile.startsWith("hub_") || new_proxy_edge[new_proxy_edge_index].cloud[1].profile.startsWith("dps_") || new_proxy_edge[new_proxy_edge_index].cloud[1].profile.startsWith("central_")}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].type} value={0} disabled>Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48 disabled:cursor-not-allowed disabled:opacity-50" disabled>

{:else}
  <Radio bind:group={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].type} value={0} >Publish Topic</Radio>
  <input type="text" class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-green-500 w-48" bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].topic[0].name}>
{/if}  
</div>

</td>


</tr>



<tr class="pt-4">
  <td><p class="pl-4 pt-5 text-lg font-light text-right">Data Log Format</p>

  </td>


    <td class="pl-4 pt-4" colspan="5">


{#if new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat == 1}
{#if showMenu}
<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px;padding: 0;margin: 0;">
    <div id="navbar" style="display: inline-flex;border: 1px #999 solid;width: 200px;background-color: #fff;border-radius: 10px;overflow: hidden;flex-direction: column;padding: 0;margin: 0;">
        <ul style="margin: 6px;">
              <li style="display: block;list-style-type: none;width: 1fr;">
</li>

              <hr>
{#each new_proxy_edge[new_proxy_edge_index].modbusTCPSlaveTag as Slave, index}


<li style="display: block;list-style-type: none;width: 1fr;">

</li>


{/each}


{#each new_proxy_edge[new_proxy_edge_index].modbusTCPMasterTag as Master, index}


<li style="display: block;list-style-type: none;width: 1fr;">






<div role="tooltip" tabindex="-1" simple="true" class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border-gray-100 dark:border-gray-700 shadow-md z-10 outline-none divide-y divide-gray-100 dark:divide-gray-600" style="position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate(200px, {74+index*46}px);"> 

</div>
{/each}






        </ul>
    </div>
</nav>
{/if}



<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"  bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].userDefineedData} on:contextmenu|preventDefault={rightClickContextMenu} 
on:click={onPageClick}></textarea>




{:else if new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat == 0}
<textarea id="textarea-id" placeholder="Disabled" rows="12" name="message" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>



{:else if new_proxy_edge[new_proxy_edge_index].cloud[1].dataLogFormat == 2}
<textarea id="textarea-id" rows="12" class="w-full rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:placeholder-gray-400 dark:text-white  border border-gray-200 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50 p-2.5 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled bind:value={new_proxy_edge[new_proxy_edge_index].cloud[1].userDefineedData}></textarea>

{/if}


    </td>


</tr>



<tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-10"></td>
    <td class="pt-4 pl-10"><Button color="dark" pill={true} on:click={()=>New_ProxyEdge_Modal_Page2(0)}>Back</Button></td>
    <td class="pt-4 pl-1"><Button color="dark" pill={true} >Add</Button></td>


    </tr>





{/if}    


</table>


</Modal>







</TabItem>


<TabItem title="Downlink">




</TabItem>


   </Tabs>