import {z} from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type LoginFormSchemaTypes = z.infer<typeof LoginFormSchema>;
