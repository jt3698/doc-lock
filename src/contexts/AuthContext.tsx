import { createContext, useContext } from "react";

export interface AuthContextType {
    userAttributes: any;
    userRole: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useCurrentAuth = () => {
    const currentAuthContext = useContext(AuthContext);
  
    if (!currentAuthContext) {
      throw new Error(
        "useCurrentAuth has to be used within <AuthContext.Provider>"
      );
    }
  
    return currentAuthContext;
};