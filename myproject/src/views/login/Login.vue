<template>
    <div id="app" class="app">
        <div class="formbox">
            <h2>请使用密码登陆</h2>
    <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username" >
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button class="btn" type="primary" @click="onSubmit('form')">登陆</el-button>
        </el-form-item>
    </el-form>
        </div>
    </div>
</template>

<script>
    import Login from '../../api/login'
    export default {
        // name:"login",
        data() {
            return {
                form: {
                    username: '',
                    password:'',
                },
                rules:{
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate((valid)=>{
                    if(valid){
                        Login.check(this.form).then(res=>{
                            if (res.data.code==0){
                                this.$message({
                                    message: '登陆成功',
                                    type: 'success'
                                });
                                this.$router.push("/mains")
                            }else{
                                this.$message.error('登陆失败');
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .app{
        width:100%;
        height: 100%;
        background: url("1.png") center/cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    .formbox{
        width: 45%;
        height: 50%;;
        border-radius: 12px;
        background: #fff;
        padding: 30px 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    h2{
        font-size: 30px;
        color: #53BEBD;
        margin-bottom: 20px;
        font-weight: bold;
        text-align: center;
    }
    .btn{
        width: 100%;
        background: #53BEBD;
        color: #fff;
        font-size: 14px;
        border: none !important;
    }



</style>