'use client'
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token)
			redirect("/home")
		else
			redirect("/home");
	}, [])
}