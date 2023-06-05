<template>
    <label class="radio" :for="option">
        <input type="radio" name="radio-input" :value="option" :id="option" v-on:input="updateValue($event.target.value)" />
        {{ option }}
    </label>
</template>

<script setup>
defineProps({
    option: String,
    modelValue: String
});
const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
    emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.radio {
    font-size: var(--font-16);
    font-weight: 300;
    display: flex;
    align-items: center;
    column-gap: var(--distance-16);

    input[type="radio"] {
        appearance: none;
        background: var(--block-background-color);
        box-shadow: 2px 2px 5px rgba(8, 7, 13, 0.42), inset 1px 1px 3px rgba(77, 85, 99, 0.52);
        margin: 0;
        font: inherit;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type="radio"]:checked {
        appearance: none;
        background: linear-gradient(90deg, #7930DE 0%, #7F65FF 100%);
        margin: 0;
        font: inherit;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type="radio"]:before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #717580;
    }

    input[type="radio"]:checked::before {
        background-color: #363A42;
    }

}
</style>