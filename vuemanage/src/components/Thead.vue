<template>
    <div class="Thead">
        <el-container>
            <el-header height="50px">
                <el-row>
                    <el-col :span="3">
                        <div class="btn" @click="CHANGECOLLAPSESTATUS">
                            <span class="el-icon-menu"></span>
                        </div>
                    </el-col>
                    <el-col :span="1" :offset="18">
                        <span class="el-icon-thumb user"></span>
                    </el-col>

                    <el-col :span="1">
                        <el-dropdown @command="handleCommand">
                            <div class="user">
                                admin
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="accountSetting">设置</el-dropdown-item>
                                <el-dropdown-item command="signOut">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-header>
            <el-main></el-main>
        </el-container>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Thead',
    props: {},
    methods: {
        handleCommand(command) {
            console.log(command)
        },
        ...mapMutations({ CHANGECOLLAPSESTATUS: 'changeCollapseStatus' })
    }
}
</script>

<style scoped lang="scss">
.Thead {
    flex: 1;
    overflow: hidden;
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 50px;
}
.btn {
    float: left;
    padding: 0 20px;
    cursor: pointer;
}
.user {
    cursor: pointer;
}
</style>
