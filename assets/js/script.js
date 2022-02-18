// TODO: Declare any global variables we need
let headRoll = 0
let tailRoll = 0




document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')


    // TODO: Add event listener and handler for flip and clear buttons

// GET REQUIRED ELEMENTS

const flipBtn = document.getElementById('flip')
const pennyImage= document.getElementById('penny-image')
const message = document.getElementById('message')
const heads= document.getElementById("heads")
const tails= document.getElementById("tails")
const headsPerc= document.getElementById("heads-percent")
const tailsPerc= document.getElementById("tails-percent")
const clearBtn = document.getElementById("clear")

flipBtn.addEventListener('click',()=>{
    let flippedHeads = Math.random()<0.5

    if (flippedHeads){
    pennyImage.src= 'assets/images/penny-heads.jpg'
    message.textContent = "YOU FLIPPED HEADS"
    headRoll++
     } else{
         pennyImage.src="assets/images/penny-tails.jpg"
         message.textContent= "YOU FLIPPED TAILS"
         tailRoll++

     }


     heads.textContent = headRoll
     tails.textContent = tailRoll




        // Update the scorboard

        // TODO: Calculate the total number of rolls/flips
        let total= tailRoll + headRoll
        let percentHeads =0
        let percentTails=0
    if (total > 0){

        percentHeads = Math.round((headRoll / total)*100)
        percentTails = Math.round((tailRoll / total)*100)
    }
       
        headsPerc.textContent= percentHeads + '%'
        tailsPerc.textContent= percentTails + '%'

})

    

        

        
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler


clearBtn.addEventListener('click', ()=>{

    tailRoll=0
    headRoll=0
    percentHeads=0
    percentTails=0

    heads.textContent= headRoll
    tails.textContent= tailRoll
    headsPerc.textContent=percentHeads
    tailsPerc.textContent=percentTails
    message.textContent = "Lets Get Rolling"
})
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})