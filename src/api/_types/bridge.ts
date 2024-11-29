import { BridgeComplianceKycStatus, BridgeComplianceTosStatus } from '@/api/_enums/bridge';

enum BridgeCurrencyEnum {
  USD = 'usd',
  USDC = 'usdc',
}

type BridgePaymentRail = 'ach' | 'wire' | 'internal_transfer' | 'crypto';
type BridgeCurrency = BridgeCurrencyEnum.USD | BridgeCurrencyEnum.USDC; 

type PrefundedAccountBalanceItem = {
  id: string;
  available_balance: string;
  currency: BridgeCurrency;
  name: string;
};

type GetPrefundedAccountBalanceResponse = {
  data: PrefundedAccountBalanceItem[];
};

type CreatePrefundedAccountTransferBody = {
  amount: number;
  on_behalf_of: string;
  developer_fee?: number;
  source: {
    payment_rail: BridgePaymentRail;
    currency: BridgeCurrency;
    prefunded_account_id: string;
  };
  destination: {
    payment_rail: BridgePaymentRail;
    currency: BridgeCurrency;
    to_address: string;
  };
};

type CreatePrefundedAccountTransferResponse = any;

type GetComplianceStatusResponse = {
  kycLink: string;
  tosLink: string;
  kycStatus: BridgeComplianceKycStatus;
  tosStatus: BridgeComplianceTosStatus;
};

export type {
  BridgePaymentRail,
  BridgeCurrency,
  PrefundedAccountBalanceItem,
  GetPrefundedAccountBalanceResponse,
  CreatePrefundedAccountTransferBody,
  CreatePrefundedAccountTransferResponse,
  GetComplianceStatusResponse,
};

export { BridgeCurrencyEnum };
