<script>
    let files;
    let value;
    let dataFile = null;


    function upload() {
        const formData = new FormData();
        formData.append('damName', value);
        formData.append('dataFile', files[0]);
        const upload = fetch('http://localhost:4173/file', {
            method: 'POST',
            body: formData
        }).then((response) => response.json()).then((result) => {
            console.log('Success:', result);
        })
                .catch((error) => {
                    console.error('Error:', error);
                });
    }
</script>

<input id="fileUpload" type="file" bind:files>

{#if dataFile && files[0]}
    <p>
        {files[0].name}
    </p>
{/if}

{#if value}
    <button on:click={upload}>Submit</button>
{:else}
    <button on:click={upload} disabled>Submit</button>
{/if}