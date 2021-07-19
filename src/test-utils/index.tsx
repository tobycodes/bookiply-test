import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";

import { render, RenderOptions } from "@testing-library/react";

import store from "redux/store";
import { DEFAULT_DEBOUNCE_TIMEOUT } from "hooks/useDebounce";
const Providers: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => ({ ...render(ui, { wrapper: Providers, ...options }) });

export * from "@testing-library/react";
export { customRender as render, DEFAULT_DEBOUNCE_TIMEOUT };
