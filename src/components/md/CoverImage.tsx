export default function CoverImage({ title, src, slug, accreditation }) {
  return (
    <div
      className="flex justify-center flex-col"
      style={{ backgroundColor: "hsl(200,100%,4%)" }}
    >
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        loading="lazy"
        className="p-4 pb-0"
      />
      <em className="text-base ml-4 text-gray-400">
        Photo by <span className="underline">{accreditation}</span> on Unplash
      </em>
    </div>
  );
}
