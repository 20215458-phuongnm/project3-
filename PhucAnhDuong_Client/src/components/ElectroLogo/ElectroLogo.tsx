import React from 'react';
// import { useMantineTheme } from '@mantine/core';

interface ElectroLogoProps {
  width?: number;
}

function ElectroLogo({ width = 60 }: ElectroLogoProps) {
  const imageUrl =
  '/MPP-01.png';

  return <img src={imageUrl} width={width} alt='MPP Logo' style={{ marginTop: '50px' }} />;
}

export default ElectroLogo;
