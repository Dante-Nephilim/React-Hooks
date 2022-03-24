import { useState } from "react";
export default function UseStateComponenet() {
  const [arr, arrSet] = useState<Array<number>>([]);
  return (
    <div>
      <button
        onClick={() => {
          //   arrSet([...arr, arr.length + 1]);
          arrSet(
            (prev) => prev.concat(prev.length + 1)
            // prev.push(prev.length + 1);
            // return newArray;
          );
        }}
      >
        Add to array
      </button>
      {JSON.stringify(arr)}
      {/* {arr.toString()} */}
    </div>
  );
}
