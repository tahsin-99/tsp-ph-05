
// reusable
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}


// heart btn
const heartBtns=document.getElementsByClassName('heart-btn')
for(let heartBtn of heartBtns){
    heartBtn.addEventListener('click',function(){
       const heartCount=getElement('heart-count')
       const newHeartCount=Number(heartCount.innerText)+1
       heartCount.innerText=newHeartCount
    })
}
// copy
const copyButtons=document.getElementsByClassName('copy-btn');
for(const copyButton of copyButtons){
    copyButton.addEventListener('click',function(){
         const card = copyButton.closest('div.border-2');
         
         const number=card.querySelector('h2').innerText;
         navigator.clipboard.writeText(number)

         alert(`Number copied: ${number}`)
         const copyCount=getElement('copy-count')
          const newCopyCount=Number(copyCount.innerText)+1
       copyCount.innerText=newCopyCount
    })
}





// call btn

const callButtons=document.getElementsByClassName('call-btn')
for(const callButton of callButtons){
    callButton.addEventListener('click',function(){
         const card = callButton.closest('div.border-2');

       
        const title = card.querySelector('h3').innerText;
        const number = card.querySelector('h2').innerText;
        


         const coinCount=getElement('coin-count')
        if(coinCount.innerText > 0){
            alert(`📞Calling ${title} ${number}....`)
       const newCoinCount=Number(coinCount.innerText)-20
       coinCount.innerText=newCoinCount

       const newContainer=getElement('call-history');
       const newDiv=document.createElement('div')
       newDiv.innerHTML=`
        <div class=" mx-auto w-[450px] h-[83px] bg-gray-200 p-4 flex justify-between item-center rounded-lg">
                   <div>
                     <h2 class="font-semibold text-lg">${title}</h2>
                    <p class="text-[18px]">${number}</p>
                   </div>
                   <div>
                    ${new Date().toLocaleTimeString()}
                   </div>
       `
       newContainer.append(newDiv)
       
        }
        else{
            alert("Not enough coins — at least 20 coins are required to call.")
        }

       


    })
}

// clear
const clear=getElement('clear').addEventListener('click',function(){
    const clear=getElement('call-history')
    clear.innerHTML=''
})

