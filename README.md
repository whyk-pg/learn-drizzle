# Learn Drizzle feat. TiDB Serverless
<!-- ![Status: ToDo](https://flat.badgen.net/static/Status/ToDo/red) -->
<!-- ![Status: In Progress](https://flat.badgen.net/static/Status/In%20Progress/yellow) -->
<!-- ![Status: Done](https://flat.badgen.net/static/Status/Done/green) -->
![Status: Deprecated](https://flat.badgen.net/static/Status/Deprecated/black)

## 本リポジトリの目的
TiDB ServerlessとDrizzleツール群を利用して、DB周りを楽したい  
→ 新しいスキーマを部分的に適用してみたところ、1年前以上前から続く`drizzle-kit generate`のバグを踏んで進行不可になったため断念  
https://github.com/drizzle-team/drizzle-kit-mirror/issues/67

## 本リポジトリの達成目標
- [x] シネログのスキーマを移植し、Drizzle Kitで移行ファイルを生成
- [x] Seedデータの反映スクリプトを作成
- [ ] HonoでREST APIを構築し、CRUDを構築
- [ ] シネログの新しいスキーマを反映し、Drizzle Kitで移行ファイルを生成
- [ ] Drizzle QueriesでCRUDを再構築

## 参考資料
- [cinelog/db at main · windchime-yk/cinelog](https://github.com/windchime-yk/cinelog/tree/main/db)
- [Drizzle ORM - Overview](https://orm.drizzle.team/docs/kit-overview)
- [Drizzle ORM - Data seeding](https://orm.drizzle.team/docs/kit-seed-data)
- [Drizzleで初期データ (seed) をDBに投入する方法](https://zenn.dev/steg/articles/77204b889814d1)
- [Drizzle ORM - TiDB](https://orm.drizzle.team/docs/connect-tidb)
- [Drizzle ORM - Select](https://orm.drizzle.team/docs/select)
- [Drizzle ORM - Query](https://orm.drizzle.team/docs/rqb)
