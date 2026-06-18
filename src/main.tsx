import { createRoot } from "react-dom/client";

import TokensWrapper from "carbon-react/esm/components/tokens-wrapper";
import CarbonProvider from "carbon-react/esm/components/carbon-provider";
import sageTheme from "carbon-react/esm/style/themes/sage";
import GlobalStyle from "carbon-react/esm/style/global-style";
import "carbon-react/esm/style/fonts.css";

import App from "./App";

const root = createRoot(document.getElementById("app")!);

root.render(
  <TokensWrapper>
    <CarbonProvider validationRedesignOptIn theme={sageTheme}>
      <GlobalStyle />
      <App />
    </CarbonProvider>
  </TokensWrapper>,
);
