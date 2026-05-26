export const SITE = {
  name: 'Bearmin Studio',
  nameJa: 'ベアミンスタジオ',
  tagline: "I'LL BE YOUR ARMS",
  catchMain: '業務の自動化なら、お任せください！',
  catchSub: 'Bearmin Studio｜業務効率化',
  description:
    'Excel・スプレッドシート作業の自動化、業務システム構築、RPA導入を月額制で。月額29,800円から、毎月決まった件数まで業務改善ツールを制作・保守します。',
  url: 'https://bearmin.jp',
  locale: 'ja_JP',
  ogImage: '/og/og-default.png', // 1200x630推奨。未配置の場合 ogImageFallback を BaseLayout 側で参照
  ogImageFallback: '/icon-512.png',
} as const;

export const COMPANY = {
  name: 'Bearmin Studio',
  nameJa: 'ベアミンスタジオ',
  owner: '寺崎充来',
  address: '愛知県名古屋市千種区今池5-33-2',
  email: 'contact@bearmin.jp',
  chatworkUrl: 'https://www.chatwork.com/bearmin',
  chatworkId: '@bearmin',
  xUrl: 'https://x.com/bearmin_studio',
  xHandle: '@bearmin_studio',
  phoneNotice: '電話番号は請求があり次第、遅滞なく開示します',
  business: '業務効率化システム構築の月額制サービス',
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'サービス詳細', href: '/services' },
  { label: 'よくあるご質問', href: '/faq' },
  { label: '事業概要', href: '/about' },
  { label: 'お知らせ', href: '/news' },
] as const;

export const CTA_LINK: NavLink = { label: 'お問い合わせ', href: '/contact' };

export const FOOTER_LINKS: readonly NavLink[] = [
  ...NAV_LINKS,
  CTA_LINK,
] as const;
