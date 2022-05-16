import './style.css'
import * as THREE from 'three'
// import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//cursor
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = -(e.clientY / sizes.height - 0.5)
    
})




// Scene
const scene = new THREE.Scene()

// Object
// const group = new THREE.Group()
// scene.add(group)
// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// )
// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff0000 })
// )
// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff })
// )
// cube2.position.x = 3
// cube3. position.y = 2
// group.position.z = -5
// group.add(cube1, cube2, cube3)
// const axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)




const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'red' })
)
scene.add(cube)
// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1* aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 10)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
//Control
const controls = new OrbitControls(camera, canvas)
const clock = new THREE.Clock()
//Animation
// gsap.to(cube.position, {duration:4,  x: 1.3, y: 1.3, z: 1.3 })
const tick = () => {
    // const elapsedTime = clock.getElapsedTime()
    // camera.position.z = Math.cos(cursor.x *10) * 2
    // camera.position.x =Math.sin(cursor.x * 10) * 2
    // camera.position.y = Math.sin(cursor.y * 5) * 2
    
    // requestAnimationFrame(tick)
    // camera.lookAt(new THREE.Vector3())
    renderer.render(scene, camera)
}
tick()