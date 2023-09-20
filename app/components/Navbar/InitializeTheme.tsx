'use client'
import React from 'react'
import { initializeTheme } from './themeUtils';

const InitializeTheme = () => {
    React.useEffect(() => {
        initializeTheme();
      }, []);
  return null;
}

export default InitializeTheme