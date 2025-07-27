import { AlertBoxProps } from "../../types";
import { AlertType } from "../../types";


export default function AlertBoxProps(props: AlertType) {
    return (
        <div>
            <p>
                {props.children} 
            </p>
        </div>
    );
}