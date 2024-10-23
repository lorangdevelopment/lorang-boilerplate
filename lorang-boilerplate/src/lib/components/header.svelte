<script lang="ts">
    import { PrismicLink } from "@prismicio/svelte";

    let navigation: HTMLElement
	let isOpen = false;
	
	function toggleNavigation() {
	  isOpen = !isOpen;
	}

    export let header_navigation
    export let menu_label_first
    export let menu_label_second
</script>


	<header class="header header--has-bg header--has-text-color">
		<div class="header__navigation" class:--open={isOpen} bind:this={navigation}>
			<div class="header__navigation-inner">
				<div class="header__navigation-content">
					<nav class="header__nav">
                        {#each header_navigation as item}
                        <div class="header__nav-item btn-underline">
                            <PrismicLink field={item.link} class="header__nav-link">
                                {item.link_label}
                            </PrismicLink>
						</div>
                        {/each}
					</nav>
				</div>
			</div>
		</div>
		<div class="header__row pl-15 pr-15">
			<div class="header__logo-wrapper">
				<a href="/" class="header__logo" title="Nightjar">
					<svg viewBox="0 0 1392 232" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M187.44 227.984L187.44 4.01598L146.025 4.01598L146.025 174.85L57.0602 4.01598L0 4.01598L0 227.984H41.4147L41.4147 57.1505L130.379 227.984H187.44Z" fill="currentColor"></path><path d="M258.983 4.01598L215.114 4.01598L215.114 227.984H258.983V4.01598Z" fill="currentColor"></path><path d="M387.963 0C319.859 0 279.058 45.4114 279.058 114.919C279.058 186.28 318.018 232 380.6 232C411.891 232 434.899 219.952 447.477 201.726L448.704 227.984H483.37V109.049L370.246 109.049V145.193H442.876V148.9C442.876 185.044 411.278 196.783 387.349 196.783C349.309 196.783 324.46 168.362 324.46 114.919C324.46 61.1664 350.536 35.217 387.656 35.217C412.505 35.217 434.286 47.5739 441.035 71.9787H482.756C475.701 30.5832 440.115 0 387.963 0Z" fill="currentColor"></path><path d="M652.902 4.01598V95.4567L553.2 95.4567V4.01598L509.331 4.01598V227.984H553.2V131.292L652.902 131.292V227.984H696.771V4.01598L652.902 4.01598Z" fill="currentColor"></path><path d="M775.948 227.984L819.817 227.984V39.8509L888.535 39.8509V4.01598L707.538 4.01598V39.8509L775.948 39.8509V227.984Z" fill="currentColor"></path><path d="M919.636 232C968.106 232 996.023 202.035 996.023 154.77V4.01598L952.154 4.01598V154.77C952.154 185.353 938.962 195.856 919.636 195.856C900.002 195.856 887.731 185.353 886.811 154.77H842.942C844.169 199.872 870.858 232 919.636 232Z" fill="currentColor"></path><path d="M990.87 227.984H1035.66L1051.3 182.573H1137.82L1153.46 227.984H1201.01L1117.87 4.01598L1073.7 4.01598L990.87 227.984ZM1094.56 58.0772L1125.24 146.429H1063.88L1094.56 58.0772Z" fill="currentColor"></path><path d="M1343.22 227.984H1392L1342.61 130.983C1370.22 119.244 1382.8 97.6192 1382.8 71.9787C1382.8 25.0226 1354.88 4.01598 1281.56 4.01598L1208.55 4.01598V227.984H1252.42V140.25L1288.62 140.25H1299.05L1343.22 227.984ZM1286.47 38.6152C1316.23 38.6152 1337.7 46.3382 1337.7 72.2876C1337.7 94.221 1322.67 105.96 1288.62 105.96H1252.42V38.6152H1286.47Z" fill="currentColor"></path></svg>
				</a>
			</div>
			<div class="header__nav-toggle">
				<button class="header__nav-button" on:click={toggleNavigation}>
					<span>{menu_label_first}</span>
					<span>{menu_label_second}</span>
				</button>
				<svg class="header__nav-chevron" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z" fill="currentColor"></path></svg>
			</div>
		</div>
	</header>