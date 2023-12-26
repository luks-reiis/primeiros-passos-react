import { EmojiRating } from "./components/EmojiRating";

function Page(){
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center">
    <EmojiRating
      rate = {3.1}
    />
  </div>
  );
}

export default Page;