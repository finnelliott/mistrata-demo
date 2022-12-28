import DemoBanner from "../../components/DemoBanner"
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"

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
