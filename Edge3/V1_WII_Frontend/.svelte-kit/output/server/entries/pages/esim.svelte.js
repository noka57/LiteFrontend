import { c as create_ssr_component, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-54377ec4.js";
import "jsqr";
const Esim = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result = "";
  let canvas;
  return `<input type="file" accept="image/*">
<canvas style="display:none;"${add_attribute("this", canvas, 0)}></canvas>
<p><strong>Result:</strong> ${escape(result)}</p>`;
});
export {
  Esim as default
};
