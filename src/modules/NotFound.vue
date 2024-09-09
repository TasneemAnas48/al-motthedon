<template>
    <div id="no-permission" class="no-permission">
        <div
            class="d-flex align-items-center justify-content-center"
            style="margin: 50px 0px;flex-direction: column;color: var(--primary-base)"
        >
            <h2>Page Not Found</h2>
        </div>
        <Divider />
    </div>
</template>

<script>
import Divider from '@/components/main/Divider.vue';
export default {
    name: 'NotFound',
    components: {
        Divider
    },
};
</script>

<style lang="scss">
@import url(@/assets/Css/main.css);
</style>
