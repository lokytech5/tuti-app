
export const initializeTheme = (): void => {
    const currentTheme = localStorage.getItem('theme') || 'synthwave';
    document.documentElement.setAttribute('data-theme', currentTheme);
  };
  
  export const toggleTheme = (): void => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme: string;

    switch (currentTheme) {
      case 'synthwave':
        newTheme = 'winter';
        break;
      case 'winter':
        newTheme = 'night';
        break;
      default:
        newTheme = 'synthwave';

    }
  
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  