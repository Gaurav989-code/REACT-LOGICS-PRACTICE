import React, { useEffect } from "react";

const FAQItems = ({ faq, index }) => {
  const [isShow, setIsShow] = React.useState(false);

  useEffect(() => {
    if (index == 0) {
      setIsShow(true);
    }
  }, []);

  return (
    <div className="faq-box bg-gray-400 text-left text-lime-400  m-5 p-4 border rounded-lg ">
      <div className="faq-question text-4xl font-bold flex  items-center content-start gap-2">
        <button className={isShow ? 'arrow' : ''} onClick={() => setIsShow(!isShow)}>▶️</button>
        <div>{faq.question}</div>
      </div>
     {isShow &&  <div className="faq-answer text-right-20 max-w-full m-2 p-2 text-amber-300  ">{faq.answer}</div>}
    </div>
  );
};

export default FAQItems;
