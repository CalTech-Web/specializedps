import Link from "next/link";

interface ProcedureLink {
  label: string;
  href: string;
}

interface GallerySection {
  title: string;
  anchor: string;
  procedures: ProcedureLink[];
}

const gallerySections: GallerySection[] = [
  {
    title: "Face",
    anchor: "face",
    procedures: [
      { label: "Facelift", href: "/gallery#face" },
      { label: "Rhinoplasty", href: "/gallery#face" },
      { label: "Blepharoplasty", href: "/gallery#face" },
      { label: "Otoplasty", href: "/gallery#face" },
      { label: "Chin Liposuction", href: "/gallery#face" },
    ],
  },
  {
    title: "Body",
    anchor: "body",
    procedures: [
      { label: "Tummy Tuck", href: "/gallery#body" },
      { label: "Liposuction", href: "/gallery#body" },
      { label: "Lipo 360", href: "/gallery#body" },
      { label: "Brazilian Butt Lift", href: "/gallery#body" },
    ],
  },
  {
    title: "Breast",
    anchor: "breast",
    procedures: [
      { label: "Breast Augmentation", href: "/gallery#breast" },
      { label: "Breast Lift", href: "/gallery#breast" },
      { label: "Breast Reduction", href: "/gallery#breast" },
    ],
  },
  {
    title: "Breast Reconstruction",
    anchor: "breast-reconstruction",
    procedures: [
      { label: "DIEP Flap Reconstruction", href: "/gallery#breast-reconstruction" },
      { label: "Implant-Based Reconstruction", href: "/gallery#breast-reconstruction" },
      { label: "Oncoplastic Reduction", href: "/gallery#breast-reconstruction" },
      { label: "TDAP Flap Reconstruction", href: "/gallery#breast-reconstruction" },
      { label: "Delayed Breast Reconstruction", href: "/gallery#breast-reconstruction" },
      { label: "Male Breast Cancer Reconstruction", href: "/gallery#breast-reconstruction" },
    ],
  },
];

export default function GalleryClient() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {gallerySections.map((section) => (
        <div
          key={section.anchor}
          id={section.anchor}
          className="rounded-lg bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold text-[#32373c] border-b border-gray-200 pb-3 mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.procedures.map((proc) => (
              <li key={proc.label}>
                <Link
                  href={proc.href}
                  className="block text-sm text-[#4054b2] transition-colors hover:text-[#1f385f] hover:underline"
                >
                  {proc.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
