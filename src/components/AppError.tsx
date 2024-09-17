import { FC, memo } from "react";
import { Button } from "react-bootstrap";
type TiAppErrorProps = {
  refresh: () => void;
};
export const AppError: FC<TiAppErrorProps> = memo(({ refresh }) => (
  <div className=" position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
    <h1 className="mb-3">Error with request</h1>
    <Button variant="outline-danger" onClick={refresh}>
      Refresh
    </Button>
  </div>
));
