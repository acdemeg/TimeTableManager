const HttpStatus = require('http-status-codes');

const testUser = {
  id: 1,
  name: "Ivan",
  email: "ivn@gmail.com",
  passw: "12345",
  isAdmin: false
}

const testAdmin = {
  id: 3,
  name: "Dima",
  email: "dmz@gmail.com",
  passw: "parol",
  isAdmin: true
}

let usersMap = new Map([
  ['1', testUser],
  ['3', testAdmin],
]);
let emailUsersMap = new Map([
  ['ivn@gmail.com', testUser],
  ['dmz@gmail.com', testAdmin]
]);
let sessionUsersMap = new Map([
  ['1', testUser],
  ['3', testAdmin]
]);

const getUsers = ({ response, request, params }) => {
  const [ userId ] = params;

  if(!sessionUsersMap.get(userId)){
    response.statusCode = HttpStatus.UNAUTHORIZED;
    response.end("Need Authorization");
    return;
  }

  if(sessionUsersMap.get(userId).isAdmin){
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(Array.from(usersMap.values())));
  }
  else {
    response.statusCode = HttpStatus.FORBIDDEN;
    response.end("You isn't Admin");
  }

}

const regNewUser = ({ response, request }) => {
  let postData = '';
  request.setEncoding("utf8");
  request.addListener("data", postDataChunk => {
    postData += postDataChunk;
  });
  request.addListener("end", () => {
    const newUser = JSON.parse(postData);
    usersMap.set(String(newUser.id), newUser);
    emailUsersMap.set(newUser.email, newUser);
    response.end("succses Registration");
    });
}

const userLogIn = ({ response, request }) => {
  let postData = '';
  request.setEncoding("utf8");
  request.addListener("data", postDataChunk => {
    postData += postDataChunk;
  });
  request.addListener("end", () => {
    const userLogInData = JSON.parse(postData);
    const user = emailUsersMap.get(userLogInData.email);
    const authorizedUser = (user) ? sessionUsersMap.get(String(user.id)) : false;

    if(authorizedUser){
      response.end("You already authorized");
      return;
    }

    if(user && user.passw === userLogInData.passw){
      sessionUsersMap.set(String(user.id), user);
      response.end("succses LogIn");
    }
    else {
      response.statusCode = HttpStatus.FORBIDDEN;
      response.end("Can't LogIn");
    }
  });
}

module.exports = {
  regNewUser,
  getUsers,
  userLogIn,
  sessionUsersMap
};
