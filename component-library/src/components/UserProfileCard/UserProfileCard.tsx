import { type UserProfileCardProps } from "../../types";

export default function UserProfileCard(props: UserProfileCardProps) {
    return (
    <div style={{border: '3px solid hotpink', backgroundColor: "lightpink"}}>
        <p>User Profile of {props.name} </p>
        <p>User email address: {props.email} </p>
        <p>User role: {props.role} </p>
    </div>
    );
}

