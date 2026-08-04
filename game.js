const scene=
new THREE.Scene();


scene.background=
new THREE.Color("skyblue");



const camera=
new THREE.PerspectiveCamera(
75,
innerWidth/innerHeight,
0.1,
1000
);



const renderer=
new THREE.WebGLRenderer();


renderer.setSize(
innerWidth,
innerHeight
);


document.body.appendChild(
renderer.domElement
);



// 바닥

let floor=
new THREE.Mesh(

new THREE.PlaneGeometry(
100,
100
),

new THREE.MeshBasicMaterial({
color:"gray"
})

);


floor.rotation.x=-Math.PI/2;

scene.add(floor);




// 생성

let player=
new Player(
scene,
camera
);


let weapon=
new Weapon(
scene,
camera
);


let enemy=
new Enemy(
scene
);


let skill=
new Skill(
player
);





let keys={};


onkeydown=e=>{

keys[e.key.toLowerCase()]=true;


if(e.key=="e")
skill.dash();


};



onkeyup=e=>{

keys[e.key.toLowerCase()]=false;

};




// 총

onclick=()=>{

weapon.shoot();

};




// 마우스

document.body.onclick=()=>{

document.body.requestPointerLock();

};



document.onmousemove=e=>{


if(document.pointerLockElement){


camera.rotation.y-=
e.movementX*.002;


camera.rotation.x-=
e.movementY*.002;


}

};





function loop(){


requestAnimationFrame(loop);



player.move(keys);


enemy.update(player);


weapon.update();



renderer.render(
scene,
camera
);



}



loop();
