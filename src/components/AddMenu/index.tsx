import React from 'react'
import "./AddMenu.css";
import { EModalType } from "main/modalTypes";
import { useModalStore } from "main/modalStore";

const AddMenu = () => {
  const { setModal } = useModalStore();

  return (
    <>
      <div className="custom-add-menu-container"
       onClick={() => setModal(true, EModalType?.MENU)}
        >
        +
      </div>
    </>
  )
}

export default AddMenu