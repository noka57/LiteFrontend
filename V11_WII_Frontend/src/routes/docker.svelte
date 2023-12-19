<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Breadcrumb, BreadcrumbItem, Radio,Fileupload, Input, Dropdown, DropdownItem, Chevron, Select, Modal, Toggle} from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { dockerConfig,
        DockerConfigChangedLog,
        ChangedDockerConfig
   } from "./configG.js"



    let docker_data="";
    let changed_docker_data = {};
    let saved_changed_docker_data = {};
    let getDataReady=0;
    let docker_changedValues = [];


    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

    dockerConfig.subscribe(val => {
        docker_data = val;
    });


    DockerConfigChangedLog.subscribe(val => {
      docker_changedValues = val;
    });


    ChangedDockerConfig.subscribe(val => {
        saved_changed_docker_data = val;
    });



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
                docker_changedValues=[...docker_changedValues, changedstr];
            }
        }
    }


    function SaveDockerSettings(){
        console.log("Save Docker Setting\r\n");
        if (docker_changedValues.length !=0)
        {
            docker_changedValues=[];
        }

        compareObjects(changed_docker_data, docker_data);

        DockerConfigChangedLog.set(docker_changedValues);
        saved_changed_docker_data=JSON.parse(JSON.stringify(changed_docker_data))
        ChangedDockerConfig.set(saved_changed_docker_data);
    
        console.log(docker_changedValues);

    };


  function DockerEngine_Check()
  {
    console.log("DockerEngine_Check()");
    console.log(changed_docker_data.config.service_dockerEngine.enable);
    if (changed_docker_data.config.service_dockerEngine.enable)
    {
      changed_docker_data.config.service_dockerEngine.enable=1;
    }
    else
    {
      changed_docker_data.config.service_dockerEngine.enable=0;
    }
  }


   async function getDockerData () {
    const res = await fetch(window.location.origin+"/getDockerData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      docker_data = await res.json();
      console.log(docker_data);
      dockerConfig.set(docker_data);

      changed_docker_data = JSON.parse(JSON.stringify(docker_data));
      saved_changed_docker_data = JSON.parse(JSON.stringify(docker_data))
      ChangedDockerConfig.set(saved_changed_docker_data);
      getDataReady=1;
    }
  }


  onMount(() => {

    console.log("docker sessionid: ");
    console.log(sessionid);


    if (sessionid && docker_data == "")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);

        getDockerData();
    }
    else if (sessionid && docker_data !="")
    {
        if (docker_changedValues.length == 0)
        {
            changed_docker_data = JSON.parse(JSON.stringify(docker_data));
        }
        else
        {
            changed_docker_data = JSON.parse(JSON.stringify(saved_changed_docker_data));
        }

        getDataReady=1;
    }

  });
</script>


<table>
    <tr>
    <td class="w-60"><p class="pl-10 pt-5 text-lg font-light text-right">Docker Engine</p></td><td class="pl-5 pt-5">
{#if getDataReady == 1}
    <Toggle bind:checked={changed_docker_data.config.service_dockerEngine.enable} on:change={DockerEngine_Check}></Toggle>
{/if}
    </td>
    </tr>


{#if getDataReady == 1}
{#if changed_docker_data.config.service_dockerEngine.enable}


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server IP</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_docker_data.config.service_dockerEngine.param.p2eInfo.ip} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Server Port</p></td><td class="pl-5 pt-5"><input type="number" bind:value={changed_docker_data.config.service_dockerEngine.param.p2eInfo.port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>


<tr><td class="w-60"></td>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Secret Token</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_docker_data.config.service_dockerEngine.param.p2eInfo.token} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

</tr>

{/if}

{/if}
    <tr class="pt-5">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="blue" pill={true} on:click={SaveDockerSettings}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
    </table>