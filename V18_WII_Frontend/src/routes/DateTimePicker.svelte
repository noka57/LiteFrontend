<script>
  export let value = "";  // final combined value
  let date = "";
  let hours = "12";
  let minutes = "00";
  let meridiem = "AM";
  let use12h = false;

  const minutesList = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  $: hoursList = use12h
    ? Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"))
    : Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));

  // build final value
  $: value =
    date && use12h
      ? `${date} ${hours}:${minutes} ${meridiem}`
      : date
      ? `${date} ${hours}:${minutes}`
      : "";
</script>

<div class="flex items-center gap-2 border rounded p-2">
  <!-- Date picker -->
  <input
    type="date"
    bind:value={date}
    class="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2"
    placeholder="Select date"
  />

  <!-- Hours -->
  <select bind:value={hours} class="block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2">
    {#each hoursList as h}
      <option value={h}>{h}</option>
    {/each}
  </select>

  <span>:</span>

  <!-- Minutes -->
  <select bind:value={minutes} class="block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2">
    {#each minutesList as m}
      <option value={m}>{m}</option>
    {/each}
  </select>

</div>


