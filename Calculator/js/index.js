function main(val){
    user_input.innerHTML += val
}

function result(){
    let ans = eval(user_input.innerHTML)
    final_result.innerHTML = ans;
    // clear_();
}
function clear_(){
    console.log("clear is logged");
    final_result.innerHTML = " "
    user_input.innerHTML = " "

}