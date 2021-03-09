interface Props {
  label: string
  className?: string
}

export default function Divider(props: Props) {
  return (
    <div className={`relative w-full my-6 border-t-2 border-white text-white ${props.className}`}>
      <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-rr px-5 font-semibold text-2xl md:text-3xl tracking-widest font-akaya">{props.label.toUpperCase()}</span>
    </div>
  )
}