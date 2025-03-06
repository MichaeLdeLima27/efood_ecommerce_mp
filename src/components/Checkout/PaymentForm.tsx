import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import * as S from './styles'

interface PaymentFormProps {
  initialValues?: PaymentFormValues | null
  onSubmit: (values: PaymentFormValues) => void
  onBack: () => void
  totalAmount: number
}

const paymentSchema = Yup.object().shape({
  cardName: Yup.string().required('Campo obrigatório'),
  cardNumber: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número de cartão inválido'),
  cardCode: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{3}$/, 'CVV inválido'),
  expirationMonth: Yup.string()
    .required('Campo obrigatório')
    .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido'),
  expirationYear: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{4}$/, 'Ano inválido')
})

const defaultValues: PaymentFormValues = {
  cardName: '',
  cardNumber: '',
  cardCode: '',
  expirationMonth: '',
  expirationYear: ''
}

const PaymentForm = ({
  initialValues,
  onSubmit,
  onBack,
  totalAmount
}: PaymentFormProps) => {
  return (
    <>
      <S.Title>Pagamento - Valor a pagar R$ {totalAmount.toFixed(2)}</S.Title>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={paymentSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <S.InputGroup>
              <S.Label htmlFor="cardName">Nome no cartão</S.Label>
              <Field
                as={S.Input}
                id="cardName"
                name="cardName"
                className={errors.cardName && touched.cardName ? 'error' : ''}
              />
              <FormikErrorMessage name="cardName" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputRow>
              <S.InputGroup>
                <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                <Field name="cardNumber">
                  {({ field }: any) => (
                    <InputMask
                      {...field}
                      mask="9999 9999 9999 9999"
                      maskChar={null}
                      className={
                        errors.cardNumber && touched.cardNumber ? 'error' : ''
                      }
                      id="cardNumber"
                      as={S.Input}
                    />
                  )}
                </Field>
                <FormikErrorMessage
                  name="cardNumber"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="cardCode">CVV</S.Label>
                <Field
                  as={S.Input}
                  id="cardCode"
                  name="cardCode"
                  maxLength={3}
                  className={errors.cardCode && touched.cardCode ? 'error' : ''}
                />
                <FormikErrorMessage
                  name="cardCode"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <S.Label htmlFor="expirationMonth">Mês de vencimento</S.Label>
                <Field name="expirationMonth">
                  {({ field }: any) => (
                    <InputMask
                      {...field}
                      mask="99"
                      maskChar={null}
                      className={
                        errors.expirationMonth && touched.expirationMonth
                          ? 'error'
                          : ''
                      }
                      id="expirationMonth"
                      as={S.Input}
                    />
                  )}
                </Field>
                <FormikErrorMessage
                  name="expirationMonth"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="expirationYear">Ano de vencimento</S.Label>
                <Field name="expirationYear">
                  {({ field }: any) => (
                    <InputMask
                      {...field}
                      mask="9999"
                      maskChar={null}
                      className={
                        errors.expirationYear && touched.expirationYear
                          ? 'error'
                          : ''
                      }
                      id="expirationYear"
                      as={S.Input}
                    />
                  )}
                </Field>
                <FormikErrorMessage
                  name="expirationYear"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>
            </S.InputRow>

            <S.Button type="submit">Finalizar pagamento</S.Button>
            <S.Button type="button" onClick={onBack}>
              Voltar para a edição de endereço
            </S.Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PaymentForm
