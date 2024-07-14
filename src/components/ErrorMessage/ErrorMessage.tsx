import { FC } from "react";

interface ErrorMessageProps {}

const ErrorMessage: FC<ErrorMessageProps> = () => {
  return <p>Whoops, something went wrong! Please try reloading this page!</p>;
};
export default ErrorMessage;
