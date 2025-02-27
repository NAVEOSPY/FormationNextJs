import { useRouter } from "next/router";

export default function AffichageParId() {
  const router = useRouter();

  return <p>Post: {router.query.slug}</p>;
}
