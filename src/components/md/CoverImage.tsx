export default function CoverImage({ title, src, slug }) {
  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        loading="lazy"
        className="shadow-small hover:shadow-medium transition-shadow duration-200"
      />
    </div>
  );
}
