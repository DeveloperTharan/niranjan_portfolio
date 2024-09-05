export const Skills = () => {
  return (
    <div className=" h-auto bg-[#14131a] p-3 rounded-lg shadow-2xl">
      <h1 className="text-xl text-gray-100 font-medium my-5 ml-2">Skill's</h1>
      <div className="flex flex-row flex-wrap flex-grow justify-start items-start gap-x-12 gap-y-6 mb-5">
        <div className="mx-2">
          <h1 className="text-md text-gray-300 font-medium">
            Data Visualization Tools:
          </h1>
          <div className="flex flex-row flex-wrap flex-grow justify-start items-center mt-2 gap-5">
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-yellow-900 rounded-md">
              Power BI
            </span>
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-blue-900 rounded-md">
              Tableau
            </span>
          </div>
        </div>
        <div className="mx-2">
          <h1 className="text-md text-gray-300 font-medium">
            Programming Languages:
          </h1>
          <div className="flex flex-row flex-wrap flex-grow justify-start items-center mt-2 gap-5">
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-neutral-900 rounded-md">
              Java
            </span>
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-orange-900 rounded-md">
              Python
            </span>
          </div>
        </div>
        <div className="mx-2">
          <h1 className="text-md text-gray-300 font-medium">
            Python Libraries:
          </h1>
          <div className="flex flex-row flex-wrap flex-grow justify-start items-center mt-2 gap-5">
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-purple-900 rounded-md">
              NumPy
            </span>
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-red-900 rounded-md">
              Pandas
            </span>
          </div>
        </div>
        <div className="mx-2">
          <h1 className="text-md text-gray-300 font-medium">
            Microsoft Excel:
          </h1>
          <div className="flex flex-row flex-wrap flex-grow justify-start items-center mt-2 gap-5">
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-green-900 rounded-md">
              Advanced Excel
            </span>
          </div>
        </div>
        <div className="mx-2">
          <h1 className="text-md text-gray-300 font-medium">Database:</h1>
          <div className="flex flex-row flex-wrap flex-grow justify-start items-center mt-2 gap-5">
            <span className="px-4 py-[8px] text-medium bg-[#1c1b23] border border-blue-900 rounded-md">
              SQL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
