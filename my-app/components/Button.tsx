export default function Button({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}) {
  return (
    <button
      className={`${
        variant == "primary"
          ? "bg-green-300/30 border border-green-700 hover:bg-green-700 hover:text-white text-green-700"
          : "mx-auto md:mx-0 bg-transparent border border-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-[#F8FFF8] hover:italic"
      } w-fit transition-all px-6 py-2 text-md md:text-lg rounded-xl hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}
