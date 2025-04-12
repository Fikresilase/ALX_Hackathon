// types/user.ts
export interface User {
    id: string;
    profilePicture?: string;
    name: string;
    email: string;
    phoneNumber: string;
    position: string;
    status: "Active" | "Inactive" | "On Leave";
    languageTraining: string;
    languageSpeaking: string;
  }