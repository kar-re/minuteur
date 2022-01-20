<script>
	import { Button, Grid, Row, Column, ContentSwitcher, Switch } from 'carbon-components-svelte';
	import ButtonGroup from './ButtonGroup.svelte';
	const startStopButton = {
		text: 'Start',
		mode: false
	};
	// let modes = [{ pomodoro: 25 }, { shortBreak: 5 }, { longBreak: 15 }];
	const timer = {
		pomodoro: 25,
		shortBreak: 5,
		longBreak: 15,
		longBreakInterval: 4
	};

	function handleChange(e) {
		console.log(e);
		switchMode(e.detail.value);
	}

	let interval;

	function switchMode(mode) {
		stopTimer();
		timer.mode = mode;
		timer.remainingTime = {
			total: timer[mode] * 60,
			minutes: timer[mode],
			seconds: 0
		};
		updateClock();
	}

	switchMode('pomodoro');

	function toggleButtonMode() {
		startStopButton.mode ? stopTimer() : startTimer();
		startStopButton.mode = !startStopButton.mode;
		startStopButton.text = startStopButton.mode ? 'Stop' : 'Start';
	}

	function stopTimer() {
		console.log('Stopped timer');
		clearInterval(interval);
	}

	function startTimer() {
		console.log('Started timer');
		let { total } = timer.remainingTime;
		const endTime = new Date().getTime() + total * 1000;
		interval = setInterval(function () {
			timer.remainingTime = getRemainingTime(endTime);
			updateClock();
			total = timer.remainingTime.Total;
			if (total <= 0) {
				clearInterval(interval);
				switchMode('shortBreak');
			}
		}, 100);
	}

	function updateClock() {
		const { remainingTime } = timer;
		const minutes = `${remainingTime.minutes}`.padStart(2, '0');
		const seconds = `${remainingTime.seconds}`.padStart(2, '0');
		timer.text = `${minutes}:${seconds}`;
	}

	function getRemainingTime(endTime) {
		const currentTime = new Date().getTime();
		const difference = endTime - currentTime;

		const total = Math.floor(difference / 1000);
		const minutes = Math.floor((total / 60) % 60);
		const seconds = Math.floor(total % 60);

		return {
			total,
			minutes,
			seconds
		};
	}
	updateClock();
</script>

<Row>
	<ContentSwitcher size="xl">
		<Switch name={'pomodoro'} text="Pomodoro" on:click={() => switchMode('pomodoro')} />
		<Switch name={'shortBreak'} text="Short Break" on:click={() => switchMode('shortBreak')} />
		<Switch name={'longBreak'} text="Long Break" on:click={() => switchMode('longBreak')} />
	</ContentSwitcher>

	<!-- <ButtonGroup
		options={[
			{ id: 'pomodoro', name: 'Pomodoro' },
			{ id: 'shortBreak', name: 'Short Break' },
			{ id: 'longBreak', name: 'Long Break' }
		]}
		selected={'pomodoro'}
		on:change={handleChange}
	/> -->
</Row>
<Row style="justify-content: center;">
	<h1 class="clock">
		{timer.text}
	</h1>
</Row>
<Row>
	<Button on:click={toggleButtonMode}>{startStopButton.text}</Button>
</Row>

<style>
	.clock {
		margin: var(--cds-spacing-06);
		font-size: var(--cds-display-04-font-size);
		font-weight: var(--cds-display-04-font-weight);
		line-height: var(--cds-display-04-line-height);
		letter-spacing: var(--cds-display-04-letter-spacing);
	}
</style>
