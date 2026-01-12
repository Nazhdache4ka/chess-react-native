import { createContext, useContext, useMemo, PropsWithChildren, useState } from 'react';
import { NavigationScreen } from '../types';

type NavigationContextType = {
  screen: NavigationScreen;
  setScreen: (screen: NavigationScreen) => void;
};

export const NavigationContext = createContext<NavigationContextType | null>(null);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationContextProvider');
  }
  return context;
};

export function NavigationContextProvider({ children }: PropsWithChildren) {
  const [screen, setScreen] = useState<NavigationScreen>(NavigationScreen.SINGLE_PLAYER);

  const contextValue = useMemo(() => ({ screen, setScreen }), [screen, setScreen]);

  return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>;
}
