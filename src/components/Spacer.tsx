import React from 'react';

type Props =
  | { flex: number; height?: never; width?: never }
  | { flex?: never; height: number; width?: never }
  | { flex?: never; height?: never; width: number };

const Spacer: React.FC<Props> = ({ flex, height, width }) => {
  return <div style={{ flex, height, width }} />;
};

export default Spacer;
