<template>
    <div class="userInfo">
      <h3>个人信息</h3>
      &nbsp;&nbsp;&nbsp;&nbsp;姓名：<el-input style="width:70%;" v-model="user.nickname" :disabled="true"></el-input>
      &nbsp;&nbsp;&nbsp;&nbsp;号码：<el-input style="width:70%;margin-top: 30px;border: none;" v-model="user.phone" :disabled="true"></el-input>
    </div>
</template>

<script>
  import {userMsg} from "../../common/js/user";
    export default {
        name: "userInfo",
      data(){
          return{

          }
      },
   mixins:[userMsg]
    }
</script>

<style scoped>
.userInfo{
  height:400px;
  width:80%;
  margin-left: 10%;
  margin-top: 30px;
}
  h3{
  margin-left: 40%;
  }


</style>
