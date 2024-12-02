import  { useRef, useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
function HtmlMaterial({ geometry, htmlContent, scale = 1 }) {
  const meshRef = useRef();
  const { camera } = useThree();
  const [domPosition, setDomPosition] = useState([0, 0, 0]);

  // Update the HTML position when the mesh or camera changes
  useEffect(() => {
    if (meshRef.current) {
      const meshPosition = meshRef.current.getWorldPosition(new THREE.Vector3());
      const projected = meshPosition.project(camera);
      setDomPosition([projected.x * scale, projected.y * scale, 0]);
    }
  }, [camera]);

  return (
    <>
      {/* Render the mesh */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial color="transparent" />
      </mesh>

      {/* Render HTML content */}
      <Html position={domPosition} transform>
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          {htmlContent}
        </div>
      </Html>
    </>
  );
}

export default HtmlMaterial;
