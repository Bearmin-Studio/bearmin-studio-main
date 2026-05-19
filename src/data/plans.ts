export type PlanId = 'light' | 'standard' | 'premium';

export type PlanFeatureValue = boolean | string;

export type PlanFeature = {
  label: string;
  values: Record<PlanId, PlanFeatureValue>;
};

export type Plan = {
  id: PlanId;
  name: string;
  fee: number;
  feeLabel: string;
  tagline: string;
  description: string;
  audience: string;
  audienceDetail: string[];
  recommended: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'light',
    name: 'ライトプラン',
    fee: 29800,
    feeLabel: '29,800円',
    tagline: '小さく始めたい方へ',
    description:
      '毎月1件まで、Excel・スプレッドシート作業の改善や小さな業務システムを制作します。まずは身近な手作業をひとつ減らしたい方におすすめです。',
    audience: '個人事業主・小さく始めたい方',
    audienceDetail: [
      'まずは試してみたい',
      'Excelやスプレッドシート作業を少しラクにしたい',
      '毎月1つずつ改善できれば十分',
      '個人事業主・ひとり事業者',
      '小さな作業時間の削減から始めたい',
    ],
    recommended: false,
  },
  {
    id: 'standard',
    name: 'スタンダードプラン',
    fee: 59800,
    feeLabel: '59,800円',
    tagline: '継続的に業務改善を進めたい方へ',
    description:
      '毎月3件まで制作でき、月1回の改善相談も含まれます。Excel自動化に加え、RPA導入や小さな業務システム構築も相談しながら進められます。',
    audience: '小規模事業者・少人数チーム',
    audienceDetail: [
      '毎月の定型作業が多い',
      '転記・集計・確認作業を減らしたい',
      '業務を継続的に仕組み化したい',
      '小規模事業者・少人数チーム',
      '作業時間や人件費の削減につなげたい',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'プレミアムプラン',
    fee: 88000,
    feeLabel: '88,000円',
    tagline: '複数業務をまとめて改善したい方へ',
    description:
      '毎月5件まで制作でき、月2回の改善相談も含まれます。複数のExcel改善、RPA導入、業務システム構築を組み合わせて、本格的に業務自動化を進めたい方向け。',
    audience: '複数人で業務を回す事業者',
    audienceDetail: [
      '複数の手作業をまとめて減らしたい',
      'RPAや業務システムも使いたい',
      'Excel管理に限界を感じている',
      '複数人で業務を回している',
      '社内にIT担当がいない',
      '人を増やす前に業務を効率化したい',
    ],
    recommended: false,
  },
];

export const PLAN_FEATURES: PlanFeature[] = [
  {
    label: 'Excel/スプレッドシート作業自動化',
    values: { light: true, standard: true, premium: true },
  },
  {
    label: '業務システム構築',
    values: { light: true, standard: true, premium: true },
  },
  {
    label: 'RPA導入',
    values: { light: false, standard: true, premium: true },
  },
  {
    label: '制作件数（月）',
    values: { light: '1件まで', standard: '3件まで', premium: '5件まで' },
  },
  {
    label: '制作物の保守',
    values: { light: true, standard: true, premium: true },
  },
  {
    label: '毎月の改善相談',
    values: { light: false, standard: '月1回', premium: '月2回' },
  },
];

export const PLAN_NOTES = [
  '最低契約期間は3ヶ月（4ヶ月目以降も3ヶ月単位で継続・解約可）',
  '締め日：月末締め／支払日：翌月末日（銀行振込）',
  '未使用分の翌月への繰り越しはありません',
  '外部ツール・サービスの利用料、大規模システム開発は月額に含まれません',
];
