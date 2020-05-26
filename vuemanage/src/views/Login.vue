<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-dynamic">
            <el-form-item label="账号" prop="user">
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                <el-button @click="registForm('ruleForm')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import { login, regist } from '@/api/login.js'
export default {
    data() {
        return {
            ruleForm: {
                user: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    login(this.ruleForm)
                        .then(res => {
                            console.log(res)
                            this.$tips({
                                message: res.message,
                                type: 'success'
                            })
                            this.$router.push('/home')
                        })
                        .catch(error => {
                            this.$tips({
                                message: error.message,
                                type: 'error'
                            })
                        })
                } else {
                    return false
                }
            })
        },
        registForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    regist(this.ruleForm)
                        .then(res => {
                            this.$tips({
                                mseeage: res.message
                            })
                            this.$router.push('/home')
                        })
                        .catch(error => {
                            this.$tips({
                                message: error.message,
                                type: 'error'
                            })
                        })
                } else {
                    return false
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0dfdf;
}
.demo-dynamic {
    width: 500px;
    background: #ccc;
    padding: 40px 20px 20px;
    border-radius: 20px;
}
</style>