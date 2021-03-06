export namespace HAP {
  export interface Accessory {
    UUID: string
    displayName: string

    on(...args: any[]): void
    getService(...args: any[]): Service
    addService(...args: any[]): Service
    getServiceByUUIDAndSubType(...args: any[]): Service
    updateReachability(reachable: boolean): void
    setCharacteristic(...args: any[]): Service
  }

  export interface Service {
    AccessoryInformation: void

    setCharacteristic(...args: any[]): Service
    getCharacteristic(...args: any[]): Characteristic
  }

  export interface Characteristic {
    [key: string]: any
    on(
      eventType: 'get',
      callback: (err: any, value: any) => void
    ): Characteristic
    on(
      eventType: 'set',
      handler: (value: any, callback: (err?: Error) => void) => void
    ): Characteristic
    updateValue(
      newValue: boolean | string | number,
      callback?: () => void,
      context?: any
    ): Characteristic
  }

  export interface Log {
    (...args: any[]): void
    error(...args: any[]): void
    debug(...args: any[]): void
    info(...args: any[]): void
  }

  export interface AccessoryConfig {
    [key: string]: any
  }

  export interface Platform {
    on(...args: any[]): void
    registerPlatformAccessories(...args: any[]): void
  }
}

class Hap {
  // @ts-ignore
  public PlatformAccessory: new (
    displayName: string,
    uuid: string,
    category: number
  ) => HAP.Accessory
  // @ts-ignore
  public Service: {
    [key: string]: any
  }
  // @ts-ignore
  public Characteristic: {
    [key: string]: any
  }
  // @ts-ignore
  public UUIDGen: {
    generate(input: string): string
  }
  // @ts-ignore
  public AccessoryCategories: {
    [key: string]: number
  }
}

export const hap = new Hap()
