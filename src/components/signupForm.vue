<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-12 col-md-8 col-lg-8 offset-md-2 offset-lg-2">
				<p v-if="error" class="text-danger">{{errorMessage}}</p>
				<form>
					<div class="form-row">
					    <div class="form-group col-md-6">
						    <label for="givenName">Given Name</label>
						    <input type="text" class="form-control" id="givenName" aria-describedby="givennameHelp" placeholder="Enter Given Name" v-model="details.givenName" required="true">
					 	</div>
					  	<div class="form-group col-md-6"> 
						    <label for="lastName">Last Name</label>
						    <input type="text" class="form-control" id="lastName" aria-describedby="lastnameHelp" placeholder="Enter Last Name" v-model="details.lastName" required="true">
						</div>
					</div>
					
					<div class="form-row">
					  <div class="form-group col-md-6">
					    <label for="username">Username</label>
					    <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="Enter Username" v-model="details.userName" required="true">
					  </div>
					  <div class="form-group col-md-6">
					    <label for="userEmail">Email address</label>
					    <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter Email" v-model="details.email" required="true">
					  </div>
					</div>
					<div class="form-row">
					   <div class="form-group col-md-6">
					    <label for="password">Password</label>
					    <input type="password" class="form-control" id="passwordOne" placeholder="Password" v-model="details.pwd1" required="true">
					   </div>
					   <div class="form-group col-md-6">
					    <label for="password">Confirm Password</label>
					    <input type="password" class="form-control" id="passwordTwo" placeholder="Retype Password"
					    v-model="details.pwd2" required="true">
					  </div>
					</div>
					  
					  <button type="submit" class="btn btn-success text-center" v-on:click.prevent="signup">Submit</button>
				</form>
				<hr>
				
			</div>
			
		</div>


	</div>
</template>


<script> 
	export default{

		data(){
			return{
				details: {},
				error: false,
				errorMessage:'',
			}
			
		},

		methods: {

			signup: function(){
				var that = this;
				if(that.details.pwd1 != that.details.pwd2)
					{
						that.error = true;
						that.errorMessage = 'Password Mismatch';
						return;
					}

				SDK.call('devless', 'signUp', 
					[
						that.details.email,
					 	that.details.pwd1, 
						that.details.userName, 
						'', 
						that.details.givenName, 
						that.details.lastName
					],
						function(resp){
							console.log(resp.payload.result);
							if(resp.payload.result[0] == false){
								that.error = true;
								that.errorMessage = 'No details found';
								return;
							}
							SDK.setToken(resp.payload.result.token);
							that.$router.push({ path: "/dashboard"});
						});			
			}
		}
	}
</script>


<style>
	
	
</style>