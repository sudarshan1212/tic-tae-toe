const box=document.querySelectorAll('.box')
const statusTxt=document.querySelector('.status')
const restart=document.querySelector('.btn')
let turnX=true
 let winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]];
  let options=["","","","","","","",""]
 box.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX==true){
            box.innerHTML='X'
            turnX=false
        }else{
            box.innerHTML='O'
            turnX=true
        }
        box.disabled=true
        checkwinner()
    })
 }) 
 


const checkwinner=()=>{
for(let i=0;i<winner.length;i++){
    console.log(winner[0]);
   let condition=winner[i]
   const box1=box[condition[0]].innerText
   const box2=box[condition[1]].innerText
   const box3=box[condition[2]].innerText
   if(box1!="" &&box2!="" &&box3!=""){
    if(box1===box2&& box2==box3){
        // displaywinner()
        box[condition[0]].classList.add('hi') 
        box[condition[1]].classList.add('hi')
        box[condition[2]].classList.add('hi')
      
        display(box1)
    }
   }
}

}

const display=(box)=>{
    statusTxt.innerText=`congratulation ${box}`
  disable()
}
const disable=()=>{
    for(let boxes of box){
        boxes.disabled=true
    }
}
restart.addEventListener('click',()=>{
    statusTxt.innerHTML='    Play Now !'
    turnX=true
  box.forEach((box)=>{
      box.innerHTML=""
      box.disabled=false
      box.classList.remove('hi')
  })
})
checkwinner()




// const box=document.querySelectorAll('.box')
// const button=document.querySelector('.btn')
//  const statustxt=document.querySelector('.status')
// let turno=true;//playero player x
// const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
// [0,4,8],[2,4,6]];

// const resetgame=()=>{
//    statustxt.innerHTML=`Play Now  !`
//   turno=true;
// //   for (let boxes of box){
// //     boxes.disabled=false
// //     boxes.innerText=""
// //     boxes.classList.remove('hi')    
// // }
// box.forEach((boxes)=>{
//         boxes.disabled=false;
//     boxes.innerText=""
//     boxes.classList.remove('hi')    
// })
// } 
// box.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         // console.log("button was clicked");
//         if(turno===true){
//             box.innerHTML="X"
//             turno=false;
    
//         }else{
//             box.innerHTML="O"
//             turno=true;            
//         }
//         box.disabled=true
//         checkwinner()
//     })  
// })
// const didable=()=>{
//     for(let boxes of box){
//         boxes.disabled=true
//     }    
// }
// const showwinner=(wiiner)=>{
//     statustxt.innerText=`Congratulations the winner is ${wiiner}`
//     didable()
// }
// const checkwinner=()=>{
//     for(let patters of winpatterns){

//      let pos0=box[patters[0]].innerText
//      let pos1=box[patters[1]].innerText
//      let pos2=box[patters[2]].innerText
//      if(pos0!="" && pos1!="" && pos2!=""){
//         if(pos0===pos1 && pos1===pos2){
//             // console.log("winner",pos0)
//             showwinner(pos0)
//             box[patters[0]].classList.add('hi')
//             box[patters[1]].classList.add('hi')
//             box[patters[2]].classList.add('hi')
//         }   
//      }

        
        
//      }
//     }
//     // checkwinner()

// button.addEventListener("click",resetgame)


// const box=document.querySelectorAll('.box')
// const statustxt=document.querySelector('.status')
// const btn=document.querySelector('#restart')
// let x="X"
// let o="O"
// // console.log(x);
// const win=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]       
// ];
// let options=["","","","","","","","",""]
// let currentplayer=x
// let player='X'
// let running=false;
// init()
// function init(){
// box.forEach(box=>box.addEventListener('click',boxclick))
// btn.addEventListener('click',restart)
// statustxt.textContent=`${player} Your turn`
// running=true

// }
// function boxclick(){
// let index= this.dataset.index;
// // console.log(index);
// if(options[index]!=""|| !running){
//     return
// }
// updatebox(this,index)
//  checkwiner()
// }   

// function updatebox(box,index){  
//       options[index]=player
  
//     box.innerHTML=currentplayer;
   

// }
// function changeplayer(){
//     player=(player=='X')?"O":"X"
//     currentplayer=(currentplayer==x)?o:x
//     statustxt.textContent=`${player} Your turn`

// }

// function checkwiner(){
//     let iswon =false
//     for(i=0;i<win.length;i++){
//         const condition=win[i]
//         const box1=options[condition[0]]
//         const box2=options[condition[1]] 
//          const box3=options[condition[2]]
//          if(box1===""|| box1==="" ||box1===""){continue} 
//          if(box1==box2&& box2==box3){
//             iswon=true
//              box[condition[0]].classList.add('hi')
//              box[condition[1]].classList.add('hi')
//              box[condition[2]].classList.add('hi')
//          }
//     }
//          if(iswon){
//             statustxt.textContent=`you won`
//             running=false
//          }else if(!options.includes("")){
//             statustxt.textContent=`game drw`
//             running=false
//          }else{
//             changeplayer()
//          }
    
// }
// function restart(){

//   options=["","","","","","","","",""]
//  currentplayer=x
//  player='X'
//  running=true
//  box.forEach(box=>{
//     box.innerHTML=""
//     box.classList.remove('hi ')
//  })
// }