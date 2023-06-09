import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  Separator,
  FormContainer,
  HomeContainer,
  StartCountdownButton,
  TaskInput,
  MinutesAmount,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 1" />
            <option value="projeto 1" />
          </datalist>

          <label htmlFor="minutosAmount">durante</label>
          <MinutesAmount
            type="number"
            id="minutosAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
