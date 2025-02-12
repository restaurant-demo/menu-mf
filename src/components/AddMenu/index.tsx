import React from 'react'
import "./AddMenu.css";
import { useModalStore } from "main/modalStore";

const AddMenu = () => {
  const setIsModalOpen = useModalStore.getState().setIsModalOpen;

  return (
    <>
      <div className="custom-add-menu-container" onClick={() => setIsModalOpen(true)}>
        +
      </div>
    </>
  )
}

export default AddMenu