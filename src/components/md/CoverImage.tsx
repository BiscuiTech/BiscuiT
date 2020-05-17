export default function CoverImage({ title, src, slug, accreditation }) {
  return (
    <>
      <div className="flex justify-center flex-col">
        <img
          src={src}
          alt={`Cover Image for ${title}`}
          loading="lazy"
          className="shadow-small hover:shadow-medium transition-shadow duration-200"
        />
        <em className="text-base">
          Photo by <span className="underline">{accreditation}</span> on Unplash
        </em>
      </div>
    </>
  );
}
