const StandingsHeader = () => {
  return (
    <div className="grid grid-cols-9 md:grid-cols-12 grid-rows-1 text-slate-500 text-sm text-center py-2 bg-white">
      <div className="text-center">
        <p className="font-semibold">Club</p>
      </div>
      <div className="col-span-3"></div>
      <div className="col-start-5">
        <p>P</p>
      </div>
      <div className="col-start-6">
        <p>W</p>
      </div>
      <div className="col-start-7">
        <p>D</p>
      </div>
      <div className="col-start-8">
        <p>L</p>
      </div>

      <div className="max-md:hidden col-span-1">
        <p>GF</p>
      </div>

      <div className="max-md:hidden col-span-1">
        <p>GA</p>
      </div>

      <div className="max-md:hidden col-span-1">
        <p>GD</p>
      </div>
      <div className="col-span-1">
        <p className="font-semibold">Pts</p>
      </div>
    </div>
  );
};

export default StandingsHeader;
