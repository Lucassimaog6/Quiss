<script>
	export let data;
	import { doc, getDoc } from "firebase/firestore";
	import { db } from '../../../firebase.js';
	let has_answered = false;
	let Quiss;
	let load = async () => {
		Quiss = await getDoc(doc(db, "Quiss", data.id));
		Quiss = Quiss.data()
	}
	load()
</script>

{#if Quiss}
	<div class='card max-w-7xl bg-accent shadow-xl'>
		<div class='card-body justify-between pb-0'>
			<picture><img class='w-full aspect-auto rounded-lg' src={Quiss.img_link} alt={Quiss.img_alt}></picture>
			<h1 class='text-center font-semibold mt-3 text-2xl sm:text-4xl'>{Quiss.title}</h1>
		</div>
		<div class='flex flex-col gap-5 w-full p-7'>
			{#each Quiss.answers as a}
				{#if Quiss.correct === Quiss.answers.indexOf(a)}
					<div class='btn btn-lg' class:btn-success={has_answered} on:click={() => has_answered = true}>
						<p class='text-base sm:text-xl' >{a}</p>
					</div>
				{:else}
					<div class='btn btn-lg' class:btn-error={has_answered} on:click={() => has_answered = true}>
						<p class='text-base sm:text-xl' >{a}</p>
					</div>
				{/if}
			{/each}
		</div>
	</div>
{/if}

