console.log('Hello I am Working!')

// Create Patronus construct function



var stag = { 
name: 'Stag',
img:  'img/stagpatronus.jpg',
life: 1,
health: 3,


};  

var cat = {
name: 'Cat',
img:  'img/catPatronus.jpg',
life: 1,
health: 3,

};

var otter = {
name: 'Otter',
img:  'img/otterPatronus.jpg',
life: 1,
health: 3,

};

var phoenix = {
name: 'Phoenix',
img:  'img/phoenixPatronus.jpg',
life: 1,
health: 3,

};

var doe = {
name: 'Doe',
img:  'img/doePatronus.jpg',
life: 1,
health: 3,

};

var dog = {
name: 'Dog',
img:  'img/dogPatronus.jpg',
life: 1,
health: 3,

};
 

// Set player to value of button clicked
  var player;
  var Patronus = [stag, cat, otter, phoenix, doe, dog]
  
  $('#stag-btn').click(function(){
  
  $('#cat').hide();
  $('#otter').hide();
  $('#phoenix').hide();
  $('#doe').hide();
  $('#dog').hide();
  player = Patronus[0];
  Patronus.splice(0,1)
  console.log(player);
  return(player);

  });

  

  $('#cat-btn').click(function(){
  
  $('#stag').hide();
  $('#otter').hide();
  $('#phoenix').hide();
  $('#doe').hide();
  $('#dog').hide();
  player = Patronus[1];
  console.log(player);
  Patronus.splice(1,1)
  return(player);
  });

$('#otter-btn').click(function(){
  
  $('#stag').hide();
  $('#cat').hide();
  $('#phoenix').hide();
  $('#doe').hide();
  $('#dog').hide();
  player = Patronus[2];
  console.log(player);
  Patronus.splice(2,1)
  return(player);
  });

$('#phoenix-btn').click(function(){
  
  $('#stag').hide();
  $('#cat').hide();
  $('#otter').hide();
  $('#doe').hide();
  $('#dog').hide();
  player = Patronus[3];
  console.log(player);
  Patronus.splice(3,1)
  return(player);
  });

$('#doe-btn').click(function(){
  
  $('#stag').hide();
  $('#cat').hide();
  $('#otter').hide();
  $('#phoenix').hide();
  $('#dog').hide();
  player = Patronus[4];
  console.log(player);
  Patronus.splice(4,1)
  return(player);
  });

$('#dog-btn').click(function(){
  
  $('#stag').hide();
  $('#cat').hide();
  $('#otter').hide();
  $('#phoenix').hide();
  $('#doe').hide();
  player = Patronus[5];
  console.log(player);
  Patronus.splice(5,1)
  return(player);
  });


// Computer choose Patronus based on random number



function randomChoose() {
    var randomNumber = Math.random();
    // console.log(randomNumber);
    if (randomNumber < 0.51) {
        return Patronus[0];
    } else if (randomNumber < 1) {
        return Patronus[1];
    } else {
        return "unknown";
    }
  };

var computer;
function compChoose(){
  computer = (randomChoose()); 

};  
  






// Get Opponent button opens modal and runs compChoose FUnction

 $('#getOpp').click(function(){
    compChoose();
    console.log(computer);
  

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
  $('.playerDiv').append("<div><h2>"+player.name+"</h2></div>")
  // $("<p>"+player.life+"</p>").insertAfter($("#playerLife"));
  // $("<p>"+player.health+"</p>").insertAfter($("#playerHealth"));
  $('.oppDiv').append("<img src="+computer.img+"></img>");
  $('.oppDiv').append("<div><h2>"+computer.name+"</h2></div>")
  // $("<p>"+computer.life+"</p>").insertAfter($("#oppLife"));
  // $("<p>"+computer.health+"</p>").insertAfter($("#oppHealth"));

});

// Attack and Defend functions

