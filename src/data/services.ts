import type { MascotPose } from '../types/mascot';

export type ServiceId = 'excel' | 'rpa' | 'system';

export type Service = {
  id: ServiceId;
  index: string;
  category: string;
  title: string;
  description: string;
  examples: string[];
  concerns: string[];
  mascot: MascotPose;
  href: string;
};

export const SERVICES: Service[] = [
  {
    id: 'excel',
    index: '01',
    category: 'Excel / Googleスプレッドシート',
    title: 'Excel・スプレッドシート作業の<wbr />自動化',
    description:
      '日々使っている Excel や Google スプレッドシートを、より使いやすく・効率的に整えます。関数・マクロ・GAS を使った自動化で、繰り返し作業から解放されます。',
    examples: [
      '売上管理表の作成・改善',
      '顧客管理表の作成',
      '問い合わせ管理表の作成',
      'CSVデータの整理',
      '月次レポートの自動作成',
      '関数・マクロ・GASによる自動化',
      '入力ミスを減らす仕組みづくり',
      '集計・グラフ・ダッシュボード作成',
    ],
    concerns: [
      '毎月同じ集計作業をしている',
      'コピペや転記作業が多い',
      '管理表が複雑になっている',
      '入力ミスや確認漏れがある',
      '担当者しか分からないExcelになっている',
      '手作業に時間や人件費がかかっている',
    ],
    mascot: 'laptop',
    href: '/services#excel',
  },
  {
    id: 'system',
    index: '02',
    category: '業務システム構築',
    title: '業務システム構築',
    description:
      'Excel やスプレッドシート管理に限界がある業務を、専用の管理システムや業務アプリとして整えます。<br />自社業務へのフィット、SaaS費用の削減、属人化からの脱却につながります。',
    examples: [
      '顧客管理システム',
      '案件管理システム',
      '問い合わせ管理システム',
      '予約管理',
      '在庫管理',
      'タスク管理',
      '売上管理',
      '業務ダッシュボード',
      'フォーム・通知・一覧機能の作成',
    ],
    concerns: [
      '自社に最適な業務システムを構築したい',
      'Excel/スプレッドシートの機能に限界を感じている',
      '外部の月額サービスにお金をかけている',
    ],
    mascot: 'wave',
    href: '/services#system',
  },
  {
    id: 'rpa',
    index: '03',
    category: 'RPA導入',
    title: 'RPA導入・<wbr />PC作業の自動化',
    description:
      '人がパソコン上で行う作業を、自動で実行できる仕組みにします。<br />毎朝・毎月の決まった作業に時間を取られている方におすすめです。',
    examples: [
      'Webサイトからの情報取得',
      '管理画面への入力作業',
      'Excelからシステムへの転記',
      'ファイルのダウンロード・整理',
      '定型メール送信',
      '請求書・帳票作成の補助',
      '毎日・毎月の定型作業の自動化',
    ],
    concerns: [
      '同じ画面操作を何度もしている',
      '毎朝・毎月の決まった作業に時間がかかる',
      '人がやらなくてもよさそうな作業が残っている',
      '人を増やす前に、自動化できる作業を見直したい',
    ],
    mascot: 'thumbsup',
    href: '/services#rpa',
  },
];
