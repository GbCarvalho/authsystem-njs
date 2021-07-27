import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

type CanProps = {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
};

export function Can(props: CanProps) {
  const { children, permissions, roles } = props;

  const userCanSeeComponent = useCan({ permissions, roles });

  if (!userCanSeeComponent) {
    return null;
  }

  return <>{children}</>;
}
