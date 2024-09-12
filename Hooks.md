# 1 useContext 
# We use useContext to pass data to the nested deep children. Suppose data is at the node n1 and it has to be used in the 5 level nested deep children so one way is to pass props through levl 1 2 3 and 4 which is useless to them and then it can used in level 5. Another method is useContext. 
# Step 1 => Create a context 
    eg.   const ThemeContext = createContext();
# Step 2 => Give provider and the value and wrap the children with context provider 
    const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Toggle between light and dark theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    };
# Step use useContext to access the data. All the child component in the wrapped component have the access to the context data