import instance from "../config/https";

function resetPassword(value) {
    return instance.post("/admin/setting",value)
}

export default {
    resetPassword
}
