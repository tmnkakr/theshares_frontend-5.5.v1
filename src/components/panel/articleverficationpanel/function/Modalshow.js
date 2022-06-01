import React, { useState } from "react";
import "./App.css";
import Modal from "../classbased/madals/Modals";

function Modalshow() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="App">
      
      {/* <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button> */}

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Modalshow;