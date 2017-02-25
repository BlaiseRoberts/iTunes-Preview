"use strict";

var app = angular.module("MusicApp", ["ngRoute", "angular.filter"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        }else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/login.html'
    }).
    when('/login', {
        templateUrl: 'partials/login.html'
    }).
    when('/logout', {
        templateUrl: 'partials/login.html'
    }).
    when('/profile', {
        templateUrl: 'partials/profile.html',
        resolve: {isAuth}
    }).
    when('/music/list', {
        templateUrl: 'partials/music-list.html',
        controller: "ListCtrl",
        resolve: {isAuth}
    }).
     when('/music/add', {
        templateUrl: 'partials/addmusic.html',
        controller: "NewMusicCtrl",
        resolve: {isAuth}
    }).
    when('/music/:songId', {
        templateUrl: "partials/song-details.html",
        controller: "SongCtrl",
        resolve: {isAuth}
    }).
    when('/music/:songId/edit', {
        templateUrl: "partials/addmusic.html",
        controller: "EditSongCtrl",
        resolve: {isAuth}
    }).
    otherwise('/');
}]);

app.run(function ($location, FBCreds) {
    let authConfig = {
        apiKey: FBCreds.apiKey,
        authDomain: FBCreds.authDomain,
        databaseURL: FBCreds.databaseURL
    };
    firebase.initializeApp(authConfig);
});