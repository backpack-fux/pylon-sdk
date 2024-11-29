enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

enum ISO3166Alpha2Country {
  GB = 'GB',
  US = 'US',
  FR = 'FR',
  DE = 'DE',
  CA = 'CA',
  AU = 'AU',
  JP = 'JP',
  IT = 'IT',
  ES = 'ES',
  NL = 'NL',
  CH = 'CH',
  SE = 'SE',
  DK = 'DK',
  NO = 'NO',
  BE = 'BE',
  AT = 'AT',
  FI = 'FI',
  GR = 'GR',
  PT = 'PT',
  IE = 'IE',
  LU = 'LU',
  IS = 'IS',
  AL = 'AL',
  AD = 'AD',
  AM = 'AM',
  BY = 'BY',
  BA = 'BA',
  BG = 'BG',
  HR = 'HR',
  CY = 'CY',
  CZ = 'CZ',
  EE = 'EE',
  GE = 'GE',
  HU = 'HU',
  KZ = 'KZ',
  XK = 'XK',
  LV = 'LV',
  LI = 'LI',
  LT = 'LT',
  MK = 'MK',
  MT = 'MT',
  MD = 'MD',
  MC = 'MC',
  ME = 'ME',
  PL = 'PL',
  RO = 'RO',
  RU = 'RU',
  SM = 'SM',
  RS = 'RS',
  SK = 'SK',
  SI = 'SI',
  TR = 'TR',
  UA = 'UA',
  VA = 'VA',
  // Add more as needed
}

enum ISO3166Alpha3Country {
  GBR = 'GBR',
  USA = 'USA',
  FRA = 'FRA',
  DEU = 'DEU',
  CAN = 'CAN',
  AUS = 'AUS',
  JPN = 'JPN',
  ITA = 'ITA',
  ESP = 'ESP',
  NLD = 'NLD',
  CHE = 'CHE',
  SWE = 'SWE',
  DNK = 'DNK',
  NOR = 'NOR',
  BEL = 'BEL',
  AUT = 'AUT',
  FIN = 'FIN',
  GRC = 'GRC',
  PRT = 'PRT',
  IRL = 'IRL',
  LUX = 'LUX',
  ISL = 'ISL',
  ALB = 'ALB',
  AND = 'AND',
  ARM = 'ARM',
  BLR = 'BLR',
  BIH = 'BIH',
  BGR = 'BGR',
  HRV = 'HRV',
  CYP = 'CYP',
  CZE = 'CZE',
  EST = 'EST',
  GEO = 'GEO',
  HUN = 'HUN',
  KAZ = 'KAZ',
  LVA = 'LVA',
  LIE = 'LIE',
  LTU = 'LTU',
  MKD = 'MKD',
  MLT = 'MLT',
  MDA = 'MDA',
  MCO = 'MCO',
  MNE = 'MNE',
  POL = 'POL',
  ROU = 'ROU',
  RUS = 'RUS',
  SMR = 'SMR',
  SRB = 'SRB',
  SVK = 'SVK',
  SVN = 'SVN',
  TUR = 'TUR',
  UKR = 'UKR',
  VAT = 'VAT',
  // Add more as needed
}

enum ISO3166Alpha2State {
  AL = 'AL',
  AK = 'AK',
  AZ = 'AZ',
  AR = 'AR',
  CA = 'CA',
  CO = 'CO',
  CT = 'CT',
  DE = 'DE',
  FL = 'FL',
  GA = 'GA',
  HI = 'HI',
  ID = 'ID',
  IL = 'IL',
  IN = 'IN',
  IA = 'IA',
  KS = 'KS',
  KY = 'KY',
  LA = 'LA',
  ME = 'ME',
  MD = 'MD',
  MA = 'MA',
  MI = 'MI',
  MN = 'MN',
  MS = 'MS',
  MO = 'MO',
  MT = 'MT',
  NE = 'NE',
  NV = 'NV',
  NH = 'NH',
  NJ = 'NJ',
  NM = 'NM',
  NY = 'NY',
  NC = 'NC',
  ND = 'ND',
  OH = 'OH',
  OK = 'OK',
  OR = 'OR',
  PA = 'PA',
  RI = 'RI',
  SC = 'SC',
  SD = 'SD',
  TN = 'TN',
  TX = 'TX',
  UT = 'UT',
  VT = 'VT',
  VA = 'VA',
  WA = 'WA',
  WV = 'WV',
  WI = 'WI',
  WY = 'WY',
}

enum ISO4217Currency {
  USD = 'USD',
  // Add more as needed
}

enum TransferStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

enum PersonRole {
  MEMBER = 'MEMBER',
  DEVELOPER = 'DEVELOPER',
  BOOKKEEPER = 'BOOKKEEPER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

enum Network {
  POLYGON = 'POLYGON',
  ETHEREUM = 'ETHEREUM',
  ARBITRUM = 'ARBITRUM',
  BASE = 'BASE',
  OPTIMISM = 'OPTIMISM',
}

enum StableCurrency {
  USDC = 'USDC',
  USDT = 'USDT',
  DAI = 'DAI',
}

enum FiatCurrency {
  USD = 'USD',
}

export {
  SortOrder,
  ISO3166Alpha2Country,
  ISO3166Alpha3Country,
  ISO3166Alpha2State,
  ISO4217Currency,
  TransferStatus,
  PersonRole,
  Network,
  StableCurrency,
  FiatCurrency,
};
