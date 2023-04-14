import {Avatar} from "~/components/Avatar";
import {useOthers, useSelf} from "~/liveblocks.config";

export function AvatarStack() {
  const users = useOthers();
  const currentUser = useSelf();

  return (
    <div>
      {users.map(({ connectionId, info }) => {
        return (
          <Avatar
            key={connectionId}
            picture={info.picture}
            name={info.name}
          />
        );
      })}

      {currentUser && (
        <div>
          <Avatar picture={currentUser.info.picture} name="You" />
        </div>
      )}
    </div>
  );
}
