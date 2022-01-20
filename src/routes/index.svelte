<script>
	import { Column, Row } from 'carbon-components-svelte';

	import 'carbon-components-svelte/css/all.css';
	import Clock from '../components/Clock.svelte';
</script>

<Row narrow>
	<Column lg={4} />
	<Column lg={8}>
		<Clock />
	</Column>
	<Column lg={4} />
</Row>

<!-- <style lang="scss">
	// @import "../index.scss";
	// Use the gray 90 theme
	// @include carbon--theme($carbon--theme--g90);
</style> -->
