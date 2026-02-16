const path = require('path');
const filePath ="C:\\Users\\Lenovo\\OneDrive\\Desktop\\Backend_assignment\\file.txt";

console.log("Directory name is:", path.dirname(filePath));
console.log("Base name is:", path.basename(filePath));
console.log("Extension is:", path.extname(filePath));
console.log("Join paths is:", path.join("/users", "Lenovo", "OneDrive","Desktop","backend assignment","modules","file.txt"));