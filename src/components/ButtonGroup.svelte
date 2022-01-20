<script>
	import { ButtonSet, Button } from 'carbon-components-svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let options = [];
	export let selected;

	function setSelected(e) {
		const newValue = e.target.value;
		selected = newValue;
		dispatch('change', { value: newValue });
	}
</script>

<ButtonSet>
	{#each options as option, index}
		<Button
			kind={selected === option.id ? 'primary' : 'secondary'}
			value={option.id}
			name={option.name}
			on:click={setSelected}
		>
			{option.name}
		</Button>
	{/each}
</ButtonSet>
