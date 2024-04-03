import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import eyeIcon from "../assets/eyeIcon.png";

function Votes() {
  const location = useLocation();
  const { playerRoles } = location.state;
  const { players } = location.state;
  const navigate = useNavigate();
  const [totalVotes, setTotalVotes] = useState(0); // Stato per tenere traccia del numero totale di votazioni
  const [showPopupForVotesNumberMax, setShowPopupForVotesNumberMax] =
    useState(false);
  const [showPopupForVotesNumberZero, setShowPopupForVotesNumberZero] =
    useState(false);

  //   useEffect(() => {
  //     console.log("players", players);
  //     console.log("players with role", playerRoles);
  //   }, []);

  useEffect(() => {
    const decrement = (e) => {
      const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
      );
      const target = btn.nextElementSibling;
      let value = Number(target.value);
      if (value > 0) {
        value--;
        target.value = value;
        setTotalVotes((prevTotalVotes) => prevTotalVotes - 1); // Aggiorna il numero totale di votazioni quando un voto viene decrementato
      }
    };

    const increment = (e) => {
      const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
      );
      const target = btn.nextElementSibling;
      let value = Number(target.value);
      if (value < playerRoles.length) {
        value++;
        target.value = value;
        setTotalVotes((prevTotalVotes) => prevTotalVotes + 1); // Aggiorna il numero totale di votazioni quando un voto viene incrementato
      }
    };

    const decrementButtons = document.querySelectorAll(
      `button[data-action="decrement"]`
    );

    const incrementButtons = document.querySelectorAll(
      `button[data-action="increment"]`
    );

    decrementButtons.forEach((btn) => {
      btn.addEventListener("click", decrement);
    });

    incrementButtons.forEach((btn) => {
      btn.addEventListener("click", increment);
    });

    // Rimuovere gli event listeners quando il componente viene smontato
    return () => {
      decrementButtons.forEach((btn) => {
        btn.removeEventListener("click", decrement);
      });
      incrementButtons.forEach((btn) => {
        btn.removeEventListener("click", increment);
      });
    };
  }, []); // Assicurarsi di passare un array vuoto come secondo argomento per garantire che l'effetto venga eseguito solo una volta

  useEffect(() => {
    // Funzione per controllare se il numero di votazioni supera il numero di giocatori e cambiare il colore del testo di conseguenza
    const handleVotes = () => {
      const numVotazioniElement = document.getElementById("numVotazioni");
      if (totalVotes > playerRoles.length) {
        numVotazioniElement.classList.add("text-red-500");
      } else {
        numVotazioniElement.classList.remove("text-red-500");
      }
    };

    // Chiamare la funzione per controllare il colore del testo delle votazioni ogni volta che totalVotes viene aggiornato
    handleVotes();
  }, [totalVotes, playerRoles]); // Dipendenze dell'effetto collaterale

  const showKiller = () => {
    if (totalVotes > playerRoles.length) {
      setShowPopupForVotesNumberMax(true);
    } else if (totalVotes === 0) {
      setShowPopupForVotesNumberZero(true);
    } else {
      console.log("Mostra l'assassino");
    }
  };

  const goToRoleAssignmentPage = () => {
    navigate("/role-assignment", { state: { players } });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      <div className="h-[10vh] flex justify-center items-center">
        <h1 className="text-2xl text-[#0c090a] font-bold">
          Inserire le votazioni!
        </h1>
      </div>
      <div className="h-[15vh] flex flex-col justify-center items-center">
        <p className="text-lg text-gray-600">
          Numero giocatori: {playerRoles.length}
        </p>
        <p id="numVotazioni" className="text-lg text-gray-600">
          Numero votazioni {totalVotes}
        </p>
        <button
          type="button"
          className="border-none outline-none py-3 text-gray-600 flex justify-center items-center gap-3"
          onClick={showKiller}
        >
          <p className="text-lg font-bold ">Tocca per vedere l'assassino</p>
          <img className="w-6" src={eyeIcon} alt="eyeIcon" />
        </button>
        <Dialog
          visible={showPopupForVotesNumberMax}
          onHide={() => setShowPopupForVotesNumberMax(false)}
          header="Alert"
          className="w-80 h-52 border-2 border-[#0c090a] shadow-xl shadow-gray-500/50 bg-white text-[#0c090a] rounded-md text-xl py-2 px-2 "
        >
          <p>
            Il numero di votazioni è maggiore del numero di giocatori. Si prega
            di inserire un numero di votazioni inferiore o uguale al numero di
            giocatori.
          </p>
        </Dialog>

        <Dialog
          visible={showPopupForVotesNumberZero}
          onHide={() => setShowPopupForVotesNumberZero(false)}
          header="Alert"
          className="w-80 h-36 border-2 border-[#0c090a] shadow-xl shadow-gray-500/50 bg-white text-[#0c090a] rounded-md text-xl py-2 px-2 "
        >
          <p>
            Per vedere l'assassino, è necessario inserire almeno una votazione.
          </p>
        </Dialog>
      </div>

      <ul className="h-[55vh] overflow-y-auto w-full text-lg text-[#0c090a] flex flex-col justify-start items-center gap-3">
        {playerRoles.map((player) => (
          <li
            key={player.id}
            className="w-full flex justify-evenly items-center"
          >
            <p className="w-[50%]">{player.name}</p>

            <div className="custom-number-input h-10 w-32">
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-[#0c090a]  outline-none"
                  name="custom-input-number"
                  defaultValue="0"
                  readOnly
                ></input>
                <button
                  data-action="increment"
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="h-[20vh] w-[100vw] flex flex-col justify-center items-center gap-4 shadow-2xl shadow-gray-900">
        <button
          type="button"
          className="w-[80vw] h-10 sm:w-96 sm:h-16 px-2 py-2 shadow-lg shadow-gray-500/50 bg-[#0c090a] text-white rounded-md text-lg sm:text-2xl cursor-pointer flex justify-center items-center active:scale-[.97]"
          onClick={goToRoleAssignmentPage}
        >
          Ricominciare partita
        </button>

        <Link to={"/players"}>
          <button
            type="button"
            className="w-[80vw] h-10 sm:w-96 sm:h-16 px-2 py-2 shadow-lg shadow-gray-500/50 border-2 border-[#0c090a] bg-white text-[#0c090a] rounded-md text-lg sm:text-2xl cursor-pointer flex justify-center items-center active:scale-[.97]"
          >
            Nuova partita
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Votes;
