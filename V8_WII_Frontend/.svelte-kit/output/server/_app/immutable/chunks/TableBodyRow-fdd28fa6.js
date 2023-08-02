import { c as create_ssr_component, a as compute_rest_props, s as setContext, h as add_attribute, b as spread, d as escape_object, f as escape_attribute_value, g as getContext } from "./index-e6faea8a.js";
import classNames from "classnames";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "striped", "hoverable", "noborder", "shadow", "color"]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: ""
  };
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0)
    $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  return `<div${add_attribute("class", classNames(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}><table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableBodyClass = void 0 } = $$props;
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0)
    $$bindings.tableBodyClass(tableBodyClass);
  return `<tbody${add_attribute("class", tableBodyClass, 0)}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0)
    $$bindings.tdClass(tdClass);
  tdClassfinal = classNames(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `<td${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tdClassfinal)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</td>`;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trClassFinal;
  let $$restProps = compute_rest_props($$props, ["color", "trClass"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let { trClass = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.trClass === void 0 && $$bindings.trClass && trClass !== void 0)
    $$bindings.trClass(trClass);
  trClassFinal = classNames(trClass, !trClass && !getContext("noborder") && "border-b last:border-b-0", colors[color], getContext("hoverable") && hoverColors[color], getContext("striped") && stripColors[color], $$props.class);
  return `<tr${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(trClassFinal)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</tr>`;
});
export {
  Table as T,
  TableBody as a,
  TableBodyRow as b,
  TableBodyCell as c
};
