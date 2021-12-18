import { ReactNode } from "react";
import {ConhecimentoContainer} from "./styles";

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
