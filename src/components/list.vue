<template>
	<div class="list">
		
    <div class="home_head">	
		<heads></heads>
	</div>
	<img src="../img/ww.jpg">
	<h3 v-for="data in datas">
		<span>{{data.name}}</span>:
		<span>{{data.profession}}</span>
	</h3>
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
			 datas:""
		   }
	    },
	    mounted(){
	    	this.getData();
	    },
	    methods:{
		 getData(){
		 	axios.get("http://localhost:3000/all").then((res)=>{
              console.log(res.data);
              this.datas=res.data.res;
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
	background-color:greenyellow;
	color:#ffffff;
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
}
</style>