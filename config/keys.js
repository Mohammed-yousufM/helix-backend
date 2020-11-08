if (process.env.NODE_ENV === "production") {
  module.exports = {
    uri: process.env.URI,
  };
} else {
  module.exports = {
    uri:
      "",
  };
}
