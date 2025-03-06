import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeCart, clear } from '../../store/reducers/cart'
import { useCheckoutMutation } from '../../services/api'
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
  const [checkout] = useCheckoutMutation()

  // Reset form when checkout is closed
  useEffect(() => {
    if (!isCheckoutOpen) {
      setCurrentStep(CheckoutStep.DELIVERY)
      setFormData({
        delivery: null,
        payment: null,
        orderId: null
      })
    }
  }, [isCheckoutOpen])

  const handleCloseCheckout = () => {
    dispatch(closeCart())
  }

  const handleDeliverySubmit = (values: DeliveryFormValues) => {
    setFormData((prev) => ({ ...prev, delivery: values }))
    setCurrentStep(CheckoutStep.PAYMENT)
  }

  const handlePaymentSubmit = async (values: PaymentFormValues) => {
    if (!formData.delivery) {
      // Handle error - delivery data missing
      alert(
        'Dados de entrega não encontrados. Por favor, volte para a etapa anterior.'
      )
      setCurrentStep(CheckoutStep.DELIVERY)
      return
    }

    setIsLoading(true)

    const payload: CheckoutPayload = {
      delivery: formData.delivery,
      payment: values,
      products: items
    }

    try {
      // Try to call the API
      const data = await checkout(payload).unwrap()

      setFormData((prev) => ({
        ...prev,
        payment: values,
        orderId: data.orderId
      }))
    } catch (error) {
      console.error('Checkout error:', error)

      // This is a showcase - even if the API fails, we still want to show the order completion
      // Generate a mock order ID for demonstration purposes
      const mockOrderId = `DEMO-${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0')}`

      setFormData((prev) => ({
        ...prev,
        payment: values,
        orderId: mockOrderId
      }))
    } finally {
      // Move to success step regardless of API result
      setCurrentStep(CheckoutStep.SUCCESS)
      dispatch(clear())
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
