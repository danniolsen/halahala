const MatchCardShimmer = () => {
  return (
    <div className="rounded-t-2xl rounded-b-2xl bg-gray-200 h-60">
      {/* header */}
      <div className="h-10 py-2 px-4 rounded-t-xl flex justify-between items-center">
        <div className="animate-pulse h-5 w-1/2 rounded-md bg-white" />
        <div className="h-6 w-6 animate-pulse bg-white rounded-lg" />
      </div>

      <div className="rounded-xl bg-white h-[188px]">
        {/* date and time*/}
        <div className="h-12 flex justify-center items-center">
          <div className="animate-pulse bg-gray-200 rounded-lg w-24 h-7"></div>
        </div>

        {/* team badges */}
        <div className="h-28 pb-4 grid grid-cols-5">
          <div className="col-span-2">
            <div className="flex justify-center">
              <div className="h-16 w-16 m-4 animate-pulse bg-gray-200 rounded-2xl" />
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-4 rounded-xl animate-pulse bg-gray-200" />
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex justify-center">
              <div className="h-16 w-16 m-4 animate-pulse bg-gray-200 rounded-2xl" />
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-4 rounded-xl animate-pulse bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCardShimmer;
