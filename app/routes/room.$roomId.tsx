import {RoomProvider} from "~/liveblocks.config";
import {AvatarStack} from "~/components/AvatarStack";
import {useParams} from "react-router";

export default function Room() {
  const params = useParams();
  return (
    <RoomProvider id={params.roomId as string} initialPresence={{}}>
      <AvatarStack />
    </RoomProvider>
  );
}
