import React, { useEffect } from "react";

const Job_board = () => {
  const [postIds, setPostIds] = React.useState([]);
  const [postMetaData, setPostMetaData] = React.useState([]);

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getFormattedDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  };

  const getTitle = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    if (arr.length > 1) {
      const part1 = arr[0];
      const part2 = arr[1];
      return `${part1} ${part2}`;
    }
    return "N/A";
  };

  const getJobInfo = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    if (arr.length > 2) {
      return arr[2];
    }
    return "N/A";
  };

  const fetchPostMetaData = async (ids) => {
    const apiCalls = ids.map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
      return getData(url);
    });
    const results = await Promise.all(apiCalls);
    if (results.length) {
      const newArray = results.map((item) => {
        const obj = {
          jobTitle: getTitle(item.title),
          jobInfo: getJobInfo(item.title),
          date: getFormattedDate(item.time),
          url: item.url
            ? item.url
            : `https://news.ycombinator.com/item?id=${item.id}`,
        };
        return obj;
      });
      let copyPostMetaData = [...postMetaData];
      copyPostMetaData = [...copyPostMetaData, ...newArray];
      setPostMetaData(copyPostMetaData);
    }
  };
  console.log(postMetaData);

  const fetchData = async () => {
    const url = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
    const data = await getData(url);
    const ids = data.splice(0, 6);
    setPostIds(data);
    fetchPostMetaData(ids);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handelLoadMore = (e) => {
    const copyPostIds = [...postIds];
    if(copyPostIds.length>0){
      const ids = copyPostIds.splice(0, 3);
      fetchPostMetaData(ids);
      setPostIds(copyPostIds);
    }

  }
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center ">
      <h1 className="text-3xl font-bold ">Job_board Job_board</h1>
      <div className="w-[80%] h-[70%] grid grid-cols-3 gap-4 p-4 mt-10 ">
        {postMetaData?.length === 0 ? (
          <div>Loading...</div>
        ) : (
          postMetaData.map((post, i) => (
            <a href={post.url} key={i} target="_blank"
            className="border border-gray-300 rounded-lg cursor-pointer p-4 decoration-none flex hover:bg-gray-100 flex-col justify-between hover:shadow-xl">
              <div className="text-xl font-bold">{post.jobTitle}</div>
              <div>{post.jobInfo}</div>
              <div>{post.date}</div>
            </a>
          ))
        )}
      </div>
      <button  onClick={handelLoadMore}
      className="border border-gray-300 rounded-lg cursor-pointer py-2 px-6 decoration-none flex hover:bg-gray-100 flex-col justify-between hover:shadow-xl">Load More</button>
    </div>
  );
};

export default Job_board;
