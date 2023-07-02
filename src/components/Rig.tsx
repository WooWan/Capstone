import { useFrame, useThree } from '@react-three/fiber';
import React, { ReactNode, useRef } from 'react';
import { lerp } from 'three/src/math/MathUtils';
import { Vector3 } from 'three';

type Props = {
  children: ReactNode;
};

export default function Rig({ children }: Props) {
  const groupRef = useRef<any>(null);
  const vector = new Vector3();
  const { camera, mouse } = useThree();
  const newVector = new Vector3(mouse.x * 5, mouse.y * 5, 1);

  useFrame(() => {
    camera.position.lerp(vector.set(mouse.x * 10, 20, 70), 0.05);
    groupRef.current.position.lerp(newVector, 0.1);
    groupRef.current.position.y = lerp(groupRef.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1);
  });

  return <group ref={groupRef}>{children}</group>;
}
