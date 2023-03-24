export interface ProductFlowmeterProps {
  name: string;
  description: string;
  modelNo: string;
  nominalDiameter: string;
  maxFlowRate: string;
  liquidAccuracy: string;
  tempAccuracy: string;
  densityAccuracy: string;
  zeroStability: string;
  repeatability: string;
  mwp: string;
  operationVoltage: string;
  ingressProtection: string;
  fluidTemp: string;
  operatingTemp: string;
  vibratingTube: string;
  endConnection: string;
  commOutput: string;
  exMark: string;
  warranty: string;
  certificate: string;
  packageSize: string;
  gw: string;
  remark: string;
  highlight?: boolean;
  highlightLanding?: boolean;
  image: string;
}

export interface ProductTransmitterProps {
  name: string;
  description: string;
  operatingTemp: string;
  rh: string;
  atmosphericPressure: string;
  operatingVoltage: string;
  commPort: string;
  exMark: string;
  highlight?: boolean;
  highlightLanding?: boolean;
  image: string;
}

export interface AllProductProps
  extends Partial<ProductFlowmeterProps>,
    Partial<ProductTransmitterProps> {}
