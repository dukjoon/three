import * as THREE from "three";
import Experience from "../experience";
import Environment from "./Envorinment";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    // Wait for resources
    this.resources.on("ready", () => {
      this.environment = new Environment();
    });
    // Test Mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial()
    );
    this.scene.add(testMesh);

    // SunLight
  }
}
