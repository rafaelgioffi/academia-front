import * as yup from 'yup'

export const validateForm = yup.object().shape({
    title: yup.string(),
    value: yup.number("Apenas números aqui").required("Valor obrigatório"),
    description: yup.string().required("Campo obrigatório"),
})