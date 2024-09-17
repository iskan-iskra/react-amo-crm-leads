import { formatDate, getStatusColor } from "@/tools";
import { TiLead } from "@/types";
import { FC, memo, useMemo } from "react";
import { Badge, Stack } from "react-bootstrap";
type TiAppLeadInfo = {
  leadName: TiLead["name"];
  leadPrice: TiLead["price"];
  leadDate: TiLead["closest_task_at"];
};
export const AppLeadInfo: FC<TiAppLeadInfo> = memo(
  ({ leadName, leadDate, leadPrice }) => {
    const leadDateFormated = useMemo((): string => {
      if (leadDate) {
        return formatDate(leadDate);
      }
      return "";
    }, [leadDate]);

    const leadStatusBg = useMemo((): string => {
      const res = getStatusColor(leadDate);
      switch (res) {
        case "red":
          return "danger";
        case "yellow":
          return "warning";
        case "green":
          return "success";
        case "grey":
          return "secondary";
      }
    }, [leadDate]);

    return (
      <Stack gap={3}>
        <div>Name: {leadName}</div>
        <div>Price: {leadPrice}$</div>
        {!!leadDate && <div>date: {leadDateFormated}</div>}
        <div>
          <Badge bg={leadStatusBg}>status</Badge>
        </div>
      </Stack>
    );
  }
);
