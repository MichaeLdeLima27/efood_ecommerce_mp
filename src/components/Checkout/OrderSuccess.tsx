import * as S from './styles'

interface OrderSuccessProps {
  orderId: string
  onFinish: () => void
}

const OrderSuccess = ({ orderId, onFinish }: OrderSuccessProps) => {
  return (
    <>
      <S.Title>Pedido realizado - {orderId}</S.Title>
      <S.OrderMessage>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </S.OrderMessage>
      <S.OrderMessage>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </S.OrderMessage>
      <S.OrderMessage>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </S.OrderMessage>
      <S.OrderMessage>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.OrderMessage>
      <S.Button onClick={onFinish}>Concluir</S.Button>
    </>
  )
}

export default OrderSuccess
