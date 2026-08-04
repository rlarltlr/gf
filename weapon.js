class Weapon{


constructor(scene,camera){

this.scene=scene;

this.camera=camera;

this.bullets=[];


}



shoot(){


let bullet=
new THREE.Mesh(

new THREE.SphereGeometry(
0.05
),

new THREE.MeshBasicMaterial({
color:"yellow"
})

);



bullet.position.copy(
this.camera.getWorldPosition(
new THREE.Vector3()
)
);



bullet.direction=
new THREE.Vector3(
0,0,-1
)
.applyQuaternion(
this.camera.quaternion
);



this.scene.add(bullet);


this.bullets.push(bullet);



}



update(){


this.bullets.forEach(b=>{


b.position.add(

b.direction.clone()
.multiplyScalar(.8)

);


});

}


}
