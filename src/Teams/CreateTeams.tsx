import { useState, type Dispatch, type SetStateAction } from "react";
import { Users, Play, ArrowLeft } from "lucide-react";

interface CreateTeamsProps {
  teams: {
    name: string;
    score: number;
    players: string[];
    color: string;
  }[];
  setTeams: Dispatch<SetStateAction<CreateTeamsProps["teams"]>>;
  setPageView: React.Dispatch<React.SetStateAction<string>>;
  setCreateTeams: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTeams = ({ setTeams, setPageView, setCreateTeams }: CreateTeamsProps) => {
  const [stage, setStage] = useState(0);
  const [numTeams, setNumTeams] = useState(0);
  const [tempTeams, setTempTeams] = useState<Array<{ name: string; players: string }>>([]);

  const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];

  const handleTeamNameChange = (index: number, value: string) => {
    const updated = [...tempTeams];
    if (!updated[index]) {
      updated[index] = { name: "", players: "" };
    }
    updated[index].name = value;
    setTempTeams(updated);
  };

  const handlePlayersChange = (index: number, value: string) => {
    const updated = [...tempTeams];
    if (!updated[index]) {
      updated[index] = { name: "", players: "" };
    }
    updated[index].players = value;
    setTempTeams(updated);
  };

  const handleStartGame = () => {
    const newTeams = tempTeams.map((team, index) => ({
      name: team.name || `Team ${index + 1}`,
      score: 0,
      players: team.players
        .split(",")
        .map((p) => p.trim())
        .filter((p) => p),
      color: colors[index % colors.length],
    }));
    setTeams(newTeams);
    setPageView("Questions");
    setCreateTeams(false);
  };

  const renderStage = () => {
    switch (stage) {
      case 0:
        return (
          <div className="flex flex-col gap-8 justify-center items-center py-4">
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-red-700" />
              <h1 className="text-3xl font-bold text-gray-800 mb-2">How Many Teams?</h1>
              <p className="text-gray-600">Select the number of teams to get started</p>
            </div>
            <div className="flex flex-row gap-4 flex-wrap max-w-1/2 justify-center">
              {Array.from({ length: 8 }, (_, index) => (
                <button
                  key={index}
                  className="group relative w-20 h-20 cursor-pointer bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-red-700 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  onClick={() => {
                    setNumTeams(index + 1);
                    setStage(1);
                  }}
                >
                  <span className="text-2xl font-bold text-gray-700 group-hover:text-red-700 transition-colors">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="flex flex-col gap-2 py-2 w-full">
            <div className="text-center mb-4 w-full">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Setup Teams</h1>
            </div>

            <div className="flex flex-row justify-center flex-wrap gap-6 max-h-96 overflow-y-auto px-4">
              {Array.from({ length: numTeams }, (_, index) => (
                <div
                  key={index}
                  className="p-5 max-w-[48%] from-white to-gray-50 border-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ borderColor: colors[index % colors.length] }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full shadow-md"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    />
                    <h3 className="text-lg font-semibold text-gray-700">Team {index + 1}</h3>
                  </div>
                  <div className="space-y-3">
                    <input
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-700 transition-colors shadow-sm"
                      type="text"
                      placeholder="Team name"
                      onChange={(e) => handleTeamNameChange(index, e.target.value)}
                    />
                    <input
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-700 transition-colors shadow-sm"
                      type="text"
                      placeholder="Players (e.g., Alice, Bob, Charlie)"
                      onChange={(e) => handlePlayersChange(index, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={() => {
                  setStage(0);
                  setTempTeams([]);
                }}
                className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <button
                onClick={handleStartGame}
                className="flex  cursor-pointer items-center gap-2 px-8 py-3 bg-red-700 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-red-800 hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Start Game
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl border-4 border-red-700 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-4 overflow-y-auto max-h-[90vh]">{renderStage()}</div>
      </div>
    </div>
  );
};

export default CreateTeams;
