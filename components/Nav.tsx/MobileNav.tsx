import { links } from "./Links";
import WalletButton from "./WalletButton";

type Props = {
  opened: boolean;
};

export default function MobileNav({ opened }: Props) {
  return (
    <div
      className={`text-white text-sm  flex-col flex gap-5 p-5 h-[calc(100vh-64px)] top-16 px-3 duration-300 w-full z-[50000000000000] lg:hidden bg-gradient-to-br from-blue-950 via-black/40 backdrop-blur-lg to-purple-600 fixed ${
        opened ? "left-0 opacity-100 " : " left-[400px] opacity-0"
      }`}
    >
      {[...links, "Search"].map((el, key) => (
        <p key={key}>{el}</p>
      ))}
        <WalletButton />
    </div>
  );
}
