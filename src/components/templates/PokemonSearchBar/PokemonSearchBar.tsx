import Pagination from "@/components/molecules/Pagination/Pagination";
interface Props {
  paginate: number;
}
export default function PokemonSearchBar({ paginate }: Props) {
  return (
    <div>
      <div>{paginate}</div>
      <Pagination paginate={paginate} />
    </div>
  );
}
