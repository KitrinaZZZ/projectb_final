let bg;
let pg = 0;
let input;
let submitButton; // 提交按钮
let userInput = ""; // 存储用户输入的内容
let answer = [];
let startColor;
let endColor;
let currentColor;
let t = 0; 
let bh = 0;
let textDisplay;
let qix = 0;
let zmo = 0;
let bzx = [];
let sound;
let qls = [
  "Section 1:Mental Health and Daily Habits\n\nIn the past week, have you often felt\nnervous or anxious?\nNever / Rarely / Sometimes / Often / Always",
  "Do you have any habits in your daily\nlife that help you relax,\nsuch as specific exercises, reading,\nor dietary preferences? Please specify.",
  "Are there any foods or ingredients\n you need to avoid due to allergies\nor preferences? Please list them.",
  "What is your usual daily routine? What time do you\n typically wake up and go to bed?\nWake-up time: [Fill in]\nBedtime: [Fill in]",
  "Is there anything in your home or\nworkplace environment that makes you feel\nuncomfortable or affects your emotions\n(e.g., noise, cleanliness)?",



  "Section 2: Education and Career Background\n\nWhat is your highest level of education?\nPlease specify your degree and field of study.",
  "What is the name of your current \nschool or workplace? (Optional)",
  "Are you satisfied with your current career\nor field of study? If not, what\n aspects would you like to change?",
  "Where do you usually get information\nor news (e.g., social media, recommendations\nfrom friends, news websites)?",
  "Does your job or studies require frequent\nuse of personal devices (e.g., smartphones, computers)?\nPlease list the types of devices and their usage frequency.",


  "Section 3: Living Environment and Social Connections\n\nWhat is your current residential address? \n(City and neighborhood name are sufficient.)",
  "Are you satisfied with your current living environment?\n Please explain which aspects you like or dislike\n (e.g., transportation, neighborhood relations).",
  "How often do you connect with family and friends?\nWhat is your preferred method of communication\n(e.g., phone, messaging apps, email)?",
  "Who are the members of your family?\nPlease list their ages and occupations (Optional).",
  "During your last move, what factors did you consider\nmost important when choosing a new location\n(e.g., commute distance, safety)?",


  "Section 4: Privacy and Internet Usage\nDo you have multiple social media accounts?\nIf so, please list the platforms you use most frequently.",
  "When registering for online accounts, \ndo you often provide your real address\n and contact information?\nYes / No",
  "When using delivery or online shopping services,\nwhat personal information do you usually provide\n(e.g., name, phone number, address)?",
  "Have you ever adjusted your social media\nprivacy settings due to concerns\nabout personal information? \nFor example, hiding your details or limiting visibility.\nYes / No If yes, please describe what changes you made",
  "Do you use any password management\ntools to protect your accounts?\nIf so, which tool(s) do you use?",

];





let bubble = [];
let n = 30;
let  vv;


let   n1;
let   n2;
let   n3;
function preload() {
  bg = loadImage("./img/1.jpg")
  vv = loadImage("./img/bg.png")
  n1 = loadImage("./img/2.png")
  n2 = loadImage("./img/3.png")
  n3= loadImage("./img/4.jpg")
  soundPlayer0 = new SoundPlayer();
  soundPlayer0.load("./music/xm2547.mp3");
  soundPlayer1 = new SoundPlayer();
  soundPlayer1.load("./music/xm2668.mp3");
  soundPlayer2 = new SoundPlayer();
  soundPlayer2.load("./music/xm2430.mp3");
}

let inputBox;
let button2;


