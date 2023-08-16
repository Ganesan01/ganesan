/*
 * This simulation uses the HTML5 canvas API.
 * Refer to this site https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
let canvas = document.getElementById('canvas6');


/*
 * ctx stands for context - Every drawing function call is based on this context
 * The below comment is a special type of comment which will inform VSCode about the type
 * of the variable. Here ctx is of type *CanvasRenderingContext2D*. This is optional adding
 * this will let have better autocomplete features. Without this you won't have proper
 * autocompletion when you do *ctx.*
 
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext('2d');
let wave_frequency_span = document.getElementById("Fm6");
let wave_amplitude_span = document.getElementById("Am6");
let data = document.getElementById("dm6");
let canvas_width = canvas.parentElement.clientWidth;
let canvas_height = canvas.parentElement.clientHeight;
let wave_amplitude_slider = document.getElementById("amplitude6");
let wave_frequency_slider = document.getElementById("frequency6");
let a=[1,0,1];
let stp=10,edp=40;
let ed=edp;
var data_bit = document.getElementById('data_bit'); //6
let height =330;
let amp=2;
let x1=height,x2=height-amp;
let b=a.length-1;
function biphasel(){
    stp=10,edp= +wave_frequency_slider.value;
    ed=edp;
    b=a.length-1;
    x1=height,amp= +wave_amplitude_slider.value,x2=height-amp;
    if(a[0]==0){
        baseline();
        stp=edp;
        edp+=ed;
    }else{
    firstone() 
    stp=edp;
        edp+=ed; 
}
     for(let i=1;i<a.length;i++){
       if(a[i]==0&&a[i-1]==0){
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(stp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
         baseline();
        stp=edp;
        edp+=ed;
       
       
       } else  if(a[i]==0&&a[i-1]==1){
        baseline();
        stp=edp;
        edp+=ed;
       }else  if(a[i]==1&&a[i-1]==1){
        ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(stp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
         onedrop();
        stp=edp;
        edp+=ed;
       
       }else  if(a[i]==1&&a[i-1]==0){
        onedrop();
        stp=edp;
        edp+=ed;
       }
    }
}

function baseline(){
            
            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
         
            console.log(stp)
            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(stp,x2);
            ctx.stroke(); 
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=ed;
            console.log(edp)
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(edp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            
            console.log(edp)
    }
  function  onedrop(){

         
    ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(edp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
         
            console.log(stp)
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(stp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=ed;
            console.log(edp)
            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
            console.log(edp)

  }
    
  function firstone(){
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(edp,x2);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
            
            ctx.beginPath();
            ctx.moveTo(stp,x2);
            ctx.lineTo(stp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            edp=stp;
            edp+=ed;
       
            ctx.beginPath();
            ctx.moveTo(stp,x1);
            ctx.lineTo(edp,x1);
            ctx.stroke();
            ctx.strokeStyle="black";
            ctx.closePath();
            stp=edp;
            console.log(edp)
}

// Draws the axes for the graph
function drawAxes() {
    

    ctx.beginPath();
    // Vertical line
    ctx.moveTo(10, 10);           
    ctx.lineTo(10, 330);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Horizontal line
    ctx.moveTo(10, 330);
    ctx.lineTo(canvas_width - 50, 330);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Base line
    // ctx.moveTo(orgx, (line_start + line_end) / 2);
    // ctx.lineTo(canvas_width - 50, (line_start + line_end) / 2);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Amplitude", 10+ 10, 10 + 10, 90);
    ctx.fillText("Time", canvas_width - 100, 330 + 20, 70);
    ctx.fillText("fs", 80, 350, 70);
    ctx.fillText("2fs", 160, 350, 70);
    ctx.fillText("3fs", 240, 350, 70);
    ctx.fillText("4fs", 320, 350, 70);
    ctx.fillText("5fs", 400, 350, 70);
    ctx.fillText("6fs", 480, 350, 70);
    ctx.fillText("7fs", 560, 350, 70);
    ctx.fillText("8fs", 640, 350, 70);
    ctx.closePath();
    
}


function drawGraph() {
    
    drawAxes();
   biphasel();
}

let size_set = false;
function draw() {
   requestAnimationFrame(draw);

    canvas_height = canvas.parentElement.clientHeight;
    canvas_width = canvas.parentElement.clientWidth;
    if (canvas_height > 100 && !size_set) {
        canvas_height = canvas.parentElement.clientHeight +200;
        canvas_width = canvas.parentElement.clientWidth;
        ctx.canvas.width = canvas_width;
        ctx.canvas.height = canvas_height;
        size_set = true;
        console.log("false")
 }
    // Clear the screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas_width, canvas_height);

    // Set values for the indicators.
    wave_amplitude_span.innerText = wave_amplitude_slider.value + ' V';
    wave_frequency_span.innerText = wave_frequency_slider.value + ' Hz';
    data.innerText=data_bit.value;
    drawGraph();
}
function graph(){
   a = data_bit.value.split('')
    $('#exampleModal5').modal('show');
    requestAnimationFrame(draw);
}
document.getElementById("button6").onclick = graph; //5
// function setupModal(event) {
//     $('#exampleModalCenter').modal('show'); //5
// }
// document.getElementById("button6").onclick = setupModal;
