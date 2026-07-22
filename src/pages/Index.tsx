import { Hero } from '../components/home/Hero'
import { FeaturedProjects } from '../components/home/FeaturedProjects'
import { SkillsHighlight } from '../components/home/SkillsHighlight'
import { CTASection } from '../components/home/CTASection'

export default function Index() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsHighlight />
      <CTASection />
    </>
  )
}
