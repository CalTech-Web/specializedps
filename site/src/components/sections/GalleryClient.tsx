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
      { label: "Blepharoplasty", href: "/gallery/blepharoplasty" },
      { label: "Otoplasty", href: "/gallery/otoplasty" },
      { label: "Chin Liposuction", href: "/gallery/liposuction" },
    ],
  },
  {
    title: "Body",
    anchor: "body",
    procedures: [
      { label: "Tummy Tuck", href: "/gallery/tummy-tuck" },
      { label: "Liposuction", href: "/gallery/liposuction" },
      { label: "Lipo 360", href: "/gallery/liposuction" },
      { label: "Brazilian Butt Lift", href: "/gallery/bbl" },
    ],
  },
  {
    title: "Breast",
    anchor: "breast",
    procedures: [
      { label: "Breast Augmentation", href: "/gallery/breast-augmentation" },
      { label: "Breast Lift", href: "/gallery/breast-lift" },
      { label: "Breast Reduction", href: "/gallery/breast-reduction" },
    ],
  },
  {
    title: "Breast Reconstruction",
    anchor: "breast-reconstruction",
    procedures: [
      { label: "DIEP Flap Reconstruction", href: "/gallery/diep-flap" },
      { label: "Implant-Based Reconstruction", href: "/gallery/implant-reconstruction" },
      { label: "Oncoplastic Reduction", href: "/gallery/oncoplastic-reduction" },
      { label: "TDAP Flap Reconstruction", href: "/gallery/tdap-flap" },
      { label: "Male Breast Cancer Reconstruction", href: "/gallery/male-breast-reconstruction" },
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
          className="bg-cream p-6 shadow-sm"
        >
          <h3 className="font-heading text-lg font-bold text-heading border-b border-peach pb-3 mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.procedures.map((proc) => (
              <li key={proc.label}>
                <Link
                  href={proc.href}
                  className="block text-sm text-primary transition-colors hover:text-heading hover:underline"
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
