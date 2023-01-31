<script>
	import '../app.css';
	import { Hamburger } from 'svelte-hamburgers';


	import {
		Sidebar,
		SidebarWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem,
		DarkMode
	} from 'flowbite-svelte';


	import {
		ChartPie,
		ViewGrid,
		InboxIn,
		User,
		Login,
		Cog,
		ShoppingBag,
		ShoppingCart,
		Table,
		Key,
		InformationCircle,
		ChartBar,
		GlobeAlt,
		ShieldExclamation,
		Cloud,
		Logout
	} from 'svelte-heros';

	import {
		Wrench,
		Cube,
		Cog8Tooth
	} from 'svelte-heros-v2';

	import { Side, Nav, Responsive } from 'svelte-sidebar-menu';

	import { quartInOut } from 'svelte/easing';

	// Darkmode component
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-24 z-50';

	// Side component
	let siteName = 'Etherwan';

	let siteClass = 'w-1/ h-12 text-lg pt-3 pl-5';

	let headerClass =
		'bg-white px-10 items-center text-gray-600 border-b-2 p-4 dark:bg-gray-900 dark:text-white';

	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';

	let topDiv = 'w-full md:block md:w-auto absolute top-16 md:top-1 px-8';

	let topMenuDiv = 'container flex flex-wrap mx-auto pt-0 md:pt-2';

	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white';

	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-0 pl-1 pr-1 text-lg dark:text-white bg-yellow-400';

	let asideClass =
		'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll dark:bg-gray-900 dark:text-white';

	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	// Nav component
	let navClass = 'py-3 px-1 text-lg';

	let navDivClass = 'pb-8';


	let transitionParams = {
		duration: 100,
		delay: 50,
		easing: quartInOut,
		x: -200
	};

	let open;

	const topMenuList = [
		{ href: '/about', name: 'LAN 1' },
		{ href: '/about', name: 'LAN 2' },
		{ href: '/about', name: 'LAN 3' },
		{ href: '/about', name: 'LAN 4' },
		{ href: '/about', name: 'WAN' },
		{ href: '/about', name: 'VPN' },
		{ href: '/about', name: 'Cloud' },
		{ href: '/about', name: 'PSE' },
		{ href: '/about', name: 'COM 1' },
		{ href: '/about', name: 'COM 2' },
		{ href: '/about', name: 'COM 3' },
		{ href: '/about', name: 'COM 4' },
		{ href: '/about', name: 'DI' },
		{ href: '/about', name: 'DO' },
		{ href: '/about', name: 'SYS' },
		{ href: '/about', name: 'LTE' },
		{ href: '/about', name: 'RSSI' }
	];
</script>



<DarkMode {btnClass} />
<Responsive />
<Side
	{siteName}
	{siteClass}
	{headerClass}
	{hamburgerClass}
	{topDiv}
	{topMenuDiv}
	{topul}
	{childLi}
	{asideClass}
	{spanClass}
	{transitionParams}
	topMenus={topMenuList}
>
<Hamburger
    bind:open/>


{#if open}
	<Nav {navClass} {navDivClass}>
		<Sidebar>
			<SidebarWrapper>
				<SidebarGroup>
					<SidebarDropdownWrapper
						label="ViewStatus"
						icon={{ name: InformationCircle, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="System Information" />
						<SidebarDropdownItem label="Dashboard" />
						<SidebarDropdownItem label="Network" />
						<SidebarDropdownItem label="Cloud" />
						<SidebarDropdownItem label="Security" />
						<SidebarDropdownItem label="Field" />
						<SidebarDropdownItem label="Service" />
						<SidebarDropdownItem label="System Manager" />
						<SidebarDropdownItem label="Traffic & Counters" />
					</SidebarDropdownWrapper>
					<SidebarDropdownWrapper
						label="Networking"
						icon={{ name: GlobeAlt, class: 'text-green-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="WAN" />
						<SidebarDropdownItem label="LAN" />
						<SidebarDropdownItem label="Port Forwarding" />
						<SidebarDropdownItem label="NAT" />
						<SidebarDropdownItem label="Firewall" />
						<SidebarDropdownItem label="Static Route" />
					</SidebarDropdownWrapper>
					<SidebarDropdownWrapper
						label="VPN"
						icon={{ name: ShieldExclamation, class: 'text-red-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="OpenVPN" />
						<SidebarDropdownItem label="IPSec" />
					</SidebarDropdownWrapper>
					<SidebarDropdownWrapper
						label="Cloud"
						icon={{ name: Cloud, class: 'text-yellow-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="Azure" />
						<SidebarDropdownItem label="AWS" />
						<SidebarDropdownItem label="Generic" />
					</SidebarDropdownWrapper>
					<SidebarDropdownWrapper
						label="Field Managment"
						icon={{ name: Wrench, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="Port Connection" />
						<SidebarDropdownItem label="Protocol" />
						<SidebarDropdownItem label="Modbus Transparent" />
					</SidebarDropdownWrapper>


					<SidebarDropdownWrapper
						label="Service"
						icon={{ name: Cube, class: 'text-green-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="Data Tag Pro" />
						<SidebarDropdownItem label="Data Logger" />
						<SidebarDropdownItem label="Event Handler" />
						<SidebarDropdownItem label="Remote Service" />
						<SidebarDropdownItem label="DREAMS" />
						<SidebarDropdownItem label="Docker Engine" />
						<SidebarDropdownItem label="GPS Standalone" />
						<SidebarDropdownItem label="Power Saving" />
						<SidebarDropdownItem label="Protocol Converter" />
					</SidebarDropdownWrapper>

					<SidebarDropdownWrapper
						label="System Managment"
						icon={{ name: Cog8Tooth, class: 'text-red-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="Administrator" />
						<SidebarDropdownItem label="Configuration" />
						<SidebarDropdownItem label="Operation" />
						<SidebarDropdownItem label="Maintainence" />
					</SidebarDropdownWrapper>

					<SidebarItem
						label="Sign Out"
						icon={{ name: Logout, class: 'text-green-500 mr-2 dark:text-yellow-500' }}
					/>

				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</Nav>

{/if}
</Side>

{#if open}
<main class="container mx-auto py-32 px-8 lg:pl-60 pr-8 dark:text-white ">
	<slot />
</main>
{:else}

<main class="container mx-auto py-32 px-8 lg:pl-10 pr-8 dark:text-white ">
	<slot />
</main>
{/if}

<svelte:head>
	<title>Etherwan</title>
	<meta
		name="description"
		content="Flowbite-Svelte-Starter is a quick way to start Svelte and Flowbite/Tailwind CSS. It comes with SvelteKit, Tailwind CSS, Flowbite,
		Flowbite-Svelte, ESlint, Typescript, Playwright, Prettier, Svelte-heros (Heroicons), Dark mode activated."
	/>
</svelte:head>
