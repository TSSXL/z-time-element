<template>
    <div class="receive">
    <div class="content" v-for="item in content">
      <textarea v-model="item.content"></textarea>
       <h3>发送人：{{item.sendUser.name}}</h3>
        <el-button type="primary" style="margin-left: 40%;margin-bottom: 10px;" v-for="info in item.receivers"  @click="changeStatus(item.id,info.user.id)">确认</el-button>
    </div>
    </div>
</template>

<script>
  import {receiveMessage,ReadStatus} from "../../api/time";

  export default {
        data(){
          return{
            content:[],
            userId:1
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
  width:60%;
  height:60px;
  margin-left:25%;
  border: 2px solid black;
  margin-top: 10%;
  resize: none;
}
  h3{
    margin-left: 25%;
  }
</style>
