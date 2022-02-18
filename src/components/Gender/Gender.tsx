import React from 'react';

interface IGenderProps {
  gender: string;
  className?: string;
}

const Gender: React.FunctionComponent<IGenderProps> = ({ className, gender }) => {
  return <p className={className}>{gender}</p>;
};

export default Gender;
