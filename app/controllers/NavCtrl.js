"use strict";

app.controller("NavCtrl", function($scope, $window, AuthFactory, $location){

	$scope.isLoggedIn = false;


	//run these when controller loads
	$scope.account = {
		email: "",
		password: ""
	};

	$scope.logout = () => {
		console.log("logout clicked");
		AuthFactory.logoutUser()
		.then(function(data){
			console.log("logged out?", data);
			$window.location.url = "#!/login"; //////////////////No going back
			$scope.isLoggedIn = false;
		}, function(error){
			console.log("error occured on logout");
		});
	};

	//when first loaded, make sure no one is logged in
	if(AuthFactory.isAuthenticated()){
		$scope.logout();
	}


	//setup functions to be available to the app for register, login email/password, and google
	$scope.register = () => {
    	console.log("you clicked register");
	    AuthFactory.createUser({
	      email: $scope.account.email,
	      password: $scope.account.password
	    })
	    .then( (userData) => {
	      console.log("UserCtrl newUser:", userData );
	      $scope.login();
	    }, (error) => {
	        console.log("Error creating user:", error);
	    });
  	};

  	$scope.login = () => {
    	console.log("you clicked login");
    	AuthFactory
	    .loginUser($scope.account)
	    .then( () => {
	        $window.location.href = "#!/profile";///////////// you can go back
	        $scope.isLoggedIn = true;
	    });
	};

	$scope.loginGoogle = () => {
		console.log("you clicked login with Google");
		AuthFactory.authWithProvider()
		.then(function(result) {
	    	var user = result.user.uid;
	    	console.log("logged in user:", user);
	    	//Once logged in, go to another view
	    	$window.location.href= "#!/profile";///////////////// you can go back
	    	$scope.isLoggedIn = true;
	  	}).catch(function(error) {
	    	// Handle the Errors.
	    	console.log("error with google login", error);
	    	var errorCode = error.code;
	    	var errorMessage = error.message;
	    	// The email of the user's account used.
	    	var email = error.email;
	    	// The firebase.auth.AuthCredential type that was used.
	    	var credential = error.credential;
	    	// ...
	  	});
	};

});
