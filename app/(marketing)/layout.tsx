import DemoBanner from "../../components/blocks/DemoBanner"
import Footer from "../../components/globals/Footer"
import Navigation from "../../components/globals/Navigation"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <DemoBanner />
      <div className="relative z-10">
        <Navigation />
        <main>
        {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
