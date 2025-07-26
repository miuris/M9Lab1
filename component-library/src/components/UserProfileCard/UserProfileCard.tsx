import { type UserProfileCardProps } from "../../types";

export default function UserProfileCard(props: UserProfileCardProps) {
    return (
    <main>
        <p>User Profile of {props.name} </p>
    </main>
    );
}

