import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [food, setFood] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handelList = (e) => {
    setFood(e.target.value);
  };

  const fetchList = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;

    const result = await fetch(url);
    const data = await result.json();
    setShoppingList(data);
  };

  const handelSuggestions = (e) => {
    const idx = e.target.getAttribute("data-id");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shoppingList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
    }
    setFood("");
    console.log(bucketList);
  };

  const handelRight = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };

  const handelDelete = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.filter((item) => item.id !== id);
    setBucketList(newBucketList);
  };

  useEffect(() => {
    if (food.length >= 2) {
      fetchList(food);
    }
  }, [food]);

  return (
    <div className="w-screen h-screen flex items-center  bg-cyan-200 ">
      <div className="w-[400px] p-6 h-[600px] flex flex-col items-center mx-auto bg-white ">
        <h1 className="text-3xl font-bold">My Shopping List</h1>
        <div className="flex w-[100%] items-center mt-6">
          <input
            value={food}
            onChange={handelList}
            className="border  font-bold text-md border-gray-300 p-2 w-full"
            type="text"
          />
        </div>

        {food.length >= 2 ? (
          <div
            onClick={handelSuggestions}
            className="bg-gray-200 w-[100%] max-h-[250px] m-2 py-4 px-1 overflow-y-auto overscroll-x-none "
          >
            {shoppingList.map((item, index) => (
              <div
                data-id={index}
                className="text-sm mt-2 px-2 cursor-pointer transform transition-transform hover:bg-amber-500 duration-250 text-left text-gray-900 font-semibold"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        ) : null}

        <div className=" mt-4 w-[100%] max-h-[400px] px-4  overflow-y-auto mx-auto  ">
          {bucketList.map((item) => (
            <div
              className=" flex justify-between bg-amber-200 rounded-2xl mt-3   items-center p-2"
              key={item.id}
            >
              <button
                onClick={() => handelRight(item.id)}
                className="outline-none text-md cursor-pointer font-bold  hover:bg-white hover:rounded-[50%] w-[30px] h-[30px] mx-1  text-center"
              >
                ✔️
              </button>
              <p
                className={`text-md font-semibold text-center ${
                  item.isDone ? "line-through" : ""
                }`}
              >
                {item.data}
              </p>
              <button
                onClick={() => handelDelete(item.id)}
                className="outline-none text-sm cursor-pointer font-bold hover:bg-white hover:rounded-[50%] w-[30px] h-[30px] mx-1 text-center"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
