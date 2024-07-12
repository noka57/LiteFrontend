import { c as create_ssr_component, b as compute_rest_props, v as validate_component, i as add_attribute, j as compute_slots, q as createEventDispatcher, o as each, e as escape, k as subscribe, r as add_styles } from "../../_app/immutable/chunks/index-4327f458.js";
import { A as Accordion, a as AccordionItem } from "../../_app/immutable/chunks/AccordionItem-e4bc3351.js";
import classNames from "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-3342d09f.js";
/* empty css                                                                            */import { P as Popper, T as Tooltip } from "../../_app/immutable/chunks/Tooltip-be3b95ac.js";
import { R as Radio } from "../../_app/immutable/chunks/Radio-7daba062.js";
import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-aedd9cb3.js";
import { C as CloseButton } from "../../_app/immutable/chunks/CloseButton-9e3e1305.js";
import { twMerge } from "tailwind-merge";
import { T as Textarea } from "../../_app/immutable/chunks/Textarea-90bca3e2.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-018e0198.js";
import { T as Table } from "../../_app/immutable/chunks/Table-8c701dfb.js";
import { T as TableBody } from "../../_app/immutable/chunks/TableBody-890eeeae.js";
import { T as TableBodyRow, a as TableBodyCell } from "../../_app/immutable/chunks/TableBodyRow-bb920ec2.js";
import { T as TableHead, a as TableHeadCell } from "../../_app/immutable/chunks/TableHeadCell-75ee61b0.js";
import { T as TabItem } from "../../_app/immutable/chunks/TabItem-d05d7350.js";
import { T as Tabs } from "../../_app/immutable/chunks/Tabs-1c1beae0.js";
import { w as writable } from "../../_app/immutable/chunks/index-86a6b344.js";
import { sessionidG } from "../endpoints/sessionG.js";
import { genericMQTTConfig, ChangedGenericMQTTConfig, modbusConfig, ChangedModbusConfig, datatagproConfig, ChangedDataTagProConfig, DataTagPro_ULRule_ConfigChangedLog, DataTagPro_TagRuleEvent_ConfigChangedLog, DataTagPro_TagRuleSCADA_ConfigChangedLog, DataTagPro_TagRuleDM_ConfigChangedLog, DataTagPro_TagRuleTOU_ConfigChangedLog, DataTagPro_TagRuleAccumulated_ConfigChangedLog, DataTagPro_TagRuleCalculation_ConfigChangedLog, DataTagPro_TagRuleModbus_ConfigChangedLog, DataTagPro_General_ConfigChangedLog } from "../endpoints/configG.js";
import "../../_app/immutable/chunks/Frame-82afdce4.js";
import "@popperjs/core";
import "../../_app/immutable/chunks/Label-40d01e23.js";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "frameClass"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { frameClass = "" } = $$props;
  let popoverClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.frameClass === void 0 && $$bindings.frameClass && frameClass !== void 0)
    $$bindings.frameClass(frameClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    popoverClass = classNames("divide-y divide-gray-100 dark:divide-gray-600", frameClass);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({ activeContent: true }, $$restProps, { class: popoverClass }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div class="${"py-1 overflow-hidden rounded-t"}">${slots.header ? slots.header({}) : ``}</div>` : ``}
  <ul${add_attribute("class", $$props.class ?? "py-1 w-44", 0)}>${slots.default ? slots.default({}) : ``}</ul>
  ${$$slots.footer ? `<div class="${"py-1 overflow-hidden rounded-b"}">${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const multiSelectClass = "px-3 py-0 min-h-[2.9rem] relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 focus-within:ring-1 focus-within:border-primary-500 ring-primary-500 dark:focus-within:border-primary-500 dark:ring-primary-500";
const MultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["items", "value", "size", "dropdownClass"]);
  createEventDispatcher();
  let { items = [] } = $$props;
  let { value = [] } = $$props;
  let { size = "md" } = $$props;
  let { dropdownClass = "" } = $$props;
  let selectItems = [];
  const sizes = {
    sm: "px-2 py-1",
    md: "px-3 py-0",
    lg: "px-4 py-3"
  };
  twMerge("absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 left-0 top-[calc(100%+1rem)] rounded-lg overflow-y-scroll w-full", dropdownClass);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.dropdownClass === void 0 && $$bindings.dropdownClass && dropdownClass !== void 0)
    $$bindings.dropdownClass(dropdownClass);
  twMerge("absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 left-0 top-[calc(100%+1rem)] rounded-lg cursor-pointer overflow-y-scroll w-full", dropdownClass);
  return `
<select hidden multiple>${each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  })}</select>

<div tabindex="${"-1"}" role="${"listbox"}"${add_attribute("class", twMerge($$restProps, multiSelectClass, sizes[size], $$props.class), 0)}><span class="${"flex gap-2 flex-wrap"}">${``}</span>
  <div class="${"flex ml-auto gap-2 items-center"}">${selectItems.length ? `${validate_component(CloseButton, "CloseButton").$$render(
    $$result,
    {
      color: "none",
      class: "p-0 focus:ring-gray-400"
    },
    {},
    {}
  )}` : ``}
    <div class="${"w-[1px] bg-gray-300 dark:bg-gray-600"}"></div>
    <svg class="${"cursor-pointer h-3 w-3 ml-1 text-gray-800 dark:text-white"}" aria-hidden="${"true"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 10 6"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}"${add_attribute("d", "m9 1-4 4-4-4", 0)}></path></svg></div>

${``}</div>

`;
});
const TimePicker_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".time-picker.svelte-132npca{font-size:1.1em;display:flex;align-items:center;width:-moz-fit-content;width:fit-content;border:1px solid rgba(108, 120, 147, 0.3);border-radius:3px;margin:auto;font-variant-numeric:tabular-nums;margin-top:6px}span.svelte-132npca{-webkit-user-select:all;-moz-user-select:all;user-select:all;outline:none;position:relative;z-index:1;padding:4px 0px}span.svelte-132npca:not(:focus)::-moz-selection{background-color:transparent}span.svelte-132npca:not(:focus)::selection{background-color:transparent}span.svelte-132npca:first-child{padding-left:6px}span.svelte-132npca:last-child{padding-right:6px}",
  map: null
};
const TimePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { browseDate } = $$props;
  let { timePrecision } = $$props;
  let { setTime } = $$props;
  let fields = [];
  function setText(d) {
    ("00" + d.getHours()).slice(-2);
    ("00" + d.getMinutes()).slice(-2);
    ("00" + d.getSeconds()).slice(-2);
    ("000" + d.getMilliseconds()).slice(-3);
  }
  if ($$props.browseDate === void 0 && $$bindings.browseDate && browseDate !== void 0)
    $$bindings.browseDate(browseDate);
  if ($$props.timePrecision === void 0 && $$bindings.timePrecision && timePrecision !== void 0)
    $$bindings.timePrecision(timePrecision);
  if ($$props.setTime === void 0 && $$bindings.setTime && setTime !== void 0)
    $$bindings.setTime(setTime);
  $$result.css.add(css$3);
  {
    setText(browseDate);
  }
  return `${timePrecision ? `<div class="${"time-picker svelte-132npca"}" role="${"none"}"><span role="${"spinbutton"}" aria-label="${"Hours"}" tabindex="${"0"}" contenteditable inputmode="${"numeric"}" class="${"svelte-132npca"}"${add_attribute("this", fields[0], 0)}>${escape(("00" + browseDate.getHours()).slice(-2))}</span>:
		<span role="${"spinbutton"}" aria-label="${"Minutes"}" tabindex="${"0"}" contenteditable inputmode="${"numeric"}" class="${"svelte-132npca"}"${add_attribute("this", fields[1], 0)}>${escape(("00" + browseDate.getMinutes()).slice(-2))}</span>
		${timePrecision !== "minute" ? `:<span role="${"spinbutton"}" aria-label="${"Seconds"}" tabindex="${"0"}" contenteditable inputmode="${"numeric"}" class="${"svelte-132npca"}"${add_attribute("this", fields[2], 0)}>${escape(("00" + browseDate.getSeconds()).slice(-2))}</span>
			${timePrecision !== "second" ? `.<span role="${"spinbutton"}" aria-label="${"Milliseconds"}" tabindex="${"0"}" contenteditable inputmode="${"numeric"}" class="${"svelte-132npca"}"${add_attribute("this", fields[3], 0)}>${escape(("000" + browseDate.getMilliseconds()).slice(-3))}</span>` : ``}` : ``}</div>` : ``}`;
});
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getMonthLength(year, month) {
  const feb = isLeapYear(year) ? 29 : 28;
  const monthLengths = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return monthLengths[month];
}
function toText(date, formatTokens) {
  let text = "";
  if (date) {
    for (const token of formatTokens) {
      if (typeof token === "string") {
        text += token;
      } else {
        text += token.toString(date);
      }
    }
  }
  return text;
}
function getMonthDays(year, month) {
  const monthLength = getMonthLength(year, month);
  const days = [];
  for (let i = 0; i < monthLength; i++) {
    days.push({
      year,
      month,
      number: i + 1
    });
  }
  return days;
}
function getCalendarDays(value, weekStartsOn) {
  const year = value.getFullYear();
  const month = value.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  let days = [];
  const daysBefore = (firstWeekday - weekStartsOn + 7) % 7;
  if (daysBefore > 0) {
    let lastMonth = month - 1;
    let lastMonthYear = year;
    if (lastMonth === -1) {
      lastMonth = 11;
      lastMonthYear = year - 1;
    }
    days = getMonthDays(lastMonthYear, lastMonth).slice(-daysBefore);
  }
  days = days.concat(getMonthDays(year, month));
  let nextMonth = month + 1;
  let nextMonthYear = year;
  if (nextMonth === 12) {
    nextMonth = 0;
    nextMonthYear = year + 1;
  }
  const daysAfter = 42 - days.length;
  days = days.concat(getMonthDays(nextMonthYear, nextMonth).slice(0, daysAfter));
  return days;
}
function getLocaleDefaults() {
  return {
    weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    weekStartsOn: 1
  };
}
function getInnerLocale(locale) {
  const innerLocale = getLocaleDefaults();
  if (typeof locale.weekStartsOn === "number") {
    innerLocale.weekStartsOn = locale.weekStartsOn;
  }
  if (locale.months)
    innerLocale.months = locale.months;
  if (locale.shortMonths)
    innerLocale.shortMonths = locale.shortMonths;
  if (locale.weekdays)
    innerLocale.weekdays = locale.weekdays;
  return innerLocale;
}
const DatePicker_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".date-time-picker.svelte-go79cf.svelte-go79cf{display:inline-block;color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);-moz-user-select:none;user-select:none;-webkit-user-select:none;padding:0.5rem;cursor:default;font-size:0.75rem;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;box-shadow:0px 2px 6px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.11);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}.date-time-picker.svelte-go79cf.svelte-go79cf:focus{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}.tab-container.svelte-go79cf.svelte-go79cf{outline:none}.top.svelte-go79cf.svelte-go79cf{display:flex;justify-content:center;align-items:center;padding-bottom:0.5rem}.dropdown.svelte-go79cf.svelte-go79cf{margin-left:0.25rem;margin-right:0.25rem;position:relative;display:flex}.dropdown.svelte-go79cf svg.svelte-go79cf{position:absolute;right:0px;top:0px;height:100%;width:8px;padding:0rem 0.5rem;pointer-events:none;box-sizing:content-box}.month.svelte-go79cf.svelte-go79cf{flex-grow:1}.year.svelte-go79cf.svelte-go79cf{flex-grow:1}svg.svelte-go79cf.svelte-go79cf{display:block;fill:var(--date-picker-foreground, #000000);opacity:0.75;outline:none}.page-button.svelte-go79cf.svelte-go79cf{background-color:transparent;width:1.5rem;height:1.5rem;flex-shrink:0;border-radius:5px;box-sizing:border-box;border:1px solid transparent;display:flex;align-items:center;justify-content:center}.page-button.svelte-go79cf.svelte-go79cf:hover{background-color:rgba(128, 128, 128, 0.08);border:1px solid rgba(128, 128, 128, 0.08)}.page-button.svelte-go79cf svg.svelte-go79cf{width:0.68rem;height:0.68rem}select.dummy-select.svelte-go79cf.svelte-go79cf{position:absolute;width:100%;pointer-events:none;outline:none;color:var(--date-picker-foreground, #000000);background-color:var(--date-picker-background, #ffffff);border-radius:3px}select.svelte-go79cf:focus+select.dummy-select.svelte-go79cf{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}select.svelte-go79cf.svelte-go79cf:not(.dummy-select){opacity:0}select.svelte-go79cf.svelte-go79cf{font-size:inherit;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-grow:1;padding:0rem 0.35rem;height:1.5rem;padding-right:1.3rem;margin:0px;border:1px solid rgba(108, 120, 147, 0.3);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1);background-image:none}.header.svelte-go79cf.svelte-go79cf{display:flex;font-weight:600;padding-bottom:2px}.header-cell.svelte-go79cf.svelte-go79cf{width:1.875rem;text-align:center;flex-grow:1}.week.svelte-go79cf.svelte-go79cf{display:flex}.cell.svelte-go79cf.svelte-go79cf{display:flex;align-items:center;justify-content:center;width:2rem;height:1.94rem;flex-grow:1;border-radius:5px;box-sizing:border-box;border:2px solid transparent}.cell.svelte-go79cf.svelte-go79cf:hover{border:1px solid rgba(128, 128, 128, 0.08)}.cell.today.svelte-go79cf.svelte-go79cf{font-weight:600;border:2px solid var(--date-picker-today-border, rgba(128, 128, 128, 0.3))}.cell.svelte-go79cf.svelte-go79cf:hover{background-color:rgba(128, 128, 128, 0.08)}.cell.disabled.svelte-go79cf.svelte-go79cf{visibility:hidden}.cell.disabled.svelte-go79cf.svelte-go79cf:hover{border:none;background-color:transparent}.cell.other-month.svelte-go79cf span.svelte-go79cf{opacity:0.4}.cell.selected.svelte-go79cf.svelte-go79cf{color:var(--date-picker-selected-color, inherit);background:var(--date-picker-selected-background, rgba(2, 105, 247, 0.2));border:2px solid var(--date-picker-highlight-border, #0269f7)}",
  map: null
};
function cloneDate(d) {
  return new Date(d.getTime());
}
function clamp(d, min2, max2) {
  if (d > max2) {
    return cloneDate(max2);
  } else if (d < min2) {
    return cloneDate(min2);
  } else {
    return cloneDate(d);
  }
}
function clampDate(d, min2, max2) {
  const limit = clamp(d, min2, max2);
  if (limit.getTime() !== d.getTime()) {
    d = new Date(limit.getFullYear(), limit.getMonth(), limit.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
    d = clamp(d, min2, max2);
  }
  return d;
}
function getYears(min2, max2) {
  let years2 = [];
  for (let i = max2.getFullYear(); i >= min2.getFullYear(); i--) {
    years2.push(i);
  }
  return years2;
}
function dayIsInRange(calendarDay, min2, max2) {
  const date = new Date(calendarDay.year, calendarDay.month, calendarDay.number);
  const minDate = new Date(min2.getFullYear(), min2.getMonth(), min2.getDate());
  const maxDate = new Date(max2.getFullYear(), max2.getMonth(), max2.getDate());
  return date >= minDate && date <= maxDate;
}
const DatePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iLocale;
  let browseYear;
  let browseMonth;
  let calendarDays;
  createEventDispatcher();
  let { value = null } = $$props;
  function setValue(d) {
    if (d.getTime() !== (value == null ? void 0 : value.getTime())) {
      browseDate = clamp(d, min, max);
      value = cloneDate(browseDate);
    }
  }
  function setTime(d) {
    browseDate = clamp(d, min, max);
    if (value) {
      setValue(browseDate);
    }
    return browseDate;
  }
  const todayDate = /* @__PURE__ */ new Date();
  const defaultDate = /* @__PURE__ */ new Date();
  let { timePrecision = null } = $$props;
  let { min = new Date(defaultDate.getFullYear() - 5, 0, 1) } = $$props;
  let { max = new Date(defaultDate.getFullYear(), 11, 31, 23, 59, 59, 999) } = $$props;
  let browseDate = value ? cloneDate(value) : cloneDate(clampDate(defaultDate, min, max));
  function setBrowseDate(value2) {
    if (browseDate.getTime() !== (value2 == null ? void 0 : value2.getTime())) {
      browseDate = value2 ? cloneDate(value2) : browseDate;
    }
  }
  let years = getYears(min, max);
  let { locale = {} } = $$props;
  let { browseWithoutSelecting = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.timePrecision === void 0 && $$bindings.timePrecision && timePrecision !== void 0)
    $$bindings.timePrecision(timePrecision);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.browseWithoutSelecting === void 0 && $$bindings.browseWithoutSelecting && browseWithoutSelecting !== void 0)
    $$bindings.browseWithoutSelecting(browseWithoutSelecting);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (value && value > max) {
        setValue(max);
      } else if (value && value < min) {
        setValue(min);
      }
    }
    {
      setBrowseDate(value);
    }
    years = getYears(min, max);
    iLocale = getInnerLocale(locale);
    browseYear = browseDate.getFullYear();
    browseMonth = browseDate.getMonth();
    calendarDays = getCalendarDays(browseDate, iLocale.weekStartsOn);
    $$rendered = `

<div class="${"date-time-picker svelte-go79cf"}" tabindex="${"0"}"><div class="${"tab-container svelte-go79cf"}" tabindex="${"-1"}"><div class="${"top svelte-go79cf"}"><button type="${"button"}" class="${"page-button svelte-go79cf"}" tabindex="${"-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-go79cf"}"><path d="${"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"}" transform="${"rotate(180, 12, 12)"}"></path></svg></button>
			<div class="${"dropdown month svelte-go79cf"}"><select${add_attribute("value", browseMonth, 0)} class="${"svelte-go79cf"}">${each(iLocale.months, (monthName, i) => {
      return `<option ${new Date(browseYear, i, getMonthLength(browseYear, i), 23, 59, 59, 999) < min || new Date(browseYear, i) > max ? "disabled" : ""}${add_attribute("value", i, 0)}>${escape(monthName)}</option>`;
    })}</select>
				
				<select class="${"dummy-select svelte-go79cf"}" tabindex="${"-1"}">${each(iLocale.months, (monthName, i) => {
      return `<option${add_attribute("value", i, 0)} ${i === browseMonth ? "selected" : ""}>${escape(monthName)}</option>`;
    })}</select>
				<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-go79cf"}"><path d="${"M6 0l12 12-12 12z"}" transform="${"rotate(90, 12, 12)"}"></path></svg></div>
			<div class="${"dropdown year svelte-go79cf"}"><select${add_attribute("value", browseYear, 0)} class="${"svelte-go79cf"}">${each(years, (v) => {
      return `<option${add_attribute("value", v, 0)}>${escape(v)}</option>`;
    })}</select>
				
				<select class="${"dummy-select svelte-go79cf"}" tabindex="${"-1"}">${each(years, (v) => {
      return `<option${add_attribute("value", v, 0)} ${v === browseDate.getFullYear() ? "selected" : ""}>${escape(v)}</option>`;
    })}</select>
				<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-go79cf"}"><path d="${"M6 0l12 12-12 12z"}" transform="${"rotate(90, 12, 12)"}"></path></svg></div>
			<button type="${"button"}" class="${"page-button svelte-go79cf"}" tabindex="${"-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-go79cf"}"><path d="${"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"}"></path></svg></button></div>
		<div class="${"header svelte-go79cf"}">
			${each(Array(7), (_, i) => {
      return `${i + iLocale.weekStartsOn < 7 ? `<div class="${"header-cell svelte-go79cf"}">${escape(iLocale.weekdays[iLocale.weekStartsOn + i])}</div>` : `<div class="${"header-cell svelte-go79cf"}">${escape(iLocale.weekdays[iLocale.weekStartsOn + i - 7])}</div>`}`;
    })}</div>
		
		${each(Array(6), (_, weekIndex) => {
      return `<div class="${"week svelte-go79cf"}">${each(calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7), (calendarDay) => {
        return `
					<div class="${[
          "cell svelte-go79cf",
          (!dayIsInRange(calendarDay, min, max) ? "disabled" : "") + " " + (value && calendarDay.year === value.getFullYear() && calendarDay.month === value.getMonth() && calendarDay.number === value.getDate() ? "selected" : "") + " " + (calendarDay.year === todayDate.getFullYear() && calendarDay.month === todayDate.getMonth() && calendarDay.number === todayDate.getDate() ? "today" : "") + " " + (calendarDay.month !== browseMonth ? "other-month" : "")
        ].join(" ").trim()}"><span class="${"svelte-go79cf"}">${escape(calendarDay.number)}</span>
					</div>`;
      })}
			</div>`;
    })}

		${validate_component(TimePicker, "TimePicker").$$render(
      $$result,
      { timePrecision, setTime, browseDate },
      {
        browseDate: ($$value) => {
          browseDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}

		${slots.default ? slots.default({}) : ``}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
function parse(str, tokens, baseDate) {
  let missingPunctuation = "";
  let valid = true;
  baseDate = baseDate || new Date(2020, 0, 1, 0, 0, 0, 0);
  let year = baseDate.getFullYear();
  let month = baseDate.getMonth();
  let day = baseDate.getDate();
  let hours = baseDate.getHours();
  let minutes = baseDate.getMinutes();
  let seconds = baseDate.getSeconds();
  const ms = baseDate.getMilliseconds();
  function parseString(token) {
    for (let i = 0; i < token.length; i++) {
      if (str.startsWith(token[i])) {
        str = str.slice(1);
      } else {
        valid = false;
        if (str.length === 0)
          missingPunctuation = token.slice(i);
        return;
      }
    }
  }
  function parseUint(pattern, min, max) {
    const matches = str.match(pattern);
    if (matches == null ? void 0 : matches[0]) {
      str = str.slice(matches[0].length);
      const n = parseInt(matches[0]);
      if (n > max || n < min) {
        valid = false;
        return null;
      } else {
        return n;
      }
    } else {
      valid = false;
      return null;
    }
  }
  function parseEnum(allowedValues) {
    const n = allowedValues.findIndex((allowedValue) => {
      return allowedValue.toLowerCase() === str.slice(0, allowedValue.length).toLowerCase();
    });
    if (n >= 0) {
      str = str.slice(allowedValues[n].length);
      return n;
    } else {
      valid = false;
      return null;
    }
  }
  function parseToken(token) {
    if (typeof token === "string") {
      parseString(token);
    } else if (token.id === "yy") {
      const value = parseUint(/^[0-9]{2}/, 0, 99);
      if (value !== null)
        year = 2e3 + value;
    } else if (token.id === "yyyy") {
      const value = parseUint(/^[0-9]{4}/, 0, 9999);
      if (value !== null)
        year = value;
    } else if (token.id === "MM") {
      const value = parseUint(/^[0-9]{2}/, 1, 12);
      if (value !== null)
        month = value - 1;
    } else if (token.id === "MMM") {
      const value = parseEnum(token.allowedValues || []);
      if (value !== null)
        month = value;
    } else if (token.id === "dd") {
      const value = parseUint(/^[0-9]{2}/, 1, 31);
      if (value !== null)
        day = value;
    } else if (token.id === "HH") {
      const value = parseUint(/^[0-9]{2}/, 0, 23);
      if (value !== null)
        hours = value;
    } else if (token.id === "mm") {
      const value = parseUint(/^[0-9]{2}/, 0, 59);
      if (value !== null)
        minutes = value;
    } else if (token.id === "ss") {
      const value = parseUint(/^[0-9]{2}/, 0, 59);
      if (value !== null)
        seconds = value;
    }
  }
  for (const token of tokens) {
    parseToken(token);
    if (!valid)
      break;
  }
  const monthLength = getMonthLength(year, month);
  if (day > monthLength) {
    valid = false;
  }
  return {
    date: valid ? new Date(year, month, day, hours, minutes, seconds, ms) : null,
    missingPunctuation
  };
}
function twoDigit(value) {
  return ("0" + value.toString()).slice(-2);
}
function parseRule(s, innerLocale) {
  if (s.startsWith("yyyy")) {
    return {
      id: "yyyy",
      toString: (d) => d.getFullYear().toString()
    };
  } else if (s.startsWith("yy")) {
    return {
      id: "yy",
      toString: (d) => d.getFullYear().toString().slice(-2)
    };
  } else if (s.startsWith("MMM")) {
    return {
      id: "MMM",
      allowedValues: innerLocale.shortMonths,
      toString: (d) => innerLocale.shortMonths[d.getMonth()]
    };
  } else if (s.startsWith("MM")) {
    return {
      id: "MM",
      toString: (d) => twoDigit(d.getMonth() + 1)
    };
  } else if (s.startsWith("dd")) {
    return {
      id: "dd",
      toString: (d) => twoDigit(d.getDate())
    };
  } else if (s.startsWith("HH")) {
    return {
      id: "HH",
      toString: (d) => twoDigit(d.getHours())
    };
  } else if (s.startsWith("mm")) {
    return {
      id: "mm",
      toString: (d) => twoDigit(d.getMinutes())
    };
  } else if (s.startsWith("ss")) {
    return {
      id: "ss",
      toString: (d) => twoDigit(d.getSeconds())
    };
  }
}
function createFormat(s, locale = {}) {
  const innerLocale = getInnerLocale(locale);
  const tokens = [];
  while (s.length > 0) {
    const token = parseRule(s, innerLocale);
    if (token) {
      tokens.push(token);
      s = s.slice(token.id.length);
    } else if (typeof tokens[tokens.length - 1] === "string") {
      tokens[tokens.length - 1] += s[0];
      s = s.slice(1);
    } else {
      tokens.push(s[0]);
      s = s.slice(1);
    }
  }
  return tokens;
}
const DateInput_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".date-time-field.svelte-t4t6h3{position:relative}input.svelte-t4t6h3{color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);min-width:0px;box-sizing:border-box;padding:4px 6px;margin:0px;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;width:var(--date-input-width, 200px);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}input.svelte-t4t6h3:focus{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}input.svelte-t4t6h3:disabled{opacity:0.5}.invalid.svelte-t4t6h3{border:1px solid rgba(249, 47, 114, 0.5);background-color:rgba(249, 47, 114, 0.1)}.invalid.svelte-t4t6h3:focus{border-color:#f92f72;box-shadow:0px 0px 0px 2px rgba(249, 47, 114, 0.5)}.picker.svelte-t4t6h3{display:none;position:absolute;padding:1px;left:var(--picker-left-position);z-index:10}.picker.above.svelte-t4t6h3{bottom:100%}.picker.visible.svelte-t4t6h3{display:block}",
  map: null
};
const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let $innerStore, $$unsubscribe_innerStore;
  createEventDispatcher();
  const defaultDate = /* @__PURE__ */ new Date();
  const innerStore = writable(null);
  $$unsubscribe_innerStore = subscribe(innerStore, (value2) => $innerStore = value2);
  const store = (() => {
    return {
      subscribe: innerStore.subscribe,
      set: (date) => {
        if (date === null || date === void 0) {
          innerStore.set(null);
          value = date;
        } else if (date.getTime() !== ($innerStore == null ? void 0 : $innerStore.getTime())) {
          innerStore.set(date);
          value = date;
        }
      }
    };
  })();
  $$unsubscribe_store = subscribe(store, (value2) => $store = value2);
  let { value = null } = $$props;
  let { min = new Date(defaultDate.getFullYear() - 5, 0, 1) } = $$props;
  let { max = new Date(defaultDate.getFullYear(), 11, 31, 23, 59, 59, 999) } = $$props;
  let { id = null } = $$props;
  let { placeholder = "2020-12-31 23:00:00" } = $$props;
  let { valid = true } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { class: classes = "" } = $$props;
  let { locale = {} } = $$props;
  let { format = "yyyy-MM-dd HH:mm:ss" } = $$props;
  let formatTokens = createFormat(format, locale);
  function valueUpdate(value2, formatTokens2) {
    text = toText(value2, formatTokens2);
  }
  let { text = toText($store, formatTokens) } = $$props;
  function textUpdate(text2, formatTokens2) {
    if (text2.length) {
      const result = parse(text2, formatTokens2, $store);
      if (result.date !== null) {
        valid = true;
        store.set(result.date);
      } else {
        valid = false;
      }
    } else {
      valid = true;
      if (value) {
        value = null;
        store.set(null);
      }
    }
  }
  let { visible = false } = $$props;
  let { closeOnSelection = false } = $$props;
  let { browseWithoutSelecting = false } = $$props;
  let { timePrecision = null } = $$props;
  let { dynamicPositioning = false } = $$props;
  let InputElement;
  let pickerElement;
  let pickerLeftPosition = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.closeOnSelection === void 0 && $$bindings.closeOnSelection && closeOnSelection !== void 0)
    $$bindings.closeOnSelection(closeOnSelection);
  if ($$props.browseWithoutSelecting === void 0 && $$bindings.browseWithoutSelecting && browseWithoutSelecting !== void 0)
    $$bindings.browseWithoutSelecting(browseWithoutSelecting);
  if ($$props.timePrecision === void 0 && $$bindings.timePrecision && timePrecision !== void 0)
    $$bindings.timePrecision(timePrecision);
  if ($$props.dynamicPositioning === void 0 && $$bindings.dynamicPositioning && dynamicPositioning !== void 0)
    $$bindings.dynamicPositioning(dynamicPositioning);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      store.set(value);
    }
    formatTokens = createFormat(format, locale);
    {
      valueUpdate($store, formatTokens);
    }
    {
      textUpdate(text, formatTokens);
    }
    $$rendered = `
<div class="${"date-time-field " + escape(classes, true) + " svelte-t4t6h3"}"><input type="${"text"}" autocomplete="${"off"}"${add_attribute("value", text, 0)}${add_attribute("id", id, 0)}${add_attribute("placeholder", placeholder, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""} class="${["svelte-t4t6h3", !valid ? "invalid" : ""].join(" ").trim()}"${add_attribute("this", InputElement, 0)}>
	${visible && !disabled ? `<div class="${[
      "picker svelte-t4t6h3",
      (visible ? "visible" : "") + " "
    ].join(" ").trim()}"${add_styles({
      "--picker-left-position": `${pickerLeftPosition}px`
    })}${add_attribute("this", pickerElement, 0)}>${validate_component(DatePicker, "DateTimePicker").$$render(
      $$result,
      {
        min,
        max,
        locale,
        browseWithoutSelecting,
        timePrecision,
        value: $store
      },
      {
        value: ($$value) => {
          $store = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}</div>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  $$unsubscribe_innerStore();
  return $$rendered;
});
const datatagpro_svelte_svelte_type_style_lang = "";
const css = {
  code: '.strikeout.svelte-1gf39g8{text-decoration:line-through;color:#999;position:relative}.strikeout.svelte-1gf39g8:before{content:"";position:absolute;top:50%;left:0;right:0;border-bottom:1px solid #111;transform:translateY(-50%)}.strikeout.svelte-1gf39g8:after{content:"\\00B7";font-size:1px;position:absolute;bottom:0;left:0;right:0;text-align:center}',
  map: null
};
let defaultClass = "flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";
const Datatagpro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let start_time_object = null;
  let end_time_object = null;
  sessionidG.subscribe((val) => {
  });
  let changed_data_tag_pro_data = "";
  let saved_changed_data_tag_pro_data = "";
  let CloudProfile = [];
  genericMQTTConfig.subscribe((val) => {
  });
  ChangedGenericMQTTConfig.subscribe((val) => {
  });
  modbusConfig.subscribe((val) => {
  });
  ChangedModbusConfig.subscribe((val) => {
  });
  datatagproConfig.subscribe((val) => {
  });
  ChangedDataTagProConfig.subscribe((val) => {
    saved_changed_data_tag_pro_data = val;
  });
  DataTagPro_ULRule_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleEvent_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleSCADA_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleDM_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleTOU_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleAccumulated_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleCalculation_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_TagRuleModbus_ConfigChangedLog.subscribe((val) => {
  });
  DataTagPro_General_ConfigChangedLog.subscribe((val) => {
  });
  let modify_com_modal = false;
  let Modify_TCP_Master_Modal = false;
  let modify_modbus_parameter_modal = false;
  let modify_modbus_parameter_index;
  let modify_mtag_processing_modal = false;
  let modify_mtag_processing_index;
  let modify_calculation_tag_modal = false;
  let modify_calculation_tag_index;
  let modify_accumulated_tag_modal = false;
  let modify_accumulated_tag_index;
  let modify_tou_tag_modal = false;
  let modify_tou_tag_index;
  let modify_DM_tag_modal = false;
  let modify_DM_tag_index;
  let scada_target_tag = [];
  let modify_scada_tag_modal = false;
  let modify_scada_tag_index;
  let modify_event_tag_modal = false;
  let modify_event_tag_index;
  let MultiSelectedCloudProfile = [];
  let Cloud1Topic = [];
  let Cloud2Topic = [];
  let modify_ul_rule_modal = false;
  let modify_ul_rule_index;
  let new_ul_rule_modal = false;
  let new_ul_rule_index;
  let new_ul_rule = [
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      dataPushInterval: 0,
      dataPushIntervalValue: 15,
      linkLostRetransmit: 0,
      dataPriority: 0,
      cloudProfile: [],
      contentFormat: 0,
      userDefineedData: ""
    }
  ];
  let new_event_tag_modal = false;
  let new_event_tag_index;
  let new_event_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      triggerTag: "",
      triggerConditionOperand: 0,
      triggerConditionValue: 1,
      pollingRateS: 1,
      actionOperation: 0,
      actionOperationValue: 1,
      actionTarget: ""
    }
  ];
  let new_scada_tag_modal = false;
  let new_scada_tag_index;
  let new_scada_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: []
    }
  ];
  let new_DM_tag_modal = false;
  let new_DM_tag_index;
  let new_DM_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: ""
    }
  ];
  let new_tou_tag_modal = false;
  let new_tou_tag_index;
  let new_tou_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: "",
      rate: 1
    }
  ];
  let new_accumulated_tag_modal = false;
  let new_accumulated_tag_index;
  let new_accumulated_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      targetTag: "",
      startTime: "",
      endTime: ""
    }
  ];
  let new_calculation_tag_modal = false;
  let new_calculation_tag_index;
  let new_calculation_tag = [
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      updateCondition: 0,
      updatePeriod: 100,
      referenceParameter: [
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        },
        {
          enable: true,
          usage: 0,
          tagName: "",
          constantValue: 1
        }
      ],
      calculationFormula: "",
      spanHigh: 1e3,
      spanLow: 0
    }
  ];
  let new_mtag_processing_modal = false;
  let new_mtag_processing_index;
  let new_mtag_processing = [
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    },
    {
      enable: false,
      delete: false,
      tagName: "",
      pollingRate: 0,
      pollingRateMS: 100,
      realTimePublishing: 0,
      access: 0,
      dataType: 0,
      scaleFactor: { operator: 0, value: 1, unit: 0 },
      sbir: {
        enable: false,
        registerAddress: 1,
        writeIndexContent: 1
      }
    }
  ];
  let new_modbus_parameter_modal = false;
  let new_modbus_parameter_index;
  let new_modbus_parameter = [
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    },
    {
      enable: false,
      delete: false,
      protocol: 0,
      tagName: "",
      slaveId: 2,
      pointType: 3,
      address: 0,
      quantity: 1,
      byteOrder: 0,
      responseTimeout: 1e3
    }
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "General" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-36"}"><p class="${"pl-5 pt-5 text-lg font-light text-left"}">Data Tag Pro</p></td>
<td class="${"pl-5 pt-5"}">${``}</td>
<td></td></tr></table>

<p class="${"pt-5"}"></p>


<table><tr class="${"pt-5"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr></table>`;
          }
        })}
   
