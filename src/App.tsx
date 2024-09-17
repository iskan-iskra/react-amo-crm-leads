import { FC } from "react";

import { appThemeProvider } from "./hoc";
import { AppHeader, AppLeads } from "./widjets";
import { Container } from "react-bootstrap";

const AppCore: FC = () => {
  return (
    <>
      <header
        style={{ zIndex: 1000000 }}
        className="position-relative bg-body-tertiary py-2 shadow flex-shrink-0"
      >
        <AppHeader />
      </header>

      <main className="pb-3 flex-grow-1 position-relative overflow-y-auto">
        <Container>
          <AppLeads />
        </Container>
      </main>
    </>
  );
};

const AppWithThemeProvider = appThemeProvider(AppCore);

export default AppWithThemeProvider;
