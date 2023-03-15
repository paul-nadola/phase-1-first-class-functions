function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function fnName(){
        console.log('This is interesting')
    }
}
function returnsAnAnonymousFunction(){
    return () => {
        console.log("This is progress")
    }
}