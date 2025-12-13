import { createContext, useContext, useMemo, useState, useCallback } from 'react';

type ModalContextType = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

export const ModalCompoundContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalCompoundContext);

  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }

  return context;
};

interface ModalCompoundProviderProps {
  children: React.ReactNode;
  isControlledOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export function ModalCompoundProvider({ children, isControlledOpen, onOpenChange }: ModalCompoundProviderProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = isControlledOpen !== undefined;
  const isOpen = isControlled ? isControlledOpen ?? false : internalOpen;

  const setOpen = useCallback(
    (isOpen: boolean) => {
      if (isControlled) {
        onOpenChange?.(isOpen);
      } else {
        setInternalOpen(isOpen);
      }
    },
    [isControlled, onOpenChange]
  );

  const contextValue = useMemo(() => ({ isOpen, setOpen }), [isOpen, setOpen]);

  return <ModalCompoundContext.Provider value={contextValue}>{children}</ModalCompoundContext.Provider>;
}
