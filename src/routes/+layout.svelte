<script>
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'

	onMount(() => {
		themeChange(false)
	})
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div class="navbar bg-base-100">
	<div class='navbar-start'>
		<select data-choose-theme class="select max-w-xs">
			<option disabled selected>Escolha seu tema</option>
			<option value="acid">Acid</option>
			<option value="aqua">Aqua</option>
			<option value="autumn">Autumn</option>
			<option value="black">Black</option>
			<option value="bumblebee">Bumblebee</option>
			<option value="business">Business</option>
			<option value="cmyk">CMYK</option>
			<option value="coffee">Coffee</option>
			<option value="corporate">Corporate</option>
			<option value="cupcake">Cupcake</option>
			<option value="cyberpunk">Cyberpunk</option>
			<option value="dark">Dark</option>
			<option value="dracula">Dracula</option>
			<option value="emerald">Emerald</option>
			<option value="fantasy">Fantasy</option>
			<option value="forest">Forest</option>
			<option value="garden">Garden</option>
			<option value="halloween">Halloween</option>
			<option value="lemonade">Lemonade</option>
			<option value="light">Light</option>
			<option value="lofi">Lofi</option>
			<option value="luxury">Luxury</option>
			<option value="night">Night</option>
			<option value="pastel">Pastel</option>
			<option value="retro">Retro</option>
			<option value="synthwave">Synthwave</option>
			<option value="valentine">Valentine</option>
			<option value="winter">Winter</option>
			<option value="wireframe">Wireframe</option>
		</select>
	</div>
	<div class='navbar-center'>
		<a class="btn btn-ghost normal-case text-xl" href='/'>Quiss</a>
	</div>
	<div class='navbar-end'>
		<a class='btn btn-accent' href='/create'>Crie seu Quiss</a>
	</div>
</div>

<main class='min-h-screen p-10 flex flex-wrap justify-center items-center gap-8'>
	<slot />
</main>

<footer class='footer footer-center p4 bg-base-300, text-base-content '>
	<div>
		<p>Site feito por <a class='link' href='Lucassimaog6.me'>Lucas simao</a>,
			utilizando <a class='link' href='kit.svelte.dev'>SvelteKit</a>
			e <a class='link' href='daisyui.com'>DaisyUI</a></p>
	</div>
</footer>