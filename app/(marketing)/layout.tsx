import DemoBanner from "../../components/blocks/DemoBanner"
import Footer from "../../components/globals/Footer"
import Navigation from "../../components/globals/Navigation"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <DemoBanner />
    <Navigation />
    <main>
    {children}
    </main>
    <Footer />
    </>
  )
}
