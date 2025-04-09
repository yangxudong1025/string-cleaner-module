<template>
  <div class="p-8 space-y-6">
    <textarea v-model="input" class="w-full p-4 border rounded" rows="5" />
    <select v-model="mode" class="border rounded p-2">
      <option value="compact">compact</option>
      <option value="slug">slug</option>
    </select>
    <div class="text-xl font-mono text-green-700">结果：{{ result }}</div>
  </div>
</template>

<script setup>
const { clean, presets } = useStringCleaner()

const input = ref('<b>Hello 🌟 世界</b> 👋')
const mode = ref('compact')

const result = computed(() => clean(input.value, presets[mode.value]))
</script>
