let express = require('express');
let app = express();
console.log(__dirname);
app.use(express.static('../sf'));//12.html  file name
// app.use(express.static('../sf'));
app.get('/add', (req, res) => {

   let mysql = require('mysql2');
   let x = req.query.bookid;
   let y = req.query.bookname;
   let z = req.query.price;
   var xyz = { status: false, detail: { bookid: `${x}`, bookname: `${y}`, price: `${z}` } };

   let connection = mysql.createConnection({

      host: 'localhost',
      user: 'root',
      password: 'cdac',
      database: 'web',
      port: 3306
   });

   connection.query('select * from book where bookid=?', [x], (err, rows) => {

      if (err) {
         console.log(err);
         res.send(xyz);
      } else {
         if (rows.length > 0) {
            xyz.status = true;


            xyz.detail = rows[0];

            res.send(xyz);
         }
         else {
            res.send(xyz);
         }


      }

   });


});
//==============================================================================
app.get('/insert', (req, res) => {

   let mysql = require('mysql2');
   let x = req.query.bookid;
   let y = req.query.bookname;
   let z = req.query.price;
   var xyz = { status: false, detail: { bookid: `${x}`, bookname: `${y}`, price: `${z}` } };

   let connection = mysql.createConnection({

      host: 'localhost',
      user: 'root',
      password: 'cdac',
      database: 'web',
      port: 3306
   });

   connection.query('update book set price=? where bookid=?', [z, x], (err, rows) => {
      if (err) {
         console.log(err);
      } else {
         if (rows.affectedRows > 0) {
            xyz.status = true;
            connection.query('select * from book', [], (err1, rows1) => {
               if (err1) {
                  console.log(err1);
               } else {

                  if (rows1.length > 0) {
                     xyz.detail = rows1;
                     console.log(xyz);
                     res.send(xyz);
                  }
               }
            });
         }
         else {
            res.send(xyz);
         }
      }
   });


});
//====================================================================================
app.get('/fix', (req, res) => {

   let mysql = require('mysql2');
   let x = req.query.bookid;
   let y = req.query.bookname;
   let z = req.query.price;
   var xyz = { status: false, detail: { bookid: `${x}`, bookname: `${y}`, price: `${z}` } };

   let connection = mysql.createConnection({

      host: 'localhost',
      user: 'root',
      password: 'cdac',
      database: 'web',
      port: 3306
   });

   connection.query('select * from book where bookid=?', [x], (err, rows) => {

      if (err) {
         console.log(err);
      } else {
         if (rows.length > 0) {

            res.send(xyz);
         }
         else {

            connection.query('insert into book(bookid,bookname,price) values(?,?,?)', [x, y, z], (err1, rows1) => {
               if (err1) {
                  res.send(xyz);
               } else {
                  xyz.status = true;
                  res.send(xyz);
               }


            });
         }


      }

   });


});


app.listen(5000, () => {


   console.log("Ho gaya ON");
});