import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyH4 from "@/components/typography/TypographyH4";
import { Button } from "@/components/ui/buttons/Button";
import Draggable from "@/components/ui/Draggable";
import Dropzone from "@/components/forms/inputs/dropzone";
import { ImagePreview } from "@/components/forms/inputs/dropzone/ImagePreview";
import { useFormContext } from "@/context/FormContext";
import React, { useImperativeHandle } from "react";
import { useState } from "react";
import { SortableEvent } from "sortablejs";
import { StepperRef } from "..";
import { useNavigate } from "react-router-dom";

const ImagesStep = React.forwardRef<StepperRef>((_props, ref) => {
  const { formState, setFormState, setNextStep } = useFormContext();
  const [files, setFiles] = useState<File[]>(formState.deal_images!);
  const navigate = useNavigate();

  const handleDelete = (fileName: string) => {
    setFiles((prev) => prev?.filter((file) => file.name !== fileName));
  };

  const handleDragEnd = ({ newIndex, oldIndex }: SortableEvent) =>
    setFiles((prev) => {
      const newOrder = [...prev];
      newOrder.splice(newIndex!, 0, newOrder.splice(oldIndex!, 1)[0]);
      return newOrder;
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setFormState({ deal_images: files });
    e.preventDefault();
  };

  useImperativeHandle(
    ref,
    () => {
      console.log("reconstruct");
      return {
        validateAndStep(navigateTo, nextStep) {
          setFormState({ deal_images: files });
          setNextStep(nextStep);
          navigate(navigateTo);
        },
      };
    },
    [files],
  );

  return (
    <div className="flex max-w-3xl flex-col items-center gap-8 pb-20">
      <header>
        <TypographyH2 className="text-center">Zdjęcia</TypographyH2>
        <p className="font-base mt-2 text-center text-slate-500">
          Dodaj kilka zdjęć aby lepiej przedstawić ofertę innym użytkownikom
        </p>
      </header>
      <main className="w-full">
        <form onSubmit={handleSubmit} className="h-fit min-h-full space-y-4">
          <Dropzone files={files} setFiles={setFiles} />
          <div className="space-y-2">
            <TypographyH4>Wybrane zdjęcia</TypographyH4>
            <Draggable onEnd={handleDragEnd}>
              {files.map((file, i) => (
                <ImagePreview
                  key={file.name}
                  file={file}
                  onDelete={handleDelete}
                  leading={i === 0}
                />
              ))}
            </Draggable>
          </div>
          <div className="fixed bottom-0 left-0 z-10 w-full border border-slate-300 bg-white p-4">
            <Button type="submit" className="h-fit w-full py-3">
              Następny krok
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
});

export default ImagesStep;
