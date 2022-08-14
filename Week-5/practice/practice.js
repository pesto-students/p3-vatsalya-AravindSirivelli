import fetch from "node-fetch";

async function printUserName(id) {
    var userList = await getAllUsers();
    var currentUser = await getUserInfo(userList, id);
    var currentUserName = await getUserName(currentUser);
    return currentUserName;
}
async function getAllUsers() {
    var usersJson = (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    return usersJson;
}
function getUserInfo(userList, userId) {
    return userList.filter(x => x.id == userId);
}
function getUserName(currentUser) {
    return currentUser[0].name;
}
function printAllUserNames() {
    var userNames = [];
    for (let i = 1; i <= 10; i++) {
        userNames.push(printUserName(i));
    }
    return userNames;
}
var userNamesArray = await printAllUserNames();
console.log(userNamesArray);