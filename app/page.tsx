import Banner from "@/components/banner"
import CompanySection from "@/components/company-section"
import ContactForm from "@/components/contact-form"
import FeaturedProducts from "@/components/featured-products"
import DistributorsMap from "@/components/distributors-map"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carwo - Algo",
  description:
    "Comercializamos una amplia variedad de productos para satisfacer sus necesidades en cuanto a generación y almacenamiento de energía se refiere.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <CompanySection />
      <FeaturedProducts />
      <DistributorsMap />
      <ContactForm />
    </main>
  )
}

