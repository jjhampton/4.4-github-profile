(function(){
  'use strict';

  function app(token){
   $.ajax({
     url: "https://api.github.com/user",
     headers: {
       "Authorization": "token " + token
     }
   }).then(function(user) {
     console.log(user);
     displayTitle(user);
     displayNavbar(user);
    //  displaySidebar(user);
    //  displayContent(user);
   });
 }

  function displayTitle(data) {
    $('title').prepend(JST['title']({
      username: data.login,
      fullname: data.name
    }));
  }

  function displayNavbar(data) {
    $('.main-container').append(JST['navbar']({
      username: data.login,
      avatar: data.avatar_url
    }));
  }

  function displaySidebar(data) {

  }

  //Grab temporary code from GitHub and request token from Gatekeeper, which knows client_secret
  $(document).ready(function(e){
    var token = localStorage.getItem('GITHUB_TOKEN');
    $('body').prepend(JST['application']({loggedIn: !!token}));
    if(token) {
      app(token);
    } else {
      var matches = window.location.href.match(/\?code=(.*)/);
      var code = matches && matches[1];
      if(code) {
        $.getJSON('http://localhost:9999/authenticate/'+code, function(data) {
          localStorage.setItem('GITHUB_TOKEN', data.token);
          window.location.replace('/');
        });
      }
    }
  });

  //Event handler assignment for button to redirect users to request GitHub access
  $(document).on('click', '.login', function(e){
    window.location.replace('https://github.com/login/oauth/authorize?client_id=b69b801883e5ccf58196');
  });




})();
