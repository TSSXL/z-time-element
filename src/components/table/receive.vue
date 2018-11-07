<template>
    <div class="receive">
    <div class="content" v-for="item in content">
      <textarea v-model="item.content"></textarea>
       <h3>发送人：{{item.sendUser.name}}</h3>
        <el-button type="primary" style="margin-left: 70%;margin-top: 5px;" v-for="info in item.receivers"  @click="changeStatus(item.id,info.user.id)" :key="info in item.receivers">确认</el-button>
    </div>
    </div>
</template>

<script>
  import {receiveMessage,ReadStatus} from "../../api/time";

  export default {
        data(){
          return{
            content:[],
            userId:2
          }
        },
    created(){
       this._getReceiveMsg(this.userId);
    },
    methods:{
          _getReceiveMsg(userId){
           receiveMessage(userId).then((ops)=>{
           this.content=ops;
           })
      },
      callback(text) {
        this.$message.success(text);
      },
      changeStatus(id,userId){
        ReadStatus(parseInt(id),parseInt(userId)).then(()=>{
          this.callback("您已阅读");
        });
      }
    }
    }
</script>

<style scoped>
textarea{
  height: 20%;
  width: 62%;
  margin-left:25%;
  border: 0.5px solid black;
  margin-top: 10%;
  border-radius: 5px;
  resize: none;
}
  h3{
    margin-left: 25%;
    position: absolute;
  }
</style>
