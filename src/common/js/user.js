 export  const userMsg={
   computed:{
     user(){
       return JSON.parse(this.$store.state.user.token);
     }
   },
 }
