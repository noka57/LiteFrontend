<script>
  import './global.css';
  import Dashboard from './dashboard.svelte';

  import { onMount } from "svelte";


  function updateDPR() {
    document.documentElement.style.setProperty(
      "--dpr",
      window.devicePixelRatio
    );
  }

  onMount(() => {
    updateDPR();
    window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
      .addEventListener("change", updateDPR);


  });
</script>

<Dashboard />
