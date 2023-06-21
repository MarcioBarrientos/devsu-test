const TablePagination = ({count, paginationCount, setPaginationCount}: {
    count: number
    paginationCount: number
    setPaginationCount: (count: number) => void
}) => {
    return (
        <div className="table-footer">
            <div>
                <strong>{count} resultados</strong>
            </div>
            <div className="pagination">
                <select defaultValue={paginationCount} onChange={e => setPaginationCount(parseInt(e.target.value))}
                        className="pagination-dropdown">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    )
}
export default TablePagination