${validate_component(TabItem, "TabItem").$$render($$result, { title: "Tag Rule" }, {}, {
          default: () => {
            return `${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Modbus Tag
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus RTU Master Profile
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Please set rtu master configuration first.</p></caption>

${``}  

  
${validate_component(Modal, "Modal").$$render(
                          $$result,
                          {
                            size: "md",
                            class: "w-full",
                            permanent: true,
                            open: modify_com_modal
                          },
                          {
                            open: ($$value) => {
                              modify_com_modal = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<form action="${"#"}"><label><input type="${"checkbox"}"${add_attribute("checked", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.enable, 1)}>
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>
<table><tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Serial Profile</p></td>

      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose Profile ...</option><option value="${"S1"}">S1</option><option value="${"S2"}">S2</option></select></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Interface</p></td>

    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.interface
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.interface = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `RS 485`;
                                  }
                                }
                              )}</div></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Baudrate</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.baudrate, 0)}></td></tr>


<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Parity</p></td>


    <td class="${"pl-5 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `None`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Even`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 2,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.parity = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Odd`;
                                  }
                                }
                              )}</div></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Data Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.dataBits, 0)}></td></tr>

<tr><td><p class="${"pl-4 pt-4 text-lg font-light text-right"}">Stop Bits</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.rtuMasterProfile.stopBits, 0)}></td></tr>
      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                default: () => {
                                  return `Modify`;
                                }
                              })}</td></tr></table></form>`;
                            }
                          }
                        )}`;
                      }
                    })}


<p class="${"mt-8"}"></p>  


${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus TCP Master Profile
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Please set tcp master configuration first.</p></caption>

${``} 




   ${validate_component(Modal, "Modal").$$render(
                          $$result,
                          {
                            size: "lg",
                            class: "w-full",
                            permanent: true,
                            open: Modify_TCP_Master_Modal
                          },
                          {
                            open: ($$value) => {
                              Modify_TCP_Master_Modal = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Server IP</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.remoteServerIp, 0)}></td></tr>

<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Remote Port</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.remotePort, 0)}></td></tr>


<tr><td><p class="${"pl-10 pt-4 text-lg font-light text-right"}">Connection Timeout</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tcpMasterProfile.connectionTimeout, 0)}> </td><td><p class="${"pl-2 pt-4 text-lg"}">ms</p></td></tr>

      <tr><td></td>
    <td></td>
        <td></td>
    <td></td>

            <td></td>
    <td></td>
    <td class="${"pl-20"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                default: () => {
                                  return `Modify`;
                                }
                              })}</td></tr></table></form>`;
                            }
                          }
                        )}`;
                      }
                    })}
<p class="${"mt-8"}"></p>  


${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Modbus Parameter
    </caption>
  
${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {
                              default: () => {
                                return `Enable`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1 w-2" }, {}, {
                              default: () => {
                                return `No`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-18" }, {}, {
                              default: () => {
                                return `Tag Name`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-2 w-10" }, {}, {
                              default: () => {
                                return `Protocol`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1 w-10" }, {}, {
                              default: () => {
                                return `Slave ID`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-18" }, {}, {
                              default: () => {
                                return `Point Type`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-2 w-18" }, {}, {
                              default: () => {
                                return `Address (DEC)`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-2 w-10" }, {}, {
                              default: () => {
                                return `Quantity`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-1 w-10" }, {}, {
                              default: () => {
                                return `Response Timeout`;
                              }
                            })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-2 w-10" }, {}, {
                              default: () => {
                                return `Byte Order`;
                              }
                            })}`;
                          }
                        })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                          default: () => {
                            return `${``}


  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                  default: () => {
                                    return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                  }
                                })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                              }
                            })}`;
                          }
                        })}


  ${validate_component(Modal, "Modal").$$render(
                          $$result,
                          {
                            size: "lg",
                            class: "w-full",
                            autoclose: true,
                            open: new_modbus_parameter_modal
                          },
                          {
                            open: ($$value) => {
                              new_modbus_parameter_modal = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_modbus_parameter[new_modbus_parameter_index].tagName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Protocol</p></td>
    <td class="${"pl-4 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: new_modbus_parameter[new_modbus_parameter_index].protocol
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].protocol = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `RTU`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: new_modbus_parameter[new_modbus_parameter_index].protocol
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].protocol = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `TCP`;
                                  }
                                }
                              )}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_modbus_parameter[new_modbus_parameter_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 2,
                                  group: new_modbus_parameter[new_modbus_parameter_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].pointType = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Input Register`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 3,
                                  group: new_modbus_parameter[new_modbus_parameter_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].pointType = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                }
                              )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_modbus_parameter[new_modbus_parameter_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_modbus_parameter[new_modbus_parameter_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: new_modbus_parameter[new_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Big Endian`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: new_modbus_parameter[new_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Little Endian`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 2,
                                  group: new_modbus_parameter[new_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Big Endian Byte Swap`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 3,
                                  group: new_modbus_parameter[new_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    new_modbus_parameter[new_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Little Endian Byte Swap`;
                                  }
                                }
                              )}</div></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_modbus_parameter[new_modbus_parameter_index].responseTimeout, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>


      <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                default: () => {
                                  return `Add`;
                                }
                              })}</td></tr></table></form>`;
                            }
                          }
                        )}

