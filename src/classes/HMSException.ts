export class HMSException {
  code: number;
  description: string;
  message: string;
  name: string;
  action: string;
  isTerminal: boolean;

  constructor(params: {
    code: number;
    description: string;
    message: string;
    name: string;
    action: string;
    isTerminal: boolean;
  }) {
    this.code = params.code;
    this.description = params.description;
    this.message = params.message;
    this.name = params.name;
    this.action = params.action;
    this.isTerminal = params.isTerminal;
  }
}
