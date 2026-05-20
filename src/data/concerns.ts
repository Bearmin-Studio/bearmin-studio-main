import type { ServiceId } from './services';

export type Concern = {
  text: string;
  service: ServiceId;
};

export const CONCERNS: Concern[] = [
  { text: '毎月の集計・レポート作成に、毎回半日〜1日かかっている', service: 'excel' },
  { text: '業務の負担を減らしたい', service: 'excel' },
  { text: 'データがExcelやSaaSに散らばり、必要な情報を探すのに時間がかかる', service: 'system' },
  { text: 'SaaSに、毎月の費用が積み上がっている', service: 'system' },
  { text: '毎日・毎月、同じPC操作をくり返す業務がある', service: 'rpa' },
  { text: '人を増やす余裕はないが、業務量は増え続けている', service: 'rpa' },
];