${validate_component(Modal, "Modal").$$render(
                          $$result,
                          {
                            size: "lg",
                            class: "w-full",
                            permanent: true,
                            open: modify_modbus_parameter_modal
                          },
                          {
                            open: ($$value) => {
                              modify_modbus_parameter_modal = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].tagName, 0)}></td></tr>





  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Protocol</p></td>
    <td class="${"pl-4 pt-4"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].protocol
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].protocol = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `RTU`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].protocol
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].protocol = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `TCP`;
                                  }
                                }
                              )}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Slave ID</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].slaveId, 0)}></td>
<td></td>
<td></td>
<td></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Point Type</p></td>

    <td class="${"pl-4 pt-4"}" colspan="${"5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 2,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].pointType = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Input Register`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 3,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].pointType
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].pointType = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Holding Register`;
                                  }
                                }
                              )}</div></td></tr>




<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Address</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].address, 0)}></td>

<td></td>
<td></td>
<td></td></tr>


  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Quantity</p></td><td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].quantity, 0)}></td>

<td></td>
<td></td>
<td></td></tr>



  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Byte Order</p></td>

    <td class="${"pl-4 pt-5"}" colspan="${"5"}"><div class="${"flex gap-2"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Big Endian`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Little Endian`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 2,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Big Endian Byte Swap`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 3,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].byteOrder = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Little Endian Byte Swap`;
                                  }
                                }
                              )}</div></td></tr>

  <tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Response Timeout</p></td><td class="${"pl-5 pt-5 w-18"}" colspan="${"2"}"><div class="${"flex gap-2"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter[modify_modbus_parameter_index].responseTimeout, 0)}><p class="${"pl-1 pt-4"}">ms</p></div></td>

