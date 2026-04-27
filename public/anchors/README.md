# Trust anchors — DGEP

Trust anchors used by `/unelte/verificare-pdf` to verify PAdES B-B
signatures produced by Romanian CEI cards.

| File | Subject | SHA-256 fingerprint |
|---|---|---|
| `ro-cei-mai-root-ca.cer` | `CN=RO CEI MAI Root-CA, OU=DGEP, O=Ministerul Afacerilor Interne, C=RO` | `b7:a7:66:f5:22:18:c8:08:3e:93:6f:9a:b0:85:e9:7c:67:67:1e:cd:4f:d3:06:9b:64:1c:63:80:72:e4:4b:1d` |
| `ro-cei-mai-sub-ca.cer` | `CN=RO CEI MAI Sub-CA, OU=DGEP, O=Ministerul Afacerilor Interne, C=RO` | `b5:12:f9:2a:6d:15:60:08:d9:3a:b5:ff:96:90:be:87:4a:fc:34:01:ce:03:06:f4:77:f1:87:79:95:93:da:80` |

- **Source:** <https://hub.mai.gov.ro/cei/info/descarca-cert>
- **Format:** DER (binary X.509)
- **Last refreshed:** 2026-04-27

When MAI rotates a CA, refetch from the source above, replace the
files, update the fingerprint table, and bump the "last refreshed"
date both here and in the on-page disclosure at
`app/unelte/verificare-pdf/page.tsx`.
