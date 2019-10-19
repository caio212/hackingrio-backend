import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { cloneDeep } from 'lodash';
import { ConfigInterface } from './config.interface';

export class ConfigService {
  private readonly envConfig: ConfigInterface;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath)) as unknown as ConfigInterface;
  }

  getConfig() {
    return cloneDeep(this.envConfig);
  }
}