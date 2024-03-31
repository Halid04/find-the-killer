import React, { useEffect, useState } from "react";

function Home() {
  return (
    <div className=" overflow-hidden flex flex-col justify-center items-center h-[100vh] gap-14">
      <div className="px-2 py-2 text-center text-2xl ">
        {/* <p className="font-bold"></p> */}
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
      <button
        type="button"
        className="px-12 py-2 shadow-lg shadow-gray-500/50 bg-black text-white rounded-md text-3xl cursor-pointer active:scale-[.97]"
      >
        Iniziare
      </button>
    </div>
  );
}

export default Home;
