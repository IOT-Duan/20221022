<template>
  <div class="common-layout">

    <el-container>

      <el-aside
          width="300px"
          style="background-color:#2d4976;
                 height: 1000px">
<!--          style="background-color:#2c3e50;-->
<!--                  height: 910px">-->

        <h3 style="margin-top: 100px">
          <router-link style="color: lavender;
                            font-size: 100%;
                            text-decoration:none;
                            margin-top: 100px;
                            text-align: center;"
                       to="/patient/information">
            病人信息查询
          </router-link>
        </h3>
        <h3 style="margin-top: 100px">
          <router-link style="color: lavender;
                            font-size: 100%;
                            text-decoration:none;
                            margin-top: 100px;
                            text-align: center;"
                       to="/patient/evidence">
            多源肝病智能决策(肝病类型单源诊断)
          </router-link>
        </h3>
        <h3 style="margin-top: 100px">
          <router-link style="color: lavender;
                            font-size: 100%;
                            text-decoration:none;
                            margin-top: 100px;
                            text-align: center;"
                       to="/patient/solution">
            肝脏疾病诊疗方案生成和解释(诊疗方案生成)
          </router-link>
        </h3>
        <h3 style="margin-top: 100px;
                   color: burlywood">
<!--          <router-link style="color: lavender;-->
<!--                            font-size: 120%;-->
<!--                            text-decoration:none;-->
<!--                            margin-top: 100px;-->
<!--                            text-align: center;"-->
<!--                       to="/patient/aboutus">-->
<!--            关于我们-->
<!--          </router-link>-->
          关于我们
        </h3>

      </el-aside>

      <el-main>
        <h1 style="margin-top: 200px">
          此项目用于课题二东南大学，进行科技部2030项目负责部分的展示。
        </h1>
      </el-main>

    </el-container>
  </div>
</template>

<script >
</script>

<style scoped>
</style>