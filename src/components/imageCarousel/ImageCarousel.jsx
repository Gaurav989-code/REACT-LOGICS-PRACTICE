import React, { useEffect } from "react";

const ImageCarousel = () => {
  const [images, setImages] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data.children;
    const list = data
      .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);
    setImages(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handelDirection = (dir) => {
    console.log(index);
    const lastIndex = images.length - 1;
    if (dir === "left") {
      if (index === 0) {
        setIndex(lastIndex);
      } else {
        setIndex(index - 1);
      }
    } else if (dir === "right") {
      if (index === lastIndex) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  useEffect(() => {
    const tid = setInterval(() => {
      handelDirection("right");
    }, 5000);
    return () => {
      clearInterval(tid);
    };
  }, [index]);

  return (
    <div className="w-screen h-screen bg-cyan-500">
      {loading ? (
        <div className="text-2xl text-white">Loading...</div>
      ) : (
        <div className="w-[100%] h-[100%] px-10 py-2 flex justify-between items-center">
          <button
            onClick={() => handelDirection("left")}
            className="text-2xl left-15 absolute hover:bg-[#2ff5f53b] text-white p-4 border-3 bg-transparent"
          >
            {"<"}
          </button>
          <img
            className="text-2xl w-[100%] h-[100vh] text-white object-cover "
            src={images[index]}
            alt="NOT-FOUND!"
          />
          <button
            onClick={() => handelDirection("right")}
            className="text-2xl absolute right-15 hover:bg-[#2ff5f53b] text-white p-4 border-3 bg-transparent"
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
