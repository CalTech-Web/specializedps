import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  alt,
}: BeforeAfterSliderProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="grid grid-cols-2">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={before}
            alt={`${alt}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={after}
            alt={`${alt}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </div>
      {alt && (
        <div className="bg-white p-3 text-center">
          <p className="text-sm font-semibold text-heading">{alt}</p>
        </div>
      )}
    </div>
  );
}
