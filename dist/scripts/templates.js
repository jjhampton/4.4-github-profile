this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["title"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return this.escapeExpression((helpers.username || (depth0 && depth0.username) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.fullname : depth0),{"name":"username","hash":{},"data":data}))
    + "\n";
},"useData":true});