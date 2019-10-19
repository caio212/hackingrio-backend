import { parse } from 'dotenv';
import { readFileSync } from 'fs';
import { cloneDeep } from 'lodash';
import { join } from 'path';
import { ConfigInterface } from './config.interface';

export class ConfigService {
  private readonly envConfig: ConfigInterface;

  constructor() {
    const fileName = `${process.env.NODE_ENV || 'development'}.env`;
    const folderPath = '../../environment';
    const filePath = join(__dirname, folderPath, fileName);
    const file = readFileSync(filePath);
    this.envConfig = parse(file) as unknown as ConfigInterface;
  }

  getConfig() {
    return cloneDeep(this.envConfig);
  }
}