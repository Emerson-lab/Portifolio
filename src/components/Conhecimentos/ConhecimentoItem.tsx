import {ConhecimentoContainer} from "./styles";

import { ReactNode } from "react";

interface ConchecimentoProps {
  title: string;
  icon: ReactNode;
}

export default function ConhecimentoItem({title, icon}: ConchecimentoProps) {
  return (
    <ConhecimentoContainer>
      <p>{title}</p>
      {icon}
    </ConhecimentoContainer>
  )
}
