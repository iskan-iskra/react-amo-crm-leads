import httpClient from "./core";
import { ENDPOINTS, PAGE_SIZE } from "@/const";
import { TiApiListResponse, TiLead, TiLeadsListEmbedded } from "@/types";

const getLeadsList = (
  page: number
): Promise<TiApiListResponse<TiLeadsListEmbedded>> =>
  httpClient({
    url: ENDPOINTS.LEAD_LIST,
    method: "get",
    params: {
      page,
      limit: PAGE_SIZE,
    },
  }).then((res) => res.data);

const getLeadById = (id: number): Promise<TiLead> =>
  httpClient({
    url: `${ENDPOINTS.LEAD_LIST}/${id}`,
    method: "get",
  }).then((res) => res.data);

export default {
  getLeadsList,
  getLeadById,
};
