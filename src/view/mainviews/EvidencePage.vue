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
        <h3 style="margin-top: 100px;
                   color: burlywood">
<!--          <router-link style="color: lavender;-->
<!--                            font-size: 120%;-->
<!--                            text-decoration:none;-->
<!--                            margin-top: 100px;-->
<!--                            text-align: center;"-->
<!--                       to="/patient/evidence">-->
<!--            多源肝病智能决策(肝病类型单源诊断)-->
<!--          </router-link>-->
          多源肝病智能决策(肝病类型单源诊断)
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

      <el-main>

        <h2 style="margin-top: 10px">

          基于检验检查的决策智能体

          <el-button type="success" round @click="getDecisionFromInspection()"> 执行决策 </el-button>
        </h2>

<!--        <el-table :data="tableData1" stripe style="width: 100%" >-->
<!--          <el-table-column prop="name" label="Name" width="200" />-->
<!--          <el-table-column prop="percentage" label="Percentage" width="200" />-->
<!--          <el-table-column prop="evidence" label="Evidence" width="200" />-->
<!--          <el-table-column prop="else" label="Else..." />-->
<!--        </el-table>-->
        <el-table :data="patientTable" stripe style="width: 100%" >
          <el-table-column
              :prop="index"
              :label="item"
              v-for="(item, index) in patientTableHeader"
              :key="index">

          </el-table-column>
        </el-table>

        <h2 style="margin-top: 70px">

          基于影像报告的决策智能体

          <el-button type="success" round @click="getDecisionFromImageReport()"> 执行决策 </el-button>
        </h2>
        <el-table :data="patientTable" stripe style="width: 100%" >
          <el-table-column
              :prop="index"
              :label="item"
              v-for="(item, index) in patientTableHeader"
              :key="index">

          </el-table-column>
        </el-table>

        <h2 style="margin-top: 70px">
          基于病历其他信息的决策智能体
          <el-button type="success" round @click="getDecisionFromMedicalRecords()"> 执行决策 </el-button>
        </h2>
        <el-table :data="patientTable" stripe style="width: 100%" >
          <el-table-column
              :prop="index"
              :label="item"
              v-for="(item, index) in patientTableHeader"
              :key="index">

          </el-table-column>
        </el-table>

      </el-main>

    </el-container>
  </div>
</template>

<script>
import axios from "axios";

export default {

  name: "EvidencePage",

  data() {

    return {

      user: {},
      // tableData1: [],
      patientTableHeader: {

        name: 'Name',
        percentage: 'Percentage',
        evidence: 'Evidence',
        else: 'Else'
      },
      patientTable : []
    }
  },

  methods:{
    getData(){

      const urlApi = "/api/user/info";
      axios.post(
          urlApi,
          {},
          {
                 headers:{
                   token: "666666"
                 },
          }
        )
          .then((res) => {

            if (res.data.code === 0){

              this.tableData1 = res.data.data;
              this.patientTable = res.data.data;
            }
          })
          .catch((err) => {
            console.log(err)})
      },

    getDecisionFromInspection(){

      const urlApi = "/api/doctor/getEvidence";
      const bah = "6071548";
      axios.post(
          urlApi,
          {"bah": bah, "code": 0},
      )
          .then((res) => {

            this.patientTable = res.data.data;
          })
          .catch((err) => {

            console.log(err)
          })

    },

    getDecisionFromImageReport(){

      const urlApi = "/api/doctor/getEvidence";
      const bah = "6071548";
      axios.post(
          urlApi,
          {"bah": bah, "code": 1},
      )
          .then((res) => {

            this.patientTable = res.data.data;
          })
          .catch((err) => {

            console.log(err)
          })

    },

    getDecisionFromMedicalRecords(){

      const urlApi = "/api/doctor/getEvidence";
      const bah = "6071548";
      axios.post(
          urlApi,
          {"bah": bah, "code": 2},
      )
          .then((res) => {

            this.patientTable = res.data.data;
          })
          .catch((err) => {

            console.log(err)
          })

    },

  },

};
</script>

<style scoped>
</style>