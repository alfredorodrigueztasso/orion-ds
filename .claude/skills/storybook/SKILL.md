---
name: storybook
description: Inicia o reinicia el servidor de Storybook de forma confiable. Detecta puertos zombie, limpia cache si es necesario. Auto-triggers cuando el usuario dice "arranca storybook", "reinicia storybook", "storybook no carga", "storybook se colgó", "storybook reset", "abre storybook", "inicia storybook".
allowed-tools: ["Bash", "AskUserQuestion"]
---

# Storybook — Arranque Confiable

Inicia o reinicia el servidor de Storybook resolviendo los problemas más comunes: puertos zombie,
cache corrupto y procesos colgados.

## Modos disponibles

| Modo | Cuándo usarlo | Tiempo |
|------|--------------|--------|
| **Normal** | Primera vez, puerto libre | ~5s |
| **Restart** | Storybook se colgó o "Connection lost" | ~5s |
| **Reset** | Loader infinito, previews no cargan, errores raros | ~30s |

## Execution Steps

### Paso 1 — Detectar estado actual
Verificar si el puerto 6006 está ocupado:
```bash
lsof -ti :6006 2>/dev/null | head -1
```
- Si hay output → puerto ocupado (proceso zombie probable)
- Si no hay output → puerto libre

### Paso 2 — Preguntar modo al usuario
Usar AskUserQuestion con las opciones según el estado detectado:
- Si puerto libre: ofrecer "Normal" o "Reset completo"
- Si puerto ocupado: ofrecer "Restart (matar zombie)" o "Reset completo"

### Paso 3 — Ejecutar según modo elegido

**Modo Normal** (puerto libre):
```bash
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && npm run storybook
```

**Modo Restart** (mata zombie + arranca):
```bash
lsof -ti :6006 | xargs kill -9 2>/dev/null; true
sleep 1
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && npm run storybook
```

**Modo Reset** (mata + limpia cache + arranca):
```bash
lsof -ti :6006 | xargs kill -9 2>/dev/null; true
rm -rf "/Users/alfredo/Documents/AI First DS Library/packages/react/node_modules/.cache/storybook"
sleep 1
cd "/Users/alfredo/Documents/AI First DS Library/packages/react" && npm run storybook
```

### Paso 4 — Confirmar arranque exitoso
Storybook imprime en consola cuando está listo. Esperar la línea:
```
Storybook X.X.X for react-vite started
Local:  http://localhost:6006/
```
Informar al usuario la URL cuando aparezca.

## Comandos directos disponibles (sin preguntar)

Si el usuario dice explícitamente qué modo quiere, ejecutarlo directamente:
- "restart storybook" / "reinicia storybook" → Modo Restart
- "reset storybook" / "storybook reset" → Modo Reset
- "arranca storybook" / "abre storybook" → Modo Normal (o Restart si puerto ocupado)

## Auto-Trigger Patterns

Este skill se activa cuando el usuario dice:
- "arranca storybook" / "inicia storybook" / "abre storybook"
- "reinicia storybook" / "restart storybook"
- "storybook no carga" / "storybook se colgó" / "storybook se cayó"
- "reset storybook" / "storybook reset"
- "los previews no cargan" / "loader infinito en storybook"
- "connection lost storybook"
- `/storybook`

## Causas comunes de fallo y soluciones

| Síntoma | Causa | Solución |
|---------|-------|----------|
| Loader infinito en previews | `ImplicitActionsDuringRendering` (argTypesRegex) | Ya corregido en preview.ts |
| "Connection lost" | Proceso vite crasheó silenciosamente | Restart |
| Puerto 6006 ocupado al reiniciar | Proceso zombie no terminó | Restart (mata por PID) |
| Estilos incorrectos / tokens viejos | dist/styles.css desactualizado | `npm run build` en packages/react |
| Previews en blanco tras cambios masivos | Cache de story index corrupto | Reset (borra node_modules/.cache/storybook) |
| WARN incompatible packages al iniciar | Versiones de addons desincronizadas | `pnpm install` desde la raíz |

## URL de acceso

- Local: http://localhost:6006
- Red: http://192.168.1.112:6006 (varía según red)

## Referencias

- Config: `packages/react/.storybook/main.ts`
- Preview: `packages/react/.storybook/preview.ts`
- Scripts: `packages/react/package.json` → `storybook`, `storybook:restart`, `storybook:reset`
