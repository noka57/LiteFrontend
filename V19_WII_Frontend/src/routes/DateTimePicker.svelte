<script>
  export let value = "";  // final combined value
  export let hideTime = false;  
  export let disabled = false; //
  let date = "";
  let hours = "00";
  let minutes = "00";


  const minutesList = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  $: hoursList = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));

 function formatDate(dateStr) {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-");
    return `${y}/${m}/${d}`;
  }


  let lastValue = "";

  // When parent changes value
  $: if (value !== lastValue) {
    lastValue = value;
    if (value) {
      const [d, hm] = value.split(" ");
      if (d){
       date = d.replaceAll("/", "-");
      }
      if (!hideTime && hm) {
        const [h, m] = hm.split(":");
        hours = h;
        minutes = m;
      }
    }
  }


  function updateValue()
  {
      if (disabled) return; // optional safety
      value = date
      ? hideTime
        ? `${formatDate(date)}`
        : `${formatDate(date)} ${hours}:${minutes}`
      : "";
  }


</script>

<div class="flex items-center gap-2 border rounded p-2">
  <!-- Date picker -->

{#if disabled}
  <input
    type="date"
    bind:value={date}
    class="text-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1 disabled:cursor-not-allowed"
    placeholder="Select date" 
    on:change={updateValue} 
    disabled={disabled}
  />

{:else}
  <input
    type="date"
    bind:value={date}
    class="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1 disabled:cursor-not-allowed"
    placeholder="Select date" 
    on:change={updateValue} 
    disabled={disabled}
  />
{/if}




 {#if !hideTime}
  <!-- Hours -->
  <select bind:value={hours} class="block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1 disabled:cursor-not-allowed" on:change={updateValue} disabled={disabled}>
    {#each hoursList as h}
      <option value={h}>{h}</option>
    {/each}
  </select>

  <span>:</span>

  <!-- Minutes -->
  <select bind:value={minutes} class="block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1 disabled:cursor-not-allowed" on:change={updateValue} disabled={disabled}>
    {#each minutesList as m}
      <option value={m}>{m}</option>
    {/each}
  </select>
{/if}

</div>