<td></td>
<td></td>
<td></td></tr>


      <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                default: () => {
                                  return `Modify`;
                                }
                              })}</td></tr></table></form>`;
                            }
                          }
                        )}`;
                      }
                    })} 


<p class="${"mt-4"}"></p>


${validate_component(Table, "Table").$$render($$result, { shadow: true, striped: true }, {}, {
                      default: () => {
                        return `<caption class="${"w-full p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}">Process Parameter
    <p class="${"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"}">Please set process parameter.</p></caption>

${``} 

 ${validate_component(Modal, "Modal").$$render(
                          $$result,
                          {
                            size: "lg",
                            class: "w-full",
                            autoclose: true,
                            open: new_mtag_processing_modal
                          },
                          {
                            open: ($$value) => {
                              new_mtag_processing_modal = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<form action="${"#"}"><label>${``}
  Enable
</label>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                              })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: new_mtag_processing[new_mtag_processing_index].pollingRate
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].pollingRate = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `None`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: new_mtag_processing[new_mtag_processing_index].pollingRate
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].pollingRate = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `User Define:`;
                                  }
                                }
                              )}
${new_mtag_processing[new_mtag_processing_index].pollingRate == 0 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled${add_attribute("value", new_mtag_processing[new_mtag_processing_index].pollingRateMS, 0)}>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_mtag_processing[new_mtag_processing_index].pollingRateMS, 0)}>`}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Realtime Publish</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: new_mtag_processing[new_mtag_processing_index].realTimePublishing
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].realTimePublishing = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `No`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: new_mtag_processing[new_mtag_processing_index].realTimePublishing
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].realTimePublishing = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Yes`;
                                  }
                                }
                              )}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Access</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: new_mtag_processing[new_mtag_processing_index].access
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].access = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Read Only`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: new_mtag_processing[new_mtag_processing_index].access
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].access = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Write Only`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 2,
                                  group: new_mtag_processing[new_mtag_processing_index].access
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].access = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Read and Write`;
                                  }
                                }
                              )}</div></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Data Type</p></td>
    <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 0, 0)}>Signed Integer 16</option><option${add_attribute("value", 1, 0)}>Unsigned Integer 16</option><option${add_attribute("value", 2, 0)}>Signed Integer 32</option><option${add_attribute("value", 3, 0)}>Unsigned Integer 32</option><option${add_attribute("value", 4, 0)}>Signed Integer 64</option><option${add_attribute("value", 5, 0)}>Unsigned Integer 64</option><option${add_attribute("value", 6, 0)}>Float 32</option><option${add_attribute("value", 7, 0)}>Float 64</option><option${add_attribute("value", 8, 0)}>Ascii</option><option${add_attribute("value", 9, 0)}>Bitmap</option><option${add_attribute("value", 10, 0)}>Str32</option><option${add_attribute("value", 11, 0)}>String</option><option${add_attribute("value", 12, 0)}>Raw</option><option${add_attribute("value", 13, 0)}>Bool</option></select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Scale</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 0, 0)}>None</option><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>

${new_mtag_processing[new_mtag_processing_index].scaleFactor.operator == 0 ? `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  class: "disabled:cursor-not-allowed disabled:opacity-50",
                                  style: "outlined",
                                  id: "operand_value",
                                  name: "operand_value",
                                  type: "number",
                                  label: "operand_value",
                                  disabled: true,
                                  value: new_mtag_processing[new_mtag_processing_index].scaleFactor.value
                                },
                                {
                                  value: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].scaleFactor.value = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}` : `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "outlined",
                                  id: "operand_value",
                                  name: "operand_value",
                                  type: "number",
                                  label: "operand_value",
                                  value: new_mtag_processing[new_mtag_processing_index].scaleFactor.value
                                },
                                {
                                  value: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].scaleFactor.value = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">SBIR</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: false,
                                  group: new_mtag_processing[new_mtag_processing_index].sbir.enable
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].sbir.enable = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Disable`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: true,
                                  group: new_mtag_processing[new_mtag_processing_index].sbir.enable
                                },
                                {
                                  group: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].sbir.enable = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Enable:`;
                                  }
                                }
                              )}
${!new_mtag_processing[new_mtag_processing_index].sbir.enable ? `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  class: "disabled:cursor-not-allowed disabled:opacity-50",
                                  style: "outlined",
                                  id: "Register Address",
                                  name: "Register Address",
                                  type: "number",
                                  label: "Register Address",
                                  disabled: true,
                                  value: new_mtag_processing[new_mtag_processing_index].sbir.registerAddress
                                },
                                {
                                  value: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].sbir.registerAddress = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}

 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  class: "disabled:cursor-not-allowed disabled:opacity-50",
                                  style: "outlined",
                                  id: "Write Index Content",
                                  name: "Write Index Content",
                                  type: "number",
                                  label: "Write Index Content",
                                  disabled: true,
                                  value: new_mtag_processing[new_mtag_processing_index].sbir.writeIndexContent
                                },
                                {
                                  value: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].sbir.writeIndexContent = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}` : `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "outlined",
                                  id: "Register Address",
                                  name: "Register Address",
                                  type: "number",
                                  label: "Register Address",
                                  value: new_mtag_processing[new_mtag_processing_index].sbir.registerAddress
                                },
                                {
                                  value: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].sbir.registerAddress = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}

 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "outlined",
                                  id: "Write Index Content",
                                  name: "Write Index Content",
                                  type: "number",
                                  label: "Write Index Content",
                                  value: new_mtag_processing[new_mtag_processing_index].sbir.writeIndexContent
                                },
                                {
                                  value: ($$value) => {
                                    new_mtag_processing[new_mtag_processing_index].sbir.writeIndexContent = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`}</div></td></tr>




      <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                default: () => {
                                  return `Add`;
                                }
                              })}</td></tr></table></form>`;
                            }
                          }
                        )}

${validate_component(Modal, "Modal").$$render(
                          $$result,
                          {
                            size: "lg",
                            class: "w-full",
                            permanent: true,
                            open: modify_mtag_processing_modal
                          },
                          {
                            open: ($$value) => {
                              modify_mtag_processing_modal = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<form action="${"#"}"><label>${``}
  Enable
</label>
<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                              })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].pollingRate
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].pollingRate = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `None`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].pollingRate
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].pollingRate = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `User Define:`;
                                  }
                                }
                              )}
