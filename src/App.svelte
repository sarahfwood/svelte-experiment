<script>
  import Nested from './Nested.svelte';
  export let name;
  let paragraphTest = `Test paragraph "Hello World"`
  let src = "images/placeholder.png";
  import Button from './Button.svelte'
</script>

<main>
  <h1>{name}</h1>
  <div>
    <p>Night Mode</p>
    <Button>
      Toggle
    </Button>
    <div>
      <img {src} alt="placeholder image" />
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
    transition: background-color 0.3s
  }

  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: rgba(37, 116, 169, 1);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  p {
    color: darkblue;
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  }

  img {
    height: 400px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>