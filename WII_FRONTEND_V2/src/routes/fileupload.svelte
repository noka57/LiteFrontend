<script>
  import { Fileupload, Label, Button } from 'flowbite-svelte'
  let value;

  const btn1 = () => {
    alert('You clicked btn1.');
    if (value) {
      alert(value);
    }
    else
    {
      alert('no file');
    }
  };
</script>

<Label class="space-y-2 mb-2">
  <span>Upload file</span>
  <Fileupload id="filetest" bind:value/>
</Label>

<Button on:click={btn1}>Update</Button>
