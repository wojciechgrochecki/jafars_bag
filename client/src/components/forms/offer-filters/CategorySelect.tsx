import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCircleCheck, IconCirclePlus } from "@tabler/icons-react";
import { ReactNode, forwardRef } from "react";

type CategorySelectProps = {
  readonly categories: Category[];
  onCheckedChange: (id: number, checked: boolean) => void;
  selection: number | undefined;
};
const CategorySelect = forwardRef<HTMLDivElement, CategorySelectProps>(
  ({ categories, onCheckedChange, selection }, ref) => {
    let content: ReactNode;
    if (selection) {
      const category = categories.find((cat) => cat.id == selection)!;
      content = (
        <CategoryCheckbox
          description={category.description}
          id={category.id}
          isChecked={true}
          onChange={onCheckedChange}
        />
      );
    } else {
      content = categories.map((cat) => (
        <CategoryCheckbox
          key={cat.id}
          description={cat.description}
          id={cat.id}
          isChecked={false}
          onChange={onCheckedChange}
        />
      ));
    }

    return (
      <div
        ref={ref}
        tabIndex={-1}
        className="flex h-fit min-h-36 w-full flex-wrap content-start items-start gap-2"
      >
        {content}
      </div>
    );
  },
);

interface CheckboxProps {
  onChange: (id: number, checked: boolean) => void;
  description: string;
  isChecked: boolean;
  id: number;
}

const CategoryCheckbox = ({
  description,
  id,
  isChecked,
  onChange,
}: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      checked={isChecked}
      onCheckedChange={(val) => {
        console.log("selected checkbox id", id);
        onChange(id, val == true);
      }}
      value={id}
      className="flex h-fit flex-row items-center gap-1
   rounded-full border border-slate-400 bg-white px-2 py-[6px] text-sm font-normal text-slate-800
    transition-transform active:scale-95 data-[state=checked]:bg-accent data-[state=checked]:text-white"
    >
      <div className="flex h-fit w-fit items-center justify-center overflow-hidden text-current">
        {isChecked ? (
          <IconCircleCheck className="h-6 w-6 stroke-[1.5px] text-white" />
        ) : (
          <IconCirclePlus className="h-6 w-6 stroke-[1.5px]" />
        )}
      </div>
      {description}
    </CheckboxPrimitive.Root>
  );
};
CategoryCheckbox.displayName = CheckboxPrimitive.Root.displayName;

interface Category {
  id: number;
  description: string;
}

const dummy_categories: Category[] = [
  { description: "Odzież i obuwie", id: 1 },
  { description: "Elektronika", id: 2 },
  { description: "Zdrowie i uroda", id: 3 },
  { description: "Dom i ogród", id: 4 },
  { description: "Podróże", id: 5 },
  { description: "Sport i rekreacja", id: 6 },
  { description: "Motoryzacja", id: 7 },
  { description: "Moda", id: 8 },
  { description: "Inne", id: 9 },
];

export { CategorySelect, dummy_categories };
