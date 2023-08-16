/*
 * This simulation uses the HTML5 canvas API.
 * Refer to this site https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
let canvas = document.getElementById('canvas');
/*
 * ctx stands for context - Every drawing function call is based on this context
 * The below comment is a special type of comment which will inform VSCode about the type
 * of the variable. Here ctx is of type *CanvasRenderingContext2D*. This is optional adding
 * this will let have better autocomplete features. Without this you won't have proper
 * autocompletion when you do *ctx.*
 
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext('2d');
let wave_frequency_span = document.getElementById("Fm");
let wave_amplitude_span = document.getElementById("Am");
let data = document.getElementById("dm");
let canvas_width = canvas.parentElement.clientWidth;
let canvas_height = canvas.parentElement.clientHeight;
let wave_amplitude_slider = document.getElementById("amplitude");
let wave_frequency_slider = document.getElementById("frequency");
let data_bit = document.getElementById('data_bit');
let height=330;
let orgx = 10;
let orgy = 80;
let ed=orgy;
let ampt=3;
let a= [0,0,0];
// Draws the axes for the graph
function drawAxes() {
    
    canvas_width = canvas.parentElement.clientWidth;
    ctx.beginPath();
    // Vertical line
    ctx.moveTo(10, 10);           
    ctx.lineTo(10, 330);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    // Horizontal line
    ctx.moveTo(10, 330);
    ctx.lineTo(canvas_width, 330);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    // Vertical line
    // ctx.moveTo(canvas_width/2, 10);           
    // ctx.lineTo(canvas_width/2, 330);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    // // Horizontal line
    // ctx.moveTo(canvas_width/2, 330);
    // ctx.lineTo(canvas_width - 50, 330);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    //Base line
    // ctx.moveTo(orgx, (line_start + line_end) / 2);
    // ctx.lineTo(canvas_width - 50, (line_start + line_end) / 2);
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    ctx.save();
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Amplitude",  20, 20, 90);
    ctx.fillText("Time", canvas_width - 100, 350, 70);

    ctx.fillText("fs", 80, 350, 70);
    // ctx.beginPath();
    // ctx.moveTo(80, 10);           
    // ctx.lineTo(80, 330);
    // ctx.setLineDash([5, 5]); 
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // ctx.closePath();

    ctx.fillText("2fs", 160, 350, 70);
    // ctx.beginPath();
    // ctx.moveTo(160, 10);           
    // ctx.lineTo(160, 330);
    // ctx.setLineDash([5, 5]); 
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // ctx.closePath();

    ctx.fillText("3fs", 240, 350, 70);
    // ctx.beginPath();
    // ctx.moveTo(240, 10);           
    // ctx.lineTo(240, 330);
    // ctx.setLineDash([5, 5]); 
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // ctx.closePath();

    ctx.fillText("4fs", 320, 350, 70);
    // ctx.beginPath();
    // ctx.moveTo(320, 10);           
    // ctx.lineTo(320, 330);
    // ctx.setLineDash([5, 5]); 
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // ctx.closePath();

    ctx.fillText("5fs", 400, 350, 70);
    // ctx.beginPath();
    // ctx.moveTo(400, 10);           
    // ctx.lineTo(400, 330);
    // ctx.setLineDash([5, 5]); 
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // ctx.closePath();

    ctx.fillText("6fs", 480, 350, 70);
    // ctx.beginPath();
    // ctx.moveTo(480, 10);           
    // ctx.lineTo(480, 330);
    // ctx.setLineDash([5, 5]); 
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // ctx.closePath();

    ctx.fillText("7fs", 560, 350, 70);
//     ctx.beginPath();
//     ctx.moveTo(560, 10);           
//     ctx.lineTo(560, 330);
//     ctx.setLineDash([5, 5]); 
//     ctx.strokeStyle = "black";
//     ctx.stroke();
//     ctx.closePath();
// ctx.restore();
    ctx.fillText("8fs", 640, 350, 70);
    ctx.closePath();
    
}
function topline(){
    ctx.beginPath();
    ctx.moveTo(orgx,height-ampt);
    ctx.lineTo(orgy,height-ampt);
    ctx.stroke();
    ctx.strokeStyle="black";
    ctx.fillStyle="black";
    ctx.closePath();
}
function baseline(){
    ctx.beginPath()
    ctx.moveTo(orgx,height);
    ctx.lineTo(orgy,height);
    ctx.stroke();
    ctx.strokeStyle="black";
    ctx.closePath();
}
function  onedrop(){

    ctx.beginPath();
    ctx.moveTo(orgx,height-ampt);
    ctx.lineTo(orgy,height-ampt);
    ctx.stroke();
    ctx.strokeStyle="black";
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(orgy,height-ampt);
    ctx.lineTo(orgy,height);
    ctx.stroke();
    ctx.strokeStyle="black";
    ctx.closePath();
}

function  zeroup(){
    ctx.beginPath()
    ctx.moveTo(orgx,height);
    ctx.lineTo(orgy,height);
    ctx.stroke();
    ctx.strokeStyle="black";
    ctx.closePath();



    ctx.beginPath()
    ctx.moveTo(orgy,height);
    ctx.lineTo(orgy,height-ampt);
    ctx.stroke();
    ctx.strokeStyle="black";
    ctx.closePath();  
}


function nrzl(){
    let b=a.length-1;
    orgx = 10;
    ampt= +wave_amplitude_slider.value;
    orgy = +wave_frequency_slider.value;
    ed=orgy;
    for(let i=0;i<a.length-1;i++){
        if((+a[i]===1)&&(+a[i+1]===1||+a[i+1]===undefined)){
            topline();
            orgx=orgy;
            orgy+=ed;
        }
        else if((+a[i]===1)&&(+a[i+1]===0)){
              onedrop();
              orgx=orgy;
              orgy+=ed;
        }
        else if((+a[i]===0)&&(+a[i+1]===1 ||+a[i+1]===undefined)){
                zeroup();
                orgx=orgy;
                orgy+=ed;
        }
        else if((+a[i]===0)&&(+a[i+1]===0)){
                  baseline();
                  orgx=orgy;
                  orgy+=ed;
        }
       
    }
    if(+a[b]===0){
            baseline();
              
        }else{
            topline();
        }
    }
function drawGraph() {
    drawAxes();
    nrzl();
}

let size_set = false;
function draw() {
 requestAnimationFrame(draw);

    canvas_height = canvas.parentElement.clientHeight;
    canvas_width = canvas.parentElement.clientWidth;
    if (canvas_height > 100 && !size_set) {
        canvas_height = canvas.parentElement.clientHeight + 200;
        canvas_width = canvas.parentElement.clientWidth;
        ctx.canvas.width = canvas_width;
        ctx.canvas.height = canvas_height;
        size_set = true;
    }
    // Clear the screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas_width, canvas_height);

    // Set values for the indicators.
    wave_amplitude_span.innerText = wave_amplitude_slider.value + ' V';
    wave_frequency_span.innerText = wave_frequency_slider.value + ' Hz';
    data.innerText=data_bit.value;
    orgy=wave_frequency_slider.value;
    drawGraph();
}
function graph(){
   a = data_bit.value.split('')
    $('#exampleModal').modal('show');
    requestAnimationFrame(draw);
}
document.getElementById("button1").onclick = graph;
// function setupModal(event) {
//     $('#exampleModalCenter').modal('show');
// }
// document.getElementById("button1").onclick = setupModal;
