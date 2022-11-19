<template>
  <div class="common-layout">

    <el-container>

      <el-aside
          width="300px"
          style="background-color:#2d4976;
                 height: 1000px">
<!--          style="background-color:#2c3e50;-->
<!--                 height: 910px">-->

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
        <h3 style="margin-top: 100px;
                   color: burlywood">
          肝脏疾病诊疗方案生成和解释(诊疗方案生成)
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

      <el-main>
        <h2 style="margin-top: 10px"> 最终诊断结果 & 可能性列表 </h2>
        <el-table :data="tableData0" stripe style="width: 100%" >
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="percentage" label="Percentage" width="180" />
          <el-table-column prop="evidence" label="Evidence" width="180" />
          <el-table-column prop="else" label="Else..." />
        </el-table>

        <h2 style="margin-top: 100px"> 疾病对应的诊疗方案 </h2>
        <el-table :data="tableData1" stripe style="width: 100%" >
          <el-table-column prop="solution" label="Solution" width="180" />
          <el-table-column prop="treatment" label="Treatment" width="180" />
          <el-table-column prop="else" label="Else..." />
        </el-table>

        <h2 style="margin-top: 100px"> 循证医学证据 </h2>
        <el-table :data="tableData2" stripe style="width: 100%" >
          <el-table-column prop="evidence" label="Evidence" width="180" />
          <el-table-column prop="else" label="Else..." />
        </el-table>

      </el-main>

    </el-container>
  </div>
</template>

<script setup>
const tableData0 =[
  {
    name: "原发性肝细胞肝癌",
    percentage: 0.2,
    evidence: "Got"
  },
  {
    name: "药物性肝损伤",
    percentage: 0.3,
    evidence: "Got"
  },
  {
    name: "代谢相关脂肪性肝病",
    percentage: 0.8,
    evidence: "Got"
  },
]
const tableData1 = [

  {
    solution: "Got",
    treatment: "Got"
  },
]
const tableData2 = [

  {
    evidence:" Know Graph"
  },
]
</script>

<style scoped>
</style>