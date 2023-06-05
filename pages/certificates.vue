<template>
    <div class="certificates">
        <div class="certificate-container">
            <div class="certificates-header"><label>Certificates</label></div>
            <div class="cerificates-sunheader"><span>Public</span></div>
            <div class="certificates-list">
                <div v-for="certificate of certificates" :key="certificate" class="certificate-item">
                    <span>{{ certificate }}</span>
                </div>
            </div>
        </div>
        <div class="filter">
            <label class="label">Filter</label>
            <BaseRadioButtonGroup :options="filterOptions" />
        </div>
        <div class="actions">
            <label class="label">Actions</label>
            <div class="action-list">
                <BaseButton class="action-button" @onClick="createCertificate">Create certificate</BaseButton>
                <BaseButton class="action-button" @onClick="importCertificate">Import certificate</BaseButton>
                <BaseButton class="action-button" disabled>Export private certificate to public</BaseButton>
                <BaseButton class="action-button" disabled>Export certificate to mempool</BaseButton>
                <BaseButton class="action-button" disabled>Delete certificate</BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const createCertificate = () => {
    console.log('certificate created')
}
const importCertificate = () => {
    console.log('certificate imported')
}

const filterOptions = ['Public certificates', 'Private certificates', 'Both'];

const certificates = ['core-t.0', 'core-t.1', 'core-t.2', 'test.test.1', 'test.test.2', 'test.test.3', 'test.test.4', 'test.test.5', 'test.test.6', 'test.test.7']
</script>

<style lang="scss" scoped>
.certificates {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 2fr;
    gap: 40px;
    grid-auto-flow: row;
    grid-template-areas:
        "certificate-list filter"
        "certificate-list actions";
    height: 100%;

    .label {
        display: inline-block;
        margin-bottom: var(--distance-24);
        font-size: var(--font-14);
        font-weight: 700;
    }

    .certificate-container {
        grid-area: certificate-list;
        box-shadow: 1px 1px 0px 0px #6B667E7D, 3px 3px 5px 0px #08070D40 inset;
        border-radius: 12px;
        background-color: #363A42;

        .certificates-header {
            padding: var(--distance-12) 0px var(--distance-12) var(--distance-16);
            font-weight: 700;
            font-size: var(--font-14);
        }

        .cerificates-sunheader {
            padding: var(--distance-8) 0px var(--distance-8) var(--distance-16);
            font-size: 12px;
            background-color: #2E3138;
        }

        .certificate-item {
            padding: 14px 0 14px 0;
            font-weight: 300;

            &:not(:last-child) {
                border-bottom: 1px solid #2E3138;
            }
        }

        .certificates-list {
            padding: 0 var(--distance-16) 0 var(--distance-16);
        }
    }

    .filter {
        grid-area: filter;
        padding: 8px 0px 0px 1px
    }

    .actions {
        grid-area: actions;

        .action-button {
            height: 36px;
            width: 95%;
            max-width: 335px;
            margin-bottom: 20px;
        }
    }
}
</style>

