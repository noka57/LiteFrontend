import { c as create_ssr_component, q as createEventDispatcher, r as get_current_component, h as add_attribute, e as escape, k as each, v as validate_component } from "../../_app/immutable/chunks/index-e6faea8a.js";
import "classnames";
import { B as Button } from "../../_app/immutable/chunks/Button-b09930a2.js";
/* empty css                                                                            */import { R as Radio } from "../../_app/immutable/chunks/Radio-2dfe5133.js";
import { F as FloatingLabelInput } from "../../_app/immutable/chunks/FloatingLabelInput-429e253d.js";
import { T as Toggle } from "../../_app/immutable/chunks/Toggle-e9acacf4.js";
import { M as Modal } from "../../_app/immutable/chunks/Modal-43be47cb.js";
import { T as Tabs, a as TabItem } from "../../_app/immutable/chunks/Tabs-a5759ef8.js";
import "../../_app/immutable/chunks/Frame-35d083b4.js";
import "../../_app/immutable/chunks/index-245f18af.js";
const timezones = {
  Africa: {
    "Africa/Abidjan": ["Abidjan", "+00:00", "+00:00"],
    "Africa/Accra": ["Accra", "+00:00", "+00:00"],
    "Africa/Addis_Ababa": ["Addis Ababa", "+03:00", "+03:00"],
    "Africa/Algiers": ["Algiers", "+01:00", "+01:00"],
    "Africa/Asmara": ["Asmara", "+03:00", "+03:00"],
    "Africa/Asmera": ["Asmera", "+03:00", "+03:00"],
    "Africa/Bamako": ["Bamako", "+00:00", "+00:00"],
    "Africa/Bangui": ["Bangui", "+01:00", "+01:00"],
    "Africa/Banjul": ["Banjul", "+00:00", "+00:00"],
    "Africa/Bissau": ["Bissau", "+00:00", "+00:00"],
    "Africa/Blantyre": ["Blantyre", "+02:00", "+02:00"],
    "Africa/Brazzaville": ["Brazzaville", "+01:00", "+01:00"],
    "Africa/Bujumbura": ["Bujumbura", "+02:00", "+02:00"],
    "Africa/Cairo": ["Cairo", "+02:00", "+03:00"],
    "Africa/Casablanca": ["Casablanca", "+00:00", "+01:00"],
    "Africa/Ceuta": ["Ceuta", "+01:00", "+02:00"],
    "Africa/Conakry": ["Conakry", "+00:00", "+00:00"],
    "Africa/Dakar": ["Dakar", "+00:00", "+00:00"],
    "Africa/Dar_es_Salaam": ["Dar es_Salaam", "+03:00", "+03:00"],
    "Africa/Djibouti": ["Djibouti", "+03:00", "+03:00"],
    "Africa/Douala": ["Douala", "+01:00", "+01:00"],
    "Africa/El_Aaiun": ["El Aaiun", "+00:00", "+01:00"],
    "Africa/Freetown": ["Freetown", "+00:00", "+00:00"],
    "Africa/Gaborone": ["Gaborone", "+02:00", "+02:00"],
    "Africa/Harare": ["Harare", "+02:00", "+02:00"],
    "Africa/Johannesburg": ["Johannesburg", "+02:00", "+02:00"],
    "Africa/Juba": ["Juba", "+03:00", "+03:00"],
    "Africa/Kampala": ["Kampala", "+03:00", "+03:00"],
    "Africa/Khartoum": ["Khartoum", "+03:00", "+03:00"],
    "Africa/Kigali": ["Kigali", "+02:00", "+02:00"],
    "Africa/Kinshasa": ["Kinshasa", "+01:00", "+01:00"],
    "Africa/Lagos": ["Lagos", "+01:00", "+01:00"],
    "Africa/Libreville": ["Libreville", "+01:00", "+01:00"],
    "Africa/Lome": ["Lome", "+00:00", "+00:00"],
    "Africa/Luanda": ["Luanda", "+01:00", "+01:00"],
    "Africa/Lubumbashi": ["Lubumbashi", "+02:00", "+02:00"],
    "Africa/Lusaka": ["Lusaka", "+02:00", "+02:00"],
    "Africa/Malabo": ["Malabo", "+01:00", "+01:00"],
    "Africa/Maputo": ["Maputo", "+02:00", "+02:00"],
    "Africa/Maseru": ["Maseru", "+02:00", "+02:00"],
    "Africa/Mbabane": ["Mbabane", "+02:00", "+02:00"],
    "Africa/Mogadishu": ["Mogadishu", "+03:00", "+03:00"],
    "Africa/Monrovia": ["Monrovia", "+00:00", "+00:00"],
    "Africa/Nairobi": ["Nairobi", "+03:00", "+03:00"],
    "Africa/Ndjamena": ["Ndjamena", "+01:00", "+01:00"],
    "Africa/Niamey": ["Niamey", "+01:00", "+01:00"],
    "Africa/Nouakchott": ["Nouakchott", "+00:00", "+00:00"],
    "Africa/Ouagadougou": ["Ouagadougou", "+00:00", "+00:00"],
    "Africa/Porto-Novo": ["Porto-Novo", "+01:00", "+01:00"],
    "Africa/Sao_Tome": ["Sao Tome", "+00:00", "+00:00"],
    "Africa/Timbuktu": ["Timbuktu", "+00:00", "+00:00"],
    "Africa/Tripoli": ["Tripoli", "+01:00", "+02:00"],
    "Africa/Tunis": ["Tunis", "+01:00", "+01:00"],
    "Africa/Windhoek": ["Windhoek", "+01:00", "+02:00"]
  },
  America: {
    "America/Adak": ["Adak", "-10:00", "-09:00"],
    "America/Anchorage": ["Anchorage", "-09:00", "-08:00"],
    "America/Anguilla": ["Anguilla", "-04:00", "-04:00"],
    "America/Antigua": ["Antigua", "-04:00", "-04:00"],
    "America/Araguaina": ["Araguaina", "-03:00", "-03:00"],
    "America/Argentina/Buenos_Aires": [
      "Buenos Aires, Argentina",
      "-03:00",
      "-03:00"
    ],
    "America/Argentina/Catamarca": ["Catamarca, Argentina", "-03:00", "-03:00"],
    "America/Argentina/ComodRivadavia": [
      "ComodRivadavia, Argentina",
      "-03:00",
      "-03:00"
    ],
    "America/Argentina/Cordoba": ["Cordoba, Argentina", "-03:00", "-03:00"],
    "America/Argentina/Jujuy": ["Jujuy, Argentina", "-03:00", "-03:00"],
    "America/Argentina/La_Rioja": ["La Rioja, Argentina", "-03:00", "-03:00"],
    "America/Argentina/Mendoza": ["Mendoza, Argentina", "-03:00", "-03:00"],
    "America/Argentina/Rio_Gallegos": [
      "Rio Gallegos, Argentina",
      "-03:00",
      "-03:00"
    ],
    "America/Argentina/Salta": ["Salta, Argentina", "-03:00", "-03:00"],
    "America/Argentina/San_Juan": ["San Juan, Argentina", "-03:00", "-03:00"],
    "America/Argentina/San_Luis": ["San Luis, Argentina", "-03:00", "-03:00"],
    "America/Argentina/Tucuman": ["Tucuman, Argentina", "-03:00", "-03:00"],
    "America/Argentina/Ushuaia": ["Ushuaia, Argentina", "-03:00", "-03:00"],
    "America/Aruba": ["Aruba", "-04:00", "-04:00"],
    "America/Asuncion": ["Asuncion", "-04:00", "-03:00"],
    "America/Atikokan": ["Atikokan", "-05:00", "-05:00"],
    "America/Atka": ["Atka", "-10:00", "-09:00"],
    "America/Bahia": ["Bahia", "-03:00", "-02:00"],
    "America/Bahia_Banderas": ["Bahia Banderas", "-06:00", "-05:00"],
    "America/Barbados": ["Barbados", "-04:00", "-04:00"],
    "America/Belem": ["Belem", "-03:00", "-03:00"],
    "America/Belize": ["Belize", "-06:00", "-06:00"],
    "America/Blanc-Sablon": ["Blanc-Sablon", "-04:00", "-04:00"],
    "America/Boa_Vista": ["Boa Vista", "-04:00", "-04:00"],
    "America/Bogota": ["Bogota", "-05:00", "-05:00"],
    "America/Boise": ["Boise", "-07:00", "-06:00"],
    "America/Buenos_Aires": ["Buenos Aires", "-03:00", "-03:00"],
    "America/Cambridge_Bay": ["Cambridge Bay", "-07:00", "-06:00"],
    "America/Campo_Grande": ["Campo Grande", "-04:00", "-03:00"],
    "America/Cancun": ["Cancun", "-06:00", "-05:00"],
    "America/Caracas": ["Caracas", "-04:30", "-04:30"],
    "America/Catamarca": ["Catamarca", "-03:00", "-03:00"],
    "America/Cayenne": ["Cayenne", "-03:00", "-03:00"],
    "America/Cayman": ["Cayman", "-05:00", "-05:00"],
    "America/Chicago": ["Chicago", "-06:00", "-05:00"],
    "America/Chihuahua": ["Chihuahua", "-07:00", "-06:00"],
    "America/Coral_Harbour": ["Coral Harbour", "-05:00", "-05:00"],
    "America/Cordoba": ["Cordoba", "-03:00", "-03:00"],
    "America/Costa_Rica": ["Costa Rica", "-06:00", "-06:00"],
    "America/Creston": ["Creston", "-07:00", "-07:00"],
    "America/Cuiaba": ["Cuiaba", "-04:00", "-03:00"],
    "America/Curacao": ["Curacao", "-04:00", "-04:00"],
    "America/Danmarkshavn": ["Danmarkshavn", "+00:00", "+00:00"],
    "America/Dawson": ["Dawson", "-08:00", "-07:00"],
    "America/Dawson_Creek": ["Dawson Creek", "-07:00", "-07:00"],
    "America/Denver": ["Denver", "-07:00", "-06:00"],
    "America/Detroit": ["Detroit", "-05:00", "-04:00"],
    "America/Dominica": ["Dominica", "-04:00", "-04:00"],
    "America/Edmonton": ["Edmonton", "-07:00", "-06:00"],
    "America/Eirunepe": ["Eirunepe", "-05:00", "-05:00"],
    "America/El_Salvador": ["El Salvador", "-06:00", "-06:00"],
    "America/Ensenada": ["Ensenada", "-08:00", "-07:00"],
    "America/Fort_Wayne": ["Fort Wayne", "-05:00", "-04:00"],
    "America/Fortaleza": ["Fortaleza", "-03:00", "-03:00"],
    "America/Glace_Bay": ["Glace Bay", "-04:00", "-03:00"],
    "America/Godthab": ["Godthab", "-03:00", "-02:00"],
    "America/Goose_Bay": ["Goose Bay", "-04:00", "-03:00"],
    "America/Grand_Turk": ["Grand Turk", "-05:00", "-04:00"],
    "America/Grenada": ["Grenada", "-04:00", "-04:00"],
    "America/Guadeloupe": ["Guadeloupe", "-04:00", "-04:00"],
    "America/Guatemala": ["Guatemala", "-06:00", "-06:00"],
    "America/Guayaquil": ["Guayaquil", "-05:00", "-05:00"],
    "America/Guyana": ["Guyana", "-04:00", "-04:00"],
    "America/Halifax": ["Halifax", "-04:00", "-03:00"],
    "America/Havana": ["Havana", "-05:00", "-04:00"],
    "America/Hermosillo": ["Hermosillo", "-07:00", "-07:00"],
    "America/Indiana/Indianapolis": [
      "Indianapolis, Indiana",
      "-05:00",
      "-04:00"
    ],
    "America/Indiana/Knox": ["Knox, Indiana", "-06:00", "-05:00"],
    "America/Indiana/Marengo": ["Marengo, Indiana", "-05:00", "-04:00"],
    "America/Indiana/Petersburg": ["Petersburg, Indiana", "-05:00", "-04:00"],
    "America/Indiana/Tell_City": ["Tell City, Indiana", "-06:00", "-05:00"],
    "America/Indiana/Valparaiso": ["Valparaiso, Indiana", "-06:00", "-05:00"],
    "America/Indiana/Vevay": ["Vevay, Indiana", "-05:00", "-04:00"],
    "America/Indiana/Vincennes": ["Vincennes, Indiana", "-05:00", "-04:00"],
    "America/Indiana/Winamac": ["Winamac, Indiana", "-05:00", "-04:00"],
    "America/Indianapolis": ["Indianapolis", "-05:00", "-04:00"],
    "America/Inuvik": ["Inuvik", "-07:00", "-06:00"],
    "America/Iqaluit": ["Iqaluit", "-05:00", "-04:00"],
    "America/Jamaica": ["Jamaica", "-05:00", "-05:00"],
    "America/Jujuy": ["Jujuy", "-03:00", "-03:00"],
    "America/Juneau": ["Juneau", "-09:00", "-08:00"],
    "America/Kentucky/Louisville": ["Louisville, Kentucky", "-05:00", "-04:00"],
    "America/Kentucky/Monticello": ["Monticello, Kentucky", "-05:00", "-04:00"],
    "America/Knox_IN": ["Knox IN", "-06:00", "-05:00"],
    "America/Kralendijk": ["Kralendijk", "-04:00", "-04:00"],
    "America/La_Paz": ["La Paz", "-04:00", "-04:00"],
    "America/Lima": ["Lima", "-05:00", "-05:00"],
    "America/Los_Angeles": ["Los Angeles", "-08:00", "-07:00"],
    "America/Louisville": ["Louisville", "-05:00", "-04:00"],
    "America/Lower_Princes": ["Lower Princes", "-04:00", "-04:00"],
    "America/Maceio": ["Maceio", "-03:00", "-03:00"],
    "America/Managua": ["Managua", "-06:00", "-06:00"],
    "America/Manaus": ["Manaus", "-04:00", "-04:00"],
    "America/Marigot": ["Marigot", "-04:00", "-04:00"],
    "America/Martinique": ["Martinique", "-04:00", "-04:00"],
    "America/Matamoros": ["Matamoros", "-06:00", "-05:00"],
    "America/Mazatlan": ["Mazatlan", "-07:00", "-06:00"],
    "America/Mendoza": ["Mendoza", "-03:00", "-03:00"],
    "America/Menominee": ["Menominee", "-06:00", "-05:00"],
    "America/Merida": ["Merida", "-06:00", "-05:00"],
    "America/Metlakatla": ["Metlakatla", "-08:00", "-08:00"],
    "America/Mexico_City": ["Mexico City", "-06:00", "-05:00"],
    "America/Miquelon": ["Miquelon", "-03:00", "-02:00"],
    "America/Moncton": ["Moncton", "-04:00", "-03:00"],
    "America/Monterrey": ["Monterrey", "-06:00", "-05:00"],
    "America/Montevideo": ["Montevideo", "-03:00", "-02:00"],
    "America/Montreal": ["Montreal", "-05:00", "-04:00"],
    "America/Montserrat": ["Montserrat", "-04:00", "-04:00"],
    "America/Nassau": ["Nassau", "-05:00", "-04:00"],
    "America/New_York": ["New York", "-05:00", "-04:00"],
    "America/Nipigon": ["Nipigon", "-05:00", "-04:00"],
    "America/Nome": ["Nome", "-09:00", "-08:00"],
    "America/Noronha": ["Noronha", "-02:00", "-02:00"],
    "America/North_Dakota/Beulah": ["Beulah, North Dakota", "-06:00", "-05:00"],
    "America/North_Dakota/Center": ["Center, North Dakota", "-06:00", "-05:00"],
    "America/North_Dakota/New_Salem": [
      "New Salem, North Dakota",
      "-06:00",
      "-05:00"
    ],
    "America/Ojinaga": ["Ojinaga", "-07:00", "-06:00"],
    "America/Panama": ["Panama", "-05:00", "-05:00"],
    "America/Pangnirtung": ["Pangnirtung", "-05:00", "-04:00"],
    "America/Paramaribo": ["Paramaribo", "-03:00", "-03:00"],
    "America/Phoenix": ["Phoenix", "-07:00", "-07:00"],
    "America/Port-au-Prince": ["Port-au-Prince", "-05:00", "-04:00"],
    "America/Port_of_Spain": ["Port of_Spain", "-04:00", "-04:00"],
    "America/Porto_Acre": ["Porto Acre", "-05:00", "-05:00"],
    "America/Porto_Velho": ["Porto Velho", "-04:00", "-04:00"],
    "America/Puerto_Rico": ["Puerto Rico", "-04:00", "-04:00"],
    "America/Rainy_River": ["Rainy River", "-06:00", "-05:00"],
    "America/Rankin_Inlet": ["Rankin Inlet", "-06:00", "-05:00"],
    "America/Recife": ["Recife", "-03:00", "-03:00"],
    "America/Regina": ["Regina", "-06:00", "-06:00"],
    "America/Resolute": ["Resolute", "-06:00", "-05:00"],
    "America/Rio_Branco": ["Rio Branco", "-05:00", "-05:00"],
    "America/Rosario": ["Rosario", "-03:00", "-03:00"],
    "America/Santa_Isabel": ["Santa Isabel", "-08:00", "-07:00"],
    "America/Santarem": ["Santarem", "-03:00", "-03:00"],
    "America/Santiago": ["Santiago", "-04:00", "-03:00"],
    "America/Santo_Domingo": ["Santo Domingo", "-04:00", "-04:00"],
    "America/Sao_Paulo": ["Sao Paulo", "-03:00", "-02:00"],
    "America/Scoresbysund": ["Scoresbysund", "-01:00", "+00:00"],
    "America/Shiprock": ["Shiprock", "-07:00", "-06:00"],
    "America/Sitka": ["Sitka", "-09:00", "-08:00"],
    "America/St_Barthelemy": ["St Barthelemy", "-04:00", "-04:00"],
    "America/St_Johns": ["St Johns", "-03:30", "-02:30"],
    "America/St_Kitts": ["St Kitts", "-04:00", "-04:00"],
    "America/St_Lucia": ["St Lucia", "-04:00", "-04:00"],
    "America/St_Thomas": ["St Thomas", "-04:00", "-04:00"],
    "America/St_Vincent": ["St Vincent", "-04:00", "-04:00"],
    "America/Swift_Current": ["Swift Current", "-06:00", "-06:00"],
    "America/Tegucigalpa": ["Tegucigalpa", "-06:00", "-06:00"],
    "America/Thule": ["Thule", "-04:00", "-03:00"],
    "America/Thunder_Bay": ["Thunder Bay", "-05:00", "-04:00"],
    "America/Tijuana": ["Tijuana", "-08:00", "-07:00"],
    "America/Toronto": ["Toronto", "-05:00", "-04:00"],
    "America/Tortola": ["Tortola", "-04:00", "-04:00"],
    "America/Vancouver": ["Vancouver", "-08:00", "-07:00"],
    "America/Virgin": ["Virgin", "-04:00", "-04:00"],
    "America/Whitehorse": ["Whitehorse", "-08:00", "-07:00"],
    "America/Winnipeg": ["Winnipeg", "-06:00", "-05:00"],
    "America/Yakutat": ["Yakutat", "-09:00", "-08:00"],
    "America/Yellowknife": ["Yellowknife", "-07:00", "-06:00"]
  },
  Antarctica: {
    "Antarctica/Casey": ["Casey", "+11:00", "+08:00"],
    "Antarctica/Davis": ["Davis", "+05:00", "+07:00"],
    "Antarctica/DumontDUrville": ["DumontDUrville", "+10:00", "+10:00"],
    "Antarctica/Macquarie": ["Macquarie", "+11:00", "+11:00"],
    "Antarctica/Mawson": ["Mawson", "+05:00", "+05:00"],
    "Antarctica/McMurdo": ["McMurdo", "+12:00", "+13:00"],
    "Antarctica/Palmer": ["Palmer", "-04:00", "-03:00"],
    "Antarctica/Rothera": ["Rothera", "-03:00", "-03:00"],
    "Antarctica/South_Pole": ["South Pole", "+12:00", "+13:00"],
    "Antarctica/Syowa": ["Syowa", "+03:00", "+03:00"],
    "Antarctica/Troll": ["Troll", "+00:00", "+02:00"],
    "Antarctica/Vostok": ["Vostok", "+06:00", "+06:00"]
  },
  Arctic: { "Arctic/Longyearbyen": ["Longyearbyen", "+01:00", "+02:00"] },
  Asia: {
    "Asia/Aden": ["Aden", "+03:00", "+03:00"],
    "Asia/Almaty": ["Almaty", "+06:00", "+06:00"],
    "Asia/Amman": ["Amman", "+02:00", "+03:00"],
    "Asia/Anadyr": ["Anadyr", "+12:00", "+12:00"],
    "Asia/Aqtau": ["Aqtau", "+05:00", "+05:00"],
    "Asia/Aqtobe": ["Aqtobe", "+05:00", "+05:00"],
    "Asia/Ashgabat": ["Ashgabat", "+05:00", "+05:00"],
    "Asia/Ashkhabad": ["Ashkhabad", "+05:00", "+05:00"],
    "Asia/Baghdad": ["Baghdad", "+03:00", "+03:00"],
    "Asia/Bahrain": ["Bahrain", "+03:00", "+03:00"],
    "Asia/Baku": ["Baku", "+04:00", "+05:00"],
    "Asia/Bangkok": ["Bangkok", "+07:00", "+07:00"],
    "Asia/Beirut": ["Beirut", "+02:00", "+03:00"],
    "Asia/Bishkek": ["Bishkek", "+06:00", "+06:00"],
    "Asia/Brunei": ["Brunei", "+08:00", "+08:00"],
    "Asia/Calcutta": ["Calcutta", "+05:30", "+05:30"],
    "Asia/Choibalsan": ["Choibalsan", "+08:00", "+08:00"],
    "Asia/Chongqing": ["Chongqing", "+08:00", "+08:00"],
    "Asia/Chungking": ["Chungking", "+08:00", "+08:00"],
    "Asia/Colombo": ["Colombo", "+05:30", "+05:30"],
    "Asia/Dacca": ["Dacca", "+06:00", "+06:00"],
    "Asia/Damascus": ["Damascus", "+02:00", "+03:00"],
    "Asia/Dhaka": ["Dhaka", "+06:00", "+06:00"],
    "Asia/Dili": ["Dili", "+09:00", "+09:00"],
    "Asia/Dubai": ["Dubai", "+04:00", "+04:00"],
    "Asia/Dushanbe": ["Dushanbe", "+05:00", "+05:00"],
    "Asia/Gaza": ["Gaza", "+02:00", "+03:00"],
    "Asia/Harbin": ["Harbin", "+08:00", "+08:00"],
    "Asia/Hebron": ["Hebron", "+02:00", "+03:00"],
    "Asia/Ho_Chi_Minh": ["Ho Chi_Minh", "+07:00", "+07:00"],
    "Asia/Hong_Kong": ["Hong Kong", "+08:00", "+08:00"],
    "Asia/Hovd": ["Hovd", "+07:00", "+07:00"],
    "Asia/Irkutsk": ["Irkutsk", "+08:00", "+08:00"],
    "Asia/Istanbul": ["Istanbul", "+02:00", "+03:00"],
    "Asia/Jakarta": ["Jakarta", "+07:00", "+07:00"],
    "Asia/Jayapura": ["Jayapura", "+09:00", "+09:00"],
    "Asia/Jerusalem": ["Jerusalem", "+02:00", "+03:00"],
    "Asia/Kabul": ["Kabul", "+04:30", "+04:30"],
    "Asia/Kamchatka": ["Kamchatka", "+12:00", "+12:00"],
    "Asia/Karachi": ["Karachi", "+05:00", "+05:00"],
    "Asia/Kashgar": ["Kashgar", "+08:00", "+08:00"],
    "Asia/Kathmandu": ["Kathmandu", "+05:45", "+05:45"],
    "Asia/Katmandu": ["Katmandu", "+05:45", "+05:45"],
    "Asia/Khandyga": ["Khandyga", "+09:00", "+09:00"],
    "Asia/Kolkata": ["Kolkata", "+05:30", "+05:30"],
    "Asia/Krasnoyarsk": ["Krasnoyarsk", "+07:00", "+07:00"],
    "Asia/Kuala_Lumpur": ["Kuala Lumpur", "+08:00", "+08:00"],
    "Asia/Kuching": ["Kuching", "+08:00", "+08:00"],
    "Asia/Kuwait": ["Kuwait", "+03:00", "+03:00"],
    "Asia/Macao": ["Macao", "+08:00", "+08:00"],
    "Asia/Macau": ["Macau", "+08:00", "+08:00"],
    "Asia/Magadan": ["Magadan", "+10:00", "+10:00"],
    "Asia/Makassar": ["Makassar", "+08:00", "+08:00"],
    "Asia/Manila": ["Manila", "+08:00", "+08:00"],
    "Asia/Muscat": ["Muscat", "+04:00", "+04:00"],
    "Asia/Nicosia": ["Nicosia", "+02:00", "+03:00"],
    "Asia/Novokuznetsk": ["Novokuznetsk", "+07:00", "+07:00"],
    "Asia/Novosibirsk": ["Novosibirsk", "+06:00", "+06:00"],
    "Asia/Omsk": ["Omsk", "+06:00", "+06:00"],
    "Asia/Oral": ["Oral", "+05:00", "+05:00"],
    "Asia/Phnom_Penh": ["Phnom Penh", "+07:00", "+07:00"],
    "Asia/Pontianak": ["Pontianak", "+07:00", "+07:00"],
    "Asia/Pyongyang": ["Pyongyang", "+09:00", "+09:00"],
    "Asia/Qatar": ["Qatar", "+03:00", "+03:00"],
    "Asia/Qyzylorda": ["Qyzylorda", "+06:00", "+06:00"],
    "Asia/Rangoon": ["Rangoon", "+06:30", "+06:30"],
    "Asia/Riyadh": ["Riyadh", "+03:00", "+03:00"],
    "Asia/Saigon": ["Saigon", "+07:00", "+07:00"],
    "Asia/Sakhalin": ["Sakhalin", "+11:00", "+11:00"],
    "Asia/Samarkand": ["Samarkand", "+05:00", "+05:00"],
    "Asia/Seoul": ["Seoul", "+09:00", "+09:00"],
    "Asia/Shanghai": ["Shanghai", "+08:00", "+08:00"],
    "Asia/Singapore": ["Singapore", "+08:00", "+08:00"],
    "Asia/Taipei": ["Taipei", "+08:00", "+08:00"],
    "Asia/Tashkent": ["Tashkent", "+05:00", "+05:00"],
    "Asia/Tbilisi": ["Tbilisi", "+04:00", "+04:00"],
    "Asia/Tehran": ["Tehran", "+03:30", "+04:30"],
    "Asia/Tel_Aviv": ["Tel Aviv", "+02:00", "+03:00"],
    "Asia/Thimbu": ["Thimbu", "+06:00", "+06:00"],
    "Asia/Thimphu": ["Thimphu", "+06:00", "+06:00"],
    "Asia/Tokyo": ["Tokyo", "+09:00", "+09:00"],
    "Asia/Ujung_Pandang": ["Ujung Pandang", "+08:00", "+08:00"],
    "Asia/Ulaanbaatar": ["Ulaanbaatar", "+08:00", "+08:00"],
    "Asia/Ulan_Bator": ["Ulan Bator", "+08:00", "+08:00"],
    "Asia/Urumqi": ["Urumqi", "+08:00", "+08:00"],
    "Asia/Ust-Nera": ["Ust-Nera", "+10:00", "+10:00"],
    "Asia/Vientiane": ["Vientiane", "+07:00", "+07:00"],
    "Asia/Vladivostok": ["Vladivostok", "+10:00", "+10:00"],
    "Asia/Yakutsk": ["Yakutsk", "+09:00", "+09:00"],
    "Asia/Yekaterinburg": ["Yekaterinburg", "+05:00", "+05:00"],
    "Asia/Yerevan": ["Yerevan", "+04:00", "+04:00"]
  },
  Atlantic: {
    "Atlantic/Azores": ["Azores", "-01:00", "+00:00"],
    "Atlantic/Bermuda": ["Bermuda", "-04:00", "-03:00"],
    "Atlantic/Canary": ["Canary", "+00:00", "+01:00"],
    "Atlantic/Cape_Verde": ["Cape Verde", "-01:00", "-01:00"],
    "Atlantic/Faeroe": ["Faeroe", "+00:00", "+01:00"],
    "Atlantic/Faroe": ["Faroe", "+00:00", "+01:00"],
    "Atlantic/Jan_Mayen": ["Jan Mayen", "+01:00", "+02:00"],
    "Atlantic/Madeira": ["Madeira", "+00:00", "+01:00"],
    "Atlantic/Reykjavik": ["Reykjavik", "+00:00", "+00:00"],
    "Atlantic/South_Georgia": ["South Georgia", "-02:00", "-02:00"],
    "Atlantic/St_Helena": ["St Helena", "+00:00", "+00:00"],
    "Atlantic/Stanley": ["Stanley", "-03:00", "-03:00"]
  },
  Australia: {
    "Australia/ACT": ["ACT", "+10:00", "+11:00"],
    "Australia/Adelaide": ["Adelaide", "+09:30", "+10:30"],
    "Australia/Brisbane": ["Brisbane", "+10:00", "+10:00"],
    "Australia/Broken_Hill": ["Broken Hill", "+09:30", "+10:30"],
    "Australia/Canberra": ["Canberra", "+10:00", "+11:00"],
    "Australia/Currie": ["Currie", "+10:00", "+11:00"],
    "Australia/Darwin": ["Darwin", "+09:30", "+09:30"],
    "Australia/Eucla": ["Eucla", "+08:45", "+08:45"],
    "Australia/Hobart": ["Hobart", "+10:00", "+11:00"],
    "Australia/LHI": ["LHI", "+10:30", "+11:00"],
    "Australia/Lindeman": ["Lindeman", "+10:00", "+10:00"],
    "Australia/Lord_Howe": ["Lord Howe", "+10:30", "+11:00"],
    "Australia/Melbourne": ["Melbourne", "+10:00", "+11:00"],
    "Australia/NSW": ["NSW", "+10:00", "+11:00"],
    "Australia/North": ["North", "+09:30", "+09:30"],
    "Australia/Perth": ["Perth", "+08:00", "+08:00"],
    "Australia/Queensland": ["Queensland", "+10:00", "+10:00"],
    "Australia/South": ["South", "+09:30", "+10:30"],
    "Australia/Sydney": ["Sydney", "+10:00", "+11:00"],
    "Australia/Tasmania": ["Tasmania", "+10:00", "+11:00"],
    "Australia/Victoria": ["Victoria", "+10:00", "+11:00"],
    "Australia/West": ["West", "+08:00", "+08:00"],
    "Australia/Yancowinna": ["Yancowinna", "+09:30", "+10:30"]
  },
  Brazil: {
    "Brazil/Acre": ["Acre", "-05:00", "-05:00"],
    "Brazil/DeNoronha": ["DeNoronha", "-02:00", "-02:00"],
    "Brazil/East": ["East", "-03:00", "-02:00"],
    "Brazil/West": ["West", "-04:00", "-04:00"]
  },
  Canada: {
    "Canada/Atlantic": ["Atlantic", "-04:00", "-03:00"],
    "Canada/Central": ["Central", "-06:00", "-05:00"],
    "Canada/East-Saskatchewan": ["East-Saskatchewan", "-06:00", "-06:00"],
    "Canada/Eastern": ["Eastern", "-05:00", "-04:00"],
    "Canada/Mountain": ["Mountain", "-07:00", "-06:00"],
    "Canada/Newfoundland": ["Newfoundland", "-03:30", "-02:30"],
    "Canada/Saskatchewan": ["Saskatchewan", "-06:00", "-06:00"],
    "Canada/Yukon": ["Yukon", "-08:00", "-07:00"]
  },
  Chile: {
    "Chile/Continental": ["Continental", "-04:00", "-03:00"],
    "Chile/EasterIsland": ["EasterIsland", "-06:00", "-05:00"]
  },
  Other: {
    Cuba: ["Cuba", "-05:00", "-04:00"],
    Egypt: ["Egypt", "+02:00", "+02:00"],
    Eire: ["Eire", "+00:00", "+01:00"],
    GB: ["GB", "+00:00", "+01:00"],
    "GB-Eire": ["GB-Eire", "+00:00", "+01:00"],
    GMT: ["GMT", "+00:00", "+00:00"],
    "GMT+0": ["GMT+0", "+00:00", "+00:00"],
    "GMT-0": ["GMT-0", "+00:00", "+00:00"],
    GMT0: ["GMT0", "+00:00", "+00:00"],
    Greenwich: ["Greenwich", "+00:00", "+00:00"],
    Hongkong: ["Hongkong", "+08:00", "+08:00"],
    Iceland: ["Iceland", "+00:00", "+00:00"],
    Iran: ["Iran", "+03:30", "+04:30"],
    Israel: ["Israel", "+02:00", "+03:00"],
    Jamaica: ["Jamaica", "-05:00", "-05:00"],
    Japan: ["Japan", "+09:00", "+09:00"],
    Kwajalein: ["Kwajalein", "+12:00", "+12:00"],
    Libya: ["Libya", "+02:00", "+01:00"],
    NZ: ["NZ", "+12:00", "+13:00"],
    "NZ-CHAT": ["NZ-CHAT", "+12:45", "+13:45"],
    Navajo: ["Navajo", "-07:00", "-06:00"],
    PRC: ["PRC", "+08:00", "+08:00"],
    Poland: ["Poland", "+01:00", "+02:00"],
    Portugal: ["Portugal", "+00:00", "+01:00"],
    ROC: ["ROC", "+08:00", "+08:00"],
    ROK: ["ROK", "+09:00", "+09:00"],
    Singapore: ["Singapore", "+08:00", "+08:00"],
    Turkey: ["Turkey", "+02:00", "+03:00"],
    UCT: ["UCT", "+00:00", "+00:00"],
    UTC: ["UTC", "+00:00", "+00:00"],
    Universal: ["Universal", "+00:00", "+00:00"],
    "W-SU": ["W-SU", "+03:00", "+03:00"],
    Zulu: ["Zulu", "+00:00", "+00:00"]
  },
  Etc: {
    "Etc/GMT": ["GMT", "+00:00", "+00:00"],
    "Etc/GMT+0": ["GMT+0", "+00:00", "+00:00"],
    "Etc/UCT": ["UCT", "+00:00", "+00:00"],
    "Etc/UTC": ["UTC", "+00:00", "+00:00"],
    "Etc/Universal": ["Universal", "+00:00", "+00:00"],
    "Etc/Zulu": ["Zulu", "+00:00", "+00:00"]
  },
  Europe: {
    "Europe/Amsterdam": ["Amsterdam", "+01:00", "+02:00"],
    "Europe/Andorra": ["Andorra", "+01:00", "+02:00"],
    "Europe/Athens": ["Athens", "+02:00", "+03:00"],
    "Europe/Belfast": ["Belfast", "+00:00", "+01:00"],
    "Europe/Belgrade": ["Belgrade", "+01:00", "+02:00"],
    "Europe/Berlin": ["Berlin", "+01:00", "+02:00"],
    "Europe/Bratislava": ["Bratislava", "+01:00", "+02:00"],
    "Europe/Brussels": ["Brussels", "+01:00", "+02:00"],
    "Europe/Bucharest": ["Bucharest", "+02:00", "+03:00"],
    "Europe/Budapest": ["Budapest", "+01:00", "+02:00"],
    "Europe/Busingen": ["Busingen", "+01:00", "+02:00"],
    "Europe/Chisinau": ["Chisinau", "+02:00", "+03:00"],
    "Europe/Copenhagen": ["Copenhagen", "+01:00", "+02:00"],
    "Europe/Dublin": ["Dublin", "+00:00", "+01:00"],
    "Europe/Gibraltar": ["Gibraltar", "+01:00", "+02:00"],
    "Europe/Guernsey": ["Guernsey", "+00:00", "+01:00"],
    "Europe/Helsinki": ["Helsinki", "+02:00", "+03:00"],
    "Europe/Isle_of_Man": ["Isle of_Man", "+00:00", "+01:00"],
    "Europe/Istanbul": ["Istanbul", "+02:00", "+03:00"],
    "Europe/Jersey": ["Jersey", "+00:00", "+01:00"],
    "Europe/Kaliningrad": ["Kaliningrad", "+02:00", "+02:00"],
    "Europe/Kiev": ["Kiev", "+02:00", "+03:00"],
    "Europe/Lisbon": ["Lisbon", "+00:00", "+01:00"],
    "Europe/Ljubljana": ["Ljubljana", "+01:00", "+02:00"],
    "Europe/London": ["London", "+00:00", "+01:00"],
    "Europe/Luxembourg": ["Luxembourg", "+01:00", "+02:00"],
    "Europe/Madrid": ["Madrid", "+01:00", "+02:00"],
    "Europe/Malta": ["Malta", "+01:00", "+02:00"],
    "Europe/Mariehamn": ["Mariehamn", "+02:00", "+03:00"],
    "Europe/Minsk": ["Minsk", "+03:00", "+03:00"],
    "Europe/Monaco": ["Monaco", "+01:00", "+02:00"],
    "Europe/Moscow": ["Moscow", "+03:00", "+03:00"],
    "Europe/Nicosia": ["Nicosia", "+02:00", "+03:00"],
    "Europe/Oslo": ["Oslo", "+01:00", "+02:00"],
    "Europe/Paris": ["Paris", "+01:00", "+02:00"],
    "Europe/Podgorica": ["Podgorica", "+01:00", "+02:00"],
    "Europe/Prague": ["Prague", "+01:00", "+02:00"],
    "Europe/Riga": ["Riga", "+02:00", "+03:00"],
    "Europe/Rome": ["Rome", "+01:00", "+02:00"],
    "Europe/Samara": ["Samara", "+04:00", "+04:00"],
    "Europe/San_Marino": ["San Marino", "+01:00", "+02:00"],
    "Europe/Sarajevo": ["Sarajevo", "+01:00", "+02:00"],
    "Europe/Simferopol": ["Simferopol", "+03:00", "+03:00"],
    "Europe/Skopje": ["Skopje", "+01:00", "+02:00"],
    "Europe/Sofia": ["Sofia", "+02:00", "+03:00"],
    "Europe/Stockholm": ["Stockholm", "+01:00", "+02:00"],
    "Europe/Tallinn": ["Tallinn", "+02:00", "+03:00"],
    "Europe/Tirane": ["Tirane", "+01:00", "+02:00"],
    "Europe/Tiraspol": ["Tiraspol", "+02:00", "+03:00"],
    "Europe/Uzhgorod": ["Uzhgorod", "+02:00", "+03:00"],
    "Europe/Vaduz": ["Vaduz", "+01:00", "+02:00"],
    "Europe/Vatican": ["Vatican", "+01:00", "+02:00"],
    "Europe/Vienna": ["Vienna", "+01:00", "+02:00"],
    "Europe/Vilnius": ["Vilnius", "+02:00", "+03:00"],
    "Europe/Volgograd": ["Volgograd", "+03:00", "+03:00"],
    "Europe/Warsaw": ["Warsaw", "+01:00", "+02:00"],
    "Europe/Zagreb": ["Zagreb", "+01:00", "+02:00"],
    "Europe/Zaporozhye": ["Zaporozhye", "+02:00", "+03:00"],
    "Europe/Zurich": ["Zurich", "+01:00", "+02:00"]
  },
  Indian: {
    "Indian/Antananarivo": ["Antananarivo", "+03:00", "+03:00"],
    "Indian/Chagos": ["Chagos", "+06:00", "+06:00"],
    "Indian/Christmas": ["Christmas", "+07:00", "+07:00"],
    "Indian/Cocos": ["Cocos", "+06:30", "+06:30"],
    "Indian/Comoro": ["Comoro", "+03:00", "+03:00"],
    "Indian/Kerguelen": ["Kerguelen", "+05:00", "+05:00"],
    "Indian/Mahe": ["Mahe", "+04:00", "+04:00"],
    "Indian/Maldives": ["Maldives", "+05:00", "+05:00"],
    "Indian/Mauritius": ["Mauritius", "+04:00", "+04:00"],
    "Indian/Mayotte": ["Mayotte", "+03:00", "+03:00"],
    "Indian/Reunion": ["Reunion", "+04:00", "+04:00"]
  },
  Mexico: {
    "Mexico/BajaNorte": ["BajaNorte", "-08:00", "-07:00"],
    "Mexico/BajaSur": ["BajaSur", "-07:00", "-06:00"],
    "Mexico/General": ["General", "-06:00", "-05:00"]
  },
  Pacific: {
    "Pacific/Apia": ["Apia", "+13:00", "+14:00"],
    "Pacific/Auckland": ["Auckland", "+12:00", "+13:00"],
    "Pacific/Chatham": ["Chatham", "+12:45", "+13:45"],
    "Pacific/Chuuk": ["Chuuk", "+10:00", "+10:00"],
    "Pacific/Easter": ["Easter", "-06:00", "-05:00"],
    "Pacific/Efate": ["Efate", "+11:00", "+11:00"],
    "Pacific/Enderbury": ["Enderbury", "+13:00", "+13:00"],
    "Pacific/Fakaofo": ["Fakaofo", "+13:00", "+13:00"],
    "Pacific/Fiji": ["Fiji", "+12:00", "+13:00"],
    "Pacific/Funafuti": ["Funafuti", "+12:00", "+12:00"],
    "Pacific/Galapagos": ["Galapagos", "-06:00", "-06:00"],
    "Pacific/Gambier": ["Gambier", "-09:00", "-09:00"],
    "Pacific/Guadalcanal": ["Guadalcanal", "+11:00", "+11:00"],
    "Pacific/Guam": ["Guam", "+10:00", "+10:00"],
    "Pacific/Honolulu": ["Honolulu", "-10:00", "-10:00"],
    "Pacific/Johnston": ["Johnston", "-10:00", "-10:00"],
    "Pacific/Kiritimati": ["Kiritimati", "+14:00", "+14:00"],
    "Pacific/Kosrae": ["Kosrae", "+11:00", "+11:00"],
    "Pacific/Kwajalein": ["Kwajalein", "+12:00", "+12:00"],
    "Pacific/Majuro": ["Majuro", "+12:00", "+12:00"],
    "Pacific/Marquesas": ["Marquesas", "-09:30", "-09:30"],
    "Pacific/Midway": ["Midway", "-11:00", "-11:00"],
    "Pacific/Nauru": ["Nauru", "+12:00", "+12:00"],
    "Pacific/Niue": ["Niue", "-11:00", "-11:00"],
    "Pacific/Norfolk": ["Norfolk", "+11:30", "+11:30"],
    "Pacific/Noumea": ["Noumea", "+11:00", "+11:00"],
    "Pacific/Pago_Pago": ["Pago Pago", "-11:00", "-11:00"],
    "Pacific/Palau": ["Palau", "+09:00", "+09:00"],
    "Pacific/Pitcairn": ["Pitcairn", "-08:00", "-08:00"],
    "Pacific/Pohnpei": ["Pohnpei", "+11:00", "+11:00"],
    "Pacific/Ponape": ["Ponape", "+11:00", "+11:00"],
    "Pacific/Port_Moresby": ["Port Moresby", "+10:00", "+10:00"],
    "Pacific/Rarotonga": ["Rarotonga", "-10:00", "-10:00"],
    "Pacific/Saipan": ["Saipan", "+10:00", "+10:00"],
    "Pacific/Samoa": ["Samoa", "-11:00", "-11:00"],
    "Pacific/Tahiti": ["Tahiti", "-10:00", "-10:00"],
    "Pacific/Tarawa": ["Tarawa", "+12:00", "+12:00"],
    "Pacific/Tongatapu": ["Tongatapu", "+13:00", "+13:00"],
    "Pacific/Truk": ["Truk", "+10:00", "+10:00"],
    "Pacific/Wake": ["Wake", "+12:00", "+12:00"],
    "Pacific/Wallis": ["Wallis", "+12:00", "+12:00"],
    "Pacific/Yap": ["Yap", "+10:00", "+10:00"]
  },
  US: {
    "US/Alaska": ["Alaska", "-09:00", "-08:00"],
    "US/Aleutian": ["Aleutian", "-10:00", "-09:00"],
    "US/Arizona": ["Arizona", "-07:00", "-07:00"],
    "US/Central": ["Central", "-06:00", "-05:00"],
    "US/East-Indiana": ["East-Indiana", "-05:00", "-04:00"],
    "US/Eastern": ["Eastern", "-05:00", "-04:00"],
    "US/Hawaii": ["Hawaii", "-10:00", "-10:00"],
    "US/Indiana-Starke": ["Indiana-Starke", "-06:00", "-05:00"],
    "US/Michigan": ["Michigan", "-05:00", "-04:00"],
    "US/Mountain": ["Mountain", "-07:00", "-06:00"],
    "US/Pacific": ["Pacific", "-08:00", "-07:00"],
    "US/Samoa": ["Samoa", "-11:00", "-11:00"]
  }
};
let IDX = 36;
let HEX = "";
while (IDX--) {
  HEX += IDX.toString(36);
}
const uid = (len) => {
  let str = "";
  let num = len || 11;
  while (num--) {
    str += HEX[Math.random() * 36 | 0];
  }
  return str;
};
const slugify = (str) => str.toString().toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
const pick = (timezones2, selection) => {
  const unique = Array.from(/* @__PURE__ */ new Set([...selection]));
  return Object.keys(timezones2).reduce((zones, zoneName) => {
    const picked = unique.includes(zoneName) ? timezones2[zoneName] : {};
    return {
      ...zones,
      ...Object.keys(picked).length > 0 && { [zoneName]: picked }
    };
  }, {});
};
const ungroup = (timezones2) => Object.values(timezones2).reduce(
  (values, zone) => ({ ...values, ...zone }),
  {}
);
const Picker_svelte_svelte_type_style_lang = "";
const css = {
  code: ".overlay.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{background:transparent;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:0}button.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{background:transparent;border:0;cursor:pointer}svg.svelte-10al0e4 polygon.svelte-10al0e4.svelte-10al0e4{fill:var(--color-info-900, #076196)}button[data-toggle].svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{align-content:flex-start;align-items:center;display:flex;padding:0}button[data-toggle].svelte-10al0e4>span.svelte-10al0e4.svelte-10al0e4{color:var(--color-info-900, #076196);font-weight:500;margin-right:0.4em;text-decoration:underline}button[data-toggle].svelte-10al0e4>span small.svelte-10al0e4.svelte-10al0e4{font-weight:400;font-size:0.8em}.tz-dropdown.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{background-color:var(--color-white, #fff);border:1px solid var(--color-gray-100, rgba(0, 0, 0, 0.2));box-shadow:0 1px 6px 0 var(--color-gray-100, rgba(0, 0, 0, 0.2));border-radius:4px;display:flex;flex-direction:column;min-width:18em;max-width:100vw;position:absolute;z-index:50}.tz-groups.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{height:240px;max-height:40vh;overflow:scroll}ul.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{margin:0;list-style:none inside none;padding:0}ul.svelte-10al0e4 li.svelte-10al0e4.svelte-10al0e4{font-size:0.9rem;display:block;margin:0;padding:0}ul.svelte-10al0e4 li.svelte-10al0e4>span.svelte-10al0e4{font-size:0.8em;line-height:1.4em;text-align:right}ul.svelte-10al0e4 li p.svelte-10al0e4.svelte-10al0e4{color:var(--color-gray-900, #292929);font-size:0.92rem;font-weight:600;letter-spacing:0.08em;margin:0;padding:0;text-transform:uppercase}ul.svelte-10al0e4 li.svelte-10al0e4.svelte-10al0e4{background:transparent;border:0;color:var(--color-gray-600, #757575);display:flex;justify-content:space-between;padding:0.8em 1.2em;text-align:left}ul.svelte-10al0e4 li[aria-selected].svelte-10al0e4.svelte-10al0e4:hover,ul.svelte-10al0e4 li.svelte-10al0e4.svelte-10al0e4:focus,li[aria-selected='true'].svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{background:var(--color-info-900, #076196);color:#fff;cursor:pointer}.input-group.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{display:flex;position:relative}.input-group.svelte-10al0e4>button.svelte-10al0e4.svelte-10al0e4{position:absolute;top:1.1em;right:0.8em}input.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{border:1px solid var(--color-gray-400, #acacac);border-radius:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.12);margin:0.4em;padding:0.6em 1.6em 0.6em 0.4em;width:calc(100% - 0.8em)}input.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4::-webkit-search-cancel-button{display:none}.sr-only.svelte-10al0e4.svelte-10al0e4.svelte-10al0e4{border:0;clip:'rect(0, 0, 0, 0)';height:1px;margin:-1px;opacity:0;overflow:hidden;padding:0;position:absolute;width:1px}",
  map: null
};
const Picker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { timezone: timezone2 = null } = $$props;
  let { expanded = false } = $$props;
  let { allowedTimezones = null } = $$props;
  let currentZone;
  let userSearch;
  let highlightedZone;
  let toggleButtonRef;
  let searchInputRef;
  let listBoxRef;
  let listBoxOptionRefs;
  const labelId = uid();
  const listBoxId = uid();
  const searchInputId = uid();
  const ungroupedZones = ungroup(timezones);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let availableZones = ungroupedZones;
  if (allowedTimezones) {
    if (Array.isArray(allowedTimezones)) {
      availableZones = pick(ungroupedZones, [...allowedTimezones, userTimezone]);
    } else {
      console.error("You need to provide a list of timezones as an Array!", `You provided ${allowedTimezones}.`);
    }
  }
  const validZones = Object.keys(availableZones);
  let filteredZones = [];
  listBoxOptionRefs = Object.values(availableZones).map(([zone]) => ({ [zone]: null }));
  createEventDispatcher();
  get_current_component();
  const groupHasVisibleChildren = (group, zones) => Object.keys(timezones[group]).some((zone) => zones.includes(zone));
  const setHighlightedZone = (zone) => {
    highlightedZone = zone;
  };
  const setTimezone = (tz) => {
    if (!tz) {
      timezone2 = userTimezone;
    }
    if (tz && !validZones.includes(tz)) {
      console.warn(`The timezone provided is not valid: ${tz}!`, `Valid zones are: ${validZones}`);
      timezone2 = userTimezone;
    }
    currentZone = ungroupedZones[timezone2];
    setHighlightedZone(timezone2);
  };
  if ($$props.timezone === void 0 && $$bindings.timezone && timezone2 !== void 0)
    $$bindings.timezone(timezone2);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.allowedTimezones === void 0 && $$bindings.allowedTimezones && allowedTimezones !== void 0)
    $$bindings.allowedTimezones(allowedTimezones);
  $$result.css.add(css);
  filteredZones = validZones.slice();
  {
    setTimezone(timezone2);
  }
  return `${expanded ? `<div class="${"overlay svelte-10al0e4"}"></div>` : ``}

<button type="${"button"}"${add_attribute("aria-label", `${currentZone[0]} is currently selected. Change timezone`, 0)} aria-haspopup="${"listbox"}" data-toggle="${"true"}"${add_attribute("aria-expanded", expanded, 0)} class="${"svelte-10al0e4"}"${add_attribute("this", toggleButtonRef, 0)}><span class="${"svelte-10al0e4"}">${escape(currentZone[0])} <small class="${"svelte-10al0e4"}">GMT ${escape(currentZone[1])}</small></span>
  <svg width="${"10"}" height="${"16"}" viewBox="${"0 0 16 16"}" class="${"svelte-10al0e4"}"><polygon x="${"0"}" y="${"0"}" points="${"8, 8, 16, 16, 0, 16"}" transform="${escape(expanded ? "rotate(0)" : "rotate(180, 8, 8)", true) + " translate(0 -4)"}" class="${"svelte-10al0e4"}"></polygon></svg></button>
${expanded ? `<div class="${"tz-dropdown svelte-10al0e4"}"><span class="${"sr-only svelte-10al0e4"}"${add_attribute("id", labelId, 0)}>Select a timezone from the list. Start typing to filter or use the arrow
      keys to navigate the list
    </span>
    <div class="${"input-group svelte-10al0e4"}">
      <input${add_attribute("id", searchInputId, 0)} type="${"search"}" aria-autocomplete="${"list"}"${add_attribute("aria-controls", listBoxId, 0)}${add_attribute("aria-labelledby", labelId, 0)} autocomplete="${"off"}" autocorrect="${"off"}" placeholder="${"Search..."}" autofocus class="${"svelte-10al0e4"}"${add_attribute("this", searchInputRef, 0)}${add_attribute("value", userSearch, 0)}>

      ${``}</div>

    <ul tabindex="${"-1"}" class="${"tz-groups svelte-10al0e4"}"${add_attribute("id", listBoxId, 0)} role="${"listbox"}"${add_attribute("aria-labelledby", labelId, 0)}${add_attribute("aria-activedescendant", currentZone && `tz-${slugify(currentZone[0])}`, 0)}${add_attribute("this", listBoxRef, 0)}>${each(Object.keys(timezones), (group) => {
    return `${groupHasVisibleChildren(group, filteredZones) ? `<li role="${"option"}" aria-hidden="${"true"}" aria-selected="${"false"}" class="${"svelte-10al0e4"}"><p class="${"svelte-10al0e4"}">${escape(group)}</p></li>
          ${each(Object.entries(timezones[group]), ([zoneLabel, zoneDetails]) => {
      return `${filteredZones.includes(zoneLabel) ? `<li role="${"option"}" tabindex="${"0"}"${add_attribute("id", `tz-${slugify(zoneLabel)}`, 0)}${add_attribute("aria-label", `Select ${zoneDetails[0]}`, 0)}${add_attribute("aria-selected", highlightedZone === zoneDetails[0], 0)} class="${"svelte-10al0e4"}"${add_attribute("this", listBoxOptionRefs[zoneLabel], 0)}>${escape(zoneDetails[0])} <span class="${"svelte-10al0e4"}">GMT ${escape(zoneDetails[1])}</span>
              </li>` : ``}`;
    })}` : ``}`;
  })}</ul></div>` : ``}`;
});
let timezone = "Asia/Taipei";
const Operation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActiveST = false;
  let isActiveDLS = false;
  let formModal = false;
  let selected = "GPS";
  let MYear = 2023;
  let MMonth = 7;
  let MDay = 26;
  let MHour = 10;
  let MMin = 10;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Time" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Current Local Date &amp; Time</p></td>
    <td class="${"pl-5 pt-5"}">7/26/2023, 10:10</td></tr>

  	<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Automatic Date &amp; Time</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
              $$result,
              { checked: isActiveST },
              {
                checked: ($$value) => {
                  isActiveST = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td></tr>



  	<tr><td class="${"w-85"}"></td>
  	<td class="${"w-85 pt-5 pl-5"}">${!isActiveST ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Manually Set Date &amp; Time`;
              }
            })}` : `${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "GPS", group: selected },
              {
                group: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<p class="${"text-lg pt-1"}">GPS</p>`;
                }
              }
            )}


