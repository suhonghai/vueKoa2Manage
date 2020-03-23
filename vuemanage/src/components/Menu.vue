<template>
    <div class="menu">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu :index="String(index+1)" v-for="(a,index) in 8" :key="index">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航{{index+1}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="index+1 + '-1'">
                        <span>选项1</span>
                    </el-menu-item>
                    <el-menu-item :index="index+1 + '-2'">
                        <span>选项2</span>
                    </el-menu-item>
                    <el-menu-item :index="index+1 + '-3'">
                        <span>选项3</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Menu',
    data() {
        return {}
    },
    computed: {
        ...mapState(['isCollapse'])
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style scoped lang="scss" scoped>
.menu {
    height: 100%;
    background: #545c64;
    overflow: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
.el-menu-vertical-demo {
    height: 100%;
}
</style>
