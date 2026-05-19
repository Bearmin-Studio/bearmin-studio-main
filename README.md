# Bearmin Studio

Excel・スプレッドシート作業の自動化／RPA／業務システム構築の月額制サービス、
Bearmin Studio のコーポレートサイト。

- 本番: https://bearmin.jp（Vercel）
- スタック: Astro 6 + TypeScript (strict) + TailwindCSS v4 + microCMS + SSGForm

## セットアップ

```sh
# Node.js 22.12+ / pnpm 10+ を前提
pnpm install
cp .env.example .env.local   # 値は管理者から受領
pnpm dev                     # http://localhost:4321
```

## 環境変数

`.env.local` に以下を設定。コミット対象は `.env.example` のみ。

| 変数 | 用途 | 公開可否 |
|---|---|---|
| `PUBLIC_MICROCMS_SERVICE_DOMAIN` | microCMS サブドメイン | クライアント可 |
| `MICROCMS_API_KEY` | microCMS API キー | サーバーのみ |
| `PUBLIC_SSGFORM_ENDPOINT` | SSGForm のフォーム送信先URL | クライアント可 |

## ディレクトリ構成

```text
src/
├── assets/                # ロゴ・キャラクター画像（astro:assets で最適化）
├── components/
│   ├── layout/            # Header / Footer
│   ├── sections/          # トップで使うセクション単位の部品
│   └── ui/                # Container / Section / Button / Card / 等の汎用部品
├── content/               # （将来 content collections 追加用）
├── data/                  # ページに流すコンテンツ（services / plans / faqs 等）
├── layouts/               # BaseLayout（SEO meta / OGP / 構造化データ）
├── lib/                   # site 定数・microCMS クライアント
├── pages/                 # ルーティング（services / cases / faq / about / contact / news）
├── styles/global.css      # Tailwind v4 @theme トークン
├── types/                 # 型定義
└── env.d.ts               # env 型補強
```

## コマンド

| Command | Action |
|---|---|
| `pnpm dev` | 開発サーバー起動（localhost:4321）|
| `pnpm build` | 本番ビルド（dist/）|
| `pnpm preview` | ビルド成果物のローカルプレビュー |
| `pnpm check` | TypeScript / Astro の型チェック |

## microCMS スキーマ（お知らせ）

`news` エンドポイントに、以下のフィールドを推奨：

| API ID | 種類 | 内容 |
|---|---|---|
| `title` | テキスト | お知らせタイトル |
| `category` | セレクト | `notice` / `release` / `media` / `other` |
| `body` | リッチエディタ | 本文（HTML） |
| `excerpt` | テキスト（任意） | 概要 |

公開日は microCMS の `publishedAt` を使用します。

## 既知のTODO

- OGP画像 `public/og/og-default.png`（1200×630）の用意（未着手・暫定で `icon-512.png` をフォールバック）
- アクセントカラー（ベージュゴールド #d4a574）の再導入判断
