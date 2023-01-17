<script lang="ts">
	export let card_title = "";
	export let card_description = "";
	export let card_image_link = "";
	export let card_image_alt = "";
	export let id = "";
</script>

<div class='card w-96 shadow-xl image-full'>
	<figure><img class='w-96 aspect-video' src={card_image_link} alt={card_image_alt}></figure>
	<div class='card-body'>
		<h2 class="card-title bg-accent-content/50 p-3 px-5 rounded-lg w-fit	">{card_title}</h2>
		<p>{card_description}</p>
		<div class="card-actions justify-end">
			<a href="/q/{id}" class="btn btn-success hover:scale-110">Quiss</a>
		</div>
	</div>
</div>