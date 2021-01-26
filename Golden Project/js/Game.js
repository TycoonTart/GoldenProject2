class Game{
    constructor(){

    }
    play(){
        player1.update()
       if(player1.distance===500 || player1.distance===4000){
           polarBear.visible=true
           polarBear.x=mountaineer.x+100
           polarBear.y=mountaineer.y
           polarBear.velocityX=-1
           if(mountaineer.y<polarBear.y){
                polarBear.destroy()
                
            }
            if(player1.distance===1500|| player1.distance===6000){          
                tiger.visible=true
                tiger.x=mountaineer.x+100
                tiger.y=mountaineer.y
                tiger.velocityX=-1
                
          
        }
        }

    }
    }