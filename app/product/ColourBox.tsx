import React from 'react'

interface ColorBoxProps {
    colorName: string;
    selectedColor: string;
    onChange: (colorName: string) => void;
  };

  const colorMapping: Record<string, string> = {
    'Black': '#000000',
    'Brown': '#8B4513',
    'Dark Brown': '#654321',
    'Chestnut': '#954535',
    'Golden Blonde': '#f5c145',
    'Platinum': '#e6e8e6',
    'Ash Brown': '#a89f91',
    'Raven Black': '#000000',
    'Platinum Blonde': '#fafafa',
    'Ash Blonde': '#ececec',
    'Jet Black': '#000000',
    'Mahogany': '#4E342E',
    'Chocolate Brown': '#7B3F00',
    'Honey Blonde': '#d1a655',
    'Auburn': '#A52A2A',
    'Golden Brown': '#996515'
    // Add other colors as needed
  };

const ColourBox = ({colorName, selectedColor, onChange}: ColorBoxProps) => {
   
      
  return (
    <label 
    style={{ 
      display: 'inline-block', 
      backgroundColor: colorMapping[colorName] || 'transparent', 
      width: '30px', 
      height: '30px', 
      borderRadius: '50%', 
      border: selectedColor === colorName ? '3px solid white' : '3px solid transparent',
      position: 'relative',
      transition: 'all 0.2s',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
    }}
    className="cursor-pointer hover:opacity-75"
  >
    <input 
      type="radio" 
      name="color-selection" 
      className="radio radio-info absolute inset-0 w-full h-full opacity-0" 
      value={colorName} 
      checked={selectedColor === colorName} 
      onChange={() => onChange(colorName)}
    />
  </label>
  )
}

export default ColourBox