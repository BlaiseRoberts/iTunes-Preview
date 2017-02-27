"use strict";

app.controller("NavCtrl", function($scope, $window, AuthFactory, $location, FilterFactory){
	$scope.filterText = FilterFactory;
	$scope.isLoggedIn = false;
	$scope.listView = false;
	

	$scope.goToListView = ()=>{
		$scope.listView = true;
	};
	$scope.goToAddView = ()=>{
		$scope.listView = false;
	};
	$scope.clearInputs = ()=>{
		$scope.listView = false;	
	};


	//run these when controller loads
	$scope.account = {
		email: "",
		password: ""
	};

	$scope.logout = () => {
		AuthFactory.logoutUser()
		.then(function(data){
			$window.location.url = "#!/login"; //////////////////No going back
			$scope.isLoggedIn = false;
			$scope.listView = false;
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
	    AuthFactory.createUser({
	      email: $scope.account.email,
	      password: $scope.account.password
	    })
	    .then( (userData) => {
	      $scope.login();
	    }, (error) => {
	        console.log("Error creating user:", error);
	    });
  	};

  	$scope.login = () => {
    	AuthFactory
	    .loginUser($scope.account)
	    .then( () => {
	        $window.location.href = "#!/music/list";///////////// you can go back
	        $scope.isLoggedIn = true;
	        $scope.listView = false;
	    });
	};

	$scope.loginGoogle = () => {
		AuthFactory.authWithProvider()
		.then(function(result) {
	    	var user = result.user.uid;
	    	//Once logged in, go to another view
	    	$window.location.href= "#!/music/list";///////////////// you can go back
	    	$scope.isLoggedIn = true;
	    	$scope.listView = false;
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