${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].pollingRate == 0 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].pollingRateMS, 0)}>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].pollingRateMS, 0)}>`}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Realtime Publish</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].realTimePublishing
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].realTimePublishing = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `No`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].realTimePublishing
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].realTimePublishing = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Yes`;
                                  }
                                }
                              )}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Access</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 0,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].access
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].access = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Read Only`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 1,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].access
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].access = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Write Only`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: 2,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].access
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].access = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Read and Write`;
                                  }
                                }
                              )}</div></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Data Type</p></td>
    <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 0, 0)}>Signed Integer 16</option><option${add_attribute("value", 1, 0)}>Unsigned Integer 16</option><option${add_attribute("value", 2, 0)}>Signed Integer 32</option><option${add_attribute("value", 3, 0)}>Unsigned Integer 32</option><option${add_attribute("value", 4, 0)}>Signed Integer 64</option><option${add_attribute("value", 5, 0)}>Unsigned Integer 64</option><option${add_attribute("value", 6, 0)}>Float 32</option><option${add_attribute("value", 7, 0)}>Float 64</option><option${add_attribute("value", 8, 0)}>Ascii</option><option${add_attribute("value", 9, 0)}>Bitmap</option><option${add_attribute("value", 10, 0)}>Str32</option><option${add_attribute("value", 11, 0)}>String</option><option${add_attribute("value", 12, 0)}>Raw</option><option${add_attribute("value", 13, 0)}>Bool</option></select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Scale</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option><option${add_attribute("value", 0, 0)}>None</option><option${add_attribute("value", 1, 0)}>+</option><option${add_attribute("value", 2, 0)}>-</option><option${add_attribute("value", 3, 0)}>*</option><option${add_attribute("value", 4, 0)}>/</option></select>

${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].scaleFactor.operator == 0 ? `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  class: "disabled:cursor-not-allowed disabled:opacity-50",
                                  style: "outlined",
                                  id: "operand_value",
                                  name: "operand_value",
                                  type: "number",
                                  label: "operand_value",
                                  disabled: true,
                                  value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].scaleFactor.value
                                },
                                {
                                  value: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].scaleFactor.value = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}` : `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "outlined",
                                  id: "operand_value",
                                  name: "operand_value",
                                  type: "number",
                                  label: "operand_value",
                                  value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].scaleFactor.value
                                },
                                {
                                  value: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].scaleFactor.value = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`}</div></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">SBIR</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: false,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.enable
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.enable = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Disable`;
                                  }
                                }
                              )}
  ${validate_component(Radio, "Radio").$$render(
                                $$result,
                                {
                                  value: true,
                                  group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.enable
                                },
                                {
                                  group: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.enable = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `Enable:`;
                                  }
                                }
                              )}
${!changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.enable ? `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  class: "disabled:cursor-not-allowed disabled:opacity-50",
                                  style: "outlined",
                                  id: "Register Address",
                                  name: "Register Address",
                                  type: "number",
                                  label: "Register Address",
                                  disabled: true,
                                  value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.registerAddress
                                },
                                {
                                  value: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.registerAddress = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}

 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  class: "disabled:cursor-not-allowed disabled:opacity-50",
                                  style: "outlined",
                                  id: "Write Index Content",
                                  name: "Write Index Content",
                                  type: "number",
                                  label: "Write Index Content",
                                  disabled: true,
                                  value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.writeIndexContent
                                },
                                {
                                  value: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.writeIndexContent = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}` : `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "outlined",
                                  id: "Register Address",
                                  name: "Register Address",
                                  type: "number",
                                  label: "Register Address",
                                  value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.registerAddress
                                },
                                {
                                  value: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.registerAddress = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}

 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                $$result,
                                {
                                  style: "outlined",
                                  id: "Write Index Content",
                                  name: "Write Index Content",
                                  type: "number",
                                  label: "Write Index Content",
                                  value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.writeIndexContent
                                },
                                {
                                  value: ($$value) => {
                                    changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.tagProcessing[modify_mtag_processing_index].sbir.writeIndexContent = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`}</div></td></tr>


      <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                default: () => {
                                  return `Modify`;
                                }
                              })}</td></tr></table></form>`;
                            }
                          }
                        )}`;
                      }
                    })}


<p class="${"mt-2"}"></p>

<table><tr><td class="${"w-18"}"></td>
    <td class="${"w-18"}"></td>
    <td class="${"w-18"}"></td>
    <td class="${"w-18"}"></td>
    <td class="${"w-18"}"></td>
    <td class="${"w-18"}"></td>
    <td class="${"w-10"}"></td>
    <td class="${"w-10"}"></td>
    <td class="${"w-10"}"></td>    

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                      default: () => {
                        return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                      }
                    })}</td></tr></table>`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Calculation Tag
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Span High/Low`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-80" }, {}, {
                                default: () => {
                                  return `Update Condition`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


  ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}

      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}

  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                                }
                              })}

  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>


    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: new_calculation_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_calculation_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_calculation_tag[new_calculation_tag_index].tagName, 0)}></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Span High</p></td>
    <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_calculation_tag[new_calculation_tag_index].spanHigh, 0)}></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Span Low</p></td>
    <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_calculation_tag[new_calculation_tag_index].spanLow, 0)}></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Update</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 1,
                                    group: new_calculation_tag[new_calculation_tag_index].updateCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      new_calculation_tag[new_calculation_tag_index].updateCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `When Ref Tag is updated`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: new_calculation_tag[new_calculation_tag_index].updateCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      new_calculation_tag[new_calculation_tag_index].updateCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Period:`;
                                    }
                                  }
                                )}
${new_calculation_tag[new_calculation_tag_index].updateCondition == 1 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled${add_attribute("value", new_calculation_tag[new_calculation_tag_index].updatePeriod, 0)}><p class="${"pl-1 pt-1 text-lg"}">ms</p>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_calculation_tag[new_calculation_tag_index].updatePeriod, 0)}><p class="${"pl-1 pt-1 text-lg"}">ms</p>`}</div></td></tr>


<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 1</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 1`;
                                  }
                                })}</div></td></tr>


<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 2</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 2`;
                                  }
                                })}</div></td></tr>

<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 3</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 3`;
                                  }
                                })}</div></td></tr>


<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 4</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 4`;
                                  }
                                })}</div></td></tr>




<tr><td class="${"pt-2"}"><div><p class="${"pl-10 pt-1 mb-4 text-lg font-light text-right"}">Calculation</p>


  <ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Max()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Min()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Avg()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Abs()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Add()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Sub()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Mul()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Div()`;
                                  }
                                })}</li>
<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Reminder()`;
                                  }
                                })}</li></ul></div></td>
      <td class="${"pl-5 pt-2"}">${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "Formula",
                                    placeholder: "User Defined Formula",
                                    rows: "12",
                                    name: "message",
                                    value: new_calculation_tag[new_calculation_tag_index].calculationFormula
                                  },
                                  {
                                    value: ($$value) => {
                                      new_calculation_tag[new_calculation_tag_index].calculationFormula = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}



${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_calculation_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_calculation_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].tagName, 0)}></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Span High</p></td>
    <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].spanHigh, 0)}></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Span Low</p></td>
    <td class="${"pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].spanLow, 0)}></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Update</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 1,
                                    group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].updateCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].updateCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `When Ref Tag is updated`;
                                    }
                                  }
                                )}
  ${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].updateCondition
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].updateCondition = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Period:`;
                                    }
                                  }
                                )}
${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].updateCondition == 1 ? `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50"}" disabled${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].updatePeriod, 0)}><p class="${"pl-1 pt-1 text-lg"}">ms</p>` : `<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].updatePeriod, 0)}><p class="${"pl-1 pt-1 text-lg"}">ms</p>`}</div></td></tr>


<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 1</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 1`;
                                  }
                                })}</div></td></tr>


<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 2</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 2`;
                                  }
                                })}</div></td></tr>

<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 3</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 3`;
                                  }
                                })}</div></td></tr>


<tr><td><p class="${"pl-2 pt-1 text-lg font-light text-right"}">Ref Tag 4</p></td>
      <td class="${"pl-5 pt-2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>
    ${validate_component(Button, "Button").$$render($$result, { size: "xs", class: "my-2" }, {}, {
                                  default: () => {
                                    return `Ref Tag 4`;
                                  }
                                })}</div></td></tr>




<tr><td class="${"pt-2"}"><div><p class="${"pl-10 pt-1 mb-4 text-lg font-light text-right"}">Calculation</p>


  <ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Max()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Min()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Avg()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Abs()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Add()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Sub()`;
                                  }
                                })}</li>

<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Mul()`;
                                  }
                                })}
    ${validate_component(Button, "Button").$$render($$result, { class: "pl-2", size: "xs" }, {}, {
                                  default: () => {
                                    return `Div()`;
                                  }
                                })}</li>
