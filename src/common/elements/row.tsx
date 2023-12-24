import {ReactElement} from "react";
import "../css/basic.scss";

export default function Row(props: { children: React.ReactNode }): ReactElement {
    return (
        <div className={"row"}>
            {props.children}
        </div>
    )
}