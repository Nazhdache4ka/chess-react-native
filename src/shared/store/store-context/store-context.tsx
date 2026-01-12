import { createContext, useContext, useMemo } from 'react';
import { IGameInfoStore, IGameStore } from '@/shared';

type StoreContextType = {
  gameStore: IGameStore;
  gameInfoStore: IGameInfoStore;
};

export const StoreContext = createContext<StoreContextType | null>(null);

export const useStoreContext = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStoreContext must be used within a StoreContextProvider');
  }

  return context;
};

interface StoreContextProviderProps {
  gameStore: IGameStore;
  gameInfoStore: IGameInfoStore;
  children: React.ReactNode;
}

export function StoreContextProvider({ gameStore, gameInfoStore, children }: StoreContextProviderProps) {
  const contextValue = useMemo(() => ({ gameStore, gameInfoStore }), [gameStore, gameInfoStore]);

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
}
