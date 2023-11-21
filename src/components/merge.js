import React, { useState } from "react";

const MergeSortVisualization = () => {
  const [myArray, setMyArray] = useState([
    { data: 12 },
    { data: 11 },
    { data: 13 },
    { data: 5 },
    { data: 6 },
  ]);
  const [step, setStep] = useState({
    left: null,
    right: null,
    merged: null,
  });

  const updateArrayDisplay = () => {
    return myArray.map((item, index) => (
      <span
        key={index}
        className={index >= step.left && index <= step.right ? "highlight" : ""}
      >
        {item.data}{" "}
      </span>
    ));
  };

  const mergeSortStep = (arr) => {
    const len = arr.length;
    if (len > 1) {
      const mid = Math.floor(len / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);

      mergeSortStep(left);
      mergeSortStep(right);

      merge(arr, left, right);
    }
  };

  const merge = (arr, left, right) => {
    let i = 0;
    let j = 0;
    let k = 0;
    const mergedArray = [];

    while (i < left.length && j < right.length) {
      if (left[i].data < right[j].data) {
        mergedArray[k] = left[i];
        i++;
      } else {
        mergedArray[k] = right[j];
        j++;
      }
      k++;
    }

    while (i < left.length) {
      mergedArray[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      mergedArray[k] = right[j];
      j++;
      k++;
    }

    // Update the state for visualization
    setStep({
      left: myArray.indexOf(left[0]),
      right: myArray.indexOf(right[right.length - 1]),
      merged: [...mergedArray],
    });

    // Update the original array
    for (let index = 0; index < mergedArray.length; index++) {
      arr[index] = mergedArray[index];
    }
  };

  const startSorting = () => {
    const arrCopy = [...myArray];
    mergeSortStep(arrCopy);
    setMyArray(arrCopy);
    // Reset the visualization step after sorting is complete
    setStep({
      left: null,
      right: null,
      merged: null,
    });
  };

  return (
    <div>
      <h1>Merge Sort Visualization</h1>
      <p>Click the button to start the sorting process:</p>
      <button onClick={startSorting}>Start Sorting</button>
      <p>Current Array: {updateArrayDisplay()}</p>
      <style>
        {`
          .highlight {
            background-color: yellow;
          }
        `}
      </style>
    </div>
  );
};

export default MergeSortVisualization;
