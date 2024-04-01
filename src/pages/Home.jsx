import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="overflow-hidden flex flex-col justify-center items-center h-[100vh] gap-6">
      <div className="px-2 py-2 text-center sm:text-2xl text-lg text-[#0c090a]">
        <p>
          <b>Find the Killer</b> è un gioco in cui a ogni giocatore viene
          assegnato un ruolo: assassino o innocente. Per ogni partita, c'è un
          solo assassino. Dopo l'assegnazione dei ruoli, i giocatori devono
          discutere per individuare l'assassino. Se l'assassino non viene
          individuato da nessuno, può assegnare una penitenza a un giocatore da
          lui scelto. Per assegnare una penitenza all'assassino, la maggioranza
          dei giocatori deve averlo indicato. Buon divertimento!
        </p>
      </div>
      <Link to={"/players"}>
        <button
          type="button"
          className="px-8 py-2 shadow-lg shadow-gray-500/50 bg-black text-white rounded-md text-xl sm:text-3xl cursor-pointer active:scale-[.97]"
        >
          Iniziare
        </button>
      </Link>
    </div>
  );
}

export default Home;
