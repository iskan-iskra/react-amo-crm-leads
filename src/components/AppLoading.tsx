import { FC } from "react";
import { Spinner } from "react-bootstrap";

export const AppLoading: FC = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);
