export type SdkPackage = {
  id: "android" | "ios" | "expo";
  label: string;
  tabLabel?: string;
  registry: string;
  registryUrl: string;
  coordinates: string;
  version: string;
  installLine: string;
  installLanguage: "groovy" | "ruby" | "shell";
  repoUrl: string;
};

export const PACKAGES: SdkPackage[] = [
  {
    id: "android",
    label: "Android",
    registry: "Maven Central",
    registryUrl:
      "https://central.sonatype.com/artifact/ro.amsemnat/am-semnat-sdk",
    coordinates: "ro.amsemnat:am-semnat-sdk",
    version: "0.1.+",
    installLine: "implementation 'ro.amsemnat:am-semnat-sdk:0.1.+'",
    installLanguage: "groovy",
    repoUrl: "https://github.com/am-semnat/am-semnat-android-sdk",
  },
  {
    id: "ios",
    label: "iOS",
    registry: "CocoaPods",
    registryUrl: "https://cocoapods.org/pods/AmSemnatSDK",
    coordinates: "AmSemnatSDK",
    version: "~> 0.1",
    installLine: "pod 'AmSemnatSDK', '~> 0.1'",
    installLanguage: "ruby",
    repoUrl: "https://github.com/am-semnat/am-semnat-ios-sdk",
  },
  {
    id: "expo",
    label: "Expo / React Native",
    tabLabel: "Expo / RN",
    registry: "npm",
    registryUrl: "https://www.npmjs.com/package/@amsemnat/expo-sdk",
    coordinates: "@amsemnat/expo-sdk",
    version: "^0.1.1",
    installLine: "npm install @amsemnat/expo-sdk",
    installLanguage: "shell",
    repoUrl: "https://github.com/am-semnat/am-semnat-expo-sdk",
  },
];
