import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const UserNav = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
					<MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
					<img
						src={
							user?.picture ??
							"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106"
						}
						alt="image of the user"
						className="rounded-full w-8 h-8 hidden lg:block"
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[200px]">
				{user ? (
					<>
						<DropdownMenuItem>
							<LogoutLink className="w-full">Logout</LogoutLink>
						</DropdownMenuItem>
					</>
				) : (
					<>
						{" "}
						<DropdownMenuItem>
							<RegisterLink className="w-full">
								Register
							</RegisterLink>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LoginLink className="w-full">Login</LoginLink>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserNav;
