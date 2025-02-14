import { Container, Main } from "@/components/BaseLayout"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { InputText } from "@/components/Inputs/InputText"
import useHandleInput from "@/hooks/useHandleInput"
import { BaseTable, TableData, TableHead } from "@/components/Table"

const InputPage = () => {
  interface FormDTO {
    nameForInput: string
    nameForInputCol: string
  }

  const { formState, setFormState, handleInput } = useHandleInput<FormDTO>({
    nameForInput: "",
    nameForInputCol: ''
  });

  return (
    <>
      <Sidebar/>
      <Main>
        <Navbar page='Input' />
        <Container>
          <InputText
            text='Input Text flex row (default)'
            name='nameForInput'
            value={formState.nameForInput}
            onChange={handleInput}
            errorText="Input can't be empty, default text value."
            isShowErrorText
          />

          <InputText
            text='Input Text flex col'
            name='nameForInputCol'
            value={formState.nameForInputCol}
            onChange={handleInput}
            flex="col"
          />

          <BaseTable className='pb-24 mt-8' name="Atribute <InputText/>"
            thead={<>
              <TableHead text='Atribute' />
              <TableHead text='Information' />
              <TableHead text='Data Type' />
            </>}

            tbody={<>
              <tr>
                <TableData text={'className'} />
                <TableData text={'class'} />
                <TableData text={'string'} />
              </tr>

              <tr>
                <TableData text={'text'} />
                <TableData text={'information text'} />
                <TableData text={'string'} />
              </tr>

              <tr>
                <TableData text={'onChange'} />
                <TableData text={'function for handleInput'} />
                <TableData text={'() => void'} />
              </tr>

              <tr>
                <TableData text={'value'} />
                <TableData text={'use state for value'} />
                <TableData text={'string'} />
              </tr>

              <tr>
                <TableData text={'name'} />
                <TableData text={"use same with value. example name='username' value={formState.username}"} />
                <TableData text={'string'} />
              </tr>

              <tr>
                <TableData text={'flex'} />
                <TableData text={'input and text position. flex-col and flex-row (default row)'} />
                <TableData text={'row | col'} />
              </tr>

              <tr>
                <TableData text={'errorText'} />
                <TableData text={'error text information'} />
                <TableData text={'string'} />
              </tr>

              <tr>
                <TableData text={'isShowError'} />
                <TableData text={'show or hidden errorText (default false)'} />
                <TableData text={'boolean'} />
              </tr>

              <tr>
                <TableData text={'required'} />
                <TableData text={'for show * mark'} />
                <TableData text={'boolean'} />
              </tr>

              <tr>
                <TableData text={'idField'} />
                <TableData text={'id value for component'} />
                <TableData text={'string'} />
              </tr>

              <tr>
                <TableData text={'type'} />
                <TableData text={'type for input'} />
                <TableData text={'text | number | date | string'} />
              </tr>
            </>}
          />
        </Container>
      </Main>
    </>
  )
}

export default InputPage