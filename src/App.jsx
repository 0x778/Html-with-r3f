import { Canvas } from '@react-three/fiber';
import { OrbitControls, Mask, useMask } from '@react-three/drei';
import HtmlMaterial from './HtmlMaterial';
function App() {
  


  return (
    <Canvas>
      {/* Camera Controls */}
      <OrbitControls />
      <ambientLight />

      {/* Define Mask */}
      <HtmlMaterial
      geometry={<planeGeometry args={[2, 2]} />}
      htmlContent={
        <div style={{  color: 'black' , backgroundColor: "red"}}>
            <h3>Hello 3D!</h3>
            <input type="text" placeholder="Type here..." />
          </div>
      }
      />

      {/* Object restricted by Mask */}
      
    </Canvas>
  );
}

export default App;