function randomAttack() {
    var randomNumber = Math.random();
    // console.log(randomNumber);
    if (randomNumber < 0.51) {
        return -1;
    } else if (randomNumber < 1) {
        return -2;
    } else {
        return "unknown";
    }
  };

  function randomDefend() {
    var randomNumber = Math.random();
    // console.log(randomNumber);
    if (randomNumber < 0.51) {
        return +1;
    } else if (randomNumber < 1) {
        return +2;
    } else {
        return "unknown";
    }
  };

  // function randomPlay() {
  //   var randomNumber = Math.random();
  //   // console.log(randomNumber);
  //   if (randomNumber < 0.51) {
  //       return (attackPlayer());
  //   } else if (randomNumber < 1) {
  //       return (defendOpp());
  //   } 
  // }

function attackOpp(){
  effect = (randomAttack());
  console.log(effect);
  computer.health = computer.health + effect;
  console.log(computer.health);
  $("#oppHealth").html("<h1> Health = "+computer.health+"</h1>");
}

function attackPlayer(){
  effect = (randomAttack());
  console.log(effect);
  player.health = player.health + effect;
  console.log(player.health);
  $("#playerHealth").html("<h1> Health = "+player.health+"</h1>");

}

function defendOpp(){
  effect = (randomDefend());
  console.log(effect);
  computer.health = computer.health + effect;
  console.log(computer.health);
  $("#oppHealth").html("<h1> Health = "+computer.health+"</h1>");

}

function defendPlayer(){
  effect = (randomDefend());
  console.log(effect);
  player.health = player.health + effect;
  console.log(player.health);
  $("#playerHealth").html("<h1> Health = "+player.health+"</h1>");

}

function randomPlay() {
    var randomNumber = Math.random();
    // console.log(randomNumber);
    if (randomNumber < 0.51) {
      

         attackPlayer();
    } else {
      
     defendOpp();
    } 
 }

function compDead(){
  if (computer.health <= 0)
  {
  computer.life = computer.life -1
  }else{
    return computer.health
  }

// $("#oppLife").html("<p> Life = "+computer.life+"</p>");
  

};  

function playerDead(){
  if (player.health <= 0){
  player.life = player.life -1
  }else{
    return player.health
  }

// $("#playerLife").html("<p> Life = "+player.life+"</p>");  
};

function youDead(){
  
  if(player.life <= 0){
    $('.battle-container').hide();
    $('#winner').removeAttr("hidden");
    $( "<img src="+computer.img+" > </img>" ).insertAfter( "#declare-winner");


  }else if (computer.life <= 0){
    $('.battle-container').hide();
    $('#winner').removeAttr("hidden");
    $( "<img src="+player.img+" > </img>" ).insertAfter( "#declare-winner");

  
  }else{
    return ('continue');
  }


};

$('#atk-btn').click(function(){
  attackOpp(); 
  randomPlay();
  // $("#oppHealth").replaceWith("<p> Health = "+computer.health+"</p>");
  $('#show-Comp-Move').html("<img src="+computer.img+"> </img>");
  // console.log(computer.img);
  // $('#show-Comp-Move').text("<div><h2>"+computer.name+"</h2></div>");
  $('#compMove').modal('show');
  compDead();
  playerDead();
  $("#oppLife").html("<h1> Life = "+computer.life+"</h1>");
  $("#playerLife").html("<h1> Life = "+player.life+"</h1>");  
  

  

})

$('#def-btn').click(function(){
  defendPlayer();
  randomPlay();
  // $("#playerHealth").replaceWith("<p> Health = "+player.health+"</p>");
  $('#show-Comp-Move').html("<img src="+computer.img+"> </img>");
  
  $('#compMove').modal('show');
  compDead();
  playerDead();
  $("#oppLife").html("<h1> Life = "+computer.life+"</h1>");
  $("#playerLife").html("<h1> Life = "+player.life+"</h1>");  
 

  
  
})

$('#continue-btn').click(function(){
  youDead();
  // console.log(youDead());

})

$('#new-game').click(function(){

  window.location.reload(true);
})


