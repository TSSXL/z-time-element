<template>
  <div class="post">
    <textarea v-model="msg"></textarea>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" style="margin-left:9%;">
      <el-checkbox v-for="item in list.content"  :label="item.nickname" :key="item.nickname" style="margin-left: 49px;"
                   @change="handleCheck(item)" ></el-checkbox>
    </el-checkbox-group>
    <el-button type="primary" style="margin-left:42%;margin-top: 10px;" @click="btn">发送</el-button>
    <div class="aDiv" v-for="item in contentList.content">
      <div class="left">
        <p>{{item.content}}</p>
      </div>
      <div class="right" v-for="info in item.receivers">
          <h3 style="font-size: 14px;display: inline-block;">{{info.user&&info.user.nickname}}</h3>
          <el-button  type="text" style="margin-left: 5px;text-indent: 5px;" >{{ Status(info.readed)}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {ERR_OK, ReadType} from 'api/config';
  import timeGraphql from 'graph/time.graphql';

  export default {
    data() {
      return {
        tmp:[],
        msg: "",
        content:[],
        list: [],
        checkedCities: [],
        contentList: [],
        page: 0,
        size:50,
        message: {
          content: "",
          title:"",
          receivers: [
            {
              user: {}
            }
          ],
          sendUser: {
            id:  "Aqb8ew5uHy6V4TORX93Uw1U01"
            // 这是小A
          }
        }
      }
    },
    apollo:{
      list: {
        query: timeGraphql.UserList,
        update: data => data.UserList,
        variables(){
          return {
            user:{
              page:this.page,
              size:this.size
            }
          }
        }
      },
      contentList:{
        query: timeGraphql.messageList,
        update: data => data.MessageList,
        variables(){
          return {
            messageList:{
              page:this.page,
              size:this.size
            },
            b:{
              key: "sendUser.id",
              operator: "EQUEAL",
              value: "Aqb8ew5uHy6V4TORX93Uw1U01"
            }
          }
        }
      }
    },
    methods: {
      handleCheck(item,index) {
        if(item.id===this.message.sendUser.id)
        {
          this.callback("您不能发送给自己");
        }else{
         this.tmp.push({
           user:{id:item.id}
         })
        }
      },
      Status(readed){
        return readed === ReadType.noRead ? '未读' : "已读";
      },
      callback(text) {
        this.$message.success(text);
        setTimeout(()=>{
          this.$apollo.queries.contentList.refetch();
        },100)
      },
      btn() {
        this.message.content = this.msg;
        this.message.receivers=this.tmp;
        this.addTag();
        this.checkedCities=[];
      },
      addTag(){
        this.$apollo.mutate({
          mutation: timeGraphql.sendMessage,
          variables:{
            message:this.message
          },
        });
        this.callback("添加成功");
        this.message={};
        this.msg="";
      }
    }
  }
</script>

<style scoped>
  textarea {
    resize: none;
    height: 20%;
    width: 62%;
    margin-left: 20%;
    margin-top: 10%;
    border-radius: 5px;
    font-size: 16px;
  }

  el-checkbox {
    height: 50px;
    width: 50px;
  }

  .aDiv {
    height: 60px;
    width: 70%;
    margin-left: 16.5%;
    margin-top: 5%;
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
  }

  .left {
    height: 100%;
    width: 60%;
    position: absolute;
    border-right: 1px solid black;
    word-break:break-all;
    overflow: auto;
  }

  .right {
    height: 30%;
    width: 40%;
    margin-left: 62%;
    margin-top: -2px;
  }
</style>
