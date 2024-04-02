import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
      className="flex flex-col justify-center items-center h-[100dvh] text-black text-3xl font-bold sm:text-5"
      onClick={handlePlayerClick}
    >
      {!gameStarted &&
        (showRole ? (
          <div>Ruolo: {playerRoles[currentPlayerIndex].role}</div>
        ) : (
          <div>Giocatore: {players[currentPlayerIndex].name}</div>
        ))}
      {showStartMessage && <div>Inizio partita</div>}
    </div>
  );
}

export default RoleAssignment;
