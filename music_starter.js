// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(40)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  console.log(counter);

  angleMode(DEGREES);

  noStroke();

  //////////////////////////////////////////////////////////////////////////////////////////
  
  if(counter < 1130){     // This section of the code is for the first window which is shown
                          // ...at the beginning of the song.

                          // The counter is responsible for making sure this code only runs in the
                          //...first part of the song where the "broken glass" sound effects happen.

  fill(247, 235, 210, 200); // off white colour for the pane of glass
  rect(320,400,200,500); // glass
  
  fill(247, 235, 210, 190); // off white colour for pane of glass
  rect(320,400,150,500) // glass

  stroke(0);
  fill(247, 235, 210, 220); // off white colour for pane of glass
  rect(320,400,250,500); // glass
  
  stroke(0); // black outline
  fill(59, 56, 56, 255); //grey for the window framing
  
  rect(203,400,15,500); //left window frame
  rect(437,400,15,500); //right window frame
  rect(320,158,250,30); //top window frame
  rect(320,320,220,8); // middle window frame
  rect(317,480,300,30); //bottom window frame

  rect(200,455,10,20); // bottom left detail
  rect(440,455,10,20); // bottom right detail

  stroke(20); // black
  line(195,150,445,150); // top frame detail

  // if statements to make the cracks in the glass appear in time with the song

    if(counter > 400){ // First broken glass details
      line(210,230,255,237); //for > 400 counter
      line(215,230,220,220);
      line(400,290,428,287);
      line(210,300,230,298);

    }
    else{ 
    
    }

      if(counter > 670){ // Second broken glass details
        line(210,400,291,405); //for >670 counter
        line(230,400,220,380);
        line(270,404,300,415); 
        line(210,397,310,403);
        line(210,405,250,410);
      

      }
      else{

      }

        if(counter > 810){ // Third broken glass details
          line(350,220,420,300); //for >810 counter
          line(403,280,428,290);
          line(385,260,430,280);
          line(210,410,220,398);
          line(360,265,428,265);

        }
        else{

        }

          if(counter > 1040){ // final broken glass details
            line(210,415,230,400); //for >1040 counter
            line(403,400,428,415);
            line(390,240,395,270);
            line(380,232,390,265);
            line(300,250,395,260);
            line(340,235,355,255);
            line(350,250,360,230);
            line(370,300,390,267);
          }

    }
      //////////////////////////////////////////////////////////////////////////////////
      else{ // second section for when the second window is shown with all the creatures.

       // this counter starts a little later than when the previous one ends on purpose
       // ... so the screen goes black for a bit for dramatic effect when the intro finishes.
       if(counter > 1140){ 
        
        fill(230,52,32,200); // red colour for pane of glass
        rect(320,400,200,500); //glass

        fill(230,52,32,190); // red colour for pane of glass
        rect(320,400,150,500); //glass
    
        stroke(0);
        fill(230, 52, 32, 220); // red colour for pane of glass
        rect(320,400,250,500); // glass

       
        stroke(0); // black outline
        fill(59, 56, 56, 255); //grey for the window framing
  
        rect(203,400,15,500); //left window frame
        rect(437,400,15,500); //right window frame
        rect(320,158,250,30); //top window frame 
        rect(320,320,220,8); // middle window frame
        rect(317,480,300,30); // bottom window frame

        rect(200,455,10,20); // bottom left detail
        rect(440,455,10,20); // bottom right detail

        stroke(20); // black
        line(195,150,445,150); // top frame detail

        ///////////////////////////////////////////////////
      
        let eyeSize = map(drum,0,100,10,70); // map for the big eye in the middle
  
        fill(255, 250, 250, 230); // slightly transparent white
        ellipse(320,250,180,60); // white part of eye
  
        fill(0); // black
        ellipse(320,250,eyeSize,eyeSize); // pupil of the eye

        fill(230,52,32,255); //red
        noStroke();
        rotate(-40); // rotate to get on angle
        rect(40,333,50,20); // rectangle to break up the shape of the ellipse a bit
  
        rotate(40); // rotating eveything else back to normal

        stroke(0); // black
        fill(0); // black
        line(225,250,250,230); // eye detail
        line(370,220,390,225); // eye detail


        let backStripe = map(bass,0,100,10,200); // map for the stripes on both sides
        noStroke();
        fill(59, 56, 56,200); // grey
        rect(0,0,backStripe,1000);
        rect(640,0,backStripe,1000);
        ////////////////////////////////////////////
      
        // code for the mini red creatures
        
        // left creature
        noStroke();
        fill(230, 52, 32, 255); // red 
        triangle(90,365,90,325,100,350); // left ear 
        triangle(115,355,115,315,125,345); // right ear
        ellipse(120,370,80,50); // head
        rect(110,445,50,110,80); // body

        fill(247, 104, 94); // light red
        ellipse(125,460,30,80); // tummy patch

        fill(40); // background grey
        rect(140,450,10,100); // rect to cover up some of the tummy patch
        
       
        
        let tailLength = map(vocal,0,100,200,700); // map for the length of the creatures tail
        fill(230,52,32,255); // red
        rect(70,600,5,tailLength); // tail
        triangle(60,380,70,360,80,380); //spike on end of tail

        
        let otherEye = map(other,0,100,120,100);
        stroke(0); // black
        fill(255); // white
        ellipse(110,370,30,15); // white part of the eye

        fill(40); // black
        ellipse(otherEye,370,10,10); // pupil of the eye

      ////////////////////////////////////////////////
        
        // right creature
        noStroke();
        fill(230, 52, 32, 255); // red
        triangle(90+445,365,90+445,325,100+445,350); // right ear
        triangle(115+395,355,115+395,315,125+395,345); // left ear
        ellipse(120+400,370,80,50); // head
        rect(110+420,445,50,110,80); // body
       
        
        fill(247, 104, 94); // light red
        ellipse(125+390,460,30,80); // tummy patch

        fill(40); // background grey
        rect(140+360,450,10,100); // rect to cover up some of the tummy patch
        

        let tailLength2 = map(vocal,0,100,200,700);
        fill(230,52,32,255); //red
        rect(70+500,600,5,tailLength2); //tail
        triangle(60+500,380,70+500,360,80+500,380); // spike on end of tail


        let otherEye2 = map(other,0,100,120,100);
        stroke(0); // black
        fill(255); // white
        ellipse(110+420,370,30,15); // white part of the eye

        fill(40); // black
        ellipse(otherEye2+420,370,10,10); // pupil of the eye

       
    }
      else{

      }


  }

}


  
