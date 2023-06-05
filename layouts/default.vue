<template>
    <div class="layout">
        <Header class="head" />
        <Menu class="side" />
        <div class="page">
            <slot />
        </div>
        <Status class="footer" />
    </div>
</template>

<style lang="scss" scoped>
.layout {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1.4fr minmax(0px, 15fr) 1fr;
    gap: 5px 3px;
    grid-template-areas:
        "side head"
        "side page"
        "footer footer";
    height: 100%;

    .side {
        grid-area: side;
    }

    .head {
        grid-area: head;
        min-height: 60px;
    }

    .page {
        grid-area: page;
        padding: 20px;
    }

    .footer {
        grid-area: footer;
    }
}
</style>