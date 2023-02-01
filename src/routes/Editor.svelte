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
import { createEventDispatcher } from 'svelte'

export let content = ''

const dispatch = createEventDispatcher<{
  change: {
    content: string
  }
}>()

let el: HTMLDivElement
let editor: monaco.editor.IStandaloneCodeEditor

onMount(() => {
  editor = monaco.editor.create(el, { language: 'javascript' })

  // editor의 내용이 바뀌면 이벤트 생성
  editor.onDidChangeModelContent(() => dispatch('change', { content: editor.getValue() }))
})

// content 속성이 바뀌면 editor에 적용
$: if (editor) editor.setValue(content)
</script>

<div class="editor" bind:this={el} />

<style lang="postcss">
.editor {
  width: 100%;
  height: 100%;
}
</style>
