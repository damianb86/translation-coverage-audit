# Requirements

## Functional requirements
- FR-001: La app debe renderizarse como embedded app dentro de Shopify Admin usando React Router, App Bridge y Polaris web components.
- FR-002: El dashboard debe mostrar estado general, metricas y cola principal de translation gap.
- FR-003: La pantalla Coverage audit debe mostrar datos de ejemplo, prioridades, acciones visuales y limites del MVP.
- FR-004: La pantalla Locales debe validar server-side workflowName, ownerEmail y threshold.
- FR-005: La app debe mostrar estados loading, empty, success, error, validation error y permission error.
- FR-006: La integracion Shopify debe usar loaders/actions autenticados con authenticate.admin para rutas /app.
- FR-007: La app debe documentar y comprobar scopes requeridos: read_products, read_translations.
- FR-008: Las respuestas GraphQL futuras deben manejar errors top-level y userErrors sin marcar exito falso.
- FR-009: La app debe incluir fixtures, mocks MSW, tests unitarios, componentes, E2E y accesibilidad.

## Pantallas necesarias
- Dashboard: coverage by locale and resource.
- Coverage audit: missing/stale field table.
- Locales: priority locale settings.
- Help/QA: translation constraints and manual checks.

## Acciones del merchant
- Abrir dashboard.
- Revisar cola operativa.
- Cambiar escenario visual en workspace.
- Validar settings.
- Revisar QA y limites.

## Datos creados/leidos/actualizados/eliminados
- Lee datos mockeados en MVP visual.
- Persiste solo sesiones OAuth via Prisma.
- Define AppSetting y AppAuditEvent para la siguiente iteracion.
- No borra datos merchant.

## Shopify Admin API
- translatableResources and translatableResource queries require read_translations.
- translationsRegister remains future optional write path and would require write_translations.
- Product and collection visibility should prioritize storefront-facing resources.

## Scopes requeridos
- Pedir: read_products, read_translations
- No pedir: write_translations, read_customers, read_orders

## Webhooks
- app/uninstalled
- app/scopes_update

## Billing
- No requerido para MVP visual. Futuro: plan mensual simple despues de validar funcionalidad real.

## AI
- No se usa IA en MVP. No se requieren API keys ni prompts.

## Non-functional requirements
- Seguridad: tokens solo server-side, secrets solo env vars.
- Privacidad: no customer/order data salvo que sea imprescindible en futuras versiones.
- Performance: paginacion cursor-based para listados reales.
- Accesibilidad: labels, foco visible, axe en preview.
- Resiliencia: estados recuperables para errores API, scopes y sesion.
- Mantenibilidad: config centralizada por app y tests trazables.
- Observabilidad: AppAuditEvent sin PII para acciones futuras.
- Localizacion: UI en ingles inicial, copy aislado para futura i18n.
