import React, { useState } from 'react';

const data = [
  { id: '1', question: 'Question 1', answer: 'Answer 1' },
  { id: '2', question: 'Question 2', answer: 'Answer 2' },
  { id: '3', question: 'Question 3', answer: 'Answer 3' },
  { id: '4', question: 'Question 4', answer: 'Answer 4' },
];

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  }

  console.log(selected, multiple);

  return (
    <div className='wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi selection
      </button>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item' key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className='title'
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {/* Renderizado condicional simplificado */}
              {enableMultiSelection ? (
                multiple.includes(dataItem.id) && (
                  <div className='content'>{dataItem.answer}</div>
                )
              ) : (
                selected === dataItem.id && (
                  <div className='content'>{dataItem.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}