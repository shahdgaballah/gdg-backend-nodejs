const path = require("node:path");
//1.
function print_fullpath(){
    console.log(__filename);
    
}
//print_fullpath();

//2.
function print_ext(filepath){
    console.log(path.extname(filepath));
    
}
//print_ext("/path/to/file.txt");

//3.
function isAbsolute(filepath){
    console.log(path.isAbsolute(filepath));
    
}
//isAbsolute("/path/to/file.txt");
//isAbsolute("file.txt");

//4.
function join_paths(path1, path2){
    console.log(path.join(path1, path2));
    
}
//join_paths("/folder1", "folder2/file.txt");

//5.
function ayhaga(filepath){
    const parsed_obj = path.parse(filepath);
    console.log("Parsed object:" , parsed_obj);
    
    const formatted_obj = path.format(parsed_obj);
    console.log("Formatted path:",formatted_obj);
}
//ayhaga("/path/to/file.txt");

//6.
const express = require('express');
const { log } = require("node:console");
const app = express();

const port = 3007;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
});


app.post('/user', (req, res, next)=>{
    console.log("Received user data:", req.body);
    return res.json({'messege': 'user added'});
    
});