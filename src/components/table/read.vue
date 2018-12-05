<template>
    <div class="read">
      <div style="height:100%;width:100%;overflow: auto;border-bottom: 1px solid black;">
        <div v-for="(item,index) in list" :key="index">
          <span>{{item.content}}</span>
          <el-row style="height:40px;width:100%;border-bottom: 1px solid black" v-for="(info,index) in item.receivers" :key="index">
            <el-col :span="14"><div style="height:40px;width:100%;margin-top: -1px;border-right: 1px solid black;line-height: 40px;text-indent: 50px;">{{info.user&&info.user.nickname}}</div></el-col>
            <el-col :span="10"><div style="height:40px;width:100%;line-height: 40px;">{{isReaded(info.readed)}}</div></el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
  import { ReadType} from 'api/config';
  import timeGraphql from 'graph/time.graphql'
    export default {
        name: "read",
      data(){
          return{
             id:"",
            list:[],
          }
      },
      created(){
          this.id=this.$route.query.id;
      },
      apollo:{
        list: {
          query: timeGraphql.readedMSg,
          // update: data => data.MessageList.content,
          update:function (data) {
            const tmpArr = data.MessageList.content;
            const arr = tmpArr.map(item =>{
              const tmp = item.receivers.filter(info =>{
                return info.readed===true;
              });
              item.receivers = tmp;
              return item;
            })
            return arr;
          },
          variables(){
            return {
              qfilter: {
                key: "id",
                operator: "EQUEAL",
                value: this.id
              }
            }
          }
        },
      },
      methods:{
        gotoRead(){
          this.$router.push({path:'/example/read'})
        },
        isReaded(readed){
          return readed === ReadType.noRead ? '未读' : "已读";
        }
      }
    }
</script>

<style scoped>
.read{
  height:400px;
  width:80%;
  margin-left: 10%;
  margin-top: 30px;
  border: 1px solid black;
  overflow: auto;
}
textarea {
  resize: none;
  height:70px;
  width:100%;
  border-bottom: 1px solid black;
  font-size: 18px;
  overflow: auto;
}
.footer{
  height:60px;
  width:100%;
}
  span{
    display: inline-block;
    height:60px;
    width:100%;
    border-bottom: 1px solid black;
    line-height: 30px;
  }
</style>
