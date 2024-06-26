import React, { useEffect, useState } from "react";
import PlayerNameInput from "../components/PlayerNameInput";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import trashIcon from "../assets/trash.png";

function Players() {
  const [players, setPlayers] = useState([]);
  const [showPopupForPlayerNames, setShowPopupForPlayerNames] = useState(false);
  const [showPopupForPlayerMinNumber, setShowPopupForPlayerMinNumber] =
    useState(false);
  const navigate = useNavigate();

  const addPlayer = () => {
    const playerId = Date.now();
    setPlayers([...players, { id: playerId, name: "" }]);
  };

  const removePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
  };

  const startGame = () => {
    const hasEmptyName = players.some((player) => player.name === "");

    if (players.length < 3) {
      setShowPopupForPlayerMinNumber(true);
    } else if (hasEmptyName) {
      setShowPopupForPlayerNames(true);
    } else {
      navigate("/role-assignment", { state: { players } });
    }
  };

  const updatePlayerName = (id, newName) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === id) {
        return { ...player, name: newName };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  return (
    <form className="flex flex-col justify-center items-center h-[100dvh]">
      <div className="overflow-y-auto flex flex-col justify-start items-center gap-4 py-8 h-[80vh] w-[100vw] text-[#0c090a]">
        {players.map((player) => (
          <div
            className="flex justify-around items-center gap-4"
            key={player.id}
          >
            <PlayerNameInput
              value={player.name}
              onChange={(e) => updatePlayerName(player.id, e.target.value)}
            />
            <button
              type="button"
              className="border-none bg-transparent"
              onClick={() => removePlayer(player.id)}
            >
              <img className="w-6" src={trashIcon} alt="trash icon" />
            </button>
          </div>
        ))}

        <button
          type="button"
          className="w-52 sm:w-80 h-10 px-2 py-2 flex justify-center items-center shadow-lg shadow-gray-500/50 border-2 border-[#0c090a] bg-white text-[#0c090a] rounded-md text-lg cursor-pointer active:scale-[.97]"
          onClick={addPlayer}
        >
          Aggiungi giocatore
        </button>
      </div>
      <div className="h-[20vh] w-[100vw] flex flex-col justify-center items-center gap-4 shadow-2xl shadow-gray-900">
        <button
          type="button"
          className="w-[80vw] h-10 sm:w-96 sm:h-16 px-2 py-2 shadow-lg shadow-gray-500/50 bg-[#0c090a] text-white rounded-md text-lg sm:text-2xl cursor-pointer flex justify-center items-center active:scale-[.97]"
          onClick={startGame}
        >
          Iniziare Partita
        </button>
        <Link to={"/home"}>
          <button
            type="button"
            className="w-[80vw] h-10 sm:w-96 sm:h-16 px-2 py-2 shadow-lg shadow-gray-500/50 border-2 border-[#0c090a] bg-white text-[#0c090a] rounded-md text-lg sm:text-2xl cursor-pointer flex justify-center items-center active:scale-[.97]"
          >
            Torna indietro
          </button>
        </Link>

        <Dialog
          visible={showPopupForPlayerNames}
          onHide={() => setShowPopupForPlayerNames(false)}
          header="Alert"
          className="w-80 h-36 border-2 border-[#0c090a] shadow-xl shadow-gray-500/50 bg-white text-[#0c090a] rounded-md text-xl py-2 px-2 "
        >
          <p>Inserire tutti i nomi dei giocatori per continuare!</p>
        </Dialog>
        <Dialog
          visible={showPopupForPlayerMinNumber}
          onHide={() => setShowPopupForPlayerMinNumber(false)}
          header="Alert"
          className="w-80 h-36 border-2 border-[#0c090a] shadow-xl shadow-gray-500/50 bg-white text-[#0c090a] rounded-md text-xl py-2 px-2 "
        >
          <p>
            Per iniziare la partita, è necessario avere almeno tre giocatori.
          </p>
        </Dialog>
      </div>
    </form>
  );
}

export default Players;
