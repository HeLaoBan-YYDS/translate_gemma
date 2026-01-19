"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useTranslations, useMessages } from 'next-intl'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  title: string
  content: string
  rating: number
  avatar: string
}

export function Testimonials() {
  const t = useTranslations('testimonials')
  const messages = useMessages()
  const [currentIndex, setCurrentIndex] = useState(0)

  // 从翻译文件读取评价数据
  const testimonials: Testimonial[] = Array.from({ length: 6 }, (_, i) => {
    // Access rating directly from messages object as it's a number, not a string
    const testimonialsMessages = messages.testimonials as any
    const ratingValue = testimonialsMessages?.items?.[i]?.rating ?? 5
    
    return {
      id: i + 1,
      name: t(`items.${i}.name`),
      title: t(`items.${i}.title`),
      content: t(`items.${i}.content`),
      rating: typeof ratingValue === 'number' ? ratingValue : 5,
      avatar: `/avatars/${i + 1}.jpg`
    };
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('title')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary/90 backdrop-blur-sm border-0 shadow-2xl ring-1 ring-cyber-500/50 cyber-glow-subtle">
            <CardContent className="p-12">
              {/* 星级评分 */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-primary fill-current"
                  />
                ))}
              </div>

              {/* 评价内容 */}
              <blockquote className="text-center mb-8">
                <p className="text-2xl text-foreground leading-relaxed font-medium">
                  "{currentTestimonial.content}"
                </p>
              </blockquote>

              {/* 用户信息 */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-cyber-500 to-cyber-600 cyber-glow">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-lg">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-primary font-medium">{currentTestimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 导航控件 */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-cyber-500/50 bg-secondary/50 hover:bg-secondary text-primary backdrop-blur-sm transition-all duration-300 cyber-glow-subtle"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* 指示器 */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125 cyber-glow'
                      : 'bg-secondary hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-cyber-500/50 bg-secondary/50 hover:bg-secondary text-primary backdrop-blur-sm transition-all duration-300 cyber-glow-subtle"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 