<template>
	<div id="login">
		<div class="container">
			<div class="row">
				<div class="col-8 col-sm-8 col-md-8 col-lg-8">
					<fieldset>
						<p v-if="error" class="text-danger">Invalid Credentials!!!</p>
						<legend>Login to QuickMed</legend>
						<form>
							<label>Email:</label>
							<input type="email" v-model="credentials.email">
							<br>
							<label>Password:</label>
							<input type="password" v-model="credentials.pwd">
							<br><br>
							<input type="submit" value="Login" class="btn btn-primary" v-on:click.prevent="login">
						</form>
					</fieldset>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	export default{

		data(){
			return{
				credentials:{},
				error: false
			}
		},

		methods:{
			login: function() {	
				
				var that = this;
				SDK.call('devless','login',["",that.credentials.email,"",that.credentials.pwd], 
					function(res){
					/*	console.log(res);*/
						if(res.payload.result == false){
							that.error = true;
							return;
						}
					/*	else if(res.payload.error.code == 643){
							that.$swal('Pending Activation',res.payload.error.message,'info');
							that.$router.push({ path: "/"});
						}*/
						else {
						SDK.setToken(res.payload.result.token);
						that.$router.push({ path: "/dashboard"});
						}
					});
				
			}
		},

		computed:{

		}
	}

</script>


<style scoped>
</style>

