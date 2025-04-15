interface IAppStorageSchema {
  app_version: string;
  user_token: string;
  last_sync: string;
  onboarding_completed: boolean;
  device_language: string;
  last_seen_notification_id: string;
  debug_mode: boolean;
  custom_theme: string;
  analytics_opt_in: boolean;
  offline_mode_enabled: boolean;
}

type IAppStorageKey = keyof IAppStorageSchema;

interface IStore {
  data: Partial<IAppStorageSchema>;
  setItem: <K extends IAppStorageKey>(
    key: K,
    value: IAppStorageSchema[K]
  ) => void;
  getItem: <K extends IAppStorageKey>(
    key: K
  ) => IAppStorageSchema[K] | undefined;
  updateItem: <K extends IAppStorageKey>(
    key: K,
    updater: (prev: IAppStorageSchema[K] | undefined) => IAppStorageSchema[K]
  ) => void;
  removeItem: (key: IAppStorageKey) => void;
}
export type {
  IAppStorageSchema,
  IAppStorageKey,
  IStore,
  IStore as IAppStorageStore,
  IStore as IAppStorageActions,
  IStore as IAppStorageState,
};
