"use client"

import { useEffect } from "react"

import { Navbar } from "@/components/navbar"
import { TranslateTool } from "@/components/translate-tool"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"

export default function ChinesePage() {
  useEffect(() => {
    // 处理URL中的锚点
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      // 延迟滚动，确保页面完全加载
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <PageBackground>

      <Navbar />
      <main>
        {/* 翻译工具 - 放在首页最顶部 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <TranslateTool />
        </div>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <Testimonials />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </PageBackground>
  )
}
