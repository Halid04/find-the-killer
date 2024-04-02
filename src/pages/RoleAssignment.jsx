import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import innocentPlayer from "../assets/innocentPlayer.png";
import KillerPlayer from "../assets/KillerPlayer.png";

function RoleAssignment() {
  const location = useLocation();
  const { players } = location.state;

  const [playerRoles, setPlayerRoles] = useState([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * players.length);
    const updatedRoles = players.map((player, index) => ({
      ...player,
      role: index === randomIndex ? "Assassino" : "Innocente",
    }));
    setPlayerRoles(updatedRoles);
  }, []); // Esegue l'effetto solo una volta all'inizio

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [showRole, setShowRole] = useState(false);
  const [showStartMessage, setShowStartMessage] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const isLastPlayer = players.length - 1;

  const handlePlayerClick = () => {
    if (!showRole) {
      setShowRole(true);
    } else {
      if (currentPlayerIndex < isLastPlayer) {
        setCurrentPlayerIndex((prevIndex) => prevIndex + 1);
        setShowRole(false);
        setShowStartMessage(false);
      } else {
        setGameStarted(true);
        setShowStartMessage(true);
        setShowRole(false); // Nascondi il ruolo quando appare la frase "Inizio partita"
      }
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-[100dvh] text-[#0c090a] text-3xl"
      onClick={handlePlayerClick}
    >
      {!gameStarted &&
        (showRole ? (
          <div className="flex flex-col justify-between items-center h-[100dvh]">
            <div className="h-[20vh] sm:h-[10vh] font-bold mt-[5rem] sm:mt-[10rem] sm:text-[4rem]">
              Ruolo: {playerRoles[currentPlayerIndex].role}
            </div>
            {playerRoles[currentPlayerIndex].role == "Assassino" ? (
              <img
                className="w-80 sm:w-96"
                src={KillerPlayer}
                alt="Killer player"
              />
            ) : (
              <img
                className="w-80 sm:w-96"
                src={innocentPlayer}
                alt="Innocent player"
              />
            )}
            <div className="h-[3vh] text-base sm:text-3xl mb-[2rem] sm:mb-[5rem] animate-bounce ">
              <p>Tocca per passare al prossimo giocatore</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between items-center h-[100dvh]">
            <div className="font-bold h-[97vh] flex flex-col justify-center items-center sm:text-[4rem]">
              Giocatore: {players[currentPlayerIndex].name}
            </div>
            <div className="h-[3vh] text-base sm:text-3xl mb-[2rem] sm:mb-[5rem] animate-bounce ">
              <p>Tocca per vedere il ruolo</p>
            </div>
          </div>
        ))}
      {showStartMessage && (
        <div className="font-bold sm:text-[4rem]">Inizio partita</div>
      )}
    </div>
  );
}

export default RoleAssignment;
