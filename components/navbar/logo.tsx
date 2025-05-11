import Image from "next/image";

export const Logo = ({ width, height }: { width: number; height: number }) => (
  <Image alt="logo" src="/logo.png" width={width} height={height} />
);
