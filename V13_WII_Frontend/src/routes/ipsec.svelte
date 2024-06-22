<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Button,  Radio, FloatingLabelInput, Input, Dropdown, DropdownItem,  Select, Modal, Tooltip,Label} from 'flowbite-svelte';


  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import { 
    ipsecConfig,
    IPsec_Responder_Conn_ConfigChangedLog,
    IPsec_Initiator_Conn_General_ConfigChangedLog,
    IPsec_Initiator_Conn_Subnet_ConfigChangedLog,
    IPsec_Basic_ConfigChangedLog,
    ChangedIPsecConfig
  } from "./configG.js"


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





    let tdClass = 'px-6 py-4 whitespace-nowrap font-light ';
    let trClass= 'noborder bg-white dark:bg-gray-800 dark:border-gray-700';
    let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';


    let initiatorConnGeneralModal=false;
    let initiatorConnGeneralCurrentIndex;
    let newICG_Modal=false;
    let newICG_index;


    let responderConnSubnetModal=false;
    let responderConnSubnetCurrentIndex;

    let newRCS_Modal=false;
    let newRCS_index;


    let Initiator_Conn_Selected="none";

    let initiatorConnSubnetModal=false;
    let initiatorConnSubnetCurrentIndex;

    let newICS_Modal=false;
    let newICS_index;
  

    let sessionid;
    let sessionBinary;
    let ipsec_data="";
    let changed_ipsec_data = {};
    let saved_changed_ipsec_data ={};
    let getDataReady=0;   

    let basic_changedValues = [];
    let responder_conn_changedValues=[];
    let initiator_conn_general_changedValues=[];
    let initiator_conn_subnet_changedValues=[];


    sessionidG.subscribe(val => {
      sessionid = val;
    });

    ipsecConfig.subscribe(val => {
      ipsec_data = val;
    });


    IPsec_Responder_Conn_ConfigChangedLog.subscribe(val => {
      responder_conn_changedValues = val;
    });

    IPsec_Initiator_Conn_General_ConfigChangedLog.subscribe(val => {
      initiator_conn_general_changedValues = val;
    });

    IPsec_Initiator_Conn_Subnet_ConfigChangedLog.subscribe(val => {
      initiator_conn_subnet_changedValues = val;
    });



    IPsec_Basic_ConfigChangedLog.subscribe(val => {
      basic_changedValues = val;
    });


    ChangedIPsecConfig.subscribe(val => {
      saved_changed_ipsec_data = val;
    });

    function compareObjects(obj1, obj2, type, isArrayItem, ArrayIndex, ArrayName) 
    {
      for (const key in obj1) 
      {
        if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') 
        {
          if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) 
          {
            for (let i = 0; i < Math.min(obj1[key].length, obj2[key].length); i++) 
            {
              compareObjects(obj1[key][i], obj2[key][i], type, 1,i+1,key);
            }

            if (obj1[key].length > obj2[key].length) 
            {
              let addedCount=obj1[key].length-obj2[key].length;
              let changedstr="Add "+addedCount+" item(s) to "+ key;
              if (type == 1)
              {
                responder_conn_changedValues=[...responder_conn_changedValues, changedstr];
              }
              else if (type == 0)
              {
                basic_changedValues=[...basic_changedValues, changedstr]; 
              }
            }
            else if (obj1[key].length < obj2[key].length)
            {
              let deletedCount=obj2[key].length-obj1[key].length;
              let changedstr="Delete "+deletedCount+" item(s) from "+ key;
              if (type == 1)
              {
                responder_conn_changedValues=[...responder_conn_changedValues, changedstr];
              }
              else if (type == 0)
              {
                basic_changedValues=[...basic_changedValues, changedstr]; 
              }
            }
          }
          else
          {
            compareObjects(obj1[key], obj2[key], type, 0,0,"");
          }
        } 
        else if (obj1[key] != obj2[key]) 
        {
          let changedstr="";
          if (isArrayItem == 0)
          {
            changedstr="Value of "+key+" has changed to "+obj1[key];
          }
          else
          {
            changedstr=ArrayName+" List No."+ArrayIndex+" item is changed: "+ "value of "+key+" has changed to "+obj1[key];
          }
          
          if (type == 1)
          {
              responder_conn_changedValues=[...responder_conn_changedValues, changedstr];
          }
          else if (type == 0)
          {
              basic_changedValues=[...basic_changedValues, changedstr]; 
          }
        }
      }
    }


    function saveBasic()
    {
      console.log("save basic");

      if (basic_changedValues.length!=0)
      {
        basic_changedValues=[];
      }
    
      compareObjects(changed_ipsec_data.config.vpn_ipsec_basic, ipsec_data.config.vpn_ipsec_basic,0,0,0,"");
      IPsec_Basic_ConfigChangedLog.set(basic_changedValues);


      saved_changed_ipsec_data.config.vpn_ipsec_basic=JSON.parse(JSON.stringify(changed_ipsec_data.config.vpn_ipsec_basic)); 
      ChangedIPsecConfig.set(saved_changed_ipsec_data);
    
      console.log(basic_changedValues);
    }

    function saveResponderConn()
    {
      console.log("save responder conn");
      if (responder_conn_changedValues.length !=0)
      {
        responder_conn_changedValues=[];
      }

      console.log(changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole);
      console.log(ipsec_data.config.vpn_ipsec_basic.ipsecRole);
      console.log(saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole);

      if (0==changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole &&  1==saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole)
      {

              console.log("Please save basic page first.");
              alert("Please save basic page first.");

      }
      else
      {
        console.log("start to save responder conn");
        compareObjects(changed_ipsec_data.config.vpn_ipsec_connection.responder_conn, ipsec_data.config.vpn_ipsec_connection.responder_conn,1,0,0,"");
        IPsec_Responder_Conn_ConfigChangedLog.set(responder_conn_changedValues);

        saved_changed_ipsec_data.config.vpn_ipsec_connection.responder_conn=JSON.parse(JSON.stringify(changed_ipsec_data.config.vpn_ipsec_connection.responder_conn));
        ChangedIPsecConfig.set(saved_changed_ipsec_data);
    
        console.log(responder_conn_changedValues);
      }

    }

    function saveInitiatorConnGeneral()
    {
      console.log("save initiator conn general");
      if (initiator_conn_general_changedValues.length !=0)
      {
        initiator_conn_general_changedValues=[];
      }


      console.log(changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole);
      console.log(ipsec_data.config.vpn_ipsec_basic.ipsecRole);
      console.log(saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole);

      if (1==changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole &&   0==saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole)
      {

            console.log("Please save basic page first.");
            alert("Please save basic page first.");

      }
      else
      {
        console.log("start to save initiator conn general");

        let tempForDelete=[];
        for (let i = 0; i< changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length; i++)
        {
          if (!changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete)
          {
            tempForDelete=[...tempForDelete, changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i]]
          }
        }


        if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length > ipsec_data.config.vpn_ipsec_connection.initiator_conn.length)
        {
            let addedCount = changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length-ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;
            let changedstr = "Add "+addedCount+" item(s) to initiator_conn";
            initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];

        }
        else if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length < ipsec_data.config.vpn_ipsec_connection.initiator_conn.length)
        {
            let deletedCount = ipsec_data.config.vpn_ipsec_connection.initiator_conn.length-changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;
            let changedstr = "Delete "+deletedCount+" item(s) to initiator_conn";
            initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
        }

        let i=0;
        for (;i<Math.min(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length,ipsec_data.config.vpn_ipsec_connection.initiator_conn.length);i++)
        {
            //console.log(i);


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable !=
            ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: enable has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }

            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete !=
            ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: delete has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name !=
            ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: name has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }

            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host !=
            ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: remote_host has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            } 


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate !=
            ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: local_certificate has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate !=
            ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: remote_certificate has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            } 


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type !=
            ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: type has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }  
        }

    
        for (i=ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i<saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
        {
            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable !=
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: enable has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].enable;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }

            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete !=
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: delete has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].delete;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }

            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name !=
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: name has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }

            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host !=
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: remote_host has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            } 


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate !=
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: local_certificate has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate !=
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: remote_certificate has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            } 


            if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type !=
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type)
            {
                saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type;
                let arrayindex=i+1;
                let changedstr="Initiator Connection List No."+arrayindex+" item is changed: type has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type;
                initiator_conn_general_changedValues=[...initiator_conn_general_changedValues, changedstr];
            }  

        }


        for (i=saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i < changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
        {
          let new_initiator_conn = JSON.parse(JSON.stringify(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i]))
          saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn=[...saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn, new_initiator_conn];
        }
        

        saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn=JSON.parse(JSON.stringify(tempForDelete));
        changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn=JSON.parse(JSON.stringify(tempForDelete));



        IPsec_Initiator_Conn_General_ConfigChangedLog.set(initiator_conn_general_changedValues);
        ChangedIPsecConfig.set(saved_changed_ipsec_data);

        console.log(initiator_conn_general_changedValues);
      }
    }


    function saveInitiatorConnSubnet(Initiator_Conn_Selected)
    {
        console.log("save initiator conn subnet");
        console.log(Initiator_Conn_Selected)

        if (Initiator_Conn_Selected !="none")
        {
            console.log(changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole);
            console.log(ipsec_data.config.vpn_ipsec_basic.ipsecRole);
            console.log(saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole);

            if (1==changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole && 0==saved_changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole)
            {

                console.log("Please save basic page first.");
                alert("Please save basic page first.");

            }
            else
            {
                console.log("start to save initiator conn subnet");
            }


            let tempForDelete=[];
            for (let i = 0; i< changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length; i++)
            {
              if (!changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[i].delete)
              {
                tempForDelete=[...tempForDelete, changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[i]]
              }

            }


            let j=0;
 
            if (saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].type == 0)
            {
               // console.log(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length);
               // console.log(saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length);
                if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length < saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length)
                {
                    let deletedCount = saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length-changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length;
                        
                    let changedstr = "Delete "+deletedCount+" item(s) to initiator_conn ("+saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].name+") tunnel_subnet.";

                    initiator_conn_subnet_changedValues=[...initiator_conn_subnet_changedValues, changedstr];
                }

                if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length > saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length)
                {
                    let addedCount = changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length-saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length;
                    let changedstr = "Add "+addedCount+" item(s) to initiator_conn ("+saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].name+") tunnel_subnet.";
                
                    initiator_conn_subnet_changedValues=[...initiator_conn_subnet_changedValues, changedstr];
                }

                for (;j<Math.min(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length, saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length);j++)
                {
                    if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].local_subnet != saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].local_subnet)
                    {
                        saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].local_subnet=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].local_subnet;
                        let arrayindex=j+1;
                        let changedstr="Initiator Connection("+saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].name+") Tunnel Subnet List No."+arrayindex+" item is changed: local_subnet has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].local_subnet;
                        initiator_conn_subnet_changedValues=[...initiator_conn_subnet_changedValues, changedstr];

                    }

                    if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].remote_subnet != saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].remote_subnet)
                    {

                        saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].remote_subnet=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].remote_subnet;
                        let arrayindex=j+1;
                        let changedstr="Initiator Connection("+saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].name+") Tunnel Subnet List No."+arrayindex+" item is changed: remote_subnet has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].remote_subnet;
                        initiator_conn_subnet_changedValues=[...initiator_conn_subnet_changedValues, changedstr];

                
                    }


                    if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].enable != saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].enable)
                    {

                        saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].enable=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].enable;
                        let arrayindex=j+1;
                        let changedstr="Initiator Connection("+saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].name+") Tunnel Subnet List No."+arrayindex+" item is changed: enable has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].enable;
                        initiator_conn_subnet_changedValues=[...initiator_conn_subnet_changedValues, changedstr];

                
                    }


                    if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].delete != saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].delete)
                    {

                        saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].delete=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].delete;
                        let arrayindex=j+1;
                        let changedstr="Initiator Connection("+saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].name+") Tunnel Subnet List No."+arrayindex+" item is changed: delete has changed to "+changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j].delete;
                        initiator_conn_subnet_changedValues=[...initiator_conn_subnet_changedValues, changedstr];

                
                    }

                }


                if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length > saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length)
                {
                    for (;j < changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length;j++)
                    {
                        let new_ics=JSON.parse(JSON.stringify(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[j]));
                        saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[    Initiator_Conn_Selected].tunnel_subnet=[...saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet, new_ics];

                    }
                }

            }
        
            saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[    Initiator_Conn_Selected].tunnel_subnet=JSON.parse(JSON.stringify(tempForDelete));
            changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet=JSON.parse(JSON.stringify(tempForDelete));



            IPsec_Initiator_Conn_Subnet_ConfigChangedLog.set(initiator_conn_subnet_changedValues);
            ChangedIPsecConfig.set(saved_changed_ipsec_data);

            console.log(initiator_conn_subnet_changedValues);
        }

    }

    let BackupICG={
        "enable":false,
        "delete":false,
        "name": 0,
        "remote_host":"",
        "local_certificate": "",
        "remote_certificate": "",
        "type": 0
    };

    let newICG_item=[{
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        },
        {
            "enable":true,
            "delete":false,
            "name": 0,
            "remote_host":"",
            "local_certificate": "",
            "remote_certificate": "",
            "type": 0,
            "tunnel_subnet":[]
        }
    ];

    function deleteInitiatorConnGeneral(index)
    {
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].delete=true;
    }


    function RestoreDeleteInitiatorConnGeneral(index)
    {
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].delete=false;
    }


    function modalTriggerInitiatorConnGeneral(index){
      initiatorConnGeneralModal = true;
      initiatorConnGeneralCurrentIndex=index;
      BackupICG.enable=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].enable;
      BackupICG.delete=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].delete;
      BackupICG.name=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].name;
      BackupICG.remote_host=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].remote_host;
      BackupICG.local_certificate=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].local_certificate;
      BackupICG.remote_certificate=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].remote_certificate;
      BackupICG.type=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].type;

    }

    function NoModifyICG(index){
      initiatorConnGeneralModal = false;
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].enable=BackupICG.enable;      
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].delete=BackupICG.delete; 
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].name=BackupICG.name;
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].remote_host=BackupICG.remote_host;
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].local_certificate=BackupICG.local_certificate;
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].remote_certificate=BackupICG.remote_certificate;
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].type=BackupICG.type;

    }

    function ModifyICG(index){
      initiatorConnGeneralModal = false;

    }


    function NewICG_Item_Invoker(index){
      newICG_item[index].enable=true;
      newICG_item[index].delete=false;      
      newICG_item[index].name="";
      newICG_item[index].remote_host="";
      newICG_item[index].local_certificate="";
      newICG_item[index].remote_certificate="";
      newICG_item[index].type=0;
      newICG_index=index;
      newICG_Modal=true;

    }

    function AddICG(index){

        newICG_Modal = false;

        changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn=[...changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn,newICG_item[index]];

        //console.log(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn);

    }

    let BackupRCS={
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    };

    let newRCS_item=[{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ];



    function modalTriggerResponderConnSubnet(index){

      responderConnSubnetModal=true;
      responderConnSubnetCurrentIndex=index;

      BackupRCS.enable=changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].enable;
      BackupRCS.delete=changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].delete;
      BackupRCS.local_subnet=changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].local_subnet;
      BackupRCS.remote_subnet=changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].remote_subnet;

    }

    function NoModifyRCS(index){
      
      responderConnSubnetModal=false;
      changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].enable=BackupRCS.enable;
      changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].delete=BackupRCS.delete;      
      changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].local_subnet=BackupRCS.local_subnet;
      changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[index].remote_subnet=BackupRCS.remote_subnet;

    }

    function ModifyRCS(index){
      responderConnSubnetModal = false;

    }

    function NewRCS_Item_Invoker(index){

      newRCS_item[index].enable=true;
      newRCS_item[index].delete=false;      
      newRCS_item[index].local_subnet="";
      newRCS_item[index].remote_subnet=""; 

      newRCS_index=index;
      newRCS_Modal=true;

    }

    function AddRCS(index){

        newRCS_Modal = false;

        changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet=[...changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet,newRCS_item[index]];
    }



   let BackupICS={
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    };

    let newICS_item=[[{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],
[{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],
   [{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],
    [{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],
   [{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],
  [{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],
    [{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],
    [{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],[{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ],[{
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    },
    {
        "enable":true,
        "delete":false,
        "local_subnet": "",
        "remote_subnet": ""
    }
    ]
    ];


    function RestoreDeleteInitiatorConnSubnet(index)
    {
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].delete=false;
    }

    function deleteInitiatorConnSubnet(index)
    {
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].delete=true;
    }



    function modalTriggerInitiatorConnSubnet(index){

      initiatorConnSubnetModal=true;
      initiatorConnSubnetCurrentIndex=index;

      BackupICS.enable=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].enable;
      BackupICS.delete=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].delete;      
      BackupICS.local_subnet=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].local_subnet;
      BackupICS.remote_subnet=changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].remote_subnet;

    }

    function NoModifyICS(index){
      
      initiatorConnSubnetModal=false;

      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].enable=BackupICS.enable;
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].delete=BackupICS.delete;

      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].local_subnet=BackupICS.local_subnet;
      changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[index].remote_subnet=BackupICS.remote_subnet;

    }

    function ModifyICS(index){
      initiatorConnSubnetModal = false;

    }

    function NewICS_Item_Invoker(index){

      newICS_item[Initiator_Conn_Selected][index].enable=true;
      newICS_item[Initiator_Conn_Selected][index].delete=false;      
      newICS_item[Initiator_Conn_Selected][index].local_subnet="";
      newICS_item[Initiator_Conn_Selected][index].remote_subnet=""; 

      newICS_index=index;
      newICS_Modal=true;

    }

    function AddICS(index){

        newICS_Modal = false;


       // console.log("before");
        //console.log(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length);
        //console.log(saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length);
        changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet=[...changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet,newICS_item[Initiator_Conn_Selected][index]];
        //console.log("addICS");
        //console.log(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length);
       // console.log(saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length);
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

  let getIpsecStatusReady=0;
  let StringIpsecStatus='';
  let binaryData;

async function getIpsecStatus() {
    const res = await fetch(window.location.origin+"/geTIpsecStatus", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      console.log("getIPsecStatus");

      let status_data =await res.text();
      console.log(status_data);


      StringIpsecStatus=status_data;
      console.log(StringIpsecStatus);
      getIpsecStatusReady=1;
    
    }
    else
    {
      console.log("error get status")
    }
  }



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
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
        getIpsecStatus();
    }
    else if (sessionid && ipsec_data != "")
    {
        console.log("ipsec_data is not null");
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getMachineCertificate();
        getCACertificate();
        getRemoteCertificate();
        getIpsecStatus();
        console.log(StringIpsecStatus);
        getDataReady=1;
        changed_ipsec_data=JSON.parse(JSON.stringify(saved_changed_ipsec_data));

      if (basic_changedValues.length==0)
      {
          changed_ipsec_data.config.vpn_ipsec_basic=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_basic)); 
      }
      
      if (responder_conn_changedValues.length==0)
      {
          changed_ipsec_data.config.vpn_ipsec_connection.responder_conn=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.responder_conn)); 
      }
      
      if (initiator_conn_general_changedValues.length==0)
      {

        for (let i=0;i<ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
        {
          changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].name));

          changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_host));

          changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].local_certificate));

          changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].remote_certificate));

          changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type));

        }
      }

      if (initiator_conn_subnet_changedValues.length==0)
      {
        let i=0;
        for (;i<ipsec_data.config.vpn_ipsec_connection.initiator_conn.length;i++)
        {
          if (ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type == 0)
          {

            let j=0;
            for (;j<ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet.length;j++)
            {
              changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].local_subnet=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].local_subnet));

              changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].remote_subnet=JSON.parse(JSON.stringify(ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].remote_subnet));
            }

            for (;j<changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet.length;j++)
            {
              changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].local_subnet="";
              changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].remote_subnet="";
            }
          }
        }

        for (;i<changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length; i++)
        {
          if (changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].type == 0)
          {
            for (let j=0;j<changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet.length;j++)
            {
              changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].local_subnet="";
              changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[i].tunnel_subnet[j].remote_subnet="";
            }
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
{#if changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1}

 
<Table class="text-gray-900">
{#if getIpsecStatusReady == 1}
 
<pre style="white-space: pre-wrap;">{StringIpsecStatus}</pre>

{/if}

</Table>



{:else}
<Table>
  <caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
  >
    IPsec is disabled now. Please go to basic page to enable it.

   </caption>
</Table>
{/if}
{/if}
    </TabItem>

      <TabItem title="Basic">

{#if getDataReady == 1}
      <table>
      <tr>
          <td></td><td><p class="pl-5 pt-5 text-lg font-light text-left">IPsec Service</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn} value={0}>Disable</Radio>
  <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn} value={1} >Enable</Radio>

</div></td>
      </tr>


      <tr>
          <td></td>

{#if changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1}    
          <td><p class="pl-5 pt-5 text-lg font-light text-left">IPsec Role</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole} value={0}>Responder</Radio>
  <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole} value={1} >Initiator</Radio>
