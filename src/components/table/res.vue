<template>
    <div class="res">
      <div style="height:100%;width:100%;overflow: auto;border-bottom: 1px solid black">
        <div v-for="item in list">
           <div style="width:160px;height:68px;border-right:1px solid black;font-size: 14px;line-height: 30px;overflow: auto;border-bottom: 1px solid black">
             {{format(item.content)}}<br>发送人：{{item.sendUser&&item.sendUser.nickname}}
           </div>
              <div style="height:60px;width:180px;margin-top: -60px;margin-left: 150px;border-bottom: 1px solid black">
                <el-button  type="primary" style="margin:10px 40px;" @click="goMsg(item)">{{Status(item.receivers)}}</el-button>
              </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {ReadType} from 'api/config';
  import timeGraphql from 'graph/time.graphql'
  import {userMsg} from "../../common/js/user";

  export default {
        name: "res",
      data(){
          return{
          list:[],
          }
      },
    mixins:[userMsg],
      apollo:{
        list: {
          query: timeGraphql.RemessageList,
          // update: data => data.MessageList.content,
          update:function(data){
            const tmpArr=data.MessageList.content;
            const arr=tmpArr.map(item=>{
             const tmp=item.receivers.filter(info=>{
               return info.user.id===this.user.id;
             })
              item.receivers=tmp;
             return item;
            })
            return arr;
          },
          variables(){
            return {
              qfilter:{
                key: "receivers.user.id",
                operator: "EQUEAL",
                value: this.user.id
              }
            }
          }
        },
      },
      methods:{
        format(content){
          return content=content.substring(0,20)
        },
        Status(item){
           return item[0].readed===ReadType.noRead?'未读':'已读';
        },
        goMsg(item){
           this.$router.push({path:'/example/msg',query:{id:item.id}});
        }
      }
    }
</script>

<style scoped>
.res{
  height:400px;
  width:80%;
  margin-left: 10%;
  margin-top: 30px;
  border: 1px solid black;
  overflow: auto;
}
</style>
