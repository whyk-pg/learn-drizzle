import {
  boolean,
  datetime,
  int,
  mysqlTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const moviesTable = mysqlTable("movies", {
  /** ID */
  id: serial("id").autoincrement().primaryKey().unique(),
  /** 作品タイトル */
  title: varchar("title", { length: 246 }).notNull(),
  /** 字幕版かどうか */
  isSubtitles: boolean("is_subtitles").notNull(),
  /** 上映劇場ID */
  theaterId: int("theater_id").notNull(),
  /** 上映開始日時 */
  viewStartDatetime: datetime("view_start_datetime", {
    mode: "string",
  }).notNull(),
  /** 上映終了日時 */
  viewEndDatetime: datetime("view_end_datetime", {
    mode: "string",
  }).notNull(),
  /** 制作者所属国ID */
  creatersCountryId: int("creaters_country_id").notNull(),
  /** 作品形式ID */
  movieFormatId: int("movie_format_id").notNull(),
  /** 上映形式ID */
  screeningFormatId: int("screening_format_id").notNull(),
  /** 5段階評価 */
  rating: int("rating"),
  /** 同行者数 */
  companionsCount: int("companions_count"),
  /** コメント */
  comment: text("comment"),
});

export const theatersTable = mysqlTable("theaters", {
  /** ID */
  id: serial("id").autoincrement().primaryKey().unique(),
  /** 上映館 */
  name: varchar("name", { length: 100 }).notNull().unique(),
});
