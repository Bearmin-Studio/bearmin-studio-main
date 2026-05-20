export type ResultCategory = 'excel' | 'rpa' | 'system';

export type ResultRow = {
  category: ResultCategory;
  categoryLabel: string;
  title: string;
  effect: string;
  effectDetail?: string;
};

export const RESULTS: ResultRow[] = [
  {
    category: 'excel',
    categoryLabel: 'Excel / GAS',
    title: '月次レポート作成の自動化',
    effect: '月 15時間削減',
    effectDetail: '転記と集計が自動化され、確認のみで完了',
  },
  {
    category: 'excel',
    categoryLabel: 'Excel',
    title: '売上管理表の集計・転記',
    effect: '月 8時間削減',
    effectDetail: '入力後、自動で各シートに反映',
  },
  {
    category: 'rpa',
    categoryLabel: 'RPA導入',
    title: '毎朝のデータ収集',
    effect: '月 20時間削減',
    effectDetail: '出社前に必要なデータが揃っている状態に',
  },
  {
    category: 'rpa',
    categoryLabel: 'RPA導入',
    title: '請求書・帳票作成の補助',
    effect: '月 10時間削減',
    effectDetail: '手作業のミスもほぼゼロに',
  },
  {
    category: 'system',
    categoryLabel: '業務システム',
    title: '顧客・案件管理システム',
    effect: '検索 1分以内',
    effectDetail: '必要な情報に素早く到達',
  },
  {
    category: 'system',
    categoryLabel: '業務システム',
    title: '予約・問い合わせ管理',
    effect: '対応工数 50%削減',
    effectDetail: '通知と一覧で抜け漏れを防止',
  },
];

export const RESULT_SUMMARY = {
  totalReduction: '月10〜30時間',
  description:
    '業務内容や規模により効果は異なりますが、月10〜30時間の作業時間削減につながるケースが多く、人件費・外注費の削減にも直結します。',
};
