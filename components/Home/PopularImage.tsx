type Props = {
  images: string[];
};
export default function PopularImage({ images }: Props) {
  return (
    <div className=" grid gap-4 grid-cols-6 grid-rows-2">
      {images.map((el, key) => (
        <div
          key={key}
          className={`h-28 group overflow-hidden rounded-md ${
            key === 0 || key === 1 ? "col-span-3 " : "col-span-2"
          }`}
        >
          <img
            src={el}
            className="object-cover group-hover:scale-150 duration-300 h-full w-full rounded-md"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
