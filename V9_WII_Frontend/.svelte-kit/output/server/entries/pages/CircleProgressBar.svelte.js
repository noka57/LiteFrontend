import { c as create_ssr_component, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
const CircleProgressBar_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-f1vkc5{fill:var(--progress-fill, transparent);height:100%;stroke-linecap:var(--progress-linecap, line);width:100%}path.svelte-f1vkc5:first-child{stroke:var(--progress-trackcolor, #adb5bd);stroke-width:var(--progress-trackwidth, 19px)}path.svelte-f1vkc5:last-child{stroke-width:var(--progress-width, 20px)}div.svelte-f1vkc5{height:100%;position:relative;width:100%}span.svelte-f1vkc5{left:50%;position:absolute;top:-57%;transform:translate(-50%, -50%);color:blue}",
  map: null
};
const CircleProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progressPath;
  let { value = 0 } = $$props;
  let { max = 105 } = $$props;
  let { color = "currentColor" } = $$props;
  let x;
  let y;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  progressPath = () => {
    if (value <= 0) {
      return "";
    } else if (value >= max) {
      return "M50,5A35 35 0 1 1 49.9999 5";
    } else {
      const angle = Math.PI * 2 * (value / max);
      x = 50 + Math.cos(angle - Math.PI / 2) * 35;
      y = 40 + Math.sin(angle - Math.PI / 2) * 35;
      let path = "M50,5";
      if (value <= 80) {
        if (angle > Math.PI) {
          path += "A35 35 0 0 1 50 75";
        }
        path += `A35 35 0 0 1 ${x} ${y}`;
        return path;
      } else {
        path += "A35 35 0 0 1 50 75A35 35 0 0 1 15.810308878413977 32.51234208777258";
        return path;
      }
    }
  };
  return `<div class="${"svelte-f1vkc5"}"><svg viewBox="${"0 0 100 100"}" class="${"svelte-f1vkc5"}"><path d="${"M50,5A35 35 0 1 1 49.9999 5"}" class="${"svelte-f1vkc5"}"></path><path stroke-width="${"20px"}"${add_attribute("stroke", color, 0)}${add_attribute("d", progressPath(), 0)} class="${"svelte-f1vkc5"}"></path>${value > 80 ? `<path d="${"M" + escape(x, true) + "," + escape(y, true) + "A35 35 0 0 0 15.810308878413977 32.51234208777258A35"}" stroke="${"red"}" class="${"svelte-f1vkc5"}"></path>` : ``}</svg>
  <div class="${"svelte-f1vkc5"}">${slots.default ? slots.default({}) : `
      <span class="${"svelte-f1vkc5"}">${escape(value)}%</span>
    `}</div></div>`;
});
export {
  CircleProgressBar as default
};
