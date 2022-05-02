let express = require("express");
let app = express();
let fs = require("fs");

app.get("/AllCountries", function (req, res) {
  fs.readFile(__dirname + "/" + "countryNames.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get("/files", function (req, res) {
    const testFolder = './flags/';
    fs.readdirSync(testFolder).forEach(file => {
        console.log(file);
        res.send(`<img src='./flags/${file}'/>`);
      });
  });

let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
