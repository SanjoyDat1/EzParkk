import { Code, Megaphone, Briefcase } from 'lucide-react'

export interface Role {
  id: string
  title: string
  department: string
  location: string
  type: string
  icon: typeof Code
  description: string
  requirements: string[]
}

export const openRoles: Role[] = [
  {
    id: 'software-engineering-intern',
    title: 'Software Engineering Intern',
    department: 'Engineering',
    location: 'Remote / Los Angeles, CA',
    type: 'Internship',
    icon: Code,
    description:
      "Join as a software engineering intern and help build the core EzParkk platform from the ground up. You'll touch real product features across our Next.js web app, native mobile experiences, and Firebase/Node backend infrastructure. This is a hands-on role where you'll ship production-quality code, participate in design discussions, and see how a zero-to-one startup operates day to day.",
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Experience with any programming language (JavaScript, Python, Java, Swift, etc.)',
      'Interest in full-stack development, mobile apps, or backend systems',
      'Strong problem-solving and communication skills',
      'Passion for building products that solve real problems',
    ],
  },
  {
    id: 'marketing-intern',
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Remote / Los Angeles, CA',
    type: 'Internship',
    icon: Megaphone,
    description:
      'Help drive user acquisition and growth for EzParkk. You\'ll create social content (Instagram, TikTok, and more), test growth experiments, support campus / city activations, and help build a modern brand in the parking and mobility space. Ideal for someone who lives on social, understands trends, and wants to learn how growth works at an early-stage startup.',
    requirements: [
      'Currently pursuing a degree in Marketing, Communications, or related field',
      'Interest in digital marketing channels (social, email, paid ads)',
      'Creative thinker with strong writing skills',
      'Eager to learn and contribute to growth initiatives',
    ],
  },
  {
    id: 'operations-intern',
    title: 'Operations Intern',
    department: 'Operations',
    location: 'Los Angeles, CA / Newport Beach, CA',
    type: 'Internship',
    icon: Briefcase,
    description: 'Help scale EzParkk across California. You\'ll work on city partnerships, host onboarding, customer support, and learn how to run operations at a fast-growing startup.',
    requirements: [
      'Currently pursuing a degree in Business, Operations, or related field',
      'Strong organizational and communication skills',
      'Interest in partnerships and business development',
      'Detail-oriented with excellent problem-solving abilities',
    ],
  },
]

export function getRoleById(id: string): Role | undefined {
  return openRoles.find((role) => role.id === id)
}

