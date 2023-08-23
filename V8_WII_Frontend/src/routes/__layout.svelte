<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';
	import { onMount } from 'svelte';
	import { sessionidG } from "./sessionG.js";
  	import { LanConfigChangedLog} from "./configG.js"

	import {
		Img,
		Sidebar,
		SidebarWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem,
		DarkMode
	} from 'flowbite-svelte';


	import { Side, Nav, Responsive } from 'svelte-sidebar-menu';

	import { quartInOut } from 'svelte/easing';


	// Darkmode component
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-28 z-50';

	// Side component
	let logo = 'EWLOGO.png';
	let logoClass= 'w-20';
	let siteName = 'AiR PACE 2';

	let siteClass = 'pl-45';

	let headerClass =
		'bg-white px-10 items-center text-gray-600 border-b-2 p-2 dark:bg-gray-900 dark:text-white';

	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';

	let topDiv = 'pt-8 w-full md:block md:w-auto absolute right-0';

	let topMenuDiv = 'container flex flex-wrap pt-0 md:pt-2';

	let topul =
		'flex flex-col mt-4 md:flex-row md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white';

	let childLi =
		'block py-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-0 pl-1 pr-1 text-lg dark:text-white bg-yellow-400';

	let asideClass =
		'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll dark:bg-gray-900 dark:text-white';

	let spanClass =
		'pl-20 self-center text-3xl font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	// Nav component
	let navClass = 'py-3 px-1 text-lg';

	let navDivClass = 'pb-8';


	let transitionParams = {
		duration: 200,
		delay: 100,
		easing: quartInOut,
		x: -200
	};


	let buttonClass = 'inline-flex items-center text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200';

	let open;
	let svg0background="";

	$: activeUrl = $page.url.pathname;

	let usertype=0;
	let currentUri = '';
	let sessionid='';

  	let interval;
  	let sessionBinary;
  	let LANchangedValues = [];

	const BlinkApply = () => {
		if (svg0background=="")
		{
    		svg0background="background-color: blue";
    	}
    	else if (svg0background == "background-color: blue")
    	{
    		svg0background="";
    	}
  	};



 	const startInterval = () => {
    	interval = setInterval(BlinkApply, 500); 
  	};


	LanConfigChangedLog.subscribe(val => {
    	LANchangedValues=val;
    	if (LANchangedValues.length != 0)
    	{
    		if (!interval)
    		{
    			startInterval();
    		}
    	}
    	else
    	{
    		if (interval)
    		{
    			clearInterval(interval);
    		}
    	}
  	});




  	sessionidG.subscribe(val => {
    	sessionid = val;
  	});

	async function getUserType () {
		const res = await fetch(window.location.origin+"/getUserType", {
			method: 'POST',
			body: sessionBinary
		})

		if (res.status == 200)
		{
			const data =await res.arrayBuffer();
			const uint8Array = new Uint8Array(data);
			usertype = parseInt(uint8Array, 16);
		}
	}


	onMount(() => {

		if (!sessionid)
		{
			currentUri = window.location.href;

			console.log("layout sessionid:");
			sessionidG.set(currentUri.split('?')[1]);
			sessionid=currentUri.split('?')[1];
			console.log(sessionid);
		}

		if (sessionid)
		{      
			const hexArray = sessionid.match(/.{1,2}/g); 
      		const byteValues = hexArray.map(hex => parseInt(hex, 16));
      		sessionBinary = new Uint8Array(byteValues);
			getUserType();
		}
	});


const topMenuList = [{ href: '/apply', id: 0 },
					{href: '/logout', id: 1 }];

</script>



<DarkMode {btnClass} />
<Responsive />
<Side
	{logo}
	{logoClass}
	{siteName}
	{siteClass}
	{headerClass}
	{buttonClass}
	{hamburgerClass}
	{topDiv}
	{topMenuDiv}
	{topul}
	{asideClass}
	{spanClass}
	{transitionParams}
	{svg0background}
	topMenus={topMenuList}
>

<Hamburger
    bind:open/>

{#if open}
	<Nav {navClass} {navDivClass}>
		<Sidebar>
			<SidebarWrapper>
				<SidebarGroup>
					<SidebarItem
						label="Dashboard" href='/dashboard'
					active={activeUrl === '/dashboard'}>
										<svelte:fragment slot="icon">
<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-green-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
</SidebarItem>
{#if usertype == 1}
					<SidebarDropdownWrapper
						label="Networking"
					>
										<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-green-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
						<SidebarDropdownItem label="WAN" href='/wan' active={activeUrl === '/wan'}/>
						<SidebarDropdownItem label="LAN" href='/lan' active={activeUrl === '/lan'}/>
						<SidebarDropdownItem label="NAT" href='/nat' active={activeUrl === '/nat'}/>
						<SidebarDropdownItem label="Firewall" href='/firewall'  active={activeUrl === '/firewall'}/>
						<SidebarDropdownItem label="Static Route" href='/staticR' active={activeUrl === '/staticR'}/>
					</SidebarDropdownWrapper>
					
		


					<SidebarDropdownWrapper
						label="Service"
					>


<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-green-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>

						<SidebarDropdownItem label="DREAMS" href='/DREAMS' active={activeUrl === '/DREAMS'}/>
						<SidebarDropdownItem label="Docker Engine" href='/docker' active={activeUrl === '/docker'}/>

					</SidebarDropdownWrapper>

					<SidebarDropdownWrapper
						label="System"
					>

					<svelte:fragment slot="icon">
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-red-500 mr-2 dark:text-pink-500 w-6 h-6">
  <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </svelte:fragment>
						<SidebarDropdownItem label="Account" href='/account' active={activeUrl === '/account'}/>
						<SidebarDropdownItem label="Configuration" href='/configuration' active={activeUrl === '/configuration'}/>
						<SidebarDropdownItem label="Operation" href='/operation' active={activeUrl === '/operation'}/>
						<SidebarDropdownItem label="Maintenance" href='/maintenance' active={activeUrl === '/maintenance'}/>
					</SidebarDropdownWrapper>
{/if}
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</Nav>

{/if}
</Side>

{#if open}
<main class="dark:text-white" style="padding-top: 115px;padding-left: 286px;padding-right: 76px;">
	<slot />
</main>
{:else}
<main class="dark:text-white" style="padding-left: 84px;padding-top: 115px;padding-right: 64px;">
	<slot />
</main>
{/if}

<svelte:head>
	<title>Etherwan</title>
	<meta
		name="description"
		content="Flowbite-Svelte, Dark mode activated."
	/>
</svelte:head>
