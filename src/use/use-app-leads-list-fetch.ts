import { leadsService } from "@/api";
import { WAITING_TIME } from "@/const";
import { TiLeadsList, TiUseLeadsListFetch } from "@/types";
import { useCallback, useState } from "react";

export function useAppLeadsListFetch(): TiUseLeadsListFetch {
  const [list, setList] = useState<TiLeadsList>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getList = useCallback(async () => {
    setLoading(true);
    setError(false);
    const data: TiLeadsList = [];
    let page = 1;
    const fetchPage = async () => {
      try {
        setError(false);
        setLoading(true);
        const newData = await leadsService.getLeadsList(page);
        if (newData?._embedded?.leads?.length) {
          data.push(...newData._embedded.leads);
          page++;
          setTimeout(fetchPage, WAITING_TIME);
        } else {
          setList(data);
          setLoading(false);
        }
      } catch (err) {
        setError(true);
        setLoading(false);
        console.error("Error fetching leads list:", err);
      }
    };
    fetchPage();
  }, []);

  return { list, loading, error, getList };
}
