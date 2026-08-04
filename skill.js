class Skill{


constructor(player){

this.player=player;

}



dash(){


this.player.object.translateZ(-5);


}



power(){


console.log(
"특수 능력 사용"
);


}



}
