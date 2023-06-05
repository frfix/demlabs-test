<template>
    <ul class="status">
        <li v-for="statusItem of statusItems" :key="statusItem.caption" class="status-item">
            <span>{{ statusItem.caption }}</span>
            <OnlineIcon :class="statusItem.isOnline ? 'icon--online' : 'icon--offline'" />
        </li>
    </ul>
</template>
<script setup lang="ts">
import OnlineIcon from '../assets/svg/Online.svg?component'

const statusItems = [{ caption: 'Cellnet', isOnline: true }, { caption: 'Mainnet', isOnline: true }, { caption: 'Somenet', isOnline: true }, { caption: 'Testnet', isOnline: true }]
</script>

<style lang="scss" scoped>
.status {
    box-shadow: 5px 5px 10px 0px #08070D6B, 1px 1px 0px 0px #524D64 inset;
    filter: drop-shadow(5px 5px 10px rgba(8, 7, 13, 0.42));
    background-color: #2D3037;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    .status-item {
        padding: 12px 117px 12px 117px;
        display: flex;
        align-items: baseline;
        column-gap: var(--distance-8);
        font-weight: 300;

        svg {
            width: var(--distance-8);
            height: var(--distance-8);
        }

        svg.icon--offline {
            fill: red;
        }

        svg.icon--online {
            fill: #8ECC00;
        }
    }
}
</style>