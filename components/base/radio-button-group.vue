<template>
    <div class="radio-button-group">
        <BaseRadioButton v-for="option in options" :option="option" :key="option" :modelValue="modelValue"
            v-on:update:modelValue="updateValue" />
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';

defineProps({
    options: Array as PropType<Array<string>>,
    modelValue: String
})
const emit = defineEmits(['update:modelValue'])

function updateValue(value: string) {
    emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.radio-button-group {
    display: flex;
    flex-direction: column;

    label:not(:last-child) {
        margin-bottom: var(--distance-32);
    }
}
</style>