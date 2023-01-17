<script lang="ts">
	export let card_title = "";
	export let card_description = "";
	export let card_image_link = "";
	export let card_image_alt = "";
	export let id = "";
</script>

<div class='card w-96	bg-base-200 shadow-xl p-6'>
	<figure><img src={card_image_link} alt={card_image_alt}></figure>
	<div class='card-body'>
		<h2 class="card-title">{card_title}</h2>
		<p>{card_description}</p>
	</div>
	<div class="card-actions justify-center">
		<a href="/q/{id}" class="btn btn-primary w-full">Quiss</a>
	</div>
</div>