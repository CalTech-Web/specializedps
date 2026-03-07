import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
  patientInfo?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  alt,
  patientInfo,
}: BeforeAfterSliderProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm">
      <div className="grid grid-cols-2">
        {/* Before */}
        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={before}
              alt={`${alt}, Before`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="bg-[#32373c] py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-white">
            Before
          </div>
        </div>

        {/* After */}
        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={after}
              alt={`${alt}, After`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="bg-[#32373c] py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-white">
            After
          </div>
        </div>
      </div>

      {/* Label below */}
      {(alt || patientInfo) && (
        <div className="bg-white p-3 text-center">
          {alt && (
            <p className="text-sm font-semibold text-[#32373c]">{alt}</p>
          )}
          {patientInfo && (
            <p className="mt-0.5 text-xs text-gray-500">{patientInfo}</p>
          )}
        </div>
      )}
    </div>
  );
}
