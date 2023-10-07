import {AmexBadge} from '../../assets/badges/AmexBadge';
import {DinnersBadge} from '../../assets/badges/DinnersBadge';
import {HiperBadge} from '../../assets/badges/HiperBadge';
import {MasterBadge} from '../../assets/badges/MasterBadge';
import {MoneyBadge} from '../../assets/badges/MoneyBadge';
import {VisaBadge} from '../../assets/badges/VisaBadge';

export interface BadgeProps {
  name: BadgeName;
}

export function Badge({name}: BadgeProps) {
  const BadgeContent = badgeRegistry[name];

  return <BadgeContent />;
}

const badgeRegistry = {
  amex: AmexBadge,
  dinners: DinnersBadge,
  hiper: HiperBadge,
  master: MasterBadge,
  money: MoneyBadge,
  visa: VisaBadge,
};

type BadgeType = typeof badgeRegistry;
export type BadgeName = keyof BadgeType;
