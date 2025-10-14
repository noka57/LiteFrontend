import { c as create_ssr_component, b as compute_rest_props, d as spread, f as escape_object, h as escape_attribute_value, e as escape, i as add_attribute, o as each } from "./index-581edbff.js";
import classNames from "classnames";
const StepIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["steps", "currentStep", "size", "color", "glow", "hideLabel"]);
  let { steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"] } = $$props;
  let { currentStep = 1 } = $$props;
  let { size = "h-2.5" } = $$props;
  let { color = "blue" } = $$props;
  let { glow = false } = $$props;
  let { hideLabel = false } = $$props;
  const completedStepColors = {
    gray: "bg-gray-400 dark:bg-gray-500",
    red: "bg-red-600 dark:bg-red-900",
    yellow: "bg-yellow-400 dark:bg-yellow-600",
    green: "bg-green-500 dark:bg-green-900",
    indigo: "bg-indigo-500 dark:bg-indigo-900",
    purple: "bg-purple-500 dark:bg-purple-900",
    pink: "bg-pink-500 dark:bg-pink-900",
    blue: "bg-blue-500 dark:bg-blue-900"
  };
  const currentStepColors = {
    gray: "bg-gray-700 dark:bg-gray-200",
    red: "bg-red-900 dark:bg-red-500",
    yellow: "bg-yellow-600 dark:bg-yellow-400",
    green: "bg-green-800 dark:bg-green-400",
    indigo: "bg-indigo-800 dark:bg-indigo-400",
    purple: "bg-purple-800 dark:bg-purple-400",
    pink: "bg-pink-800 dark:bg-pink-400",
    blue: "bg-blue-800 dark:bg-blue-400"
  };
  if ($$props.steps === void 0 && $$bindings.steps && steps !== void 0)
    $$bindings.steps(steps);
  if ($$props.currentStep === void 0 && $$bindings.currentStep && currentStep !== void 0)
    $$bindings.currentStep(currentStep);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.glow === void 0 && $$bindings.glow && glow !== void 0)
    $$bindings.glow(glow);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("space-y-2 dark:text-white", $$props.class))
      }
    ],
    {}
  )}>${!hideLabel ? `<h3 class="${"text-base font-semibold"}">${escape(steps[currentStep - 1])}</h3>` : ``}
  <div${add_attribute("class", classNames("flex justify-between gap-2 w-full", size), 0)}>${each(steps, (step, i) => {
    return `${i === currentStep - 1 ? `<div class="${"relative w-full h-full"}"><div${add_attribute("class", classNames("relative w-full h-full rounded-sm", currentStepColors[color]), 0)}></div>
          ${glow ? `<div${add_attribute("class", classNames("absolute -inset-1 rounded-sm blur opacity-30 dark:opacity-25", currentStepColors[color]), 0)}></div>` : ``}
        </div>` : `${i < currentStep - 1 ? `<div${add_attribute("class", classNames("w-full h-full rounded-sm", completedStepColors[color]), 0)}></div>` : `<div${add_attribute("class", classNames("w-full h-full rounded-sm bg-gray-200 dark:bg-gray-700"), 0)}></div>`}`}`;
  })}</div></div>`;
});
export {
  StepIndicator as S
};
