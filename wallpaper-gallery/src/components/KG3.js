import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

function KG3({ font }) {
  const textRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    if (!font) return;

    const textOptions = {
      font: font,
      size: 5,
      height: 1,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.3,
      bevelSize: 0.2,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    ['K', 'G', '3'].forEach((letter, index) => {
      const geometry = new TextGeometry(letter, textOptions);
      geometry.center();
      textRefs[index].current.geometry = geometry;
    });
  }, [font]);

  useFrame(({ clock }) => {
    textRefs.forEach((ref, index) => {
      if (ref.current) {
        const speed = 0.5 + index * 0.2;
        ref.current.rotation.x = Math.sin(clock.elapsedTime * speed) * 0.1;
        ref.current.rotation.y = Math.cos(clock.elapsedTime * speed) * 0.1;
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={textRefs[0]} position={[-6, 0, 0]}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh ref={textRefs[1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh ref={textRefs[2]} position={[6, 0, 0]}>
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}

export default KG3;