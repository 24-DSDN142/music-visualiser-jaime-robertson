let y= 110

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(40)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  console.log(counter);

  angleMode(DEGREES);

  noStroke();
  
  if(counter < 1050){
  fill(247, 235, 210, 200);
  rect(320,400,200,500);
  
  fill(247, 235, 210, 190);
  rect(320,400,150,500)

  stroke(0);
  fill(247, 235, 210, 220); // red
  rect(320,400,250,500); // glass
  
  stroke(0);
  fill(59, 56, 56, 255); //grey
  
  rect(203,400,15,500); //left window frame
  rect(437,400,15,500); //right window frame
  rect(320,158,250,30); //top window frame 

  rect(320,320,220,8); // middle window frame

  rect(317,480,300,30);

  stroke(20); // black
  line(195,150,445,150);

  

  line(210,230,255,237); //for > 300 counter
  line(215,230,220,220);
  line(400,290,428,287);
  line(210,300,230,290);

  line(210,400,291,405);
  line(230,400,220,380);
  line(270,400,310,425); 

    if(counter > 300){
    
    }
    else{ 
    
    }

  }

  else{

    if(counter > 1150){  
      fill(230, 52, 32, 200);
      rect(320,400,200,500);
      
      fill(230,52,32,190);
      rect(320,400,150,500)
    
      stroke(0);
      fill(230, 52, 32, 220); // red
      rect(320,400,250,500); // glass

       
      stroke(0);
      fill(59, 56, 56, 255); //grey
  
      rect(203,400,15,500); //left window frame
      rect(437,400,15,500); //right window frame
      rect(320,158,250,30); //top window frame 

      rect(320,320,220,8); // middle window frame

      rect(317,480,300,30);

      stroke(20); // black
      line(195,150,445,150);
      
      let eyeSize = map(drum,0,100,10,70);
  
      fill(255);
      ellipse(320,250,180,60);
  
  
      fill(0);
      ellipse(320,250,eyeSize,eyeSize);

      fill(230,52,32,255);
      noStroke();
      rotate(-40);
      rect(40,333,50,20);
  
      rotate(40);

      stroke(0);
      fill(0);
      line(250,230,290,200);

      let backStripe = map(bass,0,100,10,200);
      noStroke();
      fill(59, 56, 56,200);
      rect(0,0,backStripe,1000);
      rect(640,0,backStripe,1000);
    }
      else{


    }


  }

}


  
