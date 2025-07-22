


function demo(callback){
    return callback();
}

function print(){
    return "hello world";
}




console.log(demo(print))