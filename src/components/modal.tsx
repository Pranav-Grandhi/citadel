import clsx from "clsx";

interface ModalProps {
  size: "sm" | "md";
  title: React.ReactNode | React.ReactNode[];
  body: React.ReactNode | React.ReactNode[];
}

export default function Modal({ title, body, size }: ModalProps) {
  return (
    <div className="z-10 absolute flex justify-center items-center w-full h-full bg-black bg-opacity-75">
      <div
        className={clsx(
          "mx-5 px-8 py-6 w-full rounded-3xl bg-white",
          { "max-w-sm": size === "sm" },
          { "max-w-md": size === "md" }
        )}
      >
        {title}
        {body}
      </div>
    </div>
  );
}
