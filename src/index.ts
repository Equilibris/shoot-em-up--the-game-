import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import jet_model from './models/fighter_trans/fighter_trans.glb';
import jet_texture from './models/fighter-jet/textures/gltf_embedded_0.png';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

const loader = new GLTFLoader();

loader.load(
	jet_model,
	(gltf) => {
		scene.add(gltf.scene);
	},
	(xhr) => {
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
	},
	(error) => {
		console.error(error);
	}
);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
scene.add(directionalLight);

camera.position.z = 5;

const animate = function () {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
};

animate();
