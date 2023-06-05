<template>
    <div class="search-input">
        <SearchIcon /><input type="text" placeholder="Search" class="text-input">
    </div>
</template>

<script setup>
import SearchIcon from '../../assets/svg/Search.svg'
</script>

<style lang="scss" scoped>
.search-input {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #393B41;
    width: 225px;
    column-gap: var(--distance-10);

    input[type="text"] {
        padding: var(--distance-6);
        background-color: inherit;
        color: #757184;
        font-family: Quicksand;
        font-size: var(--font-16);
        border: none;
        outline: none;
    }
}
</style>