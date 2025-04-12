"use client";
import { UsersTable } from "@/components/users";
import { GET_EMPLOYEES } from "@/query/employee";
import { useQuery } from "@apollo/client";

export default function DashboardPage() {  // Changed from 'home' to 'DashboardPage'
	const { data, loading, error } = useQuery(GET_EMPLOYEES);
	if (loading) return <div>loading</div>
	if (error) return <div>error</div>
	console.log(data)
	return (
		<div className="container mx-auto py-10">
			<h1 className="text-2xl font-bold mb-6">Employees</h1>
			<UsersTable users={data.employees} />
		</div>
	);
}
