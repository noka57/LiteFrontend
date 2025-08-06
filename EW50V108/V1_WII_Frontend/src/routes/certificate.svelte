<script>
  import { Fileupload, Tabs, TabItem, Radio, Button, Dropdown, DropdownItem, Label, FloatingLabelInput, Modal,
  Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, AccordionItem, Accordion, Input} from 'flowbite-svelte';
  import forge from 'node-forge';
  import { onMount } from 'svelte';
  import { sessionidG } from "./sessionG.js";
  import * as asn1js from 'asn1js';
  import { CertificateRevocationList, RevokedCertificate } from 'pkijs';

  import { 
    certificateConfig,
    Certificate_Settings_ConfigChangedLog,
    Certificate_CRL_ConfigChangedLog,
    ChangedCertificateConfig
  } from "./configG.js"

    let certificate_data="";
    let changed_certificate_data = {};
    let saved_changed_certificate_data = {};
    let getDataReady=0;
    let certificate_settings_changedValues = [];
    let certificate_crl_changedValues = [];

    let sessionid;
    let sessionBinary;
    sessionidG.subscribe(val => {
        sessionid = val;
    });

    Certificate_Settings_ConfigChangedLog.subscribe(val => {
      certificate_settings_changedValues = val;
    });


    ChangedCertificateConfig.subscribe(val => {
      saved_changed_certificate_data = val;
    });

  let cdefault='No';
  let ddefault='Never';
  let newCRL=false;
  let CRLURL="";
  let newCRLFileUpload=false;

  let defaultClass='flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl';


  let selectedCACert = null;
  let caCertContent=""; 

  let CACertAliasName="";


  let selectedRemoteCert = null;
  let remoteCertContent=""; 

  let RemoteCertAliasName="";

  let selectedCRL = null;
  let crlContent="";
  let crlAliasName="";


  let selectedMachineCert = null;
  let machineCertContent=""; 
  let machinePrivateKeyContent="";

  let MachineCertAliasName="";
  let MachineCertP12Password="";

  let certificateData="";

  let fileMachineCertName="No file chosen";
  let fileCACertName="No file chosen";
  let fileRemoteCertName="No file chosen";



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

  let getCRLReady=0;
  let crlList=[];
  async function getcrl() {
    const res = await fetch(window.location.origin+"/GeTCRL", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      crlList =await res.json();
      console.log(crlList);
      getCRLReady=1;
    
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


  async function handleMachineCertUpload(event) 
  {
    const machineCert = event.target.files[0];
    if (machineCert) 
    {
      fileMachineCertName=machineCert.name;
      selectedMachineCert = machineCert;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          certificateData = new Uint8Array(event.target.result);
      };

      reader.readAsArrayBuffer(machineCert);

    }
  }


  async function uploadMachineCert()
  {
    if (MachineCertAliasName == "" || MachineCertP12Password == "" || certificateData == "")
    {
        alert('Alias Name is null or PKCS#12 password is null or machineCertData is null');
        console.log(MachineCertAliasName);
        console.log(MachineCertP12Password);
        console.log(certificateData);
    }
    else
    {

      if (selectedMachineCert && certificateData != "") 
      {
        console.log(MachineCertAliasName);
        console.log(MachineCertP12Password);
        console.log(certificateData);
        let p12;
        let decode_error=0;
        try
        {
          // Decode P12 certificate
          const p12Der = forge.util.createBuffer(certificateData);
          const p12Asn1 = forge.asn1.fromDer(p12Der);
          p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, MachineCertP12Password);
        }
        catch (error) 
        {
          console.log("error: "+ error);
          decode_error=1;
          alert("p12 password is invalid");
        }
          
        if (decode_error == 0)
        {
          const bags = p12.getBags({ bagType: forge.pki.oids.certBag });
          const certBag = bags[forge.pki.oids.certBag][0];
          console.log("certBag");
          console.log(certBag);
          const bags2 = p12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag });

          console.log("bags2");
          console.log(bags2);

          const keyBag = bags2[forge.pki.oids.pkcs8ShroudedKeyBag][0];
          console.log("keyBag");
          console.log(keyBag);

          let CertPem = "";
          let KeyPem = "";
          let eckey=0;
          if (certBag.cert == null)
          {
            let msg = {
                  type: 'CERTIFICATE',
                  body: forge.asn1.toDer(certBag.asn1).getBytes()
            };
            CertPem=forge.pem.encode(msg);

            console.log(CertPem);
            console.log(CertPem.length);

          }
          else
          {

            CertPem=forge.pki.certificateToPem(certBag.cert);

            console.log(CertPem);
            console.log(CertPem.length);
          }


            if (keyBag.key == null)
            {
              // convert to ASN.1, then DER, then PEM-encode
              let msg2 = {
                  type: 'PRIVATE KEY',
                  body: forge.asn1.toDer(keyBag.asn1).getBytes()
              };
              KeyPem = forge.pem.encode(msg2);

              let privatekeyOid="";
              privatekeyOid=forge.pki.getPrivateKeyOid(keyBag.asn1);
              console.log(privatekeyOid);
              if (privatekeyOid == "1.2.840.10045.2.1")
              {
                console.log("EC private key");
                eckey=1;
              }
              else if (privatekeyOid == "1.2.840.113549.1.1.1")
              {
                console.log("RSA Private key");
              }
            }
            else
            {
              KeyPem=forge.pki.privateKeyToPem(keyBag.key);
            }

            console.log("KeyPem");
            console.log(KeyPem);
            console.log(KeyPem.length);







          const textEncoder = new TextEncoder();
          let uint8ArrayAliasName = textEncoder.encode(MachineCertAliasName);

          machineCertContent=new Uint8Array(CertPem.length+sessionBinary.length+64);

          machineCertContent.set(sessionBinary,0);
          machineCertContent.set(uint8ArrayAliasName, sessionBinary.length);
          let uint8ArrayCert=textEncoder.encode(CertPem);
          machineCertContent.set(uint8ArrayCert,sessionBinary.length+64);

          machinePrivateKeyContent=new Uint8Array(KeyPem.length+sessionBinary.length+64);
          machinePrivateKeyContent.set(sessionBinary,0);
          machinePrivateKeyContent.set(uint8ArrayAliasName, sessionBinary.length);

          let uint8ArrayKey=textEncoder.encode(KeyPem);
          machinePrivateKeyContent.set(uint8ArrayKey, sessionBinary.length+64);


          const res = await fetch(window.location.origin+"/UploadMachineCert", {
          method: 'POST',
          body: machineCertContent,
              headers: {
              'Content-Type': 'application/octet-stream',
              },
            }
          )

          if (res.status == 200)
          {
            console.log("200 Upload machineCertContent");
          }
          else
          {
            console.log("error Upload machineCertContent");
          }

          if (eckey==1)
          {
            const res2 = await fetch(window.location.origin+"/UploadEcMachinePrivate", {
            method: 'POST',
            body: machinePrivateKeyContent,
                headers: {
                'Content-Type': 'application/octet-stream',
                },
              }
            )

            if (res2.status == 200)
            {
              console.log("200 Upload machineEcPrivateKeyContent");

            }
            else
            {
              console.log("error Upload machineEcPrivateKeyContent");
            }
          }
          else
          {
            const res2 = await fetch(window.location.origin+"/UploadrsaMachinePrivate", {
            method: 'POST',
            body: machinePrivateKeyContent,
                headers: {
                'Content-Type': 'application/octet-stream',
                },
              }
            )

            if (res2.status == 200)
            {
              console.log("200 Upload machineRSAPrivateKeyContent");

            }
            else
            {
              console.log("error Upload machineRSAPrivateKeyContent");
            }          
          }
          getMachineCertificate();       
        }

      }
    }
  }


  async function handleCACertUpload(event) 
  {
    const caCert = event.target.files[0];
    if (caCert) 
    {
      fileCACertName=caCert.name;
      selectedCACert = caCert;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const CACertBinary= new Uint8Array(event.target.result);
          caCertContent=new Uint8Array(CACertBinary.length+sessionBinary.length+64);
          caCertContent.set(sessionBinary,0);
          caCertContent.set(CACertBinary, sessionBinary.length+64);
      };

      reader.readAsArrayBuffer(caCert);

    }
  }

  async function uploadCaCert() 
  {
    if (CACertAliasName == "" || caCertContent == "")
    {
        alert('Alias Name is null or caCertContent is null');
    }
    else
    {

      if (selectedCACert) 
      {
        console.log(CACertAliasName)

        const textEncoder = new TextEncoder();
        let uint8ArrayResult = textEncoder.encode(CACertAliasName);
        console.log("caCertContent");
        console.log(caCertContent);
        caCertContent.set(uint8ArrayResult, sessionBinary.length);


        console.log(CACertAliasName);
        const res = await fetch(window.location.origin+"/UploaDCaCert", {
        method: 'POST',
        body: caCertContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {

          console.log("200 UploadCACert");
          getCACertificate();

        }
        else
        {
          console.log("error UploadCACert");
        }


      }
    }
  }


  let crlData = ''; // Initialize variable to store CRL data
 let issuer = ''; // Initialize variable to store issuer information
  let revokedCertificates = []; // Initialize variable to store revoked certificates

  async function handleCRLUpload_2(event)
  {
    const crl = event.target.files[0];
    if (crl) 
    {

      const reader = new FileReader(); // Create a new file reader
    
      reader.onload = function(event) 
      {
        // Once file is loaded, store its contents in crlData
        crlData = event.target.result;
        // Call function to decode and display CRL
        extractCRLInformation();
      };
    
      // Read the file as text
      reader.readAsText(crl);


     /* selectedRemoteCert = remoteCert;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const RemoteCertBinary= new Uint8Array(event.target.result);
          remoteCertContent=new Uint8Array(RemoteCertBinary.length+sessionBinary.length+64);
          remoteCertContent.set(sessionBinary,0);
          remoteCertContent.set(RemoteCertBinary, sessionBinary.length+64);
      };

      reader.readAsArrayBuffer(crl);*/

    }
  }

  function extractCRLInformation() 
  {


    const pemRegex = /-----BEGIN X509 CRL-----\r?\n?([\s\S]+)\r?\n?-----END X509 CRL-----/i;
    const match = pemRegex.exec(crlData);
    
    if (match && match[1]) 
    {
      // Extract the CRL data between BEGIN and END markers
      const base64CRLOrigin = match[1].replace(/[\r\n]/g, '');
      // Decode base64 CRL to binary
     // const binaryCRL = atob(base64CRL);
     


    const base64CRL = atob(base64CRLOrigin);
    const decodedCRL = new Uint8Array(base64CRL.length);
    for (let i = 0; i < base64CRL.length; i++) {
      decodedCRL[i] = base64CRL.charCodeAt(i);
    }

    // Parse CRL data using pkijs library
    const asn1 = asn1js.fromBER(decodedCRL);
    const crl = new CertificateRevocationList({ schema: asn1.result });

    // Extract the "next update" date from the parsed CRL
    const nextUpdate = crl.nextUpdate.value.toString(); // Adjust formatting as needed
    console.log("nextUpdate");
    console.log(nextUpdate);
    // Update nextUpdateDate variable with extracted date
    //nextUpdateDate = nextUpdate;

    const oidToFriendlyName = {
    '2.5.4.6': 'C',
    '2.5.4.8': 'ST',
    '2.5.4.7': 'L',
    '2.5.4.10': 'O',
    '2.5.4.11': 'OU',
    '2.5.4.3': 'CN'
    };



    issuer = crl.issuer.typesAndValues.map(typeAndValue => {
      const type = oidToFriendlyName[typeAndValue.type] || typeAndValue.type;
      const value = typeAndValue.value.valueBlock.value || typeAndValue.value.valueBlock.valueHex;
      return `${type} = ${value}`;
    }).join(', ');

    console.log(issuer);




    // Extract revoked certificates from the parsed CRL
    revokedCertificates = crl.revokedCertificates.map(revokedCert => {
      return {
        serialNumber: revokedCert.userCertificate.valueBlock.valueHex,
        revocationDate: revokedCert.revocationDate.value.toString() // Adjust formatting as needed
      };
    });


    console.log(revokedCertificates);
      // Display the decoded CRL
     // decodedCRL = binaryCRL;
    } 
    else 
    {
      decodedCRL = 'Invalid PEM format';
    }
  }




  /*
  let selectedCRL = null;
  let crlContent="";
  let crlAliasName="";

  */


  async function handleCRLFile(event)
  {
    const crl = event.target.files[0];
    if (crl) 
    {
      selectedCRL=crl;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }
      const reader = new FileReader();
      reader.onload = event => {
          const crlBinary= new Uint8Array(event.target.result);
          crlContent=new Uint8Array(crlBinary.length+sessionBinary.length+64);
          crlContent.set(sessionBinary,0);
          crlContent.set(crlBinary, sessionBinary.length+64);
      };

      reader.readAsArrayBuffer(crl);
    }
  
  }


  async function uploadCRL()
  {
    if (crlAliasName == "" || crlContent == "")
    {
        alert('Alias Name is null or content is null');
    }
    else
    {

      if (selectedCRL) 
      {
        console.log(crlAliasName)

        const textEncoder = new TextEncoder();
        let uint8ArrayResult = textEncoder.encode(crlAliasName);
        crlContent.set(uint8ArrayResult, sessionBinary.length);

        const res = await fetch(window.location.origin+"/UpLoaDcrl", {
        method: 'POST',
        body: crlContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {

          console.log("200 Upload crl");
          getcrl();

        }
        else
        {
          console.log("error Upload crl");
        }


      }
    }

  }
  

  async function handleRemoteCertUpload(event) 
  {
    const remoteCert = event.target.files[0];
    if (remoteCert) 
    {
      selectedRemoteCert = remoteCert;
      fileRemoteCertName= remoteCert.name;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


      const reader = new FileReader();
      reader.onload = event => {
          const RemoteCertBinary= new Uint8Array(event.target.result);
          remoteCertContent=new Uint8Array(RemoteCertBinary.length+sessionBinary.length+64);
          remoteCertContent.set(sessionBinary,0);
          remoteCertContent.set(RemoteCertBinary, sessionBinary.length+64);
      };

      reader.readAsArrayBuffer(remoteCert);

    }
  }


  async function uploadRemoteCert() {

    if (RemoteCertAliasName == "" || remoteCertContent == "")
    {
        alert('Alias Name is null or content is null');
    }
    else
    {

      if (selectedRemoteCert) 
      {
        console.log(RemoteCertAliasName)

        const textEncoder = new TextEncoder();
        let uint8ArrayResult = textEncoder.encode(RemoteCertAliasName);
        remoteCertContent.set(uint8ArrayResult, sessionBinary.length);

        const res = await fetch(window.location.origin+"/UpLoadRemoteCert", {
        method: 'POST',
        body: remoteCertContent,
            headers: {
              'Content-Type': 'application/octet-stream',
            },
          }
        )

        if (res.status == 200)
        {

          console.log("200 UploadRemoteCert");
          getRemoteCertificate();

        }
        else
        {
          console.log("error UploadRemoteCert");
        }


      }
    }
  }



  function NewCRLTrigger(){
    newCRL=true;
  }

  function NewCRLFileUploadTrigger(){
    newCRLFileUpload=true;
  }

  function saveCertificatesetting()
  {
    console.log("save certificate");
    if (certificate_settings_changedValues.length != 0)
    {
      certificate_settings_changedValues=[];
    }
    if (changed_certificate_data.config.authentication_certificate_certificateSettings.checkCert != certificate_data.config.authentication_certificate_certificateSettings.checkCert)
    {
      saved_changed_certificate_data.config.authentication_certificate_certificateSettings.checkCert=changed_certificate_data.config.authentication_certificate_certificateSettings.checkCert;
      let changedstr="Check the validity period of certificates and CRLs is changed to "+changed_certificate_data.config.authentication_certificate_certificateSettings.checkCert;

      certificate_settings_changedValues=[...certificate_settings_changedValues, changedstr];    
    }

    Certificate_Settings_ConfigChangedLog.set(certificate_settings_changedValues);
    ChangedCertificateConfig.set(saved_changed_certificate_data);

    console.log(certificate_settings_changedValues);
  }




  const RefreshMachineCert = () =>
  {
      fileMachineCertName="No file chosen";
      getMachineCertificate();

  }

  const RefreshCACert = () =>
  {
      fileCACertName="No file chosen";
      getCACertificate();

  } 

  const RefreshRemoteCert = () =>
  {
      fileRemoteCertName="No file chosen";
      getRemoteCertificate();

  } 

  const RefreshCRL = () =>
  {
      getcrl();

  } 

 async function getCertificateData() {
    const res = await fetch(window.location.origin+"/GetCertificateData", {
      method: 'POST',
      body: sessionBinary
    })

    if (res.status == 200)
    {
      certificate_data =await res.json();
      console.log(certificate_data);
      certificateConfig.set(certificate_data);

      changed_certificate_data = JSON.parse(JSON.stringify(certificate_data));
      saved_changed_certificate_data= JSON.parse(JSON.stringify(certificate_data));
      ChangedCertificateConfig.set(saved_changed_certificate_data);
      getDataReady=1;
    
    }
  }

  onMount(() => {

    console.log("certificate sessionid: ");
    console.log(sessionid);


    if (sessionid && certificate_data=="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getCertificateData();
        getRemoteCertificate();
        getCACertificate();
        getMachineCertificate();
        getcrl();
    }
    else if(sessionid && certificate_data!="")
    {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
        getDataReady=1;
        if (certificate_settings_changedValues.length==0)
        {
            changed_certificate_data=JSON.parse(JSON.stringify(saved_changed_certificate_data));
            changed_certificate_data.config.authentication_certificate_certificateSettings=JSON.parse(JSON.stringify(certificate_data.config.authentication_certificate_certificateSettings)); 
        }
      

    }

  });

</script>



<Tabs style="underline">

{#if 0}
  <TabItem open title="Certificate Settings">



<p class="mb-4 font-semibold text-gray-900 dark:text-white">Check the validity period of certificates and CRLs</p>
{#if getDataReady == 1}
<Radio bind:group={changed_certificate_data.config.authentication_certificate_certificateSettings.checkCert} class='p-3' value={1}>Always</Radio>
<Radio bind:group={changed_certificate_data.config.authentication_certificate_certificateSettings.checkCert} class='p-3' value={2}>Wait for synchronization of the system time</Radio>


<p class="pt-10"></p>
<table>
    <tr>
    <td></td>
    <td class="pl-10"></td>
    <td class="pl-80"><Button color="blue" pill={true} on:click={saveCertificatesetting}><svg class="mr-2 -ml-1 w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>Save</Button></td>


    </tr>
</table>
{/if}
  </TabItem>
{/if}

  <TabItem open title="Machine Certificates" on:click={RefreshMachineCert}>
  <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell class="w-64">Alias Name</TableHeadCell>
    <TableHeadCell class="w-64"></TableHeadCell>
    <TableHeadCell class="w-96"></TableHeadCell>
    <TableHeadCell class="w-36"></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

{#if getMachineCertReady==1}
{#each machineCertList as machineCert, index}
<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-64">{machineCert}</TableBodyCell>
      <TableBodyCell class="w-64"></TableBodyCell>
      <TableBodyCell class="w-96"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableHeadCell></TableHeadCell>
</TableBodyRow>
{/each}
{/if}


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name" bind:value={MachineCertAliasName}/></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled2" name="floating_filled2" type="text" label="PKCS#12 Password" bind:value={MachineCertP12Password}/></TableBodyCell>
      <TableBodyCell class="w-96">
      <label for="MachineCertUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg" >Choose File</label>

      <input type="file" id="MachineCertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"  style="display: none;" on:change={handleMachineCertUpload}>
      <span class="pl-4">{fileMachineCertName}</span>
      </TableBodyCell>
      <TableBodyCell class="w-36"><Button color="dark" on:click={uploadMachineCert}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>


  <TabItem title="CA Certificates" on:click={RefreshCACert}>
 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>

{#if getCaCertReady==1}
{#each caCertList as caCert, index}
<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-64">{caCert}</TableBodyCell>
      <TableBodyCell class="w-96"></TableBodyCell>
      <TableBodyCell class="w-36"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>

</TableBodyRow>
{/each}
{/if}

<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name" bind:value={CACertAliasName}/></TableBodyCell>
      <TableBodyCell class="w-96">
      <label for="CACertUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg" >Choose File</label>
      <input type="file" id="CACertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"  style="display: none;" on:change={handleCACertUpload}>
      <span class="pl-4">{fileCACertName}</span>

      </TableBodyCell>
      <TableBodyCell class="w-36"><Button color="dark" on:click={uploadCaCert}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>


  <TabItem title="Remote Certificates" on:click={RefreshRemoteCert}>
 <Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>



{#if getRemoteCertReady==1}
{#each remoteCertList as remoteCert, index}
<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-64">{remoteCert}</TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>

</TableBodyRow>
{/each}
{/if}


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name" bind:value={RemoteCertAliasName}/></TableBodyCell>
      <TableBodyCell class="w-96">

      <label for="RemoteCertUpload" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg" >Choose File</label>
      <input type="file" id="RemoteCertUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"  style="display: none;" on:change={handleRemoteCertUpload}>
      <span class="pl-4">{fileRemoteCertName}</span>


</TableBodyCell>
      <TableBodyCell class="w-36"><Button color="dark" on:click={uploadRemoteCert}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
  </TabItem>



{#if 1}  
    <TabItem title="CRL" on:click={RefreshCRL}>

<Table shadow striped={true} tableNoWFull={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
    </TableHeadCell>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Alias Name</TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody>


{#if getCRLReady==1}
{#each crlList as crl, index}
<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10">{index+1}</TableBodyCell>
      <TableBodyCell class="w-64">{crl}</TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>

</TableBodyRow>
{/each}
{/if}


<TableBodyRow>
      <TableBodyCell class="!p-4">

      </TableBodyCell>
      <TableBodyCell class="w-10"></TableBodyCell>
      <TableBodyCell class="w-64"><FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Alias Name" bind:value={crlAliasName}/></TableBodyCell>
      <TableBodyCell class="w-96"><input type="file" id="crlUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleCRLFile}>

</TableBodyCell>
      <TableBodyCell class="w-36"> <Button color="dark" on:click={uploadCRL}>Upload</Button></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>



 

  </TabItem>
  {/if}
</Tabs>