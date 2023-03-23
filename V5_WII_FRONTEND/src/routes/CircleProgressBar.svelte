<script>
  export let value = 0;
  export let max = 101;
  export let color = "currentColor";
  let x;
  let y;
  $: progressPath = () => {
    if (value <= 0) {
      return "";
    } else if (value >= max) {
      return "M50,5A45 45 0 1 1 49.9999 5";
    } else {


      const angle = Math.PI * 2 * (value / max);
      x = 50 + Math.cos(angle - Math.PI / 2) * 45;
      y = 50 + Math.sin(angle - Math.PI / 2) * 45;
      let path = "M50,5";
      if (value<80)
      {
        if (angle > Math.PI) {
          path += "A45 45 0 0 1 50 95";
        }
        path += `A45 45 0 0 1 ${x} ${y}`;
        return path;
      }
      else
      {
        path+="A45 45 0 0 1 50 95A45 45 0 0 1 7.202456766718086 36.09423525312737";
        return path;
      }
    }
  };
</script>

<style>
  svg {
    fill: var(--progress-fill, transparent);
    height: 100%;
    stroke-linecap: var(--progress-linecap, round);
    width: 100%;
  }
  path:first-child {
    stroke: var(--progress-trackcolor, #adb5bd);
    stroke-width: var(--progress-trackwidth, 9px);
  }
  path:last-child {
    stroke-width: var(--progress-width, 10px);
  }
  div {
    height: 100%;
    position: relative;
    width: 100%;
  }
  span {
    left: 50%;
    position: absolute;
    top: -50%;
    transform: translate(-50%, -50%);
  }
</style>
<div>
  <svg viewBox="0 0 100 100">
    <path d="M50,5A45 45 0 1 1 49.9999 5" />
    <path stroke-width=10px stroke={color} d="{progressPath()}" />
{#if value >=80}
    <path d="M{x},{y}A45 45 0 0 0 7.202456766718086, 36.09423525312737A45" stroke="red"/>
{/if}
  </svg>
  <div>
    <slot>
      <span>{value}%</span>
    </slot>
  </div>
</div>


