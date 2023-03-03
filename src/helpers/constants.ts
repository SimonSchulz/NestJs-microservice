export enum CalculationMode {
  DIFFERENTIATED = 'DIFFERENTIATED',
  ANNUITY = 'ANNUITY',
}

export enum PaymentSystem {
  MAESTRO = 'MAESTRO',
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD'
}

export enum CardStatus {
  BLOCKED = 'BLOCKED',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  INDIVIDUAL_CONDITIONS = 'INDIVIDUAL_CONDITIONS',
}

export enum ErrorMessage {
  INCORRECT_ID = 'incorrect user id',
  NOT_FOUND_CARDS = 'Not found credit cards',
}