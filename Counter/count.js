const displayEl1=document.getElementById("display-el1")
        let count1=0
        const displayEl2=document.getElementById("display-el2")
        let count2=0
        const prevEl=document.getElementById("prev-el")
        increment1.addEventListener("click",function(){
        count1=count1+1
        displayEl1.innerText=count1
        
        
        })

        decrement1.addEventListener("click",function(){
        count1=count1-1
        displayEl1.innerText=count1
        
        })

        
        increment2.addEventListener("click",function(){
        count2=count2+1
        displayEl2.innerText=count2
        
        })

        decrement2.addEventListener("click",function(){
        count2=count2-1
        displayEl2.innerText=count2
        })
        
        
        saveEl.addEventListener("click",function(){
        let sum=count1+count2
        prevEl.innerText+=" "+ sum+", "
        displayEl2.innerText=0
        displayEl1.innerText=0
        count1=0
        count2=0
        })
        
       
