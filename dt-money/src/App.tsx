import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContex";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/styles";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
