'use client';

import { createContext, useState } from 'react';

const ModalContext = createContext({
  alert: (x: any) => {},
  remove: (x: any) => {},
  modals: []
});

interface IModalProviderProps {
  children?: React.ReactNode;
}

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modals, setModals] = useState<any>([]);
  const alert = (modal: any) => setModals((x: any) => [...x, modal]);
  const remove = () => setModals((y: any) => y.slice(0, y.length - 1));

  return <ModalContext.Provider value={{ alert, remove, modals }}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider };
