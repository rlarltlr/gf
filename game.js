const scene = new THREE.Scene();

scene.background =
new THREE.Color(0x87ceeb);



const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);



const renderer =
new THREE.WebGLRenderer();


renderer.setSize(
window.innerWidth,
window.innerHeight
);


document.body.appendChild(renderer.domElement);



// 바닥

const floor =
new THREE.Mesh(

new THREE.PlaneGeometry(100,100),

new THREE.MeshBasicMaterial({
color:0x555555
})

);


floor.rotation.x=-Math.PI/2;

scene.add(floor);



// 플레이어

const player =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
1
),

new THREE.MeshBasicMaterial({
color:"blue"
})

);


player.position.y=1;

scene.add(player);



camera.position.set(
0,
2,
5
);



camera.lookAt(player.position);



// 적

const enemy =
new THREE.Mesh(

new THREE.BoxGeometry(
1,
2,
1
),

new THREE.MeshBasicMaterial({
color:"red"
})

);


enemy.position.set(
0,
1,
-10
);


scene.add(enemy);



let enemyHP=100;



// 이동

let keys={};


document.addEventListener(
"keydown",
e=>{
keys[e.key.toLowerCase()]=true;
});


document.addEventListener(
"keyup",
e=>{
keys[e.key.toLowerCase()]=false;
});




// 총알

let bullets=[];


document.addEventListener(
"click",
()=>{


let bullet =
new THREE.Mesh(

new THREE.SphereGeometry(
0.1
),

new THREE.MeshBasicMaterial({
color:"yellow"
})

);



bullet.position.copy(camera.position);



bullet.direction =
new THREE.Vector3(0,0,-1)
.applyQuaternion(camera.quaternion);



scene.add(bullet);

bullets.push(bullet);


});




// 게임

function update(){


// 이동

if(keys.w)
player.position.z-=0.1;

if(keys.s)
player.position.z+=0.1;

if(keys.a)
player.position.x-=0.1;

if(keys.d)
player.position.x+=0.1;



// 적 이동

enemy.lookAt(player.position);


enemy.position.lerp(
player.position,
0.001
);




// 총알

bullets.forEach((b)=>{


b.position.add(
b.direction.clone()
.multiplyScalar(0.5)
);



if(
b.position.distanceTo(enemy.position)<1
){

enemyHP-=10;

console.log(
"적 HP:",
enemyHP
);


if(enemyHP<=0){

scene.remove(enemy);

alert("적 처치!");

}


}


});


}



function animate(){

requestAnimationFrame(animate);

update();


renderer.render(
scene,
camera
);

}


animate();
