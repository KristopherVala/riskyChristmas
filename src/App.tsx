import { useState } from "react";
import TeamHeader from "./Teams/TeamHeader";
import Questions from "./Questions/Questions";
import WheelSpinner from "./Wheel/WheelSpinner";
import Snowfall from "react-snowfall";
import { christmasTrivia } from "./Questions/constants";
import CreateTeams from "./Teams/CreateTeams";
const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [pageView, setPageView] = useState("intro");
  const [activeTeam, setActiveTeam] = useState(0);
  const [showCreateTeams, setShowCreateTeams] = useState(false);

  const [teams, setTeams] = useState<
    | {
        name: string;
        score: number;
        players: string[];
        color: string;
      }[]
    | []
  >([]);
  const nextQuestion = () => {
    if (questionIndex === christmasTrivia.length - 1) return;
    setQuestionIndex(questionIndex + 1);
    setActiveTeam(activeTeam === teams.length - 1 ? 0 : activeTeam + 1);
  };

  const prevQuestion = () => {
    if (questionIndex === 0) return;
    setQuestionIndex(questionIndex - 1);
    setActiveTeam(activeTeam === 0 ? teams.length - 1 : activeTeam - 1);
  };

  const controls = [
    { name: "Wheel", handler: setPageView, visible: "Questions" },
    { name: "Questions", handler: setPageView, visible: "Wheel" },
    { name: "Prev", handler: prevQuestion, visible: "Questions" },
    { name: "Next", handler: nextQuestion, visible: "Questions" },
  ];
  return (
    <div className="bg-black p-6 h-screen relative">
      <Snowfall style={{ zIndex: 10 }} />

      {pageView === "intro" ? (
        <div className="h-screen w-screen relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/3 text-center z-30 ">
            <h1 className="text-white text-6xl">RISKY CHRISTMAS</h1>
            <h1 className="text-white text-2xl">CORMACK EDITION</h1>
          </div>
          <button
            className="absolute left-1/2 -translate-x-1/2 bottom-1/3 text-white cursor-pointer border-white border p-4 hover:bg-white hover:text-black transition-all duration-300 font-semibold hover:border-black"
            onClick={() => setShowCreateTeams(true)}
          >
            START
          </button>
          {showCreateTeams && (
            <CreateTeams
              teams={teams}
              setTeams={setTeams}
              setPageView={setPageView}
              setShowCreateTeams={setShowCreateTeams}
            />
          )}
        </div>
      ) : (
        <div className="h-full relative z-10">
          <TeamHeader teams={teams} setTeams={setTeams} />
          {pageView === "Questions" ? (
            <Questions questionIndex={questionIndex} key={questionIndex} />
          ) : (
            <WheelSpinner />
          )}
          <div className="flex flex-row gap-4 absolute bottom-2.5 right-2">
            {controls
              .filter((control) => control.visible === pageView)
              .map((control) => (
                <div
                  className="indentShadow px-4 transition-all duration-300 py-2 border-2 bg-white hover:scale-105 cursor-pointer"
                  onClick={() => control.handler && control.handler(control.name)}
                >
                  {control.name === "Next" && questionIndex === christmasTrivia.length - 1 ? (
                    "Done"
                  ) : (
                    <p>{control.name}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