<li class="${"pt-2 text-right"}">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `Reminder()`;
                                  }
                                })}</li></ul></div></td>
      <td class="${"pl-5 pt-2"}">${validate_component(Textarea, "Textarea").$$render(
                                  $$result,
                                  {
                                    id: "Formula",
                                    placeholder: "User Defined Formula",
                                    rows: "12",
                                    name: "message",
                                    value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.calculationTag[modify_calculation_tag_index].calculationFormula = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Accumulated Tag
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Target Tag`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Start Time`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `End Time`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}



${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: new_accumulated_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_accumulated_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_accumulated_tag[new_accumulated_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: start_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      start_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: end_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      end_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>
<p class="${"pt-48"}"></p>
<p class="${"pt-5"}"></p>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}




${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_accumulated_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_accumulated_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.accumulatedTag[modify_accumulated_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: start_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      start_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: end_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      end_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>
<p class="${"pt-48"}"></p>
<p class="${"pt-5"}"></p>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}



  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">TOU Tag
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Target Tag`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Start Time`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `End Time`;
                                }
                              })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Rate`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}



${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: new_tou_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_tou_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tou_tag[new_tou_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: start_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      start_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: end_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      end_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>
<p class="${"pt-5"}"></p>
<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Rate</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_tou_tag[new_tou_tag_index].rate, 0)}></td></tr>

<p class="${"pt-48"}"></p>
<p class="${"pt-5"}"></p>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_tou_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_tou_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Start Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: start_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      start_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>

<p class="${"pt-5"}"></p>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">End Time</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(DateInput, "DateInput").$$render(
                                  $$result,
                                  {
                                    format: "yyyy/MM/dd HH:mm:ss",
                                    value: end_time_object
                                  },
                                  {
                                    value: ($$value) => {
                                      end_time_object = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</td></tr>
<p class="${"pt-5"}"></p>
<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Rate</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.touTag[modify_tou_tag_index].rate, 0)}></td></tr>

<p class="${"pt-48"}"></p>
<p class="${"pt-5"}"></p>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}



  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Direct Methods Tag
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Target Tag`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: new_DM_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_DM_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_DM_tag[new_DM_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}



${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_DM_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_DM_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.directMethodTag[modify_DM_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}

  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">SCADA Tag
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Target Tag Number`;
                                }
                              })}    

    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: new_scada_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_scada_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_scada_tag[new_scada_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Select Target <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`;
                                  }
                                })}
${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-44 p-3 space-y-3 text-sm" }, {}, {
                                  default: () => {
                                    return `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter, index) => {
                                      return `<li><label class="${"pl-2"}"><input type="${"checkbox"}"${add_attribute("checked", scada_target_tag[index], 1)}>
  ${escape(deviceParameter.tagName)}</label>
  </li>`;
                                    })}`;
                                  }
                                })}</td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}



${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_scada_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_scada_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.scadaTag[modify_scada_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Target Tag</p></td>
      <td class="${"pl-5 pt-5"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Select Target <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" color="${"currentColor"}" class="${"shrink-0 w-6 h-6 ms-2 text-white dark:text-white"}" role="${"img"}" aria-label="${"chevron down outline"}" viewBox="${"0 0 24 24"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m8 10 4 4 4-4"}"></path></svg>`;
                                  }
                                })}
${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-44 p-3 space-y-3 text-sm" }, {}, {
                                  default: () => {
                                    return `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter, index) => {
                                      return `<li><label class="${"pl-2"}"><input type="${"checkbox"}"${add_attribute("checked", scada_target_tag[index], 1)}>
  ${escape(deviceParameter.tagName)}</label>
  </li>`;
                                    })}`;
                                  }
                                })}</td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}


  ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { defaultClass }, {}, {
                  header: () => {
                    return `<span slot="${"header"}" class="${"pl-4"}">Event Tag
    </span>`;
                  },
                  default: () => {
                    return `${validate_component(Table, "Table").$$render(
                      $$result,
                      {
                        shadow: true,
                        striped: true,
                        tableNoWFull: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Enable`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                                default: () => {
                                  return `No`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Tag Name`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Trigger Tag`;
                                }
                              })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                                default: () => {
                                  return `Trigger Condition`;
                                }
                              })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-36" }, {}, {
                                default: () => {
                                  return `Action`;
                                }
                              })}`;
                            }
                          })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                            default: () => {
                              return `${``}


 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                                    default: () => {
                                      return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                                    }
                                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}


    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-36" }, {}, {})}`;
                                }
                              })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                                default: () => {
                                  return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                                }
                              })}</td></tr>`;
                            }
                          })}



${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: new_event_tag_modal
                            },
                            {
                              open: ($$value) => {
                                new_event_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_event_tag[new_event_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Trigger Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Trigger Condition</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 5, 0)}>&gt;</option><option${add_attribute("value", 4, 0)}>${escape("<")}</option><option${add_attribute("value", 3, 0)}>&gt;=</option><option${add_attribute("value", 2, 0)}>${escape("<")}=</option><option${add_attribute("value", 1, 0)}>!=</option><option${add_attribute("value", 0, 0)}>=</option></select>


   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    class: "mt-1",
                                    id: "compared_value",
                                    name: "compared_value",
                                    type: "number",
                                    label: "compared_value",
                                    value: new_event_tag[new_event_tag_index].triggerConditionValue
                                  },
                                  {
                                    value: ($$value) => {
                                      new_event_tag[new_event_tag_index].triggerConditionValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_event_tag[new_event_tag_index].pollingRateS, 0)}>


     <p class="${"pt-1 text-lg"}">s</p></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Action</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: new_event_tag[new_event_tag_index].actionOperation
                                  },
                                  {
                                    group: ($$value) => {
                                      new_event_tag[new_event_tag_index].actionOperation = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Write`;
                                    }
                                  }
                                )}

<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>

<p class="${"pt-5"}">with </p>
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    class: "mt-1",
                                    id: "operand_value",
                                    name: "operand_value",
                                    type: "number",
                                    label: "operand_value",
                                    value: new_event_tag[new_event_tag_index].actionOperationValue
                                  },
                                  {
                                    value: ($$value) => {
                                      new_event_tag[new_event_tag_index].actionOperationValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>



 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Add`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}


${validate_component(Modal, "Modal").$$render(
                            $$result,
                            {
                              size: "lg",
                              class: "w-full",
                              permanent: true,
                              open: modify_event_tag_modal
                            },
                            {
                              open: ($$value) => {
                                modify_event_tag_modal = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].tagName, 0)}></td></tr>


<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Trigger Tag</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Trigger Condition</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-4 w-16"}"><option disabled="${""}" value="${"none"}">Choose Operator ...</option><option${add_attribute("value", 5, 0)}>&gt;</option><option${add_attribute("value", 4, 0)}>${escape("<")}</option><option${add_attribute("value", 3, 0)}>&gt;=</option><option${add_attribute("value", 2, 0)}>${escape("<")}=</option><option${add_attribute("value", 1, 0)}>!=</option><option${add_attribute("value", 0, 0)}>=</option></select>


   
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    class: "mt-1",
                                    id: "compared_value",
                                    name: "compared_value",
                                    type: "number",
                                    label: "compared_value",
                                    value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionValue
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].triggerConditionValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>

<tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Polling Rate</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].pollingRateS, 0)}>


      <p class="${"pt-1 text-lg"}">s</p></div></td></tr>




<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Action</p></td>

 <td class="${"pl-5 pt-4"}" colspan="${"2"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                                  $$result,
                                  {
                                    value: 0,
                                    group: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation
                                  },
                                  {
                                    group: ($$value) => {
                                      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperation = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `Write`;
                                    }
                                  }
                                )}

<select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                                  return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                                })}` : ``}</select>

<p class="${"pt-5"}">with </p>
 ${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                                  $$result,
                                  {
                                    style: "outlined",
                                    class: "mt-1",
                                    id: "operand_value",
                                    name: "operand_value",
                                    type: "number",
                                    label: "operand_value",
                                    value: changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperationValue
                                  },
                                  {
                                    value: ($$value) => {
                                      changed_data_tag_pro_data.config.service_dataTagPro_tagRule.eventTag[modify_event_tag_index].actionOperationValue = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div></td></tr>



 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                                  default: () => {
                                    return `Modify`;
                                  }
                                })}</td></tr></table></form>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}
${``}

${``}`;
              }
            })}`;
          }
        })}

${validate_component(TabItem, "TabItem").$$render($$result, { title: "UL Rule" }, {}, {
          default: () => {
            return `${validate_component(Table, "Table").$$render(
              $$result,
              {
                shadow: true,
                striped: true,
                tableNoWFull: true
              },
              {},
              {
                default: () => {
                  return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Enable`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                        default: () => {
                          return `No`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Tag Name`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Data Push Interval`;
                        }
                      })}    
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Link Lost Retransmit`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Data Priority`;
                        }
                      })} 
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Cloud Profile`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {
                        default: () => {
                          return `Content Format`;
                        }
                      })}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}
    ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                    }
                  })}

${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `${``}

 ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${changed_data_tag_pro_data.config.service_dataTagPro_ulRule.length < 10 ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-10" }, {}, {
                            default: () => {
                              return `<button><svg aria-hidden="${"true"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-gray-500 ml-2 dark:text-pink-500 w-6 h-6"}"><path d="${"M12 4V20M20 12L4 12"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
                            }
                          })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4 w-16" }, {}, {})}`}


      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-0 w-10" }, {}, {})}



    ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-10" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-18" }, {}, {})}`;
                        }
                      })}


  <tr><td></td>
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    <td class="${"pl-10 pt-4"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
                        default: () => {
                          return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
                        }
                      })}</td></tr>




${validate_component(Modal, "Modal").$$render(
                        $$result,
                        {
                          size: "xl",
                          class: "w-full",
                          permanent: true,
                          open: new_ul_rule_modal
                        },
                        {
                          open: ($$value) => {
                            new_ul_rule_modal = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                              return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                            })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Push Interval</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: new_ul_rule[new_ul_rule_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  new_ul_rule[new_ul_rule_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Right Away`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: new_ul_rule[new_ul_rule_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  new_ul_rule[new_ul_rule_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `User Defined (mins): `;
                                }
                              }
                            )}
