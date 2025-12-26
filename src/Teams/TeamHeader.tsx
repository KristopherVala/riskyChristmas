import type { Dispatch, SetStateAction } from "react";
import { X, Flame, Trophy, Check } from "lucide-react";

interface TeamHeaderProps {
  teams: {
    name: string;
    score: number;
    players: string[];
    color: string;
  }[];
  activeTeam: number;
  setTeams: Dispatch<SetStateAction<TeamHeaderProps["teams"]>>;
}

const TeamHeader = ({ teams, activeTeam, setTeams }: TeamHeaderProps) => {
  const handleWrong = () => {
    // Do nothing
  };

  const handleLostIt = () => {
    setTeams((prevTeams) =>
      prevTeams.map((team, index) => (index === activeTeam ? { ...team, score: team.score - 50 } : team))
    );
  };

  const handleCorrect = () => {
    setTeams((prevTeams) =>
      prevTeams.map((team, index) => (index === activeTeam ? { ...team, score: team.score + 50 } : team))
    );
  };
  const handleDouble = () => {
    console.log("huh?");
    setTeams((prevTeams) =>
      prevTeams.map((team, index) => (index === activeTeam ? { ...team, score: team.score + 100 } : team))
    );
  };
  const actionButtons = [
    { onClick: handleWrong, color: "gray", icon: X, label: "WRONG", points: null },
    { onClick: handleLostIt, color: "red", icon: Flame, label: "LOST IT", points: "-50" },
    { onClick: handleCorrect, color: "green", icon: Check, label: "CORRECT", points: "+50" },
    { onClick: handleDouble, color: "green", icon: Trophy, label: "DOUBLE IT", points: "+100" },
  ];

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className={`group flex-1 p-4 relative rounded-lg ${index === activeTeam ? "ring-4 ring-yellow-400" : ""}`}
            style={{ backgroundColor: team.color }}
          >
            <h2 className="text-xl font-bold text-white">{team.name}</h2>
            <p className="text-3xl font-bold text-white">{team.score}</p>
            <p className="text-sm text-white opacity-90">{team.players.join(", ")}</p>

            <div className="absolute top-2 right-2 grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {actionButtons.map((btn, btnIndex) => (
                <button
                  key={btnIndex}
                  onClick={btn.onClick}
                  className={`flex items-center smallShadow justify-center gap-1 bg-${btn.color}-500 cursor-pointer text-white p-2 rounded-lg font-bold hover:bg-${btn.color}-600 transition-all hover:scale-105 active:scale-95 min-w-12.5`}
                >
                  <btn.icon size={20} />
                  {btn.points && <span className="text-xs font-normal">{btn.points}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamHeader;
