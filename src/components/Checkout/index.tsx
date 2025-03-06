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
  const [checkout, { isSuccess, data }] = useCheckoutMutation()

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

  // Move to success step when API call succeeds
  useEffect(() => {
    if (isSuccess && data && data.orderId) {
      setFormData((prev) => ({
        ...prev,
        orderId: data.orderId
      }))
      setCurrentStep(CheckoutStep.SUCCESS)
      dispatch(clear())
    }
  }, [isSuccess, data, dispatch])

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

    // Format data according to the API expectations
    const payload: CheckoutPayload = {
      products: items.map((item) => ({
        id: item.id,
        price: Number(item.preco)
      })),
      delivery: {
        receiver: formData.delivery.receiver,
        address: {
          description: formData.delivery.address,
          city: formData.delivery.city,
          zipCode: formData.delivery.zipCode,
          number: parseInt(formData.delivery.number) || 0,
          complement: formData.delivery.complement
        }
      },
      payment: {
        card: {
          name: values.cardName,
          number: values.cardNumber.replace(/\s/g, ''),
          code: parseInt(values.cardCode) || 0,
          expires: {
            month: parseInt(values.expirationMonth) || 0,
            year: parseInt(values.expirationYear) || 0
          }
        }
      }
    }

    try {
      await checkout(payload).unwrap()
      // Success handling is done in the useEffect
      setFormData((prev) => ({
        ...prev,
        payment: values
      }))
    } catch (error) {
      console.error('Checkout error:', error)

      // For demo purposes, show success screen even if API fails
      const mockOrderId = `DEMO-${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0')}`

      setFormData((prev) => ({
        ...prev,
        payment: values,
        orderId: mockOrderId
      }))

      // Move to success when API fails (for demo)
      setCurrentStep(CheckoutStep.SUCCESS)
      dispatch(clear())
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
