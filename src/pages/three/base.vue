<script setup lang="ts">
import * as THREE from 'three';
import { onMounted } from "vue";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const render = new THREE.WebGLRenderer()
render.setSize(window.innerWidth, window.innerHeight)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'pink' })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
camera.position.z = 5;
onMounted(() => {
  document.querySelector('#threetest')!.append(render.domElement)
})
function animate() {
  requestAnimationFrame(animate);
  render.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
animate();
</script>

<template>
  <div id="threetest"></div>
</template>

