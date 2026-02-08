import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="border-primary-800 mb-10 grid gap-2 border sm:grid-cols-[3fr_4fr] md:mb-24 md:gap-20 lg:px-10 lg:py-3">
      <div className="relative h-50 lg:-translate-x-3 lg:scale-[1.15]">
        <Image
          src={image}
          fill
          sizes="100%"
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 bg-primary-950 mb-5 text-3xl font-black lg:w-[150%] lg:translate-x-[-254px] lg:p-6 lg:pb-1 lg:text-7xl">
          Cabin {name}
        </h3>

        <p className="text-primary-300 mb-10 text-base lg:text-lg">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-7 flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <UsersIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
