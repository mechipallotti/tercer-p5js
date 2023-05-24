var pincel = 10;

function setup() {
  
  console.log(('TRES OPCIONES POSIBLES: TOCAR BOTON DERECHO, TOCAR BOTON IZQUIERDO,TOCAR TECLA "A".'));
  createCanvas(500, 500);
  background(0);
  fill(255);
  ellipse(250, 250, 100, 100);

  stroke(255);
  strokeWeight(1);
  line(250, 0, 250, 500);
}

function draw() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      //CAMBIO DE COLOR DE ELIPSE Y LINEA
      
      strokeWeight(0);
      fill(0);
      ellipse(250, 250, 100, 100);
      stroke(0);
      strokeWeight(1);
      line(250, 0, 250, 500);
  

      // CIRCULOS PARA BOLACEAR
      stroke(255, 255, 255, 20);
      strokeWeight(100);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  if (mouseButton == RIGHT) {
    // ELIPSE QUE SIGUE AL MOUSE
    background(255);
    noStroke();
    fill(0, 0, 35);
    strokeWeight(pincel);
    ellipse(mouseX, mouseY, 400, 400);

    //LINEAS
    strokeWeight(1);
    stroke(200, 230, 174);
    
    for(var i= 0; i <= 500; i += 5) {
      
      var mx = mouseX / 10;
      var my= mouseY /10;
    var desplazamientoA = random(-mx, mx);
      var desplazamientoB = random (-mx, mx);
      
      line(i + desplazamientoA, 0, 250, 250);
      line( desplazamientoA , i, 250, 250);
      line(250, 250, i, 500);
      line(250, 250, 500, i);
    }


  }

  //TRABAJO ANTERIOR
  if (keyIsPressed) {
    key = "a";
    background(9, 99, 13);

    //CUELLO Y TORSO
    fill(198, 23, 23);
    noStroke();
    rect(135, 250, 130, 200);
    rect(0, 400, 400, 100);

    // QUE APARENTE CAMBIO DE CANVAS
    fill(251);
    rect(400, 0, 400, 500);

    //PELO
    fill(0);
    bezier(130, 180, 110, -70, 320, -70, 310, 190);

    //ROSTRO
    fill(245);
    stroke(95);
    ellipse(200, 160, 170, 300);

    //BARBILLA
    fill(0);
    noStroke();
    bezier(130, 255, 150, 320, 230, 350, 270, 255);

    //NARIZ
    fill(255, 255, 14);
    stroke(220);
    quad(170, 110, 160, 215, 170, 220, 173, 110);
    fill(8, 8, 167);
    quad(178, 110, 180, 220, 190, 215, 182, 110);

    //CONTORNO OJOS
    fill(255);
    stroke(167, 9, 9);
    bezier(183, 120, 200, 130, 210, 130, 220, 120); //IZQUIERDO
    bezier(183, 120, 185, 110, 210, 110, 220, 120); //IZQUIERDO

    bezier(169, 120, 160, 130, 155, 130, 136, 120); //DERECHO
    bezier(169, 120, 155, 110, 145, 110, 136, 120); //DERECHO

    //PUPILAS
    fill(2);
    noStroke();
    ellipse(200, 119, 13, 14);
    ellipse(153, 119, 13, 14);
  }
  
  
  document.oncontextmenu = function () {
    return false;
  };
}
function mousePressed() {
  if (mouseButton == LEFT) {
    background(0);
  }
}
