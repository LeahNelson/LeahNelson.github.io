console.log('Hello I am Working!')

// Create Patronus construct function

function Patronus(name, img, life, health){
  this.name   = name;
  this.img    = img;
  this.life   = life;
  this.health = health;
  this.spell  = ['crucio', 'expelliarmus','evanesco', 'episkey'];
  this.attack = function(chooseSpell){
    var spell = this.attack[chooseSpell]

    switch (spell){
      case 'expelliarmus':
        computer.health-=1
          break;
      case 'crucio':
        computer.health-=2
          break;
            default:
              console.log('health')
    }          
  }
};



// Determine winner of battle

// Define each Patronus
var stag = new Patronus("Stag", "img/stagpatronus.jpg",3,5);
var cat  = new Patronus("Cat", "img/catPatronus.jpg", 3, 5);

// Set player to value of button clicked
  var player;
  var playerChoice = [stag,cat];

  $('#stag-btn').click(function(){
    player = playerChoice[0];

  // localStorage.setItem('stag', JSON.stringify(stag));
  $('#cat').hide();
  // player = ( JSON.parse(localStorage.getItem('stag')));
  console.log(player);
  return(player);
 
  });

  

  // $('#cat-btn').click(function(){
  // localStorage.setItem('cat', JSON.stringify(cat));
  // $('#stag').hide();
  // player = ( JSON.parse(localStorage.getItem('cat')));
  // console.log(player);
  // return(player);
  // });


// Computer choose Patronus based on random number
var compChoice = [stag, cat];

function randomChoose() {
    var randomNumber = Math.random();
    // console.log(randomNumber);
    if (randomNumber < 0.51) {
        return compChoice[0];
    } else if (randomNumber < 1) {
        return compChoice[1];
    } else {
        return "unknown";
    }
  };

var computer;
function CompChoose(){
  computer = (randomChoose()); 
  (('computer'), JSON.stringify(computer));
  (JSON.parse('computer'));
  return(computer);
}

CompChoose();
console.log(computer);


// Get Opponent button opens modal with result from compChoose

 $('#getOpp').click(function(){
   // var oppImg = computer.img
   $('.modal-body').append("<img src="+computer.img+"> </img>");
   $('.modal-body').append("<div><h2>"+computer.name+"</h2></div>");
   $('#getOpp').hide();
   

 });

// Close Opponent window, move to and populate Battle Div

$('#play-btn').click(function(){
  $('#choose-container').hide("slow");
  $('.battle-container').toggle("slow");
  $('.playerDiv').append("<img src="+player.img+"></img>");
  $('.playerDiv').append("<div><h2>"+player.name+"</h2></div>");
  $("<p>"+player.life+"</p>").insertAfter($("#playerLife"));
  $("<p>"+player.health+"</p>").insertAfter($("#playerHealth"));
  $('.oppDiv').append("<img src="+computer.img+"></img>");
  $('.oppDiv').append("<div><h2>"+computer.name+"</h2></div>");
  $("<p>"+computer.life+"</p>").insertAfter($("#oppLife"));
  $("<p>"+computer.health+"</p>").insertAfter($("#oppHealth"));

});

// attack and defend functions
Patronus.prototype.chooseAttack = function (chooseSpell, computer) {
  var spell = this.attack[chooseSpell]

    switch (spell){
      case 'expelliarmus':
        computer.health-=1
          break;
      case 'crucio':
        computer.health-=2
          break;
            default:
              console.log('health')
    }          
};


  