</div></td>
{:else}
 <td><p class="pl-5 pt-5 text-lg font-light text-left text-gray-400 dark:text-gray-500">IPsec Role</p></td>

    <td class="pl-5 pt-5"><div class="flex gap-4">
      <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole} value={0} disabled>Responder</Radio>
  <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole} value={1} disabled>Initiator</Radio>
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

{#if changed_ipsec_data.config.vpn_ipsec_basic.ipsecServiceEn == 1}

{#if changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 1}

<TabItem title="Connection">


<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    General
    </span>

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>    
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">Name</TableHeadCell>
    <TableHeadCell class="w-18">Remote Host</TableHeadCell>
    <TableHeadCell class="w-18">Remote Certificate</TableHeadCell>
    <TableHeadCell class="w-18">Local Certificate</TableHeadCell>
    <TableHeadCell class="w-18">Type</TableHeadCell>


  </TableHead>
  
  <TableBody>
{#each changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn as initiatorConn, index}

{#if initiatorConn.delete}


    <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteInitiatorConnGeneral(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={initiatorConn.enable} disabled>

      </td>

      <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>

  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{initiatorConn.name}</td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{initiatorConn.remote_host}</td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{initiatorConn.remote_certificate}</td>
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{initiatorConn.local_certificate}</td>
{#if initiatorConn.type==0}
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Tunnel</td>
{:else if initiatorConn.type==1}
  <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">Transport</td>
{/if}
      </tr>



{:else}

    <TableBodyRow>
          <TableBodyCell class="!p-4 w-10">

      </TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerInitiatorConnGeneral(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

   <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteInitiatorConnGeneral(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>

    </TableBodyCell>


                    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={initiatorConn.enable}>

                    </TableBodyCell>
                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{initiatorConn.name}</TableBodyCell>
                    <TableBodyCell class="w-18">{initiatorConn.remote_host}</TableBodyCell>
                    <TableBodyCell class="w-18">{initiatorConn.remote_certificate}</TableBodyCell>
                    <TableBodyCell class="w-18">{initiatorConn.local_certificate}</TableBodyCell>
{#if initiatorConn.type==0}
                    <TableBodyCell class="w-18">Tunnel</TableBodyCell>
{:else if initiatorConn.type==1}
                    <TableBodyCell class="w-18">Transport</TableBodyCell>
{/if}


    </TableBodyRow>

{/if}


{/each}


<TableBodyRow>
      <TableBodyCell class="!p-4 w-10">

{#if changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length < 10}    
<button on:click={() => NewICG_Item_Invoker(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length)}>
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveInitiatorConnGeneral}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

  </TableBody>
</Table>

<Modal bind:open={newICG_Modal} size="lg" class="w-full" autoclose>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={newICG_item[newICG_index].enable}>
  Enable
</label>

<p class="mt-10"></p>

<table>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newICG_item[newICG_index].name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={newICG_item[newICG_index].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Certificate</p></td>
    <td class= "pl-4 pt-4">


<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={newICG_item[newICG_index].remote_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getRemoteCertReady== 1}
{#each remoteCertList as remoteCert, index}
<option value={remoteCert}>{remoteCert}</option>
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
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={newICG_item[newICG_index].local_certificate}>
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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={newICG_item[newICG_index].type} value={0}>Tunnel</Radio>
  <Radio bind:group={newICG_item[newICG_index].type} value={1} >Transport</Radio>
</div></td>


  </tr>





            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddICG(newICG_index)}>Add</Button></td>


    </tr>

  </table>
</form>
</Modal>


<Modal bind:open={initiatorConnGeneralModal} size="lg" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[initiatorConnGeneralCurrentIndex].enable}>
  Enable
</label>


<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyICG(initiatorConnGeneralCurrentIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>
<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[initiatorConnGeneralCurrentIndex].name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>



<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Host</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[initiatorConnGeneralCurrentIndex].remote_host} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Certificate</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[initiatorConnGeneralCurrentIndex].remote_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getRemoteCertReady== 1}
{#each remoteCertList as remoteCert, index}
<option value={remoteCert}>{remoteCert}</option>
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
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[initiatorConnGeneralCurrentIndex].local_certificate}>
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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[initiatorConnGeneralCurrentIndex].type} value={0}>Tunnel</Radio>
  <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[initiatorConnGeneralCurrentIndex].type} value={1} >Transport</Radio>
</div></td>


  </tr>





            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyICG(initiatorConnGeneralCurrentIndex)}>Modify</Button></td>


    </tr>

  </table>
</form>

</Modal>


</AccordionItem>





  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tunnel Subnet
    </span>



<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-48" bind:value={Initiator_Conn_Selected}>
<option disabled="" value="none">Choose Connection ...</option>
{#each saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn as initiatorConn, index}
{#if saved_changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[index].type == 0}
<option value={index}>{initiatorConn.name}</option>
{/if}
{/each}
</select>

<p class="pt-10">

 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>
    <TableHeadCell class="w-10">Enable</TableHeadCell>    
    <TableHeadCell class="w-10">No</TableHeadCell>
    <TableHeadCell class="w-18">Local Subnet</TableHeadCell>
    <TableHeadCell class="w-18">Remote Subnet</TableHeadCell>

  </TableHead>
  <TableBody>



{#if Initiator_Conn_Selected !="none" && Initiator_Conn_Selected < changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn.length}

{#each changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet as tunnelSubnet, index}

{#if tunnelSubnet.delete}
  <tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">

<td class="px-6 py-1 whitespace-nowrap font-medium text-gray-900 dark:text-white !px-4 w-10">
<button on:click={() => RestoreDeleteInitiatorConnSubnet(index)}>
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
<input type="checkbox" class="disabled:cursor-not-allowed" bind:checked={tunnelSubnet.enable} disabled>

      </td>
                    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-10 strikeout">{index+1}</td>
                    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{tunnelSubnet.local_subnet}</td>
                    <td class="px-6 py-4 whitespace-nowrap font-medium  text-gray-900 dark:text-white w-18 strikeout">{tunnelSubnet.remote_subnet}</td>
      </tr>

{:else}
    <TableBodyRow>
          
      <TableBodyCell class="!p-4 w-10"></TableBodyCell>
      <TableBodyCell class="!p-0 w-10">
<button on:click={() => modalTriggerInitiatorConnSubnet(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 -2 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

    <TableBodyCell class="!p-0 w-10">
<button on:click={() => deleteInitiatorConnSubnet(index)}>    
    <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 -1.5 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
  <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
    </TableBodyCell>
                    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={tunnelSubnet.enable}>
                    </TableBodyCell>
                    <TableBodyCell class="w-10">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{tunnelSubnet.local_subnet}</TableBodyCell>
                    <TableBodyCell class="w-18">{tunnelSubnet.remote_subnet}</TableBodyCell>


    </TableBodyRow>
{/if}


{/each}
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-10">
{#if changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length < 10}  
<button on:click={() => NewICS_Item_Invoker(changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
{/if}


       </TableBodyCell>
      <TableBodyCell class="!p-0 w-10"></TableBodyCell>
         <TableBodyCell class="!p-0 w-10"></TableBodyCell>
                    <TableBodyCell class="w-8"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>                    
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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveInitiatorConnSubnet(Initiator_Conn_Selected)}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>

{/if}
  </TableBody>
</Table>


<Modal bind:open={initiatorConnSubnetModal} size="lg" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[initiatorConnSubnetCurrentIndex].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyICS(initiatorConnSubnetCurrentIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>


<table>



<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Local Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[initiatorConnSubnetCurrentIndex].local_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Remote Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.initiator_conn[Initiator_Conn_Selected].tunnel_subnet[initiatorConnSubnetCurrentIndex].remote_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>





            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyICS(initiatorConnSubnetCurrentIndex)}>Modify</Button></td>


    </tr>

  </table>
</form>

</Modal>


<Modal bind:open={newICS_Modal} size="md" class="w-full" autoclose>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={newICS_item[Initiator_Conn_Selected][newICS_index].enable}>
  Enable
</label>
<p class="mt-10"></p>

<table>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Local Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={newICS_item[Initiator_Conn_Selected][newICS_index].local_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Remote Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={newICS_item[Initiator_Conn_Selected][newICS_index].remote_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddICS(newICS_index)}>Add</Button></td>


    </tr>

</table>
</Modal>




 </AccordionItem>
  


</Accordion>




    </TabItem>

{:else if changed_ipsec_data.config.vpn_ipsec_basic.ipsecRole == 0}

    <TabItem title="Connection">

<table>


<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Name</p></td><td class="pl-5 pt-5"><input type="text" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.name} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>



  </tr>

<tr>
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Local Certificate</p></td>
    <td class= "pl-4 pt-4">

    <select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.local_certificate}>
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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Remote Certificate</p></td>
    <td class= "pl-4 pt-4">
<select class="block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-full" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.remote_certificate}>
<option disabled="" value="none">Choose Certificate ...</option>
{#if getRemoteCertReady== 1}
{#each remoteCertList as remoteCert, index}
<option value={remoteCert}>{remoteCert}</option>
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
      <td><p class="pl-20 pt-4 text-lg font-light text-right">Type</p></td>
 <td class="pl-5 pt-5"><div class="flex gap-4">

      <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.type} value={0}>Tunnel</Radio>
  <Radio bind:group={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.type} value={1} >Transport</Radio>
</div></td>


  </tr>



</table>
<p class="pt-10"></p>

{#if changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.type == 0}

<Accordion>

  <AccordionItem {defaultClass}>


    <span slot="header" class="pl-4">
    Tunnel Subnet
    </span>


 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell class="!p-4 w-4">
    </TableHeadCell>

    <TableHeadCell class="w-10">Enable</TableHeadCell>    
    <TableHeadCell class="w-8">No</TableHeadCell>
    <TableHeadCell class="w-18">Local Subnet</TableHeadCell>
    <TableHeadCell class="w-18">Remote Subnet</TableHeadCell>

  </TableHead>
  <TableBody>
{#each changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet as tunnelSubnet, index}


    <TableBodyRow>
          
      <TableBodyCell class="!p-4"></TableBodyCell>
      <TableBodyCell class="!p-4 w-8">
<button on:click={() => modalTriggerResponderConnSubnet(index)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">
<path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>


       </TableBodyCell>

       <TableBodyCell class="!p-4"></TableBodyCell>
                    <TableBodyCell class="w-10">
<input type="checkbox"  bind:checked={tunnelSubnet.enable}>

                    </TableBodyCell>
                    <TableBodyCell class="w-8">{index+1}</TableBodyCell>
                    <TableBodyCell class="w-18">{tunnelSubnet.local_subnet}</TableBodyCell>
                    <TableBodyCell class="w-18">{tunnelSubnet.remote_subnet}</TableBodyCell>

                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

    </TableBodyRow>
{/each}
    <TableBodyRow>
      <TableBodyCell class="!p-4 w-8">
{#if changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet.length < 10}  
<button on:click={() => NewRCS_Item_Invoker(changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet.length)}>
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-gray-500 ml-2 dark:text-pink-500 w-6 h-6">

  <path d="M12 4V20M20 12L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
</svg>
      </button>
{/if}


       </TableBodyCell>
       <TableBodyCell class="!p-4"></TableBodyCell>
       <TableBodyCell class="!p-4"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>

                    <TableBodyCell class="w-8"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-18"></TableBodyCell>
                    <TableBodyCell class="w-10"></TableBodyCell>
    </TableBodyRow>




  </TableBody>
</Table>




<Modal bind:open={responderConnSubnetModal} size="lg" class="w-full" permanent={true}>

  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[responderConnSubnetCurrentIndex].enable}>
  Enable
</label>

<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={NoModifyRCS(responderConnSubnetCurrentIndex)}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<p class="mt-10"></p>


<table>



<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Local Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[responderConnSubnetCurrentIndex].local_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Remote Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={changed_ipsec_data.config.vpn_ipsec_connection.responder_conn.tunnel_subnet[responderConnSubnetCurrentIndex].remote_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>





            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={ModifyRCS(responderConnSubnetCurrentIndex)}>Modify</Button></td>


    </tr>

  </table>
</form>

</Modal>


<Modal bind:open={newRCS_Modal} size="md" class="w-full" autoclose>


  <form action="#">

<label>
  <input class="center" type=checkbox bind:checked={newRCS_item[newRCS_index].enable}>
  Enable
</label>

<table>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Local Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={newRCS_item[newRCS_index].local_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>

<tr>
      <td>
      <p class="pl-10 pt-4 text-lg font-light text-right">
Remote Subnet
      </p></td>
      <td class="pl-5 pt-5"><input type="text" bind:value={newRCS_item[newRCS_index].remote_subnet} class="bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"></td>

  </tr>



            <tr>
    <td></td>
    <td></td>

    <td></td>
    <td></td>
    <td class="pl-10"><Button color="dark" pill={true} on:click={AddRCS(newRCS_index)}>Add</Button></td>


    </tr>

</table>

</form>
</Modal>




</AccordionItem>
</Accordion>

<p class="mt-10"></p>


{/if}

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
    <td class="pl-10"><Button color="blue" pill={true} on:click={saveResponderConn}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>

    </TabItem>
{/if}
     {/if}
    {/if}




</Tabs>
