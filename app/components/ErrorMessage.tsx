import { ErrorMessage as Message } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form";

interface Props {
  errors: FieldErrors;
  name: string;
}

const ErrorMessage = ({ name, errors }: Props) => {
  return (
    <Message
      name={name}
      errors={errors}
      render={({ message }) => <p className="text-destructive">{message}</p>}
    />
  );
};

export default ErrorMessage;
