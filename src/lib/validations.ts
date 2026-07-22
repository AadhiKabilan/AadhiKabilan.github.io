import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const subjects = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'project', label: 'Project Collaboration' },
  { value: 'freelance', label: 'Freelance Work' },
  { value: 'internship', label: 'Internship Opportunity' },
  { value: 'other', label: 'Other' },
] as const