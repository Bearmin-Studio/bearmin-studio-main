import type { ServiceId } from './services';

export type Concern = {
  text: string;
  service: ServiceId;
};

export const CONCERNS: Concern[] = [
  { text: '毎月、同じ集計作業に時間を取られている', service: 'excel' },
  { text: '複雑になったExcelが担当者にしか分からない', service: 'excel' },
  { text: '自動化したい定例業務がある', service: 'rpa' },
  { text: '請求書・帳票作成に毎月追われている', service: 'rpa' },
  { text: 'データが複数のExcelやSaaSに散らばっている', service: 'system' },
  { text: '外部SaaSの月額費用が積み上がっている', service: 'system' },
];
