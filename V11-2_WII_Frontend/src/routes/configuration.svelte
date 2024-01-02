<script>
  import { Button, Spinner, Modal} from 'flowbite-svelte';

  import { sessionidG } from "./sessionG.js";

  let selectedFile = null;
  let sessionid;
  let fileContent; 
  let sessionBinary;

  let defaultModal = false;
  let uploadconfigIsValid =0;
  let CheckedConfigInvalid=0;

   sessionidG.subscribe(val => {
     sessionid = val;
   });


  function closeModal()
  {
    defaultModal = false;
    uploadconfigIsValid =0;
    CheckedConfigInvalid=0;
  }


  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) 
    {
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
    if (selectedFile) 
    {
      defaultModal=true;

      const res = await fetch(window.location.origin+"/uploadConfig", {
      method: 'POST',
      body: fileContent,
          headers: {
            'Content-Type': 'application/octet-stream',
          },
    })

    if (res.status == 200)
    {
      uploadconfigIsValid=1;
      console.log("200 OK");

    }
    else
    {
      CheckedConfigInvalid=1;
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




<Modal bind:open={defaultModal} size="md" class="w-full" permanent={true}>
{#if CheckedConfigInvalid == 1}
<button type="button" class="ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300  hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5" aria-label="Close" on:click={closeModal}><span class="sr-only">Close modal</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
{/if}

<table>
{#if uploadconfigIsValid == 0}
<tr>
{#if CheckedConfigInvalid == 0}
<td><Spinner size={16} /></td>
<td> <p class="pl-5" style="color:red; font-size:18px">Verifying configuration now ....
</p></td>
{:else if CheckedConfigInvalid == 1}
<td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td> <p class="pl-5" style="color:red; font-size:18px">It's invalid configuration, please upload valid configuration.
</p></td>
{/if}
</tr>
{:else if uploadconfigIsValid == 1}
<tr><td>
<svg class="w-16 h-16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</td>
<td>
<p class="pl-5" style="color:red; font-size:18px">It's valid configuration.
</td>
</tr>
<tr>
<td class="pt-5">
<Spinner size={16} /></td> 
<td class="pt-5">
<p class="pl-5" style="color:red; font-size:18px">Applying configuration and restart ....
</p>
</td>
</tr>
{/if}

</table>
</Modal>

