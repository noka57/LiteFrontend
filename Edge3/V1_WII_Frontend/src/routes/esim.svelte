<script>
  import jsQR from "jsqr";

  let result = "";
  let canvas;
  let context;

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Get canvas context here
        context = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageData = context.getImageData(0, 0, img.width, img.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        result = code ? code.data : "No QR code found.";
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
</script>

<input type="file" accept="image/*" on:change={handleFileChange} />
<canvas bind:this={canvas} style="display:none;"></canvas>
<p><strong>Result:</strong> {result}</p>