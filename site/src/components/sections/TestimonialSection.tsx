interface Testimonial {
  name: string;
  quote: string;
  procedure: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jessica",
    quote:
      "He truly listened to what I wanted and gave me results that look so natural and beautiful.",
    procedure: "Breast Augmentation",
  },
  {
    name: "Emily",
    quote:
      "My breasts look fuller and more youthful, but still very natural.",
    procedure: "Breast Augmentation",
  },
  {
    name: "Jamie",
    quote:
      "Fat transfer breast augmentation...the results are completely natural.",
    procedure: "Fat Transfer",
  },
  {
    name: "Rita",
    quote:
      "The surgery and recovery were much easier than I expected, and my results exceeded my expectations.",
    procedure: "Breast Augmentation",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Real experiences from real patients who trusted us with their care.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              {/* Gold accent quote mark */}
              <span
                className="absolute -top-4 left-6 text-5xl font-serif leading-none text-[#c9a96e]"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="mt-4 text-sm leading-relaxed text-gray-600">
                {testimonial.quote}
              </blockquote>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-[#1a2332]">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs text-[#c9a96e]">
                  {testimonial.procedure}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
