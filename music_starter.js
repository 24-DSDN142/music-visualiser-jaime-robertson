let y= 110

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(40)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  console.log(counter);

  noStroke();
  
  fill(230, 52, 32, 200);
  rect(320,400,200,500);
  
  fill(230,52,32,190);
  rect(320,400,150,500)

  



  stroke(0);
  fill(230, 52, 32, 220); // red
  rect(320,400,250,500); // glass
  

  stroke(0);
  fill(65); //grey

  //rect(380,333,10,320);
  //rect(260,333,10,320);
  
  rect(203,400,15,500); //left window frame
  rect(437,400,15,500); //right window frame
  rect(320,158,250,30); //top window frame 

  rect(320,320,220,8) // middle window frame

  rect(317,480,300,30)


  stroke(20); // black
  line(195,150,445,150);

  //line(210,230,230,230)
  line(215,)
 
  //  if(counter > 0){
  //   fill(138, 53, 50);
  //   rect(320,100,50,50);
  // }
  //  else{ 
  //   fill(0);  

  // }
 
  // for(let i = 0; i <=4; i ++){
  //   fill(150,219,190);
  //   ellipse(400, y * i +100 , 100);


  }


  // let eyeSize = map(vocal,0,100,30,50);
  // fill(57,201,79);
  // ellipse(180,300,100,100);
  // ellipse(350,300,100,100);

  // ellipse(260,400,300,200);

  // fill(0);
  // ellipse(180,290,eyeSize,eyeSize);
  // ellipse(350,290,eyeSize,eyeSize);

  // let mouthSize = map(bass,0,100,20,150);
  // fill(0);
  // ellipse(260,430,200,mouthSize);
  


//let bar_spacing = height / 10; {
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// }