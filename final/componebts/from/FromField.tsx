import { FC } from "react";
import { FormData, FormFieldProps } from "./types";
import { error } from "console";

const FormField: FC<FormFieldProps> = ({
    register,
    name,
    Error,
    type,
    placeholder,
    valueAsNumber,
    required,
}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                {...register(name, { valueAsNumber })}
            />
             {Error && <span>{Error.message}</span>}
        </>
    );
};

FormField.defaultProps = {
    required: false,
};

export default FormField;