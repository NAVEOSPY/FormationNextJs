interface Props {
    paginateState: [
        paginate: number,
        setPaginate: (newPaginate: number) => void,
    ];
}

export default function Pagination({ paginateState }: Props) {
    const [paginate, setPaginate] = paginateState;

    return (
        <div className="pagination">
            <div onClick={() => setPaginate(paginate - 1)}>{"<"}</div>
            <div onClick={() => setPaginate(paginate + 1)}>{">"}</div>
        </div>
    );
}
