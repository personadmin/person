// 写登陆的逻辑
// 把instance引进来
import instance from "../config/https";


// 登陆验证
function check(value){
    return instance.post('/admin/login',value)
}

export default {
    check
}



