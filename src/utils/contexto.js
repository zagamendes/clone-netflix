import React, {createContext, useState} from 'react';
export const usuarioContext = createContext("")

const UsuarioContextProvider = ({children}) => {
    const [user,setUser] = useState({})
    
    return (
        <usuarioContext.Provider value={{user,setUser}}>
            {children}
        </usuarioContext.Provider>
        
    );
};

export default UsuarioContextProvider;