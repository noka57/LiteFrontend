import { c as create_ssr_component, s as setContext, v as validate_component } from "./index-54377ec4.js";
import { w as writable } from "./index-df2ccd83.js";
import { F as Frame } from "./Frame-c602be1d.js";
import classNames from "classnames";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClasses = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClasses = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClasses,
    inactiveClasses,
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass = classNames(defaultClass, "divide-y divide-gray-200 dark:divide-gray-700", "border-gray-200 dark:border-gray-700", "rounded-t-xl", $$props.class);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      class: frameClass,
      color: "none",
      border: !flush
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Accordion as A
};
