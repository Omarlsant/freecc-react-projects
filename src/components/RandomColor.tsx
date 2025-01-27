import React, { useEffect, useState } from 'react';

type ColorType = 'hex' | 'rgb';

const RandomColor: React.FC = () => {
    const [typeOfColor, setTypeOfColor] = useState<ColorType>('hex');
    const [color, setColor] = useState<string>('#000000');

    const randomColorUtility = (length: number): number => {
        return Math.floor(Math.random() * length);
    };

    const handleCreateRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    };

    const handleGenerateRandomColor = () => {
        if (typeOfColor === 'hex') {
          handleCreateRandomHexColor();
        } else {
          handleCreateRandomRgbColor();
        }
    };

    useEffect(() => {
        if (typeOfColor === 'rgb') {
            handleCreateRandomRgbColor();
        } else {
            handleCreateRandomHexColor();
        }
    }, [typeOfColor]);


    return (
      <div
            className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-colors duration-300"
            style={{ backgroundColor: color, minHeight: '400px', width: '100%'}}
        >
            <div className="mb-4 space-x-2">
            <button
              onClick={() => setTypeOfColor('hex')}
              className={`px-4 py-2 rounded  ${typeOfColor === 'hex' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-300 hover:text-white' }`}
            >
              HEX Color
            </button>
            <button
              onClick={() => setTypeOfColor('rgb')}
              className={`px-4 py-2 rounded  ${typeOfColor === 'rgb' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-300 hover:text-white' }`}
            >
              RGB Color
            </button>
          </div>
            <button
                onClick={handleGenerateRandomColor}
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 mb-4"
            >
              Generate Random Color
            </button>
            <div className="text-center mt-4">
                <h1 className="text-2xl font-bold mb-2 text-white">{color}</h1>
                <h3 className="text-lg text-gray-200">
                  {typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}
                </h3>
            </div>
        </div>
    );
};

export default RandomColor;