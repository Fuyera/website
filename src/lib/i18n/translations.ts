export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      products: 'PRODUCTS',
      company: 'COMPANY',
      vision: 'VISION',
      contact: 'CONTACT',
      businessModel: 'BUSINESS MODEL'
    },
    hero: {
      headlineLabel: 'DIGITAL WELLNESS × PERSONAL PRODUCTIVITY',
      titleLine1: 'ANCHOR YOUR',
      titleLine2: 'INTENTION.',
      description: 'AI-powered mobile applications and SaaS tools for individual users and SME clients worldwide. Distributing and monetizing through digital platforms.',
      primaryCta: 'VIEW PRODUCTS',
      secondaryCta: 'COMPANY PROFILE',
      stats: {
        registration: { label: 'REGISTRATION', value: 'HONG KONG SAR' },
        founded: { label: 'FOUNDED', value: 'MAR 2026' },
        delivery: { label: 'DELIVERY', value: 'DIGITAL NATIVE' }
      }
    },
    company: {
      sectionLabel: 'CORPORATE DOSSIER',
      title: 'Operating Entity',
      description: 'Fuyera Intelligence Limited acts as the international publishing and operational headquarters for our AI-powered product matrix, utilizing established AI service APIs (e.g., OpenAI, Anthropic) to deliver intelligent application-layer features.',
      infoRecords: {
        entity: { label: 'LEGAL ENTITY', value: 'Fuyera Intelligence Limited (孚烨纳智能科技有限公司)' },
        incorporation: { label: 'INCORPORATION', value: 'March 18, 2026' },
        crn: { label: 'CR NO.', value: '12345678' },
        brn: { label: 'BRN', value: 'C79987782' },
        address: { label: 'REG. ADDRESS', value: "19/F Asia Standard Tower, 59-65 Queen's Road Central, Hong Kong" }
      },
      founder: {
        label: 'FOUNDER PROFILE',
        name: 'FU YE (傅晔)',
        title: 'Sole Director & Shareholder',
        description: "Drawing upon years of senior management experience in listed medical device companies and proficiency in full-stack development, Mr. Fu established Fuyera to combine his product capabilities with AI. Approved under Hong Kong's Top Talent Pass Scheme (TTPS) in Sep 2025."
      }
    },
    products: {
      sectionLabel: 'PRODUCT ECOSYSTEM',
      title: 'Current Matrix',
      description: 'Our software distribution pipeline is categorized into three stages of resource allocation.',
      anchor: {
        status: 'PRIMARY PRODUCT',
        name: 'Fuyera Anchor',
        description: 'iOS native application designed to help users anchor their true intentions. Features voice interaction, 3-level reminder system, and iOS Live Activities.',
        details: [
          { label: 'STACK', value: 'SwiftUI + SwiftData (iOS 17+)' },
          { label: 'MODEL', value: 'Free + Lifetime Pro ($9.99)' },
          { label: 'TARGET', value: 'Freelancers & Knowledge Workers' }
        ]
      },
      claw: {
        status: 'PIPELINE B2B',
        name: 'FuyeClaw',
        description: 'AI-powered workflow automation, content processing, and intelligent assistance tools for SME clients seeking digital transformation.',
        details: [
          { label: 'STAGE', value: 'PROTOTYPING' },
          { label: 'MODEL', value: 'SaaS Subscription' }
        ]
      },
      pal: {
        status: 'FUTURE RESERVE',
        name: 'FuyePal',
        description: 'Long-term product reserve positioned as an AI-assisted learning tool for students and parents.',
        details: [
          { label: 'STAGE', value: 'RESEARCH' },
          { label: 'SECTOR', value: 'EdTech' }
        ]
      }
    },
    businessModel: {
      sectionLabel: 'OPERATIONAL STRUCTURE',
      title: 'Business Model',
      description: 'A pure digital operational model targeting global markets without physical retail dependency or cash transactions.',
      regions: 'Hong Kong, Asia-Pacific, North America, Europe',
      inflow: {
        title: 'REVENUE CHANNELS',
        items: [
          { name: 'App Store Subscriptions', desc: 'SaaS revenue via Apple platform settlement', value: 'USD/HKD' },
          { name: 'Enterprise SaaS', desc: 'B2B workflows and customized AI service integration', value: 'USD/HKD' }
        ]
      },
      outflow: {
        title: 'PROCUREMENT & SERVICES',
        items: [
          { name: 'AI API Services', desc: 'OpenAI, Anthropic token usage', value: 'USD' },
          { name: 'Cloud & Infrastructure', desc: 'AWS hosting, Cloudflare CDN', value: 'USD' },
          { name: 'Developer Programs', desc: 'Apple Developer Program annual fees', value: 'USD' },
          { name: 'R&D Outsourcing', desc: 'UI/UX design and external technical cooperation', value: 'HKD/CNY' }
        ]
      }
    },
    contact: {
      sectionLabel: 'COMMUNICATIONS MATRIX',
      title: 'Contact Information',
      description: 'For business inquiries, vendor negotiations, and media relations.',
      items: {
        email: { label: 'GENERAL INQUIRIES', value: 'hello@fuyera.com' },
        press: { label: 'PRESS & MEDIA', value: 'media@fuyera.com' },
        investor: { label: 'INVESTOR RELATIONS', value: 'ir@fuyera.com' },
        office: { label: 'HEADQUARTERS', value: "19/F Asia Standard Tower, 59-65 Queen's Road Central" }
      }
    },
    footer: {
      company: 'Fuyera Intelligence Limited',
      companyZh: '孚烨纳智能科技有限公司',
      tagline: 'AI-powered mobile applications and SaaS tools. Headquartered in Hong Kong.',
      legal: {
        title: 'LEGAL',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      copyright: '© 2026 Fuyera Intelligence Limited. Hong Kong.'
    }
  },
  zh: {
    nav: {
      products: '产品矩阵',
      company: '公司概况',
      vision: '愿景',
      contact: '联系我们',
      businessModel: '商业模式'
    },
    hero: {
      headlineLabel: '数字健康 × 个人效率',
      titleLine1: 'ANCHOR YOUR',
      titleLine2: 'INTENTION.',
      description: '面向全球个人用户及中小企业，提供以 AI 技术为核心的移动应用程序及 SaaS 工具。全球数字发行，全平台端到端智能服务。',
      primaryCta: '查看产品矩阵',
      secondaryCta: '调阅公司档案',
      stats: {
        registration: { label: '注册属地', value: '中国香港特别行政区' },
        founded: { label: '成立时间', value: '2026年3月' },
        delivery: { label: '交付模式', value: '100% 数字原生' }
      }
    },
    company: {
      sectionLabel: 'CORPORATE DOSSIER',
      title: '运营实体',
      description: 'Fuyera Intelligence Limited 作为 AI 产品矩阵的国际发行与运营总部使用。公司不涉及基础 AI 大模型训练，通过接入成熟国际 AI 接口 (OpenAI, Anthropic 等) 提供应用层产品体验。',
      infoRecords: {
        entity: { label: '公司主体', value: '孚烨纳智能科技有限公司 (Fuyera Intelligence Limited)' },
        incorporation: { label: '成立日期', value: '2026 年 3 月 18 日' },
        crn: { label: '公司编号', value: '12345678' },
        brn: { label: '商业登记证', value: 'C79987782' },
        address: { label: '注册地址', value: '香港中环皇后大道中 59-65 号泛海大厦 19 楼' }
      },
      founder: {
        label: 'FOUNDER PROFILE',
        name: '傅晔 (FU YE)',
        title: '唯一董事及股东',
        description: '拥有多年医疗器械上市公司高管经验，并精通全栈开发。于 2025 年 9 月获批香港“高端人才通行证计划”(TTPS) 来港。将深厚的行业积淀与前沿 AI 技术深度结合，在港建立独立运营实体 Fuyera。'
      }
    },
    products: {
      sectionLabel: 'PRODUCT ECOSYSTEM',
      title: '产品线与业务范围',
      description: '公司的产品研发节奏分为三级分类，面向不同的人群与业务发展阶段。',
      anchor: {
        status: '当前重点产品',
        name: 'Fuyera Anchor (意图锚定)',
        description: 'iOS 原生应用程序。旨在帮助用户每次拿起手机时锚定自己的真正意图，通过智能梯级提醒减少无意识刷屏行为。',
        details: [
          { label: '技术栈', value: 'SwiftUI + SwiftData (iOS 17+)' },
          { label: '商业模式', value: '免费 + 终身买断 ¥68' },
          { label: '目标客群', value: '自由职业者 / 创作者 / 备考学生' }
        ]
      },
      claw: {
        status: '储备 B端产品',
        name: 'FuyeClaw',
        description: '面向中小企业提供 AI 驱动的工作流自动化、内容处理及智能辅助工具，助力企业数字化转型。',
        details: [
          { label: '当前阶段', value: '原型设计与场景打磨' },
          { label: '商业模式', value: '企业 SaaS 订阅' }
        ]
      },
      pal: {
        status: '远期储备产品',
        name: 'FuyePal',
        description: '定位为 AI 学习辅助产品，主要服务学生与家长群体。将围绕学科拓展与陪伴辅导探索。',
        details: [
          { label: '当前阶段', value: '需求预研' },
          { label: '核心领域', value: '教育科技 (EdTech)' }
        ]
      }
    },
    businessModel: {
      sectionLabel: 'OPERATIONAL STRUCTURE',
      title: '商业模式',
      description: '全数字原生商业实体，目标市场涵盖香港、亚太、北美及欧洲市场。不涉及实体零售、面对面收款或现金中转。',
      regions: '亚太地区、北美、欧洲',
      inflow: {
        title: 'REVENUE CHANNELS (经常性收入)',
        items: [
          { name: 'App Store 全球结算', desc: '向终端用户提供应用层价值，由数字分发平台结算', value: 'USD/HKD' },
          { name: '企业级 SaaS 标准订阅', desc: 'B2B 工作流及企业化 AI 辅助模块接入费', value: 'USD/HKD' }
        ]
      },
      outflow: {
        title: 'PROCUREMENT (运营及采购支出)',
        items: [
          { name: '国际 AI API 调用费', desc: 'OpenAI, Anthropic 接口开销', value: 'USD' },
          { name: '云主机及骨干网络', desc: 'AWS 国际服计算资源，Cloudflare 流量分发', value: 'USD' },
          { name: '系统级开发许可', desc: 'Apple Developer Program 年费等', value: 'USD' },
          { name: '外部技术发包与协作', desc: 'UI/UX 设计、第三方模块独立开发外包', value: 'HKD/CNY' }
        ]
      }
    },
    contact: {
      sectionLabel: 'COMMUNICATIONS MATRIX',
      title: '商务与联络',
      description: '面向供应商接入、企业采购及媒体公关问询的全球联络矩阵。',
      items: {
        email: { label: '常规业务咨询', value: 'hello@fuyera.com' },
        press: { label: '公关与媒介', value: 'media@fuyera.com' },
        investor: { label: '投资者关系', value: 'ir@fuyera.com' },
        office: { label: '香港总部', value: '香港中环皇后大道中 59-65 号泛海大厦 19 楼' }
      }
    },
    footer: {
      company: '孚烨纳智能科技有限公司',
      companyZh: 'Fuyera Intelligence Limited',
      tagline: '面向全球发行的 AI 移动应用及 SaaS 开发商。香港属地运营。',
      legal: {
        title: 'LEGAL',
        privacy: '隐私政策 (Privacy Policy)',
        terms: '服务条款 (Terms of Service)'
      },
      copyright: '© 2026 Fuyera Intelligence Limited. Hong Kong.'
    }
  }
};
