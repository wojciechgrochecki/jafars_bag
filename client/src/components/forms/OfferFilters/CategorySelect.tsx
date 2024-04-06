import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCircleCheck, IconCirclePlus } from "@tabler/icons-react";
import { useState } from "react";

const CategorySelect = () => {
  const [categories, setCategories] = useState(g_categories);

  const setChecked = (id: number, checked: boolean) => {
    const updatedCategories = [...categories];
    const index = updatedCategories.findIndex((cat) => cat.id === id);
    updatedCategories[index] = {
      ...updatedCategories[index],
      selected: checked,
    };
    setCategories(updatedCategories);
  };

  return (
    <div className="flex w-full flex-wrap gap-2">
      {categories.map((cat) => (
        <Checkbox onChange={setChecked} key={cat.id} {...cat} />
      ))}
    </div>
  );
};

interface CheckboxProps extends Category {
  onChange: (id: number, checked: boolean) => void;
}

const Checkbox = ({ category, id, selected, onChange }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      checked={selected}
      onCheckedChange={(val) => onChange(id, val == true)}
      value={id}
      className="flex flex-row items-center gap-1
   rounded-full border border-slate-300 bg-white px-2 py-[6px] text-sm font-normal text-slate-500
    transition-transform active:scale-95 data-[state=checked]:bg-accent data-[state=checked]:text-white"
    >
      <div className="flex h-fit w-fit items-center justify-center overflow-hidden text-current">
        {selected ? (
          <IconCircleCheck className="h-6 w-6 stroke-[1.5px] text-white" />
        ) : (
          <IconCirclePlus className="h-6 w-6 stroke-[1.5px]" />
        )}
      </div>
      {category}
    </CheckboxPrimitive.Root>
  );
};
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

interface Category {
  id: number;
  category: string;
  selected: boolean;
}

const g_categories: Category[] = [
  { category: "Odzież i obuwie", id: 1, selected: false },
  { category: "Elektronika", id: 2, selected: false },
  { category: "Zdrowie i uroda", id: 3, selected: false },
  { category: "Dom i ogród", id: 4, selected: false },
  { category: "Podróże", id: 5, selected: false },
  { category: "Sport i rekreacja", id: 6, selected: false },
  { category: "Motoryzacja", id: 7, selected: false },
  { category: "Moda", id: 8, selected: false },
  { category: "Inne", id: 9, selected: false },
];

export { CategorySelect };
