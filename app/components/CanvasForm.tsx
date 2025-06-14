"use client";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { sendEmail } from "../sendEmails";
import { useActionState } from "react";
import { HashLoader } from "react-spinners";
import { span } from "motion/react-client";

type FormState = {
  success: boolean;
  message: string;
};

export async function handleEmailForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = await sendEmail(formData);
  return result;
}

const initialState = {
  success: false,
  message: "",
};

export function CanvasForm() {
  const [state, formAction, isLoading] = useActionState(
    handleEmailForm,
    initialState
  );

  return (
    <div
      className="shadow-input mx-auto w-full max-w-xl rounded-none bg-background p-4
     md:rounded-2xl md:p-8 border border-foreground/10"
    >
      <h2 className="text-xl font-bold text-foreground/">Cere ofertă</h2>
      <p className="mt-2 max-w-sm text-sm text-foreground">
        Pentru un proiect la comandă, vă rugăm să completați formularul cu
        detaliile necesare:
      </p>

      <form className="my-8" action={formAction}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Nume</Label>
            <Input
              required
              name="firstname"
              id="firstname"
              placeholder="Nume"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastname">Prenume</Label>
            <Input
              required
              name="lastname"
              id="lastname"
              placeholder="Prenume"
              type="text"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="senderEmail">Adresă E-mail</Label>
          <Input
            required
            name="senderEmail"
            id="senderEmail"
            placeholder="exemplu@gmail.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Număr de telefon</Label>
          <Input
            required
            name="phone"
            id="phone"
            placeholder="0712 345 678"
            type="tel"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="projecttype">Tip de proiect</Label>

          <select
            name="projecttype"
            className="cursor-pointer shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-background px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-200 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            id="projecttype"
          >
            <option value="Tablou rama de lemn">Tablou rama de lemn</option>
            <option value="Tablou rama de aluminiu cu LED">
              Tablou rama de aluminiu cu LED
            </option>
            <option value="Banner">Banner</option>
          </select>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="width">Lungime(mm)</Label>
          <Input
            required
            name="width"
            id="width"
            placeholder="1200"
            type="number"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="height">Lățime(mm)</Label>
          <Input
            required
            name="height"
            id="height"
            placeholder="600"
            type="number"
          />
        </LabelInputContainer>

        <button
          className="group/btn cursor-pointer relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {isLoading ? (
            <span  className="flex items-center justify-center">
              Se încarca...
              <HashLoader color="var(--color-foreground)" size={25} />
            </span>
          ) : (
            "Trimite"
          )}
          <BottomGradient />
        </button>

        <p className="text-xs my-2 opacity-[0.5]">
          Prin apăsarea butonului sunteți de acord cu procesarea datelor
        </p>

        {state.message && (
          <p
            className={`mt-4 opacity-[0.5] text-xs ${
              state.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {state.message}
          </p>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
