const fs = require('fs');
fs.readdir("./", function(err, files) {
  console.log(require('util').inspect(files, {
    depth: null
  }));
  files.forEach(function(e, i) {
    if (e.search(".js") !== -1) return;
    var n = i + 1;
    fs.rename("./" + e, `${n}.jpg`);
  });
})