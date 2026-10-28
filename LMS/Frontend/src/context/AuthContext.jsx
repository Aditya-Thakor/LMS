import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children, onSearch }) {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null); 

  const value = useMemo(
    () => ({
      query,
      setQuery,
      submitSearch: () => {
        const q = query.trim();
        if (q) onSearch?.(q);
      },
      user,
      login: (u = { name: "Learner" }) => setUser(u),
      logout: () => setUser(null),
    }),
    [query, user, onSearch]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
