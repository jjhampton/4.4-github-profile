(function(){
  'use strict';

  function app(token){
    $.ajax({
      url: "https://api.github.com/user",
      headers: {
       "Authorization": "token " + token
      }
    }).then(function(user) {
      displayTitle(user);
      displayNavbar(user);
      displaySidebar(user);
      displayContent(user);
      displayFooter();
      $.ajax({
        url: "https://api.github.com/user/starred",
        headers: {
          "Authorization": "token " + token
        }
      }).then(function(starred) {
        displaySidebarStarred(starred);
      });
      $.ajax({
        url: "https://api.github.com/user/orgs",
        headers: {
          "Authorization": "token " + token
        }
      }).then(function(organizations) {
         displaySidebarOrganizations(organizations);
      });
      $.ajax({
        url: "https://api.github.com/user/repos",
        headers: {
          "Authorization": "token " + token
        }
      }).then(function(repositories) {
        displayRepositories(repositories);
      });
    });
  }

  function displayTitle(data) {
    $('title').prepend(JST['title']({
      fullname: data.name,
      username: data.login,
    }));
  }

  function displayNavbar(data) {
    $('.main-container').append(JST['navbar']({
      username: data.login,
      avatar: data.avatar_url
    }));
  }

  function displaySidebar(data) {
    $('.main-container').append(JST['sidebar']({
      fullname: data.name,
      username: data.login,
      avatar: data.avatar_url,
      location: data.location,
      blog: data.blog,
      joindate: getDateFormat(data.created_at),
      followers: data.followers,
      following: data.following
    }));
  }

  function getDateFormat(datestring) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // document.write("The current month is " + monthNames[d.getMonth()]);
      var sidebarDate = new Date(datestring);
      var day = sidebarDate.getDate();
      var year = sidebarDate.getFullYear();
      var month = sidebarDate.getMonth()+1;
      sidebarDate = monthNames[month] + " " + day + ", " + year;
      return sidebarDate;
  }

  function displaySidebarStarred(data) {
    $('.starred').append(JST['starred']({
      starred: data.length
    }));
  }

  function displaySidebarOrganizations(data) {
    $('.organizations').prepend(JST['organizations']({
      organizations: data
    }));
  }

  function displayContent(data) {
    $('.main-container').append(JST['content']({
      contributionsurl: data.html_url
    }));
    $("#tabs").tabs({
      activate: function (event, ui) {
        var active = $("#tabs").tabs("option", "active");
      }
    });
  }

  function displayRepositories(data) {
    var updatedOrderRepoList = getArraySortedByUpdate(data);
    $('.repositories').append(JST['repositories']({
      repositories: updatedOrderRepoList
    }));
  }

  function getArraySortedByUpdate(array) {
    var sortedArray;
    var newDate;

    sortedArray = array.map(function(element) {
      var newElement = element;
      newElement.updatedAtDateObject = new Date(element.pushed_at);
      newElement.updatedFromNowValue = getUpdatedFromNowVal(newElement.updatedAtDateObject);
      return newElement;
    });
    console.log(sortedArray);
    sortedArray = sortedArray.sort(function(a,b) {
      return b.updatedAtDateObject - a.updatedAtDateObject;
    });
    console.log(sortedArray);
    return sortedArray;
  }

  function getUpdatedFromNowVal(updatedDate) {
    var timeFromNow;
    var now = moment.utc();
    var updatedDateUTC = moment.utc(updatedDate);
    var nowDate = new Date(); // for last branch of if/else year comparison
    var nowYear = nowDate.getFullYear(); // for last branch of if/else year comparison
    var timeDifference = now - updatedDateUTC;
    var options =  {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    console.log("now is " + now);
    console.log("updatedDateUTC is " + updatedDateUTC);
    console.log(timeDifference);
    timeDifference = Math.floor(timeDifference / 60000); //convert to minutes
    console.log(timeDifference + " converted to minutes");

    if (timeDifference <= 60) {
      timeFromNow = timeDifference + " minutes ago";
    }
    else if (timeDifference > 60 && timeDifference <= 1440) {
      timeDifference = Math.floor(timeDifference / 60); //convert to hours
      timeFromNow = timeDifference + " hours ago";
    }
    else if (timeDifference > 1440 && timeDifference <= 43200) {
      timeDifference = Math.floor(timeDifference / 1440); // convert to days
      timeFromNow = timeDifference + " days ago";
    }
    else {
      if (nowYear === updatedDate.getFullYear()) {
        delete options.year;
        timeFromNow = updatedDate.toLocaleDateString('en-US', options);
      }
      else {
        timeFromNow = updatedDate.toLocaleDateString('en-US', options);
      }
    }
    return timeFromNow;
  }

  function displayFooter() {
    $('.main-container').append(JST['footer']());
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
