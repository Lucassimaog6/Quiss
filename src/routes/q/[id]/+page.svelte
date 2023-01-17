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
	<div class='card bg-base-200 shadow-xl p-6'>
		<div class='card-body'>
			<h1 class='text-center'>{Quiss.title}</h1>
		</div>
		<div class='flex flex-col gap-5 w-60'>
			{#each Quiss.answers as a}
				{#if Quiss.correct === Quiss.answers.indexOf(a)}
					<div class='btn' class:btn-success={has_answered} on:click={() => has_answered = true}>
						<p>{a}</p>
					</div>
				{:else}
					<div class='btn' class:btn-error={has_answered} on:click={() => has_answered = true}>
						<p>{a}</p>
					</div>
				{/if}
			{/each}
		</div>
	</div>
{/if}

