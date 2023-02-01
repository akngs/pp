<script context="module" lang="ts">
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

window.MonacoEnvironment = {
  getWorker: function (_, label) {
    switch (label) {
      case 'typescript':
      case 'javascript':
        return new tsWorker()
      default:
        return new editorWorker()
    }
  },
}
</script>

<script lang="ts">
import * as monaco from 'monaco-editor'
import { onMount } from 'svelte'

let editorEl: HTMLDivElement
let editor: monaco.editor.IStandaloneCodeEditor

onMount(() => {
  editor = monaco.editor.create(editorEl, {
    value: "function hello() {\n\talert('Hello world!');\n}",
    language: 'javascript',
  })

  console.log(editor)
})
</script>

<div class="editor" bind:this={editorEl} />

<style lang="postcss">
:global {
  & html,
  & body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
}

.editor {
  width: 100%;
  height: 100%;
}
</style>
