<template>
    <div class="msg">
      <div style="height:100%;width:100%;" v-for="(item,index) in list.content">
        <div style="height:70%;width:100%;overflow: auto;font-size: 24px;">
          {{item.content}}
        </div>
        <el-button type="primary" style="margin-top: 22%;margin-left: 35%;" @click="readed(item.id)">确认</el-button>
      </div>

    </div>
</template>

<script>
  import timeGraphql from 'graph/time.graphql';
  import {userMsg} from "../../common/js/user";
    export default {
      created(){
        this.id=this.$route.query.id;
      },
      mixins:[userMsg],
      data(){
          return{
            list:{},
            content:[],
            id:"",
            userId:"Aqb8ew5uHy6V4TORX93Uw1U01"
          }
      },
      apollo:{
        list: {
          query: timeGraphql.msg,
          update: data => data.MessageList,
          variables(){
            return {
              qfilter:{
                key: "id",
                operator: "EQUEAL",
                value: this.id,
                combinator: "AND",
                next: {
                  key: "receivers.user.id",
                  operator: "EQUEAL",
                  value: this.user.id
                }
              }
            }
          }
        },
      },
      methods:{
        callback(text) {
          this.$message.success(text);
        },
          readed(messageId){
            this.$apollo.mutate({
              mutation: timeGraphql.changeReaded,
              variables:{
                   messageId:messageId.toString(),
                   userId:this.user.id

              },
            });
            this.callback("您已阅读");
            location.reload();
            this.$router.push({path:'/example/res'})
          }
      }
    }
</script>

<style scoped>
.msg{
  height:400px;
  width:80%;
  margin-left: 10%;
  margin-top: 30px;
  border: 1px solid black;
}
</style>
