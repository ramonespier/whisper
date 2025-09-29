import { handleLogOut } from "@/api/api";
import { LogOut } from "lucide-react";

export default function LogOutButton() {
    return (
        <>
            <form action={handleLogOut}>
                <LogOut />
                Log out
            </form>
        </>
    )
}