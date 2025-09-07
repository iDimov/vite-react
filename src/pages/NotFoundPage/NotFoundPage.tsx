import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000)

    return () => clearInterval(timer); 
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <div className={s.container}>
      <p className={s.p}>The page does not exist!</p>      
      <p className={s.timer}>Redirecting in {countdown}...</p>
    </div>
  )
}

export default NotFoundPage
