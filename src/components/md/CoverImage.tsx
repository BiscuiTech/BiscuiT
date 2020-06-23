import useTranslation from "../../hooks/useTranslation";

export default function CoverImage({ title, src, slug, accreditation }) {
  const { t } = useTranslation();
  return (
    <div
      className="flex justify-center flex-col"
      style={{ backgroundColor: "hsl(200,100%,4%)" }}
    >
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        loading="lazy"
        className="pb-0"
      />
      <em className="text-base text-gray-400">
        {t("coverImage_pictureBy")}{" "}
        <a className="underline" href={src}>
          {accreditation}
        </a>{" "}
        {t("coverImage_on")}{" "}
        <a className="underline" href={src}>
          Unplash
        </a>
      </em>
    </div>
  );
}
