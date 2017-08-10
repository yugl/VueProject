<template>
    <div class="y-login">
        <div>
            <el-form label-position="left" label-width="80px" :model="formlogin">  
                <el-form-item label="用户名">
                    <el-input placeholder="请输入用户名..." v-model="formlogin.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="请输入密码..." type="password" v-model="formlogin.pwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="Login">登 录</el-button> 
                </el-form-item> 
            </el-form> 
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formlogin: {
                    name: '',
                    pwd: '' 
                } 
            }
        }, 
        methods:{
            Login() {
                this.$router.push({ path: 'Index' }) 
            }
        }
    }
</script> 
<style type="text/css">
    #app{
        height: 100%;
    }
    .y-login{  
        height: 100%;  
        display: table;  
        margin: 0 auto;
    }  
    .y-login > div{  
        vertical-align:middle;  
        display:table-cell;    
        width:400px;  
    }
    .y-login form{
        padding: 30px 40px 10px 40px;
        background-color: #d1dbda;
    }
    .y-login .el-form-item__label{
        font-size: 16px;
    }
    .y-login .el-button--danger{
        background-color: #a2b332;
        border-color: #a2b332;
    }
</style>