import React from 'react'
import ColourBox from './ColourBox';

interface ColorSelectorProps {
    colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void; // Callback function to set selected color
}

const ColorSelector = ({ colors, selectedColor, onSelectColor }: ColorSelectorProps) => {
  return (
    <div className="mb-4 flex items-center space-x-2.5"> {/* Using flex utilities */}
    <h4 className="color-label text-md font-semibold mb-0 text-secondary-content">Color:</h4>
    <ul className="flex space-x-2 text-secondary-content mb-0">
            {colors.map((color, index) => (
                <li key={index}>

                  <ColourBox
                     colorName={color}
                     selectedColor={selectedColor}
                     onChange={(color) => {
                      onSelectColor(color);
                      console.log(`Selected color: ${color}`);
                    }}
                  />
                </li>
            ))}
            </ul>
          </div>
  )
}

export default ColorSelector