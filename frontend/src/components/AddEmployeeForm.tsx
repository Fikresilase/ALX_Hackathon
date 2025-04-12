import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ADD_EMAIL } from "@/query/addEmloyee";
import { useMutation } from "@apollo/client";

interface AddEmployeeFormProps {
  onCancel: () => void;
  onSave: (data: string) => void;
}

export const AuditForm: React.FC<AddEmployeeFormProps> = ({ onCancel, onSave }) => {
  const [email, setEmail] = useState<string>("");
  const [addEmail, { loading, error }] = useMutation(ADD_EMAIL);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSave(email);
    await addEmail({ variables: { email } });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value); // Corrected this line
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <div>
        <label className="block mb-[12px] text-xl font-medium text-gray-700">
          Title
        </label>
        <Input
          name="email"
          placeholder="Enter email of employee"
          value={email}
          onChange={handleChange}
        />
      </div>

      {/* Cancel and Save Buttons */}
      <div className="mt-[48px] flex justify-end space-x-4">
        <Button
          className="px-14"
          variant="outline"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button className="px-14" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

export default AuditForm;
