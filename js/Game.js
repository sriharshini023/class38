class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide()
    text("start the game")
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
          var i=0
              for(var p in allPlayers){
                cars[i].y=allPlayers[p].distance
               
                if((i+1)=== player.index) {

                camera.position.y=cars[i].y
                  cars[i].shapeColor="red"
                }
                i=i+1
              
              }   
    
                

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
