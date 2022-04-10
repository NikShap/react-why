import { SwitchProps } from "@mui/material";
import { useRef, useState } from "react";

const useSwitchState = () => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const handlerRef = useRef<SwitchProps['onChange']>((event) => setChecked(event.target.checked))

  return [isChecked, handlerRef.current] as const;
};

export default useSwitchState;