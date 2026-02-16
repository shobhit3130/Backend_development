const fs=require("fs");
fs.appendFile("fs.txt","\n made on vs code",function(err,data){
    if(err) {
        console.log("error");
    }
    else{
        console.log("file appended successfully");
        }
    
})