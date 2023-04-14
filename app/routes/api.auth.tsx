import { authorize } from "@liveblocks/node";
import type { ActionFunction } from "@remix-run/node";

// Get your secret key from https://liveblocks.io/dashboard/apikeys
const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY as string;

export const action: ActionFunction = async ({ request }) => {
  /**
   * Implement your own security here.
   *
   * It's your responsibility to ensure that the caller of this endpoint
   * is a valid user by validating the cookies or authentication headers
   * and that it has access to the requested room.
   */
  const { room } = await request.json();
  const userIndex = Math.floor(Math.random() * NAMES.length);

  const result = await authorize({
    room: room,
    secret: API_KEY,
    userId: `user-${userIndex}`,
    userInfo: {
      name: NAMES[userIndex],
      picture: `https://liveblocks.io/avatars/avatar-${Math.floor(
        Math.random() * 30
      )}.png`,
    },
  });

  return new Response(result.body, {
    status: result.status,
  });
}

const NAMES = [
  "Charlie Layne",
  "Mislav Abha",
  "Tatum Paolo",
  "Anjali Wanda",
  "Jody Hekla",
  "Emil Joyce",
  "Jory Quispe",
  "Quinn Elton",
];
