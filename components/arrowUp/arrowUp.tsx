import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hook';
import { showButton } from '../../store/btnScrollSlice';
import { BtnUp } from './arrowUpStyle';
const ArrowUp = () => {
  const dispatch = useDispatch();
  const isVisibleBtn = useAppSelector((state) => state.showBtn.isVisibleBtn);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        dispatch(showButton(true));
      } else {
        dispatch(showButton(false));
      }
    });
  }, [dispatch, isVisibleBtn]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <>{isVisibleBtn && <BtnUp onClick={scrollToTop}>&#8250;</BtnUp>}</>;
};
export default ArrowUp;
