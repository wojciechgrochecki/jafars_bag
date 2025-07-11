import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/buttons/Button";
import Textarea from "@/components/forms/inputs/TextArea";

interface DealResponseProps {
  onCancel: () => void;
}

export default function DealResponse({ onCancel }: DealResponseProps) {
  return (
    <div className="flex w-full gap-2 py-2">
      <Avatar className="h-10 w-10">
        <AvatarImage src={import.meta.env.DEFAULT_AVATAR_PATH} />
        <AvatarFallback delayMs={1}>USR</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <Textarea placeholder="Napisz co myślisz o tej okazji..." rows={5} />
        <div className="flec-row mt-2 flex w-full items-center justify-between">
          <Button onClick={onCancel} variant={"secondary"}>
            Odrzuć
          </Button>
          <Button>Dodaj</Button>
        </div>
      </div>
    </div>
  );
}
