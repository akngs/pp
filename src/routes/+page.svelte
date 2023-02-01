<script lang="ts">
import Editor from './Editor.svelte'

let value = 0
</script>

<div class="root">
  <button on:click={() => (value = Math.random())}>Change value</button>
  <Editor content={`let x = ${value};`} on:change={console.log} />
</div>

<style lang="postcss">
:global {
  & html,
  & body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
}

.root {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1rem;

  & button {
    height: 3rem;
  }
}
</style>
