"use client"

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Blog() {
  const params = useParams()
  const t = useTranslations('blogPage.otherPosts')
  const locale = params.locale as string

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 第一篇文章 - 音频总结智能体是如何工作的 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card hover:bg-secondary/50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="border-primary text-primary">
                  {t('post1.category')}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {t('post1.date')}
                </span>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 cursor-pointer hover:text-primary line-clamp-2 text-foreground">
                  {t('post1.title')}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed mt-3 text-sm line-clamp-3">
                {t('post1.excerpt')}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* 第二篇文章 - ITSAI Agent提供哪些声音AI智能体 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card hover:bg-secondary/50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="border-primary text-primary">
                  {t('post2.category')}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {t('post2.date')}
                </span>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 cursor-pointer hover:text-primary line-clamp-2 text-foreground">
                  {t('post2.title')}
              </CardTitle>

              <CardDescription className="text-muted-foreground leading-relaxed mt-3 text-sm line-clamp-3">
                {t('post2.excerpt')}
              </CardDescription>
            </CardHeader>

          </Card>

          {/* 第三篇文章 - 什么是AI智能体 */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card hover:bg-secondary/50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="border-primary text-primary">
                  {t('post3.category')}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {t('post3.date')}
                </span>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 cursor-pointer hover:text-primary line-clamp-2 text-foreground">
                {t('post3.title')}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed mt-3 text-sm line-clamp-3">
                {t('post3.excerpt')}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
