import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const ModalCompoundContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalCompoundContext);

  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }

  return context;
};

export function ModalCompoundProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen]);

  return <ModalCompoundContext.Provider value={contextValue}>{children}</ModalCompoundContext.Provider>;
}
