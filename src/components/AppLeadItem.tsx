import { TiLead } from "@/types";
import { useAppLeadFetch } from "@/use/use-app-lead-fetch";
import { FC, memo, useCallback } from "react";
import { Accordion, Stack } from "react-bootstrap";
import { AppError } from "./AppError";
import { AppLoading } from "./AppLoading";
import { AppLeadInfo } from "./AppLeadInfo";

type TiAppLeadItem = {
  leadId: TiLead["id"];
  leadName: TiLead["name"];
  leadPrice: TiLead["price"];
};

export const AppLeadItem: FC<TiAppLeadItem> = memo(
  ({ leadId, leadName, leadPrice }) => {
    const { error, getLead, loading, lead, reset } = useAppLeadFetch();

    const getLeadHandler = useCallback(() => {
      getLead(leadId);
    }, [leadId, getLead]);

    return (
      <Accordion.Item eventKey={`${leadId}`}>
        <Accordion.Header>
          <Stack direction="horizontal" gap={3}>
            <div>ID: {leadId}</div>
            <div>Name: {leadName}</div>
            <div>Price: {leadPrice}$</div>
          </Stack>
        </Accordion.Header>
        <Accordion.Body
          className="position-relative py-3"
          onEnter={getLeadHandler}
          onExit={reset}
        >
          {loading && (
            <div className="d-flex justify-content-center align-items-center py-3">
              <AppLoading />
            </div>
          )}
          {error && !loading && <AppError refresh={getLeadHandler} />}
          {!!lead && !loading && !error && (
            <AppLeadInfo
              leadName={lead.name}
              leadPrice={lead.price}
              leadDate={lead.closest_task_at}
            />
          )}
        </Accordion.Body>
      </Accordion.Item>
    );
  }
);
