this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <button class=\"login\">Log In</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"main-container\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.loggedIn : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
this["JST"]["navbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<nav>\n  <a href=\"https://github.com\"><span class=\"octicon octicon-mark-github\"></span></a>\n  <input type=\"search\" name=\"search-github\" placeholder=\"Search GitHub\">\n  <div class=\"navbar-general\">\n    <a href=\"https://github.com/explore\"><span>Explore</span></a>\n    <a href=\"https://gist.github.com\"><span>Gist</span></a>\n    <a href=\"https://github.com/blog\"><span>Blog</span></a>\n    <a href=\"https://help.github.com\"><span>Help</span></a>\n  </div>\n  <div class=\"navbar-userspecific\">\n      <a href=\"https://github.com/"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "\"><span><img src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</span></a>\n      <a href=\"https://github.com/new\"><span class=\"octicon octicon-plus\"></span></a>\n      <a href=\"https://github.com/notifications\">\n        <span class=\"octicon octicon-triangle-down\"></span>\n        <span class=\"octicon octicon-inbox\"></span>\n      </a>\n      <a href=\"https://www.github.com/settings/profile\"><span class=\"octicon octicon-gear\"></span></a>\n      <span class=\"octicon octicon-sign-out\"></span>\n  </div>\n</nav>\n";
},"useData":true});
this["JST"]["sidebar"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <h3>Organizations</h3>\n    <a href=\"orgurl\"><img src=\"avatarurl\"></a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\"https://www.github.com/account\"><img src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\"></a>\n<section>\n  <h1>"
    + alias3(((helper = (helper = helpers.fullname || (depth0 != null ? depth0.fullname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fullname","hash":{},"data":data}) : helper)))
    + "</h1>\n  <h2>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</h2>\n</section>\n<section>\n  <ul>\n    <li><span class=\"octicon octicon-location\"></span>"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</li>\n    <li><span class=\"octicon octicon-link\"></span><a href=\""
    + alias3(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"blog","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"blog","hash":{},"data":data}) : helper)))
    + "</a></li>\n    <li><span class=\"octicon octicon-clock\"></span>"
    + alias3(((helper = (helper = helpers.joindate || (depth0 != null ? depth0.joindate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"joindate","hash":{},"data":data}) : helper)))
    + "</li>\n  </ul>\n</section>\n<section>\n  <ul>\n    <a><span>"
    + alias3(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers","hash":{},"data":data}) : helper)))
    + "</span><span>Followers</span></a>\n    <a><span>"
    + alias3(((helper = (helper = helpers.starred || (depth0 != null ? depth0.starred : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starred","hash":{},"data":data}) : helper)))
    + "</span><span>Starred</span></a>\n    <a><span>"
    + alias3(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following","hash":{},"data":data}) : helper)))
    + "</span><span>Following</span></a>\n  </ul>\n</section>\n<section>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.organizations : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true});
this["JST"]["title"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(((helper = (helper = helpers.fullname || (depth0 != null ? depth0.fullname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fullname","hash":{},"data":data}) : helper)))
    + ")\n";
},"useData":true});