var selfDestruct = require("../self");
var test = require("tape");
var asap = require("pdenodeify");
var fs = require("fs");

test("does it work", function(t){
  t.plan(2);

  var filePath = __dirname + "/foo";

  selfDestruct(filePath, '{"foo":"bar"}', "utf8").then(function(destroy){
    asap(fs.readFile)(filePath, "utf8").then(function(json){
      t.equal(JSON.parse(json).foo, "bar", "correctly written");
    }).then(function(){
      destroy().then(function(){
        asap(fs.stat)(filePath).then(null, function(err){
          t.equal(err.code, "ENOENT", "File does not exist");
        });
      });
    });
  });
});
