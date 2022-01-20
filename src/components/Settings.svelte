<script>
	export let open = false;
	import {
		Form,
		FormGroup,
		Checkbox,
		RadioButtonGroup,
		RadioButton,
		Select,
		SelectItem,
		Button,
		Modal
	} from 'carbon-components-svelte';
</script>

<Modal
	bind:open
	modalHeading="Create database"
	primaryButtonText="Confirm"
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (open = false)}
	on:open={() => console.log('opened')}
	on:close
	on:submit
>
	<Form on:submit>
		<FormGroup legendText="Checkboxes">
			<Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
			<Checkbox id="checkbox-1" labelText="Checkbox Label" />
			<Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
		</FormGroup>
		<FormGroup legendText="Radio buttons">
			<RadioButtonGroup name="radio-button-group" selected="default-selected">
				<RadioButton id="radio-1" value="standard" labelText="Standard Radio Button" />
				<RadioButton
					id="radio-2"
					value="default-selected"
					labelText="Default Selected Radio Button"
				/>
				<RadioButton id="radio-4" value="disabled" labelText="Disabled Radio Button" disabled />
			</RadioButtonGroup>
		</FormGroup>
		<FormGroup>
			<Select id="select-1" labelText="Select menu" value="placeholder-item">
				<SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
				<SelectItem value="option-1" text="Option 1" />
				<SelectItem value="option-2" text="Option 2" />
				<SelectItem value="option-3" text="Option 3" />
			</Select>
		</FormGroup>
		<Button type="submit">Submit</Button>
	</Form>
</Modal>
