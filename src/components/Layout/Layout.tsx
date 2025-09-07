import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import type { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import FilterModal from "../FilterModal/FilterModal";
import { selectIsModalOpen } from "../../redux/modal/selectors";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import NotificationModal from "../NotificationModal/NotificationModal";
import s from "./Layout.module.css";
import clsx from "clsx";

const Layout: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  const isOpenFilter = useSelector(selectIsModalOpen('filters'));
  const isOpenNotification = useSelector(selectIsModalOpen('notification'));
  const isHomePage = location.pathname === '/';

  useEffect(() => {
      dispatch(fetchTrucks());
    }, [dispatch]);
  
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={clsx(s.main, isHomePage && s.homeMain)}>
        {isOpenFilter && <FilterModal />}
        {isOpenNotification && <NotificationModal />}
        <Outlet />
      </main>
      <ScrollToTopButton/>
    </div>
  );
};

export default Layout;
