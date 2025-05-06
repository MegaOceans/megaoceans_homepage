import { useRouter } from "next/navigation";
export default function Link({ link, title }) {
  const router = useRouter();

  return (
    <p
      className="hover:cursor-pointer hover:text-secondary"
      onClick={() => router.push(link)}
    >
      {title}
    </p>
  );
}
