import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { quizData, WheelResults } from "../Questions/constants";

const WheelSpinner = () => {
  const [spin, setSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleResult = () => {
    setSpin(false);
    setShowModal(true);
  };

  const ResultModal = () => {
    const selectedGame = WheelResults.find((e) => e.key === prizeNumber);
    return <p>{selectedGame?.game}</p>;
  };

  return (
    <>
      <div
        onClick={() => {
          const newPrizeNumber = Math.floor(Math.random() * quizData.length);
          setPrizeNumber(newPrizeNumber);
          setSpin(true);
        }}
        className="flex justify-center mt-3"
      >
        <Wheel
          mustStartSpinning={spin}
          onStopSpinning={() => {
            handleResult();
          }}
          prizeNumber={prizeNumber}
          data={quizData}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#000"]}
          spinDuration={1}
        />
      </div>
      {showModal ? (
        <>
          <div className="fixed w-screen h-screen left-0 top-0 bg-black/60 z-50" />
          <div className="fixed w-[80vw] indentShadow p-8 text-black z-100 h-[80vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ">
            {ResultModal()}
          </div>
        </>
      ) : null}
    </>
  );
};

export default WheelSpinner;
