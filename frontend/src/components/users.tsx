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
import {
  MoreVertical,
  NotebookPen,
  Pencil,
  Trash2,
  UserRoundX,
} from "lucide-react";
import { User } from "@/types/user";
import emailjs from "emailjs-com";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="p-6 text-[#214626]">
      <div className="max-w-full mx-auto">
        <div className="flex justify-end items-center mb-4 gap-2">
          <label
            htmlFor="languageKind"
            className="text-[#9bdaa1] font-medium"
          >
            Chooose a Language :
          </label>
          <Select>
            <SelectTrigger className="w-[200px] bg-[#1e2b21] text-[#9bdaa1] border-[#4cb657]">
              <SelectValue placeholder="Chooose a Language" />
            </SelectTrigger>
            <SelectContent className="bg-[#1f2f23] text-[#4cb657] border-[#4cb657]">
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
              <SelectItem value="Chinease">Chinease</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg  overflow-hidden bg-black shadow-lg">
            <Table className="w-full">
              <TableHeader className="bg-[#1e2b21]">
                <TableRow className="hover:bg-[#1e2b21]">
                  <TableHead className="w-[80px] px-4 py-3 text-[#9bdaa1]">
                    ID
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Profile
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Name
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Email
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Phone
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Position
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Status
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Training
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Speaking
                  </TableHead>
                  <TableHead className="px-4 py-3 text-[#9bdaa1]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customUsers.length > 0 ? (
                  users.map((user, index) => (
                    <TableRow
                      key={index}
                      className="border-[#2c3e2e] hover:bg-[#263a2c] transition-colors"
                    >
                      <TableCell className="font-medium px-4 py-3 text-[#9bdaa1]">
                        {user.id}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <Avatar className="h-9 w-9 border border-[#4cb657]">
                          <AvatarImage
                            src={user.profilePicture}
                            alt={user.name}
                          />
                          <AvatarFallback className="bg-[#2f4a35] text-[#4cb657]">
                            {user.name ? user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("") : null}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="px-4 py-3 font-black text-lg text-white">
                        {user.name}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-white">
                        {user.email}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-white">
                        {user.phoneNumber}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-white">
                        {user.position}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <Badge className="px-2 py-1 text-xs bg-[#4cb657] hover:bg-[#3a944a] text-white border-[#4cb657]">
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-white">
                        {user.languageTraining}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-white">
                        {user.languageSpeaking}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            className="focus:outline-0"
                            asChild
                          >
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:bg-[#2f4a35]"
                            >
                              <span className="sr-only">
                                Open menu
                              </span>
                              <MoreVertical className="h-4 w-4 text-[#4cb657]" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-[#1f2f23] border-[#4cb657] shadow-lg"
                          >
                            <DropdownMenuItem className="text-[#c2f0ca] hover:bg-[#2f4a35] focus:bg-[#2f4a35]">
                              <Pencil />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#c2f0ca] hover:bg-[#2f4a35] focus:bg-[#2f4a35]">
                              <NotebookPen />
                              Train
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#c2f0ca] hover:bg-[#2f4a35] focus:bg-[#2f4a35]">
                              <UserRoundX />
                              Suspend
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#f38cac] hover:bg-[#472b36] focus:bg-[#472b36]">
                              <Trash2 />
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
                      className="h-24 text-center text-[#4cb657]"
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
              onClick={sendEmail}
              size="lg"
              className="bg-[#4cb657] hover:bg-[#2b6a31] text-white shadow-lg transition-all hover:scale-105"
            >
              Add Employee
            </Button>
          </div>
          {isCreateModalOpen ? (<AddEmployeeForm onCancel={closeCreateModal} onSave={saveEmployee} />) : null}
        </div>
      </div>
    </div>
  );
}
