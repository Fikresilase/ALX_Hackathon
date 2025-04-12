"use client";
import { UsersTable } from "@/components/users";
import { User } from "@/types/user";

// This would normally come from your API
const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "+1 555-123-4567",
    position: "Software Engineer",
    status: "Active",
    languageTraining: "English",
    languageSpeaking: "English, Spanish",
  },
  // Add more mock users as needed
];

export default function DashboardPage() {  // Changed from 'home' to 'DashboardPage'
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Employees</h1>
      <UsersTable users={mockUsers} />
    </div>
  );
}
