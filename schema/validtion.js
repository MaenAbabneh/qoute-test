import zod from 'zod';

export const quoteSchema = zod.object({
  name: zod.string().min(1, 'Name is required'),
  quote: zod.string().min(1, 'Quote text is required'),
  author: zod.string().min(1, 'Author name is required'),
});