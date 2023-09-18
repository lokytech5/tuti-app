
export const initializeTheme = (): void => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
  };
  
  export const toggleTheme = (): void => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme: string = 'fantasy';  // default
    
    if (currentTheme === 'light') newTheme = 'dark';
    else if (currentTheme === 'dark') newTheme = 'cupcake';
    else newTheme = 'light';
  
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  