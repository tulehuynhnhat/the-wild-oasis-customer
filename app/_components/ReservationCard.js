import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/app/_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="border-primary-800 grid grid-rows-2 border sm:grid-rows-1">
      <div className="relative aspect-square h-full max-w-90 justify-self-center sm:h-32">
        <Image
          src={image}
          fill
          sizes="100%"
          alt={`Cabin ${name}`}
          className="border-primary-800 border-r object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col gap-2 px-6 py-3">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h3 className="text-center text-xl font-semibold sm:text-left">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center justify-center rounded-sm bg-yellow-800 px-3 text-xs font-bold text-yellow-200 uppercase">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center justify-center rounded-sm bg-green-800 px-3 text-xs font-bold text-green-200 uppercase">
              upcoming
            </span>
          )}
        </div>

        <p className="text-primary-300 text-sm sm:text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:mt-auto sm:flex-row sm:gap-5">
          <p className="text-accent-400 text-sm font-semibold sm:text-xl">
            ${totalPrice}
          </p>
          <p className="text-primary-300 text-sm sm:text-lg">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-primary-400 ml-auto text-sm">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="border-primary-800 row-[2_span2] flex w-full flex-col items-center border-l sm:col-3 sm:row-[1/2] sm:w-[100px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group text-primary-300 border-primary-800 hover:bg-accent-600 hover:text-primary-900 flex w-full flex-grow items-center justify-center gap-2 border-b px-3 text-xs font-bold uppercase transition-colors"
            >
              <PencilSquareIcon className="text-primary-600 group-hover:text-primary-800 h-5 w-5 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
