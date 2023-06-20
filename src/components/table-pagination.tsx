const TablePagination = ({ count }: {
  count: number
}) => {
  return (
    <div className="table-footer">
      <div>
        <strong>{count} resultados</strong>
      </div>
      <div className="pagination">
        <select defaultValue="5" className="pagination-dropdown">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  )
}
export default TablePagination
