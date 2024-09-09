type ISO3166Alpha2Country = 'GB' | 'US' | 'FR' | 'DE'; // Add more as needed
type ISO4217Currency = 'USD'; // Add more as needed
type BridgeComplianceKycStatus =
  | 'approved'
  | 'rejected'
  | 'pending'
  | 'not_started'
  | 'incomplete'
  | 'awaiting_ubo'
  | 'manual_review'
  | 'under_review'
  | 'approved'
  | 'rejected';
type BridgeComplianceTosStatus = 'accepted' | 'pending';

type TransferStatus = 'PENDING' | 'COMPLETED' | 'FAILED';
type PersonRole =
  | 'MEMBER'
  | 'DEVELOPER'
  | 'BOOKKEEPER'
  | 'ADMIN'
  | 'SUPER_ADMIN';

type Address = {
  street1: string;
  street2?: string;
  street3?: string;
  city: string;
  postcode: string;
  state?: string;
  country: ISO3166Alpha2Country;
};

type RegisteredAddress = Address;

type BillingAddress = Address & {
  firstName: string;
  lastName: string;
};

type ShippingAddress = Address & {
  firstName: string;
  lastName: string;
};

type Company = {
  name: string;
  email: string;
  registeredAddress: RegisteredAddress;
};

type Representative = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role?: PersonRole;
};

type Compliance = {
  kycLink: string;
  tosLink: string;
  kycStatus: BridgeComplianceKycStatus;
  tosStatus: BridgeComplianceTosStatus;
};

type MerchantCreateInput = {
  fee: number;
  walletAddress: string;
  company: Company;
  representatives: Representative[];
  compliance?: {
    bridgeCustomerId: string;
    bridgeComplianceId: string;
  };
};

type MerchantCreateOutput = {
  statusCode: number;
  data: Compliance;
};

export type {
  ISO3166Alpha2Country,
  ISO4217Currency,
  BridgeComplianceKycStatus,
  BridgeComplianceTosStatus,
  TransferStatus,
  Address,
  RegisteredAddress,
  BillingAddress,
  ShippingAddress,
  Company,
  Compliance,
  MerchantCreateInput,
  MerchantCreateOutput,
};
