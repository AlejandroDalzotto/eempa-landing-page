
interface CtaProps extends React.ComponentPropsWithoutRef<"button"> {
  text: string
}

export default function Cta({ text, ...props }: CtaProps) {
  return (
    <button
      {...props}
      className="text-lg font-semibold rounded bg-black dark:bg-neutral-950 text-white py-2 md:py-3 px-4 md:px-6"
    >
      {text}
    </button>
  )
}
