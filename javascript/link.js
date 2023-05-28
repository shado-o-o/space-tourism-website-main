new Vue({
    el:"#tag_close",
    data:{
      name1:"M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z",
      name2:"",
      dgree:1,
      show:"",
      
    },
    methods:{
      change:function(dgree){
        if(dgree==1){
           return this.name1='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z',
           this.name2='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z',
           this.show=" display:grid",
           this.dgree=2;

    
    
           }
        else if (dgree==2) {
           return this.name1='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z',
           this.name2="",
           this.show="display:none;",
           this.dgree=1;
          } 
     }
    }
  })
  