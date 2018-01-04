<template>
	<div>
	
	<div class="chose_bar">
	<router-view></router-view>
	<router-link to="/home">
		<div class="btn_page">
			首页
		</div>
	</router-link>
	<router-link to="/list">
		<div class="btn_page_center">列表</div>
	</router-link>
	<router-link to="/add">
		<div class="btn_page">添加</div>
	</router-link>
	
	</div>
	
	<span v-show="here">
	<div style="border:2px solid #333333;margin-top:10px;margin-bottom:10px;padding-left:10px;">
	<model></model>
	</div>
	<div style="border:2px solid #333333;margin-top:10px;margin-bottom:10px;padding-left:10px;">
	<timer></timer>
	</div>
	</span>
		
	</div>

</template>

<script>
import model from './plugin/model.vue'
import timer from './plugin/time.vue'
export  default{
	components:{
		model,
		timer
	},
	data(){
		return{
			here:false
		}
	},
	methods:{
		
	}

}
</script>

<style>
	.btn_page{
		position:relative;
		bottom:0;
		width:32%;
		height:65px;
		text-align: center;
		line-height: 65px;
		float:left;
		border-bottom:1px solid #d9d9d9;
		color:#666666;
		border-top:1px solid #d9d9d9;
	}
	.btn_page_center{
		position:relative;
		bottom:0;
		height:65px;
		text-align: center;
		line-height: 65px;
		float:left;
		width:34%;
		float:left;
		border-bottom:1px solid #d9d9d9;
		border-left:1px solid #d9d9d9;
		border-right:1px solid #d9d9d9;
		color:#666666;
		border-top:1px solid #d9d9d9;
	}
	.btn_page_center:hover{
		box-shadow: 0px 0px 8px #d9d9d9;
	}
	.btn_page:hover{
		box-shadow: 0px 0px 8px #d9d9d9;
	}
	.chose_bar{
		width:99%;
		height:665px;
		background-color:#ffffff;
		font-weight:700;

	}
	.header{
		width:100%;
		height:100px;
		line-height: 100px;
		background-color: #f2f2f2;
		border:1px solid darkgreen;
	}
	*{
		padding:0px;
		margin:0px;
	}
</style>