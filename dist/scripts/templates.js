this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <button class=\"login\">Log In</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.loggedIn : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
this["JST"]["navbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"navbar container\">\n  <a href=\"https://github.com\"><span class=\"octicon octicon-mark-github\"></span></a>\n  <input type=\"search\" name=\"search-github\" placeholder=\"Search GitHub\">\n  <div class=\"navbar-general\">\n    <a href=\"https://github.com/explore\"><span>Explore</span></a>\n    <a href=\"https://gist.github.com\"><span>Gist</span></a>\n    <a href=\"https://github.com/blog\"><span>Blog</span></a>\n    <a href=\"https://help.github.com\"><span>Help</span></a>\n  </div>\n  <div class=\"navbar-userspecific\">\n      <a href=\"https://github.com/"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "\"><span><img src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\"></span></a>\n      <a href=\"https://github.com/new\"><span class=\"octicon octicon-plus\"></span></a>\n      <a href=\"https://github.com/notifications\">\n        <span class=\"octicon octicon-triangle-down\"></span>\n        <span class=\"octicon octicon-inbox\"></span>\n      </a>\n      <a href=\"https://www.github.com/settings/profile\"><span class=\"octicon octicon-gear\"></span></a>\n      <span class=\"octicon octicon-sign-out\"></span>\n  </div>\n</div>\n";
},"useData":true});
this["JST"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["title"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(((helper = (helper = helpers.fullname || (depth0 != null ? depth0.fullname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fullname","hash":{},"data":data}) : helper)))
    + ")\n";
},"useData":true});