const axios = require("axios");

exports.routeOne = (req, res) => {
  axios
    .get("https://api.hatchways.io/assessment/blog/posts?tag=tech")
    .then((response) => {
      res.status(200).json({
        status: true,
        posts: response.data.posts,
      });
    });
};

exports.routeTwo = (req, res) => {
  const tags = req.query.tags;
  const sortBy = req.query.sortBy != undefined ? req.query.sortBy : "likes";
  const direction =
    req.query.direction != undefined ? req.query.direction : "asc";
  if (tags == undefined) {
    res.status(400).json({
      error: "Tags parameter is required",
      status: 400,
    });
  } else {
    const filterResponse = [];
    const tag = tags.split(",");
    for (let pos = 0; pos < tag.length; pos++) {
      axios
        .get("https://api.hatchways.io/assessment/blog/posts?tag=" + tag[pos])
        .then((response) => {
          filterResponse.push(response.data.posts);
          if (pos == tag.length - 1) {
            const JSONfilter = validateJSON(
              filterResponse,
              sortBy,
              direction,
              tag
            );
            if (JSONfilter.post.length != 0) {
              res.status(200).json({
                status: 200,
                posts: JSONfilter.post,
              });
              res;
            } else {
              res.status(400).json({
                error: JSONfilter.message,
                status: 400,
              });
            }
          }
        });
    }
  }
};

function validateJSON(Resposne, sortBy, direction, tag) {
  const finalJSON = {
    status: false,
    message: "",
    post: [],
  };
  let conditionone = false;
  let conditiontwo = false;
  const sortByAllAcceptance = ["id", "reads", "likes", "popularity"];
  const directionAllAcceptance = ["desc", "asc"];
  conditionone = sortByAllAcceptance.includes(sortBy.toLowerCase());
  conditiontwo = directionAllAcceptance.includes(direction.toLowerCase());

  if (!conditionone) {
    finalJSON.message = "sortBy parameter is invalid";
    return finalJSON;
  } else if (!conditiontwo) {
    finalJSON.message = "direction parameter is invalid";
    return finalJSON;
  }

  Resposne[0].map((values) => {
    let bool = tag.every((result) => values.tags.includes(result));
    if (bool) finalJSON.post.push(values);
  });
  if (finalJSON.post.length != 0) {
    const sortdata = sortJSON(finalJSON, sortBy, direction);
    finalJSON.post = sortdata;
    return finalJSON;
  } else {
    finalJSON.message = "Tags parameter is required";
    return finalJSON;
  }
}

function sortJSON(object, sortBy, direction) {
  object.post.sort((a, b) => {
    if (direction == "asc") {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });
  return object.post;
}
