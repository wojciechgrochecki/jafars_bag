import { useDropzone, type FileRejection } from "react-dropzone";
import { useCallback, useState } from "react";
import { IconCloudUpload, IconDroplet } from "@tabler/icons-react";
import DropzoneErrorModal from "./DropzoneErrorModal";

interface DropzoneProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export interface ErrorData {
  typeErrors: string[];
  duplicateErrors: string[];
}

function Dropzone({ files, setFiles }: DropzoneProps) {
  const [errors, setErrors] = useState<ErrorData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      setFiles((prev) => [...prev, ...acceptedFiles]);
      if (rejectedFiles.length) {
        handleFileRejections(rejectedFiles);
      }
    },
    [],
  );

  const handleFileRejections = (rejectedFiles: FileRejection[]) => {
    const errorData: ErrorData = { typeErrors: [], duplicateErrors: [] };
    for (const rejectedFile of rejectedFiles) {
      switch (rejectedFile.errors[0].code) {
        case "file-invalid-type": {
          errorData.typeErrors.push(rejectedFile.file.name);
          break;
        }
        case "file-duplicate-name": {
          errorData.duplicateErrors.push(rejectedFile.file.name);
          break;
        }
      }
    }
    if (
      errorData.typeErrors.length === 0 &&
      errorData.duplicateErrors.length === 0
    ) {
      setErrors(null);
    } else {
      setErrors(errorData);
      setIsModalOpen(true);
    }
  };

  const nameValidator = (file: File) => {
    if (fileNames?.includes(file.name)) {
      return {
        code: "file-duplicate-name",
        message: `Plik o tej nazwie został już dodany`,
      };
    }
    return null;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
    },
    maxFiles: 6,
    onDrop,
    validator: nameValidator,
  });

  const fileNames = files?.map((file) => file.name);
  return (
    <div className="flex flex-col">
      <div
        {...getRootProps({
          className: `flex h-[175px] cursor-pointer border-dashed flex-col items-center justify-center gap-2
               rounded-lg border border-accent-light/50 bg-purple-50 px-4 py-3 relative ${
                 isDragActive && "!border-blue-500"
               }`,
        })}
      >
        <input {...getInputProps({ className: "hidden", id: "dropzone" })} />
        {isDragActive ? (
          <>
            <IconDroplet className="h-12 w-12 animate-bounce stroke-[1.25] text-accent-light duration-1000" />
            <p className="max-w-[200px] text-center text-xs font-medium text-accent">
              Upuść tutaj...
            </p>
          </>
        ) : (
          <>
            <IconCloudUpload className="h-12 w-12 stroke-[1.25] text-accent-light" />
            <p className="max-w-[200px] text-center text-xs text-accent">
              <b className="font-semibold">Kliknij</b>, aby dodać zdjęcie lub
              przeciągnij i upuść
            </p>
          </>
        )}
        <p className="absolute bottom-2 right-2 text-right text-xs text-accent-light">
          JPG, JPEG, PNG
        </p>
        <p className="absolute left-2 top-2 text-right text-xs text-accent-light">
          {files.length}/6
        </p>
      </div>
      <DropzoneErrorModal
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
        errorData={errors!}
      />
    </div>
  );
}

export default Dropzone;
