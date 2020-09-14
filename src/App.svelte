<script>
  import Nested from './Nested.svelte';
	export let name;
  let paragraphTest = `Test paragraph "Hello World"`
  let src = "images/placeholder.png";
</script>

<main>
	<p>This is a paragraph</p>
  <h1>hello</h1>
  <img {src} alt="placeholder image">
  <p>{@html paragraphTest}</p>
  <Nested/>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

  p {
    color: blue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>