function setup() {


  createCanvas(windowWidth, windowHeight)
  
  // 创建输入框
  input = createInput();
  input.size(200)
  input.position(width / 2 - input.width / 2 - 60, height / 2); // 居中

  // 创建提交按钮
  let button = createButton('Submit');
  button.position(input.x + input.width + 10, input.y); // 输入框右侧
  button.mousePressed(() => {
    // 按钮被点击时的操作
    console.log('Input value:', input.value());

    pg = 1;


    userInput=input.value()

    input.hide()
    button.hide()
    soundPlayer0.play();
  });

 
  inputBox = createElement('textarea', '');
  inputBox.position(width / 2 - 80, height / 2 + 80);
  inputBox.size(width / 4, height / 4); 


  inputBox.style('font-size', '18px');
  inputBox.style('padding', '10px');
  inputBox.style('border', '2px solid black');

  // 创建提交按钮
  button2 = createButton('Next');
  button2.position(width / 2 + inputBox.width, height / 2 + 80 + inputBox.height); // 输入框右侧
  button2.mousePressed(() => {


   
    if (inputBox.value().length > 0) {
      answer.push(inputBox.value())
    }
    inputBox.value("");
    qix++
    if(qix==0||qix==16||qix==18){

      // 选择题隐藏按钮

      button2.hide()
      inputBox.hide()
    }
    else{

      inputBox.show()

    }
    if (qix == 20) {


      pg = 2

      inputBox.hide()
      button2.hide()
    }

  });


  inputBox.hide()
  button2.hide()
  startColor = color('#dbb0ac'); // 起始颜色
  endColor = color(128); // 结束颜色（灰色）


  bh = height / 2


  for (let i = 0; i < n; i++) {
    bubble[i] = new Bubble();
    }
}


function draw() {

  if (pg == 0) {

    background(240);


    for (let i = 0; i < bubble.length; i++) {
      bubble[i].display();
      bubble[i].move();
      bubble[i].checkBoundaries();
      }
    push()
    textSize(32);
    // textAlign(LEFT, TOP);
    fill(50);
    // textAlign(CENTER)
    // 提示文字
    text("Please Enter Your Name to Start:", width / 2 - 200, height / 2 - 30);

    textSize(32);
    fill(50);
    text("Your name: " + input.value(), width / 2 - 200, height / 2 + 80);


    pop()
  }
  if (pg == 1) {

    // 计算当前颜色
    currentColor = lerpColor(startColor, endColor, t);

    // 设置背景颜色
    background(currentColor);

    for (let i = 0; i < bubble.length; i++) {
      bubble[i].display();
      bubble[i].move();
      bubble[i].checkBoundaries();
      }
    t=map(answer.length,0,20,0,1)

   


    let squareSize = 50; // 正方形的大小
    let squareSizeh = 33; // 正方形的大小
    let startY = height / 2; // 下半部分的起始 Y 坐标

    // 嵌套循环绘制正方形
    for (let x = 0; x < width; x += squareSize) {
      for (let y = startY; y < height; y += squareSizeh) {
        image(bg, x, y, squareSize, squareSizeh); // 绘制正方形
      }
    }


    push()
    rectMode(CENTER)

    fill(255)
    rect(width / 4, height / 4, width / 4, height / 4)


    textAlign(CENTER, CENTER)


    fill(0)
    textSize(15)

    text(qls[qix], width / 4, height / 4)
    imageMode(CENTER,CENTER)
    image(n2,width / 4, height / 2 -60,100+zmo,140+zmo)



    pop()
    push()
    rectMode(CENTER)

    fill(255)

 imageMode(CENTER,CENTER)
    image(n1,width / 2, height / 2 - 60,100+zmo,140+zmo)
 


    pop()

    if(bzx[0]==0&&bzx[1]==1&&bzx[2]==1){
      
      soundPlayer0.stop();
      soundPlayer1.play();

      // 3个never  图片慢慢放大


       zmo+=10


       inputBox.hide()
       button2.hide()
       

       if(140+zmo>width){


        pg=4
       }
    }


    if(qix==0){


      push()




      rectMode(CENTER)

      textAlign(CENTER,CENTER)
      textSize(16)


      for(let i=0;i<5;i++){

        rect(width/2,height*2/3+40*i,120,30)

      }
     
      text("Never",width/2,height*2/3)      

     
      text("Rarely",width/2,height*2/3+42)

      
      text("Sometimes",width/2,height*2/3+82)
     
      text("Often",width/2,height*2/3+122)
      text("Always",width/2,height*2/3+162)




      pop()



    }
    if(qix==16||qix==18){


      push()




      rectMode(CENTER)

      textAlign(CENTER,CENTER)
      textSize(16)


      for(let i=0;i<2;i++){

        rect(width/2,height*2/3+40*i,120,30)

      }
     
      text("YES",width/2,height*2/3)      

     
      text("NO",width/2,height*2/3+42)

      
   




      pop()



    }
  }


  if (pg == 2) {



    background(240);
    for (let i = 0; i < bubble.length; i++) {
      bubble[i].display();
      bubble[i].move();
      bubble[i].checkBoundaries();
      }
    push()

    rectMode(CENTER)


    fill(255)

    rect(width / 2, height / 2, width / 2, height / 2)

    line(width / 4, height / 4, width / 2, height / 2)
    line(width * 3 / 4, height / 4, width / 2, height / 2)

    noFill()
    ellipse(width / 2, height / 2, 60, 60)

    pop()





  }


  if (pg == 3) {
    background(240);

    for (let i = 0; i < bubble.length; i++) {
      bubble[i].display();
      bubble[i].move();
      bubble[i].checkBoundaries();
      }

    push()

    rectMode(CENTER)


    if (bh > 0) {


      fill(255)

      rect(width / 2, height / 2, width / 2, height / 2)

      line(width / 4, height / 4, width / 2, bh)
      line(width * 3 / 4, height / 4, width / 2, bh)

    }

    else {
      soundPlayer0.stop();
      soundPlayer2.play();
      push()
      imageMode (CENTER)
      image(vv,width/2,height/2,898/1.5,921/1.5)
      pop()

      push()

      fill(0)
      textSize(14)
      textAlign(CENTER)
      text(userInput+"`s personal information", width / 2, height  / 3-50)
      text("every one", width / 2, height  / 3-90)
      pop()
      
     
      textDisplay.display();



    }

    pop()


    if (bh > 0) {



      bh -= 3;
    }





  }


  if(pg==4){


    
    
    background(0)
    imageMode(CENTER)
    image(n3,width/2,height/2,n3.width/2,n3.height/2)
    
    
  }


}




