<script>
  export let value = 10;
  export let max = 105;
  export let color = "currentColor";
  let x=50;
  let y=5;
  $: progressPath = () => {
    if (value <= 0) 
    {
      console.log("value <=0");
      console.log(value);
      console.log(max);
      return "";
    } 
    else if (value >= max) 
    {
      console.log("value >=max");
      console.log(value);
      console.log(max);
      console.log(value >= max);      
      return "M50,5A35 35 0 1 1 49.9999 5";
    } 
    else 
    {

      console.log("value < max");
      console.log(value);
      console.log(max);     

      const angle = Math.PI * 2 * (value / max);
      x = 50 + Math.cos(angle - Math.PI / 2) * 35;
      y = 40 + Math.sin(angle - Math.PI / 2) * 35;
      let path = "M50,5";
      if (value<=80)
      {
        if (angle > Math.PI) {
          path += "A35 35 0 0 1 50 75";
        }
        path += `A35 35 0 0 1 ${x} ${y}`;
        return path;
      }
      else
      {
        path+="A35 35 0 0 1 50 75A35 35 0 0 1 15.810308878413977 32.51234208777258";
        return path;
      }
    }
  };
</script>

<style>

  path:first-child {
    stroke: var(--progress-trackcolor, #adb5bd);
    stroke-width: var(--progress-trackwidth, 19px);
  }
  path:last-child {
    stroke-width: var(--progress-width, 20px);
  }

</style>

  <svg viewBox="0 0 100 100" height="100%" width="100%" style="fill: var(--progress-fill, transparent);stroke-linecap: var(--progress-linecap, line);">
    <path d="M50,5A35 35 0 1 1 49.9999 5" />
    <path stroke-width=20px stroke={color} d="{progressPath()}" />
{#if value >80}
    <path d="M{x},{y}A35 35 0 0 0 15.810308878413977 32.51234208777258" stroke="red"/>
{/if}
  </svg>


