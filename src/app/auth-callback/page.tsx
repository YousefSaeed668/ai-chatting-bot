"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { useEffect } from "react";
const Page = () => {
  const router = useRouter();

  const params = useSearchParams();
  const origin = params.get("origin");
  const { data, isLoading, status } = trpc.authCallback.useQuery(undefined);

  useEffect(() => {
    if (status === "success") {
      // user is synced to db
      router.push(origin ? `/${origin}` : "/dashboard");
    }
  }, [data, status, origin, router]);

  useEffect(() => {
    if (status === "error") {
      router.push(origin ? `/${origin}` : "/");
    }
  }, [status, router, origin]);

  return <div></div>;
};

export default Page;
