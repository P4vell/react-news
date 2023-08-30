import { VscDebugRestart } from "react-icons/vsc";
import { Button } from "../ui/Button";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl text-slate-900 font-semibold dark:text-slate-200">
        {message}
      </h2>
      <Button className="space-x-1" onClick={() => location.reload()}>
        <VscDebugRestart size={15} />
        <span>Try again</span>
      </Button>
    </div>
  );
};
