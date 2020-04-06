
import hynixLogo from './hynix.png';
import samsungLogo from './samsung.png';


export enum Company {
  hynix ,
  samsung,
  none
}

export const companyImageMap : {[k in Company] : string} = {
  [Company.hynix] : hynixLogo,
  [Company.samsung] : samsungLogo,
  [Company.none] : '',
};
