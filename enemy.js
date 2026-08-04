class Enemy{


constructor(scene){


this.hp=100;


this.object=
new THREE.Mesh(

new THREE.CapsuleGeometry(
0.5,
1
),

new THREE.MeshBasicMaterial({
color:"red"
})

);


this.object.position.z=-15;


scene.add(this.object);



this.speed=.04;


}



update(player){



let dir=
new THREE.Vector3()
.subVectors(
player.object.position,
this.object.position
);



dir.normalize();



this.object.position.add(

dir.multiplyScalar(
this.speed
)

);



// 가까우면 공격

if(
this.object.position.distanceTo(
player.object.position
)<2
){

player.damage(.3);

}



}



damage(value){


this.hp-=value;


if(this.hp<=0){

this.object.visible=false;

}


}


}
