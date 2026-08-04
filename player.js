class Player{


constructor(scene,camera){


this.hp=100;


this.object=new THREE.Mesh(

new THREE.CapsuleGeometry(
0.5,
1
),

new THREE.MeshBasicMaterial({
color:"blue"
})

);


scene.add(this.object);



camera.position.set(
0,
1.6,
0
);


this.object.add(camera);


this.speed=0.15;


}



move(keys){


if(keys.w)
this.object.translateZ(-this.speed);


if(keys.s)
this.object.translateZ(this.speed);


if(keys.a)
this.object.translateX(-this.speed);


if(keys.d)
this.object.translateX(this.speed);


}



damage(value){

this.hp-=value;


document.getElementById("hp")
.innerHTML=
Math.floor(this.hp);


}


}
