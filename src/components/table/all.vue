<template>
    <div class="first">
      <div style="height: 100%;width:100%;overflow: auto;border: 1px solid black;">
        <el-row style="height:60px;width:100%;border-bottom: 1px solid black;" v-for="(item,index) in list"  :key="index" >
          <el-col :span="12"><div style="width:150px;height:60px;border-right:1px solid black;font-size: 14px;overflow: auto">{{format(item.content)}}</div></el-col>
          <el-col :span="12">
            <el-badge :value="readedCount(item.receivers)"  style="margin-left: 15px;margin-top: 10px;">
              <el-button size="small" type="primary" @click="gotoRead(item)">已读</el-button>
            </el-badge>
            <el-badge :value="noReadCount(item.receivers)" style="margin-left: 80px;margin-top: -47px;">
              <el-button size="small" type="warning" @click="gotoNoRead(item)">未读</el-button>
            </el-badge>
          </el-col>
        </el-row>
      </div>
       <el-button type="primary" style="margin-top: 7%;margin-left: 30%;" @click="edit">编辑新消息</el-button>
    </div>
</template>

<script>
  import timeGraphql from 'graph/time.graphql'
  import {userMsg} from "../../common/js/user";

  export default {
        data(){
          return {
            list: [],
            a:""
          }
        },
    mixins:[userMsg],
      apollo:{
        list: {
          query: timeGraphql.messageList,
          update:function(data){
            const arr=data.MessageList.content;
            // const  compare=function (obj1,obj2) {
            //   let val1=parseInt(obj1.title);
            //   let val2=parseInt(obj2.title);
            //   if (val1>val2) {
            //     return -1;
            //   }else if (val1<val2){
            //     return 1;
            //   }else {
            //     return 0
            //   }
            // }
            // return arr.sort(compare)
            return arr.reverse();
          },
          variables(){
            return {
              qfilter:{
                key: "sendUser.id",
                operator: "EQUEAL",
                value: this.user.id
              }
            }
          }
        }
      },
      methods:{
          format(content){
            return content=content.substring(0,20)
          },
          edit(){
            this.$router.push({path:'/example/edit'})
          },
        gotoRead(item){
          this.$router.push({path:'/example/read',query:{id:item.id}})
        },
        gotoNoRead(item){
          this.$router.push({path:'/example/noRead',query:{id:item.id}})
        },
        readedCount(item){
            return item.reduce(function(total,item){ return (item.readed==true?1:0)+total},0);
        },
        noReadCount(item){
          return item.reduce(function(total,item){ return (item.readed==false?1:0)+total},0);
        }
      }
    }
</script>

<style scoped>
.first{
  height:400px;
  width:80%;
  margin-left: 10%;
  margin-top: 30px;
}
</style>
