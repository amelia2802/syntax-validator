const inputText = document.getElementById("input-text");
const checkSyntax = document.getElementById("check-syntax");
const output = document.getElementById("output");

checkSyntax.addEventListener("click",()=>{
    let htmlCode = inputText.value;
    const stack = [];
    let i = htmlCode.indexOf('<');
    while(i!=-1){
        let j = htmlCode.indexOf('>',i+1);
        if(j==-1){
            output.innerText = "Invalid Syntax";
            return;
        }
        let tag = htmlCode.slice(i+1,j);
        if(!tag.startsWith("/")){
            stack.push(tag);
        }
        else{
            if(stack.length==0){
                output.innerText = "Invalid Syntax";
                return;
            }
            if(tag.slice(1) !== stack.pop()){
                output.innerText = "Invalid Syntax";
                return;
            }
        }
        i = htmlCode.indexOf('<',j+1);
    }
    if(stack.length==0){
        output.innerText = "Valid Syntax";
        output.style.color = "green";
    }
    else{
        output.innerText = "Invalid Syntax";
        output.style.color = "red";
    }
})
