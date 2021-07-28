import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateUserPermissions } from "../utils/validateUserPermissions";

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions = [], roles }: UseCanParams): boolean {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  return validateUserPermissions({
    user,
    permissions,
    roles,
  });
}
