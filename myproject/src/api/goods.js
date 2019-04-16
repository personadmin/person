import instance from "../config/https";

function insert(value) {
    return instance.post("/admin/goods",value);
}
function del(value) {
    return instance.delete("/upload",{data:value});
}
function query(limit, page) {
    return instance.get("/admin/goods", {params:limit, page});
}

export default {
    insert,del,query
}

