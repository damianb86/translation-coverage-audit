export const APP_CONFIG = {
  name: "Translation Coverage Audit",
  shortName: "Translation Audit",
  slug: "translation-coverage-audit",
  tagline: "Find untranslated or stale storefront content before shoppers do.",
  problem: "Merchants with multiple locales lack a focused workbench for missing, outdated and visible translations.",
  persona: "International growth manager or small merchant selling into multiple languages/markets.",
  value: "Translation completeness dashboard without becoming a generic machine translation app.",
  primaryFlow: "Choose locale, scan visible resources, review missing fields first, export gaps and plan updates.",
  color: "#be123c",
  mainObject: "Translation gap",
  workspaceLabel: "Coverage audit",
  settingsLabel: "Locales",
  requiredScopes: ["read_products","read_translations"],
  doNotRequestScopes: ["write_translations","read_customers","read_orders"],
  integrations: [
  "translatableResources and translatableResource queries require read_translations.",
  "translationsRegister remains future optional write path and would require write_translations.",
  "Product and collection visibility should prioritize storefront-facing resources."
],
  mvpFeatures: [
  "Locale coverage dashboard by resource type.",
  "Gap table for missing, stale and low-priority fields.",
  "Settings for locales, markets and resource priority.",
  "Explicit no-AI/no-auto-translation v1 stance."
],
  outOfScope: [
  "Machine translation in MVP.",
  "Writing translations.",
  "App proxy translation support."
],
  futureFeatures: [
  "CSV export and import review.",
  "Optional machine translation draft generation.",
  "Market-specific coverage.",
  "Translation digest validation before writes."
],
  screens: [
  "Dashboard: coverage by locale and resource.",
  "Coverage audit: missing/stale field table.",
  "Locales: priority locale settings.",
  "Help/QA: translation constraints and manual checks."
],
  sampleRows: [
  [
    "Product title",
    "fr",
    "Missing",
    "High"
  ],
  [
    "Collection description",
    "es",
    "Outdated",
    "Medium"
  ],
  [
    "Blog handle",
    "de",
    "Not translatable",
    "Low"
  ]
],
  metrics: [
  [
    "Locales audited",
    "4"
  ],
  [
    "Visible gaps",
    "63"
  ],
  [
    "Coverage",
    "82%"
  ]
],
  settingsFields: {
  "workflowName": "French storefront audit",
  "thresholdLabel": "Minimum coverage percent",
  "thresholdDefault": "90",
  "ownerEmail": "localization@example.com"
},
  risks: [
  "Not every Shopify field is translatable.",
  "Write support requires digest-safe translationsRegister flow and extra scope."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
