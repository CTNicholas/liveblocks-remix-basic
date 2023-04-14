import React from "react";

type Props = {
  picture: string;
  name: string;
};

const IMAGE_SIZE = 48;

export function Avatar({ picture, name }: Props) {
  return (
    <div>
      <img
        alt={name}
        src={picture}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
      />
    </div>
  );
}
