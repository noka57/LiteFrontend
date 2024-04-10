import { c as create_ssr_component, i as add_attribute, e as escape } from "../../_app/immutable/chunks/index-a89b87ed.js";
const CircleProgressBar_svelte_svelte_type_style_lang = "";
const css = {
  code: "path.svelte-j5zem6:first-child{stroke:var(--progress-trackcolor, #adb5bd);stroke-width:var(--progress-trackwidth, 19px)}path.svelte-j5zem6:last-child{stroke-width:var(--progress-width, 20px)}",
  map: null
};
const CircleProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progressPath;
  let { value = 10 } = $$props;
  let { max = 105 } = $$props;
  let { color = "currentColor" } = $$props;
  let x = 50;
  let y = 5;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  progressPath = () => {
    if (value <= 0) {
      console.log("value <=0");
      console.log(value);
      console.log(max);
      return "";
    } else if (value >= max) {
      console.log("value >=max");
      console.log(value);
      console.log(max);
      console.log(value >= max);
      return "M50,5A35 35 0 1 1 49.9999 5";
    } else {
      console.log("value < max");
      console.log(value);
      console.log(max);
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
  return `<svg viewBox="${"0 0 100 100"}" height="${"100%"}" width="${"100%"}" style="${"fill: var(--progress-fill, transparent);stroke-linecap: var(--progress-linecap, line);"}"><path d="${"M50,5A35 35 0 1 1 49.9999 5"}" class="${"svelte-j5zem6"}"></path><path stroke-width="${"20px"}"${add_attribute("stroke", color, 0)}${add_attribute("d", progressPath(), 0)} class="${"svelte-j5zem6"}"></path>${value > 80 ? `<path d="${"M" + escape(x, true) + "," + escape(y, true) + "A35 35 0 0 0 15.810308878413977 32.51234208777258"}" stroke="${"red"}" class="${"svelte-j5zem6"}"></path>` : ``}</svg>`;
});
export {
  CircleProgressBar as default
};
