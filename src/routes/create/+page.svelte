<script>
	import { addDoc, collection } from "firebase/firestore"
	import { db } from "../../firebase"

	let quiss_title;
	let quiss_description;
	let img_link;
	let img_description;
	let question;
	let correct;
	let number_of_answers = 3;
	let arr_answers = []
	$: arr_answers = Array(number_of_answers)


	let has_error = false;
	function Create() {
		if (quiss_title === undefined ||
				quiss_description === undefined ||
				img_link === undefined ||
				img_description === undefined ||
				question === undefined ||
				correct === undefined ||
				arr_answers.includes(undefined)) {
			has_error = true
		}else{
			has_error = false
			PushToFirebase()
		}
	}

	function PushToFirebase() {
			addDoc(collection(db, "Quiss"), {
				title: quiss_title,
				description: quiss_description,
				img_link: img_link,
				img_alt: img_description,
				answers: arr_answers,
				correct: correct
			})
	}

</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Crie seu quiss</h2>
		<div class="divider"></div>
		<div class='form-control gap-3'>
			<span	 class='label-text'>Titulo do Quiss: </span>
			<input type='text' bind:value={quiss_title} class='input input-bordered w-full max-w-xs mb-5' placeholder='pipipi popopo' />

			<span	 class='label-text'>Descrição do Quiss: </span>
			<input type='text' bind:value={quiss_description} class='input input-bordered w-full max-w-xs mb-5' placeholder='uns pi e uns pó' />

			<span	 class='label-text'>Link da Imagem da capa: </span>
			<input type='text' bind:value={img_link} class='input input-bordered w-full max-w-xs mb-5' placeholder='gatinho_fofo.png' />

			<span	 class='label-text'>Descição da Imagem da capa: </span>
			<input type='text' bind:value={img_description} class='input input-bordered w-full max-w-xs mb-5' placeholder='Foto do p4u' />

			<span	 class='label-text'>Qual sua pergunta: </span>
			<input type='text' bind:value={question} class='input input-bordered w-full max-w-xs mb-5' placeholder='Qual o nome real da Samara' />

			<span class='label-text'>Quantas perguntas serão?</span>
			<input type="range" min="2" max="6" bind:value={number_of_answers} class="range" step="1" />
			<div class="w-full flex justify-between text-xs px-2 mb-5">
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
				<span>6</span>
			</div>

			<p>Digite as perguntas e escolha a alternativa correta:</p>

		</div>
		<div class="card-actions">
				<div class='form-control gap-3 w-full'>
					{#each {length:  number_of_answers} as _, i}
						<div class='flex gap-5 justify-around items-center'>
							<input type='text' bind:value={arr_answers[i]} class='input input-bordered max-w-xs'>
							<input type="radio" name="radio-1" class="radio" on:change={() => correct = i} />
						</div>
					{/each}
				</div>
			<button class="btn btn-success w-full mt-5" on:click={Create} >Enviar!</button>
		</div>
	</div>
</div>

{#if has_error}
	<div class="toast">
		<div class="alert alert-error">
			<div>
				<span>Preencha TODOS os campos!</span>
			</div>
		</div>
	</div>
{/if}