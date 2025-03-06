import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeCart, clear } from '../../store/reducers/cart'
import * as S from './styles'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import OrderSuccess from './OrderSuccess'
import { PulseLoader } from 'react-spinners'

enum CheckoutStep {
  DELIVERY = 0,
  PAYMENT = 1,
  SUCCESS = 2
}

const Checkout = () => {
  const { isCheckoutOpen, items } = useSelector(
    (state: RootState) => state.cart
  )
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(
    CheckoutStep.DELIVERY
  )
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<{
    delivery: DeliveryFormValues | null
    payment: PaymentFormValues | null
    orderId: string | null
  }>({
    delivery: null,
    payment: null,
    orderId: null
  })

  const dispatch = useDispatch()

  const handleCloseCheckout = () => {
    dispatch(closeCart())
    // Reset to delivery step when closing
    setTimeout(() => {
      setCurrentStep(CheckoutStep.DELIVERY)
      setFormData({
        delivery: null,
        payment: null,
        orderId: null
      })
    }, 300)
  }

  const handleDeliverySubmit = (values: DeliveryFormValues) => {
    setFormData((prev) => ({ ...prev, delivery: values }))
    setCurrentStep(CheckoutStep.PAYMENT)
  }

  const handlePaymentSubmit = async (values: PaymentFormValues) => {
    setIsLoading(true)

    const payload: CheckoutPayload = {
      delivery: formData.delivery!,
      payment: values,
      products: items
    }

    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const data: CheckoutResponse = await response.json()

      setFormData((prev) => ({
        ...prev,
        payment: values,
        orderId: data.orderId
      }))

      setCurrentStep(CheckoutStep.SUCCESS)
      dispatch(clear())
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Erro ao processar o pagamento. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackToDelivery = () => {
    setCurrentStep(CheckoutStep.DELIVERY)
  }

  const handleFinish = () => {
    handleCloseCheckout()
  }

  if (!isCheckoutOpen) {
    return null
  }

  return (
    <S.CheckoutContainer>
      <S.CheckoutOverlay onClick={handleCloseCheckout} />
      <S.CheckoutContent>
        {isLoading ? (
          <S.LoaderContainer>
            <PulseLoader color="#ffffff" size={12} />
          </S.LoaderContainer>
        ) : (
          <>
            {currentStep === CheckoutStep.DELIVERY && (
              <DeliveryForm
                initialValues={formData.delivery}
                onSubmit={handleDeliverySubmit}
                onCancel={handleCloseCheckout}
              />
            )}

            {currentStep === CheckoutStep.PAYMENT && (
              <PaymentForm
                initialValues={formData.payment}
                onSubmit={handlePaymentSubmit}
                onBack={handleBackToDelivery}
                totalAmount={items.reduce((acc, item) => acc + item.preco, 0)}
              />
            )}

            {currentStep === CheckoutStep.SUCCESS && formData.orderId && (
              <OrderSuccess
                orderId={formData.orderId}
                onFinish={handleFinish}
              />
            )}
          </>
        )}
      </S.CheckoutContent>
    </S.CheckoutContainer>
  )
}

export default Checkout
