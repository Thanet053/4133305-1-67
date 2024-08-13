import { useForm } from "react-hook-form";
import { FormData } from "./types";
import FormField from "./FromField";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Zod & React-Hook-Form</h1>
                
                <FormField
                    type="url"
                    placeholder="URL"
                    name="url"
                    register={register}
                    required
                    Error={errors.url}
                />
                <br/>
                  <FormField
                    type="email"
                    placeholder="email"
                    name="email"
                    register={register}
                    required
                    Error={errors.email}
                
                />
                <br/>
                  <FormField
                    type="exp"
                    placeholder="exp"
                    name="exp"
                    register={register}
                    required
                    Error={errors.exp}
                />
                <br/>
                  <FormField
                    type="pass"
                    placeholder="pass"
                    name="pass"
                    register={register}
                    required
                    Error={errors.pass}
                />
                <br/>
                <FormField
                    type="confirmPass"
                    placeholder="confirmPass"
                    name="confirmPass"
                    register={register}
                    required
                    Error={errors.confirmPass}
                />

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Form;