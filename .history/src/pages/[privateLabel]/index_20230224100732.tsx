import { getParner } from "@/api/parner";
import { withCSR } from "@/HOC/with-CSR";
import { usePartner } from "@/hooks/api/partner";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface Partner {
  partnerId: number;
  partnerName: string;
  privateLabelSite: string;
  statusId: number;
}

export default function Home() {

  useEffect(())
  const router = useRouter();
  const {
    query: { privateLabel },
  } = useRouter();

  const { data, isLoading } = usePartner(privateLabel);
  debugger;
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div key={item.show.id}>
            <p>{item.show.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export const getServerSideProps = withCSR(async (ctx: any) => {
  debugger;
  console.log("getServerSideProps");

  const { privateLabel } = ctx.params;
  console.log("url path" + ctx);

  const queryClient = new QueryClient();

  let isError = false;

  try {
    await queryClient.fetchQuery(["post", privateLabel], () =>
      getParner(privateLabel)
    );
  } catch (error: any) {
    isError = true;
    ctx.res.statusCode = error.response.status;
  }

  return {
    props: {
      //also passing down isError state to show a custom error component.
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  };
});
