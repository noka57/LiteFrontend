import { c as create_ssr_component, i as add_attribute, o as each, e as escape } from "../../_app/immutable/chunks/index-581edbff.js";
const DateTimePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hoursList;
  let { value = "" } = $$props;
  let { hideTime = false } = $$props;
  let date = "";
  const minutesList = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  let lastValue = "";
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.hideTime === void 0 && $$bindings.hideTime && hideTime !== void 0)
    $$bindings.hideTime(hideTime);
  hoursList = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  {
    if (value !== lastValue) {
      lastValue = value;
      if (value) {
        const [d, hm] = value.split(" ");
        if (d) {
          date = d.replaceAll("/", "-");
        }
        if (!hideTime && hm) {
          hm.split(":");
        }
      }
    }
  }
  return `<div class="${"flex items-center gap-2 border rounded p-2"}">
  <input type="${"date"}" class="${"text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1"}" placeholder="${"Select date"}"${add_attribute("value", date, 0)}>

 ${!hideTime ? `
  <select class="${"block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1"}">${each(hoursList, (h) => {
    return `<option${add_attribute("value", h, 0)}>${escape(h)}</option>`;
  })}</select>

  <span>:</span>

  
  <select class="${"block w-16 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2 mt-1"}">${each(minutesList, (m) => {
    return `<option${add_attribute("value", m, 0)}>${escape(m)}</option>`;
  })}</select>` : ``}</div>`;
});
export {
  DateTimePicker as default
};
