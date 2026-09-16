const KEY = 'opentik-crm-v2.settings'

export function loadSettings() {
  try { return JSON.parse(localStorage.getItem(KEY)) ?? { companyName: 'OpenTik Smart Systems' } }
  catch { return { companyName: 'OpenTik Smart Systems' } }
}

export function saveSettings(settings) { localStorage.setItem(KEY, JSON.stringify(settings)) }
