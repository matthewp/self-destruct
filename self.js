var asap = require("pdenodeify");
var fs = require("fs");

module.exports = selfDestruct;

function selfDestruct(filePath, content, options){
  return asap(fs.writeFile)(filePath, content, options).then(function(){
    return makeDestructor(filePath);
  });
}

function makeDestructor(filePath){
  return function(){
    return asap(fs.unlink)(filePath);
  };
}
