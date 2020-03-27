/**
**  NOT WORKING
*/

let postQuery = (request, handler) => {
  let postData = '';
  request.setEncoding("utf8");
  request.addListener("data", postDataChunk => {
    postData += postDataChunk;
  });
  request.addListener("end", (postData) => handler(postData));
}

module.exports = postQuery;
