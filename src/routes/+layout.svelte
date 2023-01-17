<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div class="navbar bg-base-100">
	<div class='navbar-start'></div>
	<div class='navbar-center'>
		<a class="btn btn-ghost normal-case text-xl" href='/'>Quiss</a>
	</div>
	<div class='navbar-end'>
		<a class='btn btn-accent' href='/create'>Crie seu Quiss</a>
	</div>
</div>

<main class='p-10 flex flex-wrap justify-center items-center gap-8'>
	<slot />
</main>

<footer class='footer footer-center p4 bg-base-300, text-base-content '>
	<div>
		<p>Site feito por <a class='link' href='Lucassimaog6.me'>Lucas simao</a>,
			utilizando <a class='link' href='kit.svelte.dev'>SvelteKit</a>
			e <a class='link' href='daisyui.com'>DaisyUI</a></p>
	</div>
</footer>