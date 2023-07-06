const cells =document.querySelectorAll(".cell");
const stat =document.querySelector("#status");
const rese =document.querySelector("#reset"); 
const win =[
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];

let option= ["", "", "", "", "", "", "", "", ""]
let cp="X";
let rungame =false;

init()
function init()
{
cells.forEach( cell => cell.addEventListener("click",cellclick))
stat.textContent =  `${cp} 's  turn`;
rese.addEventListener("click",reset2);
rungame=true;
}


function cellclick()
{
 const cellIndex=this.getAttribute("cellIndex")
 if(option[cellIndex] != "" || !rungame)
 {
return;
 }
 update(this,cellIndex);
  check_player()
}


function change_player()
{
 cp = (cp == "X") ? "O" : "X";
 stat.textContent=`${cp}'s turn`;
}

function check_player()
{
 let localwin = false;
 for(let i=0;i<win.length;i++)
 {
  const cond=win[i]
  const A=option[cond[0]]
  const B=option[cond[1]]
  const C=option[cond[2]]
  if(A == "" || B == "" || C =="")
{
 continue
}
if(A == B && B == C)
{
 localwin = true
 break
}
}

if(localwin)
{
   stat.textContent=`${cp}'s Win`
 document.body.style.color="blue";
  rungame=false
}
else if(!option.includes(""))

{
stat.textContent=`Draw`
document.body.style.color="red";
rungame=false
}
else
{
 change_player()
}

}

function update(cell,index)
{

option[index]=cp; 
cell.textContent=cp;
}
function reset2()
{
  cp="X"
  option=["","","","","","","","",""]
  stat.textContent=`${cp} 's turn `
  cells.forEach( cell=> cell.textContent= "")
document.body.style.color="black";
  rungame=true;
 
}

