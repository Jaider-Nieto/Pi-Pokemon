import { useNavigate } from 'react-router-dom'
import style from './LandingPage.module.css'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className={style.container} >
      <h1>Are You Ready?</h1>
      <button
      className={style.button}
      onClick={() => navigate('/home')}> Start </button>
    </div>
  );
};

export default LandingPage;
