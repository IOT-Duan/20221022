<template>
  <el-scrollbar height="900px">
    <div class="common-layout">

      <el-container style="margin-top: 0;">

        <el-aside 
            width="300px" 
            style="background-color: #2d4976;
                   height: 1200px">

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
          <h3 style="margin-top: 100px">
          <router-link style="color: lavender;
                            font-size: 100%;
                            text-decoration:none;
                            margin-top: 100px;
                            text-align: center;"
                       to="/patient/aboutus">
            关于我们
          </router-link>
          </h3>

        </el-aside>

        <el-main style="padding: 0;">
        </el-main>

      </el-container>
    </div>
  </el-scrollbar>
</template>

<script >
</script>

<style scoped>
</style>