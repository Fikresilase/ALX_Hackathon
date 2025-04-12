import { GET_EMPLOYEES } from "@/query/employee";
export default function DashboardPage() {
	console.log(GET_EMPLOYEES)
	return <h1 className="text-2xl font-bold text-white">Employee List Page</h1>;
}
