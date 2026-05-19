import { createClient, type MicroCMSListResponse } from 'microcms-js-sdk';
import type { NewsItem } from '../types/news';

const serviceDomain = import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

const hasCredentials = Boolean(serviceDomain && apiKey);

const client = hasCredentials
  ? createClient({ serviceDomain, apiKey })
  : null;

const emptyList = (limit = 0): MicroCMSListResponse<NewsItem> => ({
  contents: [],
  totalCount: 0,
  offset: 0,
  limit,
});

export async function fetchNewsList(params?: {
  limit?: number;
  offset?: number;
}): Promise<MicroCMSListResponse<NewsItem>> {
  if (!client) return emptyList(params?.limit ?? 0);
  try {
    return await client.getList<NewsItem>({
      endpoint: 'news',
      queries: {
        limit: params?.limit ?? 12,
        offset: params?.offset ?? 0,
        orders: '-publishedAt',
      },
    });
  } catch (err) {
    console.warn('[microcms] fetchNewsList failed, falling back to empty list:', err);
    return emptyList(params?.limit ?? 0);
  }
}

export async function fetchNewsItem(contentId: string): Promise<NewsItem | null> {
  if (!client) return null;
  try {
    return await client.get<NewsItem>({
      endpoint: 'news',
      contentId,
    });
  } catch {
    return null;
  }
}

export async function fetchAllNewsIds(): Promise<string[]> {
  if (!client) return [];
  try {
    const data = await client.getList<NewsItem>({
      endpoint: 'news',
      queries: { fields: 'id', limit: 100 },
    });
    return data.contents.map((c) => c.id);
  } catch (err) {
    console.warn('[microcms] fetchAllNewsIds failed, returning empty path list:', err);
    return [];
  }
}

export const microcmsAvailable = hasCredentials;
