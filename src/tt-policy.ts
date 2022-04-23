let policy: TrustedTypePolicy

const getOrCreatePolicy = () => {
  if (policy) return policy
  policy = window.trustedTypes?.createPolicy('tt-cra-app', { createHTML: (x) => x }) as TrustedTypePolicy
  return policy
}

export const __allowUnsafeValue = (value: string) => {
  return getOrCreatePolicy().createHTML(value)
}
