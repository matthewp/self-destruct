
# self-destruct

A module for creating self destructing files.

## Install

```shell
npm install self-destruct --save
```

## Usage

```js
var selfDestruct = require("self-destruct");

selfDestruct(__dirname + "/foo.json", '{"foo":"bar"}', "utf8")
  .then(function(destroy){
    // Do some stuff now that foo.json exists.

    // And later destroy it.
    return destroy();
  });
```

## License

BSD 2 Clause
