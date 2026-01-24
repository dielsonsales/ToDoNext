"use client";

import { createContext, useContext } from "react";

const AuthContext = createContext<{
  sessionToken: string | null;
  user: any | null;
}>({
  sessionToken: null,
  user: null,
});

export const AuthProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: any;
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
