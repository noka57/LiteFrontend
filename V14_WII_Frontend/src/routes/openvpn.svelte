<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Breadcrumb, BreadcrumbItem, Radio,Fileupload,  FloatingLabelInput, Input, Dropdown, DropdownItem, Chevron, Select, Modal, Label, Textarea, Tooltip, Helper} from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    openvpnConfig,
    OpenVPN_Client_Advanced_FO_ConfigChangedLog,
    OpenVPN_Client_Advanced_RNA_ConfigChangedLog,
    OpenVPN_Client_Advanced_PSK_ConfigChangedLog,
    OpenVPN_Client_Advanced_PFW_ConfigChangedLog,
    OpenVPN_Client_Conn_ConfigChangedLog,
    OpenVPN_Server_Advanced_CCD_ConfigChangedLog,
    OpenVPN_Server_Advanced_PSK_ConfigChangedLog,
    OpenVPN_Server_Advanced_PFW_ConfigChangedLog,
    OpenVPN_Server_Conn_ConfigChangedLog,
    OpenVPN_Basic_ConfigChangedLog,
    ChangedOpenVPNConfig
  } from "./configG.js"

  let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';
  let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';
  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';


  let hidden=0;

  let sessionid;
  let sessionBinary;
  let openvpn_data="";
  let changed_openvpn_data = {};
  let saved_changed_openvpn_data ={};
  let getDataReady=0;   

  let openvpn_basic_changedValues = [];
  let openvpn_server_conn_changedValues=[];
  let openvpn_client_conn_changedValues=[];
  let openvpn_server_advanced_ccd_changedValues=[];
  let openvpn_server_advanced_psk_changedValues=[];
  let openvpn_server_advanced_pfw_changedValues=[];
  let openvpn_client_advanced_pfw_changedValues=[];
  let openvpn_client_advanced_psk_changedValues=[];
  let openvpn_client_advanced_rna_changedValues=[];
  let openvpn_client_advanced_fo_changedValues=[];

  sessionidG.subscribe(val => {
    sessionid = val;
  });

  openvpnConfig.subscribe(val => {
    openvpn_data = val;
  });

  OpenVPN_Client_Advanced_PFW_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_pfw_changedValues = val;
  });

  OpenVPN_Client_Advanced_PSK_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_psk_changedValues = val;
  });

  OpenVPN_Client_Advanced_RNA_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_rna_changedValues = val;
  });

  OpenVPN_Client_Advanced_FO_ConfigChangedLog.subscribe(val => {
      openvpn_client_advanced_fo_changedValues = val;
  });

  OpenVPN_Client_Conn_ConfigChangedLog.subscribe(val => {
      openvpn_client_conn_changedValues= val;
  });

  OpenVPN_Server_Advanced_CCD_ConfigChangedLog.subscribe(val => {
      openvpn_server_advanced_ccd_changedValues= val;
  });

  OpenVPN_Server_Advanced_PSK_ConfigChangedLog.subscribe(val => {
      openvpn_server_advanced_psk_changedValues= val;
  });

  OpenVPN_Server_Advanced_PFW_ConfigChangedLog.subscribe(val => {
      openvpn_server_advanced_pfw_changedValues= val;
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

  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const cidrRegex = /^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/;
  let isValidRemotePort = true;
  let isValidRemoteSubnet= true;
  let isValidListenPort=true;

  async function HandleClientPresharedKeyChange(event) 
  {
      const ClientPresharedKey = event.target.files[0];
      if (ClientPresharedKey) 
      {
          changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName=ClientPresharedKey.name;
          if (sessionid) 
          {
              const hexArray = sessionid.match(/.{1,2}/g); 
              const byteValues = hexArray.map(hex => parseInt(hex, 16));
              sessionBinary = new Uint8Array(byteValues);
          }


          const reader = new FileReader();
              reader.onload = event => {
               changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyContent=event.target.result;
          };

          reader.readAsText(ClientPresharedKey);
      }
  }

  let ServerPresharedKeyContent;
  async function HandleServerPresharedKeyChange(event) 
  {
      const ServerPresharedKey = event.target.files[0];
      if (ServerPresharedKey) 
      {
          changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName=ServerPresharedKey.name;

          if (sessionid) 
          {
              const hexArray = sessionid.match(/.{1,2}/g); 
              const byteValues = hexArray.map(hex => parseInt(hex, 16));
              sessionBinary = new Uint8Array(byteValues);
          }


          const reader = new FileReader();
              reader.onload = event => {
              changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyContent=event.target.result;

          };

          reader.readAsText(ServerPresharedKey);
      }
  }


  let fileinput;

  function PSK_Click(){
      fileinput.click();
  }

  let ClientConnModal = false;
  let ClientConnCurrentIndex;
  let NewClientConnModal=false;
  let new_client_conn_index;

  let ClientCNameModal=false;
  let ClientCNameIndex;
  let NewClientCNameModal=false;
  let new_client_cname_index;

  let BackupCName={"enable":true, "delete": false, "cname":""};
  let NewClientCName=[{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""},{"enable":true, "delete": false, "cname":""}];


  let ServerConn_ClientAccountPasswordModal=false;
  let ServerConn_ClientAccountPasswordIndex;

  let ServerConn_NewClientAccountPasswordModal=false;
  let server_conn_new_client_account_password_index;
  let ServerConn_BackupClientAccountPassword={"enable":true, "delete":false, "account": "",
      "password": ""};
  let ServerConn_NewClientAccountPassword=[
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      },
      {
        "enable":true,
        "delete": false,
        "account": "",
        "password": ""
      }

  ];


  let BackupClientConn={
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  };

  let NewClientConn=[{
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": { 
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  },
  {
    "enable":true,
    "delete": false,
    "name": "",
    "remote_host": "",
    "remote_port": 0,
    "remote_protocol": 0,
    "remote_ca_certificate": "serverca.crt",
    "local_certificate": "client.crt",
    "auth": 0,
    "client_account_password": {
      "account": "",
      "password": ""},
    "presharedKey": {
      "keyUsage":0,
      "keyFileName": "",
      "keyContent":""
      },
    "remoteNetworkAccess": [],
    "failOver": [],
    "portForwarding":[]
  }
  ];


  let Advanced_Client_Index_Selected="none";


  let BackupServerPFW={"enable":true, "delete":false,"server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2};
  let NewServerPFW=[
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2},
    {"enable":true, "delete":false, "server_pfw_incomingProtocol": 0,"server_pfw_incomingDport": 1, "server_pfw_redirectedPort": 2}
  ];

  let New_PFW_Server_Modal=false;
  let New_PFW_Server_Index=0;

  let Modify_PFW_Server_Modal=false;
  let Modify_PFW_Server_Index=0;

  function RestoreDeleteServerPFW(index)
  {
    changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].delete=false;
  }

  function deleteServerPFW(index)
  {
    changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].delete=true;
  }

  function modalTriggerServerPortFW(index)
  {
      BackupServerPFW.server_pfw_incomingProtocol=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].server_pfw_incomingProtocol;
      BackupServerPFW.server_pfw_incomingDport=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].server_pfw_incomingDport;

      BackupServerPFW.server_pfw_redirectedPort=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].server_pfw_redirectedPort;

      BackupServerPFW.enable=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].enable;
      BackupServerPFW.delete=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].delete;


      Modify_PFW_Server_Index=index;
      Modify_PFW_Server_Modal=true;
  }

  function NoModifyServerPortFW(index)
  {
      changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].server_pfw_incomingProtocol=BackupServerPFW.server_pfw_incomingProtocol;
      changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].server_pfw_incomingDport=BackupServerPFW.server_pfw_incomingDport;

      changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].server_pfw_redirectedPort=BackupServerPFW.server_pfw_redirectedPort;

      changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].enable=BackupServerPFW.enable;
      changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[index].delete=BackupServerPFW.delete;

      Modify_PFW_Server_Modal=false;
  }

  function ModifyServerPortFW()
  {
      Modify_PFW_Server_Modal=false;   
  }

  function NewServer_PFW_Item_Invoker(index)
  {
      NewServerPFW[index].enable=true;
      NewServerPFW[index].delete=false;
      NewServerPFW[index].server_pfw_incomingProtocol=0;
      NewServerPFW[index].server_pfw_incomingDport='';
      NewServerPFW[index].server_pfw_redirectedPort='';

      New_PFW_Server_Index=index;
      New_PFW_Server_Modal=true;

  }

  function AddServer_PFW_Item(index)
  {
      New_PFW_Server_Modal=false;

      changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding=[... changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding, NewServerPFW[index]];

  }



  let Modify_CCD_Modal=false;
  let Modify_CCD_Index;



  let NewCCD_Modal=false;
  let NewCCD_index;
  let BackupCCD={"enable":true, "delete": false,"ccd_client_certificate_common_name": "",
      "ccd_client_command": ""};
  let NewCCD_Item=[
      {
      "enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""},
      {"enable":true, "delete": false,
      "ccd_client_certificate_common_name": "",
      "ccd_client_command": ""}
  ];

  let ModifyRemoteNetworkAccess_Modal;
  let ModifyRemoteNetworkAccess_Index;
  let BackupRemoteNetworkAccess={
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  };

  let NewRemoteNetworkAccess_Item=[[{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
  [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
 [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
  [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
[{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
 [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
 [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
 [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
 [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }],
 [{
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  },
  {
      "enable":true,
      "delete":false,
      "remoteSubnet": "",
      "comment": ""
  }]

  ];

  let NewRemoteNetworkAccess_index;
  let NewRemoteNetworkAccess_Modal;


  let ModifyClient_PFW_Modal=false
  let ModifyClient_PFW_Index;
  let BackupClient_PFW={
      "enable":true,
      "delete":false,
      "client_pfw_incomingProtocol":0,
      "client_pfw_incomingDport":0,
      "client_pfw_redirectedPort":0
  };

  function deleteClientPFW(index)
  {
    changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].delete=true;

  }

  function RestoreDeleteClientPFW(index)
  {
    changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].delete=false;  
  }


  function modalTriggerClientPFW(index)
  {
      BackupClient_PFW.client_pfw_incomingProtocol=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].client_pfw_incomingProtocol;
      BackupClient_PFW.client_pfw_incomingDport=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].client_pfw_incomingDport;
      BackupClient_PFW.client_pfw_redirectedPort=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].client_pfw_redirectedPort;

      BackupClient_PFW.enable=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].enable;

      BackupClient_PFW.delete=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].delete;

      ModifyClient_PFW_Index=index;
      ModifyClient_PFW_Modal=true;
  }


  function NoModifyClientPFW(index)
  {
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].client_pfw_incomingProtocol=BackupClient_PFW.client_pfw_incomingProtocol;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].client_pfw_incomingDport=BackupClient_PFW.client_pfw_incomingDport;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].client_pfw_redirectedPort=BackupClient_PFW.client_pfw_redirectedPort;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].enable=BackupClient_PFW.enable;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[index].delete=BackupClient_PFW.delete;

      ModifyClient_PFW_Modal=false;
  }

  function ModifyClientPFW()
  {
      ModifyClient_PFW_Modal=false;
  }

    let NewClientPFW_Modal=false;
    let NewClientPFW_Index;
    let NewClientPFW_Item=[
    [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
        [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
       "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
        [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
        [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
        [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
       "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
        "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
       "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
        [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
        [{
       "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
        [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
       "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
    [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
       "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }],
    [{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    },{
      "enable":true,
      "delete":false,
        "client_pfw_incomingProtocol":0,
        "client_pfw_incomingDport":0,
        "client_pfw_redirectedPort":0
    }]

    ];


    function NewClientPFW_Item_Invoker(index)
    {
      NewClientPFW_Item[Advanced_Client_Index_Selected][index].enable=true;
      NewClientPFW_Item[Advanced_Client_Index_Selected][index].delete=false;
      NewClientPFW_Item[Advanced_Client_Index_Selected][index].client_pfw_incomingProtocol=0;
      NewClientPFW_Item[Advanced_Client_Index_Selected][index].client_pfw_incomingDport='';
      NewClientPFW_Item[Advanced_Client_Index_Selected][index].client_pfw_redirectedPort='';

      NewClientPFW_Index=index;
      NewClientPFW_Modal=true;

    }

    function AddClientPFW_Item(index)
    {
      NewClientPFW_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding=[...changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding,NewClientPFW_Item[Advanced_Client_Index_Selected][index]];
    }

    function NoAddClientPFW()
    {
      NewClientPFW_Modal=false;
    }


    let ModifyFailOver_Modal;
    let ModifyFailOver_Index;
    let BackupFailOver={
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    };

    let NewFailOver_Index;
    let NewFailOver_Modal;
    let NewFailOver_Item=[[{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
       "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
 [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
  [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
       "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
   [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
  [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
  [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
  [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
  [{
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
      "enable":true,
      "delete":false,
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ]

    ];

    function deleteClientRNA(index)
    {
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].delete=true;
    }

    function RestoreDeleteClientRNA(index)
    {
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].delete=false;  
    }
    

    function modalTriggerRemoteNetworkAccess(index)
    {

      BackupRemoteNetworkAccess.remoteSubnet=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].remoteSubnet;

      BackupRemoteNetworkAccess.comment=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].comment;


      BackupRemoteNetworkAccess.enable=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].enable;

      BackupRemoteNetworkAccess.delete=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].delete;

      ModifyRemoteNetworkAccess_Index=index
      ModifyRemoteNetworkAccess_Modal=true;
      isValidRemoteSubnet=true;

    }

    function NoModifyRemoteNetworkAccess(index)
    {
      ModifyRemoteNetworkAccess_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].remoteSubnet=BackupRemoteNetworkAccess.remoteSubnet;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].comment=BackupRemoteNetworkAccess.comment;


      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].enable=BackupRemoteNetworkAccess.enable;


      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].delete=BackupRemoteNetworkAccess.delete;

    }

    function ModifyRemoteNetworkAccess(index)
    {
        isValidRemoteSubnet = cidrRegex.test(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].remoteSubnet)

        if (isValidRemoteSubnet)
        {
            ModifyRemoteNetworkAccess_Modal=false;
        }
    }

    function NewRemoteNetworkAccess_Item_Invoker(index)
    {
      NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index].enable=true;
      NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index].delete=false;
      NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index].remoteSubnet="";
      NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index].comment="";

      NewRemoteNetworkAccess_index=index;
      NewRemoteNetworkAccess_Modal=true;
      isValidRemoteSubnet=true;
    }

    function AddRemoteNetworkAccess_Item(index)
    {
        console.log("client :"+Advanced_Client_Index_Selected+ ", rna: "+ index);

        isValidRemoteSubnet = cidrRegex.test(NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index].remoteSubnet)

        if (isValidRemoteSubnet)
        {
            NewRemoteNetworkAccess_Modal=false;
            changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess=[...changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess,NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index]];
        }

    }

    function NoAddRemoteNetworkAccess(index)
    {
        NewRemoteNetworkAccess_Modal=false;
    }


    function deleteFailOver(index)
    {
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].delete=true;
    }

    function RestoreDeleteFailOver(index)
    {
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].delete=false;    
    }

    function modalTriggerFailover(index)
    {
      BackupFailOver.remote_host=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_host;

      BackupFailOver.remote_port=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port;

      BackupFailOver.remote_protocol=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_protocol;

      BackupFailOver.enable=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].enable;


      BackupFailOver.delete=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].delete;

      ModifyFailOver_Index=index;
      ModifyFailOver_Modal=true;
      isValidRemotePort=true;

    }

    function NoModifyFailover(index)
    {
      ModifyFailOver_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_host=BackupFailOver.remote_host;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port=BackupFailOver.remote_port;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_protocol=BackupFailOver.remote_protocol;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].enable=BackupFailOver.enable;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].delete=BackupFailOver.delete;

    }

    function ModifyFailover(index)
    {
        isValidRemotePort=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port != null && Number.isInteger(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port)&& changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port >= 0 && changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port <= 65535;
      
        if (isValidRemotePort)
        {
            ModifyFailOver_Modal=false;
        }

    }

    function NewFailover_Item_Invoker(index)
    {
        NewFailOver_Item[Advanced_Client_Index_Selected][index].enable=true;
        NewFailOver_Item[Advanced_Client_Index_Selected][index].delete=false;
        NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_host="";
        NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_port=0;
        NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_protocol=0;

        NewFailOver_Index=index;
        NewFailOver_Modal=true;
        isValidRemotePort=true;
    }

    function AddFailover_Item(index)
    {
        isValidRemotePort=NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_port != null && Number.isInteger(NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_port)&& NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_port >= 0 && NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_port <= 65535;

        if (isValidRemotePort)
        {
            NewFailOver_Modal=false;
            changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver=[...changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver,NewFailOver_Item[Advanced_Client_Index_Selected][index]];
        }
    }

    function NoAddFailover(index)
    {
        NewFailOver_Modal=false;
    }


    function modalTriggerCCD(index)
    {
      BackupCCD.enable=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].enable;
      BackupCCD.delete=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].delete;      
      BackupCCD.ccd_client_certificate_common_name=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].ccd_client_certificate_common_name;
      
      BackupCCD.ccd_client_command=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].ccd_client_command;
     
      Modify_CCD_Index=index;
      Modify_CCD_Modal=true;
    }

    function NoModifyCCD(index)
    {
      Modify_CCD_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].ccd_client_certificate_common_name=BackupCCD.ccd_client_certificate_common_name;
      
      changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].ccd_client_command=BackupCCD.ccd_client_command;
      changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].enable=BackupCCD.enable;
      changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].delete=BackupCCD.delete;
    }

    function ModifyCCD(index)
    {
      Modify_CCD_Modal=false;
    }

    function NewCCD_Item_Invoker(index)
    {
      NewCCD_Item[index].enable=true;
      NewCCD_Item[index].delete=false;      
      NewCCD_Item[index].ccd_client_certificate_common_name="";
      NewCCD_Item[index].ccd_client_command="";


      NewCCD_index=index;
      NewCCD_Modal=true;
    }

    function AddCCD_Item(index)
    {
      NewCCD_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd=[...changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd,NewCCD_Item[index]];
    }

    function RestoreDeleteClientConn(index)
    {
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].delete=false;
    }


    function deleteClientConn(index)
    {
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].delete=true;
    }



    function modalTriggerClientConn(index)
    {
      ClientConnModal = true;
      ClientConnCurrentIndex=index;
      BackupClientConn.enable=changed_openvpn_data.config.vpn_openvpn_client_connection[index].enable;      
      BackupClientConn.delete=changed_openvpn_data.config.vpn_openvpn_client_connection[index].delete;
      BackupClientConn.name=changed_openvpn_data.config.vpn_openvpn_client_connection[index].name;
      BackupClientConn.remote_host=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_host;
      BackupClientConn.remote_port=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_port;
      BackupClientConn.remote_protocol=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_protocol;
      BackupClientConn.remote_ca_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[index].remote_ca_certificate;
      BackupClientConn.local_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[index].local_certificate;
      BackupClientConn.auth=changed_openvpn_data.config.vpn_openvpn_client_connection[index].auth;
      BackupClientConn.client_account_password.account=changed_openvpn_data.config.vpn_openvpn_client_connection[index].client_account_password.account;
      BackupClientConn.client_account_password.password=changed_openvpn_data.config.vpn_openvpn_client_connection[index].client_account_password.password;
      isValidRemotePort=true;
  
    }


    function NoModifyClientConn(index)
    {
      ClientConnModal = false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].enable=BackupClientConn.enable;
      changed_openvpn_data.config.vpn_openvpn_client_connection[index].delete=BackupClientConn.delete;      
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
        isValidRemotePort=changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_port != null && Number.isInteger(changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_port)&& changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_port >= 0 && changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_port <= 65535;
        if (isValidRemotePort)
        {
            ClientConnModal = false;
        }
    }


    function NewClientConn_Item_Invoker(index)
    {
      NewClientConn[index].enable=true;
      NewClientConn[index].delete=false;      
      NewClientConn[index].name="";
      NewClientConn[index].remote_host="";
      NewClientConn[index].remote_port=0;
      NewClientConn[index].remote_protocol;
      NewClientConn[index].remote_ca_certificate="";
      NewClientConn[index].local_certificate="";
      NewClientConn[index].auth="";
      NewClientConn[index].client_account_password.account="";
      NewClientConn[index].client_account_password.password="";
      new_client_conn_index=index;
      NewClientConnModal=true;
      isValidRemotePort=true;

    }

    function AddClientConn(index)
    {
        isValidRemotePort=NewClientConn[index].remote_port != null && Number.isInteger(NewClientConn[index].remote_port)&& NewClientConn[index].remote_port >= 0 && NewClientConn[index].remote_port <= 65535;
      
        if (isValidRemotePort)
        {
            NewClientConnModal=false;
            changed_openvpn_data.config.vpn_openvpn_client_connection=[...changed_openvpn_data.config.vpn_openvpn_client_connection,NewClientConn[index]];
        }
    }

    function NoAddClientConn(index)
    {
        NewClientConnModal=false;
    }


    function modalTriggerServer_ClientAccountPassword(index)
    {

      ServerConn_ClientAccountPasswordModal=true;
      ServerConn_ClientAccountPasswordIndex=index;

      ServerConn_BackupClientAccountPassword.account=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].account;
      ServerConn_BackupClientAccountPassword.password=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].password;

      ServerConn_BackupClientAccountPassword.enable=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].enable;


      ServerConn_BackupClientAccountPassword.delete=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].delete;

    }


    function Server_NoModifyClientAccountPassword(index)
    {

      ServerConn_ClientAccountPasswordModal=false;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].account=ServerConn_BackupClientAccountPassword.account;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].password=ServerConn_BackupClientAccountPassword.password;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].enable=ServerConn_BackupClientAccountPassword.enable;

      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].delete=ServerConn_BackupClientAccountPassword.delete;

    }

    function Server_ModifyClientAccountPassword(index)
    {
        ServerConn_ClientAccountPasswordModal=false;
    }

    function deleteClientCName(index)
    {
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].delete=true;  
    }

    function RestoreDeleteClientCName(index)
    {
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].delete=false;    
    }


    function RestoreDeleteClientAccountPW(index)
    {
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].delete=false;
    }


    function deleteClientAccountPW(index)
    {
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[index].delete=true;  
    }


    function modalTriggerClientCName(index)
    {
        ClientCNameModal=true;
        ClientCNameIndex=index;
        BackupCName.cname=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].cname;
        BackupCName.enable=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].enable;

        BackupCName.delete=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].delete;

    }

    function NoModifyCName(index)
    {
      ClientCNameModal=false;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].cname=BackupCName.cname;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].enable=BackupCName.enable;

      changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[index].delete=BackupCName.delete;

    }

    function ModifyCName(index)
    {
      ClientCNameModal=false;
    }


    function NewClientCName_Item_Invoker(index)
    {
      NewClientCName[index].enable=true;
      NewClientCName[index].delete=false;
      NewClientCName[index].cname="";
      new_client_cname_index=index;
      NewClientCNameModal=true;
    }


    function AddClientCName(index)
    {
      NewClientCNameModal=false;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name=[...changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name,NewClientCName[index]];
    }

    function Server_NewClientAccountPassword_Item_Invoker(index)
    {
      ServerConn_NewClientAccountPassword[index].enable=true;
      ServerConn_NewClientAccountPassword[index].delete=false;
      ServerConn_NewClientAccountPassword[index].account="";
      ServerConn_NewClientAccountPassword[index].password="";

      server_conn_new_client_account_password_index=index;
      ServerConn_NewClientAccountPasswordModal=true;
    }


    function Server_AddClientAccountPassword(index)
    {
      ServerConn_NewClientAccountPasswordModal=false;
      changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password=[...changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password, ServerConn_NewClientAccountPassword[index]];

    }
  
    function compareBasicObjects(obj1, obj2) {
        for (const key in obj1) 
        {
            if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
            {
                compareObjects(obj1[key], obj2[key]);
            } 
            else if (obj1[key] != obj2[key]) 
            {
                let changedstr="Value of "+key+" has changed to "+obj1[key];
                openvpn_basic_changedValues=[...openvpn_basic_changedValues, changedstr];
            }
        }
    }



    function saveBasic()
    {
      console.log("save basic");

      if (openvpn_basic_changedValues.length!=0)
      {
        openvpn_basic_changedValues=[];
      }

      compareBasicObjects(changed_openvpn_data.config.vpn_openvpn_basic, openvpn_data.config.vpn_openvpn_basic);
      OpenVPN_Basic_ConfigChangedLog.set(openvpn_basic_changedValues);
      saved_changed_openvpn_data.config.vpn_openvpn_basic=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_basic)); 
      ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
      console.log(openvpn_basic_changedValues);
    }

    function saveClientPSK()
    {
        console.log("save client psk");


        if (Advanced_Client_Index_Selected != "none")
        {

          if (1==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole && 0==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
          {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");

          }
          else
          {
            console.log("start to save client psk");

            if (Advanced_Client_Index_Selected < openvpn_data.config.vpn_openvpn_client_connection.length)
            {
                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage != openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage)
                {
                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyUsage has changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage;

                    openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr];
                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage;

                }

                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName != openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName)
                {
                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyFileName has changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName;

                    openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr];
                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName;

                }


                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyContent != openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyContent)
                {
                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyContent has changed."

                    openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr];
                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyContent=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyContent;

                }

            }
            else
            {
                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyUsage has changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage;

                openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage;


                let changedstr2=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyFileName has changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName;

                openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr2];
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName;


                let changedstr3=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyContent has changed.";

                openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr3];
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyContent=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyContent;
            }
        
            

            ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
            OpenVPN_Client_Advanced_PSK_ConfigChangedLog.set(openvpn_client_advanced_psk_changedValues);
            console.log(openvpn_client_advanced_psk_changedValues);
          }
        }
    }

    function saveClientRNA()
    {
        console.log("save client rna");


        if (Advanced_Client_Index_Selected != "none")
        {

          let tempForDelete=[];

          if (1==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole && 0==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
          {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");
          }
          else
          {
            console.log("start to save client rna");

            for (let i = 0; i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length; i++)
            {
              if (!changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete)
              {
                tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i]]
              }
            }

            if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length <
            changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length)
            {
               let addedCount=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length-saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;

               for (let k=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length; k < changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length; k++)
               {
                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[k].delete)
                {
                  addedCount--;
                }
               }

              if (addedCount > 0)
              {
                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " add "+addedCount+" item(s) to Remote Network Access";
            
                openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];
              }

              for (let i=0;i<saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;i++)
              {
                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet;

                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: remote subnet is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet;

                      openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];
       

                  }

                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment;
                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: comment is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment;

                      openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

                  }

                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable;
                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: enable is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable;

                      openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

                  }

                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete;
                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: delete is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete;

                      openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

                  }

              }

              for (let i=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;i++)
              {
                  let new_rna=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i]));

                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess=[...saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess, new_rna];
              }
            }
            else if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length ==
            changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length)
            {

              for (let i=0;i<saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;i++)
              {
                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet)
                {
                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet;

                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: remote subnet is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].remoteSubnet;

                    openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];
     

                }

                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment)
                {
                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment;
                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: comment is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].comment;

                    openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

                }


                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable)
                {
                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable;
                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: enable is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].enable;

                    openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

                }


                if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete)
                {
                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete;
                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Remote Network Access List No." + (i+1) +" has changed: delete is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i].delete;

                    openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

                }

              }
            }
            else
            {
              let deleteCount=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length-changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;


              let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " delete "+deleteCount+" item(s) from Remote Network Access";
            
              openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

            }


            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess=JSON.parse(JSON.stringify(tempForDelete));
            changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess=JSON.parse(JSON.stringify(tempForDelete));



            ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
            OpenVPN_Client_Advanced_RNA_ConfigChangedLog.set(openvpn_client_advanced_rna_changedValues);
            console.log(openvpn_client_advanced_rna_changedValues);
          }
        }
    }


    function saveClientFO()
    {
      console.log("save client fo");


      if (Advanced_Client_Index_Selected != "none")
      {

        if (1==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole && 0==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
        {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");

        }
        else
        {
          console.log("start to save client fo");


          let tempForDelete=[];
          for (let i = 0; i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length; i++)
          {
            if (!changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete)
            {
              tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i]]
            }

          }


          if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length < changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length)
          {
            let addedCount=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length-saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;

            for (let k = saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length; k < changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length; k++)
            {
              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[k].delete)
              {
                addedCount--;
              }
            }

            if (addedCount > 0)
            {
              let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " add "+addedCount+" item(s) to Failover";
            
              openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
            }

              for (let i=0;i<saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;i++)
              {
                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host;

                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: remote host is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host;

                      openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
                  }

                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port;

                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: remote port is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port;

                      openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
                  }

                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol;

                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: remote protocol is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol;

                      openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
                  }


                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable;

                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: enable is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable;

                      openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
                  }

                  if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete)
                  {
                      saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete;

                      let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: delete is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete;

                      openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
                  }


              }

              for (let i=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;i++)
              {
                  let new_fo=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i]));

                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver=[...saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver, new_fo];
              }
          }
          else if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length == changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length)
          {
            for (let i=0;i<saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;i++)
            {
              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host)
              {
                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host;

                  let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: remote host is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_host;

                  openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port)
              {
                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port;

                  let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: remote port is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port;

                  openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
   
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol)
              {
                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol;

                  let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: remote protocol is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol;

                  openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
  
              }
              
              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable)
              {
                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable;

                  let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: enable is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].enable;

                  openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
  
              }


              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete)
              {
                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete;

                  let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: delete is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].delete;

                  openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
              }

            }
          }
          else
          {

              let deletedCount=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length-changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;


              let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " delete "+deletedCount+" item(s) to Failover";
            
              openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
          }

          saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver=JSON.parse(JSON.stringify(tempForDelete));
          changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver=JSON.parse(JSON.stringify(tempForDelete));


          ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
          OpenVPN_Client_Advanced_FO_ConfigChangedLog.set(openvpn_client_advanced_fo_changedValues);
          console.log(openvpn_client_advanced_fo_changedValues);
        }
      }
    }


    function saveClientPFW()
    {

      console.log("save client pfw");
      if (Advanced_Client_Index_Selected != "none")
      {
        if (1==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole && 0==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
        {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");

        }
        else
        {

          let tempForDelete=[];

          for (let i = 0; i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length; i++)
          {
            if (!changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete)
            {
              tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i]]
            }

          }


          if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length < changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length)
          {

            let addedCount=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length-saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length;

            for (let k=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length; k < changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length; k++)
            {
              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[k].delete)
              {
                addedCount--;
              }
            }

            if (addedCount > 0)
            {
              let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " add "+addedCount+" item(s) to Port Forwarding";
                
              openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
            }

            for (let i=0;i<saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length;i++)
            {
              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: Incoming Protocol is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: Incoming Destination Port is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: Redirected Port is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: enable is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }


              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: delete is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }


            }

            for (let i=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length;i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length;i++)
            {
                let new_pfw=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i]));

                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding=[...saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding, new_pfw];
            }
          }
          else if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length == changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length)
          {
            for (let i=0;i<saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length;i++)
            {
              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: Incoming Protocol is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingProtocol;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: Incoming Destination Port is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_incomingDport;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: Redirected Port is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].client_pfw_redirectedPort;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: enable is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].enable;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

              if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete)
              {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete;

                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Port Forwarding List No." + (i+1) +" has changed: delete is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[i].delete;

                openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
              }

            }
          }
          else
          {
            let deletedCount=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length-changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length;

            let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " delete "+deletedCount+" item(s) to Port Forwarding";
                
            openvpn_client_advanced_pfw_changedValues=[...openvpn_client_advanced_pfw_changedValues, changedstr];
          }


          saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding=JSON.parse(JSON.stringify(tempForDelete));
          changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding=JSON.parse(JSON.stringify(tempForDelete));

          ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
          OpenVPN_Client_Advanced_PFW_ConfigChangedLog.set(openvpn_client_advanced_pfw_changedValues);
          console.log(openvpn_client_advanced_pfw_changedValues);

        }
      
      }
    }


    function saveClientConn()
    {
      console.log("save client conn ");
      if (openvpn_client_conn_changedValues.length !=0)
      {
        openvpn_client_conn_changedValues=[];
      }


     // console.log(changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
    //  console.log(openvpn_data.config.vpn_openvpn_basic.ovpnRole);
    //  console.log(saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);

      let tempForDelete=[];

      if (1==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole &&  0==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
      {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");

      }
      else
      {
        console.log("start to save clientConn");


        if (changed_openvpn_data.config.vpn_openvpn_client_connection.length > openvpn_data.config.vpn_openvpn_client_connection.length) 
        {
          let addedCount=changed_openvpn_data.config.vpn_openvpn_client_connection.length-openvpn_data.config.vpn_openvpn_client_connection.length;

          for (let k=openvpn_data.config.vpn_openvpn_client_connection.length; k < changed_openvpn_data.config.vpn_openvpn_client_connection.length; k++)
          {
            if (changed_openvpn_data.config.vpn_openvpn_client_connection[k].delete)
            {
              addedCount--;
            }
          }

          if (addedCount > 0)
          {
            let changedstr="Add "+addedCount+" item(s) to Client Connection";
          
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
          }
        }


        if (changed_openvpn_data.config.vpn_openvpn_client_connection.length < openvpn_data.config.vpn_openvpn_client_connection.length) 
        {
          let deletedCount=openvpn_data.config.vpn_openvpn_client_connection.length-changed_openvpn_data.config.vpn_openvpn_client_connection.length;
          let changedstr="Delete "+deletedCount+" item(s) to Client Connection";
          
          openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];

        }

        for (let i = 0; i< changed_openvpn_data.config.vpn_openvpn_client_connection.length; i++)
        {
          if (!changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete)
          {
            tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_client_connection[i]]
          }

        }


        for(let i=0;i<Math.min(changed_openvpn_data.config.vpn_openvpn_client_connection.length,
          openvpn_data.config.vpn_openvpn_client_connection.length);i++)
        {
          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].name != openvpn_data.config.vpn_openvpn_client_connection[i].name)
          {
            let changedstr="Client No. "+(i+1)+" VPN Name is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].name;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].name=changed_openvpn_data.config.vpn_openvpn_client_connection[i].name;
          }

          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host != openvpn_data.config.vpn_openvpn_client_connection[i].remote_host)
          {
            let changedstr="Client No. "+(i+1)+" Remote Host is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host;
          }

          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port != openvpn_data.config.vpn_openvpn_client_connection[i].remote_port)
          {
            let changedstr="Client No. "+(i+1)+" Remote Port is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port;
          }

          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol != openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol)
          {
            let changedstr="Client No. "+(i+1)+" Remote Protocol is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol;
          }

          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate != openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate)
          {
            let changedstr="Client No. "+(i+1)+" Remote CA Certificate is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate;
          }


          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate != openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate)
          {
            let changedstr="Client No. "+(i+1)+" Local Certificate is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate;
          }



          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable != openvpn_data.config.vpn_openvpn_client_connection[i].enable)
          {
            let changedstr="Client No. "+(i+1)+" enable is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable=changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable;
          }


          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete != openvpn_data.config.vpn_openvpn_client_connection[i].delete)
          {
            let changedstr="Client No. "+(i+1)+" delete is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete=changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete;
          }

          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth != openvpn_data.config.vpn_openvpn_client_connection[i].auth)
          {
            let changedstr="Client No. "+(i+1)+" Authentication is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth;
            openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth=changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth;
          }

          if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth == 1)
          {
            if (openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account!=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account)
            {
              let changedstr="Client No. "+(i+1)+" Client Account is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account;

              openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
              
              saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account;
            }


            if (openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password!=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password)
            {
              let changedstr="Client No. "+(i+1)+" Client Password is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password;

              openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];
              
              saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password;
            }
          
          }
        }


        for (let i=openvpn_data.config.vpn_openvpn_client_connection.length;i <saved_changed_openvpn_data.config.vpn_openvpn_client_connection.length; i++)
        {    

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].name != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].name)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].name=changed_openvpn_data.config.vpn_openvpn_client_connection[i].name;
            }

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host;
            }

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port;
            }

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol;
            }

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate;
            }


            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate=changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate;
            }


            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable=changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable;
            }

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete=changed_openvpn_data.config.vpn_openvpn_client_connection[i].delete;
            }

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth)
            {
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth=changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth;
            }

            if (changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth == 1)
            {
                if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account!=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account)
                {
                     
                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account;
                }


                if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password!=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password)
                {
                 
                  saved_changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password=changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password;
                }
          
            }

        }


        for (let i=saved_changed_openvpn_data.config.vpn_openvpn_client_connection.length;i <changed_openvpn_data.config.vpn_openvpn_client_connection.length; i++)
        { 
          let new_item=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_client_connection[i]))
          saved_changed_openvpn_data.config.vpn_openvpn_client_connection=[...saved_changed_openvpn_data.config.vpn_openvpn_client_connection, new_item];
        }



        saved_changed_openvpn_data.config.vpn_openvpn_client_connection=JSON.parse(JSON.stringify(tempForDelete));
        changed_openvpn_data.config.vpn_openvpn_client_connection=JSON.parse(JSON.stringify(tempForDelete));


        ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
        OpenVPN_Client_Conn_ConfigChangedLog.set(openvpn_client_conn_changedValues);
        console.log(openvpn_client_conn_changedValues);

      }


    }

  function saveServerConn()
  {
      console.log("save server conn");
      isValidListenPort=changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port != null && Number.isInteger(changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port)&& changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port >= 0 && changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port <= 65535;
    
      if (isValidListenPort)
      {

        if (openvpn_server_conn_changedValues.length !=0)
        {
          openvpn_server_conn_changedValues=[];
        }


        console.log(changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
        console.log(saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);

        if (0==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole &&   1==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
        {

              console.log("Please save basic page first.");
              alert("Please save basic page first.");

        }
        else
        {
          console.log("start to save serverConn");
          if (changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port != openvpn_data.config.vpn_openvpn_server_connection.listen_port)
          {
            let changedstr="listen port is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port;
            openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];
            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port=changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port;

          }

          if (changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol != openvpn_data.config.vpn_openvpn_server_connection.local_protocol)
          {
            let changedstr="local protocol is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol;
            openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol=changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol;

          }

          if (changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate != openvpn_data.config.vpn_openvpn_server_connection.local_certificate)
          {
            let changedstr="local certificate is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate;
            openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate=changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate;

          }

          if (changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate != openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate)
          {
            let changedstr="remote ca certificate is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate;
            openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate=changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate;

          }


          if (changed_openvpn_data.config.vpn_openvpn_server_connection.auth != openvpn_data.config.vpn_openvpn_server_connection.auth)
          {
            let changedstr="client authentication is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.auth;
            openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.auth=changed_openvpn_data.config.vpn_openvpn_server_connection.auth;

          }

          if (changed_openvpn_data.config.vpn_openvpn_server_connection.auth==0)
          {

            let tempForDelete=[];

            for (let i=0; i < changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length;i++)
            {
              if (!changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].delete)
              {
                tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i]]
              }
            }

            for(let i=0;i<Math.min(changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length,
            openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length);i++)
            {
              if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].cname !=
              openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].cname)
              {
               let changedstr="Client Certificate Common Name List No. "+(i+1)+" Name is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].cname;

                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].cname=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].cname;

              }

              if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].enable !=
              openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].enable)
              {
               let changedstr="Client Certificate Common Name List No. "+(i+1)+" Enable is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].enable;

                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].enable=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].enable;

              }


              if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].delete !=
              openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].delete)
              {
               let changedstr="Client Certificate Common Name List No. "+(i+1)+" delete is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].delete;

                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].delete=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i].delete;

              }
              
            }

            if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length > openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length) 
            {
              let addedCount=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length-openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length;

              for (let k=openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length;k < changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length; k++)
              {
                if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[k].delete)
                {
                  addedCount--;
                }
              }

              if (addedCount > 0)
              {
                let changedstr="Add "+addedCount+" item(s) to Client Certificate Common Name";
                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];
              }

              //saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name))

            }


            if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length < openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length) 
            {
              let deletedCount=openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length-changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length;
              let changedstr="Delete "+deletedCount+" item(s) to Client Certificate Common Name";
              openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];
            }


            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name=JSON.parse(JSON.stringify(tempForDelete));
            changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name=JSON.parse(JSON.stringify(tempForDelete));

          }
          else if (changed_openvpn_data.config.vpn_openvpn_server_connection.auth==1)
          {

            let tempForDelete=[];

            for (let i=0; i < changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length;i++)
            {
              if (!changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].delete)
              {
                tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i]]
              }
            }

            for(let i=0;i<Math.min(changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length,
            openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length);i++)
            {

              if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].enable !=
              openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].enable)
              {
               let changedstr="Client Account/Password List No. "+(i+1)+" item is changed: Enable has changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].enable;

                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].enable=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].enable;
              }

              if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].delete !=
              openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].delete)
              {
               let changedstr="Client Account/Password List No. "+(i+1)+" item is changed: delete has changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].delete;

                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].enable=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].enable;
              }


              if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].account !=
              openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].account)
              {
               let changedstr="Client Account/Password List No. "+(i+1)+" item is changed: Account has changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].account;

                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].account=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].account;
              }


              if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].password !=
              openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].password)
              {
               let changedstr="Client Account/Password List No. "+(i+1)+" item is changed: Password has changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].password;

                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].password=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[i].password;
              }
            }

            if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length > openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length) 
            {
              let addedCount=changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length-openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length;

              for (let k= openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length; k < changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length; k++)
              {
                if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password[k].delete)
                {
                  addedCount--;
                }
              }

              if (addedCount > 0)
              {
                let changedstr="Add "+addedCount+" item(s) to Client Account/Password";
                openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];
              }

              //saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password));

            }

            if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length < openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length) 
            {
              let deletedCount=openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length-changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length;
              let changedstr="Delete "+deletedCount+" item(s) to Client Account/Password";
              openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

            }

            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password=JSON.parse(JSON.stringify(tempForDelete));
            changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password=JSON.parse(JSON.stringify(tempForDelete));

          }

          ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
          OpenVPN_Server_Conn_ConfigChangedLog.set(openvpn_server_conn_changedValues);        
          console.log(openvpn_server_conn_changedValues);
        }

      }
  }

  function deleteCCD(index)
  {
    changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].delete=true;
  }

  function RestoreDeleteCCD(index)
  {
    changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[index].delete=false;
  }



  function saveServerCCD()
  {  
    console.log("save server ccd");

    if (openvpn_server_advanced_ccd_changedValues.length !=0)
    {
      openvpn_server_advanced_ccd_changedValues=[];
    }


    console.log(changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
    console.log(saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);

    if (0==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole &&   1==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
    {
        console.log("Please save basic page first.");
        alert("Please save basic page first.");
    }
    else
    {
      console.log("start to save CCD");

      console.log(changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length);
      console.log(saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length);
      console.log(openvpn_data.config.vpn_openvpn_server_advanced.ccd.length);

      if (changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length > openvpn_data.config.vpn_openvpn_server_advanced.ccd.length) 
      {
        let addedCount=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length-openvpn_data.config.vpn_openvpn_server_advanced.ccd.length;

        for (let k=openvpn_data.config.vpn_openvpn_server_advanced.ccd.length; k < changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length; k++)
        {
          if (changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[k].delete)
          {
            addedCount--;
          }
        }


        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to CCD";
          openvpn_server_advanced_ccd_changedValues=[...openvpn_server_advanced_ccd_changedValues, changedstr];
        }
      }


      if (changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length < openvpn_data.config.vpn_openvpn_server_advanced.ccd.length) 
      {
        let deletedCount=openvpn_data.config.vpn_openvpn_server_advanced.ccd.length-changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length;
        let changedstr="Delete "+deletedCount+" item(s) to CCD";
        
        openvpn_server_advanced_ccd_changedValues=[...openvpn_server_advanced_ccd_changedValues, changedstr];
      }


      let tempForDelete=[];
      for (let i = 0; i< changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length; i++)
      {
        if (!changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i]]
        }

      }


      for(let i=0;i<Math.min(changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length,
        openvpn_data.config.vpn_openvpn_server_advanced.ccd.length);i++)
      {
        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_certificate_common_name !=
        openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_certificate_common_name)
        {
           let changedstr="CCD List No. "+(i+1)+" item is changed: Client Certificate Common Name has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_certificate_common_name;

          openvpn_server_advanced_ccd_changedValues=[...openvpn_server_advanced_ccd_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_certificate_common_name=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_certificate_common_name;

        }


        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_command !=
          openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_command)
        {
           let changedstr="CCD List No. "+(i+1)+" item is changed: Command has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_command;

          openvpn_server_advanced_ccd_changedValues=[...openvpn_server_advanced_ccd_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_command=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].ccd_client_command;

        }


        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].enable !=
          openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].enable)
        {
           let changedstr="CCD List No. "+(i+1)+" item is changed: enable has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].enable;

          openvpn_server_advanced_ccd_changedValues=[...openvpn_server_advanced_ccd_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].enable=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].enable;

        }

        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].delete !=
          openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].delete)
        {
           let changedstr="CCD List No. "+(i+1)+" item is changed: delete has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].delete;

          openvpn_server_advanced_ccd_changedValues=[...openvpn_server_advanced_ccd_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].delete=changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[i].delete;

        }

      }


      saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd=JSON.parse(JSON.stringify(tempForDelete));
      changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd=JSON.parse(JSON.stringify(tempForDelete));



    //  saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd))

      ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
      OpenVPN_Server_Advanced_CCD_ConfigChangedLog.set(openvpn_server_advanced_ccd_changedValues);
      console.log(openvpn_server_advanced_ccd_changedValues);

    }
  }

  function saveServerPSK()
  {

    console.log("save server psk");

    if (openvpn_server_advanced_psk_changedValues.length !=0)
    {
      openvpn_server_advanced_psk_changedValues=[];
    }


    console.log(changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
    console.log(saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);

    if (0==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole &&   1==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
    {

          console.log("Please save basic page first.");
          alert("Please save basic page first.");

    }
    else
    {
      console.log("start to save serverPSK");
      if (changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage != openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage)
      {
        let changedstr="PSK KeyUsage has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage;

        openvpn_server_advanced_psk_changedValues=[...openvpn_server_advanced_psk_changedValues, changedstr];
        saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage=changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage;

      }

      if (changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName != openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName)
      {
        let changedstr="PSK KeyFileName has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName;

        openvpn_server_advanced_psk_changedValues=[...openvpn_server_advanced_psk_changedValues, changedstr];
        saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName=changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName;

      }

      if (changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyContent !=
      openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyContent)
      {
          let changedstr="PSK KeyFileContent has changed";

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyContent=changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyContent;
      }
      ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
      OpenVPN_Server_Advanced_PSK_ConfigChangedLog.set(openvpn_server_advanced_psk_changedValues);
      console.log(openvpn_server_advanced_psk_changedValues);
    }
  }

  function saveServerPFW()
  {
    console.log("save server pfw");

    if (openvpn_server_advanced_pfw_changedValues.length !=0)
    {
      openvpn_server_advanced_pfw_changedValues=[];
    }


    console.log(changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
    console.log(saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
    let tempForDelete=[];
    if (0==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole && 1==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
    {
        console.log("Please save basic page first.");
        alert("Please save basic page first.");
    }
    else
    {

     // console.log(changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length);
     // console.log(saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length);
     // console.log(openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length);

      if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length > openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length) 
      {
        let addedCount=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length-openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length;

        for (let k=openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length; k < changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length; k++)
        {
          if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[k].delete)
          {
            addedCount--;
          }
        }

        if (addedCount > 0)
        {
          let changedstr="Add "+addedCount+" item(s) to PFW";
        
          openvpn_server_advanced_pfw_changedValues=[...openvpn_server_advanced_pfw_changedValues, changedstr];
        }
      }


      if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length < openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length) 
      {
        let deletedCount=openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length-changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length;
        let changedstr="Delete "+deletedCount+" item(s) to PFW";
        
        openvpn_server_advanced_pfw_changedValues=[...openvpn_server_advanced_pfw_changedValues, changedstr];
      }



      for (let i = 0; i< changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length; i++)
      {
        if (!changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].delete)
        {
          tempForDelete=[...tempForDelete, changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i]]
        }

      }



      for(let i=0;i<Math.min(changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length,
        openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length);i++)
      {
        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingProtocol !=
        openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingProtocol)
        {
           let changedstr="PortForwarding List No. "+(i+1)+" item is changed: Incoming Protocol has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingProtocol;

          openvpn_server_advanced_pfw_changedValues=[...openvpn_server_advanced_pfw_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingProtocol=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingProtocol;

        }


        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingDport !=
          openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingDport)
        {
           let changedstr="PortForwarding List No. "+(i+1)+" item is changed: Incoming Destination Port has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingDport;

          openvpn_server_advanced_pfw_changedValues=[...openvpn_server_advanced_pfw_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingDport=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_incomingDport;

        }


        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_redirectedPort !=
          openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_redirectedPort)
        {
           let changedstr="PortForwarding List No. "+(i+1)+" item is changed: Redirected Port has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_redirectedPort;

          openvpn_server_advanced_pfw_changedValues=[...openvpn_server_advanced_pfw_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_redirectedPort=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].server_pfw_redirectedPort;

        }

        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].enable !=
          openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].enable)
        {
           let changedstr="PortForwarding List No. "+(i+1)+" item is changed: enable has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].enable;

          openvpn_server_advanced_pfw_changedValues=[...openvpn_server_advanced_pfw_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].enable=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].enable;

        }

        if (changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].delete !=
          openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].delete)
        {
           let changedstr="PortForwarding List No. "+(i+1)+" item is changed: delete has changed to "+changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].delete;

          openvpn_server_advanced_pfw_changedValues=[...openvpn_server_advanced_pfw_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].delete=changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[i].delete;

        }

      }
    }

   // saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding))

    saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding=JSON.parse(JSON.stringify(tempForDelete));
    changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding=JSON.parse(JSON.stringify(tempForDelete));

    ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
    OpenVPN_Server_Advanced_PFW_ConfigChangedLog.set(openvpn_server_advanced_pfw_changedValues);
    console.log(openvpn_server_advanced_pfw_changedValues);
  }


  let getRemoteCertReady=0;
  let remoteCertList=[];
  async function getRemoteCertificate() {
    const res = await fetch(window.location.origin+"/GetRemotecert", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      remoteCertList =await res.json();
      console.log(remoteCertList);
      getRemoteCertReady=1;
    
    }
  }
  let getCaCertReady=0;
  let caCertList=[];

  async function getCACertificate() {
    const res = await fetch(window.location.origin+"/getCaCERt", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      caCertList =await res.json();
      console.log(caCertList);
      getCaCertReady=1;
    
    }
  }

  let getMachineCertReady=0;
  let machineCertList=[];

  async function getMachineCertificate() {
    const res = await fetch(window.location.origin+"/getMachinECert", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      machineCertList =await res.json();
      console.log(machineCertList);
      getMachineCertReady=1;
    
    }
  }

  let status_data="";
  async function getOpenVPNServerStatus() {
    const res = await fetch(window.location.origin+"/GetOpenVpnServerstatus", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

        status_data =await res.text();
        console.log(status_data);
    }
  }

  async function getOpenVPNClientStatus() {
    const res = await fetch(window.location.origin+"/GetOpenVpnclientstatus", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {

        status_data =await res.text();
        console.log(status_data);

        status_data = status_data.replace(/======(\d+)/g, (_, match) => {

            const index = parseInt(match, 10) - 1;
            if (index >= 0 && index < openvpn_data.config.vpn_openvpn_client_connection.length) 
            {
        
                return openvpn_data.config.vpn_openvpn_client_connection[index].name;
            } 
            else 
            {
                console.log("error index: " + index);
                // If index is out of bounds, return the original match
                return _;
            }
        });
 
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
    
      if (openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0)
      {
        getOpenVPNServerStatus();
      }
      else if (openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1)
      {
        getOpenVPNClientStatus();
      }
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
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
    }
    else if (sessionid && openvpn_data != "")
    {
      console.log("openvpn_data is not null");
      getDataReady=1;
      const hexArray = sessionid.match(/.{1,2}/g); 
      const byteValues = hexArray.map(hex => parseInt(hex, 16));
      sessionBinary = new Uint8Array(byteValues);

      getMachineCertificate();
      getCACertificate();
      getRemoteCertificate();
      if (openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0)
      {
        getOpenVPNServerStatus();
      }
      else if (openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1)
      {
        getOpenVPNClientStatus();
      }

      changed_openvpn_data=JSON.parse(JSON.stringify(saved_changed_openvpn_data));
      if (openvpn_basic_changedValues.length==0)
      {
          changed_openvpn_data.config.vpn_openvpn_basic=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_basic)); 
      }

      if (openvpn_server_conn_changedValues.length == 0)
      {
          changed_openvpn_data.config.vpn_openvpn_server_connection=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_server_connection));       
      }

      if (openvpn_server_advanced_ccd_changedValues.length == 0)
      {
          changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_server_advanced.ccd));       
      }

      if (openvpn_server_advanced_psk_changedValues.length == 0)
      {
          changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey=JSON.parse(JSON.stringify(openvpn_data.config.vpn_openvpn_server_advanced.presharedKey));       
      }


      if (openvpn_client_conn_changedValues.length == 0)
      {
        for(let i=0;i<openvpn_data.config.vpn_openvpn_client_connection.length;i++)
        {
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].enable=openvpn_data.config.vpn_openvpn_client_connection[i].enable;
           
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].name=openvpn_data.config.vpn_openvpn_client_connection[i].name;
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_host=openvpn_data.config.vpn_openvpn_client_connection[i].remote_host; 
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_port=openvpn_data.config.vpn_openvpn_client_connection[i].remote_port;
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol=openvpn_data.config.vpn_openvpn_client_connection[i].remote_protocol;
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate=openvpn_data.config.vpn_openvpn_client_connection[i].remote_ca_certificate;
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate=openvpn_data.config.vpn_openvpn_client_connection[i].local_certificate;
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].auth=openvpn_data.config.vpn_openvpn_client_connection[i].auth;
          

            changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account=openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.account;

            changed_openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password=openvpn_data.config.vpn_openvpn_client_connection[i].client_account_password.password;
        
        }      
      }

      if (openvpn_client_advanced_psk_changedValues.length == 0)
      {
        for(let i=0;i<openvpn_data.config.vpn_openvpn_client_connection.length;i++)
        {
          changed_openvpn_data.config.vpn_openvpn_client_connection[i].presharedKey.keyUsage=openvpn_data.config.vpn_openvpn_client_connection[i].presharedKey.keyUsage;

          changed_openvpn_data.config.vpn_openvpn_client_connection[i].presharedKey.keyFileName=openvpn_data.config.vpn_openvpn_client_connection[i].presharedKey.keyFileName;        


          changed_openvpn_data.config.vpn_openvpn_client_connection[i].presharedKey.keyContent=openvpn_data.config.vpn_openvpn_client_connection[i].presharedKey.keyContent; 

        }

      }
    
      if (openvpn_client_advanced_rna_changedValues.length == 0)
      {
        for(let i=0;i<openvpn_data.config.vpn_openvpn_client_connection.length;i++)
        {
          for(let j=0;j< openvpn_data.config.vpn_openvpn_client_connection[i].remoteNetworkAccess.length;j++)
          {
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].remoteNetworkAccess[j].remoteSubnet=openvpn_data.config.vpn_openvpn_client_connection[i].remoteNetworkAccess[j].remoteSubnet;

            changed_openvpn_data.config.vpn_openvpn_client_connection[i].remoteNetworkAccess[j].comment=openvpn_data.config.vpn_openvpn_client_connection[i].remoteNetworkAccess[j].comment;


            changed_openvpn_data.config.vpn_openvpn_client_connection[i].remoteNetworkAccess[j].enable=openvpn_data.config.vpn_openvpn_client_connection[i].remoteNetworkAccess[j].enable;

          }        

        }
      }
    
      if (openvpn_client_advanced_fo_changedValues.length == 0)
      {
        for(let i=0;i<openvpn_data.config.vpn_openvpn_client_connection.length;i++)
        {
          for(let j=0;j< openvpn_data.config.vpn_openvpn_client_connection[i].failOver.length;j++)
          {
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].remote_host=openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].remote_host;

            changed_openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].remote_port=openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].remote_port;

            changed_openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].remote_protocol=openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].remote_protocol;


            changed_openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].enable=openvpn_data.config.vpn_openvpn_client_connection[i].failOver[j].enable;

          }        

        }
      }

    }

  });


