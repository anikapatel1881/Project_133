img = "";
status = "";
objects = [];

function preload(){
   img = loadImage("roller_coaster.jpg");
}

function setup(){
   canvas = createCanvas(600, 400);
   canvas.center();

   objectDetector = ml5.objectDetector("cocossd", modelLoaded);

   document.getElementById("status").innerHTML = "Stautus: Detecting objects...";
}

function modelLoaded(){
    console.log("Model loaded successfully!");
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 600, 400);

    if(status != ""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object detected";
            fill("red");
            percent = object[i].confidence;
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}