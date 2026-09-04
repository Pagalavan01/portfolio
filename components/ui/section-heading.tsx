export function SectionHeading({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="mb-8 border-t border-[#D9D9D9] pt-16">
            <span className="label-sm block mb-3">{subtitle ?? title}</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                {title}
            </h2>
        </div>
    );
}
