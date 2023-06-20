import {z} from 'zod';

export const ForgotPasswordFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
});

export type ForgotPasswordFormSchemaTypes = z.infer<
  typeof ForgotPasswordFormSchema
>;
