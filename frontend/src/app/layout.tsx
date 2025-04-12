"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, Folder, ListChecks, Settings } from "lucide-react";
import "./globals.css"; // include styles if needed

const navItems = [
	{ icon: <Home size={18} />, label: "Employee List", path: "/dashboard" },
	{ icon: <Folder size={18} />, label: "Engagement", path: "/Engagement" },
	{ icon: <ListChecks size={18} />, label: "Statics/Report", path: "/Stat" },
	{ icon: <Settings size={18} />, label: "Settings", path: "/settings" },
];
import ApolloProviderWrapper from '../lib/apolloProvider';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<ApolloProviderWrapper>
			<html lang="en">
				<body className="bg-zinc-900 text-white">
					<div className="flex min-h-screen">
						{/* Sidebar */}
						<aside className="w-[240px] bg-zinc-950 p-4 flex flex-col gap-8">
							<div className="text-2xl font-bold tracking-wide px-2">
								📘
							</div>
							<nav className="flex flex-col gap-2">
								{navItems.map((item) => (
									<Button
										key={item.label}
										variant="ghost"
										className={`justify-start gap-2 ${pathname === item.path
											? "bg-zinc-700 text-white"
											: "hover:bg-zinc-800 text-zinc-400"
											}`}
										onClick={() => router.push(item.path)}
									>
										{item.icon}
										{item.label}
									</Button>
								))}
							</nav>
						</aside>

						{/* Dynamic Page Content */}
						<main className="flex-1 bg-zinc-800 p-6">{children}</main>
					</div>
				</body>
			</html>
		</ApolloProviderWrapper>
	);
}
