import React from "react";

const Star_Rating = () => {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center ">
      <h1 className="text-3xl font-bold mt-20">Star-Rating</h1>
      <div className=" flex gap-5 mt-10">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            onClick={() => setRating(star)}
            onMouseOver={() => setHover(star)}
            onMouseLeave={() => setHover(rating)}
            className=" bg-transparent border-none outline-none"
            key={star}
          >
            <span
              className={`text-[100px] ${
                star <= ((rating && hover) || hover)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }  `}
            >
              &#9733;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Star_Rating;
