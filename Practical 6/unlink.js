const fs=require("fs");
//fs.writeFile("fs2.txt","made on vs code",function(err,data){
fs.unlink("fs2.txt",err=>{
    if(err) {
        console.log("error");
    }
    else{
        console.log("file deleted successfully");
        
        }
    
})