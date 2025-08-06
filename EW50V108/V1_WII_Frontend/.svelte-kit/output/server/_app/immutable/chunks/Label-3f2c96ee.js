import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, h as escape_attribute_value, i as add_attribute } from "./index-a89b87ed.js";
import classNames from "classnames";
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show", "styleSpecial"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let { styleSpecial = false } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.styleSpecial === void 0 && $$bindings.styleSpecial && styleSpecial !== void 0)
    $$bindings.styleSpecial(styleSpecial);
  {
    {
      const control = node == null ? void 0 : node.control;
      color = (control == null ? void 0 : control.disabled) ? "disabled" : color;
    }
  }
  labelClass = classNames(defaultClass, colorClasses[color], $$props.class);
  return `${show ? `
  ${styleSpecial ? `<label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      },
      { style: "padding-top:2.3rem" }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `<label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>`}` : `${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Label as L
};
