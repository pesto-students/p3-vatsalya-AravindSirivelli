import fetch from "node-fetch";
async function printUserName(id) {
    try {
        var userList = await getAllUsers();
        var currentUser = await getUserInfo(userList, id);
        var currentUserName = await getUserName(currentUser);
        return currentUserName;
    } catch (error) {
        console.error(error);
    }
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
var userName = printUserName(1);
console.log(userName);


