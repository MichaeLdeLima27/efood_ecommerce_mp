declare interface DeliveryFormValues {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

declare interface PaymentFormValues {
  cardName: string
  cardNumber: string
  cardCode: string
  expirationMonth: string
  expirationYear: string
}

declare interface CheckoutPayload {
  delivery: DeliveryFormValues
  payment: PaymentFormValues
  products: CartItem[]
}

declare interface CheckoutResponse {
  orderId: string
}
