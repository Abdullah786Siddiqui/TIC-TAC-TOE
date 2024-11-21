let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let winbtn = document.querySelector("#msg")
let newgame = document.querySelector("#newgame")
let cont = document.querySelector(".msg-cont")
let btnO = true
const winningPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) =>{
 box.addEventListener("click",()=>{
  
    if(btnO){
        box.innerText ="O"
        btnO =false
    }else{
        box.innerText ="X"
        btnO = true
        
    }
    box.disabled = true
    cheakWinner()
 })
})

const resetGame =()=>{
    let btnO = true
    anablebtn()
    msg-cont.classList.add("hide")

}

const disablebtn =()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

const anablebtn =()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText =""
    }
}

const gamewinner=(winner)=>{
    winbtn.innerText = `Conratulation Winner is ${winner}`
    msg-cont.classList.remove("hide")
}
const cheakWinner=()=>{
  for(patterns of winningPattern){
    
    let post1val= boxes[patterns[0]].innerText
    let post2val= boxes[patterns[1]].innerText
    let post3val= boxes[patterns[2]].innerText
     
    if(post1val != "" && post2val!= "" && post3val!=""){
        if(post1val===post2val&& post2val===post3val){
           
            gamewinner(post1val)
            disablebtn ()
           
            
        }
    }
  }
}

newgame.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
