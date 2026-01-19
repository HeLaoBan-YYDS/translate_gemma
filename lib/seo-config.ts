export const seoConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
  siteName: 'TranslateGemma',
  defaultLocale: 'zh',
  locales: ['zh', 'en'],

  // 默认SEO设置
  defaultSEO: {
    zh: {
      title: 'TranslateGemma - 不仅是翻译，更是语境的重塑 | 谷歌开源AI翻译模型',
      description: '不再忍受"机翻味"。利用谷歌 TranslateGemma，在任何设备上实现母语级的语境翻译。基于最新的 Gemma 3 架构，支持55+语言，提供4B/12B/27B多模型版本，支持离线运行和云端部署。',
      keywords: 'TranslateGemma,TranslateGemma 翻译,TranslateGemma 开源翻译模型,Gemma 3 翻译,谷歌开源翻译模型,离线翻译,AI翻译,开源翻译模型,多语言翻译,私有化部署,Gemma 3,机器翻译,神经机器翻译,多模态翻译,拍照翻译,语境翻译,母语级翻译',
    },
    en: {
      title: 'TranslateGemma - Open Source AI Translation by Google DeepMind',
      description: 'TranslateGemma is Google DeepMind\'s latest open-source translation model released in January 2026, supporting 55 languages, 500+ language pairs, offline usage and private deployment.',
      keywords: 'translategemma,AI translation,open source translation,offline translation,Google DeepMind,multi-language translation,private deployment,Gemma 3,machine translation,neural machine translation,multimodal translation',
    }
  },

  // 页面特定SEO设置
  pages: {
    blog: {
      zh: {
        title: 'TranslateGemma 博客 - AI翻译技术分享与最佳实践',
        description: '探索 TranslateGemma 的最新翻译技术动态和最佳实践，深入了解 Gemma 3 架构、多模态翻译、离线部署、语境理解等AI翻译核心技术。',
        keywords: 'TranslateGemma 博客,AI翻译技术,Gemma 3 架构,多模态翻译,离线翻译,语境翻译,机器翻译技术,开源翻译模型,翻译技术分享',
      },
      en: {
        title: 'Get SaaS Blog - SaaS Development Insights & Best Practices',
        description: 'Explore the latest SaaS development trends and best practices, learn about Next.js, user authentication, payment integration, multi-language support and other core technologies for SaaS product development.',
        keywords: 'SaaS Development Blog,Next.js Technology,User Authentication,Payment Integration,Multi-language Support,SaaS Architecture,Frontend Development,Full-stack Development,TypeScript,Tailwind CSS',
      }
    },
    terms: {
      zh: {
        title: '服务条款 - TranslateGemma',
        description: '查看 TranslateGemma AI翻译服务的使用条款，了解服务使用规则、许可协议和用户权利责任。',
        keywords: 'TranslateGemma 服务条款,使用协议,用户协议,AI翻译服务条款,翻译服务规则,开源翻译模型协议',
      },
      en: {
        title: 'Terms of Service - ITSAI Agent',
        description: 'View ITSAI Agent\'s Terms of Service for voice AI agent services, understanding usage rules, user rights and responsibilities for audio recognition, voice generation and other services.',
        keywords: 'Terms of Service,User Agreement,Service Agreement,Voice AI Service Terms,Audio Processing Service Rules,Agent Service Agreement',
      }
    },
    privacy: {
      zh: {
        title: '隐私政策 - TranslateGemma',
        description: '了解 TranslateGemma 如何处理用户数据和隐私保护，确保您的翻译内容安全。',
        keywords: 'TranslateGemma 隐私政策,数据保护,个人信息,翻译数据安全,隐私权,本地离线翻译,数据隐私',
      },
      en: {
        title: 'Privacy Policy - ITSAI Agent',
        description: 'Learn how ITSAI Agent collects, uses and protects your audio data and personal information to safeguard your privacy rights.',
        keywords: 'Privacy Policy,Data Protection,Personal Information,Audio Data Security,Privacy Rights,Voice Data Protection',
      }
    },
    cookies: {
      zh: {
        title: 'Cookie政策 - TranslateGemma',
        description: '了解 TranslateGemma 如何使用Cookie和相关技术来优化用户体验和网站性能。',
        keywords: 'TranslateGemma Cookie政策,网站Cookie,用户体验,数据收集,翻译服务优化,网站分析',
      },
      en: {
        title: 'Cookie Policy - ITSAI Agent',
        description: 'Learn how ITSAI Agent uses cookies and related technologies to optimize voice AI agent service experience.',
        keywords: 'Cookie Policy,Website Cookies,User Experience,Data Collection,Voice AI Service Optimization,Website Analytics',
      }
    },

    'what-is-saas': {
      zh: {
        title: 'TranslateGemma 可以应用在哪些场景？ - 翻译应用场景详解',
        description: '深入了解 TranslateGemma 的应用场景，从个人日常翻译到企业跨境沟通，再到小语种文化交流的完整解决方案。',
        keywords: 'TranslateGemma 应用场景,翻译场景,个人翻译,企业翻译,跨境沟通,小语种翻译,多语言沟通,翻译解决方案',
      },
      en: {
        title: 'What is SaaS? - SaaS Definition, Business Model and Technical Architecture Explained',
        description: 'Understand the definition, business model, and technical architecture of SaaS, and how to rapidly build modern SaaS products. From subscription models to cloud-native architecture, providing complete SaaS development guide.',
        keywords: 'SaaS,Software as a Service,SaaS Definition,SaaS Business Model,SaaS Architecture,Cloud Computing,Subscription Model,Multi-tenant Architecture,SaaS Development,Modern SaaS,Cloud Native,Enterprise Software',
      }
    },
    'saas-website-examples': {
      zh: {
        title: 'TranslateGemma 可以应用在哪些场景？ - 翻译应用场景和案例详解',
        description: '深入了解 TranslateGemma 的应用场景，从个人日常翻译到企业跨境沟通，再到小语种文化交流的完整解决方案。探索 TranslateGemma 在不同行业的实际应用案例。',
        keywords: 'TranslateGemma 应用场景,翻译场景,个人翻译,企业翻译,跨境沟通,小语种翻译,多语言沟通,翻译解决方案,翻译案例',
      },
      en: {
        title: 'What Websites Can Get SaaS Build? - SaaS Template Use Cases and Examples',
        description: 'Understand Get SaaS template application scenarios, from e-commerce platforms to enterprise management systems, to online education platforms. Explore real-world SaaS template use cases across different industries.',
        keywords: 'SaaS Template,SaaS Use Cases,E-commerce Platform,Enterprise Management System,Online Education Platform,Project Management Tool,CRM System,ERP System,SaaS Website Examples,SaaS Development,Get SaaS',
      }
    },
    'saas-features': {
      zh: {
        title: 'TranslateGemma 有什么核心功能？ - 翻译模型核心功能和技术特性详解',
        description: '深入了解 TranslateGemma 提供的核心功能：场景化模式注入、本地隐私优先、两阶段微调增强、多模态理解等完整解决方案。探索 TranslateGemma 的技术架构和最佳实践。',
        keywords: 'TranslateGemma 功能,场景化翻译,本地隐私优先,两阶段微调,多模态翻译,Gemma 3 架构,离线翻译,语境翻译,翻译技术特性',
      },
      en: {
        title: 'What Features Does Get SaaS Have? - SaaS Template Core Features and Technical Specifications',
        description: 'Explore the core features provided by Get SaaS template: user authentication, payment systems, multi-language support, SEO optimization and more. Discover modern SaaS development technology stack and best practices.',
        keywords: 'SaaS Template Features,User Authentication System,Stripe Payment Integration,Multi-language Internationalization,SEO Optimization,Next.js,TypeScript,PostgreSQL,SaaS Development,Modern Tech Stack,Get SaaS',
      }
    }
  },

  // 社交媒体设置
  social: {
    twitter: '@zyailive',
    email: 'app@itusi.cn',
    wechat: 'zyailive01',
  },

  // 验证码设置
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    bing: process.env.BING_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    baidu: process.env.BAIDU_SITE_VERIFICATION,
  },

  // 分析工具设置
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID,
    baiduAnalytics: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID,
  },

  // 图片设置
  images: {
    logo: '/logo.png',
    ogImage: '/logo.png',
    favicon: '/favicon.ico',
  },

  // 结构化数据设置
  organization: {
    name: 'TranslateGemma',
    foundingDate: '2025',
    industry: 'AI Translation',
    numberOfEmployees: '1-10',
    contactEmail: 'app@itusi.cn',
    url: 'https://getsaaspro.com',
    description: 'TranslateGemma 是 Google 基于 Gemma 3 架构开发的开源翻译模型，支持 55+ 语言，提供离线运行和云端部署，实现母语级的语境翻译。',
    keywords: ['TranslateGemma', 'AI Translation', 'Gemma 3', 'Open Source Translation', 'Multi-language Translation', 'Offline Translation'],
    sameAs: [
      'https://github.com/ItusiAI',
      'https://twitter.com/zyailive'
    ]
  }
}

// 获取页面SEO配置的辅助函数
export function getPageSEO(page: string, locale: string) {
  const pageSEO = seoConfig.pages[page as keyof typeof seoConfig.pages]
  const defaultSEO = seoConfig.defaultSEO[locale as keyof typeof seoConfig.defaultSEO]

  if (pageSEO && pageSEO[locale as keyof typeof pageSEO]) {
    return pageSEO[locale as keyof typeof pageSEO]
  }

  return defaultSEO
}

// 生成完整URL的辅助函数
export function getFullUrl(path: string, locale?: string) {
  const localePrefix = locale ? `/${locale}` : ''
  return `${seoConfig.baseUrl}${localePrefix}${path}`
}

// 生成多语言链接的辅助函数
export function getAlternateLinks(path: string) {
  return seoConfig.locales.reduce((acc, locale) => {
    acc[locale] = getFullUrl(path, locale)
    return acc
  }, {} as Record<string, string>)
}
