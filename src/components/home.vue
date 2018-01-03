<template>
	<div class="home">
		
	<div class="home_head">	
		<heads></heads>
	</div>
		

	<!--<button @click="getData" class="data">get data</button>-->
	<li v-for="data in datas">
		<h3>
			<span class="title">{{data.name}}</span>
			<span>----{{data.bio}}</span>
		    <span>----{{data.slogan}}</span>
		</h3>
	</li>
	</div>
</template>

<script>
import axios from "axios"
import heads from '../base/head'
	export default{
		components:{
	  	   heads
	   },
		data(){
		   return{
			 datas:""
		   }
	    },
	    mounted(){
	    	this.getData();
	    },
	    methods:{
		 getData(){
		 	axios.get("http://localhost:3000/").then((res)=>{
              console.log(res.data);
              this.datas=res.data;
            },error=>{
              console.log(error);
            })
		 }
	    }
	}
</script>

<style scoped>
.title{
	background-color: #1C88D3;
	display:inline-block;
	margin-right:10px;
	margin-left:10px;
	padding-left:5px;
	padding-right:5px;
}
.data{
	width:200px;
	height:50px;
	font-size:20px;
}
.home{
	width:100%;
	height:600px;
	background-color:darkorange;
	color:#ffffff;
	overflow: auto;
}
.home_head{
	background:#1C88D3;
	text-align:center;
	line-height: 80px;
	font-weight: 700;
	font-size:25px;
	height:80px;
	width:100%;
}

</style>