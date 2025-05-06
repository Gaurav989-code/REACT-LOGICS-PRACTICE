import { useState } from 'react';
import { useEffect } from 'react';
import debouceQuery from './utils';

function Debounce_api_call() {

  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  console.log(input);

  const initAPICall = async () => {
    const url =
      `https://api.frontendeval.com/fake/food/${input}`;
    const data = await debouceQuery(url);
    setList(data);
  }
  useEffect(() => {
    if (input) {
      initAPICall();
    }
  }, [input]);

  // [0, 100, 200, 300, 50, 1000]

  return (
    <div className="w-[90%] h-[80%] flex flex-col items-center gap-4 m-5">
      <h1 className="text-xl font-bold m-5 ">
        Debounce_api_call Debounce_api_call
      </h1>
      <input
        value={input}
        onChange={handleInputChange}
        className="border-2 rounded-3xl  border-black w-[30%] h-[8%] text-lg font-bold p-4 "
        type="text"
      />
      {list && list.length > 0 && (
        <div className="flex border-2 w-[30%] rounded-xl p-6 h-[50%] mt-4 overflow-y-auto  flex-col gap-2">
          {list &&
            list.map((item, i) => (
              <div className="hover:bg-cyan-200 p-2 rounded-lg" key={i}>
                {item}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Debounce_api_call;
