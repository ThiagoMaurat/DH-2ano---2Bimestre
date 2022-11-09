import React from "react";
import Modal from "./modal";
import Character from "./components/Character/index.tsx";
import "./styles.css";
import { useModal } from "./hooks/useModal";

function App() {
  const { toogleModal, openModal, setOpenModal } = useModal();
  const deadModal = useModal();

  return (
    <div className="App">
      <img src="logo.svg" alt="logo rick and morty" />
      <div>
        <button onClick={() => toogleModal()}>Rick's vivos</button>
        <button onClick={() => deadModal.toogleModal()}>Rick's mortos</button>
      </div>

      <Modal
        isShowing={openModal}
        hide={() => setOpenModal(false)}
        title="Rick's vivos"
      >
        <Character status="alive" />
      </Modal>

      <Modal
        isShowing={deadModal.openModal}
        hide={() => deadModal.setOpenModal(false)}
        title="Rick's mortos"
      >
        <Character status="dead" />
      </Modal>
    </div>
  );
}

export default App;
