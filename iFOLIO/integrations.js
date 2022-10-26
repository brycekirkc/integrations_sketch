var cc = [];//company circle
var cen;
var s;
var tick = 0;
var circ_num;

var worksize = {
  w: 1440, //what is the working width of how you planned this?
  h:1024, // what is the working height of how you planned this?
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  active_v();
}

function active_v(){
  tick++;
  s = {
    w: windowWidth/ worksize.w,
    h: windowHeight/ worksize.h,
  };
  
  cen = {
    w: windowWidth/2,
    h: windowHeight/2,
  };
  
  for (i = 0; i < 10; i++){
    cc[i] = {//company circle variables
      x: 100 * i + 50 * cos(i + tick/50),
      y: cen.h + 100 * sin(i + tick/50),
      r: 55,
    };
    //console.log(sin(i + tick/10));
  }
}

function draw(){
  createCanvas(windowWidth,windowHeight);
  background('#fff');
  active_v();
  
  for (i = 0; i < 10 ; i++){
    /*console.log(cc[i].x);//for testing if the company circle setup is correct
    console.log(cc[i].y);//for testing if the company circle setup is correct
    console.log(cc[i].r);//for testing if the company circle setup is correct*/
    company_c(cc[i].x , cc[i].y , cc[i].r);
  }
  ellipse(100 , 100 , 100 , 100);
  
  ellipse(cen.w + 100*sin(tick/10), cen.h + 100*cos(tick/10), 100,100);
  
}

function company_c(x, y, r, id){
  push();
  translate(0,0);
  setLineDash([5, 5]);
  line(100,100,x,y);
  pop();
  
  push();
  translate(x,y);
  stroke('#25BEC8');
  strokeWeight(2);
  color('white');
  ellipse(0,0,r,r);
  pop();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}