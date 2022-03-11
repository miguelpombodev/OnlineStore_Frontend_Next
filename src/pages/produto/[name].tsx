import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { name } = router.query;

  return <h1>Slug: {name}</h1>;
}
