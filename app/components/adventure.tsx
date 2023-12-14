import Image from "next/image";

import * as z from "zod";
import { getScene, processInput } from "../utils/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
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
  scene,
  setScene,
}: {
  address: string;
  scene: number;
  setScene: (scene: number) => void;
}) {
  const [message, setMessage] = useState<string>("");
  const currentScene = getScene(scene);
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      input: "",
    },
  });

  useEffect(() => {
    console.log(message);
  }, [message]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const response = await processInput(
      data.input,
      currentScene,
      setScene,
      address,
      contract,
    );
    if (response) {
      setMessage(response);
    }
    form.setValue("input", "");
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div className="w-full sm:w-3/4 xl:w-1/2 flex-col items-center justify-center mx-auto">
      <div className="w-full aspect-[2/1] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_AWS_S3}${
            currentScene?.image ?? "/weboftruth.png"
          }`}
          alt="Scene Imagery"
          className="mx-auto"
          fill={true}
          priority
        />
      </div>
      <div className="flex-col text-white my-4 space-y-8 text-xs sm:text-sm md:text-md justify-center items-center sm:justify-start sm:items-start px-4">
        <p>
          {typeof window !== "undefined" &&
          localStorage.getItem("game-start") === "true" &&
          currentScene.id === 0
            ? "The cave entrance you woke up in. So much adventure you've had, so much adventure to be had. But now is not the time for nostalgia, you must travel forth. It's a good thing you took that torch lodged in the wall. Or did you?"
            : typeof window !== "undefined" &&
                localStorage.getItem("persuaded-adventurer") === "true" &&
                currentScene.id === 13
              ? '"Well, I suppose if you really intend to give your life up, you can take this."\n\nThe adventurer hands you the sword from his sheath.\n\n"I have no use for it anymore. I am happy to trade the blade for the barrell from now til the end of time. I wish you luck, what little of it you might have."'
              : typeof window !== "undefined" &&
                  localStorage.getItem("adventurer-inquired") === "true" &&
                  currentScene.id === 13
                ? '"Oh that thing? I have no use for it anymore. That damned spider nearly took my arm off. Seems my adventure ends here, drowned in ale. Not sure why you should have it, though. You look in almost as bad a condition. Tell me: why should I give you this sword? What is your story?"'
                : currentScene?.description}
        </p>
        <p>
          Travel Options:{" "}
          {currentScene?.options
            ? currentScene.options.map((option: string, index: number) => {
                return `${option}${
                  index === currentScene.options!!.length - 1 ? "" : ", "
                }`;
              })
            : currentScene.id == 19
              ? "SAY GOODBYE"
              : "LEAVE"}
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
                        className="uppercase border-0 ring-0"
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
