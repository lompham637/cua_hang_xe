import React from 'react'
import { CarProps } from '@/Types';

interface CarDetailsProp  {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProp) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails