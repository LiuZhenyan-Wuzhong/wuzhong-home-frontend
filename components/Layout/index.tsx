import React, { createContext, useCallback, useEffect, useState } from 'react';
import Footer from '../Footer';
import api from '../../utils/api';
import { AllHTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { ArticleState } from '../../store/reducers/articles';
import { loadCategories, loadTags, setUser } from '../../store/actions/actions';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../Navbar'), {
  ssr: false
});

const BackToTop = dynamic(() => import('../BackToTop'), {
  ssr: false
});

export interface AppContextT {}

export const AppContext = createContext<AppContextT | null>(null);
interface LayoutProps extends AllHTMLAttributes<HTMLDivElement> {
  appInitProps: Partial<ArticleState>;
}

function Layout({ children, appInitProps }: LayoutProps) {
  // dispatch
  const dispatch = useDispatch();

  // callback
  const handleCheckUser = useCallback(async () => {
    try {
      await api.checkUser();

      const localAuth = localStorage.getItem('Auth');

      localAuth && setUser(JSON.parse(localAuth)).then((action) => dispatch(action));
    } catch (err) {
      setUser(null);
    }
  }, [dispatch]);

  // useEffect(() => {
  //   handleCheckUser();

  //   const { categories, tags } = appInitProps!;

  //   categories && loadCategories(categories).then((action) => dispatch(action));

  //   tags && loadTags(tags).then((action) => dispatch(action));
  // }, [appInitProps, dispatch, handleCheckUser]);

  return (
    <AppContext.Provider value={null}>
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        <Navbar />
        {children}
        <BackToTop className="bottom-20 right-12" />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default Layout;
