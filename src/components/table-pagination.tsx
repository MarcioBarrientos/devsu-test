const TablePagination = ({ count }: {
  count: number
}) => {
  return (
    <div className="table-footer">
      <div>
        <strong>{count} resultados</strong>
      </div>
      <div className="pagination">
        <select className="pagination-dropdown">
          <option value="5" selected>5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  )
}
export default TablePagination
