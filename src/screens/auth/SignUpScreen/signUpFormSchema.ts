import {z} from 'zod';

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(
          word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase().trim(),
        )
        .join(' ');
    }),
  phone: z.string(),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpFormSchemaTypes = z.infer<typeof SignUpFormSchema>;
