var express = require("express");
var router = express.Router();
const Book = require("../../model/book");
const connectDB = require("../../db/connect");
require("dotenv").config();

const uri = process.env.MONGO_URI;

/* GET home page. */
router.get("/", async (req, res, next) => {
    try {
        await connectDB(uri).then(() => console.log(`Connection established successfully!`));

        const books = await Book.find({});
        res.render("pages/books", { books });
    } catch (error) {
        console.log("error: " + error.toString());
    }
});

router.get("/add-book", function (req, res, next) {
    res.render("form/add-book");
});

router.post("/add-book", async (req, res) => {
    try {
        await connectDB(uri).then(() => console.log(`Connection established successfully!`));
        const book = await Book.create(req.body);
        console.log(book);
        res.redirect("/book");
    } catch (error) {
        console.log("error: " + error.toString());
        res.redirect("/add-book");
    }
});

module.exports = router;