</script>

<style>
 
.strikeout {
  text-decoration: line-through;
  color: #999; /* Adjust color for deleted text */
  position: relative;
}

.strikeout:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-bottom: 1px solid #111; /* Adjust strikeout line color */
  transform: translateY(-50%);
}

.strikeout:after {
  content: "\00B7"; /* Unicode dot character */
  font-size: 1px; /* Adjust dot size */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

</style>


  <Tabs style="underline">
  <TabItem open title="Overview">
{#if getDataReady == 1}

{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}
<Table class="text-gray-900">

  <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
{#if openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0} 
    Server
{:else if openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
    Client
{/if}
   </caption>

{#if openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}
<pre style="white-space: pre-wrap;">{status_data}</pre>
{:else if openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
<pre style="white-space: pre-wrap;">{status_data}</pre>

{/if}


</Table>

{:else}
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    OpenVPN is disabled now. Please go to basic page to enable it.

   </caption>
</Table>
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
    <TableHeadCell class="!p-4">Enable</TableHeadCell>    
    <TableHeadCell class="!p-4 w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">VPN Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Remote Protocol</TableHeadCell>
    <TableHeadCell class="w-18">Remote CA certificate</TableHeadCell>
    <TableHeadCell class="w-18">Local certificate</TableHeadCell>
    <TableHeadCell class="w-18">Authentication</TableHeadCell>


  </TableHead>
  <TableBody>
{#each changed_openvpn_data.config.vpn_openvpn_client_connection as clientConn, index}

{#if clientConn.delete}
  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteClientConn(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-4 w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={clientConn.enable} disabled></td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-4 w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{clientConn.name}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{clientConn.remote_host}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{clientConn.remote_port}</td>


{#if clientConn.remote_protocol ==0}
                    <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">UDP</td>
{:else if clientConn.remote_protocol == 1}
                    <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">TCP</td>
{/if}

                    <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{clientConn.remote_ca_certificate}</td>
                    <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{clientConn.local_certificate}</td>

{#if clientConn.auth == 0}
                    <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">X509 Certificate</td>
{:else if clientConn.auth ==1}
                    <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">Account/Password</td>
{/if}


</tr>


{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerClientConn(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteClientConn(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>



      <TableBodyCell class="!p-4 w-10">
<input type="checkbox"  bind:checked={clientConn.enable}>

      </TableBodyCell>

                    <TableBodyCell class="!p-4 w-10">{index+1}</TableBodyCell>
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


    </TableBodyRow>

{/if}

{/each}





<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_openvpn_data.config.vpn_openvpn_client_connection.length < 10}    
<button on:click={() => NewClientConn_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_client_connection.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
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
    <td class="pl-4"><Button color="blue" pill={true} on:click={saveClientConn}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>



<Modal bind:open={ClientConnModal} size="lg" class="w-full" permanent={true}>
  <form action="#">
<label>
  <input class="center" type=checkbox bind:checked={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].enable}>
  Enable
</label>


<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyClientConn(ClientConnCurrentIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>

      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5">
      <input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">

      </td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5">

{#if isValidRemotePort}
      <input type="number" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500" min="0" max="65535">

{:else}
      <input type="number" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_port} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-48 p-2.5" min="0" max="65535">

{/if}

      </td>



{#if !isValidRemotePort}
<td>
 <Helper class="pl-4 mt-2" color="red">
    <span class="font-medium">Invalid Port</span>
  </Helper>
</td>
{/if}

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_protocol} value={0}>UDP</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_protocol} value={1}>TCP</Radio>

</div></td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote CA Certificate</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_ca_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>
</td>

    <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Please go to certificate page to upload certificate first.</Tooltip>
    </td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].local_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>

    </td>
        <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Please go to certificate page to upload certificate first.</Tooltip>
    </td>


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
  </form>
</Modal>



<Modal bind:open={NewClientConnModal} size="lg" class="w-full" permanent={true}>
  <form action="#">

<label>
{#if getDataReady == 1}
  <input class="center" type=checkbox bind:checked={NewClientConn[new_client_conn_index].enable}>
{/if}
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddClientConn(new_client_conn_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewClientConn[new_client_conn_index].name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewClientConn[new_client_conn_index].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5">

{#if isValidRemotePort}
      <input type="number" bind:value={NewClientConn[new_client_conn_index].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-green-500" min="0" max="65535">
{:else}
      <input type="number" bind:value={NewClientConn[new_client_conn_index].remote_port} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-48 p-2.5" min="0" max="65535">

{/if}



      </td>

{#if !isValidRemotePort}
<td>
 <Helper class="pl-4 mt-2" color="red">
    <span class="font-medium">Invalid Port</span>
  </Helper>
</td>
{/if}

  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={NewClientConn[new_client_conn_index].remote_protocol} value={0}>UDP</Radio>
  <Radio bind:group={NewClientConn[new_client_conn_index].remote_protocol} value={1}>TCP</Radio>

</div></td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote CA Certificate</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={NewClientConn[new_client_conn_index].remote_ca_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

    

    </td>

        <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Please go to certificate page to upload certificate first.</Tooltip>
    </td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-80" bind:value={NewClientConn[new_client_conn_index].local_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>


    </td>

        <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Please go to certificate page to upload certificate first.</Tooltip>
    </td>


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
    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddClientConn(new_client_conn_index)}>Add</Button></td>


    </tr>

  </table>
  </form>
</Modal>


    </TabItem>

{:else if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}

    <TabItem title="Connection">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Listen Port</p></td><td class="pl-5 pt-5 w-48"><input type="number" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.listen_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>
   <td></td>


  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol} value={0}>UDP</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol} value={1}>TCP</Radio>

</div></td>
   <td></td>

  </tr>  

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>    


    </td>

    <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Please go to certificate page to upload certificate first.</Tooltip>
    </td>
</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote CA Certificate</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

    </td>
    <td class="pl-5 pt-1">
<svg id="click" fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<Tooltip trigger="click" triggeredBy="#click">Please go to certificate page to upload certificate first.</Tooltip>
    </td>


  </tr>







<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Authentication</p></td> <td class="pl-5 pt-5" colspan="2"><div class="flex gap-4">
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
    <TableHeadCell>Enable</TableHeadCell>
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

{#if clientCN.delete}


    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteClientCName(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={clientCN.enable} disabled>

      </td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{clientCN.cname}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"></td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"></td>
      </tr>

{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerClientCName(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableBodyCell class="!p-0 w-10">
   <button on:click={() => deleteClientCName(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>



      <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={clientCN.enable}>

      </TableBodyCell>

                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{clientCN.cname}</TableBodyCell>


                    <TableBodyCell class="w-10"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>

{/if}


{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length < 10}    
<button on:click={() => NewClientCName_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>



{/if}


{#if changed_openvpn_data.config.vpn_openvpn_server_connection.auth==1}
{#each changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password as client_account_password, index}


{#if client_account_password.delete}



    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteClientAccountPW(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>

    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={client_account_password.enable} disabled>

      </td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{client_account_password.account}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{client_account_password.password}</td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"></td>
<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"></td>

  </tr>
{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerServer_ClientAccountPassword(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

  <TableBodyCell class="!p-0 w-10">
   <button on:click={() => deleteClientAccountPW(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

          <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={client_account_password.enable}>

      </TableBodyCell>

                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{client_account_password.account}</TableBodyCell>
                    <TableBodyCell class="w-18">{client_account_password.password}</TableBodyCell>

                    <TableBodyCell class="w-10"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>


{/if}

{/each}


<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length < 10}    
<button on:click={() => Server_NewClientAccountPassword_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-8"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-18"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>



{/if}

  </TableBody>

</Table>


<Modal bind:open={ClientCNameModal} size="md" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[ClientCNameIndex].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyCName(ClientCNameIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-64">
    Certificate Common Name
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[ClientCNameIndex].cname} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyCName(ClientCNameIndex)}>Modify</Button></td>


    </tr>

</table>
</form>
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

<Modal bind:open={NewClientCNameModal} size="lg" class="w-full" autoclose>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={NewClientCName[new_client_cname_index].enable}>
  Enable
</label>

<table>
<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-64">
    Certificate Common Name
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={NewClientCName[new_client_cname_index].cname} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


  <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddClientCName(new_client_cname_index)}>Add</Button></td>


    </tr>


</table>
</form>
</Modal>


<Modal bind:open={ServerConn_NewClientAccountPasswordModal} size="lg" class="w-full" autoclose>


  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={ServerConn_NewClientAccountPassword[server_conn_new_client_account_password_index].enable}>
  Enable
</label>

<table>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
      Account
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={ServerConn_NewClientAccountPassword[server_conn_new_client_account_password_index].account} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>
<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
      Password
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={ServerConn_NewClientAccountPassword[server_conn_new_client_account_password_index].password} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


  <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={Server_AddClientAccountPassword(server_conn_new_client_account_password_index)}>Add</Button></td>


    </tr>


</table>
</form>
</Modal>

</AccordionItem>
</Accordion>

<p class="pt-10">
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveServerConn}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>

    </TabItem>
     {/if}
    {/if}
{/if}

{#if hidden == 0}
{#if getDataReady == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 0}
<TabItem title="Advanced">
<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Client Config Dir (CCD)</span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
        <TableHeadCell>Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-48">Client Certificate Common Name</TableHeadCell>
    <TableHeadCell class="w-36">Command</TableHeadCell>
</TableHead>

<TableBody>


{#each changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd as ccd, index}

{#if ccd.delete}
 <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteCCD(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={ccd.enable} disabled>

      </td>

    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>

    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-48 strikeout">{ccd.ccd_client_certificate_common_name}</td>
    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-36 strikeout">{ccd.ccd_client_command}</td>

    </tr>
{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerCCD(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteCCD(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


                    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={ccd.enable}>
                    </TableBodyCell>

                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-48">{ccd.ccd_client_certificate_common_name}</TableBodyCell>
                    <TableBodyCell class="w-36">{ccd.ccd_client_command}</TableBodyCell>

   

    </TableBodyRow>
{/if}    

{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length < 10}    
<button on:click={() => NewCCD_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-48"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>

    </TableBodyRow>




     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    <td class="pl-10"><Button color="blue" pill={true} on:click={saveServerCCD}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>
  </TableBody>

</Table>

</AccordionItem>


  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Preshared Key</span>

 <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-bold text-left">Key Usage</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage} value={0} >None</Radio>
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage} value={1}>TLS auth key</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage} value={2} >TLS crypt key</Radio>
</div></td>
      </tr>
      </table>


<p class="pt-10"></p>

<Table shadow striped={true} tableNoWFull={true}>

{#if changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage !=0}
  <TableHead>

      <TableHeadCell class="w-18">Key File</TableHeadCell>

  </TableHead>
{/if}
  <TableBody>
{#if changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage !=0}
    <TableBodyRow>
 <TableBodyCell class="w-18">
<div class="flex gap-4">
<svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" on:click={PSK_Click} ><path d="M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
{#if changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName==""}
<p class="pt-2">None</p>
{:else}
<p class="pt-2">{changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName}</p> 
{/if}
<input id="PSKServer" type="file" class="hidden" bind:this={fileinput} on:change={HandleServerPresharedKeyChange}/>
</div>
</TableBodyCell>

   </TableBodyRow>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveServerPSK}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>


 </AccordionItem>



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Port Forwarding</span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>

  <TableHeadCell>Enable</TableHeadCell>    
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-32">Incoming Protocol</TableHeadCell>
    <TableHeadCell class="w-48">Incoming Destination Port</TableHeadCell>
    <TableHeadCell class="w-36">Redirected Port</TableHeadCell>

</TableHead>


<TableBody>

{#each changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding as serverPFW, index}

{#if serverPFW.delete}
    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteServerPFW(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={serverPFW.enable} disabled>

      </td>
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
{#if serverPFW.server_pfw_incomingProtocol == 0}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-32 strikeout">UDP</td>
{:else if serverPFW.server_pfw_incomingProtocol == 1}
      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-32 strikeout">TCP</td>
{/if}
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-48 strikeout">{serverPFW.server_pfw_incomingDport}</td>

  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-36 strikeout">{serverPFW.server_pfw_redirectedPort}</td>


      </tr>

{:else}

  <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerServerPortFW(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteServerPFW(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>

                    <TableBodyCell class="w-10">

<input type="checkbox"  bind:checked={serverPFW.enable}>

                    </TableBodyCell>
                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if serverPFW.server_pfw_incomingProtocol == 0}
                    <TableBodyCell class="w-32">UDP</TableBodyCell>
{:else if serverPFW.server_pfw_incomingProtocol == 1}
                    <TableBodyCell class="w-32">TCP</TableBodyCell>
{/if}
                    <TableBodyCell class="w-48">{serverPFW.server_pfw_incomingDport}</TableBodyCell>                    
                    <TableBodyCell class="w-36">{serverPFW.server_pfw_redirectedPort}</TableBodyCell>



    </TableBodyRow>

{/if}

{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">


{#if changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length < 10}    
<button on:click={() => NewServer_PFW_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  

 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-32"></TableBodyCell>
      <TableBodyCell class="w-48"></TableBodyCell>                    
      <TableBodyCell class="w-36"></TableBodyCell>

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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveServerPFW}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</TableBody>
</Table>    

 </AccordionItem>

</Accordion>

</TabItem>


<Modal bind:open={Modify_PFW_Server_Modal} size="md" class="w-full" permanent={true}>
  <form action="#">
<label>
  <input class="center" type=checkbox bind:checked={changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[Modify_PFW_Server_Index].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyServerPortFW(Modify_PFW_Server_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Protocol
      </p></td>
<td class="pl-5 pt-5"><div class="flex gap-4">
<Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[Modify_PFW_Server_Index].server_pfw_incomingProtocol} value={0}>UDP</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[Modify_PFW_Server_Index].server_pfw_incomingProtocol} value={1}>TCP</Radio>

</div></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Destination Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="number" bind:value={changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[Modify_PFW_Server_Index].server_pfw_incomingDport} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Redirected Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="number" bind:value={changed_openvpn_data.config.vpn_openvpn_server_advanced.portForwarding[Modify_PFW_Server_Index].server_pfw_redirectedPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyServerPortFW}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>



<Modal bind:open={New_PFW_Server_Modal} size="md" class="w-full" autoclose>
  <form action="#">
<label>
  <input class="center" type=checkbox bind:checked={NewServerPFW[New_PFW_Server_Index].enable}>
  Enable
</label>

<p class="mt-10"></p>
<table>

<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Protocol
      </p></td>
<td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={NewServerPFW[New_PFW_Server_Index].server_pfw_incomingProtocol} value={0}>UDP</Radio>
  <Radio bind:group={NewServerPFW[New_PFW_Server_Index].server_pfw_incomingProtocol} value={1}>TCP</Radio>

</div></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Destination Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="number" bind:value={NewServerPFW[New_PFW_Server_Index].server_pfw_incomingDport} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Redirected Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="number" bind:value={NewServerPFW[New_PFW_Server_Index].server_pfw_redirectedPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

  <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddServer_PFW_Item(New_PFW_Server_Index)}>Add</Button></td>


    </tr>


</table>

</form>
</Modal>




<Modal bind:open={Modify_CCD_Modal} size="lg" class="w-full" permanent={true}>

  <form action="#">
<label>
  <input class="center" type=checkbox bind:checked={changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[Modify_CCD_Index].enable}>
  Enable
</label>

<p class="mt-10"></p>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyCCD(Modify_CCD_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-96">Client Certificate Common Name
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[Modify_CCD_Index].ccd_client_certificate_common_name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>
<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-96">Command
      </p></td>


      <td class="pl-5 pt-5 w-96">
        <Textarea id="textarea-id-ccd-modify" placeholder="ccd command" rows="12" name="ccd" bind:value={changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[Modify_CCD_Index].ccd_client_command} />


      </td>

  </tr>


            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyCCD(Modify_CCD_Index)}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>



<Modal bind:open={NewCCD_Modal} size="lg" class="w-full" autoclose>



  <form action="#">
<label>
  <input class="center" type=checkbox bind:checked={NewCCD_Item[NewCCD_index].enable}>
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-96">Client Certificate Common Name
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={NewCCD_Item[NewCCD_index].ccd_client_certificate_common_name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>
<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-96">Command
      </p></td>
      <td class="pl-5 pt-5 w-96">


        <Textarea id="textarea-id-ccd-new" placeholder="new ccd command" rows="12" name="new ccd" bind:value={NewCCD_Item[NewCCD_index].ccd_client_command} />


      </td>

  </tr>


  <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddCCD_Item(NewCCD_index)}>Add</Button></td>


    </tr>


</table>
</form>
</Modal>


{/if}
{/if}
{/if}


{#if getDataReady == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnServiceEn == 1}
{#if changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole == 1}
<TabItem title="Advanced">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64" bind:value={Advanced_Client_Index_Selected}>
<option disabled="" value="none">Choose VPN name ...</option>

{#each saved_changed_openvpn_data.config.vpn_openvpn_client_connection as client_conn,index}
<option value={index}>{client_conn.name}</option>
{/each}
</select>

<p class="pt-10"></p>

{#if Advanced_Client_Index_Selected !="none" && Advanced_Client_Index_Selected < changed_openvpn_data.config.vpn_openvpn_client_connection.length}

<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Preshared Key</span>

 <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">Key Usage</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage} value={0}>None</Radio>    
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage} value={1}>TLS auth key</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage} value={2} >TLS crypt key</Radio>

</div></td>
      </tr>
      </table>

<p class="pt-10"></p>

<Table shadow striped={true} tableNoWFull={true}>

{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage !=0}
  <TableHead>

      <TableHeadCell class="w-18">Key File</TableHeadCell>

  </TableHead>
{/if}
  <TableBody>
{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage !=0}  
    <TableBodyRow>
 <TableBodyCell class="w-18">
<div class="flex gap-4">
<svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" on:click={PSK_Click} ><path d="M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName==""}
<p class="pt-2">None</p>
{:else}
<p class="pt-2">{changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName}</p> 
{/if}
<input id="PSKclient" type="file" class="hidden" bind:this={fileinput} on:change={HandleClientPresharedKeyChange}/>
</div>
</TableBodyCell>

   </TableBodyRow>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveClientPSK}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>


 </AccordionItem>
  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Remote Network Access</span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>

    <TableHeadCell class="!p-4">Enable</TableHeadCell>    
    <TableHeadCell class="!p-1 w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">Remote Subnet</TableHeadCell>
    <TableHeadCell class="w-18">Comment</TableHeadCell>

  </TableHead>
  <TableBody>

{#each changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess as RemoteNetworkAccess, index}

{#if RemoteNetworkAccess.delete}
 <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteClientRNA(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={RemoteNetworkAccess.enable} disabled>

      </td>

      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-1 w-10 strikeout">{index+1}</td>

      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{RemoteNetworkAccess.remoteSubnet}</td>

      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{RemoteNetworkAccess.comment}</td>
      </tr>

{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerRemoteNetworkAccess(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteClientRNA(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


                    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={RemoteNetworkAccess.enable}>

                    </TableBodyCell>

                    <TableBodyCell class="!p-1 w-10">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{RemoteNetworkAccess.remoteSubnet}</TableBodyCell>
                    <TableBodyCell class="w-18">{RemoteNetworkAccess.comment}</TableBodyCell>


    </TableBodyRow>

{/if}

{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length < 10}    
<button on:click={() => NewRemoteNetworkAccess_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="!p-1 w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveClientRNA}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>



<Modal bind:open={ModifyRemoteNetworkAccess_Modal} size="lg" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[ModifyRemoteNetworkAccess_Index].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyRemoteNetworkAccess(ModifyRemoteNetworkAccess_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Subnet</p></td><td class="pl-5 pt-5">
      
{#if isValidRemoteSubnet}

      <input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[ModifyRemoteNetworkAccess_Index].remoteSubnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[ModifyRemoteNetworkAccess_Index].remoteSubnet} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}


      </td>

{#if !isValidRemoteSubnet}
<td>
 <Helper class="pl-4 mt-2" color="red">
    <span class="font-medium">Invalid CIDR Format</span>
  </Helper>
</td>

{/if}



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Comment</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[ModifyRemoteNetworkAccess_Index].comment} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyRemoteNetworkAccess(ModifyRemoteNetworkAccess_Index)}>Modify</Button></td>


    </tr>

  </table>

</form>  
</Modal>

<Modal bind:open={NewRemoteNetworkAccess_Modal} size="lg" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][NewRemoteNetworkAccess_index].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddRemoteNetworkAccess(NewRemoteNetworkAccess_index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Subnet</p></td><td class="pl-5 pt-5">
{#if isValidRemoteSubnet}     
      <input type="text" bind:value={NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][NewRemoteNetworkAccess_index].remoteSubnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
{:else}
      <input type="text" bind:value={NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][NewRemoteNetworkAccess_index].remoteSubnet} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}

      </td>

{#if !isValidRemoteSubnet}
<td>
 <Helper class="pl-4 mt-2" color="red">
    <span class="font-medium">Invalid CIDR Format</span>
  </Helper>
</td>

{/if}

  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Comment</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][NewRemoteNetworkAccess_index].comment} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>




            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddRemoteNetworkAccess_Item(NewRemoteNetworkAccess_index)}>Add</Button></td>


    </tr>

  </table>

</form>
</Modal>
 </AccordionItem>


   <AccordionItem {defaultClass}>
    <span slot="header" class="pl-4">Failover</span>




 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>

    <TableHeadCell >Enable</TableHeadCell>
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Remote Protocol</TableHeadCell>


  </TableHead>
  <TableBody>



{#each changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver as FailOver, index}

{#if FailOver.delete}

 <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteFailOver(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={FailOver.enable} disabled>

      </td>
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{FailOver.remote_host}</td>
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">{FailOver.remote_port}</td>
{#if FailOver.remote_protocol == 0}
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">UDP</td>
{:else if FailOver.remote_protocol == 1}
      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white w-18 strikeout">TCP</td>
{/if} 

      </tr>


{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerFailover(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteFailOver(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>



   <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={FailOver.enable}>   
    </TableBodyCell>

                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{FailOver.remote_host}</TableBodyCell>
                    <TableBodyCell class="w-18">{FailOver.remote_port}</TableBodyCell>
{#if FailOver.remote_protocol == 0}
                    <TableBodyCell class="w-18">UDP</TableBodyCell>
{:else if FailOver.remote_protocol == 1}
                    <TableBodyCell class="w-18">TCP</TableBodyCell>
{/if} 



    </TableBodyRow>

{/if}    

{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length < 10}    
<button on:click={() => NewFailover_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>      
      <TableBodyCell class="w-10"></TableBodyCell>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveClientFO}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>



<Modal bind:open={ModifyFailOver_Modal} size="lg" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyFailover(ModifyFailOver_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5">
{#if isValidRemotePort}
      <input type="number" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else}
      <input type="number" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].remote_port} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">
{/if}

      </td>

{#if !isValidRemotePort}
<td>
 <Helper class="pl-4 mt-2" color="red">
    <span class="font-medium">Invalid Port</span>
  </Helper>
</td>
{/if}

  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].remote_protocol} value={0}>UDP</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].remote_protocol} value={1}>TCP</Radio>

</div></td>


  </tr>






            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td></td>
    <td></td>

    <td class="pl-20"><Button color="dark" pill={true} on:click={ModifyFailover(ModifyFailOver_Index)}>Modify</Button></td>


    </tr>

  </table>

</form>

</Modal>


<Modal bind:open={NewFailOver_Modal}  size="lg" class="w-full" permanent={true}>


  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddFailover(NewFailOver_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5">

{#if isValidRemotePort}      
      <input type="number" bind:value={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">

{:else}
      <input type="number" bind:value={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].remote_port} class="focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700 border-red-500 dark:border-red-400 text-sm rounded-lg block w-full p-2.5">

{/if}

      </td>



{#if !isValidRemotePort}
<td>
 <Helper class="pl-4 mt-2" color="red">
    <span class="font-medium">Invalid Port</span>
  </Helper>
</td>
{/if}


  </tr>




<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Protocol</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].remote_protocol} value={0}>UDP</Radio>
  <Radio bind:group={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].remote_protocol} value={1}>TCP</Radio>

</div></td>


  </tr>






            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddFailover_Item(NewFailOver_Index)}>Add</Button></td>


    </tr>

  </table>

</form>  
</Modal>


 </AccordionItem>



  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">Port Forwarding</span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell>Enable</TableHeadCell>    
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-36">Incoming Protocol</TableHeadCell>
    <TableHeadCell class="w-48">Incoming Destination Port</TableHeadCell>
    <TableHeadCell class="w-36">Redirected Port</TableHeadCell>

</TableHead>


<TableBody>

{#each changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding as clientPFW, index}


{#if clientPFW.delete}

 <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteClientPFW(index)}>
<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</td>


<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white !p-0 w-10 strikeout"> 
<button class="disabled:cursor-not-allowed" disabled>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

       </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white !p-0 w-10 strikeout">  
<button class="disabled:cursor-not-allowed" disabled>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </td>


<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout"> 
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={clientPFW.enable} disabled>

      </td>

<td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>

{#if clientPFW.client_pfw_incomingProtocol== 0}
                    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-36 strikeout">UDP</td>
{:else if clientPFW.client_pfw_incomingProtocol == 1}
                    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-36 strikeout">TCP</td>
{/if}
                    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-48 strikeout">{clientPFW.client_pfw_incomingDport}</td>                    
                    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-36 strikeout">{clientPFW.client_pfw_redirectedPort}</td>

      </tr>
{:else}

  <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerClientPFW(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteClientPFW(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>


                    <TableBodyCell class="w-10">
                    <input type="checkbox"  bind:checked={clientPFW.enable}>
                    </TableBodyCell>

                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
{#if clientPFW.client_pfw_incomingProtocol== 0}
                    <TableBodyCell class="w-36">UDP</TableBodyCell>
{:else if clientPFW.client_pfw_incomingProtocol == 1}
                    <TableBodyCell class="w-36">TCP</TableBodyCell>
{/if}
                    <TableBodyCell class="w-48">{clientPFW.client_pfw_incomingDport}</TableBodyCell>                    
                    <TableBodyCell class="w-36">{clientPFW.client_pfw_redirectedPort}</TableBodyCell>



    </TableBodyRow>


{/if}

{/each}
<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">


{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length < 10}    
<button on:click={() => NewClientPFW_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  

 </TableBodyCell>
      
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>      
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
      <TableBodyCell class="w-48"></TableBodyCell>                    
      <TableBodyCell class="w-36"></TableBodyCell>

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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveClientPFW}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

</TableBody>
</Table>    

 </AccordionItem>




<Modal bind:open={ModifyClient_PFW_Modal} size="md" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[ModifyClient_PFW_Index].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyClientPFW(ModifyClient_PFW_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Protocol
      </p></td>
<td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[ModifyClient_PFW_Index].client_pfw_incomingProtocol} value={0}>UDP</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[ModifyClient_PFW_Index].client_pfw_incomingProtocol} value={1} >TCP</Radio>

</div></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Destination Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[ModifyClient_PFW_Index].client_pfw_incomingDport} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Redirected Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].portForwarding[ModifyClient_PFW_Index].client_pfw_redirectedPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyClientPFW}>Modify</Button></td>


    </tr>

</table>
</form>
</Modal>



<Modal bind:open={NewClientPFW_Modal} size="md" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={NewClientPFW_Item[Advanced_Client_Index_Selected][NewClientPFW_Index].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoAddClientPFW}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>



<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Protocol
      </p></td>
<td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={NewClientPFW_Item[Advanced_Client_Index_Selected][NewClientPFW_Index].client_pfw_incomingProtocol} value={0}>UDP</Radio>
  <Radio bind:group={NewClientPFW_Item[Advanced_Client_Index_Selected][NewClientPFW_Index].client_pfw_incomingProtocol} value={1}>TCP</Radio>

</div></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Incoming Destination Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={NewClientPFW_Item[Advanced_Client_Index_Selected][NewClientPFW_Index].client_pfw_incomingDport} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-36">Redirected Port
      </p></td>
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={NewClientPFW_Item[Advanced_Client_Index_Selected][NewClientPFW_Index].client_pfw_redirectedPort} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

  <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddClientPFW_Item(NewClientPFW_Index)}>Add</Button></td>


    </tr>


</table>

</form>
</Modal>





</Accordion>

{/if}
</TabItem>
    {/if}
   {/if}
    {/if}
    {/if}
</Tabs>
