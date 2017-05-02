"use strict";

var app = angular.module("MusicApp", ["ngRoute", "angular.filter", "angular-loading-bar"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
        if (userExists){
            resolve();
        }else {
            reject();
        }
    });
});

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
}]);

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
    when('/music/video', {
        templateUrl: 'partials/search-video.html',
        controller: "VideoCtrl",
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