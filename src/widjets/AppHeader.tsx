import { ThemeContext } from "@/context";
import { useContext } from "react";
import { Button, Container, Stack } from "react-bootstrap";

export const AppHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <h3 className="mb-0 me-auto">AMO CRM</h3>
        <Button variant="outline-secondary" onClick={toggleTheme}>
          {theme}
        </Button>
      </Stack>
    </Container>
  );
};
