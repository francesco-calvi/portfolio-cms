"use client";

import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface Props {
  locale: string;
}

export const LocaleContext = createContext("it");

const LocaleProvider: React.FC<PropsWithChildren<Props>> = (props) => {
  const { locale, children } = props;
  const [value, setValue] = useState("it");

  useEffect(() => {
    setValue(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export default LocaleProvider;
