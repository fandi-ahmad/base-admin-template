interface PropsType {
  required?: boolean
  className?: string
  idField?: string
  text?: string
  type?: 'text' | 'number' | 'date' | string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string
  flex?: 'col' | 'row'
  isShowErrorText?: boolean | false
}

const inputClass = 'w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'

export const InputText = (props: PropsType) => {
  const required = () => {
    if (props.required) {
      return <span className='text-red-400'>*</span>
    }
  }
  return (
    <div className={`flex ${props.flex === 'col' ? 'flex-col' : 'flex-row'} justify-between w-full mb-2 ${props.className}`} id={props.idField}>
      <p className="pt-4 mb-2 mr-24">{props.text}{required()}</p>
      <div className="w-full">
        <input type={props.type || 'text'} name={props.name} value={props.value} onChange={props.onChange} className={inputClass} autoComplete="off" />
        <p className={`text-red-400 text-sm ${props.isShowErrorText ? '' : 'hidden'}`}>{props.errorText || "Input can't be empty"}</p>
      </div>
    </div>
  )
}