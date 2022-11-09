import { useState } from "react";

// Criar um Custom Hook
export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const toogleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return {
    setOpenModal,
    openModal,
    toogleModal
  };
};
