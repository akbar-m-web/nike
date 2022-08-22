//comeCase
let count = 0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
 


    function increment() {
      count = count += 1
     countEl.textContent = count
    }
     // 1. create a function . save (), which  out the count when  it's called

      function save() {
        let countStr = count + " - ";
        saveEl.textContent += countStr;
        countEl.textContent = 0;
        count = 0
      }

     /*  save() */
     let errorParagraph = document.getElementById("error")

    
     function purdchase() {
      errorParagraph.textContent = " something ewnt wrong, pleas try again"
       
     }




     let num1 = 8;
   let num2 = 2;
    
   document.getElementById("num1-el").textContent = num1;
   document.getElementById("num2-el").textContent = num2;
 

    let sumEl = document.getElementById("sum-el");

    function add(){
      let result = num1 + num2
          sumEl.textContent = "Sum:" + result
    }

     function subtreact() {
      let result = num1 - num2
      sumEl.textContent =  "Sum:" + result;
     }

      function divida() {
        let result = num1 / num2 ;

        sumEl.textContent = "Sum:" + result;
      }

       function Multiply() {
        let result = num1 * num2 ; 
           sumEl.textContent = "Sum:" + result;
       }

  