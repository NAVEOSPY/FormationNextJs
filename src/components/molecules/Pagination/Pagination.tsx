interface Props {
  paginate: number;
}

export default function Pagination() {
  return (
    <div className="pagination">
      <div onClick={() => (paginate = paginate - 1)}>{"<"}</div>
      <div onClick={() => (paginate = paginate + 1)}>{">"}</div>
    </div>
  );
}
