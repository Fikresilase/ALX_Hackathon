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
import emailjs from "emailjs-com";

interface UsersTableProps {
  users: User[];
}

import UseModal from "@/hooks/useModal";
import AddEmployeeForm from "./AddEmployeeForm";
import { useState } from "react";
export function UsersTable({ users }: UsersTableProps) {
  const {
    isOpen: isCreateModalOpen,
    openModal: openCreateModal,
    closeModal: closeCreateModal,
  } = UseModal();
  const [customUsers, setCustomUsers] = useState<Partial<User>[]>(users)
  const saveEmployee = (email: string) => {
    const newUser: Partial<User> = { email };
    console.log(newUser);
    setCustomUsers((prev) => {
      return Array.isArray(prev) ? [...prev, newUser] : [newUser];
    });
  };
  const sendEmail = () => {
    const link = "https://kuriftu-lang.vercel.app/"
    const language = "English"
    for (const email of customUsers.map(user => user.email)) {
      // Prepare the template parameters
      const templateParams = {
        email: email,
        language: language,
        link: link,
      };
      // Send the email using EmailJS
      emailjs
        .send(
          "service_zqxis5b", // Your service ID (from EmailJS dashboard)
          "template_dp6tu5a", // Your template ID (from EmailJS dashboard)
          templateParams,
          "QFxoFEtxyoW8GoU7o" // Your user ID (from EmailJS dashboard)
        )
        .then(
          (response) => {
            console.log("Email sent successfully", response);
          },
          (error) => {
            console.error("Error sending email:", error);
          }
        );
      console.log(email)
    }
  }
  return (
    <div className="min-h-screen bg-[#39250f] p-6 text-[#214626]">
      <div className="max-w-full mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-[#4cb657]"></h1>

        <div className="space-y-6">
          <div className="rounded-lg border border-[#c7ebca] overflow-hidden bg-white shadow-lg">
            <Table className="w-full">
              <TableHeader className="bg-[#e2f6e4]">
                <TableRow className="hover:bg-[#e2f6e4]">
                  <TableHead className="w-[80px] px-4 py-3 text-[#32873b]">ID</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Profile</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Name</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Email</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Phone</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Position</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Status</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Training</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Speaking</TableHead>
                  <TableHead className="px-4 py-3 text-[#32873b]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customUsers.length > 0 ? (
                  customUsers.map((user, index) => (  // Use customUsers here
                    <TableRow
                      key={index}
                      className="border-[#c7ebca] hover:bg-[#f3faf3] transition-colors"
                    >
                      <TableCell className="font-medium px-4 py-3 text-[#26552c]">
                        {user.id}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <Avatar className="h-9 w-9 border border-[#9bdaa1]">
                          <AvatarImage src={user.profilePicture} alt={user.name} />
                          <AvatarFallback className="bg-[#e2f6e4] text-[#4cb657]">
                            {user.name ? user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("") : null}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="px-4 py-3 font-medium text-[#214626]">{user.name}</TableCell>
                      <TableCell className="px-4 py-3 text-[#2b6a31]">{user.email}</TableCell>
                      <TableCell className="px-4 py-3 text-[#2b6a31]">
                        {user.phoneNumber}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-[#2b6a31]">{user.position}</TableCell>
                      <TableCell className="px-4 py-3">
                        <Badge
                          className="px-2 py-1 text-xs bg-[#4cb657] hover:bg-[#2b6a31] text-white border-[#4cb657]"
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-[#2b6a31]">
                        {user.languageTraining}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-[#2b6a31]">
                        {user.languageSpeaking}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:bg-[#e2f6e4]"
                            >
                              <span className="sr-only">Open menu</span>
                              <MoreVertical className="h-4 w-4 text-[#4cb657]" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-white border-[#c7ebca] shadow-lg"
                          >
                            <DropdownMenuItem className="text-[#214626] hover:bg-[#e2f6e4] focus:bg-[#e2f6e4]">
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#214626] hover:bg-[#e2f6e4] focus:bg-[#e2f6e4]">
                              Update
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#d62c77] hover:bg-[#fbe8f3] focus:bg-[#fbe8f3]">
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
                      className="h-24 text-center text-[#9bdaa1]"
                    >
                      No employees found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end gap-5">
            <Button
              size="lg"
              className="bg-[#4cb657] hover:bg-[#2b6a31] text-white shadow-lg transition-all hover:scale-105"
              onClick={openCreateModal}
            >
              Add Employee
            </Button>
            <Button
              size="lg"
              className="bg-[#0aa] hover:bg-[#2b6a31] text-white shadow-lg transition-all hover:scale-105"
              onClick={sendEmail}
            >
              Train employees
            </Button>
          </div>
        </div>
        {isCreateModalOpen ? (<AddEmployeeForm onCancel={closeCreateModal} onSave={saveEmployee} />) : null}
      </div>
    </div>
  );
}
