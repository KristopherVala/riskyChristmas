import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { quizData, WheelResults } from "../Questions/constants";

const WheelSpinner = () => {
  const [spin, setSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showSteal, setShowSteal] = useState(false);

  const selectedGame = WheelResults.find((e) => e.key === prizeNumber);

  useEffect(() => {
    if (!isTimerActive || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsTimerActive(false);
          setShowSteal(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleSpin = () => {
    setPrizeNumber(Math.floor(Math.random() * quizData.length));
    setSpin(true);
  };

  const handleStopSpinning = () => {
    setSpin(false);
    setShowModal(true);
  };

  const startTimer = () => {
    setTimer(selectedGame?.time || 0);
    setIsTimerActive(true);
    setShowSteal(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerActive(false);
    setShowSteal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    resetTimer();
  };

  return (
    <div className="flex justify-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
      <div className="relative flex justify-center mt-3 bg-white rounded-full max-w-fit indentShadow">
        <div className="absolute top-12.5 right-7.5 rotate-45 -translate-x-1/2 -translate-y-2 z-10">
          <div
            className="w-0 h-0 border-l-30 border-l-transparent border-r-30 border-r-transparent border-t-40 border-t-red-400 drop-shadow-lg animate-bounce"
            style={{ animationDuration: "1.5s" }}
          />
        </div>

        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
            spin ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-400/30 to-transparent blur-xl animate-pulse" />
        </div>

        <div className={`transition-all duration-300 drop-shadow-2xl ${spin ? "scale-105" : "scale-100"}`}>
          <Wheel
            mustStartSpinning={spin}
            onStopSpinning={handleStopSpinning}
            prizeNumber={prizeNumber}
            data={quizData}
            backgroundColors={["#3e3e3e", "#df3428"]}
            textColors={["#ffffff"]}
            spinDuration={0.8}
            innerBorderColor="#fef3c7"
            innerBorderWidth={4}
            outerBorderWidth={2}
            radiusLineColor="#fbbf24"
            radiusLineWidth={2}
            fontSize={18}
            textDistance={65}
            pointerProps={{ style: { opacity: 0 } }}
          />
        </div>

        <button
          onClick={handleSpin}
          disabled={spin}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-linear-to-br from-red-500 cursor-pointer to-red-700 text-white font-bold text-lg shadow-2xl z-20 transition-all duration-300 ${
            spin ? "opacity-0" : "scale-100 hover:scale-110 hover:shadow-lg"
          }`}
        >
          SPIN
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{selectedGame?.game}</h2>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 smallShadow">
              <p className="text-gray-700 text-center">{selectedGame?.instructions}</p>
            </div>

            {selectedGame?.time && (
              <div
                className={`rounded-lg p-6 text-white mb-6 smallShadow ${
                  timer <= 10 && isTimerActive && timer > 0
                    ? "bg-linear-to-r from-red-500 to-red-700"
                    : "bg-linear-to-r from-purple-500 to-pink-500"
                }`}
              >
                <p className="text-sm uppercase tracking-wide mb-2 text-center">Time Challenge</p>
                {!showSteal && timer > 0 && <p className="text-4xl font-bold text-center mb-4">{timer}s</p>}
                <div className="flex gap-2">
                  <button
                    onClick={startTimer}
                    disabled={isTimerActive}
                    className="flex-1 bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isTimerActive ? "Running..." : "Start"}
                  </button>
                  {timer > 0 && (
                    <button
                      onClick={resetTimer}
                      className="flex-1 smallShadow bg-white text-red-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            )}

            <button
              onClick={closeModal}
              className="w-full bg-gray-200 smallShadow text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSteal && (
        <div
          className="fixed inset-0 flex items-center justify-center  z-50"
          onClick={() => {
            setShowSteal(false);
            setShowModal(false);
          }}
        >
          <div
            className="bg-linear-to-br from-red-600 to-red-800 rounded-3xl shadow-2xl p-16 border-4 border-green-400"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-8xl font-black text-white text-center drop-shadow-2xl animate-bounce">STEAL!</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default WheelSpinner;
