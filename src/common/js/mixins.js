import {getToken,setToken,removeToken} from "./auth";

export const user={
  data(){
    return {
      msg:"aaa",
    }
  },
  created(){
   this._getToken();
  },
  destoryed(){
    removeToken();
  },
  methods:{
    _getToken(){
      return getToken();
    },
    saveUserMessage(token){
      setToken(token);
    }
  }
}
