import React, { createContext, useState, ReactNode } from 'react';

// Definir los tipos para el contexto
interface MenuContextI {
  show: boolean;
  setShow: () => void;
  setHide: () => void;
}

// Crear el contexto con valores por defecto (no logueado)
export const MenuContext = createContext<MenuContextI | undefined>(undefined);


// Definir el proveedor del contexto
interface AuthProviderProps {
    children: ReactNode;
  }
  
  export const MenuProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [show, setIsLoggedIn] = useState<boolean>(true);
  
    // Función para cambiar el estado de login
    const setShow = () => setIsLoggedIn(true);
    const setHide = () => setIsLoggedIn(false);
  
    return (
      <MenuContext.Provider value={{ show, setShow, setHide }}>
        {children}
      </MenuContext.Provider>
    );
  };