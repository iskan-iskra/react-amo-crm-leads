import { leadsService } from "@/api";
import { TiLead, TiUseLeadFetch } from "@/types";
import { useCallback, useState } from "react";

export function useAppLeadFetch(): TiUseLeadFetch {
  const [lead, setLead] = useState<TiLead | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getLead = useCallback(async (id: number) => {
    try {
      setError(false);
      setLoading(true);
      const data = await leadsService.getLeadById(id);
      setLead(data);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setLead(undefined);
    setLoading(false);
    setError(false);
  }, []);

  return {
    lead,
    loading,
    error,
    getLead,
    reset,
  };
}
