import DemoBanner from "../../components/blocks/DemoBanner"
import FooterNavigation from "../../components/globals/FooterNavigation"
import HeaderNavigation from "../../components/globals/HeaderNavigation"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <DemoBanner />
      <div className="relative z-10">
        {/* @ts-ignore */}
        <HeaderNavigation />
        <main>
        {children}
        </main>
        {/* @ts-ignore */}
        <FooterNavigation />
      </div>
    </div>
  )
}
