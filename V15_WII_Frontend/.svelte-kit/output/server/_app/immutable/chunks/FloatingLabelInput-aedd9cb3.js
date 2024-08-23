import { c as create_ssr_component, b as compute_rest_props, i as add_attribute, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from "./index-4327f458.js";
import classNames from "classnames";
let n = Date.now();
function generateId() {
  return (++n).toString(36);
}
const FloatingLabelInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id", "style", "type", "size", "color", "value", "label"]);
  let { id = generateId() } = $$props;
  let { style = "standard" } = $$props;
  let { type = "text" } = $$props;
  let { size = "default" } = $$props;
  let { color = "base" } = $$props;
  let { value = "" } = $$props;
  let { label = "" } = $$props;
  const divClasses = {
    filled: "relative",
    outlined: "relative",
    standard: "relative z-0"
  };
  const inputSizes = {
    filled: {
      small: "px-2.5 pb-1.5 pt-4",
      default: "px-2.5 pb-2.5 pt-5"
    },
    outlined: {
      small: "px-2.5 pb-1.5 pt-3",
      default: "px-2.5 pb-2.5 pt-4"
    },
    standard: {
      small: "py-2 px-0",
      default: "py-2.5 px-0"
    }
  };
  const labelSizes = {
    filled: { small: "top-3", default: "top-4" },
    outlined: { small: "top-1", default: "top-2" },
    standard: { small: "top-3", default: "top-3" }
  };
  const inputClasses = {
    filled: "block rounded-t-lg w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer",
    outlined: "block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer",
    standard: "block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer"
  };
  const labelClasses = {
    filled: "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
    outlined: "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
    standard: "absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  };
  const inputColorClasses = {
    base: "border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600",
    green: "border-green-600 dark:border-green-500 dark:focus:border-green-500 focus:border-green-600",
    red: "border-red-600 dark:border-red-500 dark:focus:border-red-500  focus:border-red-600"
  };
  const labelColorClasses = {
    base: "text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500",
    green: "text-green-600 dark:text-green-500",
    red: "text-red-600 dark:text-red-500"
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<div${add_attribute("class", divClasses[style], 0)}><input${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      { placeholder: " " },
      {
        class: escape_attribute_value(classNames(inputClasses[style], inputColorClasses[color], inputSizes[style][size], $$props.class))
      }
    ],
    {}
  )}${add_attribute("value", value, 0)}>

	<label${add_attribute("for", id, 0)}${add_attribute("class", classNames(labelClasses[style], labelColorClasses[color], labelSizes[style][size], $$props.labelClass), 0)}>${escape(label)}</label></div>`;
});
export {
  FloatingLabelInput as F
};
