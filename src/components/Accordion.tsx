import React, { useState } from 'react';

const data = [
  { id: '1', question: 'Question 1', answer: 'Answer 1' },
  { id: '2', question: 'Question 2', answer: 'Answer 2' },
  { id: '3', question: 'Question 3', answer: 'Answer 3' },
  { id: '4', question: 'Question 4', answer: 'Answer 4' },
];

export default function Accordion() {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  const handleSingleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId: string) => {
    setMultiple((prevMultiple) => {
      if (prevMultiple.includes(getCurrentId)) {
          return prevMultiple.filter(id => id !== getCurrentId)
      } else {
        return [...prevMultiple, getCurrentId]
      }
    });
  };

  console.log(selected, multiple);

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {enableMultiSelection ? "Disable multi selection" : "Enable multi selection"}
      </button>
      <div className="space-y-2">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="bg-white rounded shadow-md">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
              >
                <h3 className="text-lg font-semibold">{dataItem.question}</h3>
                <span className="text-gray-500 text-xl">+</span>
              </div>
              {/* Renderizado condicional simplificado */}
              {enableMultiSelection ? (
                multiple.includes(dataItem.id) && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">{dataItem.answer}</div>
                )
              ) : (
                selected === dataItem.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">{dataItem.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          <div className="text-gray-500">No data available</div>
        )}
      </div>
    </div>
  );
}