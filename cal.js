var buttons=document.getElementsByClassName("all");
// var buttons=document.getElementsByClassName("box");
var display=document.getElementById("display");
var operand1=0;
var operand2=0;
var operator=null;
 
    for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        var value=this.getAttribute("data-value");
        if(value=="+"){
           operator="+";
        //    display.innerText += value
           
           operand1=parseFloat(display.textContent);  
           display.innerText =" "

        }
       else if(value=="/"){
            operator="/";
            display.innerText += value
            operand1=parseFloat(display.textContent);  
            display.innerText =" "
 
         }
         else if(value=="*"){
            operator="*";
            display.innerText += value
            operand1=parseFloat(display.textContent);  
            display.innerText =" "
 
         }
        else if(value=="-"){
            operator="-";
            display.innerText += value
            operand1=parseFloat(display.textContent);  
            display.innerText =" "
 
         }
         else if(value=="%"){
            operator="%";
            display.innerText += value
            operand1=parseFloat(display.textContent);  
            display.innerText =" "
 
         }
         else if(value=="+/-"){
            if(display.innerText >=0)
            {
                operand1=parseFloat(display.textContent); 
                display.innerText=-operand1
            }
            else if(display.innerText <0)
            {
                operand1=parseFloat(display.textContent); 
                display.innerText=-operand1
            }
            
        }
        else if(value =="="){
            operand2= parseFloat(display.innerText);
         var result=eval(operand1+""+operator+""+operand2);
        //  console.log(result);
         display.innerText= result;

        }else if(value=="AC"){
                operator=null;
                display.innerText =" ";
        }
        else{
             display.innerText +=value;
        }
    
    
    
    });
}
