import { useContext } from "react";
import MainContext from "../../context/QueryContext";
import Query from "./Query";

const SideBar = () => {
  const { queryHistory, setQueryHistory } = useContext(MainContext);

  return (
    <div className='rounded-md m-4 h-full p-4 bg-gray-100 border-r border-gray-100 flex flex-col gap-2 justify-between'>
      <div className='min-h-[30vh]'>
        <div className="flex justify-between mb-2 gap-1">
        <h5 className="flex">
          <span className='fa fa-cloud secondary me-2 my-auto'></span>{" "}
          <span className='font-bold'>Queries Available</span>
        </h5>
        <div className="hover:cursor-pointer hover:underline my-auto text-xs w-fit h-fit" onClick={()=> setQueryHistory((prev) => ({
          ...prev,
          saved: []
        }) )}>Clear All Queries</div>
        </div>
        {queryHistory ? <Query type='saved' /> : null}
      </div>
      <div className='min-h-[30vh]'>
        <div className="mb-2 flex justify-between">
        <h5>
          <span className='fa fa-undo secondary me-2'></span>{" "}
          <span className='font-bold'>Query History</span>
        </h5>
        <div className="hover:cursor-pointer hover:underline my-auto text-xs" onClick={()=> setQueryHistory((prev) => ({
          ...prev,
          history: []
        }) )}>Clear All History</div>
        </div>
        {queryHistory ? <Query type='history' /> : null}
      </div>
    </div>
  );
};

export default SideBar;
