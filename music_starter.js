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
  
  rect(203,400,15,500); //left window frame
  rect(437,400,15,500); //right window frame
  rect(320,158,250,30); //top window frame 

  rect(320,320,220,8) // middle window frame

  rect(317,480,300,30)

  stroke(20); // black
  line(195,150,445,150);


 
    if(counter > 320){
      line(210,230,245,232);
      line(215,230,220,220);
    
      line(400,290,428,287);
   }
    else{ 
       

   }
 

   
  let eyeSize = map(drum,0,100,20,80);
  
  fill(255);
  ellipse(320,250,180,60);
  
  
  fill(0);
  ellipse(320,250,eyeSize,eyeSize);

  fill(230,52,32,240);
  rect(230,240,20,10)
  
 
  //ellipse(180,300,100,100);
  //ellipse(350,300,100,100);

  //ellipse(260,400,300,200);

  //fill(0);
  //ellipse(180,290,eyeSize,eyeSize);
 

  //let mouthSize = map(bass,0,100,20,150);
  //fill(0);
  //ellipse(260,430,200,mouthSize);

  }


  
