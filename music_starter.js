// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(40)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  console.log(counter);

  angleMode(DEGREES);

  noStroke();
  
  if(counter < 1130){
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
  rect(200,455,10,20);
  rect(440,455,10,20); 

  rect(320,320,220,8); // middle window frame

  rect(317,480,300,30);

  stroke(20); // black
  line(195,150,445,150);


    if(counter > 400){
      line(210,230,255,237); //for > 400 counter
      line(215,230,220,220);
      line(400,290,428,287);
      line(210,300,230,298);

    }
    else{ 
    
    }

      if(counter > 670){
        line(210,400,291,405); //for >670 counter
        line(230,400,220,380);
        line(270,404,300,415); 
        line(210,397,310,403);
        line(210,405,250,410);
      

      }
      else{

      }

        if(counter > 810){

          line(350,220,420,300); //for >810 counter
          line(403,280,428,290);
          line(385,260,430,280);
          line(210,410,220,398);
          line(360,265,428,265);

        }
        else{

        }

          if(counter > 1040){
            line(210,415,230,400); //for >1050 counter
            line(403,400,428,415);
            line(390,240,395,270);
            line(380,232,390,265);
            line(300,250,395,260);
            line(340,235,355,255);
            line(350,250,360,230);
            line(370,300,390,267);
          }

    }

      else{

       if(counter > 1140){ 
        
        

        fill(230, 52, 32, 200);
        rect(320,400,200,500);

        fill(230,52,32,190);
        rect(320,400,150,500);
    
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
  
        fill(255, 250, 250, 230);
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
        line(225,250,250,230);
        line(370,220,390,225);


        let backStripe = map(bass,0,100,10,200);
        noStroke();
        fill(59, 56, 56,200);
        rect(0,0,backStripe,1000);
        rect(640,0,backStripe,1000);

      
        // singing character 
        
        noStroke();
        fill(230, 52, 32, 255);
        triangle(90,365,90,325,100,350);
        triangle(115,355,115,315,125,345);
        ellipse(120,370,80,50);
        rect(110,445,50,110,80);

        fill(247, 104, 94);
        ellipse(125,460,30,80);

        fill(40);
        rect(140,450,10,100);
        
        
        let tailLength = map(vocal,0,100,200,700);
        fill(230,52,32,255);
        rect(70,600,5,tailLength);
        triangle(60,380,70,360,80,380);

        stroke(0);
        fill(255);
        ellipse(110,370,30,15);
       
        
        let otherEye = map(other,0,100,120,100);
        
        fill(40);
        ellipse(otherEye,370,10,10);

//////////////////////////////
        
        noStroke();
        fill(230, 52, 32, 255);
        triangle(90+420,365,90+420,325,100+420,350);
        triangle(115+415,355,115+415,315,125+415,355);
        ellipse(120+400,370,80,50);
        rect(110+420,445,50,110,80);

        fill(247, 104, 94);
        ellipse(125+390,460,30,80);

        fill(40);
        rect(140+360,450,10,100);
        
        ////////////////////////////////////////////
        
        let tailLength2 = map(vocal,0,100,200,700);
        fill(230,52,32,255);
        rect(70+500,600,5,tailLength2);
        triangle(60+500,380,70+500,360,80+500,380);

       
       
        
        let otherEye2 = map(other,0,100,120,100);
        stroke(0);
        fill(255);
        ellipse(110+420,370,30,15);

        fill(40);
        ellipse(otherEye2+420,370,10,10);

       
       

    }
      else{



    }


  }

}


  
