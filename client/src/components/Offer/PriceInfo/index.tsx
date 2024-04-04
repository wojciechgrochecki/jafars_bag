interface Props {
  normalPrice: number;
  discountPrice: number;
}

export default function PriceInfo({ normalPrice, discountPrice }: Props) {
  const discountPct = Math.round(
    ((normalPrice - discountPrice) / normalPrice) * 100,
  );

  return (
    <div className="flex flex-row items-baseline gap-1">
      <span className="h-fit text-lg font-semibold leading-4 text-accent">
        {normalPrice}zł
      </span>
      <span className="h-fit text-base leading-5 text-slate-400 line-through">
        {discountPrice}zł
      </span>
      <span className="h-fit text-sm font-medium leading-4 text-slate-600">
        {discountPct}%
      </span>
    </div>
  );
}
