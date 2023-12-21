<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Breadcrumb, BreadcrumbItem, Radio,Fileupload,  FloatingLabelInput, Input, Dropdown, DropdownItem, Chevron, Select, Modal, Label, Textarea} from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    openvpnConfig,
    OpenVPN_Client_Advanced_ConfigChangedLog,
    OpenVPN_Client_Conn_ConfigChangedLog,
    OpenVPN_Server_Advanced_ConfigChangedLog,
    OpenVPN_Server_Conn_ConfigChangedLog,
    OpenVPN_Basic_ConfigChangedLog,
    ChangedOpenVPNConfig
  } from "./configG.js"

    let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';
    let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';
    let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';


    let sessionid;
    let sessionBinary;
    let openvpn_data="";
    let changed_openvpn_data = {};
    let saved_changed_openvpn_data ={};
    let getDataReady=0;   

    let openvpn_basic_changedValues = [];
    let openvpn_server_conn_changedValues=[];
    let openvpn_client_conn_changedValues=[];
    let openvpn_server_advanced_changedValues=[];
    let openvpn_client_advanced_changedValues=[];


    sessionidG.subscribe(val => {
      sessionid = val;
    });

    openvpnConfig.subscribe(val => {
      openvpn_data = val;
    });

    OpenVPN_Client_Advanced_ConfigChangedLog.subscribe(val => {
        openvpn_client_advanced_changedValues = val;
    });

    OpenVPN_Client_Conn_ConfigChangedLog.subscribe(val => {
        openvpn_client_conn_changedValues= val;
    });

    OpenVPN_Server_Advanced_ConfigChangedLog.subscribe(val => {
        openvpn_server_advanced_changedValues= val;
    });


    OpenVPN_Server_Conn_ConfigChangedLog.subscribe(val => {
        openvpn_server_conn_changedValues= val;
    });

    OpenVPN_Basic_ConfigChangedLog.subscribe(val => {
        openvpn_basic_changedValues= val;
    });


    ChangedOpenVPNConfig.subscribe(val => {
      saved_changed_openvpn_data = val;
    });



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

  let openvpnED="Enable";
  let openvpnRole="Client";
  let openvpnProtocol="UDP";
  let openvpnInitial="Started";
  let openvpnAuth="X509Cert";
  let openvpnAuthS="X509Cert";




  let name="";



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


    let ClientConnModal = false;
    let ClientConnCurrentIndex;
    let NewClientConnModal=false;
    let new_client_conn_index;

    let ClientCNameModal=false;
    let ClientCNameIndex;

    let BackupCName;
    let NewClientCName=["","","","","","","","","",""];


    let ServerConn_ClientAccountPasswordModal=false;
    let ServerConn_ClientAccountPasswordIndex;
    let ServerConn_BackupClientAccountPassword={"account": "",
        "password": ""};
    let ServerConn_NewClientAccountPassword=[
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        },
        {
          "account": "",
          "password": ""
        }

    ];



    let BackupClientConn={
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    };

    let NewClientConn=[{
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    },
    {
      "name": "",
      "remote_host": "",
      "remote_port": 0,
      "remote_protocol": 0,
      "remote_ca_certificate": "serverca.crt",
      "local_certificate": "client.crt",
      "auth": 0,
      "client_account_password": {
        "account": "",
        "password": ""
      }
    }
    ];


    function  modalTriggerClientConn(index)
    {
      ClientConnModal = true;
      ClientConnCurrentIndex=index;
      BackupClientConn.name=changed_openvpn_data.config.vpn_openvpn_client_connection[index].name;
      BackupClientConn.remote_host=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_host;
      BackupClientConn.remote_port=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_port;
      BackupClientConn.remote_protocol=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_protocol;
      BackupClientConn.remote_ca_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_ca_certificate;
      BackupClientConn.local_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[index].local_certificate;
      BackupClientConn.auth=changed_openvpn_data.config.vpn_openvpn_client_connection[index].auth;
      BackupClientConn.client_account_password.account=changed_openvpn_data.config.vpn_openvpn_client_connection[index].client_account_password.account;
      BackupClientConn.client_account_password.password=changed_openvpn_data.config.vpn_openvpn_client_connection[index].client_account_password.password;
  
    }


    function NoModifyClientConn(index)
    {
      ClientConnModal = false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].name=BackupClientConn.name;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_host=BackupClientConn.remote_host;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_port=BackupClientConn.remote_port;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_protocol=BackupClientConn.remote_protocol;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_ca_certificate= BackupClientConn.remote_ca_certificate;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].local_certificate=BackupClientConn.local_certificate;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].auth=BackupClientConn.auth;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].client_account_password.account=BackupClientConn.client_account_password.account;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].client_account_password.password= BackupClientConn.client_account_password.password;
    }


    function ModifyClientConn(index)
    {
        ClientConnModal = false;
    }


    function NewClientConn_Item_Invoker(index)
    {
      NewClientConn[index].name="";
      NewClientConn[index].remote_host="";
      NewClientConn[index].remote_port="";
      NewClientConn[index].remote_protocol;
      NewClientConn[index].remote_ca_certificate="";
      NewClientConn[index].local_certificate="";
      NewClientConn[index].auth="";
      NewClientConn[index].client_account_password.account="";
      NewClientConn[index].client_account_password.password="";
      new_client_conn_index=index;
      NewClientConnModal=true;

    }

    function AddClientConn(index)
    {
      NewClientConnModal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection=[...changed_openvpn_data.config.vpn_openvpn_client_connection,NewClientConn[index]];
    }

    function modalTriggerServer_ClientAccountPassword(index)
    {

      ServerConn_ClientAccountPasswordModal=true;
      ServerConn_ClientAccountPasswordIndex=index;

      ServerConn_BackupClientAccountPassword.account=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].account;
      ServerConn_BackupClientAccountPassword.password=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].password;

    }


    function Server_NoModifyClientAccountPassword(index)
    {

      ServerConn_ClientAccountPasswordModal=false;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].account=ServerConn_BackupClientAccountPassword.account;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].password=ServerConn_BackupClientAccountPassword.password;
    }

    function Server_ModifyClientAccountPassword(index)
    {
        ServerConn_ClientAccountPasswordModal=false;
    }


    function modalTriggerClientCName(index)
    {
        ClientCNameModal=true;
        ClientCNameIndex=index;
        BackupCName=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index];
    }

    function NoModifyCName(index)
    {
      ClientCNameModal=false;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index]=BackupCName;
    }

    function ModifyCName(index)
    {
      ClientCNameModal=false;
    }

    function saveBasic()
    {
      console.log("save basic");

      if (openvpn_basic_changedValues.length!=0)
      {
        openvpn_basic_changedValues=[];
      }
    
     // compareObjects(changed_ipsec_data.config.vpn_ipsec_basic, ipsec_data.config.vpn_ipsec_basic,0,0,0,"");
     // IPsec_Basic_ConfigChangedLog.set(basic_changedValues);


     // saved_changed_ipsec_data.config.vpn_ipsec_basic=JSON.parse(JSON.stringify(changed_ipsec_data.config.vpn_ipsec_basic)); 
     // ChangedIPsecConfig.set(saved_changed_ipsec_data);
    
      console.log(openvpn_basic_changedValues);
    }


    function saveClientConn()
    {
      console.log("save client conn ");
      if (openvpn_client_conn_changedValues.length !=0)
      {
        openvpn_client_conn_changedValues=[];
      }


      console.log(changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
      console.log(openvpn_data.config.vpn_openvpn_basic.ovpnRole);
      console.log(saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);

      if (1==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole &&   0==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
      {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");

      }


    }


    async function getOpenVPNData () {
    const res = await fetch(window.location.origin+"/getOPENvpndata", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      openvpn_data =await res.json();
      console.log(openvpn_data);
      openvpnConfig.set(openvpn_data);

      changed_openvpn_data = JSON.parse(JSON.stringify(openvpn_data));
      saved_changed_openvpn_data= JSON.parse(JSON.stringify(openvpn_data));
      ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
      getDataReady=1;
    
    }
  }


    onMount(() => {

    console.log("openvpn sessionid: ");
    console.log(sessionid);


    if (sessionid && openvpn_data =="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getOpenVPNData();
    }
    else if (sessionid && openvpn_data != "")
    {
      console.log("openvpn_data is not null");
      getDataReady=1;

      if (openvpn_basic_changedValues.length==0)
      {
          changed_openvpn_data=JSON.parse(JSON.stringify(saved_changed_openvpn_data));
          changed_openvpn_data.config.vpn_openvpn_basic=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_basic)); 
      }

      if (openvpn_server_conn_changedValues.length == 0)
      {
          changed_openvpn_data=JSON.parse(JSON.stringify(saved_changed_openvpn_data));
          changed_openvpn_data.config.vpn_openvpn_server_connection=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_server_connection));       
      }

      if (openvpn_server_advanced_changedValues.length == 0)
      {
          changed_openvpn_data=JSON.parse(JSON.stringify(saved_changed_openvpn_data));
          changed_openvpn_data.config.vpn_openvpn_server_advanced=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_server_advanced));       
      }


      if (openvpn_client_conn_changedValues.length == 0)
      {
          changed_openvpn_data=JSON.parse(JSON.stringify(saved_changed_openvpn_data));
          changed_openvpn_data.config.vpn_openvpn_client_connection=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_client_connection));       
      }



      if (openvpn_client_advanced_changedValues.length == 0)
      {
          changed_openvpn_data=JSON.parse(JSON.stringify(saved_changed_openvpn_data));
          changed_openvpn_data.config.vpn_openvpn_client_advanced=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_client_advanced));       
      }

    }

  });


  </script>

  <Tabs style="underline">
  <TabItem open title="Overview">
{#if getDataReady == 1}

{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}

{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}  
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    Client
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
    List all clients' information
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

{:else if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}  
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

{/if}
    </TabItem>

      <TabItem title="Basic">
{#if getDataReady == 1}      
      <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">OpenVPN Service</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn} value={0}>Disable</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn} value={1} >Enable</Radio>

</div></td>
      </tr>


      <tr>
          <td></td>

{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}    
          <td><p class="pl-5 pt-5 text-lg font-light text-left">OpenVPN Role</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole} value={0}>Server</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole} value={1} >Client</Radio>
