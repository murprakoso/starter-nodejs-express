// Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 5000;

// Import routes
const webRoutes = require("./routes/web");

// Static Files
app.use(express.static("public"));

// Set templating engine
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

// Morgan
app.use(
  morgan(":method :url :status :response-time ms - :res[content-length]")
);

// Routes
app.use(webRoutes);

// Listen port
app.listen(port, () => {
  console.log(`Server running on port:${port}...`);
});
