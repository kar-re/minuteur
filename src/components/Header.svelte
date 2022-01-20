<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderGlobalAction,
		HeaderNavMenu,
		HeaderUtilities,
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		HeaderPanelLink,
		SkipToContent,
		NumberInput,
		Grid,
		Row,
		Column
	} from 'carbon-components-svelte';
	import { SettingsAdjust20, Settings32 } from 'carbon-icons-svelte';
	import { expoIn } from 'svelte/easing';
	import Settings from './Settings.svelte';
	let isOpen = false;
	let isSideNavOpen = false;
	let isSettings = false;
	function openSettings() {
		// alert('open settings!');
		isSettings = true;
	}
</script>

<Header platformName="Minuteaur" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<!-- <HeaderNav>
		<HeaderNavItem href="/" text="Settings">
			<HeaderGlobalAction />
		</HeaderNavItem>
	</HeaderNav> -->
	<HeaderUtilities>
		<HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust20} on:click={openSettings} />
		<!-- <HeaderAction bind:isOpen>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Time settings</HeaderPanelDivider>
				<Grid>
					<Row>
						<NumberInput size="sm" label="Pomodoro" />
						<NumberInput label="Short break" />
						<NumberInput label="Long break" />
					</Row>
				</Grid>
				<HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 3</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 4</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 5</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction> -->
	</HeaderUtilities>
</Header>
<Settings open={isSettings} on:close={() => (isSettings = false)} />
