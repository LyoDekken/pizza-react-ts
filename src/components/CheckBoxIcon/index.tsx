import React, { HTMLAttributes } from "react";
import * as S from "./styles";

export type DivType = HTMLAttributes<HTMLDivElement>;

export interface CheckboxIconProps {
    icon?: React.ReactNode;
    active?: boolean;
    value: string;
} 

export default function CheckboxIcon({icon, value, active = false, ...props}: CheckboxIconProps){
    return (
        <S.CheckboxIcon active={active} {...props}>
            {active && <S.CheckboxIconCheck />}
            {icon && <div>{icon}</div>}
            <div>{value}</div>
        </S.CheckboxIcon>
    );
}