</div></td>
{:else}
 <td><p class="pl-5 pt-5 text-lg font-light text-left text-gray-400 dark:text-gray-500">OpenVPN Role</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole} value={0} disabled>Server</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole} value={1} disabled>Client</Radio>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveBasic}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>


      </table>
{/if}

    </TabItem>
{#if getDataReady == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}

{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}

<TabItem title="Connection">

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">VPN Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Remote Protocol</TableHeadCell>
    <TableHeadCell class="w-18">Remote CA certificate</TableHeadCell>
    <TableHeadCell class="w-18">Local certificate</TableHeadCell>
    <TableHeadCell class="w-16">Authentication</TableHeadCell>

        <TableHeadCell class="w-10"></TableHeadCell>

    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>
  <TableBody>
{#each changed_openvpn_data.config.vpn_openvpn_client_connection as clientConn, index}


    <TableBodyRow>
          <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => modalTriggerClientConn(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableHeadCell class="!p-4">
    </TableHeadCell>

                    <TableBodyCell class="w-8">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{clientConn.name}</TableBodyCell>
                    <TableBodyCell class="w-18">{clientConn.remote_host}</TableBodyCell>
                    <TableBodyCell class="w-18">{clientConn.remote_port}</TableBodyCell>
{#if clientConn.remote_protocol ==0}
                    <TableBodyCell class="w-18">UDP</TableBodyCell>
{:else if clientConn.remote_protocol == 1}
                    <TableBodyCell class="w-18">TCP</TableBodyCell>
{/if}

                    <TableBodyCell class="w-18">{clientConn.remote_ca_certificate}</TableBodyCell>
                    <TableBodyCell class="w-18">{clientConn.local_certificate}</TableBodyCell>
{#if clientConn.auth == 0}
                    <TableBodyCell class="w-18">X509 Certificate</TableBodyCell>
{:else if clientConn.auth ==1}
                    <TableBodyCell class="w-18">Account/Password</TableBodyCell>
{/if}

                    <TableBodyCell class="w-16"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>

{/each}





<TableBodyRow>
      <TableBodyCell class="!p-4 w-8">

{#if changed_openvpn_data.config.vpn_openvpn_client_connection.length < 10}    
<button on:click={() => NewClientConn_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_client_connection.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="w-8"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveClientConn}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>



<Modal bind:open={ClientConnModal} size="lg" class="w-full" permanent={true}>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyClientConn(ClientConnCurrentIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_protocol} value={0}>UDP</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_protocol} value={1}>TCP</Radio>

</div></td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote CA Certificate</p></td>
    <td class= "pl-4 pt-4">{changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_ca_certificate}</td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">{changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].local_certificate}</td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Authentication</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].auth} value={0}>X509 Certificate</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].auth} value={1}>Account/Password</Radio>

</div></td>


  </tr>

{#if changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].auth == 1}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].client_account_password.account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].client_account_password.password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



{/if}




            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyClientConn(ClientConnCurrentIndex)}>Modify</Button></td>


    </tr>

  </table>
</Modal>



<Modal bind:open={NewClientConnModal} size="lg" class="w-full" autoclose>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewClientConn[new_client_conn_index].name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewClientConn[new_client_conn_index].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewClientConn[new_client_conn_index].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={NewClientConn[new_client_conn_index].remote_protocol} value={0}>UDP</Radio>
  <Radio bind:group={NewClientConn[new_client_conn_index].remote_protocol} value={1}>TCP</Radio>

</div></td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote CA Certificate</p></td>
    <td class= "pl-4 pt-4">{NewClientConn[new_client_conn_index].remote_ca_certificate}</td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">{NewClientConn[new_client_conn_index].local_certificate}</td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Authentication</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={NewClientConn[new_client_conn_index].auth} value={0}>X509 Certificate</Radio>
  <Radio bind:group={NewClientConn[new_client_conn_index].auth} value={1}>Account/Password</Radio>

</div></td>


  </tr>

{#if NewClientConn[new_client_conn_index].auth == 1}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Account</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewClientConn[new_client_conn_index].client_account_password.account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Password</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewClientConn[new_client_conn_index].client_account_password.password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



{/if}




            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddClientConn(new_client_conn_index)}>Add</Button></td>


    </tr>

  </table>
</Modal>


    </TabItem>

{:else if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}

    <TabItem title="Connection">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol} value={0}>UDP</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol} value={1}>TCP</Radio>

</div></td>


  </tr>  

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">{changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate}</td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote CA Certificate</p></td>
    <td class= "pl-4 pt-4">{changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate}</td>


  </tr>







<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Authentication</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.auth} value={0}>X509 Certificate</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.auth} value={1}>Account/Password</Radio>

</div></td>


  </tr>

</table>
<p class="pt-10"></p>
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
{#if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==0}
    Valid Client Certificate Common Name List

{:else if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==1}
    Valid Client Account List
{/if}
    </span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">
{#if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==0}
    Certificate Common Name
{:else if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==1}
    Account
{/if}
    </TableHeadCell>
{#if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==1}
    <TableHeadCell class="w-18">Password</TableHeadCell>
{/if}

    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>
  <TableBody>

{#if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==0}
{#each changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name as clientCN, index}


    <TableBodyRow>
          <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => modalTriggerClientCName(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableHeadCell class="!p-4">
    </TableHeadCell>

                    <TableBodyCell class="w-8">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{clientCN}</TableBodyCell>


                    <TableBodyCell class="w-10"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>

{/each}




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
{/if}


{#if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==1}
{#each changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password as client_account_password, index}


    <TableBodyRow>
          <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => modalTriggerServer_ClientAccountPassword(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableHeadCell class="!p-4">
    </TableHeadCell>

                    <TableBodyCell class="w-8">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{client_account_password.account}</TableBodyCell>
                    <TableBodyCell class="w-18">{client_account_password.password}</TableBodyCell>

                    <TableBodyCell class="w-10"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>

{/each}




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
{/if}

  </TableBody>

</Table>


<Modal bind:open={ClientCNameModal} size="md" class="w-full" permanent={true}>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyCName(ClientCNameIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-64">
    Certificate Common Name
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[ClientCNameIndex]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyCName(ClientCNameIndex)}>Modify</Button></td>


    </tr>

</table>
</Modal>


<Modal bind:open={ServerConn_ClientAccountPasswordModal} size="md" class="w-full" permanent={true}>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={Server_NoModifyClientAccountPassword(ServerConn_ClientAccountPasswordIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
      Account
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[ServerConn_ClientAccountPasswordIndex].account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>
<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
      Password
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[ServerConn_ClientAccountPasswordIndex].password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={Server_ModifyClientAccountPassword(ServerConn_ClientAccountPasswordIndex)}>Modify</Button></td>


    </tr>

</table>
</Modal>


</AccordionItem>
</Accordion>

    </TabItem>
     {/if}
    {/if}
{/if}


{#if getDataReady == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}
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
{/if}


{#if getDataReady == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
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
    {/if}
</Tabs>
