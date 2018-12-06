<template>
    <div class="footer">
      <el-row>
        <el-col :span="8"><el-button type="primary" :style="btnStyle" @click="send">发</el-button></el-col>
        <el-col :span="8"><el-button type="primary" :style="btnStyle" @click="res">收</el-button></el-col>
        <el-col :span="8"><el-button type="primary" :style="btnStyle" @click="useInfo">我</el-button></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "FooMain",
      data(){
          return{
            btnStyle:{
              'width':'80px',
              'margin-top':'20px',
              'margin-left':'22px'
            }
          }
      },
      methods:{
        send(){
          location.reload();
          this.$router.push({path:'/example/all'})
        },
        res(){
          location.reload();
          this.$router.push({path:'/example/res'})
        },
        useInfo(){
          location.reload();
          this.$router.push({path:'/example/user'})
        }
      }
    }
</script>

<style scoped>
.footer{
  height:80px;
  width:100%;
  margin-top: 28%;
  background-color: #304156;
}
  el-button{
    width:80px;margin-top: 20px;margin-left: 11px;
  }
</style>
