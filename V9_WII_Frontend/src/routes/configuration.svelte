<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label,Toggle,Checkbox, Input, Tooltip, Radio } from 'flowbite-svelte';

  import { sessionidG } from "./sessionG.js";

  let selectedFile = null;
  let sessionid;
  let fileContent; 
  let sessionBinary;

   sessionidG.subscribe(val => {
     sessionid = val;
   });



  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      selectedFile = file;
      if (sessionid) 
      {
        const hexArray = sessionid.match(/.{1,2}/g); 
        const byteValues = hexArray.map(hex => parseInt(hex, 16));
        sessionBinary = new Uint8Array(byteValues);
      }


    const reader = new FileReader();
      reader.onload = event => {
          const fileBinary= new Uint8Array(event.target.result);
          fileContent=new Uint8Array(fileBinary.length+sessionBinary.length);
          fileContent.set(sessionBinary,0);
          fileContent.set(fileBinary, sessionBinary.length);
      };

      reader.readAsArrayBuffer(file);

    }
  }



  async function uploadFile() {
    if (selectedFile) {

      const res = await fetch(window.location.origin+"/uploadConfig", {
      method: 'POST',
      body: fileContent,
          headers: {
            'Content-Type': 'application/octet-stream',
          },
    })

    if (res.status == 200)
    {
      console.log("200 OK");
    }



    }
  }





  async function downloadFile() {
    try {
      const response = await fetch(window.location.origin+"/downloadConfig", {
        method: 'POST',
         body: JSON.stringify({
        sessionid
      })
      });
      
    if (response.status == 200)
    {
      const blob = await response.blob();
      const export_filename = 'download.config';

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = export_filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error exporting file:', error);
    }
  }


 </script>


<table>
    <tr>
    <td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Backup Current Configuration</p></td>

<td class="pl-5 pt-5"><Button on:click={downloadFile}>Download</Button></td>
  </tr>


<tr>

<td class="w-85"><p class="pl-10 pt-5 text-lg font-light text-right">Restore Configuration</p></td>
<td class="pl-5 pt-5">

<input type="file" id="configUpload" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400" on:change={handleFileUpload}>

</td>
<td class="pl-5 pt-5">
  <Button on:click={uploadFile}>Upload</Button>

</td>

</tr>

</table>





