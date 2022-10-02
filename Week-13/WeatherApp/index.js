const express = require("express");
const router = require("./routes");
const port = process.env.port || 3010;
const app = express();

app.use(router);

app.get("/", (req, res) => {
    res.send("Hey Aravind Sirivelli")
});

app.listen(port, err => {
    if (err)
        return console.log("ERROR", err);
    console.log(`Server Up and Running on Port - ${port}`)
})
