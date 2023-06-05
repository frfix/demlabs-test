<template>
    <button :class="disabled ? 'button--disabled' : 'button--enabled'" class="button" :disabled="disabled"
        @click="emit('onClick')">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps({
    disabled: Boolean
})
const emit = defineEmits(['onClick']);
</script>

<style lang="scss" scoped>
.button {
    display: inline-block;
    border-radius: 30px;
    padding: var(--distance-6);
    min-width: 140px;
    color: var(--text-white);
    font-family: Quicksand;
    box-shadow: 2px 2px 7px rgba(11, 10, 13, 0.44), inset 1px 1px 4px #F1E7FF;
    border-radius: 30px;
    border: 0px;
    font-size: var(--font-14);
    line-height: var(--distance-24);
}

.button--enabled {
    background: linear-gradient(230.15deg, #9580FF 0%, #A361FF 92.48%);
}

.button--disabled {
    background: var(--color-disabled);
}

.button:hover:enabled {
    cursor: pointer;
}
</style>