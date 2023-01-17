<script>
	import Card from './Card.svelte';
	import {db} from	"../firebase"
	import {getDocs, collection} from "firebase/firestore"
	import { data } from 'autoprefixer';
	let Quisses = [];
	let load = async () => {
		let querySnapshot = await getDocs(collection(db, "Quiss"));
		querySnapshot.forEach((doc) => {
			Quisses = [...Quisses ,{
				id: doc.id,
				...doc.data()
			}];
		});
		console.log(Quisses);
	}
	load()
</script>

{#each Quisses as p}
	<Card id={p.id} card_title={p.title} card_description={p.description} card_image_link={p.img_link} card_image_alt={p.img_alt} />
{/each}
