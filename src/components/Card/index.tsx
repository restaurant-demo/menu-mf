import React from 'react'
import "./Card.css";
import { useModalStore } from "main/modalStore";

const Card = () => {
  const setIsModalOpen = useModalStore.getState().setIsModalOpen;

  return (
    <>
      <div className="custom-card-container" onClick={() => setIsModalOpen(true)}>
        +
      </div>
    </>
  )
}

export default Card