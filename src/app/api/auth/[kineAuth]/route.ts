import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const endpoint = params.kineAuth;
  return handleAuth(request, endpoint);
}