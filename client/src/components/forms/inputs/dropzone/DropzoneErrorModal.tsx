import { AiFillFileUnknown } from "react-icons/ai";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { ErrorData } from ".";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/buttons/Button";

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  errorData: ErrorData | null;
}

export default function DropzoneErrorModal({
  setIsOpen,
  isOpen,
  errorData,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Odrzucono zdjęcia</DialogTitle>
          <DialogDescription>
            Nie wszystkie zdjęcia zostały dodane z powodów podanych poniżej
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          {!!errorData?.typeErrors.length && (
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100">
                <AiFillFileUnknown className="h-6 w-auto text-slate-400" />
              </div>
              <h2 className="text-base text-slate-700">
                Nieobsługiwany format
              </h2>
              <div className="col-span-2 flex flex-row flex-wrap gap-2">
                {errorData.typeErrors.map((fileName) => (
                  <div
                    key={fileName}
                    className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600"
                  >
                    {fileName}
                  </div>
                ))}
              </div>
            </div>
          )}
          {!!errorData?.duplicateErrors.length && (
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100">
                <HiDocumentDuplicate className="h-7 w-auto text-slate-400" />
              </div>
              <h2 className="text-base text-slate-700">Duplikaty</h2>
              <div className="col-span-2 flex flex-row flex-wrap gap-2">
                {errorData.duplicateErrors.map((fileName) => (
                  <div
                    key={fileName}
                    className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600"
                  >
                    {fileName}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Zamknij</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
