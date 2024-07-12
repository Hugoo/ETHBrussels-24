export interface BlockscoutTransactionApiResponseMain {
  next_page_params: BlockscoutNextPageParams;
  items: BlockscoutTransactionApiResponse[];
}

export interface BlockscoutNextPageParams {
  block_number: number;
  index: number;
  items_count: number;
}

export interface BlockscoutBlocksNextPageParams {
  block_number: number;
  items_count: number;
}

export interface BlockscoutBlocksApiResponse {
  base_fee_per_gas: string;
  burnt_fees: string;
  burnt_fees_percentage: number;
  difficulty: string;
  gas_limit: string;
  gas_target_percentage: number;
  gas_used: string;
  gas_used_percentage: number;
  hash: string;
  height: number;
  miner: {
    hash: string;
    implementation_name: null | string;
    is_contract: boolean;
    is_verified: null | boolean;
    name: string;
    private_tags: Array<any>;
    public_tags: Array<any>;
    watchlist_names: Array<any>;
  };
  nonce: string;
  parent_hash: string;
  priority_fee: string;
  rewards: Array<any>;
  size: number;
  timestamp: string;
  total_difficulty: string;
  tx_count: number;
  tx_fees: string;
  type: string;
  uncles_hashes: Array<any>;
  withdrawals_count: null | number;
}

export interface BlockscoutBlocksApiResponseMain {
  items: BlockscoutBlocksApiResponse[];
  next_page_params: BlockscoutBlocksNextPageParams;
}

export interface BlockscoutTransactionApiResponse {
  // Relevant for whole tx
  timestamp: string;
  fee: { type: string; value: string };
  gas_limit: string;
  block: number;
  status: string;
  confirmations: number;
  hash: string;
  position: number;
  nonce: number;
  raw_input: string;
  confirmation_duration: number[];
  has_error_in_internal_txs: boolean;

  // Fees / gas
  gas_used: string;
  gas_price: string;
  base_fee_per_gas: string;
  tx_burnt_fee: string | null;
  priority_fee: string | null;
  max_fee_per_gas: string | null;
  max_priority_fee_per_gas: string | null;

  // Can change if relay, erc725x etc.
  method: string | null;
  to: AddressDetails | null;
  from: AddressDetails;
  value: string;
  decoded_input: DecodedInput | null;

  // Other
  type: number;
  exchange_rate: any;
  result: "pending" | string;
  token_transfers: any[];
  tx_types: string[];
  created_contract: {
    hash: string;
    implementation_name: string | null;
    is_contract: boolean;
    is_verified: boolean | null;
    name: boolean | null;
    private_tags: string[];
    public_tags: string[];
    watchlist_names: string[];
  } | null;

  actions: any[];
  token_transfers_overflow: boolean;

  revert_reason: any;

  tx_tag: any;

  // note: this is to make our life easier but this is not existing at this stage
  network: string;
}

export interface AddressDetails {
  hash?: string;
  implementation_name: string | null;
  is_contract: boolean;
  is_verified: boolean | null;
  name: string | null;
  private_tags: string[];
  public_tags: string[];
  watchlist_names: string[];
  ens_domain_name: string | null;
}

export interface DecodedInput {
  method_call: string | null; // Function signature not hashed
  method_id: string; // 4c8a4e74 -> without prefix 0x
  parameters: Parameter[];
}

interface Parameter {
  name: string;
  type: string;
  value: string;
}

export interface BlockscoutAddressApiResponse {
  block_number_balance_updated_at: number;
  coin_balance: string;
  creation_tx_hash: string;
  creator_address_hash: string;
  exchange_rate: null;
  has_beacon_chain_withdrawals: boolean;
  has_custom_methods_read: boolean;
  has_custom_methods_write: boolean;
  has_decompiled_code: boolean;
  has_logs: boolean;
  has_methods_read: boolean;
  has_methods_read_proxy: boolean;
  has_methods_write: boolean;
  has_methods_write_proxy: boolean;
  has_token_transfers: boolean;
  has_tokens: boolean;
  has_validated_blocks: boolean;
  hash: string;
  implementation_address: null;
  implementation_name: null;
  is_contract: boolean;
  is_verified: boolean;
  name: string | null;
  private_tags: any[];
  public_tags: any[];
  token: null;
  watchlist_address_id: null;
  watchlist_names: any[];
}
