import { getTableHeadFromData, getTableRowsFromData } from "../../assets/data/tableHelpers"

const Table = ({result=[]}) => {
  return (
    <div className='m-0 mr-1.5 mb-1 h-[72vh] overflow-auto'>
      {result.length > 0 ? (
        <table>
          <thead>
            {getTableHeadFromData(result)}
          </thead>
          {getTableRowsFromData(result)}
        </table>
      ) : null}
    </div>
  )
}

export default Table