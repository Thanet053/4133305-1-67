import { string } from "zod";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type ValidationFields = "email" | "url" | "exp" | "pass" | "confirmPass";

export type FormData = {
    email: string;
    url: string;
    exp: number;
    pass: string;
    confirmPass: string;
};

export type FormFieldProps = {
    register: UseFormRegister<FormData>;
    name: ValidationFields;
    Error: FieldErrors<FormData>[ValidationFields];
    type: string;
    placeholder: string;
    valueAsNumber?: boolean;
    required?: boolean; 
}
