import { FC, useEffect } from "react";

import { useAppLeadsListFetch } from "@/use";
import { AppError, AppLeadList, AppLoading } from "@/components";

export const AppLeads: FC = () => {
  const { list, error, loading, getList } = useAppLeadsListFetch();

  useEffect(() => {
    getList();
  }, [getList]);

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center">
        <AppLoading />
      </div>
    );
  }

  if (error) {
    return <AppError refresh={getList} />;
  }

  return (
    <>
      <h4 className="sticky-top bg-body py-2 mb-0">Leads List</h4>
      <AppLeadList list={list} />
    </>
  );
};
