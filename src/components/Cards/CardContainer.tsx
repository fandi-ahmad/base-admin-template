interface CardType {
  children: React.ReactNode
}

export const CardContainer = (props: CardType) => {
  return (
    <div className="max-w-full px-3 mb-6 w-full">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-xl bg-clip-border mb-6">
        <div className="flex-auto p-4">
          {props.children}
        </div>
      </div>
    </div>
  )
}