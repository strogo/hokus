import { WorkspaceHeader } from "./../../global-types";

export interface SiteSource {
  initialize?(): void;
  dispose?(): void;
  listWorkspaces(): Promise<Array<WorkspaceHeader>>;
  canSyncWorkspace?(workspaceKey: string): Promise<boolean|null>;
  syncWorkspace?(workspaceKey: string): Promise<void>;
  mountWorkspace?(workspaceKey: string): Promise<void>;
  canCreateWorkspaces(): boolean;
  canDeleteWorkspace?(workspaceKey: string): boolean;
}