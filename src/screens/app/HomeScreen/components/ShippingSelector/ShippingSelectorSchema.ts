import {z} from 'zod';

export const ShippingSelectorSchema = z.object({
  address: z
    .string()
    .nonempty('Endereço é obrigatório')
    .min(8, 'Endereço deve ter no mínimo 8 caracteres'),
});

export type ShippingSelectorSchemaTypes = z.infer<
  typeof ShippingSelectorSchema
>;
