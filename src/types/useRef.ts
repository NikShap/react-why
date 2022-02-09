import { SxProps } from "@mui/material";
import { PropsWithChildren, RefObject } from "react";

export type BaseBlockPropsType<T extends Record<string, any> = {}> = PropsWithChildren<{
  ref?: RefObject<any>;
} & T>