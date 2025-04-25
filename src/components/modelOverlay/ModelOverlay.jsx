import React, { useState } from "react";
import CustomModel from "./CustomModel";

const ModelOverlay = () => {
  const [isShowOffer, setIsShowOffer] = useState(false);
  const [offerAccept, setOfferAccept] = useState(false);

  const handelShow = () => {
    setIsShowOffer(true);
  };

  const handelOffer = () => {
    setOfferAccept(true);
    setIsShowOffer(false);
  };

  const handelClose = () => {
    setIsShowOffer(false);
  };

  return (
    <div className="w-full h-screen bg-amber-50 flex items-center justify-center ">
      <div>
        {!offerAccept && (
          <button
            onClick={handelShow}
            className="w-[250px] h-[90px] shadow-2xl transform transition-transform
             hover:scale-110 hover:bg-red-300 bg-amber-200 text-black border-2 
             rounded-lg px-4 cursor-pointer "
          >
            Show-Offer
          </button>
        )}

        {offerAccept && (
            <div>
                <h1 className="text-3xl font-bold">Offer Accepted</h1>
            </div>
        ) }
      </div>

      {isShowOffer && (
        <div>
          <CustomModel handelClose={handelClose} handelOffer={handelOffer} />
        </div>
      )}
    </div>
  );
};

export default ModelOverlay;
