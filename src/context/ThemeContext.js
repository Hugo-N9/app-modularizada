import React,{createContext,useState} from "react";
//1.-crear el contexto
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});
//2.-crear el proveedor del contexto
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
//FUNCION PARA ALTERNAR EL TEMA
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    //proveer el contexto a los componentes hijos
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeContext;