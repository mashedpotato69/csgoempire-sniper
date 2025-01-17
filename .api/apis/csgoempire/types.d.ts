import type { FromSchema } from "json-schema-to-ts";
import * as schemas from "./schemas";
export type GetActiveAuctionsResponse200 = FromSchema<
  (typeof schemas.GetActiveAuctions.response)["200"]
>;
export type GetActiveAuctionsResponse400 = FromSchema<
  (typeof schemas.GetActiveAuctions.response)["400"]
>;
export type GetActiveAuctionsResponse429 = FromSchema<
  (typeof schemas.GetActiveAuctions.response)["429"]
>;
export type GetActiveTradesResponse200 = FromSchema<
  (typeof schemas.GetActiveTrades.response)["200"]
>;
export type GetActiveTradesResponse400 = FromSchema<
  (typeof schemas.GetActiveTrades.response)["400"]
>;
export type GetActiveTradesResponse429 = FromSchema<
  (typeof schemas.GetActiveTrades.response)["429"]
>;
export type MetadataResponse200 = FromSchema<
  (typeof schemas.Metadata.response)["200"]
>;
export type MetadataResponse400 = FromSchema<
  (typeof schemas.Metadata.response)["400"]
>;
export type MetadataResponse429 = FromSchema<
  (typeof schemas.Metadata.response)["429"]
>;
export type SettingsBodyParam = FromSchema<typeof schemas.Settings.body>;
export type SettingsResponse200 = FromSchema<
  (typeof schemas.Settings.response)["200"]
>;
export type SettingsResponse400 = FromSchema<
  (typeof schemas.Settings.response)["400"]
>;
export type SettingsResponse429 = FromSchema<
  (typeof schemas.Settings.response)["429"]
>;
export type TransactionHistoryMetadataParam = FromSchema<
  typeof schemas.TransactionHistory.metadata
>;
export type TransactionHistoryResponse200 = FromSchema<
  (typeof schemas.TransactionHistory.response)["200"]
>;
export type TransactionHistoryResponse400 = FromSchema<
  (typeof schemas.TransactionHistory.response)["400"]
>;
export type TransactionHistoryResponse429 = FromSchema<
  (typeof schemas.TransactionHistory.response)["429"]
>;
