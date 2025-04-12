"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeRedirect() {
	const router = useRouter();
	useEffect(() => {
		router.replace("/dashboard");
	}, [router]);

	return (
		<p className="text-white text-center mt-10">
			Redirecting to Employee List...
		</p>
	);
}
