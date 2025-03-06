import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 990;
`

export const CheckoutOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const CheckoutContent = styled.div`
  background-color: ${Colors.mainPink};
  width: 360px;
  padding: 32px 8px;
  overflow-y: auto;
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  color: ${Colors.lightPink};
  font-weight: bold;
  margin-bottom: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
`

export const Label = styled.label`
  color: ${Colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`

export const Input = styled.input<{ isValid?: boolean }>`
  width: 100%;
  height: 32px;
  background-color: ${Colors.lightPink};
  border: none;
  padding: 0 8px;
  font-size: 14px;
  color: ${Colors.mainPink};
  outline: none;

  &:focus {
    outline: ${(props) => (!props.isValid ? '2px solid red' : 'none')};
  }

  &.error {
    outline: 4px solid red;
  }
`

export const InputRow = styled.div`
  display: flex;
  gap: 16px;

  > div {
    flex: 1;
  }
`

export const Button = styled.button`
  background-color: ${Colors.lightPink};
  color: ${Colors.mainPink};
  border: none;
  width: 100%;
  padding: 4px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  font-size: 14px;
  height: 32px;
`

export const ErrorMessage = styled.p`
  color: ${Colors.warning};
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const OrderInfo = styled.div`
  color: ${Colors.lightPink};
  margin-bottom: 16px;
`

export const OrderAmount = styled.p`
  color: ${Colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
`

export const OrderMessage = styled.p`
  color: ${Colors.lightPink};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`
