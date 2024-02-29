import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const params = useSearchParams();
  const origin = params.get("origin");

  return <div></div>;
};

export default Page;
