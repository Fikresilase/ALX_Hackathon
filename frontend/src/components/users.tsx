"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { User } from "@/types/user";

interface UsersTableProps {
  users: User[];
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <div className="max-w-full mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-blue-400">Employee Management</h1>
        
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-700 overflow-hidden bg-gray-800 shadow-xl">
            <Table className="w-full">
              <TableHeader className="bg-gray-750">
                <TableRow className="hover:bg-gray-750">
                  <TableHead className="w-[80px] px-4 py-3 text-blue-300">ID</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Profile</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Name</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Email</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Phone</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Position</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Status</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Training</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Speaking</TableHead>
                  <TableHead className="px-4 py-3 text-blue-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow
                      key={user.id}
                      className="border-gray-700 hover:bg-gray-750/50 transition-colors"
                    >
                      <TableCell className="font-medium px-4 py-3">
                        {user.id}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <Avatar className="h-9 w-9 border border-blue-800/50">
                          <AvatarImage src={user.profilePicture} alt={user.name} />
                          <AvatarFallback className="bg-blue-900/30 text-blue-300">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="px-4 py-3 font-medium">{user.name}</TableCell>
                      <TableCell className="px-4 py-3 text-gray-300">{user.email}</TableCell>
                      <TableCell className="px-4 py-3 text-gray-300">
                        {user.phoneNumber}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-300">{user.position}</TableCell>
                      <TableCell className="px-4 py-3">
                        <Badge
                          variant={user.status === "Active" ? "default" : "secondary"}
                          className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 border-blue-500"
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-300">
                        {user.languageTraining}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-300">
                        {user.languageSpeaking}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="h-8 w-8 p-0 hover:bg-blue-900/20"
                            >
                              <span className="sr-only">Open menu</span>
                              <MoreVertical className="h-4 w-4 text-blue-300" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent 
                            align="end" 
                            className="bg-gray-750 border-gray-700 shadow-lg"
                          >
                            <DropdownMenuItem className="text-blue-200 hover:bg-blue-900/30 focus:bg-blue-900/30">
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-blue-200 hover:bg-blue-900/30 focus:bg-blue-900/30">
                              Update
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-400 hover:bg-red-900/30 focus:bg-red-900/30">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={10}
                      className="h-24 text-center text-gray-400"
                    >
                      No employees found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end">
            <Button 
              variant="default" 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all hover:scale-105"
            >
              Add Employee
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}