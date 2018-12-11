<template>
    <div class="edit">
      <textarea v-model="msg" placeholder="请输入信息"></textarea>
      <div class="select" style="height:72%;width:100%;overflow:auto;">
       <div class="people" style="height:22%;width:100%;margin-top: -4px;border-bottom: 1px solid black" v-for="item in list">
         <el-checkbox  size="medium" style="margin-left: 40%;margin-top: 15px;" @change="handle(item)">{{item.nickname}}</el-checkbox>
       </div>
      </div>
      <el-button type="primary" style="margin-top:7%;margin-left: 37%;" @click="confime">提交</el-button>
    </div>
</template>

<script>
  import timeGraphql from 'graph/time.graphql'
  import {userMsg} from "../../common/js/user";
    export default {
        name: "edit",
      data(){
          return{
            title:"",
            msg:"",
            list:[],
            tmp:[],
            message: {
             title:"",
              content: "",
              receivers: [
                {
                  user: {}
                }
              ],
              sendUser: {
                id:  ""
              }
            }
          }
      },
      mixins:[userMsg],
      apollo:{
        list: {
          query: timeGraphql.userList,
           update: data => data.UserList.content,
        },
      },
      created(){
        this.message.sendUser.id=this.user.id;
      },
      methods:{
        callback(text) {
          this.$message.success(text);
        },
        handle(item) {
          if(item.id===this.message.sendUser.id)
          {
            this.callback("您不能发送给自己");
          }else{
            this.tmp.push({
              user:{id:item.id}
            })
          }
        },
        confime(){
          this.message.content = this.msg;
          this.message.receivers=this.tmp;
          this.message.title=Date.parse(new Date());
          this.addTag();

        },
        addTag(){
          this.$apollo.mutate({
            mutation: timeGraphql.sendMessage,
            variables:{
              message:this.message
            },
          });
          this.callback("发送成功");
          location.reload();
          this.$router.push({path:'/example/all'});
          this.message={};
          this.msg="";
        }
      }
    }
</script>

<style scoped>
.edit{
  height:400px;
  width:80%;
  margin-left: 10%;
  margin-top: 30px;
  border: 1px solid black;
}
textarea {
  resize: none;
  height:105px;
  width:100%;
  border-bottom: 1px solid black;
  font-size: 18px;
  overflow: auto;
}
</style>
