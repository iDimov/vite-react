import React from 'react'
import s from './NotificationModal.module.css'
import Button from '../Button/Button'
import { closeModal } from '../../redux/modal/slice';
import { useDispatch } from 'react-redux';
import { IoMdClose } from "react-icons/io";

const NotificationModal: React.FC = () => {

    const dispatch = useDispatch();

  return (
      <div className={s.modalOverlay}>
          <div className={s.modalContent}>
          <Button className='close' onClick={() => dispatch(closeModal('notification'))}><IoMdClose size={30}/></Button>
              <div className={s.textCont}>
                  <h2 className={s.title}>Thank you for your booking!</h2>
                  <p className={s.p}>We truly appreciate your trust in our service. Our team will contact you shortly to confirm the details and assist you with anything you may need. Stay connected!</p>
              </div>
          </div>
      </div>
  )
}

export default NotificationModal