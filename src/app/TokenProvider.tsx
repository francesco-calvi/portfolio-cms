"use client";

import { useAppDispatch } from "@/lib/redux/hooks";
import { setAuthenticationToken } from "@/lib/redux/reducers/auth";
import React from "react";

interface Props {
  token: string | undefined;
}

const TokenProvider: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, token } = props;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (token) {
      dispatch(setAuthenticationToken(token));
    }
  }, [dispatch, token]);

  return <>{children}</>;
};

export default TokenProvider;
