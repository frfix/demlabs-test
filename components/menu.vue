<template>
    <div class="menu">
        <div class="logo">
            <LogoDashboard />
        </div>
        <ul>
            <li>
                <NuxtLink class="menu-item" to="/wallet">
                    <WalletIcon /> <span>Wallet</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/dex">
                    <DexIcon /> <span>DEX</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/tx-explorer">
                    <TxExplorerIcon /> <span>TX explorer</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/certificates">
                    <CertificatesIcon /> <span>Certificates</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/tokens">
                    <TokensIcon /> <span>Tokens</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/vpn-client">
                    <VpnClientIcon /> <span>VPN client</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/vpn-services">
                    <VpnServiceIcon /> <span>VPN service</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/console">
                    <ConsoleIcon /> <span>Console</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/logs">
                    <LogsIcon /> <span>Logs</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/settings">
                    <SettingsIcon /><span>Settings</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="menu-item" to="/dapps">
                    <DAppsIcon /> <span>dApps</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import WalletIcon from '../assets/svg/Wallet.svg?component'
import DAppsIcon from '../assets/svg/DApps.svg?component'
import DexIcon from '../assets/svg/Dex.svg?component'
import CertificatesIcon from '../assets/svg/Certificates.svg?component'
import ConsoleIcon from '../assets/svg/Console.svg?component'
import LogsIcon from '../assets/svg/Logs.svg?component'
import SettingsIcon from '../assets/svg/Settings.svg?component'
import TokensIcon from '../assets/svg/Tokens.svg?component'
import TxExplorerIcon from '../assets/svg/TxExplorer.svg?component'
import VpnClientIcon from '../assets/svg/VpnClient.svg?component'
import VpnServiceIcon from '../assets/svg/VpnService.svg?component'
import LogoDashboard from '../assets/svg/LogoDashboard.svg?component';
</script>

<style lang="scss" scoped>
.menu {
    box-shadow: 5px 5px 10px 0px #08070D6B, 1px 1px 0px 0px #524D64 inset;
    border-radius: 0px 0px var(--distance-16) 0px;
    padding-right: 10px;
    padding-left: 1px;
    font-size: 13px;
    background-color: var(--block-background-color);

    a.router-link-active {
        box-shadow: 1px 1px 0px 0px #6B667E7D, 3px 3px 5px 0px #08070D40 inset;
    }

    .logo {
        display: flex;
        padding: 6px 0px 4px 9px;
        align-items: center;
        column-gap: var(--distance-8);
        font-size: 15px;
    }

    a {
        text-decoration: none;
    }

    .menu-item {
        color: white;
        text-decoration: none;
        padding: 14px 0px 14px var(--distance-24);
        display: flex;
        align-items: center;
        column-gap: var(--distance-16);
        background-color: #2E3138;
        border-radius: 0px var(--distance-16) var(--distance-16) 0px;
        font-weight: 300;
    }
}
</style>