<script>
  export let value = "";  // final combined value
  export let hideTime = false;  
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
      value = date
      ? hideTime
        ? `${formatDate(date)}`
        : `${formatDate(date)} ${hours}:${minutes}`
      : "";
  }


</script>

<div class="flex items-center gap-2 border rounded p-2">
  <!-- Date picker -->
  <input
    type="date"
    bind:value={date}
    class="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1"
    placeholder="Select date" 
    on:change={updateValue} 
  />

 {#if !hideTime}
  <!-- Hours -->
  <select bind:value={hours} class="block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1" on:change={updateValue}>
    {#each hoursList as h}
      <option value={h}>{h}</option>
    {/each}
  </select>

  <span>:</span>

  <!-- Minutes -->
  <select bind:value={minutes} class="block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1" on:change={updateValue}>
    {#each minutesList as m}
      <option value={m}>{m}</option>
    {/each}
  </select>
{/if}

</div>


