import React, { useEffect } from "react";

const Calculator = () => {
  const [principle, setPrinciple] = React.useState(0);
  const [interest, setInterest] = React.useState(0);
  const [years, setYears] = React.useState(0);
  const [emi, setEmi] = React.useState(0);

  const handelChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if (id === "principle") {
      setPrinciple(value);
    } else if (id === "interest") {
      setInterest(value);
    } else if (id === "years") {
      setYears(value);
    }
  };
  //P(r(1+r)^n/((1+r)^n)-1))
  const calculateEmi = () => {
    let r = interest;
    if (principle && r && years) {
      r = r / 12 / 100; // per month
      const calcPow = Math.pow(1 + r, years * 12);
      const amount = principle * ((r * calcPow) / (calcPow - 1));
      setEmi(Math.round(amount));
    }

  }
  

  useEffect(() => {
    calculateEmi();
  }, [principle, interest, years]);

  return (
    <div className="bg-amber-300 h-screen flex items-baseline-last justify-center ">
      <div className="w-[400px] h-[500px] bg-amber-500 border-2 p-5 m-100px m-auto">
        <h1 className="text-center">Mortgage Calculator</h1>
        <div className="flex flex-col m-4">
          <p className="m-2 text-2xl">Principle</p>
          <input
            onChange={handelChange}
            className="border-2 h-[36px] text-lg font-bold  bg-amber-50"
            type="number"
            id="principle"
          />

          <p className="m-2 text-2xl"> interest</p>
          <input
            onChange={handelChange}
            className="border-2 h-[36px]   bg-amber-50"
            type="number"
            id="interest"
          />

          <p className="m-2 text-2xl">years</p>
          <input
            onChange={handelChange}
            className="border-2 h-[36px]  bg-amber-50"
            type="number"
            id="years"
          />
        </div>
        <div className="text-center text-2xl font-bold">
          your monthly Emi is :{emi}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
