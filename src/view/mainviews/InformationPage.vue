<template>
  <el-scrollbar height="900px">
  <div class="common-layout">

    <el-container>

      <el-aside
          width="300px"
          style="background-color:#2d4976;
                 height: 1000px ">

        <h3 style="margin-top: 100px;
                   color: burlywood">
          病人信息查询
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

      <el-main style="margin-top: 10px">
          <h2>
            病人搜索
            <el-button type="success" round @click="getPatients()">
              搜索
            </el-button>
          </h2>
          <el-input
              v-model="input"
              placeholder="Please input bah "
              clearable
          />

        <h3 style="margin-top: 60px"> 基本信息 </h3>
        <el-table  :data="patientTable" stripe style="width: 100%">
          <el-table-column prop="patient_sn" label="Patient_sn" />
          <el-table-column prop="bah" label="Bah"  />
          <el-table-column prop="diagnosis" label="Diagnosis"/>
        </el-table>

          <h3 style="margin-top: 60px"> 基本信息 </h3>
          <el-table  stripe style="width: 100%">
            <el-table-column prop="name" label="IDcard" width="180" />
            <el-table-column prop="date" label="Name" width="180" />
            <el-table-column prop="date" label="Sexy" width="180" />
            <el-table-column prop="date" label="Birthday" width="180" />
            <el-table-column prop="date" label="Tel" width="180" />
            <el-table-column prop="date" label="Email" width="180" />
            <el-table-column prop="name" label="Else..." />
          </el-table>

          <h3 style="margin-top: 50px"> 检验检查 </h3>
          <el-table  stripe style="width: 100%" >
            <el-table-column prop="date" label="Name" width="180" />
            <el-table-column prop="name" label="Value" width="180" />
            <el-table-column prop="name" label="Unit" width="180" />
            <el-table-column prop="name" label="Time" width="180" />
            <el-table-column prop="name" label="Else1" width="180" />
            <el-table-column prop="name" label="Else2" width="180" />
            <el-table-column prop="address" label="Else3..." />
          </el-table>

          <h3 style="margin-top: 50px"> 影像与报告 </h3>
          <el-table  stripe style="width: 100%" >
            <el-table-column prop="date" label="Image" width="180" />
            <el-table-column prop="name" label="Report" width="180" />
            <el-table-column prop="address" label="Else..." />
          </el-table>

          <h3 style="margin-top: 50px"> 病历其他信息 </h3>
          <el-table  stripe style="width: 100%" >
            <el-table-column prop="date" label="现病史" width="180" />
            <el-table-column prop="name" label="过往史" width="180" />
            <el-table-column prop="name" label="过敏史" width="180" />
            <el-table-column prop="name" label="怀孕史" width="180" />
            <el-table-column prop="address" label="Else..." />
          </el-table>
      </el-main>

    </el-container>
  </div>
  </el-scrollbar>
</template>

<script>
import axios from "axios";

export default {

  name: "InformationPage",

  data() {

    return {

      user: {},
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

    getPatients(){

      const urlApi = "/api/doctor/getPatients";
      const token = "Southeast University";
      axios.post(
          urlApi,
          {"token": token},
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