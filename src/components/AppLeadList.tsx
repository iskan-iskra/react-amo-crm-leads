import { TiLeadsList } from "@/types";
import { FC, memo } from "react";
import { Accordion } from "react-bootstrap";
import { AppLeadItem } from "./AppLeadItem";

type TiAppLeadListProps = {
  list: TiLeadsList;
};

export const AppLeadList: FC<TiAppLeadListProps> = memo(({ list }) => {
  if (!list.length) {
    return <h6>empty list</h6>;
  }

  return (
    <Accordion>
      {list.map(({ id, name, price }) => (
        <AppLeadItem key={id} leadId={id} leadName={name} leadPrice={price} />
      ))}
    </Accordion>
  );
});
