import instance from "../config/https";

function query(){
    return instance.get('/admin/category')
}

function insert(value) {
    return instance.post("/admin/category",value)
}
function update(value) {
    return instance.put("/admin/category",value)
}
function del(value){
    return instance.delete("/admin/category",{data:value})
}

function querylist() {
    return instance.get("/admin/category/list")
}



export default {
    query,insert,update,del,querylist
}
