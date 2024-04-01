function PlayerNameInput({ value, onChange }) {
  return (
    <div className="relative h-10 w-80 min-w-[200px]">
      <input
        required
        className="peer h-full w-full rounded-md border border-gray-600 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#0c090a] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-600 placeholder-shown:border-t-gray-600 focus:border-2 focus:border-[#0c090a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-600"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-600 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#0c090a] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#0c090a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#0c090a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-600">
        Inserire nome giocatore
      </label>
    </div>
  );
}

export default PlayerNameInput;
