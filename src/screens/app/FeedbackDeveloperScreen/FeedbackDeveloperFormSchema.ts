import z from 'zod';

export const FeedbackDeveloperFormSchema = z.object({
  reason: z.string().min(10, 'Motivo deve ter no mínimo 10 caracteres'),
  description: z.string().min(10, 'Descrição deve ter no mínimo 10 caracteres'),
});

export type FeedbackDeveloperFormSchemaTypes = z.infer<
  typeof FeedbackDeveloperFormSchema
>;