${validate_component(Radio, "Radio").$$render(
              $$result,
              { value: "NTP", group: selected },
              {
                group: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<p class="${"text-lg pt-1"}">NTP</p>

<p class="${"pl-5"}">${selected == "NTP" ? `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                    $$result,
                    {
                      style: "outlined",
                      id: "floating_outlined",
                      name: "floating_outlined",
                      type: "text",
                      label: "NTP Server"
                    },
                    {},
                    {}
                  )}` : `${validate_component(FloatingLabelInput, "FloatingLabelInput").$$render(
                    $$result,
                    {
                      style: "outlined",
                      id: "floating_outlined",
                      name: "floating_outlined",
                      type: "text",
                      label: "NTP Server",
                      disabled: true
                    },
                    {},
                    {}
                  )}`}</p>`;
                }
              }
            )}`}</td></tr>

  	<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Time Zone</p></td>
  	<td class="${"w-85 pt-5 pl-5"}">${validate_component(Picker, "TimezonePicker").$$render($$result, { timezone }, {}, {})}</td></tr>

  	<tr><td class="${"w-85"}"><p class="${"pl-10 pt-5 text-lg font-light text-right"}">Day Light Saving</p></td><td class="${"pl-5 pt-5"}">${validate_component(Toggle, "Toggle").$$render(
              $$result,
              { checked: isActiveDLS },
              {
                checked: ($$value) => {
                  isActiveDLS = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td></tr>

<tr class="${"pt-5"}"><td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="${"pl-10"}">${validate_component(Button, "Button").$$render($$result, { color: "blue", pill: true }, {}, {
              default: () => {
                return `<svg class="${"mr-2 -ml-1 w-6 h-6"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>Save`;
              }
            })}</td></tr>



${validate_component(Modal, "Modal").$$render(
              $$result,
              {
                size: "md",
                class: "w-full",
                autoclose: true,
                open: formModal
              },
              {
                open: ($$value) => {
                  formModal = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<table><tr><td class="${"w-24 pl-5 pt-5"}"><input type="${"number"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MYear, 0)}></td>
      <td class="${"pl-5 pt-5"}">-</td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"1"}" max="${"12"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MMonth, 0)}></td>

      <td class="${"pl-5 pt-5"}">-</td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"1"}" max="${"31"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MDay, 0)}></td>


      <td class="${"pl-16 pt-5"}"></td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"0"}" max="${"23"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MHour, 0)}></td>


      <td class="${"pl-5 pt-5"}">: </td>
      <td class="${"w-20 pl-5 pt-5"}"><input type="${"number"}" min="${"0"}" max="${"59"}" class="${"bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"}"${add_attribute("value", MMin, 0)}></td></tr>


      <tr class="${"pt-10"}"><td></td>
    <td></td>
        <td></td>
    <td></td>
        <td></td>
    <td></td>

        <td></td>
        <td></td>
    <td class="${"pt-10"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
                    default: () => {
                      return `Apply`;
                    }
                  })}</td></tr></table>`;
                }
              }
            )}</table>`;
          }
        })}

   ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Reboot" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-65"}">Reboot Device</td><td class="${"pl-5"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
              default: () => {
                return `Reboot`;
              }
            })}</td></tr></table>`;
          }
        })}
 
   ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Reset" }, {}, {
          default: () => {
            return `<table><tr><td class="${"w-65"}">Reset to default</td><td class="${"pl-5"}">${validate_component(Button, "Button").$$render($$result, { color: "dark", pill: true }, {}, {
              default: () => {
                return `Reset`;
              }
            })}</td></tr></table>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Operation as default
};
