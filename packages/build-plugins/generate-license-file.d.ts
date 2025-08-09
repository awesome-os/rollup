import type { PluginImpl } from 'rollup';
interface LicenseHandler {
    collectLicenses: PluginImpl;
    writeLicense: PluginImpl;
}
export default function getLicenseHandler(directory: string): LicenseHandler;
export {};
