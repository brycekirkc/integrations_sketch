//Establishing Variables
var con;
var dim;
var cen;
var tick = 0;
var ran = [];
var num = [4, 5, 3, 5, 10];
var s;

var txtli = ['iFOLIO' , 'OPTIMIZE\nPROCESSES' , ' CONVERT' , 'CONNECT' , 'ENGAGE'];
var cc = [];

function setup() {
  for (i = 0; i < 50; i++){
    ran[i] = {
      x: random(50, 100),
      y: random(50, 100)
    }
  }
  for (i = 1; i < 40; i++){
    cc[i] = {
      x: sin((i+1.25) * PI/2 + sin(tick/ran[i].x )/10 ),
      y: cos((i+1.25) * PI/2 + cos(tick/ran[i].y )/10 ),
      r: 100,
      out_x:0,
      out_y:0,
      id: i
    }
  }
  
  active_var();
  
  ellipseMode(CENTER);
  textAlign(CENTER);
  
  s = dim.w/1440;
  
  createCanvas(dim.w, dim.h);
}

function active_var(){
  con = select('#divcon');
  tick++;
  
  dim = {
    w: con.width,
    h: con.height,
  };
  s = dim.w/1440;
  
  cen = {
    w: dim.w / 2,
    h: dim.h / 2
  };
  
  cc[0] = {
    x: cen.w + sin(tick/70) * 10,
    y: cen.h + cos(tick/50) * 10,
    out_x: cen.w + sin(tick/70) * 10,
    out_y: cen.h + cos(tick/50) * 10,
    r: 200 * s,
    id: 0,
  };
  
  for (i = 1; i < 5; i++){
    cc[i].x = sin((i+1.25) * PI/2 + sin(tick/ran[i].x )/10 );
    cc[i].y = cos((i+1.25) * PI/2 + cos(tick/ran[i].y )/10 );
    cc[i].r = 100 * s;
    cc[i].id= i
  }
  for (i = 5; i < 40; i++){
    cc[i].x = sin((i-2.5) * PI/4 + sin(tick/ran[i].x )/10 ) * 1.2;
    cc[i].y = cos((i-2.5) * PI/4 + cos(tick/ran[i].y )/10 ) * 1.2;
    cc[i].r = 75 * s;
    cc[i].id= i
  }
}

function draw() {
  active_var();
  
  createCanvas(
    dim.w,
    dim.h
  );
  
  background('#F3F7FB');
  
  for(i = 0; i < 10; i++){
    company_c(i+18, 1, 4)
  }
  
  for(i = 0; i < 5; i++){
    company_c(i+13, 1, 3)
  }
  
  for(i = 0; i < 3; i++){
    company_c(i+10, 1, 2)
  }
  
  for(i = 0; i < 5; i++){
    company_c(i+5, 1, 1)
  }
  
  for(i = 0; i < 4; i++){
    company_c(i+1, 1, 0)
  }
  
  centerpiece();
}

function centerpiece(){
  push();
  
  //Location
  translate(
    cc[0].x, 
    cc[0].y
  );

  
  //Stroke
  strokeWeight(5);
  stroke('#25BEC8');
  ellipse(
    0,
    0, 
    cc[0].r,
    cc[0].r
  );
  
  txt( txtli[0] , 0 , 15*s, 90*s );
  
  pop();
}

function company_c( myid , tier , parentid){
  let x = cc[myid].x * cc[parentid].r + cc[parentid].out_x;
  let y = cc[myid].y * cc[parentid].r + cc[parentid].out_y;
  cc[myid].out_x = x;
  cc[myid].out_y = y;
  
  push();
  setLineDash([5,5]);
  stroke('#25BEC8');
  line(
    x,
    y,
    cc[parentid].out_x,
    cc[parentid].out_y
  );
  pop();
  
  push();
  
  translate(
    x,
    y
  )
  
  stroke('#25BEC8');
  ellipse(
    0,
    0,
    cc[myid].r,
    cc[myid].r
  )
  
  if (myid < 5){
    txt(txtli[myid], 0 , 5, 10*s);
  }
  
  pop();
}

function txt(s , x , y, f){
  //Text
  push();
  textSize(f*s);
  noStroke();
  text(s , x, y);
  pop();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
