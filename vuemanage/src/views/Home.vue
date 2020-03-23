<template>
    <div class="home">
        <Menu />
        <Thead />
    </div>
</template>

<script>
// @ is an alias to /src
import Thead from '@/components/Thead.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'Home',
    components: {
        Thead,
        Menu
    }
}
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
}
</style>
