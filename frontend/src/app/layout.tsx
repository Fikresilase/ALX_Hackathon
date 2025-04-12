"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users, Handshake, BarChart2, Settings } from "lucide-react";

import "./globals.css"; // include styles if needed


const navItems = [
	{ icon: <Users size={20} />, label: "Employee List", path: "/dashboard" },
	{ icon: <Handshake size={20} />, label: "Engagement", path: "/Engagement" },
	{ icon: <BarChart2 size={20} />, label: "Statics/Report", path: "/Stat" },
	{ icon: <Settings size={20} />, label: "Settings", path: "/settings" },
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
				<body className="bg-black text-white">
					<div className="flex min-h-screen">
						{/* Sidebar */}
						<aside className="w-[260px] bg-[black] text-[#4cb657] py-8 px-4 flex flex-col justify-between">
							<div>
								{/* Logo */}
								<div className="flex justify-center mb-10">
									<img
										src="/kuriftu.png"
										alt="Logo"
										className="h-12 w-auto object-contain"
									/>
								</div>

								{/* Navigation */}
								<nav className="flex flex-col gap-4">
									{navItems.map((item) => {
										const isActive = pathname === item.path;
										return (
											<Button
												key={item.label}
												variant="ghost"
												className={`cursor-pointer relative flex items-center text-[15px] font-medium gap-3 h-[48px] px-4 rounded-md transition-all
				${
							isActive
								? "bg-zinc-800 text-red-500"
								: "text-zinc-300 hover:bg-zinc-700 hover:text-white"
						}`}
												onClick={() => router.push(item.path)}
											>
												{isActive && (
													<span className="absolute left-0 top-0 h-full w-[4px] bg-red-500 rounded-r-sm" />
												)}
												{item.icon}
												<span>{item.label.toUpperCase()}</span>
											</Button>
										);
									})}
								</nav>
							</div>

							{/* Optional Footer (e.g., user initials) */}
							<div className="flex justify-center items-center mt-auto">
								<div className="bg-zinc-900 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-semibold">
									copyright@2025
								</div>
							</div>
						</aside>

						{/* Dynamic Page Content */}
						<main className="flex-1 bg-zinc-800 p-6">{children}</main>
					</div>
				</body>
			</html>
		</ApolloProviderWrapper>
	);
}
