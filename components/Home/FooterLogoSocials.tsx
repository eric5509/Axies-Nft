import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

export default function FooterLogoSocials() {
  const socialMedia = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebook color="#1877F2" />,
      url: "https://www.facebook.com",
    },
    {
      id: 2,
      name: "Twitter",
      icon: <FaTwitter color="#1DA1F2" />,
      url: "https://www.twitter.com",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram color="#E1306C" />,
      url: "https://www.instagram.com",
    },
    {
      id: 11,
      name: "Google",
      icon: <FaGoogle color="#4285F4" />,
      url: "https://www.google.com",
    },
  ];

  return (
    <div className="flex text-center lg:text-start flex-col gap-7">
      <div className="flex justify-center lg:justify-start items-center">
        <Image
          width={100}
          height={100}
          src="/logo.png"
          alt="logo"
          className="h-10 w-auto"
        />
        <p className="text-white text-2xl font-semibold">Axies</p>
      </div>
      <p className="text-[13px] max-w-xl text-center lg:text-start mx-auto text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        quisquam esse minima ea. Voluptas illum enim unde rem ipsum
        perspiciatis.
      </p>
      <div className="flex justify-center lg:justify-start gap-4">
        {socialMedia.map((el) => (
          <Link
            key={el.id}
            href={el.url}
            target="_blank"
            className="h-10 w-10 border-2 rounded-lg shadow-md grid place-content-center transition-transform transform hover:scale-110"
          >
            <span className="text-white">{el.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
