import { ReactNode } from "react";

export interface BoxPropsI {
  children: any;
  leftSection: ReactNode;
  rightSection?: ReactNode;
  customClassRightSection?: string;
  customClassLeftSection?: string;
}
