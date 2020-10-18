import * as THREE from 'three';

const palet = ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'];

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const orthographicScale = 0.03;
const camera = new THREE.OrthographicCamera(
	(innerWidth * orthographicScale) / -2,
	(innerWidth * orthographicScale) / 2,
	(innerHeight * orthographicScale) / 2,
	(innerHeight * orthographicScale) / -2,
	1,
	1000
);

camera.position.set(20, 20, 20);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const renderer = new THREE.WebGLRenderer({
	antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = new THREE.Mesh(
	new THREE.SphereGeometry(2, 2, 2),
	new THREE.MeshBasicMaterial()
);

scene.add(cube);

for (let i = 0; i < 10; i++) {
	const size = i + Math.random() / 2;

	const mesh = new THREE.Mesh(
		new THREE.BoxGeometry(size, size, size),
		new THREE.MeshNormalMaterial()
	);

	mesh.rotateX(i / 15);
	mesh.rotateY(i / 15);
	mesh.rotateZ(i / 15);

	mesh.position.set(-size, -size, -size);
	scene.add(mesh);
}

const sceneLight1 = new THREE.DirectionalLight(0x404040);

sceneLight1.position.z = 10;

scene.add(sceneLight1);

const animate = () => {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
};
animate();
