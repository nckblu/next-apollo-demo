import { useState } from "react";
import { useQuery } from "@apollo/client";
import SUPER_COOL_GUYS_QUERY from "../queries/people";

export const useSuperCoolGuys = (limit = 21) => {
  const [superCoolGuys, setSuperCoolGuys] = useState([]);
  const { data, loading, error, fetchMore } = useQuery(SUPER_COOL_GUYS_QUERY, {
    variables: { limit, offset: 0 },
    onCompleted: (res) => {
      setSuperCoolGuys(res.superCoolGuys);
    },
  });

  const loadMore = async () => {
    try {
      const {
        data: { superCoolGuys: moreSuperCoolGuys },
      } = await fetchMore({
        variables: {
          offset: superCoolGuys.length,
        },
      });
      setSuperCoolGuys(superCoolGuys.concat(moreSuperCoolGuys));
    } catch (err) {
      console.log("err", err);
    }
  };

  return {
    loadMore,
    superCoolGuys,
    error,
    loading,
  };
};

export default useSuperCoolGuys;
