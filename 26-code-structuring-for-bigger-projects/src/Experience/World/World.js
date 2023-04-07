import * as THREE from "three";
import Experience from "../experience";
import Environment from "./Envorinment";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // Test Mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial()
    );
    this.scene.add(testMesh);

    // SunLight
    const environment = new Environment();
  }
}
