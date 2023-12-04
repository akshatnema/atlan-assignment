import { useMemo, useState, lazy } from "react";
import "./Editor.css";
const SideBar = lazy(() => import("../editor-components/SideBar"));
const CodeMirror = lazy(() => import("../editor-components/CodeEditor"));
const Output = lazy(() => import("../editor-components/Output"));
import MainContext from "../../context/QueryContext";

function Editor() {
  const [query, setQuery] = useState("SELECT * FROM internetData;");
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT * FROM internetData;", "SELECT id, first_name, last_name, email FROM internetData;"],
    history: ["SELECT * FROM internetData;"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  return (
    <div className='App-Editor'>
      <MainContext.Provider value={contextValue}>
        <div className='mb-4'>
          <div className='md:grid grid-cols-7'>
            <div className='h-full col-span-2'>
              <SideBar />
            </div>
            <div className='col-span-5 overflow-auto h-[85vh]'>
              <CodeMirror />
              <Output />
            </div>
          </div>
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Editor;
