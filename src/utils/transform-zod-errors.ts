import { ZodError } from 'zod';

type StringMap = { [key: string]: string };

export default function transformZodErrors(error: ZodError): StringMap {
  return error.issues.reduce((acc: { [key: string]: string }, issue) => {
    acc[issue.path[0]] = issue.message;

    return acc;
  }, {});
}
