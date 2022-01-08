const expres = require("express");
const router = expres.Router();

// Home
router.get("/", (req, res) => {
  let data = {
    title: "Home Page",
  };
  res.render("pages/index", data);
});

// About
router.get("/about", (req, res) => {
  let data = {
    title: "About Page",
  };
  res.render("pages/about", data);
});

module.exports = router;