class SoundPlayer {
  constructor() {
    this.sound = null;
  }

  // 用于加载音频文件的方法
  load(soundFile) {
    this.sound = loadSound(soundFile);
  }

  play() {
    if (this.sound && !this.sound.isPlaying()) {
      this.sound.play();
    }
  }

  stop() {
    if (this.sound) {
      this.sound.stop();
    }
  }
}





class TextDisplay {
  constructor(textArray) {
    this.textArray = textArray; // 存储要显示的文本数组
  }

  display() {
    for (let i = 0; i < this.textArray.length; i++) {
      push();
      fill(0);
      textSize(18);
      textAlign(CENTER);
      text(this.textArray[i], width / 2, 20 * i + height / 3);
      pop();
    }
  }
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height * 2);
    this.s = random(10, 50);
    this.yspeed = map(this.s, 10, 50, 0.5, 5);
  
  }
  display() {

    push()
  fill(255, 120);
  noStroke();
  ellipse(this.x, this.y, this.s, this.s);

  pop()
  }
  
  move() {
  this.y -= this.yspeed;
  }
  
  checkBoundaries() {
  if (this.y < this.s / 2) {
  
  this.x = random(width);
  this.y = random(height * 2);
  }
  }
  }



    

  

function keyPressed(){

  if(pg==3){


  if(key== 'S'||key== 's'){


        // 将数组转换为字符串，每个元素用换行符分隔
        const dataStr = answer.join("\n");

        // 创建一个 Blob 对象
        const blob = new Blob([dataStr], { type: 'text/plain' });

        // 创建一个 URL 对象
        const url = URL.createObjectURL(blob);

        // 创建一个临时链接元素
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.txt"; // 指定下载文件名

        // 触发下载
        document.body.appendChild(a);
        a.click();

        // 清理
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
  }

}
}
function mouseClicked() {
  
  

  if(pg==1&&(qix==0||qix==16||qix==18)){

    // rect(width/2,height*2/3+40*i,120,30)
   for(let i=0;i<5;i++){


    if(mouseX>width/2-60&&mouseX<width/2+60&&mouseY>height*2/3-15+40*i&&mouseY<height*2/3+15+40*i){


      bzx.push(i)

      // console.log(bzx,bzx==[0,1,1])


      qix++


      
    inputBox.show()
    button2.show()
    }




   }

  




  }



  if (pg == 2 && dist(mouseX, mouseY, width / 2, height / 2) < 30) {


    pg = 3


    textDisplay = new TextDisplay(answer);
  }


}


