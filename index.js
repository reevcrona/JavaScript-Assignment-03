const username = prompt("Please enter your username");
const password = prompt("Please enter your password");


function isValidPassword(uName,pWord){
    
    if(pWord.length >= 8 && !pWord.includes(" ") && !pWord.includes(uName)){
        return true;
    }else{
        return false;
    }
}



console.log(isValidPassword(username,password));