${new_ul_rule[new_ul_rule_index].dataPushInterval == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled${add_attribute("value", new_ul_rule[new_ul_rule_index].dataPushIntervalValue, 0)}>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_ul_rule[new_ul_rule_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Link Lost Retransmit</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", new_ul_rule[new_ul_rule_index].linkLostRetransmit, 0)}>
      <p class="${"pt-2 text-lg font-light text-left"}">Delay Seconds</p></div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Priority</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: new_ul_rule[new_ul_rule_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  new_ul_rule[new_ul_rule_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Latest First`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: new_ul_rule[new_ul_rule_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  new_ul_rule[new_ul_rule_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `First In, First Out `;
                                }
                              }
                            )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>
<td class="${"pl-4 pt-4"}">${validate_component(MultiSelect, "MultiSelect").$$render(
                              $$result,
                              {
                                items: CloudProfile,
                                value: MultiSelectedCloudProfile
                              },
                              {
                                value: ($$value) => {
                                  MultiSelectedCloudProfile = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}</td>
<td class="${"pl-4 pt-4"}"></td>

<td class="${"pl-4 pt-4"}"></td></tr>

<p class="${"pt-10"}"></p>


${MultiSelectedCloudProfile.length == 1 ? `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">${escape(MultiSelectedCloudProfile[0])} Topic</p></td>
      <td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud1Topic[0], 0)}>


<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud1Topic[1], 0)}>

<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud1Topic[2], 0)}></div></td></tr>` : `${MultiSelectedCloudProfile.length == 2 ? `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">${escape(MultiSelectedCloudProfile[0])} Topic</p></td>
      <td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud1Topic[0], 0)}>


<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud1Topic[1], 0)}>

<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud1Topic[2], 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">${escape(MultiSelectedCloudProfile[1])} Topic</p></td>
 <td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud2Topic[0], 0)}>


<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud2Topic[1], 0)}>

<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", Cloud2Topic[2], 0)}></div></td></tr>` : ``}`}




<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Content Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 0,
                                group: new_ul_rule[new_ul_rule_index].contentFormat
                              },
                              {
                                group: ($$value) => {
                                  new_ul_rule[new_ul_rule_index].contentFormat = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                    default: () => {
                                      return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$}`;
                                    }
                                  })}`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 1,
                                group: new_ul_rule[new_ul_rule_index].contentFormat
                              },
                              {
                                group: ($$value) => {
                                  new_ul_rule[new_ul_rule_index].contentFormat = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `User Defined:`;
                                }
                              }
                            )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${new_ul_rule[new_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `TIME`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `TIME`;
                              }
                            })}`}</li>

<li class="${"pt-4"}">${new_ul_rule[new_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `ARRAY`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `ARRAY`;
                              }
                            })}`}</li>

<li class="${"pt-4"}">${new_ul_rule[new_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `NAME_RAWREQUEST`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `NAME_RAWREQUEST`;
                              }
                            })}`}</li>

<li class="${"pt-4"}">${new_ul_rule[new_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `NAME_RAWREPLY`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `NAME_RAWREPLY`;
                              }
                            })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${new_ul_rule[new_ul_rule_index].contentFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                              $$result,
                              {
                                id: "textarea-id",
                                placeholder: "Content Format",
                                rows: "12",
                                name: "message",
                                value: new_ul_rule[new_ul_rule_index].userDefineedData
                              },
                              {
                                value: ($$value) => {
                                  new_ul_rule[new_ul_rule_index].userDefineedData = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}` : `${validate_component(Textarea, "Textarea").$$render(
                              $$result,
                              {
                                id: "textarea-id",
                                placeholder: "Disabled",
                                rows: "12",
                                name: "message",
                                class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                disabled: true
                              },
                              {},
                              {}
                            )}`}</td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                              default: () => {
                                return `Add`;
                              }
                            })}</td></tr></table></form>`;
                          }
                        }
                      )}



${validate_component(Modal, "Modal").$$render(
                        $$result,
                        {
                          size: "xl",
                          class: "w-full",
                          permanent: true,
                          open: modify_ul_rule_modal
                        },
                        {
                          open: ($$value) => {
                            modify_ul_rule_modal = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `<form action="${"#"}"><label>${``}
  Enable
</label>

<button type="${"button"}" class="${"ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"}" aria-label="${"Close"}"><span class="${"sr-only"}">Close modal</span> <svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>

<p class="${"mt-10"}"></p>

<table><tr><td><p class="${"pl-2 pt-4 text-lg font-light text-right"}">Tag Name</p></td>
      <td class="${"pl-5 pt-5"}"><select class="${"block text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm p-2.5 mt-2 mb-1 w-64"}"><option disabled="${""}" value="${"none"}">Choose ...</option>${saved_changed_data_tag_pro_data != "" ? `${each(saved_changed_data_tag_pro_data.config.service_dataTagPro_tagRule.modbusTag.deviceParameter, (deviceParameter) => {
                              return `<option${add_attribute("value", deviceParameter.tagName, 0)}>${escape(deviceParameter.tagName)}</option>`;
                            })}` : ``}</select></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Push Interval</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Right Away`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval
                              },
                              {
                                group: ($$value) => {
                                  changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `User Defined (mins): `;
                                }
                              }
                            )}
${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushInterval == 0 ? `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500 disabled:cursor-not-allowed disabled:opacity-50 p-2.5"}" disabled${add_attribute("value", new_ul_rule[new_ul_rule_index].dataPushIntervalValue, 0)}>` : `<input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPushIntervalValue, 0)}>`}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Link Lost Retransmit</p></td>
    <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].linkLostRetransmit, 0)}>
      <p class="${"pt-2 text-lg font-light text-left"}">Delay Seconds</p></div></td></tr>


<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Data Priority</p></td>
      <td class="${"pl-5 pt-5"}"><div class="${"flex gap-4"}">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 0,
                                group: changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Latest First`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                value: 1,
                                group: changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPriority
                              },
                              {
                                group: ($$value) => {
                                  changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].dataPriority = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `First In, First Out `;
                                }
                              }
                            )}</div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Cloud Profile</p></td>
<td class="${"pl-4 pt-4"}">${validate_component(MultiSelect, "MultiSelect").$$render(
                              $$result,
                              {
                                items: CloudProfile,
                                value: MultiSelectedCloudProfile
                              },
                              {
                                value: ($$value) => {
                                  MultiSelectedCloudProfile = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}</td>
<td class="${"pl-4 pt-4"}"></td>

<td class="${"pl-4 pt-4"}"></td></tr>

<p class="${"pt-10"}"></p>


${MultiSelectedCloudProfile.length == 1 ? `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">${escape(MultiSelectedCloudProfile[0])} Topic</p></td>
      <td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[0], 0)}>


<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[1], 0)}>

<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[2], 0)}></div></td></tr>` : `${MultiSelectedCloudProfile.length == 2 ? `<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">${escape(MultiSelectedCloudProfile[0])} Topic</p></td>
      <td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[0], 0)}>


<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[1], 0)}>

<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[0].cloudTopic[2], 0)}></div></td></tr>

<tr><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">${escape(MultiSelectedCloudProfile[1])} Topic</p></td>
 <td class="${"pl-5 pt-5"}" colspan="${"3"}"><div class="${"flex gap-4"}"><input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[1].cloudTopic[0], 0)}>


<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[1].cloudTopic[1], 0)}>

<input type="${"text"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].cloudProfile[1].cloudTopic[2], 0)}></div></td></tr>` : ``}`}




<tr class="${"pt-4"}"><td><p class="${"pl-20 pt-4 text-lg font-light text-right"}">Content Format</p></td>

    <td class="${"pl-4 pt-8"}"><div class="${"flex gap-6"}">${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 0,
                                group: changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat
                              },
                              {
                                group: ($$value) => {
                                  changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `Default  <svg id="${"hover"}" fill="${"none"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
${validate_component(Tooltip, "Tooltip").$$render($$result, { triggeredBy: "#hover" }, {}, {
                                    default: () => {
                                      return `{&quot;Device&quot;:&quot;EW50-V&quot;,&quot;TimeStamp&quot;:$TIME$,$ARRAY$}`;
                                    }
                                  })}`;
                                }
                              }
                            )}
  ${validate_component(Radio, "Radio").$$render(
                              $$result,
                              {
                                class: "pb-2",
                                value: 1,
                                group: changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat
                              },
                              {
                                group: ($$value) => {
                                  changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat = $$value;
                                  $$settled = false;
                                }
                              },
                              {
                                default: () => {
                                  return `User Defined:`;
                                }
                              }
                            )}</div></td></tr>

<tr><td class="${"text-right"}"><div><ul style="${"list-style-type:none;"}" class="${"py-1"}"><li class="${"pt-4"}">${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `TIME`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `TIME`;
                              }
                            })}`}</li>

<li class="${"pt-4"}">${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `ARRAY`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `ARRAY`;
                              }
                            })}`}</li>

<li class="${"pt-4"}">${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `NAME_RAWREQUEST`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `NAME_RAWREQUEST`;
                              }
                            })}`}</li>

<li class="${"pt-4"}">${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1 ? `${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `NAME_RAWREPLY`;
                              }
                            })}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", disabled: true }, {}, {
                              default: () => {
                                return `NAME_RAWREPLY`;
                              }
                            })}`}</li></ul></div></td>

    <td class="${"pl-4 pt-4"}">${changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].contentFormat == 1 ? `${validate_component(Textarea, "Textarea").$$render(
                              $$result,
                              {
                                id: "textarea-id",
                                placeholder: "Content Format",
                                rows: "12",
                                name: "message",
                                value: changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].userDefineedData
                              },
                              {
                                value: ($$value) => {
                                  changed_data_tag_pro_data.config.service_dataTagPro_ulRule[modify_ul_rule_index].userDefineedData = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}` : `${validate_component(Textarea, "Textarea").$$render(
                              $$result,
                              {
                                id: "textarea-id",
                                placeholder: "Disabled",
                                rows: "12",
                                name: "message",
                                class: "disabled:cursor-not-allowed disabled:opacity-50 p-2.5",
                                disabled: true
                              },
                              {},
                              {}
                            )}`}</td></tr>


 <tr><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                              default: () => {
                                return `Modify`;
                              }
                            })}</td></tr></table></form>`;
                          }
                        }
                      )}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}

${``}

${``}

${``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Datatagpro as default
};
