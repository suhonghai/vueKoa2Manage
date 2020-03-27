<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-dynamic">
            <el-form-item label="账号" prop="user">
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import { login } from '@/api/login.js'
export default {
    data() {
        return {
            ruleForm: {
                user: '',
                pass: ''
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    login(this.ruleForm)
                } else {
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
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