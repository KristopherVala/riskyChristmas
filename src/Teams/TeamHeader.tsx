import type { Dispatch, SetStateAction } from "react";
import { X, Flame, Trophy, Check } from "lucide-react";

interface TeamHeaderProps {
  teams: {
    name: string;
    score: number;
    players: string[];
    color: string;
  }[];
  setTeams: Dispatch<SetStateAction<TeamHeaderProps["teams"]>>;
}

const TeamHeader = ({ teams, setTeams }: TeamHeaderProps) => {
  const handleSubHundred = (teamIndex: number) => {
    setTeams((prevTeams) =>
      prevTeams.map((team, index) => (index === teamIndex ? { ...team, score: team.score - 100 } : team))
    );
  };

  const handleLostIt = (teamIndex: number) => {
    setTeams((prevTeams) =>
      prevTeams.map((team, index) => (index === teamIndex ? { ...team, score: team.score - 50 } : team))
    );
  };

  const handleCorrect = (teamIndex: number) => {
    setTeams((prevTeams) =>
      prevTeams.map((team, index) => (index === teamIndex ? { ...team, score: team.score + 50 } : team))
    );
  };
  const handleDouble = (teamIndex: number) => {
    console.log("huh?");
    setTeams((prevTeams) =>
      prevTeams.map((team, index) => (index === teamIndex ? { ...team, score: team.score + 100 } : team))
    );
  };
  const actionButtons = [
    { onClick: handleLostIt, color: "red", icon: X, label: "LOST IT", points: "-50" },
    { onClick: handleSubHundred, color: "red", icon: Flame, label: "GONE", points: "-100" },
    { onClick: handleCorrect, color: "green", icon: Check, label: "CORRECT", points: "+50" },
    { onClick: handleDouble, color: "green", icon: Trophy, label: "DOUBLE IT", points: "+100" },
  ];

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className={`group flex-1 p-4 relative rounded-lg hover:scale-105 transition-all duration-300`}
            style={{ backgroundColor: team.color }}
          >
            <h2 className="text-xl font-bold text-white">{team.name}</h2>
            <p className="text-3xl font-bold text-white">{team.score}</p>
            <p className="text-sm text-white opacity-90">{team.players.join(", ")}</p>

            <div className="absolute top-2 right-2 grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {actionButtons.map((btn, btnIndex) => (
                <button
                  key={btnIndex}
                  onClick={() => btn.onClick(index)}
                  className={`flex items-center smallShadow justify-center gap-1 cursor-pointer text-white p-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 min-w-12.5`}
                  style={{ backgroundColor: btn.color }}
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
