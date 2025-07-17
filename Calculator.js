const box=document.getElementById("box");
const equal=document.getElementById("equal");
const buttons = document.querySelectorAll(".clickable");
buttons.forEach(button =>{
    button.addEventListener("click",function(){
        const bv = this.dataset.value;
        if(bv=="AC"){
            box.value="";
        }else if(bv=="DEL"){
            let text = (String)(box.value);
            let length = (text.length)-1;
            let res = text.substring(0,length);
            box.value = res;
            
        }else{
            box.value += bv;
        }

        
    });
});
equal.addEventListener('click',function(){
    let value = (String)(box.value);
    let length = (value.length);
    let i;
    for(i=0;i<length;i++){
        let ch = value.charAt(i);
        if(ch=='×'){
            let n = value.indexOf('×');
            let number1 = (Number)(value.substring(0,(n)));
            let number2 = (Number)(value.substring((n+1)));
            let result = number1*number2;
            box.value=result;
        }else if (ch=='+'){
            let n = value.indexOf('+');
            let number1 = (Number)(value.substring(0,(n)));
            let number2 = (Number)(value.substring((n+1)));
            let result = number1+number2;
            box.value=result;
        }else if (ch=='-'){
            let n = value.indexOf('-');
            let number1 = (Number)(value.substring(0,(n)));
            let number2 = (Number)(value.substring((n+1)));
            let result = number1-number2;
            box.value=result;
        }else if (ch=='÷'){
            let n = value.indexOf('÷');
            let number1 = (Number)(value.substring(0,(n)));
            let number2 = (Number)(value.substring((n+1)));
            let result = number1/number2;
            box.value=result;
        }
    }
});
