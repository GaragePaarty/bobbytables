<script lang="ts">
	import { onMount } from 'svelte';
	import { ChatGPTClient } from './ChatGPTClient';

	let prompts = [
		'What are some fun garage party activities?',
		'What kind of music is best for a garage party?',
		'How can I decorate my garage for a party?'
	];

	let selectedPrompt = '';
	let response = '';

	// Generate a random prompt
	function getRandomPrompt() {
		const randomIndex = Math.floor(Math.random() * prompts.length);
		return prompts[randomIndex];
	}

	// Get ChatGPT response
	async function getChatGPTResponse(prompt: string) {
		const chatGPTClient = new ChatGPTClient();
		const result = await chatGPTClient.getCompletion(prompt);
		return result.message.content.trim();
	}

	// Fetch the response on page load
	onMount(async () => {
		selectedPrompt = getRandomPrompt();
		response = await getChatGPTResponse(selectedPrompt);
	});
</script>

<h2>{selectedPrompt}</h2>
<p>{response}</p>

<h1>Garage Paarty</h1>
<marquee><img alt="Garage Party" src="garage_party.png" /></marquee>
<p>
	Welcome to the best party of the year! We're throwing a garage paarty that you won't want to miss.
	Come hang out with us and enjoy some great music, drinks, and good times.
</p>
<p>
	Don't forget to invite your friends! The more, the merrier. We'll have plenty of room for
	everyone.
</p>
<p>When: Saturday, April 1st<br />Where: 1234 Elm Street<br />Time: 7:00 pm - 12:00 am</p>
<p>RSVP to let us know you're coming <a href="#">here</a>.</p>
