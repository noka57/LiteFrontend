import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-a89b87ed.js";
import Dashboard from "./dashboard.svelte.js";
import "classnames";
/* empty css                                                                            */import "../../_app/immutable/chunks/TableBodyRow-53df767c.js";
import "./CircleProgressBar.svelte.js";
import "../endpoints/sessionG.js";
import "../../_app/immutable/chunks/index-b74adbb6.js";
import "../endpoints/configG.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`;
});
export {
  Routes as default
};
