<template>
	<div class="list">
		
    <div class="home_head">	
		<heads></heads>
	</div>
	<img src="../img/ww.jpg">
	<p>作者ID：{{id}}</p>
	<p>作者姓名：{{name}}</p>
	<p>作者密码：{{password}}</p>
	<p>作者职业：{{profession}}</p>
	
	</div>
</template>

<script>
	import heads from '../base/listhead'
    import axios from "axios"
	export default{
		components:{
	  	   heads
	   },
		data(){
		   return{
			 id:"",
			 name:"",
			 password:"",
			 profession:""
		   }
	    },
	    mounted(){
	    	this.getData();
	    },
	    methods:{
		 getData(){
		 	axios.get("http://localhost:3000/all").then((res)=>{
              console.log(res.data.res[0]);
              this.id=res.data.res[0].id;
              this.name=res.data.res[0].name;
              this.password=res.data.res[0].password;
              this.profession=res.data.res[0].profession;
              
            },error=>{
              console.log(error);
            })
		 }
	    }
	}
</script>

<style>
img{
	margin-top:20px;
}
.list{
	width:100%;
	height:600px;
	background-color:#ffffff;
	color:#666666;
	text-align:center;
	line-height: 100px;
	overflow: auto;
	font-size: 36px;
}
.home_head{
	background:#1C88D3;
	text-align:center;
	line-height: 80px;
	font-weight: 700;
	font-size:25px;
	height:80px;
	width:100%;
	color:#ffffff;
}
p{
	font-size:16px;
	line-height:30px;
}
</style>