
import hynixLogo from './hynix.png';
import samsungLogo from './samsung.png';


export enum Company {
  hynix='SK하이닉스' ,
  samsung='삼성전자',
  none='고독기업'
}

export const companyImageMap : {[k in Company] : string} = {
  [Company.hynix] : hynixLogo,
  [Company.samsung] : samsungLogo,
  [Company.none] : '',
};
