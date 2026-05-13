// server.js

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.post("/save", (req, res) => {

  const { html, css } = req.body;

  const fullHtml = `
  <!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8">

    <title>Kayıtlı Sayfa</title>

    <style>
      ${css}
    </style>

  </head>

  <body>

    ${html}

  </body>
  </html>
  `;

  fs.writeFileSync(
    path.join(__dirname, "saved-page.html"),
    fullHtml
  );

  res.send("Sayfa başarıyla kaydedildi!");
});

app.listen(3000, () => {

  console.log("Sunucu çalışıyor:");
  console.log("http://localhost:3000");

});