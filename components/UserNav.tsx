import React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const UserNav = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
					<MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
				</div>
			</DropdownMenuTrigger>
		</DropdownMenu>
	);
};

export default UserNav;
