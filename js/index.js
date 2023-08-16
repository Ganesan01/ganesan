const set=document.getElementById("setup")
const active=document.querySelector(".display")
const dis=active.querySelector(".setup")
const type=document.querySelector(".types")
const click=document.querySelector(".graph")
dis.addEventListener("click",()=>{
    active.classList.add("active");
    $('#exampleModalCenter').modal('show');  
})

//document.getElementById("button1").onclick = graph;
click.addEventListener("click",()=>{

    type.classList.add("active");
    $('#modal').modal('show'); 
   // $('#exampleModalCenter').modal('show');  
})