export type TiLead = {
  id: number;
  name: string;
  price: number;
  closest_task_at: number;
};

export type TiLeadsList = TiLead[];

export type TiLeadsListEmbedded = {
  leads: TiLeadsList;
};

export type TiUseLeadsListFetch = {
  list: TiLeadsList;
  loading: boolean;
  error: boolean;
  getList: () => Promise<void>;
};

export type TiUseLeadFetch = {
  lead?: TiLead;
  loading: boolean;
  error: boolean;
  getLead: (id: number) => Promise<void>;
  reset: () => void;
};

export type TiLeadStatus = "red" | "yellow" | "green" | "grey";
