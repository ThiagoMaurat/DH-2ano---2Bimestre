import React, { ButtonHTMLAttributes, useState } from "react";

type CharacterFormProps = {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CharacterForm({
  onChangeInput,
  ...props
}: CharacterFormProps) {
  return (
    <>
      <div>
        <input type={"number"} onChange={onChangeInput} />
      </div>
    </>
  );
}
