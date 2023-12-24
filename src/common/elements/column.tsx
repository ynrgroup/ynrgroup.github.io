import {ReactElement} from "react";
import "../css/basic.scss";

export default function Column(props: { children: React.ReactNode }): ReactElement {
    return (
        <div className={"column"}>
            {props.children}
        </div>
    )
}