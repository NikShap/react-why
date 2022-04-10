import { PropsWithChildren, RefObject, ReactNode, ChangeEventHandler, KeyboardEventHandler, Dispatch, SetStateAction } from "react";
import { SxProps, TextFieldProps } from "@mui/material";

export type TabType = {
  label: string;
  node: ReactNode;
};

export type BaseBlockPropsType<T extends Record<string, any> = {}> = PropsWithChildren<{
  ref?: RefObject<any>;
  nodeName?: string;
  nodeName2?: string;
} & T>

export type TaskInputProps = TextFieldProps & {
  onEnter: (value: string) => void;
}

export type TaskViewProps = {
  text: string;
  id: number;
  onDelete: (id: number) => void;
  isSlowedDown?: boolean;
}

export type InputChangeHandler = ChangeEventHandler<HTMLInputElement>;
export type KeyboardHandler = KeyboardEventHandler<HTMLInputElement>

export type SxMap = {
  [key: string]: SxProps;
}

export type Task = {
  text: string;
  id: number;
}

export type PropsDemoViewData = {
  status: 'DRAFT' | 'DELETED' | 'PUBLISHED',
  items: string[];
};

export type PropsDemoControlsProps = {
  state: PropsDemoViewData;
  setState: Dispatch<SetStateAction<PropsDemoViewData>>;
}

export type PropsDemoReceiverProps = {
  data: PropsDemoViewData;
}

export type ThemeContextType = {
  isDark: boolean;
  switchTheme: () => void;
}