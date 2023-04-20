import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// SCENE + CAMERA + RENDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// LOAD MATERIALS
const loader = new GLTFLoader();

loader.load( 'D:/A41174/ThreeJS/models/materials/a41174.glb', 
	function ( gltf ) {
		scene.add( gltf.scene );
	}, 
	undefined, function ( error ) {
		console.error( error );
	}
);

// OBJECT
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;

// ANIM
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
// animate();