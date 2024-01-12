<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button,  Breadcrumb, BreadcrumbItem, Radio,Fileupload,  FloatingLabelInput, Input, Dropdown, DropdownItem, Chevron, Select, Modal, Label, Textarea} from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    openvpnConfig,
    OpenVPN_Client_Advanced_FO_ConfigChangedLog,
    OpenVPN_Client_Advanced_RNA_ConfigChangedLog,
    OpenVPN_Client_Advanced_PSK_ConfigChangedLog,
    OpenVPN_Client_Conn_ConfigChangedLog,
    OpenVPN_Server_Advanced_CCD_ConfigChangedLog,
    OpenVPN_Server_Advanced_PSK_ConfigChangedLog,
    OpenVPN_Server_Conn_ConfigChangedLog,
    OpenVPN_Basic_ConfigChangedLog,
    ChangedOpenVPNConfig
  } from "./configG.js"

    let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';
    let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';
    let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';


    let hidden=1;

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
    let openvpn_client_advanced_psk_changedValues=[];
    let openvpn_client_advanced_rna_changedValues=[];
    let openvpn_client_advanced_fo_changedValues=[];

    sessionidG.subscribe(val => {
      sessionid = val;
    });

    openvpnConfig.subscribe(val => {
      openvpn_data = val;
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

    OpenVPN_Server_Conn_ConfigChangedLog.subscribe(val => {
        openvpn_server_conn_changedValues= val;
    });

    OpenVPN_Basic_ConfigChangedLog.subscribe(val => {
        openvpn_basic_changedValues= val;
    });


    ChangedOpenVPNConfig.subscribe(val => {
      saved_changed_openvpn_data = val;
    });






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



    let openvpntakd="None";


    let ClientConnModal = false;
    let ClientConnCurrentIndex;
    let NewClientConnModal=false;
    let new_client_conn_index;

    let ClientCNameModal=false;
    let ClientCNameIndex;
    let NewClientCNameModal=false;
    let new_client_cname_index;

    let BackupCName;
    let NewClientCName=["","","","","","","","","",""];


    let ServerConn_ClientAccountPasswordModal=false;
    let ServerConn_ClientAccountPasswordIndex;

    let ServerConn_NewClientAccountPasswordModal=false;
    let server_conn_new_client_account_password_index;
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": { 
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
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
        "password": ""},
      "presharedKey": {
        "keyUsage":0,
        "keyFileName": ""
        },
      "remoteNetworkAccess": [],
      "failOver": []
    }
    ];


    let Advanced_Client_Index_Selected="none";
    let Modify_CCD_Modal=false;
    let Modify_CCD_Index;



    let NewCCD_Modal=false;
    let NewCCD_index;
    let BackupCCD={"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""};
    let NewCCD_Item=[
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""},
        {"ccd_client_certificate_common_name": "",
        "ccd_client_command": ""}
    ];

    let ModifyRemoteNetworkAccess_Modal;
    let ModifyRemoteNetworkAccess_Index;
    let BackupRemoteNetworkAccess={
        "remoteSubnet": "",
        "comment": ""
    };

    let NewRemoteNetworkAccess_Item=[[{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ],
    [{
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    },
    {
        "remoteSubnet": "",
        "comment": ""
    }

    ]

    ];

    let NewRemoteNetworkAccess_index;
    let NewRemoteNetworkAccess_Modal;

    let ModifyFailOver_Modal;
    let ModifyFailOver_Index;
    let BackupFailOver={
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    };

    let NewFailOver_Index;
    let NewFailOver_Modal;
    let NewFailOver_Item=[[{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ],
    [{
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    },
    {
        "remote_host": "",
        "remote_port": 12345,
        "remote_protocol": 0
    }
    ]

    ];

    

    function modalTriggerRemoteNetworkAccess(index)
    {

      BackupRemoteNetworkAccess.remoteSubnet=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].remoteSubnet;

      BackupRemoteNetworkAccess.comment=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].comment;
      ModifyRemoteNetworkAccess_Index=index
      ModifyRemoteNetworkAccess_Modal=true;

    }

    function NoModifyRemoteNetworkAccess(index)
    {
      ModifyRemoteNetworkAccess_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].remoteSubnet=BackupRemoteNetworkAccess.remoteSubnet;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[index].comment=BackupRemoteNetworkAccess.comment;

    }

    function ModifyRemoteNetworkAccess(index)
    {
      ModifyRemoteNetworkAccess_Modal=false;
    }

    function NewRemoteNetworkAccess_Item_Invoker(index)
    {
      NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index].remoteSubnet="";
      NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index].comment="";

      NewRemoteNetworkAccess_index=index;
      NewRemoteNetworkAccess_Modal=true;
    }

    function AddRemoteNetworkAccess_Item(index)
    {
      console.log("client :"+Advanced_Client_Index_Selected+ ", rna: "+ index);
      NewRemoteNetworkAccess_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess=[...changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess,NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][index]];

    }

    function modalTriggerFailover(index)
    {
      BackupFailOver.remote_host=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_host;

      BackupFailOver.remote_port=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port;

      BackupFailOver.remote_protocol=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_protocol;

      ModifyFailOver_Index=index;
      ModifyFailOver_Modal=true;

    }

    function NoModifyFailover(index)
    {
      ModifyFailOver_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_host=BackupFailOver.remote_host;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_port=BackupFailOver.remote_port;

      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[index].remote_protocol=BackupFailOver.remote_protocol;
    }

    function ModifyFailover(index)
    {
      ModifyFailOver_Modal=false;
    }

    function NewFailover_Item_Invoker(index)
    {
      NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_host="";
      NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_port=0;
      NewFailOver_Item[Advanced_Client_Index_Selected][index].remote_protocol=0;

      NewFailOver_Index=index;
      NewFailOver_Modal=true;
    }

    function AddFailover_Item(index)
    {
      NewFailOver_Modal=false;
      changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver=[...changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver,NewFailOver_Item[Advanced_Client_Index_Selected][index]];
    }


    function modalTriggerCCD(index)
    {
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

    }

    function ModifyCCD(index)
    {
      Modify_CCD_Modal=false;
    }

    function NewCCD_Item_Invoker(index)
    {
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


    function NewClientCName_Item_Invoker(index)
    {
      NewClientCName[index]="";
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
            }
            else
            {
                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyUsage has changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage;

                openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr];

                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage;


                let changedstr2=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" PSK KeyFileName has changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName;

                openvpn_client_advanced_psk_changedValues=[...openvpn_client_advanced_psk_changedValues, changedstr2];
                saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName;
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


          if (1==changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole && 0==saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole)
          {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");
          }
          else
          {
            console.log("start to save client rna");

            if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length <
            changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length)
            {
                 let addedCount=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length-saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;


                let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " add "+addedCount+" item(s) to Remote Network Access";
              
                openvpn_client_advanced_rna_changedValues=[...openvpn_client_advanced_rna_changedValues, changedstr];

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

                }

                for (let i=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length;i++)
                {
                    let new_rna=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[i]));

                    saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess=[...saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess, new_rna];

                }

            }


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
                if (saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length < changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length)
                {
                     let addedCount=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length-saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;


                    let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+ " add "+addedCount+" item(s) to Failover";
                  
                    openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];

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

                        if (changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_port != saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol)
                        {
                            saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol= changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol;

                            let changedstr=changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].name+" Failover List No." + (i+1) +" has changed: remote protocol is changed to "+changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i].remote_protocol;

                            openvpn_client_advanced_fo_changedValues=[...openvpn_client_advanced_fo_changedValues, changedstr];
             

                        }
                    }

                    for (let i=saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;i< changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length;i++)
                    {
                        let new_fo=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[i]));

                        saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver=[...saved_changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver, new_fo];

                    }

                }


                ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
                OpenVPN_Client_Advanced_FO_ConfigChangedLog.set(openvpn_client_advanced_fo_changedValues);
                console.log(openvpn_client_advanced_fo_changedValues);
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


      console.log(changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);
      console.log(openvpn_data.config.vpn_openvpn_basic.ovpnRole);
      console.log(saved_changed_openvpn_data.config.vpn_openvpn_basic.ovpnRole);

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
          let changedstr="Add "+addedCount+" item(s) to Client Connection";
          
          openvpn_client_conn_changedValues=[...openvpn_client_conn_changedValues, changedstr];

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

        ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
        OpenVPN_Client_Conn_ConfigChangedLog.set(openvpn_client_conn_changedValues);
        console.log(openvpn_client_conn_changedValues);

      }


    }

    function saveServerConn()
    {
      console.log("save server conn");

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

          saved_hanged_openvpn_data.config.vpn_openvpn_server_connection.local_protocol=changed_openvpn_data.config.vpn_openvpn_server_connection.local_protocol;

        }

        if (changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate != openvpn_data.config.vpn_openvpn_server_connection.local_certificate)
        {
          let changedstr="local certificate is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate;
          openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

          saved_changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate=changed_openvpn_data.config.vpn_openvpn_server_connection.local_certificate;

        }

        if (changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate != openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate)
        {
          let changedstr="remote certificate is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.remote_ca_certificate;
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
          for(let i=0;i<Math.min(changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length,
          openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length);i++)
          {
            if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i] !=
            openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i])
            {
             let changedstr="Client Certificate Common Name List No. "+(i+1)+" item is changed to "+changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i];

              openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];

              saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i]=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name[i];

            }
          }

          if (changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length > openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length) 
          {
            let addedCount=changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length-openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length;
            let changedstr="Add "+addedCount+" item(s) to Client Certificate Common Name";
            openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];


            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name))

          }
        }
        else if (changed_openvpn_data.config.vpn_openvpn_server_connection.auth==1)
        {
          for(let i=0;i<Math.min(changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length,
          openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length);i++)
          {
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
            let changedstr="Add "+addedCount+" item(s) to Client Account/Password";
            openvpn_server_conn_changedValues=[...openvpn_server_conn_changedValues, changedstr];
          

            saved_changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password));

          }
        }

        ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
        OpenVPN_Server_Conn_ConfigChangedLog.set(openvpn_server_conn_changedValues);        
        console.log(openvpn_server_conn_changedValues);
      }
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
          let changedstr="Add "+addedCount+" item(s) to CCD";
          
          openvpn_server_advanced_ccd_changedValues=[...openvpn_server_advanced_ccd_changedValues, changedstr];
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
        }

        saved_changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd=JSON.parse(JSON.stringify(changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd))

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

        ChangedOpenVPNConfig.set(saved_changed_openvpn_data);
        OpenVPN_Server_Advanced_PSK_ConfigChangedLog.set(openvpn_server_advanced_psk_changedValues);
        console.log(openvpn_server_advanced_psk_changedValues);
      }
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
            changed_openvpn_data.config.vpn_openvpn_client_connection[i].name=openvpn_data.config.vpn_openvpn_client_connection[i].name
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

          }        

        }
      }

    }

  });


  </script>

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
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">VPN Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Remote Protocol</TableHeadCell>
    <TableHeadCell class="w-18">Remote CA certificate</TableHeadCell>
    <TableHeadCell class="w-18">Local certificate</TableHeadCell>
{#if hidden == 0}
    <TableHeadCell class="w-16">Authentication</TableHeadCell>
{/if}
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
{#if hidden == 0}
{#if clientConn.auth == 0}
                    <TableBodyCell class="w-18">X509 Certificate</TableBodyCell>
{:else if clientConn.auth ==1}
                    <TableBodyCell class="w-18">Account/Password</TableBodyCell>
{/if}
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
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].remote_ca_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>
</td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">

<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[ClientConnCurrentIndex].local_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>

    </td>


  </tr>
{#if hidden == 0}
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
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewClientConn[new_client_conn_index].remote_ca_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getCaCertReady == 1}
{#each caCertList as caCert, index}
<option value={caCert}>{caCert}</option>
{/each}
{/if}
</select>

    

    </td>


</tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={NewClientConn[new_client_conn_index].local_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getMachineCertReady== 1}
{#each machineCertList as machineCert, index}
<option value={machineCert}>{machineCert}</option>
{/each}
{/if}
</select>


    </td>


  </tr>
{#if hidden == 0}
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


  </tr>




{#if hidden == 0}


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Client Authentication</p></td> <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.auth} value={0}>X509 Certificate</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_connection.auth} value={1}>Account/Password</Radio>

</div></td>


  </tr>

{/if}

</table>

{#if hidden == 0}
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

<TableBodyRow>
      <TableBodyCell class="!p-4 w-8">

{#if changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length < 10}    
<button on:click={() => NewClientCName_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_server_connection.client_certificate_common_name.length)}>
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
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>



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


<TableBodyRow>
      <TableBodyCell class="!p-4 w-8">

{#if changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length < 10}    
<button on:click={() => Server_NewClientAccountPassword_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_server_connection.client_account_password.length)}>
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
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>



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

<Modal bind:open={NewClientCNameModal} size="lg" class="w-full" autoclose>

<table>
<tr>
      <td>
      <p class="pl-1 pt-4 text-lg font-light text-right w-64">
    Certificate Common Name
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={NewClientCName[new_client_cname_index]} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


  <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddClientCName(new_client_cname_index)}>Add</Button></td>


    </tr>


</table>
</Modal>


<Modal bind:open={ServerConn_NewClientAccountPasswordModal} size="lg" class="w-full" autoclose>

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
</Modal>

</AccordionItem>
</Accordion>
{/if}
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
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-96">Client Certificate Common Name</TableHeadCell>
    <TableHeadCell class="w-36">Command</TableHeadCell>
</TableHead>

<TableBody>


{#each changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd as ccd, index}


    <TableBodyRow>
          <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => modalTriggerCCD(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableHeadCell class="!p-4">
    </TableHeadCell>

                    <TableBodyCell class="w-8">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-96">{ccd.ccd_client_certificate_common_name}</TableBodyCell>
                    <TableBodyCell class="w-36">{ccd.ccd_client_command}</TableBodyCell>

                    <TableBodyCell class="w-10"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>

{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-8">

{#if changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length < 10}    
<button on:click={() => NewCCD_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>

{/if}  
 </TableBodyCell>
      
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="w-8"></TableBodyCell>
      <TableBodyCell class="w-96"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
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
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage} value={0}>TLS auth key</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyUsage} value={1} >TLS crypt-v2 key</Radio>

</div></td>
      </tr>
      </table>

<p class="pt-10"></p>

<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>

      <TableHeadCell class="w-18">Key File</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
 <TableBodyCell class="w-18">
<div class="flex gap-4">
<svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" on:click={taClick} ><path d="M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
{#if changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName==""}
<p class="pt-2">None</p>
{:else}
<p class="pt-2">{changed_openvpn_data.config.vpn_openvpn_server_advanced.presharedKey.keyFileName}</p> 
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveServerPSK}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>


 </AccordionItem>

</Accordion>

</TabItem>



<Modal bind:open={Modify_CCD_Modal} size="lg" class="w-full" permanent={true}>
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
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_server_advanced.ccd[Modify_CCD_Index].ccd_client_command} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyCCD(Modify_CCD_Index)}>Modify</Button></td>


    </tr>

</table>
</Modal>



<Modal bind:open={NewCCD_Modal} size="lg" class="w-full" autoclose>

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
      <td class="pl-5 pt-5 w-36"><input type="text" bind:value={NewCCD_Item[NewCCD_index].ccd_client_command} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>


  <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddCCD_Item(NewCCD_index)}>Add</Button></td>


    </tr>


</table>
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
      <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage} value={0}>TLS auth key</Radio>
  <Radio bind:group={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyUsage} value={1} >TLS crypt-v2 key</Radio>

</div></td>
      </tr>
      </table>

<p class="pt-10"></p>

<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>

      <TableHeadCell class="w-18">Key File</TableHeadCell>

  </TableHead>
  <TableBody>
    <TableBodyRow>
 <TableBodyCell class="w-18">
<div class="flex gap-4">
<svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" on:click={taClick} ><path d="M3.75002 9.77602C3.86206 9.7589 3.97701 9.75 4.0943 9.75H19.9058C20.023 9.75 20.138 9.7589 20.25 9.77602M3.75002 9.77602C2.55402 9.9588 1.68986 11.0788 1.86691 12.3182L2.72405 18.3182C2.8824 19.4267 3.83173 20.25 4.95144 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.75002 9.77602V6C3.75002 4.75736 4.75738 3.75 6.00002 3.75H9.8787C10.2765 3.75 10.6581 3.90804 10.9394 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2427 6.75 20.25 7.75736 20.25 9V9.77602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName==""}
<p class="pt-2">None</p>
{:else}
<p class="pt-2">{changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].presharedKey.keyFileName}</p> 
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
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">Remote Subnet</TableHeadCell>
    <TableHeadCell class="w-18">Comment</TableHeadCell>


    <TableHeadCell class="w-10"></TableHeadCell>
    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>
  <TableBody>

{#each changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess as RemoteNetworkAccess, index}


    <TableBodyRow>
          <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => modalTriggerRemoteNetworkAccess(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableHeadCell class="!p-4">
    </TableHeadCell>

                    <TableBodyCell class="w-8">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{RemoteNetworkAccess.remoteSubnet}</TableBodyCell>
                    <TableBodyCell class="w-18">{RemoteNetworkAccess.comment}</TableBodyCell>

                    <TableBodyCell class="w-10"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>

{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-8">

{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length < 10}    
<button on:click={() => NewRemoteNetworkAccess_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess.length)}>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveClientRNA}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>



<Modal bind:open={ModifyRemoteNetworkAccess_Modal} size="lg" class="w-full" permanent={true}>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyRemoteNetworkAccess(ModifyRemoteNetworkAccess_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Subnet</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].remoteNetworkAccess[ModifyRemoteNetworkAccess_Index].remoteSubnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
</Modal>

<Modal bind:open={NewRemoteNetworkAccess_Modal} size="lg" class="w-full" autoclose>
<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Subnet</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewRemoteNetworkAccess_Item[Advanced_Client_Index_Selected][NewRemoteNetworkAccess_index].remoteSubnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Port</TableHeadCell>
    <TableHeadCell class="w-18">Remote Protocol</TableHeadCell>


    <TableHeadCell class="w-10"></TableHeadCell>

  </TableHead>
  <TableBody>



{#each changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver as FailOver, index}


    <TableBodyRow>
          <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => modalTriggerFailover(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableHeadCell class="!p-4">
    </TableHeadCell>

                    <TableBodyCell class="w-8">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{FailOver.remote_host}</TableBodyCell>
                    <TableBodyCell class="w-18">{FailOver.remote_port}</TableBodyCell>
{#if FailOver.remote_protocol == 0}
                    <TableBodyCell class="w-18">UDP</TableBodyCell>
{:else if FailOver.remote_protocol == 1}
                    <TableBodyCell class="w-18">TCP</TableBodyCell>
{/if} 
                    <TableBodyCell class="w-10"></TableBodyCell>


    </TableBodyRow>

{/each}

<TableBodyRow>
      <TableBodyCell class="!p-4 w-8">

{#if changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length < 10}    
<button on:click={() => NewFailover_Item_Invoker(changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver.length)}>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveClientFO}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>



<Modal bind:open={ModifyFailOver_Modal} size="lg" class="w-full" permanent={true}>
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyFailover(ModifyFailOver_Index)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_openvpn_data.config.vpn_openvpn_client_connection[Advanced_Client_Index_Selected].failOver[ModifyFailOver_Index].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyFailover(ModifyFailOver_Index)}>Modify</Button></td>


    </tr>

  </table>
</Modal>


<Modal bind:open={NewFailOver_Modal}  size="lg" class="w-full" autoclose>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Port</p></td><td class="pl-5 pt-5"><input type="text" bind:value={NewFailOver_Item[Advanced_Client_Index_Selected][NewFailOver_Index].remote_port} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



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
</Modal>


 </AccordionItem>



</Accordion>

{/if}
</TabItem>
    {/if}
   {/if}
    {/if}
    {/if}
</Tabs>
