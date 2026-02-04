import Image from "next/image";

export default function Offering(props) {
  return (
    <div className="text-center bg-gray-100 p-2">
      <div className="p-[5px] h-[390px] relative mx-auto">
        <Image
          src={props.source}
          alt={props.title}
          fill
          className="object-cover hover:opacity-50 cursor-pointer duration-300"
        />
      </div>
      <h2 className="text-xl font-light p-5">{props.title}</h2>
    </div>
  );
}