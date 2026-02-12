interface PageHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function PageHeader({ badge, title, highlight, description }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-b from-navy-950 to-navy-900 pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-400/8 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 mb-6">
          {badge}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-5">
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100/60 leading-relaxed px-2">
          {description}
        </p>
      </div>
    </section>
  );
}
