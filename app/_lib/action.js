'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBooking } from './data-service';
import { redirect } from 'next/navigation';

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) throw new Error('You must be logged in');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error('Please provide a valid national ID');

  const updateData = { nationalID, nationality, countryFlag };

  const { error } = await supabase.from('guests').update(updateData).eq('id', session.user.guestId);

  if (error) throw new Error('Guest could not be updated');

  revalidatePath('/account/profile');
}

export async function createBooking(bookingData, formData) {
  const session = await auth();

  if (!session) throw new Error('You must be logged in');

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
    extrasPrice: 0,
    hasBreakfast: false,
    isPaid: false,
    status: 'unconfirmed',
  };

  const { error } = await supabase.from('bookings').insert([newBooking]);

  if (error) throw new Error('Booking could not be created');

  revalidatePath(`/cabins/${newBooking.cabinId}`);

  redirect('/cabins/thankyou');
}

export async function deleteBooking(bookingId) {
  const session = await auth();

  if (!session) throw new Error('You must be logged in');

  const booking = await getBooking(bookingId);

  if (booking.guestId !== session.user.guestId)
    throw new Error('You are not allowed to delete this booking');

  const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted');

  revalidatePath('/account/reservations');
}

// export async function updateBooking(bookingId, formData) {}
export async function updateBooking(formData) {
  const session = await auth();

  if (!session) throw new Error('You must be logged in');

  let { bookingId, numGuests, observations } = Object.fromEntries(formData.entries());

  const booking = await getBooking(bookingId);

  if (booking.guestId !== session.user.guestId)
    throw new Error('You are not allowed to update this booking');

  // if (isPast(new Date(booking.startDate))) throw new Error('This booking not allow to update');
  // Need checking numGuests is greater than cabin's max capacity
  if (isNaN(Number(numGuests))) throw new Error('Num guest must be a number');
  if (typeof observations !== 'string') throw new Error('Observations must be a string');

  bookingId = Number(bookingId);

  const updateData = {
    numGuests: Number(numGuests),
    observations: observations.slice(0, 1000),
  };

  const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .select()
    .single();

  if (error) throw new Error('Booking could not be updated');

  // In the lecture need to add this to revalidate
  // revalidatePath(`/account/reservations/edit/${bookingId}`);

  redirect('/account/reservations');
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
