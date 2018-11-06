<template>
  <div class="post">
    <textarea v-model="msg"></textarea>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" style="margin-left:9%;">
      <el-checkbox v-for="item in list" :label="item.name" :key="item.name" style="margin-left: 45px;"
                   @change="handleCheck(item)"></el-checkbox>
    </el-checkbox-group>
    <el-button type="primary" style="margin-left: 25%;margin-top: 5%;" @click="add">新增人员</el-button>
    <el-button type="primary" style="margin-left: 2%;margin-top: 5%;" @click="btn">发送</el-button>
    <div class="aDiv" v-for="item in contentList">
      <div class="left">
        <p>{{item.content}}</p>
      </div>
      <div class="right" v-for="info in item.receivers">
        <h3 style="position: absolute;margin-top: 31%;margin-left: 4px;">{{info.user.name}}</h3>
        <el-button type="text" style="margin-left: 43px;margin-top: 22%;font-size: 20px;font-weight: bolder">{{ Status(info.readed)}}</el-button>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%">
      <el-form v-model="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="dialogVisible = false" style="margin-left: 20%;">取 消</el-button>
      <el-button type="primary" @click="dialogConfime()">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
  import {ERR_OK, ReadType} from 'api/config';
  import {getUserList, sendMessage, addUser,userMessage} from "../../api/time";

  export default {
    data() {
      return {
        msg: "",
        dialogVisible: false,
        list: [],
        checkedCities: [],
        contentList: [],
        page: 0,
        message: {
          content: "",
          receivers: [
            {
              readed: false,
              user: {}
            }
          ],
          sendUser: {
            id: 1,
            name: "aaa",
            phone: "123"
          }
        },
        form: {},
        user: {
          id: "",
          name: "",
          phone: ""
        },
          userId:1,
      }
    },
    created() {
      this._getUserList(this.page);
      this._getUserMsgList(this.userId);
    },
    methods: {
      _getUserList(page) {
        getUserList(page).then((ops) => {
          this.list = ops.content;
        })
      },
      _getUserMsgList(userId){
      userMessage(userId).then((ops)=>{
      this.contentList=ops;
      })
      },
      handleCheck(item) {
        this.user.id = item.id;
        this.user.name = item.name;
        this.user.phone = item.phone;
      },
      Status(readed){
        return readed === ReadType.noRead ? '未读' : "已读";
      },
      callback(text) {
        this.$message.success(text);
      },
      btn() {
        this.message.content = this.msg;
        this.message.receivers[0].user=this.user;
        sendMessage(this.message).then(() => {
          this.callback("发送成功");
          this.msg="";
        })
      },
      add() {
        this.dialogVisible = true;
        this.form = {};
      },
      dialogConfime() {
        this.dialogVisible = false;
        addUser(this.form).then(() => {
          this.callback("添加成功")
        })
        this._getUserList(this.page);
      }
    }
  }
</script>

<style scoped>
  textarea {
    resize: none;
    height: 20%;
    width: 62%;
    border: 2px solid black;
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
    height: 100px;
    width: 70%;
    margin-left: 15%;
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
  }

  .right {
    height: 100%;
    width: 40%;
    margin-left: 60%;
    position: absolute;
  }
</style>
