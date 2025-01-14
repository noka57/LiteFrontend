import { c as create_ssr_component, b as compute_rest_props, q as createEventDispatcher, i as add_attribute, e as escape, v as validate_component, j as compute_slots } from "./index-a89b87ed.js";
import classNames from "classnames";
import { F as Frame } from "./Frame-cafee768.js";
import { C as CloseButton } from "./CloseButton-88212a62.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "size", "placement", "autoclose", "permanent", "backdropClasses"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClasses = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0)
    $$bindings.permanent(permanent);
  if ($$props.backdropClasses === void 0 && $$bindings.backdropClasses && backdropClasses !== void 0)
    $$bindings.backdropClasses(backdropClasses);
  {
    dispatch(open ? "open" : "hide");
  }
  frameClass = classNames("relative flex flex-col mx-auto", $$props.class);
  return `${open ? `
  <div${add_attribute("class", classNames("fixed inset-0 z-40", backdropClasses), 0)}></div>
  
  <div${add_attribute("class", classNames("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", ...getPlacementClasses()), 0)} tabindex="${"-1"}" aria-modal="${"true"}" role="${"dialog"}"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}">
      ${validate_component(Frame, "Frame").$$render($$result, Object.assign({ rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return `
        ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t border-b"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : `
              <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3>
            `}
            ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}
        
        <div id="${"modal"}" class="${"p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain"}">${slots.default ? slots.default({}) : ``}</div>
        
        ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b border-t"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``}`;
});
export {
  Modal as M
};
