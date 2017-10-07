if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb://nichenqin:nichenqin@ds113785.mlab.com:13785/vidjot-prod"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/vidjot-dev"
  };
}
