// @flow
import { observable, computed } from 'mobx';
import BigNumber from 'bignumber.js';
import { AssuranceMode, AssuranceModeOption } from '../types/transactionAssuranceTypes';
import { assuranceModes, assuranceModeOptions } from '../config/transactionAssuranceConfig';

export class Wallet {

  id: string = '';
  address: string = 'current address';
  @observable name: string = '';
  @observable amount: BigNumber;
  @observable assurance: AssuranceModeOption;
  @observable hasPassword: boolean;
  @observable passwordUpdateDate: Date;
  @observable syncStatus: boolean = false;

  constructor(data: {
    id: string,
    name: string,
    amount: BigNumber,
    assurance: AssuranceModeOption,
    hasPassword: boolean,
    passwordUpdateDate: Date,
  }) {
    Object.assign(this, data);
  }

  @computed get hasFunds(): boolean {
    return this.amount > new BigNumber(0);
  }

  @computed get assuranceMode(): AssuranceMode {
    switch (this.assurance) {
      case assuranceModeOptions.NORMAL: return assuranceModes.NORMAL;
      case assuranceModeOptions.STRICT: return assuranceModes.STRICT;
      default: return assuranceModes.NORMAL;
    }
  }

}
