if (process.env.NODE_ENV === "production") {
  module.exports = {
    uri: process.env.URI,
  };
} else {
  module.exports = {
    uri:
      "mongodb+srv://yousuf:yousuf@helixcluster.gfs12.mongodb.net/coursesList?retryWrites=true&w=majority",
  };
}
