<template >

  <el-scrollbar height="900px">
    <div id="building">
      <div id="title">

        <h1> 课题二 </h1>

        <h2> 基于知识图谱和病历的医学证据智能体构建 </h2>

        <el-button type="primary" style="margin-top: 40px;">
          <router-link  style="color: lavender; font-size: 200%; text-decoration:none;" to="/patient">
             ---开始使用---
          </router-link>
        </el-button>

      </div>
    </div>
  </el-scrollbar>
</template>

<script>

</script>

<style scoped>
#building{

  margin-top: 0%;
  background: url("../assets/001.png");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  /*background-color: #49733B;*/
}

#title{

  margin-top: 190px;
  text-align: center;
}

h1{

  font-size: 500%;
  color: lavender;

}
h2{

  margin-top: 100px;
  font-size: 400%;
  color: lavender;
}
h3{

  color: lavender;
  font-size: 200%;
}
p{

  font-size: 150%;
}

</style>