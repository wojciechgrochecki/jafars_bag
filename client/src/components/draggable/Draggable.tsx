import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import Sortable from "sortablejs";

interface SortableProps extends Sortable.Options {
  children: React.ReactNode;
  className?: string;
}

export default function Draggable({
  children,
  className,
  ...rest
}: SortableProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const sortableJsRef = useRef<Sortable | null>(null);

  useEffect(() => {
    if (gridRef.current)
      sortableJsRef.current = Sortable.create(gridRef.current, {
        animation: 250,
        touchStartThreshold: 3,
        swapThreshold: 0.8,
        handle: ".drag-handle",
        dragClass: "currently-dragged",
        ghostClass: "ghost",
        ...rest,
      });
    return () => sortableJsRef.current?.destroy();
  }, []);

  return (
    <div
      ref={gridRef}
      className={cn(
        "mt-4 grid auto-rows-fr grid-cols-2 gap-4  rounded-md border-dashed border-slate-300 p-3 has-[*]:border-2 md:grid-cols-3 ",
        className,
      )}
    >
      {children}
    </div>
  );
}
