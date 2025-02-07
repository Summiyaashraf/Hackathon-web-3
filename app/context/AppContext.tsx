import { createContext, useState, ReactNode } from "react";

// Define the context type
interface AppContextType {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
}

// Create context with default values
export const AppContext = createContext<AppContextType>({
  showCart: false,
  setShowCart: () => {},
});

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <AppContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </AppContext.Provider>
  );
};
