import type { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';

export type NewsCategory = 'notice' | 'release' | 'media' | 'other';

export const NEWS_CATEGORY_LABEL: Record<NewsCategory, string> = {
  notice: 'お知らせ',
  release: 'リリース',
  media: 'メディア',
  other: 'その他',
};

export type NewsItem = {
  title: string;
  category: NewsCategory;
  body: string;
  excerpt?: string;
} & MicroCMSContentId &
  MicroCMSDate;
