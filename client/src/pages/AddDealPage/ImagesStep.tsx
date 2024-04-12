import TypographyH2 from "@/components/Typography/TypographyH2";
import { Button } from "@/components/buttons";
import Dropzone from "@/components/forms/inputs/dropzone";
import { useState } from "react";

export default function ImagesStep() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="flex flex-col items-center gap-8 pb-20">
      <header>
        <TypographyH2 className="text-center">Zdjęcia</TypographyH2>
        <p className="font-base mt-2 text-center text-slate-500">
          Dodaj kilka zdjęć aby lepiej przedstawić ofertę innym użytkownikom
        </p>
      </header>
      <main className="w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="h-fit min-h-full space-y-6"
        >
          <Dropzone files={files} setFiles={setFiles} />

          <div className="fixed bottom-0 left-0 z-10 w-full border border-slate-300 bg-white p-4">
            <Button type="submit" className="h-fit w-full py-3">
              Następny krok
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
