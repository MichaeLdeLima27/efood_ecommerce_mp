import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik'
import * as Yup from 'yup'
import * as S from './styles'

interface DeliveryFormProps {
  initialValues?: DeliveryFormValues | null
  onSubmit: (values: DeliveryFormValues) => void
  onCancel: () => void
}

const deliverySchema = Yup.object().shape({
  receiver: Yup.string().required('Campo obrigatório'),
  address: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  zipCode: Yup.string().required('Campo obrigatório'),
  number: Yup.string().required('Campo obrigatório'),
  complement: Yup.string()
})

const defaultValues: DeliveryFormValues = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: ''
}

const DeliveryForm = ({
  initialValues,
  onSubmit,
  onCancel
}: DeliveryFormProps) => {
  return (
    <>
      <S.Title>Entrega</S.Title>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={deliverySchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <S.InputGroup>
              <S.Label htmlFor="receiver">Quem irá receber</S.Label>
              <Field
                as={S.Input}
                id="receiver"
                name="receiver"
                maxLength={40}
                className={errors.receiver && touched.receiver ? 'error' : ''}
              />
              <FormikErrorMessage name="receiver" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="address">Endereço</S.Label>
              <Field
                as={S.Input}
                id="address"
                name="address"
                maxLength={50}
                type="text"
                className={errors.address && touched.address ? 'error' : ''}
              />
              <FormikErrorMessage name="address" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="city">Cidade</S.Label>
              <Field
                as={S.Input}
                id="city"
                name="city"
                maxLength={30}
                className={errors.city && touched.city ? 'error' : ''}
              />
              <FormikErrorMessage name="city" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputRow>
              <S.InputGroup>
                <S.Label htmlFor="zipCode">CEP</S.Label>
                <Field
                  as={S.Input}
                  id="zipCode"
                  name="zipCode"
                  mask="99999-999"
                  type="number"
                  maxLength={9}
                  className={errors.zipCode && touched.zipCode ? 'error' : ''}
                />
                <FormikErrorMessage name="zipCode" component={S.ErrorMessage} />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="number">Número</S.Label>
                <Field
                  as={S.Input}
                  id="number"
                  name="number"
                  type="number"
                  maxLength={5}
                  className={errors.number && touched.number ? 'error' : ''}
                />
                <FormikErrorMessage name="number" component={S.ErrorMessage} />
              </S.InputGroup>
            </S.InputRow>

            <S.InputGroup>
              <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
              <Field
                as={S.Input}
                id="complement"
                name="complement"
                maxLength={30}
              />
            </S.InputGroup>

            <S.Button type="submit">Continuar com o pagamento</S.Button>
            <S.Button type="button" onClick={onCancel}>
              Voltar para o carrinho
            </S.Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default DeliveryForm
