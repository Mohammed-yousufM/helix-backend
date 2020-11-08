var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const CourseDetails = mongoose.model("courseDetails");
const saveToDB = async (title, Description, Duration) => {
  const course = new CourseDetails({
    title: title,
    Description: Description,
    Duration: Duration,
  });
  try {
    const saved = await course.save();
    console.log("The details are saved\n", saved);
    res.json({ rep: "success" });
  } catch (error) {
    console.log(error);
    res.json({ rep: "failure" });
  }
};

router.get("/", function (req, res, next) {
  res.json([
    {
      courseID: 1,
      courseTitle: "Title1",
      courseDescription: "Description1",
      courseDuration: "Duration1",
    },
    {
      courseID: 2,
      courseTitle: "Title2",
      courseDescription: "Description2",
      courseDuration: "Duration2",
    },
  ]);
});

router.post("/", async (req, res, next) => {
  const { title, Description, Duration } = req.body;
  await saveToDB(title, Description, Duration);
});

module.exports = router;
