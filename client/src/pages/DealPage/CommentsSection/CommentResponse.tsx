import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/buttons";
import { Textarea } from "@/components/forms/inputs/textarea";

interface CommentResponseProps {
  onCancel: () => void;
}

export default function CommentResponse({ onCancel }: CommentResponseProps) {
  return (
    <div className="flex w-full gap-2 py-2">
      <Avatar className="h-10 w-10">
        <AvatarImage src={import.meta.env.DEFAULT_AVATAR_PATH} />
        <AvatarFallback delayMs={1}>AV</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <Textarea placeholder="Odpowiedz..." rows={5} />
        <div className="flec-row mt-2 flex w-full items-center justify-between">
          <Button onClick={onCancel} variant={"secondary"}>
            Odrzuć
          </Button>
          <Button>Wyślij</Button>
        </div>
      </div>
    </div>
  );
}
