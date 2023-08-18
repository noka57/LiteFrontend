<script>
  import { Tabs, TabItem, AccordionItem, Accordion, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,TableSearch, Button, Label,Toggle,Checkbox, Input, Tooltip, Radio } from 'flowbite-svelte';

  import { sessionidG } from "./sessionG.js";

  let selectedFile = null;
  let sessionid;
  let filename;
  let fileSize;
  let fileContent; 

   sessionidG.subscribe(val => {
     sessionid = val;
   });


  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      selectedFile = file;
      console.log("selectedFile:");
      console.log(selectedFile);
      console.log(selectedFile.size);
      fileSize=selectedFile.size;
      file_name=selectedFile.name;


    const reader = new FileReader();
      reader.onload = event => {
        fileContent = event.target.result;
      };

      reader.readAsText(file, 'utf-8');

    }
  }


  async function uploadFile() {
    if (selectedFile) {

       const res = await fetch(window.location.origin+"/uploadConfig", {
      method: 'POST',
      body: JSON.stringify({
        sessionid,
        filename,
        fileSize,
        fileContent
      })
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
      const export_filename = 'downloaded_file'; // Change this to the desired filename

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





