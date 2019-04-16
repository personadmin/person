<template>
<div>

        <el-container>
            <el-header id="header">
                <el-menu class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href=" " target="_blank">订单管理</a></el-menu-item>
                </el-menu></el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo "
                            :router="true"
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <!--<i class="el-icon-location"></i>-->
                                <span>员工管理</span>
                            </template>
                            <el-menu-item-group>
                                <!--<template slot="title">分组一</template>-->
                                <el-menu-item index="1-1">员工花名册</el-menu-item>
                                <el-menu-item index="1-2">员工关系</el-menu-item>
                                <el-menu-item index="1-3">员工档案</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <!--<i class="el-icon-location"></i>-->
                                <span>薪资管理</span>
                            </template>
                            <el-menu-item-group>
                                <!--<template slot="title">分组一</template>-->
                                <el-menu-item index="2-1">员工花名册</el-menu-item>
                                <el-menu-item index="2-2">员工关系</el-menu-item>
                                <el-menu-item index="2-3">员工档案</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <!--<i class="el-icon-location"></i>-->
                                <span>时间管理</span>
                            </template>
                            <el-menu-item-group>
                                <!--<template slot="title">分组一</template>-->
                                <el-menu-item index="3-1">员工花名册</el-menu-item>
                                <el-menu-item index="3-2">员工关系</el-menu-item>
                                <el-menu-item index="3-3">员工档案</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <!--<i class="el-icon-location"></i>-->
                                <span>招聘管理</span>
                            </template>
                            <el-menu-item-group>
                                <!--<template slot="title">分组一</template>-->
                                <el-menu-item index="4-1">员工花名册</el-menu-item>
                                <el-menu-item index="4-2">员工关系</el-menu-item>
                                <el-menu-item index="4-3">员工档案</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>


                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>


</div>
</template>

<script>
    export default {
        name: "mains"
    }
</script>

<style scoped>


</style>