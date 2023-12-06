import Image from "next/image";

import * as z from "zod";
import { processInput } from "../utils/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Dispatch, SetStateAction, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useContract } from "@thirdweb-dev/react";

const FormSchema = z.object({
  input: z.string().max(20, {
    message: "Please keep inputs under 20 characters",
  }),
});

export function Adventure({
  address,
  screen,
  setScreen,
}: {
  address: string;
  screen: number;
  setScreen: Dispatch<SetStateAction<number>>;
}) {
  let options = ["NORTH", "SOUTH"];
  const [message, setMessage] = useState<string>("");
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      input: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const response = await processInput(data.input, options, contract);
    setMessage(response);
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div className="w-full sm:w-3/4 xl:w-1/2 flex-col items-center justify-center mx-auto">
      <div className="w-full aspect-[2/1] relative">
        <Image
          src="/cave.png"
          alt="Cave Imagery"
          className="mx-auto"
          fill={true}
          priority
        />
      </div>
      <div className="flex-col text-white my-4 space-y-8 text-xs sm:text-sm md:text-md justify-center items-center sm:justify-start sm:items-start px-4">
        <p>
          {
            "Like any poorly prepared adventurer, it seems you've woken up in a dark cave."
          }
        </p>
        <p>
          Options:{" "}
          {options.map((option: string, index: number) => {
            return `${option}${index === options.length - 1 ? "" : ", "}`;
          })}
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="input"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex space-x-2 items-center">
                      <p>{">"}</p>
                      <Input
                        {...field}
                        className="uppercase border-0 focus:border-0 outline-none"
                        style={{ caretShape: "block" }}
                        autoFocus
                      />
                    </div>
                  </FormControl>
                  <FormDescription className="text-red-600 mt-4 text-center sm:text-left">
                    {message}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
