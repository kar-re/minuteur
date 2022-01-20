<script>
	// import "../index.scss";
	import 'carbon-components-svelte/css/all.css';
	import Header from '../components/Header.svelte';
	import { Content, Grid, Row, Column } from 'carbon-components-svelte';
</script>

<Header />
<Content>
	<Grid>
		<slot />
	</Grid>
</Content>
