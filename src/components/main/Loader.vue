<template>
    <div class="spinner-container">
        <b-spinner type="grow" label="Loading..."></b-spinner>
    </div>
</template>

<script>
export default {
    name: "Loader"

}
</script>

<style>
.spinner-grow{
    color: var(--primary-base)
}
.spinner-container{
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>